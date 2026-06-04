import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpx degit solidjs/templates/vanilla/basic fresh-app',
    'cd fresh-app',
    'rm -f pnpm-lock.yaml',
    'jq ".pnpm.onlyBuiltDependencies = ((.pnpm.onlyBuiltDependencies // []) + [\\"esbuild\\",\\"sharp\\",\\"unrs-resolver\\",\\"@swc/core\\",\\"core-js\\",\\"lightningcss\\",\\"@tailwindcss/oxide\\",\\"@parcel/watcher\\",\\"rollup\\"] | unique)" package.json > package.json.tmp && mv package.json.tmp package.json',
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
