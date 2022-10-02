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
  repoDescriptionOverride:
    'Fresh Node.js project with Yarn PnP preconfigured with VSCode integrations for TypeScript, ESLint and Prettier, automatically generated everyday',
  frameworkUrl: 'https://yarnpkg.com/',
  frameworkDocumentationUrl: 'https://yarnpkg.com/getting-started',
})
