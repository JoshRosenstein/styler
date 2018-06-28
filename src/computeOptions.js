import { flow, isDefined } from '@roseys/futils'

import { whenFunctionCallWith, isNumber, isString, get } from './utils'

import lookupDefaultOptions from './lookupDefaultOptions'

export default ({ val, options, selector, props }) => {
  const defaultLookup = lookupDefaultOptions(props)('keys')(selector)
  const defaultGetter = lookupDefaultOptions(props)('getter')(selector)

  if (val && (options || defaultLookup || defaultGetter)) {
    let { key: themeKey, getter, postFn, preFn, path } = options
    if (preFn) {
      val = flow(preFn, whenFunctionCallWith(val, props))
    }

    themeKey = themeKey || path || defaultLookup || ''

    if (isDefined(themeKey) && isString(val)) {
      /// Check Strip Negative Before lookingUp
      const isNeg = /^-.+/.test(val)
      val = isNeg ? val.slice(1) : val
      const themeProp = isDefined(path)
        ? `${themeKey}.${val}`
        : `theme.${themeKey}.${val}`
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
