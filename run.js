const config = require('./generators/' + process.argv[2])

require('child_process').execSync('rm -rf tmp && mkdir -p tmp', {
  stdio: 'inherit'
})

require('child_process').execSync('rm -rf fresh-app', {
  stdio: 'inherit'
})

require('child_process').execSync(config.command, {
  stdio: 'inherit'
})

require('fs').writeFileSync('tmp/project', process.argv[2])
require('fs').writeFileSync('tmp/message', config.description + ' as of ' + new Date(Date.now() - 86400e3).toISOString().split('T')[0])