import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: '/opt/factory/scripts/sveltekit/setup && cd fresh-app && yarn',
  description: 'Fresh SvelteKit app',
})
