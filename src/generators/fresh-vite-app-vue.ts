import { defineGenerator, vite } from '../defineGenerator'

export default defineGenerator({
  ...vite('vue'),
  description: 'Fresh Vue app',
})
