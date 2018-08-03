import { flow, isDefined ,isString} from '@roseys/futils'

import {
  whenFunctionCallWith,
  isNumber,
  get,
  isTemplate,
  evalTemplate
} from './utils'

import lookupDefaultOptions from './lookupDefaultOptions'

export default ({ val, options, selector, props }) => {
  let {
    key: themeKey,
    getter,
  } = options

  const {
    defaultLookup: doDefaultLookup = true,
    defaultTransform: doDefaultTransform = true,
    postFn,
    preFn,
    path
  } = options

  const defaultLookup =
    doDefaultLookup && lookupDefaultOptions(props)('keys')(selector)
  const defaultGetter =
    doDefaultTransform && lookupDefaultOptions(props)('getter')(selector)

  if (isTemplate(val)) {
    val = evalTemplate(val, props)
  }

  if (
    val &&
    (defaultLookup || defaultGetter || getter || postFn || preFn || path)
  ) {
    if (preFn) {
      val = flow(preFn, whenFunctionCallWith(val, props))
    }

    themeKey = themeKey || path || defaultLookup || ''

    if (isDefined(themeKey) && isString(val)) {
      // / Check Strip Negative Before lookingUp
      const isNeg = /^-.+/.test(val)
      val = isNeg ? val.slice(1) : val
      const themeProp = isDefined(path)
        ? `${themeKey}.${val}`
        : `theme.${themeKey}.${val}`
      val = get(themeProp, val)(props)

      val = isNeg ? (isNumber(val) ? val * -1 : `-${  val}`) : val
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
