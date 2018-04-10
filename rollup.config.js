import R from 'ramda';

import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

import pkg from './package.json';

const plugins = [
  resolve({
    preferBuiltins: true,
  }),
  commonjs({
    ignoreGlobal: true,
    include: 'node_modules/**',
  }),
  babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          'targets': {
            'browsers': [
              'last 2 versions',
              'ie >= 9'
            ]
          },
          'modules': false
        }
      ],
      '@babel/preset-stage-0'
    ],
    exclude: 'node_modules/**',
    runtimeHelpers: true
  }),
  replace({
    __DEV__: JSON.stringify(false),
  }),
];

const configBase = {
  input: 'src/index.js',
  external: R.concat(R.keys(pkg.peerDependencies), R.keys(pkg.dependencies)),
  output: [
    { file: pkg.module, format: 'es', sourcemap: true },
    { file: pkg.main, format: 'cjs', sourcemap: true },
  ],
  plugins,
};

const UMDBase = {
  input: 'src/index.js',
  external: R.concat(R.keys(pkg.peerDependencies), R.keys(pkg.dependencies)),
  output: [
    { file: pkg.browser, format: 'umd', name: pkg.moduleName, globals: { ramda: `R` } },
  ],

  plugins:[...plugins,uglify()]

};

export default [configBase,UMDBase]
