import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh app',
  command: [
    'mkdir fresh-app',
    'cd fresh-app',
    'yarn init -2',
    'yarn set version stable',
    'yarn add --dev typescript eslint prettier',
    'yarn dlx @yarnpkg/sdks vscode',
  ].join('\n'),
})
