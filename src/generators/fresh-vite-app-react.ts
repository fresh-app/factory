import { defineGenerator, viteStatic } from '../defineGenerator'

export default defineGenerator({
  ...viteStatic('react'),
  description: 'Fresh React app',
})
