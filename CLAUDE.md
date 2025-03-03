# TypeScript Project Guidelines

## Build & Run Commands
- `pnpm factory`: Run the main application
- Build system uses TSX for TypeScript execution

## TypeScript Configuration
- Target: ES2016
- Module: CommonJS
- Strict type checking enabled
- Uses noEmit (relies on tsx for direct execution)

## Code Style Patterns
- Import statements: one import per line
- Class naming: PascalCase (e.g., `TerminalSession`, `GeneratorAction`)
- Interface naming: PascalCase with semantic names (e.g., `Generator`, `GeneratorInfo`)
- Error handling: Explicit error objects with detailed messages
- Type annotations: Explicit return types on methods, interface-based types
- File organization: One class/concept per file
- Parameter naming: camelCase with underscores for private members

## Project Structure
- `/src`: Main source code
- `/src/generators`: Generator definitions for various project types
- TypeScript classes follow single responsibility principle
- Command-line interface using @rushstack/ts-command-line

## Node.js Version Management
To upgrade Node.js version, update these files:
1. `package.json`: Update the `engines.node` field
2. `runner/Dockerfile`: Update the Node.js base image
3. GitHub workflow files (`.github/workflows/*.yml`): Update `node-version`
4. `.tool-versions`: Update the Node.js version for asdf users