import * as R from 'ramda'

import {
  curry,
  curryN,
  pipe,
  type,
  isNil,
  complement,
  toLower,
  anyPass,
  equals,
  map,
  reduce,
  split,
  flip,
  reduceWhile,
  either,
  concat,
  toPairs,
  filter,
  __,
  isEmpty,
  is as RIs,
  both,
  divide,
  unless,
  of,
  when as Rwhen,
  mergeDeepLeft,
  mergeDeepRight,
  defaultTo,
  identity,
  pathOr,
  objOf,
  reduceRight,
  mergeAll,
  toString,
  test
} from 'ramda'
import defaultTheme from './defaultTheme'
export const flow = (value, ...argsToGive) => pipe(...argsToGive)(value)
// pxToEm, returnAsIs, pxToRem, pxToPct, px
export const isArray = RIs(Array)
export const isString = RIs(String)
export const isFunction = RIs(Function)
export const isNumber = RIs(Number)
export const isBool = RIs(Boolean)
export const isTruthy = either(Boolean, equals(0))
export const isTrueBool = both(isBool, isTruthy)

export const mergeAllDeepLeft = reduce(mergeDeepLeft, {})
export const mergeAllDeepRight = reduce(mergeDeepRight, {})

export const isNonZeroNumber = both(RIs(Number), complement(equals(0)))
export const appendString = flip(concat)

export const whenisNonZeroNumber = curryN(2, (fn, input) =>
  Rwhen(isNonZeroNumber, defaultTo(identity, fn))(input)
)

export const appendUnit = unit =>
  whenisNonZeroNumber(pipe(toString, appendString(unit)))

const divideBy = flip(divide)

export const pxTo = curry((divisor, unit, num) =>
  whenisNonZeroNumber(
    pipe(divideBy(defaultTo(16, divisor)), toString, appendString(unit)),
    num
  )
)

export const pxToRem = pxTo(16, 'rem')
export const pxToEm = pxTo(16, 'em')
export const pxToPct = pxTo(16 / 100, '%')
export const px = pxTo(1, 'px')
export const rem = appendUnit('rem')
export const em = appendUnit('em')
export const pct = appendUnit('%')
export const ms = appendUnit('ms')
export const isNilOrEmpty = either(isNil, isEmpty)
export const isNotNilOrEmpty = complement(isNilOrEmpty)
export const toArray = unless(anyPass([isArray, isNilOrEmpty]), of)
export const isNilOrEmptyOrFalse = either(isNilOrEmpty, equals(false))

export const filterNilAndEmpty = filter(complement(isNilOrEmpty))
export const filterNilOrEmptyOrFalse = filter(complement(isNilOrEmptyOrFalse))

const getThemeFallback = fallBackObj => (attr, fallback) =>
  pathOr(fallback)(split('.', attr))(fallBackObj)

export const getThemeAttrFB = fallBackObj => (attr = '', defaultTo = '') =>
  pathOr(
    getThemeFallback(fallBackObj)(attr, defaultTo),
    split('.', concat('theme.', attr))
  )

export const getThemeAttr = getThemeAttrFB(defaultTheme)
export const isNegative = test(/^-.+/)

export const lookUpValue = curryN(3, (themeKey, val, props) => {
  /// Check Strip Negative Before lookingUp
  if (!isString(val)) return val
  const isNeg = /^-.+/.test(val)
  const absN = isNeg ? val.slice(1) : val

  val = getThemeAttr(`${themeKey}.${absN}`, val)(props)
  return isNeg ? (isNumber(val) ? val * -1 : '-' + val) : val
})

export const mapObjOf = curry((key, val) =>
  pipe(toArray, map(objOf(__, val)), mergeAll)(key)
)

/// For quick nested selectors
const nester = (k, v) => reduceRight(objOf, v, split('.', k))

export const UnflattenObj = pipe(
  toPairs,
  map(([k_, v_]) => nester(k_, v_)),
  mergeAllDeepLeft
)

export const isType = curry(
  (expected, value) => toLower(type(value)) === toLower(expected)
)

export const isFalsy = value => !value

export const reduceWhileFalsy = curry((handlerFn, list) =>
  reduceWhile(isFalsy, handlerFn, false, list)
)

export const includes = curry((comparator, value) => value.includes(comparator))

// export const isArray = isType('array')
// export const isString = isType('string')
// export const isFunction = isType('function')
export const isObjectLiteral = isType('object')
// export const isNumber = isType('number')
export const isSymbol = isType('symbol')
export const isMap = isType('map')

export const isDefined = complement(isNil)
export const isNotDefined = isNil

export const isUndefinedOrFalse = either(isNotDefined, equals(false))

export const returnAsIs = value => value

// Takes any value, and if the value is not a function, return a new function that
// always returns that value; otherwise, if the value is already a function, just return it.
export const valueAsFunction = value => {
  if (!isFunction(value)) return () => value
  return value
}

export const fallbackTo = fallback =>
  R.compose(R.defaultTo(fallback), falseToNull)
export const falseToNull = value => {
  if (value === false) return null
  return value
}

export const iterateUntilResult = R.curry((computeFn, list) => {
  const reduceWhileInvalid = iterateFn =>
    R.reduceWhile(isUndefinedOrFalse, iterateFn, false)
  const iterateObject = reduceWhileInvalid((previous, [key, value]) =>
    computeFn(key, value)
  )
  const iterateList = reduceWhileInvalid((previous, current) =>
    computeFn(current)
  )

  if (flow(list, isObjectLiteral)) return flow(list, R.toPairs, iterateObject)

  return flow(list, iterateList)
})

export const whenFunctionCallWith = (...argsToGive) =>
  R.when(R.is(Function), fnItem => fnItem(...argsToGive))

export const isAtRule = selector => selector.indexOf('@') === 0

export const splitSelectors = selectors => {
  if (isAtRule(selectors)) {
    return [selectors]
  }
  let splitted = []
  let parens = 0
  let brackets = 0
  let current = ''
  for (var i = 0, len = selectors.length; i < len; i++) {
    var char = selectors[i]
    if (char === '(') {
      parens += 1
    } else if (char === ')') {
      parens -= 1
    } else if (char === '[') {
      brackets += 1
    } else if (char === ']') {
      brackets -= 1
    } else if (char === ',') {
      if (!parens && !brackets) {
        splitted.push(current.trim())
        current = ''
        continue
      }
    }
    current += char
  }
  splitted.push(current.trim())
  return splitted
}

export const arrify = val => {
  if (val === null || val === undefined) {
    return []
  }

  return Array.isArray(val) ? val : [val]
}
