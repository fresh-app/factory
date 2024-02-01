import { CommandLineFlagParameter } from '@rushstack/ts-command-line'
import { spawn } from 'node-pty'
import execa from 'execa'
import { TerminalSession } from './TerminalSession'
import { Generator } from './defineGenerator'
import { readFileSync, writeFileSync } from 'fs'
import { GeneratorAction } from './GeneratorAction'
import { getRepoDescription } from './getRepoDescription'
import waitOn from 'wait-on'

export class RunAction extends GeneratorAction {
  private _skipGenerator!: CommandLineFlagParameter

  constructor() {
    super({
      actionName: 'run',
      summary: 'Run a generator',
      documentation: 'Run a generator',
    })
  }

  protected onDefineParameters(): void {
    super.onDefineParameters()
    this._skipGenerator = this.defineFlagParameter({
      parameterLongName: '--skip-generator',
      description: 'Skip running the generator. This is useful for debugging',
    })
  }

  protected async onExecute(): Promise<void> {
    console.log('=> Running generator', this.generator)
    const { default: generator } = (await import(
      `./generators/${this.generator}.ts`
    )) as { default: Generator }

    if (!this._skipGenerator.value) {
      console.log('=> Prepare output folder')
      await this.run(`rm -rf workspace/tmp`)
      await this.run(`mkdir -p workspace/tmp`)

      const startTime = new Date().toISOString()
      const child = spawn(
        'asciinema',
        ['rec', '-c', 'bin/runner', 'workspace/tmp/terminal.cast'],
        {
          name: 'xterm-color',
          cols: 120,
          rows: 120,
        },
      )
      const session = new TerminalSession(child)
      await session.waitForText('workspace$')
      if ('script' in generator) {
        await generator.script(session)
      } else {
        const completedMessage = readFileSync(
          'src/completed.txt',
          'utf8',
        ).trim()
        const escapedCommand = generator.command.replace(/'/g, "'\\''")
        const bashCommand = `bash -exc '${escapedCommand}' < /dev/null; cat /opt/factory/src/completed.txt`
        await session.send(bashCommand)
        await session.waitForText(completedMessage)
      }
      console.log('=> Workspace setup script running completed')

      if (
        'staticOutputDirectory' in generator ||
        'serverCommand' in generator
      ) {
        const cdTarget =
          'staticOutputDirectory' in generator
            ? '/workspace/fresh-app/' + generator.staticOutputDirectory
            : '/workspace/fresh-app'
        const serverCommand =
          'serverCommand' in generator ? generator.serverCommand : 'http-server'
        const serverPort =
          'serverCommand' in generator ? generator.serverPort : 8080
        console.log('=> Starting server on port', serverPort)
        await session.send(`cd ${cdTarget}`)
        await session.waitForText('$')
        await session.send(serverCommand)
        await waitOn({
          resources: [`tcp:localhost:${serverPort}`],
          timeout: 60000,
        })
        console.log('=> Server started')
        await this.run(
          `bin/screenshotter /opt/factory/bin/screenshot http://localhost:${serverPort} || echo 'Unable to capture screenshot.'`,
        )
        console.log('=> Done screenshot capturing attempt')
      }
      child.kill()

      const finishTime = new Date().toISOString()
      writeFileSync(
        'workspace/tmp/timing.json',
        JSON.stringify({ startTime, finishTime }),
      )
      writeFileSync('workspace/tmp/terminal.log', session.serialize())
    }

    {
      console.log('=> Copying output from container')
      await this.run(`rm -rf workspace/fresh-app`)
      await this.run(
        `docker cp factory-runner-instance/:workspace/fresh-app/ workspace/fresh-app/`,
      )
      await this.run(
        `docker cp factory-screenshotter-instance/:workspace/screenshot.png workspace/tmp/screenshot.png || echo 'No screenshot found.'`,
      )
    }

    console.log('=> Checking size of fresh-app')
    const size = parseInt(
      (
        await execa('du --bytes --summarize workspace/fresh-app', {
          shell: true,
        })
      ).stdout,
      10,
    )
    const sizeText = (size / 1e6).toFixed(1) + ' MB'
    console.log('Total size:', sizeText)

    {
      console.log('=> Generating commit message')
      const commitMessage =
        generator.description +
        ' as of ' +
        new Date(Date.now() - 86400e3).toISOString().split('T')[0] +
        ` (disk usage: ${sizeText})`
      writeFileSync('workspace/tmp/message', commitMessage)
      console.log('Commit message:', commitMessage)
    }

    {
      console.log('=> Generating repository info')
      const repoInfo = {
        description: getRepoDescription(generator),
      }
      writeFileSync('workspace/tmp/project', this.generator)
      writeFileSync('workspace/tmp/repo-info.json', JSON.stringify(repoInfo))
      console.log('Repository info:', repoInfo)
    }

    const timingInfo = JSON.parse(
      readFileSync('workspace/tmp/timing.json', 'utf8'),
    )
    {
      console.log('=> Generating summary')
      const elapsed =
        Date.parse(timingInfo.finishTime) - Date.parse(timingInfo.startTime)
      const elapsedText = Math.round(elapsed / 1e3) + ' seconds'
      const summary = [
        `## ${this.generator}`,
        '',
        '| Item | Details |',
        '| --- | --- |',
        `| Started at | ${timingInfo.startTime} |`,
        `| Finished at | ${timingInfo.finishTime} |`,
        `| Elapsed | ${elapsedText} |`,
        `| Size | ${sizeText} |`,
      ].join('\n')
      console.log(summary)
      if (process.env.GITHUB_STEP_SUMMARY) {
        writeFileSync(process.env.GITHUB_STEP_SUMMARY, summary)
      }
    }

    {
      const log = readFileSync('workspace/tmp/terminal.log', 'utf8').split('\n')
      console.log('=> Generating result file')
      const result = {
        generator: this.generator,
        size,
        timing: timingInfo,
        log,
        description: getRepoDescription(generator),
        buildUrl: process.env.BUILD_URL,
        frameworkUrl: generator.frameworkUrl,
        frameworkDocumentationUrl: generator.frameworkDocumentationUrl,
      }
      writeFileSync(
        'workspace/tmp/result.json',
        JSON.stringify(result, null, 2),
      )
    }
  }

  private async run(command: string): Promise<void> {
    console.log('$', command)
    await execa(command, { shell: true, stdio: 'inherit' })
  }
}
