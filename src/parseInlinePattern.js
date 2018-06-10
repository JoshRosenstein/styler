import * as R from 'ramda'
import {
  whenFunctionCallWith,
  isObjectLiteral,
  flow,
  isUndefinedOrFalse,
  falseToNull,
  getThemeAttr,
  mapObjOf,
  isBool,
  isTrueBool,
  pxToEm,
  isArray,
  isString
} from './utils'
import computeOptions from './computeOptions'
import lookupDefaultOptions from './lookupDefaultOptions'

export default ({ value, props, globalOptions, key }) => {
  const { default: defaultValue, options: opt, ...matchers } = value
  const options = R.merge(globalOptions, opt)
  const intersectedMatchers = R.filter(
    R.contains(R.__, R.keys(props)),
    R.keys(matchers)
  )
  let matchedPropName

  const reducer = R.reduceWhile(
    isUndefinedOrFalse,
    (previous, propName) => {
      matchedPropName = propName
      return flow(
        propName,
        R.prop(R.__, matchers),
        lookupDefaultOptions(props, 'functions'),
        whenFunctionCallWith(props[propName], props),
        whenFunctionCallWith(props)
      )
    },
    false,
    intersectedMatchers
  )

  let computedValue

  if (R.isEmpty(R.values(intersectedMatchers)) && R.isNil(defaultValue)) {
    return computedValue
  }

  if (R.isEmpty(R.values(intersectedMatchers)) && !R.isNil(defaultValue)) {
    computedValue = whenFunctionCallWith(props)(defaultValue)
  }

  if (!R.isEmpty(intersectedMatchers)) {
    computedValue = R.pipe(
      falseToNull,
      R.defaultTo(whenFunctionCallWith(props)(defaultValue))
    )(reducer)
  }

  if (!computedValue) {
    return computedValue
  }
  const matchedProp = R.prop(matchedPropName, props)
  let nonResponisiveComputedValue = computedValue
  let isResponsiveBoolean = isString(computedValue) && R.is(Object, matchedProp)

  if (isResponsiveBoolean) {
    computedValue = matchedProp
  }
  const computeOpt = val =>
    computeOptions({ val, options, selector: key, props })

  if (isObjectLiteral(computedValue) || isArray(computedValue)) {
    let breakpoints = computedValue
    let themeBPs = getThemeAttr('breakpoints')(props)

    if (isArray(themeBPs)) {
      themeBPs = R.pipe(R.toPairs, R.fromPairs)(themeBPs)
    }

    if (isArray(breakpoints)) {
      breakpoints = R.pipe(R.toPairs, R.fromPairs)(breakpoints)

      if (isObjectLiteral(themeBPs)) {
        themeBPs = R.pipe(R.values, R.toPairs, R.fromPairs)(themeBPs)
      }
    }

    let getBp = R.prop(R.__, themeBPs)

    breakpoints = Object.keys(breakpoints)
      .sort((a, b) => getBp(a) - getBp(b))
      .reduce((acc, key) => {
        acc[key] = breakpoints[key]
        return acc
      }, {})
    // key='&'
    const CSSObj = Object.keys(breakpoints).reduce((acc, bpKey) => {
      const minWidth = pxToEm(getBp(bpKey))
      const currentVal = R.when(
        R.both(R.always(isResponsiveBoolean), isBool),
        R.ifElse(
          isTrueBool,
          R.always(nonResponisiveComputedValue),
          R.always(null)
        )
      )(breakpoints[bpKey])
      const res = R.isNil(computeOpt(currentVal))
        ? {}
        : bpKey === 'mobile' || bpKey === '0' || minWidth < 1.1
          ? R.objOf(key, computeOpt(currentVal))
          : mapObjOf(
              `@media screen and (min-width:${minWidth})`,
              R.objOf(key, computeOpt(currentVal))
            )

      const mkey =
        bpKey === 'mobile' || bpKey === '0' || minWidth < 1.1
          ? key
          : `@media screen and (min-width:${minWidth})`

      return R.mergeDeepRight(acc, res)
    }, {})

    return CSSObj
  }

  return computeOpt(computedValue)
}
