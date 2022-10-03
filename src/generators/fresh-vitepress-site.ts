import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  description: 'Fresh VitePress site',
  command: [
    'mkdir fresh-app',
    'cd fresh-app',
    'yarn add --dev vitepress vue',
    'wget https://github.com/vuejs/vitepress/raw/main/docs/index.md -O index.md',
    'wget https://github.com/vuejs/vitepress/raw/main/.gitignore -O .gitignore',
    `cat package.json | jq '.scripts.dev = "vitepress dev" | .scripts.build = "vitepress build" | .scripts.serve = "vitepress serve"' > package.json.tmp && mv package.json.tmp package.json`,
    'yarn build',
    'test -f .vitepress/dist/index.html && echo "Ok, output file exists" || (echo "Error, output file does not exist" && exit 1)',
  ].join('\n'),
  staticOutputDirectory: '.vitepress/dist',
  frameworkUrl: 'https://vitepress.vuejs.org/',
  frameworkDocumentationUrl:
    'https://vitepress.vuejs.org/guide/getting-started',
})
