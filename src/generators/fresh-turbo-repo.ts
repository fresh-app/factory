import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'npm install -g pnpm',
    'yarn create turbo fresh-app --use-pnpm',
    'cd fresh-app',
    'pnpm run build',
  ].join('\n'),
  description: 'Fresh monorepo',
  longDescription: 'Fresh monorepo built with Turborepo',
  frameworkUrl: 'https://turborepo.org/',
  frameworkDocumentationUrl: 'https://turborepo.org/docs',
  serverCommand: 'cd /workspace/fresh-app/apps/web && pnpm start',
  serverPort: 3000,
})
