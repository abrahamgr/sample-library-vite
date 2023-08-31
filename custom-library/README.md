# custom-library

Exposes a library to test locally with [npm link](https://docs.npmjs.com/cli/v9/commands/npm-link?). It only exports components from [index.ts](/src/index.ts), it runs a local server to tests this packages locally and then we can bundle to test in other project.

Configuration to build library and export only required components:
