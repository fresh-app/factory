import { defineGenerator, vite } from '../defineGenerator'

export default defineGenerator({
  ...vite('vanilla'),
  description: 'Fresh Vite app',
})
