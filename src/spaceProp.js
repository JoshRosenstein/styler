import { when, always, merge, flow, objOf, keys, pick } from '@roseys/futils'
import {
  getThemeAttr,
  whenFunctionCallWith,
  mapObjOf,
  isNotNilOrEmpty
} from './utils'
import styler from './styler'

export const BPPropDef = (cssProp = '', options) => p => {
  const themeBPs = getThemeAttr('breakpoints')(p)
  cssProp = whenFunctionCallWith(p)(cssProp)
  return cssProp
    ? flow(
      p,
      pick(keys(themeBPs)),
      objOf('default'),
      merge(options ? { options } : {}),
      when(always(isNotNilOrEmpty(cssProp)), mapObjOf(cssProp))
    )
    : {}
}

export const BPProp = (cssProp = '', options) => p => cssProp ? styler(BPPropDef(cssProp, options))(p) : {}

// / TODO make more efficient

export const spacePropDef = (cssProp = '', getter = 'pxToRem') => p =>
  BPPropDef(cssProp, { key: 'space', getter })(p)

export const spaceProp = (cssProp = '', getter = 'pxToRem') => p =>
  cssProp ? styler(spacePropDef(cssProp, getter))(p) : {}
