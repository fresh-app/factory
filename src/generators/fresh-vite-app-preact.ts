import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create vite fresh-app --template=preact && cd fresh-app && yarn',
  description: 'Fresh Preact app',
})
