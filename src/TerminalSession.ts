import { Terminal } from 'xterm-headless'
import { IPty } from 'node-pty'
import { SerializeAddon } from 'xterm-addon-serialize'

export class TerminalSession {
  private exitPromise: Promise<number>
  private displayTerminal = this.createTerminal()
  private expectationTerminal = this.createTerminal()
  private serializer = new SerializeAddon()
  private exited = false
  constructor(private readonly child: IPty) {
    this.displayTerminal.loadAddon(this.serializer)
    child.onData((data) => {
      process.stdout.write(data)
      this.displayTerminal.write(data)
      this.expectationTerminal.write(data)
    })
    this.exitPromise = new Promise((resolve) => {
      child.onExit((e) => {
        resolve(e.exitCode)
        this.exited = true
      })
    })
  }
  private createTerminal() {
    return new Terminal({
      allowProposedApi: true,
      cols: 120,
      rows: 120,
    })
  }
  async waitForText(text: string) {
    for (;;) {
      const output = toText(this.expectationTerminal)
      if (output.includes(text)) {
        return
      }
      if (this.exited) {
        throw new Error(
          `The generator exited before the text "${text}" was found`,
        )
      }
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
  }
  async getText() {
    let lastText = toText(this.displayTerminal)
    for (;;) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      const text = toText(this.displayTerminal)
      if (text === lastText) {
        return text
      }
      lastText = text
    }
  }
  async type(text: string) {
    this.expectationTerminal = this.createTerminal()
    this.child.write(text)
  }
  async send(text: string) {
    return this.type(text + '\r')
  }
  async end() {
    return this.type('\x04')
  }
  async waitForExit() {
    return this.exitPromise
  }
  serialize() {
    return this.serializer.serialize()
  }
}
function toText(terminal: Terminal) {
  const buffer = terminal.buffer.active
  const out: string[] = []
  for (let i = 0; i < buffer.length; i++) {
    out.push(buffer.getLine(i)?.translateToString(true) || '')
  }
  return out.join('\n').trimEnd()
}
