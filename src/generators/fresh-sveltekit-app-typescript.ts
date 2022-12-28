import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh SvelteKit app',
  longDescription: 'Fresh SvelteKit app, with TypeScript',
  script: async (t) => {
    await t.send('yarn create svelte fresh-app')
    await t.waitForText('template')
    await t.send('')
    await t.waitForText('TypeScript')
    for (;;) {
      const text = await t.getText()
      if (text.includes('❯   Yes, using TypeScript syntax')) {
        break
      } else {
        await t.type('\x1b[B')
      }
    }
    await t.send('')
    await t.waitForText('ESLint')
    await t.send('\x1b[C')
    await t.waitForText('Prettier')
    await t.send('\x1b[C')
    await t.waitForText('Playwright')
    await t.send('\x1b[C')
    await t.waitForText('Vitest')
    await t.send('\x1b[C')
    await t.waitForText('ready')
    await t.waitForText('$')
    await t.send('cd fresh-app')
    await t.waitForText('$')
    await t.send('yarn')
    await t.waitForText('Done')
    await t.send('yarn build')
    await t.waitForText('Done')
    await t.waitForText('$')
  },
  displayedCommand: 'yarn create svelte',
  frameworkUrl: 'https://kit.svelte.dev/',
  frameworkDocumentationUrl: 'https://kit.svelte.dev/docs',
  serverCommand: 'yarn preview',
  serverPort: 4173,
})
