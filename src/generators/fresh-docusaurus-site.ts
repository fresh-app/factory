import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create docusaurus fresh-app classic --typescript',
    'cd fresh-app',
    'pnpm run build',
  ].join('\n'),
  displayedCommand: 'pnpm create docusaurus classic --typescript',
  description: 'Fresh Docusaurus site',
  frameworkUrl: 'https://docusaurus.io',
  frameworkDocumentationUrl: 'https://docusaurus.io/docs',
  staticOutputDirectory: 'build',
})
