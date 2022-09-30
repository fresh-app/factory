import { Terminal } from 'xterm-headless'
import { IPty } from 'node-pty'

export class TerminalSession {
  private exitPromise: Promise<number>
  private displayTerminal = this.createTerminal()
  private expectationTerminal = this.createTerminal()
  constructor(private readonly child: IPty) {
    child.onData((data) => {
      process.stdout.write(data)
      this.displayTerminal.write(data)
      this.expectationTerminal.write(data)
    })
    this.exitPromise = new Promise((resolve) => {
      child.onExit((e) => {
        console.log('Exit code:', e)
        resolve(e.exitCode)
      })
    })
  }
  private createTerminal() {
    return new Terminal({
      allowProposedApi: true,
      cols: 120,
      rows: 30,
    })
  }
  async waitForText(text: string) {
    for (;;) {
      const output = toText(this.expectationTerminal)
      if (output.includes(text)) {
        return
      }
      await new Promise((resolve) => setTimeout(resolve, 100))
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
}
function toText(terminal: Terminal) {
  const buffer = terminal.buffer.active
  const out: string[] = []
  for (let i = 0; i < buffer.length; i++) {
    out.push(buffer.getLine(i)?.translateToString(true) || '')
  }
  return out.join('\n').trimEnd()
}
