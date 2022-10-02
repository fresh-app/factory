import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create playwright fresh-app --quiet --lang=TypeScript --gha --no-browsers',
  description: 'Fresh Playwright Test project',
  repoDescriptionOverride:
    'Fresh Playwright Test project with TypeScript, automatically generated everyday with "yarn create playwright"',
})
