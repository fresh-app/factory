import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  script: async (t) => {
    await t.send(
      'yarn create astro fresh-app --template basics --install --git=false --typescript=strict',
    )
    await t.waitForText('project')
    await t.waitForText('Done')
    await t.waitForText('$')
    await t.send('cd fresh-app')
    await t.waitForText('$')
    await t.send('yarn build')
    await t.waitForText('Done')
    await t.waitForText('$')
  },
  displayedCommand: 'yarn create astro --template basics',
  description: 'Fresh Astro project',
  longDescription: 'Fresh Astro project, with TypeScript',
  frameworkUrl: 'https://astro.build/',
  frameworkDocumentationUrl: 'https://docs.astro.build/en/getting-started/',
  staticOutputDirectory: 'dist',
})
