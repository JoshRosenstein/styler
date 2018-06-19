import {
  merge,
  always,
  both,
  isEmpty,
  keys,
  prop,
  ifElse,
  objOf,
  values,
  pick,
  isNil,
  is,
  flip,
  mergeDeepRight,
  defaultTo,
  when,
  flow,
  isObject
} from '@roseys/futils'

import {
  whenFunctionCallWith,
  falseToNull,
  getThemeAttr,
  isBool,
  isTrueBool,
  pxToEm,
  isArray,
  isString,
  iterateUntilResult,
  arrToObj
} from './utils'
import computeOptions from './computeOptions'
import lookupDefaultOptions from './lookupDefaultOptions'

export default ({ value, props, globalOptions, key }) => {
  const { default: defaultValue, options: opt, ...matchers } = value
  const options = merge(globalOptions, opt)
  const intersectedMatchers = keys(pick(keys(matchers), props))
  let matchedPropName

  let computedValue
  if (isEmpty(intersectedMatchers) && isNil(defaultValue)) {
    return computedValue
  }

  if (isEmpty(intersectedMatchers) && !isNil(defaultValue)) {
    computedValue = whenFunctionCallWith(props)(defaultValue)
  }

  if (!isEmpty(intersectedMatchers)) {
    computedValue = flow(
      intersectedMatchers,
      iterateUntilResult((previous, propName) => {
        matchedPropName = propName

        return flow(
          propName,
          flip(prop)(matchers),
          lookupDefaultOptions(props)('functions'),
          whenFunctionCallWith(props[propName], props),
          whenFunctionCallWith(props)
        )
      }),
      falseToNull,
      defaultTo(whenFunctionCallWith(props)(defaultValue))
    )
  }

  if (!computedValue) {
    return computedValue
  }
  const matchedProp = prop(matchedPropName, props)
  let nonResponisiveComputedValue = computedValue
  let isResponsiveBoolean =
    (isString(computedValue) && is('Array', matchedProp)) ||
    is('Object', matchedProp)

  if (isResponsiveBoolean) {
    computedValue = matchedProp
  }
  const computeOpt = val =>
    computeOptions({ val, options, selector: key, props })

  if (isObject(computedValue) || isArray(computedValue)) {
    let breakpoints = computedValue
    let themeBPs = getThemeAttr('breakpoints')(props)

    if (isArray(themeBPs)) {
      themeBPs = arrToObj(themeBPs)
    }

    if (isArray(breakpoints)) {
      breakpoints = arrToObj(breakpoints)

      if (isObject(themeBPs)) {
        themeBPs = arrToObj(values(themeBPs))
      }
    }

    let getBp = flip(prop)(themeBPs)

    breakpoints = Object.keys(breakpoints)
      .sort((a, b) => getBp(a) - getBp(b))
      .reduce((acc, key) => {
        acc[key] = breakpoints[key]
        return acc
      }, {})

    const CSSObj = Object.keys(breakpoints).reduce((acc, bpKey) => {
      const bpVal=getBp(bpKey)
      if (isNil(bpVal)) {
  console.warn(
    `Styler could not find a match for breakPoints in ${key} style with ${matchedPropName}=${JSON.stringify(
      computedValue
    )}`
  )
  return acc
}

      const minWidth = pxToEm(bpVal)
      const currentVal = when(
        both(always(isResponsiveBoolean), isBool),
        ifElse(isTrueBool, always(nonResponisiveComputedValue), always(null))
      )(breakpoints[bpKey])
      const res = isNil(computeOpt(currentVal))
        ? {}
        : bpKey === 'mobile' || bpKey === '0' || minWidth < 1.1
          ? objOf(key, computeOpt(currentVal))
          : objOf(
              [`@media screen and (min-width:${minWidth})`, key],
              computeOpt(currentVal)
            )

      const mkey =
        bpKey === 'mobile' || bpKey === '0' || minWidth < 1.1
          ? key
          : `@media screen and (min-width:${minWidth})`

      return mergeDeepRight(acc, res)
    }, {})

    return CSSObj
  }

  return computeOpt(computedValue)
}
