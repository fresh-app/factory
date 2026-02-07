import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh SvelteKit app',
  longDescription: 'Fresh SvelteKit app, with TypeScript',
  script: async (t) => {
    await t.send(
      'pnpm dlx sv create fresh-app --template=minimal --types=ts --no-add-ons --no-install',
    )
    await t.waitForText('$')
    await t.send('cd fresh-app')
    await t.waitForText('$')
    await t.send('corepack use pnpm@latest')
    await t.waitForText('$')
    await t.send('pnpm install')
    await t.waitForText('$')
    await t.send(
      'pnpm dlx sv add eslint playwright prettier vitest --no-install',
    )
    await t.waitForText('What')
    await t.send('n')
    await t.waitForText('$')
    await t.send('pnpm install')
    await t.waitForText('$')
    await t.send('pnpm build')
    await t.waitForText('$')
  },
  displayedCommand: 'pnpm dlx sv create --template=minimal --types=ts',
  frameworkUrl: 'https://kit.svelte.dev/',
  frameworkDocumentationUrl: 'https://kit.svelte.dev/docs',
  serverCommand: 'pnpm preview',
  serverPort: 4173,
})
