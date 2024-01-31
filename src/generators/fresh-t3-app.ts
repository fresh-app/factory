import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh T3 app',
  command: [
    'pnpm create t3-app fresh-app --default --noGit --noInstall',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm db:push',
  ].join('\n'),
  displayedCommand: 'pnpm create t3-app --default',
  frameworkUrl: 'https://create.t3.gg/',
  frameworkDocumentationUrl: 'https://github.com/t3-oss/create-t3-app#readme',
  serverCommand:
    'env DISCORD_CLIENT_ID=dummy DISCORD_CLIENT_SECRET=dummy pnpm dev',
  serverPort: 3000,
})
