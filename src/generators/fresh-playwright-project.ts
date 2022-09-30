import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create playwright fresh-app --quiet --lang=TypeScript --gha --no-browsers',
  description: 'Fresh Playwright Test project',
})
