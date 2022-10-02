import { TerminalSession } from './TerminalSession'

export function defineGenerator(g: Generator) {
  return g
}

export interface GeneratorInfo {
  description: string
  longDescription?: string
  repoDescriptionOverride?: string
}

export interface GeneratorScript {
  script: (session: TerminalSession) => Promise<void>
}

export interface GeneratorCommand {
  command: string
}

export type Generator = GeneratorInfo & (GeneratorScript | GeneratorCommand)
