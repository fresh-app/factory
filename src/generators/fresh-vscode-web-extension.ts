import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'sudo pnpx playwright install-deps',
    'pnpm install --global yo generator-code @vscode/test-web',
    'yo code --quick --extensionType=web --gitInit=false fresh-extension',
    'mv fresh-extension fresh-app',
    'test -f fresh-app/package.json',
  ].join('\n'),
  displayedCommand: 'yo code --extensionType=web',
  description: 'Fresh VS Code web extension',
  longDescription: 'Fresh VS Code web extension',
  frameworkUrl: 'https://code.visualstudio.com/api',
  frameworkDocumentationUrl:
    'https://code.visualstudio.com/api/extension-guides/web-extensions',
  serverCommand: 'vscode-test-web --extensionDevelopmentPath=. .',
  serverPort: 3000,
})
