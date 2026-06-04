import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create playwright fresh-app --gha --lang=TypeScript --no-browsers --quiet',
    'cd fresh-app',
    '{ echo "onlyBuiltDependencies:"; echo "  - esbuild"; echo "  - sharp"; echo "  - unrs-resolver"; echo "  - \\"@swc/core\\""; echo "  - core-js"; echo "  - lightningcss"; echo "  - \\"@tailwindcss/oxide\\""; echo "  - \\"@parcel/watcher\\""; echo "  - rollup"; } >> pnpm-workspace.yaml',
    'corepack use pnpm@latest',
    'pnpm playwright install --with-deps',
    'pnpm playwright test',
  ].join('\n'),
  displayedCommand: 'pnpm create playwright',
  description: 'Fresh Playwright Test project',
  longDescription: 'Fresh Playwright Test project with TypeScript',
  frameworkUrl: 'https://playwright.dev/',
  frameworkDocumentationUrl: 'https://playwright.dev/docs/intro',
  staticOutputDirectory: 'playwright-report',
})
