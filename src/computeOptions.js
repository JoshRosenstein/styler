import { flow, isDefined } from '@roseys/futils'

import { whenFunctionCallWith, isNumber, isString, logger, get } from './utils'

import lookupDefaultOptions from './lookupDefaultOptions'

export default ({ val, options, selector, props }) => {
  const defaultLookup = lookupDefaultOptions(props)('keys')(selector)
  const defaultGetter = lookupDefaultOptions(props)('getter')(selector)
  const log = logger(props['debug'])
  log('computeOptions')
  if (val && (options || defaultLookup || defaultGetter)) {
    let { key: themeKey, getter, postFn, preFn, path } = options
    if (preFn) {
      val = flow(preFn, whenFunctionCallWith(val, props))
    }

    themeKey = themeKey || path || defaultLookup || ''
    const isKeyEmpty = themeKey === ''

    if (isDefined(themeKey) && isString(val)) {
      /// Check Strip Negative Before lookingUp
      const isNeg = /^-.+/.test(val)
      const absN = isNeg ? val.slice(1) : val

      const themeProp = isDefined(path)
        ? `${themeKey}.${absN}`
        : `theme.${themeKey}.${absN}`

      val = get(themeProp, val)(props)

      val = isNeg ? (isNumber(val) ? val * -1 : '-' + val) : val
    }

    getter = getter || postFn || defaultGetter
    if (getter) {
      val = flow(
        getter,
        lookupDefaultOptions(props)('functions'),
        whenFunctionCallWith(val, props)
      )
    }
  }
  return val
}

// export const computeGetter = ({ val, selector, options, props }) => {
//   let { getter } = options
//   getter = getter || lookupDefaultOptions({}, 'getter', selector)
//   if (getter) {
//     val = R.pipe(
//       lookupDefaultOptions({}, 'functions'),
//       whenFunctionCallWith(val, props)
//     )(getter)
//     return val
//   }
//   return val
// }
//
// export const computeTheme = ({ val, selector, options, props }) => {
//   let { key: themeKey } = options
//   themeKey = themeKey || lookupDefaultOptions(props, 'keys', selector)
//
//   if (themeKey && isString(val)) {
//     /// Check Strip Negative Before lookingUp
//     const isNeg = /^-.+/.test(val)
//     const absN = isNeg ? val.slice(1) : val
//
//     val = getThemeAttr(`${themeKey}.${absN}`, val)(props)
//     val = isNeg ? (isNumber(val) ? val * -1 : '-' + val) : val
//   }
//
//   return val
// }
