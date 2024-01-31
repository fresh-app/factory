import { defineGenerator, viteStatic } from '../defineGenerator'

export default defineGenerator({
  ...viteStatic('vue'),
  description: 'Fresh Vue app',
})
