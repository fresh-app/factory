import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'npm i -g create-remix@latest && /opt/factory/scripts/remix/quickstart && cd fresh-app && yarn',
  description: 'Fresh Remix app',
})
