import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create vite fresh-app --template=react-ts && cd fresh-app && yarn && yarn build',
  displayedCommand: 'yarn create vite fresh-app --template=react-ts',
  description: 'Fresh React app',
  frameworkUrl: 'https://vitejs.dev/',
  frameworkDocumentationUrl: 'https://vitejs.dev/guide/',
  staticOutputDirectory: 'dist',
})
