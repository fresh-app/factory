import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'npm config set init-author-name Author && rm -rf fresh-component && npx tsdx create fresh-component --template=react && mv fresh-component fresh-app',
  displayedCommand: 'npx tsdx create --template=react',
  description: 'Fresh React component',
  longDescription: 'Fresh React component library, built with TSDX',
  frameworkUrl: 'https://tsdx.io/',
  frameworkDocumentationUrl: 'https://tsdx.io/',
})
