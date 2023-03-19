import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh monorepo',
  longDescription: 'Fresh monorepo project, built with Rush',
  command:
    'npm i -g @microsoft/rush && mkdir fresh-app && cd fresh-app && rush init && rush update',
  displayedCommand: 'rush init',
  frameworkUrl: 'https://rushjs.io/',
  frameworkDocumentationUrl: 'https://rushjs.io/pages/intro/welcome/',
})
