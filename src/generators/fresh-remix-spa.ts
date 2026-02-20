import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create react-router fresh-app --no-git-init --no-install --template remix-run/react-router-templates/minimal',
    'cd fresh-app',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand:
    'pnpm create react-router --template remix-run/react-router-templates/minimal',
  description: 'Fresh React Router minimal app',
  longDescription: 'Fresh React Router minimal app (Remix successor)',
  frameworkUrl: 'https://reactrouter.com/',
  frameworkDocumentationUrl:
    'https://reactrouter.com/start/framework/installation',
  staticOutputDirectory: 'build/client',
})
