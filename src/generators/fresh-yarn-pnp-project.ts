import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'mkdir fresh-app',
    'cd fresh-app',
    'yarn init -2',
    'yarn set version stable',
    'yarn add --dev typescript eslint prettier',
    'yarn dlx @yarnpkg/sdks vscode',
  ].join('\n'),
  description: 'Fresh app',
  longDescription:
    'Fresh Node.js project, with Yarn PnP, preconfigured with VSCode integrations for TypeScript, ESLint and Prettier',
  frameworkUrl: 'https://yarnpkg.com/',
  frameworkDocumentationUrl: 'https://yarnpkg.com/getting-started',
})
