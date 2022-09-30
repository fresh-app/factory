import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: 'yarn create vite fresh-app --template=lit && cd fresh-app && yarn',
  description: 'Fresh Lit Element',
})
