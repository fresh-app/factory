import { defineGenerator, viteStatic } from '../defineGenerator'

export default defineGenerator({
  ...viteStatic('svelte-ts'),
  description: 'Fresh Svelte app',
})
