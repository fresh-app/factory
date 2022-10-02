import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create vite fresh-app --template=preact-ts && cd fresh-app && yarn && yarn build',
  displayedCommand: 'yarn create vite fresh-app --template=preact-ts',
  description: 'Fresh Preact app',
  frameworkUrl: 'https://vitejs.dev/',
  frameworkDocumentationUrl: 'https://vitejs.dev/guide/',
  staticOutputDirectory: 'dist',
})
