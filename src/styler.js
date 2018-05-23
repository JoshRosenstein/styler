import {
  when,
  isObjectLiteral,
  isArray,
  isString,
  isFunction,
  isDefined,
  isNumber,
  isSymbol,
  isUndefinedOrFalse,
  startsWithAny,
  firstItem,
  reduceRecord,
  camelCase,
  getSubstringAfter,
  flow,
  pxToEm,
  getThemeAttr,
  mapObjOf,
  mergeAllDeepRight,
  filterNilAndEmpty,
  isBool,
  isTrueBool,
} from './utils'

import {
  DEFAULT_RULE_KEY_LOOKUP,
  DEFAULT_RULE_GETTER_LOOKUP,
  DEFAULT_FUNCTIONS_LOOKUP,
} from './stylerLookups'
import {
  curry,
  compose,
  startsWith,
  anyPass,
  join,
  pipe,
  unless,
  concat,
  map,
  chain,
  flip,
  defaultTo,
  reduceWhile,
  toPairs,
  reduce,
  find,
  pick,
  keys,
  has,
  merge,
  equals,
  all,
  prop,
  fromPairs,
  tap,
  is,
  type,
  converge,
  identity,
  when as R_when,
  __,
  values,
  always,
  both,
  ifElse,
  isNil,
  objOf,
  mergeDeepRight,
  isEmpty,
  filter,
  either,
  contains,
} from 'ramda'

import * as R from 'ramda'
import { getDescriptor, KINDS } from './helpers/style'
const formatName = v => camelCase(v) //dasherize //camelCase

const asPseudoSelector = key => `:${formatName(key)}`
const asPseudoElement = key => `::${formatName(key)}`

const isOneOf = (...availableItems) => givenItem =>
  availableItems.includes(givenItem)

const toLog = (...msgs) => (first, ...rest) =>
  console.log(...msgs, [first, ...rest]) || first

const createNestedSelector = (parent, child) => {
  const selectorPair = [parent, child]
  if (isPseudoSelector(child)) {
    return selectorPair.join('').trim()
  }

  return selectorPair.join(' ').trim()
}
const logError = (validTypes, givenKey) => givenValue => {
  console.error(
    `Shades could not parse the style for ${JSON.stringify(
      givenKey,
    )} because the provided value type (${flow(
      givenValue,
      type,
      JSON.stringify,
    )}) does not match any valid types (${flow(validTypes, join(', '))})`,
  )

  throw new TypeError(
    `Could not parse the style for ${givenKey} because the provided value type (${typeof givenValue})
    does not match any valid types (${join(', ', validTypes)})`,
  )
}

const isSelector = startsWithAny('.', '#', '>','&')
const isAtRule = startsWith('@')
const isPseudoSelector = startsWithAny(':', '[')
const isPropertySelector = startsWith('!!')
const isSelectorOrPseudo = anyPass([isSelector, isPseudoSelector])
const isBrowserPrefixed = startsWith('-')
const isPseudoElement = isOneOf(
  'before',
  'after',
  'backdrop',
  'cue',
  'firstLetter',
  'firstLine',
  'grammarError',
  'placeholder',
  'selection',
  'spellingError',
)

// Special property selectors typically start with !!, so this removes those
const stripPropertyBangs = when(isPropertySelector).then(getSubstringAfter(2))

const wrapContentString = key =>
  when(equals('content', key)).then(JSON.stringify)

const whenFunctionCallWith = (...argsToGive) =>
  when(isFunction).then(fnItem => fnItem(...argsToGive))

const falseToNull = value => {
  if (value === false) return null
  return value
}

const fallbackTo = fallback => compose(defaultTo(fallback), falseToNull)

const findKeyForValue = (needle, fallback) => haystack =>
  flow(
    haystack,
    toPairs,
    find(([key, value]) => value === needle),
    defaultTo([fallback, true]),
    firstItem,
  )

const iterateUntilResult = curry((computeFn, list) => {
  const reduceWhileInvalid = iterateFn =>
    reduceWhile(isUndefinedOrFalse, iterateFn, false)
  const iterateObject = reduceWhileInvalid((previous, [key, value]) =>
    computeFn(key, value),
  )
  const iterateList = reduceWhileInvalid((previous, current) =>
    computeFn(current),
  )

  if (flow(list, isObjectLiteral)) return flow(list, toPairs, iterateObject)

  return flow(list, iterateList)
})

const createStyleProperty = curry((key, value) => {
  if (!isDefined(value))
    console.error('createStyleProperty: value not defined!', { key, value })
  const ruleKey = flow(key, unless(isBrowserPrefixed, formatName))
  const ruleValue = flow(
    value,
    when(isArray).then(join(', ')),
    wrapContentString(key),
  )

  return {
    [ruleKey]: ruleValue,
  }
})

const appendWith = lastValue => firstValue => [firstValue, lastValue].join('')

const combinators = (
  parentSelector,
  { props, ...extraCombinators },
) => results => {
  const mergeWithResult = additionalRules => results.mergeDeep(additionalRules)
  const mergeWithParentSelector = additionalRules =>
    R.over(R.lensProp(parentSelector), x => merge(x || {}, additionalRules))

  const addToSelector = curry((targetSelector, additionalRules) =>
    flow(
      results,
      R.over(R.lensProp(targetSelector), x => merge(x || {}, additionalRules)),
    ),
  )

  return {
    addAtRule: curry((atRuleKey, nestedMap) =>
      flow(
        results,
        R.over(R.lensProp(atRuleKey), x => mergeDeepRight(x || {}, nestedMap)),
      ),
    ),
    addRuleBlock: curry((targetSelector, givenRules) =>
      flow(givenRules, addToSelector(targetSelector)),
    ),
    addStyle: curry((key, value) =>
      compose(addToSelector(parentSelector), createStyleProperty)(key, value),
    ),

    extendSelector: trailingSelector => {
      return flow(parentSelector, map(appendWith(trailingSelector)))
    },

    extendSelector2: trailingSelector => {
      return flow(
        isPseudoSelector(parentSelector) ? '&' : 'ss',
        map(appendWith(trailingSelector)),
      )
    },

    pseudoElementSelector: pseudoName =>
      flow(parentSelector, map(appendWith(asPseudoElement(pseudoName)))),
    propExists: targetProp => has(stripPropertyBangs(targetProp), props),
    props,
    results,
    ...extraCombinators,
  }
}

const parseStyleMetaData = ruleResponder => {
  const styleParser = ({
    parentSelector,
    props,
    options = {},
    initialResult = {},
  }) => rules => {
    const parseNestedWithResult = curry(
      (givenResult, givenSelectors, givenNestedRules) =>
        styleParser({
          parentSelector: givenSelectors,
          initialResult: givenResult,
          props,
        })(givenNestedRules),
    )

    if (isFunction(rules))
      return flow(
        rules,
        whenFunctionCallWith(props),
        parseNestedWithResult(initialResult, parentSelector),
      )

    const asNewParser = parseNestedWithResult({})

    // evaluateRule :: ParsedStyles Selector -> StyleKey -> StyleValue -> ParsedStyles Selecctor
    const evaluateRule = result => (key, value) => {
      const getCombinatorsFor = combinators(parentSelector, {
        props,
        parentSelector,
        reevaluate: curry((key, value) => evaluateRule(result)(key, value)),
        parseNestedWithResult,
        parseNested: parseNestedWithResult(result),
        reduceNested: handler =>
          reduceRecord(result)((accumulated, [key, value]) => {
            const parseNestedReduced = valueToParse =>
              parseNestedWithResult(accumulated, parentSelector, valueToParse)
            return handler(parseNestedReduced)(key, value) || accumulated
          }),
        asNewParser,
      })

      const isStyleSymbol = isSymbol(key)
      const isFunctionRule = isFunction(value)
      const hasObjectLiteral = isObjectLiteral(value)
      const hasNestedRules = hasObjectLiteral || isFunctionRule

      const isPropertyMatch = isPropertySelector(key) && hasNestedRules
      const isAtRuleBlock = isAtRule(key) && hasNestedRules
      const isCombiningSelector = isSelectorOrPseudo(key) && hasNestedRules
      const shouldBePseudoElement = isPseudoElement(key) && hasNestedRules

      const isPatternBlock = key === '__match' && hasNestedRules

      const isInlinePattern = hasObjectLiteral

      const ruleType = flow(
        {
          styleSymbol: isStyleSymbol,
          propertyMatch: isPropertyMatch,
          atRule: isAtRuleBlock,
          combinedSelector: isCombiningSelector,
          pseudoElement: shouldBePseudoElement,
          blockPattern: isPatternBlock,
          inlinePattern: isInlinePattern,
        },
        findKeyForValue(true),
        fallbackTo('style'),
      )

      const responder = flow(getCombinatorsFor(result), ruleResponder[ruleType])

      return responder(key, value) || result
    }

    const symbolRules = flow(
      Object.getOwnPropertySymbols(rules),
      map(sym => [sym, rules[sym]]),
    )

    return flow(
      rules,
      toPairs,
      concat(symbolRules),
      reduce(
        (result, [key, value]) => evaluateRule(result)(key, value),
        initialResult,
      ),
    )
  }

  return styleParser
}

const inlinePattern1 = ({ addStyle, parseNested, props }) => (key, value) => {
  const { default: defaultValue, options: opt, ...matchers } = value

  const pickFromMatchers = flow(matchers, flip(pick))
  const intersectedMatchers = flow(props, keys, pickFromMatchers)
  let matchedPropName
  const SetlastKey = key => value => {
    matchedPropName = key
  }
  const computedStyle = flow(
    intersectedMatchers,
    iterateUntilResult((key, value) =>
      flow(
        value,
        tap(SetlastKey(key)),
        whenFunctionCallWith(props[key], props),
        whenFunctionCallWith(props),
      ),
    ),
    fallbackTo(whenFunctionCallWith(props)(defaultValue)),
  )

  return computedStyle && addStyle(key, computedStyle)
}

const lookUpShortcut = curry((dictionary, value) =>
  R_when(isString, converge(defaultTo, [identity, dictionary]), value),
)

const inlinePattern2 = ({
  addStyle,
  parseNested,
  props,
  parentSelector,
  globalOptions,
}) => (key, value) => {
  const { default: defaultValue, options: opt, ...matchers } = value
  const options = merge(globalOptions, opt)
  const intersectedMatchers = filter(contains(__, keys(props)), keys(matchers))
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
        whenFunctionCallWith(props),
      )
    },
    false,
    intersectedMatchers,
  )

  let computedValue

  if (isEmpty(values(intersectedMatchers)) && isNil(defaultValue)) {
    return
  }

  if (isEmpty(values(intersectedMatchers)) && !isNil(defaultValue)) {
    computedValue = whenFunctionCallWith(props)(defaultValue)
  }
  if (!isEmpty(intersectedMatchers)) {
    computedValue = pipe(
      falseToNull,
      defaultTo(whenFunctionCallWith(props)(defaultValue)),
    )(reducer)
  }

  if (!computedValue) {
    return
  }
  const matchedProp = prop(matchedPropName, props)
  let nonResponisiveComputedValue = computedValue
  let isResponsiveBoolean = isString(computedValue) && is(Object, matchedProp)

  if (isResponsiveBoolean) {
    computedValue = matchedProp
  }

  const computeOptions = val => {
    if (options && val) {
      let { key: themeKey, getter } = options
      /// If options was not provided, check default lookUp

      themeKey = themeKey || DEFAULT_RULE_KEY_LOOKUP(key)
      //console.log(DEFAULT_RULE_KEY_LOOKUP('margin'))
      if (themeKey && isString(val)) {
        /// Check Strip Negative Before lookingUp
        const isNeg = /^-.+/.test(val)
        const absN = isNeg ? val.slice(1) : val

        val = getThemeAttr(`${themeKey}.${absN}`, val)(props)
        val = isNeg ? (isNumber(val) ? val * -1 : '-' + val) : val
      }

      getter = getter || DEFAULT_RULE_GETTER_LOOKUP(key)
      if (getter) {
        val = pipe(
          lookUpShortcut(DEFAULT_FUNCTIONS_LOOKUP),
          whenFunctionCallWith(val, props),
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
      const currentVal = R_when(
        both(always(isResponsiveBoolean), isBool),
        ifElse(isTrueBool, always(nonResponisiveComputedValue), always(null)),
      )(breakpoints[bpKey])
      const res = isNil(computeOptions(currentVal))
        ? {}
        : bpKey === 'mobile' || bpKey === '0' || minWidth < 1.1
          ? objOf(key, computeOptions(currentVal))
          : mapObjOf(
              `@media screen and (min-width:${minWidth})`,
              objOf(key, computeOptions(currentVal)),
            )

      const mkey =
        bpKey === 'mobile' || bpKey === '0' || minWidth < 1.1
          ? key
          : `@media screen and (min-width:${minWidth})`

      return mergeDeepRight(acc, res)
    }, {})
    //console.log(CSSObj)
    return parseNested(parentSelector)(CSSObj)
  }

  computedValue = computeOptions(computedValue)

  return computedValue && addStyle(key, computedValue)
}

export const parseAllStyles = parseStyleMetaData({
  atRule: ({
    addRuleBlock,
    parseNested,
    parentSelector,
    addAtRule,
    asNewParser,
    results,
  }) => (key, value) => {
    const res = addAtRule(key, flow(value, asNewParser(parentSelector)))
    if (isEmpty(res)) console.log('aa')
    //console.log('emptty', { parentSelector, results, res })
    return addAtRule(key, flow(value, asNewParser(parentSelector)))
  },

  combinedSelector: ({
    addRuleBlock,
    parentSelector,
    extendSelector2,
    extendSelector,
    parseNested,
  }) => (extraSelector, extraRules) => {
    // console.log('combinedSelector----------')
    //  const newSelectors = extendSelector(extraSelector)
    const newSelectors = createNestedSelector(parentSelector, extraSelector)
    //console.log({ extraSelector, newSelectors, extraRules })
    return flow(extraRules, parseNested(newSelectors))
  },
  pseudoElement: ({ addRuleBlock, pseudoElementSelector, parseNested }) => (
    pseudoName,
    nestedRules,
  ) => {
    const newSelectors = pseudoElementSelector(pseudoName)
    return flow(nestedRules, parseNested(newSelectors))
  },
  blockPattern: ({ parseNestedWithResult, props, results, parentSelector }) => (
    unneededKey,
    propsToMatch,
  ) =>
    flow(
      propsToMatch,
      toPairs,
      reduce((accumulated, [propName, rulesForProp]) => {
        //console.log(parentSelector, accumulated, [propName, rulesForProp])

        // if (parentSelector[0] === 'debug')
        //   console.log(parentSelector, accumulated.toJS(), [propName, rulesForProp])
        if (flow(props, has(propName)))
          return flow(
            rulesForProp,
            whenFunctionCallWith(props[propName]),
            parseNestedWithResult(accumulated, parentSelector),
          )
        return accumulated
      }, results),
    ),
  inlinePattern: inlinePattern2,
  propertyMatch: ({
    addRuleBlock,
    parseNested,
    parentSelector,
    props,
    propExists,
  }) => (key, value) => {
    const propName = stripPropertyBangs(key)

    if (propExists(propName))
      return flow(
        value,
        whenFunctionCallWith(props[propName]),
        parseNested(parentSelector),
      )
  },
  styleSymbol: ({
    addRuleBlock,
    extendSelector,
    extendSelector2,
    props,
    parseNested,
    parentSelector,
    propExists,
  }) => (symbolKey, styleBlock) => {
    const parseStyleBlockWith = argsToPass => selector =>
      flow(styleBlock, whenFunctionCallWith(argsToPass), parseNested(selector))

    const handlers = {
      [KINDS.PROPERTY_OR]: targetProps => {
        if (find(propExists)(targetProps))
          return parseStyleBlockWith(props)(parentSelector)
      },
      [KINDS.PROPERTY_AND]: targetProps => {
        if (all(propExists)(targetProps))
          return parseStyleBlockWith(props)(parentSelector)
      },
      [KINDS.COMBINATOR_OR]: targetAttrs =>
        //      flow(chain(extendSelector)(targetAttrs), parseStyleBlockWith(props)),
        flow(chain(extendSelector)(targetAttrs), parseStyleBlockWith(props)),
      [KINDS.COMBINATOR_AND]: targetAttrs =>
        //flow(targetAttrs, join(''), extendSelector, parseStyleBlockWith(props)),
        flow(targetAttrs, join(''), extendSelector, parseStyleBlockWith(props)),
    }

    const { kind, value } = getDescriptor(symbolKey)

    return handlers[kind](value)
  },
  style: ({ addStyle, props, reevaluate, parentSelector }) => (
    ruleName,
    value,
  ) =>
    flow(
      value,
      whenFunctionCallWith(props),
      when(isUndefinedOrFalse).otherwise(
        // The following line is for cases where a function returns
        // inline pattern matching blocks
        when(isObjectLiteral)
          .then(reevaluate(ruleName))
          .otherwise(
            when(isArray).then(join(', ')),

            when(either(isString, isNumber))
              .then(addStyle(ruleName))
              .otherwise(
                logError(['Object', 'Array', 'Number', 'String'], ruleName),
              ),
          ),
      ),
    ),
})

/**
 * stringifyRules: takes an object where the key is the selector and the value
 * is the array of rules for that selector. Returns an array of CSS rule strings.
 * @param  {object} rules   Object of selectors and values
 * @return {array<string>}  List of rules to add
 */
export const stringifyRules = rules =>
  flow(
    rules,
    toPairs,
    reduce((result, [selectors, styleRules]) => {
      if (isAtRule(selectors)) {
        const innerRuleStrings = stringifyRules(styleRules)
        const wrappedWithAtRules = innerRuleStrings.map(
          rule => `${selectors} { ${rule} }`,
        )

        return [...result, ...wrappedWithAtRules]
      }
      const createRuleString = ([key, value]) => `${key}: ${value};`
      const joinedRules = flow(
        styleRules,
        toPairs,
        map(createRuleString),
        join(''),
      )

      return [...result, `${selectors} { ${joinedRules} }`]
    }, []),
  )

export const ruleCleaner = rules =>
  flow(
    rules,
    toPairs,
    reduce((result, [selectors, styleRules]) => {
      if (isAtRule(selectors)) {
        const innerRuleStrings = ruleCleaner(styleRules || {})
        return mergeDeepRight(result, { [selectors]: innerRuleStrings })
      }

      const cleanedRules = filterNilAndEmpty(styleRules || {})
      if (isEmpty(selectors.trim())) return mergeDeepRight(result, cleanedRules)
      return mergeDeepRight(result, { [selectors]: cleanedRules })
    }, {}),
  )

const _styler = rules => props => {
  if (isArray(rules)) {
    return flow(
      rules,
      map(r =>
        parseAllStyles({
          parentSelector: '',
          props,
        })(r),
      ),
      mergeAllDeepRight,
      ruleCleaner,
    )
  }
  return flow(
    parseAllStyles({
      parentSelector: '',
      props,
    })(rules),
    ruleCleaner,
  )
}

const styler = (...rules) => props =>
  flow(map(x => _styler(x)(props), R.flatten(rules)), mergeAllDeepRight)
const parseRulesNoDebug = (selector, props, rules) =>
  parseAllStyles({
    parentSelector: [selector],
    props,
  })(rules)

export default styler
