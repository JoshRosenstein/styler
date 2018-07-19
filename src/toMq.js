import {
  map,
  mapKeys,
  test,
  always,
  both,
  equals,
  toPairs,
  is,
  identity,
  join,
  pipe,
  flow,
  T,
  when,
  cond,
  either,
  defaultTo,
  prop
} from '@roseys/futils'
import { pxToEm, isAtRule } from './utils'

const propOr = (d, name, keyedFunctor) => defaultTo(d, prop(name, keyedFunctor))
const dasherize = original =>
  original
    .trim()
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '-')
    .toLowerCase()

const isDimension = test(/[height|width]$/)

const replaceShorthandKeys = mapKeys(x =>
  propOr(x, x, {
    min: 'min-width',
    max: 'max-width',
    minW: 'min-width',
    maxW: 'max-width',
    minH: 'min-height',
    maxH: 'max-height'
  })
)

const objParser = obj => {
  const fn = ([feature, value]) => flow(
    value,
    when(both(always(isDimension(dasherize(feature))), is('Number')), pxToEm),
    cond([
      [equals(true), always(dasherize(feature))],
      [equals(false), always(`not ${  dasherize(feature)}`)],
      [T, temp => `(${  dasherize(feature)  }:${  temp  })`]
    ])
  )

  return flow(obj, replaceShorthandKeys, toPairs, map(fn), join(' and '))
}

const toMq = pipe(
  cond([
    [both(is('String'), isAtRule), identity],
    [is(Array), pipe(map(objParser), join(', '))],
    [
      either(is('String'), is('Number')),
      pipe(pxToEm, x => ({ screen: true, minWidth: x }), objParser)
    ],
    [T, objParser]
  ]),
  x => `@media ${  x}`
)

export default toMq
