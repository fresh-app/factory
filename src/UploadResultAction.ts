import { CommandLineAction } from '@rushstack/ts-command-line'
import { createHash } from 'crypto'
import { existsSync, readFileSync } from 'fs'
import { Octokit } from 'octokit'

export class UploadResultAction extends CommandLineAction {
  public constructor() {
    super({
      actionName: 'upload-result',
      summary: 'Upload result of last run',
      documentation: 'Upload the result of the last run to GitHub',
    })
  }
  protected onDefineParameters(): void {}
  protected async onExecute(): Promise<void> {
    const result = JSON.parse(readFileSync('workspace/tmp/result.json', 'utf8'))
    if (!process.env.GH_PUSH_TOKEN) {
      throw new Error('GH_PUSH_TOKEN is not set')
    }
    const octokit = new Octokit({ auth: process.env.GH_PUSH_TOKEN })
    const updateFile = async (
      path: string,
      contents: Buffer,
      message: string,
    ) => {
      const newSha = createHash('sha1').update(contents).digest('hex')
      const ptr = {
        owner: 'fresh-app',
        repo: 'results',
        path,
      }
      const oldSha = await octokit.rest.repos
        .getContent({ ...ptr })
        .then((res) => ('sha' in res.data ? res.data.sha : undefined))
        .catch((e: any) => (e.status === 404 ? undefined : Promise.reject(e)))
      if (oldSha === newSha) {
        console.log(`=> ${path} is up to date`)
        return
      }
      await octokit.rest.repos.createOrUpdateFileContents({
        ...ptr,
        ...(oldSha ? { sha: oldSha } : null),
        message,
        content: contents.toString('base64'),
        author: {
          name: 'dtinth-bot',
          email: 'dtinth-bot@users.noreply.github.com',
        },
        committer: {
          name: 'dtinth-bot',
          email: 'dtinth-bot@users.noreply.github.com',
        },
      })
    }
    await updateFile(
      result.generator + '.json',
      Buffer.from(JSON.stringify(result, null, 2)),
      `Upload ${result.generator} result`,
    )
    if (existsSync('workspace/tmp/screenshot.png')) {
      await updateFile(
        result.generator + '.png',
        readFileSync('workspace/tmp/screenshot.png'),
        `Upload ${result.generator} screenshot`,
      )
    }
  }
}
