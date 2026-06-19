import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create react-router fresh-app --no-git-init --no-install --template remix-run/react-router-templates/default',
    'cd fresh-app',
    'sed -i "s/ssr: true/ssr: false/" react-router.config.ts',
    'corepack use pnpm@latest || (pnpm approve-builds --all && corepack use pnpm@latest)',
    'pnpm build',
  ].join('\n'),
  displayedCommand:
    'pnpm create react-router --template remix-run/react-router-templates/default',
  description: 'Fresh React Router SPA app',
  longDescription:
    'Fresh React Router Single Page Application (SPA) app (Remix successor)',
  frameworkUrl: 'https://reactrouter.com/',
  frameworkDocumentationUrl: 'https://reactrouter.com/how-to/spa',
  staticOutputDirectory: 'build/client',
})
