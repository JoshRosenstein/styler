import toArray from '@roseys/futils/src/toArray';
import pipe from '@roseys/futils/src/pipe';
import is from '@roseys/futils/src/is';
import when from '@roseys/futils/src/when';
import reduce from '@roseys/futils/src/reduce';
import mapValues from '@roseys/futils/src/mapValues';
import join from '@roseys/futils/src/join';
import always from '@roseys/futils/src/always';
import merge from '@roseys/futils/src/merge';
import prop from '@roseys/futils/src/prop';
import curryN from '@roseys/futils/src/curryN';
import isNil from '@roseys/futils/src/isNil';
import contains from '@roseys/futils/src/contains';
import ifElse from '@roseys/futils/src/ifElse';
import toCamelCase from '@roseys/futils/src/toCamelCase';
import complement from '@roseys/futils/src/complement';
import flip from '@roseys/futils/src/flip';
import toString from '@roseys/futils/src/toString';
import test from '@roseys/futils/src/test';
import identity from '@roseys/futils/src/identity';
import map from '@roseys/futils/src/map';
import simplyEquals from '@roseys/futils/src/simplyEquals';
import split from '@roseys/futils/src/split';
import reduceWhile from '@roseys/futils/src/reduceWhile';
import either from '@roseys/futils/src/either';
import concat from '@roseys/futils/src/concat';
import toPairs from '@roseys/futils/src/toPairs';
import divide from '@roseys/futils/src/divide';
import isEmpty from '@roseys/futils/src/isEmpty';
import reduceRight from '@roseys/futils/src/reduceRight';
import both from '@roseys/futils/src/both';
import pathOr from '@roseys/futils/src/pathOr';
import objOf from '@roseys/futils/src/objOf';
import defaultTo from '@roseys/futils/src/defaultTo';
import attach from '@roseys/futils/src/attach';
import round from '@roseys/futils/src/round';
import mergeAllDeepLeft from '@roseys/futils/src/mergeAllDeepLeft';
import mergeAllDeepRight from '@roseys/futils/src/mergeAllDeepRight';
import mapKeys from '@roseys/futils/src/mapKeys';
import not from '@roseys/futils/src/not';
import isString from '@roseys/futils/src/isString';
import isFunction from '@roseys/futils/src/isFunction';
import equals from '@roseys/futils/src/equals';
import flow from '@roseys/futils/src/flow';
import T from '@roseys/futils/src/T';
import cond from '@roseys/futils/src/cond';
import propOr from '@roseys/futils/src/propOr';
import toKebabCase from '@roseys/futils/src/toKebabCase';
import path from '@roseys/futils/src/path';
import isDefined from '@roseys/futils/src/isDefined';
import keys from '@roseys/futils/src/keys';
import values from '@roseys/futils/src/values';
import pick from '@roseys/futils/src/pick';
import mergeDeepRight from '@roseys/futils/src/mergeDeepRight';
import isObject from '@roseys/futils/src/isObject';
import isArray from '@roseys/futils/src/isArray';
import last from '@roseys/futils/src/last';


const stylerCx = function stylerCx(prefix, props_) {
  const isBool = is('Boolean');
  const checkPropType = when(x => is('Array', x) || is('Object', x), always('skip'));
  const keyOrValue = function keyOrValue(name) {
    return pipe(prop(name), checkPropType, when(isNil, always('skip')), when(isBool, x => x ? name : 'skip'))(props_);
  };
  const alwaysKey = function alwaysKey(name) {
    return pipe(prop(name), checkPropType, ifElse(isNil, always('skip'), x => x ? name : 'skip'))(props_);
  };
  const keyOrValueSingle = function keyOrValueSingle(name) {
    return pipe(prop(name), when(isNil, always('skip')), checkPropType, ifElse(isBool, x => x ? name : 'skip', x => [name, x]))(props_);
  };
  const noSkip = pipe(join(' '), toCamelCase, x => {
    let _ref;
    return _ref = {}, _ref[x] = true, _ref;
  });
  const skipCond = contains('skip');
  const Skip = always({});
  const reduceSingle = function reduceSingle(arr) {
    return reduce((acc, v) => [].concat(acc, toArray(keyOrValueSingle(v))), [], arr);
  };
  const res = reduce((acc, v) => {
    if (is('Array', v)) {
      const withValues = pipe(toArray, mapValues(keyOrValue), ifElse(skipCond, Skip, noSkip))(v);
      const withKeys = pipe(toArray, mapValues(alwaysKey), ifElse(skipCond, Skip, noSkip), merge(withValues))(v);
      return merge(acc, withKeys);
    }
    return pipe(toArray, reduceSingle, ifElse(skipCond, Skip, noSkip), merge(acc))(v);
  }, {}, prefix);
  return res;
};
const cx = curryN(2, stylerCx);

const defaultTheme = {
  baseFontSize: 16,
  breakpoints: {
    mobile: 1,
    tablet: 600,
    laptop: 1024,
    desktop: 1600
  },
  space: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 128
  },
  fontSizes: {
    xxs: 12,
    xs: 14,
    sm: 16,
    md: 20,
    lg: 20,
    xl: 24,
    xxl: 32
  }
};

const uniqueID = function uniqueID() {
  const prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (/__.$/.test(prefix)) {
    return prefix;
  }
  const hash = Math.random().toString(36).substring(8);
  return `${prefix}__${hash}`;
};
const uniqifyKeys = mapKeys(uniqueID);
const mergeStyles = function mergeStyles() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return mergeAllDeepRight(args);
};
const mergeStylesWithUniqKeys = function mergeStylesWithUniqKeys() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return args.reduce((acc, v) => merge(acc, uniqifyKeys(v)), {});
};
const isTemplate = test(/{!([^}]+)}/g);
const evalTemplate = function evalTemplate(string, data) {
  return is('String', string) ? string.replace(/{!([^}]+)}/g, (_, key) => pathOr(`{!${key}}`, key, data)) : string;
};
const arrToObj = function arrToObj(arr) {
  return reduce((accumulated, value, key) => attach(key, value, accumulated), {}, arr);
};
const isNumber = is('Number');
const isBool = is('Boolean');
const isTruthy = either(Boolean, simplyEquals(0));
const isTrueBool = both(isBool, isTruthy);
const isNonZeroNumber = both(is('Number'), complement(simplyEquals(0)));
const appendString = flip(concat);
const whenisNonZeroNumber = curryN(2, (fn, input) => when(isNonZeroNumber, defaultTo(identity, fn))(input));
const appendUnit = function appendUnit(unit) {
  return whenisNonZeroNumber(pipe(toString, appendString(unit)));
};
const divideBy = flip(divide);
const stripUnit = function stripUnit(value, returnUnit) {
  const unitlessValue = parseFloat(value);
  if (returnUnit) {
    const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
    if (typeof value === 'number' || !value.match(cssRegex)) return [value, 0];
    return [unitlessValue, value.match(cssRegex)[2]];
  }
  if (Number.isNaN(unitlessValue)) return value;
  return unitlessValue;
};
const pxTo = curryN(3, (divisor, unit, num) => {
  let _stripUnit = stripUnit(num, true),
      unitless = _stripUnit[0],
      un = _stripUnit[1];
  if (un && un !== 'px') return num;
  if (isNonZeroNumber(unitless)) {
    return pipe(divideBy(defaultTo(16, divisor)), round(3), toString, appendString(unit))(unitless);
  }
  return num;
});
const pxToRem = pxTo(16, 'rem');
const pxToEm = pxTo(16, 'em');
const pxToPct = pxTo(16 / 100, '%');
const px = pxTo(1, 'px');
const rem = appendUnit('rem');
const em = appendUnit('em');
const pct = appendUnit('%');
const ms = appendUnit('ms');
const isNilOrEmpty = either(isNil, isEmpty);
const isNotNilOrEmpty = complement(isNilOrEmpty);
const isNilOrEmptyOrFalse = either(isNilOrEmpty, simplyEquals(false));
const getThemeFallback = function getThemeFallback(fallBackObj) {
  return function (attr, fallback) {
    return pathOr(fallback)(attr)(fallBackObj);
  };
};
const getThemeAttrFB = function getThemeAttrFB(fallBackObj) {
  return function () {
    const attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    const defaultTo$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return pathOr(getThemeFallback(fallBackObj)(attr, defaultTo$$1), concat('theme.', attr));
  };
};
const pathWithFallback = function pathWithFallback(fallBackObj) {
  return function () {
    const attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    const defaultTo$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return pathOr(getThemeFallback(fallBackObj)(attr, defaultTo$$1), attr);
  };
};
const getThemeAttr = getThemeAttrFB(defaultTheme);
const get = pathWithFallback({ theme: defaultTheme });
const isNegative = test(/^-.+/);
const lookUpValue = curryN(3, (themeKey, val, props) => {
  if (!isString(val)) return val;
  const isNeg = /^-.+/.test(val);
  const absN = isNeg ? val.slice(1) : val;
  val = getThemeAttr(`${themeKey}.${absN}`, val)(props);
  return isNeg ? isNumber(val) ? val * -1 : `-${val}` : val;
});
const mapObjOf = curryN(2, (key, val) => pipe(toArray, map(x => objOf(x, val)), mergeAllDeepRight)(key));
const nester = function nester(k, v) {
  return reduceRight(objOf, v, split('.', k));
};
const UnflattenObj = pipe(toPairs, map(_ref => {
  let k_ = _ref[0],
      v_ = _ref[1];
  return nester(k_, v_);
}), mergeAllDeepLeft);
const reduceWhileFalsy = curryN(2, (handlerFn, list) => reduceWhile(not, handlerFn, false, list));
const isUndefinedOrFalse = either(isNil, simplyEquals(false));
const falseToNull = function falseToNull(value) {
  if (value === false) return null;
  return value;
};
const iterateUntilResult = function iterateUntilResult(computeFn) {
  return function (obj) {
    return reduceWhile(isUndefinedOrFalse, computeFn, false, obj);
  };
};
const whenFunctionCallWith = function whenFunctionCallWith() {
  for (var _len3 = arguments.length, argsToGive = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    argsToGive[_key3] = arguments[_key3];
  }
  return when(isFunction, fnItem => fnItem(...argsToGive));
};
const isAtRule = function isAtRule(selector) {
  return selector.indexOf('@') === 0;
};
const isMQ = function isMQ(selector) {
  return (/^(MQ|mq)+/.test(selector)
  );
};
const splitSelectors = function splitSelectors(selectors) {
  if (isAtRule(selectors)) {
    return [selectors];
  }
  const splitted = [];
  let parens = 0;
  let brackets = 0;
  let current = '';
  for (let i = 0, len = selectors.length; i < len; i++) {
    const char = selectors[i];
    if (char === '(') {
      parens += 1;
    } else if (char === ')') {
      parens -= 1;
    } else if (char === '[') {
      brackets += 1;
    } else if (char === ']') {
      brackets -= 1;
    } else if (char === ',') {
      if (!parens && !brackets) {
        splitted.push(current.trim());
        current = '';
        continue;
      }
    }
    current += char;
  }
  splitted.push(current.trim());
  return splitted;
};
const PROD = process.env.NODE_ENV.trim() === 'production';
const DEV = process.env.NODE_ENV.trim() !== 'production';
const logger = function logger(bool) {
  return function () {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    if (bool && DEV) {
      let _console;
      (_console = console).log.apply(_console, [bool].concat(args));
    }
  };
};

const isDimension = test(/[height|width]$/);
const replaceShorthandKeys = mapKeys(x => propOr(x, x, {
  min: 'min-width',
  max: 'max-width',
  minW: 'min-width',
  maxW: 'max-width',
  minH: 'min-height',
  maxH: 'max-height'
}));
const objParser = function objParser(obj) {
  const fn = function fn(_ref) {
    let feature = _ref[0],
        value = _ref[1];
    feature = toKebabCase(feature);
    return flow(value, when(both(always(isDimension(feature)), is('Number')), pxToEm), cond([[equals(true), always(feature)], [equals(false), always(`not ${feature}`)], [T, function (temp) {
      return `(${feature}:${temp})`;
    }]]));
  };
  return flow(obj, replaceShorthandKeys, toPairs, map(fn), join(' and '));
};
const toMq = pipe(cond([[both(is('String'), isAtRule), identity], [is('Array'), pipe(map(objParser), join(', '))], [either(is('String'), is('Number')), pipe(pxToEm, x => ({ screen: true, minWidth: x }), objParser)], [T, objParser]]), x => `@media ${x}`);

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
const getDefaultLookups_ = function getDefaultLookups_(attr) {
  return path(split('.', attr))(defaultLookups);
};
const getDefaultLookups = function getDefaultLookups(attr, fallback) {
  return getDefaultLookups_(attr) || fallback;
};
const getAttrFB = function getAttrFB() {
  const attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const defaultTo$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return pathOr(getDefaultLookups(attr, defaultTo$$1), split('.', concat('theme.styler.defaults.', attr)));
};
const lookupDefaultOptions = curryN(3, (props, dictionary, value) => isString(value) ? getAttrFB(`${dictionary}.${value}`, dictionary === 'getter' ? null : value)(props) : value);

const computeOptions = function (_ref) {
  let val = _ref.val,
      options = _ref.options,
      selector = _ref.selector,
      props = _ref.props;
  let themeKey = options.key,
      getter = options.getter;
  let _options$defaultLooku = options.defaultLookup,
      doDefaultLookup = _options$defaultLooku === undefined ? true : _options$defaultLooku,
      _options$defaultTrans = options.defaultTransform,
      doDefaultTransform = _options$defaultTrans === undefined ? true : _options$defaultTrans,
      postFn = options.postFn,
      preFn = options.preFn,
      path$$1 = options.path;
  const defaultLookup = doDefaultLookup && lookupDefaultOptions(props)('keys')(selector);
  const defaultGetter = doDefaultTransform && lookupDefaultOptions(props)('getter')(selector);
  if (isTemplate(val)) {
    val = evalTemplate(val, props);
  }
  if (val && (defaultLookup || defaultGetter || getter || postFn || preFn || path$$1)) {
    if (preFn) {
      val = flow(preFn, whenFunctionCallWith(val, props));
    }
    themeKey = themeKey || path$$1 || defaultLookup || '';
    if (isDefined(themeKey) && isString(val)) {
      const isNeg = /^-.+/.test(val);
      val = isNeg ? val.slice(1) : val;
      const themeProp = isDefined(path$$1) ? `${themeKey}.${val}` : `theme.${themeKey}.${val}`;
      val = get(themeProp, val)(props);
      val = isNeg ? isNumber(val) ? val * -1 : `-${val}` : val;
    }
    getter = getter || postFn || defaultGetter;
    if (getter) {
      val = flow(getter, lookupDefaultOptions(props)('functions'), whenFunctionCallWith(val, props));
    }
  }
  return val;
};

const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};

const _extends = Object.assign || function (target) {
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i];

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

const objectWithoutProperties = function (obj, keys$$1) {
  const target = {};

  for (const i in obj) {
    if (keys$$1.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

const parseInlinePattern = function (_ref) {
  let value = _ref.value,
      props = _ref.props,
      globalOptions = _ref.globalOptions,
      key = _ref.key;
  let defaultValue = value.default,
      opt = value.options,
      matchers = objectWithoutProperties(value, ['default', 'options']);
  const options = merge(globalOptions, opt);
  const intersectedMatchers = keys(pick(keys(matchers), props));
  let matchedPropName = void 0;
  let computedValue = void 0;
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
  const computeOpt = function computeOpt(val) {
    return computeOptions({ val, options, selector: key, props });
  };
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
    const getBp = function getBp(x) {
      return prop(x, themeBPs);
    };
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
};

const defaultUnits = {
  animationDelay: 'ms',
  animationDuration: 'ms',
  backgroundPosition: 'px',
  backgroundPositionX: 'px',
  backgroundPositionY: 'px',
  backgroundSize: 'px',
  border: 'px',
  borderAfterWidth: 'px',
  borderBeforeWidth: 'px',
  borderBottom: 'px',
  borderBottomLeftRadius: 'px',
  borderBottomRightRadius: 'px',
  borderBottomWidth: 'px',
  borderEndWidth: 'px',
  borderHorizontalSpacing: 'px',
  borderLeft: 'px',
  borderLeftWidth: 'px',
  borderRadius: 'px',
  borderRight: 'px',
  borderRightWidth: 'px',
  borderSpacing: 'px',
  borderStartWidth: 'px',
  borderTop: 'px',
  borderTopLeftRadius: 'px',
  borderTopRightRadius: 'px',
  borderTopWidth: 'px',
  borderVerticalSpacing: 'px',
  borderWidth: 'px',
  bottom: 'px',
  boxShadow: 'px',
  boxShadowBlur: 'px',
  boxShadowSpread: 'px',
  boxShadowX: 'px',
  boxShadowY: 'px',
  columnGap: 'px',
  columnRule: 'px',
  columnRuleWidth: 'px',
  columnWidth: 'px',
  flexBasis: 'px',
  fontLineHeight: 'px',
  fontSize: 'px',
  fontSizeDelta: 'px',
  height: 'px',
  left: 'px',
  letterSpacing: 'px',
  logicalHeight: 'px',
  logicalWidth: 'px',
  margin: 'px',
  marginAfter: 'px',
  marginBefore: 'px',
  marginBottom: 'px',
  marginEnd: 'px',
  marginLeft: 'px',
  marginRight: 'px',
  marginStart: 'px',
  marginTop: 'px',
  maskPositionX: 'px',
  maskPositionY: 'px',
  maskSize: 'px',
  maxHeight: 'px',
  maxLogicalHeight: 'px',
  maxLogicalWidth: 'px',
  maxWidth: 'px',
  minHeight: 'px',
  minLogicalHeight: 'px',
  minLogicalWidth: 'px',
  minWidth: 'px',
  motion: 'px',
  motionOffset: 'px',
  outline: 'px',
  outlineOffset: 'px',
  outlineWidth: 'px',
  padding: 'px',
  paddingAfter: 'px',
  paddingBefore: 'px',
  paddingBottom: 'px',
  paddingEnd: 'px',
  paddingLeft: 'px',
  paddingRight: 'px',
  paddingStart: 'px',
  paddingTop: 'px',
  perspective: 'px',
  perspectiveOriginX: 'pct',
  perspectiveOriginY: 'pct',
  right: 'px',
  shapeMargin: 'px',
  size: 'px',
  textIndent: 'px',
  textShadowBlur: 'px',
  textShadowX: 'px',
  textShadowY: 'px',
  textStroke: 'px',
  textStrokeWidth: 'px',
  top: 'px',
  transformOrigin: 'pct',
  transformOriginX: 'pct',
  transformOriginY: 'pct',
  transformOriginZ: 'pct',
  transitionDelay: 'ms',
  transitionDuration: 'ms',
  verticalAlign: 'px',
  width: 'px',
  wordSpacing: 'px'
};
const getDefaultUnit = function (selector) {
  return defaultUnits[selector];
};

const PSUEDO_WITHOUT_SELECTOR = /(^|\s)(:{1,2})(\w)/g;
const REFERENCE_SELECTOR = /&/g;
const isNestableAtRule = function isNestableAtRule(selector) {
  return (/@\S*\b(media|supports|keyframes)\b/.test(selector)
  );
};
const containsSpecial = function containsSpecial(str) {
  return (/[~`!@#$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?\s]/g.test(str)
  );
};
const hasReference = function hasReference(selector) {
  return selector.indexOf('&') !== -1;
};
const isNestable = function isNestable(selector) {
  return isAtRule(selector) && isNestableAtRule(selector);
};
const reduceRule = function reduceRule(rules, result) {
  return reduce((style, rule) => {
    if (isNil(rule.value)) {
      return style;
    }
    if (rule.value === '' && rule.property !== 'content') {
      rule.value = undefined;
    }
    const location = rule.location.concat(rule.selectors.join(', '));
    location.reduce((style, selector, i, arr) => {
      selector = selector.trim();
      if (!selector) {
        if (rule.property === '@font-face') {
          style[rule.property] = style[rule.property] ? toArray(style[rule.property]).concat(rule.value) : rule.value;
        } else {
          style[rule.property] = rule.value;
        }
        return style;
      }
      const r = {};
      if (i === arr.length - 1) {
        r[rule.property] = rule.value;
      }
      style[selector] = merge(style[selector] || {}, r);
      return style[selector];
    }, style);
    return style;
  }, result, rules);
};
const formatOutput = function formatOutput(grouped) {
  return reduce((result, rules) => reduceRule(rules, result), {}, grouped);
};
const isPatternBlock = function isPatternBlock(key) {
  return key === '__match';
};
const isInlinePattern = function isInlinePattern(value, selector, location) {
  return isObject(value) && !isEmpty(value) && !containsSpecial(selector) && !isEmpty(selector) && !isNestable(last(location) || []) && !isPatternBlock(selector);
};
const parseRules = function parseRules(parseNested, selector, value, parents, location, props, options) {
  selector = selector.replace(/__.$/, '');
  let next = selector;
  value = flow(value, whenFunctionCallWith(props), falseToNull);
  if (parents.length) {
    next = next.replace(PSUEDO_WITHOUT_SELECTOR, '$1&$2$3');
    if (hasReference(next)) {
      next = next.replace(REFERENCE_SELECTOR, parents.pop());
    }
  }
  if (selector === '@font-face') {
    return { location: [], selector: '', property: selector, value };
  }
  if (isMQ(selector)) {
    const bp = selector.replace(/^MQ_|mq_+/, '');
    selector = flow(pathOr(bp, ['theme', 'breakpoints', selector.replace(/^MQ_|mq_+/, '')], props), toMq);
  }
  if (isPatternBlock(selector)) {
    const res = flow(value, reduce((accumulated, rulesForProp, propName) => flow(props, ifElse(x => isTruthy(prop(propName, x)), pipe(always(rulesForProp), whenFunctionCallWith(props[propName], props), whenFunctionCallWith(props), mergeDeepRight(accumulated)), always(accumulated))), {}));
    return parseNested(res, parents, location);
  }
  const log = logger(props.debug);
  log('isInlinePattern', options);
  if (isInlinePattern(value, selector, parents)) {
    value = parseInlinePattern({
      props,
      value,
      key: selector,
      globalOptions: options
    });
    if (isObject(value)) {
      return parseNested(value, parents, location);
    }
  }
  if (isObject(value)) {
    const nestable = isNestable(selector);
    if (nestable) {
      location = location.concat(selector);
    } else if (isAtRule(selector)) {
      parents = [next];
      location = [];
    } else if (location.length && isNestable(location[location.length - 1]) && location[location.length - 1].indexOf(' ') === -1) {
      location[location.length - 1] += ` ${selector}`;
    } else {
      parents = parents.concat(next);
    }
    return parseNested(value, parents, location);
  }
  if (typeof value === 'number' && value !== 0) {
    const unit = getDefaultUnit(selector);
    if (unit) {
      value += unit;
    }
  }
  if (isTemplate(value)) {
    value = evalTemplate(value, props);
  }
  return {
    location,
    selector: parents.join(' '),
    property: selector,
    value
  };
};
const groupRules = function groupRules() {
  const group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return function (rules) {
    const idFn = function idFn(property, selector, value, i) {
      if (group) {
        return property + (selector === '' ? 'root' : '') + ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' ? value : `__${i}`);
      }
      return selector + property + ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' ? value : `__${i}`);
    };
    return reduce((grouped, rule, i) => {
      const id = idFn(rule.property, rule.selector, rule.value, i);
      if (!grouped[rule.location]) {
        grouped[rule.location] = {};
      }
      if (!grouped[rule.location][id]) {
        grouped[rule.location][id] = {
          location: rule.location,
          selectors: rule.selector ? [rule.selector] : [],
          property: rule.property,
          value: rule.value
        };
      } else if (rule.selector) {
        grouped[rule.location][id].selectors.push(rule.selector);
      }
      return grouped;
    }, {}, rules);
  };
};
const getRules = function getRules(_ref) {
  let obj = _ref.obj,
      _ref$parents = _ref.parents,
      parents = _ref$parents === undefined ? [] : _ref$parents,
      _ref$location = _ref.location,
      location = _ref$location === undefined ? [] : _ref$location,
      props = _ref.props,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? {} : _ref$options;
  if (is('Function')(obj)) {
    obj = obj(props);
  }
  let _obj = obj,
      globalOptions = _obj.options,
      rules = objectWithoutProperties(_obj, ['options']);
  options = _extends({}, options, globalOptions);
  const getNested = function getNested(givenObj, givenParents, givenLocation) {
    return getRules({
      obj: givenObj,
      parents: givenParents,
      location: givenLocation,
      options,
      props
    });
  };
  const log = logger(props.debug);
  log('gOptions', options);
  return pipe(keys, reduce((result, selectors) => pipe(splitSelectors, reduce((res, selector) => {
    const parsed = parseRules(getNested, selector, rules[selectors], parents.slice(), location.slice(), props, options);
    return res.concat(parsed);
  }, result))(selectors), []))(obj);
};
const getRules_ = function getRules_(_ref2) {
  let obj = _ref2.obj,
      props = _ref2.props;
  const log = logger(props.debug);
  let options = obj.options,
      rules = objectWithoutProperties(obj, ['options']);
  let newProps = _extends({}, props);
  if (options) {
    let cxopt = options.cx,
        opt = objectWithoutProperties(options, ['cx']);
    if (cxopt) {
      newProps = cx(cxopt, props);
    }
    log('options', opt);
    return getRules({
      obj: _extends({}, rules, { options: opt }),
      props: _extends({}, newProps, props)
    });
  }
  return getRules({ obj, props });
};
const styler = function styler(obj) {
  const groupSelectors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return function (props) {
    let rules = void 0;
    if (is('Function')(obj)) {
      return styler(obj(props))(props);
    }
    if (Array.isArray(obj)) {
      rules = obj.reduce((r, o) => r.concat(getRules({ obj: o, props })), []);
    } else {
      rules = getRules_({ obj, props });
    }
    return flow(rules, groupRules(groupSelectors), formatOutput);
  };
};

const BPPropDef = function BPPropDef() {
  let cssProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const options = arguments[1];
  return function (p) {
    const themeBPs = getThemeAttr('breakpoints')(p);
    cssProp = whenFunctionCallWith(p)(cssProp);
    return cssProp ? flow(p, pick(keys(themeBPs)), objOf('default'), merge(options ? { options } : {}), when(always(isNotNilOrEmpty(cssProp)), mapObjOf(cssProp))) : {};
  };
};
const BPProp = function BPProp() {
  const cssProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const options = arguments[1];
  return function (p) {
    return cssProp ? styler(BPPropDef(cssProp, options))(p) : {};
  };
};
const spacePropDef = function spacePropDef() {
  const cssProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const getter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pxToRem';
  return function (p) {
    return BPPropDef(cssProp, { key: 'space', getter })(p);
  };
};
const spaceProp = function spaceProp() {
  const cssProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const getter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pxToRem';
  return function (p) {
    return cssProp ? styler(spacePropDef(cssProp, getter))(p) : {};
  };
};

const getters = {
  getWidth: function getWidth(n) {
    return !isNumber(n) || n > 1 ? pxToRem(n) : `${n * 100}%`;
  },
  getBorder: function getBorder(n) {
    return isNumber(n) && n > 0 ? `${n}px solid` : n;
  },
  backgroundImage: function backgroundImage(val) {
    return `url(${val})`;
  },
  ratio: function ratio(n) {
    return `${n * 100}%`;
  }
};
const width = {
  width: 'returnAsIs',
  w: 'returnAsIs',
  options: {
    postFn: getters.getWidth
  }
};
const fontSize = {
  fontSize: 'returnAsIs',
  f: 'returnAsIs',
  options: {
    postFn: 'px',
    key: 'fontSizes'
  }
};
const color = {
  color: 'returnAsIs',
  options: {
    key: 'colors'
  }
};
const backgroundColor = {
  backgroundColor: 'returnAsIs',
  bgColor: 'returnAsIs',
  options: {
    key: 'colors'
  }
};
const colors = {
  color,
  backgroundColor
};
const fontFamily = {
  fontFamily: 'returnAsIs',
  font: 'returnAsIs',
  options: {
    key: 'fonts'
  }
};
const textAlign = {
  textAlign: 'returnAsIs'
};
const lineHeight = {
  lineHeight: 'returnAsIs',
  options: {
    key: 'lineHeights'
  }
};
const fontWeight = {
  fontWeight: 'returnAsIs',
  options: {
    key: 'fontWeights'
  }
};
const letterSpacing = {
  letterSpacing: 'returnAsIs',
  options: {
    key: 'letterSpacings',
    postFn: 'px'
  }
};
const display = {
  display: 'returnAsIs'
};
const maxWidth = {
  maxWidth: 'returnAsIs',
  options: {
    key: 'maxWidths',
    postFn: 'px'
  }
};
const minWidth = {
  minWidth: 'returnAsIs',
  options: {
    key: 'minWidths',
    postFn: 'px'
  }
};
const height = {
  height: 'returnAsIs',
  options: {
    key: 'heights',
    postFn: 'pxToRem'
  }
};
const maxHeight = {
  maxHeight: 'returnAsIs',
  options: {
    key: 'maxHeights',
    postFn: 'px'
  }
};
const minHeight = {
  minHeight: 'returnAsIs',
  options: {
    key: 'minHeights',
    postFn: 'px'
  }
};
const size_width_c = {
  width: {
    size: 'returnAsIs',
    options: {
      postFn: 'px'
    }
  }
};
const size_height_c = {
  height: {
    size: 'returnAsIs',
    options: {
      postFn: 'px'
    }
  }
};
const size_c = _extends({}, size_width_c, size_height_c);
const ratio_c = {
  height: 0,
  paddingBottom: {
    ratio: 'returnAsIs',
    options: {
      postFn: function postFn(n) {
        return `${n * 100}%`;
      }
    }
  }
};
const alignItems = {
  alignItems: 'returnAsIs'
};
const alignContent = {
  alignContent: 'returnAsIs'
};
const justifyContent = {
  justifyContent: 'returnAsIs',
  justify: 'returnAsIs'
};
const flexWrap = {
  flexWrap: 'returnAsIs',
  fxWrap: 'returnAsIs',
  wrap: 'wrap',
  nowrap: 'nowrap',
  wrapReverse: 'wrapReverse'
};
const flexDirection = {
  flexDirection: 'returnAsIs',
  direction: 'returnAsIs',
  fxdirection: 'returnAsIs',
  row: 'row',
  column: 'column',
  rowReverse: 'rowReverse',
  columnReverse: 'columnReverse'
};
const flexBasis = {
  flexBasis: 'returnAsIs',
  options: {
    postFn: getters.getWidth
  }
};
const flex = {
  flex: 'returnAsIs'
};
const justifySelf = {
  justifySelf: 'returnAsIs'
};
const alignSelf = {
  alignSelf: 'returnAsIs'
};
const order = {
  order: 'returnAsIs'
};
const gridGap = {
  gridGap: 'returnAsIs',
  gap: 'returnAsIs',
  options: {
    postFn: px,
    key: 'space'
  }
};
const gridColumnGap = {
  gridColumnGap: 'returnAsIs',
  options: {
    postFn: 'px',
    key: 'space'
  }
};
const gridArea = {
  gridArea: 'returnAsIs'
};
const gridColumnStart = {
  gridColumnStart: 'returnAsIs'
};
const gridColumnEnd = {
  gridColumnEnd: 'returnAsIs'
};
const gridRowStart = {
  gridRowStart: 'returnAsIs'
};
const gridRowEnd = {
  gridRowEnd: 'returnAsIs'
};
const gridColumn = {
  gridColumn: 'returnAsIs'
};
const gridRow = {
  gridRow: 'returnAsIs'
};
const gridAutoFlow = {
  gridAutoFlow: 'returnAsIs',
  row: 'row',
  column: 'column',
  dense: 'dense'
};
const gridAutoColumns = {
  gridAutoColumns: 'returnAsIs',
  autoColumns: 'returnAsIs'
};
const gridAutoRows = {
  gridAutoRows: 'returnAsIs',
  autoRows: 'returnAsIs'
};
const gridTemplate = {
  gridTemplate: 'returnAsIs',
  template: 'returnAsIs'
};
const gridTemplateAreas = {
  gridTemplateAreas: 'returnAsIs',
  areas: 'returnAsIs'
};
const gridTemplateColumns = {
  gridTemplateColumns: 'returnAsIs',
  columns: 'returnAsIs'
};
const gridTemplateRows = {
  gridTemplateRows: 'returnAsIs',
  rows: 'returnAsIs'
};
const border = {
  border: 'returnAsIs',
  bd: 'returnAsIs',
  options: {
    key: 'borders',
    postFn: getters.getBorder
  }
};
const borderTop = {
  borderTop: 'returnAsIs',
  bdT: 'returnAsIs',
  options: {
    key: 'borders',
    postFn: getters.getBorder
  }
};
const borderRight = {
  borderRight: 'returnAsIs',
  bdR: 'returnAsIs',
  options: {
    key: 'borders',
    postFn: getters.getBorder
  }
};
const borderBottom = {
  borderBottom: 'returnAsIs',
  bdB: 'returnAsIs',
  options: {
    key: 'borders',
    postFn: getters.getBorder
  }
};
const borderLeft = {
  borderLeft: 'returnAsIs',
  bdL: 'returnAsIs',
  options: {
    key: 'borders',
    postFn: getters.getBorder
  }
};
const borders_c = {
  border,
  borderLeft,
  borderBottom,
  borderRight,
  borderTop
};
const borderColor = {
  borderColor: 'returnAsIs',
  bdC: 'returnAsIs',
  options: {
    key: 'colors'
  }
};
const borderRadius = {
  borderRadius: 'returnAsIs',
  bdRs: 'returnAsIs',
  options: {
    key: 'radii',
    postFn: 'px'
  }
};
const background = {
  background: 'returnAsIs',
  bg: 'returnAsIs'
};
const backgroundImage = {
  backgroundImage: 'returnAsIs',
  bgImage: 'returnAsIs',
  options: {
    postFn: function postFn(v) {
      return `url(${v})`;
    }
  }
};
const backgroundSize = {
  backgroundSize: 'returnAsIs',
  bgSize: 'returnAsIs'
};
const backgroundPosition = {
  backgroundPosition: 'returnAsIs',
  bgPosition: 'returnAsIs'
};
const backgroundRepeat = {
  backgroundRepeat: 'returnAsIs',
  bgRepeat: 'returnAsIs'
};
const position = {
  position: 'returnAsIs',
  static: 'static',
  absolute: 'absolute',
  fixed: 'fixed',
  relative: 'relative',
  sticky: 'sticky'
};
const zIndex = {
  zIndex: 'returnAsIs'
};
const top = {
  top: 'returnAsIs',
  options: {
    postFn: 'px'
  }
};
const right = {
  right: 'returnAsIs',
  options: {
    postFn: 'px'
  }
};
const bottom = {
  bottom: 'returnAsIs',
  options: {
    postFn: 'px'
  }
};
const left = {
  left: 'returnAsIs',
  options: {
    postFn: 'px'
  }
};
const boxShadow = {
  boxShadow: 'returnAsIs',
  bxSh: 'returnAsIs',
  options: {
    key: 'shadows'
  }
};
const padding = {
  padding: 'returnAsIs',
  p: 'returnAsIs',
  options: {
    key: 'space',
    postFn: 'pxToRem'
  }
};
const paddingLeft = {
  paddingLeft: 'returnAsIs',
  pl: 'returnAsIs',
  px: 'returnAsIs',
  options: {
    key: 'space',
    postFn: 'pxToRem'
  }
};
const paddingRight = {
  paddingRight: 'returnAsIs',
  pr: 'returnAsIs',
  px: 'returnAsIs',
  options: {
    key: 'space',
    postFn: 'pxToRem'
  }
};
const paddingTop = {
  paddingTop: 'returnAsIs',
  pt: 'returnAsIs',
  py: 'returnAsIs',
  options: {
    key: 'space',
    postFn: 'pxToRem'
  }
};
const paddingBottom = {
  paddingBottom: 'returnAsIs',
  pb: 'returnAsIs',
  py: 'returnAsIs',
  options: {
    key: 'space',
    postFn: 'pxToRem'
  }
};
const margin = {
  margin: 'returnAsIs',
  m: 'returnAsIs',
  options: {
    key: 'space',
    postFn: 'pxToRem'
  }
};
const marginLeft = {
  marginLeft: 'returnAsIs',
  ml: 'returnAsIs',
  mx: 'returnAsIs',
  options: {
    key: 'space',
    postFn: 'pxToRem'
  }
};
const marginRight = {
  marginRight: 'returnAsIs',
  mr: 'returnAsIs',
  mx: 'returnAsIs',
  options: {
    key: 'space',
    postFn: 'pxToRem'
  }
};
const marginTop = {
  marginTop: 'returnAsIs',
  mt: 'returnAsIs',
  my: 'returnAsIs',
  options: {
    key: 'space',
    postFn: 'pxToRem'
  }
};
const marginBottom = {
  marginBottom: 'returnAsIs',
  mb: 'returnAsIs',
  my: 'returnAsIs',
  options: {
    key: 'space',
    postFn: 'pxToRem'
  }
};
const space = {
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom
};

export default styler;
export { styler, cx, toMq, getThemeAttr, pxTo, pxToRem, pxToEm, pxToPct, px, rem, em, pct, ms, uniqifyKeys, mergeStyles, mergeStylesWithUniqKeys, spaceProp, spacePropDef, BPPropDef, BPProp, alignContent, alignItems, alignSelf, background, backgroundColor, backgroundImage, backgroundPosition, backgroundRepeat, backgroundSize, border, borderBottom, borderColor, borderLeft, borderRadius, borderRight, borderTop, borders_c, bottom, boxShadow, color, colors, display, flex, flexDirection, flexBasis, flexWrap, fontFamily, fontSize, fontWeight, getters, gridArea, gridColumnStart, gridColumnEnd, gridRowStart, gridRowEnd, gridAutoColumns, gridAutoFlow, gridAutoRows, gridColumn, gridColumnGap, gridGap, gridRow, gridTemplate, gridTemplateAreas, gridTemplateColumns, gridTemplateRows, height, justifyContent, justifySelf, left, letterSpacing, lineHeight, margin, marginBottom, marginLeft, marginRight, marginTop, maxHeight, maxWidth, minHeight, minWidth, order, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, position, ratio_c, right, size_c, size_height_c, size_width_c, space, textAlign, top, width, zIndex };