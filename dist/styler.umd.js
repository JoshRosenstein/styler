(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@roseys/futils')) :
  typeof define === 'function' && define.amd ? define(['exports', '@roseys/futils'], factory) :
  (factory((global.roseyStyler = {}),global.futils));
}(this, (function (exports,futils) { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var defaultTheme = {
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

  var arrToObj = function arrToObj(arr) {
    return futils.reduce(function (accumulated, value, key) {
      return futils.attach(key, value, accumulated);
    }, {}, arr);
  };
  var flow = function flow(value) {
    for (var _len = arguments.length, argsToGive = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      argsToGive[_key - 1] = arguments[_key];
    }

    return futils.pipe.apply(void 0, argsToGive)(value);
  }; // pxToEm, returnAsIs, pxToRem, pxToPct, px

  var isArray = futils.is('Array');
  var isString = futils.is('String');
  var isFunction = futils.is('Function');
  var isNumber = futils.is('Number');
  var isBool = futils.is('Boolean');
  var isTruthy = futils.either(Boolean, futils.simplyEquals(0));
  var isTrueBool = futils.both(isBool, isTruthy);
  var mergeAllDeepLeft = futils.reduce(futils.mergeDeepLeft, {});
  var mergeAllDeepRight = futils.reduce(futils.mergeDeepRight, {});
  var isNonZeroNumber = futils.both(futils.is('Number'), futils.complement(futils.simplyEquals(0)));
  var appendString = futils.flip(futils.concat);
  var whenisNonZeroNumber = futils.curryN(2, function (fn, input) {
    return futils.when(isNonZeroNumber, futils.defaultTo(futils.identity, fn))(input);
  });
  var appendUnit = function appendUnit(unit) {
    return whenisNonZeroNumber(futils.pipe(futils.toString, appendString(unit)));
  };
  var divideBy = futils.flip(futils.divide);
  var pxTo = futils.curry(function (divisor, unit, num) {
    return whenisNonZeroNumber(futils.pipe(divideBy(futils.defaultTo(16, divisor)), futils.toString, appendString(unit)), num);
  });
  var pxToRem = pxTo(16, 'rem');
  var pxToEm = pxTo(16, 'em');
  var pxToPct = pxTo(16 / 100, '%');
  var px = pxTo(1, 'px');
  var rem = appendUnit('rem');
  var em = appendUnit('em');
  var pct = appendUnit('%');
  var ms = appendUnit('ms');
  var isNilOrEmpty = futils.either(futils.isNil, futils.isEmpty);
  var isNotNilOrEmpty = futils.complement(isNilOrEmpty);
  var isNilOrEmptyOrFalse = futils.either(isNilOrEmpty, futils.simplyEquals(false));
  var filterNilAndEmpty = futils.filter(futils.complement(isNilOrEmpty));
  var filterNilOrEmptyOrFalse = futils.filter(futils.complement(isNilOrEmptyOrFalse));

  var getThemeFallback = function getThemeFallback(fallBackObj) {
    return function (attr, fallback) {
      return futils.pathOr(fallback)(futils.split('.', attr))(fallBackObj);
    };
  };

  var getThemeAttrFB = function getThemeAttrFB(fallBackObj) {
    return function () {
      var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var defaultTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return futils.pathOr(getThemeFallback(fallBackObj)(attr, defaultTo), futils.split('.', futils.concat('theme.', attr)));
    };
  };
  var getThemeAttr = getThemeAttrFB(defaultTheme);
  var isNegative = futils.test(/^-.+/);
  var lookUpValue = futils.curryN(3, function (themeKey, val, props) {
    /// Check Strip Negative Before lookingUp
    if (!isString(val)) return val;
    var isNeg = /^-.+/.test(val);
    var absN = isNeg ? val.slice(1) : val;
    val = getThemeAttr("".concat(themeKey, ".").concat(absN), val)(props);
    return isNeg ? isNumber(val) ? val * -1 : '-' + val : val;
  });
  var mapObjOf = futils.curry(function (key, val) {
    return futils.pipe(futils.toArray, futils.mapValues(function (x) {
      return futils.objOf(x, val);
    }), futils.mergeAll)(key);
  }); /// For quick nested selectors

  var nester = function nester(k, v) {
    return futils.reduceRight(futils.objOf, v, futils.split('.', k));
  };

  var UnflattenObj = futils.pipe(futils.toPairs, futils.mapValues(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k_ = _ref2[0],
        v_ = _ref2[1];

    return nester(k_, v_);
  }), mergeAllDeepLeft);
  var isFalsy = function isFalsy(value) {
    return !value;
  };
  var reduceWhileFalsy = futils.curry(function (handlerFn, list) {
    return futils.reduceWhile(isFalsy, handlerFn, false, list);
  });
  var includes = futils.curry(function (comparator, value) {
    return value.includes(comparator);
  });
  var isObjectLiteral = futils.is('Object');
  var isSymbol = futils.is('Symbol');
  var isMap = futils.is('Map');
  var isDefined = futils.complement(futils.isNil);
  var isNotDefined = futils.isNil;
  var isUndefinedOrFalse = futils.either(isNotDefined, futils.simplyEquals(false));
  var returnAsIs = function returnAsIs(value) {
    return value;
  }; // Takes any value, and if the value is not a function, return a new function that
  // always returns that value; otherwise, if the value is already a function, just return it.

  var valueAsFunction = function valueAsFunction(value) {
    if (!isFunction(value)) return function () {
      return value;
    };
    return value;
  };
  var falseToNull = function falseToNull(value) {
    if (value === false) return null;
    return value;
  };
  var fallbackTo = function fallbackTo(fallback) {
    return futils.pipe(falseToNull, futils.defaultTo(fallback));
  };
  var iterateUntilResult = function iterateUntilResult(computeFn) {
    return function (obj) {
      return futils.reduceWhile(isUndefinedOrFalse, computeFn, false, obj);
    };
  };
  var whenFunctionCallWith = function whenFunctionCallWith() {
    for (var _len2 = arguments.length, argsToGive = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      argsToGive[_key2] = arguments[_key2];
    }

    return futils.when(futils.is('Function'), function (fnItem) {
      return fnItem.apply(void 0, argsToGive);
    });
  };
  var isAtRule = function isAtRule(selector) {
    return selector.indexOf('@') === 0;
  };
  var splitSelectors = function splitSelectors(selectors) {
    if (isAtRule(selectors)) {
      return [selectors];
    }

    var splitted = [];
    var parens = 0;
    var brackets = 0;
    var current = '';

    for (var i = 0, len = selectors.length; i < len; i++) {
      var char = selectors[i];

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
  var arrify = function arrify(val) {
    if (val === null || val === undefined) {
      return [];
    }

    return Array.isArray(val) ? val : [val];
  };

  var utils = /*#__PURE__*/Object.freeze({
    arrToObj: arrToObj,
    flow: flow,
    isArray: isArray,
    isString: isString,
    isFunction: isFunction,
    isNumber: isNumber,
    isBool: isBool,
    isTruthy: isTruthy,
    isTrueBool: isTrueBool,
    mergeAllDeepLeft: mergeAllDeepLeft,
    mergeAllDeepRight: mergeAllDeepRight,
    isNonZeroNumber: isNonZeroNumber,
    appendString: appendString,
    whenisNonZeroNumber: whenisNonZeroNumber,
    appendUnit: appendUnit,
    pxTo: pxTo,
    pxToRem: pxToRem,
    pxToEm: pxToEm,
    pxToPct: pxToPct,
    px: px,
    rem: rem,
    em: em,
    pct: pct,
    ms: ms,
    isNilOrEmpty: isNilOrEmpty,
    isNotNilOrEmpty: isNotNilOrEmpty,
    toArray: futils.toArray,
    isNilOrEmptyOrFalse: isNilOrEmptyOrFalse,
    filterNilAndEmpty: filterNilAndEmpty,
    filterNilOrEmptyOrFalse: filterNilOrEmptyOrFalse,
    getThemeAttrFB: getThemeAttrFB,
    getThemeAttr: getThemeAttr,
    isNegative: isNegative,
    lookUpValue: lookUpValue,
    mapObjOf: mapObjOf,
    UnflattenObj: UnflattenObj,
    isFalsy: isFalsy,
    reduceWhileFalsy: reduceWhileFalsy,
    includes: includes,
    isObjectLiteral: isObjectLiteral,
    isSymbol: isSymbol,
    isMap: isMap,
    isDefined: isDefined,
    isNotDefined: isNotDefined,
    isUndefinedOrFalse: isUndefinedOrFalse,
    returnAsIs: returnAsIs,
    valueAsFunction: valueAsFunction,
    falseToNull: falseToNull,
    fallbackTo: fallbackTo,
    iterateUntilResult: iterateUntilResult,
    whenFunctionCallWith: whenFunctionCallWith,
    isAtRule: isAtRule,
    splitSelectors: splitSelectors,
    arrify: arrify
  });

  //   when(isString, v => dictionary(v) || v, value)
  // )

  var defaultLookups = {
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
  };
  var getDefaultLookups_ = function getDefaultLookups_(attr) {
    return futils.path(futils.split('.', attr))(defaultLookups);
  };
  var getDefaultLookups = function getDefaultLookups(attr, fallback) {
    return getDefaultLookups_(attr) || fallback;
  };
  var getAttrFB = function getAttrFB() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var defaultTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return futils.pathOr(getDefaultLookups(attr, defaultTo), futils.split('.', futils.concat('theme.styler.defaults.', attr)));
  }; // const lookupDefaultOptions_ = (props, dictionary, value) =>
  //   isString(value)
  //     ? getAttrFB(
  //         `${dictionary}.${value}`,
  //         dictionary === "getter" ? null : value
  //       )(props)
  //     : value;

  var lookupDefaultOptions = function lookupDefaultOptions(props) {
    return function (dictionary) {
      return function (value) {
        return isString(value) ? getAttrFB("".concat(dictionary, ".").concat(value), dictionary === 'getter' ? null : value)(props) : value;
      };
    };
  };

  //   let { getter } = options
  //   getter = getter || lookupDefaultOptions({}, 'getter', selector)
  //   if (getter) {
  //     val = R.pipe(
  //       lookupDefaultOptions({}, 'functions'),
  //       whenFunctionCallWith(val, props)
  //     )(getter)
  //     return val
  //   }
  //   return val
  // }
  //
  // export const computeTheme = ({ val, selector, options, props }) => {
  //   let { key: themeKey } = options
  //   themeKey = themeKey || lookupDefaultOptions(props, 'keys', selector)
  //
  //   if (themeKey && isString(val)) {
  //     /// Check Strip Negative Before lookingUp
  //     const isNeg = /^-.+/.test(val)
  //     const absN = isNeg ? val.slice(1) : val
  //
  //     val = getThemeAttr(`${themeKey}.${absN}`, val)(props)
  //     val = isNeg ? (isNumber(val) ? val * -1 : '-' + val) : val
  //   }
  //
  //   return val
  // }

  var computeOptions = (function (_ref) {
    var val = _ref.val,
        options = _ref.options,
        selector = _ref.selector,
        props = _ref.props;

    if (options && val) {
      var themeKey = options.key,
          getter = options.getter; /// If options was not provided, check default lookUp

      themeKey = themeKey || lookupDefaultOptions(props)('keys')(selector);

      if (themeKey && isString(val)) {
        /// Check Strip Negative Before lookingUp
        var isNeg = /^-.+/.test(val);
        var absN = isNeg ? val.slice(1) : val;
        val = getThemeAttr("".concat(themeKey, ".").concat(absN), val)(props);
        val = isNeg ? isNumber(val) ? val * -1 : '-' + val : val;
      }

      getter = getter || lookupDefaultOptions(props)('getter')(selector);

      if (getter) {
        val = futils.pipe(lookupDefaultOptions(props)('functions'), whenFunctionCallWith(val, props))(getter);
      }
    }

    return val;
  });

  var parseInlinePattern = (function (_ref) {
    var value = _ref.value,
        props = _ref.props,
        globalOptions = _ref.globalOptions,
        key = _ref.key;

    var defaultValue = value.default,
        opt = value.options,
        matchers = _objectWithoutProperties(value, ["default", "options"]);

    var options = futils.merge(globalOptions, opt);
    var intersectedMatchers = futils.keys(futils.pick(futils.keys(matchers), props));
    var matchedPropName;
    var computedValue; // console.log(intersectedMatchers,isEmpty(intersectedMatchers))

    if (futils.isEmpty(intersectedMatchers) && futils.isNil(defaultValue)) {
      return computedValue;
    }

    if (futils.isEmpty(intersectedMatchers) && !futils.isNil(defaultValue)) {
      computedValue = whenFunctionCallWith(props)(defaultValue);
    }

    if (!futils.isEmpty(intersectedMatchers)) {
      computedValue = flow(intersectedMatchers, iterateUntilResult(function (previous, propName) {
        matchedPropName = propName;
        return flow(propName, futils.flip(futils.prop)(matchers), lookupDefaultOptions(props)('functions'), whenFunctionCallWith(props[propName], props), whenFunctionCallWith(props));
      }), falseToNull, futils.defaultTo(whenFunctionCallWith(props)(defaultValue)));
    }

    if (!computedValue) {
      return computedValue;
    }

    var matchedProp = futils.prop(matchedPropName, props);
    var nonResponisiveComputedValue = computedValue;
    var isResponsiveBoolean = isString(computedValue) && futils.is('Array', matchedProp) || futils.is('Object', matchedProp);

    if (isResponsiveBoolean) {
      computedValue = matchedProp;
    }

    var computeOpt = function computeOpt(val) {
      return computeOptions({
        val: val,
        options: options,
        selector: key,
        props: props
      });
    };

    if (isObjectLiteral(computedValue) || isArray(computedValue)) {
      var breakpoints = computedValue;
      var themeBPs = getThemeAttr('breakpoints')(props);

      if (isArray(themeBPs)) {
        themeBPs = arrToObj(themeBPs);
      }

      if (isArray(breakpoints)) {
        // console.log(breakpoints)
        breakpoints = arrToObj(breakpoints); // console.log(breakpoints)

        if (isObjectLiteral(themeBPs)) {
          themeBPs = arrToObj(futils.values(themeBPs)); // console.log(themeBPs)
        }
      }

      var getBp = futils.flip(futils.prop)(themeBPs);
      breakpoints = Object.keys(breakpoints).sort(function (a, b) {
        return getBp(a) - getBp(b);
      }).reduce(function (acc, key) {
        acc[key] = breakpoints[key];
        return acc;
      }, {});
      var CSSObj = Object.keys(breakpoints).reduce(function (acc, bpKey) {
        var minWidth = pxToEm(getBp(bpKey));
        var currentVal = futils.when(futils.both(futils.always(isResponsiveBoolean), isBool), futils.ifElse(isTrueBool, futils.always(nonResponisiveComputedValue), futils.always(null)))(breakpoints[bpKey]);
        var res = futils.isNil(computeOpt(currentVal)) ? {} : bpKey === 'mobile' || bpKey === '0' || minWidth < 1.1 ? futils.objOf(key, computeOpt(currentVal)) : futils.objOf(["@media screen and (min-width:".concat(minWidth, ")"), key], computeOpt(currentVal));
        return futils.mergeDeepRight(acc, res);
      }, {});
      return CSSObj;
    }

    return computeOpt(computedValue);
  });

  var defaultUnits = {
    animationDelay: "ms",
    animationDuration: "ms",
    backgroundPosition: "px",
    backgroundPositionX: "px",
    backgroundPositionY: "px",
    backgroundSize: "px",
    border: "px",
    borderAfterWidth: "px",
    borderBeforeWidth: "px",
    borderBottom: "px",
    borderBottomLeftRadius: "px",
    borderBottomRightRadius: "px",
    borderBottomWidth: "px",
    borderEndWidth: "px",
    borderHorizontalSpacing: "px",
    borderLeft: "px",
    borderLeftWidth: "px",
    borderRadius: "px",
    borderRight: "px",
    borderRightWidth: "px",
    borderSpacing: "px",
    borderStartWidth: "px",
    borderTop: "px",
    borderTopLeftRadius: "px",
    borderTopRightRadius: "px",
    borderTopWidth: "px",
    borderVerticalSpacing: "px",
    borderWidth: "px",
    bottom: "px",
    boxShadow: "px",
    boxShadowBlur: "px",
    boxShadowSpread: "px",
    boxShadowX: "px",
    boxShadowY: "px",
    columnGap: "px",
    columnRule: "px",
    columnRuleWidth: "px",
    columnWidth: "px",
    flexBasis: "px",
    fontLineHeight: "px",
    fontSize: "px",
    fontSizeDelta: "px",
    height: "px",
    left: "px",
    letterSpacing: "px",
    logicalHeight: "px",
    logicalWidth: "px",
    margin: "px",
    marginAfter: "px",
    marginBefore: "px",
    marginBottom: "px",
    marginEnd: "px",
    marginLeft: "px",
    marginRight: "px",
    marginStart: "px",
    marginTop: "px",
    maskPositionX: "px",
    maskPositionY: "px",
    maskSize: "px",
    maxHeight: "px",
    maxLogicalHeight: "px",
    maxLogicalWidth: "px",
    maxWidth: "px",
    minHeight: "px",
    minLogicalHeight: "px",
    minLogicalWidth: "px",
    minWidth: "px",
    motion: "px",
    motionOffset: "px",
    outline: "px",
    outlineOffset: "px",
    outlineWidth: "px",
    padding: "px",
    paddingAfter: "px",
    paddingBefore: "px",
    paddingBottom: "px",
    paddingEnd: "px",
    paddingLeft: "px",
    paddingRight: "px",
    paddingStart: "px",
    paddingTop: "px",
    perspective: "px",
    perspectiveOriginX: "pct",
    perspectiveOriginY: "pct",
    right: "px",
    shapeMargin: "px",
    size: "px",
    textIndent: "px",
    textShadowBlur: "px",
    textShadowX: "px",
    textShadowY: "px",
    textStroke: "px",
    textStrokeWidth: "px",
    top: "px",
    transformOrigin: "pct",
    transformOriginX: "pct",
    transformOriginY: "pct",
    transformOriginZ: "pct",
    transitionDelay: "ms",
    transitionDuration: "ms",
    verticalAlign: "px",
    width: "px",
    wordSpacing: "px"
  };
  var getDefaultUnit = (function (selector) {
    return defaultUnits[selector];
  });

  var PSUEDO_WITHOUT_SELECTOR = /(^|\s)(:{1,2})(\w)/g;
  var REFERENCE_SELECTOR = /&/g;
  var isNestableAtRule = function isNestableAtRule(selector) {
    return /@\S*\b(media|supports|keyframes)\b/.test(selector);
  };
  var containsSpecial = function containsSpecial(str) {
    return /[~`!@#$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?\s]/g.test(str);
  };
  var hasReference = function hasReference(selector) {
    return selector.indexOf('&') !== -1;
  };
  var isNestable = function isNestable(selector) {
    return isAtRule(selector) && isNestableAtRule(selector);
  };

  var formatOutput = function formatOutput(grouped) {
    return Object.keys(grouped).reduce(function (style, loc) {
      return Object.keys(grouped[loc]).reduce(function (style, propVal) {
        var rule = grouped[loc][propVal];

        if (futils.isNil(rule.value)) {
          return style;
        }

        if (rule.value === '' && rule.property !== 'content') {
          rule.value = undefined;
        }

        var location = rule.location.concat(rule.selectors.join(', '));
        location.reduce(function (style, selector, i, arr) {
          if (!selector) {
            if (rule.property === '@font-face') {
              style[rule.property] = style[rule.property] ? arrify(style[rule.property]).concat(rule.value) : rule.value;
            } else {
              style[rule.property] = rule.value;
            }

            return style;
          }

          var r = {};

          if (i === arr.length - 1) {
            r[rule.property] = rule.value;
          }

          style[selector] = futils.merge(style[selector] || {}, r);
          return style[selector];
        }, style);
        return style;
      }, style);
    }, {});
  };

  var groupRules = function groupRules(rules) {
    var grouped = {};

    for (var i = 0, len = rules.length; i < len; i++) {
      var rule = rules[i];
      var id = rule.property + (_typeof(rule.value) !== 'object' ? rule.value : '__' + i);

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
    }

    return grouped;
  };

  var getRules = function getRules(_ref) {
    var obj = _ref.obj,
        _ref$parents = _ref.parents,
        parents = _ref$parents === void 0 ? [] : _ref$parents,
        _ref$location = _ref.location,
        location = _ref$location === void 0 ? [] : _ref$location,
        props = _ref.props,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;

    if (futils.is('Function')(obj)) {
      obj = obj(props);
    }

    var _obj = obj,
        globalOptions = _obj.options,
        rules = _objectWithoutProperties(_obj, ["options"]);

    var getNested = function getNested(givenObj, givenParents, givenLocation) {
      return getRules({
        obj: givenObj,
        parents: givenParents,
        location: givenLocation,
        options: globalOptions,
        props: props
      });
    };

    return futils.pipe(futils.keys, futils.reduce(function (result, selectors) {
      return futils.pipe(splitSelectors, futils.reduce(function (res, selector) {
        var parsed = parseRules(getNested, selector, rules[selectors], parents.slice(), location.slice(), props, options);
        return res.concat(parsed);
      }, result))(selectors);
    }, []))(obj);
  };

  var isPatternBlock = function isPatternBlock(key) {
    return key === '__match';
  };

  var isInlinePattern = function isInlinePattern(value, selector, location) {
    return isObjectLiteral(value) && !futils.isEmpty(value) && !containsSpecial(selector) && !futils.isEmpty(selector) && !isNestable(futils.last(location) || []) && !isPatternBlock(selector);
  };

  var parseRules = function parseRules(parseNested, selector, value, parents, location, props, options) {
    var next = selector;
    value = flow(value, whenFunctionCallWith(props), falseToNull);

    if (parents.length) {
      next = next.replace(PSUEDO_WITHOUT_SELECTOR, '$1&$2$3');

      if (hasReference(next)) {
        next = next.replace(REFERENCE_SELECTOR, parents.pop());
      }
    }

    if (selector === '@font-face') {
      return {
        location: [],
        selector: '',
        property: selector,
        value: value
      };
    }

    if (isPatternBlock(selector)) {
      var res = flow(value, futils.reduce(function (accumulated, rulesForProp, propName) {
        return flow(props, futils.ifElse(futils.has(propName), futils.pipe(futils.always(rulesForProp), whenFunctionCallWith(props[propName], props), futils.mergeDeepRight(accumulated)), futils.always(accumulated)));
      }, {}));
      return parseNested(res, parents, location);
    }

    if (isInlinePattern(value, selector, parents)) {
      value = parseInlinePattern({
        props: props,
        value: value,
        key: selector,
        globalOptions: options
      }); // return parseNested(value, parents, location);

      if (isObjectLiteral(value)) {
        return parseNested(value, parents, location);
      }
    }

    if (isObjectLiteral(value)) {
      var nestable = isNestable(selector);

      if (nestable) {
        location = location.concat(selector);
      } else if (isAtRule(selector)) {
        parents = [next];
        location = [];
      } else if (location.length && isNestable(location[location.length - 1]) && location[location.length - 1].indexOf(' ') === -1) {
        location[location.length - 1] += ' ' + selector;
      } else {
        parents = parents.concat(next);
      }

      return parseNested(value, parents, location);
    } // value = computeGetter({ val: value, options, selector, props });


    if (typeof value === 'number' && value !== 0) {
      var unit = getDefaultUnit(selector);

      if (unit) {
        value = value + unit;
      }
    }

    return {
      location: location,
      selector: parents.join(' '),
      property: selector,
      value: value
    };
  };

  var styler = function styler(obj) {
    return function (props) {
      var rules;

      if (futils.is('Function')(obj)) {
        return styler(obj(props))(props);
      }

      if (Array.isArray(obj)) {
        rules = obj.reduce(function (r, o) {
          return r.concat(getRules({
            obj: o,
            props: props
          }));
        }, []);
      } else {
        // return obj
        rules = getRules({
          obj: obj,
          props: props
        });
      }

      return flow(rules, groupRules, formatOutput);
    };
  };

  var BPProp = function BPProp() {
    var cssProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (p) {
      var themeBPs = getThemeAttr('breakpoints')(p);
      cssProp = valueAsFunction(cssProp)(p);
      return cssProp ? styler(futils.pipe(futils.pick(futils.keys(themeBPs)), futils.objOf('default'), futils.when(futils.always(isNotNilOrEmpty(options)), futils.merge(futils.objOf('options', options))), futils.when(futils.always(isNotNilOrEmpty(cssProp)), mapObjOf(cssProp)), UnflattenObj)(p))(p) : {};
    };
  }; /// TODO make more efficient

  var spaceProp = function spaceProp() {
    var cssProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var getter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pxToRem';
    return function (p) {
      return BPProp(cssProp, {
        key: 'space',
        getter: getter
      })(p);
    };
  };

  var getters = {
    getWidth: function getWidth(n) {
      return !isNumber(n) || n > 1 ? pxToRem(n) : n * 100 + '%';
    },
    getBorder: function getBorder(n) {
      return isNumber(n) && n > 0 ? n + 'px solid' : n;
    },
    backgroundImage: function backgroundImage(val, rawValue, p) {
      return "url(".concat(rawValue, ")");
    },
    ratio: function ratio(n) {
      return n * 100 + '%';
    }
  };
  var width = {
    width: 'returnAsIs',
    w: 'returnAsIs',
    options: {
      getter: getters.getWidth
    }
  };
  var fontSize = {
    fontSize: 'returnAsIs',
    f: 'returnAsIs',
    options: {
      getter: 'px',
      key: 'fontSizes'
    }
  };
  var color = {
    color: 'returnAsIs',
    options: {
      key: 'colors'
    }
  };
  var backgroundColor = {
    backgroundColor: 'returnAsIs',
    bgColor: 'returnAsIs',
    options: {
      key: 'colors'
    }
  };
  var colors = {
    color: color,
    backgroundColor: backgroundColor
  };
  var fontFamily = {
    fontFamily: 'returnAsIs',
    font: 'returnAsIs',
    options: {
      key: 'fonts'
    }
  };
  var textAlign = {
    textAlign: 'returnAsIs'
  };
  var lineHeight = {
    lineHeight: 'returnAsIs',
    options: {
      key: 'lineHeights'
    }
  };
  var fontWeight = {
    fontWeight: 'returnAsIs',
    options: {
      key: 'fontWeights'
    }
  };
  var letterSpacing = {
    letterSpacing: 'returnAsIs',
    options: {
      key: 'letterSpacings',
      getter: 'px'
    }
  };
  var display = {
    display: 'returnAsIs'
  };
  var maxWidth = {
    maxWidth: 'returnAsIs',
    options: {
      key: 'maxWidths',
      getter: 'px'
    }
  };
  var minWidth = {
    minWidth: 'returnAsIs',
    options: {
      key: 'minWidths',
      getter: 'px'
    }
  };
  var height = {
    height: 'returnAsIs',
    options: {
      key: 'heights',
      getter: 'pxToRem'
    }
  };
  var maxHeight = {
    maxHeight: 'returnAsIs',
    options: {
      key: 'maxHeights',
      getter: 'px'
    }
  };
  var minHeight = {
    minHeight: 'returnAsIs',
    options: {
      key: 'minHeights',
      getter: 'px'
    }
  };
  var size_width_c = {
    width: {
      size: 'returnAsIs',
      options: {
        getter: 'px'
      }
    }
  };
  var size_height_c = {
    height: {
      size: 'returnAsIs',
      options: {
        getter: 'px'
      }
    }
  };
  var size_c = _objectSpread({}, size_width_c, size_height_c);
  var ratio_c = {
    height: 0,
    paddingBottom: {
      ratio: 'returnAsIs',
      options: {
        getter: function getter(n) {
          return n * 100 + '%';
        }
      }
    }
  };
  var alignItems = {
    alignItems: 'returnAsIs'
  };
  var alignContent = {
    alignContent: 'returnAsIs'
  };
  var justifyContent = {
    justifyContent: 'returnAsIs',
    justify: 'returnAsIs'
  };
  var flexWrap = {
    flexWrap: 'returnAsIs',
    fxWrap: 'returnAsIs',
    wrap: 'wrap',
    nowrap: 'nowrap',
    wrapReverse: 'wrapReverse'
  };
  var flexDirection = {
    flexDirection: 'returnAsIs',
    direction: 'returnAsIs',
    fxdirection: 'returnAsIs',
    row: 'row',
    column: 'column',
    rowReverse: 'rowReverse',
    columnReverse: 'columnReverse'
  };
  var flexBasis = {
    flexBasis: 'returnAsIs',
    options: {
      getter: getters.getWidth
    }
  };
  var flex = {
    flex: 'returnAsIs'
  };
  var justifySelf = {
    justifySelf: 'returnAsIs'
  };
  var alignSelf = {
    alignSelf: 'returnAsIs'
  };
  var order = {
    order: 'returnAsIs'
  };
  var gridGap = {
    gridGap: 'returnAsIs',
    gap: 'returnAsIs',
    options: {
      getter: px,
      key: 'space'
    }
  };
  var gridColumnGap = {
    gridColumnGap: 'returnAsIs',
    options: {
      getter: 'px',
      key: 'space'
    }
  };
  var gridArea = {
    gridArea: 'returnAsIs'
  };
  var gridColumnStart = {
    gridColumnStart: 'returnAsIs'
  };
  var gridColumnEnd = {
    gridColumnEnd: 'returnAsIs'
  };
  var gridRowStart = {
    gridRowStart: 'returnAsIs'
  };
  var gridRowEnd = {
    gridRowEnd: 'returnAsIs'
  };
  var gridColumn = {
    gridColumn: 'returnAsIs'
  };
  var gridRow = {
    gridRow: 'returnAsIs'
  };
  var gridAutoFlow = {
    gridAutoFlow: 'returnAsIs',
    row: 'row',
    column: 'column',
    dense: 'dense'
  };
  var gridAutoColumns = {
    gridAutoColumns: 'returnAsIs',
    autoColumns: 'returnAsIs'
  };
  var gridAutoRows = {
    gridAutoRows: 'returnAsIs',
    autoRows: 'returnAsIs'
  };
  var gridTemplate = {
    gridTemplate: 'returnAsIs',
    template: 'returnAsIs'
  };
  var gridTemplateAreas = {
    gridTemplateAreas: 'returnAsIs',
    areas: 'returnAsIs'
  };
  var gridTemplateColumns = {
    gridTemplateColumns: 'returnAsIs',
    columns: 'returnAsIs'
  };
  var gridTemplateRows = {
    gridTemplateRows: 'returnAsIs',
    rows: 'returnAsIs'
  };
  var border = {
    border: 'returnAsIs',
    bd: 'returnAsIs',
    options: {
      key: 'borders',
      getter: getters.getBorder
    }
  };
  var borderTop = {
    borderTop: 'returnAsIs',
    bdT: 'returnAsIs',
    options: {
      key: 'borders',
      getter: getters.getBorder
    }
  };
  var borderRight = {
    borderRight: 'returnAsIs',
    bdR: 'returnAsIs',
    options: {
      key: 'borders',
      getter: getters.getBorder
    }
  };
  var borderBottom = {
    borderBottom: 'returnAsIs',
    bdB: 'returnAsIs',
    options: {
      key: 'borders',
      getter: getters.getBorder
    }
  };
  var borderLeft = {
    borderLeft: 'returnAsIs',
    bdL: 'returnAsIs',
    options: {
      key: 'borders',
      getter: getters.getBorder
    }
  };
  var borders_c = {
    border: border,
    borderLeft: borderLeft,
    borderBottom: borderBottom,
    borderRight: borderRight,
    borderTop: borderTop
  };
  var borderColor = {
    borderColor: 'returnAsIs',
    bdC: 'returnAsIs',
    options: {
      key: 'colors'
    }
  };
  var borderRadius = {
    borderRadius: 'returnAsIs',
    bdRs: 'returnAsIs',
    options: {
      key: 'radii',
      getter: 'px'
    }
  };
  var background = {
    background: 'returnAsIs',
    bg: 'returnAsIs'
  };
  var backgroundImage = {
    backgroundImage: 'returnAsIs',
    bgImage: 'returnAsIs',
    options: {
      getter: function getter(v) {
        return "url(".concat(v, ")");
      }
    }
  };
  var backgroundSize = {
    backgroundSize: 'returnAsIs',
    bgSize: 'returnAsIs'
  };
  var backgroundPosition = {
    backgroundPosition: 'returnAsIs',
    bgPosition: 'returnAsIs'
  };
  var backgroundRepeat = {
    backgroundRepeat: 'returnAsIs',
    bgRepeat: 'returnAsIs'
  };
  var position = {
    position: 'returnAsIs',
    static: 'static',
    absolute: 'absolute',
    fixed: 'fixed',
    relative: 'relative',
    sticky: 'sticky'
  };
  var zIndex = {
    zIndex: 'returnAsIs'
  };
  var top = {
    top: 'returnAsIs',
    options: {
      getter: 'px'
    }
  };
  var right = {
    right: 'returnAsIs',
    options: {
      getter: 'px'
    }
  };
  var bottom = {
    bottom: 'returnAsIs',
    options: {
      getter: 'px'
    }
  };
  var left = {
    left: 'returnAsIs',
    options: {
      getter: 'px'
    }
  };
  var boxShadow = {
    boxShadow: 'returnAsIs',
    bxSh: 'returnAsIs',
    options: {
      key: 'shadows'
    }
  };
  var padding = {
    padding: 'returnAsIs',
    p: 'returnAsIs',
    options: {
      key: 'space',
      getter: 'pxToRem'
    }
  };
  var paddingLeft = {
    paddingLeft: 'returnAsIs',
    pl: 'returnAsIs',
    px: 'returnAsIs',
    options: {
      key: 'space',
      getter: 'pxToRem'
    }
  };
  var paddingRight = {
    paddingRight: 'returnAsIs',
    pr: 'returnAsIs',
    px: 'returnAsIs',
    options: {
      key: 'space',
      getter: 'pxToRem'
    }
  };
  var paddingTop = {
    paddingTop: 'returnAsIs',
    pt: 'returnAsIs',
    py: 'returnAsIs',
    options: {
      key: 'space',
      getter: 'pxToRem'
    }
  };
  var paddingBottom = {
    paddingBottom: 'returnAsIs',
    pb: 'returnAsIs',
    py: 'returnAsIs',
    options: {
      key: 'space',
      getter: 'pxToRem'
    }
  };
  var margin = {
    margin: 'returnAsIs',
    m: 'returnAsIs',
    options: {
      key: 'space',
      getter: 'pxToRem'
    }
  };
  var marginLeft = {
    marginLeft: 'returnAsIs',
    ml: 'returnAsIs',
    mx: 'returnAsIs',
    options: {
      key: 'space',
      getter: 'pxToRem'
    }
  };
  var marginRight = {
    marginRight: 'returnAsIs',
    mr: 'returnAsIs',
    mx: 'returnAsIs',
    options: {
      key: 'space',
      getter: 'pxToRem'
    }
  };
  var marginTop = {
    marginTop: 'returnAsIs',
    mt: 'returnAsIs',
    my: 'returnAsIs',
    options: {
      key: 'space',
      getter: 'pxToRem'
    }
  };
  var marginBottom = {
    marginBottom: 'returnAsIs',
    mb: 'returnAsIs',
    my: 'returnAsIs',
    options: {
      key: 'space',
      getter: 'pxToRem'
    }
  };
  var space = {
    padding: padding,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    margin: margin,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom
  };



  var index = /*#__PURE__*/Object.freeze({
    alignContent: alignContent,
    alignItems: alignItems,
    alignSelf: alignSelf,
    background: background,
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage,
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    border: border,
    borderBottom: borderBottom,
    borderColor: borderColor,
    borderLeft: borderLeft,
    borderRadius: borderRadius,
    borderRight: borderRight,
    borderTop: borderTop,
    borders_c: borders_c,
    bottom: bottom,
    boxShadow: boxShadow,
    color: color,
    colors: colors,
    display: display,
    flex: flex,
    flexDirection: flexDirection,
    flexBasis: flexBasis,
    flexWrap: flexWrap,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
    getters: getters,
    gridArea: gridArea,
    gridColumnStart: gridColumnStart,
    gridColumnEnd: gridColumnEnd,
    gridRowStart: gridRowStart,
    gridRowEnd: gridRowEnd,
    gridAutoColumns: gridAutoColumns,
    gridAutoFlow: gridAutoFlow,
    gridAutoRows: gridAutoRows,
    gridColumn: gridColumn,
    gridColumnGap: gridColumnGap,
    gridGap: gridGap,
    gridRow: gridRow,
    gridTemplate: gridTemplate,
    gridTemplateAreas: gridTemplateAreas,
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: gridTemplateRows,
    height: height,
    justifyContent: justifyContent,
    justifySelf: justifySelf,
    left: left,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight,
    margin: margin,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    maxHeight: maxHeight,
    maxWidth: maxWidth,
    minHeight: minHeight,
    minWidth: minWidth,
    order: order,
    padding: padding,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    position: position,
    ratio_c: ratio_c,
    right: right,
    size_c: size_c,
    size_height_c: size_height_c,
    size_width_c: size_width_c,
    space: space,
    textAlign: textAlign,
    top: top,
    width: width,
    zIndex: zIndex
  });

  exports.styleDefs = index;
  exports.util = utils;
  exports.styler = styler;
  exports.returnAsIs = returnAsIs;
  exports.getThemeAttr = getThemeAttr;
  exports.pxTo = pxTo;
  exports.pxToRem = pxToRem;
  exports.pxToEm = pxToEm;
  exports.pxToPct = pxToPct;
  exports.px = px;
  exports.rem = rem;
  exports.em = em;
  exports.pct = pct;
  exports.ms = ms;
  exports.spaceProp = spaceProp;
  exports.BPProp = BPProp;
  exports.alignContent = alignContent;
  exports.alignItems = alignItems;
  exports.alignSelf = alignSelf;
  exports.background = background;
  exports.backgroundColor = backgroundColor;
  exports.backgroundImage = backgroundImage;
  exports.backgroundPosition = backgroundPosition;
  exports.backgroundRepeat = backgroundRepeat;
  exports.backgroundSize = backgroundSize;
  exports.border = border;
  exports.borderBottom = borderBottom;
  exports.borderColor = borderColor;
  exports.borderLeft = borderLeft;
  exports.borderRadius = borderRadius;
  exports.borderRight = borderRight;
  exports.borderTop = borderTop;
  exports.borders_c = borders_c;
  exports.bottom = bottom;
  exports.boxShadow = boxShadow;
  exports.color = color;
  exports.colors = colors;
  exports.display = display;
  exports.flex = flex;
  exports.flexDirection = flexDirection;
  exports.flexBasis = flexBasis;
  exports.flexWrap = flexWrap;
  exports.fontFamily = fontFamily;
  exports.fontSize = fontSize;
  exports.fontWeight = fontWeight;
  exports.getters = getters;
  exports.gridArea = gridArea;
  exports.gridColumnStart = gridColumnStart;
  exports.gridColumnEnd = gridColumnEnd;
  exports.gridRowStart = gridRowStart;
  exports.gridRowEnd = gridRowEnd;
  exports.gridAutoColumns = gridAutoColumns;
  exports.gridAutoFlow = gridAutoFlow;
  exports.gridAutoRows = gridAutoRows;
  exports.gridColumn = gridColumn;
  exports.gridColumnGap = gridColumnGap;
  exports.gridGap = gridGap;
  exports.gridRow = gridRow;
  exports.gridTemplate = gridTemplate;
  exports.gridTemplateAreas = gridTemplateAreas;
  exports.gridTemplateColumns = gridTemplateColumns;
  exports.gridTemplateRows = gridTemplateRows;
  exports.height = height;
  exports.justifyContent = justifyContent;
  exports.justifySelf = justifySelf;
  exports.left = left;
  exports.letterSpacing = letterSpacing;
  exports.lineHeight = lineHeight;
  exports.margin = margin;
  exports.marginBottom = marginBottom;
  exports.marginLeft = marginLeft;
  exports.marginRight = marginRight;
  exports.marginTop = marginTop;
  exports.maxHeight = maxHeight;
  exports.maxWidth = maxWidth;
  exports.minHeight = minHeight;
  exports.minWidth = minWidth;
  exports.order = order;
  exports.padding = padding;
  exports.paddingBottom = paddingBottom;
  exports.paddingLeft = paddingLeft;
  exports.paddingRight = paddingRight;
  exports.paddingTop = paddingTop;
  exports.position = position;
  exports.ratio_c = ratio_c;
  exports.right = right;
  exports.size_c = size_c;
  exports.size_height_c = size_height_c;
  exports.size_width_c = size_width_c;
  exports.space = space;
  exports.textAlign = textAlign;
  exports.top = top;
  exports.width = width;
  exports.zIndex = zIndex;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=styler.umd.js.map
