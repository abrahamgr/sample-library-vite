# custom-library

Bundle a library to test locally with [npm link](https://docs.npmjs.com/cli/v9/commands/npm-link?). It only exports components from [index.ts](/src/index.ts), it runs a local server to test this packages locally and then we can bundle to use in other project.

Configuration to build library and export only required components:

### [package.json](./package.json)

Add the following configuration.

```json
 "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/custom-library-es.js"
      }
    }
  },
  "module": "./dist/custom-library-es.js",
  "files": [
    "dist"
  ],
```

### [tsconfig.json](./tsconfig.json)

```json
   "allowSyntheticDefaultImports": true,
```

### [tsconfig.node.json](./tsconfig.node.json)

```json
   "allowSyntheticDefaultImports": true,
   "resolveJsonModule": true
   // package.json to import it in vite.config.ts
   "include": ["vite.config.ts", "package.json"]
```

### [vite.config.ts](./vite.config.ts)

```typescript
plugins: [
   react(),
   dts({
      // exclude this files to generate .d.ts
      exclude: [
         'src/App.tsx',
         'src/main.tsx'
      ]
   })
],
},
build: {
   lib: {
      // generate bundle only from references on index.ts
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CustomLibrary',
      formats: [ 'es' ],
      fileName: (format) => `custom-library-${format}.js`
   },
   rollupOptions: {
      external: [
         // exlude packages from peerDependencies
         ...Object.keys(localPackage.peerDependencies)
      ]
   }
},
```
