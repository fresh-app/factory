import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create docusaurus fresh-app classic --typescript',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create docusaurus classic --typescript',
  description: 'Fresh Docusaurus site',
  frameworkUrl: 'https://docusaurus.io',
  frameworkDocumentationUrl: 'https://docusaurus.io/docs',
  staticOutputDirectory: 'build',
})
