import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm install --global yo generator-code',
    'yo code --quick --extensionType=ts --gitInit=false fresh-extension',
    'mv fresh-extension fresh-app',
    'test -f fresh-app/package.json',
  ].join('\n'),
  displayedCommand: 'yo code --extensionType=ts',
  description: 'Fresh VS Code extension',
  longDescription: 'Fresh VS Code extension',
  frameworkUrl: 'https://code.visualstudio.com/api',
  frameworkDocumentationUrl:
    'https://code.visualstudio.com/api/get-started/your-first-extension',
})
