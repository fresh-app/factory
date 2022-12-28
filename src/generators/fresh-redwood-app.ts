import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create redwood-app fresh-app --typescript=false --git-init=false',
  displayedCommand:
    'yarn create redwood-app --typescript=false --git-init=false',
  description: 'Fresh Redwood app',
  frameworkUrl: 'https://redwoodjs.com/',
  frameworkDocumentationUrl: 'https://redwoodjs.com/docs/tutorial/foreword',
})
