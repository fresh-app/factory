import { defineGenerator, viteStatic } from '../defineGenerator'

export default defineGenerator({
  ...viteStatic('preact-ts'),
  description: 'Fresh Preact app',
})
