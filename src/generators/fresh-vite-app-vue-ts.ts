import { defineGenerator, vite } from '../defineGenerator'

export default defineGenerator({
  ...vite('vue-ts'),
  description: 'Fresh Vue app',
})
