import { defineGenerator, viteStatic } from '../defineGenerator'

export default defineGenerator({
  ...viteStatic('preact'),
  description: 'Fresh Preact app',
})
