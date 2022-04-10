require('../../.pnp.cjs').setup()
require('make-promises-safe')

const execa = require('execa')
const input = `
mkdir fresh-app
cd fresh-app
echo "{}" > package.json
curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore > .gitignore
yarn add --dev cypress
`

require('child_process').execSync('bash -ex', {
  stdio: ['pipe', 'inherit', 'inherit'],
  input,
})
process.chdir('/workspace/fresh-app')

generateCypressProject()

async function generateCypressProject() {
  const cypress = execa('xvfb-run yarn cypress open', {
    shell: true,
    stdio: ['ignore', 'inherit', 'inherit'],
  })

  async function checkForCypressProject() {
    const deadline = Date.now() + 120e3
    const log = []
    while (Date.now() < deadline) {
      const { stdout: files } = await execa(
        "find . -path './cypress/*.spec.*'",
        { shell: true },
      )
      const filesFound = files.split('\n').filter((x) => x.trim()).length
      log.push(filesFound)
      console.error('Found %d test files...', filesFound)
      if (log.length >= 3) {
        const segment = log.slice(-3)
        if (segment[0] > 2 && segment[0] === segment[segment.length - 1]) {
          console.error('Files count stabilized.')
          cypress.kill()
          process.exit(0)
        }
      }
      await new Promise((r) => setTimeout(r, 1000))
    }
    throw new Error('Timed out waiting for Cypress project to be created')
  }

  checkForCypressProject()
}
