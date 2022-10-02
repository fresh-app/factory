import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'npm i -g @microsoft/rush && mkdir fresh-app && cd fresh-app && rush init && rush update',
  description: 'Fresh monorepo',
  repoDescriptionOverride:
    'Fresh monorepo project, built with Rush, automatically generated everyday with "rush init"',
  frameworkUrl: 'https://rushjs.io/',
  frameworkDocumentationUrl: 'https://rushjs.io/pages/intro/welcome/',
})
