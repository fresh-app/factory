import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'yarn create next-app fresh-app',
    'cd fresh-app',
    'yarn build',
  ].join('\n'),
  displayedCommand: 'yarn create next-app fresh-app',
  description: 'Fresh Next app',
  frameworkUrl: 'https://nextjs.org/',
  frameworkDocumentationUrl: 'https://nextjs.org/docs',
  serverCommand: 'yarn start',
  serverPort: 3000,
})
