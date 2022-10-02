import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'yarn create astro fresh-app --template basics --install --git=false --typescript=strict',
    'cd fresh-app',
    'yarn build',
  ].join('\n'),
  description: 'Fresh Astro project',
  frameworkUrl: 'https://astro.build/',
  frameworkDocumentationUrl: 'https://docs.astro.build/en/getting-started/',
  repoDescriptionOverride:
    'Fresh Astro website project, with TypeScript, automatically generated everyday with "yarn create astro --template basics"',
  staticOutputDirectory: 'dist',
})
