import { defineGenerator, viteStatic } from '../defineGenerator'

export default defineGenerator({
  ...viteStatic('vanilla-ts'),
  description: 'Fresh Vite app',
})
