import * as F from 'ramda'

import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

import pkg from './package.json'

const plugins = [
  resolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs({
    include: 'node_modules/**',
    extensions: ['.js']
  }),
  babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['last 2 versions', 'ie >= 9']
          },
          modules: false
        }
      ],
      '@babel/preset-stage-0'
    ],
    exclude: 'node_modules/**',
    runtimeHelpers: true
  }),
  replace({
    exclude: 'node_modules/**',
    ENV: JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  process.env.NODE_ENV === 'production' && uglify()
]
const external = F.keys(F.omit(['ramda'], pkg.dependencies))

const configBase = {
  input: 'src/index.js',
  external,
  legacy: false,
  treeshake: true,
  output: [
    { file: pkg.module, format: 'es', sourcemap: true },
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.browser, format: 'umd', name: pkg.moduleName, sourcemap: true }
  ],
  plugins
}

// const UMDBase = {
//   input: 'src/index.js',
//   external,
//   output: [
//     {
//       file: pkg.browser,
//       format: 'umd',
//       name: pkg.moduleName
//     }
//   ],
//
//   plugins
// }

export default configBase
