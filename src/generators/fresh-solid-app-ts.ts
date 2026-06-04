import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpx degit solidjs/templates/vanilla/basic fresh-app',
    'cd fresh-app',
    'rm -f pnpm-lock.yaml',
    'awk "BEGIN{skip=0} /^allowBuilds:/{skip=1;next} /^[^ ]/{skip=0} !skip{print}" pnpm-workspace.yaml > /tmp/pw.tmp && mv /tmp/pw.tmp pnpm-workspace.yaml || true',
    '{ echo "allowBuilds:"; echo "  esbuild: true"; echo "  sharp: true"; echo "  unrs-resolver: true"; echo "  \\"@swc/core\\": true"; echo "  core-js: true"; echo "  lightningcss: true"; echo "  \\"@tailwindcss/oxide\\": true"; echo "  \\"@parcel/watcher\\": true"; echo "  rollup: true"; } >> pnpm-workspace.yaml',
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
