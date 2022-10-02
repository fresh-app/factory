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
  description: 'Fresh React component',
  repoDescriptionOverride:
    'Fresh React component library built with TSDX, storybooks included, automatically generated everyday from its official generator script and template',
  frameworkUrl: 'https://tsdx.io/',
  frameworkDocumentationUrl: 'https://tsdx.io/',
  staticOutputDirectory: 'storybook-static',
})
