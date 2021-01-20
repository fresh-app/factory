
process.chdir('fresh-app')

require('child_process').execSync('yarn add --dev typescript @types/react @types/node', {
  stdio: 'inherit'
})

require('child_process').execSync('touch tsconfig.json', {
  stdio: 'inherit'
})

require('child_process').execSync('yarn build', {
  stdio: 'inherit'
})

require('child_process').execSync('rm -rf .next', {
  stdio: 'inherit'
})