const config = require('./generators/' + process.argv[2])

require('child_process').execSync(
  'rm -rf workspace && docker rm -f factory-runner-instance && mkdir -p workspace/tmp',
  {
    stdio: 'inherit',
  },
)

require('child_process').execFileSync(
  'docker',
  [
    'run',
    ...['--name', `factory-runner-instance`],
    ...['-v', `${process.cwd()}:/opt/factory:ro`],
    ...['-i'],
    'factory-runner',
    ...['bash', '-ex'],
  ],
  {
    stdio: ['pipe', 'inherit', 'inherit'],
    input: config.command,
  },
)

require('child_process').execSync(
  'docker cp factory-runner-instance/:workspace/fresh-app/ workspace/fresh-app/',
  { stdio: 'inherit' },
)

require('fs').writeFileSync('workspace/tmp/project', process.argv[2])

const size = parseInt(
  require('child_process').execSync(
    'du --bytes --summarize workspace/fresh-app',
    {
      encoding: 'utf8',
    },
  ),
  10,
)

const sizeText = (size / 1e6).toFixed(1) + ' MB'

require('fs').writeFileSync(
  'workspace/tmp/message',
  config.description +
    ' as of ' +
    new Date(Date.now() - 86400e3).toISOString().split('T')[0] +
    ` (disk usage: ${sizeText})`,
)
