import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create docusaurus fresh-app classic --typescript',
    'cd fresh-app',
    'jq ".pnpm.onlyBuiltDependencies = ((.pnpm.onlyBuiltDependencies // []) + [\\"esbuild\\",\\"sharp\\",\\"unrs-resolver\\",\\"@swc/core\\",\\"core-js\\",\\"lightningcss\\",\\"@tailwindcss/oxide\\",\\"@parcel/watcher\\",\\"rollup\\"] | unique)" package.json > package.json.tmp && mv package.json.tmp package.json',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create docusaurus classic --typescript',
  description: 'Fresh Docusaurus site',
  frameworkUrl: 'https://docusaurus.io',
  frameworkDocumentationUrl: 'https://docusaurus.io/docs',
  staticOutputDirectory: 'build',
})
