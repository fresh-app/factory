import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpx @tanstack/cli create fresh-app',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpx @tanstack/cli create',
  description: 'Fresh TanStack Start app',
  frameworkUrl: 'https://tanstack.com/start',
  frameworkDocumentationUrl:
    'https://tanstack.com/start/latest/docs/framework/react/overview',
  serverCommand: 'pnpm dev',
  serverPort: 3000,
})
