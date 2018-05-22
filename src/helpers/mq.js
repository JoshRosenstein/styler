import {
  map,
  reduce,
  toPairs,
  fromPairs,
  toLower,
  contains,
  curry,
  mergeAll,
} from 'ramda'

import {
  dasherize,
  isString,
  isNumber,
  when,
  betterSet,
  flow,
  isFunction,
} from '../utils'

const applyUnit = (unit = '') => original =>
  flow(
    original,
    when(isNumber)
      .then(value => value.toString() + unit)
      .otherwise(value => value.toString()),
  )

const transformInputValues = mapping => givenValue =>
  mapping[givenValue] || givenValue

const transformKeywords = (allowedValues, defaultValue) => givenValue => {
  if (allowedValues.includes(toLower(givenValue))) return givenValue
  return defaultValue
}

const transformFalseTo = replacementValue => givenValue => {
  if (givenValue === false) return replacementValue
  return givenValue
}

const ifFunctionExists = (fn, val) => (isFunction(fn) ? fn(val) : val)

const mqFeatures = {
  screen: {
    accepts: ['media'],
  },
  all: {
    accepts: ['media'],
  },
  print: {
    accepts: ['media'],
  },
  speech: {
    accepts: ['media'],
  },
  width: {
    accepts: ['range', 'value'],
    unit: 'px',
    stringify: applyUnit('px'),
  },
  height: {
    accepts: ['range', 'value'],
    unit: 'px',
    stringify: applyUnit('px'),
  },
  deviceWidth: {
    accepts: ['range', 'value'],
    unit: 'px',
    stringify: applyUnit('px'),
  },
  deviceHeight: {
    accepts: ['range', 'value'],
    unit: 'px',
    stringify: applyUnit('px'),
  },
  orientation: {
    accepts: ['enum', 'value'],
    values: ['portrait', 'landscape'],
  },
  aspectRatio: {
    accepts: ['range', 'value'],
  },
  deviceAspectRatio: {
    accepts: ['range', 'value'],
  },
  colour: {
    alias: 'color',
    accepts: ['range', 'boolean'],
  },
  colourIndex: {
    alias: 'colorIndex',
    accepts: ['range', 'boolean'],
  },
  monochrome: {
    accepts: ['range', 'boolean'],
  },
  resolution: {
    accepts: ['range', 'value'],
    unit: 'dpi',
    stringify: applyUnit('dpi'),
  },
  scan: {
    accepts: ['enum', 'value'],
    values: ['progressive', 'interlace'],
  },
  grid: {
    accepts: ['boolean'],
  },
  hover: {
    accepts: ['boolean'],
    stringify: transformInputValues({
      true: 'hover',
      false: 'none',
    }),
  },
  anyHover: {
    accepts: ['boolean'],
    stringify: transformInputValues({
      true: 'hover',
      false: 'none',
    }),
  },
  pointer: {
    accepts: ['value'],
    stringify: transformFalseTo('none'),
  },
  anyPointer: {
    accepts: ['value'],
    stringify: transformFalseTo('none'),
  },
  update: {
    accepts: ['value'],
    stringify: transformFalseTo('none'),
  },
  colourGamut: {
    alias: 'colorGamut',
    accepts: ['value'],
  },
  overflowBlock: {
    accepts: ['value'],
    stringify: transformFalseTo('none'),
  },
  overflowInline: {
    accepts: ['value'],
    stringify: transformFalseTo('none'),
  },
  displayMode: {
    accepts: ['value'],
  },
  invertedColours: {
    alias: 'invertedColors',
    accepts: ['boolean'],
    stringify: transformInputValues({
      true: 'inverted',
      false: 'none',
    }),
  },
}

const safeJoin = curry((separator, items) =>
  items.filter(Boolean).join(separator),
)

/**
 * Will join any non-falsy values into a single string separated by a space
 * @param  {array<any>} items
 * Items to join
 * @return {string}
 * The result of joining all non-falsy values
 */
const safeJoinSpaced = (...items) => items.filter(Boolean).join(' ')

const wrapFeature = original => '(' + original + ')'
const featurePair = (name, value) =>
  wrapFeature([dasherize(name), value].join(':'))

const stringifyMq = ({ media, features }) => {
  const mediaTypes = media.length && safeJoinSpaced(media.join(', '), 'and')

  const stringifiedFeatures = flow(
    features.map(([key, value]) => {
      if (value === true) {
        return wrapFeature(key)
      }
      if (value === false) {
        return // Urrrgghhhhh javascript
      }

      return featurePair(key, value)
    }),
    safeJoin(' and '),
  )

  return safeJoinSpaced('@media', mediaTypes, stringifiedFeatures)
}

const shadesError = (...msgs) =>
  new Error('Shades<helpers.mq>: ' + msgs.join(' '))

const transformers = {
  media: name => combinator => ({
    [name]: () => combinator.media(name),
  }),
  boolean: (name, { alias = name, stringify }) => combinator => ({
    [name]: (given = true) =>
      combinator.feature([alias, ifFunctionExists(stringify, given)]),
  }),
  enum: (name, { alias = name, values, stringify }) => combinator => {
    const valueMethods = flow(
      values,
      reduce(
        (result, item) => ({
          ...result,
          [item]: () =>
            combinator.feature([alias, ifFunctionExists(stringify, item)]),
        }),
        {},
      ),
    )

    const featureMethod = givenValue => {
      if (contains(toLower(givenValue), values))
        return combinator.feature([
          alias,
          ifFunctionExists(stringify, givenValue),
        ])
      else
        throw shadesError('Oops, the', name, 'query received an invalid value!')
    }

    return {
      ...valueMethods,
      [name]: featureMethod,
    }
  },
  value: (name, { alias = name, stringify }) => combinator => ({
    [name]: givenValue =>
      combinator.feature([alias, ifFunctionExists(stringify, givenValue)]),
  }),
}

const pair = curry((first, last) => [first, last])

const rangeCombinator = prefix => combinator => data => {
  const wrapWithPrefix = original => [prefix, original].join('-')
  const treatDataAsWidth = isNumber(data)

  if (treatDataAsWidth) {
    const stringyWidth = mqFeatures.width.stringify(data)

    return combinator.feature(pair(wrapWithPrefix('width'), stringyWidth))
  }

  const parsedRange = flow(
    data,
    toPairs,
    reduce((result, [featureName, value]) => {
      const featureOptions = mqFeatures[featureName]
      const alias = featureOptions[alias]

      if (featureOptions['accepts'].includes('range')) {
        const stringedValue = ifFunctionExists(featureOptions.stringify, value)
        const nameOrAlias = alias || featureName

        return [...result, pair(wrapWithPrefix(featureName), stringedValue)]
      }

      return result
    }, []),
  )

  return combinator.feature(...parsedRange)
}

const combine = (...items) => mergeAll(items.filter(Boolean))

const rangeFns = combinator => ({
  from: rangeCombinator('min')(combinator),
  to: rangeCombinator('max')(combinator),
})

const featureEscapeHatch = combinator => (featureName, value) =>
  combinator([featureName, value])

const mqFactory = (...mediaTypes) => {
  const queryStore = {
    media: betterSet(mediaTypes),
    features: betterSet(),
  }

  const addData = {
    media: mediaName => {
      queryStore.media.add(mediaName)
      return outerMethods
    },
    feature: (...extraData) => {
      queryStore.features.add(...extraData)
      return outerMethods
    },
  }

  const featureMethods = flow(
    mqFeatures,
    toPairs,
    reduce((allMethods, [featureName, options]) => {
      const { accepts, alias } = options

      const newMethods = accepts.reduce((result, item) => {
        const transformerMethod = transformers[item]

        if (!transformerMethod) return result

        const addedTransformerMethods = transformerMethod(featureName, options)(
          addData,
        )
        const aliasedMethods =
          alias && transformerMethod(alias, options)(addData)

        return combine(result, addedTransformerMethods, aliasedMethods)
      }, {})

      return {
        ...allMethods,
        ...newMethods,
      }
    }, {}),
  )

  const outerMethods = {
    ...featureMethods,
    ...rangeFns(addData),
    feature: featureEscapeHatch(addData.feature),
    toString: () =>
      stringifyMq({
        features: queryStore.features.toArray(),
        media: queryStore.media.toArray(),
      }),
  }

  return outerMethods
}

export default mqFactory
