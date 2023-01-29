import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'yarn create next-app fresh-app --eslint --src-dir --typescript --no-experimental-app --import-alias="@/*"',
    'cd fresh-app',
    'yarn build',
  ].join('\n'),
  displayedCommand: 'yarn create next-app --typescript',
  description: 'Fresh Next app',
  frameworkUrl: 'https://nextjs.org/',
  frameworkDocumentationUrl: 'https://nextjs.org/docs',
  serverCommand: 'yarn start',
  serverPort: 3000,
})
