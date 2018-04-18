import {
  isArray,
  getThemeAttr,
  pxToRem,
  valueAsFunction,
  mapObjOf
} from './utils'
import { merge, pipe, objOf, map, keys } from 'ramda'
import styler from './styler'

/// TODO make more efficient
const spaceProp = (cssProp, getter = pxToRem) => props => {
  let themeBPs = getThemeAttr('breakpoints')(props)
  cssProp = valueAsFunction(cssProp)(props)

  if (isArray(themeBPs)) {
    console.warn('spaceProp can only be used for Object Literal BreakPoints')
  }

  return styler(
    map(
      pipe(
        x => objOf(x, objOf(x)),
        mapObjOf(cssProp),
        merge({ options: { key: 'space', getter: getter } })
      )
    )(keys(themeBPs)),
    props
  )
}

export default spaceProp
