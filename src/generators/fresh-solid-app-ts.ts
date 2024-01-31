import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpx degit solidjs/templates/ts fresh-app',
    'cd fresh-app',
    'rm -f pnpm-lock.yaml',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'npx degit solidjs/templates/ts',
  description: 'Fresh SolidJS app',
  frameworkUrl: 'https://www.solidjs.com/',
  frameworkDocumentationUrl: 'https://www.solidjs.com/guides/getting-started',
  staticOutputDirectory: 'dist',
})
