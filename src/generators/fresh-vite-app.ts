import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh Vite app',
  command:
    'pnpm create vite fresh-app --template=vanilla && cd fresh-app && corepack use pnpm@latest && pnpm build',
  displayedCommand: 'pnpm create vite fresh-app --template=vanilla',
  frameworkUrl: 'https://vitejs.dev/',
  frameworkDocumentationUrl: 'https://vitejs.dev/guide/',
  staticOutputDirectory: 'dist',
})
