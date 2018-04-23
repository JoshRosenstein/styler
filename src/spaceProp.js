import {
  getThemeAttr,
  valueAsFunction,
  mapObjOf,
  isNotNilOrEmpty,
  UnflattenObj,
  lookUpValue,
  pxToEm
} from './utils'
import { when, always, merge, pipe, objOf, keys, pick, __ } from 'ramda'
import styler from './styler'

export const BPProp = (cssProp = '', options = {}) => p => {
  let themeBPs = getThemeAttr('breakpoints')(p)
  cssProp = valueAsFunction(cssProp)(p)
  return styler(
    pipe(
      pick(keys(themeBPs)),
      objOf('default'),
      when(always(isNotNilOrEmpty(options)), merge(objOf('options', options))),
      when(always(isNotNilOrEmpty(cssProp)), mapObjOf(cssProp)),

      UnflattenObj
    )(p),
    p
  )
}

/// TODO make more efficient

const spaceProp = (cssProp = '', getter = 'pxToRem') => p =>
  BPProp(cssProp, { key: 'space', getter: getter })(p)

export const minmaxProp = rules => p => {
  const BP = lookUpValue('breakpoints', __, p)
  const minWidth = p.min ? `(min-width:${pxToEm(BP(p.min))})` : ''
  const maxWidth = p.max ? `(max-width:${pxToEm(BP(p.max))})` : ''
  const and = minWidth && maxWidth ? 'and' : ''
  // console.log({ minWidth, maxWidth })
  if (!p.min && !p.max) return rules

  return styler({ [`@media ${minWidth} ${and} ${maxWidth}`]: { ...rules } })
}

export default spaceProp
