import { defineGenerator, vite } from '../defineGenerator'

export default defineGenerator({
  ...vite('lit'),
  description: 'Fresh Lit Element',

  // Disabled due to timeout errors
  serverCommand: 'pnpm dev --clearScreen=false',
  serverPort: 5173,
})
