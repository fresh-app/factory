import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create next-app fresh-app --app --eslint --import-alias "@/*" --src-dir --tailwind --typescript --yes',
    'cd fresh-app',
    'jq ".pnpm.onlyBuiltDependencies = ((.pnpm.onlyBuiltDependencies // []) + [\\"esbuild\\",\\"sharp\\",\\"unrs-resolver\\",\\"@swc/core\\",\\"core-js\\",\\"lightningcss\\",\\"@tailwindcss/oxide\\",\\"@parcel/watcher\\",\\"rollup\\"] | unique)" package.json > package.json.tmp && mv package.json.tmp package.json',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create next-app',
  description: 'Fresh Next app',
  frameworkUrl: 'https://nextjs.org/',
  frameworkDocumentationUrl: 'https://nextjs.org/docs',
  serverCommand: 'pnpm start',
  serverPort: 3000,
})
