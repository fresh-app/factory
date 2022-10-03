import { TerminalSession } from './TerminalSession'

export function defineGenerator(g: Generator) {
  return g
}

export interface GeneratorInfo {
  description: string
  longDescription?: string
  displayedCommand?: string
  frameworkUrl?: string
  frameworkDocumentationUrl?: string
}

export interface GeneratorScript {
  script: (session: TerminalSession) => Promise<void>
}

export interface GeneratorCommand {
  command: string
}

export interface GeneratorStaticOutput {
  staticOutputDirectory: string
}

export interface GeneratorServer {
  serverCommand: string
  serverPort: number
}

export type Generator = GeneratorInfo &
  (GeneratorScript | GeneratorCommand) &
  (GeneratorServer | GeneratorStaticOutput | {})
