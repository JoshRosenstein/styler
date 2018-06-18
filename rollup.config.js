import * as F from '@roseys/futils'

import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'

import getNamedExports from './scripts/getNamedExports'
import pkg from './package.json'

const plugins = [
  resolve({
    jsnext: true,
    main: true,
    browser: true,
  }),
  commonjs({
    include: 'node_modules/**',
    extensions: ['.js']
    //namedExports: { '@roseys/futils/lib/isNil': ['isNil'] }
    //getNamedExports(['@roseys/futils/curry'])
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
  uglify(),
  filesize()
]
const external = F.keys(pkg.dependencies)

const configBase = {
  input: 'src/index.js',
  external,
  treeshake: true,
  output: [
    { file: pkg.module, format: 'es', sourcemap: false },
    { file: pkg.main, format: 'cjs', sourcemap: false },
    { file: pkg.browser, format: 'umd', name: pkg.moduleName, sourcemap: false }
  ],
  plugins
}



export default configBase
