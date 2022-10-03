import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh Remix app',
  longDescription: 'Fresh Remix app, with TypeScript',
  script: async (t) => {
    await t.send('yarn create remix fresh-app')
    await t.waitForText('Just the basics')
    await t.send('')
    await t.waitForText('Remix App Server')
    await t.send('')
    await t.waitForText('TypeScript')
    await t.send('')
    await t.waitForText('install')
    await t.send('')
    await t.waitForText('README')
    await t.waitForText('Done')
    await t.send('cd fresh-app')
    await t.waitForText('$')
    await t.send('yarn build')
    await t.waitForText('Done')
  },
  displayedCommand: 'yarn create remix',
  frameworkUrl: 'https://remix.run/',
  frameworkDocumentationUrl: 'https://remix.run/docs',
  serverCommand: 'yarn start',
  serverPort: 3000,
})
