import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create remix fresh-app --no-git-init --no-install',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create remix',
  description: 'Fresh Remix app',
  longDescription: 'Fresh Remix app, with TypeScript',
  frameworkUrl: 'https://remix.run/',
  frameworkDocumentationUrl: 'https://remix.run/docs',
  serverCommand: 'pnpm start',
  serverPort: 3000,
})
