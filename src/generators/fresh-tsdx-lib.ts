import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh library',
  longDescription: 'Fresh TypeScript library, built with TSDX',
  command:
    'npm config set init-author-name Author && rm -rf fresh-lib && npx tsdx create fresh-lib --template=basic && mv fresh-lib fresh-app',
  displayedCommand: 'npx tsdx create --template=basic',
  frameworkUrl: 'https://tsdx.io/',
  frameworkDocumentationUrl: 'https://tsdx.io/',
})
