import map from '@roseys/futils/src/map';
import mapKeys from '@roseys/futils/src/mapKeys';
import test from '@roseys/futils/src/test';
import always from '@roseys/futils/src/always';
import both from '@roseys/futils/src/both';
import equals from '@roseys/futils/src/equals';
import toPairs from '@roseys/futils/src/toPairs';
import is from '@roseys/futils/src/is';
import identity from '@roseys/futils/src/identity';
import join from '@roseys/futils/src/join';
import pipe from '@roseys/futils/src/pipe';
import flow from '@roseys/futils/src/flow';
import T from '@roseys/futils/src/T';
import when from '@roseys/futils/src/when';
import cond from '@roseys/futils/src/cond';
import either from '@roseys/futils/src/either';
import propOr from '@roseys/futils/src/propOr';
import toKebabCase from '@roseys/futils/src/toKebabCase';

import { pxToEm, isAtRule } from './utils';

const isDimension = test(/[height|width]$/);

const replaceShorthandKeys = mapKeys(x => propOr(x, x, {
  min: 'min-width',
  max: 'max-width',
  minW: 'min-width',
  maxW: 'max-width',
  minH: 'min-height',
  maxH: 'max-height'
}));

const objParser = obj => {
  const fn = ([feature, value]) => {
    feature = toKebabCase(feature);
    return flow(value, when(both(always(isDimension(feature)), is('Number')), pxToEm), cond([[equals(true), always(feature)], [equals(false), always(`not ${feature}`)], [T, temp => `(${feature}:${temp})`]]));
  };

  return flow(obj, replaceShorthandKeys, toPairs, map(fn), join(' and '));
};

const toMq = pipe(cond([[both(is('String'), isAtRule), identity], [is('Array'), pipe(map(objParser), join(', '))], [either(is('String'), is('Number')), pipe(pxToEm, x => ({ screen: true, minWidth: x }), objParser)], [T, objParser]]), x => `@media ${x}`);

export default toMq;