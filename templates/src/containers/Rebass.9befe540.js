webpackJsonp([0],Array(60).concat([
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Demo = __webpack_require__(343);

var _Demo2 = _interopRequireDefault(_Demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Demo2.default;

/***/ }),
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry2;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlaceholder__ = __webpack_require__(208);



/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) ? f2 : Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b);
        });
      default:
        return Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(b) ? f2 : Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_a) {
          return fn(_a, b);
        }) : Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isProduction = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createStyledComponent;

var _reactEmotion = __webpack_require__(56);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _theme = __webpack_require__(405);

var _theme2 = _interopRequireDefault(_theme);

var _styler = __webpack_require__(243);

var _recompose = __webpack_require__(202);

var _Tag = __webpack_require__(408);

var _Tag2 = _interopRequireDefault(_Tag);

var _futils = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNotNilOrEmpty = (0, _futils.complement)(_futils.isNilOrEmpty);
var executeWhenDefined = function executeWhenDefined(x, fn) {
  return (0, _futils.when)(isNotNilOrEmpty(x), fn);
};
var isProduction = exports.isProduction = "production" === "production";

var componentStyleReset = function componentStyleReset(_ref) {
  var theme = _ref.theme;

  return {
    boxSizing: "border-box",
    color: theme.color,
    fontFamily: theme.fontFamily ? theme.fontFamily + ", " + theme.fontFamily_system : "" + theme.fontFamily_system,
    fontSize: theme.fontSize_base,
    lineHeight: theme.lineHeight,
    outline: 0,
    "& *,& *::before,& *::after": {
      boxSizing: "inherit"
    }
  };
};
var callIfDefined = function callIfDefined(obj, fn) {
  return (0, _futils.when)((0, _futils.always)(isNotNilOrEmpty(obj)), fn(obj));
};
function createStyledComponent(element, styles, _ref2) {
  var _ref2$displayName = _ref2.displayName,
      displayName = _ref2$displayName === undefined ? "" : _ref2$displayName,
      _ref2$filterProps = _ref2.filterProps,
      filterProps = _ref2$filterProps === undefined ? [] : _ref2$filterProps,
      _ref2$forwardProps = _ref2.forwardProps,
      forwardProps = _ref2$forwardProps === undefined ? [] : _ref2$forwardProps,
      rootEl = _ref2.rootEl,
      _ref2$withProps = _ref2.withProps,
      withProps = _ref2$withProps === undefined ? {} : _ref2$withProps,
      propTypes = _ref2.propTypes,
      defaultProps = _ref2.defaultProps,
      _ref2$includeStyleRes = _ref2.includeStyleReset,
      includeStyleReset = _ref2$includeStyleRes === undefined ? false : _ref2$includeStyleRes;

  var outStyles = function outStyles(props, context) {
    var componentStyles = (0, _styler.styler)(_extends({
      options: { defaultLookup: false, defaultTransform: false }
    }, styles))(props);

    if (Array.isArray(componentStyles)) {
      componentStyles.unshift(componentStyleReset(props));
    } else {
      componentStyles = _extends({}, includeStyleReset ? componentStyleReset(props) : undefined, componentStyles);
    }

    return componentStyles;
  };

  var tag = typeof element === "string" ? element : rootEl;

  var is_ = typeof element === "string" ? { is: element } : {};
  defaultProps = defaultProps ? _extends({ theme: _theme2.default }, is_, defaultProps) : _extends({}, is_, { theme: _theme2.default });
  var enhance = (0, _recompose.compose)(callIfDefined(displayName, _recompose.setDisplayName), callIfDefined(defaultProps, _recompose.defaultProps), callIfDefined(propTypes, _recompose.setPropTypes), callIfDefined(withProps, _recompose.withProps));

  var styledComponent = void 0;
  if (typeof element !== "string") {
    styledComponent = (0, _reactEmotion2.default)(element, _extends({}, !isProduction && displayName ? { label: "" + displayName } : undefined, {
      shouldForwardProp: function shouldForwardProp(name) {
        return name !== "ref" && name !== "theme";
      }
    }))(outStyles);
  } else {
    styledComponent = (0, _reactEmotion2.default)(_Tag2.default, _extends({}, !isProduction && displayName ? { label: "" + displayName } : undefined, {
      shouldForwardProp: function shouldForwardProp(name) {
        return name !== "ref" && name !== "theme";
      }
    }))(outStyles);
  }
  return enhance(styledComponent);
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry1;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPlaceholder__ = __webpack_require__(208);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || Object(__WEBPACK_IMPORTED_MODULE_0__isPlaceholder__["a" /* default */])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabled = exports.focus = exports.active = exports.hover = exports.space = exports.marginBottom = exports.marginTop = exports.marginRight = exports.marginLeft = exports.margin = exports.paddingBottom = exports.paddingTop = exports.paddingRight = exports.paddingLeft = exports.padding = exports.boxShadow = exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.position = exports.backgroundRepeat = exports.backgroundPosition = exports.backgroundSize = exports.backgroundImage = exports.background = exports.borderRadius = exports.borderColor = exports.borders = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.border = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridAutoRows = exports.gridAutoColumns = exports.gridAutoFlow = exports.gridRow = exports.gridColumn = exports.gridRowGap = exports.gridColumnGap = exports.gridGap = exports.order = exports.alignSelf = exports.justifySelf = exports.flex = exports.flexDirection = exports.flexBasis = exports.flexWrap = exports.justifyContent = exports.alignContent = exports.alignItems = exports.ratio = exports.ratioPadding = exports.size = exports.sizeHeight = exports.sizeWidth = exports.minHeight = exports.maxHeight = exports.height = exports.minWidth = exports.maxWidth = exports.display = exports.letterSpacing = exports.fontWeight = exports.lineHeight = exports.textAlign = exports.fontFamily = exports.color = exports.bgColor = exports.textColor = exports.fontSize = exports.width = exports.disabledFn = exports.activeFn = exports.focusFn = exports.hoverFn = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styler = __webpack_require__(243);

var _futils = __webpack_require__(195);

var getters = {
  getWidth: function getWidth(n) {
    return !(0, _futils.is)("Number", n) || n > 1 ? (0, _styler.pxToRem)(n) : n * 100 + "%";
  },
  getBorder: function getBorder(n) {
    return (0, _futils.is)("Number", n) && n > 0 ? n + "px solid" : n;
  },
  backgroundImage: function backgroundImage(val, rawValue, p) {
    return "url(" + rawValue + ")";
  },
  ratio: function ratio(n) {
    return n * 100 + "%";
  }
};

var hoverFn = exports.hoverFn = function hoverFn(styles) {
  return function (_ref) {
    var hover = _ref.hover,
        theme = _ref.theme;
    return hover ? (0, _styler.styler)({ ":hover": styles })(_extends({}, hover, { theme: theme })) : {};
  };
};

var focusFn = exports.focusFn = function focusFn(styles) {
  return function (_ref2) {
    var focus = _ref2.focus,
        theme = _ref2.theme;
    return focus ? (0, _styler.styler)({ ":focus": styles })(_extends({}, focus, { theme: theme })) : {};
  };
};

var activeFn = exports.activeFn = function activeFn(styles) {
  return function (_ref3) {
    var active = _ref3.active,
        theme = _ref3.theme;
    return active ? (0, _styler.styler)({ ":active": styles })(_extends({}, active, { theme: theme })) : {};
  };
};

var disabledFn = exports.disabledFn = function disabledFn(styles) {
  return function (_ref4) {
    var disabledStyle = _ref4.disabledStyle,
        theme = _ref4.theme;
    return disabledStyle ? (0, _styler.styler)({ ":disabled": styles })(_extends({}, disabledStyle, { theme: theme })) : {};
  };
};

var width = exports.width = {
  width: {
    width: "returnAsIs",
    w: "returnAsIs",
    options: {
      postFn: getters.getWidth
    }
  }
};

var fontSize = exports.fontSize = {
  fontSize: {
    fontSize: "returnAsIs",
    f: "returnAsIs",
    options: {
      postFn: "px",
      path: "theme.fontSizes"
    }
  }
};

var textColor = exports.textColor = {
  color: {
    color: "returnAsIs",
    options: {
      path: "theme.colors"
    }
  }
};

var bgColor = exports.bgColor = {
  backgroundColor: {
    bg: "returnAsIs",
    backgroundColor: "returnAsIs",
    bgColor: "returnAsIs",
    options: {
      path: "theme.colors"
    }
  }
};

var color = exports.color = _extends({}, textColor, bgColor);

var fontFamily = exports.fontFamily = {
  fontFamily: {
    fontFamily: "returnAsIs",
    font: "returnAsIs",
    options: {
      path: "theme.fonts"
    }
  }
};

var textAlign = exports.textAlign = {
  textAlign: {
    textAlign: "returnAsIs",
    align: "returnAsIs"
  }
};

var lineHeight = exports.lineHeight = {
  lineHeight: {
    lineHeight: "returnAsIs",
    options: {
      path: "theme.lineHeights"
    }
  }
};

var fontWeight = exports.fontWeight = {
  fontWeight: {
    fontWeight: "returnAsIs",
    options: {
      path: "theme.fontWeights"
    }
  }
};

var letterSpacing = exports.letterSpacing = {
  letterSpacing: {
    letterSpacing: "returnAsIs",
    options: {
      path: "theme.letterSpacings",
      postFn: "px"
    }
  }
};

var display = exports.display = {
  display: {
    display: "returnAsIs"
  }
};

var maxWidth = exports.maxWidth = {
  maxWidth: {
    maxWidth: "returnAsIs",
    options: {
      path: "theme.maxWidths",
      postFn: "px"
    }
  }
};

var minWidth = exports.minWidth = {
  minWidth: {
    minWidth: "returnAsIs",
    options: {
      path: "theme.minWidths",
      postFn: "px"
    }
  }
};

var height = exports.height = {
  height: {
    height: "returnAsIs",
    options: {
      path: "theme.heights",
      postFn: "px"
    }
  }
};

var maxHeight = exports.maxHeight = {
  maxHeight: {
    maxHeight: "returnAsIs",
    options: {
      path: "theme.maxHeights",
      postFn: "px"
    }
  }
};

var minHeight = exports.minHeight = {
  minHeight: {
    minHeight: "returnAsIs",
    options: {
      path: "theme.minHeights",
      postFn: "px"
    }
  }
};

var sizeWidth = exports.sizeWidth = {
  width: {
    size: "returnAsIs",
    options: {
      postFn: "px"
    }
  }
};

var sizeHeight = exports.sizeHeight = {
  height: {
    size: "returnAsIs",
    options: {
      postFn: "px"
    }
  }
};

var size = exports.size = _extends({}, sizeWidth, sizeHeight);

var ratioPadding = exports.ratioPadding = {
  paddingBottom: {
    ratio: function ratio(n) {
      return n * 100 + "%";
    },
    paddingBottom: "returnAsIs",
    pb: "returnAsIs",
    py: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};

var ratio = exports.ratio = _extends({
  height: {
    ratio: 0
  }
}, ratioPadding);

var alignItems = exports.alignItems = {
  alignItems: {
    alignItems: "returnAsIs",
    align: "returnAsIs"
  }
};

var alignContent = exports.alignContent = {
  alignContent: {
    alignContent: "returnAsIs"
  }
};

var justifyContent = exports.justifyContent = {
  justifyContent: {
    justifyContent: "returnAsIs",
    justify: "returnAsIs"
  }
};

var flexWrap = exports.flexWrap = {
  flexWrap: {
    flexWrap: "returnAsIs",
    wrap: "wrap",
    nowrap: "nowrap",
    wrapReverse: "wrapReverse"
  }
};

var flexBasis = exports.flexBasis = {
  flexBasis: {
    flexBasis: "returnAsIs",
    options: {
      postFn: getters.getWidth
    }
  }
};

var flexDirection = exports.flexDirection = {
  flexDirection: {
    flexDirection: "returnAsIs"
  }
};

var flex = exports.flex = {
  flex: {
    flex: "returnAsIs"
  }
};

var justifySelf = exports.justifySelf = {
  justifySelf: {
    justifySelf: "returnAsIs"
  }
};

var alignSelf = exports.alignSelf = {
  alignSelf: {
    alignSelf: "returnAsIs"
  }
};

var order = exports.order = {
  order: {
    order: "returnAsIs"
  }
};

var gridGap = exports.gridGap = {
  gridGap: {
    gridGap: "returnAsIs",
    gap: "returnAsIs",
    options: {
      postFn: "px",
      path: "theme.space"
    }
  }
};
var gridColumnGap = exports.gridColumnGap = {
  gridColumnGap: {
    gridColumnGap: "returnAsIs",
    options: {
      postFn: "px",
      path: "theme.space"
    }
  }
};

var gridRowGap = exports.gridRowGap = {
  gridRowGap: {
    gridRowGap: "returnAsIs",
    options: {
      postFn: "px",
      path: "theme.space"
    }
  }
};

var gridColumn = exports.gridColumn = {
  gridColumn: {
    gridColumn: "returnAsIs"
  }
};
var gridRow = exports.gridRow = {
  gridRow: {
    gridRow: "returnAsIs"
  }
};

var gridAutoFlow = exports.gridAutoFlow = {
  gridAutoFlow: {
    gridAutoFlow: "returnAsIs"
  }
};
var gridAutoColumns = exports.gridAutoColumns = {
  gridAutoColumns: {
    gridAutoColumns: "returnAsIs"
  }
};

var gridAutoRows = exports.gridAutoRows = {
  gridAutoRows: {
    gridAutoRows: "returnAsIs"
  }
};

var gridTemplateColumns = exports.gridTemplateColumns = {
  gridTemplateColumns: {
    gridTemplateColumns: "returnAsIs"
  }
};

var gridTemplateRows = exports.gridTemplateRows = {
  gridTemplateRows: {
    gridTemplateRows: "returnAsIs"
  }
};

var border = exports.border = {
  border: {
    border: "returnAsIs",

    options: {
      path: "theme.borders",
      postFn: getters.getBorder
    }
  }
};

var borderTop = exports.borderTop = {
  borderTop: {
    borderTop: "returnAsIs",

    options: {
      path: "theme.borders",
      postFn: getters.getBorder
    }
  }
};

var borderRight = exports.borderRight = {
  borderRight: {
    borderRight: "returnAsIs",

    options: {
      path: "theme.borders",
      postFn: getters.getBorder
    }
  }
};

var borderBottom = exports.borderBottom = {
  borderBottom: {
    borderBottom: "returnAsIs",

    options: {
      path: "theme.borders",
      postFn: getters.getBorder
    }
  }
};

var borderLeft = exports.borderLeft = {
  borderLeft: {
    borderLeft: "returnAsIs",
    options: {
      path: "theme.borders",
      postFn: getters.getBorder
    }
  }
};

var borders = exports.borders = _extends({}, border, borderTop, borderRight, borderBottom, borderLeft);

var borderColor = exports.borderColor = {
  borderColor: {
    borderColor: "returnAsIs",
    bdC: "returnAsIs",
    options: {
      path: "theme.colors"
    }
  }
};

var borderRadius = exports.borderRadius = {
  borderRadius: {
    borderRadius: "returnAsIs",
    bdRs: "returnAsIs",
    options: {
      path: "theme.radii",
      postFn: "px"
    }
  }
};

var background = exports.background = {
  background: "returnAsIs",
  bg: "returnAsIs"
};

var backgroundImage = exports.backgroundImage = {
  backgroundImage: {
    backgroundImage: "returnAsIs",
    bgImage: "returnAsIs",
    options: {
      postFn: function postFn(v) {
        return "url(" + v + ")";
      }
    }
  }
};

var backgroundSize = exports.backgroundSize = {
  backgroundSize: {
    backgroundSize: "returnAsIs",
    bgSize: "returnAsIs"
  }
};

var backgroundPosition = exports.backgroundPosition = {
  backgroundPosition: {
    backgroundPosition: "returnAsIs",
    bgPosition: "returnAsIs"
  }
};
var backgroundRepeat = exports.backgroundRepeat = {
  backgroundRepeat: "returnAsIs",
  bgRepeat: "returnAsIs"
};

var position = exports.position = {
  position: {
    position: "returnAsIs"
  }
};

var zIndex = exports.zIndex = {
  zIndex: {
    zIndex: "returnAsIs"
  }
};
var top = exports.top = {
  top: {
    top: "returnAsIs",
    options: {
      getter: "px"
    }
  }
};

var right = exports.right = {
  right: {
    right: "returnAsIs",
    options: {
      getter: "px"
    }
  }
};

var bottom = exports.bottom = {
  bottom: {
    bottom: "returnAsIs",
    options: {
      getter: "px"
    }
  }
};

var left = exports.left = {
  left: {
    left: "returnAsIs",
    options: {
      getter: "px"
    }
  }
};

var boxShadow = exports.boxShadow = {
  boxShadow: {
    boxShadow: "returnAsIs",
    options: {
      path: "theme.shadows"
    }
  }
};

var padding = exports.padding = {
  padding: {
    padding: "returnAsIs",
    p: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};
var paddingLeft = exports.paddingLeft = {
  paddingLeft: {
    paddingLeft: "returnAsIs",
    pl: "returnAsIs",
    px: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};
var paddingRight = exports.paddingRight = {
  paddingRight: {
    paddingRight: "returnAsIs",
    pr: "returnAsIs",
    px: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};
var paddingTop = exports.paddingTop = {
  paddingTop: {
    paddingTop: "returnAsIs",
    pt: "returnAsIs",
    py: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};
var paddingBottom = exports.paddingBottom = {
  paddingBottom: {
    paddingBottom: "returnAsIs",
    pb: "returnAsIs",
    py: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};
var margin = exports.margin = {
  margin: {
    margin: "returnAsIs",
    m: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};
var marginLeft = exports.marginLeft = {
  marginLeft: {
    marginLeft: "returnAsIs",
    ml: "returnAsIs",
    mx: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};
var marginRight = exports.marginRight = {
  marginRight: {
    marginRight: "returnAsIs",
    mr: "returnAsIs",
    mx: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};
var marginTop = exports.marginTop = {
  marginTop: {
    marginTop: "returnAsIs",
    mt: "returnAsIs",
    my: "returnAsIs",
    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};
var marginBottom = exports.marginBottom = {
  marginBottom: {
    marginBottom: "returnAsIs",
    mb: "returnAsIs",
    my: "returnAsIs",

    options: {
      path: "theme.space",
      postFn: "px"
    }
  }
};

var space = exports.space = _extends({}, margin, marginLeft, marginBottom, marginRight, marginTop, padding, paddingLeft, paddingRight, paddingBottom, paddingTop);

var hover = exports.hover = {
  "&         ": hoverFn(_extends({}, color, borderColor, boxShadow))
};
var active = exports.active = {
  "&          ": activeFn(_extends({}, color, borderColor, boxShadow))
};
var focus = exports.focus = {
  "&           ": focusFn(_extends({}, color, borderColor, boxShadow))
};

var disabled = exports.disabled = {
  "&            ": disabledFn(_extends({}, color, borderColor, boxShadow))
  // export const gridArea = {
  //   gridArea: 'returnAsIs'
  // }

  // export const gridColumnStart = {
  //   gridColumnStart: 'returnAsIs'
  // }
  // export const gridColumnEnd = {
  //   gridColumnEnd: 'returnAsIs'
  // }

  // export const gridRowStart = {
  //   gridRowStart: 'returnAsIs'
  // }

  // export const gridRowEnd = {
  //   gridRowEnd: 'returnAsIs'
  // }

  // export const gridColumn = {
  //   gridColumn: 'returnAsIs'
  // }

  // export const gridRow = {
  //   gridRow: 'returnAsIs'
  // }

  // export const gridAutoFlow = {
  //   gridAutoFlow: 'returnAsIs',
  //   row: 'row',
  //   column: 'column',
  //   dense: 'dense'
  // }

  // export const gridAutoColumns = {
  //   gridAutoColumns: 'returnAsIs',
  //   autoColumns: 'returnAsIs'
  // }

  // export const gridAutoRows = {
  //   gridAutoRows: 'returnAsIs',
  //   autoRows: 'returnAsIs'
  // }

  // export const gridTemplate = {
  //   gridTemplate: 'returnAsIs',
  //   template: 'returnAsIs'
  // }

  // export const gridTemplateAreas = {
  //   gridTemplateAreas: 'returnAsIs',
  //   areas: 'returnAsIs'
  // }

  // export const gridTemplateColumns = {
  //   gridTemplateColumns: 'returnAsIs',
  //   columns: 'returnAsIs'
  // }
  // export const gridTemplateRows = {
  //   gridTemplateRows: 'returnAsIs',
  //   rows: 'returnAsIs'
  // }

};

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry3;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isPlaceholder__ = __webpack_require__(208);




/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? f3 : Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? f3 : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? f3 : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _b) {
          return fn(_a, _b, c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_a) {
          return fn(_a, b, c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b, c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (result, currentObject) {
    for (var key in currentObject) {
      if (currentObject.hasOwnProperty(key)) {
        result[key] = currentObject[key];
      }
    }
    return result;
  }, {});
};

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _dispatchable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isTransformer__ = __webpack_require__(244);



/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_1__isTransformer__["a" /* default */])(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
});

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_curryN__ = __webpack_require__(210);





/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curryN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_curry2__["a" /* default */])(function curryN(length, fn) {
  if (length === 1) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(fn);
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(length, Object(__WEBPACK_IMPORTED_MODULE_3__internal_curryN__["a" /* default */])(length, [], fn));
});
/* harmony default export */ __webpack_exports__["a"] = (curryN);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _has;
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_xmap__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__curryN__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys__ = __webpack_require__(170);








/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['fantasy-land/map', 'map'], __WEBPACK_IMPORTED_MODULE_4__internal_xmap__["a" /* default */], function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return Object(__WEBPACK_IMPORTED_MODULE_5__curryN__["a" /* default */])(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, Object(__WEBPACK_IMPORTED_MODULE_6__keys__["a" /* default */])(functor));
    default:
      return Object(__WEBPACK_IMPORTED_MODULE_2__internal_map__["a" /* default */])(fn, functor);
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (map);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _reduce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xwrap__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bind__ = __webpack_require__(280);




function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](Object(__WEBPACK_IMPORTED_MODULE_2__bind__["a" /* default */])(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = Object(__WEBPACK_IMPORTED_MODULE_1__xwrap__["a" /* default */])(fn);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike__["a" /* default */])(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_equals__ = __webpack_require__(443);



/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function equals(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_equals__["a" /* default */])(a, b, [], []);
});
/* harmony default export */ __webpack_exports__["a"] = (equals);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _concat;
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(158);



/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
var slice = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
/* harmony default export */ __webpack_exports__["a"] = (slice);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arity;
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArguments__ = __webpack_require__(281);




// cover IE < 9 keys issues
var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
} : function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArguments__["a" /* default */])(obj);
  for (prop in obj) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
};
var keys = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(_keys);
/* harmony default export */ __webpack_exports__["a"] = (keys);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(165);



/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (reduce);

/***/ }),
/* 172 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 173 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ __webpack_exports__["a"] = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _reduced;
function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Box = __webpack_require__(178);

var _Box2 = _interopRequireDefault(_Box);

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.flexWrap, _styles.flexDirection, _styles.alignItems, _styles.justifyContent, {
  display: "flex"
});

exports.default = (0, _sys2.default)(_Box2.default, styles, {
  displayName: "Flex",
  defaultProps: {},
  withProps: {}
});

/***/ }),
/* 177 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.width, _styles.space, _styles.fontSize, _styles.color, _styles.flex, _styles.order, _styles.alignSelf, {
  boxSizing: "border-box"
});

exports.default = (0, _sys2.default)("div", styles, {
  displayName: "Box",
  defaultProps: {},
  withProps: {}
});

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.color, _styles.fontFamily, _styles.fontSize, _styles.fontWeight, _styles.textAlign, _styles.lineHeight);
exports.default = (0, _sys2.default)("div", styles, {
  displayName: "Text",
  defaultProps: { m: "0" },
  withProps: {}
});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(173);
var core = __webpack_require__(172);
var ctx = __webpack_require__(264);
var hide = __webpack_require__(181);
var has = __webpack_require__(177);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(182);
var createDesc = __webpack_require__(203);
module.exports = __webpack_require__(184) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(192);
var IE8_DOM_DEFINE = __webpack_require__(265);
var toPrimitive = __webpack_require__(225);
var dP = Object.defineProperty;

exports.f = __webpack_require__(184) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(185)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(268);
var defined = __webpack_require__(226);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(229)('wks');
var uid = __webpack_require__(205);
var Symbol = __webpack_require__(173).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
var always = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function always(val) {
  return function () {
    return val;
  };
});
/* harmony default export */ __webpack_exports__["a"] = (always);

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
var max = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function max(a, b) {
  return b > a ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (max);

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
var path = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
/* harmony default export */ __webpack_exports__["a"] = (path);

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _contains;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__indexOf__ = __webpack_require__(297);


function _contains(a, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__indexOf__["a" /* default */])(list, a, 0) >= 0;
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(183);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(267);
var enumBugKeys = __webpack_require__(230);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pushHash = function pushHash(hash) {
  hash = hash ? hash.indexOf('#') === 0 ? hash : '#' + hash : '';

  if (history.pushState) {
    var loc = window.location;
    history.pushState(null, null, hash ? loc.pathname + loc.search + hash
    // remove hash
    : loc.pathname + loc.search);
  } else {
    location.hash = hash;
  }
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, '');
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var scrollOffset = function scrollOffset(c, t) {
  return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position === "relative" ? t.offsetTop : t.getBoundingClientRect().top + c.scrollTop;
};

exports.default = {
  pushHash: pushHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.F={})}(this,function(e){"use strict";var t=e=>()=>e,r=e=>(function(t,r){return 2>arguments.length?r=>e(t,r):e(t,r)}),n=e=>null===e?"null":void 0===e?"undefined":e.constructor.name;const o=e=>t=>{var r=t.next();const n=r.value;return r.done?e:o([...e,n])(t)};var a=e=>o([])(e),i=e=>{switch(n(e)){case"Array":return e.reduce((e,t,r)=>[...e,[r,t]],[]);case"Object":return Object.entries(e);case"Set":return a(e.values()).map(e=>[void 0,e]);case"Map":return a(e.entries());default:throw Error(`toPairs doesn't know how to handle ${n(e)}`)}},u=(e,t,r,o)=>{let a,u;switch(n(o)){case"Array":a=((e,r,n)=>t(e,r,n)),u=((t,r,n)=>e(t,r,n));break;case"Object":case"Map":a=((e,[r,n])=>t(e,n,r)),o=i(o),u=((t,[r,n])=>e(t,n,r));break;case"Set":a=((e,[,r])=>t(e,r)),o=i(o),u=((t,[,r])=>e(t,r));break;case"String":a=((e,[r,n])=>t(e,n,r)),o=i(o.split("")),u=((t,[r,n])=>e(t,n,r));break;default:throw Error(`reduce couldn't figure out how to reduce ${n(o)}`)}const s=o.length;let c=r;for(let e=0;s>e;++e){const t=o[e];if(!u(c,t,e))break;c=a(c,t,e)}return c},s=r((e,t)=>u(e=>!1===e,(t,r,n)=>e(r,n),!1,t)),c=r((e,t)=>{let r=0;const n=e.length;for(;n>r&&!e[r](t);)r+=1;return n>r}),l=(e,t)=>"null"===e?null===t:"undefined"===e?void 0===t:null!=t&&n(t)===e,p=(e,t)=>l("Array",e)&&l("Array",t)||l("String",e)&&l("String",t)?e.concat(t):null,f=(e,t,r,o=!1)=>{let a;switch(n(r)){case"Array":a=((t,r,n)=>e(t,r,n));break;case"Object":case"Map":a=((t,[r,n])=>e(t,n,r)),r=i(r);break;case"Set":a=((t,[,r])=>e(t,r)),r=i(r);break;case"String":a=((t,[r,n])=>e(t,n,r)),r=i(r.split(""));break;default:throw Error(`reduce couldn't figure out how to reduce ${n(r)}`)}if(!o)return r.reduce(a,t);let u=r.length-1;for(;u>=0;)t=a(r[u],t),u-=1;return t},h=e=>l("undefined",e)||l("null",e),y=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g=(e,t)=>{if(h(e))return t;if(h(t))return e;if(n(e)!==n(t))throw Error(`merge received a ${n(e)} and ${n(t)} which aren't the same`);switch(n(e)){case"Array":return[...e,...t];case"Object":return y({},e,t);case"Map":return new Map([...e,...t]);case"Set":return new Set([...e,...t]);case"String":return`${e}${t}`;default:throw Error(`merge doesn't know how to deal with ${n(e)}`)}};const d=function(){return"[object Arguments]"===Object.prototype.toString.call(arguments)?function(e){return"[object Arguments]"===Object.prototype.toString.call(e)}:function(e){return Object.prototype.hasOwnProperty.call(e,"callee")}}();var w=e=>null!=e&&"function"==typeof e.empty?e.empty():null!=e&&null!=e.constructor&&"function"==typeof e.constructor.empty?e.constructor.empty():l("Array",e)?[]:l("String",e)?"":l("Object",e)?{}:l("Map",e)?new Map:l("Set",e)?new Set:d(e)?function(){return arguments}():void 0,m=(e,t,r)=>{switch(n(r)){case"Array":return[t];case"Object":return{[e]:t};case"Set":return new Set([t]);case"Map":return new Map([[e,t]]);case"String":return`${t}`;default:throw Error(`of doesn't know how to type ${n(r)}`)}},v=(e,t)=>t.map instanceof Function?t.map((t,r)=>e(t,r)):f((t,r,n)=>g(t,m(n,e(r,n),t)),w(t),t),$=(e,t)=>t.map instanceof Function?t.map(t=>e(t)):v(t=>e(t),t),b=r(l),S=r((e,t)=>b("Function",e)?r=>e(r)(t(r)):f((e,r)=>p(e,$(r,t)),[],e)),j=(e,t)=>{switch(n(t)){case"String":return`${t}${e}`;case"Array":return[...t,e];default:throw new TypeError(`append doesn't know how to deal with ${n(t)}`)}},A=r(j),E=r((e,t)=>e.apply(e,t)),O=(e,t)=>t(e),k=r(O),M=(e,t,r)=>{switch(n(r)){case"Object":return y({},r,{[e]:t});case"Array":return[...r.slice(0,e),t,...r.slice(e)];case"String":return`${r.slice(0,e)}${t}${r.slice(e)}`;case"Map":return new Map([...r,[e,t]]);case"Set":return new Set([...r,t]);default:throw Error(`attach doesn't know how to set a key and value on ${n(r)}`)}},x=e=>(function(t,r,n){return 3>arguments.length?2===arguments.length?n=>e(t,r,n):function(r,n){return 2===arguments.length?e(t,r,n):n=>e(t,r,n)}:e(t,r,n)}),F=x(M);function P(e){return arguments.length>1?e.apply(e,[].slice.call(arguments,1)):function(){return e.apply(e,arguments)}}var D=(e,t,r)=>f((t,r)=>e(t,r),t,r),W=(e,t,r)=>{return("boolean"==typeof e?e:e(r))?t(r):r},C=(e,r,n)=>$(n=>W(e,t(r),n),n),L=(e,t)=>h(t)?t:t.get?t.get(e):t[e],z=(e,t)=>("string"==typeof e&&(e=/\s/g.test(e)?[e]:e.trim().split(".")),D((e,t)=>L(t,e),t,e)),T=r((e,t)=>D((e,r)=>h(e)?z(r,t):z(C(h,e,r),t),null,e)),K=(e,t)=>t.filter?t.filter(e):f((t,r,n)=>e(r,n)?M(n,r,t):t,w(t),t),q=(e,t)=>{if(!t||"Function"!==n(t))throw Error(`${e} should be a function. `+`Type received: ${n(t)};  Value received: ${t}.`);return t};const R=(e,...t)=>e.concat(...t),_=(e,t,...r)=>(...n)=>{const o=R(r,n);return e>o.length&&e?_(...R([e,q("`fn` in `curry(fn, ...args)`",t)],o)):q("`fn` in `curry(fn, ...args)`",t)(...o)};var N=e=>_(e.length,(...t)=>!e(...t)),V=(e,t)=>t.reject?t.reject(e):K(N(e),t),B=e=>V(h,e),I=(...e)=>e.reduce((e,t)=>(...r)=>e(t(...r)),e=>e),U=r(p);function Z(e,t){return e.length?e[0][0](t)?e[0][1](t):Z(e.slice(1),t):void 0}var G=r(Z);function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function J(e,t){const r=function(e){const t=[];for(const r in e)H(e,r)&&t.push(r);return t.concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable))}(e);if(!t)return r;const n=[];if(0===r.length)return r;for(let e=0;r.length>e;e++)r[e].match(/^[0-9]+$/)||n.push(r[e]);return n}const Q=(e,t,r=[],o=[])=>{if(e===t)return!0;if(null==e||null==t)return e===t;let a=!0;const i=n(e),u=n(t);if(i!==u)return!1;switch(i){case"String":case"Number":return e.valueOf()===t.valueOf();case"Boolean":case"Date":return+e==+t;case"RegExp":return""+e==""+t}if("object"!=typeof e||"object"!=typeof t)return!1;let s=r.length;for(;s--;)if(r[s]===e)return o[s]===t;r.push(e),o.push(t);let c=0;if("Array"===i){if((c=e.length)!==t.length)return!1;for(;c--;)if(!(a=Q(e[c],t[c],r,o)))return!1}const l=J(e,"Array"===i);let p;c=l.length;J(t,"Array"===u);if(J(t,"Array"===u).length!==c)return!1;for(;c--;)if(!(a=H(t,p=l[c])&&Q(e[p],t[p],r,o)))return!1;return r.pop(),o.pop(),a};var X=(e,t)=>Q(e,t),Y=r((e,t)=>{let r=-1,n=!1;for(;t.length>r&&!n;)X(t[r],e)&&(n=!0),r+=1;return n}),ee=e=>l("Array",e),te=e=>h(e)?[]:ee(e)?e:[e],re=(e,t)=>$(t=>z(te(e),t),t),ne=(e,t)=>{const r=0>e?t.length+e:e;return l("String",t)?t.charAt(r):t[r]},oe=e=>ne(0,e),ae=(e,t)=>oe([...te(e),...te(t)].sort((e,t)=>t>e));const ie=(e,t)=>(...r)=>e.apply(ie,t.map(e=>e.apply(ie,r)));var ue=(e,t)=>_(ae(0,re("length",t)),ie(e,t)),se=r(ue),ce=(e,t,r)=>r.replace(e,t),le=e=>{const t=n(e);return"null"===t||"undefined"===t?t:"String"===t?e:"function"==typeof e.toString?""+e:Object.prototype.toString.apply(e)},pe=(e,t)=>null==t||t!=t?e:t,fe=r(pe),he=e=>ue((...e)=>e,e),ye=r(v),ge=e=>ne(-1,e),de=(e,t)=>{const r=[];let n,o=0;const a=e.length,i=t.length;for(;a>o;){for(n=0;i>n;)r.push([e[o],t[n]]),n+=1;o+=1}return r},we=r((e,t)=>de(te(e),t));const me=I(ye(he([E(I),ge])),we);var ve=ue(P(G),[me]),$e=r((e,t)=>e/t);function be(e,t,r){return e(r)?be(e,t,t(r)):r}var Se=x(be),je=(e,t)=>e>t,Ae=(e,t)=>f((t,r,n)=>je(n,e-1)?j(r,t):t,w(t),t),Ee=r(Ae),Oe=e=>D((e,t)=>j(t,e),[],e),ke=e=>e.length||e.size||Oe(e).length,Me=(e,t)=>{if(0>e)return t;const r=ke(t)-e-1;return f((e,t,n)=>je(n,r)?e:j(t,e),w(t),t)},xe=r(Me),Fe=r((e,t)=>(function(){return e.apply(e,arguments)||t.apply(t,arguments)})),Pe=r((e,t)=>t.endsWith(e)),De=r(X),We=(e,t,r)=>f((t,r,n)=>e(t,n),t,r),Ce=e=>We((e,t)=>j(t,e),[],e),Le=e=>l("Object",e);const ze=(e,t)=>f((r,n)=>{const o=L(n,e),a=L(n,t);return r[n]=o?Le(o)?ze(o,a):o(a):a,r},w(t),Ce(t));var Te=r(ze),Ke=r(K),qe=(e,t)=>t.join(e),Re=e=>!(null==e),_e=e=>Re(e)&&!X(e,w(e)),Ne=(e,t)=>{switch(n(t)){case"String":return`${e}${t}`;case"Array":return[e,...t];default:throw Error(`prepend doesn't know how to deal with ${n(t)}`)}};const Ve=e=>f((e,t,r)=>l("Object",t)&&_e(t)?g(e,$(([e,t])=>j(t,[Ne(r,e)]),Ve(t))):Ne([[r],t],e),[],e);var Be=r((e,t)=>f((t,[r,n])=>g(t,{[qe(e,r)]:n}),{},Ve(t))),Ie=(...e)=>e.reduceRight((e,t)=>(...r)=>e(t(...r)),e=>e),Ue=r((e,t)=>"function"==typeof t.forEach?(t.forEach((t,r)=>{e(t,r)}),t):i(t).forEach(([t,r])=>{e(r,t)}));const Ze=e=>D((t,r)=>{const n=L(r,e);return l("Object",n)||l("Map",n)?g(t,$(e=>Ne(r,e),Ze(n))):A([r],t)},[],Ce(e));var Ge=(e,t,r)=>f((t,r,n)=>L(n,t)?M(n,e(L(n,t),r),t):M(n,r,t),t,r);const He=(e,t)=>ee(e)&&ee(t)?g(e,t):Le(e)&&Le(t)?Ge(He,e,t):t;var Je=e=>D((e,t)=>Ne(t,e),w(e),e),Qe=(e,t)=>("string"!=typeof e||/\s/g.test(e)||(e=e.trim().split(".")),D((e,t)=>M(t,e,{}),t,Je(te(e)))),Xe=r((e,t)=>D((r,n)=>{const o=e(n);return o?He(r,Qe(o,m(null,n,w(t)))):r},{},t)),Ye=r(je),et=(e,t)=>f((t,r,n)=>e===n?t:M(n,r,t),w(t),t),tt=r((e,t)=>g(et(e,t),z(e,t))),rt=r((e,t)=>t.hasOwnProperty(e)),nt=e=>_(4,e),ot=nt((e,t,r,n)=>e(n)?t(n):r(n)),at=x(D),it=x(m),ut=r((e,t)=>at((t,r)=>g(t,it(e(r),r,t)),w(oe(Array.from(t))),t)),st=(e,t)=>t.split(e),ct=r((e,t)=>f((t,r,n)=>He(Qe(st(e,n),r),t),w(t),t)),lt=r((e,t)=>_(e+1,(...e)=>{return e.pop()[t](...e)})),pt=e=>Re(e)&&X(e,w(e)),ft=r(qe),ht=(e,t)=>{const r=_(e,t);return _(e,(...e)=>{const t=e.shift();return f((e,t)=>S(e,t),$(r,t),e)})},yt=r(ht),gt=(e,t)=>t>e,dt=r(gt),wt=(e,t)=>f((t,r,n)=>g(t,m(e(r,n),r,t)),w(t),t),mt=r((e,t)=>wt((t,r)=>e(r),t)),vt=r(wt),$t=r($),bt=r(v),St=r(ae),jt=r(g),At=(e,t)=>He(t,e),Et=(e,t)=>g(t,e),Ot=r(At),kt=r(He),Mt=r(Et),xt=x(Ge),Ft=x((e,t,r)=>f((t,r,n)=>t[n]?y({},t,{[n]:e(t[n],r,n)}):M(n,r,t),t,r)),Pt=r((e,t)=>oe([...te(e),...te(t)].sort((e,t)=>e>t))),Dt=r((e,t)=>e*t),Wt=r(ne),Ct=r(Qe),Lt=r((e,t)=>(l("String",e)&&(e=e.trim().split(",")),l("Array",e)?f((e,t)=>et(t,e),t,e):t)),zt=r(et),Tt=r((e,t)=>e||t),Kt=r(z),qt=x((e,t,r)=>pe(e,z(t,r))),Rt=r((e,t)=>D((e,r)=>{const n=L(r,t);return n?g(e,Qe(r,n)):e},w(t),e)),_t=r((e,t)=>D((e,r)=>g(e,Qe(r,L(r,t))),w(t),e)),Nt=r(re),Vt=r((e,t)=>$(he($(e=>t=>z(e,t),e)),t)),Bt=r(Ne),It=r(L),Ut=x((e,t,r)=>X(t,L(e,r))),Zt=x((e,t,r)=>pe(e,L(t,r))),Gt=r((e,t)=>(l("String",e)&&(e=e.trim().split(",")),Array.isArray(e)?D((e,r)=>j(L(r,t),e),[],e):[])),Ht=x((e,t,r)=>f(e,t,r,!1)),Jt=x(We),Qt=x((e,t,r)=>f(e,t,r,!0)),Xt=nt(u),Yt=r(V),er=x(ce),tr=x(C),rr=r((e,t)=>{if(e=null==e?0:Math.min(e,292)){let r=`${t}e`.split("e");return+`${(r=`${Math.round(`${r[0]}e${+r[1]+e}`)}e`.split("e"))[0]}e${+r[1]-e}`}return Math.round(t)}),nr=r((e,t)=>v(e=>O(t,e),e)),or=r((e,t)=>e===t),ar=r(st),ir=(e,t)=>{if("RegExp"!==n(e))throw new TypeError(`‘test’ requires a value of type RegExp as its first argument; received ${n(e)}`);return(e=>RegExp(e.source,(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.sticky?"y":"")+(e.unicode?"u":"")))(e).test(t)},ur=r((e,t)=>t.startsWith(e)),sr=r((e,t)=>0>e?t:f((t,r,n)=>je(n,e-1)?t:j(r,t),w(t),t)),cr=r((e,t)=>{if(0>e)return t;const r=ke(t)-e;return f((e,t,n)=>gt(n,r)?e:j(t,e),w(t),t)}),lr=r((e,t)=>(e(t),t)),pr=r((e,t)=>l("String",e)?(e=>{let t;try{t=Function(`return ${e}`)()}catch(t){return e}return t})(e.replace(/{\!([^}]+)}/g,(e,r)=>{return z(r,t)})):e),fr=r(ir);const hr=10,yr=100,gr=1e3,dr=1e6,wr=1e9,mr=1e12,vr=1e15,$r=9007199254740992,br=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],Sr=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];var jr=e=>{const t=parseInt(e,10);if(!(e=>!("number"!=typeof e||e!=e||e===1/0||e===-1/0))(t))throw new TypeError(`Not a finite number: ${e} (${typeof e})`);return function e(t){let r,n,o=arguments[1];return 0===t?o?o.join(" ").replace(/,$/,""):"zero":(o||(o=[]),0>t&&(o.push("minus"),t=Math.abs(t)),20>t?(r=0,n=br[t]):yr>t?(r=t%hr,n=Sr[Math.floor(t/hr)],r&&(n+=`-${br[r]}`,r=0)):gr>t?(r=t%yr,n=`${e(Math.floor(t/yr))} hundred`):dr>t?(r=t%gr,n=`${e(Math.floor(t/gr))} thousand,`):wr>t?(r=t%dr,n=`${e(Math.floor(t/dr))} million,`):mr>t?(r=t%wr,n=`${e(Math.floor(t/wr))} billion,`):vr>t?(r=t%mr,n=`${e(Math.floor(t/mr))} trillion,`):t>$r||(r=t%vr,n=`${e(Math.floor(t/vr))} quadrillion,`),o.push(n),e(r,o))}(t)},Ar=e=>[...new Set(e)],Er=x((e,t,r)=>e(r)?r:t(r));function Or(e,t){return _(t.length,(...r)=>e.apply(e,t.map((e,t)=>e(r[t]))))}var kr=r(Or),Mr=x(W),xr=r((e,t)=>f((e,r,n)=>e&&r(z(te(n),t)),!0,e)),Fr=r(de),Pr=(e,t)=>{if(n(e)!==n(t))throw Error("left and right were not the same functor type_");return f((r,n)=>M(n,[It(n,e),It(n,t)],r),w(t),Ar([...Ce(e),...Ce(t)]))},Dr=r(Pr),Wr=r((e,t)=>{if(ke(e)!==ke(t))throw Error("left and right werent the same size");return $(e=>D(P,P,e),Pr(e,t))});e.always=t,e.any=s,e.anyPass=c,e.ap=S,e.append=A,e.apply=E,e.applyTo=k,e.argsToList=((...e)=>e),e.attach=F,e.both=((e,t)=>(function(){return e.apply(e,arguments)&&t.apply(t,arguments)})),e.call=P,e.cascadingPath=T,e.cleanWhitespace=(e=>e.replace(/\s\s+/g," ").trim()),e.compact=B,e.complement=N,e.compose=I,e.concat=U,e.cond=G,e.contains=Y,e.converge=se,e.curry=((e,...t)=>_(q("`fn` in `curry(fn, ...args)`",e).length,e,...t)),e.curryN=_,e.dec=(e=>{if(h(e))return e;if(l("String",e)){const t=parseInt(e);return ce(le(t),le(t-1),e)}return e-1}),e.defaultTo=fe,e.dispatchWith=ve,e.divide=$e,e.doWhile=Se,e.drop=Ee,e.dropLast=xe,e.either=Fe,e.empty=w,e.endsWith=Pe,e.equals=De,e.evolve=Te,e.F=(()=>!1),e.filter=Ke,e.first=oe,e.flatten=(e=>f((t,r,o)=>l(n(e),r)?g(t,r):M(o,r,t),w(e),e)),e.flattenTree=Be,e.flip=(e=>_(e.length,function(t,r){const n=Array.prototype.slice.call(arguments,0);return n[0]=r,n[1]=t,e.apply(this,n)})),e.flow=((e,...t)=>Ie(...t)(e)),e.fnOrError=q,e.forEach=Ue,e.fromIteratorToArray=a,e.fromPairs=(e=>{const t={};let r=0;for(;e.length>r;)t[e[r][0]]=e[r][1],r++;return t}),e.getPaths=Ze,e.groupBy=Xe,e.gt=Ye,e.hammer=tt,e.has=rt,e.head=(e=>Me(1,e)),e.identity=(e=>e),e.ifElse=ot,e.indexBy=ut,e.inflateTree=ct,e.invoker=lt,e.is=b,e.isArray=ee,e.isDefined=Re,e.isEmpty=pt,e.isEnumerable=(e=>{switch(n(e)){case"Array":case"Object":case"Map":case"Set":case"String":case"Stream":return!0;default:return!1}}),e.isFunction=(e=>l("Function",e)),e.isNil=h,e.isNilOrEmpty=(e=>h(e)||pt(e)),e.isObject=Le,e.isPopulated=_e,e.isString=(e=>l("String",e)),e.join=ft,e.juxt=he,e.keys=Ce,e.last=ge,e.length=ke,e.lift=(e=>ht(e.length,e)),e.liftN=yt,e.lt=dt,e.map=ye,e.mapKeys=mt,e.mapKeysWithValueKey=vt,e.mapValues=$t,e.mapValuesWithValueKey=bt,e.max=St,e.merge=jt,e.mergeAll=(e=>ge(e)?D(g,w(ge(e)),e):e),e.mergeAllDeepLeft=(e=>oe(e)?D(At,w(oe(e)),e):e),e.mergeAllDeepRight=(e=>ge(e)?D(He,w(ge(e)),e):e),e.mergeAllLeft=(e=>oe(e)?D(Et,w(oe(e)),e):e),e.mergeDeepLeft=Ot,e.mergeDeepRight=kt,e.mergeLeft=Mt,e.mergeWith=xt,e.mergeWithKey=Ft,e.min=Pt,e.multiply=Dt,e.not=(e=>!e),e.nth=Wt,e.objOf=Ct,e.of=it,e.omit=Lt,e.omitKey=zt,e.or=Tt,e.pairsKeys=(e=>$(oe,e)),e.pairsValues=(e=>$(ge,e)),e.path=Kt,e.pathOr=qt,e.pick=Rt,e.pickAll=_t,e.pipe=Ie,e.pluck=Nt,e.plucks=Vt,e.prepend=Bt,e.prop=It,e.propEq=Ut,e.propOr=Zt,e.props=Gt,e.reduce=Ht,e.reduceKeys=Jt,e.reduceRight=Qt,e.reduceValues=at,e.reduceWhile=Xt,e.reject=Yt,e.rejectNil=B,e.replace=er,e.replaceWhen=tr,e.reverse=Je,e.round=rr,e.sequence=nr,e.simplyEquals=or,e.split=ar,e.startsWith=ur,e.T=(()=>!0),e.tail=(e=>Ae(1,e)),e.take=sr,e.takeLast=cr,e.tap=lr,e.template=pr,e.test=fr,e.toArray=te,e.toCamelCase=(e=>e.trim().split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@[\]^_`{|}~]+/).reduce((e,t,r)=>""===t?e:e.concat(r>0?t[0].toUpperCase():t[0].toLowerCase(),t.slice(1)),"")),e.toKebabCase=(e=>e.replace(/[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g,e=>` ${e.toLowerCase()||e}`).trim().split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/).join("-")),e.toLower=(e=>e.toLowerCase()),e.toOrdinal=(e=>{const t=jr(e);if(/(hundred|thousand|(m|b|tr|quadr)illion)$/.test(t)||/teen$/.test(t))return`${t}th`;if(/y$/.test(t))return t.replace(/y$/,"ieth");if(/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/.test(t)){const e={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};return t.replace(/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,(t,r)=>e[r])}return t}),e.toPairs=i,e.toPascalCase=(e=>e.split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/).reduce((e,t)=>""===t?e:e.concat(t[0].toUpperCase(),t.slice(1)),"")),e.toSnakeCase=(e=>e.replace(/[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g,e=>` ${e.toLowerCase()||e}`).trim().split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/).join("_")),e.toString=le,e.toWords=jr,e.type=n,e.unapply=(e=>(...t)=>e(Array.prototype.slice.call(t,0))),e.uniq=Ar,e.unless=Er,e.useWith=kr,e.values=Oe,e.when=Mr,e.where=xr,e.xPairs=we,e.xprod=Fr,e.zip=Dr,e.zipApply=Wr,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop__ = __webpack_require__(245);




/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
var pluck = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pluck(p, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__prop__["a" /* default */])(p), list);
});
/* harmony default export */ __webpack_exports__["a"] = (pluck);

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isString;
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _checkForMethod;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(174);


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return Object(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_toString__ = __webpack_require__(442);



/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
var toString = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toString(val) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_toString__["a" /* default */])(val, []);
});
/* harmony default export */ __webpack_exports__["a"] = (toString);

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isString__ = __webpack_require__(197);



/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
var nth = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isString__["a" /* default */])(list) ? list.charAt(idx) : list[idx];
});
/* harmony default export */ __webpack_exports__["a"] = (nth);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toString__ = __webpack_require__(199);





/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
var invoker = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function invoker(arity, method) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_3__toString__["a" /* default */])(target) + ' does not have a method named "' + method + '"');
  });
});
/* harmony default export */ __webpack_exports__["a"] = (invoker);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapProps", function() { return mapProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProps", function() { return withProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPropsOnChange", function() { return withPropsOnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHandlers", function() { return withHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameProp", function() { return renameProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameProps", function() { return renameProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenProp", function() { return flattenProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withState", function() { return withState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStateHandlers", function() { return withStateHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReducer", function() { return withReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branch", function() { return branch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNothing", function() { return renderNothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUpdate", function() { return shouldUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUpdateForKeys", function() { return onlyUpdateForKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUpdateForPropTypes", function() { return onlyUpdateForPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContext", function() { return withContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toClass", function() { return toClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRenderProps", function() { return withRenderProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatic", function() { return setStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPropTypes", function() { return setPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisplayName", function() { return setDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return getDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapDisplayName", function() { return wrapDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassComponent", function() { return isClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSink", function() { return createSink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromProp", function() { return componentFromProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return nest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return hoistStatics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromStream", function() { return componentFromStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromStreamWithConfig", function() { return componentFromStreamWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropsStream", function() { return mapPropsStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropsStreamWithConfig", function() { return mapPropsStreamWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHandler", function() { return createEventHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHandlerWithConfig", function() { return createEventHandlerWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setObservableConfig", function() { return configureObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_shallowEqual__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_shallowEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_shallowEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_lifecycles_compat__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_keys__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hoist_non_react_statics__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_change_emitter__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_change_emitter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_change_emitter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_symbol_observable__ = __webpack_require__(393);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_shallowEqual___default.a; });













var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

var setDisplayName = function setDisplayName(displayName) {
  return setStatic('displayName', displayName);
};

var getDisplayName = function getDisplayName(Component$$1) {
  if (typeof Component$$1 === 'string') {
    return Component$$1;
  }

  if (!Component$$1) {
    return undefined;
  }

  return Component$$1.displayName || Component$$1.name || 'Component';
};

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + getDisplayName(BaseComponent) + ')';
};

var mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var MapProps = function MapProps(props) {
      return factory(propsMapper(props));
    };
    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'mapProps'))(MapProps);
    }
    return MapProps;
  };
};

var withProps = function withProps(input) {
  var hoc = mapProps(function (props) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, typeof input === 'function' ? input(props) : input);
  });
  if (false) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var pick = function pick(obj, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

var withPropsOnChange = function withPropsOnChange(shouldMapOrKeys, propsMapper) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var shouldMap = typeof shouldMapOrKeys === 'function' ? shouldMapOrKeys : function (props, nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_shallowEqual___default()(pick(props, shouldMapOrKeys), pick(nextProps, shouldMapOrKeys));
    };

    var WithPropsOnChange = function (_Component) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(WithPropsOnChange, _Component);

      function WithPropsOnChange() {
        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, WithPropsOnChange);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          computedProps: propsMapper(_this.props),
          prevProps: _this.props
        }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
      }

      WithPropsOnChange.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if (shouldMap(prevState.prevProps, nextProps)) {
          return {
            computedProps: propsMapper(nextProps),
            prevProps: nextProps
          };
        }

        return null;
      };

      WithPropsOnChange.prototype.render = function render() {
        return factory(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.props, this.state.computedProps));
      };

      return WithPropsOnChange;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    Object(__WEBPACK_IMPORTED_MODULE_6_react_lifecycles_compat__["a" /* polyfill */])(WithPropsOnChange);

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withPropsOnChange'))(WithPropsOnChange);
    }

    return WithPropsOnChange;
  };
};

var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */
  return result;
};

var withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithHandlers = function (_Component) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(WithHandlers, _Component);

      function WithHandlers() {
        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, WithHandlers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
      }

      WithHandlers.prototype.render = function render() {
        return factory(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.props, this.handlers));
      };

      return WithHandlers;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.handlers = mapValues(typeof handlers === 'function' ? handlers(this.props) : handlers, function (createHandler) {
        return function () {
          var handler = createHandler(_this2.props);

          if (false) {
            console.error(
            // eslint-disable-line no-console
            'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
          }

          return handler.apply(undefined, arguments);
        };
      });
    };

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withHandlers'))(WithHandlers);
    }
    return WithHandlers;
  };
};

var defaultProps = function defaultProps(props) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var DefaultProps = function DefaultProps(ownerProps) {
      return factory(ownerProps);
    };
    DefaultProps.defaultProps = props;
    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'defaultProps'))(DefaultProps);
    }
    return DefaultProps;
  };
};

var omit = function omit(obj, keys) {
  var rest = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties___default()(obj, []);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (rest.hasOwnProperty(key)) {
      delete rest[key];
    }
  }
  return rest;
};

var renameProp = function renameProp(oldName, newName) {
  var hoc = mapProps(function (props) {
    var _extends2;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, omit(props, [oldName]), (_extends2 = {}, _extends2[newName] = props[oldName], _extends2));
  });
  if (false) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProp'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var keys = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_keys___default.a;


var mapKeys = function mapKeys(obj, func) {
  return keys(obj).reduce(function (result, key) {
    var val = obj[key];
    /* eslint-disable no-param-reassign */
    result[func(val, key)] = val;
    /* eslint-enable no-param-reassign */
    return result;
  }, {});
};

var renameProps = function renameProps(nameMap) {
  var hoc = mapProps(function (props) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, omit(props, keys(nameMap)), mapKeys(pick(props, keys(nameMap)), function (_, oldName) {
      return nameMap[oldName];
    }));
  });
  if (false) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProps'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var flattenProp = function flattenProp(propName) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var FlattenProp = function FlattenProp(props) {
      return factory(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, props[propName]));
    };

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'flattenProp'))(FlattenProp);
    }
    return FlattenProp;
  };
};

var withState = function withState(stateName, stateUpdaterName, initialState) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithState = function (_Component) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(WithState, _Component);

      function WithState() {
        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, WithState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
        }, _this.updateStateValue = function (updateFn, callback) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
            };
          }, callback);
        }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
      }

      WithState.prototype.render = function render() {
        var _extends2;

        return factory(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[stateUpdaterName] = this.updateStateValue, _extends2)));
      };

      return WithState;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withState'))(WithState);
    }
    return WithState;
  };
};

var withStateHandlers = function withStateHandlers(initialState, stateUpdaters) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithStateHandlers = function (_Component) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(WithStateHandlers, _Component);

      function WithStateHandlers() {
        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, WithStateHandlers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
      }

      WithStateHandlers.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        var propsChanged = nextProps !== this.props;
        // the idea is to skip render if stateUpdater handler return undefined
        // this allows to create no state update handlers with access to state and props
        var stateChanged = !__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_shallowEqual___default()(nextState, this.state);
        return propsChanged || stateChanged;
      };

      WithStateHandlers.prototype.render = function render() {
        return factory(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.props, this.state, this.stateUpdaters));
      };

      return WithStateHandlers;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.state = typeof initialState === 'function' ? initialState(this.props) : initialState;
      this.stateUpdaters = mapValues(stateUpdaters, function (handler) {
        return function (mayBeEvent) {
          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          // Having that functional form of setState can be called async
          // we need to persist SyntheticEvent
          if (mayBeEvent && typeof mayBeEvent.persist === 'function') {
            mayBeEvent.persist();
          }

          _this2.setState(function (state, props) {
            return handler(state, props).apply(undefined, [mayBeEvent].concat(args));
          });
        };
      });
    };

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withStateHandlers'))(WithStateHandlers);
    }
    return WithStateHandlers;
  };
};

var noop = function noop() {};

var withReducer = function withReducer(stateName, dispatchName, reducer, initialState) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithReducer = function (_Component) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(WithReducer, _Component);

      function WithReducer() {
        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, WithReducer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          stateValue: _this.initializeStateValue()
        }, _this.dispatch = function (action) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: reducer(stateValue, action)
            };
          }, function () {
            return callback(_this.state.stateValue);
          });
        }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
      }

      WithReducer.prototype.initializeStateValue = function initializeStateValue() {
        if (initialState !== undefined) {
          return typeof initialState === 'function' ? initialState(this.props) : initialState;
        }
        return reducer(undefined, { type: '@@recompose/INIT' });
      };

      WithReducer.prototype.render = function render() {
        var _extends2;

        return factory(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[dispatchName] = this.dispatch, _extends2)));
      };

      return WithReducer;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withReducer'))(WithReducer);
    }
    return WithReducer;
  };
};

var identity = function identity(Component$$1) {
  return Component$$1;
};

var branch = function branch(test, left) {
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  return function (BaseComponent) {
    var leftFactory = void 0;
    var rightFactory = void 0;
    var Branch = function Branch(props) {
      if (test(props)) {
        leftFactory = leftFactory || Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(left(BaseComponent));
        return leftFactory(props);
      }
      rightFactory = rightFactory || Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(right(BaseComponent));
      return rightFactory(props);
    };

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'branch'))(Branch);
    }
    return Branch;
  };
};

var renderComponent = function renderComponent(Component$$1) {
  return function (_) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(Component$$1);
    var RenderComponent = function RenderComponent(props) {
      return factory(props);
    };
    if (false) {
      RenderComponent.displayName = wrapDisplayName(Component$$1, 'renderComponent');
    }
    return RenderComponent;
  };
};

var Nothing = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Nothing, _Component);

  function Nothing() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Nothing);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  Nothing.prototype.render = function render() {
    return null;
  };

  return Nothing;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var renderNothing = function renderNothing(_) {
  return Nothing;
};

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var ShouldUpdate = function (_Component) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ShouldUpdate, _Component);

      function ShouldUpdate() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ShouldUpdate);

        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

var pure = function pure(BaseComponent) {
  var hoc = shouldUpdate(function (props, nextProps) {
    return !__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_shallowEqual___default()(props, nextProps);
  });

  if (false) {
    return setDisplayName(wrapDisplayName(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

var onlyUpdateForKeys = function onlyUpdateForKeys(propKeys) {
  var hoc = shouldUpdate(function (props, nextProps) {
    return !__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_shallowEqual___default()(pick(nextProps, propKeys), pick(props, propKeys));
  });

  if (false) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForKeys'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var onlyUpdateForPropTypes = function onlyUpdateForPropTypes(BaseComponent) {
  var propTypes = BaseComponent.propTypes;

  if (false) {
    if (!propTypes) {
      /* eslint-disable */
      console.error('A component without any `propTypes` was passed to ' + '`onlyUpdateForPropTypes()`. Check the implementation of the ' + ('component with display name "' + getDisplayName(BaseComponent) + '".'));
      /* eslint-enable */
    }
  }

  var propKeys = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_keys___default()(propTypes || {});
  var OnlyUpdateForPropTypes = onlyUpdateForKeys(propKeys)(BaseComponent);

  if (false) {
    return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForPropTypes'))(OnlyUpdateForPropTypes);
  }
  return OnlyUpdateForPropTypes;
};

var withContext = function withContext(childContextTypes, getChildContext) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithContext = function (_Component) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(WithContext, _Component);

      function WithContext() {
        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, WithContext);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getChildContext = function () {
          return getChildContext(_this.props);
        }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
      }

      WithContext.prototype.render = function render() {
        return factory(this.props);
      };

      return WithContext;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    WithContext.childContextTypes = childContextTypes;

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withContext'))(WithContext);
    }
    return WithContext;
  };
};

var getContext = function getContext(contextTypes) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var GetContext = function GetContext(ownerProps, context) {
      return factory(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, ownerProps, context));
    };

    GetContext.contextTypes = contextTypes;

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'getContext'))(GetContext);
    }
    return GetContext;
  };
};

var lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    if (false) {
      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
    }

    var Lifecycle = function (_Component) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Lifecycle, _Component);

      function Lifecycle() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Lifecycle);

        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
      }

      Lifecycle.prototype.render = function render() {
        return factory(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.props, this.state));
      };

      return Lifecycle;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_keys___default()(spec).forEach(function (hook) {
      return Lifecycle.prototype[hook] = spec[hook];
    });

    if (false) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'lifecycle'))(Lifecycle);
    }
    return Lifecycle;
  };
};

var isClassComponent = function isClassComponent(Component$$1) {
  return Boolean(Component$$1 && Component$$1.prototype && typeof Component$$1.prototype.render === 'function');
};

var toClass = function toClass(baseComponent) {
  var _class, _temp;

  return isClassComponent(baseComponent) ? baseComponent : (_temp = _class = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ToClass, _Component);

    function ToClass() {
      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ToClass);

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
    }

    ToClass.prototype.render = function render() {
      if (typeof baseComponent === 'string') {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(baseComponent, this.props);
      }
      return baseComponent(this.props, this.context);
    };

    return ToClass;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.displayName = getDisplayName(baseComponent), _class.propTypes = baseComponent.propTypes, _class.contextTypes = baseComponent.contextTypes, _class.defaultProps = baseComponent.defaultProps, _temp);
};

function withRenderProps(hoc) {
  var RenderPropsComponent = function RenderPropsComponent(props) {
    return props.children(props);
  };
  return hoc(RenderPropsComponent);
}

var setPropTypes = function setPropTypes(propTypes) {
  return setStatic('propTypes', propTypes);
};

var compose = function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  }, function (arg) {
    return arg;
  });
};

var createSink = function createSink(callback) {
  var Sink = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Sink, _Component);

    function Sink() {
      var _temp, _this, _ret;

      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Sink);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
    }

    Sink.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      callback(nextProps);
      return null;
    };

    Sink.prototype.render = function render() {
      return null;
    };

    return Sink;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  Object(__WEBPACK_IMPORTED_MODULE_6_react_lifecycles_compat__["a" /* polyfill */])(Sink);
  return Sink;
};

var componentFromProp = function componentFromProp(propName) {
  var Component$$1 = function Component$$1(props) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(props[propName], omit(props, [propName]));
  };
  Component$$1.displayName = 'componentFromProp(' + propName + ')';
  return Component$$1;
};

var nest = function nest() {
  for (var _len = arguments.length, Components = Array(_len), _key = 0; _key < _len; _key++) {
    Components[_key] = arguments[_key];
  }

  var factories = Components.map(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"]);
  var Nest = function Nest(_ref) {
    var children = _ref.children,
        props = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

    return factories.reduceRight(function (child, factory) {
      return factory(props, child);
    }, children);
  };

  if (false) {
    var displayNames = Components.map(getDisplayName);
    Nest.displayName = 'nest(' + displayNames.join(', ') + ')';
  }

  return Nest;
};

var hoistStatics = function hoistStatics(higherOrderComponent, blacklist) {
  return function (BaseComponent) {
    var NewComponent = higherOrderComponent(BaseComponent);
    __WEBPACK_IMPORTED_MODULE_9_hoist_non_react_statics___default()(NewComponent, BaseComponent, blacklist);
    return NewComponent;
  };
};

var _config = {
  fromESObservable: null,
  toESObservable: null
};

var configureObservable = function configureObservable(c) {
  _config = c;
};

var config = {
  fromESObservable: function fromESObservable(observable) {
    return typeof _config.fromESObservable === 'function' ? _config.fromESObservable(observable) : observable;
  },
  toESObservable: function toESObservable(stream) {
    return typeof _config.toESObservable === 'function' ? _config.toESObservable(stream) : stream;
  }
};

var componentFromStreamWithConfig = function componentFromStreamWithConfig(config$$1) {
  return function (propsToVdom) {
    return function (_Component) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ComponentFromStream, _Component);

      function ComponentFromStream() {
        var _config$fromESObserva;

        var _temp, _this, _ret;

        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ComponentFromStream);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { vdom: null }, _this.propsEmitter = Object(__WEBPACK_IMPORTED_MODULE_10_change_emitter__["createChangeEmitter"])(), _this.props$ = config$$1.fromESObservable((_config$fromESObserva = {
          subscribe: function subscribe(observer) {
            var unsubscribe = _this.propsEmitter.listen(function (props) {
              if (props) {
                observer.next(props);
              } else {
                observer.complete();
              }
            });
            return { unsubscribe: unsubscribe };
          }
        }, _config$fromESObserva[__WEBPACK_IMPORTED_MODULE_11_symbol_observable__["a" /* default */]] = function () {
          return this;
        }, _config$fromESObserva)), _this.vdom$ = config$$1.toESObservable(propsToVdom(_this.props$)), _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
      }

      // Stream of props


      // Stream of vdom


      ComponentFromStream.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this;

        // Subscribe to child prop changes so we know when to re-render
        this.subscription = this.vdom$.subscribe({
          next: function next(vdom) {
            _this2.setState({ vdom: vdom });
          }
        });
        this.propsEmitter.emit(this.props);
      };

      ComponentFromStream.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        // Receive new props from the owner
        this.propsEmitter.emit(nextProps);
      };

      ComponentFromStream.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return nextState.vdom !== this.state.vdom;
      };

      ComponentFromStream.prototype.componentWillUnmount = function componentWillUnmount() {
        // Call without arguments to complete stream
        this.propsEmitter.emit();

        // Clean-up subscription before un-mounting
        this.subscription.unsubscribe();
      };

      ComponentFromStream.prototype.render = function render() {
        return this.state.vdom;
      };

      return ComponentFromStream;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
  };
};

var componentFromStream = function componentFromStream(propsToVdom) {
  return componentFromStreamWithConfig(config)(propsToVdom);
};

var identity$1 = function identity(t) {
  return t;
};

var mapPropsStreamWithConfig = function mapPropsStreamWithConfig(config$$1) {
  var componentFromStream$$1 = componentFromStreamWithConfig({
    fromESObservable: identity$1,
    toESObservable: identity$1
  });
  return function (transform) {
    return function (BaseComponent) {
      var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
      var fromESObservable = config$$1.fromESObservable,
          toESObservable = config$$1.toESObservable;

      return componentFromStream$$1(function (props$) {
        var _ref;

        return _ref = {
          subscribe: function subscribe(observer) {
            var subscription = toESObservable(transform(fromESObservable(props$))).subscribe({
              next: function next(childProps) {
                return observer.next(factory(childProps));
              }
            });
            return {
              unsubscribe: function unsubscribe() {
                return subscription.unsubscribe();
              }
            };
          }
        }, _ref[__WEBPACK_IMPORTED_MODULE_11_symbol_observable__["a" /* default */]] = function () {
          return this;
        }, _ref;
      });
    };
  };
};

var mapPropsStream = function mapPropsStream(transform) {
  var hoc = mapPropsStreamWithConfig(config)(transform);

  if (false) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'mapPropsStream'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var createEventHandlerWithConfig = function createEventHandlerWithConfig(config$$1) {
  return function () {
    var _config$fromESObserva;

    var emitter = Object(__WEBPACK_IMPORTED_MODULE_10_change_emitter__["createChangeEmitter"])();
    var stream = config$$1.fromESObservable((_config$fromESObserva = {
      subscribe: function subscribe(observer) {
        var unsubscribe = emitter.listen(function (value) {
          return observer.next(value);
        });
        return { unsubscribe: unsubscribe };
      }
    }, _config$fromESObserva[__WEBPACK_IMPORTED_MODULE_11_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _config$fromESObserva));
    return {
      handler: emitter.emit,
      stream: stream
    };
  };
};

var createEventHandler = createEventHandlerWithConfig(config);

// Higher-order component helpers




/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 205 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 206 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(194);

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__(275);

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__(241);

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __mapped = {};
var __activeLink = void 0;

exports.default = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    if (_scrollEvents2.default.registered.begin) {
      _scrollEvents2.default.registered.begin(to, target);
    }

    props.absolute = true;

    var scrollOffset = _utils2.default.scrollOffset(containerElement, target) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (containerElement === document) {
        window.scrollTo(0, scrollOffset);
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isPlaceholder;
function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
var add = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function add(a, b) {
  return Number(a) + Number(b);
});
/* harmony default export */ __webpack_exports__["a"] = (add);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curryN;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arity__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlaceholder__ = __webpack_require__(208);



/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : Object(__WEBPACK_IMPORTED_MODULE_0__arity__["a" /* default */])(left, _curryN(length, combined, fn));
  };
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _map;
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isString__ = __webpack_require__(197);




/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
var _isArrayLike = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function isArrayLike(x) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isArray__["a" /* default */])(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_2__isString__["a" /* default */])(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
/* harmony default export */ __webpack_exports__["a"] = (_isArrayLike);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
var assoc = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (assoc);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
var nAry = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function nAry(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.call(this);
      };
    case 1:
      return function (a0) {
        return fn.call(this, a0);
      };
    case 2:
      return function (a0, a1) {
        return fn.call(this, a0, a1);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});
/* harmony default export */ __webpack_exports__["a"] = (nAry);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isFunction;
function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__liftN__ = __webpack_require__(289);



/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
var lift = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lift(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__liftN__["a" /* default */])(fn.length, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (lift);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isString__ = __webpack_require__(197);



/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
var reverse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function reverse(list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isString__["a" /* default */])(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});
/* harmony default export */ __webpack_exports__["a"] = (reverse);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _containsWith;
function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_complement__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(254);




/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function reject(pred, filterable) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__internal_complement__["a" /* default */])(pred), filterable);
});
/* harmony default export */ __webpack_exports__["a"] = (reject);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curryN__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_has__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_xreduceBy__ = __webpack_require__(453);






/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
var reduceBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curryN__["a" /* default */])(4, [], /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_4__internal_xreduceBy__["a" /* default */], function reduceBy(valueFn, valueAcc, keyFn, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(function (acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(Object(__WEBPACK_IMPORTED_MODULE_2__internal_has__["a" /* default */])(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list);
}));
/* harmony default export */ __webpack_exports__["a"] = (reduceBy);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(162);



/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
var flip = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function flip(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (flip);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(164);



/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lens = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lens(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});
/* harmony default export */ __webpack_exports__["a"] = (lens);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isObject__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mergeWithKey__ = __webpack_require__(263);




/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
var mergeDeepWithKey = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeDeepWithKey(fn, lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__mergeWithKey__["a" /* default */])(function (k, lVal, rVal) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isObject__["a" /* default */])(lVal) && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isObject__["a" /* default */])(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepWithKey);

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.fontSize, _styles.fontWeight, _styles.color, _styles.borderRadius, _styles.border, {
  fontFamily: "inherit",
  WebkitFontSmoothing: "antialiased",
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "center",
  textDecoration: "none",
  appearance: "none",
  "&:disabled": {
    opacity: 1 / 4
  },
  "&:focus": {
    outline: "none",
    boxShadow: {
      bg: "self",
      options: {
        path: "theme.colors",
        postFn: function postFn(v) {
          return "0 0 0 2px " + v;
        }
      }
    }
  }
});

exports.default = (0, _sys2.default)("button", styles, {
  displayName: "Button",
  defaultProps: {
    fontSize: "1",
    fontWeight: "bold",
    lineHeight: 16 / 14,
    m: "0",
    px: "3",
    py: "2",
    color: "white",
    bg: "blue",
    borderRadius: "2",
    border: "0"
  },
  withProps: {}
});

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(183);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 226 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 227 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(229)('keys');
var uid = __webpack_require__(205);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(172);
var global = __webpack_require__(173);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(204) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 230 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 231 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(226);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(192);
var dPs = __webpack_require__(361);
var enumBugKeys = __webpack_require__(230);
var IE_PROTO = __webpack_require__(228)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(266)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(362).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(182).f;
var has = __webpack_require__(177);
var TAG = __webpack_require__(187)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(187);


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(173);
var core = __webpack_require__(172);
var LIBRARY = __webpack_require__(204);
var wksExt = __webpack_require__(236);
var defineProperty = __webpack_require__(182).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(194);

var _utils2 = _interopRequireDefault(_utils);

var _scrollSpy = __webpack_require__(239);

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(207);

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(276);

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (y) {

      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var to = _this2.props.to;
      var element = null;
      var elemTopBound = 0;
      var elemBottomBound = 0;
      var containerTop = 0;

      if (scrollSpyContainer.getBoundingClientRect) {
        var containerCords = scrollSpyContainer.getBoundingClientRect();
        containerTop = containerCords.top;
      }

      if (!element || _this2.props.isDynamic) {
        element = scroller.get(to);
        if (!element) {
          return;
        }

        var cords = element.getBoundingClientRect();
        elemTopBound = cords.top - containerTop + y;
        elemBottomBound = elemTopBound + cords.height;
      }

      var offsetY = y - _this2.props.offset;
      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          _scrollHash2.default.changeHash();
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(398);

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__(240);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The eventHandler will execute at a rate of 15fps
var eventThrottler = function eventThrottler(eventHandler) {
  return (0, _lodash2.default)(eventHandler, 66);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      });
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },


  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports.default = scrollSpy;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

var _recompose = __webpack_require__(202);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.fontSize, _styles.fontWeight, _styles.lineHeight, _styles.fontFamily, _styles.color, _styles.textAlign);

var Heading = (0, _sys2.default)("h2", styles, {
  displayName: "Heading",
  defaultProps: {
    fontSize: "5",
    fontWeight: "bold",
    lineHeight: 1.25,
    m: "0"
  },
  withProps: {}
});

var enhanceC = function enhanceC(is) {
  return (0, _recompose.compose)((0, _recompose.setDisplayName)("Heading." + is), (0, _recompose.withProps)({ is: is }))(Heading);
};
Heading.h1 = enhanceC("h1");
Heading.h2 = enhanceC("h2");
Heading.h3 = enhanceC("h3");
Heading.h4 = enhanceC("h4");
Heading.h5 = enhanceC("h5");
Heading.h6 = enhanceC("h6");
exports.default = Heading;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

!function(r,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(r.name={})}(this,function(r){"use strict";var t=function(r){return null===r?"null":void 0===r?"undefined":r.constructor.name},n=function(r,n){return"null"===r?null===n:"undefined"===r?void 0===n:null!=n&&t(n)===r},e=function(r){return n("undefined",r)||n("null",r)},o=function(r){return function(t,n){return arguments.length>=2?r(t,n):function(n){return r(t,n)}}},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},u=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},s=function(r,n){if(e(r))return n;if(e(n))return r;if(t(r)!==t(n))throw new Error("merge received a "+t(r)+" and "+t(n)+" which aren't the same");switch(t(r)){case"Array":return[].concat(r,n);case"Object":return u({},r,n);case"Map":return new Map([].concat(r,n));case"Set":return new Set([].concat(r,n));case"String":return""+r+n;default:throw new Error("merge doesn't know how to deal with "+t(r))}},a=o(s),p=o(n),c=function(r,n){switch(t(n)){case"String":return""+n+r;case"Array":return[].concat(n,[r]);default:throw new TypeError("append doesn't know how to deal with "+t(n))}},f=function(r){return function r(t){return function(n){var e=n.next(),o=e.value;return e.done?t:r([].concat(t,[o]))(n)}}([])(r)},d=function(r){switch(t(r)){case"Array":return r.reduce(function(r,t,n){return[].concat(r,[[n,t]])},[]);case"Object":return Object.entries(r);case"Set":return f(r.values()).map(function(r){return[void 0,r]});case"Map":return f(r.entries());default:throw new Error("toPairs doesn't know how to handle "+t(r))}},l=function(r,n,e){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=void 0;switch(t(e)){case"Array":i=function(t,n,e){return r(t,n,e)};break;case"Object":case"Map":i=function(t,n){var e=n[0],o=n[1];return r(t,o,e)},e=d(e);break;case"Set":i=function(t,n){var e=n[1];return r(t,e)},e=d(e);break;case"String":i=function(t,n){var e=n[0],o=n[1];return r(t,o,e)},e=d(e.split(""));break;default:throw new Error("reduce couldn't figure out how to reduce "+t(e))}if(!o)return e.reduce(i,n);for(var u=e.length-1;u>=0;)n=i(e[u],n),u-=1;return n},g=function(r){return t=function(r,t){return c(t,r)},l(function(r,n,e){return t(r,e)},[],r);var t},m=function(r){return function(t,n,e){return arguments.length>=3?r(t,n,e):2===arguments.length?function(e){return r(t,n,e)}:function(n,e){return 2===arguments.length?r(t,n,e):function(e){return r(t,n,e)}}}},h=m(function(r,t,n){return l(r,t,n,!1)}),x=function(){return"[object Arguments]"===Object.prototype.toString.call(arguments)?function(r){return"[object Arguments]"===Object.prototype.toString.call(r)}:function(r){return Object.prototype.hasOwnProperty.call(r,"callee")}}(),v=function(r){return null!=r&&"function"==typeof r.empty?r.empty():null!=r&&null!=r.constructor&&"function"==typeof r.constructor.empty?r.constructor.empty():n("Array",r)?[]:n("String",r)?"":n("Object",r)?{}:n("Map",r)?new Map:n("Set",r)?new Set:x(r)?function(){return arguments}():void 0};function y(r,t){return Object.prototype.hasOwnProperty.call(r,t)}function b(r,t){var n=function(r){var t=[];for(var n in r)y(r,n)&&t.push(n);return t.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))}(r);if(!t)return n;var e=[];if(0===n.length)return n;for(var o=0;o<n.length;o++)n[o].match(/^[0-9]+$/)||e.push(n[o]);return e}var A=function(r,n){return function r(n,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(n===e)return!0;if(null==n||null==e)return n===e;var s=!0,a=t(n),p=t(e);if(a!==p)return!1;switch(a){case"String":case"Number":return n.valueOf()===e.valueOf();case"Boolean":case"Date":return+n==+e;case"RegExp":return n.toString()===e.toString()}if("object"!==(void 0===n?"undefined":i(n))||"object"!==(void 0===e?"undefined":i(e)))return!1;for(var c=o.length;c--;)if(o[c]===n)return u[c]===e;o.push(n),u.push(e);var f=0;if("Array"===a){if((f=n.length)!==e.length)return!1;for(;f--;)if(!(s=r(n[f],e[f],o,u)))return!1}var d=b(n,"Array"===a),l=void 0;f=d.length;b(e,"Array"===p);if(b(e,"Array"===p).length!==f)return!1;for(;f--;)if(!(s=y(e,l=d[f])&&r(n[l],e[l],o,u)))return!1;return o.pop(),u.pop(),s}(r,n)},I=function(r){return!(null==r)},w=function(r){return I(r)&&A(r,v(r))},k=function(r){return function(r,t){var e=r<0?t.length+r:r;return n("String",t)?t.charAt(e):t[e]}(-1,r)},S=function(r){return function(){return r}},R=function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.reduceRight(function(r,t){return function(){return r(t.apply(void 0,arguments))}},function(r){return r})},T=function(r,t){return e(t)?t:t.get?t.get(r):t[r]},O=function(r,n,e){switch(t(e)){case"Object":var o;return u({},e,((o={})[r]=n,o));case"Array":return[].concat(e.slice(0,r),[n],e.slice(r));case"String":return""+e.slice(0,r)+n+e.slice(r);case"Map":return new Map([].concat(e,[[r,n]]));case"Set":return new Set([].concat(e,[n]));default:throw new Error("attach doesn't know how to set a key and value on "+t(e))}},F=function(r){return n("Object",r)},j=function(r){return n("Array",r)},W=function r(t,n){return j(t)&&j(n)?s(t,n):F(t)&&F(n)?(e=r,l(function(r,t,n){return T(n,r)?O(n,e(T(n,r),t),r):O(n,t,r)},t,n)):n;var e},B=o(W),C=function(r,n){if(!n||"Function"!==t(n))throw new Error(r+" should be a function. Type received: "+t(n)+";  Value received: "+n+".");return n},E=function(r){for(var t=arguments.length,n=Array(t>1?t-1:0),e=1;e<t;e++)n[e-1]=arguments[e];return r.concat.apply(r,n)},P=function r(t,n){for(var e=arguments.length,o=Array(e>2?e-2:0),i=2;i<e;i++)o[i-2]=arguments[i];return function(){for(var e=arguments.length,i=Array(e),u=0;u<e;u++)i[u]=arguments[u];var s=E(o,i);return s.length>=t||!t?C("`fn` in `curry(fn, ...args)`",n).apply(void 0,s):r.apply(void 0,E([t,C("`fn` in `curry(fn, ...args)`",n)],s))}},_=function(r){return P(4,r)},L=_(function(r,t,n,e){return r(e)?t(e):n(e)}),z=o(T),M=function(r){for(var t=arguments.length,n=Array(t>1?t-1:0),e=1;e<t;e++)n[e-1]=arguments[e];return R.apply(void 0,n)(r)},H=function(r){return e(r)?[]:j(r)?r:[r]},D=function(r,t,n){return l(function(t,n){return r(t,n)},t,n)},N=function(r,t){return"string"==typeof r&&(r=/\s/g.test(r)?[r]:r.trim().split(".")),D(function(r,t){return T(t,r)},t,r)},$=function(r,t){return null==t||t!=t?r:t},G=m(function(r,t,n){return $(r,N(t,n))}),q=m(function(r,t,n){return("boolean"==typeof r?r:r(n))?t(n):n}),X=function(r,n,e){switch(t(e)){case"Array":return[n];case"Object":var o;return(o={})[r]=n,o;case"Set":return new Set([n]);case"Map":return new Map([[r,n]]);case"String":return""+n;default:throw new Error("of doesn't know how to type "+t(e))}},Y=function(r,t){return t.map instanceof Function?t.map(function(t,n){return r(t,n)}):l(function(t,n,e){return s(t,X(e,r(n,e),t))},v(t),t)},V=o(function(r,t){return t.map instanceof Function?t.map(function(t){return r(t)}):Y(function(t){return r(t)},t)}),Q=o(function(r,t){return t.join(r)}),K=o(function(r,t){for(var n=-1,e=!1;n<t.length&&!e;)A(t[n],r)&&(e=!0),n+=1;return e}),U=function(r){return r.trim().split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@[\]^_`{|}~]+/).reduce(function(r,t,n){return""===t?r:r.concat(n>0?t[0].toUpperCase():t[0].toLowerCase(),t.slice(1))},"")},Z=P(2,function(r,t){var n=p("Boolean"),o=q(function(r){return p("Array",r)||p("Object",r)},S("skip")),i=function(r){return R(z(r),o,q(e,S("skip")),q(n,function(t){return t?r:"skip"}))(t)},u=function(r){return R(z(r),o,L(e,S("skip"),function(t){return t?r:"skip"}))(t)},s=R(Q(" "),U,function(r){var t;return(t={})[r]=!0,t}),c=K("skip"),f=S({}),d=function(r){return h(function(r,i){return[].concat(r,H(R(z(u=i),q(e,S("skip")),o,L(n,function(r){return r?u:"skip"},function(r){return[u,r]}))(t)));var u},[],r)};return h(function(r,t){if(p("Array",t)){var n=R(H,V(i),L(c,f,s))(t),e=R(H,V(u),L(c,f,s),a(n))(t);return a(r,e)}return R(H,d,L(c,f,s),a(r))(t)},{},r)}),J=o(Y),rr=o(function(r,t){return function(r,t){return l(function(t,n,e){return s(t,X(r(n,e),n,t))},v(t),t)}(function(t,n){return r(n)},t)}),tr=o(function(r,n){if("RegExp"!==t(r))throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received "+t(r));return function(r){return new RegExp(r.source,(r.global?"g":"")+(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.sticky?"y":"")+(r.unicode?"u":""))}(r).test(n)}),nr=function(r,t){return function(){return r.apply(r,arguments)&&t.apply(t,arguments)}},er=o(A),or=function(r){return r},ir=function(){return!0};var ur,sr=o(function r(t,n){return t.length?t[0][0](n)?t[0][1](n):r(t.slice(1),n):void 0}),ar=o(function(r,t){return function(){return r.apply(r,arguments)||t.apply(t,arguments)}}),pr=m(function(r,t,n){return $(r,T(t,n))}),cr=function(r){return P(r.length,function(){return!r.apply(void 0,arguments)})},fr=function(r){return P(r.length,function(t,n){var e=Array.prototype.slice.call(arguments,0);return e[0]=n,e[1]=t,r.apply(this,e)})},dr=function(r){var n=t(r);return"null"===n||"undefined"===n?n:"String"===n?r:"function"==typeof r.toString?r.toString():Object.prototype.toString.apply(r)},lr=o(function(r,t){return r===t}),gr=_(function(r,n,e,o){var i=void 0,u=void 0;switch(t(o)){case"Array":i=function(r,t,e){return n(r,t,e)},u=function(t,n,e){return r(t,n,e)};break;case"Object":case"Map":i=function(r,t){var e=t[0],o=t[1];return n(r,o,e)},o=d(o),u=function(t,n){var e=n[0],o=n[1];return r(t,o,e)};break;case"Set":i=function(r,t){var e=t[1];return n(r,e)},o=d(o),u=function(t,n){var e=n[1];return r(t,e)};break;case"String":i=function(r,t){var e=t[0],o=t[1];return n(r,o,e)},o=d(o.split("")),u=function(t,n){var e=n[0],o=n[1];return r(t,o,e)};break;default:throw new Error("reduce couldn't figure out how to reduce "+t(o))}for(var s=o.length,a=e,p=0;p<s;++p){var c=o[p];if(!u(a,c,p))break;a=i(a,c,p)}return a}),mr=o(function(r,t){return n("Array",r)&&n("Array",t)||n("String",r)&&n("String",t)?r.concat(t):null}),hr=o(function(r,t){return r/t}),xr=function(r){return D(function(r,n){return function(r,n){switch(t(n)){case"String":return""+r+n;case"Array":return[r].concat(n);default:throw new Error("prepend doesn't know how to deal with "+t(n))}}(n,r)},v(r),r)},vr=function(r,t){return"string"!=typeof r||/\s/g.test(r)||(r=r.trim().split(".")),D(function(r,t){return O(t,r,{})},t,xr(H(r)))},yr=o(vr),br=o($),Ar=m(O),Ir=o(function(r,t){if(r=null==r?0:Math.min(r,292)){var n=(t+"e").split("e");return+((n=(Math.round(n[0]+"e"+(+n[1]+r))+"e").split("e"))[0]+"e"+(+n[1]-r))}return Math.round(t)}),wr=function(r){return k(r)?D(W,v(k(r)),r):r},kr=function(r){return!r},Sr=function(r){return n("Function",r)},Rr={baseFontSize:16,breakpoints:{mobile:1,tablet:600,laptop:1024,desktop:1600},space:{none:0,xxs:2,xs:4,sm:8,md:16,lg:32,xl:64,xxl:128},fontSizes:{xxs:12,xs:14,sm:16,md:20,lg:20,xl:24,xxl:32}},Tr=rr(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/__.$/.test(r)?r:r+"__"+Math.random().toString(36).substring(8)}),Or=tr(/{!([^}]+)}/g),Fr=function(r,t){return p("String",r)?r.replace(/{!([^}]+)}/g,function(r,n){return G("{!"+n+"}",n,t)}):r},jr=function(r){return h(function(r,t,n){return Ar(n,t,r)},{},r)},Wr=p("Number"),Br=p("Boolean"),Cr=ar(Boolean,lr(0)),Er=nr(Br,Cr),Pr=nr(p("Number"),cr(lr(0))),_r=fr(mr),Lr=P(2,function(r,t){return q(Pr,br(or,r))(t)}),zr=function(r){return Lr(R(dr,_r(r)))},Mr=fr(hr),Hr=P(3,function(r,t,n){var e=function(r,t){var n=parseFloat(r);if(t){var e=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;return"number"!=typeof r&&r.match(e)?[n,r.match(e)[2]]:[r,0]}return Number.isNaN(n)?r:n}(n,!0),o=e[0],i=e[1];return i&&"px"!==i?n:Pr(o)?R(Mr(br(16,r)),Ir(3),dr,_r(t))(o):n}),Dr=Hr(16,"rem"),Nr=Hr(16,"em"),$r=Hr(.16,"%"),Gr=Hr(1,"px"),qr=zr("rem"),Xr=zr("em"),Yr=zr("%"),Vr=zr("ms"),Qr=cr(ar(e,w)),Kr=function(r){return function(t,n){return G(n)(t)(r)}},Ur=(ur=Rr,function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return G(Kr(ur)(r,t),mr("theme.",r))}),Zr=function(r){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return G(Kr(r)(t,n),t)}}({theme:Rr}),Jr=P(2,function(r,t){return R(H,J(function(r){return yr(r,t)}),wr)(r)}),rt=(P(2,function(r,t){return gr(kr,r,!1,t)}),ar(e,lr(!1))),tt=function(r){return!1===r?null:r},nt=function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return q(Sr,function(r){return r.apply(void 0,t)})},et=function(r){return 0===r.indexOf("@")},ot=function(r){if(et(r))return[r];for(var t=[],n=0,e=0,o="",i=0,u=r.length;i<u;i++){var s=r[i];if("("===s)n+=1;else if(")"===s)n-=1;else if("["===s)e+=1;else if("]"===s)e-=1;else if(","===s&&!n&&!e){t.push(o.trim()),o="";continue}o+=s}return t.push(o.trim()),t},it=("production".trim(),"production"!=="production".trim()),ut=function(r){return function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];var o;r&&it&&(o=console).log.apply(o,[r].concat(n))}},st=tr(/[height|width]$/),at=rr(function(r){return pr(r,r,{min:"min-width",max:"max-width",minW:"min-width",maxW:"max-width",minH:"min-height",maxH:"max-height"})}),pt=function(r){return M(r,at,d,J(function(r){var t=r[0],n=r[1];return t=t.replace(/[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g,function(r){return" "+(r.toLowerCase()||r)}).trim().split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/).join("-"),M(n,q(nr(S(st(t)),p("Number")),Nr),sr([[er(!0),S(t)],[er(!1),S("not "+t)],[ir,function(r){return"("+t+":"+r+")"}]]))}),Q(" and "))},ct=R(sr([[nr(p("String"),et),or],[p("Array"),R(J(pt),Q(", "))],[ar(p("String"),p("Number")),R(Nr,function(r){return{screen:!0,minWidth:r}},pt)],[ir,pt]]),function(r){return"@media "+r}),ft=o(function(r,t){return D(function(r,n){var e=T(n,t);return e?s(r,vr(n,e)):r},v(t),r)}),dt=function(r){return n("String",r)},lt=o(N),gt=o(function(r,t){return t.split(r)}),mt={keys:{margin:"space",marginTop:"space",marginBottom:"space",marginLeft:"space",marginRight:"space",padding:"space",paddingTop:"space",paddingBottom:"space",paddingLeft:"space",paddingRight:"space",color:"colors",fontSize:"fontSizes",fontFamily:"fonts",lineHeight:"lineHeights",fontWeight:"fontWeights",letterspace:"letterspaces",maxWidth:"maxWidths",minWidths:"minWidths",height:"heights",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",border:"borders",borderColor:"colors",backgroundColor:"colors",boxShadow:"shadows"},getter:{margin:"pxToRem",marginTop:"pxToRem",marginBottom:"pxToRem",marginLeft:"pxToRem",marginRight:"pxToRem",padding:"pxToRem",paddingTop:"pxToRem",paddingBottom:"pxToRem",paddingLeft:"pxToRem",paddingRight:"pxToRem",fontSize:"px"},functions:{returnAsIs:or,identity:or,propValue:or,self:or,pxToRem:Dr,pxToEm:Nr,pxToPct:$r,px:Gr,ms:Vr,pct:Yr,"%":Yr}},ht=function(r,t){return function(r){return lt(gt(".",r))(mt)}(r)||t},xt=P(3,function(r,t,n){return dt(n)?function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return G(ht(r,t),gt(".",mr("theme.styler.defaults.",r)))}(t+"."+n,"getter"===t?null:n)(r):n});var vt=function(r){var t,n=r.value,o=r.props,i=r.globalOptions,u=r.key,s=n.default,f=n.options,d=function(r,t){var n={};for(var e in r)t.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e]);return n}(n,["default","options"]),l=a(i,f),m=g(ft(g(d),o)),h=void 0,x=void 0;if(w(m)&&e(s))return x;if(w(m)&&!e(s)&&(x=nt(o)(s)),w(m)||(x=M(m,(t=function(r,t){return h=t,M(t,fr(z)(d),xt(o)("functions"),nt(o[t],o),nt(o))},function(r){return gr(rt,t,!1,r)}),tt,br(nt(o)(s)))),!x)return x;var v=z(h,o),y=x,b=dt(x)&&p("Array",v)||p("Object",v);b&&(x=v);var A=function(r){return function(r){var t=r.val,n=r.options,e=r.selector,o=r.props,i=n.key,u=n.getter,s=n.defaultLookup,a=void 0===s||s,p=n.defaultTransform,c=void 0===p||p,f=n.postFn,d=n.preFn,l=n.path,g=a&&xt(o)("keys")(e),m=c&&xt(o)("getter")(e);if(Or(t)&&(t=Fr(t,o)),t&&(g||m||u||f||d||l)){if(d&&(t=M(d,nt(t,o))),I(i=i||l||g||"")&&dt(t)){var h=/^-.+/.test(t);t=h?t.slice(1):t;var x=I(l)?i+"."+t:"theme."+i+"."+t;t=Zr(x,t)(o),t=h?Wr(t)?-1*t:"-"+t:t}(u=u||f||m)&&(t=M(u,xt(o)("functions"),nt(t,o)))}return t}({val:r,options:l,selector:u,props:o})};if(F(x)||j(x)){var k=x,R=Ur("breakpoints")(o);j(R)&&(R=jr(R)),j(k)&&(k=jr(k),F(R)&&(R=jr(D(function(r,t){return c(t,r)},[],R))));var T=function(r){return z(r,R)};return k=Object.keys(k).sort(function(r,t){return T(r)-T(t)}).reduce(function(r,t){return r[t]=k[t],r},{}),Object.keys(k).reduce(function(r,t){var n=T(t);if(e(n)&&"default"!==t)return console.warn("Styler could not find a match for breakPoints in "+u+" style with "+h+"="+JSON.stringify(x)),r;var o=q(nr(S(b),Br),L(Er,S(y),S(null)))(k[t]),i=A(o),s=e(i)?{}:yr("mobile"===t||"0"===t||"default"===t||0===n?u:[ct(n),u],i);return B(r,s)},{})}return A(x)},yt={animationDelay:"ms",animationDuration:"ms",backgroundPosition:"px",backgroundPositionX:"px",backgroundPositionY:"px",backgroundSize:"px",border:"px",borderAfterWidth:"px",borderBeforeWidth:"px",borderBottom:"px",borderBottomLeftRadius:"px",borderBottomRightRadius:"px",borderBottomWidth:"px",borderEndWidth:"px",borderHorizontalSpacing:"px",borderLeft:"px",borderLeftWidth:"px",borderRadius:"px",borderRight:"px",borderRightWidth:"px",borderSpacing:"px",borderStartWidth:"px",borderTop:"px",borderTopLeftRadius:"px",borderTopRightRadius:"px",borderTopWidth:"px",borderVerticalSpacing:"px",borderWidth:"px",bottom:"px",boxShadow:"px",boxShadowBlur:"px",boxShadowSpread:"px",boxShadowX:"px",boxShadowY:"px",columnGap:"px",columnRule:"px",columnRuleWidth:"px",columnWidth:"px",flexBasis:"px",fontLineHeight:"px",fontSize:"px",fontSizeDelta:"px",height:"px",left:"px",letterSpacing:"px",logicalHeight:"px",logicalWidth:"px",margin:"px",marginAfter:"px",marginBefore:"px",marginBottom:"px",marginEnd:"px",marginLeft:"px",marginRight:"px",marginStart:"px",marginTop:"px",maskPositionX:"px",maskPositionY:"px",maskSize:"px",maxHeight:"px",maxLogicalHeight:"px",maxLogicalWidth:"px",maxWidth:"px",minHeight:"px",minLogicalHeight:"px",minLogicalWidth:"px",minWidth:"px",motion:"px",motionOffset:"px",outline:"px",outlineOffset:"px",outlineWidth:"px",padding:"px",paddingAfter:"px",paddingBefore:"px",paddingBottom:"px",paddingEnd:"px",paddingLeft:"px",paddingRight:"px",paddingStart:"px",paddingTop:"px",perspective:"px",perspectiveOriginX:"pct",perspectiveOriginY:"pct",right:"px",shapeMargin:"px",size:"px",textIndent:"px",textShadowBlur:"px",textShadowX:"px",textShadowY:"px",textStroke:"px",textStrokeWidth:"px",top:"px",transformOrigin:"pct",transformOriginX:"pct",transformOriginY:"pct",transformOriginZ:"pct",transitionDelay:"ms",transitionDuration:"ms",verticalAlign:"px",width:"px",wordSpacing:"px"},bt=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r};function At(r,t){var n={};for(var e in r)t.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e]);return n}var It=/(^|\s)(:{1,2})(\w)/g,wt=/&/g,kt=function(r){return et(r)&&function(r){return/@\S*\b(media|supports|keyframes)\b/.test(r)}(r)},St=function(r){return h(function(r,t){return function(r,t){return h(function(r,t){return e(t.value)?r:(""===t.value&&"content"!==t.property&&(t.value=void 0),t.location.concat(t.selectors.join(", ")).reduce(function(r,n,e,o){if(!(n=n.trim()))return"@font-face"===t.property?r[t.property]=r[t.property]?H(r[t.property]).concat(t.value):t.value:r[t.property]=t.value,r;var i={};return e===o.length-1&&(i[t.property]=t.value),r[n]=a(r[n]||{},i),r[n]},r),r)},t,r)}(t,r)},{},r)},Rt=function(r){return"__match"===r},Tt=function(r,t,n,e,o,i,u){var s=t=t.replace(/__.$/,"");if(n=M(n,nt(i),tt),e.length&&function(r){return-1!==r.indexOf("&")}(s=s.replace(It,"$1&$2$3"))&&(s=s.replace(wt,e.pop())),"@font-face"===t)return{location:[],selector:"",property:t,value:n};if(function(r){return/^(MQ|mq)+/.test(r)}(t)){var a=t.replace(/^MQ_|mq_+/,"");t=M(G(a,["theme","breakpoints",t.replace(/^MQ_|mq_+/,"")],i),ct)}if(Rt(t))return r(M(n,h(function(r,t,n){return M(i,L(function(r){return Cr(z(n,r))},R(S(t),nt(i[n],i),nt(i),B(r)),S(r)))},{})),e,o);if(ut(i.debug)("isInlinePattern",u),function(r,t,n){return F(r)&&!w(r)&&!/[~`!@#$%\^&*+=\-\[\]\\';.,\/{}|\\":<>\?\s]/g.test(t)&&!w(t)&&!kt(k(n)||[])&&!Rt(t)}(n,t,e)&&(n=vt({props:i,value:n,key:t,globalOptions:u}),F(n)))return r(n,e,o);if(F(n))return kt(t)?o=o.concat(t):et(t)?(e=[s],o=[]):o.length&&kt(o[o.length-1])&&-1===o[o.length-1].indexOf(" ")?o[o.length-1]+=" "+t:e=e.concat(s),r(n,e,o);if("number"==typeof n&&0!==n){var p=function(r){return yt[r]}(t);p&&(n+=p)}return Or(n)&&(n=Fr(n,i)),{location:o,selector:e.join(" "),property:t,value:n}},Ot=function(){var r=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){return h(function(t,n,e){var o=function(t,n,e,o){return r?t+(""===n?"root":"")+("object"!==(void 0===e?"undefined":i(e))?e:"__"+o):n+t+("object"!==(void 0===e?"undefined":i(e))?e:"__"+o)}(n.property,n.selector,n.value,e);return t[n.location]||(t[n.location]={}),t[n.location][o]?n.selector&&t[n.location][o].selectors.push(n.selector):t[n.location][o]={location:n.location,selectors:n.selector?[n.selector]:[],property:n.property,value:n.value},t},{},t)}},Ft=function r(t){var n=t.obj,e=t.parents,o=void 0===e?[]:e,i=t.location,u=void 0===i?[]:i,s=t.props,a=t.options,c=void 0===a?{}:a;p("Function")(n)&&(n=n(s));var f=n.options,d=At(n,["options"]);c=bt({},c,f);var l=function(t,n,e){return r({obj:t,parents:n,location:e,options:c,props:s})};return ut(s.debug)("gOptions",c),R(g,h(function(r,t){return R(ot,h(function(r,n){var e=Tt(l,n,d[t],o.slice(),u.slice(),s,c);return r.concat(e)},r))(t)},[]))(n)},jt=function r(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(e){var o=void 0;return p("Function")(t)?r(t(e))(e):(o=Array.isArray(t)?t.reduce(function(r,t){return r.concat(Ft({obj:t,props:e}))},[]):function(r){var t=r.obj,n=r.props,e=ut(n.debug),o=t.options,i=At(t,["options"]),u=bt({},n);if(o){var s=o.cx,a=At(o,["cx"]);return s&&(u=Z(s,n)),e("options",a),Ft({obj:bt({},i,{options:a}),props:bt({},u,n)})}return Ft({obj:t,props:n})}({obj:t,props:e}),M(o,Ot(n),St))}},Wt=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return function(n){var e=Ur("breakpoints")(n);return(r=nt(n)(r))?M(n,ft(g(e)),yr("default"),a(t?{options:t}:{}),q(S(Qr(r)),Jr(r))):{}}},Bt=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pxToRem";return function(n){return Wt(r,{key:"space",getter:t})(n)}},Ct=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},Et={getWidth:function(r){return!Wr(r)||r>1?Dr(r):100*r+"%"},getBorder:function(r){return Wr(r)&&r>0?r+"px solid":r},backgroundImage:function(r){return"url("+r+")"},ratio:function(r){return 100*r+"%"}},Pt={width:"returnAsIs",w:"returnAsIs",options:{postFn:Et.getWidth}},_t={color:"returnAsIs",options:{key:"colors"}},Lt={backgroundColor:"returnAsIs",bgColor:"returnAsIs",options:{key:"colors"}},zt={color:_t,backgroundColor:Lt},Mt={width:{size:"returnAsIs",options:{postFn:"px"}}},Ht={height:{size:"returnAsIs",options:{postFn:"px"}}},Dt=Ct({},Mt,Ht),Nt={flexBasis:"returnAsIs",options:{postFn:Et.getWidth}},$t={gridGap:"returnAsIs",gap:"returnAsIs",options:{postFn:Gr,key:"space"}},Gt={border:"returnAsIs",bd:"returnAsIs",options:{key:"borders",postFn:Et.getBorder}},qt={borderTop:"returnAsIs",bdT:"returnAsIs",options:{key:"borders",postFn:Et.getBorder}},Xt={borderRight:"returnAsIs",bdR:"returnAsIs",options:{key:"borders",postFn:Et.getBorder}},Yt={borderBottom:"returnAsIs",bdB:"returnAsIs",options:{key:"borders",postFn:Et.getBorder}},Vt={borderLeft:"returnAsIs",bdL:"returnAsIs",options:{key:"borders",postFn:Et.getBorder}},Qt={border:Gt,borderLeft:Vt,borderBottom:Yt,borderRight:Xt,borderTop:qt},Kt={padding:"returnAsIs",p:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Ut={paddingLeft:"returnAsIs",pl:"returnAsIs",px:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Zt={paddingRight:"returnAsIs",pr:"returnAsIs",px:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Jt={paddingTop:"returnAsIs",pt:"returnAsIs",py:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},rn={paddingBottom:"returnAsIs",pb:"returnAsIs",py:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},tn={margin:"returnAsIs",m:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},nn={marginLeft:"returnAsIs",ml:"returnAsIs",mx:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},en={marginRight:"returnAsIs",mr:"returnAsIs",mx:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},on={marginTop:"returnAsIs",mt:"returnAsIs",my:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},un={marginBottom:"returnAsIs",mb:"returnAsIs",my:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},sn={padding:Kt,paddingLeft:Ut,paddingRight:Zt,paddingTop:Jt,paddingBottom:rn,margin:tn,marginLeft:nn,marginRight:en,marginTop:on,marginBottom:un};r.default=jt,r.styler=jt,r.cx=Z,r.toMq=ct,r.getThemeAttr=Ur,r.pxTo=Hr,r.pxToRem=Dr,r.pxToEm=Nr,r.pxToPct=$r,r.px=Gr,r.rem=qr,r.em=Xr,r.pct=Yr,r.ms=Vr,r.uniqifyKeys=Tr,r.mergeStyles=function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return wr(t)},r.mergeStylesWithUniqKeys=function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.reduce(function(r,t){return a(r,Tr(t))},{})},r.spaceProp=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pxToRem";return function(n){return r?jt(Bt(r,t))(n):{}}},r.spacePropDef=Bt,r.BPPropDef=Wt,r.BPProp=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return function(n){return r?jt(Wt(r,t))(n):{}}},r.alignContent={alignContent:"returnAsIs"},r.alignItems={alignItems:"returnAsIs"},r.alignSelf={alignSelf:"returnAsIs"},r.background={background:"returnAsIs",bg:"returnAsIs"},r.backgroundColor=Lt,r.backgroundImage={backgroundImage:"returnAsIs",bgImage:"returnAsIs",options:{postFn:function(r){return"url("+r+")"}}},r.backgroundPosition={backgroundPosition:"returnAsIs",bgPosition:"returnAsIs"},r.backgroundRepeat={backgroundRepeat:"returnAsIs",bgRepeat:"returnAsIs"},r.backgroundSize={backgroundSize:"returnAsIs",bgSize:"returnAsIs"},r.border=Gt,r.borderBottom=Yt,r.borderColor={borderColor:"returnAsIs",bdC:"returnAsIs",options:{key:"colors"}},r.borderLeft=Vt,r.borderRadius={borderRadius:"returnAsIs",bdRs:"returnAsIs",options:{key:"radii",postFn:"px"}},r.borderRight=Xt,r.borderTop=qt,r.borders_c=Qt,r.bottom={bottom:"returnAsIs",options:{postFn:"px"}},r.boxShadow={boxShadow:"returnAsIs",bxSh:"returnAsIs",options:{key:"shadows"}},r.color=_t,r.colors=zt,r.display={display:"returnAsIs"},r.flex={flex:"returnAsIs"},r.flexDirection={flexDirection:"returnAsIs",direction:"returnAsIs",fxdirection:"returnAsIs",row:"row",column:"column",rowReverse:"rowReverse",columnReverse:"columnReverse"},r.flexBasis=Nt,r.flexWrap={flexWrap:"returnAsIs",fxWrap:"returnAsIs",wrap:"wrap",nowrap:"nowrap",wrapReverse:"wrapReverse"},r.fontFamily={fontFamily:"returnAsIs",font:"returnAsIs",options:{key:"fonts"}},r.fontSize={fontSize:"returnAsIs",f:"returnAsIs",options:{postFn:"px",key:"fontSizes"}},r.fontWeight={fontWeight:"returnAsIs",options:{key:"fontWeights"}},r.getters=Et,r.gridArea={gridArea:"returnAsIs"},r.gridColumnStart={gridColumnStart:"returnAsIs"},r.gridColumnEnd={gridColumnEnd:"returnAsIs"},r.gridRowStart={gridRowStart:"returnAsIs"},r.gridRowEnd={gridRowEnd:"returnAsIs"},r.gridAutoColumns={gridAutoColumns:"returnAsIs",autoColumns:"returnAsIs"},r.gridAutoFlow={gridAutoFlow:"returnAsIs",row:"row",column:"column",dense:"dense"},r.gridAutoRows={gridAutoRows:"returnAsIs",autoRows:"returnAsIs"},r.gridColumn={gridColumn:"returnAsIs"},r.gridColumnGap={gridColumnGap:"returnAsIs",options:{postFn:"px",key:"space"}},r.gridGap=$t,r.gridRow={gridRow:"returnAsIs"},r.gridTemplate={gridTemplate:"returnAsIs",template:"returnAsIs"},r.gridTemplateAreas={gridTemplateAreas:"returnAsIs",areas:"returnAsIs"},r.gridTemplateColumns={gridTemplateColumns:"returnAsIs",columns:"returnAsIs"},r.gridTemplateRows={gridTemplateRows:"returnAsIs",rows:"returnAsIs"},r.height={height:"returnAsIs",options:{key:"heights",postFn:"pxToRem"}},r.justifyContent={justifyContent:"returnAsIs",justify:"returnAsIs"},r.justifySelf={justifySelf:"returnAsIs"},r.left={left:"returnAsIs",options:{postFn:"px"}},r.letterSpacing={letterSpacing:"returnAsIs",options:{key:"letterSpacings",postFn:"px"}},r.lineHeight={lineHeight:"returnAsIs",options:{key:"lineHeights"}},r.margin=tn,r.marginBottom=un,r.marginLeft=nn,r.marginRight=en,r.marginTop=on,r.maxHeight={maxHeight:"returnAsIs",options:{key:"maxHeights",postFn:"px"}},r.maxWidth={maxWidth:"returnAsIs",options:{key:"maxWidths",postFn:"px"}},r.minHeight={minHeight:"returnAsIs",options:{key:"minHeights",postFn:"px"}},r.minWidth={minWidth:"returnAsIs",options:{key:"minWidths",postFn:"px"}},r.order={order:"returnAsIs"},r.padding=Kt,r.paddingBottom=rn,r.paddingLeft=Ut,r.paddingRight=Zt,r.paddingTop=Jt,r.position={position:"returnAsIs",static:"static",absolute:"absolute",fixed:"fixed",relative:"relative",sticky:"sticky"},r.ratio_c={height:0,paddingBottom:{ratio:"returnAsIs",options:{postFn:function(r){return 100*r+"%"}}}},r.right={right:"returnAsIs",options:{postFn:"px"}},r.size_c=Dt,r.size_height_c=Ht,r.size_width_c=Mt,r.space=sn,r.textAlign={textAlign:"returnAsIs"},r.top={top:"returnAsIs",options:{postFn:"px"}},r.width=Pt,r.zIndex={zIndex:"returnAsIs"},Object.defineProperty(r,"__esModule",{value:!0})});


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isTransformer;
function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
}

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path__ = __webpack_require__(190);



/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */

var prop = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function prop(p, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* default */])([p], obj);
});
/* harmony default export */ __webpack_exports__["a"] = (prop);

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__(164);





/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (a -> b -> c) -> (a -> b) -> (a -> c)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
var ap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } :
  // else
  Object(__WEBPACK_IMPORTED_MODULE_2__internal_reduce__["a" /* default */])(function (acc, f) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(acc, Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(f, applyX));
  }, [], applyF);
});
/* harmony default export */ __webpack_exports__["a"] = (ap);

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
/* harmony default export */ __webpack_exports__["a"] = (Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
});

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(162);



/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curry = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function curry(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(fn.length, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (curry);

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_makeFlat__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xchain__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__(164);






/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
var chain = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['fantasy-land/chain', 'chain'], __WEBPACK_IMPORTED_MODULE_3__internal_xchain__["a" /* default */], function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }
  return Object(__WEBPACK_IMPORTED_MODULE_2__internal_makeFlat__["a" /* default */])(false)(Object(__WEBPACK_IMPORTED_MODULE_4__map__["a" /* default */])(fn, monad));
}));
/* harmony default export */ __webpack_exports__["a"] = (chain);

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */
var type = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
/* harmony default export */ __webpack_exports__["a"] = (type);

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(217);



/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slice__ = __webpack_require__(168);




/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('tail', /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(1, Infinity)));
/* harmony default export */ __webpack_exports__["a"] = (tail);

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArray__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isFunction__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isString__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toString__ = __webpack_require__(199);






/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
var concat = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function concat(a, b) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(a)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(b)) {
      return a.concat(b);
    }
    throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(b) + ' is not an array');
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_3__internal_isString__["a" /* default */])(a)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_3__internal_isString__["a" /* default */])(b)) {
      return a + b;
    }
    throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(b) + ' is not a string');
  }
  if (a != null && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isFunction__["a" /* default */])(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isFunction__["a" /* default */])(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
/* harmony default export */ __webpack_exports__["a"] = (concat);

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isObject__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_xfilter__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys__ = __webpack_require__(170);








/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['filter'], __WEBPACK_IMPORTED_MODULE_5__internal_xfilter__["a" /* default */], function (pred, filterable) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__internal_isObject__["a" /* default */])(filterable) ? Object(__WEBPACK_IMPORTED_MODULE_4__internal_reduce__["a" /* default */])(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, Object(__WEBPACK_IMPORTED_MODULE_6__keys__["a" /* default */])(filterable)) :
  // else
  Object(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(pred, filterable);
}));
/* harmony default export */ __webpack_exports__["a"] = (filter);

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _filter;
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isObject;
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adjust__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__always__ = __webpack_require__(188);




/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
var update = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function update(idx, x, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__adjust__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__always__["a" /* default */])(x), idx, list);
});
/* harmony default export */ __webpack_exports__["a"] = (update);

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtake__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(168);





/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
var take = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['take'], __WEBPACK_IMPORTED_MODULE_2__internal_xtake__["a" /* default */], function take(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(0, n < 0 ? Infinity : n, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (take);

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_identity__ = __webpack_require__(260);



/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
var identity = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_identity__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (identity);

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _identity;
function _identity(x) {
  return x;
}

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uniqBy__ = __webpack_require__(314);



/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
var uniq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__uniqBy__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (uniq);

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objectAssign__ = __webpack_require__(506);


/* harmony default export */ __webpack_exports__["a"] = (typeof Object.assign === 'function' ? Object.assign : __WEBPACK_IMPORTED_MODULE_0__objectAssign__["a" /* default */]);

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(163);



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
var mergeWithKey = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, l)) {
      result[k] = Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, r) && !Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (mergeWithKey);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(349);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(184) && !__webpack_require__(185)(function () {
  return Object.defineProperty(__webpack_require__(266)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(183);
var document = __webpack_require__(173).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(177);
var toIObject = __webpack_require__(186);
var arrayIndexOf = __webpack_require__(351)(false);
var IE_PROTO = __webpack_require__(228)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(269);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 269 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(356);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(368);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(204);
var $export = __webpack_require__(180);
var redefine = __webpack_require__(272);
var hide = __webpack_require__(181);
var Iterators = __webpack_require__(233);
var $iterCreate = __webpack_require__(360);
var setToStringTag = __webpack_require__(235);
var getPrototypeOf = __webpack_require__(363);
var ITERATOR = __webpack_require__(187)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(181);


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(267);
var hiddenKeys = __webpack_require__(230).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(206);
var createDesc = __webpack_require__(203);
var toIObject = __webpack_require__(186);
var toPrimitive = __webpack_require__(225);
var has = __webpack_require__(177);
var IE8_DOM_DEFINE = __webpack_require__(265);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(184) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(194);

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__(399);

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__(400);

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(241);

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPositionY: 0,
    startPositionY: 0,
    targetPositionY: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    deltaTop: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return Math.max(containerElement.scrollHeight, containerElement.offsetHeight, containerElement.clientHeight);
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.deltaTop = Math.round(data.targetPositionY - data.startPositionY);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPositionY = data.startPositionY + Math.ceil(data.deltaTop * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    data.containerElement.scrollTop = data.currentPositionY;
  } else {
    window.scrollTo(0, data.currentPositionY);
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(y, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  _cancelEvents2.default.subscribe(function () {
    options.data.cancel = true;
  });

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPositionY = currentPositionY(options);
  options.data.targetPositionY = options.absolute ? y : y + options.data.startPositionY;

  if (options.data.startPositionY === options.data.targetPositionY) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPositionY);
    }
    return;
  }

  options.data.deltaTop = Math.round(options.data.targetPositionY - options.data.startPositionY);

  options.data.duration = functionWrapper(options.duration)(options.data.deltaTop);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toY, options) {
  animateTopScroll(toY, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toY, options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(currentPositionY(options) + toY, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(240);

var _utils = __webpack_require__(194);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.pushHash(to);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports.default = scrollHash;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(207);

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
          this.registerElems(nextProps.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(158);



/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
var adjust = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});
/* harmony default export */ __webpack_exports__["a"] = (adjust);

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _xwrap;
var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);



/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function bind(fn, thisObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (bind);

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has__ = __webpack_require__(163);


var toString = Object.prototype.toString;
var _isArguments = function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__has__["a" /* default */])('callee', x);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_isArguments);

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
var and = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function and(a, b) {
  return a && b;
});
/* harmony default export */ __webpack_exports__["a"] = (and);

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xany__ = __webpack_require__(284);




/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
var any = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['any'], __WEBPACK_IMPORTED_MODULE_2__internal_xany__["a" /* default */], function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));
/* harmony default export */ __webpack_exports__["a"] = (any);

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(161);




var XAny = /*#__PURE__*/function () {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAny.prototype['@@transducer/result'] = function (result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return XAny;
}();

var _xany = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xany(f, xf) {
  return new XAny(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xany);

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
var apply = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function apply(fn, args) {
  return fn.apply(this, args);
});
/* harmony default export */ __webpack_exports__["a"] = (apply);

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(170);



/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
var values = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function values(obj) {
  var props = Object(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
/* harmony default export */ __webpack_exports__["a"] = (values);

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isInteger__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assoc__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isNil__ = __webpack_require__(288);







/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
var assocPath = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = !Object(__WEBPACK_IMPORTED_MODULE_5__isNil__["a" /* default */])(obj) && Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(idx, obj) ? obj[idx] : Object(__WEBPACK_IMPORTED_MODULE_3__internal_isInteger__["a" /* default */])(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_3__internal_isInteger__["a" /* default */])(idx) && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return Object(__WEBPACK_IMPORTED_MODULE_4__assoc__["a" /* default */])(idx, val, obj);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (assocPath);

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
var isNil = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function isNil(x) {
  return x == null;
});
/* harmony default export */ __webpack_exports__["a"] = (isNil);

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ap__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__curryN__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__(164);






/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
var liftN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function liftN(arity, fn) {
  var lifted = Object(__WEBPACK_IMPORTED_MODULE_3__curryN__["a" /* default */])(arity, fn);
  return Object(__WEBPACK_IMPORTED_MODULE_3__curryN__["a" /* default */])(arity, function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__ap__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_4__map__["a" /* default */])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (liftN);

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _makeFlat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike__ = __webpack_require__(212);


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike__["a" /* default */])(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _clone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloneRegExp__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(250);



/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (Object(__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */])(value)) {
    case 'Object':
      return copy({});
    case 'Array':
      return copy([]);
    case 'Date':
      return new Date(value.valueOf());
    case 'RegExp':
      return Object(__WEBPACK_IMPORTED_MODULE_0__cloneRegExp__["a" /* default */])(value);
    default:
      return value;
  }
}

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _cloneRegExp;
function _cloneRegExp(pattern) {
                                  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
}

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
var not = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function not(a) {
  return !a;
});
/* harmony default export */ __webpack_exports__["a"] = (not);

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipe;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_pipe__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tail__ = __webpack_require__(252);





/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arguments[0].length, Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_pipe__["a" /* default */], arguments[0], Object(__WEBPACK_IMPORTED_MODULE_3__tail__["a" /* default */])(arguments)));
}

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = composeK;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chain__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compose__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(164);




/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return Object(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__chain__["a" /* default */], init)), last);
}

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeP;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_pipeP__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tail__ = __webpack_require__(252);





/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arguments[0].length, Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_pipeP__["a" /* default */], arguments[0], Object(__WEBPACK_IMPORTED_MODULE_3__tail__["a" /* default */])(arguments)));
}

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _indexOf;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__equals__ = __webpack_require__(166);


function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__equals__["a" /* default */])(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
var identical = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function identical(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});
/* harmony default export */ __webpack_exports__["a"] = (identical);

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _complement;
function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nAry__ = __webpack_require__(214);




/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      }
 *
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *        return R.join('\n', instructions);
 *      };
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad);
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 *
 *      console.log(salad.recipe());
 *      // Add a dollop of Mayonnaise
 *      // Add a dollop of Potato Chips
 *      // Add a dollop of Ketchup
 */
var constructN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function () {
      return new Fn();
    };
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1__curry__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__nAry__["a" /* default */])(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (constructN);

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__max__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pluck__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reduce__ = __webpack_require__(171);







/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
var converge = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function converge(after, fns) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_4__pluck__["a" /* default */])('length', fns)), function () {
    var args = arguments;
    var context = this;
    return after.apply(context, Object(__WEBPACK_IMPORTED_MODULE_1__internal_map__["a" /* default */])(function (fn) {
      return fn.apply(context, args);
    }, fns));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (converge);

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
var defaultTo = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});
/* harmony default export */ __webpack_exports__["a"] = (defaultTo);

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
var difference = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(first[idx], second) && !Object(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (difference);

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(158);



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
var differenceWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, first[idx], second) && !Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (differenceWith);

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
var dissoc = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (dissoc);

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
var remove = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (remove);

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdrop__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(168);





/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
var drop = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['drop'], __WEBPACK_IMPORTED_MODULE_2__internal_xdrop__["a" /* default */], function drop(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(Math.max(0, n), Infinity, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (drop);

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(161);



var XDropRepeatsWith = /*#__PURE__*/function () {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropRepeatsWith.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return XDropRepeatsWith;
}();

var _xdropRepeatsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropRepeatsWith(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropRepeatsWith);

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__last__ = __webpack_require__(310);





/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
var dropRepeatsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__["a" /* default */], function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(Object(__WEBPACK_IMPORTED_MODULE_3__last__["a" /* default */])(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));
/* harmony default export */ __webpack_exports__["a"] = (dropRepeatsWith);

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nth__ = __webpack_require__(200);


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
var last = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__nth__["a" /* default */])(-1);
/* harmony default export */ __webpack_exports__["a"] = (last);

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
var or = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function or(a, b) {
  return a || b;
});
/* harmony default export */ __webpack_exports__["a"] = (or);

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArguments__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isObject__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_isString__ = __webpack_require__(197);






/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
var empty = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(x) ? [] : Object(__WEBPACK_IMPORTED_MODULE_4__internal_isString__["a" /* default */])(x) ? '' : Object(__WEBPACK_IMPORTED_MODULE_3__internal_isObject__["a" /* default */])(x) ? {} : Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArguments__["a" /* default */])(x) ? function () {
    return arguments;
  }() :
  // else
  void 0;
});
/* harmony default export */ __webpack_exports__["a"] = (empty);

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop__ = __webpack_require__(307);



/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
var takeLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function takeLast(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__drop__["a" /* default */])(n >= 0 ? xs.length - n : 0, xs);
});
/* harmony default export */ __webpack_exports__["a"] = (takeLast);

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_Set__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);



/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
var uniqBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function uniqBy(fn, list) {
  var set = new __WEBPACK_IMPORTED_MODULE_0__internal_Set__["a" /* default */]();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (uniqBy);

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
var objOf = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});
/* harmony default export */ __webpack_exports__["a"] = (objOf);

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
var is = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});
/* harmony default export */ __webpack_exports__["a"] = (is);

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converge__ = __webpack_require__(301);



/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
var juxt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function juxt(fns) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__converge__["a" /* default */])(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
/* harmony default export */ __webpack_exports__["a"] = (juxt);

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isNumber__ = __webpack_require__(319);



/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
var length = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function length(list) {
  return list != null && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(list.length) ? list.length : NaN;
});
/* harmony default export */ __webpack_exports__["a"] = (length);

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isNumber;
function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sum__ = __webpack_require__(321);



/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
var mean = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function mean(list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__sum__["a" /* default */])(list) / list.length;
});
/* harmony default export */ __webpack_exports__["a"] = (mean);

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(171);



/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
var sum = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */], 0);
/* harmony default export */ __webpack_exports__["a"] = (sum);

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_has__ = __webpack_require__(163);




/**
 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoize
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoizeWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function memoizeWith(mFn, fn) {
  var cache = {};
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    var key = mFn.apply(this, arguments);
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__internal_has__["a" /* default */])(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});
/* harmony default export */ __webpack_exports__["a"] = (memoizeWith);

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
var multiply = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function multiply(a, b) {
  return a * b;
});
/* harmony default export */ __webpack_exports__["a"] = (multiply);

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


// `Identity` is a functor that holds a single value, where `map` simply
// transforms the held value with the provided function.
var Identity = function (x) {
  return { value: x, map: function (f) {
      return Identity(f(x));
    } };
};

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
var over = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function over(lens, f, x) {
  // The value returned by the getter function is first transformed with `f`,
  // then set as the value of an `Identity`. This is then mapped over with the
  // setter function of the lens.
  return lens(function (y) {
    return Identity(f(y));
  })(x).value;
});
/* harmony default export */ __webpack_exports__["a"] = (over);

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _createPartialApplicator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arity__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(154);



function _createPartialApplicator(concat) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (fn, args) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__arity__["a" /* default */])(Math.max(0, fn.length - args.length), function () {
      return fn.apply(this, concat(args, arguments));
    });
  });
}

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
var pickAll = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (pickAll);

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);



/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
var prepend = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function prepend(el, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])([el], list);
});
/* harmony default export */ __webpack_exports__["a"] = (prepend);

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(162);



/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
var useWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function useWith(fn, transformers) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(transformers.length, function () {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (useWith);

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *      //    -               -2
 *      //   / \              / \
 *      //  1   -            1   3
 *      //     / \              / \
 *      //    2   -     ==>    2  -1
 *      //       / \              / \
 *      //      3   -            3   4
 *      //         / \              / \
 *      //        4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
var reduceRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});
/* harmony default export */ __webpack_exports__["a"] = (reduceRight);

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
var times = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
/* harmony default export */ __webpack_exports__["a"] = (times);

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ap__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prepend__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduceRight__ = __webpack_require__(329);






/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
var sequence = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ? traversable.sequence(of) : Object(__WEBPACK_IMPORTED_MODULE_4__reduceRight__["a" /* default */])(function (x, acc) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__ap__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__prepend__["a" /* default */], x), acc);
  }, of([]), traversable);
});
/* harmony default export */ __webpack_exports__["a"] = (sequence);

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);



/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
var uniqWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (uniqWith);

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(163);



/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.whereEq
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
var where = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function where(spec, testObj) {
  for (var prop in spec) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});
/* harmony default export */ __webpack_exports__["a"] = (where);

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Box = __webpack_require__(178);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Box2.default, _styles.maxWidth, {
  displayName: "Container",
  defaultProps: {
    px: "3",
    mx: "auto",
    maxWidth: 1024
  },
  withProps: {}
});

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)("a", _styles.color, {
  displayName: "Link",
  defaultProps: {
    color: "blue"
  },
  withProps: {}
});

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _defineProperty;
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

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.color, _styles.fontSize, _styles.fontWeight, _styles.borderRadius, {
  WebkitFontSmoothing: 'antialiased',
  display: 'inline-block',
  verticalAlign: 'middle',
  boxSizing: 'border-box'
});
exports.default = (0, _sys2.default)('div', styles, {
  displayName: 'Badge',
  defaultProps: {
    fontSize: '0',
    px: '2',
    py: '1',
    mx: '1',
    color: 'white',
    bg: 'blue',
    fontWeight: 'bold',
    borderRadius: '2'
  },
  withProps: {}
});

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Button = __webpack_require__(224);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Button2.default, _extends({}, _styles.focus), {
  displayName: "ButtonT",
  defaultProps: {
    bg: "transparent",
    color: "inherit",
    rootEl: "button",
    focus: {
      outline: "none",
      boxShadow: "none",
      color: "blue"
    }
  },
  withProps: {
    focus: {
      outline: "none",
      boxShadow: "none",
      color: "blue"
    }
  }
});

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.fontSize, _styles.fontFamily, _styles.space, _styles.color);
exports.default = (0, _sys2.default)("pre", styles, {
  displayName: "Code",
  defaultProps: {
    fontSize: "1",
    fontFamily: "mono"
  },
  withProps: {}
});

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrow = encodeURI("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewbox='0 0 32 32' fill='currentcolor'> <path d='M0 6 L32 6 L16 28 z' /> </svg>");

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.fontSize, _styles.lineHeight, _styles.width, _styles.color, _styles.borders, _styles.boxShadow, _styles.borderColor, _styles.borderRadius, {
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  appearance: "none",

  background: "url(\"" + arrow + "\")",
  backgroundPosition: "calc(100% - 8px) center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "8px 8px",
  "&:disabled": {
    opacity: 1 / 4
  },
  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px {!theme.colors.blue}"
  }
});

exports.default = (0, _sys2.default)("select", styles, {
  displayName: "Card",
  defaultProps: {
    m: "0",
    px: "1",
    py: "2",
    width: 1,
    border: "0",
    borderColor: "gray",
    boxShadow: "1",
    borderRadius: "2",
    color: "inherit",
    bg: "transparent"
  },
  withProps: {}
});

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sticky = exports.Fixed = exports.Absolute = exports.Relative = exports.Position = exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.position, _styles.space, _styles.color, _styles.zIndex, _styles.top, _styles.right, _styles.bottom, _styles.left);

var Position = exports.Position = (0, _sys2.default)("div", styles, {
  displayName: "Position",
  defaultProps: {},
  withProps: {}
});

var Relative = exports.Relative = (0, _sys2.default)(Position, {}, {
  displayName: "Relative",
  defaultProps: { position: "relative" },
  withProps: {}
});

var Absolute = exports.Absolute = (0, _sys2.default)(Position, {}, {
  displayName: "Absolute",
  defaultProps: { position: "absolute" },
  withProps: {}
});

var Fixed = exports.Fixed = (0, _sys2.default)(Position, {}, {
  displayName: "Fixed",
  defaultProps: { position: "fixed" },
  withProps: {}
});

var Sticky = exports.Sticky = (0, _sys2.default)(Position, {}, {
  displayName: "Sticky",
  defaultProps: { position: "sticky" },
  withProps: {}
});

exports.default = Position;

/***/ }),
/* 342 */,
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-left: 30px;\n  width: 20px;\n  opacity: 0.7;\n  margin-top: -5px;\n  &:hover {\n    opacity: 0.9;\n  }\n'], ['\n  margin-left: 30px;\n  width: 20px;\n  opacity: 0.7;\n  margin-top: -5px;\n  &:hover {\n    opacity: 0.9;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: none;\n  position: absolute;\n  left: 0;\n  color: inherit;\n'], ['\n  display: none;\n  position: absolute;\n  left: 0;\n  color: inherit;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  margin-left: -50px;\n  padding-left: 50px;\n\n  &:hover .Anchor {\n    display: inline-block;\n  }\n'], ['\n  position: relative;\n  margin-left: -50px;\n  padding-left: 50px;\n\n  &:hover .Anchor {\n    display: inline-block;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(56);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _Link = __webpack_require__(344);

var _Link2 = _interopRequireDefault(_Link);

var _reactScroll = __webpack_require__(396);

var _futils = __webpack_require__(195);

var _Code = __webpack_require__(404);

var _Code2 = _interopRequireDefault(_Code);

var _Heading = __webpack_require__(242);

var _Heading2 = _interopRequireDefault(_Heading);

var _FancyBox = __webpack_require__(613);

var _FancyBox2 = _interopRequireDefault(_FancyBox);

var _Box = __webpack_require__(178);

var _Box2 = _interopRequireDefault(_Box);

var _Grid = __webpack_require__(614);

var _Grid2 = _interopRequireDefault(_Grid);

var _Container = __webpack_require__(334);

var _Container2 = _interopRequireDefault(_Container);

var _Link3 = __webpack_require__(335);

var _Link4 = _interopRequireDefault(_Link3);

var _Root = __webpack_require__(615);

var _Root2 = _interopRequireDefault(_Root);

var _Examples = __webpack_require__(616);

var ex = _interopRequireWildcard(_Examples);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var examples = {};
Object.keys(ex).sort().forEach(function (key) {
  examples[key] = ex[key];
});

var AnchorIcon = (0, _reactEmotion2.default)(_Link2.default)(_templateObject);
var Anchor = (0, _reactEmotion2.default)('a')(_templateObject2);

var DemoRoot = (0, _reactEmotion2.default)(_Root2.default)({
  display: 'flex',
  alignItems: 'flex-start',
  height: '100%'
});

var Main = (0, _reactEmotion2.default)(_Box2.default)({
  flex: '1 1 auto',
  height: '100%',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch'
});

var SideBar = (0, _reactEmotion2.default)(_Box2.default)({
  flex: 'none',
  height: '99vh',
  '&:hover': {
    overflowY: 'auto'
  },
  WebkitOverflowScrolling: 'touch',
  borderRight: '1px solid #f6f6f6',
  position: 'fixed'
});

var NavItem = (0, _reactEmotion2.default)(_reactScroll.Link)({
  cursor: 'pointer',
  display: 'block',
  paddingLeft: '8px',
  paddingRight: '8px',
  paddingTop: '4px',
  paddingBottom: '4px',
  fontSize: '12px',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'inherit',
  WebkitUserSelect: 'none',
  userSelect: 'none',
  '&.active': {
    color: 'white',
    backgroundColor: 'black'
  },
  '&:hover': {
    color: 'white',
    backgroundColor: 'black'
  }
});
// NavLink

var InvisibleAnchor = (0, _reactEmotion2.default)('div')({
  position: 'relative',
  display: 'block',
  visibility: 'hidden',
  height: 0,
  top: '-3.8rem'
});

var AnchorHeader = (0, _reactEmotion2.default)(_Heading2.default)(_templateObject3);

var removeDemo = function removeDemo(x) {
  return x.replace('Demo', '');
};

// const examples= pipe(keys, map(objOf("name")))(examples)

var Example = function Example(_ref) {
  var name = _ref.name,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['name', 'children']);

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      AnchorHeader,
      null,
      _react2.default.createElement(_reactScroll.Element, { name: name.toLowerCase() }),
      _react2.default.createElement(InvisibleAnchor, { 'aria-hidden': 'true', id: name.toLowerCase() }),
      _react2.default.createElement(
        Anchor,
        { className: 'Anchor', href: '#' + name.toLowerCase() },
        _react2.default.createElement(AnchorIcon, null)
      ),
      removeDemo(name)
    ),
    _react2.default.createElement(
      _FancyBox2.default,
      null,
      children
    )
  );
};

exports.Example = Example;

var SideNav = function (_React$Component) {
  _inherits(SideNav, _React$Component);

  function SideNav() {
    _classCallCheck(this, SideNav);

    return _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).apply(this, arguments));
  }

  _createClass(SideNav, [{
    key: 'render',
    value: function render() {
      var examples = this.props.examples;


      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _Link4.default,
          { href: '/' },
          _react2.default.createElement(_Code2.default, { size: '52px' })
        ),
        examples.map(function (example) {
          return _react2.default.createElement(
            NavItem,
            { key: example, to: example.toLowerCase() },
            removeDemo(example)
          );
        })
      );
    }
  }]);

  return SideNav;
}(_react2.default.Component);

SideNav.defaultProps = {
  title: 'Styler',
  examples: [{ name: 'navlink' }]
};

exports.default = function () {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _Container2.default,
      { maxWidth: '1280px', pb: '6' },
      _react2.default.createElement(
        DemoRoot,
        null,
        _react2.default.createElement(
          SideBar,
          { width: ['120px', '192px'] },
          _react2.default.createElement(SideNav, { title: 'rebass-styler', examples: Object.keys(examples) })
        ),
        _react2.default.createElement(
          Main,
          { ml: ['120px', '192px'] },
          _react2.default.createElement(
            _Grid2.default,
            null,
            _react2.default.createElement(
              _FancyBox2.default,
              null,
              (0, _futils.mapValuesWithValueKey)(function (_ref2, id) {
                var _ref3 = _slicedToArray(_ref2, 2),
                    name = _ref3[0],
                    Cmp = _ref3[1];

                return _react2.default.createElement(
                  Example,
                  { key: id, name: name },
                  _react2.default.createElement(Cmp, null)
                );
              }, (0, _futils.toPairs)(examples))
            )
          )
        )
      )
    )
  );
};

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(202);




var enhance = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["setDisplayName"])('Link2'), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["defaultProps"])({ height: 24, width: 24 }), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (props) {
  return {
    children: props.title != null ? [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'title',
      { key: 'Link2-title' },
      props.title
    ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3M8 12h8', key: 'k0' })] : [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3M8 12h8', key: 'k0' })],
    viewBox: '0 0 24 24',
    height: props.height !== undefined ? props.height : props.size,
    width: props.width !== undefined ? props.width : props.size,
    'aria-hidden': props.title == null ? 'true' : undefined,
    focusable: 'false',
    role: props.title != null ? 'img' : undefined,
    "fill": "none",
    "stroke": "currentColor",
    "strokeLinecap": "round",
    "strokeLinejoin": "round"
  };
}));

/* harmony default export */ __webpack_exports__["default"] = (enhance(Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["default"])('svg')({
  display: 'inline-block',
  verticalAlign: 'middle',
  overflow: 'hidden'
}, function (props) {
  return props.css;
})));

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(346);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(347), __esModule: true };

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(348);
module.exports = __webpack_require__(172).Object.assign;


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(180);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(350) });


/***/ }),
/* 349 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(193);
var gOPS = __webpack_require__(231);
var pIE = __webpack_require__(206);
var toObject = __webpack_require__(232);
var IObject = __webpack_require__(268);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(185)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(186);
var toLength = __webpack_require__(352);
var toAbsoluteIndex = __webpack_require__(353);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(227);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(227);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(270);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(357), __esModule: true };

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(358);
__webpack_require__(364);
module.exports = __webpack_require__(236).f('iterator');


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(359)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(271)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(227);
var defined = __webpack_require__(226);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(234);
var descriptor = __webpack_require__(203);
var setToStringTag = __webpack_require__(235);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(181)(IteratorPrototype, __webpack_require__(187)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(182);
var anObject = __webpack_require__(192);
var getKeys = __webpack_require__(193);

module.exports = __webpack_require__(184) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(173).document;
module.exports = document && document.documentElement;


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(177);
var toObject = __webpack_require__(232);
var IE_PROTO = __webpack_require__(228)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(365);
var global = __webpack_require__(173);
var hide = __webpack_require__(181);
var Iterators = __webpack_require__(233);
var TO_STRING_TAG = __webpack_require__(187)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(366);
var step = __webpack_require__(367);
var Iterators = __webpack_require__(233);
var toIObject = __webpack_require__(186);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(271)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 366 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 367 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(369), __esModule: true };

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(370);
__webpack_require__(375);
__webpack_require__(376);
__webpack_require__(377);
module.exports = __webpack_require__(172).Symbol;


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(173);
var has = __webpack_require__(177);
var DESCRIPTORS = __webpack_require__(184);
var $export = __webpack_require__(180);
var redefine = __webpack_require__(272);
var META = __webpack_require__(371).KEY;
var $fails = __webpack_require__(185);
var shared = __webpack_require__(229);
var setToStringTag = __webpack_require__(235);
var uid = __webpack_require__(205);
var wks = __webpack_require__(187);
var wksExt = __webpack_require__(236);
var wksDefine = __webpack_require__(237);
var enumKeys = __webpack_require__(372);
var isArray = __webpack_require__(373);
var anObject = __webpack_require__(192);
var isObject = __webpack_require__(183);
var toIObject = __webpack_require__(186);
var toPrimitive = __webpack_require__(225);
var createDesc = __webpack_require__(203);
var _create = __webpack_require__(234);
var gOPNExt = __webpack_require__(374);
var $GOPD = __webpack_require__(274);
var $DP = __webpack_require__(182);
var $keys = __webpack_require__(193);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(273).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(206).f = $propertyIsEnumerable;
  __webpack_require__(231).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(204)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(181)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(205)('meta');
var isObject = __webpack_require__(183);
var has = __webpack_require__(177);
var setDesc = __webpack_require__(182).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(185)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(193);
var gOPS = __webpack_require__(231);
var pIE = __webpack_require__(206);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(269);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(186);
var gOPN = __webpack_require__(273).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 375 */
/***/ (function(module, exports) {



/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(237)('asyncIterator');


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(237)('observable');


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(379);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(383);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(270);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(380), __esModule: true };

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(381);
module.exports = __webpack_require__(172).Object.setPrototypeOf;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(180);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(382).set });


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(183);
var anObject = __webpack_require__(192);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(264)(Function.call, __webpack_require__(274).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(384), __esModule: true };

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(385);
var $Object = __webpack_require__(172).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(180);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(234) });


/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(389), __esModule: true };

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(390);
module.exports = __webpack_require__(172).Object.keys;


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(232);
var $keys = __webpack_require__(193);

__webpack_require__(391)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(180);
var core = __webpack_require__(172);
var fails = __webpack_require__(185);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createChangeEmitter = exports.createChangeEmitter = function createChangeEmitter() {
  var currentListeners = [];
  var nextListeners = currentListeners;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function listen(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function () {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  function emit() {
    currentListeners = nextListeners;
    var listeners = currentListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(listeners, arguments);
    }
  }

  return {
    listen: listen,
    emit: emit
  };
};

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(395);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7), __webpack_require__(394)(module)))

/***/ }),
/* 394 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;

var _Link = __webpack_require__(397);

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(401);

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__(402);

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__(207);

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__(241);

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__(239);

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__(275);

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__(238);

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__(277);

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__(403);

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(238);

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(240);

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(238);

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(277);

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(57);

var utils = __webpack_require__(194);
var scrollSpy = __webpack_require__(239);
var defaultScroller = __webpack_require__(207);
var PropTypes = __webpack_require__(1);
var scrollHash = __webpack_require__(276);

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (this.props.name !== nextProps.name) {
            this.registerElems(nextProps.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(202);




var enhance = Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["setDisplayName"])('Code'), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["defaultProps"])({ height: undefined, width: undefined }), Object(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (props) {
  return {
    children: props.title != null ? [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'title',
      { key: 'Code-title' },
      props.title
    ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { fill: 'currentColor', d: 'M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z', key: 'k0' })] : [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { fill: 'currentColor', d: 'M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z', key: 'k0' })],
    viewBox: '0 0 640 512',
    height: props.height !== undefined ? props.height : props.size,
    width: props.width !== undefined ? props.width : props.size,
    'aria-hidden': props.title == null ? 'true' : undefined,
    focusable: 'false',
    role: props.title != null ? 'img' : undefined,
    "fill": "currentColor"
  };
}));

/* harmony default export */ __webpack_exports__["default"] = (enhance(Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["default"])('svg')({
  display: 'inline-block',
  verticalAlign: '-.125em',
  overflow: 'hidden'
}, function (props) {
  return props.css;
})));

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shadows = exports.fonts = exports.radii = exports.colors = exports.fontWeights = exports.fontSizes = exports.space = exports.breakpoints = undefined;

var _colors = __webpack_require__(406);

Object.defineProperty(exports, "colors", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_colors).default;
  }
});

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpoints = exports.breakpoints = [32, 48, 64, 80].map(function (n) {
  return n + "em";
});

var space = exports.space = [0, 4, 8, 16, 32, 64, 128];

var fontSizes = exports.fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];

var fontWeights = exports.fontWeights = {
  normal: 400,
  bold: 700
};

var radii = exports.radii = [0, 2, 4, 6];

var fonts = exports.fonts = {
  0: "system-ui, sans-serif",
  sans: "system-ui, sans-serif",
  mono: '"SF Mono", "Roboto Mono", Menlo, monospace'
};

var shadows = exports.shadows = ["none", "inset 0 0 0 1px " + _colors2.default.gray, "inset 0 0 0 1px " + _colors2.default.gray + ", 0 0 4px " + _colors2.default.gray];

exports.default = {
  breakpoints: breakpoints,
  space: space,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  fonts: fonts,
  colors: _colors2.default,
  radii: radii,
  shadows: shadows
};

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = exports.invertLuminance = exports.createColors = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _chromaJs = __webpack_require__(407);

var _chromaJs2 = _interopRequireDefault(_chromaJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var names = ["red", // 0
"orange", // 30
"yellow", // 60
"lime", // 90
"green", // 120
"teal", // 150
"cyan", // 180
"blue", // 210
"indigo", // 240
"violet", // 270
"fuchsia", // 300
"pink", // 330
"red" // 360
];

var hueName = function hueName(h) {
  var i = Math.round((h - 2) / 30);
  var name = names[i];
  return name;
};

var createHues = function createHues(h) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (n) {
    return Math.floor((h + n * 360 / 12) % 360);
  });
};

var createColors = exports.createColors = function createColors(base) {
  var colors = {
    black: "#000",
    white: "#fff",
    darken: "rgba(0, 0, 0, 0.25)",
    gray: "#eee"
  };

  var color = (0, _chromaJs2.default)(base);

  var _color$hsl = color.hsl(),
      _color$hsl2 = _slicedToArray(_color$hsl, 3),
      hue = _color$hsl2[0],
      sat = _color$hsl2[1],
      lite = _color$hsl2[2];

  var hues = createHues(hue);
  hues.forEach(function (h) {
    var name = hueName(h);
    var val = _chromaJs2.default.hsl(h, sat, lite);
    colors[name] = val.hex();
  });

  return colors;
};

var invertLuminance = exports.invertLuminance = function invertLuminance(base) {
  var color = (0, _chromaJs2.default)(base);
  var luminance = color.luminance();

  var _color$hsl3 = color.hsl(),
      _color$hsl4 = _slicedToArray(_color$hsl3, 2),
      h = _color$hsl4[0],
      s = _color$hsl4[1];

  var next = _chromaJs2.default.hsl(h, s, 1 - luminance);
  return next.hex();
};

var colors = exports.colors = createColors("#06e");

exports.default = colors;

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * @license
 *
 * chroma.js - JavaScript library for color conversions
 * 
 * Copyright (c) 2011-2017, Gregor Aisch
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

(function() {
  var Color, DEG2RAD, LAB_CONSTANTS, PI, PITHIRD, RAD2DEG, TWOPI, _average_lrgb, _guess_formats, _guess_formats_sorted, _input, _interpolators, abs, atan2, bezier, blend, blend_f, brewer, burn, chroma, clip_rgb, cmyk2rgb, colors, cos, css2rgb, darken, dodge, each, floor, hcg2rgb, hex2rgb, hsi2rgb, hsl2css, hsl2rgb, hsv2rgb, interpolate, interpolate_hsx, interpolate_lab, interpolate_lrgb, interpolate_num, interpolate_rgb, lab2lch, lab2rgb, lab_xyz, lch2lab, lch2rgb, lighten, limit, log, luminance_x, m, max, multiply, normal, num2rgb, overlay, pow, rgb2cmyk, rgb2css, rgb2hcg, rgb2hex, rgb2hsi, rgb2hsl, rgb2hsv, rgb2lab, rgb2lch, rgb2luminance, rgb2num, rgb2temperature, rgb2xyz, rgb_xyz, rnd, root, round, screen, sin, sqrt, temperature2rgb, type, unpack, w3cx11, xyz_lab, xyz_rgb,
    slice = [].slice;

  type = (function() {

    /*
    for browser-safe type checking+
    ported from jQuery's $.type
     */
    var classToType, len, name, o, ref;
    classToType = {};
    ref = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
    for (o = 0, len = ref.length; o < len; o++) {
      name = ref[o];
      classToType["[object " + name + "]"] = name.toLowerCase();
    }
    return function(obj) {
      var strType;
      strType = Object.prototype.toString.call(obj);
      return classToType[strType] || "object";
    };
  })();

  limit = function(x, min, max) {
    if (min == null) {
      min = 0;
    }
    if (max == null) {
      max = 1;
    }
    if (x < min) {
      x = min;
    }
    if (x > max) {
      x = max;
    }
    return x;
  };

  unpack = function(args) {
    if (args.length >= 3) {
      return Array.prototype.slice.call(args);
    } else {
      return args[0];
    }
  };

  clip_rgb = function(rgb) {
    var i, o;
    rgb._clipped = false;
    rgb._unclipped = rgb.slice(0);
    for (i = o = 0; o < 3; i = ++o) {
      if (i < 3) {
        if (rgb[i] < 0 || rgb[i] > 255) {
          rgb._clipped = true;
        }
        if (rgb[i] < 0) {
          rgb[i] = 0;
        }
        if (rgb[i] > 255) {
          rgb[i] = 255;
        }
      } else if (i === 3) {
        if (rgb[i] < 0) {
          rgb[i] = 0;
        }
        if (rgb[i] > 1) {
          rgb[i] = 1;
        }
      }
    }
    if (!rgb._clipped) {
      delete rgb._unclipped;
    }
    return rgb;
  };

  PI = Math.PI, round = Math.round, cos = Math.cos, floor = Math.floor, pow = Math.pow, log = Math.log, sin = Math.sin, sqrt = Math.sqrt, atan2 = Math.atan2, max = Math.max, abs = Math.abs;

  TWOPI = PI * 2;

  PITHIRD = PI / 3;

  DEG2RAD = PI / 180;

  RAD2DEG = 180 / PI;

  chroma = function() {
    if (arguments[0] instanceof Color) {
      return arguments[0];
    }
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, arguments, function(){});
  };

  chroma["default"] = chroma;

  _interpolators = [];

  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = chroma;
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return chroma;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    root = typeof exports !== "undefined" && exports !== null ? exports : this;
    root.chroma = chroma;
  }

  chroma.version = '1.3.7';

  _input = {};

  _guess_formats = [];

  _guess_formats_sorted = false;

  Color = (function() {
    function Color() {
      var arg, args, chk, len, len1, me, mode, o, w;
      me = this;
      args = [];
      for (o = 0, len = arguments.length; o < len; o++) {
        arg = arguments[o];
        if (arg != null) {
          args.push(arg);
        }
      }
      if (args.length > 1) {
        mode = args[args.length - 1];
      }
      if (_input[mode] != null) {
        me._rgb = clip_rgb(_input[mode](unpack(args.slice(0, -1))));
      } else {
        if (!_guess_formats_sorted) {
          _guess_formats = _guess_formats.sort(function(a, b) {
            return b.p - a.p;
          });
          _guess_formats_sorted = true;
        }
        for (w = 0, len1 = _guess_formats.length; w < len1; w++) {
          chk = _guess_formats[w];
          mode = chk.test.apply(chk, args);
          if (mode) {
            break;
          }
        }
        if (mode) {
          me._rgb = clip_rgb(_input[mode].apply(_input, args));
        }
      }
      if (me._rgb == null) {
        console.warn('unknown format: ' + args);
      }
      if (me._rgb == null) {
        me._rgb = [0, 0, 0];
      }
      if (me._rgb.length === 3) {
        me._rgb.push(1);
      }
    }

    Color.prototype.toString = function() {
      return this.hex();
    };

    Color.prototype.clone = function() {
      return chroma(me._rgb);
    };

    return Color;

  })();

  chroma._input = _input;


  /**
  	ColorBrewer colors for chroma.js
  
  	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
  	Pennsylvania State University.
  
  	Licensed under the Apache License, Version 2.0 (the "License"); 
  	you may not use this file except in compliance with the License.
  	You may obtain a copy of the License at	
  	http://www.apache.org/licenses/LICENSE-2.0
  
  	Unless required by applicable law or agreed to in writing, software distributed
  	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
  	CONDITIONS OF ANY KIND, either express or implied. See the License for the
  	specific language governing permissions and limitations under the License.
  
      @preserve
   */

  chroma.brewer = brewer = {
    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
    Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
  };

  (function() {
    var key, results;
    results = [];
    for (key in brewer) {
      results.push(brewer[key.toLowerCase()] = brewer[key]);
    }
    return results;
  })();


  /**
  	X11 color names
  
  	http://www.w3.org/TR/css3-color/#svg-color
   */

  w3cx11 = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflower: '#6495ed',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    laserlemon: '#ffff54',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrod: '#fafad2',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    maroon2: '#7f0000',
    maroon3: '#b03060',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    purple2: '#7f007f',
    purple3: '#a020f0',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
  };

  chroma.colors = colors = w3cx11;

  lab2rgb = function() {
    var a, args, b, g, l, r, x, y, z;
    args = unpack(arguments);
    l = args[0], a = args[1], b = args[2];
    y = (l + 16) / 116;
    x = isNaN(a) ? y : y + a / 500;
    z = isNaN(b) ? y : y - b / 200;
    y = LAB_CONSTANTS.Yn * lab_xyz(y);
    x = LAB_CONSTANTS.Xn * lab_xyz(x);
    z = LAB_CONSTANTS.Zn * lab_xyz(z);
    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
    b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  xyz_rgb = function(r) {
    return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow(r, 1 / 2.4) - 0.055);
  };

  lab_xyz = function(t) {
    if (t > LAB_CONSTANTS.t1) {
      return t * t * t;
    } else {
      return LAB_CONSTANTS.t2 * (t - LAB_CONSTANTS.t0);
    }
  };

  LAB_CONSTANTS = {
    Kn: 18,
    Xn: 0.950470,
    Yn: 1,
    Zn: 1.088830,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 0.008856452
  };

  rgb2lab = function() {
    var b, g, r, ref, ref1, x, y, z;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    ref1 = rgb2xyz(r, g, b), x = ref1[0], y = ref1[1], z = ref1[2];
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
  };

  rgb_xyz = function(r) {
    if ((r /= 255) <= 0.04045) {
      return r / 12.92;
    } else {
      return pow((r + 0.055) / 1.055, 2.4);
    }
  };

  xyz_lab = function(t) {
    if (t > LAB_CONSTANTS.t3) {
      return pow(t, 1 / 3);
    } else {
      return t / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
    }
  };

  rgb2xyz = function() {
    var b, g, r, ref, x, y, z;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = rgb_xyz(r);
    g = rgb_xyz(g);
    b = rgb_xyz(b);
    x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS.Xn);
    y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS.Yn);
    z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS.Zn);
    return [x, y, z];
  };

  chroma.lab = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['lab']), function(){});
  };

  _input.lab = lab2rgb;

  Color.prototype.lab = function() {
    return rgb2lab(this._rgb);
  };

  bezier = function(colors) {
    var I, I0, I1, c, lab0, lab1, lab2, lab3, ref, ref1, ref2;
    colors = (function() {
      var len, o, results;
      results = [];
      for (o = 0, len = colors.length; o < len; o++) {
        c = colors[o];
        results.push(chroma(c));
      }
      return results;
    })();
    if (colors.length === 2) {
      ref = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref[0], lab1 = ref[1];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push(lab0[i] + t * (lab1[i] - lab0[i]));
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 3) {
      ref1 = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref1[0], lab1 = ref1[1], lab2 = ref1[2];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push((1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 4) {
      ref2 = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref2[0], lab1 = ref2[1], lab2 = ref2[2], lab3 = ref2[3];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push((1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 5) {
      I0 = bezier(colors.slice(0, 3));
      I1 = bezier(colors.slice(2, 5));
      I = function(t) {
        if (t < 0.5) {
          return I0(t * 2);
        } else {
          return I1((t - 0.5) * 2);
        }
      };
    }
    return I;
  };

  chroma.bezier = function(colors) {
    var f;
    f = bezier(colors);
    f.scale = function() {
      return chroma.scale(f);
    };
    return f;
  };


  /*
      chroma.js
  
      Copyright (c) 2011-2013, Gregor Aisch
      All rights reserved.
  
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
  
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.
  
      * The name Gregor Aisch may not be used to endorse or promote products
        derived from this software without specific prior written permission.
  
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  
      @source: https://github.com/gka/chroma.js
   */

  chroma.cubehelix = function(start, rotations, hue, gamma, lightness) {
    var dh, dl, f;
    if (start == null) {
      start = 300;
    }
    if (rotations == null) {
      rotations = -1.5;
    }
    if (hue == null) {
      hue = 1;
    }
    if (gamma == null) {
      gamma = 1;
    }
    if (lightness == null) {
      lightness = [0, 1];
    }
    dh = 0;
    if (type(lightness) === 'array') {
      dl = lightness[1] - lightness[0];
    } else {
      dl = 0;
      lightness = [lightness, lightness];
    }
    f = function(fract) {
      var a, amp, b, cos_a, g, h, l, r, sin_a;
      a = TWOPI * ((start + 120) / 360 + rotations * fract);
      l = pow(lightness[0] + dl * fract, gamma);
      h = dh !== 0 ? hue[0] + fract * dh : hue;
      amp = h * l * (1 - l) / 2;
      cos_a = cos(a);
      sin_a = sin(a);
      r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
      g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
      b = l + amp * (+1.97294 * cos_a);
      return chroma(clip_rgb([r * 255, g * 255, b * 255]));
    };
    f.start = function(s) {
      if (s == null) {
        return start;
      }
      start = s;
      return f;
    };
    f.rotations = function(r) {
      if (r == null) {
        return rotations;
      }
      rotations = r;
      return f;
    };
    f.gamma = function(g) {
      if (g == null) {
        return gamma;
      }
      gamma = g;
      return f;
    };
    f.hue = function(h) {
      if (h == null) {
        return hue;
      }
      hue = h;
      if (type(hue) === 'array') {
        dh = hue[1] - hue[0];
        if (dh === 0) {
          hue = hue[1];
        }
      } else {
        dh = 0;
      }
      return f;
    };
    f.lightness = function(h) {
      if (h == null) {
        return lightness;
      }
      if (type(h) === 'array') {
        lightness = h;
        dl = h[1] - h[0];
      } else {
        lightness = [h, h];
        dl = 0;
      }
      return f;
    };
    f.scale = function() {
      return chroma.scale(f);
    };
    f.hue(hue);
    return f;
  };

  chroma.random = function() {
    var code, digits, i, o;
    digits = '0123456789abcdef';
    code = '#';
    for (i = o = 0; o < 6; i = ++o) {
      code += digits.charAt(floor(Math.random() * 16));
    }
    return new Color(code);
  };

  _interpolators = [];

  interpolate = function(col1, col2, f, m) {
    var interpol, len, o, res;
    if (f == null) {
      f = 0.5;
    }
    if (m == null) {
      m = 'rgb';
    }

    /*
    interpolates between colors
    f = 0 --> me
    f = 1 --> col
     */
    if (type(col1) !== 'object') {
      col1 = chroma(col1);
    }
    if (type(col2) !== 'object') {
      col2 = chroma(col2);
    }
    for (o = 0, len = _interpolators.length; o < len; o++) {
      interpol = _interpolators[o];
      if (m === interpol[0]) {
        res = interpol[1](col1, col2, f, m);
        break;
      }
    }
    if (res == null) {
      throw "color mode " + m + " is not supported";
    }
    return res.alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
  };

  chroma.interpolate = interpolate;

  Color.prototype.interpolate = function(col2, f, m) {
    return interpolate(this, col2, f, m);
  };

  chroma.mix = interpolate;

  Color.prototype.mix = Color.prototype.interpolate;

  _input.rgb = function() {
    var k, ref, results, v;
    ref = unpack(arguments);
    results = [];
    for (k in ref) {
      v = ref[k];
      results.push(v);
    }
    return results;
  };

  chroma.rgb = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['rgb']), function(){});
  };

  Color.prototype.rgb = function(round) {
    if (round == null) {
      round = true;
    }
    if (round) {
      return this._rgb.map(Math.round).slice(0, 3);
    } else {
      return this._rgb.slice(0, 3);
    }
  };

  Color.prototype.rgba = function(round) {
    if (round == null) {
      round = true;
    }
    if (!round) {
      return this._rgb.slice(0);
    }
    return [Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3]];
  };

  _guess_formats.push({
    p: 3,
    test: function(n) {
      var a;
      a = unpack(arguments);
      if (type(a) === 'array' && a.length === 3) {
        return 'rgb';
      }
      if (a.length === 4 && type(a[3]) === "number" && a[3] >= 0 && a[3] <= 1) {
        return 'rgb';
      }
    }
  });

  _input.lrgb = _input.rgb;

  interpolate_lrgb = function(col1, col2, f, m) {
    var xyz0, xyz1;
    xyz0 = col1._rgb;
    xyz1 = col2._rgb;
    return new Color(sqrt(pow(xyz0[0], 2) * (1 - f) + pow(xyz1[0], 2) * f), sqrt(pow(xyz0[1], 2) * (1 - f) + pow(xyz1[1], 2) * f), sqrt(pow(xyz0[2], 2) * (1 - f) + pow(xyz1[2], 2) * f), m);
  };

  _average_lrgb = function(colors) {
    var col, f, len, o, rgb, xyz;
    f = 1 / colors.length;
    xyz = [0, 0, 0, 0];
    for (o = 0, len = colors.length; o < len; o++) {
      col = colors[o];
      rgb = col._rgb;
      xyz[0] += pow(rgb[0], 2) * f;
      xyz[1] += pow(rgb[1], 2) * f;
      xyz[2] += pow(rgb[2], 2) * f;
      xyz[3] += rgb[3] * f;
    }
    xyz[0] = sqrt(xyz[0]);
    xyz[1] = sqrt(xyz[1]);
    xyz[2] = sqrt(xyz[2]);
    return new Color(xyz);
  };

  _interpolators.push(['lrgb', interpolate_lrgb]);

  chroma.average = function(colors, mode) {
    var A, alpha, c, cnt, dx, dy, first, i, l, len, o, xyz, xyz2;
    if (mode == null) {
      mode = 'rgb';
    }
    l = colors.length;
    colors = colors.map(function(c) {
      return chroma(c);
    });
    first = colors.splice(0, 1)[0];
    if (mode === 'lrgb') {
      return _average_lrgb(colors);
    }
    xyz = first.get(mode);
    cnt = [];
    dx = 0;
    dy = 0;
    for (i in xyz) {
      xyz[i] = xyz[i] || 0;
      cnt.push(isNaN(xyz[i]) ? 0 : 1);
      if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
        A = xyz[i] / 180 * PI;
        dx += cos(A);
        dy += sin(A);
      }
    }
    alpha = first.alpha();
    for (o = 0, len = colors.length; o < len; o++) {
      c = colors[o];
      xyz2 = c.get(mode);
      alpha += c.alpha();
      for (i in xyz) {
        if (!isNaN(xyz2[i])) {
          cnt[i] += 1;
          if (mode.charAt(i) === 'h') {
            A = xyz2[i] / 180 * PI;
            dx += cos(A);
            dy += sin(A);
          } else {
            xyz[i] += xyz2[i];
          }
        }
      }
    }
    for (i in xyz) {
      if (mode.charAt(i) === 'h') {
        A = atan2(dy / cnt[i], dx / cnt[i]) / PI * 180;
        while (A < 0) {
          A += 360;
        }
        while (A >= 360) {
          A -= 360;
        }
        xyz[i] = A;
      } else {
        xyz[i] = xyz[i] / cnt[i];
      }
    }
    return chroma(xyz, mode).alpha(alpha / l);
  };

  hex2rgb = function(hex) {
    var a, b, g, r, rgb, u;
    if (hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      if (hex.length === 4 || hex.length === 7) {
        hex = hex.substr(1);
      }
      if (hex.length === 3) {
        hex = hex.split("");
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      u = parseInt(hex, 16);
      r = u >> 16;
      g = u >> 8 & 0xFF;
      b = u & 0xFF;
      return [r, g, b, 1];
    }
    if (hex.match(/^#?([A-Fa-f0-9]{8})$/)) {
      if (hex.length === 9) {
        hex = hex.substr(1);
      }
      u = parseInt(hex, 16);
      r = u >> 24 & 0xFF;
      g = u >> 16 & 0xFF;
      b = u >> 8 & 0xFF;
      a = round((u & 0xFF) / 0xFF * 100) / 100;
      return [r, g, b, a];
    }
    if ((_input.css != null) && (rgb = _input.css(hex))) {
      return rgb;
    }
    throw "unknown color: " + hex;
  };

  rgb2hex = function(channels, mode) {
    var a, b, g, hxa, r, str, u;
    if (mode == null) {
      mode = 'rgb';
    }
    r = channels[0], g = channels[1], b = channels[2], a = channels[3];
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    u = r << 16 | g << 8 | b;
    str = "000000" + u.toString(16);
    str = str.substr(str.length - 6);
    hxa = '0' + round(a * 255).toString(16);
    hxa = hxa.substr(hxa.length - 2);
    return "#" + (function() {
      switch (mode.toLowerCase()) {
        case 'rgba':
          return str + hxa;
        case 'argb':
          return hxa + str;
        default:
          return str;
      }
    })();
  };

  _input.hex = function(h) {
    return hex2rgb(h);
  };

  chroma.hex = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hex']), function(){});
  };

  Color.prototype.hex = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    return rgb2hex(this._rgb, mode);
  };

  _guess_formats.push({
    p: 4,
    test: function(n) {
      if (arguments.length === 1 && type(n) === "string") {
        return 'hex';
      }
    }
  });

  hsl2rgb = function() {
    var args, b, c, g, h, i, l, o, r, ref, s, t1, t2, t3;
    args = unpack(arguments);
    h = args[0], s = args[1], l = args[2];
    if (s === 0) {
      r = g = b = l * 255;
    } else {
      t3 = [0, 0, 0];
      c = [0, 0, 0];
      t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
      t1 = 2 * l - t2;
      h /= 360;
      t3[0] = h + 1 / 3;
      t3[1] = h;
      t3[2] = h - 1 / 3;
      for (i = o = 0; o <= 2; i = ++o) {
        if (t3[i] < 0) {
          t3[i] += 1;
        }
        if (t3[i] > 1) {
          t3[i] -= 1;
        }
        if (6 * t3[i] < 1) {
          c[i] = t1 + (t2 - t1) * 6 * t3[i];
        } else if (2 * t3[i] < 1) {
          c[i] = t2;
        } else if (3 * t3[i] < 2) {
          c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
        } else {
          c[i] = t1;
        }
      }
      ref = [round(c[0] * 255), round(c[1] * 255), round(c[2] * 255)], r = ref[0], g = ref[1], b = ref[2];
    }
    if (args.length > 3) {
      return [r, g, b, args[3]];
    } else {
      return [r, g, b];
    }
  };

  rgb2hsl = function(r, g, b) {
    var h, l, min, ref, s;
    if (r !== void 0 && r.length >= 3) {
      ref = r, r = ref[0], g = ref[1], b = ref[2];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      s = 0;
      h = Number.NaN;
    } else {
      s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    }
    if (r === max) {
      h = (g - b) / (max - min);
    } else if (g === max) {
      h = 2 + (b - r) / (max - min);
    } else if (b === max) {
      h = 4 + (r - g) / (max - min);
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
    return [h, s, l];
  };

  chroma.hsl = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsl']), function(){});
  };

  _input.hsl = hsl2rgb;

  Color.prototype.hsl = function() {
    return rgb2hsl(this._rgb);
  };

  hsv2rgb = function() {
    var args, b, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, s, t, v;
    args = unpack(arguments);
    h = args[0], s = args[1], v = args[2];
    v *= 255;
    if (s === 0) {
      r = g = b = v;
    } else {
      if (h === 360) {
        h = 0;
      }
      if (h > 360) {
        h -= 360;
      }
      if (h < 0) {
        h += 360;
      }
      h /= 60;
      i = floor(h);
      f = h - i;
      p = v * (1 - s);
      q = v * (1 - s * f);
      t = v * (1 - s * (1 - f));
      switch (i) {
        case 0:
          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
          break;
        case 1:
          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
          break;
        case 2:
          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
          break;
        case 3:
          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
          break;
        case 4:
          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
          break;
        case 5:
          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
      }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  rgb2hsv = function() {
    var b, delta, g, h, min, r, ref, s, v;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    delta = max - min;
    v = max / 255.0;
    if (max === 0) {
      h = Number.NaN;
      s = 0;
    } else {
      s = delta / max;
      if (r === max) {
        h = (g - b) / delta;
      }
      if (g === max) {
        h = 2 + (b - r) / delta;
      }
      if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    }
    return [h, s, v];
  };

  chroma.hsv = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsv']), function(){});
  };

  _input.hsv = hsv2rgb;

  Color.prototype.hsv = function() {
    return rgb2hsv(this._rgb);
  };

  num2rgb = function(num) {
    var b, g, r;
    if (type(num) === "number" && num >= 0 && num <= 0xFFFFFF) {
      r = num >> 16;
      g = (num >> 8) & 0xFF;
      b = num & 0xFF;
      return [r, g, b, 1];
    }
    console.warn("unknown num color: " + num);
    return [0, 0, 0, 1];
  };

  rgb2num = function() {
    var b, g, r, ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    return (r << 16) + (g << 8) + b;
  };

  chroma.num = function(num) {
    return new Color(num, 'num');
  };

  Color.prototype.num = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    return rgb2num(this._rgb, mode);
  };

  _input.num = num2rgb;

  _guess_formats.push({
    p: 1,
    test: function(n) {
      if (arguments.length === 1 && type(n) === "number" && n >= 0 && n <= 0xFFFFFF) {
        return 'num';
      }
    }
  });

  hcg2rgb = function() {
    var _c, _g, args, b, c, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, t, v;
    args = unpack(arguments);
    h = args[0], c = args[1], _g = args[2];
    c = c / 100;
    g = g / 100 * 255;
    _c = c * 255;
    if (c === 0) {
      r = g = b = _g;
    } else {
      if (h === 360) {
        h = 0;
      }
      if (h > 360) {
        h -= 360;
      }
      if (h < 0) {
        h += 360;
      }
      h /= 60;
      i = floor(h);
      f = h - i;
      p = _g * (1 - c);
      q = p + _c * (1 - f);
      t = p + _c * f;
      v = p + _c;
      switch (i) {
        case 0:
          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
          break;
        case 1:
          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
          break;
        case 2:
          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
          break;
        case 3:
          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
          break;
        case 4:
          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
          break;
        case 5:
          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
      }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  rgb2hcg = function() {
    var _g, b, c, delta, g, h, min, r, ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    delta = max - min;
    c = delta * 100 / 255;
    _g = min / (255 - delta) * 100;
    if (delta === 0) {
      h = Number.NaN;
    } else {
      if (r === max) {
        h = (g - b) / delta;
      }
      if (g === max) {
        h = 2 + (b - r) / delta;
      }
      if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    }
    return [h, c, _g];
  };

  chroma.hcg = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hcg']), function(){});
  };

  _input.hcg = hcg2rgb;

  Color.prototype.hcg = function() {
    return rgb2hcg(this._rgb);
  };

  css2rgb = function(css) {
    var aa, ab, hsl, i, m, o, rgb, w;
    css = css.toLowerCase();
    if ((chroma.colors != null) && chroma.colors[css]) {
      return hex2rgb(chroma.colors[css]);
    }
    if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
      rgb = m.slice(1, 4);
      for (i = o = 0; o <= 2; i = ++o) {
        rgb[i] = +rgb[i];
      }
      rgb[3] = 1;
    } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
      rgb = m.slice(1, 5);
      for (i = w = 0; w <= 3; i = ++w) {
        rgb[i] = +rgb[i];
      }
    } else if (m = css.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
      rgb = m.slice(1, 4);
      for (i = aa = 0; aa <= 2; i = ++aa) {
        rgb[i] = round(rgb[i] * 2.55);
      }
      rgb[3] = 1;
    } else if (m = css.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
      rgb = m.slice(1, 5);
      for (i = ab = 0; ab <= 2; i = ++ab) {
        rgb[i] = round(rgb[i] * 2.55);
      }
      rgb[3] = +rgb[3];
    } else if (m = css.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
      hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      rgb = hsl2rgb(hsl);
      rgb[3] = 1;
    } else if (m = css.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
      hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      rgb = hsl2rgb(hsl);
      rgb[3] = +m[4];
    }
    return rgb;
  };

  rgb2css = function(rgba) {
    var mode;
    mode = rgba[3] < 1 ? 'rgba' : 'rgb';
    if (mode === 'rgb') {
      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ')';
    } else if (mode === 'rgba') {
      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ',' + rgba[3] + ')';
    } else {

    }
  };

  rnd = function(a) {
    return round(a * 100) / 100;
  };

  hsl2css = function(hsl, alpha) {
    var mode;
    mode = alpha < 1 ? 'hsla' : 'hsl';
    hsl[0] = rnd(hsl[0] || 0);
    hsl[1] = rnd(hsl[1] * 100) + '%';
    hsl[2] = rnd(hsl[2] * 100) + '%';
    if (mode === 'hsla') {
      hsl[3] = alpha;
    }
    return mode + '(' + hsl.join(',') + ')';
  };

  _input.css = function(h) {
    return css2rgb(h);
  };

  chroma.css = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['css']), function(){});
  };

  Color.prototype.css = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    if (mode.slice(0, 3) === 'rgb') {
      return rgb2css(this._rgb);
    } else if (mode.slice(0, 3) === 'hsl') {
      return hsl2css(this.hsl(), this.alpha());
    }
  };

  _input.named = function(name) {
    return hex2rgb(w3cx11[name]);
  };

  _guess_formats.push({
    p: 5,
    test: function(n) {
      if (arguments.length === 1 && (w3cx11[n] != null)) {
        return 'named';
      }
    }
  });

  Color.prototype.name = function(n) {
    var h, k;
    if (arguments.length) {
      if (w3cx11[n]) {
        this._rgb = hex2rgb(w3cx11[n]);
      }
      this._rgb[3] = 1;
      this;
    }
    h = this.hex();
    for (k in w3cx11) {
      if (h === w3cx11[k]) {
        return k;
      }
    }
    return h;
  };

  lch2lab = function() {

    /*
    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
    These formulas were invented by David Dalrymple to obtain maximum contrast without going
    out of gamut if the parameters are in the range 0-1.
    
    A saturation multiplier was added by Gregor Aisch
     */
    var c, h, l, ref;
    ref = unpack(arguments), l = ref[0], c = ref[1], h = ref[2];
    h = h * DEG2RAD;
    return [l, cos(h) * c, sin(h) * c];
  };

  lch2rgb = function() {
    var L, a, args, b, c, g, h, l, r, ref, ref1;
    args = unpack(arguments);
    l = args[0], c = args[1], h = args[2];
    ref = lch2lab(l, c, h), L = ref[0], a = ref[1], b = ref[2];
    ref1 = lab2rgb(L, a, b), r = ref1[0], g = ref1[1], b = ref1[2];
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  lab2lch = function() {
    var a, b, c, h, l, ref;
    ref = unpack(arguments), l = ref[0], a = ref[1], b = ref[2];
    c = sqrt(a * a + b * b);
    h = (atan2(b, a) * RAD2DEG + 360) % 360;
    if (round(c * 10000) === 0) {
      h = Number.NaN;
    }
    return [l, c, h];
  };

  rgb2lch = function() {
    var a, b, g, l, r, ref, ref1;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    ref1 = rgb2lab(r, g, b), l = ref1[0], a = ref1[1], b = ref1[2];
    return lab2lch(l, a, b);
  };

  chroma.lch = function() {
    var args;
    args = unpack(arguments);
    return new Color(args, 'lch');
  };

  chroma.hcl = function() {
    var args;
    args = unpack(arguments);
    return new Color(args, 'hcl');
  };

  _input.lch = lch2rgb;

  _input.hcl = function() {
    var c, h, l, ref;
    ref = unpack(arguments), h = ref[0], c = ref[1], l = ref[2];
    return lch2rgb([l, c, h]);
  };

  Color.prototype.lch = function() {
    return rgb2lch(this._rgb);
  };

  Color.prototype.hcl = function() {
    return rgb2lch(this._rgb).reverse();
  };

  rgb2cmyk = function(mode) {
    var b, c, f, g, k, m, r, ref, y;
    if (mode == null) {
      mode = 'rgb';
    }
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = r / 255;
    g = g / 255;
    b = b / 255;
    k = 1 - Math.max(r, Math.max(g, b));
    f = k < 1 ? 1 / (1 - k) : 0;
    c = (1 - r - k) * f;
    m = (1 - g - k) * f;
    y = (1 - b - k) * f;
    return [c, m, y, k];
  };

  cmyk2rgb = function() {
    var alpha, args, b, c, g, k, m, r, y;
    args = unpack(arguments);
    c = args[0], m = args[1], y = args[2], k = args[3];
    alpha = args.length > 4 ? args[4] : 1;
    if (k === 1) {
      return [0, 0, 0, alpha];
    }
    r = c >= 1 ? 0 : 255 * (1 - c) * (1 - k);
    g = m >= 1 ? 0 : 255 * (1 - m) * (1 - k);
    b = y >= 1 ? 0 : 255 * (1 - y) * (1 - k);
    return [r, g, b, alpha];
  };

  _input.cmyk = function() {
    return cmyk2rgb(unpack(arguments));
  };

  chroma.cmyk = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['cmyk']), function(){});
  };

  Color.prototype.cmyk = function() {
    return rgb2cmyk(this._rgb);
  };

  _input.gl = function() {
    var i, k, o, rgb, v;
    rgb = (function() {
      var ref, results;
      ref = unpack(arguments);
      results = [];
      for (k in ref) {
        v = ref[k];
        results.push(v);
      }
      return results;
    }).apply(this, arguments);
    for (i = o = 0; o <= 2; i = ++o) {
      rgb[i] *= 255;
    }
    return rgb;
  };

  chroma.gl = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['gl']), function(){});
  };

  Color.prototype.gl = function() {
    var rgb;
    rgb = this._rgb;
    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
  };

  rgb2luminance = function(r, g, b) {
    var ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = luminance_x(r);
    g = luminance_x(g);
    b = luminance_x(b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  luminance_x = function(x) {
    x /= 255;
    if (x <= 0.03928) {
      return x / 12.92;
    } else {
      return pow((x + 0.055) / 1.055, 2.4);
    }
  };

  interpolate_rgb = function(col1, col2, f, m) {
    var xyz0, xyz1;
    xyz0 = col1._rgb;
    xyz1 = col2._rgb;
    return new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
  };

  _interpolators.push(['rgb', interpolate_rgb]);

  Color.prototype.luminance = function(lum, mode) {
    var cur_lum, eps, max_iter, rgba, test;
    if (mode == null) {
      mode = 'rgb';
    }
    if (!arguments.length) {
      return rgb2luminance(this._rgb);
    }
    rgba = this._rgb;
    if (lum === 0) {
      rgba = [0, 0, 0, this._rgb[3]];
    } else if (lum === 1) {
      rgba = [255, 255, 255, this[3]];
    } else {
      cur_lum = rgb2luminance(this._rgb);
      eps = 1e-7;
      max_iter = 20;
      test = function(l, h) {
        var lm, m;
        m = l.interpolate(h, 0.5, mode);
        lm = m.luminance();
        if (Math.abs(lum - lm) < eps || !max_iter--) {
          return m;
        }
        if (lm > lum) {
          return test(l, m);
        }
        return test(m, h);
      };
      if (cur_lum > lum) {
        rgba = test(chroma('black'), this).rgba();
      } else {
        rgba = test(this, chroma('white')).rgba();
      }
    }
    return chroma(rgba).alpha(this.alpha());
  };

  temperature2rgb = function(kelvin) {
    var b, g, r, temp;
    temp = kelvin / 100;
    if (temp < 66) {
      r = 255;
      g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
      b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
    } else {
      r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
      g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
      b = 255;
    }
    return [r, g, b];
  };

  rgb2temperature = function() {
    var b, eps, g, maxTemp, minTemp, r, ref, rgb, temp;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    minTemp = 1000;
    maxTemp = 40000;
    eps = 0.4;
    while (maxTemp - minTemp > eps) {
      temp = (maxTemp + minTemp) * 0.5;
      rgb = temperature2rgb(temp);
      if ((rgb[2] / rgb[0]) >= (b / r)) {
        maxTemp = temp;
      } else {
        minTemp = temp;
      }
    }
    return round(temp);
  };

  chroma.temperature = chroma.kelvin = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['temperature']), function(){});
  };

  _input.temperature = _input.kelvin = _input.K = temperature2rgb;

  Color.prototype.temperature = function() {
    return rgb2temperature(this._rgb);
  };

  Color.prototype.kelvin = Color.prototype.temperature;

  chroma.contrast = function(a, b) {
    var l1, l2, ref, ref1;
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    l1 = a.luminance();
    l2 = b.luminance();
    if (l1 > l2) {
      return (l1 + 0.05) / (l2 + 0.05);
    } else {
      return (l2 + 0.05) / (l1 + 0.05);
    }
  };

  chroma.distance = function(a, b, mode) {
    var d, i, l1, l2, ref, ref1, sum_sq;
    if (mode == null) {
      mode = 'lab';
    }
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    l1 = a.get(mode);
    l2 = b.get(mode);
    sum_sq = 0;
    for (i in l1) {
      d = (l1[i] || 0) - (l2[i] || 0);
      sum_sq += d * d;
    }
    return Math.sqrt(sum_sq);
  };

  chroma.deltaE = function(a, b, L, C) {
    var L1, L2, a1, a2, b1, b2, c1, c2, c4, dH2, delA, delB, delC, delL, f, h1, ref, ref1, ref2, ref3, sc, sh, sl, t, v1, v2, v3;
    if (L == null) {
      L = 1;
    }
    if (C == null) {
      C = 1;
    }
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    ref2 = a.lab(), L1 = ref2[0], a1 = ref2[1], b1 = ref2[2];
    ref3 = b.lab(), L2 = ref3[0], a2 = ref3[1], b2 = ref3[2];
    c1 = sqrt(a1 * a1 + b1 * b1);
    c2 = sqrt(a2 * a2 + b2 * b2);
    sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + 0.01765 * L1);
    sc = (0.0638 * c1) / (1.0 + 0.0131 * c1) + 0.638;
    h1 = c1 < 0.000001 ? 0.0 : (atan2(b1, a1) * 180.0) / PI;
    while (h1 < 0) {
      h1 += 360;
    }
    while (h1 >= 360) {
      h1 -= 360;
    }
    t = (h1 >= 164.0) && (h1 <= 345.0) ? 0.56 + abs(0.2 * cos((PI * (h1 + 168.0)) / 180.0)) : 0.36 + abs(0.4 * cos((PI * (h1 + 35.0)) / 180.0));
    c4 = c1 * c1 * c1 * c1;
    f = sqrt(c4 / (c4 + 1900.0));
    sh = sc * (f * t + 1.0 - f);
    delL = L1 - L2;
    delC = c1 - c2;
    delA = a1 - a2;
    delB = b1 - b2;
    dH2 = delA * delA + delB * delB - delC * delC;
    v1 = delL / (L * sl);
    v2 = delC / (C * sc);
    v3 = sh;
    return sqrt(v1 * v1 + v2 * v2 + (dH2 / (v3 * v3)));
  };

  Color.prototype.get = function(modechan) {
    var channel, i, me, mode, ref, src;
    me = this;
    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
    src = me[mode]();
    if (channel) {
      i = mode.indexOf(channel);
      if (i > -1) {
        return src[i];
      } else {
        return console.warn('unknown channel ' + channel + ' in mode ' + mode);
      }
    } else {
      return src;
    }
  };

  Color.prototype.set = function(modechan, value) {
    var channel, i, me, mode, ref, src;
    me = this;
    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
    if (channel) {
      src = me[mode]();
      i = mode.indexOf(channel);
      if (i > -1) {
        if (type(value) === 'string') {
          switch (value.charAt(0)) {
            case '+':
              src[i] += +value;
              break;
            case '-':
              src[i] += +value;
              break;
            case '*':
              src[i] *= +(value.substr(1));
              break;
            case '/':
              src[i] /= +(value.substr(1));
              break;
            default:
              src[i] = +value;
          }
        } else {
          src[i] = value;
        }
      } else {
        console.warn('unknown channel ' + channel + ' in mode ' + mode);
      }
    } else {
      src = value;
    }
    return chroma(src, mode).alpha(me.alpha());
  };

  Color.prototype.clipped = function() {
    return this._rgb._clipped || false;
  };

  Color.prototype.alpha = function(a) {
    if (arguments.length) {
      return chroma.rgb([this._rgb[0], this._rgb[1], this._rgb[2], a]);
    }
    return this._rgb[3];
  };

  Color.prototype.darken = function(amount) {
    var lab, me;
    if (amount == null) {
      amount = 1;
    }
    me = this;
    lab = me.lab();
    lab[0] -= LAB_CONSTANTS.Kn * amount;
    return chroma.lab(lab).alpha(me.alpha());
  };

  Color.prototype.brighten = function(amount) {
    if (amount == null) {
      amount = 1;
    }
    return this.darken(-amount);
  };

  Color.prototype.darker = Color.prototype.darken;

  Color.prototype.brighter = Color.prototype.brighten;

  Color.prototype.saturate = function(amount) {
    var lch, me;
    if (amount == null) {
      amount = 1;
    }
    me = this;
    lch = me.lch();
    lch[1] += amount * LAB_CONSTANTS.Kn;
    if (lch[1] < 0) {
      lch[1] = 0;
    }
    return chroma.lch(lch).alpha(me.alpha());
  };

  Color.prototype.desaturate = function(amount) {
    if (amount == null) {
      amount = 1;
    }
    return this.saturate(-amount);
  };

  Color.prototype.premultiply = function() {
    var a, rgb;
    rgb = this.rgb();
    a = this.alpha();
    return chroma(rgb[0] * a, rgb[1] * a, rgb[2] * a, a);
  };

  blend = function(bottom, top, mode) {
    if (!blend[mode]) {
      throw 'unknown blend mode ' + mode;
    }
    return blend[mode](bottom, top);
  };

  blend_f = function(f) {
    return function(bottom, top) {
      var c0, c1;
      c0 = chroma(top).rgb();
      c1 = chroma(bottom).rgb();
      return chroma(f(c0, c1), 'rgb');
    };
  };

  each = function(f) {
    return function(c0, c1) {
      var i, o, out;
      out = [];
      for (i = o = 0; o <= 3; i = ++o) {
        out[i] = f(c0[i], c1[i]);
      }
      return out;
    };
  };

  normal = function(a, b) {
    return a;
  };

  multiply = function(a, b) {
    return a * b / 255;
  };

  darken = function(a, b) {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  };

  lighten = function(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  };

  screen = function(a, b) {
    return 255 * (1 - (1 - a / 255) * (1 - b / 255));
  };

  overlay = function(a, b) {
    if (b < 128) {
      return 2 * a * b / 255;
    } else {
      return 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
    }
  };

  burn = function(a, b) {
    return 255 * (1 - (1 - b / 255) / (a / 255));
  };

  dodge = function(a, b) {
    if (a === 255) {
      return 255;
    }
    a = 255 * (b / 255) / (1 - a / 255);
    if (a > 255) {
      return 255;
    } else {
      return a;
    }
  };

  blend.normal = blend_f(each(normal));

  blend.multiply = blend_f(each(multiply));

  blend.screen = blend_f(each(screen));

  blend.overlay = blend_f(each(overlay));

  blend.darken = blend_f(each(darken));

  blend.lighten = blend_f(each(lighten));

  blend.dodge = blend_f(each(dodge));

  blend.burn = blend_f(each(burn));

  chroma.blend = blend;

  chroma.analyze = function(data) {
    var len, o, r, val;
    r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    for (o = 0, len = data.length; o < len; o++) {
      val = data[o];
      if ((val != null) && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;
        if (val < r.min) {
          r.min = val;
        }
        if (val > r.max) {
          r.max = val;
        }
        r.count += 1;
      }
    }
    r.domain = [r.min, r.max];
    r.limits = function(mode, num) {
      return chroma.limits(r, mode, num);
    };
    return r;
  };

  chroma.scale = function(colors, positions) {
    var _classes, _colorCache, _colors, _correctLightness, _domain, _fixed, _gamma, _max, _min, _mode, _nacol, _out, _padding, _pos, _spread, _useCache, classifyValue, f, getClass, getColor, resetCache, setColors, tmap;
    _mode = 'rgb';
    _nacol = chroma('#ccc');
    _spread = 0;
    _fixed = false;
    _domain = [0, 1];
    _pos = [];
    _padding = [0, 0];
    _classes = false;
    _colors = [];
    _out = false;
    _min = 0;
    _max = 1;
    _correctLightness = false;
    _colorCache = {};
    _useCache = true;
    _gamma = 1;
    setColors = function(colors) {
      var c, col, o, ref, ref1, w;
      if (colors == null) {
        colors = ['#fff', '#000'];
      }
      if ((colors != null) && type(colors) === 'string' && (chroma.brewer != null)) {
        colors = chroma.brewer[colors] || chroma.brewer[colors.toLowerCase()] || colors;
      }
      if (type(colors) === 'array') {
        colors = colors.slice(0);
        for (c = o = 0, ref = colors.length - 1; 0 <= ref ? o <= ref : o >= ref; c = 0 <= ref ? ++o : --o) {
          col = colors[c];
          if (type(col) === "string") {
            colors[c] = chroma(col);
          }
        }
        _pos.length = 0;
        for (c = w = 0, ref1 = colors.length - 1; 0 <= ref1 ? w <= ref1 : w >= ref1; c = 0 <= ref1 ? ++w : --w) {
          _pos.push(c / (colors.length - 1));
        }
      }
      resetCache();
      return _colors = colors;
    };
    getClass = function(value) {
      var i, n;
      if (_classes != null) {
        n = _classes.length - 1;
        i = 0;
        while (i < n && value >= _classes[i]) {
          i++;
        }
        return i - 1;
      }
      return 0;
    };
    tmap = function(t) {
      return t;
    };
    classifyValue = function(value) {
      var i, maxc, minc, n, val;
      val = value;
      if (_classes.length > 2) {
        n = _classes.length - 1;
        i = getClass(value);
        minc = _classes[0] + (_classes[1] - _classes[0]) * (0 + _spread * 0.5);
        maxc = _classes[n - 1] + (_classes[n] - _classes[n - 1]) * (1 - _spread * 0.5);
        val = _min + ((_classes[i] + (_classes[i + 1] - _classes[i]) * 0.5 - minc) / (maxc - minc)) * (_max - _min);
      }
      return val;
    };
    getColor = function(val, bypassMap) {
      var c, col, i, k, o, p, ref, t;
      if (bypassMap == null) {
        bypassMap = false;
      }
      if (isNaN(val)) {
        return _nacol;
      }
      if (!bypassMap) {
        if (_classes && _classes.length > 2) {
          c = getClass(val);
          t = c / (_classes.length - 2);
        } else if (_max !== _min) {
          t = (val - _min) / (_max - _min);
        } else {
          t = 1;
        }
      } else {
        t = val;
      }
      if (!bypassMap) {
        t = tmap(t);
      }
      if (_gamma !== 1) {
        t = pow(t, _gamma);
      }
      t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));
      t = Math.min(1, Math.max(0, t));
      k = Math.floor(t * 10000);
      if (_useCache && _colorCache[k]) {
        col = _colorCache[k];
      } else {
        if (type(_colors) === 'array') {
          for (i = o = 0, ref = _pos.length - 1; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
            p = _pos[i];
            if (t <= p) {
              col = _colors[i];
              break;
            }
            if (t >= p && i === _pos.length - 1) {
              col = _colors[i];
              break;
            }
            if (t > p && t < _pos[i + 1]) {
              t = (t - p) / (_pos[i + 1] - p);
              col = chroma.interpolate(_colors[i], _colors[i + 1], t, _mode);
              break;
            }
          }
        } else if (type(_colors) === 'function') {
          col = _colors(t);
        }
        if (_useCache) {
          _colorCache[k] = col;
        }
      }
      return col;
    };
    resetCache = function() {
      return _colorCache = {};
    };
    setColors(colors);
    f = function(v) {
      var c;
      c = chroma(getColor(v));
      if (_out && c[_out]) {
        return c[_out]();
      } else {
        return c;
      }
    };
    f.classes = function(classes) {
      var d;
      if (classes != null) {
        if (type(classes) === 'array') {
          _classes = classes;
          _domain = [classes[0], classes[classes.length - 1]];
        } else {
          d = chroma.analyze(_domain);
          if (classes === 0) {
            _classes = [d.min, d.max];
          } else {
            _classes = chroma.limits(d, 'e', classes);
          }
        }
        return f;
      }
      return _classes;
    };
    f.domain = function(domain) {
      var c, d, k, len, o, ref, w;
      if (!arguments.length) {
        return _domain;
      }
      _min = domain[0];
      _max = domain[domain.length - 1];
      _pos = [];
      k = _colors.length;
      if (domain.length === k && _min !== _max) {
        for (o = 0, len = domain.length; o < len; o++) {
          d = domain[o];
          _pos.push((d - _min) / (_max - _min));
        }
      } else {
        for (c = w = 0, ref = k - 1; 0 <= ref ? w <= ref : w >= ref; c = 0 <= ref ? ++w : --w) {
          _pos.push(c / (k - 1));
        }
      }
      _domain = [_min, _max];
      return f;
    };
    f.mode = function(_m) {
      if (!arguments.length) {
        return _mode;
      }
      _mode = _m;
      resetCache();
      return f;
    };
    f.range = function(colors, _pos) {
      setColors(colors, _pos);
      return f;
    };
    f.out = function(_o) {
      _out = _o;
      return f;
    };
    f.spread = function(val) {
      if (!arguments.length) {
        return _spread;
      }
      _spread = val;
      return f;
    };
    f.correctLightness = function(v) {
      if (v == null) {
        v = true;
      }
      _correctLightness = v;
      resetCache();
      if (_correctLightness) {
        tmap = function(t) {
          var L0, L1, L_actual, L_diff, L_ideal, max_iter, pol, t0, t1;
          L0 = getColor(0, true).lab()[0];
          L1 = getColor(1, true).lab()[0];
          pol = L0 > L1;
          L_actual = getColor(t, true).lab()[0];
          L_ideal = L0 + (L1 - L0) * t;
          L_diff = L_actual - L_ideal;
          t0 = 0;
          t1 = 1;
          max_iter = 20;
          while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
            (function() {
              if (pol) {
                L_diff *= -1;
              }
              if (L_diff < 0) {
                t0 = t;
                t += (t1 - t) * 0.5;
              } else {
                t1 = t;
                t += (t0 - t) * 0.5;
              }
              L_actual = getColor(t, true).lab()[0];
              return L_diff = L_actual - L_ideal;
            })();
          }
          return t;
        };
      } else {
        tmap = function(t) {
          return t;
        };
      }
      return f;
    };
    f.padding = function(p) {
      if (p != null) {
        if (type(p) === 'number') {
          p = [p, p];
        }
        _padding = p;
        return f;
      } else {
        return _padding;
      }
    };
    f.colors = function(numColors, out) {
      var dd, dm, i, o, ref, result, results, samples, w;
      if (arguments.length < 2) {
        out = 'hex';
      }
      result = [];
      if (arguments.length === 0) {
        result = _colors.slice(0);
      } else if (numColors === 1) {
        result = [f(0.5)];
      } else if (numColors > 1) {
        dm = _domain[0];
        dd = _domain[1] - dm;
        result = (function() {
          results = [];
          for (var o = 0; 0 <= numColors ? o < numColors : o > numColors; 0 <= numColors ? o++ : o--){ results.push(o); }
          return results;
        }).apply(this).map(function(i) {
          return f(dm + i / (numColors - 1) * dd);
        });
      } else {
        colors = [];
        samples = [];
        if (_classes && _classes.length > 2) {
          for (i = w = 1, ref = _classes.length; 1 <= ref ? w < ref : w > ref; i = 1 <= ref ? ++w : --w) {
            samples.push((_classes[i - 1] + _classes[i]) * 0.5);
          }
        } else {
          samples = _domain;
        }
        result = samples.map(function(v) {
          return f(v);
        });
      }
      if (chroma[out]) {
        result = result.map(function(c) {
          return c[out]();
        });
      }
      return result;
    };
    f.cache = function(c) {
      if (c != null) {
        _useCache = c;
        return f;
      } else {
        return _useCache;
      }
    };
    f.gamma = function(g) {
      if (g != null) {
        _gamma = g;
        return f;
      } else {
        return _gamma;
      }
    };
    return f;
  };

  if (chroma.scales == null) {
    chroma.scales = {};
  }

  chroma.scales.cool = function() {
    return chroma.scale([chroma.hsl(180, 1, .9), chroma.hsl(250, .7, .4)]);
  };

  chroma.scales.hot = function() {
    return chroma.scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
  };

  chroma.analyze = function(data, key, filter) {
    var add, k, len, o, r, val, visit;
    r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    if (filter == null) {
      filter = function() {
        return true;
      };
    }
    add = function(val) {
      if ((val != null) && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;
        if (val < r.min) {
          r.min = val;
        }
        if (val > r.max) {
          r.max = val;
        }
        r.count += 1;
      }
    };
    visit = function(val, k) {
      if (filter(val, k)) {
        if ((key != null) && type(key) === 'function') {
          return add(key(val));
        } else if ((key != null) && type(key) === 'string' || type(key) === 'number') {
          return add(val[key]);
        } else {
          return add(val);
        }
      }
    };
    if (type(data) === 'array') {
      for (o = 0, len = data.length; o < len; o++) {
        val = data[o];
        visit(val);
      }
    } else {
      for (k in data) {
        val = data[k];
        visit(val, k);
      }
    }
    r.domain = [r.min, r.max];
    r.limits = function(mode, num) {
      return chroma.limits(r, mode, num);
    };
    return r;
  };

  chroma.limits = function(data, mode, num) {
    var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, assignments, best, centroids, cluster, clusterSizes, dist, i, j, kClusters, limits, max_log, min, min_log, mindist, n, nb_iters, newCentroids, o, p, pb, pr, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, repeat, sum, tmpKMeansBreaks, v, value, values, w;
    if (mode == null) {
      mode = 'equal';
    }
    if (num == null) {
      num = 7;
    }
    if (type(data) === 'array') {
      data = chroma.analyze(data);
    }
    min = data.min;
    max = data.max;
    sum = data.sum;
    values = data.values.sort(function(a, b) {
      return a - b;
    });
    if (num === 1) {
      return [min, max];
    }
    limits = [];
    if (mode.substr(0, 1) === 'c') {
      limits.push(min);
      limits.push(max);
    }
    if (mode.substr(0, 1) === 'e') {
      limits.push(min);
      for (i = o = 1, ref = num - 1; 1 <= ref ? o <= ref : o >= ref; i = 1 <= ref ? ++o : --o) {
        limits.push(min + (i / num) * (max - min));
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'l') {
      if (min <= 0) {
        throw 'Logarithmic scales are only possible for values > 0';
      }
      min_log = Math.LOG10E * log(min);
      max_log = Math.LOG10E * log(max);
      limits.push(min);
      for (i = w = 1, ref1 = num - 1; 1 <= ref1 ? w <= ref1 : w >= ref1; i = 1 <= ref1 ? ++w : --w) {
        limits.push(pow(10, min_log + (i / num) * (max_log - min_log)));
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'q') {
      limits.push(min);
      for (i = aa = 1, ref2 = num - 1; 1 <= ref2 ? aa <= ref2 : aa >= ref2; i = 1 <= ref2 ? ++aa : --aa) {
        p = (values.length - 1) * i / num;
        pb = floor(p);
        if (pb === p) {
          limits.push(values[pb]);
        } else {
          pr = p - pb;
          limits.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
        }
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'k') {

      /*
      implementation based on
      http://code.google.com/p/figue/source/browse/trunk/figue.js#336
      simplified for 1-d input values
       */
      n = values.length;
      assignments = new Array(n);
      clusterSizes = new Array(num);
      repeat = true;
      nb_iters = 0;
      centroids = null;
      centroids = [];
      centroids.push(min);
      for (i = ab = 1, ref3 = num - 1; 1 <= ref3 ? ab <= ref3 : ab >= ref3; i = 1 <= ref3 ? ++ab : --ab) {
        centroids.push(min + (i / num) * (max - min));
      }
      centroids.push(max);
      while (repeat) {
        for (j = ac = 0, ref4 = num - 1; 0 <= ref4 ? ac <= ref4 : ac >= ref4; j = 0 <= ref4 ? ++ac : --ac) {
          clusterSizes[j] = 0;
        }
        for (i = ad = 0, ref5 = n - 1; 0 <= ref5 ? ad <= ref5 : ad >= ref5; i = 0 <= ref5 ? ++ad : --ad) {
          value = values[i];
          mindist = Number.MAX_VALUE;
          for (j = ae = 0, ref6 = num - 1; 0 <= ref6 ? ae <= ref6 : ae >= ref6; j = 0 <= ref6 ? ++ae : --ae) {
            dist = abs(centroids[j] - value);
            if (dist < mindist) {
              mindist = dist;
              best = j;
            }
          }
          clusterSizes[best]++;
          assignments[i] = best;
        }
        newCentroids = new Array(num);
        for (j = af = 0, ref7 = num - 1; 0 <= ref7 ? af <= ref7 : af >= ref7; j = 0 <= ref7 ? ++af : --af) {
          newCentroids[j] = null;
        }
        for (i = ag = 0, ref8 = n - 1; 0 <= ref8 ? ag <= ref8 : ag >= ref8; i = 0 <= ref8 ? ++ag : --ag) {
          cluster = assignments[i];
          if (newCentroids[cluster] === null) {
            newCentroids[cluster] = values[i];
          } else {
            newCentroids[cluster] += values[i];
          }
        }
        for (j = ah = 0, ref9 = num - 1; 0 <= ref9 ? ah <= ref9 : ah >= ref9; j = 0 <= ref9 ? ++ah : --ah) {
          newCentroids[j] *= 1 / clusterSizes[j];
        }
        repeat = false;
        for (j = ai = 0, ref10 = num - 1; 0 <= ref10 ? ai <= ref10 : ai >= ref10; j = 0 <= ref10 ? ++ai : --ai) {
          if (newCentroids[j] !== centroids[i]) {
            repeat = true;
            break;
          }
        }
        centroids = newCentroids;
        nb_iters++;
        if (nb_iters > 200) {
          repeat = false;
        }
      }
      kClusters = {};
      for (j = aj = 0, ref11 = num - 1; 0 <= ref11 ? aj <= ref11 : aj >= ref11; j = 0 <= ref11 ? ++aj : --aj) {
        kClusters[j] = [];
      }
      for (i = ak = 0, ref12 = n - 1; 0 <= ref12 ? ak <= ref12 : ak >= ref12; i = 0 <= ref12 ? ++ak : --ak) {
        cluster = assignments[i];
        kClusters[cluster].push(values[i]);
      }
      tmpKMeansBreaks = [];
      for (j = al = 0, ref13 = num - 1; 0 <= ref13 ? al <= ref13 : al >= ref13; j = 0 <= ref13 ? ++al : --al) {
        tmpKMeansBreaks.push(kClusters[j][0]);
        tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
      }
      tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
        return a - b;
      });
      limits.push(tmpKMeansBreaks[0]);
      for (i = am = 1, ref14 = tmpKMeansBreaks.length - 1; am <= ref14; i = am += 2) {
        v = tmpKMeansBreaks[i];
        if (!isNaN(v) && limits.indexOf(v) === -1) {
          limits.push(v);
        }
      }
    }
    return limits;
  };

  hsi2rgb = function(h, s, i) {

    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
     */
    var args, b, g, r;
    args = unpack(arguments);
    h = args[0], s = args[1], i = args[2];
    if (isNaN(h)) {
      h = 0;
    }
    h /= 360;
    if (h < 1 / 3) {
      b = (1 - s) / 3;
      r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      g = 1 - (b + r);
    } else if (h < 2 / 3) {
      h -= 1 / 3;
      r = (1 - s) / 3;
      g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      b = 1 - (r + g);
    } else {
      h -= 2 / 3;
      g = (1 - s) / 3;
      b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      r = 1 - (g + b);
    }
    r = limit(i * r * 3);
    g = limit(i * g * 3);
    b = limit(i * b * 3);
    return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
  };

  rgb2hsi = function() {

    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
     */
    var b, g, h, i, min, r, ref, s;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    TWOPI = Math.PI * 2;
    r /= 255;
    g /= 255;
    b /= 255;
    min = Math.min(r, g, b);
    i = (r + g + b) / 3;
    s = 1 - min / i;
    if (s === 0) {
      h = 0;
    } else {
      h = ((r - g) + (r - b)) / 2;
      h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b));
      h = Math.acos(h);
      if (b > g) {
        h = TWOPI - h;
      }
      h /= TWOPI;
    }
    return [h * 360, s, i];
  };

  chroma.hsi = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsi']), function(){});
  };

  _input.hsi = hsi2rgb;

  Color.prototype.hsi = function() {
    return rgb2hsi(this._rgb);
  };

  interpolate_hsx = function(col1, col2, f, m) {
    var dh, hue, hue0, hue1, lbv, lbv0, lbv1, res, sat, sat0, sat1, xyz0, xyz1;
    if (m === 'hsl') {
      xyz0 = col1.hsl();
      xyz1 = col2.hsl();
    } else if (m === 'hsv') {
      xyz0 = col1.hsv();
      xyz1 = col2.hsv();
    } else if (m === 'hcg') {
      xyz0 = col1.hcg();
      xyz1 = col2.hcg();
    } else if (m === 'hsi') {
      xyz0 = col1.hsi();
      xyz1 = col2.hsi();
    } else if (m === 'lch' || m === 'hcl') {
      m = 'hcl';
      xyz0 = col1.hcl();
      xyz1 = col2.hcl();
    }
    if (m.substr(0, 1) === 'h') {
      hue0 = xyz0[0], sat0 = xyz0[1], lbv0 = xyz0[2];
      hue1 = xyz1[0], sat1 = xyz1[1], lbv1 = xyz1[2];
    }
    if (!isNaN(hue0) && !isNaN(hue1)) {
      if (hue1 > hue0 && hue1 - hue0 > 180) {
        dh = hue1 - (hue0 + 360);
      } else if (hue1 < hue0 && hue0 - hue1 > 180) {
        dh = hue1 + 360 - hue0;
      } else {
        dh = hue1 - hue0;
      }
      hue = hue0 + f * dh;
    } else if (!isNaN(hue0)) {
      hue = hue0;
      if ((lbv1 === 1 || lbv1 === 0) && m !== 'hsv') {
        sat = sat0;
      }
    } else if (!isNaN(hue1)) {
      hue = hue1;
      if ((lbv0 === 1 || lbv0 === 0) && m !== 'hsv') {
        sat = sat1;
      }
    } else {
      hue = Number.NaN;
    }
    if (sat == null) {
      sat = sat0 + f * (sat1 - sat0);
    }
    lbv = lbv0 + f * (lbv1 - lbv0);
    return res = chroma[m](hue, sat, lbv);
  };

  _interpolators = _interpolators.concat((function() {
    var len, o, ref, results;
    ref = ['hsv', 'hsl', 'hsi', 'hcl', 'lch', 'hcg'];
    results = [];
    for (o = 0, len = ref.length; o < len; o++) {
      m = ref[o];
      results.push([m, interpolate_hsx]);
    }
    return results;
  })());

  interpolate_num = function(col1, col2, f, m) {
    var n1, n2;
    n1 = col1.num();
    n2 = col2.num();
    return chroma.num(n1 + (n2 - n1) * f, 'num');
  };

  _interpolators.push(['num', interpolate_num]);

  interpolate_lab = function(col1, col2, f, m) {
    var res, xyz0, xyz1;
    xyz0 = col1.lab();
    xyz1 = col2.lab();
    return res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
  };

  _interpolators.push(['lab', interpolate_lab]);

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cleanPropsByTag = __webpack_require__(409);

var _cleanPropsByTag2 = _interopRequireDefault(_cleanPropsByTag);

var _futils = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var createTag = function createTag() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$defaultProps = options.defaultProps,
      defaultProps = _options$defaultProps === undefined ? {
    is: "div",
    blacklist: { dummy: 1 }
  } : _options$defaultProps,
      _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? "Cleaned" : _options$displayName;


  var Component = function Component(p) {
    var innerRef = p.innerRef,
        is = p.is,
        blacklist = p.blacklist,
        theme = p.theme,
        props = _objectWithoutProperties(p, ["innerRef", "is", "blacklist", "theme"]);

    return _react2.default.createElement(is, _extends({
      ref: innerRef
    }, (0, _futils.omit)(blacklist, (0, _cleanPropsByTag2.default)(is, props))));
  };

  Component.displayName = displayName;

  Component.styledComponentId = "lol";
  Component.defaultProps = defaultProps;
  return Component;
};

exports.default = createTag();

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

!function(o,n){ true?n(exports,__webpack_require__(410),__webpack_require__(412),__webpack_require__(612)):"function"==typeof define&&define.amd?define(["exports","react-html-attributes","ramda","fast-memoize"],n):n(o.cleanPropsByTag={},o.htmlAttributes,o.R,o.memoize)}(this,function(o,n,e,t){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n,t=t&&t.hasOwnProperty("default")?t.default:t;var a=["children","dangerouslySetInnerHTML","key","ref","autoFocus","defaultValue","valueLink","defaultChecked","checkedLink","innerHTML","suppressContentEditableWarning","onFocusIn","onFocusOut","className","onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onCopyCapture","onCutCapture","onPasteCapture","onCompositionEndCapture","onCompositionStartCapture","onCompositionUpdateCapture","onKeyDownCapture","onKeyPressCapture","onKeyUpCapture","onFocusCapture","onBlurCapture","onChangeCapture","onInputCapture","onSubmitCapture","onClickCapture","onContextMenuCapture","onDoubleClickCapture","onDragCapture","onDragEndCapture","onDragEnterCapture","onDragExitCapture","onDragLeaveCapture","onDragOverCapture","onDragStartCapture","onDropCapture","onMouseDownCapture","onMouseEnterCapture","onMouseLeaveCapture","onMouseMoveCapture","onMouseOutCapture","onMouseOverCapture","onMouseUpCapture","onSelectCapture","onTouchCancelCapture","onTouchEndCapture","onTouchMoveCapture","onTouchStartCapture","onScrollCapture","onWheelCapture","onAbortCapture","onCanPlayCapture","onCanPlayThroughCapture","onDurationChangeCapture","onEmptiedCapture","onEncryptedCapture","onEndedCapture","onErrorCapture","onLoadedDataCapture","onLoadedMetadataCapture","onLoadStartCapture","onPauseCapture","onPlayCapture","onPlayingCapture","onProgressCapture","onRateChangeCapture","onSeekedCapture","onSeekingCapture","onStalledCapture","onSuspendCapture","onTimeUpdateCapture","onVolumeChangeCapture","onWaitingCapture","onLoadCapture","onAnimationStartCapture","onAnimationEndCapture","onAnimationIterationCapture","onTransitionEndCapture"],r=n["*"],u=t(function(o,t){return"string"!=typeof o||function(o){return a.includes(o)}(t)||function(o,t){return e.contains(t,r)||e.contains(t,e.propOr({},o,n))}(o,t)}),p=e.curry(function(o,n){return e.pickBy(function(n,e){return u(o,e)})(n)});o.shouldForwardProp=u,o.default=p,Object.defineProperty(o,"__esModule",{value:!0})});


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reactHtmlAttributes = __webpack_require__(411);

exports.default = reactHtmlAttributes;

module.exports = reactHtmlAttributes; // for CommonJS compatibility

/***/ }),
/* 411 */
/***/ (function(module, exports) {

module.exports = {"*":["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"],"a":["coords","download","href","name","rel","shape","target","type"],"abbr":["title"],"applet":["alt","height","name","width"],"area":["alt","coords","download","href","rel","shape","target","type"],"audio":["controls","loop","muted","preload","src"],"base":["href","target"],"basefont":["size"],"bdo":["dir"],"blockquote":["cite"],"button":["disabled","form","name","type","value"],"canvas":["height","width"],"col":["span","width"],"colgroup":["span","width"],"data":["value"],"del":["cite"],"details":["open"],"dfn":["title"],"dialog":["open"],"embed":["height","src","type","width"],"fieldset":["disabled","form","name"],"font":["size"],"form":["accept","action","method","name","target"],"frame":["name","scrolling","src"],"frameset":["cols","rows"],"head":["profile"],"hr":["size","width"],"html":["manifest"],"iframe":["height","name","sandbox","scrolling","src","width"],"img":["alt","height","name","sizes","src","width"],"input":["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"],"ins":["cite"],"keygen":["challenge","disabled","form","name"],"label":["form"],"li":["type","value"],"link":["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"],"map":["name"],"meta":["content","name"],"meter":["high","low","max","min","optimum","value"],"object":["data","form","height","name","type","width"],"ol":["reversed","start","type"],"optgroup":["disabled","label"],"option":["disabled","label","selected","value"],"output":["form","name"],"param":["name","type","value"],"pre":["width"],"progress":["max","value"],"q":["cite"],"script":["async","defer","integrity","nonce","src","type"],"select":["defaultValue","disabled","form","multiple","name","onChange","required","size","value"],"slot":["name"],"source":["media","sizes","src","type"],"style":["media","nonce","title","type"],"table":["summary","width"],"td":["headers","height","scope","width"],"textarea":["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"],"th":["headers","height","scope","width"],"track":["default","kind","label","src"],"ul":["type"],"video":["controls","height","loop","muted","poster","preload","src","width"],"svg":["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"],"elements":{"html":["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],"svg":["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]}}

/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__F__ = __webpack_require__(413);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_0__F__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__T__ = __webpack_require__(414);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_1__T__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(415);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __WEBPACK_IMPORTED_MODULE_2____["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return __WEBPACK_IMPORTED_MODULE_3__add__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addIndex__ = __webpack_require__(416);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "addIndex", function() { return __WEBPACK_IMPORTED_MODULE_4__addIndex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adjust__ = __webpack_require__(278);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "adjust", function() { return __WEBPACK_IMPORTED_MODULE_5__adjust__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all__ = __webpack_require__(417);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return __WEBPACK_IMPORTED_MODULE_6__all__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__allPass__ = __webpack_require__(419);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "allPass", function() { return __WEBPACK_IMPORTED_MODULE_7__allPass__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__always__ = __webpack_require__(188);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "always", function() { return __WEBPACK_IMPORTED_MODULE_8__always__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__and__ = __webpack_require__(282);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return __WEBPACK_IMPORTED_MODULE_9__and__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__any__ = __webpack_require__(283);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return __WEBPACK_IMPORTED_MODULE_10__any__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__anyPass__ = __webpack_require__(421);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "anyPass", function() { return __WEBPACK_IMPORTED_MODULE_11__anyPass__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ap__ = __webpack_require__(246);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return __WEBPACK_IMPORTED_MODULE_12__ap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aperture__ = __webpack_require__(422);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "aperture", function() { return __WEBPACK_IMPORTED_MODULE_13__aperture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__append__ = __webpack_require__(425);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return __WEBPACK_IMPORTED_MODULE_14__append__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__apply__ = __webpack_require__(285);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return __WEBPACK_IMPORTED_MODULE_15__apply__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__applySpec__ = __webpack_require__(426);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applySpec", function() { return __WEBPACK_IMPORTED_MODULE_16__applySpec__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__applyTo__ = __webpack_require__(427);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyTo", function() { return __WEBPACK_IMPORTED_MODULE_17__applyTo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ascend__ = __webpack_require__(428);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ascend", function() { return __WEBPACK_IMPORTED_MODULE_18__ascend__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assoc__ = __webpack_require__(213);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assoc", function() { return __WEBPACK_IMPORTED_MODULE_19__assoc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assocPath__ = __webpack_require__(287);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assocPath", function() { return __WEBPACK_IMPORTED_MODULE_20__assocPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__binary__ = __webpack_require__(429);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "binary", function() { return __WEBPACK_IMPORTED_MODULE_21__binary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bind__ = __webpack_require__(280);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return __WEBPACK_IMPORTED_MODULE_22__bind__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__both__ = __webpack_require__(430);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "both", function() { return __WEBPACK_IMPORTED_MODULE_23__both__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__call__ = __webpack_require__(431);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return __WEBPACK_IMPORTED_MODULE_24__call__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chain__ = __webpack_require__(249);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return __WEBPACK_IMPORTED_MODULE_25__chain__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__clamp__ = __webpack_require__(435);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return __WEBPACK_IMPORTED_MODULE_26__clamp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__clone__ = __webpack_require__(436);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return __WEBPACK_IMPORTED_MODULE_27__clone__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__comparator__ = __webpack_require__(437);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "comparator", function() { return __WEBPACK_IMPORTED_MODULE_28__comparator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__complement__ = __webpack_require__(438);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return __WEBPACK_IMPORTED_MODULE_29__complement__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__compose__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_30__compose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__composeK__ = __webpack_require__(295);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "composeK", function() { return __WEBPACK_IMPORTED_MODULE_31__composeK__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__composeP__ = __webpack_require__(440);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "composeP", function() { return __WEBPACK_IMPORTED_MODULE_32__composeP__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__concat__ = __webpack_require__(253);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return __WEBPACK_IMPORTED_MODULE_33__concat__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__cond__ = __webpack_require__(449);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cond", function() { return __WEBPACK_IMPORTED_MODULE_34__cond__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__construct__ = __webpack_require__(450);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "construct", function() { return __WEBPACK_IMPORTED_MODULE_35__construct__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__constructN__ = __webpack_require__(300);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "constructN", function() { return __WEBPACK_IMPORTED_MODULE_36__constructN__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__contains__ = __webpack_require__(451);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return __WEBPACK_IMPORTED_MODULE_37__contains__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__converge__ = __webpack_require__(301);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "converge", function() { return __WEBPACK_IMPORTED_MODULE_38__converge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__countBy__ = __webpack_require__(452);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return __WEBPACK_IMPORTED_MODULE_39__countBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__curry__ = __webpack_require__(248);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return __WEBPACK_IMPORTED_MODULE_40__curry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__curryN__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curryN", function() { return __WEBPACK_IMPORTED_MODULE_41__curryN__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__dec__ = __webpack_require__(454);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dec", function() { return __WEBPACK_IMPORTED_MODULE_42__dec__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__defaultTo__ = __webpack_require__(302);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTo", function() { return __WEBPACK_IMPORTED_MODULE_43__defaultTo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__descend__ = __webpack_require__(455);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "descend", function() { return __WEBPACK_IMPORTED_MODULE_44__descend__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__difference__ = __webpack_require__(303);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return __WEBPACK_IMPORTED_MODULE_45__difference__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__differenceWith__ = __webpack_require__(304);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "differenceWith", function() { return __WEBPACK_IMPORTED_MODULE_46__differenceWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__dissoc__ = __webpack_require__(305);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dissoc", function() { return __WEBPACK_IMPORTED_MODULE_47__dissoc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__dissocPath__ = __webpack_require__(456);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dissocPath", function() { return __WEBPACK_IMPORTED_MODULE_48__dissocPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__divide__ = __webpack_require__(457);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return __WEBPACK_IMPORTED_MODULE_49__divide__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__drop__ = __webpack_require__(307);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return __WEBPACK_IMPORTED_MODULE_50__drop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__dropLast__ = __webpack_require__(459);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropLast", function() { return __WEBPACK_IMPORTED_MODULE_51__dropLast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__dropLastWhile__ = __webpack_require__(463);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropLastWhile", function() { return __WEBPACK_IMPORTED_MODULE_52__dropLastWhile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__dropRepeats__ = __webpack_require__(466);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropRepeats", function() { return __WEBPACK_IMPORTED_MODULE_53__dropRepeats__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__dropRepeatsWith__ = __webpack_require__(309);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropRepeatsWith", function() { return __WEBPACK_IMPORTED_MODULE_54__dropRepeatsWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__dropWhile__ = __webpack_require__(467);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropWhile", function() { return __WEBPACK_IMPORTED_MODULE_55__dropWhile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__either__ = __webpack_require__(469);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "either", function() { return __WEBPACK_IMPORTED_MODULE_56__either__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__empty__ = __webpack_require__(312);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return __WEBPACK_IMPORTED_MODULE_57__empty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__endsWith__ = __webpack_require__(470);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return __WEBPACK_IMPORTED_MODULE_58__endsWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__eqBy__ = __webpack_require__(471);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "eqBy", function() { return __WEBPACK_IMPORTED_MODULE_59__eqBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__eqProps__ = __webpack_require__(472);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "eqProps", function() { return __WEBPACK_IMPORTED_MODULE_60__eqProps__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__equals__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return __WEBPACK_IMPORTED_MODULE_61__equals__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__evolve__ = __webpack_require__(473);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "evolve", function() { return __WEBPACK_IMPORTED_MODULE_62__evolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__filter__ = __webpack_require__(254);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return __WEBPACK_IMPORTED_MODULE_63__filter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__find__ = __webpack_require__(474);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return __WEBPACK_IMPORTED_MODULE_64__find__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__findIndex__ = __webpack_require__(476);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return __WEBPACK_IMPORTED_MODULE_65__findIndex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__findLast__ = __webpack_require__(478);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findLast", function() { return __WEBPACK_IMPORTED_MODULE_66__findLast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__findLastIndex__ = __webpack_require__(480);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return __WEBPACK_IMPORTED_MODULE_67__findLastIndex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__flatten__ = __webpack_require__(482);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return __WEBPACK_IMPORTED_MODULE_68__flatten__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__flip__ = __webpack_require__(221);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return __WEBPACK_IMPORTED_MODULE_69__flip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__forEach__ = __webpack_require__(483);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return __WEBPACK_IMPORTED_MODULE_70__forEach__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__forEachObjIndexed__ = __webpack_require__(484);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forEachObjIndexed", function() { return __WEBPACK_IMPORTED_MODULE_71__forEachObjIndexed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__fromPairs__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fromPairs", function() { return __WEBPACK_IMPORTED_MODULE_72__fromPairs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__groupBy__ = __webpack_require__(486);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return __WEBPACK_IMPORTED_MODULE_73__groupBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__groupWith__ = __webpack_require__(487);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "groupWith", function() { return __WEBPACK_IMPORTED_MODULE_74__groupWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__gt__ = __webpack_require__(488);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return __WEBPACK_IMPORTED_MODULE_75__gt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__gte__ = __webpack_require__(489);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "gte", function() { return __WEBPACK_IMPORTED_MODULE_76__gte__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__has__ = __webpack_require__(490);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return __WEBPACK_IMPORTED_MODULE_77__has__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__hasIn__ = __webpack_require__(491);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return __WEBPACK_IMPORTED_MODULE_78__hasIn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__head__ = __webpack_require__(492);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return __WEBPACK_IMPORTED_MODULE_79__head__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__identical__ = __webpack_require__(298);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "identical", function() { return __WEBPACK_IMPORTED_MODULE_80__identical__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__identity__ = __webpack_require__(259);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return __WEBPACK_IMPORTED_MODULE_81__identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__ifElse__ = __webpack_require__(493);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ifElse", function() { return __WEBPACK_IMPORTED_MODULE_82__ifElse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__inc__ = __webpack_require__(494);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inc", function() { return __WEBPACK_IMPORTED_MODULE_83__inc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__indexBy__ = __webpack_require__(495);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return __WEBPACK_IMPORTED_MODULE_84__indexBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__indexOf__ = __webpack_require__(496);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return __WEBPACK_IMPORTED_MODULE_85__indexOf__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__init__ = __webpack_require__(497);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return __WEBPACK_IMPORTED_MODULE_86__init__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__innerJoin__ = __webpack_require__(498);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "innerJoin", function() { return __WEBPACK_IMPORTED_MODULE_87__innerJoin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__insert__ = __webpack_require__(499);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return __WEBPACK_IMPORTED_MODULE_88__insert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__insertAll__ = __webpack_require__(500);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "insertAll", function() { return __WEBPACK_IMPORTED_MODULE_89__insertAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__intersection__ = __webpack_require__(501);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return __WEBPACK_IMPORTED_MODULE_90__intersection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__intersperse__ = __webpack_require__(503);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "intersperse", function() { return __WEBPACK_IMPORTED_MODULE_91__intersperse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__into__ = __webpack_require__(504);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "into", function() { return __WEBPACK_IMPORTED_MODULE_92__into__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__invert__ = __webpack_require__(507);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return __WEBPACK_IMPORTED_MODULE_93__invert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__invertObj__ = __webpack_require__(508);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "invertObj", function() { return __WEBPACK_IMPORTED_MODULE_94__invertObj__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__invoker__ = __webpack_require__(201);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "invoker", function() { return __WEBPACK_IMPORTED_MODULE_95__invoker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__is__ = __webpack_require__(316);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return __WEBPACK_IMPORTED_MODULE_96__is__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__isEmpty__ = __webpack_require__(509);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return __WEBPACK_IMPORTED_MODULE_97__isEmpty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__isNil__ = __webpack_require__(288);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return __WEBPACK_IMPORTED_MODULE_98__isNil__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__join__ = __webpack_require__(510);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return __WEBPACK_IMPORTED_MODULE_99__join__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__juxt__ = __webpack_require__(317);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "juxt", function() { return __WEBPACK_IMPORTED_MODULE_100__juxt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__keys__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_101__keys__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__keysIn__ = __webpack_require__(511);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keysIn", function() { return __WEBPACK_IMPORTED_MODULE_102__keysIn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__last__ = __webpack_require__(310);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return __WEBPACK_IMPORTED_MODULE_103__last__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__lastIndexOf__ = __webpack_require__(512);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return __WEBPACK_IMPORTED_MODULE_104__lastIndexOf__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__length__ = __webpack_require__(318);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return __WEBPACK_IMPORTED_MODULE_105__length__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__lens__ = __webpack_require__(222);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lens", function() { return __WEBPACK_IMPORTED_MODULE_106__lens__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__lensIndex__ = __webpack_require__(513);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lensIndex", function() { return __WEBPACK_IMPORTED_MODULE_107__lensIndex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__lensPath__ = __webpack_require__(514);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lensPath", function() { return __WEBPACK_IMPORTED_MODULE_108__lensPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__lensProp__ = __webpack_require__(515);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lensProp", function() { return __WEBPACK_IMPORTED_MODULE_109__lensProp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__lift__ = __webpack_require__(216);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lift", function() { return __WEBPACK_IMPORTED_MODULE_110__lift__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__liftN__ = __webpack_require__(289);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "liftN", function() { return __WEBPACK_IMPORTED_MODULE_111__liftN__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__lt__ = __webpack_require__(516);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return __WEBPACK_IMPORTED_MODULE_112__lt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__lte__ = __webpack_require__(517);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lte", function() { return __WEBPACK_IMPORTED_MODULE_113__lte__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__map__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_114__map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__mapAccum__ = __webpack_require__(518);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mapAccum", function() { return __WEBPACK_IMPORTED_MODULE_115__mapAccum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__mapAccumRight__ = __webpack_require__(519);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mapAccumRight", function() { return __WEBPACK_IMPORTED_MODULE_116__mapAccumRight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__mapObjIndexed__ = __webpack_require__(520);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mapObjIndexed", function() { return __WEBPACK_IMPORTED_MODULE_117__mapObjIndexed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__match__ = __webpack_require__(521);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return __WEBPACK_IMPORTED_MODULE_118__match__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__mathMod__ = __webpack_require__(522);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mathMod", function() { return __WEBPACK_IMPORTED_MODULE_119__mathMod__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__max__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_120__max__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__maxBy__ = __webpack_require__(523);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return __WEBPACK_IMPORTED_MODULE_121__maxBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__mean__ = __webpack_require__(320);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return __WEBPACK_IMPORTED_MODULE_122__mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__median__ = __webpack_require__(524);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "median", function() { return __WEBPACK_IMPORTED_MODULE_123__median__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__memoize__ = __webpack_require__(525);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return __WEBPACK_IMPORTED_MODULE_124__memoize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__memoizeWith__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeWith", function() { return __WEBPACK_IMPORTED_MODULE_125__memoizeWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__merge__ = __webpack_require__(526);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_126__merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__mergeAll__ = __webpack_require__(527);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return __WEBPACK_IMPORTED_MODULE_127__mergeAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__mergeDeepLeft__ = __webpack_require__(528);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepLeft", function() { return __WEBPACK_IMPORTED_MODULE_128__mergeDeepLeft__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__mergeDeepRight__ = __webpack_require__(529);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepRight", function() { return __WEBPACK_IMPORTED_MODULE_129__mergeDeepRight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__mergeDeepWith__ = __webpack_require__(530);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWith", function() { return __WEBPACK_IMPORTED_MODULE_130__mergeDeepWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__mergeDeepWithKey__ = __webpack_require__(223);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWithKey", function() { return __WEBPACK_IMPORTED_MODULE_131__mergeDeepWithKey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__mergeWith__ = __webpack_require__(531);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWith", function() { return __WEBPACK_IMPORTED_MODULE_132__mergeWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__mergeWithKey__ = __webpack_require__(263);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWithKey", function() { return __WEBPACK_IMPORTED_MODULE_133__mergeWithKey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__min__ = __webpack_require__(532);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_134__min__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__minBy__ = __webpack_require__(533);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return __WEBPACK_IMPORTED_MODULE_135__minBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__modulo__ = __webpack_require__(534);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return __WEBPACK_IMPORTED_MODULE_136__modulo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__multiply__ = __webpack_require__(323);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return __WEBPACK_IMPORTED_MODULE_137__multiply__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__nAry__ = __webpack_require__(214);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nAry", function() { return __WEBPACK_IMPORTED_MODULE_138__nAry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__negate__ = __webpack_require__(535);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return __WEBPACK_IMPORTED_MODULE_139__negate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__none__ = __webpack_require__(536);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "none", function() { return __WEBPACK_IMPORTED_MODULE_140__none__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__not__ = __webpack_require__(293);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return __WEBPACK_IMPORTED_MODULE_141__not__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__nth__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nth", function() { return __WEBPACK_IMPORTED_MODULE_142__nth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__nthArg__ = __webpack_require__(537);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nthArg", function() { return __WEBPACK_IMPORTED_MODULE_143__nthArg__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__o__ = __webpack_require__(538);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_144__o__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__objOf__ = __webpack_require__(315);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "objOf", function() { return __WEBPACK_IMPORTED_MODULE_145__objOf__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__of__ = __webpack_require__(539);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return __WEBPACK_IMPORTED_MODULE_146__of__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__omit__ = __webpack_require__(541);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return __WEBPACK_IMPORTED_MODULE_147__omit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__once__ = __webpack_require__(542);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return __WEBPACK_IMPORTED_MODULE_148__once__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__or__ = __webpack_require__(311);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return __WEBPACK_IMPORTED_MODULE_149__or__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__over__ = __webpack_require__(324);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "over", function() { return __WEBPACK_IMPORTED_MODULE_150__over__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__pair__ = __webpack_require__(543);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return __WEBPACK_IMPORTED_MODULE_151__pair__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__partial__ = __webpack_require__(544);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return __WEBPACK_IMPORTED_MODULE_152__partial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__partialRight__ = __webpack_require__(545);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "partialRight", function() { return __WEBPACK_IMPORTED_MODULE_153__partialRight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__partition__ = __webpack_require__(546);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return __WEBPACK_IMPORTED_MODULE_154__partition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__path__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return __WEBPACK_IMPORTED_MODULE_155__path__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__pathEq__ = __webpack_require__(547);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pathEq", function() { return __WEBPACK_IMPORTED_MODULE_156__pathEq__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_157__pathOr__ = __webpack_require__(548);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pathOr", function() { return __WEBPACK_IMPORTED_MODULE_157__pathOr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_158__pathSatisfies__ = __webpack_require__(549);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pathSatisfies", function() { return __WEBPACK_IMPORTED_MODULE_158__pathSatisfies__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_159__pick__ = __webpack_require__(550);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return __WEBPACK_IMPORTED_MODULE_159__pick__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_160__pickAll__ = __webpack_require__(326);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pickAll", function() { return __WEBPACK_IMPORTED_MODULE_160__pickAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_161__pickBy__ = __webpack_require__(551);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pickBy", function() { return __WEBPACK_IMPORTED_MODULE_161__pickBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_162__pipe__ = __webpack_require__(294);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return __WEBPACK_IMPORTED_MODULE_162__pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_163__pipeK__ = __webpack_require__(552);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipeK", function() { return __WEBPACK_IMPORTED_MODULE_163__pipeK__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_164__pipeP__ = __webpack_require__(296);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipeP", function() { return __WEBPACK_IMPORTED_MODULE_164__pipeP__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_165__pluck__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return __WEBPACK_IMPORTED_MODULE_165__pluck__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_166__prepend__ = __webpack_require__(327);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return __WEBPACK_IMPORTED_MODULE_166__prepend__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_167__product__ = __webpack_require__(553);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "product", function() { return __WEBPACK_IMPORTED_MODULE_167__product__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_168__project__ = __webpack_require__(554);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return __WEBPACK_IMPORTED_MODULE_168__project__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_169__prop__ = __webpack_require__(245);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return __WEBPACK_IMPORTED_MODULE_169__prop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_170__propEq__ = __webpack_require__(555);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "propEq", function() { return __WEBPACK_IMPORTED_MODULE_170__propEq__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_171__propIs__ = __webpack_require__(556);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "propIs", function() { return __WEBPACK_IMPORTED_MODULE_171__propIs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_172__propOr__ = __webpack_require__(557);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "propOr", function() { return __WEBPACK_IMPORTED_MODULE_172__propOr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_173__propSatisfies__ = __webpack_require__(558);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "propSatisfies", function() { return __WEBPACK_IMPORTED_MODULE_173__propSatisfies__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_174__props__ = __webpack_require__(559);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_174__props__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_175__range__ = __webpack_require__(560);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_175__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_176__reduce__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return __WEBPACK_IMPORTED_MODULE_176__reduce__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_177__reduceBy__ = __webpack_require__(220);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduceBy", function() { return __WEBPACK_IMPORTED_MODULE_177__reduceBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_178__reduceRight__ = __webpack_require__(329);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return __WEBPACK_IMPORTED_MODULE_178__reduceRight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_179__reduceWhile__ = __webpack_require__(561);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduceWhile", function() { return __WEBPACK_IMPORTED_MODULE_179__reduceWhile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_180__reduced__ = __webpack_require__(562);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduced", function() { return __WEBPACK_IMPORTED_MODULE_180__reduced__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_181__reject__ = __webpack_require__(219);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return __WEBPACK_IMPORTED_MODULE_181__reject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_182__remove__ = __webpack_require__(306);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return __WEBPACK_IMPORTED_MODULE_182__remove__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_183__repeat__ = __webpack_require__(563);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return __WEBPACK_IMPORTED_MODULE_183__repeat__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_184__replace__ = __webpack_require__(564);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return __WEBPACK_IMPORTED_MODULE_184__replace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_185__reverse__ = __webpack_require__(217);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return __WEBPACK_IMPORTED_MODULE_185__reverse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_186__scan__ = __webpack_require__(565);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return __WEBPACK_IMPORTED_MODULE_186__scan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_187__sequence__ = __webpack_require__(331);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return __WEBPACK_IMPORTED_MODULE_187__sequence__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_188__set__ = __webpack_require__(566);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return __WEBPACK_IMPORTED_MODULE_188__set__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_189__slice__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return __WEBPACK_IMPORTED_MODULE_189__slice__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_190__sort__ = __webpack_require__(567);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return __WEBPACK_IMPORTED_MODULE_190__sort__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_191__sortBy__ = __webpack_require__(568);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return __WEBPACK_IMPORTED_MODULE_191__sortBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_192__sortWith__ = __webpack_require__(569);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortWith", function() { return __WEBPACK_IMPORTED_MODULE_192__sortWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_193__split__ = __webpack_require__(570);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return __WEBPACK_IMPORTED_MODULE_193__split__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_194__splitAt__ = __webpack_require__(571);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "splitAt", function() { return __WEBPACK_IMPORTED_MODULE_194__splitAt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_195__splitEvery__ = __webpack_require__(572);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "splitEvery", function() { return __WEBPACK_IMPORTED_MODULE_195__splitEvery__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_196__splitWhen__ = __webpack_require__(573);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "splitWhen", function() { return __WEBPACK_IMPORTED_MODULE_196__splitWhen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_197__startsWith__ = __webpack_require__(574);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return __WEBPACK_IMPORTED_MODULE_197__startsWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_198__subtract__ = __webpack_require__(575);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return __WEBPACK_IMPORTED_MODULE_198__subtract__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_199__sum__ = __webpack_require__(321);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return __WEBPACK_IMPORTED_MODULE_199__sum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_200__symmetricDifference__ = __webpack_require__(576);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symmetricDifference", function() { return __WEBPACK_IMPORTED_MODULE_200__symmetricDifference__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_201__symmetricDifferenceWith__ = __webpack_require__(577);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symmetricDifferenceWith", function() { return __WEBPACK_IMPORTED_MODULE_201__symmetricDifferenceWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_202__tail__ = __webpack_require__(252);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return __WEBPACK_IMPORTED_MODULE_202__tail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_203__take__ = __webpack_require__(258);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return __WEBPACK_IMPORTED_MODULE_203__take__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_204__takeLast__ = __webpack_require__(313);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return __WEBPACK_IMPORTED_MODULE_204__takeLast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_205__takeLastWhile__ = __webpack_require__(578);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeLastWhile", function() { return __WEBPACK_IMPORTED_MODULE_205__takeLastWhile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_206__takeWhile__ = __webpack_require__(579);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return __WEBPACK_IMPORTED_MODULE_206__takeWhile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_207__tap__ = __webpack_require__(581);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return __WEBPACK_IMPORTED_MODULE_207__tap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_208__test__ = __webpack_require__(583);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return __WEBPACK_IMPORTED_MODULE_208__test__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_209__times__ = __webpack_require__(330);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "times", function() { return __WEBPACK_IMPORTED_MODULE_209__times__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_210__toLower__ = __webpack_require__(585);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toLower", function() { return __WEBPACK_IMPORTED_MODULE_210__toLower__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_211__toPairs__ = __webpack_require__(586);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toPairs", function() { return __WEBPACK_IMPORTED_MODULE_211__toPairs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_212__toPairsIn__ = __webpack_require__(587);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toPairsIn", function() { return __WEBPACK_IMPORTED_MODULE_212__toPairsIn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_213__toString__ = __webpack_require__(199);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return __WEBPACK_IMPORTED_MODULE_213__toString__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_214__toUpper__ = __webpack_require__(588);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toUpper", function() { return __WEBPACK_IMPORTED_MODULE_214__toUpper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_215__transduce__ = __webpack_require__(589);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transduce", function() { return __WEBPACK_IMPORTED_MODULE_215__transduce__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_216__transpose__ = __webpack_require__(590);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_216__transpose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_217__traverse__ = __webpack_require__(591);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return __WEBPACK_IMPORTED_MODULE_217__traverse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_218__trim__ = __webpack_require__(592);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return __WEBPACK_IMPORTED_MODULE_218__trim__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_219__tryCatch__ = __webpack_require__(593);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return __WEBPACK_IMPORTED_MODULE_219__tryCatch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_220__type__ = __webpack_require__(250);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return __WEBPACK_IMPORTED_MODULE_220__type__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_221__unapply__ = __webpack_require__(594);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unapply", function() { return __WEBPACK_IMPORTED_MODULE_221__unapply__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_222__unary__ = __webpack_require__(595);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unary", function() { return __WEBPACK_IMPORTED_MODULE_222__unary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_223__uncurryN__ = __webpack_require__(596);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uncurryN", function() { return __WEBPACK_IMPORTED_MODULE_223__uncurryN__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_224__unfold__ = __webpack_require__(597);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unfold", function() { return __WEBPACK_IMPORTED_MODULE_224__unfold__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_225__union__ = __webpack_require__(598);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return __WEBPACK_IMPORTED_MODULE_225__union__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_226__unionWith__ = __webpack_require__(599);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unionWith", function() { return __WEBPACK_IMPORTED_MODULE_226__unionWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_227__uniq__ = __webpack_require__(261);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return __WEBPACK_IMPORTED_MODULE_227__uniq__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_228__uniqBy__ = __webpack_require__(314);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniqBy", function() { return __WEBPACK_IMPORTED_MODULE_228__uniqBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_229__uniqWith__ = __webpack_require__(332);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniqWith", function() { return __WEBPACK_IMPORTED_MODULE_229__uniqWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_230__unless__ = __webpack_require__(600);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unless", function() { return __WEBPACK_IMPORTED_MODULE_230__unless__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_231__unnest__ = __webpack_require__(601);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unnest", function() { return __WEBPACK_IMPORTED_MODULE_231__unnest__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_232__until__ = __webpack_require__(602);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return __WEBPACK_IMPORTED_MODULE_232__until__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_233__update__ = __webpack_require__(257);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_233__update__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_234__useWith__ = __webpack_require__(328);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "useWith", function() { return __WEBPACK_IMPORTED_MODULE_234__useWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_235__values__ = __webpack_require__(286);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_235__values__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_236__valuesIn__ = __webpack_require__(603);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "valuesIn", function() { return __WEBPACK_IMPORTED_MODULE_236__valuesIn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_237__view__ = __webpack_require__(604);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "view", function() { return __WEBPACK_IMPORTED_MODULE_237__view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_238__when__ = __webpack_require__(605);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return __WEBPACK_IMPORTED_MODULE_238__when__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_239__where__ = __webpack_require__(333);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return __WEBPACK_IMPORTED_MODULE_239__where__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_240__whereEq__ = __webpack_require__(606);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "whereEq", function() { return __WEBPACK_IMPORTED_MODULE_240__whereEq__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_241__without__ = __webpack_require__(607);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return __WEBPACK_IMPORTED_MODULE_241__without__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_242__xprod__ = __webpack_require__(608);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "xprod", function() { return __WEBPACK_IMPORTED_MODULE_242__xprod__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_243__zip__ = __webpack_require__(609);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_243__zip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_244__zipObj__ = __webpack_require__(610);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zipObj", function() { return __WEBPACK_IMPORTED_MODULE_244__zipObj__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_245__zipWith__ = __webpack_require__(611);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zipWith", function() { return __WEBPACK_IMPORTED_MODULE_245__zipWith__["a"]; });























































































































































































































































/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__always__ = __webpack_require__(188);


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
var F = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__always__["a" /* default */])(false);
/* harmony default export */ __webpack_exports__["a"] = (F);

/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__always__ = __webpack_require__(188);


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__always__["a" /* default */])(true);
/* harmony default export */ __webpack_exports__["a"] = (T);

/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
/* harmony default export */ __webpack_exports__["a"] = ({ '@@functional/placeholder': true });

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(162);




/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
var addIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function addIndex(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (addIndex);

/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xall__ = __webpack_require__(418);




/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
var all = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['all'], __WEBPACK_IMPORTED_MODULE_2__internal_xall__["a" /* default */], function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));
/* harmony default export */ __webpack_exports__["a"] = (all);

/***/ }),
/* 418 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(161);




var XAll = /*#__PURE__*/function () {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAll.prototype['@@transducer/result'] = function (result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return XAll;
}();

var _xall = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xall(f, xf) {
  return new XAll(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xall);

/***/ }),
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__max__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluck__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(171);






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
var allPass = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function allPass(preds) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_3__pluck__["a" /* default */])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (allPass);

/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(161);



var XMap = /*#__PURE__*/function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XMap.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xmap(f, xf) {
  return new XMap(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xmap);

/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__max__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluck__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(171);






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
var anyPass = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function anyPass(preds) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_3__pluck__["a" /* default */])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (anyPass);

/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_aperture__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xaperture__ = __webpack_require__(424);





/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
var aperture = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xaperture__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__internal_aperture__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (aperture);

/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _aperture;
function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}

/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(161);




var XAperture = /*#__PURE__*/function () {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAperture.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function (result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0__concat__["a" /* default */])(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return XAperture;
}();

var _xaperture = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function _xaperture(n, xf) {
  return new XAperture(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xaperture);

/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);



/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
var append = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function append(el, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list, [el]);
});
/* harmony default export */ __webpack_exports__["a"] = (append);

/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apply__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__max__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pluck__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reduce__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__values__ = __webpack_require__(286);









/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *        sum: R.add,
 *        nested: { mul: R.multiply }
 *      });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
var applySpec = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function applySpec(spec) {
  spec = Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(function (v) {
    return typeof v == 'function' ? v : applySpec(v);
  }, spec);
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_5__pluck__["a" /* default */])('length', Object(__WEBPACK_IMPORTED_MODULE_7__values__["a" /* default */])(spec))), function () {
    var args = arguments;
    return Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(function (f) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__apply__["a" /* default */])(f, args);
    }, spec);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (applySpec);

/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
* Takes a value and applies a function to it.
*
* This function is also known as the `thrush` combinator.
*
* @func
* @memberOf R
 * @since v0.25.0
* @category Function
* @sig a -> (a -> b) -> b
* @param {*} x The value
* @param {Function} f The function to apply
* @return {*} The result of applying `f` to `x`
* @example
*
*      var t42 = R.applyTo(42);
*      t42(R.identity); //=> 42
*      t42(R.add(1)); //=> 43
*/
var applyTo = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function applyTo(x, f) {
  return f(x);
});
/* harmony default export */ __webpack_exports__["a"] = (applyTo);

/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
var ascend = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});
/* harmony default export */ __webpack_exports__["a"] = (ascend);

/***/ }),
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nAry__ = __webpack_require__(214);



/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
var binary = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function binary(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__nAry__["a" /* default */])(2, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (binary);

/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__and__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lift__ = __webpack_require__(216);





/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
var both = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function both(f, g) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : Object(__WEBPACK_IMPORTED_MODULE_3__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__and__["a" /* default */])(f, g);
});
/* harmony default export */ __webpack_exports__["a"] = (both);

/***/ }),
/* 431 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry__ = __webpack_require__(248);


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.repeat(' '),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
var call = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry__["a" /* default */])(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
/* harmony default export */ __webpack_exports__["a"] = (call);

/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flatCat__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(164);




var _xchain = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xchain(f, xf) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(f, Object(__WEBPACK_IMPORTED_MODULE_1__flatCat__["a" /* default */])(xf));
});
/* harmony default export */ __webpack_exports__["a"] = (_xchain);

/***/ }),
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forceReduced__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xfBase__ = __webpack_require__(161);





var preservingReduced = function (xf) {
  return {
    '@@transducer/init': __WEBPACK_IMPORTED_MODULE_3__xfBase__["a" /* default */].init,
    '@@transducer/result': function (result) {
      return xf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      var ret = xf['@@transducer/step'](result, input);
      return ret['@@transducer/reduced'] ? Object(__WEBPACK_IMPORTED_MODULE_0__forceReduced__["a" /* default */])(ret) : ret;
    }
  };
};

var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    '@@transducer/init': __WEBPACK_IMPORTED_MODULE_3__xfBase__["a" /* default */].init,
    '@@transducer/result': function (result) {
      return rxf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      return !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike__["a" /* default */])(input) ? Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(rxf, result, [input]) : Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(rxf, result, input);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_flatCat);

/***/ }),
/* 434 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _forceReduced;
function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
var clamp = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min : value > max ? max : value;
});
/* harmony default export */ __webpack_exports__["a"] = (clamp);

/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_clone__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(156);



/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
var clone = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : Object(__WEBPACK_IMPORTED_MODULE_0__internal_clone__["a" /* default */])(value, [], [], true);
});
/* harmony default export */ __webpack_exports__["a"] = (clone);

/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
var comparator = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function comparator(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});
/* harmony default export */ __webpack_exports__["a"] = (comparator);

/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lift__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not__ = __webpack_require__(293);



/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
var complement = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__not__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (complement);

/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _pipe;
function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = composeP;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipeP__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(217);



/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__pipeP__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _pipeP;
function _pipeP(f, g) {
  return function () {
    var ctx = this;
    return f.apply(ctx, arguments).then(function (x) {
      return g.call(ctx, x);
    });
  };
}

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _toString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quote__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toISOString__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keys__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reject__ = __webpack_require__(219);







function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(function (k) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(recur, x).concat(mapPairs(x, Object(__WEBPACK_IMPORTED_MODULE_5__reject__["a" /* default */])(function (k) {
        return (/^\d+$/.test(k)
        );
      }, Object(__WEBPACK_IMPORTED_MODULE_4__keys__["a" /* default */])(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : Object(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__toISOString__["a" /* default */])(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : Object(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, Object(__WEBPACK_IMPORTED_MODULE_4__keys__["a" /* default */])(x)).join(', ') + '}';
  }
}

/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containsWith__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functionName__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__has__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identical__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keys__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__(250);








/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = Object(__WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__["a" /* default */])(aIterator);
  var b = Object(__WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__["a" /* default */])(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !Object(__WEBPACK_IMPORTED_MODULE_1__containsWith__["a" /* default */])(function (b, aItem) {
    return !Object(__WEBPACK_IMPORTED_MODULE_1__containsWith__["a" /* default */])(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a, b)) {
    return true;
  }

  var typeA = Object(__WEBPACK_IMPORTED_MODULE_6__type__["a" /* default */])(a);

  if (typeA !== Object(__WEBPACK_IMPORTED_MODULE_6__type__["a" /* default */])(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && Object(__WEBPACK_IMPORTED_MODULE_2__functionName__["a" /* default */])(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && Object(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!Object(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = Object(__WEBPACK_IMPORTED_MODULE_5__keys__["a" /* default */])(a);
  if (keysA.length !== Object(__WEBPACK_IMPORTED_MODULE_5__keys__["a" /* default */])(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);

  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(Object(__WEBPACK_IMPORTED_MODULE_3__has__["a" /* default */])(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayFromIterator;
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _functionName;
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _quote;
function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

/* harmony default export */ __webpack_exports__["a"] = (_toISOString);

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(161);



var XFilter = /*#__PURE__*/function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFilter.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfilter);

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__max__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(171);






/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
var cond = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function cond(pairs) {
  var arity = Object(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(function (pair) {
    return pair[0].length;
  }, pairs));
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arity, function () {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
/* harmony default export */ __webpack_exports__["a"] = (cond);

/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructN__ = __webpack_require__(300);



/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
var construct = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function construct(Fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__constructN__["a" /* default */])(Fn.length, Fn);
});
/* harmony default export */ __webpack_exports__["a"] = (construct);

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);



/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
var contains = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (contains);

/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduceBy__ = __webpack_require__(220);


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
var countBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__reduceBy__["a" /* default */])(function (acc, elem) {
  return acc + 1;
}, 0);
/* harmony default export */ __webpack_exports__["a"] = (countBy);

/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curryN__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__has__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(161);




var XReduceBy = /*#__PURE__*/function () {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;
    for (key in this.inputs) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__has__["a" /* default */])(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return XReduceBy;
}();

var _xreduceBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curryN__["a" /* default */])(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xreduceBy);

/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(209);


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
var dec = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */])(-1);
/* harmony default export */ __webpack_exports__["a"] = (dec);

/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
var descend = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});
/* harmony default export */ __webpack_exports__["a"] = (descend);

/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isInteger__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assoc__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dissoc__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remove__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update__ = __webpack_require__(257);







/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
var dissocPath = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(path[0]) ? Object(__WEBPACK_IMPORTED_MODULE_4__remove__["a" /* default */])(path[0], 1, obj) : Object(__WEBPACK_IMPORTED_MODULE_3__dissoc__["a" /* default */])(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return obj;
      } else if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(path[0])) {
        return Object(__WEBPACK_IMPORTED_MODULE_5__update__["a" /* default */])(head, dissocPath(tail, obj[head]), obj);
      } else {
        return Object(__WEBPACK_IMPORTED_MODULE_2__assoc__["a" /* default */])(head, dissocPath(tail, obj[head]), obj);
      }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (dissocPath);

/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
var divide = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function divide(a, b) {
  return a / b;
});
/* harmony default export */ __webpack_exports__["a"] = (divide);

/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(161);



var XDrop = /*#__PURE__*/function () {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDrop.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return XDrop;
}();

var _xdrop = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdrop(n, xf) {
  return new XDrop(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdrop);

/***/ }),
/* 459 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dropLast__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xdropLast__ = __webpack_require__(462);





/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
var dropLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xdropLast__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__internal_dropLast__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (dropLast);

/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dropLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__take__ = __webpack_require__(258);


function dropLast(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__take__["a" /* default */])(n < xs.length ? xs.length - n : 0, xs);
}

/***/ }),
/* 461 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(161);




var XTake = /*#__PURE__*/function () {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XTake.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].result;
  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(ret) : ret;
  };

  return XTake;
}();

var _xtake = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtake(n, xf) {
  return new XTake(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtake);

/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(161);



var XDropLast = /*#__PURE__*/function () {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropLast.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return XDropLast;
}();

var _xdropLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropLast(n, xf) {
  return new XDropLast(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropLast);

/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dropLastWhile__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xdropLastWhile__ = __webpack_require__(465);





/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} predicate The function to be called on each element
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 *
 *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
 */
var dropLastWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xdropLastWhile__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__internal_dropLastWhile__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (dropLastWhile);

/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dropLastWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slice__ = __webpack_require__(168);


function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__slice__["a" /* default */])(0, idx + 1, xs);
}

/***/ }),
/* 465 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(161);




var XDropLastWhile = /*#__PURE__*/function () {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function (result, input) {
    result = Object(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(this.xf['@@transducer/step'], result, this.retained);
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };

  return XDropLastWhile;
}();

var _xdropLastWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropLastWhile(fn, xf) {
  return new XDropLastWhile(fn, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropLastWhile);

/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropRepeatsWith__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equals__ = __webpack_require__(166);






/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
var dropRepeats = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__equals__["a" /* default */]), /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__dropRepeatsWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__equals__["a" /* default */])));
/* harmony default export */ __webpack_exports__["a"] = (dropRepeats);

/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropWhile__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(168);





/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 *
 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 */
var dropWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['dropWhile'], __WEBPACK_IMPORTED_MODULE_2__internal_xdropWhile__["a" /* default */], function dropWhile(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(idx, Infinity, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (dropWhile);

/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(161);



var XDropWhile = /*#__PURE__*/function () {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropWhile.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return XDropWhile;
}();

var _xdropWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropWhile(f, xf) {
  return new XDropWhile(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropWhile);

/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lift__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__or__ = __webpack_require__(311);





/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
var either = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function either(f, g) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : Object(__WEBPACK_IMPORTED_MODULE_2__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__or__["a" /* default */])(f, g);
});
/* harmony default export */ __webpack_exports__["a"] = (either);

/***/ }),
/* 470 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__takeLast__ = __webpack_require__(313);




/**
 * Checks if a list ends with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var endsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (suffix, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__takeLast__["a" /* default */])(suffix.length, list), suffix);
});
/* harmony default export */ __webpack_exports__["a"] = (endsWith);

/***/ }),
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(166);



/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
var eqBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function eqBy(f, x, y) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(f(x), f(y));
});
/* harmony default export */ __webpack_exports__["a"] = (eqBy);

/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(166);



/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
var eqProps = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function eqProps(prop, obj1, obj2) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(obj1[prop], obj2[prop]);
});
/* harmony default export */ __webpack_exports__["a"] = (eqProps);

/***/ }),
/* 473 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
var evolve = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (evolve);

/***/ }),
/* 474 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfind__ = __webpack_require__(475);




/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
var find = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['find'], __WEBPACK_IMPORTED_MODULE_2__internal_xfind__["a" /* default */], function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (find);

/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(161);




var XFind = /*#__PURE__*/function () {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return XFind;
}();

var _xfind = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfind(f, xf) {
  return new XFind(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfind);

/***/ }),
/* 476 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindIndex__ = __webpack_require__(477);




/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindIndex__["a" /* default */], function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));
/* harmony default export */ __webpack_exports__["a"] = (findIndex);

/***/ }),
/* 477 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(161);




var XFindIndex = /*#__PURE__*/function () {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XFindIndex.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return XFindIndex;
}();

var _xfindIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindIndex(f, xf) {
  return new XFindIndex(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindIndex);

/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindLast__ = __webpack_require__(479);




/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
var findLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindLast__["a" /* default */], function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (findLast);

/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(161);



var XFindLast = /*#__PURE__*/function () {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFindLast.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return XFindLast;
}();

var _xfindLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindLast(f, xf) {
  return new XFindLast(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindLast);

/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindLastIndex__ = __webpack_require__(481);




/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findLastIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindLastIndex__["a" /* default */], function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));
/* harmony default export */ __webpack_exports__["a"] = (findLastIndex);

/***/ }),
/* 481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(161);



var XFindLastIndex = /*#__PURE__*/function () {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return XFindLastIndex;
}();

var _xfindLastIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindLastIndex(f, xf) {
  return new XFindLastIndex(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindLastIndex);

/***/ }),
/* 482 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_makeFlat__ = __webpack_require__(290);



/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
var flatten = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_makeFlat__["a" /* default */])(true));
/* harmony default export */ __webpack_exports__["a"] = (flatten);

/***/ }),
/* 483 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);



/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
var forEach = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));
/* harmony default export */ __webpack_exports__["a"] = (forEach);

/***/ }),
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(170);



/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
var forEachObjIndexed = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function forEachObjIndexed(fn, obj) {
  var keyList = Object(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});
/* harmony default export */ __webpack_exports__["a"] = (forEachObjIndexed);

/***/ }),
/* 485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
var fromPairs = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (fromPairs);

/***/ }),
/* 486 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduceBy__ = __webpack_require__(220);




/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
var groupBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('groupBy', /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__reduceBy__["a" /* default */])(function (acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));
/* harmony default export */ __webpack_exports__["a"] = (groupBy);

/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
var groupWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});
/* harmony default export */ __webpack_exports__["a"] = (groupWith);

/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
var gt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function gt(a, b) {
  return a > b;
});
/* harmony default export */ __webpack_exports__["a"] = (gt);

/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
var gte = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function gte(a, b) {
  return a >= b;
});
/* harmony default export */ __webpack_exports__["a"] = (gte);

/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(163);



/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
var has = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (has);

/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
var hasIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function hasIn(prop, obj) {
  return prop in obj;
});
/* harmony default export */ __webpack_exports__["a"] = (hasIn);

/***/ }),
/* 492 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nth__ = __webpack_require__(200);


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
var head = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__nth__["a" /* default */])(0);
/* harmony default export */ __webpack_exports__["a"] = (head);

/***/ }),
/* 493 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(162);



/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
var ifElse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function ifElse(condition, onTrue, onFalse) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (ifElse);

/***/ }),
/* 494 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(209);


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
var inc = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */])(1);
/* harmony default export */ __webpack_exports__["a"] = (inc);

/***/ }),
/* 495 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduceBy__ = __webpack_require__(220);


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
var indexBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__reduceBy__["a" /* default */])(function (acc, elem) {
  return elem;
}, null);
/* harmony default export */ __webpack_exports__["a"] = (indexBy);

/***/ }),
/* 496 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_indexOf__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(174);




/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
var indexOf = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(xs) ? xs.indexOf(target) : Object(__WEBPACK_IMPORTED_MODULE_1__internal_indexOf__["a" /* default */])(xs, target, 0);
});
/* harmony default export */ __webpack_exports__["a"] = (indexOf);

/***/ }),
/* 497 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slice__ = __webpack_require__(168);


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
var init = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__slice__["a" /* default */])(0, -1);
/* harmony default export */ __webpack_exports__["a"] = (init);

/***/ }),
/* 498 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(255);




/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
var innerJoin = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function innerJoin(pred, xs, ys) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(function (x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, x, ys);
  }, xs);
});
/* harmony default export */ __webpack_exports__["a"] = (innerJoin);

/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
var insert = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (insert);

/***/ }),
/* 500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
var insertAll = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});
/* harmony default export */ __webpack_exports__["a"] = (insertAll);

/***/ }),
/* 501 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flip__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uniq__ = __webpack_require__(261);






/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
var intersection = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_4__uniq__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(lookupList), filteredList));
});
/* harmony default export */ __webpack_exports__["a"] = (intersection);

/***/ }),
/* 502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(191);


var _Set = /*#__PURE__*/function () {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  return _Set;
}();

function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      // these types can all utilise the native Set
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }

    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }

    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }

    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    /* falls through */
    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      // scan through all previously applied items
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

// A simple Set type that honours R.equals semantics
/* harmony default export */ __webpack_exports__["a"] = (_Set);

/***/ }),
/* 503 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);



/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
var intersperse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));
/* harmony default export */ __webpack_exports__["a"] = (intersperse);

/***/ }),
/* 504 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_clone__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isTransformer__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_stepCat__ = __webpack_require__(505);






/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
var into = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function into(acc, xf, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__internal_isTransformer__["a" /* default */])(acc) ? Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(xf(acc), acc['@@transducer/init'](), list) : Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(xf(Object(__WEBPACK_IMPORTED_MODULE_4__internal_stepCat__["a" /* default */])(acc)), Object(__WEBPACK_IMPORTED_MODULE_0__internal_clone__["a" /* default */])(acc, [], [], false), list);
});
/* harmony default export */ __webpack_exports__["a"] = (into);

/***/ }),
/* 505 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _stepCat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assign__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayLike__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isTransformer__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objOf__ = __webpack_require__(315);






var _stepCatArray = {
  '@@transducer/init': Array,
  '@@transducer/step': function (xs, x) {
    xs.push(x);
    return xs;
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};
var _stepCatString = {
  '@@transducer/init': String,
  '@@transducer/step': function (a, b) {
    return a + b;
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};
var _stepCatObject = {
  '@@transducer/init': Object,
  '@@transducer/step': function (result, input) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__assign__["a" /* default */])(result, Object(__WEBPACK_IMPORTED_MODULE_2__isArrayLike__["a" /* default */])(input) ? Object(__WEBPACK_IMPORTED_MODULE_4__objOf__["a" /* default */])(input[0], input[1]) : input);
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};

function _stepCat(obj) {
  if (Object(__WEBPACK_IMPORTED_MODULE_3__isTransformer__["a" /* default */])(obj)) {
    return obj;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_2__isArrayLike__["a" /* default */])(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === 'string') {
    return _stepCatString;
  }
  if (typeof obj === 'object') {
    return _stepCatObject;
  }
  throw new Error('Cannot create transformer for ' + obj);
}

/***/ }),
/* 506 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectAssign;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has__ = __webpack_require__(163);


// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__has__["a" /* default */])(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}

/***/ }),
/* 507 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys__ = __webpack_require__(170);




/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
var invert = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function invert(obj) {
  var props = Object(__WEBPACK_IMPORTED_MODULE_2__keys__["a" /* default */])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (invert);

/***/ }),
/* 508 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(170);



/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
var invertObj = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function invertObj(obj) {
  var props = Object(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (invertObj);

/***/ }),
/* 509 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equals__ = __webpack_require__(166);




/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
var isEmpty = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function isEmpty(x) {
  return x != null && Object(__WEBPACK_IMPORTED_MODULE_2__equals__["a" /* default */])(x, Object(__WEBPACK_IMPORTED_MODULE_1__empty__["a" /* default */])(x));
});
/* harmony default export */ __webpack_exports__["a"] = (isEmpty);

/***/ }),
/* 510 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(201);


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
var join = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(1, 'join');
/* harmony default export */ __webpack_exports__["a"] = (join);

/***/ }),
/* 511 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
var keysIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});
/* harmony default export */ __webpack_exports__["a"] = (keysIn);

/***/ }),
/* 512 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArray__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equals__ = __webpack_require__(166);




/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
var lastIndexOf = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (Object(__WEBPACK_IMPORTED_MODULE_2__equals__["a" /* default */])(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
/* harmony default export */ __webpack_exports__["a"] = (lastIndexOf);

/***/ }),
/* 513 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lens__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nth__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update__ = __webpack_require__(257);





/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
var lensIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensIndex(n) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__lens__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__nth__["a" /* default */])(n), Object(__WEBPACK_IMPORTED_MODULE_3__update__["a" /* default */])(n));
});
/* harmony default export */ __webpack_exports__["a"] = (lensIndex);

/***/ }),
/* 514 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assocPath__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lens__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__path__ = __webpack_require__(190);





/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
var lensPath = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensPath(p) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__lens__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__path__["a" /* default */])(p), Object(__WEBPACK_IMPORTED_MODULE_1__assocPath__["a" /* default */])(p));
});
/* harmony default export */ __webpack_exports__["a"] = (lensPath);

/***/ }),
/* 515 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assoc__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lens__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prop__ = __webpack_require__(245);





/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lensProp = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensProp(k) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__lens__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__prop__["a" /* default */])(k), Object(__WEBPACK_IMPORTED_MODULE_1__assoc__["a" /* default */])(k));
});
/* harmony default export */ __webpack_exports__["a"] = (lensProp);

/***/ }),
/* 516 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
var lt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lt(a, b) {
  return a < b;
});
/* harmony default export */ __webpack_exports__["a"] = (lt);

/***/ }),
/* 517 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
var lte = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lte(a, b) {
  return a <= b;
});
/* harmony default export */ __webpack_exports__["a"] = (lte);

/***/ }),
/* 518 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
var mapAccum = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});
/* harmony default export */ __webpack_exports__["a"] = (mapAccum);

/***/ }),
/* 519 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((x, acc) -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
var mapAccumRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});
/* harmony default export */ __webpack_exports__["a"] = (mapAccumRight);

/***/ }),
/* 520 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys__ = __webpack_require__(170);




/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
var mapObjIndexed = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mapObjIndexed(fn, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(function (acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, Object(__WEBPACK_IMPORTED_MODULE_2__keys__["a" /* default */])(obj));
});
/* harmony default export */ __webpack_exports__["a"] = (mapObjIndexed);

/***/ }),
/* 521 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
var match = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function match(rx, str) {
  return str.match(rx) || [];
});
/* harmony default export */ __webpack_exports__["a"] = (match);

/***/ }),
/* 522 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isInteger__ = __webpack_require__(247);



/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
var mathMod = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mathMod(m, p) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(m)) {
    return NaN;
  }
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});
/* harmony default export */ __webpack_exports__["a"] = (mathMod);

/***/ }),
/* 523 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
var maxBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (maxBy);

/***/ }),
/* 524 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mean__ = __webpack_require__(320);



/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
var median = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return Object(__WEBPACK_IMPORTED_MODULE_1__mean__["a" /* default */])(Array.prototype.slice.call(list, 0).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});
/* harmony default export */ __webpack_exports__["a"] = (median);

/***/ }),
/* 525 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__memoizeWith__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toString__ = __webpack_require__(199);



/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @deprecated since v0.25.0
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoize = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__memoizeWith__["a" /* default */])(function () {
  return Object(__WEBPACK_IMPORTED_MODULE_1__toString__["a" /* default */])(arguments);
});
/* harmony default export */ __webpack_exports__["a"] = (memoize);

/***/ }),
/* 526 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_assign__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);



/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
var merge = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function merge(l, r) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_assign__["a" /* default */])({}, l, r);
});
/* harmony default export */ __webpack_exports__["a"] = (merge);

/***/ }),
/* 527 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_assign__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(156);



/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
var mergeAll = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function mergeAll(list) {
  return __WEBPACK_IMPORTED_MODULE_0__internal_assign__["a" /* default */].apply(null, [{}].concat(list));
});
/* harmony default export */ __webpack_exports__["a"] = (mergeAll);

/***/ }),
/* 528 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(223);



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */
var mergeDeepLeft = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mergeDeepLeft(lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepLeft);

/***/ }),
/* 529 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(223);



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
var mergeDeepRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mergeDeepRight(lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepRight);

/***/ }),
/* 530 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(223);



/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
var mergeDeepWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeDeepWith(fn, lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepWith);

/***/ }),
/* 531 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeWithKey__ = __webpack_require__(263);



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
var mergeWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeWith(fn, l, r) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeWithKey__["a" /* default */])(function (_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeWith);

/***/ }),
/* 532 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
var min = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function min(a, b) {
  return b < a ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (min);

/***/ }),
/* 533 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
var minBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (minBy);

/***/ }),
/* 534 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
var modulo = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function modulo(a, b) {
  return a % b;
});
/* harmony default export */ __webpack_exports__["a"] = (modulo);

/***/ }),
/* 535 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
var negate = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function negate(n) {
  return -n;
});
/* harmony default export */ __webpack_exports__["a"] = (negate);

/***/ }),
/* 536 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_complement__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xany__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__any__ = __webpack_require__(283);






/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *      var isOdd = n => n % 2 === 1;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 */
var none = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_complement__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__["a" /* default */])(['any'], __WEBPACK_IMPORTED_MODULE_3__internal_xany__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__any__["a" /* default */])));
/* harmony default export */ __webpack_exports__["a"] = (none);

/***/ }),
/* 537 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nth__ = __webpack_require__(200);




/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
var nthArg = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(arity, function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__nth__["a" /* default */])(n, arguments);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (nthArg);

/***/ }),
/* 538 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
var o = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function o(f, g, x) {
  return f(g(x));
});
/* harmony default export */ __webpack_exports__["a"] = (o);

/***/ }),
/* 539 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_of__ = __webpack_require__(540);



/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
var of = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_of__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (of);

/***/ }),
/* 540 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _of;
function _of(x) {
  return [x];
}

/***/ }),
/* 541 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
var omit = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function omit(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;

  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }

  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (omit);

/***/ }),
/* 542 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(156);



/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
var once = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function once(fn) {
  var called = false;
  var result;
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (once);

/***/ }),
/* 543 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
var pair = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pair(fst, snd) {
  return [fst, snd];
});
/* harmony default export */ __webpack_exports__["a"] = (pair);

/***/ }),
/* 544 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__ = __webpack_require__(325);



/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
var partial = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (partial);

/***/ }),
/* 545 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flip__ = __webpack_require__(221);




/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
var partialRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (partialRight);

/***/ }),
/* 546 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__juxt__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reject__ = __webpack_require__(219);




/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
var partition = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__juxt__["a" /* default */])([__WEBPACK_IMPORTED_MODULE_0__filter__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__reject__["a" /* default */]]);
/* harmony default export */ __webpack_exports__["a"] = (partition);

/***/ }),
/* 547 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__(190);




/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
var pathEq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathEq(_path, val, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__path__["a" /* default */])(_path, obj), val);
});
/* harmony default export */ __webpack_exports__["a"] = (pathEq);

/***/ }),
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultTo__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__(190);




/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
var pathOr = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathOr(d, p, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__defaultTo__["a" /* default */])(d, Object(__WEBPACK_IMPORTED_MODULE_2__path__["a" /* default */])(p, obj));
});
/* harmony default export */ __webpack_exports__["a"] = (pathOr);

/***/ }),
/* 549 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path__ = __webpack_require__(190);



/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
var pathSatisfies = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(Object(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* default */])(propPath, obj));
});
/* harmony default export */ __webpack_exports__["a"] = (pathSatisfies);

/***/ }),
/* 550 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
var pick = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (pick);

/***/ }),
/* 551 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
var pickBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (pickBy);

/***/ }),
/* 552 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeK;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composeK__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(217);



/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__composeK__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 553 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiply__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(171);



/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
var product = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__multiply__["a" /* default */], 1);
/* harmony default export */ __webpack_exports__["a"] = (product);

/***/ }),
/* 554 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickAll__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__useWith__ = __webpack_require__(328);





/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
var project = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__useWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_map__["a" /* default */], [__WEBPACK_IMPORTED_MODULE_2__pickAll__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]]); // passing `identity` gives correct arity
/* harmony default export */ __webpack_exports__["a"] = (project);

/***/ }),
/* 555 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(166);



/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.whereEq, R.propSatisfies, R.equals
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
var propEq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propEq(name, val, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(val, obj[name]);
});
/* harmony default export */ __webpack_exports__["a"] = (propEq);

/***/ }),
/* 556 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(316);



/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
var propIs = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propIs(type, name, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */])(type, obj[name]);
});
/* harmony default export */ __webpack_exports__["a"] = (propIs);

/***/ }),
/* 557 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(163);



/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOr = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propOr(val, p, obj) {
  return obj != null && Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(p, obj) ? obj[p] : val;
});
/* harmony default export */ __webpack_exports__["a"] = (propOr);

/***/ }),
/* 558 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
var propSatisfies = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});
/* harmony default export */ __webpack_exports__["a"] = (propSatisfies);

/***/ }),
/* 559 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
var props = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (props);

/***/ }),
/* 560 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isNumber__ = __webpack_require__(319);



/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
var range = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function range(from, to) {
  if (!(Object(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(from) && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (range);

/***/ }),
/* 561 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curryN__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_reduced__ = __webpack_require__(175);




/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
var reduceWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curryN__["a" /* default */])(4, [], function _reduceWhile(pred, fn, a, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(function (acc, x) {
    return pred(acc, x) ? fn(acc, x) : Object(__WEBPACK_IMPORTED_MODULE_2__internal_reduced__["a" /* default */])(acc);
  }, a, list);
});
/* harmony default export */ __webpack_exports__["a"] = (reduceWhile);

/***/ }),
/* 562 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduced__ = __webpack_require__(175);



/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by
 * [`reduceRight`](#reduceRight).
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */
var reduced = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_reduced__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (reduced);

/***/ }),
/* 563 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__always__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__times__ = __webpack_require__(330);




/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
var repeat = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function repeat(value, n) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__times__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__always__["a" /* default */])(value), n);
});
/* harmony default export */ __webpack_exports__["a"] = (repeat);

/***/ }),
/* 564 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
var replace = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});
/* harmony default export */ __webpack_exports__["a"] = (replace);

/***/ }),
/* 565 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
var scan = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (scan);

/***/ }),
/* 566 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__always__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__over__ = __webpack_require__(324);




/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
var set = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function set(lens, v, x) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__over__["a" /* default */])(lens, Object(__WEBPACK_IMPORTED_MODULE_1__always__["a" /* default */])(v), x);
});
/* harmony default export */ __webpack_exports__["a"] = (set);

/***/ }),
/* 567 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
var sort = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});
/* harmony default export */ __webpack_exports__["a"] = (sort);

/***/ }),
/* 568 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
var sortBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (sortBy);

/***/ }),
/* 569 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [(a, a) -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
var sortWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (sortWith);

/***/ }),
/* 570 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(201);


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
var split = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(1, 'split');
/* harmony default export */ __webpack_exports__["a"] = (split);

/***/ }),
/* 571 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__length__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slice__ = __webpack_require__(168);




/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
var splitAt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitAt(index, array) {
  return [Object(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(0, index, array), Object(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(index, Object(__WEBPACK_IMPORTED_MODULE_1__length__["a" /* default */])(array), array)];
});
/* harmony default export */ __webpack_exports__["a"] = (splitAt);

/***/ }),
/* 572 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(168);



/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
var splitEvery = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(Object(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(idx, idx += n, list));
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (splitEvery);

/***/ }),
/* 573 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
var splitWhen = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});
/* harmony default export */ __webpack_exports__["a"] = (splitWhen);

/***/ }),
/* 574 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__take__ = __webpack_require__(258);




/**
 * Checks if a list starts with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var startsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (prefix, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__take__["a" /* default */])(prefix.length, list), prefix);
});
/* harmony default export */ __webpack_exports__["a"] = (startsWith);

/***/ }),
/* 575 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
var subtract = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function subtract(a, b) {
  return Number(a) - Number(b);
});
/* harmony default export */ __webpack_exports__["a"] = (subtract);

/***/ }),
/* 576 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__concat__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__difference__ = __webpack_require__(303);




/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
var symmetricDifference = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function symmetricDifference(list1, list2) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__concat__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__difference__["a" /* default */])(list1, list2), Object(__WEBPACK_IMPORTED_MODULE_2__difference__["a" /* default */])(list2, list1));
});
/* harmony default export */ __webpack_exports__["a"] = (symmetricDifference);

/***/ }),
/* 577 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__concat__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differenceWith__ = __webpack_require__(304);




/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
var symmetricDifferenceWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function symmetricDifferenceWith(pred, list1, list2) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__concat__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__differenceWith__["a" /* default */])(pred, list1, list2), Object(__WEBPACK_IMPORTED_MODULE_2__differenceWith__["a" /* default */])(pred, list2, list1));
});
/* harmony default export */ __webpack_exports__["a"] = (symmetricDifferenceWith);

/***/ }),
/* 578 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(168);



/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 *
 *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
 */
var takeLastWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function takeLastWhile(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(idx + 1, Infinity, xs);
});
/* harmony default export */ __webpack_exports__["a"] = (takeLastWhile);

/***/ }),
/* 579 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtakeWhile__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(168);





/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 *
 *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 */
var takeWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['takeWhile'], __WEBPACK_IMPORTED_MODULE_2__internal_xtakeWhile__["a" /* default */], function takeWhile(fn, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && fn(xs[idx])) {
    idx += 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(0, idx, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (takeWhile);

/***/ }),
/* 580 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(161);




var XTakeWhile = /*#__PURE__*/function () {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XTakeWhile.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].result;
  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(result);
  };

  return XTakeWhile;
}();

var _xtakeWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtakeWhile(f, xf) {
  return new XTakeWhile(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtakeWhile);

/***/ }),
/* 581 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtap__ = __webpack_require__(582);




/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
var tap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xtap__["a" /* default */], function tap(fn, x) {
  fn(x);
  return x;
}));
/* harmony default export */ __webpack_exports__["a"] = (tap);

/***/ }),
/* 582 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(161);



var XTap = /*#__PURE__*/function () {
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XTap.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };

  return XTap;
}();

var _xtap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtap(f, xf) {
  return new XTap(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtap);

/***/ }),
/* 583 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_cloneRegExp__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isRegExp__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toString__ = __webpack_require__(199);





/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
var test = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function test(pattern, str) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__internal_isRegExp__["a" /* default */])(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + Object(__WEBPACK_IMPORTED_MODULE_3__toString__["a" /* default */])(pattern));
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_cloneRegExp__["a" /* default */])(pattern).test(str);
});
/* harmony default export */ __webpack_exports__["a"] = (test);

/***/ }),
/* 584 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isRegExp;
function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
}

/***/ }),
/* 585 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(201);


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
var toLower = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(0, 'toLowerCase');
/* harmony default export */ __webpack_exports__["a"] = (toLower);

/***/ }),
/* 586 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(163);



/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
var toPairs = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});
/* harmony default export */ __webpack_exports__["a"] = (toPairs);

/***/ }),
/* 587 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
var toPairsIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});
/* harmony default export */ __webpack_exports__["a"] = (toPairsIn);

/***/ }),
/* 588 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(201);


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
var toUpper = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(0, 'toUpperCase');
/* harmony default export */ __webpack_exports__["a"] = (toUpper);

/***/ }),
/* 589 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_reduce__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_xwrap__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(162);




/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
var transduce = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(4, function transduce(xf, fn, acc, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_reduce__["a" /* default */])(xf(typeof fn === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__internal_xwrap__["a" /* default */])(fn) : fn), acc, list);
});
/* harmony default export */ __webpack_exports__["a"] = (transduce);

/***/ }),
/* 590 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
var transpose = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (transpose);

/***/ }),
/* 591 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sequence__ = __webpack_require__(331);




/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
var traverse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : Object(__WEBPACK_IMPORTED_MODULE_2__sequence__["a" /* default */])(of, Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(f, traversable));
});
/* harmony default export */ __webpack_exports__["a"] = (traverse);

/***/ }),
/* 592 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = typeof String.prototype.trim === 'function';
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
var _trim = !hasProtoTrim || /*#__PURE__*/ws.trim() || ! /*#__PURE__*/zeroWidth.trim() ? function trim(str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
  return str.replace(beginRx, '').replace(endRx, '');
} : function trim(str) {
  return str.trim();
};
var trim = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(_trim);
/* harmony default export */ __webpack_exports__["a"] = (trim);

/***/ }),
/* 593 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_curry2__ = __webpack_require__(154);




/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
var tryCatch = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_curry2__["a" /* default */])(function _tryCatch(tryer, catcher) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(tryer.length, function () {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__internal_concat__["a" /* default */])([e], arguments));
    }
  });
});
/* harmony default export */ __webpack_exports__["a"] = (tryCatch);

/***/ }),
/* 594 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
var unapply = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function unapply(fn) {
  return function () {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
/* harmony default export */ __webpack_exports__["a"] = (unapply);

/***/ }),
/* 595 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nAry__ = __webpack_require__(214);



/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
var unary = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function unary(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__nAry__["a" /* default */])(1, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (unary);

/***/ }),
/* 596 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(162);



/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
var uncurryN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function uncurryN(depth, fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(depth, function () {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (uncurryN);

/***/ }),
/* 597 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
var unfold = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (unfold);

/***/ }),
/* 598 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uniq__ = __webpack_require__(261);





/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
var union = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__compose__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__uniq__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (union);

/***/ }),
/* 599 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uniqWith__ = __webpack_require__(332);




/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
var unionWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function unionWith(pred, list1, list2) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__uniqWith__["a" /* default */])(pred, Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list1, list2));
});
/* harmony default export */ __webpack_exports__["a"] = (unionWith);

/***/ }),
/* 600 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
var unless = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
/* harmony default export */ __webpack_exports__["a"] = (unless);

/***/ }),
/* 601 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_identity__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chain__ = __webpack_require__(249);



/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
var unnest = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__chain__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_identity__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (unnest);

/***/ }),
/* 602 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
var until = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
/* harmony default export */ __webpack_exports__["a"] = (until);

/***/ }),
/* 603 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(156);


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
var valuesIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});
/* harmony default export */ __webpack_exports__["a"] = (valuesIn);

/***/ }),
/* 604 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


// `Const` is a functor that effectively ignores the function given to `map`.
var Const = function (x) {
  return { value: x, 'fantasy-land/map': function () {
      return this;
    } };
};

/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
var view = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function view(lens, x) {
  // Using `Const` effectively ignores the setter function of the `lens`,
  // leaving the value returned by the getter function unmodified.
  return lens(Const)(x).value;
});
/* harmony default export */ __webpack_exports__["a"] = (view);

/***/ }),
/* 605 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
var when = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
/* harmony default export */ __webpack_exports__["a"] = (when);

/***/ }),
/* 606 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__where__ = __webpack_require__(333);





/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propEq, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
var whereEq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function whereEq(spec, testObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__where__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */], spec), testObj);
});
/* harmony default export */ __webpack_exports__["a"] = (whereEq);

/***/ }),
/* 607 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flip__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reject__ = __webpack_require__(219);





/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
var without = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function (xs, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__reject__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(xs), list);
});
/* harmony default export */ __webpack_exports__["a"] = (without);

/***/ }),
/* 608 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
var xprod = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function xprod(a, b) {
  // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (xprod);

/***/ }),
/* 609 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
var zip = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});
/* harmony default export */ __webpack_exports__["a"] = (zip);

/***/ }),
/* 610 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(154);


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
var zipObj = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (zipObj);

/***/ }),
/* 611 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(158);


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
var zipWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});
/* harmony default export */ __webpack_exports__["a"] = (zipWith);

/***/ }),
/* 612 */
/***/ (function(module, exports) {

//
// Main
//

function memoize (fn, options) {
  var cache = options && options.cache
    ? options.cache
    : cacheDefault

  var serializer = options && options.serializer
    ? options.serializer
    : serializerDefault

  var strategy = options && options.strategy
    ? options.strategy
    : strategyDefault

  return strategy(fn, {
    cache: cache,
    serializer: serializer
  })
}

//
// Strategy
//

function isPrimitive (value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean' // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic (fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function variadic (fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3)
  var cacheKey = serializer(args)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function assemble (fn, context, strategy, cache, serialize) {
  return strategy.bind(
    context,
    fn,
    cache,
    serialize
  )
}

function strategyDefault (fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyVariadic (fn, options) {
  var strategy = variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyMonadic (fn, options) {
  var strategy = monadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

//
// Serializer
//

function serializerDefault () {
  return JSON.stringify(arguments)
}

//
// Cache
//

function ObjectWithoutPrototypeCache () {
  this.cache = Object.create(null)
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return (key in this.cache)
}

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key]
}

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value
}

var cacheDefault = {
  create: function create () {
    return new ObjectWithoutPrototypeCache()
  }
}

//
// API
//

module.exports = memoize
module.exports.strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
}


/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _Box = __webpack_require__(178);

var _Box2 = _interopRequireDefault(_Box);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.boxShadow, _styles.borderRadius, {
  "&:not(:last-child)": { marginBottom: "1.5rem" }
});
exports.default = (0, _sys2.default)(_Box2.default, styles, {
  displayName: "BulmaBox",
  defaultProps: {
    bg: "white",
    borderRadius: "3",
    p: "1.25rem",
    boxShadow: "0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)"
  },
  withProps: {}
});

/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

var _styler = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gridHeight = {
  gridAutoRows: {
    gridAutoRows: "self",
    height: "self",
    options: {
      postFn: "px"
    }
  }
};

var gridWidth = {
  gridTemplateColumns: {
    gridTemplateColumns: "self",
    width: "self",
    options: {
      postFn: function postFn(v) {
        return "repeat(auto-fit, minmax(" + (0, _styler.px)(v) + ", 1fr))";
      }
    }
  }
};

var styles = exports.styles = (0, _merge2.default)(gridHeight, gridWidth, _styles.gridGap);
exports.default = (0, _sys2.default)("div", styles, {
  displayName: "Grid",
  defaultProps: {
    width: 256,
    height: 192
  },
  withProps: {}
});

/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _styles = __webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)('div', _extends({}, _styles.color, _styles.space, _styles.fontFamily, {
  '& *': {
    boxSizing: 'border-box'
  }
}), {
  displayName: 'Root',
  defaultProps: {
    fontFamily: 'sans'
  },
  withProps: {}
});

/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DonutDemo = exports.ModalDemo = exports.PanelDemo = exports.EmbedDemo = exports.TooltipDemo = exports.DrawerDemo = exports.DotDemo = exports.TabsDemo = exports.TabDemo = exports.StickyDemo = exports.AbsoluteDemo = exports.RelativeDemo = exports.PositionDemo = exports.CircleDemo = exports.BadgeDemo = exports.ToolbarDemo = exports.GroupDemo = exports.MessageDemo = exports.BannerDemo = exports.CardDemo = exports.BorderDemo = exports.ColumnDemo = exports.RowDemo = exports.ContainerDemo = exports.DividerDemo = exports.ProgressDemo = exports.AvatarDemo = exports.BackgroundImageDemo = exports.ImageDemo = exports.SliderDemo = exports.CheckboxDemo = exports.RadioDemo = exports.TextareaDemo = exports.SelectDemo = exports.InputDemo = exports.LabelDemo = exports.TruncateDemo = exports.MeasureDemo = exports.BlockquoteDemo = exports.CodeDemo = exports.PreDemo = exports.SampDemo = exports.SmallDemo = exports.CapsDemo = exports.LeadDemo = exports.FontSizesDemo = exports.TextBoldDemo = exports.TextDemo = exports.CloseDemo = exports.BlockLinkDemo = exports.NavLinkDemo = exports.LinkDemo = exports.ButtonTransparentDemo = exports.ButtonCircleDemo = exports.ButtonOutlineDemo = exports.ButtonDemo = exports.SubheadDemo = exports.HeadingDemo = exports.ArrowDemo = exports.SwitchDemo = exports.CarouselDemo = exports.BoxDemo = exports.FlexDemo = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPowerplug = __webpack_require__(617);

var _Avatar = __webpack_require__(622);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _BackgroundImage = __webpack_require__(623);

var _BackgroundImage2 = _interopRequireDefault(_BackgroundImage);

var _Badge = __webpack_require__(337);

var _Badge2 = _interopRequireDefault(_Badge);

var _Banner = __webpack_require__(624);

var _Banner2 = _interopRequireDefault(_Banner);

var _Heading = __webpack_require__(242);

var _Heading2 = _interopRequireDefault(_Heading);

var _BlockLink = __webpack_require__(625);

var _BlockLink2 = _interopRequireDefault(_BlockLink);

var _Text = __webpack_require__(179);

var _Text2 = _interopRequireDefault(_Text);

var _Blockquote = __webpack_require__(626);

var _Blockquote2 = _interopRequireDefault(_Blockquote);

var _Border = __webpack_require__(627);

var _Border2 = _interopRequireDefault(_Border);

var _Button = __webpack_require__(224);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonCircle = __webpack_require__(628);

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

var _ButtonOutline = __webpack_require__(629);

var _ButtonOutline2 = _interopRequireDefault(_ButtonOutline);

var _ButtonTransparent = __webpack_require__(338);

var _ButtonTransparent2 = _interopRequireDefault(_ButtonTransparent);

var _Caps = __webpack_require__(630);

var _Caps2 = _interopRequireDefault(_Caps);

var _Box = __webpack_require__(178);

var _Box2 = _interopRequireDefault(_Box);

var _Card = __webpack_require__(631);

var _Card2 = _interopRequireDefault(_Card);

var _Container = __webpack_require__(334);

var _Container2 = _interopRequireDefault(_Container);

var _Subhead = __webpack_require__(633);

var _Subhead2 = _interopRequireDefault(_Subhead);

var _Link = __webpack_require__(335);

var _Link2 = _interopRequireDefault(_Link);

var _NavLink = __webpack_require__(634);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _Close = __webpack_require__(635);

var _Close2 = _interopRequireDefault(_Close);

var _Lead = __webpack_require__(636);

var _Lead2 = _interopRequireDefault(_Lead);

var _Small = __webpack_require__(637);

var _Small2 = _interopRequireDefault(_Small);

var _Pre = __webpack_require__(638);

var _Pre2 = _interopRequireDefault(_Pre);

var _Code = __webpack_require__(339);

var _Code2 = _interopRequireDefault(_Code);

var _Samp = __webpack_require__(639);

var _Samp2 = _interopRequireDefault(_Samp);

var _Measure = __webpack_require__(640);

var _Measure2 = _interopRequireDefault(_Measure);

var _Truncate = __webpack_require__(641);

var _Truncate2 = _interopRequireDefault(_Truncate);

var _Label = __webpack_require__(642);

var _Label2 = _interopRequireDefault(_Label);

var _Input = __webpack_require__(643);

var _Input2 = _interopRequireDefault(_Input);

var _Select = __webpack_require__(340);

var _Select2 = _interopRequireDefault(_Select);

var _Textarea = __webpack_require__(644);

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Radio = __webpack_require__(645);

var _Radio2 = _interopRequireDefault(_Radio);

var _Checkbox = __webpack_require__(646);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Slider = __webpack_require__(647);

var _Slider2 = _interopRequireDefault(_Slider);

var _Image = __webpack_require__(648);

var _Image2 = _interopRequireDefault(_Image);

var _Progress = __webpack_require__(649);

var _Progress2 = _interopRequireDefault(_Progress);

var _Divider = __webpack_require__(650);

var _Divider2 = _interopRequireDefault(_Divider);

var _Row = __webpack_require__(651);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(652);

var _Column2 = _interopRequireDefault(_Column);

var _Message = __webpack_require__(653);

var _Message2 = _interopRequireDefault(_Message);

var _Group = __webpack_require__(654);

var _Group2 = _interopRequireDefault(_Group);

var _Toolbar = __webpack_require__(655);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Circle = __webpack_require__(656);

var _Circle2 = _interopRequireDefault(_Circle);

var _Position = __webpack_require__(341);

var _Position2 = _interopRequireDefault(_Position);

var _Tab = __webpack_require__(657);

var _Tab2 = _interopRequireDefault(_Tab);

var _Tabs = __webpack_require__(658);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Dot = __webpack_require__(659);

var _Dot2 = _interopRequireDefault(_Dot);

var _Flex = __webpack_require__(176);

var _Flex2 = _interopRequireDefault(_Flex);

var _Drawer = __webpack_require__(660);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Embed = __webpack_require__(661);

var _Embed2 = _interopRequireDefault(_Embed);

var _Panel = __webpack_require__(662);

var _Panel2 = _interopRequireDefault(_Panel);

var _Modal = __webpack_require__(663);

var _Modal2 = _interopRequireDefault(_Modal);

var _Donut = __webpack_require__(664);

var _Donut2 = _interopRequireDefault(_Donut);

var _Carousel = __webpack_require__(665);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Switch = __webpack_require__(666);

var _Switch2 = _interopRequireDefault(_Switch);

var _Arrow = __webpack_require__(667);

var _Arrow2 = _interopRequireDefault(_Arrow);

var _Tooltip = __webpack_require__(668);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _StatefulSelect = __webpack_require__(669);

var _StatefulSelect2 = _interopRequireDefault(_StatefulSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20';

var avatar = 'http://i.pravatar.cc/150?img=1';

var FlexDemo = exports.FlexDemo = function FlexDemo() {
  return _react2.default.createElement(
    _Flex2.default,
    { mx: '-3', flexWrap: 'wrap' },
    _react2.default.createElement(
      _Box2.default,
      { width: [1, 1 / 2], p: '3', color: 'white', bg: 'blue' },
      'Flex'
    ),
    _react2.default.createElement(
      _Box2.default,
      { width: [1, 1 / 2], p: '3', color: 'white', bg: 'violet' },
      'Box'
    )
  );
};
var BoxDemo = exports.BoxDemo = function BoxDemo() {
  return _react2.default.createElement(
    _Flex2.default,
    { mx: '-3', flexWrap: 'wrap' },
    _react2.default.createElement(
      _Box2.default,
      { width: [1, 1 / 2], p: '3', color: 'white', bg: 'blue' },
      'Flex'
    ),
    _react2.default.createElement(
      _Box2.default,
      { width: [1, 1 / 2], p: '3', color: 'white', bg: 'violet' },
      'Box'
    )
  );
};

var CarouselDemo = exports.CarouselDemo = function CarouselDemo() {
  return _react2.default.createElement(
    _reactPowerplug.State,
    { initial: { index: 0 } },
    function (_ref) {
      var state = _ref.state,
          setState = _ref.setState;
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _Carousel2.default,
          { index: state.index },
          _react2.default.createElement(
            _Box2.default,
            { bg: 'blue' },
            _react2.default.createElement(
              _Flex2.default,
              { p: 6, justify: 'center', align: 'center' },
              _react2.default.createElement(
                _Heading2.default,
                null,
                'This'
              )
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            { bg: 'gray' },
            _react2.default.createElement(
              _Flex2.default,
              { p: 6, justify: 'center', align: 'center' },
              _react2.default.createElement(
                _Heading2.default,
                null,
                'is'
              )
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            { bg: 'gray' },
            _react2.default.createElement(
              _Flex2.default,
              { p: 6, bg: 'red', justify: 'center', align: 'center' },
              _react2.default.createElement(
                _Heading2.default,
                null,
                'Carousel'
              )
            )
          )
        ),
        _react2.default.createElement(
          _Flex2.default,
          { p: 6, bg: 'white', justify: 'center', align: 'center' },
          _react2.default.createElement(_Dot2.default, { onClick: function onClick() {
              return setState({ index: 0 });
            } }),
          _react2.default.createElement(_Dot2.default, { onClick: function onClick() {
              return setState({ index: 1 });
            } }),
          _react2.default.createElement(_Dot2.default, { onClick: function onClick() {
              return setState({ index: 2 });
            } })
        )
      );
    }
  );
};

var SwitchDemo = exports.SwitchDemo = function SwitchDemo() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _reactPowerplug.Toggle,
      { initial: true },
      function (_ref2) {
        var on = _ref2.on,
            toggle = _ref2.toggle;
        return _react2.default.createElement(_Switch2.default, { checked: on, onClick: toggle });
      }
    ),
    _react2.default.createElement(_Switch2.default, { disabled: true })
  );
};

var ArrowDemo = exports.ArrowDemo = function ArrowDemo() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    'down',
    _react2.default.createElement(_Arrow2.default, { direction: 'down' }),
    'Up',
    _react2.default.createElement(_Arrow2.default, { direction: 'up' }),
    'Left',
    _react2.default.createElement(_Arrow2.default, { direction: 'left' }),
    'Right',
    _react2.default.createElement(_Arrow2.default, { direction: 'right' })
  );
};

var HeadingDemo = exports.HeadingDemo = function HeadingDemo() {
  return _react2.default.createElement(
    _Heading2.default,
    null,
    'Heading'
  );
};

var SubheadDemo = exports.SubheadDemo = function SubheadDemo() {
  return _react2.default.createElement(_Subhead2.default, { children: 'Hello' });
};

var ButtonDemo = exports.ButtonDemo = function ButtonDemo() {
  return _react2.default.createElement(
    _Button2.default,
    null,
    'Button'
  );
};

var ButtonOutlineDemo = exports.ButtonOutlineDemo = function ButtonOutlineDemo() {
  return _react2.default.createElement(
    _ButtonOutline2.default,
    null,
    'ButtonOutline'
  );
};

var ButtonCircleDemo = exports.ButtonCircleDemo = function ButtonCircleDemo() {
  return _react2.default.createElement(
    _ButtonCircle2.default,
    null,
    'ButtonCircle'
  );
};

var ButtonTransparentDemo = exports.ButtonTransparentDemo = function ButtonTransparentDemo() {
  return _react2.default.createElement(
    _ButtonTransparent2.default,
    null,
    'ButtonTransparent'
  );
};

var LinkDemo = exports.LinkDemo = function LinkDemo() {
  return _react2.default.createElement(_Link2.default, { href: '#!', children: 'Hello' });
};

var NavLinkDemo = exports.NavLinkDemo = function NavLinkDemo() {
  return _react2.default.createElement(_NavLink2.default, { href: '#!', children: 'Hello' });
};

var BlockLinkDemo = exports.BlockLinkDemo = function BlockLinkDemo() {
  return _react2.default.createElement(
    _BlockLink2.default,
    { href: '#' },
    'BlockLink'
  );
};

var CloseDemo = exports.CloseDemo = function CloseDemo() {
  return _react2.default.createElement(_Close2.default, null);
};

var TextDemo = exports.TextDemo = function TextDemo() {
  return _react2.default.createElement(
    _Text2.default,
    null,
    'Text'
  );
};

var TextBoldDemo = exports.TextBoldDemo = function TextBoldDemo() {
  return _react2.default.createElement(
    _Text2.default,
    { fontWeight: 'bold' },
    'Text bold'
  );
};

var FontSizesDemo = exports.FontSizesDemo = function FontSizesDemo() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Text2.default,
      { fontSize: '9' },
      'fontSize 9'
    ),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: '8' },
      'fontSize 8'
    ),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: '7' },
      'fontSize 7'
    ),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: '6' },
      'fontSize 6'
    ),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: '5' },
      'fontSize 5'
    ),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: '4' },
      'fontSize 4'
    ),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: '3' },
      'fontSize 3'
    ),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: '2' },
      'fontSize 2'
    ),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: '1' },
      'fontSize 1'
    ),
    _react2.default.createElement(
      _Text2.default,
      { fontSize: '0' },
      'fontSize 0'
    )
  );
};

var LeadDemo = exports.LeadDemo = function LeadDemo() {
  return _react2.default.createElement(
    _Lead2.default,
    null,
    'Hello Lead'
  );
};

var CapsDemo = exports.CapsDemo = function CapsDemo() {
  return _react2.default.createElement(
    _Caps2.default,
    null,
    'Caps'
  );
};

var SmallDemo = exports.SmallDemo = function SmallDemo() {
  return _react2.default.createElement(_Small2.default, { children: 'Hello' });
};

var SampDemo = exports.SampDemo = function SampDemo() {
  return _react2.default.createElement(
    _Samp2.default,
    null,
    '1024'
  );
};

var PreDemo = exports.PreDemo = function PreDemo() {
  return _react2.default.createElement(_Pre2.default, { children: 'const hello = \'Rebass\'' });
};

var CodeDemo = exports.CodeDemo = function CodeDemo() {
  return _react2.default.createElement(_Code2.default, { children: '<Hello />' });
};

var BlockquoteDemo = exports.BlockquoteDemo = function BlockquoteDemo() {
  return _react2.default.createElement(
    _Blockquote2.default,
    null,
    'Blockquote'
  );
};

var MeasureDemo = exports.MeasureDemo = function MeasureDemo() {
  return _react2.default.createElement(
    _Measure2.default,
    null,
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  );
};

var TruncateDemo = exports.TruncateDemo = function TruncateDemo() {
  return _react2.default.createElement(
    _Truncate2.default,
    null,
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  );
};

var LabelDemo = exports.LabelDemo = function LabelDemo() {
  return _react2.default.createElement(
    _Label2.default,
    null,
    'Hello Label'
  );
};

var InputDemo = exports.InputDemo = function InputDemo() {
  return _react2.default.createElement(_Input2.default, { defaultValue: 'Hello', placeholder: 'Input' });
};

var SelectDemo = exports.SelectDemo = function SelectDemo() {
  return _react2.default.createElement(
    _Select2.default,
    null,
    _react2.default.createElement(
      'option',
      null,
      'Hello'
    ),
    _react2.default.createElement(
      'option',
      null,
      'Beep'
    ),
    _react2.default.createElement(
      'option',
      null,
      'Boop'
    )
  );
};

var TextareaDemo = exports.TextareaDemo = function TextareaDemo() {
  return _react2.default.createElement(_Textarea2.default, { rows: 4, defaultValue: 'Hello' });
};

var RadioDemo = exports.RadioDemo = function RadioDemo() {
  return _react2.default.createElement(
    'radiogroup',
    null,
    _react2.default.createElement(
      _Label2.default,
      null,
      _react2.default.createElement(_Radio2.default, { name: 'radio', defaultChecked: true }),
      'Hello'
    ),
    _react2.default.createElement(
      _Label2.default,
      null,
      _react2.default.createElement(_Radio2.default, { name: 'radio' }),
      'Beep'
    )
  );
};

var CheckboxDemo = exports.CheckboxDemo = function CheckboxDemo() {
  return _react2.default.createElement(
    _Label2.default,
    null,
    _react2.default.createElement(_Checkbox2.default, { defaultChecked: true }),
    'Hello'
  );
};

var SliderDemo = exports.SliderDemo = function SliderDemo() {
  return _react2.default.createElement(_Slider2.default, null);
};

var ImageDemo = exports.ImageDemo = function ImageDemo() {
  return _react2.default.createElement(_Image2.default, { src: image });
};

var BackgroundImageDemo = exports.BackgroundImageDemo = function BackgroundImageDemo() {
  return _react2.default.createElement(_BackgroundImage2.default, { ratio: 1 / 2, src: image });
};

var AvatarDemo = exports.AvatarDemo = function AvatarDemo() {
  return _react2.default.createElement(_Avatar2.default, { src: avatar });
};

var ProgressDemo = exports.ProgressDemo = function ProgressDemo() {
  return _react2.default.createElement(_Progress2.default, { value: 1 / 3 });
};

var DividerDemo = exports.DividerDemo = function DividerDemo() {
  return _react2.default.createElement(_Divider2.default, { w: 1, borderColor: 'blue' });
};

var ContainerDemo = exports.ContainerDemo = function ContainerDemo() {
  return _react2.default.createElement(
    _Container2.default,
    null,
    'Hello'
  );
};

var RowDemo = exports.RowDemo = function RowDemo() {
  return _react2.default.createElement(
    _Row2.default,
    null,
    _react2.default.createElement(
      _Column2.default,
      null,
      'Column'
    ),
    _react2.default.createElement(
      _Column2.default,
      null,
      'Column'
    )
  );
};

var ColumnDemo = exports.ColumnDemo = function ColumnDemo() {
  return _react2.default.createElement(
    _Row2.default,
    null,
    _react2.default.createElement(
      _Column2.default,
      null,
      'Column'
    ),
    _react2.default.createElement(
      _Column2.default,
      null,
      'Column'
    ),
    _react2.default.createElement(
      _Column2.default,
      null,
      'Column'
    )
  );
};

var BorderDemo = exports.BorderDemo = function BorderDemo() {
  return _react2.default.createElement(
    _Border2.default,
    { m: 3, p: 3 },
    'Border'
  );
};

var CardDemo = exports.CardDemo = function CardDemo() {
  return _react2.default.createElement(
    _Card2.default,
    { width: 256 },
    _react2.default.createElement(_BackgroundImage2.default, {
      ratio: 1,
      src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
    }),
    _react2.default.createElement(
      _Subhead2.default,
      { p: '2' },
      'Hello'
    )
  );
};

var BannerDemo = exports.BannerDemo = function BannerDemo() {
  return _react2.default.createElement(
    _Banner2.default,
    { src: image },
    _react2.default.createElement(
      _Heading2.default,
      null,
      'Banner'
    )
  );
};

var MessageDemo = exports.MessageDemo = function MessageDemo() {
  return _react2.default.createElement(
    _Message2.default,
    null,
    'Hello'
  );
};

var GroupDemo = exports.GroupDemo = function GroupDemo() {
  return _react2.default.createElement(
    _Group2.default,
    null,
    _react2.default.createElement(_Button2.default, { children: 'Beep' }),
    _react2.default.createElement(_ButtonOutline2.default, { children: 'Boop' }),
    _react2.default.createElement(_ButtonOutline2.default, { children: 'Bop' })
  );
};

var ToolbarDemo = exports.ToolbarDemo = function ToolbarDemo() {
  return _react2.default.createElement(
    _Toolbar2.default,
    null,
    _react2.default.createElement(
      _NavLink2.default,
      null,
      'Hello'
    ),
    _react2.default.createElement(
      _NavLink2.default,
      { ml: 'auto' },
      'Beep'
    ),
    _react2.default.createElement(
      _NavLink2.default,
      null,
      'Boop'
    )
  );
};

var BadgeDemo = exports.BadgeDemo = function BadgeDemo() {
  return _react2.default.createElement(
    _Badge2.default,
    null,
    'Badge'
  );
};

var CircleDemo = exports.CircleDemo = function CircleDemo() {
  return _react2.default.createElement(
    _Circle2.default,
    null,
    'A'
  );
};

var PositionDemo = exports.PositionDemo = function PositionDemo() {
  return _react2.default.createElement(
    _Position2.default,
    { p: 3, bg: 'green', position: 'relative' },
    'Hello'
  );
};

var RelativeDemo = exports.RelativeDemo = function RelativeDemo() {
  return _react2.default.createElement(
    _Position.Relative,
    null,
    _react2.default.createElement(
      _Position.Absolute,
      { bottom: 0, right: 0 },
      'Hello'
    )
  );
};

var AbsoluteDemo = exports.AbsoluteDemo = function AbsoluteDemo() {
  return _react2.default.createElement(
    _Position.Relative,
    null,
    _react2.default.createElement(
      _Position.Absolute,
      { bottom: 0, right: 0 },
      'Hello'
    )
  );
};

var StickyDemo = exports.StickyDemo = function StickyDemo() {
  return _react2.default.createElement(
    _Position.Sticky,
    { m: '2', top: '0', right: 0, bottom: 0 },
    'Hello'
  );
};

var TabDemo = exports.TabDemo = function TabDemo() {
  return _react2.default.createElement(
    _Tab2.default,
    { borderColor: 'blue' },
    'Hello'
  );
};

var TabsDemo = exports.TabsDemo = function TabsDemo() {
  return _react2.default.createElement(
    _Tabs2.default,
    null,
    _react2.default.createElement(
      _Tab2.default,
      { borderColor: 'blue' },
      'Beep'
    ),
    _react2.default.createElement(
      _Tab2.default,
      null,
      'Boop'
    ),
    _react2.default.createElement(
      _Tab2.default,
      null,
      'Bop'
    )
  );
};

var DotDemo = exports.DotDemo = function DotDemo() {
  return _react2.default.createElement(
    _Flex2.default,
    null,
    _react2.default.createElement(_Dot2.default, { bg: 'black' }),
    _react2.default.createElement(_Dot2.default, null),
    _react2.default.createElement(_Dot2.default, null)
  );
};

var DrawerDemo = exports.DrawerDemo = function DrawerDemo() {
  return _react2.default.createElement(
    _reactPowerplug.State,
    { initial: { open: false, position: 'left' } },
    function (_ref3) {
      var state = _ref3.state,
          setState = _ref3.setState;
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _Label2.default,
          null,
          'Position:',
          _react2.default.createElement(_StatefulSelect2.default, {
            border: 1,
            items: [{ value: 'left', text: 'Left' }, { value: 'right', text: 'Right' }, { value: 'bottom', text: 'Bottom' }, { value: 'top', text: 'Top' }],
            value: state.position,
            onChange: function onChange(v) {
              return setState({ position: v });
            }
          })
        ),
        _react2.default.createElement(
          _Button2.default,
          { m: 3, onClick: function onClick() {
              return setState({ open: !state.open });
            } },
          state.open ? 'Close ' + state.position : 'Open ' + state.position
        ),
        _react2.default.createElement(
          _Drawer2.default,
          {
            width: state.position === 'top' || state.position === 'bottom' ? '100%' : 320,
            height: state.position === 'top' || state.position === 'bottom' ? '320px' : undefined,
            open: state.open,
            side: state.position,
            p: 3,
            color: 'white',
            bg: 'black'
          },
          _react2.default.createElement(
            _Heading2.default,
            null,
            'Hello'
          ),
          'Drawer'
        )
      );
    }
  );
};

var TooltipDemo = exports.TooltipDemo = function TooltipDemo() {
  return _react2.default.createElement(
    _Flex2.default,
    { align: 'center', mt: 100, minHeight: 100 },
    _react2.default.createElement(
      _Tooltip2.default,
      { text: 'Hello' },
      _react2.default.createElement(
        _Text2.default,
        null,
        'Hover Me'
      )
    )
  );
};

var EmbedDemo = exports.EmbedDemo = function EmbedDemo() {
  return _react2.default.createElement(
    _Embed2.default,
    null,
    _react2.default.createElement('iframe', {
      title: 'Demo',
      width: '560',
      height: '315',
      src: 'https://www.youtube.com/embed/GNCd_ERZvZM',
      frameBorder: '0',
      allowFullScreen: true
    })
  );
};

var PanelDemo = exports.PanelDemo = function PanelDemo() {
  return _react2.default.createElement(
    _Panel2.default,
    { color: 'blue' },
    _react2.default.createElement(
      _Panel2.default.Header,
      { color: 'white', bg: 'blue' },
      'Hello'
    ),
    _react2.default.createElement(
      _Box2.default,
      { p: 3 },
      _react2.default.createElement(
        _Subhead2.default,
        null,
        'Panel'
      )
    ),
    _react2.default.createElement(
      _Panel2.default.Footer,
      { color: 'blue' },
      'Footer'
    )
  );
};

var ModalDemo = exports.ModalDemo = function ModalDemo() {
  return _react2.default.createElement(
    _reactPowerplug.State,
    { initial: { open: false } },
    function (_ref4) {
      var state = _ref4.state,
          setState = _ref4.setState;
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _Button2.default,
          { m: 3, onClick: function onClick() {
              return setState({ open: !state.open });
            } },
          'Open Modal'
        ),
        state.open && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Position.Fixed, { top: 0, right: 0, bottom: 0, left: 0 }),
          _react2.default.createElement(
            _Modal2.default,
            { width: 256 },
            _react2.default.createElement(
              _Heading2.default,
              null,
              'Hello'
            ),
            _react2.default.createElement(
              _Button2.default,
              { m: 3, onClick: function onClick() {
                  return setState({ open: false });
                } },
              'Close Modal'
            )
          )
        )
      );
    }
  );
};

var DonutDemo = exports.DonutDemo = function DonutDemo() {
  return _react2.default.createElement(_Donut2.default, { value: 2 / 3, strokeWidth: 3, size: 256, color: 'blue' });
};

/***/ }),
/* 617 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Active", function() { return Active; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compose", function() { return Compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return Counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Focus", function() { return Focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusManager", function() { return FocusManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hover", function() { return Hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return Interval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return Toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeEvents", function() { return composeEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderProps", function() { return renderProps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_builtin_es6_objectSpread__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_builtin_es6_inheritsLoose__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_builtin_es6_defineProperty__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__ = __webpack_require__(621);







/* eslint-disable no-console */
var warn = function warn(condition, message, trace) {
  if (trace === void 0) {
    trace = true;
  }

  if (condition) {
    console.warn("[react-powerplug]: " + message);
    console.trace && trace && console.trace('Trace');
  }
};

var isFn = function isFn(prop) {
  return typeof prop === 'function';
};
/**
 * renderProps
 * is a render/children props interop.
 * will pick up the prop that was used,
 * or children if both are used
 */


var renderProps = function renderProps(_ref) {
  var children = _ref.children,
      render = _ref.render;

  if (false) {
    warn(isFn(children) && isFn(render), 'You are using the children and render props together.\n' + 'This is impossible, therefore, only the children will be used.');
  }

  var fn = isFn(children) ? children : render;

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  return fn ? fn.apply(void 0, props) : null;
};

var noop = function noop() {};

var State =
/*#__PURE__*/
function (_Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_builtin_es6_inheritsLoose__["a" /* default */])(State, _Component);

  function State() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _Component.call.apply(_Component, [this].concat(args)) || this, Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_builtin_es6_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this)), "state", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_builtin_es6_objectSpread__["a" /* default */])({}, _this.props.initial)), Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_builtin_es6_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this)), "_setState", function (updater, cb) {
      if (cb === void 0) {
        cb = noop;
      }

      var _this$props$onChange = _this.props.onChange,
          onChange = _this$props$onChange === void 0 ? noop : _this$props$onChange;

      _this.setState(updater, function () {
        onChange(_this.state);
        cb();
      });
    }), _temp) || Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this);
  }

  var _proto = State.prototype;

  _proto.render = function render() {
    return renderProps(this.props, {
      state: this.state,
      setState: this._setState
    });
  };

  return State;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

var onChangeProp = function onChangeProp(originalOnChange, propName) {
  if (originalOnChange === void 0) {
    originalOnChange = noop;
  }

  return function (state) {
    originalOnChange(state[propName]);
  };
};

var Active = function Active(_ref) {
  var onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      active: false
    },
    onChange: onChangeProp(onChange, 'active')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      active: state.active,
      bind: {
        onMouseDown: function onMouseDown() {
          return setState({
            active: true
          });
        },
        onMouseUp: function onMouseUp() {
          return setState({
            active: false
          });
        }
      }
    });
  });
};

var isElement = function isElement(element) {
  return typeof element.type === 'function';
};

var compose = function compose() {
  for (var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++) {
    elements[_key] = arguments[_key];
  }

  return function (composedProps) {
    // Stack children arguments recursively and pass
    // it down until the last component that render children
    // with these stacked arguments
    function stackProps(i, elements, propsList) {
      if (propsList === void 0) {
        propsList = [];
      }

      var element = elements[i];
      var isTheLast = i === 0; // Check if is latest component.
      // If is latest then render children,
      // Otherwise continue stacking arguments

      var renderFn = function renderFn(props) {
        return isTheLast ? renderProps.apply(void 0, [composedProps].concat(propsList.concat(props))) : stackProps(i - 1, elements, propsList.concat(props));
      }; // Clone a element if it's passed created as <Element initial={} />
      // Or create it if passed as just Element


      var elementFn = isElement(element) ? __WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"] : __WEBPACK_IMPORTED_MODULE_4_react__["createElement"];
      return elementFn(element, {}, renderFn);
    }

    return stackProps(elements.length - 1, elements.reverse());
  };
};

var Compose = function Compose(_ref) {
  var components = _ref.components,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["components"]);

  return compose.apply(void 0, components)(props);
};

var set = function set(updater, arg) {
  return typeof updater === 'function' ? updater(arg) : updater;
};

var add = function add(value) {
  return function (state) {
    return {
      count: state.count + value
    };
  };
};

var Counter = function Counter(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? 0 : _ref$initial,
      onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["initial", "onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      count: initial
    },
    onChange: onChangeProp(onChange, 'count')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      count: state.count,
      inc: function inc() {
        return setState(add(1));
      },
      dec: function dec() {
        return setState(add(-1));
      },
      incBy: function incBy(value) {
        return setState(add(value));
      },
      decBy: function decBy(value) {
        return setState(add(-value));
      },
      set: function set$$1(value) {
        return setState(function (s) {
          return {
            count: set(value, s.count)
          };
        });
      }
    });
  });
};

var Focus = function Focus(_ref) {
  var onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      focused: false
    },
    onChange: onChangeProp(onChange, 'focused')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      focused: state.focused,
      bind: {
        onFocus: function onFocus() {
          return setState({
            focused: true
          });
        },
        onBlur: function onBlur() {
          return setState({
            focused: false
          });
        }
      }
    });
  });
};

var FocusManager = function FocusManager(_ref) {
  var onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["onChange"]);

  var canBlur = true;
  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      focused: false
    },
    onChange: onChangeProp(onChange, 'focused')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      focused: state.focused,
      blur: function blur() {
        setState({
          focused: false
        });
      },
      bind: {
        tabIndex: -1,
        onBlur: function onBlur() {
          if (canBlur) {
            setState({
              focused: false
            });
          }
        },
        onFocus: function onFocus() {
          setState({
            focused: true
          });
        },
        onMouseDown: function onMouseDown() {
          canBlur = false;
        },
        onMouseUp: function onMouseUp() {
          canBlur = true;
        }
      }
    });
  });
};

var Form = function Form(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? {} : _ref$initial,
      onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["initial", "onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_builtin_es6_objectSpread__["a" /* default */])({}, initial),
    onChange: onChange
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      values: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_builtin_es6_objectSpread__["a" /* default */])({}, state),
      input: function input(id) {
        var value = state[id] || '';

        var setValue = function setValue(value) {
          var _setState;

          return setState((_setState = {}, _setState[id] = value, _setState));
        };

        return {
          bind: {
            onChange: function onChange(event) {
              return setValue(event.target.value);
            },
            value: value
          },
          set: function set$$1(value) {
            return setState(function (s) {
              var _ref3;

              return _ref3 = {}, _ref3[id] = set(value, s.value), _ref3;
            });
          },
          value: value
        };
      }
    });
  });
};

var Hover = function Hover(_ref) {
  var onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      hovered: false
    },
    onChange: onChangeProp(onChange, 'hovered')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      hovered: state.hovered,
      bind: {
        onMouseEnter: function onMouseEnter() {
          return setState({
            hovered: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return setState({
            hovered: false
          });
        }
      }
    });
  });
};

var Input = function Input(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? '' : _ref$initial,
      onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["initial", "onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      value: initial
    },
    onChange: onChangeProp(onChange, 'value')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      bind: {
        onChange: function onChange(event) {
          return setState({
            value: event.target.value
          });
        },
        value: state.value
      },
      set: function set$$1(value) {
        return setState(function (s) {
          return {
            value: set(value, s.value)
          };
        });
      },
      value: state.value
    });
  });
};

var Interval =
/*#__PURE__*/
function (_Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_builtin_es6_inheritsLoose__["a" /* default */])(Interval, _Component);

  function Interval() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _Component.call.apply(_Component, [this].concat(args)) || this, Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_builtin_es6_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this)), "state", {
      times: 0
    }), Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_builtin_es6_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this)), "intervalId", undefined), Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_builtin_es6_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this)), "_clearIntervalIfNecessary", function () {
      if (_this.intervalId) {
        _this.intervalId = clearInterval(_this.intervalId);
      }
    }), Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_builtin_es6_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this)), "_setIntervalIfNecessary", function (delay) {
      if (Number.isFinite(delay)) {
        _this.intervalId = setInterval(function () {
          return _this.setState(function (s) {
            return {
              times: s.times + 1
            };
          });
        }, delay);
      }
    }), Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_builtin_es6_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this)), "stop", function () {
      _this._clearIntervalIfNecessary();
    }), Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_builtin_es6_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this)), "start", function (delay) {
      var _delay = typeof delay === 'number' ? delay : _this.props.delay != null ? _this.props.delay : 1000;

      _this._setIntervalIfNecessary(_delay);
    }), Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_builtin_es6_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this)), "toggle", function () {
      _this.intervalId ? _this.stop() : _this.start();
    }), _temp) || Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_builtin_es6_assertThisInitialized__["a" /* default */])(_this);
  }

  var _proto = Interval.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.start();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.delay !== this.props.delay) {
      this.stop();
      this.start();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stop();
  };

  _proto.render = function render() {
    return renderProps(this.props, {
      start: this.start,
      stop: this.stop,
      toggle: this.toggle
    });
  };

  return Interval;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

var complement = function complement(fn) {
  return function () {
    return !fn.apply(void 0, arguments);
  };
};

var List = function List(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? [] : _ref$initial,
      onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["initial", "onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      list: initial
    },
    onChange: onChangeProp(onChange, 'list')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      list: state.list,
      first: function first() {
        return state.list[0];
      },
      last: function last() {
        return state.list[Math.max(0, state.list.length - 1)];
      },
      set: function set$$1(list) {
        return setState(function (s) {
          return {
            list: set(list, s.list)
          };
        });
      },
      push: function push() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        return setState(function (s) {
          return {
            list: s.list.concat(values)
          };
        });
      },
      pull: function pull(predicate) {
        return setState(function (s) {
          return {
            list: s.list.filter(complement(predicate))
          };
        });
      },
      sort: function sort(compareFn) {
        return setState(function (s) {
          return {
            list: s.list.concat().sort(compareFn)
          };
        });
      }
    });
  });
};

var Map = function Map(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? {} : _ref$initial,
      onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["initial", "onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_builtin_es6_objectSpread__["a" /* default */])({}, initial),
    onChange: onChange
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      values: state,
      set: function set(key, value) {
        var _setState;

        return setState((_setState = {}, _setState[key] = value, _setState));
      },
      over: function over(key, fn) {
        return setState(function (s) {
          var _ref3;

          return _ref3 = {}, _ref3[key] = fn(s[key]), _ref3;
        });
      },
      get: function get(key) {
        return state[key];
      }
    });
  });
};

var unique = function unique(arr) {
  return arr.filter(function (d, i) {
    return arr.indexOf(d) === i;
  });
};

var hasItem = function hasItem(arr, item) {
  return arr.indexOf(item) !== -1;
};

var removeItem = function removeItem(arr, item) {
  return hasItem(arr, item) ? arr.filter(function (d) {
    return d !== item;
  }) : arr;
};

var addUnique = function addUnique(arr, item) {
  return hasItem(arr, item) ? arr : arr.concat([item]);
};

var Set = function Set(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? [] : _ref$initial,
      onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["initial", "onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      values: unique(initial)
    },
    onChange: onChangeProp(onChange, 'values')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      values: state.values,
      add: function add(key) {
        return setState({
          values: addUnique(state.values, key)
        });
      },
      clear: function clear() {
        return setState({
          values: []
        });
      },
      remove: function remove(key) {
        return setState({
          values: removeItem(state.values, key)
        });
      },
      has: function has(key) {
        return hasItem(state.values, key);
      }
    });
  });
};

var Toggle = function Toggle(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? false : _ref$initial,
      onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["initial", "onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      on: initial
    },
    onChange: onChangeProp(onChange, 'on')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      on: state.on,
      toggle: function toggle() {
        return setState(function (s) {
          return {
            on: !s.on
          };
        });
      },
      set: function set$$1(value) {
        return setState(function (s) {
          return {
            on: set(value, s.on)
          };
        });
      }
    });
  });
};

var Touch = function Touch(_ref) {
  var onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      touched: false
    },
    onChange: onChangeProp(onChange, 'touched')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      touched: state.touched,
      bind: {
        onTouchStart: function onTouchStart() {
          return setState({
            touched: true
          });
        },
        onTouchEnd: function onTouchEnd() {
          return setState({
            touched: false
          });
        }
      }
    });
  });
};

var Value = function Value(_ref) {
  var initial = _ref.initial,
      onChange = _ref.onChange,
      props = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_builtin_es6_objectWithoutProperties__["a" /* default */])(_ref, ["initial", "onChange"]);

  return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(State, {
    initial: {
      value: initial
    },
    onChange: onChangeProp(onChange, 'value')
  }, function (_ref2) {
    var state = _ref2.state,
        setState = _ref2.setState;
    return renderProps(props, {
      value: state.value,
      set: function set$$1(value) {
        return setState(function (s) {
          return {
            value: set(value, s.value)
          };
        });
      }
    });
  });
};

var composeEvents = function composeEvents() {
  for (var _len = arguments.length, objEvents = new Array(_len), _key = 0; _key < _len; _key++) {
    objEvents[_key] = arguments[_key];
  }

  return objEvents.reverse().reduce(function (allEvents, events) {
    var append = {};

    var _loop = function _loop(key) {
      append[key] = allEvents[key] ? // Already have this event: let's merge
      function () {
        events[key].apply(events, arguments);
        allEvents[key].apply(allEvents, arguments);
      } : // Don't have this event yet: just assign the event
      events[key];
    };

    for (var key in events) {
      _loop(key);
    }

    return Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_builtin_es6_objectSpread__["a" /* default */])({}, allEvents, append);
  });
};




/***/ }),
/* 618 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectSpread;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defineProperty__ = __webpack_require__(336);

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
      Object(__WEBPACK_IMPORTED_MODULE_0__defineProperty__["a" /* default */])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),
/* 619 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inheritsLoose;
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),
/* 620 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 621 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutProperties;
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

/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.space, _styles.color, _styles.size, _styles.borderRadius);

exports.default = (0, _sys2.default)("img", styles, {
  displayName: "Avatar",
  defaultProps: {
    borderRadius: "99999px",
    size: 48
  },
  withProps: {}
});

/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.width, _styles.ratio, _styles.backgroundSize, _styles.backgroundPosition, _styles.color, {
  backgroundImage: {
    image: function image(v) {
      return 'url(' + v + ')';
    },
    src: function src(v) {
      return 'url(' + v + ')';
    },
    radial: function radial(v) {
      return 'radial-gradient(' + v + ')';
    },
    linear: function linear(v) {
      return 'linear-gradient(' + v + ')';
    }
  }
});

exports.default = (0, _sys2.default)('div', styles, {
  displayName: 'BackgroundImage',
  defaultProps: {
    width: 1,
    ratio: 3 / 4,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  withProps: {}
});

/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _Flex = __webpack_require__(176);

var _Flex2 = _interopRequireDefault(_Flex);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _styles = __webpack_require__(157);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.minHeight, _styles.backgroundSize, _styles.backgroundPosition, {
  backgroundImage: {
    image: function image(v) {
      return 'url(' + v + ')';
    },
    src: function src(v) {
      return 'url(' + v + ')';
    },
    radial: function radial(v) {
      return 'radial-gradient(' + v + ')';
    },
    linear: function linear(v) {
      return 'linear-gradient(' + v + ')';
    }
  }
});

exports.default = (0, _sys2.default)(_Flex2.default, styles, {
  displayName: 'Banner',
  defaultProps: {
    p: [3, 4],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    color: 'white',
    bg: 'black'
  },
  withProps: {}
});

/***/ }),
/* 625 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.space, _styles.width, _styles.color, {
  display: 'block',
  textDecoration: 'none'
});
exports.default = (0, _sys2.default)('a', styles, {
  displayName: 'BlockLink',
  defaultProps: {},
  withProps: {}
});

/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Text = __webpack_require__(179);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Text2.default, {}, {
  displayName: 'BlockQuote',
  defaultProps: {
    is: 'blockquote',
    fontSize: '3',
    m: '0'
  },
  withProps: {}
});

// export const styles = TextStyles

// export default sys("blockquote", styles, {
//   displayName: "Blockquote",
//   fontSize: "3",
//   m: "0"
// })

/***/ }),
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.width, _styles.color, _styles.border, _styles.borderColor);

exports.default = (0, _sys2.default)("div", styles, {
  displayName: "Border",
  defaultProps: {
    border: 1,
    borderColor: "gray"
  },
  withProps: {}
});

/***/ }),
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(224);

var _Button2 = _interopRequireDefault(_Button);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Button2.default, {}, {
  displayName: "ButtonO",
  defaultProps: {
    px: "3",
    borderRadius: 9999
  },
  withProps: {}
});

/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Button = __webpack_require__(224);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Button2.default, _extends({}, _styles.hover, {
  boxShadow: {
    color: "self",
    options: {
      path: "theme.colors",
      postFn: function postFn(v) {
        return "inset 0 0 0 2px" + v;
      }
    }
  }
}), {
  displayName: "ButtonO",
  defaultProps: {
    color: "blue",
    bg: "transparent",
    hover: {
      color: "white",
      backgroundColor: "blue"
    }
  },
  withProps: {}
});

/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Text = __webpack_require__(179);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.letterSpacing, { textTransform: "uppercase" });
exports.default = (0, _sys2.default)(_Text2.default, styles, {
  displayName: "Caps",
  defaultProps: {
    fontSize: 0,
    letterSpacing: "0.2em"
  },
  withProps: {}
});

/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _utils = __webpack_require__(632);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.space, _styles.color, _styles.boxShadow, _styles.borderRadius, {
  overflow: "hidden"
});

exports.default = (0, _sys2.default)("div", styles, {
  displayName: "Card",
  defaultProps: {
    p: "2",
    bg: "white",
    borderRadius: "2",
    boxShadow: "2"
  },
  withProps: {}
});

/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// export const merge = (...args) =>
//   args.reduce(function(result, currentObject) {
//     for (var key in currentObject) {
//       if (currentObject.hasOwnProperty(key)) {
//         result[key] = currentObject[key]
//       }
//     }
//     return result
//   }, {})


/***/ }),
/* 633 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Heading = __webpack_require__(242);

var _Heading2 = _interopRequireDefault(_Heading);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Heading2.default, {}, {
  displayName: "subHead",
  defaultProps: { is: "h3", fontSize: "4" },
  withProps: {}
});

/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.width, _styles.color, _styles.fontSize, _styles.fontWeight, {
  display: "inline-flex",
  alignItems: "center",
  alignSelf: "stretch",
  textDecoration: "none",
  whiteSpace: "nowrap",
  cursor: "pointer",
  "&:disabled": {
    opacity: 1 / 4
  }
});
exports.default = (0, _sys2.default)("a", styles, {
  displayName: "NavLink",
  defaultProps: {
    color: "inherit",
    bg: "transparent",
    fontSize: "1",
    fontWeight: "bold",
    p: "2"
  },
  withProps: {}
});

/***/ }),
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _ButtonTransparent = __webpack_require__(338);

var _ButtonTransparent2 = _interopRequireDefault(_ButtonTransparent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_ButtonTransparent2.default, {
  width: "24px",
  height: "24px"
}, {
  displayName: "Container",
  defaultProps: {
    p: "0",
    fontSize: "3",
    lineHeight: "1",
    children: "×"
  },
  withProps: {}
});

/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Text = __webpack_require__(179);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Text2.default, {}, {
  displayName: 'Lead',
  defaultProps: {
    fontSize: '3',
    lineHeight: 1.25
  },
  withProps: {}
});

/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Text = __webpack_require__(179);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Text2.default, {}, {
  displayName: "Small",
  defaultProps: {
    fontSize: "0"
  },
  withProps: {}
});

/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.fontSize, _styles.fontFamily, _styles.space, _styles.color);
exports.default = (0, _sys2.default)("pre", styles, {
  displayName: "Pre",
  defaultProps: {
    fontSize: "1",
    fontFamily: "mono",
    m: "0"
  },
  withProps: {}
});

/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Code = __webpack_require__(339);

var _Code2 = _interopRequireDefault(_Code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Code2.default, {}, {
  displayName: "Samp",

  withProps: { is: "samp" }
});

/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Text = __webpack_require__(179);

var _Text2 = _interopRequireDefault(_Text);

var _styles = __webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Text2.default, _styles.maxWidth, {
  displayName: "Measure",
  defaultProps: {
    maxWidth: "32em"
  },
  withProps: {}
});

/***/ }),
/* 641 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Text = __webpack_require__(179);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Text2.default, {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, {
  displayName: "Truncate",
  defaultProps: {},
  withProps: {}
});

/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.alignItems, _styles.space, _styles.color, { display: 'flex' });

exports.default = (0, _sys2.default)('label', styles, {
  displayName: 'Label',
  defaultProps: {
    fontSize: '1',
    mb: '1',
    align: 'center'
  },
  withProps: {}
});

/***/ }),
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.fontSize, _styles.lineHeight, _styles.width, _styles.color, _styles.boxShadow, _styles.borderColor, _styles.borderRadius, {
  fontFamily: "inherit",
  display: "inline-block",
  verticalAlign: "middle",
  border: 0,
  appearance: "none",
  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px {!theme.colors.blue}"
  },
  "&:disabled": {
    opacity: 1 / 4
  }
});

exports.default = (0, _sys2.default)("input", styles, {
  displayName: "Card",
  defaultProps: {
    type: "text",
    fontSize: "inherit",
    lineHeight: "inherit",
    px: "1",
    py: "2",
    m: "0",
    width: 1,
    border: 0,
    borderColor: "gray",
    boxShadow: "1",
    borderRadius: "2",
    color: "inherit",
    bg: "transparent"
  },
  withProps: {}
});

/***/ }),
/* 644 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.fontSize, _styles.lineHeight, _styles.width, _styles.color, _styles.boxShadow, _styles.borderColor, _styles.borderRadius, {
  fontFamily: "inherit",
  appearance: "none",
  "&:disabled": {
    opacity: 1 / 4
  },
  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px {!theme.colors.blue}"
  }
});

exports.default = (0, _sys2.default)("textarea", styles, {
  displayName: "Textarea",
  defaultProps: {
    m: "0",
    px: "1",
    py: "2",
    width: 1,
    border: 0,
    borderColor: "gray",
    boxShadow: "1",
    borderRadius: "2",
    color: "inherit",
    bg: "transparent",
    fontSize: "inherit"
  },
  withProps: {}
});

/***/ }),
/* 645 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)("input", _extends({}, _styles.space, _styles.color), {
  displayName: "Radio",
  defaultProps: {
    type: "radio",
    m: "0",
    mr: "2"
  },
  withProps: {}
});

/***/ }),
/* 646 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.space, _styles.color);
exports.default = (0, _sys2.default)("input", styles, {
  displayName: "Checkbox",
  defaultProps: {
    type: "checkbox",
    m: "0",
    mr: "2"
  },
  withProps: {}
});

/***/ }),
/* 647 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.width, _styles.color, _styles.borderRadius, {
  display: "block",
  height: "4px",
  cursor: "pointer",
  appearance: "none",
  "&::-webkit-slider-thumb": {
    width: "16px",
    height: "16px",
    backgroundColor: "currentcolor",
    border: 0,
    borderRadius: "99999px",
    appearance: "none"
  }
});

exports.default = (0, _sys2.default)("input", styles, {
  displayName: "Slider",
  defaultProps: {
    type: "range",
    width: 1,
    mx: "0",
    my: "2",
    color: "inherit",
    bg: "gray",
    borderRadius: 99999
  },
  withProps: {}
});

/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = (0, _merge2.default)(_styles.space, _styles.width, _styles.color, {
  display: "block",
  maxWidth: "100%",
  height: "auto"
});
exports.default = (0, _sys2.default)("img", styles, {
  displayName: "Container",
  defaultProps: {},
  withProps: {}
});

/***/ }),
/* 649 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = (0, _merge2.default)(_styles.color, _styles.space, _styles.borderRadius, _styles.width, {
  boxSizing: "border-box",
  diplay: "block",
  height: "4px",
  overflow: "hidden",
  appearance: "none",
  "&::-webkit-progress-bar": {
    background: "{!theme.colors.gray}"
  },
  "&::-webkit-progress-value ": {
    background: "{!theme.colors.blue}"
  },
  "&::mozProgressBar": {
    backgroundColor: "{!theme.colors.blue}"
  }
});
exports.default = (0, _sys2.default)("progress", styles, {
  displayName: "Progress",
  defaultProps: {
    type: "radio",
    width: 1,
    m: "0",
    px: "0",
    color: "blue",
    bg: "gray",
    borderRadius: "2"
  },
  withProps: {}
});

/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.color, _styles.border, _styles.borders, _styles.borderColor);
exports.default = (0, _sys2.default)("hr", styles, {
  displayName: "Divider",
  defaultProps: {
    mx: "0",
    my: "3",
    border: 0,
    borderBottom: 1,
    borderColor: "gray"
  },
  withProps: {}
});

/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Flex = __webpack_require__(176);

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Flex2.default, {}, {
  displayName: "Row",
  defaultProps: {
    mx: "-3"
  },
  withProps: {}
});

/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Box = __webpack_require__(178);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _sys2.default)(_Box2.default, {}, {
  displayName: "Column",
  defaultProps: {
    px: "3",
    mb: "4",
    flex: "1 1 auto"
  },
  withProps: {}
});

/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Flex = __webpack_require__(176);

var _Flex2 = _interopRequireDefault(_Flex);

var _styles = __webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.minHeight, _styles.fontWeight, {
  WebkitFontSmoothing: "antialiased"
});

exports.default = (0, _sys2.default)(_Flex2.default, styles, {
  displayName: "Measure",
  defaultProps: {
    px: "3",
    py: "2",
    fontWeight: "bold",
    color: "white",
    bg: "blue",
    align: "center",
    minHeight: "48px"
  },
  withProps: {}
});

/***/ }),
/* 654 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Flex = __webpack_require__(176);

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  "& > *": {
    borderRadius: 0
  },
  "& > *:first-child": {
    borderRadius: "{!theme.radii.2}px 0 0 {!theme.radii.2}px"
  },
  "& > *:last-child": {
    borderRadius: "0 {!theme.radii.2}px {!theme.radii.2}px 0"
  }
};

exports.default = (0, _sys2.default)(_Flex2.default, styles, {
  displayName: "Group",
  defaultProps: {},
  withProps: {}
});

/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Flex = __webpack_require__(176);

var _Flex2 = _interopRequireDefault(_Flex);

var _styles = __webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.minHeight, _styles.fontWeight, {
  WebkitFontSmoothing: "antialiased"
});

exports.default = (0, _sys2.default)(_Flex2.default, styles, {
  displayName: "Toolbar",
  defaultProps: {
    px: "2",
    color: "white",
    bg: "black",
    align: "center",
    minHeight: "48px"
  },
  withProps: {}
});

/***/ }),
/* 656 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Badge = __webpack_require__(337);

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _extends({}, _styles.textAlign, _styles.size, _styles.alignItems, { boxSizing: "border-box" });

exports.default = (0, _sys2.default)(_Badge2.default, styles, {
  displayName: "Circle",
  defaultProps: {
    size: 24,
    align: "center",
    borderRadius: "99999px"
  },
  withProps: {}
});

/***/ }),
/* 657 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.fontSize, _styles.fontWeight, _styles.color, _styles.borderRadius, _styles.border, _styles.hover, _styles.borderBottom, _styles.borderColor, {
  textDecoration: "none"
});

exports.default = (0, _sys2.default)("a", styles, {
  displayName: "Tab",
  defaultProps: {
    fontSize: "1",
    fontWeight: "bold",
    mr: "3",
    py: "2",
    color: "inherit",
    borderBottom: 2,
    borderColor: "transparent",
    hover: {
      color: "blue"
    }
  },
  withProps: {}
});

/***/ }),
/* 658 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Flex = __webpack_require__(176);

var _Flex2 = _interopRequireDefault(_Flex);

var _styles = __webpack_require__(157);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.borders, _styles.borderColor);

exports.default = (0, _sys2.default)(_Flex2.default, styles, {
  displayName: "Tabs",
  defaultProps: {
    borderBottom: 1,
    borderColor: "gray"
  },
  withProps: {}
});

/***/ }),
/* 659 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.size, _styles.space, _styles.color, _styles.borders, _styles.borderRadius, _styles.borderColor, _styles.focus, _styles.hover, _styles.disabled, {
  appearance: "none",
  backgroundClip: "padding-box"
});

exports.default = (0, _sys2.default)("button", styles, {
  displayName: "Dot",
  defaultProps: {
    m: "0",
    p: "0",
    size: 16,
    bg: "darken",
    borderRadius: 99999,
    border: 4,
    borderColor: "transparent",
    focus: {
      backgroundColor: "blue"
    },
    hover: {
      backgroundColor: "blue"
    },
    disabledStyle: {
      opacity: 1 / 4
    }
  },
  withProps: {}
});

/***/ }),
/* 660 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Box = __webpack_require__(178);

var _Box2 = _interopRequireDefault(_Box);

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.position, _styles.zIndex, _styles.height, {
  options: { cx: ["side"] },
  transform: {
    open: "none",
    sideBottom: "translateY(100%)",
    sideTop: "translateY(-100%)",
    sideleft: "translateX(-100%)",
    sideRight: "translateX(100%)",
    default: "translateX(-100%)"
  },

  bottom: {
    sideLeft: 0,
    sideRight: 0,
    sideBottom: 0
  },
  top: {
    sideRight: 0,
    sideTop: 0,
    sideLeft: 0
  },
  left: {
    sideLeft: 0,
    sideTop: 0,
    sideBottom: 0
  },
  right: {
    sideRight: 0,
    sideTop: 0,
    sideBottom: 0
  },
  overflowX: "hidden",
  overflowY: "auto",
  transitionProperty: "transform",
  transitionDuration: ".2s",
  transitionTimingFunction: "ease-out"
});

exports.default = (0, _sys2.default)(_Box2.default, styles, {
  displayName: "Drawer",
  defaultProps: {
    blacklist: ["side", "open"],
    position: "fixed",
    color: "white",
    bg: "black",
    open: false,
    side: "bottom",
    width: 320,
    zIndex: "99"
  },
  withProps: {}
});

/***/ }),
/* 661 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.space, _styles.ratio, _styles.color, {
  position: "relative",
  overflow: "hidden",
  "& > iframe": {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    border: 0
  }
});

exports.default = (0, _sys2.default)("div", styles, {
  displayName: "Embed",
  defaultProps: { ratio: 9 / 16 },
  withProps: {}
});

/***/ }),
/* 662 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.Header = exports.Panel = exports.stylesHeaderFooter = exports.stylesRoot = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesRoot = exports.stylesRoot = (0, _merge2.default)(_styles.space, _styles.color, _styles.borderRadius, _styles.borders, _styles.borderColor, {
  overflow: "hidden"
});

var stylesHeaderFooter = exports.stylesHeaderFooter = (0, _merge2.default)(_styles.space, _styles.fontSize, _styles.color, _styles.borderRadius, _styles.borders, _styles.borderColor, {
  overflow: "hidden"
});

var Panel = exports.Panel = (0, _sys2.default)("div", stylesRoot, {
  displayName: "NavLink",
  defaultProps: {
    bg: "white",
    borderRadius: 2,
    border: 1,
    borderColor: "gray"
  },
  withProps: {}
});

var Header = exports.Header = (0, _sys2.default)("header", stylesHeaderFooter, {
  displayName: "Header",
  defaultProps: {
    fontSize: "2",
    p: "2",
    bg: "white",
    borderBottom: 1,
    borderColor: "gray"
  },
  withProps: {}
});

var Footer = exports.Footer = (0, _sys2.default)("footer", stylesHeaderFooter, {
  displayName: "Footer",
  defaultProps: {
    fontSize: "1",
    p: "2",
    bg: "white",
    borderTop: 1,
    borderColor: "gray"
  },
  withProps: {}
});

Panel.Header = Header;
Panel.Footer = Footer;
exports.default = Panel;

/***/ }),
/* 663 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Position = __webpack_require__(341);

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = (0, _merge2.default)(_styles.width, _styles.maxWidth, _styles.maxHeight, _styles.borderRadius, {
  boxShadow: "0 0 0 60vmax {!theme.colors.darken}, 0 0 32px {!theme.colors.darken}",
  overflow: "auto",
  transform: "translate(-50%, -50%)"
});

exports.default = (0, _sys2.default)(_Position.Fixed, styles, {
  displayName: "Modal",
  defaultProps: {
    top: "50%",
    left: "50%",
    p: "3",
    bg: "white",
    borderRadius: 2,
    maxWidth: "100vw",
    maxHeight: "100vh"
  },
  withProps: {}
});

/***/ }),
/* 664 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _styles = __webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DonutBase = function DonutBase(props) {
  var R = 16 - props.strokeWidth;
  var C = 2 * Math.PI * R;
  return _react2.default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 32 32",
      width: props.size || 128,
      height: props.size || 128
    }),
    _react2.default.createElement("circle", {
      cx: 16,
      cy: 16,
      r: R,
      fill: "none",
      stroke: "currentcolor",
      strokeWidth: props.strokeWidth,
      opacity: "0.125"
    }),
    _react2.default.createElement("circle", {
      cx: 16,
      cy: 16,
      r: R,
      fill: "none",
      stroke: "currentcolor",
      strokeWidth: props.strokeWidth,
      strokeDasharray: C,
      strokeDashoffset: C - props.value * C,
      transform: "rotate(-90 16 16)"
    })
  );
};

exports.default = (0, _sys2.default)(DonutBase, _extends({}, _styles.space, _styles.color), {
  defaultProps: {
    color: "blue",
    strokeWidth: 2,
    value: 1,
    size: 128
  }
});

/***/ }),
/* 665 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _Flex = __webpack_require__(176);

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  "& > div": {
    flex: "none",
    width: "100%"
  },

  "& > div:first-child": {
    marginLeft: {
      index: function index(v) {
        return v * -100 + "%";
      }
    },
    transitionProperty: "margin",
    transitionDuration: ".2s",
    transitionTimingFunction: "ease-out"
  }
};

exports.default = (0, _sys2.default)(_Flex2.default, styles, {
  displayName: "Carousel",
  defaultProps: {
    width: 1
  },
  withProps: {}
});

/***/ }),
/* 666 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _merge = __webpack_require__(159);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = (0, _merge2.default)(_styles.space, _styles.color, _styles.borderRadius, {
  display: "inline-flex",
  width: "40px",
  height: "24px",
  backgroundColor: {
    checked: "{!color}",
    default: "transparent",
    options: { path: "theme.colors" }
  },
  cursor: {
    disabled: "",
    default: "pointer"
  },
  boxShadow: "inset 0 0 0 2px",
  transitionProperty: "background-color",
  transitionDuration: ".2s",
  transitionTimingFunction: "ease-out",
  userSelect: "none",
  "&::after": {
    content: '" "',
    width: "16px",
    height: "16px",
    margin: "4px",
    borderRadius: "99999px",
    transitionProperty: "transform, color",
    transitionDuration: ".1s",
    transitionTimingFunction: "ease-out",
    transform: {
      checked: "translateX(16px)",
      default: "translateX(0)"
    },

    backgroundColor: {
      checked: "white",
      color: "self",
      options: { path: "theme.colors" }
    }
  },
  opacity: {
    disabled: 1 / 4
  }
});

exports.default = (0, _sys2.default)("checkbox", styles, {
  displayName: "Switch",
  defaultProps: {
    role: "checkbox",
    color: "blue",
    borderRadius: "99999px"
  },
  withProps: {}
});

/***/ }),
/* 667 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = __webpack_require__(157);

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.space, _styles.color, {
  options: { cx: ['direction'] },
  display: 'inline-block',
  width: 0,
  height: 0,
  verticalAlign: 'middle',

  borderLeft: {
    directionRight: '.4375em solid',
    directionUp: '.3125em solid transparent',
    directionDown: '.3125em solid transparent'
  },
  borderRight: {
    directionLeft: '.4375em solid',
    directionUp: '.3125em solid transparent',
    directionDown: '.3125em solid transparent'
  },
  borderTop: {
    directionDown: '.4375em solid',
    directionLeft: '.3125em solid transparent',
    directionRight: '.3125em solid transparent'
  },
  borderBottom: {
    directionUp: '.4375em solid',
    directionLeft: '.3125em solid transparent',
    directionRight: '.3125em solid transparent'
  }
});
exports.default = (0, _sys2.default)('div', styles, {
  displayName: 'Arrow',
  defaultProps: { direction: 'down' },
  withProps: {}
});

/***/ }),
/* 668 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sys = __webpack_require__(155);

var _sys2 = _interopRequireDefault(_sys);

var _styles = __webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = _extends({}, _styles.color, {
  display: "inline-block",
  position: "relative",
  color: "inherit",
  backgroundColor: "transparent",
  "&::before": _extends({
    display: "none",
    content: "\"{!text}\"",
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translate(-50%, -4px)",
    whiteSpace: "nowrap",
    fontSize: "{!fontSizes.0}",
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingLeft: "8px",
    paddingRight: "8px"
  }, _styles.color, {
    borderRadius: "{!theme.radii.1}px"
  }),
  "&::after": {
    display: "none",
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translate(-50%, 8px)",
    content: '" "',
    borderWidth: "6px",
    borderStyle: "solid",
    borderColor: "transparent",
    borderTopColor: {
      bg: "self",
      options: { key: "colors" }
    }
  },
  "&:hover": {
    "&::before, &::after": {
      display: "block"
    }
  }
});

exports.default = (0, _sys2.default)("div", styles, {
  displayName: "Tooltip",
  defaultProps: {
    color: "white",
    bg: "black"
  },
  withProps: {}
});

/***/ }),
/* 669 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _futils = __webpack_require__(195);

var _Select = __webpack_require__(340);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_PureComponent) {
  _inherits(Select, _PureComponent);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      var _this$props = _this.props,
          name = _this$props.name,
          onChange = _this$props.onChange;


      var select = event.target;
      var selectedOption = select[select.selectedIndex];

      var value = selectedOption.hasAttribute('value') ? selectedOption.value : null;

      if (name) {
        onChange(name, value);
      } else {
        onChange(value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'renderPlaceholder',
    value: function renderPlaceholder() {
      var _props = this.props,
          value = _props.value,
          placeholder = _props.placeholder,
          children = _props.children;


      if (value) return;

      if (children) {
        var hasNullOption = (0, _futils.where)(function (item) {
          return item.props.value === null;
        }, (0, _futils.toArray)(children));

        if (hasNullOption) return false;
      }

      return _react2.default.createElement(
        'option',
        { disabled: true, value: '' },
        placeholder
      );
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      return (0, _futils.mapValues)(function (item) {
        return _react2.default.createElement(
          'option',
          { key: item.value, value: item.value },
          item.text
        );
      }, (0, _futils.toArray)(this.props.items));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          disabled = _props2.disabled,
          value = _props2.value,
          className = _props2.className,
          restprops = _objectWithoutProperties(_props2, ['disabled', 'value', 'className']);

      return _react2.default.createElement(
        _Select2.default,
        _extends({}, restprops, {
          disabled: disabled,
          value: (0, _futils.isNil)(value) ? '' : value,
          onChange: this.handleChange
        }),
        this.renderPlaceholder(),
        this.renderItems()
      );
    }
  }]);

  return Select;
}(_react.PureComponent);

exports.default = Select;

/***/ })
]));
//# sourceMappingURL=Rebass.9befe540.js.map