import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh Remix app',
  script: async (t) => {
    await t.send('yarn create remix fresh-app')
    await t.waitForText('Just the basics')
    await t.send('')
    await t.waitForText('Vercel')
    for (;;) {
      const text = await t.getText()
      if (text.includes('❯ Vercel')) {
        break
      } else {
        await t.type('\x1b[B')
      }
    }
    await t.send('')
    await t.waitForText('TypeScript')
    await t.send('')
    await t.waitForText('install')
    await t.send('')
    await t.waitForText('README')
    await t.waitForText('Done')
  },
  repoDescriptionOverride:
    'Fresh Remix app preconfigured with Vercel deployment config, automatically generated everyday with "yarn create remix"',
  frameworkUrl: 'https://remix.run/',
  frameworkDocumentationUrl: 'https://remix.run/docs',
})
