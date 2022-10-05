import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'yarn create docusaurus fresh-app classic --typescript',
    'cd fresh-app',
    'yarn build',
  ].join('\n'),
  displayedCommand: 'yarn create docusaurus classic --typescript',
  description: 'Fresh Docusaurus site',
  frameworkUrl: 'https://docusaurus.io',
  frameworkDocumentationUrl: 'https://docusaurus.io/docs',
  staticOutputDirectory: 'build',
})
