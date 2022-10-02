import { defineGenerator } from '../defineGenerator'

export default defineGenerator({
  command:
    'yarn create astro fresh-app --template basics --install --git=false',
  description: 'Fresh Astro project',
  repoDescriptionOverride:
    'Fresh Astro website project, automatically generated everyday with "yarn create astro --template basics"',
})
