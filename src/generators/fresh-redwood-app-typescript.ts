import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'yarn create redwood-app fresh-app --typescript --no-yarn-install',
    'cd fresh-app',
    'yarn',
    'yarn rw-gen',
  ].join('\n'),
  description: 'Fresh Redwood app',
  frameworkUrl: 'https://redwoodjs.com/',
  frameworkDocumentationUrl: 'https://redwoodjs.com/docs/tutorial/foreword',
})
