# sample-library-vite

Example of building a library and consume locally by other app.

Steps to build and use library

- Use [vite-plugin-dts](https://www.npmjs.com/package/vite-plugin-dts) to generate `.d.ts`.
- Use [lib](https://vitejs.dev/config/build-options.html#build-lib) from [vite](https://vitejs.dev/) configuration
- Update package to make references to library bundled
- Link library with [npm link](https://docs.npmjs.com/cli/v9/commands/npm-link?)
