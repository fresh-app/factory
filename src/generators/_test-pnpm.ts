import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: 'mkdir fresh-app && cd fresh-app && pnpm install --save chalk',
  description: 'Test',
})
