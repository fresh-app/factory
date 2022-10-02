import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'yarn create playwright fresh-app --quiet --lang=TypeScript --gha --no-browsers',
    'cd fresh-app',
    'yarn playwright test',
  ].join('\n'),
  displayedCommand: 'yarn create playwright',
  description: 'Fresh Playwright Test project',
  longDescription: 'Fresh Playwright Test project with TypeScript',
  frameworkUrl: 'https://playwright.dev/',
  frameworkDocumentationUrl: 'https://playwright.dev/docs/intro',
  staticOutputDirectory: 'playwright-report',
})
