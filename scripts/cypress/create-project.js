require('make-promises-safe')

const shell = require('shelljs')
const execa = require('execa')

shell.exec('sudo apt install -y xvfb', { fatal: true })
shell.mkdir('fresh-app')
shell.cd('fresh-app')
shell.exec('echo "{}" > package.json', { fatal: true })
shell.exec('curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore > .gitignore', { fatal: true })
shell.exec('yarn add --dev cypress', { fatal: true })
generateCypressProject()

async function generateCypressProject() {
  const cypress = execa('xvfb-run yarn cypress open', { shell: true })

  async function checkForCypressProject() {
    const deadline = Date.now() + 120e3
    const log = []
    while (Date.now() < deadline) {
      const { stdout: files } = await execa('find . -path \'./cypress/*.spec.*\'', { shell: true })
      const filesFound = files.split('\n').filter(x => x.trim()).length
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
      await new Promise(r => setTimeout(r, 1000))
    }
    throw new Error('Timed out waiting for Cypress project to be created')
  }

  checkForCypressProject()
}

