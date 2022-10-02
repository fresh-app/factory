import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create vite fresh-app --template=vanilla-ts && cd fresh-app && yarn',
  description: 'Fresh Vite app',
})
