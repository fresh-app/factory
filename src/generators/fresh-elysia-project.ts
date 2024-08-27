import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'curl -fsSL https://bun.sh/install | bash',
    'git config --global user.email "dtinth-bot@users.noreply.github.com"',
    'git config --global user.name "dtinth-bot"',
    '~/.bun/bin/bun create elysia fresh-app',
  ].join('\n'),
  displayedCommand: 'bun create elysia',
  description: 'Fresh Elysia project',
  longDescription: 'Fresh Elysia project',
  frameworkUrl: 'https://elysiajs.com/',
  frameworkDocumentationUrl: 'https://elysiajs.com/at-glance.html',
})
