import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'pnpm create astro fresh-app --template basics --no-install --no-git --skip-houston --typescript=strict',
    'cd fresh-app',
    'awk "BEGIN{skip=0} /^allowBuilds:/{skip=1;next} /^[^ ]/{skip=0} !skip{print}" pnpm-workspace.yaml > /tmp/pw.tmp && mv /tmp/pw.tmp pnpm-workspace.yaml || true',
    '{ echo "allowBuilds:"; echo "  esbuild: true"; echo "  sharp: true"; echo "  unrs-resolver: true"; echo "  \\"@swc/core\\": true"; echo "  core-js: true"; echo "  lightningcss: true"; echo "  \\"@tailwindcss/oxide\\": true"; echo "  \\"@parcel/watcher\\": true"; echo "  rollup: true"; } >> pnpm-workspace.yaml',
    'corepack use pnpm@latest',
    'pnpm build',
  ].join('\n'),
  displayedCommand: 'pnpm create astro --template basics',
  description: 'Fresh Astro project',
  longDescription: 'Fresh Astro project, with TypeScript',
  frameworkUrl: 'https://astro.build/',
  frameworkDocumentationUrl: 'https://docs.astro.build/en/getting-started/',
  staticOutputDirectory: 'dist',
})
