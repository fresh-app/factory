import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    "yes '' | npx -p yo -p generator-code yo code fresh-extension -y > /dev/null && mv fresh-extension fresh-app",
  displayedCommand: 'yo code',
  description: 'Fresh VS Code extension',
  longDescription: 'Fresh VS Code extension',
  frameworkUrl: 'https://code.visualstudio.com/api',
  frameworkDocumentationUrl:
    'https://code.visualstudio.com/api/get-started/your-first-extension',
})
