import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
// import cleanup from 'rollup-plugin-cleanup'
import filesize from 'rollup-plugin-filesize'

// import getNamedExports from './scripts/getNamedExports'
import pkg from './package.json'

const dyno= process.env.NODE_ENV ==='production'? [uglify(),filesize()]:[filesize()]
const plugins = [
  resolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs({
    include: 'node_modules/**'
    // namedExports: { '@roseys/futils/lib/isNil': ['isNil'] }
    // getNamedExports(['@roseys/futils/curry'])
  }),
  babel({
    babelrc: false,
    presets: [
      [
        'babel-preset-env',
        {
          targets: {
            browsers: ['last 2 versions', 'ie >= 9']
          },
          modules: false
        }
      ],
      'stage-0'
    ],
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    plugins:['external-helpers']
  }),
  replace({
    exclude: 'node_modules/**',
    ENV: JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  uglify(),
  filesize()
]
const external = Object.keys(pkg.dependencies)

const configBase = {
  input: 'src/index.js',
  treeshake:true,

  output: [
    { file: pkg.main, format: 'cjs', sourcemap: false ,exports:'named'},
    { file: pkg.browser, format: 'umd', name: pkg.moduleName, sourcemap: false ,exports:'named'}
  ],
  plugins
}

const configES = {
  input: 'src/index.js',
  treeshake:true,
  external,
  output: [
    { file: pkg.module, format: 'es', sourcemap: false ,exports:'named'},

  ],
  plugins
}


export default [configBase,configES]
