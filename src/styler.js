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
  filterNilAndEmpty,
  returnAsIs,
  pxToRem,
  pxToPct,
  isNumber,
  isNilOrEmptyOrFalse,
  px,
  isBool,
  isTrueBool
} from './utils'

import {
  fromPairs,
  toPairs,
  values,
  __,
  prop,
  isNil,
  merge,
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
  isEmpty,
  converge,
  identity,
  always,
  ifElse,
  both,
  is,
  when as Rwhen
} from 'ramda'

// Mostly from the Shades library: https://github.com/bupa-digital/shades/
// inspired by https://github.com/jxnblk/styled-system
const isSelector = startsWithAny('.', '#', '>', '&', '*')

const isAtRule = startsWith('@')

const isPseudoSelector = startsWithAny(':')

const isSelectorOrPseudo = anyPass([isSelector, isPseudoSelector])

// filterNilAndEmpty(mergeAllDeepLeft(value))
const createStyleRule = (key, value) => {
  const ruleValue = when(isArray).onlyThen(mergeAllDeepLeft)(value)
  return isNilOrEmptyOrFalse(ruleValue) ? {} : { [key]: ruleValue }
  // return { [key]: ruleValue }
}

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

const ruleParser = curry((parentSelector, props, obj) => {
  if (isFunction(obj)) return ruleParser(parentSelector, props, obj(props))

  const { options: globalOptions, ...rules } = obj
  return Object.entries(rules).reduce(
    (result, [key, value]) => {
      key = key.trim()
      const isFunctionRule = isFunction(value)
      const hasObjectLiteral = isObjectLiteral(value)
      const hasNestedRules = hasObjectLiteral || isFunctionRule
      const isPlaceHolderSelector = isEmpty(key) && hasNestedRules

      const hasAtRuleBlock = isAtRule(key) && hasNestedRules
      const shouldBeCombinedSelector = isSelectorOrPseudo(key) && hasNestedRules
      const isPatternMatch =
        hasObjectLiteral &&
        !hasAtRuleBlock &&
        !shouldBeCombinedSelector &&
        !isFunctionRule

      // console.log(
      //   { key },
      //   {
      //     isFunctionRule,
      //     hasObjectLiteral,
      //     hasNestedRules,
      //     hasAtRuleBlock,
      //     shouldBeCombinedSelector,
      //     isPatternMatch
      //   }
      // )
      if (hasAtRuleBlock) {
        const additionalRules = ruleParser(parentSelector, props, value)

        return {
          ...result,
          [key]: additionalRules
        }
      }

      if (shouldBeCombinedSelector) {
        // const mergedSelector = isPlaceHolderSelector?parentSelector: createNestedSelector(parentSelector, key)
        const mergedSelector = createNestedSelector(parentSelector, key)

        const additionalRules = pipe(
          when(isFunction).onlyThen(fn => fn(props)),
          ruleParser(mergedSelector, props)
        )(value)
        // console.log({ key }, { additionalRules })

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
        let matchedPropName
        const reducer = reduceWhile(
          isUndefinedOrFalse,
          (previous, propName) => {
            matchedPropName = propName
            return pipe(
              prop(__, matchers),
              lookUpShortcut(DEFAULT_FUNCTIONS_LOOKUP),
              whenFunctionCallWith(props[propName], props)
            )(propName)
          },
          false,
          matchingProps
        )

        const matchedMatcher = prop(matchedPropName, matchers)
        const matchedProp = prop(matchedPropName, props)
        let computedValue = pipe(falseToNull, defaultTo(DF))(reducer)

        let nonResponisiveComputedValue = computedValue
        let isResponsiveBoolean =
          isString(computedValue) && is(Object, matchedProp)

        if (isResponsiveBoolean) {
          computedValue = matchedProp
        }

        // if (matchedMatcher && matchedProp){
        //   const isMatchedMatcherString = isString(matchedMatcher)
        //   const matchedPropNotAString = !is(Object)
        //   const isResponsiveBoolean = isString(matchedMatcher) && is(Object, matchedProp)
        //   console.log({ isResponsiveBoolean})
        // }

        // if (isUndefinedOrFalse(computedValue)) {
        //   // logger.matchNotFound({ ruleName: key });
        //   return result
        // }

        /// If prop passed is a function, execute it

        /// Rather storing returnAsIs function, check FunctionKey LookUp
        if (key === 'debugMode') {
          console.log(computedValue)
        }

        /// This is to check if defaultValue is a Function
        computedValue = isFunction(computedValue)
          ? computedValue(props)
          : computedValue

        // if (isUndefinedOrFalse(computedValue)) {
        //   // logger.matchNotFound({ ruleName: key });
        //   return result
        // }

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
            // console.log(key, val,getter)
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
        // console.log(result, [parentSelector, key, value])
        if (key === parentSelector) {
          // console.log({result,value})
        }

        // console.log({ result, parentSelector, existingRules: filterNilAndEmpty(existingRules), f: whenFunctionCallWith(props)(value)})
        // console.log(aaa)
        return {
          ...result,
          [parentSelector]: [
            ...existingRules,
            whenFunctionCallWith(props)(value)
          ]
        }
        // return add
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
        const joinedRules = filterNilAndEmpty(mergeAllDeepLeft(value))

        if (isEmpty(key.trim())) return mergeDeepLeft(result, joinedRules)
        const key2 = isPseudoSelector(key) ? '&' + key : key
        return mergeDeepLeft(result, { [key2]: joinedRules })
      }

      if (isEmpty(value)) {
        console.log('empty Vale')
        return result
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
  )
}

// const styler = rules => props => ruleCleaner(ruleParser('', props, rules))

const styler = curry((rules, props) => {
  if (isArray(rules))
    return pipe(
      map(pipe(ruleParser('', props), ruleCleaner)),
      mergeAllDeepLeft
    )(rules)
  // console.log(
  //   pipe(ruleParser('', props), ruleCleaner, filterNilAndEmpty)(rules)
  // )
  return pipe(ruleParser('', props), ruleCleaner)(rules)
})

export default styler
