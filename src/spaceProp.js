import {
  getThemeAttr,
  valueAsFunction,
  mapObjOf,
  isNotNilOrEmpty,
  UnflattenObj
} from './utils'

import { when, always, merge, pipe, objOf, keys, pick } from '@roseys/futils'

import styler from './styler'

export const BPProp = (cssProp = '', options = {}) => p => {
  let themeBPs = getThemeAttr('breakpoints')(p)
  cssProp = valueAsFunction(cssProp)(p)
  return cssProp
    ? styler(
        pipe(
          pick(keys(themeBPs)),
          objOf('default'),
          when(
            always(isNotNilOrEmpty(options)),
            merge(objOf('options', options))
          ),
          when(always(isNotNilOrEmpty(cssProp)), mapObjOf(cssProp)),

          UnflattenObj
        )(p)
      )(p)
    : {}
}

/// TODO make more efficient

const spaceProp = (cssProp = '', getter = 'pxToRem') => p =>
  BPProp(cssProp, { key: 'space', getter: getter })(p)

export default spaceProp
