import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh SvelteKit app',
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
    await t.waitForText('ready')
    await t.waitForText('$')
    await t.send('cd fresh-app && exec yarn')
  },
  repoDescriptionOverride:
    'Fresh SvelteKit app with TypeScript, automatically generated everyday with "yarn create svelte"',
})
