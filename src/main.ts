import { CommandLineParser } from '@rushstack/ts-command-line'
import { RunAction } from './RunAction'
import { ListAction } from './ListAction'

class FreshAppFactoryCommandLine extends CommandLineParser {
  public constructor() {
    super({
      toolFilename: 'factory',
      toolDescription: 'Fresh App Factory',
    })
    this.addAction(new RunAction())
    this.addAction(new ListAction())
  }
  protected onDefineParameters(): void {}
}

new FreshAppFactoryCommandLine().execute()
