import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create react-router fresh-app --no-git-init --no-install',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create react-router',
  description: 'Fresh React Router app',
  longDescription: 'Fresh React Router app (Remix successor), with TypeScript',
  frameworkUrl: 'https://reactrouter.com/',
  frameworkDocumentationUrl:
    'https://reactrouter.com/start/framework/installation',
  serverCommand: 'pnpm start',
  serverPort: 3000,
})
