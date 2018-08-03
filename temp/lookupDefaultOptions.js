import concat from '@roseys/futils/src/concat';
import path from '@roseys/futils/src/path';
import pathOr from '@roseys/futils/src/pathOr';
import split from '@roseys/futils/src/split';
import curryN from '@roseys/futils/src/curryN';
import identity from '@roseys/futils/src/identity';
import isString from '@roseys/futils/src/isString';

import { pxToEm, pxToRem, pxToPct, px, ms, pct } from './utils';

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
    returnAsIs: identity,
    identity,
    propValue: identity,
    self: identity,
    pxToRem,
    pxToEm,
    pxToPct,
    px,
    ms,
    pct,
    '%': pct
  }
};

export const getDefaultLookups_ = attr => path(split('.', attr))(defaultLookups);

export const getDefaultLookups = (attr, fallback) => getDefaultLookups_(attr) || fallback;

const getAttrFB = (attr = '', defaultTo = '') => pathOr(getDefaultLookups(attr, defaultTo), split('.', concat('theme.styler.defaults.', attr)));

// const lookupDefaultOptions_ = (props, dictionary, value) =>
//   isString(value)
//     ? getAttrFB(
//         `${dictionary}.${value}`,
//         dictionary === "getter" ? null : value
//       )(props)
//     : value;

const lookupDefaultOptions = curryN(3, (props, dictionary, value) => isString(value) ? getAttrFB(`${dictionary}.${value}`, dictionary === 'getter' ? null : value)(props) : value);

export default lookupDefaultOptions;