import { pipe,isEmpty } from '@roseys/futils'

import { whenFunctionCallWith, getThemeAttr, isNumber, isString } from './utils'

import lookupDefaultOptions from './lookupDefaultOptions'

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
// // TODO: themeKey empty string, if grabbing from root
export default ({ val, options, selector, props }) => {
  if (options && val) {
    let { key: themeKey, getter } = options
    /// If options was not provided, check default lookUp

    themeKey = themeKey || lookupDefaultOptions(props)('keys')(selector)

    if (themeKey && isString(val)) {
      /// Check Strip Negative Before lookingUp
      const isNeg = /^-.+/.test(val)
      const absN = isNeg ? val.slice(1) : val
      const themeProp = !isEmpty(themeKey) ? `${themeKey}.${absN}` : absN
      val = getThemeAttr(themeProp, val)(props)
      val = isNeg ? (isNumber(val) ? val * -1 : '-' + val) : val
    }

    getter = getter || lookupDefaultOptions(props)('getter')(selector)
    if (getter) {
      val = pipe(
        lookupDefaultOptions(props)('functions'),

        whenFunctionCallWith(val, props)
      )(getter)
    }
  }
  return val
}
