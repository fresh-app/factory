import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'sudo pnpx playwright install-deps',
    'mkdir -p yeoman_temp',
    'cd yeoman_temp',
    'pnpm init',
    'pnpm add yo generator-code',
    'pnpm install --global @vscode/test-web',
    'pnpm exec yo code --quick --extensionType=web --gitInit=false fresh-extension',
    'cd ..',
    'mv yeoman_temp/fresh-extension fresh-app',
    'rm -rf yeoman_temp',
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
