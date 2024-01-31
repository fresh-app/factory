import { TerminalSession } from './TerminalSession'

export function defineGenerator(g: Generator) {
  return g
}

export function vite(
  template: string,
): Pick<
  Generator,
  'displayedCommand' | 'frameworkUrl' | 'frameworkDocumentationUrl'
> &
  GeneratorCommand {
  return {
    command: [
      `pnpm create vite fresh-app --template=${template}`,
      'cd fresh-app',
      'corepack use pnpm@latest',
      'pnpm build',
    ].join('\n'),
    displayedCommand: `pnpm create vite --template=${template}`,
    frameworkUrl: 'https://vitejs.dev/',
    frameworkDocumentationUrl: 'https://vitejs.dev/guide/',
  }
}

export function viteStatic(
  template: string,
): Pick<
  Generator,
  'displayedCommand' | 'frameworkUrl' | 'frameworkDocumentationUrl'
> &
  GeneratorCommand &
  GeneratorStaticOutput {
  return {
    ...vite(template),
    staticOutputDirectory: 'dist',
  }
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
  deprecationNotice?: string

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
