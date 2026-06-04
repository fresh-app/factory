import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh T3 app',
  command: [
    'pnpm create t3-app fresh-app --default --noGit --noInstall',
    'cd fresh-app',
    'awk "BEGIN{skip=0} /^allowBuilds:/{skip=1;next} /^[^ ]/{skip=0} !skip{print}" pnpm-workspace.yaml > /tmp/pw.tmp && mv /tmp/pw.tmp pnpm-workspace.yaml || true',
    '{ echo "allowBuilds:"; echo "  esbuild: true"; echo "  sharp: true"; echo "  unrs-resolver: true"; echo "  \\"@swc/core\\": true"; echo "  core-js: true"; echo "  lightningcss: true"; echo "  \\"@tailwindcss/oxide\\": true"; echo "  \\"@parcel/watcher\\": true"; echo "  rollup: true"; echo "  \\"@prisma/client\\": true"; echo "  prisma: true"; } >> pnpm-workspace.yaml',
    'corepack use pnpm@latest',
    'pnpm db:push',
  ].join('\n'),
  displayedCommand: 'pnpm create t3-app --default',
  frameworkUrl: 'https://create.t3.gg/',
  frameworkDocumentationUrl: 'https://github.com/t3-oss/create-t3-app#readme',
  serverCommand: 'env AUTH_DISCORD_ID=dummy AUTH_DISCORD_SECRET=dummy pnpm dev',
  serverPort: 3000,
})
