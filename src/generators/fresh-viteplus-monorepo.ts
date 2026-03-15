import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'curl -fsSL https://vite.plus | CI=true bash',
    'export PATH="$HOME/.vite-plus/bin:$PATH"',
    'vp create vite:monorepo --directory fresh-app --no-interactive',
    'cd fresh-app',
    'vp install',
    'vp build apps/website',
  ].join('\n'),
  displayedCommand: 'vp create vite:monorepo',
  description: 'Fresh Vite+ monorepo',
  framework: {
    name: 'Vite+',
    url: 'https://viteplus.dev/',
    documentationUrl: 'https://viteplus.dev/guide/',
  },
  staticOutputDirectory: 'apps/website/dist',
})
