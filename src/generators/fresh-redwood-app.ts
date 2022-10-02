import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: 'yarn create redwood-app fresh-app --no-typescript',
  description: 'Fresh Redwood app',
})
