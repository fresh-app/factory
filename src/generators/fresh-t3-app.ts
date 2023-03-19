import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh T3 app',
  script: async (t) => {
    await t.send('yarn create t3-app fresh-app')
    await t.waitForText('TypeScript')
    await t.send('')
    await t.waitForText('toggle all')
    await t.type('a')
    await t.waitForText('◉')
    await t.send('')
    await t.waitForText('repo') // Initialize a new git repository?
    await t.send('n')
    await t.waitForText('run') // Would you like us to run 'yarn'?
    await t.send('Y')
    await t.waitForText('import') // What import alias would you like configured?
    await t.send('')
    await t.waitForText('Done')
    await t.waitForText('$')
    await t.send('cd fresh-app')
    await t.waitForText('$')
  },
  displayedCommand: 'yarn create t3-app',
  frameworkUrl: 'https://create.t3.gg/',
  frameworkDocumentationUrl: 'https://github.com/t3-oss/create-t3-app#readme',
  serverCommand: 'yarn dev',
  serverPort: 3000,
})
