import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'mkdir fresh-app && cd fresh-app && echo "{}" > package.json && corepack use pnpm@latest',
  description: 'Test',
})
