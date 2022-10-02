import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create vite fresh-app --template=lit-ts && cd fresh-app && yarn && yarn build',
  displayedCommand: 'yarn create vite fresh-app --template=lit-ts',
  description: 'Fresh Lit Element',
  frameworkUrl: 'https://vitejs.dev/',
  frameworkDocumentationUrl: 'https://vitejs.dev/guide/',
  serverCommand: 'yarn dev --clearScreen=false',
  serverPort: 5173,
})
