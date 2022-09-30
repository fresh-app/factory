import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create vite fresh-app --template=react-ts && cd fresh-app && yarn',
  description: 'Fresh React app',
})
