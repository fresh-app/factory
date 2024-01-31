import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create turbo fresh-app --package-manager pnpm --skip-install',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create turbo --package-manager pnpm',
  description: 'Fresh monorepo',
  longDescription: 'Fresh monorepo, built with Turborepo',
  frameworkUrl: 'https://turborepo.org/',
  frameworkDocumentationUrl: 'https://turborepo.org/docs',
  serverCommand: 'cd /workspace/fresh-app/apps/web && pnpm start',
  serverPort: 3000,
})
