import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh Vite app',
  script: async (t) => {
    await t.send('exec yarn create t3-app fresh-app')
    await t.waitForText('TypeScript')
    await t.send('')
    await t.waitForText('toggle all')
    await t.type('a')
    await t.waitForText('◉')
    await t.send('')
    await t.waitForText('repo')
    await t.send('n')
    await t.waitForText('install')
    await t.send('Y')
    await t.waitForText('Done')
  },
})
