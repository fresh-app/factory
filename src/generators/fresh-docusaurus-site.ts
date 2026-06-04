import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create docusaurus fresh-app classic --typescript',
    'cd fresh-app',
    '{ echo "onlyBuiltDependencies:"; echo "  - esbuild"; echo "  - sharp"; echo "  - unrs-resolver"; echo "  - \\"@swc/core\\""; echo "  - core-js"; echo "  - lightningcss"; echo "  - \\"@tailwindcss/oxide\\""; echo "  - \\"@parcel/watcher\\""; echo "  - rollup"; } >> pnpm-workspace.yaml',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create docusaurus classic --typescript',
  description: 'Fresh Docusaurus site',
  frameworkUrl: 'https://docusaurus.io',
  frameworkDocumentationUrl: 'https://docusaurus.io/docs',
  staticOutputDirectory: 'build',
})
