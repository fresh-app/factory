import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'npx degit solidjs/templates/ts fresh-app && cd fresh-app && rm -f pnpm-lock.yaml && yarn && yarn build',
  displayedCommand: 'npx degit solidjs/templates/ts',
  description: 'Fresh SolidJS app',
  frameworkUrl: 'https://www.solidjs.com/',
  frameworkDocumentationUrl: 'https://www.solidjs.com/guides/getting-started',
  staticOutputDirectory: 'dist',
})
