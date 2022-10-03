import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: 'yarn create redwood-app fresh-app --typescript',
  displayedCommand: 'yarn create redwood-app --typescript',
  description: 'Fresh Redwood app',
  longDescription: 'Fresh Redwood app, with TypeScript',
  frameworkUrl: 'https://redwoodjs.com/',
  frameworkDocumentationUrl: 'https://redwoodjs.com/docs/tutorial/foreword',
})
