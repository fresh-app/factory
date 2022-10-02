import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: 'yarn create vite fresh-app --template=vue && cd fresh-app && yarn',
  description: 'Fresh Vue app',
})
