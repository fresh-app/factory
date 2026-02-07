import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh SvelteKit app',
  longDescription: 'Fresh SvelteKit app, with TypeScript',
  command: [
    'pnpm dlx sv create fresh-app --template=minimal --types=ts --add eslint playwright prettier tailwindcss vitest --no-install',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm install',
    'pnpm build',
  ].join('\n'),
  displayedCommand:
    'pnpm dlx sv create --template=minimal --types=ts --add eslint prettier playwright tailwindcss vitest',
  frameworkUrl: 'https://kit.svelte.dev/',
  frameworkDocumentationUrl: 'https://kit.svelte.dev/docs',
  serverCommand: 'pnpm preview',
  serverPort: 4173,
})
