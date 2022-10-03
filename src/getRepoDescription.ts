import { Generator } from './defineGenerator'

export function getRepoDescription(generator: Generator): string {
  const suffix = generator.displayedCommand
    ? ' with "' + generator.displayedCommand + '"'
    : ''
  return (
    (generator.longDescription || generator.description) +
    ', automatically generated everyday' +
    suffix
  )
}
