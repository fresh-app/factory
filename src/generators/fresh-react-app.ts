import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: 'yarn create react-app fresh-app && cd fresh-app && yarn build',
  displayedCommand: 'yarn create react-app',
  description: 'Fresh React app',
  staticOutputDirectory: 'build',
  frameworkUrl: 'https://create-react-app.dev/',
  frameworkDocumentationUrl:
    'https://create-react-app.dev/docs/getting-started',
})
