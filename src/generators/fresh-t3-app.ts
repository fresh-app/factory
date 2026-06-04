import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh T3 app',
  command: [
    'pnpm create t3-app fresh-app --default --noGit --noInstall',
    'cd fresh-app',
    'jq ".pnpm.onlyBuiltDependencies = ((.pnpm.onlyBuiltDependencies // []) + [\\"esbuild\\",\\"sharp\\",\\"unrs-resolver\\",\\"@swc/core\\",\\"core-js\\",\\"lightningcss\\",\\"@tailwindcss/oxide\\",\\"@parcel/watcher\\",\\"rollup\\",\\"@prisma/client\\",\\"prisma\\"] | unique)" package.json > package.json.tmp && mv package.json.tmp package.json',
    'corepack use pnpm@latest',
    'pnpm db:push',
  ].join('\n'),
  displayedCommand: 'pnpm create t3-app --default',
  frameworkUrl: 'https://create.t3.gg/',
  frameworkDocumentationUrl: 'https://github.com/t3-oss/create-t3-app#readme',
  serverCommand: 'env AUTH_DISCORD_ID=dummy AUTH_DISCORD_SECRET=dummy pnpm dev',
  serverPort: 3000,
})
