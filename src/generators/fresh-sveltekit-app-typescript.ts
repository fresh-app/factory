import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh SvelteKit app',
  longDescription: 'Fresh SvelteKit app, with TypeScript',
  command: [
    'pnpm dlx sv create fresh-app --template=minimal --types=ts --no-add-ons --no-install',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm install',
    'pnpm dlx sv add eslint playwright prettier tailwindcss vitest --tailwindcss=none --no-install',
    'pnpm install',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm dlx sv create --template=minimal --types=ts',
  frameworkUrl: 'https://kit.svelte.dev/',
  frameworkDocumentationUrl: 'https://kit.svelte.dev/docs',
  serverCommand: 'pnpm preview',
  serverPort: 4173,
})
