import { Generator } from './defineGenerator'

export function getRepoDescription(generator: Generator): string {
  if (generator.repoDescriptionOverride) {
    return generator.repoDescriptionOverride
  }
  const suffix =
    'command' in generator
      ? ' with "' +
        generator.command.replace(/ && cd fresh-app && yarn$/, '') +
        '"'
      : ''
  return (
    (generator.longDescription || generator.description) +
    ', automatically generated everyday' +
    suffix
  )
}
