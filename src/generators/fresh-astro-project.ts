import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'yarn create astro fresh-app --template basics --install --git=false --typescript=strict',
    'cd fresh-app',
    'yarn build',
  ].join('\n'),
  displayedCommand: 'yarn create astro --template basics',
  description: 'Fresh Astro project',
  longDescription: 'Fresh Astro project, with TypeScript',
  frameworkUrl: 'https://astro.build/',
  frameworkDocumentationUrl: 'https://docs.astro.build/en/getting-started/',
  staticOutputDirectory: 'dist',
})
