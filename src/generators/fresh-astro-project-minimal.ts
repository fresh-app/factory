import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create astro fresh-app --template minimal --no-install --no-git --skip-houston --typescript=strict',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create astro --template minimal',
  description: 'Fresh Astro project',
  longDescription: 'Fresh minimal Astro project, with TypeScript',
  frameworkUrl: 'https://astro.build/',
  frameworkDocumentationUrl: 'https://docs.astro.build/en/getting-started/',
  staticOutputDirectory: 'dist',
})
