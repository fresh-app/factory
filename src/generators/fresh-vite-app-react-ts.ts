import { defineGenerator, viteStatic } from '../defineGenerator'

export default defineGenerator({
  ...viteStatic('react-ts'),
  description: 'Fresh React app',
})
