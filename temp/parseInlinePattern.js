function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import merge from '@roseys/futils/src/merge';
import always from '@roseys/futils/src/always';
import both from '@roseys/futils/src/both';
import isEmpty from '@roseys/futils/src/isEmpty';
import keys from '@roseys/futils/src/keys';
import prop from '@roseys/futils/src/prop';
import ifElse from '@roseys/futils/src/ifElse';
import objOf from '@roseys/futils/src/objOf';
import values from '@roseys/futils/src/values';
import pick from '@roseys/futils/src/pick';
import isNil from '@roseys/futils/src/isNil';
import is from '@roseys/futils/src/is';
import flip from '@roseys/futils/src/flip';
import mergeDeepRight from '@roseys/futils/src/mergeDeepRight';
import defaultTo from '@roseys/futils/src/defaultTo';
import when from '@roseys/futils/src/when';
import flow from '@roseys/futils/src/flow';
import isObject from '@roseys/futils/src/isObject';
import isArray from '@roseys/futils/src/isArray';
import isString from '@roseys/futils/src/isString';


import { whenFunctionCallWith, falseToNull, getThemeAttr, isBool, isTrueBool, iterateUntilResult, arrToObj } from './utils';
import computeOptions from './computeOptions';
import lookupDefaultOptions from './lookupDefaultOptions';
import toMq from './toMq';

export default (({ value, props, globalOptions, key }) => {
  const { default: defaultValue, options: opt } = value,
        matchers = _objectWithoutProperties(value, ['default', 'options']);
  const options = merge(globalOptions, opt);
  const intersectedMatchers = keys(pick(keys(matchers), props));
  let matchedPropName;

  let computedValue;
  if (isEmpty(intersectedMatchers) && isNil(defaultValue)) {
    return computedValue;
  }

  if (isEmpty(intersectedMatchers) && !isNil(defaultValue)) {
    computedValue = whenFunctionCallWith(props)(defaultValue);
  }

  if (!isEmpty(intersectedMatchers)) {
    computedValue = flow(intersectedMatchers, iterateUntilResult((previous, propName) => {
      matchedPropName = propName;

      return flow(propName, flip(prop)(matchers), lookupDefaultOptions(props)('functions'), whenFunctionCallWith(props[propName], props), whenFunctionCallWith(props));
    }), falseToNull, defaultTo(whenFunctionCallWith(props)(defaultValue)));
  }

  if (!computedValue) {
    return computedValue;
  }
  const matchedProp = prop(matchedPropName, props);
  const nonResponisiveComputedValue = computedValue;
  const isResponsiveBoolean = isString(computedValue) && is('Array', matchedProp) || is('Object', matchedProp);

  if (isResponsiveBoolean) {
    computedValue = matchedProp;
  }
  const computeOpt = val => computeOptions({ val, options, selector: key, props });

  if (isObject(computedValue) || isArray(computedValue)) {
    let breakpoints = computedValue;
    let themeBPs = getThemeAttr('breakpoints')(props);

    if (isArray(themeBPs)) {
      themeBPs = arrToObj(themeBPs);
    }

    if (isArray(breakpoints)) {
      breakpoints = arrToObj(breakpoints);

      if (isObject(themeBPs)) {
        themeBPs = arrToObj(values(themeBPs));
      }
    }

    const getBp = x => prop(x, themeBPs);

    breakpoints = Object.keys(breakpoints).sort((a, b) => getBp(a) - getBp(b)).reduce((acc, key) => {
      acc[key] = breakpoints[key];
      return acc;
    }, {});

    const CSSObj = Object.keys(breakpoints).reduce((acc, bpKey) => {
      const bpVal = getBp(bpKey);
      if (isNil(bpVal) && bpKey !== 'default') {
        console.warn(`Styler could not find a match for breakPoints in ${key} style with ${matchedPropName}=${JSON.stringify(computedValue)}`);
        return acc;
      }

      const currentVal = when(both(always(isResponsiveBoolean), isBool), ifElse(isTrueBool, always(nonResponisiveComputedValue), always(null)))(breakpoints[bpKey]);

      const computedVal = computeOpt(currentVal);
      const res = isNil(computedVal) ? {} : bpKey === 'mobile' || bpKey === '0' || bpKey === 'default' || bpVal === 0 ? objOf(key, computedVal) : objOf([toMq(bpVal), key], computedVal);

      return mergeDeepRight(acc, res);
    }, {});

    return CSSObj;
  }

  return computeOpt(computedValue);
});