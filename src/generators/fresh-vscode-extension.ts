import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    "yes '' | npx -p yo -p generator-code yo code fresh-extension -y > /dev/null && mv fresh-extension fresh-app",
  description: 'Fresh VS Code extension',
  repoDescriptionOverride:
    'Fresh VS Code extension, automatically generated everyday with "yo code"',
  frameworkUrl: 'https://code.visualstudio.com/api',
  frameworkDocumentationUrl:
    'https://code.visualstudio.com/api/get-started/your-first-extension',
})
