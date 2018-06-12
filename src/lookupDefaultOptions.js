import {
  pxToEm,
  returnAsIs,
  pxToRem,
  pxToPct,
  px,
  isString,
  ms,
  pct
} from './utils'

import { when, concat, path, pathOr, split } from '@roseys/futils'


// export const lookUpShortcut = curry2((dictionary, value) =>
//   when(isString, v => dictionary(v) || v, value)
// )

const defaultLookups = {
  keys: {
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
    boxShadow: 'shadows'
  },
  getter: {
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
    fontSize: 'px'
  },
  functions: {
    returnAsIs: returnAsIs,
    identity: returnAsIs,
    propValue: returnAsIs,
    self: returnAsIs,
    pxToRem: pxToRem,
    pxToEm: pxToEm,
    pxToPct: pxToPct,
    px: px,
    ms: ms,
    pct: pct,
    '%': pct
  }
}

export const getDefaultLookups_ = attr => path(split('.', attr))(defaultLookups)

export const getDefaultLookups = (attr, fallback) =>
  getDefaultLookups_(attr) || fallback

export const getAttrFB = (attr = '', defaultTo = '') =>
  pathOr(
    getDefaultLookups(attr, defaultTo),
    split('.', concat('theme.styler.defaults.', attr))
  )

// const lookupDefaultOptions_ = (props, dictionary, value) =>
//   isString(value)
//     ? getAttrFB(
//         `${dictionary}.${value}`,
//         dictionary === "getter" ? null : value
//       )(props)
//     : value;

const lookupDefaultOptions = props => dictionary => value =>
  isString(value)
    ? getAttrFB(
        `${dictionary}.${value}`,
        dictionary === 'getter' ? null : value
      )(props)
    : value

export default lookupDefaultOptions
