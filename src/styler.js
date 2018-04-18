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
  mergeAllDeepLeft,
  filterNilAndEmpty
} from './utils'

import {
  fromPairs,
  toPairs,
  values,
  __,
  prop,
  isNil,
  merge,
  mergeAll,
  curry,
  startsWith,
  anyPass,
  pipe,
  defaultTo,
  intersection,
  reduceWhile,
  mergeDeepLeft,
  objOf,
  map,
  isEmpty
} from 'ramda'

// Mostly from the Shades library: https://github.com/bupa-digital/shades/
// inspired by https://github.com/jxnblk/styled-system
const isSelector = startsWithAny('.', '#', '>', '&', '*')

const isAtRule = startsWith('@')

const isPseudoSelector = startsWithAny(':')

const isSelectorOrPseudo = anyPass([isSelector, isPseudoSelector])

const createStyleRule = (key, value) => {
  const ruleValue = when(isArray).onlyThen(mergeAll)(value)
  return { [key]: ruleValue }
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
const ruleParser = curry((parentSelector, props, obj) => {
  if (isFunction(obj)) return ruleParser(parentSelector, props, obj(props))

  const { options: globalOptions, ...rules } = obj
  return Object.entries(rules).reduce(
    (result, [key, value]) => {
      const isFunctionRule = isFunction(value)
      const hasObjectLiteral = isObjectLiteral(value)
      const hasNestedRules = hasObjectLiteral || isFunctionRule

      const hasAtRuleBlock = isAtRule(key) && hasNestedRules

      const shouldBeCombinedSelector = isSelectorOrPseudo(key) && hasNestedRules

      const isPatternMatch =
        hasObjectLiteral &&
        !hasAtRuleBlock &&
        !shouldBeCombinedSelector &&
        !isFunctionRule

      if (hasAtRuleBlock) {
        const additionalRules = ruleParser(parentSelector, props, value)

        return {
          ...result,
          [key]: additionalRules
        }
      }

      if (shouldBeCombinedSelector) {
        const additionalRules = pipe(
          when(isFunction).onlyThen(fn => fn(props)),
          ruleParser(key, props)
        )(value)

        return {
          ...result,
          ...additionalRules
        }
      }

      // Rule-level stuff below

      const existingRules = result[parentSelector] || []

      const falseToNull = value => {
        if (value === false) return null
        return value
      }

      if (isPatternMatch) {
        const { default: defaultValue, options: opt, ...matchers } = value

        const options = merge(globalOptions, opt)
        const DF = valueAsFunction(defaultValue)(props)
        const allPropNames = Object.keys(props)
        const allMatchers = Object.keys(matchers)
        const matchingProps = intersection(allPropNames, allMatchers)
        const reducer = reduceWhile(
          isUndefinedOrFalse,
          (previous, propName) =>
            whenFunctionCallWith(props[propName], props)(matchers[propName]),
          false,
          matchingProps
        )
        let computedValue = pipe(falseToNull, defaultTo(DF))(reducer)
        /// If prop passed is a function, execute it
        computedValue = isFunction(computedValue)
          ? computedValue(props)
          : computedValue

        const computeOptions = v => {
          let val = v
          if (options && val) {
            let { key: themeKey, getter } = options
            /// If options was not provided, check default lookUp
            themeKey = themeKey || DEFAULT_RULE_KEY_LOOKUP[key]
            if (themeKey && isString(val)) {
              val = getThemeAttr(`${themeKey}.${val}`, val)(props)
            }
            if (getter) {
              val = valueAsFunction(getter)(val, props)
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
            const currentVal = breakpoints[bpKey]
            const res = isNil(computeOptions(currentVal))
              ? {}
              : bpKey === 'mobile' || bpKey === '0' || minWidth < 1.1
                ? objOf(key, computeOptions(currentVal))
                : mapObjOf(
                    `@media screen and (min-width:${minWidth})`,
                    objOf(key, computeOptions(currentVal))
                  )

            return merge(acc, res)
          }, '')

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
  return Object.entries(rules).reduce((result, [key, value]) => {
    if (isArray(value)) {
      const joinedRules = filterNilAndEmpty(mergeAllDeepLeft(value))

      if (isEmpty(key)) return mergeDeepLeft(result, joinedRules)
      const key2 = isPseudoSelector(key) ? '&' + key : key
      return mergeDeepLeft(result, { [key2]: joinedRules })
    }

    if (isObjectLiteral(value) && isAtRule(key)) {
      const innerRuleStrings = ruleCleaner(value)
      return mergeDeepLeft(result, { [key]: innerRuleStrings })
    }

    console.error('Styler had an abnormal Rule Set:', {
      key,
      value
    })

    return filterNilAndEmpty(result)
  }, {})
}

// const styler = rules => props => ruleCleaner(ruleParser('', props, rules))

const styler = curry((rules, props) => {
  if (isArray(rules))
    return pipe(
      map(pipe(ruleParser('', props), ruleCleaner)),
      mergeAllDeepLeft
    )(rules)

  return ruleCleaner(ruleParser('', props, rules))
})

export default styler
