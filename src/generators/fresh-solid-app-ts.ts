import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'npm instal -g pnpm',
    'npx degit solidjs/templates/ts fresh-app',
    'cd fresh-app',
    'rm -f pnpm-lock.yaml',
    'pnpm install',
    'pnpm run build',
  ].join('\n'),
  displayedCommand: 'npx degit solidjs/templates/ts',
  description: 'Fresh SolidJS app',
  frameworkUrl: 'https://www.solidjs.com/',
  frameworkDocumentationUrl: 'https://www.solidjs.com/guides/getting-started',
  staticOutputDirectory: 'dist',
})
