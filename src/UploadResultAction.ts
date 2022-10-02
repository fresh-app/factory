import { CommandLineAction } from '@rushstack/ts-command-line'
import { readFileSync } from 'fs'
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
    const ptr = {
      owner: 'fresh-app',
      repo: 'results',
      path: result.generator + '.json',
    }
    const oldSha = await octokit.rest.repos
      .getContent({ ...ptr })
      .then((res) => ('sha' in res.data ? res.data.sha : undefined))
      .catch((e: any) => (e.status === 404 ? undefined : Promise.reject(e)))
    await octokit.rest.repos.createOrUpdateFileContents({
      ...ptr,
      ...(oldSha ? { sha: oldSha } : null),
      message: `Upload ${result.generator} result`,
      content: Buffer.from(JSON.stringify(result, null, 2)).toString('base64'),
    })
  }
}
