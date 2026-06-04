import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create turbo fresh-app --package-manager pnpm --skip-install',
    'cd fresh-app',
    'jq ".pnpm.onlyBuiltDependencies = ((.pnpm.onlyBuiltDependencies // []) + [\\"esbuild\\",\\"sharp\\",\\"unrs-resolver\\",\\"@swc/core\\",\\"core-js\\",\\"lightningcss\\",\\"@tailwindcss/oxide\\",\\"@parcel/watcher\\",\\"rollup\\"] | unique)" package.json > package.json.tmp && mv package.json.tmp package.json',
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
