import {
  getThemeAttr,
  valueAsFunction,
  mapObjOf,
  isNotNilOrEmpty,
  UnflattenObj
} from './utils'
import { when, always, merge, pipe, objOf, keys, pick } from 'ramda'
import styler from './styler'

export const BPProp = (cssProp = '', options = {}) => p => {
  let themeBPs = getThemeAttr('breakpoints')(p)
  cssProp = valueAsFunction(cssProp)(p)
  return styler(
    pipe(
      pick(keys(themeBPs)),
      objOf('default'),
      when(always(isNotNilOrEmpty(cssProp)), mapObjOf(cssProp)),
      when(always(isNotNilOrEmpty(options)), merge(objOf('options', options))),
      UnflattenObj
    )(p),
    p
  )
}

/// TODO make more efficient

const spaceProp = (cssProp = '', getter = 'pxToRem') => p =>
  BPProp(cssProp, { key: 'space', getter: getter })(p)

export default spaceProp
