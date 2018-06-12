
const path = require('path')
const fs = require('fs')
const nodeEval = require('node-eval')



 export function getModuleExports(moduleId) {
  const id = require.resolve(moduleId)
  const moduleOut = nodeEval(fs.readFileSync(id).toString(), id)
  let result = []
  const excludeExports = /^(default|__)/
  if (moduleOut && typeof moduleOut === 'object') {
    result = Object.keys(moduleOut).filter(name => !excludeExports.test(name))
  }

  return result
}

 export default function getNamedExports(moduleIds) {
  const result = {}
  moduleIds.forEach(id => {
    result[id] = getModuleExports(id)
  })
  return result
}

// node scripts/getNamedExports.js

//console.log(getNamedExports(['@roseys/futils/curry']))
