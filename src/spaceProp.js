import {
  getThemeAttr,
  valueAsFunction,
  mapObjOf,
  isNotNilOrEmpty
} from './utils'
import { when, always, merge, pipe, objOf, keys, pick } from 'ramda'
import styler from './styler'

const BPProp = (cssProp = '', options = {}) => p => {
  let themeBPs = getThemeAttr('breakpoints')(p)
  cssProp = valueAsFunction(cssProp)(p)
  return styler(
    pipe(
      pick(keys(themeBPs)),
      objOf('default'),
      when(always(isNotNilOrEmpty(cssProp)), mapObjOf(cssProp)),
      when(always(isNotNilOrEmpty(options)), merge(objOf('options', options)))
    )(p),
    p
  )
}

/// TODO make more efficient

const spaceProp = (cssProp = '', getter = 'pxToRem') => p =>
  BPProp(cssProp, { key: 'space', getter: getter })(p)

export default spaceProp
