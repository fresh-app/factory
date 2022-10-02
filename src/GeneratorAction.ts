import {
  CommandLineAction,
  CommandLineStringParameter,
} from '@rushstack/ts-command-line'

export abstract class GeneratorAction extends CommandLineAction {
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
