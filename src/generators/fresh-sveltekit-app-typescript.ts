import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh SvelteKit app',
  longDescription: 'Fresh SvelteKit app, with TypeScript',
  script: async (t) => {
    await t.send('pnpm create svelte fresh-app')
    await t.waitForText('template')
    await t.send('')
    await t.waitForText('TypeScript')
    for (;;) {
      const text = await t.getText()
      if (text.includes('● Yes, using TypeScript syntax')) {
        break
      } else {
        await t.type('\x1b[B')
      }
    }
    await t.send('')
    await t.waitForText('additional options')
    await t.send('a')
    await t.waitForText('$')
    await t.send('cd fresh-app')
    await t.waitForText('$')
    await t.send('corepack use pnpm@latest')
    await t.waitForText('Done')
    await t.send('pnpm build')
    await t.waitForText('$')
  },
  displayedCommand: 'pnpm create svelte',
  frameworkUrl: 'https://kit.svelte.dev/',
  frameworkDocumentationUrl: 'https://kit.svelte.dev/docs',
  serverCommand: 'pnpm preview',
  serverPort: 4173,
})
