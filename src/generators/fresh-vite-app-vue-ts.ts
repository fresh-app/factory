import { defineGenerator, viteStatic } from '../defineGenerator'

export default defineGenerator({
  ...viteStatic('vue-ts'),
  description: 'Fresh Vue app',
})
