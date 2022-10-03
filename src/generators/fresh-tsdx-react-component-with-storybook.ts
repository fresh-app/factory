import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command: [
    'npm config set init-author-name Author',
    'npx tsdx create fresh-component --template=react-with-storybook',
    'mv fresh-component fresh-app',
    'cd fresh-app',
    'grep -q storybook-static .gitignore || echo storybook-static >> .gitignore',
    'yarn build',
    'yarn build-storybook',
  ].join('\n'),
  displayedCommand: 'npx tsdx create --template=react-with-storybook',
  description: 'Fresh React component',
  longDescription:
    'Fresh React component library, built with TSDX, storybooks included',
  frameworkUrl: 'https://tsdx.io/',
  frameworkDocumentationUrl: 'https://tsdx.io/',
  staticOutputDirectory: 'storybook-static',
})
