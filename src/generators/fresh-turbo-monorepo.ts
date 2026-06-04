import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create turbo fresh-app --package-manager pnpm --skip-install',
    'cd fresh-app',
    '{ echo "onlyBuiltDependencies:"; echo "  - esbuild"; echo "  - sharp"; echo "  - unrs-resolver"; echo "  - \\"@swc/core\\""; echo "  - core-js"; echo "  - lightningcss"; echo "  - \\"@tailwindcss/oxide\\""; echo "  - \\"@parcel/watcher\\""; echo "  - rollup"; } >> pnpm-workspace.yaml',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create turbo --package-manager pnpm',
  description: 'Fresh monorepo',
  longDescription: 'Fresh monorepo, built with Turborepo',
  frameworkUrl: 'https://turborepo.org/',
  frameworkDocumentationUrl: 'https://turborepo.org/docs',
  serverCommand: 'cd /workspace/fresh-app/apps/web && pnpm start',
  serverPort: 3000,
})
