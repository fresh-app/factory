import { CommandLineAction } from '@rushstack/ts-command-line'
import { Generator } from './defineGenerator'
import glob from 'glob'
import { basename } from 'path'
import { getRepoDescription } from './getRepoDescription'

export class ListAction extends CommandLineAction {
  public constructor() {
    super({
      actionName: 'list',
      summary: 'List generators',
      documentation: 'List all the generators',
    })
  }
  protected onDefineParameters(): void {}
  protected async onExecute(): Promise<void> {
    const files = glob.sync('src/generators/*.ts')
    for (const file of files.sort()) {
      const name = basename(file, '.ts')
      console.log(`${name.padEnd(48)} ${file}`)
      const { default: generator } = (await import(
        `./generators/${name}.ts`
      )) as { default: Generator }
      console.log('    ' + getRepoDescription(generator))
    }
  }
}
