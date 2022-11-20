import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create next-app fresh-app --typescript',
    'cd fresh-app',
    'pnpm run build',
  ].join('\n'),
  displayedCommand: 'pnpm create next-app --typescript',
  description: 'Fresh Next app',
  frameworkUrl: 'https://nextjs.org/',
  frameworkDocumentationUrl: 'https://nextjs.org/docs',
  serverCommand: 'pnpm start',
  serverPort: 3000,
})
