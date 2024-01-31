import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh VitePress site',
  script: async (t) => {
    await t.send('mkdir fresh-app && cd fresh-app && echo "{}" > package.json')
    await t.waitForText('$')
    await t.send('corepack use pnpm@latest')
    await t.waitForText('$')
    await t.send('pnpm add -D vitepress vue')
    await t.waitForText('$')
    await t.send('pnpm vitepress init')
    await t.waitForText('Where')
    await t.send('')
    await t.waitForText('title')
    await t.send('')
    await t.waitForText('description')
    await t.send('')
    await t.waitForText('Theme')
    await t.send('')
    await t.waitForText('TypeScript')
    await t.send('')
    await t.waitForText('package')
    await t.send('')
    await t.waitForText('Done')
    await t.send('pnpm docs:build')
    await t.waitForText('$')
  },
  staticOutputDirectory: '.vitepress/dist',
  frameworkUrl: 'https://vitepress.vuejs.org/',
  frameworkDocumentationUrl:
    'https://vitepress.vuejs.org/guide/getting-started',
})
