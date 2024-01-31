import { defineGenerator, viteStatic } from '../defineGenerator'

export default defineGenerator({
  ...viteStatic('vanilla'),
  description: 'Fresh Vite app',
})
