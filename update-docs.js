const glob = require('glob')
const out = []

for (const name of glob.sync('*.js', { cwd: 'generators' }).sort()) {
  const repoName = name.replace(/\.js$/, '')
  // const config = require('./generators/' + name)
  // const append = repoName.match(/\-ts$/) ? ' (TypeScript)' : ''
  out.push(`* *https://github.com/fresh-app/${repoName}[${repoName}]*`)
}

require('fs').writeFileSync(
  'docs/modules/ROOT/partials/projects.adoc',
  out.join('\n'),
)
