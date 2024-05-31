// import pluginNodeResolve from 'rollup-plugin-node-resolve';
//This plugin prevents packages listed in peerDependencies from being bundled with our component library
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

//efficiently bundles third party dependencies we've installed and use in node_modules
import resolve from '@rollup/plugin-node-resolve';

// //enables transpilation into CommonJS (CJS) format
import commonjs from '@rollup/plugin-commonjs';

//transpiled our TypeScript code into JavaScript. This plugin will use all the settings we have set in tsconfig.json.
//We set "useTsconfigDeclarationDir": true so that it outputs the .d.ts files in the directory specified by in tsconfig.json
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [peerDepsExternal, resolve, commonjs, typescript()],
  external: ['react', 'react-dom'],
};
