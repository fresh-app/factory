import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create vite fresh-app --template=vue && cd fresh-app && yarn && yarn build',
  displayedCommand: 'yarn create vite fresh-app --template=vue',
  description: 'Fresh Vue app',
  frameworkUrl: 'https://vitejs.dev/',
  frameworkDocumentationUrl: 'https://vitejs.dev/guide/',
  staticOutputDirectory: 'dist',
})
