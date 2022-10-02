import {
  CommandLineAction,
  CommandLineParser,
  CommandLineStringParameter,
} from '@rushstack/ts-command-line'
import { spawn } from 'node-pty'
import execa from 'execa'
import { TerminalSession } from './TerminalSession'
import { Generator } from './defineGenerator'

class FreshAppFactoryCommandLine extends CommandLineParser {
  public constructor() {
    super({
      toolFilename: 'factory',
      toolDescription: 'Fresh App Factory',
    })
    this.addAction(new RunAction())
  }
  protected onDefineParameters(): void {}
}

abstract class GeneratorAction extends CommandLineAction {
  private _generator!: CommandLineStringParameter
  protected onDefineParameters(): void {
    this._generator = this.defineStringParameter({
      parameterLongName: '--generator',
      parameterShortName: '-g',
      argumentName: 'GENERATOR',
      description: 'Generator to use',
      required: true,
    })
  }
  protected get generator(): string {
    return this._generator.value!
  }
}

class RunAction extends GeneratorAction {
  constructor() {
    super({
      actionName: 'run',
      summary: 'Run a generator',
      documentation: 'Run a generator',
    })
  }

  protected async onExecute(): Promise<void> {
    console.log('=> Running generator', this.generator)
    const { default: generator } = (await import(
      `./generators/${this.generator}.ts`
    )) as { default: Generator }

    const child = spawn('bin/runner', [], {
      name: 'xterm-color',
      cols: 120,
      rows: 30,
    })
    const session = new TerminalSession(child)
    await session.waitForText('workspace$')
    if ('script' in generator) {
      await generator.script(session)
    } else {
      const bashCommand = `bash -exc '${generator.command.replace(
        /'/g,
        "'\\''",
      )}' < /dev/null && exit`
      await session.send(bashCommand)
    }
    await session.waitForExit()
  }

  private async run(command: string): Promise<void> {
    console.log('$', command)
    await execa(command, { shell: true, stdio: 'inherit' })
  }
}

new FreshAppFactoryCommandLine().execute()
