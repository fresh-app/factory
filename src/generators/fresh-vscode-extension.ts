import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'mkdir -p yeoman_temp',
    'cd yeoman_temp',
    'pnpm init',
    'pnpm add yo generator-code',
    'pnpm exec yo code --quick --extensionType=ts --gitInit=false fresh-extension',
    'cd ..',
    'mv yeoman_temp/fresh-extension fresh-app',
    'rm -rf yeoman_temp',
    'test -f fresh-app/package.json',
  ].join('\n'),
  displayedCommand: 'yo code --extensionType=ts',
  description: 'Fresh VS Code extension',
  longDescription: 'Fresh VS Code extension',
  frameworkUrl: 'https://code.visualstudio.com/api',
  frameworkDocumentationUrl:
    'https://code.visualstudio.com/api/get-started/your-first-extension',
})
