import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create astro fresh-app --template basics --install --git=false --typescript=strict',
    'cd fresh-app',
    'pnpm run build',
  ].join('\n'),
  displayedCommand: 'pnpm create astro --template basics',
  description: 'Fresh Astro project',
  longDescription: 'Fresh Astro project, with TypeScript',
  frameworkUrl: 'https://astro.build/',
  frameworkDocumentationUrl: 'https://docs.astro.build/en/getting-started/',
  staticOutputDirectory: 'dist',
})
