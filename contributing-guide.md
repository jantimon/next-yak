# Contributing to next-yak

Thank you for your interest in contributing to next-yak! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Development Setup](#development-setup)
  - [Prerequisites](#prerequisites)
  - [Initial Setup](#initial-setup)
  - [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
  - [Running Tests](#running-tests)
  - [Updating Test Snapshots](#updating-test-snapshots)
  - [Running the Example App](#running-the-example-app)
- [Building](#building)
- [Debugging](#debugging)
- [Making Contributions](#making-contributions)
- [Common Issues](#common-issues)

## Development Setup

### Prerequisites

Before you begin, make sure you have the following installed:

1. Node.js (v20 or later)
2. pnpm (v8.6.1 or later)
3. Rust toolchain - **Important**: Install from [rust-lang.org](https://www.rust-lang.org/tools/install)
   - ⚠️ Do not use brew or other package managers to install Rust, as this can lead to permission issues
   - Follow the official installation instructions for your platform
4. Rust WebAssembly target:
   ```bash
   rustup target add wasm32-wasi
   ```

### Initial Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/jantimon/next-yak.git
   cd next-yak
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Build the SWC plugin (required before running examples or tests):
   ```bash
   pnpm run build:swc
   ```

### Project Structure

The repository is organized into several key directories:

- `/css_in_js_parser/` - Rust library for parsing CSS-in-JS syntax
- `/relative_posix_path/` - Rust utility for path handling
- `/yak_swc/` - Core SWC plugin implementation in Rust
- `/packages/next-yak/` - Main NPM package with TypeScript/JavaScript code
- `/example/` - Example Next.js application demonstrating usage

## Development Workflow

### Running Tests

The project includes tests for both JavaScript and Rust components:

1. Run all tests:
   ```bash
   pnpm test
   ```

2. Run only Rust tests:
   ```bash
   cd yak_swc
   cargo test
   ```

3. Watch mode for JavaScript tests:
   ```bash
   pnpm test:watch
   ```

### Updating Test Snapshots

For updating test snapshots in the SWC plugin:

```bash
cd yak_swc
UPDATE=1 cargo test
```

For JavaScript snapshots:
```bash
pnpm test:snapshots
```

### Running the Example App

1. Ensure you've built the SWC plugin first:
   ```bash
   pnpm run build:swc
   ```

2. Start the example app:
   ```bash
   pnpm example
   ```

## Building

1. Build everything:
   ```bash
   pnpm run build
   ```

2. Build only the SWC plugin:
   ```bash
   pnpm run build:swc
   ```

3. Watch mode for development:
   ```bash
   pnpm run watch
   ```

## Debugging

When debugging the SWC plugin, you can enable debug logging:

```js
// next.config.js
export default withYak({
  experiments: {
    debug: true, // or { filter: (path) => path.includes('component.tsx'), type: 'css' }
  }
});
```

Debug types:
- `'ts'` - Show transformed TypeScript
- `'css'` - Show extracted CSS
- `'css resolved'` - Show CSS after resolving imports

## Making Contributions

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes, following these guidelines:
   - Write tests for new features
   - Follow existing code style
   - Keep commits focused and atomic
   - Write clear commit messages
4. Run tests to ensure everything works
5. Push changes and create a pull request

## Common Issues

### Rust Setup Issues

- **Permission problems with Rust**: Make sure to install Rust from [rust-lang.org](https://www.rust-lang.org/tools/install) and not through package managers
- **Missing wasm32-wasi target**: Run `rustup target add wasm32-wasi`
- **Cargo build failures**: Ensure you have the latest stable Rust toolchain with `rustup update stable`

### Build Issues

- **SWC plugin not found**: Make sure to run `pnpm run build:swc` before starting the example app
- **Missing dependencies**: Run `pnpm install` and ensure all peer dependencies are satisfied

### Test Issues

- **Snapshot test failures**: Use `UPDATE=1 cargo test` in the yak_swc directory to update Rust snapshots
- **JavaScript test failures**: Run `pnpm test:snapshots` to update JavaScript snapshots

---

For any questions not covered here, please feel free to [open an issue](https://github.com/jantimon/next-yak/issues/new).
