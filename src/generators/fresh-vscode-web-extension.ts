import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'yarn global add yo generator-code',
    'yo code --quick --extensionType=web --gitInit=false fresh-extension',
    'mv fresh-extension fresh-app',
  ].join('\n'),
  displayedCommand: 'yo code',
  description: 'Fresh VS Code web extension',
  longDescription: 'Fresh VS Code web extension',
  frameworkUrl: 'https://code.visualstudio.com/api',
  frameworkDocumentationUrl:
    'https://code.visualstudio.com/api/extension-guides/web-extensions',
})
