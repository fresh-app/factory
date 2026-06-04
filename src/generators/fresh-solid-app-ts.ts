import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpx degit solidjs/templates/vanilla/basic fresh-app',
    'cd fresh-app',
    'rm -f pnpm-lock.yaml',
    '{ echo "onlyBuiltDependencies:"; echo "  - esbuild"; echo "  - sharp"; echo "  - unrs-resolver"; echo "  - \\"@swc/core\\""; echo "  - core-js"; echo "  - lightningcss"; echo "  - \\"@tailwindcss/oxide\\""; echo "  - \\"@parcel/watcher\\""; echo "  - rollup"; } >> pnpm-workspace.yaml',
    'corepack use pnpm@latest',
    'pnpm install',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'npx degit solidjs/templates/vanilla/basic',
  description: 'Fresh SolidJS app',
  frameworkUrl: 'https://www.solidjs.com/',
  frameworkDocumentationUrl: 'https://www.solidjs.com/guides/getting-started',
  staticOutputDirectory: 'dist',
})
