import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create next-app fresh-app --app --eslint --import-alias "@/*" --src-dir --tailwind --javascript --yes',
    'cd fresh-app',
    '{ echo "onlyBuiltDependencies:"; echo "  - esbuild"; echo "  - sharp"; echo "  - unrs-resolver"; echo "  - \\"@swc/core\\""; echo "  - core-js"; echo "  - lightningcss"; echo "  - \\"@tailwindcss/oxide\\""; echo "  - \\"@parcel/watcher\\""; echo "  - rollup"; } >> pnpm-workspace.yaml',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create next-app --javascript',
  description: 'Fresh Next app',
  frameworkUrl: 'https://nextjs.org/',
  frameworkDocumentationUrl: 'https://nextjs.org/docs',
  serverCommand: 'pnpm start',
  serverPort: 3000,
})
