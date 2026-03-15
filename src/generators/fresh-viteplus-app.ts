import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'curl -fsSL https://vite.plus | CI=true bash',
    'export PATH="$HOME/.vite-plus/bin:$PATH"',
    'vp create vite:application --directory fresh-app --no-interactive',
    'cd fresh-app',
    'vp install',
    'vp build',
  ].join('\n'),
  displayedCommand: 'vp create vite:application',
  description: 'Fresh Vite+ app',
  framework: {
    name: 'Vite+',
    url: 'https://viteplus.dev/',
    documentationUrl: 'https://viteplus.dev/guide/',
  },
  staticOutputDirectory: 'dist',
})
