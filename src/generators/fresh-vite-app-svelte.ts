import { defineGenerator, viteStatic } from '../defineGenerator'

export default defineGenerator({
  ...viteStatic('svelte'),
  description: 'Fresh Svelte app',
})
