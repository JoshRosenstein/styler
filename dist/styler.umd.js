!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@roseys/futils")):"function"==typeof define&&define.amd?define(["exports","@roseys/futils"],r):r(t.roseyStyler={},t.futils)}(this,function(t,r){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function o(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(r){n(t,r,e[r])})}return t}function i(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)e=s[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function s(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var s,p=t[Symbol.iterator]();!(n=(s=p.next()).done)&&(e.push(s.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==p.return||p.return()}finally{if(o)throw i}}return e}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(t){return function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u,a=function(t){return t.split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/).reduce(function(t,r,e){return""===r?t:t.concat(e>0?r[0].toUpperCase():r[0].toLowerCase(),r.slice(1))},"")},c=r.curryN(2,function(t,e){var s=e.theme,u=i(e,["theme"]),c=r.is("Boolean"),l={},d=function(t){return r.when(function(t){return r.is("Array",t)||r.is("Object",t)},function(r){return l[t]=r,"skip"})},f=function(t){return r.pipe(r.prop(t),d(t),r.when(r.isNil,r.always("skip")),r.when(c,function(r){return r?t:"skip"}))(u)},g=function(t){return r.pipe(r.prop(t),d(t),r.ifElse(r.isNil,r.always("skip"),function(r){return r?t:"skip"}))(u)},m=r.pipe(r.join(" "),a,function(t){return n({},t,!0)}),x=r.contains("skip"),h=r.always({}),y=function(t){return r.reduce(function(t,e){return p(t).concat(p(r.toArray((n=e,r.pipe(r.prop(n),r.when(r.isNil,r.always("skip")),d(n),r.ifElse(c,function(t){return t?n:"skip"},function(t){return[n,t]}))(u)))));var n},[],t)};return o({},r.reduce(function(t,e){if(r.is("Array",e)){var n=r.pipe(r.toArray,r.mapValues(f),r.ifElse(x,h,m))(e),o=r.pipe(r.toArray,r.mapValues(g),r.ifElse(x,h,m),r.merge(n))(e);return r.merge(t,o)}return r.pipe(r.toArray,y,r.ifElse(x,h,m),r.merge(t))(e)},{},t),s?{theme:s}:{},l)}),l={baseFontSize:16,breakpoints:{mobile:1,tablet:600,laptop:1024,desktop:1600},space:{none:0,xxs:2,xs:4,sm:8,md:16,lg:32,xl:64,xxl:128},fontSizes:{xxs:12,xs:14,sm:16,md:20,lg:20,xl:24,xxl:32}},d=r.test(/{\!([^}]+)}/g),f=function(t,e){return r.is("String",t)?t.replace(/{\!([^}]+)}/g,function(t,n){return r.pathOr("{!".concat(n,"}"),n,e)}):t},g=function(t){return r.reduce(function(t,e,n){return r.attach(n,e,t)},{},t)},m=r.is("Array"),x=r.is("String"),h=(r.is("Function"),r.is("Number")),y=r.is("Boolean"),b=r.either(Boolean,r.simplyEquals(0)),A=r.both(y,b),I=r.both(r.is("Number"),r.complement(r.simplyEquals(0))),v=r.flip(r.concat),w=r.curryN(2,function(t,e){return r.when(I,r.defaultTo(r.identity,t))(e)}),k=function(t){return w(r.pipe(r.toString,v(t)))},R=r.flip(r.divide),S=r.curryN(3,function(t,e,n){var o=s(function(t,r){var e=parseFloat(t);if(r){var n=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;return"number"!=typeof t&&t.match(n)?[e,t.match(n)[2]]:[t,0]}return isNaN(e)?t:e}(n,!0),2),i=o[0],p=o[1];return p&&"px"!==p?n:I(i)?r.pipe(R(r.defaultTo(16,t)),r.round(3),r.toString,v(e))(i):n}),T=S(16,"rem"),O=S(16,"em"),F=S(.16,"%"),j=S(1,"px"),W=k("rem"),B=k("em"),E=k("%"),C=k("ms"),L=r.either(r.isNil,r.isEmpty),N=r.complement(L),P=(r.either(L,r.simplyEquals(!1)),function(t){return function(e,n){return r.pathOr(n)(e)(t)}}),z=(u=l,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.pathOr(P(u)(t,e),r.concat("theme.",t))}),D=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.pathOr(P(t)(e,n),e)}}({theme:l}),H=(r.test(/^-.+/),r.curryN(3,function(t,r,e){if(!x(r))return r;var n=/^-.+/.test(r),o=n?r.slice(1):r;return r=z("".concat(t,".").concat(o),r)(e),n?h(r)?-1*r:"-"+r:r}),r.curryN(2,function(t,e){return r.pipe(r.toArray,r.mapValues(function(t){return r.objOf(t,e)}),r.mergeAllDeepRight)(t)})),_=(r.pipe(r.toPairs,r.mapValues(function(t){var e,n,o=s(t,2),i=o[0],p=o[1];return e=i,n=p,r.reduceRight(r.objOf,n,r.split(".",e))}),r.mergeAllDeepLeft),r.curryN(2,function(t,e){return r.reduceWhile(r.not,t,!1,e)}),r.either(r.isNil,r.simplyEquals(!1))),G=function(t){return!1===t?null:t},V=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.when(r.is("Function"),function(t){return t.apply(void 0,e)})},X=function(t){return 0===t.indexOf("@")},Y=function(t){if(X(t))return[t];for(var r=[],e=0,n=0,o="",i=0,s=t.length;i<s;i++){var p=t[i];if("("===p)e+=1;else if(")"===p)e-=1;else if("["===p)n+=1;else if("]"===p)n-=1;else if(","===p&&!e&&!n){r.push(o.trim()),o="";continue}o+=p}return r.push(o.trim()),r},$=(process.env.NODE_ENV.trim(),"production"!==process.env.NODE_ENV.trim()),q=function(t){return function(){if(t&&$){for(var r,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];(r=console).log.apply(r,[t].concat(n))}}},M={keys:{margin:"space",marginTop:"space",marginBottom:"space",marginLeft:"space",marginRight:"space",padding:"space",paddingTop:"space",paddingBottom:"space",paddingLeft:"space",paddingRight:"space",color:"colors",fontSize:"fontSizes",fontFamily:"fonts",lineHeight:"lineHeights",fontWeight:"fontWeights",letterspace:"letterspaces",maxWidth:"maxWidths",minWidths:"minWidths",height:"heights",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",border:"borders",borderColor:"colors",backgroundColor:"colors",boxShadow:"shadows"},getter:{margin:"pxToRem",marginTop:"pxToRem",marginBottom:"pxToRem",marginLeft:"pxToRem",marginRight:"pxToRem",padding:"pxToRem",paddingTop:"pxToRem",paddingBottom:"pxToRem",paddingLeft:"pxToRem",paddingRight:"pxToRem",fontSize:"px"},functions:{returnAsIs:r.identity,identity:r.identity,propValue:r.identity,self:r.identity,pxToRem:T,pxToEm:O,pxToPct:F,px:j,ms:C,pct:E,"%":E}},J=function(t,e){return function(t){return r.path(r.split(".",t))(M)}(t)||e},U=r.curryN(3,function(t,e,n){return x(n)?function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.pathOr(J(t,e),r.split(".",r.concat("theme.styler.defaults.",t)))}("".concat(e,".").concat(n),"getter"===e?null:n)(t):n}),Z=function(t){var e,n,o,s=t.value,p=t.props,u=t.globalOptions,a=t.key,c=s.default,l=s.options,b=i(s,["default","options"]),I=r.merge(u,l),v=r.keys(r.pick(r.keys(b),p));if(r.isEmpty(v)&&r.isNil(c))return n;if(r.isEmpty(v)&&!r.isNil(c)&&(n=V(p)(c)),r.isEmpty(v)||(n=r.flow(v,(o=function(t,n){return e=n,r.flow(n,r.flip(r.prop)(b),U(p)("functions"),V(p[n],p),V(p))},function(t){return r.reduceWhile(_,o,!1,t)}),G,r.defaultTo(V(p)(c)))),!n)return n;var w=r.prop(e,p),k=n,R=x(n)&&r.is("Array",w)||r.is("Object",w);R&&(n=w);var S=function(t){return function(t){var e=t.val,n=t.options,o=t.selector,i=t.props,s=n.defaultLookup,p=void 0===s||s,u=n.defaultTransform,a=void 0===u||u,c=n.key,l=n.getter,g=n.postFn,m=n.preFn,y=n.path,b=p&&U(i)("keys")(o),A=a&&U(i)("getter")(o);if(d(e)&&(e=f(e,i)),e&&(b||A||l||g||m||y)){if(m&&(e=r.flow(m,V(e,i))),c=c||y||b||"",r.isDefined(c)&&x(e)){var I=/^-.+/.test(e);e=I?e.slice(1):e;var v=r.isDefined(y)?"".concat(c,".").concat(e):"theme.".concat(c,".").concat(e);e=D(v,e)(i),e=I?h(e)?-1*e:"-"+e:e}(l=l||g||A)&&(e=r.flow(l,U(i)("functions"),V(e,i)))}return e}({val:t,options:I,selector:a,props:p})};if(r.isObject(n)||m(n)){var T=n,F=z("breakpoints")(p);m(F)&&(F=g(F)),m(T)&&(T=g(T),r.isObject(F)&&(F=g(r.values(F))));var j=r.flip(r.prop)(F);return T=Object.keys(T).sort(function(t,r){return j(t)-j(r)}).reduce(function(t,r){return t[r]=T[r],t},{}),Object.keys(T).reduce(function(t,o){var i=j(o);if(r.isNil(i))return console.warn("Styler could not find a match for breakPoints in ".concat(a," style with ").concat(e,"=").concat(JSON.stringify(n))),t;var s=O(i),p=r.when(r.both(r.always(R),y),r.ifElse(A,r.always(k),r.always(null)))(T[o]),u=r.isNil(S(p))?{}:"mobile"===o||"0"===o||s<1.1?r.objOf(a,S(p)):r.objOf(["@media screen and (min-width:".concat(s,")"),a],S(p));return r.mergeDeepRight(t,u)},{})}return S(n)},K={animationDelay:"ms",animationDuration:"ms",backgroundPosition:"px",backgroundPositionX:"px",backgroundPositionY:"px",backgroundSize:"px",border:"px",borderAfterWidth:"px",borderBeforeWidth:"px",borderBottom:"px",borderBottomLeftRadius:"px",borderBottomRightRadius:"px",borderBottomWidth:"px",borderEndWidth:"px",borderHorizontalSpacing:"px",borderLeft:"px",borderLeftWidth:"px",borderRadius:"px",borderRight:"px",borderRightWidth:"px",borderSpacing:"px",borderStartWidth:"px",borderTop:"px",borderTopLeftRadius:"px",borderTopRightRadius:"px",borderTopWidth:"px",borderVerticalSpacing:"px",borderWidth:"px",bottom:"px",boxShadow:"px",boxShadowBlur:"px",boxShadowSpread:"px",boxShadowX:"px",boxShadowY:"px",columnGap:"px",columnRule:"px",columnRuleWidth:"px",columnWidth:"px",flexBasis:"px",fontLineHeight:"px",fontSize:"px",fontSizeDelta:"px",height:"px",left:"px",letterSpacing:"px",logicalHeight:"px",logicalWidth:"px",margin:"px",marginAfter:"px",marginBefore:"px",marginBottom:"px",marginEnd:"px",marginLeft:"px",marginRight:"px",marginStart:"px",marginTop:"px",maskPositionX:"px",maskPositionY:"px",maskSize:"px",maxHeight:"px",maxLogicalHeight:"px",maxLogicalWidth:"px",maxWidth:"px",minHeight:"px",minLogicalHeight:"px",minLogicalWidth:"px",minWidth:"px",motion:"px",motionOffset:"px",outline:"px",outlineOffset:"px",outlineWidth:"px",padding:"px",paddingAfter:"px",paddingBefore:"px",paddingBottom:"px",paddingEnd:"px",paddingLeft:"px",paddingRight:"px",paddingStart:"px",paddingTop:"px",perspective:"px",perspectiveOriginX:"pct",perspectiveOriginY:"pct",right:"px",shapeMargin:"px",size:"px",textIndent:"px",textShadowBlur:"px",textShadowX:"px",textShadowY:"px",textStroke:"px",textStrokeWidth:"px",top:"px",transformOrigin:"pct",transformOriginX:"pct",transformOriginY:"pct",transformOriginZ:"pct",transitionDelay:"ms",transitionDuration:"ms",verticalAlign:"px",width:"px",wordSpacing:"px"},Q=/(^|\s)(:{1,2})(\w)/g,tt=/&/g,rt=function(t){return X(t)&&function(t){return/@\S*\b(media|supports|keyframes)\b/.test(t)}(t)},et=function(t){return r.reduce(function(t,e,n){return function(t,e){return r.reduce(function(t,e,n){return r.isNil(e.value)?t:(""===e.value&&"content"!==e.property&&(e.value=void 0),e.location.concat(e.selectors.join(", ")).reduce(function(t,n,o,i){if(!(n=n.trim()))return"@font-face"===e.property?t[e.property]=t[e.property]?r.toArray(t[e.property]).concat(e.value):e.value:t[e.property]=e.value,t;var s={};return o===i.length-1&&(s[e.property]=e.value),t[n]=r.merge(t[n]||{},s),t[n]},t),t)},e,t)}(e,t)},{},t)},nt=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return r.reduce(function(t,r,o){var i=function(t,r,o,i){return n?t+(""===r?"root":"")+("object"!==e(o)?o:"__"+i):r+t+("object"!==e(o)?o:"__"+i)}(r.property,r.selector,r.value,o);return t[r.location]||(t[r.location]={}),t[r.location][i]?r.selector&&t[r.location][i].selectors.push(r.selector):t[r.location][i]={location:r.location,selectors:r.selector?[r.selector]:[],property:r.property,value:r.value},t},{},t)},ot=function t(e){var n=e.obj,s=e.parents,p=void 0===s?[]:s,u=e.location,a=void 0===u?[]:u,c=e.props,l=e.options,d=void 0===l?{}:l;r.is("Function")(n)&&(n=n(c));var f=n,g=f.options,m=i(f,["options"]);d=o({},d,g);var x=function(r,e,n){return t({obj:r,parents:e,location:n,options:d,props:c})};return q(c.debug)("gOptions",d),r.pipe(r.keys,r.reduce(function(t,e){return r.pipe(Y,r.reduce(function(t,r){var n=st(x,r,m[e],p.slice(),a.slice(),c,d);return t.concat(n)},t))(e)},[]))(n)},it=function(t){return"__match"===t},st=function(t,e,n,o,i,s,p){var u=e;if(n=r.flow(n,V(s),G),o.length&&function(t){return-1!==t.indexOf("&")}(u=u.replace(Q,"$1&$2$3"))&&(u=u.replace(tt,o.pop())),"@font-face"===e)return{location:[],selector:"",property:e,value:n};if(it(e))return t(r.flow(n,r.reduce(function(t,e,n){return r.flow(s,r.ifElse(r.has(n),r.pipe(r.always(e),V(s[n],s),r.mergeDeepRight(t)),r.always(t)))},{})),o,i);if(q(s.debug)("isInlinePattern",p),function(t,e,n){return r.isObject(t)&&!r.isEmpty(t)&&!/[~`!@#$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?\s]/g.test(e)&&!r.isEmpty(e)&&!rt(r.last(n)||[])&&!it(e)}(n,e,o)&&(n=Z({props:s,value:n,key:e,globalOptions:p}),r.isObject(n)))return t(n,o,i);if(r.isObject(n))return rt(e)?i=i.concat(e):X(e)?(o=[u],i=[]):i.length&&rt(i[i.length-1])&&-1===i[i.length-1].indexOf(" ")?i[i.length-1]+=" "+e:o=o.concat(u),t(n,o,i);if("number"==typeof n&&0!==n){var a=function(t){return K[t]}(e);a&&(n+=a)}return d(n)&&(n=f(n,s)),{location:i,selector:o.join(" "),property:e,value:n}},pt=function t(e){return function(n){var s;return r.is("Function")(e)?t(e(n))(n):(s=Array.isArray(e)?e.reduce(function(t,r){return t.concat(ot({obj:r,props:n}))},[]):function(t){var r=t.obj,e=t.props,n=q(e.debug),s=r.options,p=i(r,["options"]),u=o({},e);if(s){var a=s.cx,l=i(s,["cx"]);return a&&(u=c(a,e)),n("options",l),ot({obj:o({},p,{options:l}),props:u})}return ot({obj:r,props:e})}({obj:e,props:n}),r.flow(s,nt,et))}},ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return function(n){var o=z("breakpoints")(n);return(t=V(n)(t))?r.flow(n,r.pick(r.keys(o)),r.objOf("default"),r.merge(e?{options:e}:{}),r.when(r.always(N(t)),H(t))):{}}},at=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pxToRem";return function(e){return ut(t,{key:"space",getter:r})(e)}},ct={getWidth:function(t){return!h(t)||t>1?T(t):100*t+"%"},getBorder:function(t){return h(t)&&t>0?t+"px solid":t},backgroundImage:function(t,r,e){return"url(".concat(r,")")},ratio:function(t){return 100*t+"%"}},lt={width:"returnAsIs",w:"returnAsIs",options:{postFn:ct.getWidth}},dt={color:"returnAsIs",options:{key:"colors"}},ft={backgroundColor:"returnAsIs",bgColor:"returnAsIs",options:{key:"colors"}},gt={color:dt,backgroundColor:ft},mt={width:{size:"returnAsIs",options:{postFn:"px"}}},xt={height:{size:"returnAsIs",options:{postFn:"px"}}},ht=o({},mt,xt),yt={flexBasis:"returnAsIs",options:{postFn:ct.getWidth}},bt={gridGap:"returnAsIs",gap:"returnAsIs",options:{postFn:j,key:"space"}},At={border:"returnAsIs",bd:"returnAsIs",options:{key:"borders",postFn:ct.getBorder}},It={borderTop:"returnAsIs",bdT:"returnAsIs",options:{key:"borders",postFn:ct.getBorder}},vt={borderRight:"returnAsIs",bdR:"returnAsIs",options:{key:"borders",postFn:ct.getBorder}},wt={borderBottom:"returnAsIs",bdB:"returnAsIs",options:{key:"borders",postFn:ct.getBorder}},kt={borderLeft:"returnAsIs",bdL:"returnAsIs",options:{key:"borders",postFn:ct.getBorder}},Rt={border:At,borderLeft:kt,borderBottom:wt,borderRight:vt,borderTop:It},St={padding:"returnAsIs",p:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Tt={paddingLeft:"returnAsIs",pl:"returnAsIs",px:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Ot={paddingRight:"returnAsIs",pr:"returnAsIs",px:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Ft={paddingTop:"returnAsIs",pt:"returnAsIs",py:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},jt={paddingBottom:"returnAsIs",pb:"returnAsIs",py:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Wt={margin:"returnAsIs",m:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Bt={marginLeft:"returnAsIs",ml:"returnAsIs",mx:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Et={marginRight:"returnAsIs",mr:"returnAsIs",mx:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Ct={marginTop:"returnAsIs",mt:"returnAsIs",my:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Lt={marginBottom:"returnAsIs",mb:"returnAsIs",my:"returnAsIs",options:{key:"space",postFn:"pxToRem"}},Nt={padding:St,paddingLeft:Tt,paddingRight:Ot,paddingTop:Ft,paddingBottom:jt,margin:Wt,marginLeft:Bt,marginRight:Et,marginTop:Ct,marginBottom:Lt};t.styler=pt,t.cx=c,t.getThemeAttr=z,t.pxTo=S,t.pxToRem=T,t.pxToEm=O,t.pxToPct=F,t.px=j,t.rem=W,t.em=B,t.pct=E,t.ms=C,t.spaceProp=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pxToRem";return function(e){return t?pt(at(t,r))(e):{}}},t.spacePropDef=at,t.BPPropDef=ut,t.BPProp=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0;return function(e){return t?pt(ut(t,r))(e):{}}},t.alignContent={alignContent:"returnAsIs"},t.alignItems={alignItems:"returnAsIs"},t.alignSelf={alignSelf:"returnAsIs"},t.background={background:"returnAsIs",bg:"returnAsIs"},t.backgroundColor=ft,t.backgroundImage={backgroundImage:"returnAsIs",bgImage:"returnAsIs",options:{postFn:function(t){return"url(".concat(t,")")}}},t.backgroundPosition={backgroundPosition:"returnAsIs",bgPosition:"returnAsIs"},t.backgroundRepeat={backgroundRepeat:"returnAsIs",bgRepeat:"returnAsIs"},t.backgroundSize={backgroundSize:"returnAsIs",bgSize:"returnAsIs"},t.border=At,t.borderBottom=wt,t.borderColor={borderColor:"returnAsIs",bdC:"returnAsIs",options:{key:"colors"}},t.borderLeft=kt,t.borderRadius={borderRadius:"returnAsIs",bdRs:"returnAsIs",options:{key:"radii",postFn:"px"}},t.borderRight=vt,t.borderTop=It,t.borders_c=Rt,t.bottom={bottom:"returnAsIs",options:{postFn:"px"}},t.boxShadow={boxShadow:"returnAsIs",bxSh:"returnAsIs",options:{key:"shadows"}},t.color=dt,t.colors=gt,t.display={display:"returnAsIs"},t.flex={flex:"returnAsIs"},t.flexDirection={flexDirection:"returnAsIs",direction:"returnAsIs",fxdirection:"returnAsIs",row:"row",column:"column",rowReverse:"rowReverse",columnReverse:"columnReverse"},t.flexBasis=yt,t.flexWrap={flexWrap:"returnAsIs",fxWrap:"returnAsIs",wrap:"wrap",nowrap:"nowrap",wrapReverse:"wrapReverse"},t.fontFamily={fontFamily:"returnAsIs",font:"returnAsIs",options:{key:"fonts"}},t.fontSize={fontSize:"returnAsIs",f:"returnAsIs",options:{postFn:"px",key:"fontSizes"}},t.fontWeight={fontWeight:"returnAsIs",options:{key:"fontWeights"}},t.getters=ct,t.gridArea={gridArea:"returnAsIs"},t.gridColumnStart={gridColumnStart:"returnAsIs"},t.gridColumnEnd={gridColumnEnd:"returnAsIs"},t.gridRowStart={gridRowStart:"returnAsIs"},t.gridRowEnd={gridRowEnd:"returnAsIs"},t.gridAutoColumns={gridAutoColumns:"returnAsIs",autoColumns:"returnAsIs"},t.gridAutoFlow={gridAutoFlow:"returnAsIs",row:"row",column:"column",dense:"dense"},t.gridAutoRows={gridAutoRows:"returnAsIs",autoRows:"returnAsIs"},t.gridColumn={gridColumn:"returnAsIs"},t.gridColumnGap={gridColumnGap:"returnAsIs",options:{postFn:"px",key:"space"}},t.gridGap=bt,t.gridRow={gridRow:"returnAsIs"},t.gridTemplate={gridTemplate:"returnAsIs",template:"returnAsIs"},t.gridTemplateAreas={gridTemplateAreas:"returnAsIs",areas:"returnAsIs"},t.gridTemplateColumns={gridTemplateColumns:"returnAsIs",columns:"returnAsIs"},t.gridTemplateRows={gridTemplateRows:"returnAsIs",rows:"returnAsIs"},t.height={height:"returnAsIs",options:{key:"heights",postFn:"pxToRem"}},t.justifyContent={justifyContent:"returnAsIs",justify:"returnAsIs"},t.justifySelf={justifySelf:"returnAsIs"},t.left={left:"returnAsIs",options:{postFn:"px"}},t.letterSpacing={letterSpacing:"returnAsIs",options:{key:"letterSpacings",postFn:"px"}},t.lineHeight={lineHeight:"returnAsIs",options:{key:"lineHeights"}},t.margin=Wt,t.marginBottom=Lt,t.marginLeft=Bt,t.marginRight=Et,t.marginTop=Ct,t.maxHeight={maxHeight:"returnAsIs",options:{key:"maxHeights",postFn:"px"}},t.maxWidth={maxWidth:"returnAsIs",options:{key:"maxWidths",postFn:"px"}},t.minHeight={minHeight:"returnAsIs",options:{key:"minHeights",postFn:"px"}},t.minWidth={minWidth:"returnAsIs",options:{key:"minWidths",postFn:"px"}},t.order={order:"returnAsIs"},t.padding=St,t.paddingBottom=jt,t.paddingLeft=Tt,t.paddingRight=Ot,t.paddingTop=Ft,t.position={position:"returnAsIs",static:"static",absolute:"absolute",fixed:"fixed",relative:"relative",sticky:"sticky"},t.ratio_c={height:0,paddingBottom:{ratio:"returnAsIs",options:{postFn:function(t){return 100*t+"%"}}}},t.right={right:"returnAsIs",options:{postFn:"px"}},t.size_c=ht,t.size_height_c=xt,t.size_width_c=mt,t.space=Nt,t.textAlign={textAlign:"returnAsIs"},t.top={top:"returnAsIs",options:{postFn:"px"}},t.width=lt,t.zIndex={zIndex:"returnAsIs"},Object.defineProperty(t,"__esModule",{value:!0})});
