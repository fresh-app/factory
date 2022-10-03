import { TerminalSession } from './TerminalSession'

export function defineGenerator(g: Generator) {
  return g
}

interface IconDarkLight {
  /** File name to use when in dark mode */
  dark: string
  /** File name to use when in light mode */
  light: string
}

export interface GeneratorInfo {
  description: string
  longDescription?: string
  displayedCommand?: string

  /** @deprecated - Use `framework` property instead */
  frameworkUrl?: string

  /** @deprecated - Use `framework` property instead */
  frameworkDocumentationUrl?: string

  framework?: {
    /** Name of the framework */
    name: string
    /** Image of the framework, should be name of the file in "images" directory. */
    image?: string | IconDarkLight
    /** URL of the framework’s home page */
    url: string
    /** URL to the framework’s documentation */
    documentationUrl: string
  }
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
