import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create remix fresh-app --no-git-init --no-install --template remix-run/remix/templates/spa',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand:
    'pnpm create remix --template remix-run/remix/templates/spa',
  description: 'Fresh Remix SPA',
  longDescription: 'Fresh Remix single-page app',
  frameworkUrl: 'https://remix.run/',
  frameworkDocumentationUrl: 'https://remix.run/docs',
  staticOutputDirectory: 'build/client',
})
