import {
  when,
  valueAsFunction,
  isObjectLiteral,
  isArray,
  isString,
  isFunction,
  isUndefinedOrFalse,
  pxToEm,
  startsWithAny,
  whenFunctionCallWith,
  getThemeAttr,
  mapObjOf,
  mergeAllDeepRight,
  filterNilAndEmpty,
  returnAsIs,
  pxToRem,
  pxToPct,
  isNumber,
  isNilOrEmptyOrFalse,
  px,
  isBool,
  isTrueBool,
  flow
} from './utils'

import {
  fromPairs,
  keys,
  toPairs,
  values,
  has,
  __,
  prop,
  isNil,
  merge,
  curry,
  startsWith,
  anyPass,
  pipe,
  defaultTo,
  reduceWhile,
  mergeDeepRight,
  objOf,
  map,
  isEmpty,
  converge,
  identity,
  always,
  ifElse,
  both,
  is,
  when as Rwhen,
  filter,
  contains,
  equals,
  reduce,
  mergeWith,
  concat
} from 'ramda'

// Mostly from the Shades library: https://github.com/bupa-digital/shades/
// inspired by https://github.com/jxnblk/styled-system
const isSelector = startsWithAny('.', '#', '>', '&', '*')

const isAtRule = startsWith('@')

const isPseudoSelector = startsWithAny(':')

const isSelectorOrPseudo = anyPass([isSelector, isPseudoSelector])

// filterNilAndEmpty(mergeAllDeepLeft(value))
const createStyleRule = (key, value) => {
  const ruleValue = flow(
    value,
    when(isArray).onlyThen(mergeAllDeepRight),
    wrapContentString(key)
  )
  return isNilOrEmptyOrFalse(ruleValue) ? [] : { [key]: ruleValue }
  // return { [key]: ruleValue }
}

const wrapContentString = key =>
  when(equals('content', key)).onlyThen(JSON.stringify)

const createNestedSelector = (parent, child) => {
  const selectorPair = [parent, child]
  if (isPseudoSelector(child)) {
    return selectorPair.join('').trim()
  }

  return selectorPair.join(' ').trim()
}

const DEFAULT_RULE_KEY_LOOKUP = {
  margin: 'space',
  marginTop: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginRight: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingRight: 'space',
  color: 'colors',
  fontSize: 'fontSizes',
  fontFamily: 'fonts',
  lineHeight: 'lineHeights',
  fontWeight: 'fontWeights',
  letterspace: 'letterspaces',
  maxWidth: 'maxWidths',
  minWidths: 'minWidths',
  height: 'heights',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  border: 'borders',
  borderColor: 'colors',
  backgroundColor: 'colors',
  boxShadow: 'shadows'
}

const DEFAULT_RULE_GETTER_LOOKUP = {
  margin: 'pxToRem',
  marginTop: 'pxToRem',
  marginBottom: 'pxToRem',
  marginLeft: 'pxToRem',
  marginRight: 'pxToRem',
  padding: 'pxToRem',
  paddingTop: 'pxToRem',
  paddingBottom: 'pxToRem',
  paddingLeft: 'pxToRem',
  paddingRight: 'pxToRem'
}

const DEFAULT_FUNCTIONS_LOOKUP = {
  returnAsIs: returnAsIs,
  identity: returnAsIs,
  propValue: returnAsIs,
  self: returnAsIs,
  pxToRem: pxToRem,
  pxToEm: pxToEm,
  pxToPct: pxToPct,
  px: px
}

const lookUpShortcut = curry((dictionary, value) =>
  Rwhen(isString, converge(defaultTo, [identity, prop(__, dictionary)]), value)
)

const mapMerge = curry((handlerFn, original) => {
  return flow(
    original,
    toPairs,
    reduce((result, [key, value]) => {
      const combiner = mergeWith(concat(__), result)
      const handlerOutput = handlerFn(key, value)
      const newResult = handlerOutput && combiner(handlerOutput)
      return newResult || result
    }, {})
  )
})

export const ruleParser = curry((parentSelector, props, obj) => {
  const parseNested = curry((newSelector, nestedRule) =>
    ruleParser(newSelector, props, nestedRule)
  )

  if (isFunction(obj))
    return flow(obj, whenFunctionCallWith(props), parseNested(parentSelector))

  const { options: globalOptions, ...rules } = obj
  return Object.entries(rules).reduce(
    (result, [key, value]) => {
      key = key.trim()
      // const addRuleBlock = (original = result, givenRules) =>
      //   mergeWith(concat, original, givenRules)

      const isFunctionRule = isFunction(value)
      const hasObjectLiteral = isObjectLiteral(value)
      const hasNestedRules = hasObjectLiteral || isFunctionRule
      const isPlaceHolderSelector = isEmpty(key) && hasNestedRules

      const isPatternBlock = key === '__match' && hasNestedRules

      const hasAtRuleBlock = isAtRule(key) && hasNestedRules
      const shouldBeCombinedSelector = isSelectorOrPseudo(key) && hasNestedRules
      const isPatternMatch =
        hasObjectLiteral &&
        !hasAtRuleBlock &&
        !shouldBeCombinedSelector &&
        !isFunctionRule &&
        !isPatternBlock

      if (hasAtRuleBlock) {
        const additionalRules = parseNested(parentSelector, value)

        return {
          ...result,
          [key]: additionalRules
        }
      }

      if (shouldBeCombinedSelector) {
        const mergedSelector = createNestedSelector(parentSelector, key)

        const additionalRules = flow(
          value,
          when(isFunction).onlyThen(fn => fn(props)),
          parseNested(mergedSelector)
        )

        return {
          ...result,
          ...additionalRules
        }
      }

      const existingRules = result[parentSelector] || []

      const falseToNull = value => {
        if (value === false) return null
        return value
      }

      if (isPatternBlock) {
        const matchedRules = flow(
          value,
          mapMerge((targetProp, outputValue) => {
            if (has(targetProp)(props)) {
              return flow(
                outputValue,
                whenFunctionCallWith(props[targetProp]),
                parseNested(parentSelector)
              )
            }
          })
        )

        return {
          ...result,
          [parentSelector]: [...existingRules, ...matchedRules[parentSelector]]
        }
      }

      if (isPatternMatch) {
        const { default: defaultValue, options: opt, ...matchers } = value

        const options = merge(globalOptions, opt)
        const DF = valueAsFunction(defaultValue)(props)

        const intersectedMatchers = filter(
          contains(__, keys(props)),
          keys(matchers)
        ) /// Maintains Order of matcher Keys

        let matchedPropName

        const reducer = reduceWhile(
          isUndefinedOrFalse,
          (previous, propName) => {
            matchedPropName = propName
            return flow(
              propName,
              prop(__, matchers),
              lookUpShortcut(DEFAULT_FUNCTIONS_LOOKUP),
              whenFunctionCallWith(props[propName], props),
              whenFunctionCallWith(props)
            )
          },
          false,
          intersectedMatchers
        )

        const matchedProp = prop(matchedPropName, props)
        let computedValue = pipe(falseToNull, defaultTo(DF))(reducer)

        let nonResponisiveComputedValue = computedValue
        let isResponsiveBoolean =
          isString(computedValue) && is(Object, matchedProp)

        if (isResponsiveBoolean) {
          computedValue = matchedProp
        }

        /// This is to check if defaultValue is a Function
        computedValue = isFunction(computedValue)
          ? computedValue(props)
          : computedValue

        const computeOptions = val => {
          if (options && val) {
            let { key: themeKey, getter } = options
            /// If options was not provided, check default lookUp
            themeKey = themeKey || DEFAULT_RULE_KEY_LOOKUP[key]
            if (themeKey && isString(val)) {
              /// Check Strip Negative Before lookingUp
              const isNeg = /^-.+/.test(val)
              const absN = isNeg ? val.slice(1) : val

              val = getThemeAttr(`${themeKey}.${absN}`, val)(props)
              val = isNeg ? (isNumber(val) ? val * -1 : '-' + val) : val
            }

            getter = getter || DEFAULT_RULE_GETTER_LOOKUP[key]
            if (getter) {
              val = pipe(
                lookUpShortcut(DEFAULT_FUNCTIONS_LOOKUP),
                whenFunctionCallWith(val, props)
              )(getter)
            }
          }
          return val
        }

        /// responisive PropVal
        if (isObjectLiteral(computedValue) || isArray(computedValue)) {
          let breakpoints = computedValue
          let themeBPs = getThemeAttr('breakpoints')(props)

          if (isArray(themeBPs)) {
            themeBPs = pipe(toPairs, fromPairs)(themeBPs)
          }

          if (isArray(breakpoints)) {
            breakpoints = pipe(toPairs, fromPairs)(breakpoints)

            if (isObjectLiteral(themeBPs)) {
              themeBPs = pipe(values, toPairs, fromPairs)(themeBPs)
            }
          }

          let getBp = prop(__, themeBPs)

          breakpoints = Object.keys(breakpoints)
            .sort((a, b) => getBp(a) - getBp(b))
            .reduce((acc, key) => {
              acc[key] = breakpoints[key]
              return acc
            }, {})

          const CSSObj = Object.keys(breakpoints).reduce((acc, bpKey) => {
            const minWidth = pxToEm(getBp(bpKey))
            const currentVal = Rwhen(
              both(always(isResponsiveBoolean), isBool),
              ifElse(
                isTrueBool,
                always(nonResponisiveComputedValue),
                always(null)
              )
            )(breakpoints[bpKey])
            const res = isNil(computeOptions(currentVal))
              ? {}
              : bpKey === 'mobile' || bpKey === '0' || minWidth < 1.1
                ? objOf(key, computeOptions(currentVal))
                : mapObjOf(
                    `@media screen and (min-width:${minWidth})`,
                    objOf(key, computeOptions(currentVal))
                  )

            return merge(acc, res)
          }, {})

          return {
            ...result,
            [parentSelector]: [...existingRules, CSSObj]
          }
        }
        computedValue = computeOptions(computedValue)

        return {
          ...result,
          [parentSelector]: [
            ...existingRules,
            createStyleRule(key, computedValue)
          ]
        }
      }

      if (isPlaceHolderSelector) {
        return {
          ...result,
          [parentSelector]: [
            ...existingRules,
            whenFunctionCallWith(props)(value)
          ]
        }
      }

      return {
        ...result,
        [parentSelector]: [
          ...existingRules,
          createStyleRule(key, whenFunctionCallWith(props)(value))
        ]
      }
    },
    { [parentSelector]: [] }
  )
})

const ruleCleaner = rules => {
  return filterNilAndEmpty(
    Object.entries(filterNilAndEmpty(rules)).reduce((result, [key, value]) => {
      if (isArray(value)) {
        const joinedRules = filterNilAndEmpty(mergeAllDeepRight(value))

        if (isEmpty(key.trim())) return mergeDeepRight(result, joinedRules)
        const key2 = isPseudoSelector(key) ? '&' + key : key
        return mergeDeepRight(result, { [key2]: joinedRules })
      }

      if (isObjectLiteral(value) && isAtRule(key)) {
        const innerRuleStrings = ruleCleaner(value)
        return mergeDeepRight(result, { [key]: innerRuleStrings })
      }

      console.error('Styler had an abnormal Rule Set:', {
        key,
        value
      })

      return filterNilAndEmpty(result)
    }, {})
  )
}

const styler = curry((rules, props) => {
  if (isArray(rules))
    return pipe(
      map(pipe(ruleParser('', props), ruleCleaner)),
      mergeAllDeepRight
    )(rules)

  return pipe(ruleParser('', props), ruleCleaner)(rules)
})

export default styler
