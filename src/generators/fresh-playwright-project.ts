import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'echo "package-manager-strict=false" >> .npmrc',
    'pnpm create playwright fresh-app --gha --lang=TypeScript --no-browsers --quiet',
    'cd fresh-app',
    '{ echo "allowBuilds:"; echo "  esbuild: true"; echo "  sharp: true"; echo "  unrs-resolver: true"; echo "  \\"@swc/core\\": true"; echo "  core-js: true"; echo "  lightningcss: true"; echo "  \\"@tailwindcss/oxide\\": true"; echo "  \\"@parcel/watcher\\": true"; echo "  rollup: true"; } >> pnpm-workspace.yaml',
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
