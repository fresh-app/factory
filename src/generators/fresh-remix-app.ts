import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create react-router fresh-app --no-git-init --no-install',
    'cd fresh-app',
    'awk "BEGIN{skip=0} /^allowBuilds:/{skip=1;next} /^[^ ]/{skip=0} !skip{print}" pnpm-workspace.yaml > /tmp/pw.tmp && mv /tmp/pw.tmp pnpm-workspace.yaml || true',
    '{ echo "allowBuilds:"; echo "  esbuild: true"; echo "  sharp: true"; echo "  unrs-resolver: true"; echo "  \\"@swc/core\\": true"; echo "  core-js: true"; echo "  lightningcss: true"; echo "  \\"@tailwindcss/oxide\\": true"; echo "  \\"@parcel/watcher\\": true"; echo "  rollup: true"; } >> pnpm-workspace.yaml',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create react-router',
  description: 'Fresh React Router app',
  longDescription: 'Fresh React Router app (Remix successor), with TypeScript',
  frameworkUrl: 'https://reactrouter.com/',
  frameworkDocumentationUrl:
    'https://reactrouter.com/start/framework/installation',
  serverCommand: 'pnpm start',
  serverPort: 3000,
})
