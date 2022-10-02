import { CommandLineParser } from '@rushstack/ts-command-line'
import { RunAction } from './RunAction'
import { ListAction } from './ListAction'
import { UploadResultAction } from './UploadResultAction'

class FreshAppFactoryCommandLine extends CommandLineParser {
  public constructor() {
    super({
      toolFilename: 'factory',
      toolDescription: 'Fresh App Factory',
    })
    this.addAction(new RunAction())
    this.addAction(new ListAction())
    this.addAction(new UploadResultAction())
  }
  protected onDefineParameters(): void {}
}

new FreshAppFactoryCommandLine().execute()
