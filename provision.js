require('make-promises-safe')

const axios = require('axios')
const project = process.argv[2]
const repoInfo = require('./workspace/tmp/repo-info.json')

;(async () => {
  const axiosConfig = {
    headers: {
      Authorization: 'Bearer ' + process.env.GH_PUSH_TOKEN,
      Accept: 'application/vnd.github.baptiste-preview+json',
    },
  }

  const { data: repo } = await axios
    .get('https://api.github.com/repos/fresh-app/' + project, axiosConfig)
    .catch(async (e) => {
      if (e.response?.status === 404) {
        return axios.post(
          'https://api.github.com/orgs/fresh-app/repos',
          {
            name: project,
            has_issues: false,
            has_projects: false,
            has_wiki: false,
            is_template: true,
          },
          axiosConfig,
        )
      }
      throw e
    })

  const changes = {}
  const ensure = (k, v) => {
    if (repo[k] !== v) {
      changes[k] = v
      console.log('[%s] %s => %s', k, repo[k], v)
    }
  }

  ensure('description', repoInfo.description)
  ensure('has_issues', false)
  ensure('has_projects', false)
  ensure('has_wiki', false)
  ensure('is_template', true)
  ensure('homepage', `https://fresh-app.github.io/${project}`)
  if (Object.keys(changes).length > 0) {
    await axios.patch(
      `https://api.github.com/repos/fresh-app/${project}`,
      changes,
      axiosConfig,
    )
  }

  console.log(repo.full_name)
})()
