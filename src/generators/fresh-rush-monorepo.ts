import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'npm i -g @microsoft/rush && mkdir fresh-app && cd fresh-app && rush init && rush update',
  description: 'Fresh monorepo',
})
