import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'curl -fsSL https://bun.sh/install | bash',
    '(mkdir -p fresh-app && cd fresh-app && ~/.bun/bin/bun init -y)',
  ].join('\n'),
  displayedCommand: 'bun init',
  description: 'Fresh Bun project',
  longDescription: 'Fresh Bun project, with TypeScript',
  frameworkUrl: 'https://bun.sh/',
  frameworkDocumentationUrl: 'https://github.com/oven-sh/bun#readme',
})
