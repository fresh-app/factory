import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create tsdown@latest fresh-app --template=default',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create tsdown@latest --template=default',
  description: 'Fresh library',
  longDescription: 'Fresh TypeScript library, built with tsdown',
  frameworkUrl: 'https://tsdown.dev/',
  frameworkDocumentationUrl: 'https://tsdown.dev/guide/getting-started',
})
