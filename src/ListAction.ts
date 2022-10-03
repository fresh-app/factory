import {
  CommandLineAction,
  CommandLineFlagParameter,
} from '@rushstack/ts-command-line'
import { Generator } from './defineGenerator'
import glob from 'glob'
import { basename } from 'path'
import { getRepoDescription } from './getRepoDescription'

export class ListAction extends CommandLineAction {
  private _json!: CommandLineFlagParameter
  public constructor() {
    super({
      actionName: 'list',
      summary: 'List generators',
      documentation: 'List all the generators',
    })
  }
  protected onDefineParameters(): void {
    this._json = this.defineFlagParameter({
      parameterLongName: '--json',
      description: 'Output in JSON format',
    })
  }
  protected async onExecute(): Promise<void> {
    const files = glob.sync('src/generators/*.ts')
    if (this._json.value) {
      const generators: any[] = []
      for (const file of files.sort()) {
        const name = basename(file, '.ts')
        const generator = await this.loadGenerator(name)
        const description = getRepoDescription(generator)
        generators.push({ name, description, info: generator })
      }
      console.log(JSON.stringify(generators, null, 2))
    } else {
      for (const file of files.sort()) {
        const name = basename(file, '.ts')
        console.log(`${name.padEnd(48)} ${file}`)
        const generator = await this.loadGenerator(name)
        console.log('    ' + getRepoDescription(generator))
      }
    }
  }
  private async loadGenerator(name: string) {
    const { default: generator } = (await import(
      `./generators/${name}.ts`
    )) as { default: Generator }
    return generator
  }
}
