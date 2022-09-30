import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create vite fresh-app --template=svelte && cd fresh-app && yarn',
  description: 'Fresh Svelte app',
})
