import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh Vite app',
  command:
    'yarn create vite fresh-app --template=vanilla && cd fresh-app && yarn && yarn build',
  displayedCommand: 'yarn create vite fresh-app --template=vanilla',
  frameworkUrl: 'https://vitejs.dev/',
  frameworkDocumentationUrl: 'https://vitejs.dev/guide/',
  staticOutputDirectory: 'dist',
})
