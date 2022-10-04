import { defineGenerator } from "../defineGenerator";

export default defineGenerator({
    command: [
        'yarn create docusaurus fresh-app classic --typescript',
        'cd fresh-app',
        'yarn build',
    ].join('\n'),
    displayedCommand: 'yarn create docusaurus classic --typescript',
    description: '',
    frameworkUrl: 'https://docusaurus.io',
    frameworkDocumentationUrl: 'https://docusaurus.io/docs',
    serverCommand: 'yarn start',
    serverPort: 3000
})