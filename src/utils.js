// import tiza from 'tiza'
import {
  curry,
  curryN,
  pipe,
  compose,
  type,
  isNil,
  complement,
  toLower,
  toUpper,
  startsWith,
  anyPass,
  allPass,
  equals,
  contains,
  map,
  reduce,
  useWith,
  has,
  path,
  join,
  splitAt,
  split,
  flip,
  find,
  nth,
  reduceWhile,
  either,
  mergeWith,
  concat,
  toPairs,
  fromPairs,
  filter,
  __,
  gt,
  isEmpty,
  propSatisfies,
  reject,
  replace,
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

const UPPERCASE_LETTERS = split('', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const LOWERCASE_LETTERS = split('', 'abcdefghijklmnopqrstuvwxyz')
const NUMERICS = split('', '0123456789')

const ALPHABET = [...UPPERCASE_LETTERS, ...LOWERCASE_LETTERS]
const ALPHANUMERIC = [...ALPHABET, ...NUMERICS]

export const isType = curry(
  (expected, value) => toLower(type(value)) === toLower(expected)
)

export const isFalsy = value => !value

export const reduceWhileFalsy = curry((handlerFn, list) =>
  reduceWhile(isFalsy, handlerFn, false, list)
)

export const reduceRecord = initialValue => handlerFn => original =>
  flow(
    original,
    toPairs,
    reduce(
      (result, currentPair) => handlerFn(result, currentPair) || result,
      initialValue
    )
  )

export const mapMerge = curry((handlerFn, original) =>
  flow(
    original,
    toPairs,
    reduce((result, [key, value]) => {
      const combiner = mergeWith(concat, result)
      const handlerOutput = handlerFn(key, value)

      const newResult = handlerOutput && combiner(handlerOutput)

      return newResult || result
    }, {})
  )
)

export const mapFilterRecord = (handlerFn, original) =>
  flow(
    original,
    toPairs,
    reduce((result, [key, value]) => {
      const outputItem = handlerFn(key, value)

      const newResult = outputItem && [...result, outputItem]

      return newResult || result
    }, [])
  )

export const includes = curry((comparator, value) => value.includes(comparator))

export const noop = () => {}
export const id = value => value
export const firstItem = nth(0)

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

export const isNotArray = complement(isArray)
export const isNotString = complement(isString)
export const isNotFunction = complement(isFunction)
export const isNotObjectLiteral = complement(isObjectLiteral)

export const sliceFromFirstChar = splitAt(1)
export const reduceToString = curry((reduceFn, list) =>
  reduce(reduceFn, '', list)
)
export const returnAsIs = value => value
export const joinWith = (...values) => separator => values.join(separator)
export const getSubstring = (start, end) => original =>
  original.substring(start, end)
export const getSubstringUntil = end => getSubstring(0, end)
export const getSubstringAfter = start => getSubstring(start)
export const startsWithAny = (...searchStrs) =>
  anyPass(map(startsWith, searchStrs))
// (searchStrs >> map(startsWith)) >> anyPass
export const combineStrings = (...inputs) => inputs.filter(Boolean).join('')

// Conditional chain expression :) stop using if & else, just use this.
// Usage: ```
// const actuallyDoTheThing = (value) => value + " is more than nothing";
// const trySomethingElse = (value) => "I dunno what '" + value + "' is, sorry!";
// const doSomething = when(value => value === "something").then(actuallyDoTheThing).otherwise(trySomethingElse)
// doSomething("something"); // "something is more than nothing"
// doSomething("not something") // => "I dunno what 'not something' is. sorry!"
// ```
const convertAndPipe = values => {
  const callableValues = map(valueAsFunction, values)
  return pipe(...callableValues)
}

export const when = (...predicates) => {
  const evaluateWith = (handleTruthy = [id]) => (handleFalsy = [id]) => (
    ...args
  ) => {
    const predicateChain = convertAndPipe(predicates)
    const truthyChain = convertAndPipe(handleTruthy)
    const falsyChain = convertAndPipe(handleFalsy)

    if (predicateChain(...args)) {
      return truthyChain(...args)
    }

    return falsyChain(...args)
  }

  return {
    // If predicate doesnt retun a truthy value, then just return the first
    // argument given to the whole expression
    onlyThen: (...truthyHandlers) => evaluateWith(truthyHandlers)(),
    then: (...truthyHandlers) =>
      proxyFunction(evaluateWith(truthyHandlers)(), {
        // If the predicate returns truthy, call handleTruthy with the
        // last set of arguments, otherwise call handleFalsy
        otherwise: (...falsyHandlers) =>
          evaluateWith(truthyHandlers)(falsyHandlers)
      }),
    otherwise: (...falsyHandlers) => evaluateWith()(falsyHandlers)
  }
}

export const safeJoinWith = separator => (...args) =>
  flow(
    args,
    when(firstItem, isArray).then(firstItem),
    filter(Boolean),
    join(separator)
  )

export const joinString = (first, ...items) => {
  if (isArray(first)) return join('', first)
  return join('', [first, ...items])
}

export const mapJoin = curry((mapFn, original) =>
  reduceToString(useWith(joinString, [id, mapFn]))(original)
)

export const capitalise = original => {
  if (original.length <= 1) return toUpper(original)

  return useWith(joinString, [toUpper, id])(...sliceFromFirstChar(original))
}

export const unCapitalise = original =>
  useWith(joinString, [toLower, id])(...sliceFromFirstChar(original))

export const startsWithCapital = original =>
  contains(flow(original, sliceFromFirstChar, firstItem), UPPERCASE_LETTERS)

const splitAndCamelise = (...separators) => original => {
  return reduce((result, item) => {
    const [first, ...rest] = split(item, result)

    return useWith(joinString, [id, mapJoin(capitalise)])(first, rest)
  }, original)(separators)
}

const camscalRegex = new RegExp(/[\s_-]/, 'g')
export const capitalize = replace(/^[a-z]/, toUpper)
export const decapitalize = replace(/^[A-Z]/, toLower)

export const toCamelCase = original => {
  if (original.length <= 1) return toLower(original)

  return flow(original, splitAndCamelise('-', '_', ' '), unCapitalise)
}

const cleanCamscal = pipe(
  split(camscalRegex),
  reject(isEmpty),
  Rwhen(propSatisfies(gt(__, 1), 'length'), map(pipe(toLower, capitalize))),
  join(''),
  decapitalize
)

export const camelCase = pipe(cleanCamscal, decapitalize)

export const dasherize = original =>
  original
    .trim()
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '-')
    .toLowerCase()

// Takes any value, and if the value is not a function, return a new function that
// always returns that value; otherwise, if the value is already a function, just return it.
export const valueAsFunction = value => {
  if (!isFunction(value)) return () => value
  return value
}

export const proxyPropertyGetter = genericHandler =>
  new Proxy(
    {},
    {
      get: (target, name) => Reflect.get(target, name) || genericHandler(name)
    }
  )

export const proxyRecord = handlers => originalRecord =>
  new Proxy(originalRecord, {
    get: (target, name) => Reflect.get(target, name) || handlers[name]
  })

export const proxyFunction = (callHandler, chainHandlers) => {
  const outerProxy = new Proxy(callHandler, {
    get: (target, name) => chainHandlers[name] || Reflect.get(target, name)
  })

  return outerProxy
}

// export const proxyFunctionWithPropertyHandler = (
//   functionHandler,
//   propertyHandler,
// ) =>
//   new Proxy(genericHandler, {
//     get: (target, name) => {
//       const output = genericHandler(name) || Reflect.get(target, name)
//       return output
//     },
//   })

export const proxyPassthroughFunction = beforePassthrough => originalFn =>
  new Proxy(originalFn, {
    get: (target, name) => {
      if (Reflect.has(target, name)) beforePassthrough(name)
      return Reflect.get(target, name)
    },
    apply: (target, context, givenArgs) => {
      beforePassthrough()
      return Reflect.apply(target, context, givenArgs)
    }
  })

// Type stuff
export const is = proxyPropertyGetter

export const dotPath = curry((pathStr, target) =>
  path(split('.', pathStr), target)
)

export const betterSet = (initialData = []) => {
  const internal = new Set(initialData)

  const outerMethods = {
    add: (...items) =>
      items.forEach(item => internal.add(item)) || outerMethods,
    remove: (...items) =>
      items.forEach(item => internal.delete(item)) || outerMethods,
    forEach: (...args) => internal.forEach(...args) || outerMethods,
    clear: () => internal.clear() && outerMethods,
    has: (...args) => internal.has(...args),
    map: mapFn => flow([...internal].map(mapFn), betterSet),
    filter: filterFn => flow([...internal].filter(filterFn), betterSet),
    reduce: (reduceFn, initialValue) =>
      [...internal].reduce(reduceFn, initialValue),
    get size() {
      return internal.size
    },
    toArray: () => Array.from(internal)
  }

  return outerMethods
}

export const stateful = (initialValue, actions) => {
  let _internalState = initialValue
  const reducers = Object.entries(actions).reduce(
    (result, [name, fn]) => ({
      ...result,
      [name]: (...args) => {
        const actionResult = fn(_internalState, ...args)

        if (isObjectLiteral(_internalState)) {
          const nextState = {
            ..._internalState,
            ...actionResult
          }
          _internalState = nextState
          return nextState
        }

        _internalState = actionResult
        return actionResult
      }
    }),
    {}
  )

  const getState = path => {
    if (isObjectLiteral(_internalState)) {
      const clonedState = { ..._internalState }

      if (path) return dotPath(path, clonedState)

      return clonedState
    } else if (isMap(_internalState) || _internalState.get) {
      if (path) return _internalState.get(path)
      return _internalState
    }

    return _internalState
  }

  const innerSelf = {
    lift: handler => {
      handler(reducers, getState)
      return innerSelf
    },
    getState
  }

  return innerSelf
}
