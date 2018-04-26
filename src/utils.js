import {
  curry,
  pipe,
  type,
  isNil,
  complement,
  toLower,
  isEmpty,
  anyPass,
  toString,
  equals,
  map,
  reduce,
  split,
  reduceWhile,
  of,
  either,
  unless,
  startsWith,
  __,
  concat,
  divide,
  when as R_when,
  is,
  both,
  pathOr,
  objOf,
  mergeAll,
  mergeDeepLeft,
  filter,
  flip,
  defaultTo,
  curryN,
  identity,
  toPairs,
  reduceRight,
  test
} from 'ramda'
import defaultTheme from './defaultTheme'
// Mostly from the Shades library: https://github.com/bupa-digital/shades/
export const isArray = is(Array)
export const isString = is(String)
export const isFunction = is(Function)
export const isNumber = is(Number)
export const isBool = is(Boolean)
export const isTruthy = either(Boolean, equals(0))
export const isTrueBool = both(isBool, isTruthy)

export const mergeAllDeepLeft = reduce(mergeDeepLeft, {})

export const isNonZeroNumber = both(is(Number), complement(equals(0)))
export const appendString = flip(concat)

export const whenisNonZeroNumber = curryN(2, (fn, input) =>
  R_when(isNonZeroNumber, defaultTo(identity, fn))(input)
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

export const isNilOrEmpty = either(isNil, isEmpty)
export const isNotNilOrEmpty = complement(isNilOrEmpty)
export const toArray = unless(anyPass([isArray, isNilOrEmpty]), of)
export const isNilOrEmptyOrFalse = either(isNilOrEmpty, equals(false))

export const filterNilAndEmpty = filter(complement(isNilOrEmpty))
export const filterNilOrEmptyOrFalse = filter(complement(isNilOrEmptyOrFalse))
export const startsWithAny = (...searchStrs) =>
  pipe(map(startsWith), anyPass)(searchStrs)

const getThemeFallback = fallBackObj => (attr, fallback) =>
  pathOr(fallback)(split('.', attr))(fallBackObj)

const getThemeAttrFB = fallBackObj => (attr = '', defaultTo = '') =>
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
/// Below From https://github.com/bupa-digital/shades

export const isType = curry((expected, value) =>
  equals(toLower(type(value)), toLower(expected))
)

export const isFalsy = value => !value

export const reduceWhileFalsy = curry((handlerFn, list) =>
  reduceWhile(isFalsy, handlerFn, false, list)
)

export const isObjectLiteral = isType('object')

export const isDefined = complement(isNil)
export const isNotDefined = isNil
export const isUndefinedOrFalse = either(isNotDefined, equals(false))

export const returnAsIs = value => value

export const valueAsFunction = value => {
  if (!isFunction(value)) return () => value
  return value
}

export const when = predicate => ({
  onlyThen: (...truthyHandlers) => (first, ...args) => {
    const callablePredicate = valueAsFunction(predicate)
    const combined = [first, ...args]

    if (callablePredicate(...combined)) {
      return pipe(...truthyHandlers)(...combined)
    }

    return first
  },
  then: (...truthyHandlers) => ({
    orNot: () => (first, ...args) => {
      const callablePredicate = valueAsFunction(predicate)
      const combined = [first, ...args]

      if (callablePredicate(...combined)) {
        return pipe(...truthyHandlers)(...combined)
      }

      return first
    },

    otherwise: (...falsyHandlers) => (...args) => {
      const callablePredicate = valueAsFunction(predicate)

      if (callablePredicate(...args)) {
        return pipe(...truthyHandlers.map(valueAsFunction))(...args)
      }

      return pipe(...falsyHandlers.map(valueAsFunction))(...args)
    }
  })
})

export const whenFunctionCallWith = (...argsToGive) => value =>
  valueAsFunction(value)(...argsToGive)

export const flow = (value, ...argsToGive) => pipe(...argsToGive)(value)
