import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create next-app fresh-app --app --eslint --import-alias "@/*" --src-dir --tailwind --javascript --yes',
    'cd fresh-app',
    '{ echo "allowBuilds:"; echo "  esbuild: true"; echo "  sharp: true"; echo "  unrs-resolver: true"; echo "  \\"@swc/core\\": true"; echo "  core-js: true"; echo "  lightningcss: true"; echo "  \\"@tailwindcss/oxide\\": true"; echo "  \\"@parcel/watcher\\": true"; echo "  rollup: true"; } >> pnpm-workspace.yaml',
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
