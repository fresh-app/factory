import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'npm config set init-author-name Author && rm -rf fresh-component && npx tsdx create fresh-component --template=react-with-storybook && mv fresh-component fresh-app',
  description: 'Fresh React component',
})
