import { compose, map, concat, join, curry, prop, propOr } from 'ramda'

import {
  dasherize,
  isString,
  isSymbol,
  isNumber,
  isDefined,
  when,
  betterSet,
  includes,
  stateful,
  proxyFunction,
  proxyPropertyGetter,
  proxyRecord,
  flow,
} from '../utils'

const pseudoElementNames = [
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
]

const pseudoFunctionNames = [
  'dir',
  'lang',
  'not',
  'nthChild',
  'nthLastChild',
  'nthLastOfType',
  'nthOfType',
]

const pseudoClassNames = [
  'active',
  'any',
  'anyLink',
  'checked',
  'default',
  'disabled',
  'empty',
  'enabled',
  'first',
  'firstChild',
  'firstOfType',
  'fullscreen',
  'focus',
  'hover',
  'indeterminate',
  'inRange',
  'invalid',
  'lastChild',
  'lastOfType',
  'left',
  'link',
  'onlyChild',
  'onlyOfType',
  'optional',
  'outOfRange',
  'readOnly',
  'readWrite',
  'required',
  'right',
  'root',
  'scope',
  'target',
  'valid',
  'visited',
]

export const KINDS = {
  COMBINATOR_AND: 'combinator.and',
  COMBINATOR_OR: 'combinator.or',
  PROPERTY_AND: 'property.and',
  PROPERTY_OR: 'property.or',
}

const COMBINATOR_INSERTS = {
  [KINDS.COMBINATOR_AND]: '&&',
  [KINDS.PROPERTY_AND]: '&&',
  [KINDS.COMBINATOR_OR]: '||',
  [KINDS.PROPERTY_OR]: '||',
}

const isDescriptorSym = Symbol('Compute Selector')

const keyFromSymbol = (...args) => Symbol.keyFor(...args)
const symbolFromKey = (...args) => Symbol.for(...args)

const asPseudoClass = name => `:${dasherize(name)}`
const asPseudoElement = name => `::${dasherize(name)}`
const asPropertySelector = givenName => `!!${givenName}`

const asPseudoFunction = curry(
  (name, value) => `:${dasherize(name)}(${dasherize(value)})`,
)

const styleStore = stateful(new Map(), {
  addItem: (store, itemKey, itemValue) => store.set(itemKey, itemValue),
})

export const getDescriptor = key => styleStore.getState(key)

const storeDescriptor = descriptorItem => {
  const symbolKey = descriptorItem.symbolKey

  styleStore.lift(({ addItem }) => addItem(symbolKey, descriptorItem))

  return descriptorItem
}

const createDescriptor = (kind, config = {}) => value => {
  const keyOrValue = flow(
    propOr(value, 'stringKey', config),
    when(isString).otherwise(JSON.stringify),
  )

  const symbolKey = symbolFromKey(keyOrValue)

  const selfDescriptor = {
    [isDescriptorSym]: true,
    kind,
    value,
    symbolKey,
    originalKey: keyOrValue,
    // this toString doesnt actually return a string
    // it instead returns a symbol whose key is a string
    toString: () => symbolKey,
  }

  return selfDescriptor
}

const descriptorToString = when(isString).otherwise(prop('originalKey'))

const createAndStoreDescriptor = (kind, config) =>
  compose(storeDescriptor, createDescriptor(kind, config))

const createCombinator = kind => (...data) => {
  const stringKey = flow(
    data,
    map(when(isString).otherwise(prop('originalKey'))),
    join(` ${prop(kind, COMBINATOR_INSERTS)} `),
  )

  return flow(data, createAndStoreDescriptor(kind, { stringKey }))
}

const pseudoCombinators = {
  and: createCombinator(KINDS.COMBINATOR_AND),
  or: createCombinator(KINDS.COMBINATOR_OR),
}

const withAttribute = givenName => {
  const quoteString = JSON.stringify

  const attrWithValue = givenValue =>
    `[${givenName}=${quoteString(givenValue)}]`
  const attrStartsWith = givenValue =>
    `[${givenName}^=${quoteString(givenValue)}]`
  const attrEndsWith = givenValue =>
    `[${givenName}$=${quoteString(givenValue)}]`
  const attrContains = givenValue =>
    `[${givenName}*=${quoteString(givenValue)}]`

  const anyCombinator = mapperFn => (...givenValues) =>
    pseudoCombinators.or(...givenValues.map(mapperFn))

  const plainValue = `[${givenName}]`

  const outerMethods = {
    anyOf: anyCombinator(attrWithValue),
    contains: attrContains,
    containsAny: anyCombinator(attrContains),
    startsWith: attrStartsWith,
    startsWithAny: anyCombinator(attrStartsWith),
    endsWith: attrEndsWith,
    endsWithAny: anyCombinator(attrEndsWith),
    toString: () => plainValue,
  }

  return proxyFunction(attrWithValue, outerMethods)
}

const pseudoClassHandler = specialChains => targetName => {
  if (pseudoClassNames.includes(targetName)) return asPseudoClass(targetName)

  if (pseudoFunctionNames.includes(targetName))
    return compose(asPseudoFunction(targetName), descriptorToString)

  if (pseudoElementNames.includes(targetName))
    return asPseudoElement(targetName)

  return prop(targetName, specialChains)
}

const style = proxyPropertyGetter(
  pseudoClassHandler({
    ...pseudoCombinators,
    element: asPseudoElement,
    pseudo: (name, value) => {
      if (isDefined(value)) return asPseudoFunction(name, value)
      return asPseudoClass(name)
    },
    data: proxyPropertyGetter(
      when(isString).then(compose(withAttribute, concat('data-'), dasherize)),
    ),
    attr: proxyPropertyGetter(
      when(isString).then(compose(withAttribute, dasherize)),
    ),
    prop: proxyPropertyGetter(when(isString).then(asPropertySelector)),
    props: {
      any: createCombinator(KINDS.PROPERTY_OR),
      all: createCombinator(KINDS.PROPERTY_AND),
    },
  }),
)

export default style
