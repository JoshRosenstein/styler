import { pxToEm, returnAsIs, pxToRem, pxToPct, px } from './utils'

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
  concat,
  mergeDeepWith,
  mergeDeepLeft,
  propOr,
} from 'ramda'

export const DEFAULT_RULE_KEY_LOOKUP = v =>
  prop(v, {
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
    boxShadow: 'shadows',
  })

export const DEFAULT_RULE_GETTER_LOOKUP = v =>
  prop(v, {
    margin: 'pxToRem',
    marginTop: 'pxToRem',
    marginBottom: 'pxToRem',
    marginLeft: 'pxToRem',
    marginRight: 'pxToRem',
    padding: 'pxToRem',
    paddingTop: 'pxToRem',
    paddingBottom: 'pxToRem',
    paddingLeft: 'pxToRem',
    paddingRight: 'pxToRem',
    fontSize: 'px',
  })

export const DEFAULT_FUNCTIONS_LOOKUP = v =>
  prop(v, {
    returnAsIs: returnAsIs,
    identity: returnAsIs,
    propValue: returnAsIs,
    self: returnAsIs,
    pxToRem: pxToRem,
    pxToEm: pxToEm,
    pxToPct: pxToPct,
    px: px,
  })
