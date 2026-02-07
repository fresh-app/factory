import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create react-router fresh-app --no-git-init --no-install --template remix-run/react-router/templates/spa',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand:
    'pnpm create react-router --template remix-run/react-router/templates/spa',
  description: 'Fresh React Router SPA',
  longDescription: 'Fresh React Router single-page app (Remix SPA successor)',
  frameworkUrl: 'https://reactrouter.com/',
  frameworkDocumentationUrl:
    'https://reactrouter.com/start/framework/installation',
  staticOutputDirectory: 'build/client',
})
