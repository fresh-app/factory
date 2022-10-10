import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'yarn create playwright fresh-app --quiet --lang=TypeScript --gha --no-browsers',
    'cd fresh-app',
    'export PLAYWRIGHT_BROWSERS_PATH=/workspace/pw-browsers  # Do not interfere with browsers provided by Docker image',
    'sudo rm -f /ms-playwright/.docker-info                  # Trick Playwright that we are not in Docker',
    'sudo -E yarn playwright install --with-deps             # Install browsers because it may be out-of-sync with Playwright image',
    'yarn playwright test',
  ].join('\n'),
  displayedCommand: 'yarn create playwright',
  description: 'Fresh Playwright Test project',
  longDescription: 'Fresh Playwright Test project with TypeScript',
  frameworkUrl: 'https://playwright.dev/',
  frameworkDocumentationUrl: 'https://playwright.dev/docs/intro',
  staticOutputDirectory: 'playwright-report',
})
