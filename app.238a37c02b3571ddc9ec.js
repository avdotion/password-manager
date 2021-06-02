/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@reatom/core/build/index.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/@reatom/core/build/index.es.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS_DEV": () => (/* binding */ t),
/* harmony export */   "addToSetsMap": () => (/* binding */ r),
/* harmony export */   "callSafety": () => (/* binding */ e),
/* harmony export */   "createStore": () => (/* binding */ S),
/* harmony export */   "createTransaction": () => (/* binding */ h),
/* harmony export */   "declareAction": () => (/* binding */ m),
/* harmony export */   "declareAtom": () => (/* binding */ w),
/* harmony export */   "defaultStore": () => (/* binding */ x),
/* harmony export */   "delFromSetsMap": () => (/* binding */ a),
/* harmony export */   "invalid": () => (/* binding */ v),
/* harmony export */   "isAction": () => (/* binding */ l),
/* harmony export */   "isActionCreator": () => (/* binding */ d),
/* harmony export */   "isAtom": () => (/* binding */ s),
/* harmony export */   "isFunction": () => (/* binding */ o),
/* harmony export */   "isObject": () => (/* binding */ i),
/* harmony export */   "isString": () => (/* binding */ c),
/* harmony export */   "memo": () => (/* binding */ y),
/* harmony export */   "noop": () => (/* binding */ n),
/* harmony export */   "safeActionCreator": () => (/* binding */ p),
/* harmony export */   "safeAtom": () => (/* binding */ f),
/* harmony export */   "safeFunction": () => (/* binding */ u)
/* harmony export */ });
var t=!0,n=function(){};function e(t){try{return t.apply(this,[].slice.call(arguments,1))}catch(t){return t=t instanceof Error?t:new Error(t),setTimeout(function(){throw t}),t}}function r(t,n,e){var r=t.get(n);void 0===r&&t.set(n,r=new Set),r.add(e)}function a(t,n,e){var r=t.get(n);void 0!==r&&(r.delete(e),0===r.size&&t.delete(n))}function c(t){return"string"==typeof t}function i(t){return"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function u(t,n){return void 0===n&&(n=t),v(!o(t),n+", expected function"),t}function s(t){return o(t)&&o(t.getState)}function f(t,n){return void 0===n&&(n=t),v(!s(t),n+", expected atom"),t}function d(t){return o(t)&&o(t.dispatch)}function p(t,n){return void 0===n&&(n=t),v(!d(t),n+", expected action"),t}function l(t){return i(t)&&c(t.type)&&"payload"in t}function v(t,n){if(t)throw new Error("Reatom: invalid "+n)}function h(t,n,e,r){void 0===n&&(n=new Map),void 0===e&&(e=function(){}),void 0===r&&(r={});var a={actions:t,effects:[],process:function(t,c){var i,o,u=n.get(t);return u||(u=t(a,null!=(i=null!=(o=e(t))?o:c)?i:{deps:[],ctx:void 0,state:r[t.id],types:new Set}),n.set(t,u)),u}};return a}function y(t,n,e){var r,a=n.deps,c=[],i=new Set,u=!1,f=!1,p=!1,l=0;function h(){return p?c.forEach(function(t){return d(t)?i.add(t.type):t.cache.types.forEach(function(t){return i.add(t)})}):i=n.types,u||!Object.is(n.state,r)||0===a.length?{deps:c,ctx:n.ctx,state:r,types:i}:n}function y(){c.length=0,i.clear()}if(a.length>0&&a.every(function(n){if(d(n)){var e=n.type;if(t.actions.some(function(t){return t.type===e}))return y(),!1}else{var r=n.atom,a=n.cache,i=t.process(r,a);if(i!==a){if(i.state!==a.state)return y(),!1;n={atom:r,cache:i},u=!0,p||(p=i.types!==a.types)}}return c.push(n),!0}))return r=n.state,h();function g(e){o(e)&&t.effects.push(function(t){return e(t,n.ctx)})}return r=e(function(n,e){v(Number.isNaN(l),"outdated track call"),l++;try{if(s(n))return function(n,e){var r=t.process(n);if(1===l){var i=a.length>c.length?a[c.length]:null;f||(f=(null==i?void 0:i.atom)!==n),u||(u=f||i.cache!==r),p||(p=f||i.cache.types!==r.types),c.push({atom:n,cache:r}),!e||!f&&Object.is(i.cache.state,r.state)||g(e(r.state))}else v(e,"callback in nested track");return r.state}(n,e);v(!d(n),"track arguments"),1===l?(v(!e,"action track without callback"),f||(f=a.length<=c.length||a[c.length]!==n),p||(p=f),c.push(n),t.actions.forEach(function(t){t.type===n.type&&g(e(t.payload,t))})):v(!0,"action handling in nested track")}finally{l--}},n.state),l=NaN,f=f||a.length>c.length,u=u||f,p=p||f,h()}var g=function(t){return{payload:t}},E=0;function m(t,n){void 0===n&&(n=c(t)?t:"action ["+ ++E+"]");var e=o(t)?t:g,r=function(){var t=e.apply(void 0,[].slice.call(arguments));return v("type"in t,"action type in created action data"),v("payload"in t==0,"missing payload in created action data"),Object.assign({},t,{type:n})};return r.dispatch=function(){return x.dispatch(r.apply(void 0,[].slice.call(arguments)))},r.subscribe=function(t){return x.subscribe(r,t)},r.type=n,r}var b=0;function w(t,n,e){void 0===n&&(n={}),void 0===e&&(e={});var r=(e=c(e)?{id:e}:e).createCtx,a=void 0===r?function(){return{}}:r,i=e.id,u=void 0===i?"atom ["+ ++b+"]":i,s=e.onChange,f=t;o(t)||(f=function(n,e){return void 0===e&&(e=t),e},0===Object.keys(n).length&&(n.update=function(t,n){return o(t)?t(n):t}));var d=[h],p=Object.keys(n).map(function(t){return{reducer:n[t],actionCreator:h[t]=m(function(t){return{payload:t,targets:d}},t+' of "'+u+'"')}}),l=function(t,n){return p.reduce(function(n,e){var r=e.reducer;return t(e.actionCreator,function(t){return n=r(t,n)}),n},f(t,n))};function h(t,n){void 0===n&&(n={deps:[],ctx:void 0,state:void 0,types:new Set}),void 0===n.ctx&&(n.ctx=a());var e=y(t,n,l);return void 0===s||Object.is(e.state,n.state)||t.effects.push(function(t){return s(n.state,e.state,t,e.ctx)}),e}return v(!(void 0!==t&&o(f)&&c(u)&&o(a)&&Object.values(n).every(o)),"atom arguments"),h.id=u,h.init=function(){return x.init(h)},h.getState=function(){return x.getState(h)},h.subscribe=function(t){return x.subscribe(h,t)},h}function S(t){void 0===t&&(t={});var c=new Map,i=new Map,u=new WeakMap,f=new Map,p=new Set;function y(t,n){void 0===n&&(n={});var e=E(t),r=e.deps;return n[t.id]=e.state,r.forEach(function(t){return!d(t)&&y(t.atom,n)}),n}var g=function(n){var o=Array.isArray(n)?n:[n];v(0===o.length||!1===o.every(l),"dispatch arguments");var s=new Map,d=h(o,s,E,t),y=new Array,g=null;try{o.forEach(function(t){var n=t.targets;return null==n?void 0:n.forEach(function(t){return d.process(t)})}),o.forEach(function(t){var n;return null==(n=c.get(t.type))?void 0:n.forEach(function(t){return d.process(t)})}),s.forEach(function(t,n){return function(t,n,e){var i=E(t);f.has(t)&&(void 0===i?n.types.forEach(function(n){return r(c,n,t)}):i.types!==n.types&&(n.types.forEach(function(n){return i.types.has(n)||r(c,n,t)}),i.types.forEach(function(e){return n.types.has(e)||a(c,e,t)}))),u.set(t,n),Object.is(null==i?void 0:i.state,n.state)||e.push([t,n])}(n,t,y)})}catch(t){g=t instanceof Error?t:new Error(t)}var m={actions:o,error:g,patch:s};return p.forEach(function(t){return e(t,m)}),y.forEach(function(t){var n;return null==(n=f.get(t[0]))?void 0:n.forEach(function(n){return e(n,t[1].state)})}),o.forEach(function(t){var n;return null==(n=i.get(t.type))?void 0:n.forEach(function(n){return e(n,t)})}),Promise.allSettled(d.effects.map(function(t){return new Promise(function(n){return n(t(x))})}))};function E(t){return u.get(t)}function m(t){if(void 0===t){var n={};return f.forEach(function(t,e){return y(e,n)}),n}v(!s(t),'"getState" argument');var e=E(t);return void 0===e&&(g({type:'init "'+t.id+'" ~'+Math.random().toString(36),payload:null,targets:[t]}),e=E(t)),e.state}function b(t,n){var e=f.get(t),i=!1;function o(){e.delete(n),0===e.size&&(f.delete(t),u.get(t).types.forEach(function(n){return a(c,n,t)}))}void 0===e&&(i=u.has(t),f.set(t,e=new Set)),e.add(n);try{return m(t),i&&E(t).types.forEach(function(n){return r(c,n,t)}),o}catch(t){throw o(),t}}function w(t,n){return r(i,t.type,n),function(){return a(i,t.type,n)}}function S(t){return p.add(t),function(){return p.delete(t)}}var x={dispatch:g,getCache:E,getState:m,init:function(){var t=[].slice.call(arguments).map(function(t){return b(t,n)});return function(){return t.forEach(function(t){return t()})}},subscribe:function(){var t=[].slice.call(arguments);return 1===t.length&&o(t[0])?S(t[0]):s(t[0])&&o(t[1])?b(t[0],t[1]):d(t[0])&&o(t[1])?w(t[0],t[1]):v(!0,"subscribe arguments")},__DO_NOT_USE_IT_OR_YOU_WILL_BE_FIRED:{actionsComputers:c,actionsListeners:i,atomsCache:u,atomsListeners:f,transactionListeners:p}};return x}var x=S();
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/@reatom/react/build/index.es.js":
/*!******************************************************!*\
  !*** ./node_modules/@reatom/react/build/index.es.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reatomContext": () => (/* binding */ u),
/* harmony export */   "useAction": () => (/* binding */ i),
/* harmony export */   "useAtom": () => (/* binding */ a),
/* harmony export */   "useInit": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");
var u=react__WEBPACK_IMPORTED_MODULE_0__.default.createContext(_reatom_core__WEBPACK_IMPORTED_MODULE_2__.defaultStore);function c(t,e){return function(r){var o=e(r);o&&react__WEBPACK_IMPORTED_MODULE_0__.default.unstable_batchedUpdates(function(){t.dispatch(o)})}}function i(t,e){void 0===e&&(e=[]);var n=react__WEBPACK_IMPORTED_MODULE_0__.default.useContext(u);return react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(c(n,t),e.concat(n))}function a(t,n){void 0===n&&(n=[]);var i=react__WEBPACK_IMPORTED_MODULE_0__.default.useContext(u),a=react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(function(){return[{getCurrentValue:function(){return i.getState(t)},subscribe:function(e){return i.subscribe(t,e)}},Object.entries(t).reduce(function(t,r){var n=r[0],o=r[1];return (0,_reatom_core__WEBPACK_IMPORTED_MODULE_2__.isActionCreator)(o)&&(t[n]=c(i,o)),t},{})]},n.concat([t,i]));return[(0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(a[0]),a[1]]}function f(t,e){void 0===e&&(e=[]);var n=react__WEBPACK_IMPORTED_MODULE_0__.default.useContext(u);react__WEBPACK_IMPORTED_MODULE_0__.default.useEffect(function(){return n.init.apply(n,t)},e)}
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLORFUL_EMOJIS_ORDERED_LIST": () => (/* binding */ COLORFUL_EMOJIS_ORDERED_LIST),
/* harmony export */   "DEFAULT_EMOJI": () => (/* binding */ DEFAULT_EMOJI),
/* harmony export */   "SALTED_PASSWORD_DEFAULT_LENGTH": () => (/* binding */ SALTED_PASSWORD_DEFAULT_LENGTH),
/* harmony export */   "SALTED_PASSWORD_MIN_LENGTH": () => (/* binding */ SALTED_PASSWORD_MIN_LENGTH),
/* harmony export */   "SALTED_PASSWORD_MAX_LENGTH": () => (/* binding */ SALTED_PASSWORD_MAX_LENGTH),
/* harmony export */   "SESSION_TIME_TO_TERMINATE": () => (/* binding */ SESSION_TIME_TO_TERMINATE)
/* harmony export */ });
const COLORFUL_EMOJIS_ORDERED_LIST = ['😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🦝', '🐵', '🐒', '🦍', '🐶', '🐕', '🐩', '🐺', '🦊', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆', '🐴', '🐎', '🦄', '🦓', '🦌', '🐮', '🐂', '🦙', '🐃', '🐄', '🐷', '🦛', '🐖', '🐗', '🐽', '🐏', '🐑', '🐐', '🐪', '🐫', '🦒', '🐘', '🦏', '🐭', '🐁', '🐀', '🦘', '🐹', '🦡', '🐰', '🐇', '🐿', '🦔', '🦇', '🐻', '🐨', '🐼', '🐾', '🦃', '🐔', '🦢', '🐓', '🐣', '🐤', '🦚', '🐥', '🐦', '🦜', '🐧', '🕊', '🦅', '🦆', '🦉', '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🐉', '🦕', '🦖', '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🦀', '🦟', '🦐', '🦠', '🦑', '🐌', '🦋', '🐛', '🐜', '🐝', '🐞', '🦗', '🕷', '🕸', '🦂', '🦞', '🌸', '💮', '🏵', '🌹', '🥀', '🌺', '🌻', '🌼', '🌷', '🌱', '🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '☘', '🍀', '🍁', '🍂', '🍃', '🍄', '💅', '👓', '🕶', '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '🛍', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '🧢', '⛑', '📿', '💄', '🌂', '☂', '🎽', '🥽', '🥼', '🥾', '🥿', '🧺', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚌', '🚍', '🚎', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚲', '🛴', '🛵', '🚏', '🛣', '🛤', '⛵', '🛶', '🚤', '🛳', '⛴', '🛥', '🚢', '✈', '🛩', '🛫', '🛬', '🚁', '🚟', '🚠', '🚡', '🛰', '🚀', '🛸', '🌍', '🌎', '🌏', '🌐', '🗺', '🗾', '🏔', '⛰', '🗻', '🏕', '🏖', '🏜', '🏝', '🏞', '🏟', '🏛', '🏗', '🏘', '🏚', '🏠', '🏡', '🏢', '🏣', '🏤', '🏥', '🏦', '🏨', '🏩', '🏪', '🏫', '🏬', '🏭', '🏯', '🏰', '🗼', '🗽', '⛪', '🕌', '🕍', '⛩', '🕋', '⛲', '⛺', '🏙', '🎠', '🎡', '🎢', '🎪', '⛳', '🗿', '💦', '🌋', '🌁', '🌃', '🌄', '🌅', '🌆', '🌇', '🌉', '🌌', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌙', '🌚', '🌛', '🌜', '🌡', '☀', '🌝', '🌞', '🌟', '🌠', '⛅', '⛈', '🌤', '🌥', '🌦', '🌧', '🌨', '🌩', '🌪', '🌫', '🌬', '🌀', '🌈', '⛄', '💧', '🌊', '🎑'];
const DEFAULT_EMOJI = '🔒';
const SALTED_PASSWORD_DEFAULT_LENGTH = 20;
const SALTED_PASSWORD_MIN_LENGTH = 10;
const SALTED_PASSWORD_MAX_LENGTH = 40;
const SESSION_TIME_TO_TERMINATE = 60 * 3 * 1000;

/***/ }),

/***/ "./src/context.ts":
/*!************************!*\
  !*** ./src/context.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rawContext": () => (/* binding */ rawContext),
/* harmony export */   "context": () => (/* binding */ context)
/* harmony export */ });
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");

const rawContext = process.env.CONTEXT;
const context = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_0__.declareAtom)(rawContext);

/***/ }),

/***/ "./src/features/CopySaltedPassword/index.ts":
/*!**************************************************!*\
  !*** ./src/features/CopySaltedPassword/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopySaltedPasswordButton": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_0__.CopySaltedPasswordButton)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/features/CopySaltedPassword/view.tsx");


/***/ }),

/***/ "./src/features/CopySaltedPassword/view.tsx":
/*!**************************************************!*\
  !*** ./src/features/CopySaltedPassword/view.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopySaltedPasswordButton": () => (/* binding */ CopySaltedPasswordButton)
/* harmony export */ });
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Button */ "./src/ui/Button/index.tsx");
/* harmony import */ var _GeneratedPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GeneratedPassword */ "./src/features/GeneratedPassword/index.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");





function CopySaltedPasswordButton() {
  const [saltedPasswordValue] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_GeneratedPassword__WEBPACK_IMPORTED_MODULE_3__.saltedPassword);

  const copyToClipboard = () => {
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__(saltedPasswordValue);
  };

  return saltedPasswordValue !== '' ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "action",
    tabIndex: 1,
    onClick: copyToClipboard,
    children: "Copy Salted Password"
  }) : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "action",
    tabIndex: 1,
    disabled: true,
    children: "Salt the pass!"
  });
}

/***/ }),

/***/ "./src/features/DynamicBackground/index.ts":
/*!*************************************************!*\
  !*** ./src/features/DynamicBackground/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicBackground": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_0__.DynamicBackground)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/features/DynamicBackground/view.tsx");


/***/ }),

/***/ "./src/features/DynamicBackground/view.tsx":
/*!*************************************************!*\
  !*** ./src/features/DynamicBackground/view.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicBackground": () => (/* binding */ DynamicBackground)
/* harmony export */ });
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _ui_layout_Frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/random */ "./src/utils/random.ts");
/* harmony import */ var _utils_syntax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/syntax */ "./src/utils/syntax.ts");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_features_DynamicBackground_view_1SUsNPh_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/features/DynamicBackground/view.1SUsNPh.css */ "./src/features/DynamicBackground/view.1SUsNPh.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");






const dynamicBackgroundStyles = {
  root: {
    position: "c178psvt",
    height: "c1t27ma",
    animationName: "co2habp",
    animationTimingFunction: "c1f7td4n",
    animationDuration: "c1qkddt0",
    animationIterationCount: "c1o9btye",
    transformOrigin: "cqvu3u2"
  },
  emoji: {
    width: "c7gqvt6",
    position: "c178psvt",
    userSelect: "c1jaalid",
    animationName: "cyjiwe4",
    animationTimingFunction: "c1f7td4n",
    animationDuration: "c1qkddt0",
    animationIterationCount: "c1o9btye",
    transformOrigin: "cqvu3u2"
  }
};
const START = 10;
const END = 32;
const OFF_THE_ROOT = 10;
const DynamicBackground = (0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.memo)(function DynamicBackground() {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_2__.Frame, {
    def: "dynamic-background",
    styles: [dynamicBackgroundStyles.root],
    children: (0,_utils_syntax__WEBPACK_IMPORTED_MODULE_5__.times)(40, index => {
      const randomEmoji = (0,_utils_random__WEBPACK_IMPORTED_MODULE_4__.choice)(_constants__WEBPACK_IMPORTED_MODULE_1__.COLORFUL_EMOJIS_ORDERED_LIST);
      const X = Math.floor(Math.random() * (100 + OFF_THE_ROOT * 2) - OFF_THE_ROOT);
      const Y = Math.floor(Math.random() * (100 + OFF_THE_ROOT * 2) - OFF_THE_ROOT);
      const fontSize = START + index * Math.floor((END - START) / index);
      return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_Text__WEBPACK_IMPORTED_MODULE_3__.Text, {
        styles: [dynamicBackgroundStyles.emoji],
        style: {
          fontSize: `${fontSize}px`,
          top: `${Y}%`,
          left: `${X}%`,
          transform: `translateY(-${Y}%) translateX(-${X}%)`
        },
        def: "floating-emoji",
        children: randomEmoji
      }, index);
    })
  });
});



/***/ }),

/***/ "./src/features/EmojiPrompt/context.ts":
/*!*********************************************!*\
  !*** ./src/features/EmojiPrompt/context.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emojiPrompt": () => (/* binding */ emojiPrompt)
/* harmony export */ });
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _utils_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/crypto */ "./src/utils/crypto.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/url */ "./src/utils/url.ts");
/* harmony import */ var _PasswordSalting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PasswordSalting */ "./src/features/PasswordSalting/index.ts");
// An order is very important, replace wisely!






const pickEmoji = value => {
  const index = (0,_utils_crypto__WEBPACK_IMPORTED_MODULE_1__.stringToNumber)(value) % _constants__WEBPACK_IMPORTED_MODULE_0__.COLORFUL_EMOJIS_ORDERED_LIST.length;
  return _constants__WEBPACK_IMPORTED_MODULE_0__.COLORFUL_EMOJIS_ORDERED_LIST[index];
};

const SALT_SHIFT = 'shift';
const emojiPrompt = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_4__.declareAtom)($ => {
  if ($(_PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.masterPassword) === '') {
    return [_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EMOJI, _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EMOJI, _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EMOJI];
  }

  if ($(_PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.domainName) === '') {
    return [pickEmoji($(_PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.masterPassword)), _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EMOJI, _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EMOJI];
  }

  return [pickEmoji($(_PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.masterPassword)), pickEmoji((0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.extractHost)($(_PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.domainName)) + $(_PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.email)), pickEmoji((0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.extractHost)($(_PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.domainName)) + $(_PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.email) + SALT_SHIFT)];
});

/***/ }),

/***/ "./src/features/EmojiPrompt/index.ts":
/*!*******************************************!*\
  !*** ./src/features/EmojiPrompt/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emojiPrompt": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.emojiPrompt),
/* harmony export */   "EmojiPrompt": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_1__.EmojiPrompt)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/features/EmojiPrompt/context.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/features/EmojiPrompt/view.tsx");



/***/ }),

/***/ "./src/features/EmojiPrompt/view.tsx":
/*!*******************************************!*\
  !*** ./src/features/EmojiPrompt/view.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiPrompt": () => (/* binding */ EmojiPrompt)
/* harmony export */ });
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/features/EmojiPrompt/context.ts");
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_features_EmojiPrompt_view_4tgdzHO_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/features/EmojiPrompt/view.4tgdzHO.css */ "./src/features/EmojiPrompt/view.4tgdzHO.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");



const emojiPromptStyles = {
  defaults: {
    letterSpacing: "c1akhk67",
    fontSize: "c1ahnca6"
  }
};
function EmojiPrompt() {
  const [emojiPromptValue] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_1__.emojiPrompt);
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_Text__WEBPACK_IMPORTED_MODULE_2__.Text, {
    styles: [emojiPromptStyles.defaults],
    align: "center",
    def: "emoji-prompt",
    children: emojiPromptValue.join(' ')
  });
}



/***/ }),

/***/ "./src/features/GeneratedPassword/context.ts":
/*!***************************************************!*\
  !*** ./src/features/GeneratedPassword/context.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saltedPassword": () => (/* binding */ saltedPassword),
/* harmony export */   "showSaltedPassword": () => (/* binding */ showSaltedPassword)
/* harmony export */ });
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");
/* harmony import */ var _salting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../salting */ "./src/salting.ts");
/* harmony import */ var _PasswordSalting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PasswordSalting */ "./src/features/PasswordSalting/index.ts");
/* harmony import */ var _SaltedPasswordLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SaltedPasswordLength */ "./src/features/SaltedPasswordLength/index.ts");
/* harmony import */ var _SelectHashFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SelectHashFunction */ "./src/features/SelectHashFunction/index.ts");





const saltedPassword = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_4__.declareAtom)($ => (0,_salting__WEBPACK_IMPORTED_MODULE_0__.saltThePass)($(_SelectHashFunction__WEBPACK_IMPORTED_MODULE_3__.hashFunction), $(_SaltedPasswordLength__WEBPACK_IMPORTED_MODULE_2__.saltedPasswordLength), $(_PasswordSalting__WEBPACK_IMPORTED_MODULE_1__.masterPassword), $(_PasswordSalting__WEBPACK_IMPORTED_MODULE_1__.domainName), $(_PasswordSalting__WEBPACK_IMPORTED_MODULE_1__.email)));
const showSaltedPassword = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_4__.declareAtom)(($, state = false) => {
  $(saltedPassword, () => state = false);
  return state;
}, {
  toggle: (_, state) => !state
});

/***/ }),

/***/ "./src/features/GeneratedPassword/index.ts":
/*!*************************************************!*\
  !*** ./src/features/GeneratedPassword/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saltedPassword": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.saltedPassword),
/* harmony export */   "showSaltedPassword": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.showSaltedPassword),
/* harmony export */   "GeneratedPassword": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_1__.GeneratedPassword)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/features/GeneratedPassword/context.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/features/GeneratedPassword/view.tsx");



/***/ }),

/***/ "./src/features/GeneratedPassword/view.tsx":
/*!*************************************************!*\
  !*** ./src/features/GeneratedPassword/view.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneratedPassword": () => (/* binding */ GeneratedPassword)
/* harmony export */ });
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _ui_Spoiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Spoiler */ "./src/ui/Spoiler/index.tsx");
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./src/features/GeneratedPassword/context.ts");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_features_GeneratedPassword_view_nUvcdJm_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/features/GeneratedPassword/view.nUvcdJm.css */ "./src/features/GeneratedPassword/view.nUvcdJm.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");





const generatedPasswordStyles = {
  spoiler: {
    height: "c1fcl4jy"
  },
  valueWrapper: {
    paddingTop: "crkzqna",
    paddingRight: "c185o72a",
    paddingBottom: "cznxl9p",
    paddingLeft: "c16hph0g"
  }
};
function GeneratedPassword(props) {
  const [saltedPasswordValue] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_4__.saltedPassword);
  const [showSaltedPasswordValue, {
    toggle
  }] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_4__.showSaltedPassword);
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_Spoiler__WEBPACK_IMPORTED_MODULE_2__.Spoiler, {
    summary: "\uD83D\uDE48 Show generated password",
    summaryOff: "\uD83D\uDE4A Hide generated password",
    styles: [generatedPasswordStyles.spoiler],
    open: showSaltedPasswordValue,
    tabIndex: 2,
    onToggle: toggle,
    ...props,
    children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__.Frame, {
      styles: [generatedPasswordStyles.valueWrapper],
      children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_Text__WEBPACK_IMPORTED_MODULE_3__.Text, {
        family: "monospace",
        align: "center",
        children: saltedPasswordValue || '< empty >'
      })
    })
  });
}



/***/ }),

/***/ "./src/features/PasswordSalting/context.ts":
/*!*************************************************!*\
  !*** ./src/features/PasswordSalting/context.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "masterPassword": () => (/* binding */ masterPassword),
/* harmony export */   "domainName": () => (/* binding */ domainName),
/* harmony export */   "email": () => (/* binding */ email)
/* harmony export */ });
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");


const scalarChange = newValue => newValue;

const masterPassword = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_0__.declareAtom)('', {
  change: scalarChange
});
const domainName = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_0__.declareAtom)('', {
  change: scalarChange
});
const email = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_0__.declareAtom)('', {
  change: scalarChange
});

/***/ }),

/***/ "./src/features/PasswordSalting/index.ts":
/*!***********************************************!*\
  !*** ./src/features/PasswordSalting/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domainName": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.domainName),
/* harmony export */   "email": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.email),
/* harmony export */   "masterPassword": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.masterPassword),
/* harmony export */   "PasswordSalting": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_1__.PasswordSalting)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/features/PasswordSalting/context.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/features/PasswordSalting/view.tsx");



/***/ }),

/***/ "./src/features/PasswordSalting/view.tsx":
/*!***********************************************!*\
  !*** ./src/features/PasswordSalting/view.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordSalting": () => (/* binding */ PasswordSalting)
/* harmony export */ });
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _ui_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/TextField */ "./src/ui/TextField/index.tsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/features/PasswordSalting/context.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");






function PasswordSalting() {
  const [masterPasswordValue, {
    change: onChangeMasterPassword
  }] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_3__.masterPassword);
  const [domainNameValue, {
    change: onChangeDomainName
  }] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_3__.domainName);
  const [emailValue, {
    change: onChangeEmail
  }] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_3__.email);
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__.Frame, {
    gap: 6,
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, {
      placeholder: "Super-Secret Master Password",
      type: "password",
      value: masterPasswordValue,
      autoFocus: true,
      tabIndex: 1,
      autoComplete: "current-password",
      onChange: onChangeMasterPassword
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, {
      placeholder: "Domain Name",
      type: "url",
      value: domainNameValue,
      tabIndex: 1,
      onChange: onChangeDomainName
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_TextField__WEBPACK_IMPORTED_MODULE_2__.TextField, {
      placeholder: "E-mail",
      type: "email",
      value: emailValue,
      tabIndex: 1,
      onChange: onChangeEmail
    })]
  });
}

/***/ }),

/***/ "./src/features/Root/index.ts":
/*!************************************!*\
  !*** ./src/features/Root/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Root": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_0__.Root)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/features/Root/view.tsx");


/***/ }),

/***/ "./src/features/Root/view.tsx":
/*!************************************!*\
  !*** ./src/features/Root/view.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Root": () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context */ "./src/context.ts");
/* harmony import */ var _ui_layout_Frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _StoreLocally__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StoreLocally */ "./src/features/StoreLocally/index.ts");
/* harmony import */ var _StylesReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StylesReset */ "./src/features/StylesReset/index.tsx");
/* harmony import */ var _Theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Theming */ "./src/features/Theming/index.ts");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_features_Root_view_36v8_C_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/features/Root/view.-36v8_C.css */ "./src/features/Root/view.-36v8_C.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");







const easelStyles = {
  defaults: {
    minHeight: "c3mmduj",
    justifyContent: "c1o2dv1s",
    alignItems: "cgu89p8",
    backgroundColor: "c1ssusod",
    position: "cdepps4",
    overflowY: "c1xgw3ya",
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
      minHeight: "c1gmbc86"
    }
  }
};
const Easel = (0,_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_2__.overrideFrame)({
  styles: [easelStyles.defaults],
  def: 'easel'
});
function Root({
  Content
}) {
  const store = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_6__.createStore)();
  store.init(_context__WEBPACK_IMPORTED_MODULE_1__.context);
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StylesReset__WEBPACK_IMPORTED_MODULE_4__.ResetStyles, {
    children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Theming__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
      theme: theme,
      children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Easel, {
        children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_reatom_react__WEBPACK_IMPORTED_MODULE_0__.reatomContext.Provider, {
          value: store,
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Content, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StoreLocally__WEBPACK_IMPORTED_MODULE_3__.StoreLocallyConnector, {})]
        })
      })
    })
  });
}




/***/ }),

/***/ "./src/features/SaltedPasswordLength/context.ts":
/*!******************************************************!*\
  !*** ./src/features/SaltedPasswordLength/context.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saltedPasswordLength": () => (/* binding */ saltedPasswordLength)
/* harmony export */ });
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _StoreLocally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StoreLocally */ "./src/features/StoreLocally/index.ts");



const saltedPasswordLength = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_2__.declareAtom)((0,_StoreLocally__WEBPACK_IMPORTED_MODULE_1__.restoreLocally)('saltedPasswordLength') ?? _constants__WEBPACK_IMPORTED_MODULE_0__.SALTED_PASSWORD_DEFAULT_LENGTH, {
  change: value => {
    if (value > _constants__WEBPACK_IMPORTED_MODULE_0__.SALTED_PASSWORD_MAX_LENGTH) {
      return _constants__WEBPACK_IMPORTED_MODULE_0__.SALTED_PASSWORD_MAX_LENGTH;
    }

    if (value < _constants__WEBPACK_IMPORTED_MODULE_0__.SALTED_PASSWORD_MIN_LENGTH) {
      return _constants__WEBPACK_IMPORTED_MODULE_0__.SALTED_PASSWORD_MIN_LENGTH;
    }

    return value;
  }
});

/***/ }),

/***/ "./src/features/SaltedPasswordLength/index.ts":
/*!****************************************************!*\
  !*** ./src/features/SaltedPasswordLength/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saltedPasswordLength": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.saltedPasswordLength),
/* harmony export */   "SaltedPasswordLength": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_1__.SaltedPasswordLength)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/features/SaltedPasswordLength/context.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/features/SaltedPasswordLength/view.tsx");



/***/ }),

/***/ "./src/features/SaltedPasswordLength/view.tsx":
/*!****************************************************!*\
  !*** ./src/features/SaltedPasswordLength/view.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaltedPasswordLength": () => (/* binding */ SaltedPasswordLength)
/* harmony export */ });
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _ui_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Label */ "./src/ui/Label/index.tsx");
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Select */ "./src/ui/Select/index.ts");
/* harmony import */ var _utils_syntax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/syntax */ "./src/utils/syntax.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./src/features/SaltedPasswordLength/context.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");







function SaltedPasswordLength() {
  const [saltedPasswordLengthValue, {
    change
  }] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_5__.saltedPasswordLength);
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_Label__WEBPACK_IMPORTED_MODULE_2__.Label, {
    label: "Length:",
    children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_Select__WEBPACK_IMPORTED_MODULE_3__.Select, {
      value: saltedPasswordLengthValue,
      tabIndex: 3,
      onChange: change,
      children: (0,_utils_syntax__WEBPACK_IMPORTED_MODULE_4__.range)(_constants__WEBPACK_IMPORTED_MODULE_1__.SALTED_PASSWORD_MIN_LENGTH, _constants__WEBPACK_IMPORTED_MODULE_1__.SALTED_PASSWORD_MAX_LENGTH + 1, 5).map(length => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_Select__WEBPACK_IMPORTED_MODULE_3__.Option, {
        value: length,
        children: length
      }, length))
    })
  });
}

/***/ }),

/***/ "./src/features/SelectHashFunction/context.ts":
/*!****************************************************!*\
  !*** ./src/features/SelectHashFunction/context.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hashFunctionName": () => (/* binding */ hashFunctionName),
/* harmony export */   "hashFunction": () => (/* binding */ hashFunction)
/* harmony export */ });
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");
/* harmony import */ var _salting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../salting */ "./src/salting.ts");
/* harmony import */ var _StoreLocally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StoreLocally */ "./src/features/StoreLocally/index.ts");



const hashFunctionName = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_2__.declareAtom)((0,_StoreLocally__WEBPACK_IMPORTED_MODULE_1__.restoreLocally)('hashFunctionName') ?? _salting__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_HASH_FUNCTION_NAME, {
  change: x => x
});
const hashFunction = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_2__.declareAtom)($ => _salting__WEBPACK_IMPORTED_MODULE_0__.HASH_FUNCTIONS[$(hashFunctionName)]);

/***/ }),

/***/ "./src/features/SelectHashFunction/index.ts":
/*!**************************************************!*\
  !*** ./src/features/SelectHashFunction/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hashFunction": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.hashFunction),
/* harmony export */   "hashFunctionName": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.hashFunctionName),
/* harmony export */   "SelectHashFunction": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_1__.SelectHashFunction)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/features/SelectHashFunction/context.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/features/SelectHashFunction/view.tsx");



/***/ }),

/***/ "./src/features/SelectHashFunction/view.tsx":
/*!**************************************************!*\
  !*** ./src/features/SelectHashFunction/view.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectHashFunction": () => (/* binding */ SelectHashFunction)
/* harmony export */ });
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _salting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../salting */ "./src/salting.ts");
/* harmony import */ var _ui_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Label */ "./src/ui/Label/index.tsx");
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Select */ "./src/ui/Select/index.ts");
/* harmony import */ var _utils_syntax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/syntax */ "./src/utils/syntax.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./src/features/SelectHashFunction/context.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");







function SelectHashFunction() {
  const [hashFunctionNameValue, {
    change: onSelect
  }] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_5__.hashFunctionName);
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_Label__WEBPACK_IMPORTED_MODULE_2__.Label, {
    label: "Hash function:",
    children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_Select__WEBPACK_IMPORTED_MODULE_3__.Select, {
      value: hashFunctionNameValue,
      tabIndex: 3,
      onChange: onSelect,
      children: (0,_utils_syntax__WEBPACK_IMPORTED_MODULE_4__.keysOf)(_salting__WEBPACK_IMPORTED_MODULE_1__.HASH_FUNCTIONS).map(hashFunctionName => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_Select__WEBPACK_IMPORTED_MODULE_3__.Option, {
        value: hashFunctionName,
        children: hashFunctionName
      }, hashFunctionName))
    })
  });
}

/***/ }),

/***/ "./src/features/SessionTerminator/context.ts":
/*!***************************************************!*\
  !*** ./src/features/SessionTerminator/context.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "terminationTimeLeft": () => (/* binding */ terminationTimeLeft)
/* harmony export */ });
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _utils_high_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/high-order */ "./src/utils/high-order.ts");
/* harmony import */ var _GeneratedPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GeneratedPassword */ "./src/features/GeneratedPassword/index.ts");
/* harmony import */ var _PasswordSalting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PasswordSalting */ "./src/features/PasswordSalting/index.ts");





const terminationTimeLeft = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_4__.declareAtom)(($, state = 0) => {
  $(_GeneratedPassword__WEBPACK_IMPORTED_MODULE_2__.saltedPassword, currentSaltedPassword => (store, ctx) => {
    if (currentSaltedPassword === '') {
      store.dispatch(terminationTimeLeft.reset());
    } else {
      ctx.terminate(store);
      store.dispatch(terminationTimeLeft.fill());
    }

    if (ctx.interval != null) {
      clearInterval(ctx.interval);
      ctx.interval = null;
    }

    ctx.interval = setInterval(() => {
      store.dispatch(terminationTimeLeft.dec());
    }, 1000);
  });
  return state;
}, {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  reset: _ => 0,
  dec: (_, current) => Math.max(current - 1000, 0),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fill: _ => _constants__WEBPACK_IMPORTED_MODULE_0__.SESSION_TIME_TO_TERMINATE
}, {
  createCtx: () => ({
    interval: null,
    terminate: (0,_utils_high_order__WEBPACK_IMPORTED_MODULE_1__.debounce)(store => {
      return store.dispatch([_PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.masterPassword.change(''), _PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.domainName.change(''), _PasswordSalting__WEBPACK_IMPORTED_MODULE_3__.email.change('')]);
    }, _constants__WEBPACK_IMPORTED_MODULE_0__.SESSION_TIME_TO_TERMINATE)
  })
});

/***/ }),

/***/ "./src/features/SessionTerminator/index.ts":
/*!*************************************************!*\
  !*** ./src/features/SessionTerminator/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "terminationTimeLeft": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.terminationTimeLeft),
/* harmony export */   "SessionTerminator": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_1__.SessionTerminator)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/features/SessionTerminator/context.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/features/SessionTerminator/view.tsx");



/***/ }),

/***/ "./src/features/SessionTerminator/view.tsx":
/*!*************************************************!*\
  !*** ./src/features/SessionTerminator/view.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionTerminator": () => (/* binding */ SessionTerminator)
/* harmony export */ });
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./src/features/SessionTerminator/context.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");




const SECONDS_IN_MINUTE = 60;

function formatTime(time) {
  const timeInSeconds = Math.floor(time / 1000);
  const minutes = String(Math.floor(timeInSeconds / SECONDS_IN_MINUTE));
  const seconds = String(timeInSeconds % SECONDS_IN_MINUTE).padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function SessionTerminator() {
  const [terminationTimeLeftValue] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_2__.terminationTimeLeft);
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_Text__WEBPACK_IMPORTED_MODULE_1__.Text, {
    align: "center",
    children: terminationTimeLeftValue > 0 ? `The session will be terminated in ${formatTime(terminationTimeLeftValue)}` : 'The session has been terminated or simply not started'
  });
}

/***/ }),

/***/ "./src/features/StoreLocally/common.ts":
/*!*********************************************!*\
  !*** ./src/features/StoreLocally/common.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateFieldKey": () => (/* binding */ generateFieldKey)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context */ "./src/context.ts");

function generateFieldKey(id) {
  return `${_context__WEBPACK_IMPORTED_MODULE_0__.rawContext.appVersion}_${id}`;
}

/***/ }),

/***/ "./src/features/StoreLocally/context.ts":
/*!**********************************************!*\
  !*** ./src/features/StoreLocally/context.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeLocallyObserver": () => (/* binding */ storeLocallyObserver)
/* harmony export */ });
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");
/* harmony import */ var _SaltedPasswordLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SaltedPasswordLength */ "./src/features/SaltedPasswordLength/index.ts");
/* harmony import */ var _SelectHashFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SelectHashFunction */ "./src/features/SelectHashFunction/index.ts");
/* harmony import */ var _storeLocally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storeLocally */ "./src/features/StoreLocally/storeLocally.ts");




const storeLocallyObserver = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_3__.declareAtom)($ => {
  $(_SelectHashFunction__WEBPACK_IMPORTED_MODULE_1__.hashFunctionName, value => {
    console.log('test', value);
    (0,_storeLocally__WEBPACK_IMPORTED_MODULE_2__.storeLocally)('hashFunctionName', value);
  });
  $(_SaltedPasswordLength__WEBPACK_IMPORTED_MODULE_0__.saltedPasswordLength, value => (0,_storeLocally__WEBPACK_IMPORTED_MODULE_2__.storeLocally)('saltedPasswordLength', value));
});

/***/ }),

/***/ "./src/features/StoreLocally/index.ts":
/*!********************************************!*\
  !*** ./src/features/StoreLocally/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "restoreLocally": () => (/* reexport safe */ _restoreLocally__WEBPACK_IMPORTED_MODULE_0__.restoreLocally),
/* harmony export */   "storeLocally": () => (/* reexport safe */ _storeLocally__WEBPACK_IMPORTED_MODULE_1__.storeLocally),
/* harmony export */   "storeLocallyObserver": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_2__.storeLocallyObserver),
/* harmony export */   "StoreLocallyConnector": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_3__.StoreLocallyConnector)
/* harmony export */ });
/* harmony import */ var _restoreLocally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restoreLocally */ "./src/features/StoreLocally/restoreLocally.ts");
/* harmony import */ var _storeLocally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeLocally */ "./src/features/StoreLocally/storeLocally.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./src/features/StoreLocally/context.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./src/features/StoreLocally/view.tsx");





/***/ }),

/***/ "./src/features/StoreLocally/restoreLocally.ts":
/*!*****************************************************!*\
  !*** ./src/features/StoreLocally/restoreLocally.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "restoreLocally": () => (/* binding */ restoreLocally)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/features/StoreLocally/common.ts");

function restoreLocally(id) {
  const fieldId = (0,_common__WEBPACK_IMPORTED_MODULE_0__.generateFieldKey)(id);
  const storedValue = localStorage.getItem(fieldId);

  if (storedValue === undefined) {
    return undefined;
  }

  try {
    return JSON.parse(storedValue);
  } catch (e) {
    localStorage.removeItem(fieldId);
    throw new Error(`Unable to parse local stored value with a key: ${fieldId}`);
  }
}

/***/ }),

/***/ "./src/features/StoreLocally/storeLocally.ts":
/*!***************************************************!*\
  !*** ./src/features/StoreLocally/storeLocally.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeLocally": () => (/* binding */ storeLocally)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/features/StoreLocally/common.ts");

function storeLocally(id, value) {
  const fieldId = (0,_common__WEBPACK_IMPORTED_MODULE_0__.generateFieldKey)(id);
  localStorage.setItem(fieldId, JSON.stringify(value));
}

/***/ }),

/***/ "./src/features/StoreLocally/view.tsx":
/*!********************************************!*\
  !*** ./src/features/StoreLocally/view.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreLocallyConnector": () => (/* binding */ StoreLocallyConnector)
/* harmony export */ });
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/features/StoreLocally/context.ts");


function StoreLocallyConnector() {
  (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_1__.storeLocallyObserver);
  return null;
}

/***/ }),

/***/ "./src/features/StylesReset/index.tsx":
/*!********************************************!*\
  !*** ./src/features/StylesReset/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetStyles": () => (/* binding */ ResetStyles)
/* harmony export */ });
/* harmony import */ var modern_css_reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modern-css-reset */ "./node_modules/modern-css-reset/dist/reset.min.css");
/* harmony import */ var _ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/layout/Frame */ "./src/ui/layout/Frame.tsx");


const defaultStyles = {
  font: {
    fontFamily: 'Inter, sans-serif'
  }
};
const ResetStyles = (0,_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__.overrideFrame)({
  def: 'reset-styles',
  styles: [defaultStyles.font]
});

/***/ }),

/***/ "./src/features/Theming/index.ts":
/*!***************************************!*\
  !*** ./src/features/Theming/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THEMES": () => (/* reexport safe */ _palette__WEBPACK_IMPORTED_MODULE_0__.THEMES),
/* harmony export */   "themeStyles": () => (/* reexport safe */ _palette__WEBPACK_IMPORTED_MODULE_0__.themeStyles),
/* harmony export */   "ThemeProvider": () => (/* reexport safe */ _themeProvider__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider)
/* harmony export */ });
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "./src/features/Theming/palette.ts");
/* harmony import */ var _themeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themeProvider */ "./src/features/Theming/themeProvider.tsx");



/***/ }),

/***/ "./src/features/Theming/palette.ts":
/*!*****************************************!*\
  !*** ./src/features/Theming/palette.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THEMES": () => (/* binding */ THEMES),
/* harmony export */   "themeStyles": () => (/* binding */ themeStyles)
/* harmony export */ });
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_features_Theming_palette_YCZu0hk_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/features/Theming/palette.YCZu0hk.css */ "./src/features/Theming/palette.YCZu0hk.css");
const THEMES = {
  light: 'light',
  dark: 'dark',
  black: 'black'
};
const { ...themeStyles
} = {
  light: {
    "--base-layout-bg": "c1yqfdp4",
    "--button-action-bg": "c1w6hm2u",
    "--button-action-color": "c104cog2",
    "--button-action-disabled-color": "ck56boy",
    "--button-action-disabled-dash": "c1w9wbah",
    "--button-action-shadow": "c12ght5r",
    "--button-action-shadow-active": "c15oxs93",
    "--button-action-shadow-active-inset": "c1vaxnuf",
    "--button-action-shadow-hover": "c17utcq8",
    "--button-pseudo-color": "c1dh2qui",
    "--button-select-bg": "c1t0fv05",
    "--label-color": "c1xsdkzc",
    "--link-mark-bg": "c1mra2yn",
    "--link-mark-color": "c1k6qlwt",
    "--root-bg": "cjh2k8z",
    "--select-bg": "cyukpw6",
    "--select-border": "c1lyq1f7",
    "--select-color": "c10ca97y",
    "--select-shadow": "cfrnx44",
    "--spoiler-open-bg": "c1rwnatm",
    "--text-color": "c1vjh065",
    "--text-field-bg": "c1mpyyag",
    "--text-field-color": "c1rh7lek",
    "--text-field-placeholder-color": "cyx8v1f",
    "--text-field-shadow": "cnu73g7",
    "--text-field-shadow-focus": "c16pxumf"
  },
  dark: {
    "--base-layout-bg": "cpcl69a",
    "--button-action-bg": "cjde7yo",
    "--button-action-color": "c129t654",
    "--button-action-disabled-color": "caiqyw3",
    "--button-action-disabled-dash": "c1g7xkzf",
    "--button-action-shadow": "c12ght5r",
    "--button-action-shadow-active": "c15oxs93",
    "--button-action-shadow-active-inset": "c1yju18m",
    "--button-action-shadow-hover": "c17utcq8",
    "--button-pseudo-color": "cbzsg3z",
    "--button-select-bg": "c1hdkfw1",
    "--label-color": "cysgswt",
    "--link-mark-bg": "cwu2mkh",
    "--link-mark-color": "chhbib3",
    "--root-bg": "c1f4mxeq",
    "--select-bg": "c59p3rb",
    "--select-border": "c1lyq1f7",
    "--select-color": "c1a84dk",
    "--select-shadow": "cfrnx44",
    "--spoiler-open-bg": "c1rwnatm",
    "--text-color": "c52ksuu",
    "--text-field-bg": "cdjg5ep",
    "--text-field-color": "c1rh7lek",
    "--text-field-placeholder-color": "cyx8v1f",
    "--text-field-shadow": "cnu73g7",
    "--text-field-shadow-focus": "c16pxumf"
  },
  black: {
    "--base-layout-bg": "cpcl69a",
    "--button-action-bg": "c1w6hm2u",
    "--button-action-color": "c104cog2",
    "--button-action-disabled-color": "caiqyw3",
    "--button-action-disabled-dash": "c1g7xkzf",
    "--button-action-shadow": "c12ght5r",
    "--button-action-shadow-active": "c15oxs93",
    "--button-action-shadow-active-inset": "c1kngct6",
    "--button-action-shadow-hover": "c17utcq8",
    "--button-pseudo-color": "cbzsg3z",
    "--button-select-bg": "c62c3xx",
    "--label-color": "ctius8m",
    "--link-mark-bg": "cwu2mkh",
    "--link-mark-color": "c1cerh0b",
    "--root-bg": "c1bm8qbc",
    "--select-bg": "c1nbzaxv",
    "--select-border": "c1lyq1f7",
    "--select-color": "c1c6xkxh",
    "--select-shadow": "cfrnx44",
    "--spoiler-open-bg": "cs87lf1",
    "--text-color": "c52ksuu",
    "--text-field-bg": "c16fx5mp",
    "--text-field-color": "c1cvd62",
    "--text-field-placeholder-color": "c4qawab",
    "--text-field-shadow": "cnu73g7",
    "--text-field-shadow-focus": "c16pxumf"
  }
};


/***/ }),

/***/ "./src/features/Theming/themeProvider.tsx":
/*!************************************************!*\
  !*** ./src/features/Theming/themeProvider.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeProvider": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var _ui_layout_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "./src/features/Theming/palette.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");



function ThemeProvider({
  theme,
  children
}) {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_0__.Frame, {
    styles: [_palette__WEBPACK_IMPORTED_MODULE_1__.themeStyles[theme]],
    def: "theme-provider",
    children: children
  });
}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/context.ts");
/* harmony import */ var _features_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/Root */ "./src/features/Root/index.ts");
/* harmony import */ var _pages_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/IndexPage */ "./src/pages/IndexPage/index.tsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");






function GenericReactPage() {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_features_Root__WEBPACK_IMPORTED_MODULE_2__.Root, {
    Content: _pages_IndexPage__WEBPACK_IMPORTED_MODULE_3__.IndexPage
  });
}

const rootElement = document.getElementById(_context__WEBPACK_IMPORTED_MODULE_1__.rawContext.rootContainerId);
(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GenericReactPage, {}), rootElement);

/***/ }),

/***/ "./src/pages/IndexPage/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/IndexPage/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPage": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context */ "./src/context.ts");
/* harmony import */ var _features_CopySaltedPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/CopySaltedPassword */ "./src/features/CopySaltedPassword/index.ts");
/* harmony import */ var _features_DynamicBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/DynamicBackground */ "./src/features/DynamicBackground/index.ts");
/* harmony import */ var _features_EmojiPrompt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/EmojiPrompt */ "./src/features/EmojiPrompt/index.ts");
/* harmony import */ var _features_GeneratedPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/GeneratedPassword */ "./src/features/GeneratedPassword/index.ts");
/* harmony import */ var _features_PasswordSalting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/PasswordSalting */ "./src/features/PasswordSalting/index.ts");
/* harmony import */ var _features_SaltedPasswordLength__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/SaltedPasswordLength */ "./src/features/SaltedPasswordLength/index.ts");
/* harmony import */ var _features_SelectHashFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../features/SelectHashFunction */ "./src/features/SelectHashFunction/index.ts");
/* harmony import */ var _features_SessionTerminator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../features/SessionTerminator */ "./src/features/SessionTerminator/index.ts");
/* harmony import */ var _ui_layout_Frame__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/layout/Spacing */ "./src/ui/layout/Spacing.tsx");
/* harmony import */ var _ui_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/Link */ "./src/ui/Link/index.tsx");
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_pages_IndexPage_index_1Gi99HK_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/pages/IndexPage/index.1Gi99HK.css */ "./src/pages/IndexPage/index.1Gi99HK.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");














const indexPageStyles = {
  baseLayout: {
    backgroundColor: "ccm6n7r",
    maxWidth: "c1bb4p52",
    borderTopLeftRadius: "c1y81ouv",
    borderTopRightRadius: "c4lvuwc",
    borderBottomRightRadius: "cu19lyv",
    borderBottomLeftRadius: "c1efb6ib",
    paddingTop: "c1i1v026",
    paddingRight: "cc7rm93",
    paddingBottom: "cmboo03",
    paddingLeft: "c1wzc8g6",
    backdropFilter: "c19eewo0",
    "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
      minHeight: "c805h3e",
      maxWidth: "c11d1gki"
    }
  }
};
const BaseLayout = (0,_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_10__.overrideFrame)({
  styles: [indexPageStyles.baseLayout],
  as: 'main',
  def: 'base-layout'
});
function IndexPage() {
  const [{
    repoLink,
    title
  }] = (0,_reatom_react__WEBPACK_IMPORTED_MODULE_0__.useAtom)(_context__WEBPACK_IMPORTED_MODULE_1__.context);
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_features_DynamicBackground__WEBPACK_IMPORTED_MODULE_3__.DynamicBackground, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(BaseLayout, {
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_Text__WEBPACK_IMPORTED_MODULE_13__.Text, {
        size: "xl",
        weight: "semiBold",
        children: title
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_Text__WEBPACK_IMPORTED_MODULE_13__.Text, {
        children: "...is secure and convenient!"
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_11__.VerticalSpacing, {
        size: 1
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_Link__WEBPACK_IMPORTED_MODULE_12__.Link, {
        href: repoLink,
        target: "_blank",
        tabIndex: 4,
        children: "Source code: How it works and what to do if an app become unavailable?"
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_11__.VerticalSpacing, {
        size: 10
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_features_PasswordSalting__WEBPACK_IMPORTED_MODULE_6__.PasswordSalting, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_11__.VerticalSpacing, {
        size: 6
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_features_EmojiPrompt__WEBPACK_IMPORTED_MODULE_4__.EmojiPrompt, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_11__.VerticalSpacing, {
        size: 6
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_10__.Frame, {
        direction: "row",
        gap: 6,
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_features_SelectHashFunction__WEBPACK_IMPORTED_MODULE_8__.SelectHashFunction, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_features_SaltedPasswordLength__WEBPACK_IMPORTED_MODULE_7__.SaltedPasswordLength, {})]
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_11__.VerticalSpacing, {
        size: 6
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_features_CopySaltedPassword__WEBPACK_IMPORTED_MODULE_2__.CopySaltedPasswordButton, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_11__.VerticalSpacing, {
        size: 2
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_features_GeneratedPassword__WEBPACK_IMPORTED_MODULE_5__.GeneratedPassword, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_11__.VerticalSpacing, {
        size: 4
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_features_SessionTerminator__WEBPACK_IMPORTED_MODULE_9__.SessionTerminator, {})]
    })]
  });
}





/***/ }),

/***/ "./src/salting.ts":
/*!************************!*\
  !*** ./src/salting.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HASH_FUNCTIONS": () => (/* binding */ HASH_FUNCTIONS),
/* harmony export */   "DEFAULT_HASH_FUNCTION_NAME": () => (/* binding */ DEFAULT_HASH_FUNCTION_NAME),
/* harmony export */   "saltThePass": () => (/* binding */ saltThePass)
/* harmony export */ });
/* harmony import */ var _utils_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/crypto */ "./src/utils/crypto.ts");
/* harmony import */ var _utils_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/syntax */ "./src/utils/syntax.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/url */ "./src/utils/url.ts");



const HASH_FUNCTIONS = {
  md5: _utils_crypto__WEBPACK_IMPORTED_MODULE_0__.md5,
  sha3: _utils_crypto__WEBPACK_IMPORTED_MODULE_0__.sha3,
  sha256: _utils_crypto__WEBPACK_IMPORTED_MODULE_0__.sha256,
  sha512: _utils_crypto__WEBPACK_IMPORTED_MODULE_0__.sha512,
  ripemd160: _utils_crypto__WEBPACK_IMPORTED_MODULE_0__.ripemd160
};
const DEFAULT_HASH_FUNCTION_NAME = 'sha3';
function saltThePass(hashFunction, length, masterPassword, domainName, email) {
  if (masterPassword === '' && domainName === '' && email === '') {
    return '';
  }

  return (0,_utils_syntax__WEBPACK_IMPORTED_MODULE_1__.trim)(length, (0,_utils_crypto__WEBPACK_IMPORTED_MODULE_0__.escapeBase64)((0,_utils_crypto__WEBPACK_IMPORTED_MODULE_0__.base64)(hashFunction(masterPassword + (0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.extractHost)(domainName) + email))));
}

/***/ }),

/***/ "./src/ui/Button/index.tsx":
/*!*********************************!*\
  !*** ./src/ui/Button/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var style9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style9 */ "./node_modules/style9/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_Button_index_Ul6h4aK_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ui/Button/index.Ul6h4aK.css */ "./src/ui/Button/index.Ul6h4aK.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


const buttonStyles = {
  default: {
    borderTopStyle: "cgf4u02",
    borderRightStyle: "c1ik97xz",
    borderBottomStyle: "c1nxnebz",
    borderLeftStyle: "chv0sws",
    cursor: "cid9k2x",
    width: "c7gqvt6",
    alignItems: "cgu89p8",
    userSelect: "c1jaalid"
  },
  textDefault: {
    color: "c16z78hg"
  }
};
const variantStyles = {
  select: {
    backgroundColor: "c1e4lpbp",
    borderTopWidth: "c1n2yw2s",
    borderRightWidth: "c13bsgjz",
    borderBottomWidth: "c1un73ud",
    borderLeftWidth: "c1yx9wbm",
    borderTopStyle: "c1g19bjc",
    borderRightStyle: "c1qxi10x",
    borderBottomStyle: "c4c5n1i",
    borderLeftStyle: "cqw3m2w",
    borderTopColor: "c17ibrgh",
    borderRightColor: "ctzbmqg",
    borderBottomColor: "c1yvw8ly",
    borderLeftColor: "c82xsuq",
    boxShadow: "c17xbsax",
    borderTopLeftRadius: "cxg7tpg",
    borderTopRightRadius: "c1av9zd3",
    borderBottomRightRadius: "ctpz81y",
    borderBottomLeftRadius: "c1f5vec2"
  },
  action: {
    borderTopLeftRadius: "c1y81ouv",
    borderTopRightRadius: "c4lvuwc",
    borderBottomRightRadius: "cu19lyv",
    borderBottomLeftRadius: "c1efb6ib",
    ":not(:disabled)": {
      backgroundColor: "croi54",
      color: "c14r0h7v",
      boxShadow: "cbyhiqx",
      borderTopWidth: "c1bbx3vl",
      borderRightWidth: "c11awo6d",
      borderBottomWidth: "c7rieh2",
      borderLeftWidth: "cq0vtj5",
      borderTopStyle: "cwc3akz",
      borderRightStyle: "c11bsyr1",
      borderBottomStyle: "c1oay5hm",
      borderLeftStyle: "cvg217a",
      borderTopColor: "c695u59",
      borderRightColor: "c1r5oawy",
      borderBottomColor: "c1egns21",
      borderLeftColor: "c1q19f9z",
      transition: "cnqk2cs"
    },
    ":hover:not(:disabled)": {
      boxShadow: "c1rwqfb",
      color: "cnc9t3n"
    },
    ":active:not(:disabled)": {
      boxShadow: "c3rw2eo"
    },
    ":disabled": {
      backgroundColor: "c1by4zom",
      color: "cesc6vd",
      borderTopWidth: "c1dv3nc3",
      borderRightWidth: "cidgj5y",
      borderBottomWidth: "c152wog6",
      borderLeftWidth: "c1y27670",
      borderTopStyle: "cjphuv8",
      borderRightStyle: "cp6vdjz",
      borderBottomStyle: "c9mx0li",
      borderLeftStyle: "crl73q5",
      borderTopColor: "c1elalra",
      borderRightColor: "cy0ovex",
      borderBottomColor: "cdz3h08",
      borderLeftColor: "c1ljvyk3",
      cursor: "c2o1ri0"
    }
  },
  pseudo: {
    color: "c2xqbgc"
  }
};
const sizeStyles = {
  s: {
    paddingTop: "crkzqna",
    paddingRight: "ch0vyea",
    paddingBottom: "cznxl9p",
    paddingLeft: "c9szzlm",
    fontSize: "c1l2wgog"
  },
  m: {
    paddingTop: "c16l8df4",
    paddingRight: "c1a48zge",
    paddingBottom: "cn5lin1",
    paddingLeft: "c1b2c5ft"
  },
  l: {
    paddingTop: "c1kw0ml5",
    paddingRight: "c1rm9vtp",
    paddingBottom: "cbzutnq",
    paddingLeft: "c1i8uzvb"
  }
};
function Button({
  children: text,
  variant,
  size = 'm',
  styles,
  ...props
}) {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    className: (0,style9__WEBPACK_IMPORTED_MODULE_0__.default)(buttonStyles.default, variantStyles[variant], sizeStyles[size], ...(styles || [])),
    ...props,
    children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_1__.Text, {
      size: size,
      styles: [buttonStyles.textDefault],
      children: text
    })
  });
}



/***/ }),

/***/ "./src/ui/Label/index.tsx":
/*!********************************!*\
  !*** ./src/ui/Label/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var _layout_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_Label_index_1Wu_4lf_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ui/Label/index.1Wu-4lf.css */ "./src/ui/Label/index.1Wu-4lf.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


const labelStyle = {
  wrapper: {
    width: "c7gqvt6"
  },
  label: {
    color: "c1n8ie64"
  },
  content: {
    display: "c1ilctzr"
  }
};
function Label({
  label,
  children
}) {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_layout_Frame__WEBPACK_IMPORTED_MODULE_0__.Frame, {
    as: "label",
    gap: 2,
    styles: [labelStyle.wrapper],
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_1__.Text, {
      styles: [labelStyle.label],
      children: label
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_layout_Frame__WEBPACK_IMPORTED_MODULE_0__.Frame, {
      styles: [labelStyle.content],
      children: children
    })]
  });
}




/***/ }),

/***/ "./src/ui/Link/index.tsx":
/*!*******************************!*\
  !*** ./src/ui/Link/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var _layout_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_Link_index_2SxzEtD_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ui/Link/index.2SxzEtD.css */ "./src/ui/Link/index.2SxzEtD.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


const linkStyle = {
  default: {
    fontStyle: "c53teje",
    textDecorationLine: "c1wdecrm",
    ":hover": {
      textDecorationLine: "c1e8zjga"
    }
  },
  mark: {
    display: "co047mg",
    color: "c1scevik",
    backgroundColor: "cyv63g7"
  }
};
function Link({
  styles = [],
  children,
  ...props
}) {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_1__.Text, {
    as: "a",
    ...props,
    styles: [linkStyle.default, ...styles],
    children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_layout_Frame__WEBPACK_IMPORTED_MODULE_0__.Frame, {
      styles: [linkStyle.mark],
      as: "mark",
      children: children
    })
  });
}



/***/ }),

/***/ "./src/ui/Select/Option.tsx":
/*!**********************************!*\
  !*** ./src/ui/Select/Option.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Option": () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

function Option({ ...props
}) {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { ...props
  });
}

/***/ }),

/***/ "./src/ui/Select/Select.tsx":
/*!**********************************!*\
  !*** ./src/ui/Select/Select.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var style9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style9 */ "./node_modules/style9/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_Select_Select_2liXHyG_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ui/Select/Select.2liXHyG.css */ "./src/ui/Select/Select.2liXHyG.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


const selectStyles = {
  reset: {
    appearance: "cinxz92",
    backgroundColor: "c1agz083"
  },
  appearance: {
    position: "cdepps4",
    borderTopWidth: "c1n2yw2s",
    borderRightWidth: "c13bsgjz",
    borderBottomWidth: "c1un73ud",
    borderLeftWidth: "c1yx9wbm",
    borderTopStyle: "c1g19bjc",
    borderRightStyle: "c1qxi10x",
    borderBottomStyle: "c4c5n1i",
    borderLeftStyle: "cqw3m2w",
    borderTopColor: "c1ttg9kg",
    borderRightColor: "c1slz5ny",
    borderBottomColor: "c13hlija",
    borderLeftColor: "c12uztem",
    boxShadow: "ckm595p",
    paddingTop: "crkzqna",
    paddingRight: "c1rm9vtp",
    paddingBottom: "cznxl9p",
    paddingLeft: "c1i8uzvb",
    borderTopLeftRadius: "cxg7tpg",
    borderTopRightRadius: "c1av9zd3",
    borderBottomRightRadius: "ctpz81y",
    borderBottomLeftRadius: "c1f5vec2",
    cursor: "cid9k2x",
    backgroundColor: "cu5337b",
    color: "c13lm2px"
  }
};
function Select({
  onChange,
  ...props
}) {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
    className: (0,style9__WEBPACK_IMPORTED_MODULE_0__.default)(selectStyles.reset, selectStyles.appearance, _Text__WEBPACK_IMPORTED_MODULE_1__.familyStyles.default, _Text__WEBPACK_IMPORTED_MODULE_1__.sizeStyles.m),
    onChange: e => onChange(e.target.value),
    ...props
  });
}



/***/ }),

/***/ "./src/ui/Select/index.ts":
/*!********************************!*\
  !*** ./src/ui/Select/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Option": () => (/* reexport safe */ _Option__WEBPACK_IMPORTED_MODULE_0__.Option),
/* harmony export */   "Select": () => (/* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_1__.Select)
/* harmony export */ });
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Option */ "./src/ui/Select/Option.tsx");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select */ "./src/ui/Select/Select.tsx");



/***/ }),

/***/ "./src/ui/Spoiler/index.tsx":
/*!**********************************!*\
  !*** ./src/ui/Spoiler/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spoiler": () => (/* binding */ Spoiler)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button */ "./src/ui/Button/index.tsx");
/* harmony import */ var _layout_Frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_Spoiler_index_T3g3w8y_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ui/Spoiler/index.T3g3w8y.css */ "./src/ui/Spoiler/index.T3g3w8y.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


const spoilerStyles = {
  details: {
    borderTopLeftRadius: "c1y81ouv",
    borderTopRightRadius: "c4lvuwc",
    borderBottomRightRadius: "cu19lyv",
    borderBottomLeftRadius: "c1efb6ib",
    transition: "c1p7p8i3"
  },
  detailsOpen: {
    backgroundColor: "ce4paix"
  },
  summary: {
    borderTopLeftRadius: "c1y81ouv",
    borderTopRightRadius: "c4lvuwc",
    borderBottomRightRadius: "cu19lyv",
    borderBottomLeftRadius: "c1efb6ib",
    backgroundColor: "c1agz083",
    cursor: "cid9k2x",
    paddingTop: "c1u7i1ga",
    paddingRight: "c1rm9vtp",
    paddingBottom: "c3ttefx",
    paddingLeft: "c1i8uzvb",
    lineHeight: "c1y5qzpl",
    ":hover": {
      backgroundColor: "c18j2do"
    },
    transition: "c1p7p8i3"
  },
  summaryOpen: {
    ":hover": {
      backgroundColor: "cpgp6tk"
    }
  }
};
function Spoiler({
  summary,
  summaryOff,
  children,
  styles = [],
  open,
  tabIndex,
  onToggle,
  ...props
}) {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_layout_Frame__WEBPACK_IMPORTED_MODULE_1__.Frame, {
    styles: [spoilerStyles.details, open && spoilerStyles.detailsOpen, ...styles],
    ...props,
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
      variant: "pseudo",
      styles: [spoilerStyles.summary, open && spoilerStyles.summaryOpen],
      size: "m",
      tabIndex: tabIndex,
      onClick: onToggle,
      children: open && summaryOff || summary
    }), open && children]
  });
}




/***/ }),

/***/ "./src/ui/Text/index.tsx":
/*!*******************************!*\
  !*** ./src/ui/Text/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "familyStyles": () => (/* binding */ familyStyles),
/* harmony export */   "sizeStyles": () => (/* binding */ sizeStyles),
/* harmony export */   "weightStyles": () => (/* binding */ weightStyles),
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var style9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style9 */ "./node_modules/style9/index.js");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_Text_index_3Ajl1_a_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ui/Text/index.3Ajl1_a.css */ "./src/ui/Text/index.3Ajl1_a.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

const textStyles = {
  default: {
    color: "cps0bng"
  }
};
const { ...familyStyles
} = {
  default: {
    fontFamily: "c1yft74o"
  },
  monospace: {
    fontFamily: "c19kxmyr"
  }
};
const { ...sizeStyles
} = {
  xs: {
    fontSize: "cn3nhar"
  },
  s: {
    fontSize: "c1l2wgog"
  },
  m: {
    fontSize: "cvodqnz"
  },
  l: {
    fontSize: "ccjxhdf"
  },
  xl: {
    fontSize: "c1hkkoa2"
  }
};
const { ...weightStyles
} = {
  light: {
    fontWeight: "c1vn6a3a"
  },
  regular: {
    fontWeight: "c3f1lny"
  },
  medium: {
    fontWeight: "cj0ow7f"
  },
  semiBold: {
    fontWeight: "c19h526v"
  },
  bold: {
    fontWeight: "cgvdzzy"
  }
};
const alignStyles = {
  left: {
    textAlign: "c16q53qv"
  },
  center: {
    textAlign: "c2low9"
  },
  right: {
    textAlign: "c1tdm2s7"
  }
};
function Text({
  children: poem,
  as: Tag = 'span',
  styles = [],
  def = 'text',
  family = 'default',
  size = 'm',
  weight = 'regular',
  align = 'left',
  ...props
}) {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Tag, {
    "data-def": def,
    className: (0,style9__WEBPACK_IMPORTED_MODULE_0__.default)(textStyles.default, familyStyles[family], sizeStyles[size], weightStyles[weight], alignStyles[align], ...styles),
    ...props,
    children: poem
  });
}



/***/ }),

/***/ "./src/ui/TextField/email.tsx":
/*!************************************!*\
  !*** ./src/ui/TextField/email.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailInput": () => (/* binding */ EmailInput)
/* harmony export */ });
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var style9__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style9 */ "./node_modules/style9/index.js");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_TextField_email_hash_base64_7_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ui/TextField/email.[hash:base64:7].css */ "./src/ui/TextField/email.[hash:base64:7].css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


// eslint-disable-next-line react/display-name
const EmailInput = (0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  htmlInputStyles,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onValueChange,
  ...props
}, htmlInputRef) => {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
    ref: htmlInputRef,
    className: (0,style9__WEBPACK_IMPORTED_MODULE_1__.default)(...htmlInputStyles),
    ...props
  });
});



/***/ }),

/***/ "./src/ui/TextField/index.tsx":
/*!************************************!*\
  !*** ./src/ui/TextField/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _layout_Frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email */ "./src/ui/TextField/email.tsx");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/ui/TextField/number.tsx");
/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password */ "./src/ui/TextField/password.tsx");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text */ "./src/ui/TextField/text.tsx");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url */ "./src/ui/TextField/url.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_TextField_index_j5SvDye_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/ui/TextField/index.j5SvDye.css */ "./src/ui/TextField/index.j5SvDye.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");








const textFieldStyles = {
  wrapper: {
    backgroundColor: "c1wyo67f",
    justifyContent: "c1byjzjw",
    alignItems: "cgu89p8",
    flexDirection: "c12umtag",
    cursor: "cu769an",
    position: "cdepps4",
    boxShadow: "c1y0w9pg",
    borderTopLeftRadius: "c1y81ouv",
    borderTopRightRadius: "c4lvuwc",
    borderBottomRightRadius: "cu19lyv",
    borderBottomLeftRadius: "c1efb6ib",
    transition: "c1mqpdnx"
  },
  wrapperFocused: {
    boxShadow: "cw6l0r8"
  },
  htmlInput: {
    borderTopStyle: "cgf4u02",
    borderRightStyle: "c1ik97xz",
    borderBottomStyle: "c1nxnebz",
    borderLeftStyle: "chv0sws",
    outlineStyle: "crj2mk3",
    width: "cfj5w8u",
    height: "c1hc9lgp",
    paddingTop: "c11vc8xj",
    paddingRight: "c1fszwr7",
    paddingBottom: "ccsdkk4",
    paddingLeft: "c10544t2",
    backgroundColor: "c1agz083",
    color: "c8jy7d6",
    caretColor: "cxwxgz5",
    fontSize: "c1x2h0g6",
    "::placeholder": {
      color: "cfnbowb",
      fontWeight: "c1nhau28"
    }
  }
};
const textFieldWrapperSize = {
  s: {
    paddingTop: "crkzqna",
    paddingRight: "c1rm9vtp",
    paddingBottom: "cznxl9p",
    paddingLeft: "c1i8uzvb"
  },
  m: {
    paddingTop: "c1wgd8n9",
    paddingRight: "cnvj3wm",
    paddingBottom: "c1i63zzv",
    paddingLeft: "c1e5qwjs"
  }
};
const textFieldHtmlInputSize = {
  s: {
    height: "ccj0fpe"
  },
  m: {
    height: "c1hc9lgp"
  }
};
const INPUT_COMPONENTS = {
  password: _password__WEBPACK_IMPORTED_MODULE_5__.PasswordInput,
  text: _text__WEBPACK_IMPORTED_MODULE_6__.TextInput,
  url: _url__WEBPACK_IMPORTED_MODULE_7__.UrlInput,
  email: _email__WEBPACK_IMPORTED_MODULE_3__.EmailInput,
  number: _number__WEBPACK_IMPORTED_MODULE_4__.NumberInput
};
function TextField({
  type,
  size = 'm',
  wrapperStyles = [],
  inputStyles = [],
  onChange,
  ...props
}) {
  const onInputChange = event => onChange(event.target.value);

  const htmlInputRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onWrapperClick = () => htmlInputRef.current && htmlInputRef.current.focus();

  const [focused, setFocused] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onInputFocus = () => setFocused(true);

  const onInputBlur = () => setFocused(false);

  const InputComponent = INPUT_COMPONENTS[type] || _text__WEBPACK_IMPORTED_MODULE_6__.TextInput;
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_layout_Frame__WEBPACK_IMPORTED_MODULE_1__.Frame, {
    styles: [textFieldStyles.wrapper, textFieldWrapperSize[size], focused && textFieldStyles.wrapperFocused, ...wrapperStyles],
    def: "pseudo-input",
    onClick: onWrapperClick,
    children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(InputComponent, {
      ref: htmlInputRef,
      htmlInputStyles: [textFieldStyles.htmlInput, textFieldHtmlInputSize[size], _Text__WEBPACK_IMPORTED_MODULE_2__.familyStyles.default, _Text__WEBPACK_IMPORTED_MODULE_2__.sizeStyles.m, _Text__WEBPACK_IMPORTED_MODULE_2__.weightStyles.regular, ...inputStyles],
      type: type,
      onChange: onInputChange,
      onValueChange: onChange,
      onFocus: onInputFocus,
      onBlur: onInputBlur,
      ...props
    })
  });
}



/***/ }),

/***/ "./src/ui/TextField/number.tsx":
/*!*************************************!*\
  !*** ./src/ui/TextField/number.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberInput": () => (/* binding */ NumberInput)
/* harmony export */ });
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var style9__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style9 */ "./node_modules/style9/index.js");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_TextField_number_hash_base64_7_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ui/TextField/number.[hash:base64:7].css */ "./src/ui/TextField/number.[hash:base64:7].css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


// eslint-disable-next-line react/display-name
const NumberInput = (0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  htmlInputStyles,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onValueChange,
  ...props
}, htmlInputRef) => {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
    ref: htmlInputRef,
    className: (0,style9__WEBPACK_IMPORTED_MODULE_1__.default)(...htmlInputStyles),
    ...props
  });
});



/***/ }),

/***/ "./src/ui/TextField/password.tsx":
/*!***************************************!*\
  !*** ./src/ui/TextField/password.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordInput": () => (/* binding */ PasswordInput)
/* harmony export */ });
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var style9__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style9 */ "./node_modules/style9/index.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/random */ "./src/utils/random.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./src/ui/Button/index.tsx");
/* harmony import */ var _layout_Frame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_TextField_password_25sbc6s_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/ui/TextField/password.25sbc6s.css */ "./src/ui/TextField/password.25sbc6s.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");







const passwordFieldStyles = {
  inputBase: {
    position: "cdepps4"
  },
  htmlInput: {
    position: "c178psvt",
    zIndex: "c1hte564",
    color: "c80krfj",
    fontWeight: "cj0ow7f",
    "::placeholder": {
      color: "cfnbowb",
      fontFamily: "c1bi745k"
    }
  },
  mask: {
    position: "c178psvt",
    zIndex: "c162np2z",
    userSelect: "c1jaalid",
    overflowY: "c1xgw3ya",
    justifyContent: "c1o2dv1s",
    color: "c8jy7d6",
    lineHeight: "c1b4xmms",
    fontFamily: "c16pvyvd"
  }
};
const mask = (0,_utils_random__WEBPACK_IMPORTED_MODULE_3__.generateString)(120); // eslint-disable-next-line react/display-name

const PasswordInput = (0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  value,
  htmlInputStyles,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onValueChange,
  ...props
}, htmlInputRef) => {
  const [hidden, setHidden] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const onShowButtonClick = () => setHidden(!hidden);

  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_layout_Frame__WEBPACK_IMPORTED_MODULE_5__.Frame, {
      styles: [...htmlInputStyles, passwordFieldStyles.inputBase],
      def: "input-base",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
        ref: htmlInputRef,
        className: (0,style9__WEBPACK_IMPORTED_MODULE_2__.default)(...htmlInputStyles, passwordFieldStyles.htmlInput, _Text__WEBPACK_IMPORTED_MODULE_6__.familyStyles.monospace),
        value: value,
        ...props
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.Text, {
        family: "monospace",
        styles: [...htmlInputStyles, passwordFieldStyles.mask],
        def: "input-mask",
        children: hidden ? mask.slice(0, value.length) : value
      })]
    }), value.length > 0 && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "select",
      onClick: onShowButtonClick,
      size: "s",
      children: hidden ? 'Show' : 'Hide'
    })]
  });
});





/***/ }),

/***/ "./src/ui/TextField/text.tsx":
/*!***********************************!*\
  !*** ./src/ui/TextField/text.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextInput": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var style9__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style9 */ "./node_modules/style9/index.js");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_TextField_text_hash_base64_7_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ui/TextField/text.[hash:base64:7].css */ "./src/ui/TextField/text.[hash:base64:7].css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


// eslint-disable-next-line react/display-name
const TextInput = (0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  htmlInputStyles,
  ...props
}, htmlInputRef) => {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
    ref: htmlInputRef,
    className: (0,style9__WEBPACK_IMPORTED_MODULE_1__.default)(...htmlInputStyles),
    ...props
  });
});



/***/ }),

/***/ "./src/ui/TextField/url.tsx":
/*!**********************************!*\
  !*** ./src/ui/TextField/url.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlInput": () => (/* binding */ UrlInput)
/* harmony export */ });
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var style9__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style9 */ "./node_modules/style9/index.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/url */ "./src/utils/url.ts");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_TextField_url_hash_base64_7_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/ui/TextField/url.[hash:base64:7].css */ "./src/ui/TextField/url.[hash:base64:7].css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");



// eslint-disable-next-line react/display-name
const UrlInput = (0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  htmlInputStyles,
  value,
  onChange: onChangeCallback,
  onBlur: onBlurCallback,
  onValueChange,
  ...props
}, htmlInputRef) => {
  const onBlur = event => {
    onValueChange((0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.extractOrigin)(value));
    onBlurCallback && onBlurCallback(event);
  };

  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
    ref: htmlInputRef,
    type: "url",
    role: "url",
    name: "url",
    value: value,
    className: (0,style9__WEBPACK_IMPORTED_MODULE_1__.default)(...htmlInputStyles),
    onChange: onChangeCallback,
    onBlur: onBlur,
    ...props
  });
});



/***/ }),

/***/ "./src/ui/layout/Frame.tsx":
/*!*********************************!*\
  !*** ./src/ui/layout/Frame.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Frame": () => (/* binding */ Frame),
/* harmony export */   "overrideFrame": () => (/* binding */ overrideFrame)
/* harmony export */ });
/* harmony import */ var style9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style9 */ "./node_modules/style9/index.js");
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_layout_Frame_UyuRuKs_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ui/layout/Frame.UyuRuKs.css */ "./src/ui/layout/Frame.UyuRuKs.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


const heightStyles = {
  "1": {
    height: "c1h6e4zk"
  },
  "2": {
    height: "ccjftm4"
  },
  "3": {
    height: "c1nsdvb1"
  },
  "4": {
    height: "cj7o338"
  },
  "5": {
    height: "ccj0fpe"
  },
  "6": {
    height: "c122jsgl"
  },
  "7": {
    height: "c1hc9lgp"
  },
  "8": {
    height: "c145a2o0"
  },
  "9": {
    height: "c183oudn"
  },
  "10": {
    height: "c1advkk1"
  }
};
const widthStyles = {
  "1": {
    width: "c6zgo8n"
  },
  "2": {
    width: "c63m38i"
  },
  "3": {
    width: "cpvovu7"
  },
  "4": {
    width: "c7frjjb"
  },
  "5": {
    width: "c12c2zna"
  },
  "6": {
    width: "c5e6e36"
  },
  "7": {
    width: "c69tl6v"
  },
  "8": {
    width: "ckonypj"
  },
  "9": {
    width: "czxu483"
  },
  "10": {
    width: "c138vmu3"
  }
};
const gapStyles = {
  "1": {
    gap: "c7iy8wq"
  },
  "2": {
    gap: "c1iebbw8"
  },
  "3": {
    gap: "ch7vsdv"
  },
  "4": {
    gap: "c12lac3m"
  },
  "5": {
    gap: "cbnm4i4"
  },
  "6": {
    gap: "c1v9f41u"
  },
  "7": {
    gap: "c13fg6i"
  },
  "8": {
    gap: "c6s51md"
  },
  "9": {
    gap: "cjk8h3m"
  },
  "10": {
    gap: "c1lwhpxr"
  }
};
const directionStyles = {
  column: {
    flexDirection: "cnhkiih"
  },
  row: {
    flexDirection: "c12umtag"
  }
};
const frameStyles = {
  default: {
    display: "c1snhet1",
    width: "cfj5w8u"
  }
};
function Frame({
  as: Tag = 'div',
  children,
  styles,
  def = 'frame',
  width,
  height,
  gap,
  direction = 'column',
  ...props
}) {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Tag, {
    "data-def": def,
    className: (0,style9__WEBPACK_IMPORTED_MODULE_0__.default)(frameStyles.default, width && widthStyles[width], height && heightStyles[height], gap && gapStyles[gap], direction && directionStyles[direction], ...(styles || [])),
    ...props,
    children: children
  });
}
const overrideFrame = (0,_utils_component__WEBPACK_IMPORTED_MODULE_1__.overrideComponent)(Frame);



/***/ }),

/***/ "./src/ui/layout/Spacing.tsx":
/*!***********************************!*\
  !*** ./src/ui/layout/Spacing.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalSpacing": () => (/* binding */ VerticalSpacing)
/* harmony export */ });
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame */ "./src/ui/layout/Frame.tsx");

const VerticalSpacing = (0,_Frame__WEBPACK_IMPORTED_MODULE_0__.overrideFrame)({
  def: 'spacing'
}, {
  size: 'height'
});

/***/ }),

/***/ "./src/utils/component.tsx":
/*!*********************************!*\
  !*** ./src/utils/component.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overrideComponent": () => (/* binding */ overrideComponent)
/* harmony export */ });
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syntax */ "./src/utils/syntax.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


function overrideComponent(Component) {
  return function (overrideProps, mapping) {
    // eslint-disable-next-line react/function-component-definition
    return function OverriddenComponent(mappedProps) {
      if (!mapping) {
        return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, { ...mappedProps,
          ...overrideProps
        });
      }

      const props = {};

      for (const key of (0,_syntax__WEBPACK_IMPORTED_MODULE_0__.keysOf)(mapping)) {
        if (key in mappedProps) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          props[mapping[key]] = mappedProps[key];
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          props[key] = mappedProps[key];
        }
      }

      return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, { ...props,
        ...overrideProps
      });
    };
  };
}

/***/ }),

/***/ "./src/utils/crypto.ts":
/*!*****************************!*\
  !*** ./src/utils/crypto.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringToNumber": () => (/* binding */ stringToNumber),
/* harmony export */   "md5": () => (/* binding */ md5),
/* harmony export */   "sha3": () => (/* binding */ sha3),
/* harmony export */   "sha256": () => (/* binding */ sha256),
/* harmony export */   "sha512": () => (/* binding */ sha512),
/* harmony export */   "ripemd160": () => (/* binding */ ripemd160),
/* harmony export */   "base64": () => (/* binding */ base64),
/* harmony export */   "escapeBase64": () => (/* binding */ escapeBase64)
/* harmony export */ });
/* harmony import */ var crypto_es_lib_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-es/lib/md5 */ "./node_modules/crypto-es/lib/md5.js");
/* harmony import */ var crypto_es_lib_sha3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-es/lib/sha3 */ "./node_modules/crypto-es/lib/sha3.js");
/* harmony import */ var crypto_es_lib_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-es/lib/sha256 */ "./node_modules/crypto-es/lib/sha256.js");
/* harmony import */ var crypto_es_lib_sha512__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-es/lib/sha512 */ "./node_modules/crypto-es/lib/sha512.js");
/* harmony import */ var crypto_es_lib_ripemd160__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-es/lib/ripemd160 */ "./node_modules/crypto-es/lib/ripemd160.js");
/* harmony import */ var crypto_es_lib_enc_base64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-es/lib/enc-base64 */ "./node_modules/crypto-es/lib/enc-base64.js");






const stringToNumber = value => {
  let result = 0;

  for (let i = 0; i < value.length; ++i) {
    result += value.charCodeAt(i) * i;
  }

  return result;
};
const md5 = value => (0,crypto_es_lib_md5__WEBPACK_IMPORTED_MODULE_0__.MD5)(value);
const sha3 = value => (0,crypto_es_lib_sha3__WEBPACK_IMPORTED_MODULE_1__.SHA3)(value);
const sha256 = value => (0,crypto_es_lib_sha256__WEBPACK_IMPORTED_MODULE_2__.SHA256)(value);
const sha512 = value => (0,crypto_es_lib_sha512__WEBPACK_IMPORTED_MODULE_3__.SHA512)(value);
const ripemd160 = value => (0,crypto_es_lib_ripemd160__WEBPACK_IMPORTED_MODULE_4__.RIPEMD160)(value);
const base64 = value => value.toString(crypto_es_lib_enc_base64__WEBPACK_IMPORTED_MODULE_5__.Base64);
const escapeBase64 = value => value.replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');

/***/ }),

/***/ "./src/utils/high-order.ts":
/*!*********************************!*\
  !*** ./src/utils/high-order.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(callback, waitFor, immediate) {
  let timeout;
  return function (...args) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;

      if (!immediate) {
        callback.apply(this, args);
      }
    }, waitFor);

    if (immediate && !timeout) {
      callback.apply(this, args);
    }
  };
}

/***/ }),

/***/ "./src/utils/random.ts":
/*!*****************************!*\
  !*** ./src/utils/random.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "choice": () => (/* binding */ choice),
/* harmony export */   "generateString": () => (/* binding */ generateString)
/* harmony export */ });
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syntax */ "./src/utils/syntax.ts");

const CHAR_SET = Array.from(new Set('!@#$%^&*(){}"<>'.split('')));
function choice(iterable) {
  const randomIndex = Math.floor(Math.random() * iterable.length); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

  return iterable[randomIndex];
}
function generateString(length) {
  return (0,_syntax__WEBPACK_IMPORTED_MODULE_0__.times)(length, () => choice(CHAR_SET)).join('');
}

/***/ }),

/***/ "./src/utils/syntax.ts":
/*!*****************************!*\
  !*** ./src/utils/syntax.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entriesOf": () => (/* binding */ entriesOf),
/* harmony export */   "keysOf": () => (/* binding */ keysOf),
/* harmony export */   "valuesOf": () => (/* binding */ valuesOf),
/* harmony export */   "times": () => (/* binding */ times),
/* harmony export */   "trim": () => (/* binding */ trim),
/* harmony export */   "range": () => (/* binding */ range)
/* harmony export */ });
const entriesOf = x => Object.entries(x);
const keysOf = x => Object.keys(x);
const valuesOf = x => Object.values(x);
const times = (n, fn) => Array.from({
  length: n
}, (_, index) => fn(index));
const trim = (length, value) => value.substring(0, length);
const range = (from, to, step = 1) => {
  const result = [];

  for (let i = from; i < to; i += step) {
    result.push(i);
  }

  return result;
};

/***/ }),

/***/ "./src/utils/url.ts":
/*!**************************!*\
  !*** ./src/utils/url.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractHost": () => (/* binding */ extractHost),
/* harmony export */   "extractOrigin": () => (/* binding */ extractOrigin)
/* harmony export */ });
function parseUrl(url) {
  let urlToParse = url;
  if (!url.startsWith('https://')) urlToParse = `https://${url}`;

  try {
    return new URL(urlToParse); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function extractHost(url) {
  const parsedUrl = parseUrl(url);
  return parsedUrl != null ? parsedUrl === null || parsedUrl === void 0 ? void 0 : parsedUrl.host : url;
}
function extractOrigin(url) {
  const parsedUrl = parseUrl(url);
  return parsedUrl != null ? parsedUrl === null || parsedUrl === void 0 ? void 0 : parsedUrl.origin : url;
}

/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/crypto-es/lib/core.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-es/lib/core.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base": () => (/* binding */ Base),
/* harmony export */   "WordArray": () => (/* binding */ WordArray),
/* harmony export */   "Hex": () => (/* binding */ Hex),
/* harmony export */   "Latin1": () => (/* binding */ Latin1),
/* harmony export */   "Utf8": () => (/* binding */ Utf8),
/* harmony export */   "BufferedBlockAlgorithm": () => (/* binding */ BufferedBlockAlgorithm),
/* harmony export */   "Hasher": () => (/* binding */ Hasher),
/* harmony export */   "HMAC": () => (/* binding */ HMAC)
/* harmony export */ });
/* eslint-disable no-use-before-define */

/**
 * Base class for inheritance.
 */
class Base {
  /**
   * Extends this object and runs the init method.
   * Arguments to create() will be passed to init().
   *
   * @return {Object} The new object.
   *
   * @static
   *
   * @example
   *
   *     var instance = MyType.create();
   */
  static create(...args) {
    return new this(...args);
  }

  /**
   * Copies properties into this object.
   *
   * @param {Object} properties The properties to mix in.
   *
   * @example
   *
   *     MyType.mixIn({
   *         field: 'value'
   *     });
   */
  mixIn(properties) {
    return Object.assign(this, properties);
  }

  /**
   * Creates a copy of this object.
   *
   * @return {Object} The clone.
   *
   * @example
   *
   *     var clone = instance.clone();
   */
  clone() {
    const clone = new this.constructor();
    Object.assign(clone, this);
    return clone;
  }
}

/**
 * An array of 32-bit words.
 *
 * @property {Array} words The array of 32-bit words.
 * @property {number} sigBytes The number of significant bytes in this word array.
 */
class WordArray extends Base {
  /**
   * Initializes a newly created word array.
   *
   * @param {Array} words (Optional) An array of 32-bit words.
   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.create();
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
   */
  constructor(words = [], sigBytes = words.length * 4) {
    super();

    let typedArray = words;
    // Convert buffers to uint8
    if (typedArray instanceof ArrayBuffer) {
      typedArray = new Uint8Array(typedArray);
    }

    // Convert other array views to uint8
    if (
      typedArray instanceof Int8Array
      || typedArray instanceof Uint8ClampedArray
      || typedArray instanceof Int16Array
      || typedArray instanceof Uint16Array
      || typedArray instanceof Int32Array
      || typedArray instanceof Uint32Array
      || typedArray instanceof Float32Array
      || typedArray instanceof Float64Array
    ) {
      typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
    }

    // Handle Uint8Array
    if (typedArray instanceof Uint8Array) {
      // Shortcut
      const typedArrayByteLength = typedArray.byteLength;

      // Extract bytes
      const _words = [];
      for (let i = 0; i < typedArrayByteLength; i += 1) {
        _words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
      }

      // Initialize this word array
      this.words = _words;
      this.sigBytes = typedArrayByteLength;
    } else {
      // Else call normal init
      this.words = words;
      this.sigBytes = sigBytes;
    }
  }

  /**
   * Creates a word array filled with random bytes.
   *
   * @param {number} nBytes The number of random bytes to generate.
   *
   * @return {WordArray} The random word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.random(16);
   */
  static random(nBytes) {
    const words = [];

    const r = (m_w) => {
      let _m_w = m_w;
      let _m_z = 0x3ade68b1;
      const mask = 0xffffffff;

      return () => {
        _m_z = (0x9069 * (_m_z & 0xFFFF) + (_m_z >> 0x10)) & mask;
        _m_w = (0x4650 * (_m_w & 0xFFFF) + (_m_w >> 0x10)) & mask;
        let result = ((_m_z << 0x10) + _m_w) & mask;
        result /= 0x100000000;
        result += 0.5;
        return result * (Math.random() > 0.5 ? 1 : -1);
      };
    };

    for (let i = 0, rcache; i < nBytes; i += 4) {
      const _r = r((rcache || Math.random()) * 0x100000000);

      rcache = _r() * 0x3ade67b7;
      words.push((_r() * 0x100000000) | 0);
    }

    return new WordArray(words, nBytes);
  }

  /**
   * Converts this word array to a string.
   *
   * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
   *
   * @return {string} The stringified word array.
   *
   * @example
   *
   *     var string = wordArray + '';
   *     var string = wordArray.toString();
   *     var string = wordArray.toString(CryptoJS.enc.Utf8);
   */
  toString(encoder = Hex) {
    return encoder.stringify(this);
  }

  /**
   * Concatenates a word array to this word array.
   *
   * @param {WordArray} wordArray The word array to append.
   *
   * @return {WordArray} This word array.
   *
   * @example
   *
   *     wordArray1.concat(wordArray2);
   */
  concat(wordArray) {
    // Shortcuts
    const thisWords = this.words;
    const thatWords = wordArray.words;
    const thisSigBytes = this.sigBytes;
    const thatSigBytes = wordArray.sigBytes;

    // Clamp excess bits
    this.clamp();

    // Concat
    if (thisSigBytes % 4) {
      // Copy one byte at a time
      for (let i = 0; i < thatSigBytes; i += 1) {
        const thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
      }
    } else {
      // Copy one word at a time
      for (let i = 0; i < thatSigBytes; i += 4) {
        thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
      }
    }
    this.sigBytes += thatSigBytes;

    // Chainable
    return this;
  }

  /**
   * Removes insignificant bits.
   *
   * @example
   *
   *     wordArray.clamp();
   */
  clamp() {
    // Shortcuts
    const { words, sigBytes } = this;

    // Clamp
    words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
    words.length = Math.ceil(sigBytes / 4);
  }

  /**
   * Creates a copy of this word array.
   *
   * @return {WordArray} The clone.
   *
   * @example
   *
   *     var clone = wordArray.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone.words = this.words.slice(0);

    return clone;
  }
}

/**
 * Hex encoding strategy.
 */
const Hex = {
  /**
   * Converts a word array to a hex string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The hex string.
   *
   * @static
   *
   * @example
   *
   *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;

    // Convert
    const hexChars = [];
    for (let i = 0; i < sigBytes; i += 1) {
      const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      hexChars.push((bite >>> 4).toString(16));
      hexChars.push((bite & 0x0f).toString(16));
    }

    return hexChars.join('');
  },

  /**
   * Converts a hex string to a word array.
   *
   * @param {string} hexStr The hex string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
   */
  parse(hexStr) {
    // Shortcut
    const hexStrLength = hexStr.length;

    // Convert
    const words = [];
    for (let i = 0; i < hexStrLength; i += 2) {
      words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
    }

    return new WordArray(words, hexStrLength / 2);
  },
};

/**
 * Latin1 encoding strategy.
 */
const Latin1 = {
  /**
   * Converts a word array to a Latin1 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The Latin1 string.
   *
   * @static
   *
   * @example
   *
   *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;

    // Convert
    const latin1Chars = [];
    for (let i = 0; i < sigBytes; i += 1) {
      const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      latin1Chars.push(String.fromCharCode(bite));
    }

    return latin1Chars.join('');
  },

  /**
   * Converts a Latin1 string to a word array.
   *
   * @param {string} latin1Str The Latin1 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
   */
  parse(latin1Str) {
    // Shortcut
    const latin1StrLength = latin1Str.length;

    // Convert
    const words = [];
    for (let i = 0; i < latin1StrLength; i += 1) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
    }

    return new WordArray(words, latin1StrLength);
  },
};

/**
 * UTF-8 encoding strategy.
 */
const Utf8 = {
  /**
   * Converts a word array to a UTF-8 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-8 string.
   *
   * @static
   *
   * @example
   *
   *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
   */
  stringify(wordArray) {
    try {
      return decodeURIComponent(escape(Latin1.stringify(wordArray)));
    } catch (e) {
      throw new Error('Malformed UTF-8 data');
    }
  },

  /**
   * Converts a UTF-8 string to a word array.
   *
   * @param {string} utf8Str The UTF-8 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
   */
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  },
};

/**
 * Abstract buffered block algorithm template.
 *
 * The property blockSize must be implemented in a concrete subtype.
 *
 * @property {number} _minBufferSize
 *
 *     The number of blocks that should be kept unprocessed in the buffer. Default: 0
 */
class BufferedBlockAlgorithm extends Base {
  constructor() {
    super();
    this._minBufferSize = 0;
  }

  /**
   * Resets this block algorithm's data buffer to its initial state.
   *
   * @example
   *
   *     bufferedBlockAlgorithm.reset();
   */
  reset() {
    // Initial values
    this._data = new WordArray();
    this._nDataBytes = 0;
  }

  /**
   * Adds new data to this block algorithm's buffer.
   *
   * @param {WordArray|string} data
   *
   *     The data to append. Strings are converted to a WordArray using UTF-8.
   *
   * @example
   *
   *     bufferedBlockAlgorithm._append('data');
   *     bufferedBlockAlgorithm._append(wordArray);
   */
  _append(data) {
    let m_data = data;

    // Convert string to WordArray, else assume WordArray already
    if (typeof m_data === 'string') {
      m_data = Utf8.parse(m_data);
    }

    // Append
    this._data.concat(m_data);
    this._nDataBytes += m_data.sigBytes;
  }

  /**
   * Processes available data blocks.
   *
   * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
   *
   * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
   *
   * @return {WordArray} The processed data.
   *
   * @example
   *
   *     var processedData = bufferedBlockAlgorithm._process();
   *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
   */
  _process(doFlush) {
    let processedWords;

    // Shortcuts
    const { _data: data, blockSize } = this;
    const dataWords = data.words;
    const dataSigBytes = data.sigBytes;
    const blockSizeBytes = blockSize * 4;

    // Count blocks ready
    let nBlocksReady = dataSigBytes / blockSizeBytes;
    if (doFlush) {
      // Round up to include partial blocks
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      // Round down to include only full blocks,
      // less the number of blocks that must remain in the buffer
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }

    // Count words ready
    const nWordsReady = nBlocksReady * blockSize;

    // Count bytes ready
    const nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

    // Process blocks
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += blockSize) {
        // Perform concrete-algorithm logic
        this._doProcessBlock(dataWords, offset);
      }

      // Remove processed words
      processedWords = dataWords.splice(0, nWordsReady);
      data.sigBytes -= nBytesReady;
    }

    // Return processed words
    return new WordArray(processedWords, nBytesReady);
  }

  /**
   * Creates a copy of this object.
   *
   * @return {Object} The clone.
   *
   * @example
   *
   *     var clone = bufferedBlockAlgorithm.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone._data = this._data.clone();

    return clone;
  }
}

/**
 * Abstract hasher template.
 *
 * @property {number} blockSize
 *
 *     The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
 */
class Hasher extends BufferedBlockAlgorithm {
  constructor(cfg) {
    super();

    this.blockSize = 512 / 32;

    /**
     * Configuration options.
     */
    this.cfg = Object.assign(new Base(), cfg);

    // Set initial values
    this.reset();
  }

  /**
   * Creates a shortcut function to a hasher's object interface.
   *
   * @param {Hasher} SubHasher The hasher to create a helper for.
   *
   * @return {Function} The shortcut function.
   *
   * @static
   *
   * @example
   *
   *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
   */
  static _createHelper(SubHasher) {
    return (message, cfg) => new SubHasher(cfg).finalize(message);
  }

  /**
   * Creates a shortcut function to the HMAC's object interface.
   *
   * @param {Hasher} SubHasher The hasher to use in this HMAC helper.
   *
   * @return {Function} The shortcut function.
   *
   * @static
   *
   * @example
   *
   *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
   */
  static _createHmacHelper(SubHasher) {
    return (message, key) => new HMAC(SubHasher, key).finalize(message);
  }

  /**
   * Resets this hasher to its initial state.
   *
   * @example
   *
   *     hasher.reset();
   */
  reset() {
    // Reset data buffer
    super.reset.call(this);

    // Perform concrete-hasher logic
    this._doReset();
  }

  /**
   * Updates this hasher with a message.
   *
   * @param {WordArray|string} messageUpdate The message to append.
   *
   * @return {Hasher} This hasher.
   *
   * @example
   *
   *     hasher.update('message');
   *     hasher.update(wordArray);
   */
  update(messageUpdate) {
    // Append
    this._append(messageUpdate);

    // Update the hash
    this._process();

    // Chainable
    return this;
  }

  /**
   * Finalizes the hash computation.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} messageUpdate (Optional) A final message update.
   *
   * @return {WordArray} The hash.
   *
   * @example
   *
   *     var hash = hasher.finalize();
   *     var hash = hasher.finalize('message');
   *     var hash = hasher.finalize(wordArray);
   */
  finalize(messageUpdate) {
    // Final message update
    if (messageUpdate) {
      this._append(messageUpdate);
    }

    // Perform concrete-hasher logic
    const hash = this._doFinalize();

    return hash;
  }
}

/**
 * HMAC algorithm.
 */
class HMAC extends Base {
  /**
   * Initializes a newly created HMAC.
   *
   * @param {Hasher} SubHasher The hash algorithm to use.
   * @param {WordArray|string} key The secret key.
   *
   * @example
   *
   *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
   */
  constructor(SubHasher, key) {
    super();

    const hasher = new SubHasher();
    this._hasher = hasher;

    // Convert string to WordArray, else assume WordArray already
    let _key = key;
    if (typeof _key === 'string') {
      _key = Utf8.parse(_key);
    }

    // Shortcuts
    const hasherBlockSize = hasher.blockSize;
    const hasherBlockSizeBytes = hasherBlockSize * 4;

    // Allow arbitrary length keys
    if (_key.sigBytes > hasherBlockSizeBytes) {
      _key = hasher.finalize(key);
    }

    // Clamp excess bits
    _key.clamp();

    // Clone key for inner and outer pads
    const oKey = _key.clone();
    this._oKey = oKey;
    const iKey = _key.clone();
    this._iKey = iKey;

    // Shortcuts
    const oKeyWords = oKey.words;
    const iKeyWords = iKey.words;

    // XOR keys with pad constants
    for (let i = 0; i < hasherBlockSize; i += 1) {
      oKeyWords[i] ^= 0x5c5c5c5c;
      iKeyWords[i] ^= 0x36363636;
    }
    oKey.sigBytes = hasherBlockSizeBytes;
    iKey.sigBytes = hasherBlockSizeBytes;

    // Set initial values
    this.reset();
  }

  /**
   * Resets this HMAC to its initial state.
   *
   * @example
   *
   *     hmacHasher.reset();
   */
  reset() {
    // Shortcut
    const hasher = this._hasher;

    // Reset
    hasher.reset();
    hasher.update(this._iKey);
  }

  /**
   * Updates this HMAC with a message.
   *
   * @param {WordArray|string} messageUpdate The message to append.
   *
   * @return {HMAC} This HMAC instance.
   *
   * @example
   *
   *     hmacHasher.update('message');
   *     hmacHasher.update(wordArray);
   */
  update(messageUpdate) {
    this._hasher.update(messageUpdate);

    // Chainable
    return this;
  }

  /**
   * Finalizes the HMAC computation.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} messageUpdate (Optional) A final message update.
   *
   * @return {WordArray} The HMAC.
   *
   * @example
   *
   *     var hmac = hmacHasher.finalize();
   *     var hmac = hmacHasher.finalize('message');
   *     var hmac = hmacHasher.finalize(wordArray);
   */
  finalize(messageUpdate) {
    // Shortcut
    const hasher = this._hasher;

    // Compute HMAC
    const innerHash = hasher.finalize(messageUpdate);
    hasher.reset();
    const hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

    return hmac;
  }
}


/***/ }),

/***/ "./node_modules/crypto-es/lib/enc-base64.js":
/*!**************************************************!*\
  !*** ./node_modules/crypto-es/lib/enc-base64.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base64": () => (/* binding */ Base64)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


const parseLoop = (base64Str, base64StrLength, reverseMap) => {
  const words = [];
  let nBytes = 0;
  for (let i = 0; i < base64StrLength; i += 1) {
    if (i % 4) {
      const bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
      const bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
      const bitsCombined = bits1 | bits2;
      words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
      nBytes += 1;
    }
  }
  return _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray.create(words, nBytes);
};

/**
 * Base64 encoding strategy.
 */
const Base64 = {
  /**
   * Converts a word array to a Base64 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The Base64 string.
   *
   * @static
   *
   * @example
   *
   *     const base64String = CryptoJS.enc.Base64.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;
    const map = this._map;

    // Clamp excess bits
    wordArray.clamp();

    // Convert
    const base64Chars = [];
    for (let i = 0; i < sigBytes; i += 3) {
      const byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      const byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
      const byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

      const triplet = (byte1 << 16) | (byte2 << 8) | byte3;

      for (let j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j += 1) {
        base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
      }
    }

    // Add padding
    const paddingChar = map.charAt(64);
    if (paddingChar) {
      while (base64Chars.length % 4) {
        base64Chars.push(paddingChar);
      }
    }

    return base64Chars.join('');
  },

  /**
   * Converts a Base64 string to a word array.
   *
   * @param {string} base64Str The Base64 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Base64.parse(base64String);
   */
  parse(base64Str) {
    // Shortcuts
    let base64StrLength = base64Str.length;
    const map = this._map;
    let reverseMap = this._reverseMap;

    if (!reverseMap) {
      this._reverseMap = [];
      reverseMap = this._reverseMap;
      for (let j = 0; j < map.length; j += 1) {
        reverseMap[map.charCodeAt(j)] = j;
      }
    }

    // Ignore padding
    const paddingChar = map.charAt(64);
    if (paddingChar) {
      const paddingIndex = base64Str.indexOf(paddingChar);
      if (paddingIndex !== -1) {
        base64StrLength = paddingIndex;
      }
    }

    // Convert
    return parseLoop(base64Str, base64StrLength, reverseMap);
  },

  _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/md5.js":
/*!*******************************************!*\
  !*** ./node_modules/crypto-es/lib/md5.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MD5Algo": () => (/* binding */ MD5Algo),
/* harmony export */   "MD5": () => (/* binding */ MD5),
/* harmony export */   "HmacMD5": () => (/* binding */ HmacMD5)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


// Constants table
const T = [];

// Compute constants
for (let i = 0; i < 64; i += 1) {
  T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
}

const FF = (a, b, c, d, x, s, t) => {
  const n = a + ((b & c) | (~b & d)) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

const GG = (a, b, c, d, x, s, t) => {
  const n = a + ((b & d) | (c & ~d)) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

const HH = (a, b, c, d, x, s, t) => {
  const n = a + (b ^ c ^ d) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

const II = (a, b, c, d, x, s, t) => {
  const n = a + (c ^ (b | ~d)) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

/**
 * MD5 hash algorithm.
 */
class MD5Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher {
  _doReset() {
    this._hash = new _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray([
      0x67452301,
      0xefcdab89,
      0x98badcfe,
      0x10325476,
    ]);
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    // Swap endian
    for (let i = 0; i < 16; i += 1) {
      // Shortcuts
      const offset_i = offset + i;
      const M_offset_i = M[offset_i];

      _M[offset_i] = (
        (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff)
          | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
      );
    }

    // Shortcuts
    const H = this._hash.words;

    const M_offset_0 = _M[offset + 0];
    const M_offset_1 = _M[offset + 1];
    const M_offset_2 = _M[offset + 2];
    const M_offset_3 = _M[offset + 3];
    const M_offset_4 = _M[offset + 4];
    const M_offset_5 = _M[offset + 5];
    const M_offset_6 = _M[offset + 6];
    const M_offset_7 = _M[offset + 7];
    const M_offset_8 = _M[offset + 8];
    const M_offset_9 = _M[offset + 9];
    const M_offset_10 = _M[offset + 10];
    const M_offset_11 = _M[offset + 11];
    const M_offset_12 = _M[offset + 12];
    const M_offset_13 = _M[offset + 13];
    const M_offset_14 = _M[offset + 14];
    const M_offset_15 = _M[offset + 15];

    // Working varialbes
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];

    // Computation
    a = FF(a, b, c, d, M_offset_0, 7, T[0]);
    d = FF(d, a, b, c, M_offset_1, 12, T[1]);
    c = FF(c, d, a, b, M_offset_2, 17, T[2]);
    b = FF(b, c, d, a, M_offset_3, 22, T[3]);
    a = FF(a, b, c, d, M_offset_4, 7, T[4]);
    d = FF(d, a, b, c, M_offset_5, 12, T[5]);
    c = FF(c, d, a, b, M_offset_6, 17, T[6]);
    b = FF(b, c, d, a, M_offset_7, 22, T[7]);
    a = FF(a, b, c, d, M_offset_8, 7, T[8]);
    d = FF(d, a, b, c, M_offset_9, 12, T[9]);
    c = FF(c, d, a, b, M_offset_10, 17, T[10]);
    b = FF(b, c, d, a, M_offset_11, 22, T[11]);
    a = FF(a, b, c, d, M_offset_12, 7, T[12]);
    d = FF(d, a, b, c, M_offset_13, 12, T[13]);
    c = FF(c, d, a, b, M_offset_14, 17, T[14]);
    b = FF(b, c, d, a, M_offset_15, 22, T[15]);

    a = GG(a, b, c, d, M_offset_1, 5, T[16]);
    d = GG(d, a, b, c, M_offset_6, 9, T[17]);
    c = GG(c, d, a, b, M_offset_11, 14, T[18]);
    b = GG(b, c, d, a, M_offset_0, 20, T[19]);
    a = GG(a, b, c, d, M_offset_5, 5, T[20]);
    d = GG(d, a, b, c, M_offset_10, 9, T[21]);
    c = GG(c, d, a, b, M_offset_15, 14, T[22]);
    b = GG(b, c, d, a, M_offset_4, 20, T[23]);
    a = GG(a, b, c, d, M_offset_9, 5, T[24]);
    d = GG(d, a, b, c, M_offset_14, 9, T[25]);
    c = GG(c, d, a, b, M_offset_3, 14, T[26]);
    b = GG(b, c, d, a, M_offset_8, 20, T[27]);
    a = GG(a, b, c, d, M_offset_13, 5, T[28]);
    d = GG(d, a, b, c, M_offset_2, 9, T[29]);
    c = GG(c, d, a, b, M_offset_7, 14, T[30]);
    b = GG(b, c, d, a, M_offset_12, 20, T[31]);

    a = HH(a, b, c, d, M_offset_5, 4, T[32]);
    d = HH(d, a, b, c, M_offset_8, 11, T[33]);
    c = HH(c, d, a, b, M_offset_11, 16, T[34]);
    b = HH(b, c, d, a, M_offset_14, 23, T[35]);
    a = HH(a, b, c, d, M_offset_1, 4, T[36]);
    d = HH(d, a, b, c, M_offset_4, 11, T[37]);
    c = HH(c, d, a, b, M_offset_7, 16, T[38]);
    b = HH(b, c, d, a, M_offset_10, 23, T[39]);
    a = HH(a, b, c, d, M_offset_13, 4, T[40]);
    d = HH(d, a, b, c, M_offset_0, 11, T[41]);
    c = HH(c, d, a, b, M_offset_3, 16, T[42]);
    b = HH(b, c, d, a, M_offset_6, 23, T[43]);
    a = HH(a, b, c, d, M_offset_9, 4, T[44]);
    d = HH(d, a, b, c, M_offset_12, 11, T[45]);
    c = HH(c, d, a, b, M_offset_15, 16, T[46]);
    b = HH(b, c, d, a, M_offset_2, 23, T[47]);

    a = II(a, b, c, d, M_offset_0, 6, T[48]);
    d = II(d, a, b, c, M_offset_7, 10, T[49]);
    c = II(c, d, a, b, M_offset_14, 15, T[50]);
    b = II(b, c, d, a, M_offset_5, 21, T[51]);
    a = II(a, b, c, d, M_offset_12, 6, T[52]);
    d = II(d, a, b, c, M_offset_3, 10, T[53]);
    c = II(c, d, a, b, M_offset_10, 15, T[54]);
    b = II(b, c, d, a, M_offset_1, 21, T[55]);
    a = II(a, b, c, d, M_offset_8, 6, T[56]);
    d = II(d, a, b, c, M_offset_15, 10, T[57]);
    c = II(c, d, a, b, M_offset_6, 15, T[58]);
    b = II(b, c, d, a, M_offset_13, 21, T[59]);
    a = II(a, b, c, d, M_offset_4, 6, T[60]);
    d = II(d, a, b, c, M_offset_11, 10, T[61]);
    c = II(c, d, a, b, M_offset_2, 15, T[62]);
    b = II(b, c, d, a, M_offset_9, 21, T[63]);

    // Intermediate hash value
    H[0] = (H[0] + a) | 0;
    H[1] = (H[1] + b) | 0;
    H[2] = (H[2] + c) | 0;
    H[3] = (H[3] + d) | 0;
  }
  /* eslint-ensable no-param-reassign */

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));

    const nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
    const nBitsTotalL = nBitsTotal;
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
      (((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff)
        | (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00)
    );
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
      (((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff)
        | (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00)
    );

    data.sigBytes = (dataWords.length + 1) * 4;

    // Hash final blocks
    this._process();

    // Shortcuts
    const hash = this._hash;
    const H = hash.words;

    // Swap endian
    for (let i = 0; i < 4; i += 1) {
      // Shortcut
      const H_i = H[i];

      H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff)
        | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
    }

    // Return final computed hash
    return hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.MD5('message');
 *     var hash = CryptoJS.MD5(wordArray);
 */
const MD5 = _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher._createHelper(MD5Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacMD5(message, key);
 */
const HmacMD5 = _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher._createHmacHelper(MD5Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/ripemd160.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-es/lib/ripemd160.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RIPEMD160Algo": () => (/* binding */ RIPEMD160Algo),
/* harmony export */   "RIPEMD160": () => (/* binding */ RIPEMD160),
/* harmony export */   "HmacRIPEMD160": () => (/* binding */ HmacRIPEMD160)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted
provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of
    conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list
    of conditions and the following disclaimer in the documentation and/or other materials
    provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/



// Constants table
const _zl = _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray.create([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
const _zr = _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray.create([
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
const _sl = _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray.create([
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
const _sr = _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray.create([
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);

const _hl = _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
const _hr = _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

const f1 = (x, y, z) => (x) ^ (y) ^ (z);

const f2 = (x, y, z) => ((x) & (y)) | ((~x) & (z));

const f3 = (x, y, z) => ((x) | (~(y))) ^ (z);

const f4 = (x, y, z) => ((x) & (z)) | ((y) & (~(z)));

const f5 = (x, y, z) => (x) ^ ((y) | (~(z)));

const rotl = (x, n) => (x << n) | (x >>> (32 - n));

/**
 * RIPEMD160 hash algorithm.
 */
class RIPEMD160Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher {
  _doReset() {
    this._hash = _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    // Swap endian
    for (let i = 0; i < 16; i += 1) {
      // Shortcuts
      const offset_i = offset + i;
      const M_offset_i = _M[offset_i];

      // Swap
      _M[offset_i] = (
        (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff)
          | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
      );
    }
    // Shortcut
    const H = this._hash.words;
    const hl = _hl.words;
    const hr = _hr.words;
    const zl = _zl.words;
    const zr = _zr.words;
    const sl = _sl.words;
    const sr = _sr.words;

    // Working variables
    let al = H[0];
    let bl = H[1];
    let cl = H[2];
    let dl = H[3];
    let el = H[4];
    let ar = H[0];
    let br = H[1];
    let cr = H[2];
    let dr = H[3];
    let er = H[4];

    // Computation
    let t;
    for (let i = 0; i < 80; i += 1) {
      t = (al + _M[offset + zl[i]]) | 0;
      if (i < 16) {
        t += f1(bl, cl, dl) + hl[0];
      } else if (i < 32) {
        t += f2(bl, cl, dl) + hl[1];
      } else if (i < 48) {
        t += f3(bl, cl, dl) + hl[2];
      } else if (i < 64) {
        t += f4(bl, cl, dl) + hl[3];
      } else { // if (i<80) {
        t += f5(bl, cl, dl) + hl[4];
      }
      t |= 0;
      t = rotl(t, sl[i]);
      t = (t + el) | 0;
      al = el;
      el = dl;
      dl = rotl(cl, 10);
      cl = bl;
      bl = t;

      t = (ar + _M[offset + zr[i]]) | 0;
      if (i < 16) {
        t += f5(br, cr, dr) + hr[0];
      } else if (i < 32) {
        t += f4(br, cr, dr) + hr[1];
      } else if (i < 48) {
        t += f3(br, cr, dr) + hr[2];
      } else if (i < 64) {
        t += f2(br, cr, dr) + hr[3];
      } else { // if (i<80) {
        t += f1(br, cr, dr) + hr[4];
      }
      t |= 0;
      t = rotl(t, sr[i]);
      t = (t + er) | 0;
      ar = er;
      er = dr;
      dr = rotl(cr, 10);
      cr = br;
      br = t;
    }
    // Intermediate hash value
    t = (H[1] + cl + dr) | 0;
    H[1] = (H[2] + dl + er) | 0;
    H[2] = (H[3] + el + ar) | 0;
    H[3] = (H[4] + al + br) | 0;
    H[4] = (H[0] + bl + cr) | 0;
    H[0] = t;
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
      (((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff)
        | (((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00)
    );
    data.sigBytes = (dataWords.length + 1) * 4;

    // Hash final blocks
    this._process();

    // Shortcuts
    const hash = this._hash;
    const H = hash.words;

    // Swap endian
    for (let i = 0; i < 5; i += 1) {
      // Shortcut
      const H_i = H[i];

      // Swap
      H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff)
        | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
    }

    // Return final computed hash
    return hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.RIPEMD160('message');
 *     var hash = CryptoJS.RIPEMD160(wordArray);
 */
const RIPEMD160 = _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher._createHelper(RIPEMD160Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
 */
const HmacRIPEMD160 = _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher._createHmacHelper(RIPEMD160Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/sha256.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-es/lib/sha256.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHA256Algo": () => (/* binding */ SHA256Algo),
/* harmony export */   "SHA256": () => (/* binding */ SHA256),
/* harmony export */   "HmacSHA256": () => (/* binding */ HmacSHA256)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


// Initialization and round constants tables
const H = [];
const K = [];

// Compute constants
const isPrime = (n) => {
  const sqrtN = Math.sqrt(n);
  for (let factor = 2; factor <= sqrtN; factor += 1) {
    if (!(n % factor)) {
      return false;
    }
  }

  return true;
};

const getFractionalBits = n => ((n - (n | 0)) * 0x100000000) | 0;

let n = 2;
let nPrime = 0;
while (nPrime < 64) {
  if (isPrime(n)) {
    if (nPrime < 8) {
      H[nPrime] = getFractionalBits(n ** (1 / 2));
    }
    K[nPrime] = getFractionalBits(n ** (1 / 3));

    nPrime += 1;
  }

  n += 1;
}

// Reusable object
const W = [];

/**
 * SHA-256 hash algorithm.
 */
class SHA256Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher {
  _doReset() {
    this._hash = new _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray(H.slice(0));
  }

  _doProcessBlock(M, offset) {
    // Shortcut
    const _H = this._hash.words;

    // Working variables
    let a = _H[0];
    let b = _H[1];
    let c = _H[2];
    let d = _H[3];
    let e = _H[4];
    let f = _H[5];
    let g = _H[6];
    let h = _H[7];

    // Computation
    for (let i = 0; i < 64; i += 1) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = ((gamma0x << 25) | (gamma0x >>> 7))
          ^ ((gamma0x << 14) | (gamma0x >>> 18))
          ^ (gamma0x >>> 3);

        const gamma1x = W[i - 2];
        const gamma1 = ((gamma1x << 15) | (gamma1x >>> 17))
          ^ ((gamma1x << 13) | (gamma1x >>> 19))
          ^ (gamma1x >>> 10);

        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }

      const ch = (e & f) ^ (~e & g);
      const maj = (a & b) ^ (a & c) ^ (b & c);

      const sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
      const sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));

      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;

      h = g;
      g = f;
      f = e;
      e = (d + t1) | 0;
      d = c;
      c = b;
      b = a;
      a = (t1 + t2) | 0;
    }

    // Intermediate hash value
    _H[0] = (_H[0] + a) | 0;
    _H[1] = (_H[1] + b) | 0;
    _H[2] = (_H[2] + c) | 0;
    _H[3] = (_H[3] + d) | 0;
    _H[4] = (_H[4] + e) | 0;
    _H[5] = (_H[5] + f) | 0;
    _H[6] = (_H[6] + g) | 0;
    _H[7] = (_H[7] + h) | 0;
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Return final computed hash
    return this._hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA256('message');
 *     var hash = CryptoJS.SHA256(wordArray);
 */
const SHA256 = _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher._createHelper(SHA256Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA256(message, key);
 */
const HmacSHA256 = _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher._createHmacHelper(SHA256Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/sha3.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-es/lib/sha3.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHA3Algo": () => (/* binding */ SHA3Algo),
/* harmony export */   "SHA3": () => (/* binding */ SHA3),
/* harmony export */   "HmacSHA3": () => (/* binding */ HmacSHA3)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _x64_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x64-core.js */ "./node_modules/crypto-es/lib/x64-core.js");



// Constants tables
const RHO_OFFSETS = [];
const PI_INDEXES = [];
const ROUND_CONSTANTS = [];

// Compute Constants
// Compute rho offset constants
let _x = 1;
let _y = 0;
for (let t = 0; t < 24; t += 1) {
  RHO_OFFSETS[_x + 5 * _y] = ((t + 1) * (t + 2) / 2) % 64;

  const newX = _y % 5;
  const newY = (2 * _x + 3 * _y) % 5;
  _x = newX;
  _y = newY;
}

// Compute pi index constants
for (let x = 0; x < 5; x += 1) {
  for (let y = 0; y < 5; y += 1) {
    PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
  }
}

// Compute round constants
let LFSR = 0x01;
for (let i = 0; i < 24; i += 1) {
  let roundConstantMsw = 0;
  let roundConstantLsw = 0;

  for (let j = 0; j < 7; j += 1) {
    if (LFSR & 0x01) {
      const bitPosition = (1 << j) - 1;
      if (bitPosition < 32) {
        roundConstantLsw ^= 1 << bitPosition;
      } else /* if (bitPosition >= 32) */ {
        roundConstantMsw ^= 1 << (bitPosition - 32);
      }
    }

    // Compute next LFSR
    if (LFSR & 0x80) {
      // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
      LFSR = (LFSR << 1) ^ 0x71;
    } else {
      LFSR <<= 1;
    }
  }

  ROUND_CONSTANTS[i] = _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word.create(roundConstantMsw, roundConstantLsw);
}

// Reusable objects for temporary values
const T = [];
for (let i = 0; i < 25; i += 1) {
  T[i] = _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word.create();
}

/**
 * SHA-3 hash algorithm.
 */
class SHA3Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher {
  constructor(cfg) {
    /**
     * Configuration options.
     *
     * @property {number} outputLength
     *   The desired number of bits in the output hash.
     *   Only values permitted are: 224, 256, 384, 512.
     *   Default: 512
     */
    super(Object.assign(
      { outputLength: 512 },
      cfg,
    ));
  }

  _doReset() {
    this._state = [];
    const state = this._state;
    for (let i = 0; i < 25; i += 1) {
      state[i] = new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word();
    }

    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
  }

  _doProcessBlock(M, offset) {
    // Shortcuts
    const state = this._state;
    const nBlockSizeLanes = this.blockSize / 2;

    // Absorb
    for (let i = 0; i < nBlockSizeLanes; i += 1) {
      // Shortcuts
      let M2i = M[offset + 2 * i];
      let M2i1 = M[offset + 2 * i + 1];

      // Swap endian
      M2i = (((M2i << 8) | (M2i >>> 24)) & 0x00ff00ff)
        | (((M2i << 24) | (M2i >>> 8)) & 0xff00ff00);
      M2i1 = (((M2i1 << 8) | (M2i1 >>> 24)) & 0x00ff00ff)
        | (((M2i1 << 24) | (M2i1 >>> 8)) & 0xff00ff00);

      // Absorb message into state
      const lane = state[i];
      lane.high ^= M2i1;
      lane.low ^= M2i;
    }

    // Rounds
    for (let round = 0; round < 24; round += 1) {
      // Theta
      for (let x = 0; x < 5; x += 1) {
        // Mix column lanes
        let tMsw = 0;
        let tLsw = 0;
        for (let y = 0; y < 5; y += 1) {
          const lane = state[x + 5 * y];
          tMsw ^= lane.high;
          tLsw ^= lane.low;
        }

        // Temporary values
        const Tx = T[x];
        Tx.high = tMsw;
        Tx.low = tLsw;
      }
      for (let x = 0; x < 5; x += 1) {
        // Shortcuts
        const Tx4 = T[(x + 4) % 5];
        const Tx1 = T[(x + 1) % 5];
        const Tx1Msw = Tx1.high;
        const Tx1Lsw = Tx1.low;

        // Mix surrounding columns
        const tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
        const tLsw = Tx4.low ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
        for (let y = 0; y < 5; y += 1) {
          const lane = state[x + 5 * y];
          lane.high ^= tMsw;
          lane.low ^= tLsw;
        }
      }

      // Rho Pi
      for (let laneIndex = 1; laneIndex < 25; laneIndex += 1) {
        let tMsw;
        let tLsw;

        // Shortcuts
        const lane = state[laneIndex];
        const laneMsw = lane.high;
        const laneLsw = lane.low;
        const rhoOffset = RHO_OFFSETS[laneIndex];

        // Rotate lanes
        if (rhoOffset < 32) {
          tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
          tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
        } else /* if (rhoOffset >= 32) */ {
          tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
          tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
        }

        // Transpose lanes
        const TPiLane = T[PI_INDEXES[laneIndex]];
        TPiLane.high = tMsw;
        TPiLane.low = tLsw;
      }

      // Rho pi at x = y = 0
      const T0 = T[0];
      const state0 = state[0];
      T0.high = state0.high;
      T0.low = state0.low;

      // Chi
      for (let x = 0; x < 5; x += 1) {
        for (let y = 0; y < 5; y += 1) {
          // Shortcuts
          const laneIndex = x + 5 * y;
          const lane = state[laneIndex];
          const TLane = T[laneIndex];
          const Tx1Lane = T[((x + 1) % 5) + 5 * y];
          const Tx2Lane = T[((x + 2) % 5) + 5 * y];

          // Mix rows
          lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
          lane.low = TLane.low ^ (~Tx1Lane.low & Tx2Lane.low);
        }
      }

      // Iota
      const lane = state[0];
      const roundConstant = ROUND_CONSTANTS[round];
      lane.high ^= roundConstant.high;
      lane.low ^= roundConstant.low;
    }
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;
    const nBitsLeft = data.sigBytes * 8;
    const blockSizeBits = this.blockSize * 32;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - (nBitsLeft % 32));
    dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Shortcuts
    const state = this._state;
    const outputLengthBytes = this.cfg.outputLength / 8;
    const outputLengthLanes = outputLengthBytes / 8;

    // Squeeze
    const hashWords = [];
    for (let i = 0; i < outputLengthLanes; i += 1) {
      // Shortcuts
      const lane = state[i];
      let laneMsw = lane.high;
      let laneLsw = lane.low;

      // Swap endian
      laneMsw = (((laneMsw << 8) | (laneMsw >>> 24)) & 0x00ff00ff)
        | (((laneMsw << 24) | (laneMsw >>> 8)) & 0xff00ff00);
      laneLsw = (((laneLsw << 8) | (laneLsw >>> 24)) & 0x00ff00ff)
        | (((laneLsw << 24) | (laneLsw >>> 8)) & 0xff00ff00);

      // Squeeze state to retrieve hash
      hashWords.push(laneLsw);
      hashWords.push(laneMsw);
    }

    // Return final computed hash
    return new _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray(hashWords, outputLengthBytes);
  }

  clone() {
    const clone = super.clone.call(this);

    clone._state = this._state.slice(0);
    const state = clone._state;
    for (let i = 0; i < 25; i += 1) {
      state[i] = state[i].clone();
    }

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA3('message');
 *     var hash = CryptoJS.SHA3(wordArray);
 */
const SHA3 = _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher._createHelper(SHA3Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA3(message, key);
 */
const HmacSHA3 = _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher._createHmacHelper(SHA3Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/sha512.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-es/lib/sha512.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHA512Algo": () => (/* binding */ SHA512Algo),
/* harmony export */   "SHA512": () => (/* binding */ SHA512),
/* harmony export */   "HmacSHA512": () => (/* binding */ HmacSHA512)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _x64_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x64-core.js */ "./node_modules/crypto-es/lib/x64-core.js");



// Constants
const K = [
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x428a2f98, 0xd728ae22),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x71374491, 0x23ef65cd),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xb5c0fbcf, 0xec4d3b2f),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xe9b5dba5, 0x8189dbbc),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x3956c25b, 0xf348b538),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x59f111f1, 0xb605d019),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x923f82a4, 0xaf194f9b),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xab1c5ed5, 0xda6d8118),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xd807aa98, 0xa3030242),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x12835b01, 0x45706fbe),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x243185be, 0x4ee4b28c),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x550c7dc3, 0xd5ffb4e2),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x72be5d74, 0xf27b896f),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x80deb1fe, 0x3b1696b1),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x9bdc06a7, 0x25c71235),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xc19bf174, 0xcf692694),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xe49b69c1, 0x9ef14ad2),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xefbe4786, 0x384f25e3),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x0fc19dc6, 0x8b8cd5b5),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x240ca1cc, 0x77ac9c65),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x2de92c6f, 0x592b0275),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x4a7484aa, 0x6ea6e483),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x5cb0a9dc, 0xbd41fbd4),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x76f988da, 0x831153b5),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x983e5152, 0xee66dfab),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xa831c66d, 0x2db43210),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xb00327c8, 0x98fb213f),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xbf597fc7, 0xbeef0ee4),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xc6e00bf3, 0x3da88fc2),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xd5a79147, 0x930aa725),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x06ca6351, 0xe003826f),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x14292967, 0x0a0e6e70),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x27b70a85, 0x46d22ffc),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x2e1b2138, 0x5c26c926),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x4d2c6dfc, 0x5ac42aed),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x53380d13, 0x9d95b3df),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x650a7354, 0x8baf63de),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x766a0abb, 0x3c77b2a8),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x81c2c92e, 0x47edaee6),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x92722c85, 0x1482353b),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xa2bfe8a1, 0x4cf10364),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xa81a664b, 0xbc423001),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xc24b8b70, 0xd0f89791),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xc76c51a3, 0x0654be30),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xd192e819, 0xd6ef5218),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xd6990624, 0x5565a910),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xf40e3585, 0x5771202a),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x106aa070, 0x32bbd1b8),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x19a4c116, 0xb8d2d0c8),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x1e376c08, 0x5141ab53),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x2748774c, 0xdf8eeb99),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x34b0bcb5, 0xe19b48a8),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x391c0cb3, 0xc5c95a63),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x4ed8aa4a, 0xe3418acb),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x5b9cca4f, 0x7763e373),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x682e6ff3, 0xd6b2b8a3),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x748f82ee, 0x5defb2fc),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x78a5636f, 0x43172f60),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x84c87814, 0xa1f0ab72),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x8cc70208, 0x1a6439ec),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x90befffa, 0x23631e28),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xa4506ceb, 0xde82bde9),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xbef9a3f7, 0xb2c67915),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xc67178f2, 0xe372532b),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xca273ece, 0xea26619c),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xd186b8c7, 0x21c0c207),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xeada7dd6, 0xcde0eb1e),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xf57d4f7f, 0xee6ed178),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x06f067aa, 0x72176fba),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x0a637dc5, 0xa2c898a6),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x113f9804, 0xbef90dae),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x1b710b35, 0x131c471b),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x28db77f5, 0x23047d84),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x32caab7b, 0x40c72493),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x3c9ebe0a, 0x15c9bebc),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x431d67c4, 0x9c100d4c),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x4cc5d4be, 0xcb3e42b6),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x597f299c, 0xfc657e2a),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x5fcb6fab, 0x3ad6faec),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x6c44198c, 0x4a475817),
];

// Reusable objects
const W = [];
for (let i = 0; i < 80; i += 1) {
  W[i] = new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word();
}

/**
 * SHA-512 hash algorithm.
 */
class SHA512Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher {
  constructor() {
    super();

    this.blockSize = 1024 / 32;
  }

  _doReset() {
    this._hash = new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64WordArray([
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x6a09e667, 0xf3bcc908),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xbb67ae85, 0x84caa73b),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x3c6ef372, 0xfe94f82b),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0xa54ff53a, 0x5f1d36f1),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x510e527f, 0xade682d1),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x9b05688c, 0x2b3e6c1f),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x1f83d9ab, 0xfb41bd6b),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__.X64Word(0x5be0cd19, 0x137e2179),
    ]);
  }

  _doProcessBlock(M, offset) {
    // Shortcuts
    const H = this._hash.words;

    const H0 = H[0];
    const H1 = H[1];
    const H2 = H[2];
    const H3 = H[3];
    const H4 = H[4];
    const H5 = H[5];
    const H6 = H[6];
    const H7 = H[7];

    const H0h = H0.high;
    let H0l = H0.low;
    const H1h = H1.high;
    let H1l = H1.low;
    const H2h = H2.high;
    let H2l = H2.low;
    const H3h = H3.high;
    let H3l = H3.low;
    const H4h = H4.high;
    let H4l = H4.low;
    const H5h = H5.high;
    let H5l = H5.low;
    const H6h = H6.high;
    let H6l = H6.low;
    const H7h = H7.high;
    let H7l = H7.low;

    // Working variables
    let ah = H0h;
    let al = H0l;
    let bh = H1h;
    let bl = H1l;
    let ch = H2h;
    let cl = H2l;
    let dh = H3h;
    let dl = H3l;
    let eh = H4h;
    let el = H4l;
    let fh = H5h;
    let fl = H5l;
    let gh = H6h;
    let gl = H6l;
    let hh = H7h;
    let hl = H7l;

    // Rounds
    for (let i = 0; i < 80; i += 1) {
      let Wil;
      let Wih;

      // Shortcut
      const Wi = W[i];

      // Extend message
      if (i < 16) {
        Wi.high = M[offset + i * 2] | 0;
        Wih = Wi.high;
        Wi.low = M[offset + i * 2 + 1] | 0;
        Wil = Wi.low;
      } else {
        // Gamma0
        const gamma0x = W[i - 15];
        const gamma0xh = gamma0x.high;
        const gamma0xl = gamma0x.low;
        const gamma0h = ((gamma0xh >>> 1) | (gamma0xl << 31))
          ^ ((gamma0xh >>> 8) | (gamma0xl << 24))
          ^ (gamma0xh >>> 7);
        const gamma0l = ((gamma0xl >>> 1) | (gamma0xh << 31))
          ^ ((gamma0xl >>> 8) | (gamma0xh << 24))
          ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

        // Gamma1
        const gamma1x = W[i - 2];
        const gamma1xh = gamma1x.high;
        const gamma1xl = gamma1x.low;
        const gamma1h = ((gamma1xh >>> 19) | (gamma1xl << 13))
          ^ ((gamma1xh << 3) | (gamma1xl >>> 29))
          ^ (gamma1xh >>> 6);
        const gamma1l = ((gamma1xl >>> 19) | (gamma1xh << 13))
          ^ ((gamma1xl << 3) | (gamma1xh >>> 29))
          ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
        const Wi7 = W[i - 7];
        const Wi7h = Wi7.high;
        const Wi7l = Wi7.low;

        const Wi16 = W[i - 16];
        const Wi16h = Wi16.high;
        const Wi16l = Wi16.low;

        Wil = gamma0l + Wi7l;
        Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
        Wil += gamma1l;
        Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
        Wil += Wi16l;
        Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

        Wi.high = Wih;
        Wi.low = Wil;
      }

      const chh = (eh & fh) ^ (~eh & gh);
      const chl = (el & fl) ^ (~el & gl);
      const majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
      const majl = (al & bl) ^ (al & cl) ^ (bl & cl);

      const sigma0h = ((ah >>> 28) | (al << 4))
        ^ ((ah << 30) | (al >>> 2))
        ^ ((ah << 25) | (al >>> 7));
      const sigma0l = ((al >>> 28) | (ah << 4))
        ^ ((al << 30) | (ah >>> 2))
        ^ ((al << 25) | (ah >>> 7));
      const sigma1h = ((eh >>> 14) | (el << 18))
        ^ ((eh >>> 18) | (el << 14))
        ^ ((eh << 23) | (el >>> 9));
      const sigma1l = ((el >>> 14) | (eh << 18))
        ^ ((el >>> 18) | (eh << 14))
        ^ ((el << 23) | (eh >>> 9));

      // t1 = h + sigma1 + ch + K[i] + W[i]
      const Ki = K[i];
      const Kih = Ki.high;
      const Kil = Ki.low;

      let t1l = hl + sigma1l;
      let t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
      t1l += chl;
      t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
      t1l += Kil;
      t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
      t1l += Wil;
      t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

      // t2 = sigma0 + maj
      const t2l = sigma0l + majl;
      const t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

      // Update working variables
      hh = gh;
      hl = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      el = (dl + t1l) | 0;
      eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
      dh = ch;
      dl = cl;
      ch = bh;
      cl = bl;
      bh = ah;
      bl = al;
      al = (t1l + t2l) | 0;
      ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
    }

    // Intermediate hash value
    H0.low = (H0l + al);
    H0l = H0.low;
    H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
    H1.low = (H1l + bl);
    H1l = H1.low;
    H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
    H2.low = (H2l + cl);
    H2l = H2.low;
    H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
    H3.low = (H3l + dl);
    H3l = H3.low;
    H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
    H4.low = (H4l + el);
    H4l = H4.low;
    H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
    H5.low = (H5l + fl);
    H5l = H5.low;
    H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
    H6.low = (H6l + gl);
    H6l = H6.low;
    H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
    H7.low = (H7l + hl);
    H7l = H7.low;
    H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
    dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Convert hash to 32-bit word array before returning
    const hash = this._hash.toX32();

    // Return final computed hash
    return hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA512('message');
 *     var hash = CryptoJS.SHA512(wordArray);
 */
const SHA512 = _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher._createHelper(SHA512Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA512(message, key);
 */
const HmacSHA512 = _core_js__WEBPACK_IMPORTED_MODULE_0__.Hasher._createHmacHelper(SHA512Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/x64-core.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-es/lib/x64-core.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X64Word": () => (/* binding */ X64Word),
/* harmony export */   "X64WordArray": () => (/* binding */ X64WordArray)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


const X32WordArray = _core_js__WEBPACK_IMPORTED_MODULE_0__.WordArray;

/**
 * A 64-bit word.
 */
class X64Word extends _core_js__WEBPACK_IMPORTED_MODULE_0__.Base {
  /**
   * Initializes a newly created 64-bit word.
   *
   * @param {number} high The high 32 bits.
   * @param {number} low The low 32 bits.
   *
   * @example
   *
   *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
   */
  constructor(high, low) {
    super();

    this.high = high;
    this.low = low;
  }
}

/**
 * An array of 64-bit words.
 *
 * @property {Array} words The array of CryptoJS.x64.Word objects.
 * @property {number} sigBytes The number of significant bytes in this word array.
 */
class X64WordArray extends _core_js__WEBPACK_IMPORTED_MODULE_0__.Base {
  /**
   * Initializes a newly created word array.
   *
   * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
   *
   * @example
   *
   *     var wordArray = CryptoJS.x64.WordArray.create();
   *
   *     var wordArray = CryptoJS.x64.WordArray.create([
   *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
   *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
   *     ]);
   *
   *     var wordArray = CryptoJS.x64.WordArray.create([
   *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
   *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
   *     ], 10);
   */
  constructor(words = [], sigBytes = words.length * 8) {
    super();

    this.words = words;
    this.sigBytes = sigBytes;
  }

  /**
   * Converts this 64-bit word array to a 32-bit word array.
   *
   * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
   *
   * @example
   *
   *     var x32WordArray = x64WordArray.toX32();
   */
  toX32() {
    // Shortcuts
    const x64Words = this.words;
    const x64WordsLength = x64Words.length;

    // Convert
    const x32Words = [];
    for (let i = 0; i < x64WordsLength; i += 1) {
      const x64Word = x64Words[i];
      x32Words.push(x64Word.high);
      x32Words.push(x64Word.low);
    }

    return X32WordArray.create(x32Words, this.sigBytes);
  }

  /**
   * Creates a copy of this word array.
   *
   * @return {X64WordArray} The clone.
   *
   * @example
   *
   *     var clone = x64WordArray.clone();
   */
  clone() {
    const clone = super.clone.call(this);

    // Clone "words" array
    clone.words = this.words.slice(0);
    const { words } = clone;

    // Clone each X64Word object
    const wordsLength = words.length;
    for (let i = 0; i < wordsLength; i += 1) {
      words[i] = words[i].clone();
    }

    return clone;
  }
}


/***/ }),

/***/ "./node_modules/modern-css-reset/dist/reset.min.css":
/*!**********************************************************!*\
  !*** ./node_modules/modern-css-reset/dist/reset.min.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/features/DynamicBackground/view.1SUsNPh.css":
/*!*********************************************************!*\
  !*** ./src/features/DynamicBackground/view.1SUsNPh.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/features/EmojiPrompt/view.4tgdzHO.css":
/*!***************************************************!*\
  !*** ./src/features/EmojiPrompt/view.4tgdzHO.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/features/GeneratedPassword/view.nUvcdJm.css":
/*!*********************************************************!*\
  !*** ./src/features/GeneratedPassword/view.nUvcdJm.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/features/Root/view.-36v8_C.css":
/*!********************************************!*\
  !*** ./src/features/Root/view.-36v8_C.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/features/Theming/palette.YCZu0hk.css":
/*!**************************************************!*\
  !*** ./src/features/Theming/palette.YCZu0hk.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/IndexPage/index.1Gi99HK.css":
/*!***********************************************!*\
  !*** ./src/pages/IndexPage/index.1Gi99HK.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/Button/index.Ul6h4aK.css":
/*!*****************************************!*\
  !*** ./src/ui/Button/index.Ul6h4aK.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/Label/index.1Wu-4lf.css":
/*!****************************************!*\
  !*** ./src/ui/Label/index.1Wu-4lf.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/Link/index.2SxzEtD.css":
/*!***************************************!*\
  !*** ./src/ui/Link/index.2SxzEtD.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/Select/Select.2liXHyG.css":
/*!******************************************!*\
  !*** ./src/ui/Select/Select.2liXHyG.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/Spoiler/index.T3g3w8y.css":
/*!******************************************!*\
  !*** ./src/ui/Spoiler/index.T3g3w8y.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/Text/index.3Ajl1_a.css":
/*!***************************************!*\
  !*** ./src/ui/Text/index.3Ajl1_a.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/TextField/email.[hash:base64:7].css":
/*!****************************************************!*\
  !*** ./src/ui/TextField/email.[hash:base64:7].css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/TextField/index.j5SvDye.css":
/*!********************************************!*\
  !*** ./src/ui/TextField/index.j5SvDye.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/TextField/number.[hash:base64:7].css":
/*!*****************************************************!*\
  !*** ./src/ui/TextField/number.[hash:base64:7].css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/TextField/password.25sbc6s.css":
/*!***********************************************!*\
  !*** ./src/ui/TextField/password.25sbc6s.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/TextField/text.[hash:base64:7].css":
/*!***************************************************!*\
  !*** ./src/ui/TextField/text.[hash:base64:7].css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/TextField/url.[hash:base64:7].css":
/*!**************************************************!*\
  !*** ./src/ui/TextField/url.[hash:base64:7].css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui/layout/Frame.UyuRuKs.css":
/*!*****************************************!*\
  !*** ./src/ui/layout/Frame.UyuRuKs.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "version": () => (/* binding */ ln),
/* harmony export */   "Children": () => (/* binding */ k),
/* harmony export */   "render": () => (/* binding */ z),
/* harmony export */   "hydrate": () => (/* binding */ B),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ sn),
/* harmony export */   "createPortal": () => (/* binding */ I),
/* harmony export */   "createFactory": () => (/* binding */ fn),
/* harmony export */   "cloneElement": () => (/* binding */ an),
/* harmony export */   "isValidElement": () => (/* binding */ cn),
/* harmony export */   "findDOMNode": () => (/* binding */ hn),
/* harmony export */   "PureComponent": () => (/* binding */ E),
/* harmony export */   "memo": () => (/* binding */ g),
/* harmony export */   "forwardRef": () => (/* binding */ x),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ pn),
/* harmony export */   "StrictMode": () => (/* binding */ vn),
/* harmony export */   "Suspense": () => (/* binding */ L),
/* harmony export */   "SuspenseList": () => (/* binding */ F),
/* harmony export */   "lazy": () => (/* binding */ D),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ Q),
/* harmony export */   "unstable_ImmediatePriority": () => (/* binding */ X),
/* harmony export */   "unstable_UserBlockingPriority": () => (/* binding */ nn),
/* harmony export */   "unstable_NormalPriority": () => (/* binding */ tn),
/* harmony export */   "unstable_LowPriority": () => (/* binding */ en),
/* harmony export */   "unstable_IdlePriority": () => (/* binding */ rn),
/* harmony export */   "unstable_runWithPriority": () => (/* binding */ un),
/* harmony export */   "unstable_now": () => (/* binding */ on)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__.options.__b;preact__WEBPACK_IMPORTED_MODULE_1__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=C({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).map(t))},k={map:N,forEach:N,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray},A=preact__WEBPACK_IMPORTED_MODULE_1__.options.__e;preact__WEBPACK_IMPORTED_MODULE_1__.options.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function D(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(e,u)}return u.displayName="Lazy",u.__f=!0,u}function F(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,n.fallback);return u&&(u.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,t.__e?null:n.children),u]};var M=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function T(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var t=this,e=n.i;t.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(T,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function I(n,t){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(j,{__v:n,i:t})}(F.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),M(t,n,r)):u()};e?e(o):o()}},F.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){M(n,e,t)})};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var H=preact__WEBPACK_IMPORTED_MODULE_1__.options.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__.options.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var q,G={configurable:!0,get:function(){return this.class}},J=preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=W,J&&J(n)};var K=preact__WEBPACK_IMPORTED_MODULE_1__.options.__r;preact__WEBPACK_IMPORTED_MODULE_1__.options.__r=function(n){K&&K(n),q=n.__c};var Q={ReactCurrentDispatcher:{current:{readContext:function(n){return q.__n[n.__c].props.value}}}},X=1,nn=2,tn=3,en=4,rn=5;function un(n,t){return t()}var on="object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()},ln="16.8.0";function fn(n){return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.bind(null,n)}function cn(n){return!!n&&n.$$typeof===W}function an(n){return cn(n)?preact__WEBPACK_IMPORTED_MODULE_1__.cloneElement.apply(null,arguments):n}function sn(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,n),!0)}function hn(n){return n&&(n.base||1===n.nodeType&&n)||null}var pn=function(n,t){return n(t)},vn=preact__WEBPACK_IMPORTED_MODULE_1__.Fragment;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue,version:"16.8.0",Children:k,render:z,hydrate:B,unmountComponentAtNode:sn,createPortal:I,createElement:preact__WEBPACK_IMPORTED_MODULE_1__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_1__.createContext,createFactory:fn,cloneElement:an,createRef:preact__WEBPACK_IMPORTED_MODULE_1__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,isValidElement:cn,findDOMNode:hn,Component:preact__WEBPACK_IMPORTED_MODULE_1__.Component,PureComponent:E,memo:g,forwardRef:x,unstable_batchedUpdates:pn,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,Suspense:L,SuspenseList:F,lazy:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Q});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ N),
/* harmony export */   "hydrate": () => (/* binding */ O),
/* harmony export */   "createElement": () => (/* binding */ a),
/* harmony export */   "h": () => (/* binding */ a),
/* harmony export */   "Fragment": () => (/* binding */ y),
/* harmony export */   "createRef": () => (/* binding */ h),
/* harmony export */   "isValidElement": () => (/* binding */ l),
/* harmony export */   "Component": () => (/* binding */ p),
/* harmony export */   "cloneElement": () => (/* binding */ S),
/* harmony export */   "createContext": () => (/* binding */ q),
/* harmony export */   "toChildArray": () => (/* binding */ w),
/* harmony export */   "options": () => (/* binding */ n)
/* harmony export */ });
var n,l,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b)}function b(){for(var n;b.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)))})}function m(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}I(n,k,_=_||r,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i)}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(o=o&&f.slice.call(n.childNodes),v=(p=u.props||r).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a(y,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,o,r=arguments,f=c({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useState": () => (/* binding */ l),
/* harmony export */   "useReducer": () => (/* binding */ p),
/* harmony export */   "useEffect": () => (/* binding */ y),
/* harmony export */   "useLayoutEffect": () => (/* binding */ h),
/* harmony export */   "useRef": () => (/* binding */ s),
/* harmony export */   "useImperativeHandle": () => (/* binding */ _),
/* harmony export */   "useMemo": () => (/* binding */ d),
/* harmony export */   "useCallback": () => (/* binding */ A),
/* harmony export */   "useContext": () => (/* binding */ F),
/* harmony export */   "useDebugValue": () => (/* binding */ T),
/* harmony export */   "useErrorBoundary": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,f=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,e=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "jsx": () => (/* binding */ o),
/* harmony export */   "jsxs": () => (/* binding */ o),
/* harmony export */   "jsxDEV": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function o(_,o,e,n,t){var f={};for(var l in o)"ref"!=l&&(f[l]=o[l]);var s,u,a={type:_,props:f,key:e,ref:o&&o.ref,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:++preact__WEBPACK_IMPORTED_MODULE_0__.options.__v,__source:n,__self:t};if("function"==typeof _&&(s=_.defaultProps))for(u in s)void 0===f[u]&&(f[u]=s[u]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(a),a}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),

/***/ "./node_modules/style9/index.js":
/*!**************************************!*\
  !*** ./node_modules/style9/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ style9)
/* harmony export */ });
function merge(target, source) {
  for (const key in source) {
    if (typeof source[key] === 'object') {
      target[key] = merge({ ...target[key] }, source[key]);
    } else {
      target[key] = source[key];
    }
  }

  return target;
}

function getValues(obj) {
  const values = [];

  for (const key in obj) {
    const val = obj[key];
    if (typeof val === 'object') {
      values.push(...getValues(val));
    } else {
      values.push(val);
    }
  }

  return values;
}

function style9(...styles) {
  const merged = styles.reduce(merge, {});
  return getValues(merged).join(' ');
}

// istanbul ignore next
style9.create = () => {
  throw new Error('style9.create calls should be compiled away');
};

// istanbul ignore next
style9.keyframes = () => {
  throw new Error('style9.keyframes calls should be compiled away');
};


/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var react = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0,
/******/ 			"styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpassword_manager"] = self["webpackChunkpassword_manager"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL0ByZWF0b20vY29yZS9idWlsZC9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL0ByZWF0b20vcmVhY3QvYnVpbGQvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9jb250ZXh0LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvQ29weVNhbHRlZFBhc3N3b3JkL3ZpZXcudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvRHluYW1pY0JhY2tncm91bmQvdmlldy50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9FbW9qaVByb21wdC9jb250ZXh0LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvRW1vamlQcm9tcHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9FbW9qaVByb21wdC92aWV3LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL0dlbmVyYXRlZFBhc3N3b3JkL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9HZW5lcmF0ZWRQYXNzd29yZC9pbmRleC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL0dlbmVyYXRlZFBhc3N3b3JkL3ZpZXcudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvUGFzc3dvcmRTYWx0aW5nL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9QYXNzd29yZFNhbHRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9QYXNzd29yZFNhbHRpbmcvdmlldy50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9Sb290L3ZpZXcudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvU2FsdGVkUGFzc3dvcmRMZW5ndGgvY29udGV4dC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1NhbHRlZFBhc3N3b3JkTGVuZ3RoL2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvU2FsdGVkUGFzc3dvcmRMZW5ndGgvdmlldy50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9TZWxlY3RIYXNoRnVuY3Rpb24vY29udGV4dC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1NlbGVjdEhhc2hGdW5jdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1NlbGVjdEhhc2hGdW5jdGlvbi92aWV3LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1Nlc3Npb25UZXJtaW5hdG9yL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9TZXNzaW9uVGVybWluYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1Nlc3Npb25UZXJtaW5hdG9yL3ZpZXcudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvU3RvcmVMb2NhbGx5L2NvbW1vbi50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1N0b3JlTG9jYWxseS9jb250ZXh0LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvU3RvcmVMb2NhbGx5L2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvU3RvcmVMb2NhbGx5L3Jlc3RvcmVMb2NhbGx5LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvU3RvcmVMb2NhbGx5L3N0b3JlTG9jYWxseS50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1N0b3JlTG9jYWxseS92aWV3LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1N0eWxlc1Jlc2V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1RoZW1pbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9UaGVtaW5nL3BhbGV0dGUudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9UaGVtaW5nL3RoZW1lUHJvdmlkZXIudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvcGFnZXMvSW5kZXhQYWdlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3NhbHRpbmcudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9CdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvTGFiZWwvaW5kZXgudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvTGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9TZWxlY3QvT3B0aW9uLnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1NlbGVjdC9TZWxlY3QudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvU2VsZWN0L2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvU3BvaWxlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9UZXh0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1RleHRGaWVsZC9lbWFpbC50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9UZXh0RmllbGQvaW5kZXgudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvVGV4dEZpZWxkL251bWJlci50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9UZXh0RmllbGQvcGFzc3dvcmQudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvVGV4dEZpZWxkL3RleHQudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvVGV4dEZpZWxkL3VybC50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9sYXlvdXQvRnJhbWUudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvbGF5b3V0L1NwYWNpbmcudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdXRpbHMvY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3V0aWxzL2NyeXB0by50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3V0aWxzL2hpZ2gtb3JkZXIudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91dGlscy9yYW5kb20udHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91dGlscy9zeW50YXgudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91dGlscy91cmwudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jb3B5LXRvLWNsaXBib2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1lcy9saWIvY29yZS5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1lcy9saWIvZW5jLWJhc2U2NC5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1lcy9saWIvbWQ1LmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWVzL2xpYi9yaXBlbWQxNjAuanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jcnlwdG8tZXMvbGliL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1lcy9saWIvc2hhMy5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1lcy9saWIvc2hhNTEyLmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWVzL2xpYi94NjQtY29yZS5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL21vZGVybi1jc3MtcmVzZXQvZGlzdC9yZXNldC5taW4uY3NzPzRhMDgiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9EeW5hbWljQmFja2dyb3VuZC92aWV3LjFTVXNOUGguY3NzP2MyZDIiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9FbW9qaVByb21wdC92aWV3LjR0Z2R6SE8uY3NzP2JiN2MiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9HZW5lcmF0ZWRQYXNzd29yZC92aWV3Lm5VdmNkSm0uY3NzPzFhMmQiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9Sb290L3ZpZXcuLTM2djhfQy5jc3M/M2QzMiIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1RoZW1pbmcvcGFsZXR0ZS5ZQ1p1MGhrLmNzcz9lZjNmIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvcGFnZXMvSW5kZXhQYWdlL2luZGV4LjFHaTk5SEsuY3NzPzcwYWUiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9CdXR0b24vaW5kZXguVWw2aDRhSy5jc3M/ZDBhMiIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL0xhYmVsL2luZGV4LjFXdS00bGYuY3NzP2I2ZDkiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9MaW5rL2luZGV4LjJTeHpFdEQuY3NzPzExYTIiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9TZWxlY3QvU2VsZWN0LjJsaVhIeUcuY3NzP2RiZDQiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9TcG9pbGVyL2luZGV4LlQzZzN3OHkuY3NzP2I5MjYiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9UZXh0L2luZGV4LjNBamwxX2EuY3NzP2Y3YjciLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9UZXh0RmllbGQvZW1haWwuW2hhc2g6YmFzZTY0OjddLmNzcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1RleHRGaWVsZC9pbmRleC5qNVN2RHllLmNzcz83M2E5Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvVGV4dEZpZWxkL251bWJlci5baGFzaDpiYXNlNjQ6N10uY3NzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvVGV4dEZpZWxkL3Bhc3N3b3JkLjI1c2JjNnMuY3NzP2U0ZjAiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9UZXh0RmllbGQvdGV4dC5baGFzaDpiYXNlNjQ6N10uY3NzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvVGV4dEZpZWxkL3VybC5baGFzaDpiYXNlNjQ6N10uY3NzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvbGF5b3V0L0ZyYW1lLlV5dVJ1S3MuY3NzPzYxOTIiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL2Rpc3QvanN4UnVudGltZS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZTkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy90b2dnbGUtc2VsZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiQ09MT1JGVUxfRU1PSklTX09SREVSRURfTElTVCIsIkRFRkFVTFRfRU1PSkkiLCJTQUxURURfUEFTU1dPUkRfREVGQVVMVF9MRU5HVEgiLCJTQUxURURfUEFTU1dPUkRfTUlOX0xFTkdUSCIsIlNBTFRFRF9QQVNTV09SRF9NQVhfTEVOR1RIIiwiU0VTU0lPTl9USU1FX1RPX1RFUk1JTkFURSIsInJhd0NvbnRleHQiLCJwcm9jZXNzIiwiZW52IiwiQ09OVEVYVCIsImNvbnRleHQiLCJhdG9tIiwiQ29weVNhbHRlZFBhc3N3b3JkQnV0dG9uIiwic2FsdGVkUGFzc3dvcmRWYWx1ZSIsInVzZUF0b20iLCJzYWx0ZWRQYXNzd29yZCIsImNvcHlUb0NsaXBib2FyZCIsImJyb3dzZXJDb3B5IiwiZHluYW1pY0JhY2tncm91bmRTdHlsZXMiLCJTVEFSVCIsIkVORCIsIk9GRl9USEVfUk9PVCIsIkR5bmFtaWNCYWNrZ3JvdW5kIiwibWVtbyIsInRpbWVzIiwiaW5kZXgiLCJyYW5kb21FbW9qaSIsImNob2ljZSIsIlgiLCJNYXRoIiwiWSIsImZvbnRTaXplIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInBpY2tFbW9qaSIsInZhbHVlIiwic3RyaW5nVG9OdW1iZXIiLCJTQUxUX1NISUZUIiwiZW1vamlQcm9tcHQiLCIkIiwibWFzdGVyUGFzc3dvcmQiLCJkb21haW5OYW1lIiwiZXh0cmFjdEhvc3QiLCJlbWFpbCIsImVtb2ppUHJvbXB0U3R5bGVzIiwiZW1vamlQcm9tcHRWYWx1ZSIsInNhbHRUaGVQYXNzIiwiaGFzaEZ1bmN0aW9uIiwic2FsdGVkUGFzc3dvcmRMZW5ndGgiLCJzaG93U2FsdGVkUGFzc3dvcmQiLCJzdGF0ZSIsInRvZ2dsZSIsIl8iLCJnZW5lcmF0ZWRQYXNzd29yZFN0eWxlcyIsInNjYWxhckNoYW5nZSIsIm5ld1ZhbHVlIiwiY2hhbmdlIiwiUGFzc3dvcmRTYWx0aW5nIiwibWFzdGVyUGFzc3dvcmRWYWx1ZSIsIm9uQ2hhbmdlTWFzdGVyUGFzc3dvcmQiLCJkb21haW5OYW1lVmFsdWUiLCJvbkNoYW5nZURvbWFpbk5hbWUiLCJlbWFpbFZhbHVlIiwib25DaGFuZ2VFbWFpbCIsImVhc2VsU3R5bGVzIiwiRWFzZWwiLCJvdmVycmlkZUZyYW1lIiwic3R5bGVzIiwiZGVmIiwiQ29udGVudCIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZXN0b3JlTG9jYWxseSIsIlNhbHRlZFBhc3N3b3JkTGVuZ3RoIiwic2FsdGVkUGFzc3dvcmRMZW5ndGhWYWx1ZSIsInJhbmdlIiwibWFwIiwibGVuZ3RoIiwiaGFzaEZ1bmN0aW9uTmFtZSIsIkRFRkFVTFRfSEFTSF9GVU5DVElPTl9OQU1FIiwieCIsIkhBU0hfRlVOQ1RJT05TIiwiU2VsZWN0SGFzaEZ1bmN0aW9uIiwiaGFzaEZ1bmN0aW9uTmFtZVZhbHVlIiwib25TZWxlY3QiLCJrZXlzT2YiLCJ0ZXJtaW5hdGlvblRpbWVMZWZ0IiwiY3VycmVudFNhbHRlZFBhc3N3b3JkIiwiY3R4IiwiZGlzcGF0Y2giLCJyZXNldCIsInRlcm1pbmF0ZSIsImZpbGwiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImRlYyIsImN1cnJlbnQiLCJtYXgiLCJjcmVhdGVDdHgiLCJkZWJvdW5jZSIsIlNFQ09ORFNfSU5fTUlOVVRFIiwiZm9ybWF0VGltZSIsInRpbWUiLCJ0aW1lSW5TZWNvbmRzIiwiZmxvb3IiLCJtaW51dGVzIiwiU3RyaW5nIiwic2Vjb25kcyIsInBhZFN0YXJ0IiwiU2Vzc2lvblRlcm1pbmF0b3IiLCJ0ZXJtaW5hdGlvblRpbWVMZWZ0VmFsdWUiLCJnZW5lcmF0ZUZpZWxkS2V5IiwiaWQiLCJzdG9yZUxvY2FsbHlPYnNlcnZlciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZUxvY2FsbHkiLCJmaWVsZElkIiwic3RvcmVkVmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwiSlNPTiIsInBhcnNlIiwiZSIsInJlbW92ZUl0ZW0iLCJFcnJvciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJTdG9yZUxvY2FsbHlDb25uZWN0b3IiLCJkZWZhdWx0U3R5bGVzIiwiZm9udCIsImZvbnRGYW1pbHkiLCJSZXNldFN0eWxlcyIsIlRIRU1FUyIsImxpZ2h0IiwiZGFyayIsImJsYWNrIiwidGhlbWVTdHlsZXMiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJjaGlsZHJlbiIsIkdlbmVyaWNSZWFjdFBhZ2UiLCJJbmRleFBhZ2UiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJpbmRleFBhZ2VTdHlsZXMiLCJCYXNlTGF5b3V0IiwiYXMiLCJ0aXRsZSIsIm1kNSIsInNoYTMiLCJzaGEyNTYiLCJzaGE1MTIiLCJyaXBlbWQxNjAiLCJ0cmltIiwiZXNjYXBlQmFzZTY0IiwiYmFzZTY0IiwiYnV0dG9uU3R5bGVzIiwidmFyaWFudFN0eWxlcyIsInNpemVTdHlsZXMiLCJzaXplIiwicHJvcHMiLCJzdHlsZTkiLCJsYWJlbFN0eWxlIiwibGlua1N0eWxlIiwiT3B0aW9uIiwic2VsZWN0U3R5bGVzIiwiZmFtaWx5U3R5bGVzIiwib25DaGFuZ2UiLCJzcG9pbGVyU3R5bGVzIiwib3BlbiIsInRleHRTdHlsZXMiLCJ3ZWlnaHRTdHlsZXMiLCJhbGlnblN0eWxlcyIsIlRhZyIsImZhbWlseSIsIndlaWdodCIsImFsaWduIiwiRW1haWxJbnB1dCIsImZvcndhcmRSZWYiLCJ0ZXh0RmllbGRTdHlsZXMiLCJ0ZXh0RmllbGRXcmFwcGVyU2l6ZSIsInRleHRGaWVsZEh0bWxJbnB1dFNpemUiLCJJTlBVVF9DT01QT05FTlRTIiwicGFzc3dvcmQiLCJ0ZXh0IiwidXJsIiwibnVtYmVyIiwiTnVtYmVySW5wdXQiLCJ3cmFwcGVyU3R5bGVzIiwiaW5wdXRTdHlsZXMiLCJvbklucHV0Q2hhbmdlIiwiZXZlbnQiLCJodG1sSW5wdXRSZWYiLCJ1c2VSZWYiLCJvbldyYXBwZXJDbGljayIsInVzZVN0YXRlIiwib25JbnB1dEZvY3VzIiwic2V0Rm9jdXNlZCIsIm9uSW5wdXRCbHVyIiwiSW5wdXRDb21wb25lbnQiLCJmb2N1c2VkIiwicGFzc3dvcmRGaWVsZFN0eWxlcyIsIm1hc2siLCJnZW5lcmF0ZVN0cmluZyIsIlBhc3N3b3JkSW5wdXQiLCJvblNob3dCdXR0b25DbGljayIsInNldEhpZGRlbiIsImhpZGRlbiIsIlRleHRJbnB1dCIsIlVybElucHV0Iiwib25CbHVyIiwib25WYWx1ZUNoYW5nZSIsImV4dHJhY3RPcmlnaW4iLCJvbkJsdXJDYWxsYmFjayIsImhlaWdodFN0eWxlcyIsIndpZHRoU3R5bGVzIiwiZ2FwU3R5bGVzIiwiZGlyZWN0aW9uU3R5bGVzIiwiZnJhbWVTdHlsZXMiLCJkaXJlY3Rpb24iLCJ3aWR0aCIsImhlaWdodCIsImdhcCIsIm92ZXJyaWRlQ29tcG9uZW50IiwiVmVydGljYWxTcGFjaW5nIiwiQ29tcG9uZW50Iiwib3ZlcnJpZGVQcm9wcyIsIm1hcHBpbmciLCJPdmVycmlkZGVuQ29tcG9uZW50IiwibWFwcGVkUHJvcHMiLCJrZXkiLCJyZXN1bHQiLCJpIiwiY2hhckNvZGVBdCIsIk1ENSIsIlNIQTMiLCJTSEEyNTYiLCJTSEE1MTIiLCJSSVBFTUQxNjAiLCJ0b1N0cmluZyIsIkJhc2U2NCIsInJlcGxhY2UiLCJjYWxsYmFjayIsIndhaXRGb3IiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiYXJncyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsIkNIQVJfU0VUIiwiQXJyYXkiLCJmcm9tIiwiU2V0Iiwic3BsaXQiLCJpdGVyYWJsZSIsInJhbmRvbUluZGV4IiwicmFuZG9tIiwiam9pbiIsImVudHJpZXNPZiIsIk9iamVjdCIsImVudHJpZXMiLCJrZXlzIiwidmFsdWVzT2YiLCJ2YWx1ZXMiLCJuIiwiZm4iLCJzdWJzdHJpbmciLCJ0byIsInN0ZXAiLCJwdXNoIiwicGFyc2VVcmwiLCJ1cmxUb1BhcnNlIiwic3RhcnRzV2l0aCIsIlVSTCIsInBhcnNlZFVybCIsImhvc3QiLCJvcmlnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0IsY0FBYyxJQUFJLGdEQUFnRCxTQUFTLGlFQUFpRSxRQUFRLEtBQUssa0JBQWtCLGVBQWUsd0NBQXdDLGtCQUFrQixlQUFlLGtEQUFrRCxjQUFjLHlCQUF5QixjQUFjLG1DQUFtQyxjQUFjLDJCQUEyQixnQkFBZ0IsNERBQTRELGNB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ08sc0JBQXNCLDRDQUFNO0FBQ25DO0FBQ0EscUJBQXFCLCtDQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixhQUFhLGlEQUFPO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNPLHlCQUF5Qiw0Q0FBTTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsc0RBQVk7QUFDakMsVUFBVSxpREFBTztBQUNqQixVQUFVLGlEQUFPO0FBQ2pCLFVBQVUsaURBQU87QUFDakIsVUFBVSxpREFBTztBQUNqQixVQUFVLGlEQUFPO0FBQ2pCLFVBQVUsaURBQU87QUFDakIsVUFBVSxpREFBTztBQUNqQixVQUFVLGlEQUFPO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGVBQWUsMERBQW9COztBQUUxQztBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLG1CQUFtQiw4REFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdX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OztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUMvQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJhcHAuMjM4YTM3YzAyYjM1NzFkZGM5ZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdD0hMCxuPWZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBlKHQpe3RyeXtyZXR1cm4gdC5hcHBseSh0aGlzLFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKX1jYXRjaCh0KXtyZXR1cm4gdD10IGluc3RhbmNlb2YgRXJyb3I/dDpuZXcgRXJyb3IodCksc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IHR9KSx0fX1mdW5jdGlvbiByKHQsbixlKXt2YXIgcj10LmdldChuKTt2b2lkIDA9PT1yJiZ0LnNldChuLHI9bmV3IFNldCksci5hZGQoZSl9ZnVuY3Rpb24gYSh0LG4sZSl7dmFyIHI9dC5nZXQobik7dm9pZCAwIT09ciYmKHIuZGVsZXRlKGUpLDA9PT1yLnNpemUmJnQuZGVsZXRlKG4pKX1mdW5jdGlvbiBjKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGkodCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPT10fWZ1bmN0aW9uIG8odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiB1KHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPXQpLHYoIW8odCksbitcIiwgZXhwZWN0ZWQgZnVuY3Rpb25cIiksdH1mdW5jdGlvbiBzKHQpe3JldHVybiBvKHQpJiZvKHQuZ2V0U3RhdGUpfWZ1bmN0aW9uIGYodCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49dCksdighcyh0KSxuK1wiLCBleHBlY3RlZCBhdG9tXCIpLHR9ZnVuY3Rpb24gZCh0KXtyZXR1cm4gbyh0KSYmbyh0LmRpc3BhdGNoKX1mdW5jdGlvbiBwKHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPXQpLHYoIWQodCksbitcIiwgZXhwZWN0ZWQgYWN0aW9uXCIpLHR9ZnVuY3Rpb24gbCh0KXtyZXR1cm4gaSh0KSYmYyh0LnR5cGUpJiZcInBheWxvYWRcImluIHR9ZnVuY3Rpb24gdih0LG4pe2lmKHQpdGhyb3cgbmV3IEVycm9yKFwiUmVhdG9tOiBpbnZhbGlkIFwiK24pfWZ1bmN0aW9uIGgodCxuLGUscil7dm9pZCAwPT09biYmKG49bmV3IE1hcCksdm9pZCAwPT09ZSYmKGU9ZnVuY3Rpb24oKXt9KSx2b2lkIDA9PT1yJiYocj17fSk7dmFyIGE9e2FjdGlvbnM6dCxlZmZlY3RzOltdLHByb2Nlc3M6ZnVuY3Rpb24odCxjKXt2YXIgaSxvLHU9bi5nZXQodCk7cmV0dXJuIHV8fCh1PXQoYSxudWxsIT0oaT1udWxsIT0obz1lKHQpKT9vOmMpP2k6e2RlcHM6W10sY3R4OnZvaWQgMCxzdGF0ZTpyW3QuaWRdLHR5cGVzOm5ldyBTZXR9KSxuLnNldCh0LHUpKSx1fX07cmV0dXJuIGF9ZnVuY3Rpb24geSh0LG4sZSl7dmFyIHIsYT1uLmRlcHMsYz1bXSxpPW5ldyBTZXQsdT0hMSxmPSExLHA9ITEsbD0wO2Z1bmN0aW9uIGgoKXtyZXR1cm4gcD9jLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGQodCk/aS5hZGQodC50eXBlKTp0LmNhY2hlLnR5cGVzLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGkuYWRkKHQpfSl9KTppPW4udHlwZXMsdXx8IU9iamVjdC5pcyhuLnN0YXRlLHIpfHwwPT09YS5sZW5ndGg/e2RlcHM6YyxjdHg6bi5jdHgsc3RhdGU6cix0eXBlczppfTpufWZ1bmN0aW9uIHkoKXtjLmxlbmd0aD0wLGkuY2xlYXIoKX1pZihhLmxlbmd0aD4wJiZhLmV2ZXJ5KGZ1bmN0aW9uKG4pe2lmKGQobikpe3ZhciBlPW4udHlwZTtpZih0LmFjdGlvbnMuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gdC50eXBlPT09ZX0pKXJldHVybiB5KCksITF9ZWxzZXt2YXIgcj1uLmF0b20sYT1uLmNhY2hlLGk9dC5wcm9jZXNzKHIsYSk7aWYoaSE9PWEpe2lmKGkuc3RhdGUhPT1hLnN0YXRlKXJldHVybiB5KCksITE7bj17YXRvbTpyLGNhY2hlOml9LHU9ITAscHx8KHA9aS50eXBlcyE9PWEudHlwZXMpfX1yZXR1cm4gYy5wdXNoKG4pLCEwfSkpcmV0dXJuIHI9bi5zdGF0ZSxoKCk7ZnVuY3Rpb24gZyhlKXtvKGUpJiZ0LmVmZmVjdHMucHVzaChmdW5jdGlvbih0KXtyZXR1cm4gZSh0LG4uY3R4KX0pfXJldHVybiByPWUoZnVuY3Rpb24obixlKXt2KE51bWJlci5pc05hTihsKSxcIm91dGRhdGVkIHRyYWNrIGNhbGxcIiksbCsrO3RyeXtpZihzKG4pKXJldHVybiBmdW5jdGlvbihuLGUpe3ZhciByPXQucHJvY2VzcyhuKTtpZigxPT09bCl7dmFyIGk9YS5sZW5ndGg+Yy5sZW5ndGg/YVtjLmxlbmd0aF06bnVsbDtmfHwoZj0obnVsbD09aT92b2lkIDA6aS5hdG9tKSE9PW4pLHV8fCh1PWZ8fGkuY2FjaGUhPT1yKSxwfHwocD1mfHxpLmNhY2hlLnR5cGVzIT09ci50eXBlcyksYy5wdXNoKHthdG9tOm4sY2FjaGU6cn0pLCFlfHwhZiYmT2JqZWN0LmlzKGkuY2FjaGUuc3RhdGUsci5zdGF0ZSl8fGcoZShyLnN0YXRlKSl9ZWxzZSB2KGUsXCJjYWxsYmFjayBpbiBuZXN0ZWQgdHJhY2tcIik7cmV0dXJuIHIuc3RhdGV9KG4sZSk7dighZChuKSxcInRyYWNrIGFyZ3VtZW50c1wiKSwxPT09bD8odighZSxcImFjdGlvbiB0cmFjayB3aXRob3V0IGNhbGxiYWNrXCIpLGZ8fChmPWEubGVuZ3RoPD1jLmxlbmd0aHx8YVtjLmxlbmd0aF0hPT1uKSxwfHwocD1mKSxjLnB1c2gobiksdC5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24odCl7dC50eXBlPT09bi50eXBlJiZnKGUodC5wYXlsb2FkLHQpKX0pKTp2KCEwLFwiYWN0aW9uIGhhbmRsaW5nIGluIG5lc3RlZCB0cmFja1wiKX1maW5hbGx5e2wtLX19LG4uc3RhdGUpLGw9TmFOLGY9Znx8YS5sZW5ndGg+Yy5sZW5ndGgsdT11fHxmLHA9cHx8ZixoKCl9dmFyIGc9ZnVuY3Rpb24odCl7cmV0dXJue3BheWxvYWQ6dH19LEU9MDtmdW5jdGlvbiBtKHQsbil7dm9pZCAwPT09biYmKG49Yyh0KT90OlwiYWN0aW9uIFtcIisgKytFK1wiXVwiKTt2YXIgZT1vKHQpP3Q6ZyxyPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5hcHBseSh2b2lkIDAsW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtyZXR1cm4gdihcInR5cGVcImluIHQsXCJhY3Rpb24gdHlwZSBpbiBjcmVhdGVkIGFjdGlvbiBkYXRhXCIpLHYoXCJwYXlsb2FkXCJpbiB0PT0wLFwibWlzc2luZyBwYXlsb2FkIGluIGNyZWF0ZWQgYWN0aW9uIGRhdGFcIiksT2JqZWN0LmFzc2lnbih7fSx0LHt0eXBlOm59KX07cmV0dXJuIHIuZGlzcGF0Y2g9ZnVuY3Rpb24oKXtyZXR1cm4geC5kaXNwYXRjaChyLmFwcGx5KHZvaWQgMCxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKX0sci5zdWJzY3JpYmU9ZnVuY3Rpb24odCl7cmV0dXJuIHguc3Vic2NyaWJlKHIsdCl9LHIudHlwZT1uLHJ9dmFyIGI9MDtmdW5jdGlvbiB3KHQsbixlKXt2b2lkIDA9PT1uJiYobj17fSksdm9pZCAwPT09ZSYmKGU9e30pO3ZhciByPShlPWMoZSk/e2lkOmV9OmUpLmNyZWF0ZUN0eCxhPXZvaWQgMD09PXI/ZnVuY3Rpb24oKXtyZXR1cm57fX06cixpPWUuaWQsdT12b2lkIDA9PT1pP1wiYXRvbSBbXCIrICsrYitcIl1cIjppLHM9ZS5vbkNoYW5nZSxmPXQ7byh0KXx8KGY9ZnVuY3Rpb24obixlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dCksZX0sMD09PU9iamVjdC5rZXlzKG4pLmxlbmd0aCYmKG4udXBkYXRlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG8odCk/dChuKTp0fSkpO3ZhciBkPVtoXSxwPU9iamVjdC5rZXlzKG4pLm1hcChmdW5jdGlvbih0KXtyZXR1cm57cmVkdWNlcjpuW3RdLGFjdGlvbkNyZWF0b3I6aFt0XT1tKGZ1bmN0aW9uKHQpe3JldHVybntwYXlsb2FkOnQsdGFyZ2V0czpkfX0sdCsnIG9mIFwiJyt1KydcIicpfX0pLGw9ZnVuY3Rpb24odCxuKXtyZXR1cm4gcC5yZWR1Y2UoZnVuY3Rpb24obixlKXt2YXIgcj1lLnJlZHVjZXI7cmV0dXJuIHQoZS5hY3Rpb25DcmVhdG9yLGZ1bmN0aW9uKHQpe3JldHVybiBuPXIodCxuKX0pLG59LGYodCxuKSl9O2Z1bmN0aW9uIGgodCxuKXt2b2lkIDA9PT1uJiYobj17ZGVwczpbXSxjdHg6dm9pZCAwLHN0YXRlOnZvaWQgMCx0eXBlczpuZXcgU2V0fSksdm9pZCAwPT09bi5jdHgmJihuLmN0eD1hKCkpO3ZhciBlPXkodCxuLGwpO3JldHVybiB2b2lkIDA9PT1zfHxPYmplY3QuaXMoZS5zdGF0ZSxuLnN0YXRlKXx8dC5lZmZlY3RzLnB1c2goZnVuY3Rpb24odCl7cmV0dXJuIHMobi5zdGF0ZSxlLnN0YXRlLHQsZS5jdHgpfSksZX1yZXR1cm4gdighKHZvaWQgMCE9PXQmJm8oZikmJmModSkmJm8oYSkmJk9iamVjdC52YWx1ZXMobikuZXZlcnkobykpLFwiYXRvbSBhcmd1bWVudHNcIiksaC5pZD11LGguaW5pdD1mdW5jdGlvbigpe3JldHVybiB4LmluaXQoaCl9LGguZ2V0U3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4geC5nZXRTdGF0ZShoKX0saC5zdWJzY3JpYmU9ZnVuY3Rpb24odCl7cmV0dXJuIHguc3Vic2NyaWJlKGgsdCl9LGh9ZnVuY3Rpb24gUyh0KXt2b2lkIDA9PT10JiYodD17fSk7dmFyIGM9bmV3IE1hcCxpPW5ldyBNYXAsdT1uZXcgV2Vha01hcCxmPW5ldyBNYXAscD1uZXcgU2V0O2Z1bmN0aW9uIHkodCxuKXt2b2lkIDA9PT1uJiYobj17fSk7dmFyIGU9RSh0KSxyPWUuZGVwcztyZXR1cm4gblt0LmlkXT1lLnN0YXRlLHIuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4hZCh0KSYmeSh0LmF0b20sbil9KSxufXZhciBnPWZ1bmN0aW9uKG4pe3ZhciBvPUFycmF5LmlzQXJyYXkobik/bjpbbl07digwPT09by5sZW5ndGh8fCExPT09by5ldmVyeShsKSxcImRpc3BhdGNoIGFyZ3VtZW50c1wiKTt2YXIgcz1uZXcgTWFwLGQ9aChvLHMsRSx0KSx5PW5ldyBBcnJheSxnPW51bGw7dHJ5e28uZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgbj10LnRhcmdldHM7cmV0dXJuIG51bGw9PW4/dm9pZCAwOm4uZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZC5wcm9jZXNzKHQpfSl9KSxvLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIG47cmV0dXJuIG51bGw9PShuPWMuZ2V0KHQudHlwZSkpP3ZvaWQgMDpuLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGQucHJvY2Vzcyh0KX0pfSkscy5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHQsbixlKXt2YXIgaT1FKHQpO2YuaGFzKHQpJiYodm9pZCAwPT09aT9uLnR5cGVzLmZvckVhY2goZnVuY3Rpb24obil7cmV0dXJuIHIoYyxuLHQpfSk6aS50eXBlcyE9PW4udHlwZXMmJihuLnR5cGVzLmZvckVhY2goZnVuY3Rpb24obil7cmV0dXJuIGkudHlwZXMuaGFzKG4pfHxyKGMsbix0KX0pLGkudHlwZXMuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gbi50eXBlcy5oYXMoZSl8fGEoYyxlLHQpfSkpKSx1LnNldCh0LG4pLE9iamVjdC5pcyhudWxsPT1pP3ZvaWQgMDppLnN0YXRlLG4uc3RhdGUpfHxlLnB1c2goW3Qsbl0pfShuLHQseSl9KX1jYXRjaCh0KXtnPXQgaW5zdGFuY2VvZiBFcnJvcj90Om5ldyBFcnJvcih0KX12YXIgbT17YWN0aW9uczpvLGVycm9yOmcscGF0Y2g6c307cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZSh0LG0pfSkseS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBuO3JldHVybiBudWxsPT0obj1mLmdldCh0WzBdKSk/dm9pZCAwOm4uZm9yRWFjaChmdW5jdGlvbihuKXtyZXR1cm4gZShuLHRbMV0uc3RhdGUpfSl9KSxvLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIG47cmV0dXJuIG51bGw9PShuPWkuZ2V0KHQudHlwZSkpP3ZvaWQgMDpuLmZvckVhY2goZnVuY3Rpb24obil7cmV0dXJuIGUobix0KX0pfSksUHJvbWlzZS5hbGxTZXR0bGVkKGQuZWZmZWN0cy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4pe3JldHVybiBuKHQoeCkpfSl9KSl9O2Z1bmN0aW9uIEUodCl7cmV0dXJuIHUuZ2V0KHQpfWZ1bmN0aW9uIG0odCl7aWYodm9pZCAwPT09dCl7dmFyIG49e307cmV0dXJuIGYuZm9yRWFjaChmdW5jdGlvbih0LGUpe3JldHVybiB5KGUsbil9KSxufXYoIXModCksJ1wiZ2V0U3RhdGVcIiBhcmd1bWVudCcpO3ZhciBlPUUodCk7cmV0dXJuIHZvaWQgMD09PWUmJihnKHt0eXBlOidpbml0IFwiJyt0LmlkKydcIiB+JytNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KSxwYXlsb2FkOm51bGwsdGFyZ2V0czpbdF19KSxlPUUodCkpLGUuc3RhdGV9ZnVuY3Rpb24gYih0LG4pe3ZhciBlPWYuZ2V0KHQpLGk9ITE7ZnVuY3Rpb24gbygpe2UuZGVsZXRlKG4pLDA9PT1lLnNpemUmJihmLmRlbGV0ZSh0KSx1LmdldCh0KS50eXBlcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe3JldHVybiBhKGMsbix0KX0pKX12b2lkIDA9PT1lJiYoaT11Lmhhcyh0KSxmLnNldCh0LGU9bmV3IFNldCkpLGUuYWRkKG4pO3RyeXtyZXR1cm4gbSh0KSxpJiZFKHQpLnR5cGVzLmZvckVhY2goZnVuY3Rpb24obil7cmV0dXJuIHIoYyxuLHQpfSksb31jYXRjaCh0KXt0aHJvdyBvKCksdH19ZnVuY3Rpb24gdyh0LG4pe3JldHVybiByKGksdC50eXBlLG4pLGZ1bmN0aW9uKCl7cmV0dXJuIGEoaSx0LnR5cGUsbil9fWZ1bmN0aW9uIFModCl7cmV0dXJuIHAuYWRkKHQpLGZ1bmN0aW9uKCl7cmV0dXJuIHAuZGVsZXRlKHQpfX12YXIgeD17ZGlzcGF0Y2g6ZyxnZXRDYWNoZTpFLGdldFN0YXRlOm0saW5pdDpmdW5jdGlvbigpe3ZhciB0PVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGIodCxuKX0pO3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHQoKX0pfX0sc3Vic2NyaWJlOmZ1bmN0aW9uKCl7dmFyIHQ9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO3JldHVybiAxPT09dC5sZW5ndGgmJm8odFswXSk/Uyh0WzBdKTpzKHRbMF0pJiZvKHRbMV0pP2IodFswXSx0WzFdKTpkKHRbMF0pJiZvKHRbMV0pP3codFswXSx0WzFdKTp2KCEwLFwic3Vic2NyaWJlIGFyZ3VtZW50c1wiKX0sX19ET19OT1RfVVNFX0lUX09SX1lPVV9XSUxMX0JFX0ZJUkVEOnthY3Rpb25zQ29tcHV0ZXJzOmMsYWN0aW9uc0xpc3RlbmVyczppLGF0b21zQ2FjaGU6dSxhdG9tc0xpc3RlbmVyczpmLHRyYW5zYWN0aW9uTGlzdGVuZXJzOnB9fTtyZXR1cm4geH12YXIgeD1TKCk7ZXhwb3J0e3QgYXMgSVNfREVWLHIgYXMgYWRkVG9TZXRzTWFwLGUgYXMgY2FsbFNhZmV0eSxTIGFzIGNyZWF0ZVN0b3JlLGggYXMgY3JlYXRlVHJhbnNhY3Rpb24sbSBhcyBkZWNsYXJlQWN0aW9uLHcgYXMgZGVjbGFyZUF0b20seCBhcyBkZWZhdWx0U3RvcmUsYSBhcyBkZWxGcm9tU2V0c01hcCx2IGFzIGludmFsaWQsbCBhcyBpc0FjdGlvbixkIGFzIGlzQWN0aW9uQ3JlYXRvcixzIGFzIGlzQXRvbSxvIGFzIGlzRnVuY3Rpb24saSBhcyBpc09iamVjdCxjIGFzIGlzU3RyaW5nLHkgYXMgbWVtbyxuIGFzIG5vb3AscCBhcyBzYWZlQWN0aW9uQ3JlYXRvcixmIGFzIHNhZmVBdG9tLHUgYXMgc2FmZUZ1bmN0aW9ufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzLmpzLm1hcFxuIiwiaW1wb3J0e2RlZmF1bHRTdG9yZSBhcyB0LGlzQWN0aW9uQ3JlYXRvciBhcyBlfWZyb21cIkByZWF0b20vY29yZVwiO2ltcG9ydCByIGZyb21cInJlYWN0XCI7aW1wb3J0IG4gZnJvbVwicmVhY3QtZG9tXCI7aW1wb3J0e3VzZVN1YnNjcmlwdGlvbiBhcyBvfWZyb21cInVzZS1zdWJzY3JpcHRpb25cIjt2YXIgdT1yLmNyZWF0ZUNvbnRleHQodCk7ZnVuY3Rpb24gYyh0LGUpe3JldHVybiBmdW5jdGlvbihyKXt2YXIgbz1lKHIpO28mJm4udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoZnVuY3Rpb24oKXt0LmRpc3BhdGNoKG8pfSl9fWZ1bmN0aW9uIGkodCxlKXt2b2lkIDA9PT1lJiYoZT1bXSk7dmFyIG49ci51c2VDb250ZXh0KHUpO3JldHVybiByLnVzZUNhbGxiYWNrKGMobix0KSxlLmNvbmNhdChuKSl9ZnVuY3Rpb24gYSh0LG4pe3ZvaWQgMD09PW4mJihuPVtdKTt2YXIgaT1yLnVzZUNvbnRleHQodSksYT1yLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm5be2dldEN1cnJlbnRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBpLmdldFN0YXRlKHQpfSxzdWJzY3JpYmU6ZnVuY3Rpb24oZSl7cmV0dXJuIGkuc3Vic2NyaWJlKHQsZSl9fSxPYmplY3QuZW50cmllcyh0KS5yZWR1Y2UoZnVuY3Rpb24odCxyKXt2YXIgbj1yWzBdLG89clsxXTtyZXR1cm4gZShvKSYmKHRbbl09YyhpLG8pKSx0fSx7fSldfSxuLmNvbmNhdChbdCxpXSkpO3JldHVybltvKGFbMF0pLGFbMV1dfWZ1bmN0aW9uIGYodCxlKXt2b2lkIDA9PT1lJiYoZT1bXSk7dmFyIG49ci51c2VDb250ZXh0KHUpO3IudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIG4uaW5pdC5hcHBseShuLHQpfSxlKX1leHBvcnR7dSBhcyByZWF0b21Db250ZXh0LGkgYXMgdXNlQWN0aW9uLGEgYXMgdXNlQXRvbSxmIGFzIHVzZUluaXR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iLCJleHBvcnQgY29uc3QgQ09MT1JGVUxfRU1PSklTX09SREVSRURfTElTVCA9IFtcbiAgICAn8J+YuicsJ/CfmLgnLCfwn5i5Jywn8J+YuycsJ/CfmLwnLCfwn5i9Jywn8J+ZgCcsJ/CfmL8nLCfwn5i+Jywn8J+ZiCcsJ/CfmYknLCfwn6adJywn8J+QtScsJ/CfkJInLCfwn6aNJywn8J+QticsJ/CfkJUnLCfwn5CpJywn8J+QuicsJ/CfpoonLCfwn5CxJywn8J+QiCcsJ/CfpoEnLCfwn5CvJyxcbiAgICAn8J+QhScsJ/CfkIYnLCfwn5C0Jywn8J+QjicsJ/CfpoQnLCfwn6aTJywn8J+mjCcsJ/CfkK4nLCfwn5CCJywn8J+mmScsJ/CfkIMnLCfwn5CEJywn8J+QtycsJ/CfppsnLCfwn5CWJywn8J+QlycsJ/CfkL0nLCfwn5CPJywn8J+QkScsJ/CfkJAnLCfwn5CqJywn8J+QqycsJ/CfppInLCfwn5CYJyxcbiAgICAn8J+mjycsJ/CfkK0nLCfwn5CBJywn8J+QgCcsJ/CfppgnLCfwn5C5Jywn8J+moScsJ/CfkLAnLCfwn5CHJywn8J+QvycsJ/CfppQnLCfwn6aHJywn8J+QuycsJ/CfkKgnLCfwn5C8Jywn8J+QvicsJ/CfpoMnLCfwn5CUJywn8J+moicsJ/CfkJMnLCfwn5CjJywn8J+QpCcsJ/CfpponLCfwn5ClJyxcbiAgICAn8J+QpicsJ/CfppwnLCfwn5CnJywn8J+ViicsJ/CfpoUnLCfwn6aGJywn8J+miScsJ/CfkLgnLCfwn5CKJywn8J+QoicsJ/Cfpo4nLCfwn5CNJywn8J+QsicsJ/CfkIknLCfwn6aVJywn8J+mlicsJ/CfkLMnLCfwn5CLJywn8J+QrCcsJ/CfkJ8nLCfwn5CgJywn8J+QoScsJ/CfpognLCfwn5CZJyxcbiAgICAn8J+QmicsJ/CfpoAnLCfwn6afJywn8J+mkCcsJ/CfpqAnLCfwn6aRJywn8J+QjCcsJ/CfposnLCfwn5CbJywn8J+QnCcsJ/CfkJ0nLCfwn5CeJywn8J+mlycsJ/CflbcnLCfwn5W4JywgJ/CfpoInLCfwn6aeJywn8J+MuCcsJ/Cfkq4nLCfwn4+1Jywn8J+MuScsJ/CfpYAnLCfwn4y6Jywn8J+MuycsXG4gICAgJ/CfjLwnLCfwn4y3Jywn8J+MsScsJ/CfjLInLCfwn4yzJywn8J+MtCcsJ/CfjLUnLCfwn4y+Jywn8J+MvycsJ+KYmCcsJ/CfjYAnLCfwn42BJywn8J+NgicsJ/CfjYMnLCfwn42EJywn8J+ShScsJ/CfkZMnLCfwn5W2Jywn8J+RlCcsJ/CfkZUnLCfwn5GWJywn8J+noycsJ/Cfp6QnLCfwn6elJyxcbiAgICAn8J+npicsJ/CfkZcnLCfwn5GYJywn8J+RmScsJ/CfkZonLCfwn5GbJywn8J+RnCcsJ/CfkZ0nLCfwn5uNJywn8J+OkicsJ/CfkZ4nLCfwn5GfJywn8J+RoCcsJ/CfkaEnLCfwn5GiJywn8J+RkScsJ/CfkZInLCfwn46pJywn8J+OkycsJ/Cfp6InLCfim5EnLCfwn5O/Jywn8J+ShCcsJ/CfjIInLFxuICAgICfimIInLCfwn469Jywn8J+lvScsJ/CfpbwnLCfwn6W+Jywn8J+lvycsJ/Cfp7onLCfwn5qCJywn8J+agycsJ/CfmoQnLCfwn5qFJywn8J+ahicsJ/CfmocnLCfwn5qIJywn8J+aiScsJ/CfmoonLCfwn5qdJywn8J+anicsJ/CfmosnLCfwn5qMJywn8J+ajScsJ/Cfmo4nLCfwn5qQJywn8J+akScsXG4gICAgJ/CfmpInLCfwn5qTJywn8J+alCcsJ/CfmpUnLCfwn5qWJywn8J+alycsJ/CfmpgnLCfwn5qZJywn8J+amicsJ/CfmpsnLCfwn5qcJywn8J+asicsJ/Cfm7QnLCfwn5u1Jywn8J+ajycsJ/Cfm6MnLCfwn5ukJywn4pu1Jywn8J+bticsJ/CfmqQnLCfwn5uzJywn4pu0Jywn8J+bpScsJ/CfmqInLFxuICAgICfinIgnLCfwn5upJywn8J+bqycsJ/Cfm6wnLCfwn5qBJywn8J+anycsJ/CfmqAnLCfwn5qhJywn8J+bsCcsJ/CfmoAnLCfwn5u4Jywn8J+MjScsJ/CfjI4nLCfwn4yPJywn8J+MkCcsJ/Cfl7onLCfwn5e+Jywn8J+PlCcsJ+KbsCcsJ/Cfl7snLCfwn4+VJywn8J+PlicsJ/Cfj5wnLCfwn4+dJyxcbiAgICAn8J+PnicsJ/Cfj58nLCfwn4+bJywn8J+PlycsJ/Cfj5gnLCfwn4+aJywn8J+PoCcsJ/Cfj6EnLCfwn4+iJywn8J+PoycsJ/Cfj6QnLCfwn4+lJywn8J+PpicsJ/Cfj6gnLCfwn4+pJywn8J+PqicsJ/Cfj6snLCfwn4+sJywn8J+PrScsJ/Cfj68nLCfwn4+wJywn8J+XvCcsJ/Cfl70nLCfim6onLFxuICAgICfwn5WMJywn8J+VjScsJ+KbqScsJ/CflYsnLCfim7InLCfim7onLCfwn4+ZJywn8J+OoCcsJ/CfjqEnLCfwn46iJywn8J+OqicsJ+KbsycsJ/Cfl78nLCfwn5KmJywn8J+MiycsJ/CfjIEnLCfwn4yDJywn8J+MhCcsJ/CfjIUnLCfwn4yGJywn8J+MhycsJ/CfjIknLCfwn4yMJywn8J+MkScsXG4gICAgJ/CfjJInLCfwn4yTJywn8J+MlCcsJ/CfjJUnLCfwn4yWJywn8J+MlycsJ/CfjJgnLCfwn4yZJywn8J+MmicsJ/CfjJsnLCfwn4ycJywn8J+MoScsJ+KYgCcsJ/CfjJ0nLCfwn4yeJywn8J+MnycsJ/CfjKAnLCfim4UnLCfim4gnLCfwn4ykJywn8J+MpScsJ/CfjKYnLCfwn4ynJywn8J+MqCcsXG4gICAgJ/CfjKknLCfwn4yqJywn8J+MqycsJ/CfjKwnLCfwn4yAJywn8J+MiCcsJ+KbhCcsJ/CfkqcnLCfwn4yKJywn8J+OkScsXG5dO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRU1PSkkgPSAn8J+Ukic7XG5cbmV4cG9ydCBjb25zdCBTQUxURURfUEFTU1dPUkRfREVGQVVMVF9MRU5HVEggPSAyMDtcbmV4cG9ydCBjb25zdCBTQUxURURfUEFTU1dPUkRfTUlOX0xFTkdUSCA9IDEwO1xuZXhwb3J0IGNvbnN0IFNBTFRFRF9QQVNTV09SRF9NQVhfTEVOR1RIID0gNDA7XG5cbmV4cG9ydCBjb25zdCBTRVNTSU9OX1RJTUVfVE9fVEVSTUlOQVRFID0gNjAgKiAzICogMTAwMDtcbiIsImltcG9ydCB7ZGVjbGFyZUF0b20gYXMgYXRvbX0gZnJvbSAnQHJlYXRvbS9jb3JlJztcblxuZXhwb3J0IHR5cGUgQ29udGV4dCA9IFJlYWRvbmx5PHtcbiAgICByb290Q29udGFpbmVySWQ6IHN0cmluZyxcbiAgICByb3V0ZXM6IFJlY29yZDxzdHJpbmcsIHtcbiAgICAgICAgcGFnZUxvY2FsUGF0aDogc3RyaW5nLFxuICAgIH0+LFxuICAgIHBhdGhzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgIHJlcG9MaW5rOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBhcHBWZXJzaW9uOiBzdHJpbmcsXG59PjtcblxuZXhwb3J0IGNvbnN0IHJhd0NvbnRleHQgPSBwcm9jZXNzLmVudi5DT05URVhUIGFzIHVua25vd24gYXMgQ29udGV4dDtcbmV4cG9ydCBjb25zdCBjb250ZXh0ID0gYXRvbShyYXdDb250ZXh0KTtcbiIsImltcG9ydCAqIGFzIGJyb3dzZXJDb3B5IGZyb20gJ2NvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCB7dXNlQXRvbX0gZnJvbSAnQHJlYXRvbS9yZWFjdCc7XG5pbXBvcnQge0pTWH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uLy4uL3VpL0J1dHRvbic7XG5pbXBvcnQge3NhbHRlZFBhc3N3b3JkfSBmcm9tICcuLi9HZW5lcmF0ZWRQYXNzd29yZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb3B5U2FsdGVkUGFzc3dvcmRCdXR0b24gKCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBbc2FsdGVkUGFzc3dvcmRWYWx1ZV0gPSB1c2VBdG9tKHNhbHRlZFBhc3N3b3JkKTtcblxuICAgIGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9ICgpID0+IHtcbiAgICAgICAgYnJvd3NlckNvcHkoc2FsdGVkUGFzc3dvcmRWYWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBzYWx0ZWRQYXNzd29yZFZhbHVlICE9PSAnJ1xuICAgICAgICA/IChcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImFjdGlvblwiIHRhYkluZGV4PXsxfSBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PlxuICAgICAgICAgICAgICAgIENvcHkgU2FsdGVkIFBhc3N3b3JkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKVxuICAgICAgICA6IChcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImFjdGlvblwiIHRhYkluZGV4PXsxfSBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICBTYWx0IHRoZSBwYXNzIVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIClcbiAgICA7XG59XG4iLCJpbXBvcnQge21lbW99IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5cbmltcG9ydCB7Q09MT1JGVUxfRU1PSklTX09SREVSRURfTElTVH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7RnJhbWV9IGZyb20gJy4uLy4uL3VpL2xheW91dC9GcmFtZSc7XG5pbXBvcnQge1RleHR9IGZyb20gJy4uLy4uL3VpL1RleHQnO1xuaW1wb3J0IHtjaG9pY2V9IGZyb20gJy4uLy4uL3V0aWxzL3JhbmRvbSc7XG5pbXBvcnQge3RpbWVzfSBmcm9tICcuLi8uLi91dGlscy9zeW50YXgnO1xuXG5jb25zdCBkeW5hbWljQmFja2dyb3VuZFN0eWxlcyA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBhbmltYXRpb25OYW1lOiBzdHlsZTkua2V5ZnJhbWVzKHtcbiAgICAgICAgICAgIGZyb206IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZykgdHJhbnNsYXRlKDApJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpIHRyYW5zbGF0ZSgwKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEwMHMnLFxuICAgICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGNlbnRlcicsXG4gICAgfSxcbiAgICBlbW9qaToge1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICBhbmltYXRpb25OYW1lOiBzdHlsZTkua2V5ZnJhbWVzKHtcbiAgICAgICAgICAgIGZyb206IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKSB0cmFuc2xhdGUoMCknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgwKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEwMHMnLFxuICAgICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGNlbnRlcicsXG4gICAgfSxcbn0pO1xuXG5jb25zdCBTVEFSVCA9IDEwO1xuY29uc3QgRU5EID0gMzI7XG5jb25zdCBPRkZfVEhFX1JPT1QgPSAxMDtcblxuZXhwb3J0IGNvbnN0IER5bmFtaWNCYWNrZ3JvdW5kID0gbWVtbyhmdW5jdGlvbiBEeW5hbWljQmFja2dyb3VuZCgpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYW1lXG4gICAgICAgICAgICBkZWY9XCJkeW5hbWljLWJhY2tncm91bmRcIlxuICAgICAgICAgICAgc3R5bGVzPXtbZHluYW1pY0JhY2tncm91bmRTdHlsZXMucm9vdF19XG4gICAgICAgID5cbiAgICAgICAgICAgIHt0aW1lcyg0MCwgaW5kZXggPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUVtb2ppID0gY2hvaWNlKENPTE9SRlVMX0VNT0pJU19PUkRFUkVEX0xJU1QpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAgKyBPRkZfVEhFX1JPT1QgKiAyKSAtIE9GRl9USEVfUk9PVCk7XG4gICAgICAgICAgICAgICAgY29uc3QgWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAgKyBPRkZfVEhFX1JPT1QgKiAyKSAtIE9GRl9USEVfUk9PVCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IFNUQVJUICsgKGluZGV4ICogTWF0aC5mbG9vcigoRU5EIC0gU1RBUlQpIC8gaW5kZXgpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e1tkeW5hbWljQmFja2dyb3VuZFN0eWxlcy5lbW9qaV19XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHtZfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGAke1h9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHtZfSUpIHRyYW5zbGF0ZVgoLSR7WH0lKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZj1cImZsb2F0aW5nLWVtb2ppXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JhbmRvbUVtb2ppfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0ZyYW1lPlxuICAgICk7XG59KTtcbiIsIi8vIEFuIG9yZGVyIGlzIHZlcnkgaW1wb3J0YW50LCByZXBsYWNlIHdpc2VseSFcbmltcG9ydCB7ZGVjbGFyZUF0b20gYXMgYXRvbX0gZnJvbSAnQHJlYXRvbS9jb3JlJztcbmltcG9ydCB7Q09MT1JGVUxfRU1PSklTX09SREVSRURfTElTVCwgREVGQVVMVF9FTU9KSX0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7c3RyaW5nVG9OdW1iZXJ9IGZyb20gJy4uLy4uL3V0aWxzL2NyeXB0byc7XG5pbXBvcnQge2V4dHJhY3RIb3N0fSBmcm9tICcuLi8uLi91dGlscy91cmwnO1xuaW1wb3J0IHtkb21haW5OYW1lLCBlbWFpbCwgbWFzdGVyUGFzc3dvcmR9IGZyb20gJy4uL1Bhc3N3b3JkU2FsdGluZyc7XG5cbmNvbnN0IHBpY2tFbW9qaSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBzdHJpbmdUb051bWJlcih2YWx1ZSkgJSBDT0xPUkZVTF9FTU9KSVNfT1JERVJFRF9MSVNULmxlbmd0aDtcblxuICAgIHJldHVybiBDT0xPUkZVTF9FTU9KSVNfT1JERVJFRF9MSVNUW2luZGV4XTtcbn07XG5cbmNvbnN0IFNBTFRfU0hJRlQgPSAnc2hpZnQnO1xuZXhwb3J0IGNvbnN0IGVtb2ppUHJvbXB0ID0gYXRvbShcbiAgICAoJCk6IFtzdHJpbmcsIHN0cmluZywgc3RyaW5nXSA9PiB7XG4gICAgICAgIGlmICgkKG1hc3RlclBhc3N3b3JkKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgREVGQVVMVF9FTU9KSSxcbiAgICAgICAgICAgICAgICBERUZBVUxUX0VNT0pJLFxuICAgICAgICAgICAgICAgIERFRkFVTFRfRU1PSkksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkKGRvbWFpbk5hbWUpID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBwaWNrRW1vamkoJChtYXN0ZXJQYXNzd29yZCkpLFxuICAgICAgICAgICAgICAgIERFRkFVTFRfRU1PSkksXG4gICAgICAgICAgICAgICAgREVGQVVMVF9FTU9KSSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgcGlja0Vtb2ppKCQobWFzdGVyUGFzc3dvcmQpKSxcbiAgICAgICAgICAgIHBpY2tFbW9qaShleHRyYWN0SG9zdCgkKGRvbWFpbk5hbWUpKSArICQoZW1haWwpKSxcbiAgICAgICAgICAgIHBpY2tFbW9qaShleHRyYWN0SG9zdCgkKGRvbWFpbk5hbWUpKSArICQoZW1haWwpICsgU0FMVF9TSElGVCksXG4gICAgICAgIF07XG4gICAgfVxuKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29udGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuIiwiaW1wb3J0IHt1c2VBdG9tfSBmcm9tICdAcmVhdG9tL3JlYWN0JztcbmltcG9ydCB7SlNYfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHN0eWxlOSBmcm9tICdzdHlsZTknO1xuXG5pbXBvcnQge2Vtb2ppUHJvbXB0fSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHtUZXh0fSBmcm9tICcuLi8uLi91aS9UZXh0JztcblxuY29uc3QgZW1vamlQcm9tcHRTdHlsZXMgPSBzdHlsZTkuY3JlYXRlKHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAxMCxcbiAgICAgICAgZm9udFNpemU6IDQwLFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVtb2ppUHJvbXB0KCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBbZW1vamlQcm9tcHRWYWx1ZV0gPSB1c2VBdG9tKGVtb2ppUHJvbXB0KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dFxuICAgICAgICAgICAgc3R5bGVzPXtbZW1vamlQcm9tcHRTdHlsZXMuZGVmYXVsdHNdfVxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgZGVmPVwiZW1vamktcHJvbXB0XCJcbiAgICAgICAgPlxuICAgICAgICAgICAge2Vtb2ppUHJvbXB0VmFsdWUuam9pbignICcpfVxuICAgICAgICA8L1RleHQ+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7ZGVjbGFyZUF0b20gYXMgYXRvbX0gZnJvbSAnQHJlYXRvbS9jb3JlJztcbmltcG9ydCB7c2FsdFRoZVBhc3N9IGZyb20gJy4uLy4uL3NhbHRpbmcnO1xuaW1wb3J0IHtkb21haW5OYW1lLCBlbWFpbCwgbWFzdGVyUGFzc3dvcmR9IGZyb20gJy4uL1Bhc3N3b3JkU2FsdGluZyc7XG5pbXBvcnQge3NhbHRlZFBhc3N3b3JkTGVuZ3RofSBmcm9tICcuLi9TYWx0ZWRQYXNzd29yZExlbmd0aCc7XG5pbXBvcnQge2hhc2hGdW5jdGlvbn0gZnJvbSAnLi4vU2VsZWN0SGFzaEZ1bmN0aW9uJztcblxuZXhwb3J0IGNvbnN0IHNhbHRlZFBhc3N3b3JkID0gYXRvbShcbiAgICAkID0+IHNhbHRUaGVQYXNzKCQoaGFzaEZ1bmN0aW9uKSwgJChzYWx0ZWRQYXNzd29yZExlbmd0aCksICQobWFzdGVyUGFzc3dvcmQpLCAkKGRvbWFpbk5hbWUpLCAkKGVtYWlsKSlcbik7XG5cbmV4cG9ydCBjb25zdCBzaG93U2FsdGVkUGFzc3dvcmQgPSBhdG9tKFxuICAgICgkLCBzdGF0ZSA9IGZhbHNlKSA9PiB7XG4gICAgICAgICQoc2FsdGVkUGFzc3dvcmQsICgpID0+IChzdGF0ZSA9IGZhbHNlKSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG4gICAge1xuICAgICAgICB0b2dnbGU6IChfOiB2b2lkLCBzdGF0ZSkgPT4gIXN0YXRlLFxuICAgIH1cbik7XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcbiIsImltcG9ydCB7dXNlQXRvbX0gZnJvbSAnQHJlYXRvbS9yZWFjdCc7XG5pbXBvcnQge0NvbXBvbmVudFByb3BzLCBKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5cbmltcG9ydCB7RnJhbWV9IGZyb20gJy4uLy4uL3VpL2xheW91dC9GcmFtZSc7XG5pbXBvcnQge1Nwb2lsZXJ9IGZyb20gJy4uLy4uL3VpL1Nwb2lsZXInO1xuaW1wb3J0IHtUZXh0fSBmcm9tICcuLi8uLi91aS9UZXh0JztcbmltcG9ydCB7c2FsdGVkUGFzc3dvcmQsIHNob3dTYWx0ZWRQYXNzd29yZH0gZnJvbSAnLi9jb250ZXh0JztcblxuY29uc3QgZ2VuZXJhdGVkUGFzc3dvcmRTdHlsZXMgPSBzdHlsZTkuY3JlYXRlKHtcbiAgICBzcG9pbGVyOiB7XG4gICAgICAgIGhlaWdodDogNDgsXG4gICAgfSxcbiAgICB2YWx1ZVdyYXBwZXI6IHtcbiAgICAgICAgcGFkZGluZzogJzJweCcsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVkUGFzc3dvcmQocHJvcHM6IFBhcnRpYWw8Q29tcG9uZW50UHJvcHM8dHlwZW9mIFNwb2lsZXI+Pik6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBbc2FsdGVkUGFzc3dvcmRWYWx1ZV0gPSB1c2VBdG9tKHNhbHRlZFBhc3N3b3JkKTtcbiAgICBjb25zdCBbc2hvd1NhbHRlZFBhc3N3b3JkVmFsdWUsIHt0b2dnbGV9XSA9IHVzZUF0b20oc2hvd1NhbHRlZFBhc3N3b3JkKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTcG9pbGVyXG4gICAgICAgICAgICBzdW1tYXJ5PVwi8J+ZiCBTaG93IGdlbmVyYXRlZCBwYXNzd29yZFwiXG4gICAgICAgICAgICBzdW1tYXJ5T2ZmPVwi8J+ZiiBIaWRlIGdlbmVyYXRlZCBwYXNzd29yZFwiXG4gICAgICAgICAgICBzdHlsZXM9e1tnZW5lcmF0ZWRQYXNzd29yZFN0eWxlcy5zcG9pbGVyXX1cbiAgICAgICAgICAgIG9wZW49e3Nob3dTYWx0ZWRQYXNzd29yZFZhbHVlfVxuICAgICAgICAgICAgdGFiSW5kZXg9ezJ9XG4gICAgICAgICAgICBvblRvZ2dsZT17dG9nZ2xlfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8RnJhbWUgc3R5bGVzPXtbZ2VuZXJhdGVkUGFzc3dvcmRTdHlsZXMudmFsdWVXcmFwcGVyXX0+XG4gICAgICAgICAgICAgICAgPFRleHQgZmFtaWx5PVwibW9ub3NwYWNlXCIgYWxpZ249XCJjZW50ZXJcIj57c2FsdGVkUGFzc3dvcmRWYWx1ZSB8fCAnPCBlbXB0eSA+J308L1RleHQ+XG4gICAgICAgICAgICA8L0ZyYW1lPlxuICAgICAgICA8L1Nwb2lsZXI+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7ZGVjbGFyZUF0b20gYXMgYXRvbX0gZnJvbSAnQHJlYXRvbS9jb3JlJztcblxuY29uc3Qgc2NhbGFyQ2hhbmdlID0gKG5ld1ZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4gbmV3VmFsdWU7XG5leHBvcnQgY29uc3QgbWFzdGVyUGFzc3dvcmQgPSBhdG9tKCcnLCB7Y2hhbmdlOiBzY2FsYXJDaGFuZ2V9KTtcbmV4cG9ydCBjb25zdCBkb21haW5OYW1lID0gYXRvbSgnJywge2NoYW5nZTogc2NhbGFyQ2hhbmdlfSk7XG5leHBvcnQgY29uc3QgZW1haWwgPSBhdG9tKCcnLCB7Y2hhbmdlOiBzY2FsYXJDaGFuZ2V9KTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29udGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuIiwiaW1wb3J0IHt1c2VBdG9tfSBmcm9tICdAcmVhdG9tL3JlYWN0JztcbmltcG9ydCB7SlNYfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQge0ZyYW1lfSBmcm9tICcuLi8uLi91aS9sYXlvdXQvRnJhbWUnO1xuaW1wb3J0IHtUZXh0RmllbGR9IGZyb20gJy4uLy4uL3VpL1RleHRGaWVsZCc7XG5pbXBvcnQge2RvbWFpbk5hbWUsIGVtYWlsLCBtYXN0ZXJQYXNzd29yZH0gZnJvbSAnLi9jb250ZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIFBhc3N3b3JkU2FsdGluZygpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW21hc3RlclBhc3N3b3JkVmFsdWUsIHtjaGFuZ2U6IG9uQ2hhbmdlTWFzdGVyUGFzc3dvcmR9XSA9IHVzZUF0b20obWFzdGVyUGFzc3dvcmQpO1xuICAgIGNvbnN0IFtkb21haW5OYW1lVmFsdWUsIHtjaGFuZ2U6IG9uQ2hhbmdlRG9tYWluTmFtZX1dID0gdXNlQXRvbShkb21haW5OYW1lKTtcbiAgICBjb25zdCBbZW1haWxWYWx1ZSwge2NoYW5nZTogb25DaGFuZ2VFbWFpbH1dID0gdXNlQXRvbShlbWFpbCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhbWUgZ2FwPXs2fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1cGVyLVNlY3JldCBNYXN0ZXIgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e21hc3RlclBhc3N3b3JkVmFsdWV9XG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTWFzdGVyUGFzc3dvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRG9tYWluIE5hbWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtkb21haW5OYW1lVmFsdWV9XG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRG9tYWluTmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsVmFsdWV9XG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0ZyYW1lPlxuICAgICk7XG59XG4iLCJpbXBvcnQge0pTWH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ0ByZWF0b20vY29yZSc7XG5pbXBvcnQge3JlYXRvbUNvbnRleHR9IGZyb20gJ0ByZWF0b20vcmVhY3QnO1xuaW1wb3J0IHN0eWxlOSBmcm9tICdzdHlsZTknO1xuXG5pbXBvcnQge2NvbnRleHR9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuaW1wb3J0IHtvdmVycmlkZUZyYW1lfSBmcm9tICcuLi8uLi91aS9sYXlvdXQvRnJhbWUnO1xuaW1wb3J0IHtTdG9yZUxvY2FsbHlDb25uZWN0b3J9IGZyb20gJy4uL1N0b3JlTG9jYWxseSc7XG5pbXBvcnQge1Jlc2V0U3R5bGVzfSBmcm9tICcuLi9TdHlsZXNSZXNldCc7XG5pbXBvcnQge1RoZW1lUHJvdmlkZXJ9IGZyb20gJy4uL1RoZW1pbmcnO1xuXG5jb25zdCBlYXNlbFN0eWxlcyA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tcm9vdC1iZyknLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICAgICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgxMnB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyknOiB7XG4gICAgICAgICAgICBtaW5IZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5jb25zdCBFYXNlbCA9IG92ZXJyaWRlRnJhbWUoe3N0eWxlczogW2Vhc2VsU3R5bGVzLmRlZmF1bHRzXSwgZGVmOiAnZWFzZWwnfSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgQ29udGVudDogKCkgPT4gSlNYLkVsZW1lbnQsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUm9vdCh7XG4gICAgQ29udGVudCxcbn06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoKTtcbiAgICBzdG9yZS5pbml0KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlc2V0U3R5bGVzPlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICA8RWFzZWw+XG4gICAgICAgICAgICAgICAgICAgIDxyZWF0b21Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0b3JlTG9jYWxseUNvbm5lY3RvciAvPlxuICAgICAgICAgICAgICAgICAgICA8L3JlYXRvbUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9FYXNlbD5cbiAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgPC9SZXNldFN0eWxlcz5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtkZWNsYXJlQXRvbSBhcyBhdG9tfSBmcm9tICdAcmVhdG9tL2NvcmUnO1xuaW1wb3J0IHtTQUxURURfUEFTU1dPUkRfREVGQVVMVF9MRU5HVEgsIFNBTFRFRF9QQVNTV09SRF9NQVhfTEVOR1RILCBTQUxURURfUEFTU1dPUkRfTUlOX0xFTkdUSH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7cmVzdG9yZUxvY2FsbHl9IGZyb20gJy4uL1N0b3JlTG9jYWxseSc7XG5cbmV4cG9ydCBjb25zdCBzYWx0ZWRQYXNzd29yZExlbmd0aCA9IGF0b20oXG4gICAgcmVzdG9yZUxvY2FsbHk8bnVtYmVyPignc2FsdGVkUGFzc3dvcmRMZW5ndGgnKSA/PyBTQUxURURfUEFTU1dPUkRfREVGQVVMVF9MRU5HVEgsXG4gICAge1xuICAgICAgICBjaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPiBTQUxURURfUEFTU1dPUkRfTUFYX0xFTkdUSCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTQUxURURfUEFTU1dPUkRfTUFYX0xFTkdUSDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgU0FMVEVEX1BBU1NXT1JEX01JTl9MRU5HVEgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU0FMVEVEX1BBU1NXT1JEX01JTl9MRU5HVEg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcbiIsImltcG9ydCB7SlNYfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHt1c2VBdG9tfSBmcm9tICdAcmVhdG9tL3JlYWN0JztcblxuaW1wb3J0IHtTQUxURURfUEFTU1dPUkRfTUFYX0xFTkdUSCwgU0FMVEVEX1BBU1NXT1JEX01JTl9MRU5HVEh9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge0xhYmVsfSBmcm9tICcuLi8uLi91aS9MYWJlbCc7XG5pbXBvcnQge09wdGlvbiwgU2VsZWN0fSBmcm9tICcuLi8uLi91aS9TZWxlY3QnO1xuaW1wb3J0IHtyYW5nZX0gZnJvbSAnLi4vLi4vdXRpbHMvc3ludGF4JztcbmltcG9ydCB7c2FsdGVkUGFzc3dvcmRMZW5ndGh9IGZyb20gJy4vY29udGV4dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTYWx0ZWRQYXNzd29yZExlbmd0aCgpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW3NhbHRlZFBhc3N3b3JkTGVuZ3RoVmFsdWUsIHtjaGFuZ2V9XSA9IHVzZUF0b20oc2FsdGVkUGFzc3dvcmRMZW5ndGgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExhYmVsIGxhYmVsPVwiTGVuZ3RoOlwiPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHZhbHVlPXtzYWx0ZWRQYXNzd29yZExlbmd0aFZhbHVlfVxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXszfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3JhbmdlKFNBTFRFRF9QQVNTV09SRF9NSU5fTEVOR1RILCBTQUxURURfUEFTU1dPUkRfTUFYX0xFTkdUSCsxLCA1KS5tYXAobGVuZ3RoID0+IChcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17bGVuZ3RofSBrZXk9e2xlbmd0aH0+e2xlbmd0aH08L09wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L0xhYmVsPlxuICAgICk7XG59XG4iLCJpbXBvcnQge2RlY2xhcmVBdG9tIGFzIGF0b219IGZyb20gJ0ByZWF0b20vY29yZSc7XG5pbXBvcnQge1NBTFRFRF9QQVNTV09SRF9ERUZBVUxUX0xFTkdUSH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7REVGQVVMVF9IQVNIX0ZVTkNUSU9OX05BTUUsIEhBU0hfRlVOQ1RJT05TfSBmcm9tICcuLi8uLi9zYWx0aW5nJztcbmltcG9ydCB7cmVzdG9yZUxvY2FsbHl9IGZyb20gJy4uL1N0b3JlTG9jYWxseSc7XG5cbmV4cG9ydCBjb25zdCBoYXNoRnVuY3Rpb25OYW1lID0gYXRvbShcbiAgICByZXN0b3JlTG9jYWxseTxudW1iZXI+KCdoYXNoRnVuY3Rpb25OYW1lJykgPz8gREVGQVVMVF9IQVNIX0ZVTkNUSU9OX05BTUUsXG4gICAge2NoYW5nZTogeCA9PiB4fVxuKTtcbmV4cG9ydCBjb25zdCBoYXNoRnVuY3Rpb24gPSBhdG9tKCQgPT4gSEFTSF9GVU5DVElPTlNbJChoYXNoRnVuY3Rpb25OYW1lKV0pO1xuXG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcbiIsImltcG9ydCB7SlNYfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHt1c2VBdG9tfSBmcm9tICdAcmVhdG9tL3JlYWN0JztcbmltcG9ydCB7SEFTSF9GVU5DVElPTlN9IGZyb20gJy4uLy4uL3NhbHRpbmcnO1xuaW1wb3J0IHtMYWJlbH0gZnJvbSAnLi4vLi4vdWkvTGFiZWwnO1xuaW1wb3J0IHtPcHRpb24sIFNlbGVjdH0gZnJvbSAnLi4vLi4vdWkvU2VsZWN0JztcbmltcG9ydCB7a2V5c09mfSBmcm9tICcuLi8uLi91dGlscy9zeW50YXgnO1xuaW1wb3J0IHtoYXNoRnVuY3Rpb25OYW1lfSBmcm9tICcuL2NvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0SGFzaEZ1bmN0aW9uKCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBbaGFzaEZ1bmN0aW9uTmFtZVZhbHVlLCB7Y2hhbmdlOiBvblNlbGVjdH1dID0gdXNlQXRvbShoYXNoRnVuY3Rpb25OYW1lKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYWJlbCBsYWJlbD1cIkhhc2ggZnVuY3Rpb246XCI+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgdmFsdWU9e2hhc2hGdW5jdGlvbk5hbWVWYWx1ZX1cbiAgICAgICAgICAgICAgICB0YWJJbmRleD17M31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3R9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2tleXNPZihIQVNIX0ZVTkNUSU9OUykubWFwKGhhc2hGdW5jdGlvbk5hbWUgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aGFzaEZ1bmN0aW9uTmFtZX0gdmFsdWU9e2hhc2hGdW5jdGlvbk5hbWV9PntoYXNoRnVuY3Rpb25OYW1lfTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvTGFiZWw+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7ZGVjbGFyZUF0b20gYXMgYXRvbSwgU3RvcmV9IGZyb20gJ0ByZWF0b20vY29yZSc7XG5pbXBvcnQge1NFU1NJT05fVElNRV9UT19URVJNSU5BVEV9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tICcuLi8uLi91dGlscy9oaWdoLW9yZGVyJztcbmltcG9ydCB7c2FsdGVkUGFzc3dvcmR9IGZyb20gJy4uL0dlbmVyYXRlZFBhc3N3b3JkJztcbmltcG9ydCB7ZG9tYWluTmFtZSwgZW1haWwsIG1hc3RlclBhc3N3b3JkfSBmcm9tICcuLi9QYXNzd29yZFNhbHRpbmcnO1xuXG5leHBvcnQgY29uc3QgdGVybWluYXRpb25UaW1lTGVmdCA9IGF0b20oXG4gICAgKCQsIHN0YXRlID0gMCkgPT4ge1xuICAgICAgICAkKHNhbHRlZFBhc3N3b3JkLCAoY3VycmVudFNhbHRlZFBhc3N3b3JkKSA9PiAoc3RvcmUsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTYWx0ZWRQYXNzd29yZCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh0ZXJtaW5hdGlvblRpbWVMZWZ0LnJlc2V0KCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHgudGVybWluYXRlKHN0b3JlKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh0ZXJtaW5hdGlvblRpbWVMZWZ0LmZpbGwoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHguaW50ZXJ2YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY3R4LmludGVydmFsKTtcbiAgICAgICAgICAgICAgICBjdHguaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHguaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2godGVybWluYXRpb25UaW1lTGVmdC5kZWMoKSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG4gICAge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIHJlc2V0OiAoXzogdm9pZCkgPT4gMCxcbiAgICAgICAgZGVjOiAoXzogdm9pZCwgY3VycmVudCkgPT4gTWF0aC5tYXgoY3VycmVudCAtIDEwMDAsIDApLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGZpbGw6IChfOiB2b2lkKSA9PiBTRVNTSU9OX1RJTUVfVE9fVEVSTUlOQVRFLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjcmVhdGVDdHg6ICgpID0+ICh7XG4gICAgICAgICAgICBpbnRlcnZhbDogbnVsbCBhcyBOb2RlSlMuVGltZW91dCB8IG51bGwsXG4gICAgICAgICAgICB0ZXJtaW5hdGU6IGRlYm91bmNlKChzdG9yZTogU3RvcmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goW1xuICAgICAgICAgICAgICAgICAgICBtYXN0ZXJQYXNzd29yZC5jaGFuZ2UoJycpLFxuICAgICAgICAgICAgICAgICAgICBkb21haW5OYW1lLmNoYW5nZSgnJyksXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLmNoYW5nZSgnJyksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9LCBTRVNTSU9OX1RJTUVfVE9fVEVSTUlOQVRFKSxcbiAgICAgICAgfSksXG4gICAgfVxuKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29udGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuIiwiaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge3VzZUF0b219IGZyb20gJ0ByZWF0b20vcmVhY3QnO1xuaW1wb3J0IHtUZXh0fSBmcm9tICcuLi8uLi91aS9UZXh0JztcbmltcG9ydCB7dGVybWluYXRpb25UaW1lTGVmdH0gZnJvbSAnLi9jb250ZXh0JztcblxuY29uc3QgU0VDT05EU19JTl9NSU5VVEUgPSA2MDtcbmZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgY29uc3QgdGltZUluU2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAvIDEwMDApO1xuXG4gICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhNYXRoLmZsb29yKHRpbWVJblNlY29uZHMgLyBTRUNPTkRTX0lOX01JTlVURSkpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBTdHJpbmcodGltZUluU2Vjb25kcyAlIFNFQ09ORFNfSU5fTUlOVVRFKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2Vzc2lvblRlcm1pbmF0b3IoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFt0ZXJtaW5hdGlvblRpbWVMZWZ0VmFsdWVdID0gdXNlQXRvbSh0ZXJtaW5hdGlvblRpbWVMZWZ0KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7dGVybWluYXRpb25UaW1lTGVmdFZhbHVlID4gMFxuICAgICAgICAgICAgICAgID8gYFRoZSBzZXNzaW9uIHdpbGwgYmUgdGVybWluYXRlZCBpbiAke2Zvcm1hdFRpbWUodGVybWluYXRpb25UaW1lTGVmdFZhbHVlKX1gXG4gICAgICAgICAgICAgICAgOiAnVGhlIHNlc3Npb24gaGFzIGJlZW4gdGVybWluYXRlZCBvciBzaW1wbHkgbm90IHN0YXJ0ZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvVGV4dD5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtyYXdDb250ZXh0fSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRmllbGRLZXkoaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3Jhd0NvbnRleHQuYXBwVmVyc2lvbn1fJHtpZH1gO1xufVxuIiwiaW1wb3J0IHtkZWNsYXJlQXRvbSBhcyBhdG9tfSBmcm9tICdAcmVhdG9tL2NvcmUnO1xuaW1wb3J0IHtzYWx0ZWRQYXNzd29yZExlbmd0aH0gZnJvbSAnLi4vU2FsdGVkUGFzc3dvcmRMZW5ndGgnO1xuXG5pbXBvcnQge2hhc2hGdW5jdGlvbk5hbWV9IGZyb20gJy4uL1NlbGVjdEhhc2hGdW5jdGlvbic7XG5pbXBvcnQge3N0b3JlTG9jYWxseX0gZnJvbSAnLi9zdG9yZUxvY2FsbHknO1xuXG5leHBvcnQgY29uc3Qgc3RvcmVMb2NhbGx5T2JzZXJ2ZXIgPSBhdG9tKCQgPT4ge1xuICAgICQoaGFzaEZ1bmN0aW9uTmFtZSwgdmFsdWUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcsIHZhbHVlKTtcbiAgICAgICAgc3RvcmVMb2NhbGx5KCdoYXNoRnVuY3Rpb25OYW1lJywgdmFsdWUpO1xuICAgIH0pO1xuICAgICQoc2FsdGVkUGFzc3dvcmRMZW5ndGgsIHZhbHVlID0+IHN0b3JlTG9jYWxseSgnc2FsdGVkUGFzc3dvcmRMZW5ndGgnLCB2YWx1ZSkpO1xufSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3Jlc3RvcmVMb2NhbGx5JztcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmVMb2NhbGx5JztcbmV4cG9ydCAqIGZyb20gJy4vY29udGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuIiwiaW1wb3J0IHtnZW5lcmF0ZUZpZWxkS2V5fSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlTG9jYWxseTxUPihpZDogc3RyaW5nKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdlbmVyYXRlRmllbGRLZXkoaWQpO1xuXG4gICAgY29uc3Qgc3RvcmVkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShmaWVsZElkKTtcbiAgICBpZiAoc3RvcmVkVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZFZhbHVlKTtcbiAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGZpZWxkSWQpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBsb2NhbCBzdG9yZWQgdmFsdWUgd2l0aCBhIGtleTogJHtmaWVsZElkfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Z2VuZXJhdGVGaWVsZEtleX0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVMb2NhbGx5PFQ+KGlkOiBzdHJpbmcsIHZhbHVlOiBUKTogdm9pZCB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdlbmVyYXRlRmllbGRLZXkoaWQpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZmllbGRJZCwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cbiIsImltcG9ydCB7dXNlQXRvbX0gZnJvbSAnQHJlYXRvbS9yZWFjdCc7XG5pbXBvcnQge0pTWH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7c3RvcmVMb2NhbGx5T2JzZXJ2ZXJ9IGZyb20gJy4vY29udGV4dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTdG9yZUxvY2FsbHlDb25uZWN0b3IoKTogSlNYLkVsZW1lbnQge1xuICAgIHVzZUF0b20oc3RvcmVMb2NhbGx5T2JzZXJ2ZXIpO1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgJ21vZGVybi1jc3MtcmVzZXQnO1xuXG5pbXBvcnQge292ZXJyaWRlRnJhbWV9IGZyb20gJy4uLy4uL3VpL2xheW91dC9GcmFtZSc7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgZm9udDoge1xuICAgICAgICBmb250RmFtaWx5OiAnSW50ZXIsIHNhbnMtc2VyaWYnLFxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgUmVzZXRTdHlsZXMgPSBvdmVycmlkZUZyYW1lKHtkZWY6ICdyZXNldC1zdHlsZXMnLCBzdHlsZXM6IFtkZWZhdWx0U3R5bGVzLmZvbnRdfSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3BhbGV0dGUnO1xuZXhwb3J0ICogZnJvbSAnLi90aGVtZVByb3ZpZGVyJztcbiIsImltcG9ydCBzdHlsZTksIHtTdHlsZX0gZnJvbSAnc3R5bGU5JztcblxuZGVjbGFyZSBtb2R1bGUgJ3N0eWxlOScge1xuICAgIGludGVyZmFjZSBDdXN0b21Qcm9wZXJ0aWVzIHtcbiAgICAgICAgZ2FwPzogc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgICB0cmFuc2l0aW9uPzogc3RyaW5nLFxuICAgICAgICAnOm5vdCg6ZGlzYWJsZWQpJz86IFN0eWxlLFxuICAgICAgICAnOmhvdmVyOm5vdCg6ZGlzYWJsZWQpJz86IFN0eWxlLFxuICAgICAgICAnOmFjdGl2ZTpub3QoOmRpc2FibGVkKSc/OiBTdHlsZSxcbiAgICB9XG59XG5cbmRlY2xhcmUgbW9kdWxlICdzdHlsZTknIHtcbiAgICBpbnRlcmZhY2UgQ3VzdG9tUHJvcGVydGllcyB7XG4gICAgICAgICctLWdyZWVuJz86IHN0cmluZztcbiAgICAgICAgJy0tYmFzZS1sYXlvdXQtYmcnPzogc3RyaW5nLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWJnJz86IHN0cmluZyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1jb2xvcic/OiBzdHJpbmcsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tZGlzYWJsZWQtY29sb3InPzogc3RyaW5nLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWRpc2FibGVkLWRhc2gnPzogc3RyaW5nLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLXNoYWRvdyc/OiBzdHJpbmcsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWFjdGl2ZSc/OiBzdHJpbmcsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWFjdGl2ZS1pbnNldCc/OiBzdHJpbmcsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWhvdmVyJz86IHN0cmluZyxcbiAgICAgICAgJy0tYnV0dG9uLXBzZXVkby1jb2xvcic/OiBzdHJpbmcsXG4gICAgICAgICctLWJ1dHRvbi1zZWxlY3QtYmcnPzogc3RyaW5nLFxuICAgICAgICAnLS1sYWJlbC1jb2xvcic/OiBzdHJpbmcsXG4gICAgICAgICctLWxpbmstbWFyay1iZyc/OiBzdHJpbmcsXG4gICAgICAgICctLWxpbmstbWFyay1jb2xvcic/OiBzdHJpbmcsXG4gICAgICAgICctLXJvb3QtYmcnPzogc3RyaW5nLFxuICAgICAgICAnLS1zZWxlY3QtYmcnPzogc3RyaW5nLFxuICAgICAgICAnLS1zZWxlY3QtYm9yZGVyJz86IHN0cmluZyxcbiAgICAgICAgJy0tc2VsZWN0LWNvbG9yJz86IHN0cmluZyxcbiAgICAgICAgJy0tc2VsZWN0LXNoYWRvdyc/OiBzdHJpbmcsXG4gICAgICAgICctLXNwb2lsZXItb3Blbi1iZyc/OiBzdHJpbmcsXG4gICAgICAgICctLXRleHQtY29sb3InPzogc3RyaW5nLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLWJnJz86IHN0cmluZyxcbiAgICAgICAgJy0tdGV4dC1maWVsZC1jb2xvcic/OiBzdHJpbmcsXG4gICAgICAgICctLXRleHQtZmllbGQtcGxhY2Vob2xkZXItY29sb3InPzogc3RyaW5nLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLXNoYWRvdyc/OiBzdHJpbmcsXG4gICAgICAgICctLXRleHQtZmllbGQtc2hhZG93LWZvY3VzJz86IHN0cmluZyxcblxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRIRU1FUyA9IHtcbiAgICBsaWdodDogJ2xpZ2h0JyxcbiAgICBkYXJrOiAnZGFyaycsXG4gICAgYmxhY2s6ICdibGFjaycsXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVGhlbWVOYW1lID0ga2V5b2YgdHlwZW9mIFRIRU1FUztcbmV4cG9ydCBjb25zdCB7Li4udGhlbWVTdHlsZXN9ID0gc3R5bGU5LmNyZWF0ZTxSZWNvcmQ8VGhlbWVOYW1lLCBTdHlsZT4+KHtcbiAgICBsaWdodDoge1xuICAgICAgICAnLS1iYXNlLWxheW91dC1iZyc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWJnJzogJ3JnYmEoMCwgMCwgMCwgMSknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjgpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1kaXNhYmxlZC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWRpc2FibGVkLWRhc2gnOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1zaGFkb3ctYWN0aXZlJzogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWFjdGl2ZS1pbnNldCc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLXNoYWRvdy1ob3Zlcic6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICAgICAnLS1idXR0b24tcHNldWRvLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMC44KScsXG4gICAgICAgICctLWJ1dHRvbi1zZWxlY3QtYmcnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gICAgICAgICctLWxhYmVsLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgLjUpJyxcbiAgICAgICAgJy0tbGluay1tYXJrLWJnJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44KScsXG4gICAgICAgICctLWxpbmstbWFyay1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuOCknLFxuICAgICAgICAnLS1yb290LWJnJzogJ3JnYigyNDQsIDI0NCwgMjQ0KScsXG4gICAgICAgICctLXNlbGVjdC1iZyc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcbiAgICAgICAgJy0tc2VsZWN0LWJvcmRlcic6ICdyZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAgICAgJy0tc2VsZWN0LWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMC44KScsXG4gICAgICAgICctLXNlbGVjdC1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICctLXNwb2lsZXItb3Blbi1iZyc6ICdyZ2JhKDAsIDAsIDAsIC4wNSknLFxuICAgICAgICAnLS10ZXh0LWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMC45KScsXG4gICAgICAgICctLXRleHQtZmllbGQtYmcnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gICAgICAgICctLXRleHQtZmllbGQtY29sb3InOiAncmdiYSgwLCAwLCAwLCAuOCknLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLXBsYWNlaG9sZGVyLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgLjQpJyxcbiAgICAgICAgJy0tdGV4dC1maWVsZC1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICctLXRleHQtZmllbGQtc2hhZG93LWZvY3VzJzogJ3JnYmEoMCwgMCwgMCwgMC4xNSknLFxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICAnLS1iYXNlLWxheW91dC1iZyc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1iZyc6ICdyZ2JhKDAsIDAsIDAsIDAuNiknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjYpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1kaXNhYmxlZC1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWRpc2FibGVkLWRhc2gnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1zaGFkb3ctYWN0aXZlJzogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWFjdGl2ZS1pbnNldCc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLXNoYWRvdy1ob3Zlcic6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICAgICAnLS1idXR0b24tcHNldWRvLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG4gICAgICAgICctLWJ1dHRvbi1zZWxlY3QtYmcnOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcbiAgICAgICAgJy0tbGFiZWwtY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAuNSknLFxuICAgICAgICAnLS1saW5rLW1hcmstYmcnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpJyxcbiAgICAgICAgJy0tbGluay1tYXJrLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC42KScsXG4gICAgICAgICctLXJvb3QtYmcnOiAncmdiKDQwLCA0MCwgNDApJyxcbiAgICAgICAgJy0tc2VsZWN0LWJnJzogJ3JnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgICctLXNlbGVjdC1ib3JkZXInOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICctLXNlbGVjdC1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgICAgICAnLS1zZWxlY3Qtc2hhZG93JzogJ3JnYmEoMCwgMCwgMCwgMC4wNSknLFxuICAgICAgICAnLS1zcG9pbGVyLW9wZW4tYmcnOiAncmdiYSgwLCAwLCAwLCAuMDUpJyxcbiAgICAgICAgJy0tdGV4dC1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLWJnJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScsXG4gICAgICAgICctLXRleHQtZmllbGQtY29sb3InOiAncmdiYSgwLCAwLCAwLCAuOCknLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLXBsYWNlaG9sZGVyLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgLjQpJyxcbiAgICAgICAgJy0tdGV4dC1maWVsZC1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICctLXRleHQtZmllbGQtc2hhZG93LWZvY3VzJzogJ3JnYmEoMCwgMCwgMCwgMC4xNSknLFxuICAgIH0sXG4gICAgYmxhY2s6IHtcbiAgICAgICAgJy0tYmFzZS1sYXlvdXQtYmcnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tYmcnOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAuOCknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWRpc2FibGVkLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tZGlzYWJsZWQtZGFzaCc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLXNoYWRvdyc6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLXNoYWRvdy1hY3RpdmUnOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1zaGFkb3ctYWN0aXZlLWluc2V0JzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWhvdmVyJzogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgICAgICctLWJ1dHRvbi1wc2V1ZG8tY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICAgICAgJy0tYnV0dG9uLXNlbGVjdC1iZyc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknLFxuICAgICAgICAnLS1sYWJlbC1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC40KScsXG4gICAgICAgICctLWxpbmstbWFyay1iZyc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknLFxuICAgICAgICAnLS1saW5rLW1hcmstY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICAgICAgJy0tcm9vdC1iZyc6ICdyZ2IoMTAsIDEwLCAxMCknLFxuICAgICAgICAnLS1zZWxlY3QtYmcnOiAncmdiYSgwLCAwLCAwLCAwLjYpJyxcbiAgICAgICAgJy0tc2VsZWN0LWJvcmRlcic6ICdyZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAgICAgJy0tc2VsZWN0LWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44KScsXG4gICAgICAgICctLXNlbGVjdC1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICctLXNwb2lsZXItb3Blbi1iZyc6ICdyZ2JhKDAsIDAsIDAsIC4zKScsXG4gICAgICAgICctLXRleHQtY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJyxcbiAgICAgICAgJy0tdGV4dC1maWVsZC1iZyc6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjUpJyxcbiAgICAgICAgJy0tdGV4dC1maWVsZC1wbGFjZWhvbGRlci1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKScsXG4gICAgICAgICctLXRleHQtZmllbGQtc2hhZG93JzogJ3JnYmEoMCwgMCwgMCwgMC4wNSknLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLXNoYWRvdy1mb2N1cyc6ICdyZ2JhKDAsIDAsIDAsIDAuMTUpJyxcbiAgICB9LFxufSk7XG4iLCJpbXBvcnQge0NvbXBvbmVudENoaWxkcmVuLCBKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge0ZyYW1lfSBmcm9tICcuLi8uLi91aS9sYXlvdXQvRnJhbWUnO1xuaW1wb3J0IHtUaGVtZU5hbWUsIHRoZW1lU3R5bGVzfSBmcm9tICcuL3BhbGV0dGUnO1xuXG50eXBlIFRoZW1lUHJvdmlkZXJQcm9wcyA9IHtcbiAgICB0aGVtZTogVGhlbWVOYW1lLFxuICAgIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHt0aGVtZSwgY2hpbGRyZW59OiBUaGVtZVByb3ZpZGVyUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYW1lIHN0eWxlcz17W1xuICAgICAgICAgICAgdGhlbWVTdHlsZXNbdGhlbWVdLFxuICAgICAgICBdfSBkZWY9XCJ0aGVtZS1wcm92aWRlclwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0ZyYW1lPlxuICAgICk7XG59XG4iLCJpbXBvcnQge3JlbmRlcn0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHtyYXdDb250ZXh0fSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHtSb290fSBmcm9tICcuL2ZlYXR1cmVzL1Jvb3QnO1xuaW1wb3J0IHtJbmRleFBhZ2V9IGZyb20gJy4vcGFnZXMvSW5kZXhQYWdlJztcblxuZnVuY3Rpb24gR2VuZXJpY1JlYWN0UGFnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Um9vdCBDb250ZW50PXtJbmRleFBhZ2V9IC8+XG4gICAgKTtcbn1cblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyYXdDb250ZXh0LnJvb3RDb250YWluZXJJZCk7XG5yZW5kZXIoXG4gICAgPEdlbmVyaWNSZWFjdFBhZ2UgLz4sXG4gICAgcm9vdEVsZW1lbnRcbik7XG4iLCJpbXBvcnQge3VzZUF0b219IGZyb20gJ0ByZWF0b20vcmVhY3QnO1xuaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5pbXBvcnQge2NvbnRleHR9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5pbXBvcnQge0NvcHlTYWx0ZWRQYXNzd29yZEJ1dHRvbn0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvQ29weVNhbHRlZFBhc3N3b3JkJztcbmltcG9ydCB7RHluYW1pY0JhY2tncm91bmR9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL0R5bmFtaWNCYWNrZ3JvdW5kJztcbmltcG9ydCB7RW1vamlQcm9tcHR9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL0Vtb2ppUHJvbXB0JztcbmltcG9ydCB7R2VuZXJhdGVkUGFzc3dvcmR9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL0dlbmVyYXRlZFBhc3N3b3JkJztcbmltcG9ydCB7UGFzc3dvcmRTYWx0aW5nfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9QYXNzd29yZFNhbHRpbmcnO1xuaW1wb3J0IHtTYWx0ZWRQYXNzd29yZExlbmd0aH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvU2FsdGVkUGFzc3dvcmRMZW5ndGgnO1xuaW1wb3J0IHtTZWxlY3RIYXNoRnVuY3Rpb259IGZyb20gJy4uLy4uL2ZlYXR1cmVzL1NlbGVjdEhhc2hGdW5jdGlvbic7XG5pbXBvcnQge1Nlc3Npb25UZXJtaW5hdG9yfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9TZXNzaW9uVGVybWluYXRvcic7XG5pbXBvcnQge0ZyYW1lLCBvdmVycmlkZUZyYW1lfSBmcm9tICcuLi8uLi91aS9sYXlvdXQvRnJhbWUnO1xuaW1wb3J0IHtWZXJ0aWNhbFNwYWNpbmd9IGZyb20gJy4uLy4uL3VpL2xheW91dC9TcGFjaW5nJztcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vLi4vdWkvTGluayc7XG5pbXBvcnQge1RleHR9IGZyb20gJy4uLy4uL3VpL1RleHQnO1xuXG5jb25zdCBpbmRleFBhZ2VTdHlsZXMgPSBzdHlsZTkuY3JlYXRlKHtcbiAgICBiYXNlTGF5b3V0OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLWJhc2UtbGF5b3V0LWJnKScsXG4gICAgICAgIG1heFdpZHRoOiAzNDAsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDQsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA0LFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogNCxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogNCxcbiAgICAgICAgcGFkZGluZzogJzMwcHggMjBweCcsXG4gICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KScsXG4gICAgICAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpJzoge1xuICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbmNvbnN0IEJhc2VMYXlvdXQgPSBvdmVycmlkZUZyYW1lKHtzdHlsZXM6IFtpbmRleFBhZ2VTdHlsZXMuYmFzZUxheW91dF0sIGFzOiAnbWFpbicsIGRlZjogJ2Jhc2UtbGF5b3V0J30pO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBJbmRleFBhZ2UoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFt7cmVwb0xpbmssIHRpdGxlfV0gPSB1c2VBdG9tKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxEeW5hbWljQmFja2dyb3VuZCAvPlxuICAgICAgICAgICAgPEJhc2VMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFRleHQgc2l6ZT1cInhsXCIgd2VpZ2h0PVwic2VtaUJvbGRcIj57dGl0bGV9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0Pi4uLmlzIHNlY3VyZSBhbmQgY29udmVuaWVudCE8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFZlcnRpY2FsU3BhY2luZyBzaXplPXsxfSAvPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3JlcG9MaW5rfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17NH1cbiAgICAgICAgICAgICAgICA+U291cmNlIGNvZGU6IEhvdyBpdCB3b3JrcyBhbmQgd2hhdCB0byBkbyBpZiBhbiBhcHAgYmVjb21lIHVuYXZhaWxhYmxlPzwvTGluaz5cbiAgICAgICAgICAgICAgICA8VmVydGljYWxTcGFjaW5nIHNpemU9ezEwfSAvPlxuICAgICAgICAgICAgICAgIDxQYXNzd29yZFNhbHRpbmcgLz5cbiAgICAgICAgICAgICAgICA8VmVydGljYWxTcGFjaW5nIHNpemU9ezZ9IC8+XG4gICAgICAgICAgICAgICAgPEVtb2ppUHJvbXB0IC8+XG4gICAgICAgICAgICAgICAgPFZlcnRpY2FsU3BhY2luZyBzaXplPXs2fSAvPlxuICAgICAgICAgICAgICAgIDxGcmFtZSBkaXJlY3Rpb249XCJyb3dcIiBnYXA9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SGFzaEZ1bmN0aW9uIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTYWx0ZWRQYXNzd29yZExlbmd0aCAvPlxuICAgICAgICAgICAgICAgIDwvRnJhbWU+XG4gICAgICAgICAgICAgICAgPFZlcnRpY2FsU3BhY2luZyBzaXplPXs2fSAvPlxuICAgICAgICAgICAgICAgIDxDb3B5U2FsdGVkUGFzc3dvcmRCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8VmVydGljYWxTcGFjaW5nIHNpemU9ezJ9IC8+XG4gICAgICAgICAgICAgICAgPEdlbmVyYXRlZFBhc3N3b3JkIC8+XG4gICAgICAgICAgICAgICAgPFZlcnRpY2FsU3BhY2luZyBzaXplPXs0fSAvPlxuICAgICAgICAgICAgICAgIDxTZXNzaW9uVGVybWluYXRvciAvPlxuICAgICAgICAgICAgPC9CYXNlTGF5b3V0PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtiYXNlNjQsIGVzY2FwZUJhc2U2NCwgbWQ1LCBzaGEyNTYsIHNoYTMsIHJpcGVtZDE2MCwgc2hhNTEyfSBmcm9tICcuL3V0aWxzL2NyeXB0byc7XG5pbXBvcnQge3RyaW19IGZyb20gJy4vdXRpbHMvc3ludGF4JztcbmltcG9ydCB7ZXh0cmFjdEhvc3R9IGZyb20gJy4vdXRpbHMvdXJsJztcblxuZXhwb3J0IGNvbnN0IEhBU0hfRlVOQ1RJT05TID0ge21kNSwgc2hhMywgc2hhMjU2LCBzaGE1MTIsIHJpcGVtZDE2MH0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBIYXNoRnVuY3Rpb25OYW1lID0ga2V5b2YgdHlwZW9mIEhBU0hfRlVOQ1RJT05TO1xuZXhwb3J0IHR5cGUgSGFzaEZ1bmN0aW9uID0gdHlwZW9mIEhBU0hfRlVOQ1RJT05TW2tleW9mIHR5cGVvZiBIQVNIX0ZVTkNUSU9OU107XG5leHBvcnQgY29uc3QgREVGQVVMVF9IQVNIX0ZVTkNUSU9OX05BTUU6IEhhc2hGdW5jdGlvbk5hbWUgPSAnc2hhMyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWx0VGhlUGFzcyhcbiAgICBoYXNoRnVuY3Rpb246IEhhc2hGdW5jdGlvbixcbiAgICBsZW5ndGg6IG51bWJlcixcbiAgICBtYXN0ZXJQYXNzd29yZDogc3RyaW5nLFxuICAgIGRvbWFpbk5hbWU6IHN0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nLFxuKTogc3RyaW5nIHtcbiAgICBpZiAobWFzdGVyUGFzc3dvcmQgPT09ICcnICYmIGRvbWFpbk5hbWUgPT09ICcnICYmIGVtYWlsID09PSAnJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaW0oXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgZXNjYXBlQmFzZTY0KFxuICAgICAgICAgICAgYmFzZTY0KFxuICAgICAgICAgICAgICAgIGhhc2hGdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgbWFzdGVyUGFzc3dvcmQgK1xuICAgICAgICAgICAgICAgICAgICBleHRyYWN0SG9zdChkb21haW5OYW1lKSArXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgKTtcbn1cbiIsImltcG9ydCB7SlNYfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHN0eWxlOSwge1N0eWxlfSBmcm9tICdzdHlsZTknO1xuaW1wb3J0IHtFeHRlbmRDb21wb25lbnRQcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcblxuaW1wb3J0IHtUZXh0fSBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgYnV0dG9uU3R5bGVzID0gc3R5bGU5LmNyZWF0ZSh7XG4gICAgZGVmYXVsdDoge1xuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgfSxcbiAgICB0ZXh0RGVmYXVsdDoge1xuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgIH0sXG59KTtcblxudHlwZSBWYXJpYW50U3R5bGUgPSAnc2VsZWN0JyB8ICdhY3Rpb24nIHwgJ3BzZXVkbyc7XG5jb25zdCB2YXJpYW50U3R5bGVzID0gc3R5bGU5LmNyZWF0ZTxSZWNvcmQ8VmFyaWFudFN0eWxlLCBTdHlsZT4+KHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tYnV0dG9uLXNlbGVjdC1iZyknLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICAgIGJveFNoYWRvdzogJzBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiA2LFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogNixcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDYsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDYsXG4gICAgfSxcbiAgICBhY3Rpb246IHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogNCxcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDQsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiA0LFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiA0LFxuICAgICAgICAnOm5vdCg6ZGlzYWJsZWQpJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tYnV0dG9uLWFjdGlvbi1iZyknLFxuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1idXR0b24tYWN0aW9uLWNvbG9yKScsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDhweCB2YXIoLS1idXR0b24tYWN0aW9uLXNoYWRvdyknLFxuICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IC41cywgY29sb3IgLjJzJyxcbiAgICAgICAgfSxcbiAgICAgICAgJzpob3Zlcjpub3QoOmRpc2FibGVkKSc6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCAxcHggMThweCB2YXIoLS1idXR0b24tYWN0aW9uLXNoYWRvdy1ob3ZlciknLFxuICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxuICAgICAgICB9LFxuICAgICAgICAnOmFjdGl2ZTpub3QoOmRpc2FibGVkKSc6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCAxcHggMThweCB2YXIoLS1idXR0b24tYWN0aW9uLXNoYWRvdy1hY3RpdmUpLCBpbnNldCAwcHggLTFweCA4cHggdmFyKC0tYnV0dG9uLWFjdGlvbi1zaGFkb3ctYWN0aXZlLWluc2V0KScsXG4gICAgICAgIH0sXG4gICAgICAgICc6ZGlzYWJsZWQnOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJ1dHRvbi1hY3Rpb24tZGlzYWJsZWQtY29sb3IpJyxcbiAgICAgICAgICAgIGJvcmRlcjogJzJweCBkYXNoZWQgdmFyKC0tYnV0dG9uLWFjdGlvbi1kaXNhYmxlZC1kYXNoKScsXG4gICAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBzZXVkbzoge1xuICAgICAgICBjb2xvcjogJ3ZhcigtLWJ1dHRvbi1wc2V1ZG8tY29sb3IpJyxcbiAgICB9LFxufSk7XG5cbnR5cGUgU2l6ZVN0eWxlID0gJ3MnIHwgJ20nIHwgJ2wnO1xuY29uc3Qgc2l6ZVN0eWxlcyA9IHN0eWxlOS5jcmVhdGU8UmVjb3JkPFNpemVTdHlsZSwgU3R5bGU+Pih7XG4gICAgczoge1xuICAgICAgICBwYWRkaW5nOiAnMnB4IDEwcHgnLFxuICAgICAgICBmb250U2l6ZTogMTAsXG4gICAgfSxcbiAgICBtOiB7XG4gICAgICAgIHBhZGRpbmc6ICc0cHgnLFxuICAgIH0sXG4gICAgbDoge1xuICAgICAgICBwYWRkaW5nOiAnNXB4IDE2cHgnLFxuICAgIH0sXG59KTtcblxudHlwZSBCdXR0b25Qcm9wcyA9IEV4dGVuZENvbXBvbmVudFByb3BzPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snYnV0dG9uJ10sIHtcbiAgICB2YXJpYW50OiBWYXJpYW50U3R5bGUsXG4gICAgc2l6ZT86IFNpemVTdHlsZSxcblxuICAgIHN0eWxlcz86IFN0eWxlW10sXG59PjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7XG4gICAgY2hpbGRyZW46IHRleHQsXG4gICAgdmFyaWFudCxcbiAgICBzaXplID0gJ20nLFxuICAgIHN0eWxlcyxcbiAgICAuLi5wcm9wc1xufTogQnV0dG9uUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZTkoXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGVzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgdmFyaWFudFN0eWxlc1t2YXJpYW50XSxcbiAgICAgICAgICAgICAgICBzaXplU3R5bGVzW3NpemVdLFxuICAgICAgICAgICAgICAgIC4uLihzdHlsZXMgfHwgW10pLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAgIHN0eWxlcz17W2J1dHRvblN0eWxlcy50ZXh0RGVmYXVsdF19XG4gICAgICAgICAgICA+e3RleHR9PC9UZXh0PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5pbXBvcnQge0V4dGVuZENvbXBvbmVudFByb3BzfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xuaW1wb3J0IHtGcmFtZX0gZnJvbSAnLi4vbGF5b3V0L0ZyYW1lJztcbmltcG9ydCB7VGV4dH0gZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IGxhYmVsU3R5bGUgPSBzdHlsZTkuY3JlYXRlKHtcbiAgICB3cmFwcGVyOiB7XG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgICBjb2xvcjogJ3ZhcigtLWxhYmVsLWNvbG9yKScsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbn0pO1xuXG50eXBlIExhYmVsUHJvcHMgPSBFeHRlbmRDb21wb25lbnRQcm9wczxKU1guSW50cmluc2ljRWxlbWVudHNbJ2xhYmVsJ10sIHtcbiAgICBsYWJlbDogc3RyaW5nLFxufT47XG5cbmV4cG9ydCBmdW5jdGlvbiBMYWJlbCh7XG4gICAgbGFiZWwsXG4gICAgY2hpbGRyZW4sXG59OiBMYWJlbFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFtZVxuICAgICAgICAgICAgYXM9XCJsYWJlbFwiXG4gICAgICAgICAgICBnYXA9ezJ9XG4gICAgICAgICAgICBzdHlsZXM9e1tsYWJlbFN0eWxlLndyYXBwZXJdfVxuICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZXM9e1tsYWJlbFN0eWxlLmxhYmVsXX0+e2xhYmVsfTwvVGV4dD5cbiAgICAgICAgICAgIDxGcmFtZSBzdHlsZXM9e1tsYWJlbFN0eWxlLmNvbnRlbnRdfT57Y2hpbGRyZW59PC9GcmFtZT5cbiAgICAgICAgPC9GcmFtZT5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5LCB7U3R5bGV9IGZyb20gJ3N0eWxlOSc7XG5pbXBvcnQge1RleHRDb2xvcnNTdHlsZX0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvVGhlbWluZyc7XG5pbXBvcnQge0V4dGVuZENvbXBvbmVudFByb3BzfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xuaW1wb3J0IHtGcmFtZX0gZnJvbSAnLi4vbGF5b3V0L0ZyYW1lJztcbmltcG9ydCB7VGV4dH0gZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IGxpbmtTdHlsZSA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZScsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICd1bmRlcmxpbmUnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtYXJrOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICBjb2xvcjogJ3ZhcigtLWxpbmstbWFyay1jb2xvciknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1saW5rLW1hcmstYmcpJyxcbiAgICB9LFxufSk7XG5cbnR5cGUgTGlua1Byb3BzID0gRXh0ZW5kQ29tcG9uZW50UHJvcHM8SlNYLkludHJpbnNpY0VsZW1lbnRzWydhJ10sIHtcbiAgICBzdHlsZXM/OiBTdHlsZVtdLFxuICAgIGNvbG9yPzogVGV4dENvbG9yc1N0eWxlLFxufT5cblxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoe1xuICAgIHN0eWxlcyA9IFtdLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLnByb3BzXG59OiBMaW5rUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQgYXM9XCJhXCIgey4uLnByb3BzfSBzdHlsZXM9e1tsaW5rU3R5bGUuZGVmYXVsdCwgLi4uc3R5bGVzXX0+XG4gICAgICAgICAgICA8RnJhbWUgc3R5bGVzPXtbbGlua1N0eWxlLm1hcmtdfSBhcz1cIm1hcmtcIj57Y2hpbGRyZW59PC9GcmFtZT5cbiAgICAgICAgPC9UZXh0PlxuICAgICk7XG59XG4iLCJpbXBvcnQge0pTWH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7RXh0ZW5kQ29tcG9uZW50UHJvcHN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudCc7XG5cbnR5cGUgT3B0aW9uUHJvcHMgPSBFeHRlbmRDb21wb25lbnRQcm9wczxKU1guSW50cmluc2ljRWxlbWVudHNbJ29wdGlvbiddLCB7XG5cbn0+O1xuXG5leHBvcnQgZnVuY3Rpb24gT3B0aW9uKHtcbiAgICAuLi5wcm9wc1xufTogT3B0aW9uUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiB7Li4ucHJvcHN9IC8+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7SlNYfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHN0eWxlOSBmcm9tICdzdHlsZTknO1xuaW1wb3J0IHtFeHRlbmRDb21wb25lbnRQcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcbmltcG9ydCB7ZmFtaWx5U3R5bGVzLCBzaXplU3R5bGVzfSBmcm9tICcuLi9UZXh0JztcblxuY29uc3Qgc2VsZWN0U3R5bGVzID0gc3R5bGU5LmNyZWF0ZSh7XG4gICAgcmVzZXQ6IHtcbiAgICAgICAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgfSxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdmFyKC0tc2VsZWN0LWJvcmRlciknLFxuICAgICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDFweCB2YXIoLS1zZWxlY3Qtc2hhZG93KScsXG4gICAgICAgIHBhZGRpbmc6ICcycHggMTZweCcsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDYsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA2LFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogNixcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogNixcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXNlbGVjdC1iZyknLFxuICAgICAgICBjb2xvcjogJ3ZhcigtLXNlbGVjdC1jb2xvciknLFxuICAgIH0sXG59KTtcblxudHlwZSBTZWxlY3RQcm9wcyA9IEV4dGVuZENvbXBvbmVudFByb3BzPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc2VsZWN0J10sIHtcbiAgICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsXG59PjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdCh7XG4gICAgb25DaGFuZ2UsXG4gICAgLi4ucHJvcHNcbn06IFNlbGVjdFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGU5KFxuICAgICAgICAgICAgICAgIHNlbGVjdFN0eWxlcy5yZXNldCxcbiAgICAgICAgICAgICAgICBzZWxlY3RTdHlsZXMuYXBwZWFyYW5jZSxcbiAgICAgICAgICAgICAgICBmYW1pbHlTdHlsZXMuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICBzaXplU3R5bGVzLm0sXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICk7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL09wdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL1NlbGVjdCc7XG4iLCJpbXBvcnQge0NvbXBvbmVudFByb3BzLCBKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5cbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHtGcmFtZX0gZnJvbSAnLi4vbGF5b3V0L0ZyYW1lJztcblxuY29uc3Qgc3BvaWxlclN0eWxlcyA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIGRldGFpbHM6IHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogNCxcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDQsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiA0LFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiA0LFxuICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAuM3MnLFxuICAgIH0sXG4gICAgZGV0YWlsc09wZW46IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tc3BvaWxlci1vcGVuLWJnKScsXG4gICAgfSxcbiAgICBzdW1tYXJ5OiB7XG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDQsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA0LFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogNCxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogNCxcblxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBwYWRkaW5nOiAnM3B4IDE2cHggJyxcbiAgICAgICAgbGluZUhlaWdodDogJzE2cHgnLFxuICAgICAgICAnOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuMDUpJyxcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgLjNzJyxcbiAgICB9LFxuICAgIHN1bW1hcnlPcGVuOiB7XG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgc3VtbWFyeTogc3RyaW5nLFxuICAgIHN1bW1hcnlPZmY/OiBzdHJpbmcsXG4gICAgb3BlbjogYm9vbGVhbixcbiAgICBvblRvZ2dsZTogKCkgPT4gdm9pZCxcbn0gJiBDb21wb25lbnRQcm9wczx0eXBlb2YgRnJhbWU+O1xuXG5leHBvcnQgZnVuY3Rpb24gU3BvaWxlcih7XG4gICAgc3VtbWFyeSxcbiAgICBzdW1tYXJ5T2ZmLFxuICAgIGNoaWxkcmVuLFxuICAgIHN0eWxlcyA9IFtdLFxuICAgIG9wZW4sXG4gICAgdGFiSW5kZXgsXG4gICAgb25Ub2dnbGUsXG4gICAgLi4ucHJvcHNcbn06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFtZVxuICAgICAgICAgICAgc3R5bGVzPXtbc3BvaWxlclN0eWxlcy5kZXRhaWxzLCBvcGVuICYmIHNwb2lsZXJTdHlsZXMuZGV0YWlsc09wZW4sIC4uLnN0eWxlc119XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHNldWRvXCJcbiAgICAgICAgICAgICAgICBzdHlsZXM9e1tzcG9pbGVyU3R5bGVzLnN1bW1hcnksIG9wZW4gJiYgc3BvaWxlclN0eWxlcy5zdW1tYXJ5T3Blbl19XG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1cIlxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZX1cbiAgICAgICAgICAgID57KG9wZW4gJiYgc3VtbWFyeU9mZikgfHwgc3VtbWFyeX08L0J1dHRvbj5cbiAgICAgICAgICAgIHtvcGVuICYmIGNoaWxkcmVufVxuICAgICAgICA8L0ZyYW1lPlxuICAgICk7XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudENoaWxkcmVuLCBKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5LCB7U3R5bGV9IGZyb20gJ3N0eWxlOSc7XG5pbXBvcnQge0V4dGVuZENvbXBvbmVudFByb3BzfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xuXG50eXBlIEhUTUxBdHRyaWJ1dGVzID0gSlNYLkhUTUxBdHRyaWJ1dGVzO1xuXG5jb25zdCB0ZXh0U3R5bGVzID0gc3R5bGU5LmNyZWF0ZSh7XG4gICAgZGVmYXVsdDoge1xuICAgICAgICBjb2xvcjogJ3ZhcigtLXRleHQtY29sb3IpJyxcbiAgICB9LFxufSk7XG5cbnR5cGUgRmFtaWx5U3R5bGUgPSAnZGVmYXVsdCcgfCAnbW9ub3NwYWNlJztcbmV4cG9ydCBjb25zdCB7Li4uZmFtaWx5U3R5bGVzfSA9IHN0eWxlOS5jcmVhdGU8UmVjb3JkPEZhbWlseVN0eWxlLCBTdHlsZT4+KHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICAgIGZvbnRGYW1pbHk6ICdcXCdJbnRlclxcJywgc2Fucy1zZXJpZicsXG4gICAgfSxcbiAgICBtb25vc3BhY2U6IHtcbiAgICAgICAgZm9udEZhbWlseTogJ1xcJ0luY29uc29sYXRhXFwnLCBtb25vc3BhY2UnLFxuICAgIH0sXG59KTtcblxudHlwZSBTaXplU3R5bGUgPSAneHMnIHwgJ3MnIHwgJ20nIHwgJ2wnIHwgJ3hsJztcbmV4cG9ydCBjb25zdCB7Li4uc2l6ZVN0eWxlc30gPSBzdHlsZTkuY3JlYXRlPFJlY29yZDxTaXplU3R5bGUsIFN0eWxlPj4oe1xuICAgIHhzOiB7XG4gICAgICAgIGZvbnRTaXplOiA5LFxuICAgIH0sXG4gICAgczoge1xuICAgICAgICBmb250U2l6ZTogMTAsXG4gICAgfSxcbiAgICBtOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMSxcbiAgICB9LFxuICAgIGw6IHtcbiAgICAgICAgZm9udFNpemU6IDE4LFxuICAgIH0sXG4gICAgeGw6IHtcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgIH0sXG59KTtcblxudHlwZSBXZWlnaHRTdHlsZSA9ICdsaWdodCcgfCAncmVndWxhcicgfCAnbWVkaXVtJyB8ICdzZW1pQm9sZCcgfCAnYm9sZCc7XG5leHBvcnQgY29uc3Qgey4uLndlaWdodFN0eWxlc30gPSBzdHlsZTkuY3JlYXRlPFJlY29yZDxXZWlnaHRTdHlsZSwgU3R5bGU+Pih7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgIH0sXG4gICAgcmVndWxhcjoge1xuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgfSxcbiAgICBtZWRpdW06IHtcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgIH0sXG4gICAgc2VtaUJvbGQ6IHtcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgIH0sXG4gICAgYm9sZDoge1xuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgfSxcbn0pO1xuXG50eXBlIEFsaWduU3R5bGUgPSAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7XG5jb25zdCBhbGlnblN0eWxlcyA9IHN0eWxlOS5jcmVhdGU8UmVjb3JkPEFsaWduU3R5bGUsIFN0eWxlPj4oe1xuICAgIGxlZnQ6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgfSxcbiAgICBjZW50ZXI6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICB9LFxufSk7XG5cbnR5cGUgVGV4dFByb3BzID0gRXh0ZW5kQ29tcG9uZW50UHJvcHM8SFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+LCB7XG4gICAgYXM/OiAnYScgfCAnc3BhbicgfCAnaDEnIHwgJ2gyJyB8ICdoMycgfCAnaDQnIHwgJ2g1JyB8ICdoNicgfCAncCcsXG4gICAgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuLFxuICAgIHN0eWxlcz86IFN0eWxlW10sXG4gICAgZGVmPzogc3RyaW5nLFxuXG4gICAgZmFtaWx5PzogRmFtaWx5U3R5bGUsXG4gICAgc2l6ZT86IFNpemVTdHlsZSxcbiAgICB3ZWlnaHQ/OiBXZWlnaHRTdHlsZSxcbiAgICBhbGlnbj86IEFsaWduU3R5bGUsXG59PjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRleHQoe1xuICAgIGNoaWxkcmVuOiBwb2VtLFxuICAgIGFzOiBUYWcgPSAnc3BhbicsXG4gICAgc3R5bGVzID0gW10sXG4gICAgZGVmID0gJ3RleHQnLFxuXG4gICAgZmFtaWx5ID0gJ2RlZmF1bHQnLFxuICAgIHNpemUgPSAnbScsXG4gICAgd2VpZ2h0ID0gJ3JlZ3VsYXInLFxuICAgIGFsaWduID0gJ2xlZnQnLFxuICAgIC4uLnByb3BzXG59OiBUZXh0UHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRhZ1xuICAgICAgICAgICAgZGF0YS1kZWY9e2RlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGU5KFxuICAgICAgICAgICAgICAgIHRleHRTdHlsZXMuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICBmYW1pbHlTdHlsZXNbZmFtaWx5XSxcbiAgICAgICAgICAgICAgICBzaXplU3R5bGVzW3NpemVdLFxuICAgICAgICAgICAgICAgIHdlaWdodFN0eWxlc1t3ZWlnaHRdLFxuICAgICAgICAgICAgICAgIGFsaWduU3R5bGVzW2FsaWduXSxcbiAgICAgICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICB7cG9lbX1cbiAgICAgICAgPC9UYWc+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7Zm9yd2FyZFJlZn0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5cbmltcG9ydCB7Q29tbW9uSW5wdXRQcm9wc30gZnJvbSAnLi90eXBlcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbmV4cG9ydCBjb25zdCBFbWFpbElucHV0ID0gZm9yd2FyZFJlZjxIVE1MSW5wdXRFbGVtZW50LCBDb21tb25JbnB1dFByb3BzPigoe1xuICAgIGh0bWxJbnB1dFN0eWxlcyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgb25WYWx1ZUNoYW5nZSxcbiAgICAuLi5wcm9wc1xufTogQ29tbW9uSW5wdXRQcm9wcywgaHRtbElucHV0UmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2h0bWxJbnB1dFJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGU5KC4uLmh0bWxJbnB1dFN0eWxlcyl9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuIiwiaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQgc3R5bGU5LCB7U3R5bGV9IGZyb20gJ3N0eWxlOSc7XG5pbXBvcnQge0V4dGVuZENvbXBvbmVudFByb3BzfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xuXG5pbXBvcnQge0ZyYW1lfSBmcm9tICcuLi9sYXlvdXQvRnJhbWUnO1xuaW1wb3J0IHtmYW1pbHlTdHlsZXMsIHNpemVTdHlsZXMsIHdlaWdodFN0eWxlc30gZnJvbSAnLi4vVGV4dCc7XG5pbXBvcnQge0VtYWlsSW5wdXR9IGZyb20gJy4vZW1haWwnO1xuaW1wb3J0IHtOdW1iZXJJbnB1dH0gZnJvbSAnLi9udW1iZXInO1xuaW1wb3J0IHtQYXNzd29yZElucHV0fSBmcm9tICcuL3Bhc3N3b3JkJztcbmltcG9ydCB7VGV4dElucHV0fSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHtVcmxJbnB1dH0gZnJvbSAnLi91cmwnO1xuXG5jb25zdCB0ZXh0RmllbGRTdHlsZXMgPSBzdHlsZTkuY3JlYXRlKHtcbiAgICB3cmFwcGVyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXRleHQtZmllbGQtYmcpJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICBjdXJzb3I6ICd0ZXh0JyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNoYWRvdzogJzBweCAxcHggNnB4IHZhcigtLXRleHQtZmllbGQtc2hhZG93KScsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6ICc0cHgnLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzRweCcsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnNHB4JyxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJzRweCcsXG4gICAgICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IC4ycycsXG4gICAgfSxcbiAgICB3cmFwcGVyRm9jdXNlZDoge1xuICAgICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDEycHggdmFyKC0tdGV4dC1maWVsZC1zaGFkb3ctZm9jdXMpJyxcbiAgICB9LFxuICAgIGh0bWxJbnB1dDoge1xuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcyOHB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcblxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGNvbG9yOiAndmFyKC0tdGV4dC1maWVsZC1jb2xvciknLFxuICAgICAgICBjYXJldENvbG9yOiAndmFyKC0tdGV4dC1maWVsZC1jb2xvciknLFxuXG4gICAgICAgIGZvbnRTaXplOiAxNCxcblxuICAgICAgICAnOjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tdGV4dC1maWVsZC1wbGFjZWhvbGRlci1jb2xvciknLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxudHlwZSBUZXh0RmllbGRTaXplID0gJ3MnIHwgJ20nO1xuY29uc3QgdGV4dEZpZWxkV3JhcHBlclNpemUgPSBzdHlsZTkuY3JlYXRlPFJlY29yZDxUZXh0RmllbGRTaXplLCBTdHlsZT4+KHtcbiAgICBzOiB7XG4gICAgICAgIHBhZGRpbmc6ICcycHggMTZweCcsXG4gICAgfSxcbiAgICBtOiB7XG4gICAgICAgIHBhZGRpbmc6ICc2cHggMjJweCcsXG4gICAgfSxcbn0pO1xuY29uc3QgdGV4dEZpZWxkSHRtbElucHV0U2l6ZSA9IHN0eWxlOS5jcmVhdGU8UmVjb3JkPFRleHRGaWVsZFNpemUsIFN0eWxlPj4oe1xuICAgIHM6IHtcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgfSxcbiAgICBtOiB7XG4gICAgICAgIGhlaWdodDogJzI4cHgnLFxuICAgIH0sXG59KTtcblxuY29uc3QgSU5QVVRfQ09NUE9ORU5UUyA9IHtcbiAgICBwYXNzd29yZDogUGFzc3dvcmRJbnB1dCxcbiAgICB0ZXh0OiBUZXh0SW5wdXQsXG4gICAgdXJsOiBVcmxJbnB1dCxcbiAgICBlbWFpbDogRW1haWxJbnB1dCxcbiAgICBudW1iZXI6IE51bWJlcklucHV0LFxufSBhcyBjb25zdDtcbnR5cGUgSW5wdXRUeXBlID0ga2V5b2YgdHlwZW9mIElOUFVUX0NPTVBPTkVOVFM7XG5cbnR5cGUgSW5wdXRQcm9wcyA9IEV4dGVuZENvbXBvbmVudFByb3BzPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSwge1xuICAgIHR5cGU6IElucHV0VHlwZSxcbiAgICBzaXplPzogVGV4dEZpZWxkU2l6ZSxcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxuICAgIHdyYXBwZXJTdHlsZXM/OiBTdHlsZVtdLFxuICAgIGlucHV0U3R5bGVzPzogU3R5bGVbXSxcbiAgICBvbkNoYW5nZTogKG5ld1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIpID0+IHZvaWQsXG59PjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRleHRGaWVsZCh7XG4gICAgdHlwZSxcbiAgICBzaXplID0gJ20nLFxuICAgIHdyYXBwZXJTdHlsZXMgPSBbXSxcbiAgICBpbnB1dFN0eWxlcyA9IFtdLFxuICAgIG9uQ2hhbmdlLFxuICAgIC4uLnByb3BzXG59OiBJbnB1dFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSBldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuXG4gICAgY29uc3QgaHRtbElucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBvbldyYXBwZXJDbGljayA9ICgpID0+IGh0bWxJbnB1dFJlZi5jdXJyZW50ICYmIGh0bWxJbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG5cbiAgICBjb25zdCBbZm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgb25JbnB1dEZvY3VzID0gKCkgPT4gc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICBjb25zdCBvbklucHV0Qmx1ciA9ICgpID0+IHNldEZvY3VzZWQoZmFsc2UpO1xuXG4gICAgY29uc3QgSW5wdXRDb21wb25lbnQgPSBJTlBVVF9DT01QT05FTlRTW3R5cGVdIHx8IFRleHRJbnB1dDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFtZVxuICAgICAgICAgICAgc3R5bGVzPXtbXG4gICAgICAgICAgICAgICAgdGV4dEZpZWxkU3R5bGVzLndyYXBwZXIsXG4gICAgICAgICAgICAgICAgdGV4dEZpZWxkV3JhcHBlclNpemVbc2l6ZV0sXG4gICAgICAgICAgICAgICAgZm9jdXNlZCAmJiB0ZXh0RmllbGRTdHlsZXMud3JhcHBlckZvY3VzZWQsXG4gICAgICAgICAgICAgICAgLi4ud3JhcHBlclN0eWxlcyxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBkZWY9XCJwc2V1ZG8taW5wdXRcIlxuICAgICAgICAgICAgb25DbGljaz17b25XcmFwcGVyQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dENvbXBvbmVudFxuICAgICAgICAgICAgICAgIHJlZj17aHRtbElucHV0UmVmfVxuICAgICAgICAgICAgICAgIGh0bWxJbnB1dFN0eWxlcz17W1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGRTdHlsZXMuaHRtbElucHV0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0RmllbGRIdG1sSW5wdXRTaXplW3NpemVdLFxuICAgICAgICAgICAgICAgICAgICBmYW1pbHlTdHlsZXMuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVN0eWxlcy5tLFxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRTdHlsZXMucmVndWxhcixcbiAgICAgICAgICAgICAgICAgICAgLi4uaW5wdXRTdHlsZXMsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e29uSW5wdXRGb2N1c31cbiAgICAgICAgICAgICAgICBvbkJsdXI9e29uSW5wdXRCbHVyfVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvRnJhbWU+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7Zm9yd2FyZFJlZn0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5cbmltcG9ydCB7Q29tbW9uSW5wdXRQcm9wc30gZnJvbSAnLi90eXBlcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbmV4cG9ydCBjb25zdCBOdW1iZXJJbnB1dCA9IGZvcndhcmRSZWY8SFRNTElucHV0RWxlbWVudCwgQ29tbW9uSW5wdXRQcm9wcz4oKHtcbiAgICBodG1sSW5wdXRTdHlsZXMsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIG9uVmFsdWVDaGFuZ2UsXG4gICAgLi4ucHJvcHNcbn06IENvbW1vbklucHV0UHJvcHMsIGh0bWxJbnB1dFJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtodG1sSW5wdXRSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlOSguLi5odG1sSW5wdXRTdHlsZXMpfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcbiIsImltcG9ydCB7Zm9yd2FyZFJlZn0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdwcmVhY3QvaG9va3MnO1xuaW1wb3J0IHN0eWxlOSBmcm9tICdzdHlsZTknO1xuXG5pbXBvcnQge2dlbmVyYXRlU3RyaW5nfSBmcm9tICcuLi8uLi91dGlscy9yYW5kb20nO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQge0ZyYW1lfSBmcm9tICcuLi9sYXlvdXQvRnJhbWUnO1xuaW1wb3J0IHtUZXh0LCBmYW1pbHlTdHlsZXN9IGZyb20gJy4uL1RleHQnO1xuaW1wb3J0IHtDb21tb25JbnB1dFByb3BzfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgcGFzc3dvcmRGaWVsZFN0eWxlcyA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIGlucHV0QmFzZToge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB9LFxuICAgIGh0bWxJbnB1dDoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgekluZGV4OiAzLFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAnOjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tdGV4dC1maWVsZC1wbGFjZWhvbGRlci1jb2xvciknLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0ludGVyJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1hc2s6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHpJbmRleDogMixcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAndmFyKC0tdGV4dC1maWVsZC1jb2xvciknLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMjhweCcsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdJbmNvbnNvbGF0YScsXG4gICAgfSxcbn0pO1xuXG5jb25zdCBtYXNrID0gZ2VuZXJhdGVTdHJpbmcoMTIwKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkSW5wdXQgPSBmb3J3YXJkUmVmPEhUTUxJbnB1dEVsZW1lbnQsIENvbW1vbklucHV0UHJvcHM+KCh7XG4gICAgdmFsdWUsXG4gICAgaHRtbElucHV0U3R5bGVzLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBvblZhbHVlQ2hhbmdlLFxuICAgIC4uLnByb3BzXG59OiBDb21tb25JbnB1dFByb3BzLCBodG1sSW5wdXRSZWYpID0+IHtcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3Qgb25TaG93QnV0dG9uQ2xpY2sgPSAoKSA9PiBzZXRIaWRkZW4oIWhpZGRlbik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEZyYW1lIHN0eWxlcz17Wy4uLmh0bWxJbnB1dFN0eWxlcywgcGFzc3dvcmRGaWVsZFN0eWxlcy5pbnB1dEJhc2VdfSBkZWY9XCJpbnB1dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj17aHRtbElucHV0UmVmfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlOShcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmh0bWxJbnB1dFN0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRmllbGRTdHlsZXMuaHRtbElucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFtaWx5U3R5bGVzLm1vbm9zcGFjZSxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dCBmYW1pbHk9XCJtb25vc3BhY2VcIiBzdHlsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgLi4uaHRtbElucHV0U3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEZpZWxkU3R5bGVzLm1hc2ssXG4gICAgICAgICAgICAgICAgXX0gZGVmPVwiaW5wdXQtbWFza1wiPlxuICAgICAgICAgICAgICAgICAgICB7aGlkZGVuID8gbWFzay5zbGljZSgwLCB2YWx1ZS5sZW5ndGgpIDogdmFsdWV9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgICAgIHt2YWx1ZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWxlY3RcIiBvbkNsaWNrPXtvblNob3dCdXR0b25DbGlja30gc2l6ZT1cInNcIj5cbiAgICAgICAgICAgICAgICAgICAge2hpZGRlbiA/ICdTaG93JyA6ICdIaWRlJ31cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICk7XG59KTtcbiIsImltcG9ydCB7Zm9yd2FyZFJlZn0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5cbmltcG9ydCB7Q29tbW9uSW5wdXRQcm9wc30gZnJvbSAnLi90eXBlcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbmV4cG9ydCBjb25zdCBUZXh0SW5wdXQgPSBmb3J3YXJkUmVmPEhUTUxJbnB1dEVsZW1lbnQsIENvbW1vbklucHV0UHJvcHM+KCh7XG4gICAgaHRtbElucHV0U3R5bGVzLFxuICAgIC4uLnByb3BzXG59OiBDb21tb25JbnB1dFByb3BzLCBodG1sSW5wdXRSZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17aHRtbElucHV0UmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZTkoLi4uaHRtbElucHV0U3R5bGVzKX1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG4iLCJpbXBvcnQge2ZvcndhcmRSZWZ9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHtGb2N1c0V2ZW50SGFuZGxlcn0gZnJvbSAncHJlYWN0L3NyYy9qc3gnO1xuaW1wb3J0IHN0eWxlOSBmcm9tICdzdHlsZTknO1xuaW1wb3J0IHtleHRyYWN0T3JpZ2lufSBmcm9tICcuLi8uLi91dGlscy91cmwnO1xuXG5pbXBvcnQge0NvbW1vbklucHV0UHJvcHN9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG5leHBvcnQgY29uc3QgVXJsSW5wdXQgPSBmb3J3YXJkUmVmPEhUTUxJbnB1dEVsZW1lbnQsIENvbW1vbklucHV0UHJvcHM+KCh7XG4gICAgaHRtbElucHV0U3R5bGVzLFxuICAgIHZhbHVlLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZUNhbGxiYWNrLFxuICAgIG9uQmx1cjogb25CbHVyQ2FsbGJhY2ssXG4gICAgb25WYWx1ZUNoYW5nZSxcbiAgICAuLi5wcm9wc1xufTogQ29tbW9uSW5wdXRQcm9wcywgaHRtbElucHV0UmVmKSA9PiB7XG4gICAgY29uc3Qgb25CbHVyID0gKGV2ZW50OiBGb2N1c0V2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBvblZhbHVlQ2hhbmdlKGV4dHJhY3RPcmlnaW4odmFsdWUpKTtcbiAgICAgICAgb25CbHVyQ2FsbGJhY2sgJiYgb25CbHVyQ2FsbGJhY2soZXZlbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17aHRtbElucHV0UmVmfVxuICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICByb2xlPVwidXJsXCJcbiAgICAgICAgICAgIG5hbWU9XCJ1cmxcIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZTkoLi4uaHRtbElucHV0U3R5bGVzKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNhbGxiYWNrfVxuICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuIiwiaW1wb3J0IHtDb21wb25lbnRDaGlsZHJlbiwgSlNYfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHN0eWxlOSwge1N0eWxlfSBmcm9tICdzdHlsZTknO1xuXG5pbXBvcnQge0V4dGVuZENvbXBvbmVudFByb3BzLCBvdmVycmlkZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcblxudHlwZSBTVkdBdHRyaWJ1dGVzID0gSlNYLlNWR0F0dHJpYnV0ZXM7XG50eXBlIEhUTUxBdHRyaWJ1dGVzID0gSlNYLkhUTUxBdHRyaWJ1dGVzO1xuXG5leHBvcnQgdHlwZSBTaXplID0gMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTA7XG5cbmNvbnN0IGhlaWdodFN0eWxlcyA9IHN0eWxlOS5jcmVhdGU8UmVjb3JkPFNpemUsIFN0eWxlPj4oe1xuICAgIDE6IHtoZWlnaHQ6IDR9LCAyOiB7aGVpZ2h0OiA4fSwgMzoge2hlaWdodDogMTJ9LCA0OiB7aGVpZ2h0OiAxNn0sIDU6IHtoZWlnaHQ6IDIwfSxcbiAgICA2OiB7aGVpZ2h0OiAyNH0sIDc6IHtoZWlnaHQ6IDI4fSwgODoge2hlaWdodDogMzJ9LCA5OiB7aGVpZ2h0OiAzNn0sIDEwOiB7aGVpZ2h0OiA0MH0sXG59KTtcblxuY29uc3Qgd2lkdGhTdHlsZXMgPSBzdHlsZTkuY3JlYXRlPFJlY29yZDxTaXplLCBTdHlsZT4+KHtcbiAgICAxOiB7d2lkdGg6IDR9LCAyOiB7d2lkdGg6IDh9LCAzOiB7d2lkdGg6IDEyfSwgNDoge3dpZHRoOiAxNn0sIDU6IHt3aWR0aDogMjB9LFxuICAgIDY6IHt3aWR0aDogMjR9LCA3OiB7d2lkdGg6IDI4fSwgODoge3dpZHRoOiAzMn0sIDk6IHt3aWR0aDogMzZ9LCAxMDoge3dpZHRoOiA0MH0sXG59KTtcblxuY29uc3QgZ2FwU3R5bGVzID0gc3R5bGU5LmNyZWF0ZTxSZWNvcmQ8U2l6ZSwgU3R5bGU+Pih7XG4gICAgMToge2dhcDogNH0sIDI6IHtnYXA6IDh9LCAzOiB7Z2FwOiAxMn0sIDQ6IHtnYXA6IDE2fSwgNToge2dhcDogMjB9LFxuICAgIDY6IHtnYXA6IDI0fSwgNzoge2dhcDogMjh9LCA4OiB7Z2FwOiAzMn0sIDk6IHtnYXA6IDM2fSwgMTA6IHtnYXA6IDQwfSxcbn0pO1xuXG50eXBlIERpcmVjdGlvbiA9ICdjb2x1bW4nIHwgJ3Jvdyc7XG5jb25zdCBkaXJlY3Rpb25TdHlsZXMgPSBzdHlsZTkuY3JlYXRlPFJlY29yZDxEaXJlY3Rpb24sIFN0eWxlPj4oe1xuICAgIGNvbHVtbjoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIHJvdzoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICB9LFxufSk7XG5cbmNvbnN0IGZyYW1lU3R5bGVzID0gc3R5bGU5LmNyZWF0ZSh7XG4gICAgZGVmYXVsdDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbn0pO1xuXG50eXBlIFZhbHVlT2Y8VD4gPSBUW2tleW9mIFRdO1xudHlwZSBGaWx0ZXI8Q29sbGVjdGlvbiwgVmFsdWU+ID0gVmFsdWVPZjx7W0sgaW4ga2V5b2YgQ29sbGVjdGlvbl06IENvbGxlY3Rpb25bS10gZXh0ZW5kcyBWYWx1ZSA/IG5ldmVyIDogS30+O1xudHlwZSBFbGVtZW50VGFnID0gRmlsdGVyPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgU1ZHQXR0cmlidXRlczx1bmtub3duPj47XG5cbnR5cGUgRnJhbWVQcm9wcyA9IEV4dGVuZENvbXBvbmVudFByb3BzPEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50Piwge1xuICAgIGFzPzogRWxlbWVudFRhZyxcbiAgICBjaGlsZHJlbj86IENvbXBvbmVudENoaWxkcmVuLFxuICAgIHN0eWxlcz86IFN0eWxlW10sXG4gICAgZGVmPzogc3RyaW5nLFxuXG4gICAgd2lkdGg/OiBTaXplLFxuICAgIGhlaWdodD86IFNpemUsXG4gICAgZ2FwPzogU2l6ZSxcbiAgICBkaXJlY3Rpb24/OiBEaXJlY3Rpb24sXG59PjtcblxuZXhwb3J0IGZ1bmN0aW9uIEZyYW1lKHtcbiAgICBhczogVGFnID0gJ2RpdicsXG4gICAgY2hpbGRyZW4sXG4gICAgc3R5bGVzLFxuICAgIGRlZiA9ICdmcmFtZScsXG5cbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgZ2FwLFxuICAgIGRpcmVjdGlvbiA9ICdjb2x1bW4nLFxuXG4gICAgLi4ucHJvcHNcbn06IEZyYW1lUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRhZ1xuICAgICAgICAgICAgZGF0YS1kZWY9e2RlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGU5KFxuICAgICAgICAgICAgICAgIGZyYW1lU3R5bGVzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgd2lkdGggJiYgd2lkdGhTdHlsZXNbd2lkdGhdLFxuICAgICAgICAgICAgICAgIGhlaWdodCAmJiBoZWlnaHRTdHlsZXNbaGVpZ2h0XSxcbiAgICAgICAgICAgICAgICBnYXAgJiYgZ2FwU3R5bGVzW2dhcF0sXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uICYmIGRpcmVjdGlvblN0eWxlc1tkaXJlY3Rpb25dLFxuICAgICAgICAgICAgICAgIC4uLihzdHlsZXMgfHwgW10pLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RhZz5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3Qgb3ZlcnJpZGVGcmFtZSA9IG92ZXJyaWRlQ29tcG9uZW50KEZyYW1lKTtcbiIsImltcG9ydCB7b3ZlcnJpZGVGcmFtZX0gZnJvbSAnLi9GcmFtZSc7XG5cbmV4cG9ydCBjb25zdCBWZXJ0aWNhbFNwYWNpbmcgPSBvdmVycmlkZUZyYW1lKHtkZWY6ICdzcGFjaW5nJ30sIHtzaXplOiAnaGVpZ2h0J30gYXMgY29uc3QpO1xuXG4iLCJpbXBvcnQge0NvbXBvbmVudFByb3BzLCBGdW5jdGlvbkNvbXBvbmVudCwgSlNYfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQge2tleXNPZn0gZnJvbSAnLi9zeW50YXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcnJpZGVDb21wb25lbnQ8RkMgZXh0ZW5kcyBGdW5jdGlvbkNvbXBvbmVudCwgUCBleHRlbmRzIENvbXBvbmVudFByb3BzPEZDPj4oQ29tcG9uZW50OiBGQykge1xuICAgIHJldHVybiBmdW5jdGlvbiA8TSBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGtleW9mIFA+PihvdmVycmlkZVByb3BzOiBQLCBtYXBwaW5nPzogTSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb25cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIE92ZXJyaWRkZW5Db21wb25lbnQobWFwcGVkUHJvcHM6IEV4Y2x1ZGU8UCwgTVtrZXlvZiBNXT4gJiB7W0sgaW4ga2V5b2YgTV06IFBbTVtLXV19KTogSlNYLkVsZW1lbnQge1xuICAgICAgICAgICAgaWYgKCFtYXBwaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ubWFwcGVkUHJvcHMgYXMgbmV2ZXJ9IHsuLi5vdmVycmlkZVByb3BzIGFzIG5ldmVyfSAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzT2YobWFwcGluZykpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIG1hcHBlZFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW21hcHBpbmdba2V5XSBhcyBhbnldID0gbWFwcGVkUHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgICAgICBwcm9wc1trZXkgYXMgYW55XSA9IG1hcHBlZFByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzIGFzIG5ldmVyfSB7Li4ub3ZlcnJpZGVQcm9wc30gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IHR5cGUgRXh0ZW5kQ29tcG9uZW50UHJvcHM8XG4gICAgQ29tcG9uZW50UHJvcHMsXG4gICAgUHJvcHNcbj4gPSBQcm9wcyAmIE9taXQ8Q29tcG9uZW50UHJvcHMsIGtleW9mIFByb3BzPjtcbiIsImltcG9ydCB7V29yZEFycmF5fSBmcm9tICdjcnlwdG8tZXMvbGliL2NvcmUnO1xuaW1wb3J0IHtNRDV9IGZyb20gJ2NyeXB0by1lcy9saWIvbWQ1JztcbmltcG9ydCB7U0hBM30gZnJvbSAnY3J5cHRvLWVzL2xpYi9zaGEzJztcbmltcG9ydCB7U0hBMjU2fSBmcm9tICdjcnlwdG8tZXMvbGliL3NoYTI1Nic7XG5pbXBvcnQge1NIQTUxMn0gZnJvbSAnY3J5cHRvLWVzL2xpYi9zaGE1MTInO1xuaW1wb3J0IHtSSVBFTUQxNjB9IGZyb20gJ2NyeXB0by1lcy9saWIvcmlwZW1kMTYwJztcblxuaW1wb3J0IHtCYXNlNjR9IGZyb20gJ2NyeXB0by1lcy9saWIvZW5jLWJhc2U2NCc7XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdUb051bWJlciA9ICh2YWx1ZTogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHJlc3VsdCArPSB2YWx1ZS5jaGFyQ29kZUF0KGkpICogaTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBtZDUgPSAodmFsdWU6IHN0cmluZyk6IFdvcmRBcnJheSA9PiBNRDUodmFsdWUpO1xuZXhwb3J0IGNvbnN0IHNoYTMgPSAodmFsdWU6IHN0cmluZyk6IFdvcmRBcnJheSA9PiBTSEEzKHZhbHVlKTtcbmV4cG9ydCBjb25zdCBzaGEyNTYgPSAodmFsdWU6IHN0cmluZyk6IFdvcmRBcnJheSA9PiBTSEEyNTYodmFsdWUpO1xuZXhwb3J0IGNvbnN0IHNoYTUxMiA9ICh2YWx1ZTogc3RyaW5nKTogV29yZEFycmF5ID0+IFNIQTUxMih2YWx1ZSk7XG5leHBvcnQgY29uc3QgcmlwZW1kMTYwID0gKHZhbHVlOiBzdHJpbmcpOiBXb3JkQXJyYXkgPT4gUklQRU1EMTYwKHZhbHVlKTtcblxuZXhwb3J0IGNvbnN0IGJhc2U2NCA9ICh2YWx1ZTogV29yZEFycmF5KTogc3RyaW5nID0+IHZhbHVlLnRvU3RyaW5nKEJhc2U2NCk7XG5cbmV4cG9ydCBjb25zdCBlc2NhcGVCYXNlNjQgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PlxuICAgIHZhbHVlXG4gICAgICAgIC5yZXBsYWNlKC89KyQvLCAnJylcbiAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCAnLScpXG4gICAgICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKTtcblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPENhbGxiYWNrIGV4dGVuZHMgKC4uLmFyZ3MpID0+IHZvaWQ+KFxuICAgIGNhbGxiYWNrOiBDYWxsYmFjayxcbiAgICB3YWl0Rm9yOiBudW1iZXIsXG4gICAgaW1tZWRpYXRlPzogYm9vbGVhblxuKTogKC4uLmFyZ3M6IFBhcmFtZXRlcnM8Q2FsbGJhY2s+KSA9PiB2b2lkIHtcbiAgICBsZXQgdGltZW91dDogTm9kZUpTLlRpbWVvdXQgfCBudWxsO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IFBhcmFtZXRlcnM8Q2FsbGJhY2s+KSB7XG4gICAgICAgIHRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHdhaXRGb3IpO1xuXG4gICAgICAgIGlmIChpbW1lZGlhdGUgJiYgIXRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiIsImltcG9ydCB7dGltZXN9IGZyb20gJy4vc3ludGF4JztcblxuY29uc3QgQ0hBUl9TRVQgPSBBcnJheS5mcm9tKG5ldyBTZXQoJyFAIyQlXiYqKCl7fVwiPD4nLnNwbGl0KCcnKSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hvaWNlPFQ+KGl0ZXJhYmxlOiBUW10pOiBUIHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZXJhYmxlLmxlbmd0aCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgIHJldHVybiBpdGVyYWJsZVtyYW5kb21JbmRleF0hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTdHJpbmcobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aW1lcyhsZW5ndGgsICgpID0+IGNob2ljZShDSEFSX1NFVCkpLmpvaW4oJycpO1xufVxuIiwidHlwZSBFbnRyaWVzPFQ+ID0ge1xuICAgIFtLIGluIGtleW9mIFRdOiBbSywgVFtLXV07XG59W2tleW9mIFRdW107XG5cbmV4cG9ydCBjb25zdCBlbnRyaWVzT2YgPSA8VD4oeDogVCk6IEVudHJpZXM8VD4gPT4gT2JqZWN0LmVudHJpZXMoeCkgYXMgRW50cmllczxUPjtcbmV4cG9ydCBjb25zdCBrZXlzT2YgPSA8VD4oeDogVCk6IChrZXlvZiBUKVtdID0+IE9iamVjdC5rZXlzKHgpIGFzIChrZXlvZiBUKVtdO1xuZXhwb3J0IGNvbnN0IHZhbHVlc09mID0gPFQ+KHg6IFQpOiAoVFtrZXlvZiBUXSlbXSA9PiBPYmplY3QudmFsdWVzKHgpIGFzIChUW2tleW9mIFRdKVtdO1xuXG5leHBvcnQgY29uc3QgdGltZXMgPSA8VD4objogbnVtYmVyLCBmbjogKGluZGV4OiBudW1iZXIpID0+IFQpOiBUW10gPT5cbiAgICBBcnJheS5mcm9tKHtsZW5ndGg6IG59LCAoXywgaW5kZXgpID0+IGZuKGluZGV4KSk7XG5cbmV4cG9ydCBjb25zdCB0cmltID0gKGxlbmd0aDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHZhbHVlLnN1YnN0cmluZygwLCBsZW5ndGgpO1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gKGZyb206IG51bWJlciwgdG86IG51bWJlciwgc3RlcCA9IDEpOiBudW1iZXJbXSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IGZyb207IGkgPCB0bzsgaSArPSBzdGVwKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuIiwiZnVuY3Rpb24gcGFyc2VVcmwodXJsOiBzdHJpbmcpOiBVUkwgfCB1bmRlZmluZWQge1xuICAgIGxldCB1cmxUb1BhcnNlID0gdXJsO1xuICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHVybFRvUGFyc2UgPSAgYGh0dHBzOi8vJHt1cmx9YDtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBuZXcgVVJMKHVybFRvUGFyc2UpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEhvc3QodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcnNlZFVybCA9IHBhcnNlVXJsKHVybCk7XG4gICAgcmV0dXJuIHBhcnNlZFVybCAhPSBudWxsID8gcGFyc2VkVXJsPy5ob3N0IDogdXJsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdE9yaWdpbih1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFyc2VkVXJsID0gcGFyc2VVcmwodXJsKTtcbiAgICByZXR1cm4gcGFyc2VkVXJsICE9IG51bGwgPyBwYXJzZWRVcmw/Lm9yaWdpbiA6IHVybDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVzZWxlY3RDdXJyZW50ID0gcmVxdWlyZShcInRvZ2dsZS1zZWxlY3Rpb25cIik7XG5cbnZhciBjbGlwYm9hcmRUb0lFMTFGb3JtYXR0aW5nID0ge1xuICBcInRleHQvcGxhaW5cIjogXCJUZXh0XCIsXG4gIFwidGV4dC9odG1sXCI6IFwiVXJsXCIsXG4gIFwiZGVmYXVsdFwiOiBcIlRleHRcIlxufVxuXG52YXIgZGVmYXVsdE1lc3NhZ2UgPSBcIkNvcHkgdG8gY2xpcGJvYXJkOiAje2tleX0sIEVudGVyXCI7XG5cbmZ1bmN0aW9uIGZvcm1hdChtZXNzYWdlKSB7XG4gIHZhciBjb3B5S2V5ID0gKC9tYWMgb3MgeC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyBcIuKMmFwiIDogXCJDdHJsXCIpICsgXCIrQ1wiO1xuICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKC8je1xccyprZXlcXHMqfS9nLCBjb3B5S2V5KTtcbn1cblxuZnVuY3Rpb24gY29weSh0ZXh0LCBvcHRpb25zKSB7XG4gIHZhciBkZWJ1ZyxcbiAgICBtZXNzYWdlLFxuICAgIHJlc2VsZWN0UHJldmlvdXMsXG4gICAgcmFuZ2UsXG4gICAgc2VsZWN0aW9uLFxuICAgIG1hcmssXG4gICAgc3VjY2VzcyA9IGZhbHNlO1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgZGVidWcgPSBvcHRpb25zLmRlYnVnIHx8IGZhbHNlO1xuICB0cnkge1xuICAgIHJlc2VsZWN0UHJldmlvdXMgPSBkZXNlbGVjdEN1cnJlbnQoKTtcblxuICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblxuICAgIG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBtYXJrLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAvLyByZXNldCB1c2VyIHN0eWxlcyBmb3Igc3BhbiBlbGVtZW50XG4gICAgbWFyay5zdHlsZS5hbGwgPSBcInVuc2V0XCI7XG4gICAgLy8gcHJldmVudHMgc2Nyb2xsaW5nIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2VcbiAgICBtYXJrLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIG1hcmsuc3R5bGUudG9wID0gMDtcbiAgICBtYXJrLnN0eWxlLmNsaXAgPSBcInJlY3QoMCwgMCwgMCwgMClcIjtcbiAgICAvLyB1c2VkIHRvIHByZXNlcnZlIHNwYWNlcyBhbmQgbGluZSBicmVha3NcbiAgICBtYXJrLnN0eWxlLndoaXRlU3BhY2UgPSBcInByZVwiO1xuICAgIC8vIGRvIG5vdCBpbmhlcml0IHVzZXItc2VsZWN0IChpdCBtYXkgYmUgYG5vbmVgKVxuICAgIG1hcmsuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuc3R5bGUuTW96VXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuc3R5bGUubXNVc2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5zdHlsZS51c2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKG9wdGlvbnMuZm9ybWF0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBlLmNsaXBib2FyZERhdGEgPT09IFwidW5kZWZpbmVkXCIpIHsgLy8gSUUgMTFcbiAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oXCJ1bmFibGUgdG8gdXNlIGUuY2xpcGJvYXJkRGF0YVwiKTtcbiAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oXCJ0cnlpbmcgSUUgc3BlY2lmaWMgc3R1ZmZcIik7XG4gICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuY2xlYXJEYXRhKCk7XG4gICAgICAgICAgdmFyIGZvcm1hdCA9IGNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmdbb3B0aW9ucy5mb3JtYXRdIHx8IGNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmdbXCJkZWZhdWx0XCJdXG4gICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YShmb3JtYXQsIHRleHQpO1xuICAgICAgICB9IGVsc2UgeyAvLyBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICAgICAgICBlLmNsaXBib2FyZERhdGEuY2xlYXJEYXRhKCk7XG4gICAgICAgICAgZS5jbGlwYm9hcmREYXRhLnNldERhdGEob3B0aW9ucy5mb3JtYXQsIHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5vbkNvcHkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvcHRpb25zLm9uQ29weShlLmNsaXBib2FyZERhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXJrKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhtYXJrKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgaWYgKCFzdWNjZXNzZnVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb3B5IGNvbW1hbmQgd2FzIHVuc3VjY2Vzc2Z1bFwiKTtcbiAgICB9XG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoXCJ1bmFibGUgdG8gY29weSB1c2luZyBleGVjQ29tbWFuZDogXCIsIGVycik7XG4gICAgZGVidWcgJiYgY29uc29sZS53YXJuKFwidHJ5aW5nIElFIHNwZWNpZmljIHN0dWZmXCIpO1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKG9wdGlvbnMuZm9ybWF0IHx8IFwidGV4dFwiLCB0ZXh0KTtcbiAgICAgIG9wdGlvbnMub25Db3B5ICYmIG9wdGlvbnMub25Db3B5KHdpbmRvdy5jbGlwYm9hcmREYXRhKTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcihcInVuYWJsZSB0byBjb3B5IHVzaW5nIGNsaXBib2FyZERhdGE6IFwiLCBlcnIpO1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcihcImZhbGxpbmcgYmFjayB0byBwcm9tcHRcIik7XG4gICAgICBtZXNzYWdlID0gZm9ybWF0KFwibWVzc2FnZVwiIGluIG9wdGlvbnMgPyBvcHRpb25zLm1lc3NhZ2UgOiBkZWZhdWx0TWVzc2FnZSk7XG4gICAgICB3aW5kb3cucHJvbXB0KG1lc3NhZ2UsIHRleHQpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdGlvbi5yZW1vdmVSYW5nZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZVJhbmdlKHJhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWFyaykge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYXJrKTtcbiAgICB9XG4gICAgcmVzZWxlY3RQcmV2aW91cygpO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW5oZXJpdGFuY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgLyoqXG4gICAqIEV4dGVuZHMgdGhpcyBvYmplY3QgYW5kIHJ1bnMgdGhlIGluaXQgbWV0aG9kLlxuICAgKiBBcmd1bWVudHMgdG8gY3JlYXRlKCkgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgaW5zdGFuY2UgPSBNeVR5cGUuY3JlYXRlKCk7XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQ29waWVzIHByb3BlcnRpZXMgaW50byB0aGlzIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gbWl4IGluLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgTXlUeXBlLm1peEluKHtcbiAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJ1xuICAgKiAgICAgfSk7XG4gICAqL1xuICBtaXhJbihwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgcHJvcGVydGllcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIGNsb25lID0gaW5zdGFuY2UuY2xvbmUoKTtcbiAgICovXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGNsb25lID0gbmV3IHRoaXMuY29uc3RydWN0b3IoKTtcbiAgICBPYmplY3QuYXNzaWduKGNsb25lLCB0aGlzKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG4gKlxuICogQHByb3BlcnR5IHtBcnJheX0gd29yZHMgVGhlIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmRBcnJheSBleHRlbmRzIEJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZSgpO1xuICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSk7XG4gICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdvcmRzID0gW10sIHNpZ0J5dGVzID0gd29yZHMubGVuZ3RoICogNCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBsZXQgdHlwZWRBcnJheSA9IHdvcmRzO1xuICAgIC8vIENvbnZlcnQgYnVmZmVycyB0byB1aW50OFxuICAgIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHR5cGVkQXJyYXkgPSBuZXcgVWludDhBcnJheSh0eXBlZEFycmF5KTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IG90aGVyIGFycmF5IHZpZXdzIHRvIHVpbnQ4XG4gICAgaWYgKFxuICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDhBcnJheVxuICAgICAgfHwgdHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5XG4gICAgICB8fCB0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MTZBcnJheVxuICAgICAgfHwgdHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XG4gICAgICB8fCB0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MzJBcnJheVxuICAgICAgfHwgdHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5XG4gICAgICB8fCB0eXBlZEFycmF5IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5XG4gICAgICB8fCB0eXBlZEFycmF5IGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5XG4gICAgKSB7XG4gICAgICB0eXBlZEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodHlwZWRBcnJheS5idWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5ieXRlTGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgVWludDhBcnJheVxuICAgIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgLy8gU2hvcnRjdXRcbiAgICAgIGNvbnN0IHR5cGVkQXJyYXlCeXRlTGVuZ3RoID0gdHlwZWRBcnJheS5ieXRlTGVuZ3RoO1xuXG4gICAgICAvLyBFeHRyYWN0IGJ5dGVzXG4gICAgICBjb25zdCBfd29yZHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZWRBcnJheUJ5dGVMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBfd29yZHNbaSA+Pj4gMl0gfD0gdHlwZWRBcnJheVtpXSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEluaXRpYWxpemUgdGhpcyB3b3JkIGFycmF5XG4gICAgICB0aGlzLndvcmRzID0gX3dvcmRzO1xuICAgICAgdGhpcy5zaWdCeXRlcyA9IHR5cGVkQXJyYXlCeXRlTGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBFbHNlIGNhbGwgbm9ybWFsIGluaXRcbiAgICAgIHRoaXMud29yZHMgPSB3b3JkcztcbiAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHdvcmQgYXJyYXkgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSByYW5kb20gd29yZCBhcnJheS5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkucmFuZG9tKDE2KTtcbiAgICovXG4gIHN0YXRpYyByYW5kb20obkJ5dGVzKSB7XG4gICAgY29uc3Qgd29yZHMgPSBbXTtcblxuICAgIGNvbnN0IHIgPSAobV93KSA9PiB7XG4gICAgICBsZXQgX21fdyA9IG1fdztcbiAgICAgIGxldCBfbV96ID0gMHgzYWRlNjhiMTtcbiAgICAgIGNvbnN0IG1hc2sgPSAweGZmZmZmZmZmO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBfbV96ID0gKDB4OTA2OSAqIChfbV96ICYgMHhGRkZGKSArIChfbV96ID4+IDB4MTApKSAmIG1hc2s7XG4gICAgICAgIF9tX3cgPSAoMHg0NjUwICogKF9tX3cgJiAweEZGRkYpICsgKF9tX3cgPj4gMHgxMCkpICYgbWFzaztcbiAgICAgICAgbGV0IHJlc3VsdCA9ICgoX21feiA8PCAweDEwKSArIF9tX3cpICYgbWFzaztcbiAgICAgICAgcmVzdWx0IC89IDB4MTAwMDAwMDAwO1xuICAgICAgICByZXN1bHQgKz0gMC41O1xuICAgICAgICByZXR1cm4gcmVzdWx0ICogKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIHJjYWNoZTsgaSA8IG5CeXRlczsgaSArPSA0KSB7XG4gICAgICBjb25zdCBfciA9IHIoKHJjYWNoZSB8fCBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDAwMDAwKTtcblxuICAgICAgcmNhY2hlID0gX3IoKSAqIDB4M2FkZTY3Yjc7XG4gICAgICB3b3Jkcy5wdXNoKChfcigpICogMHgxMDAwMDAwMDApIHwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkod29yZHMsIG5CeXRlcyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhpcyB3b3JkIGFycmF5IHRvIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0VuY29kZXJ9IGVuY29kZXIgKE9wdGlvbmFsKSBUaGUgZW5jb2Rpbmcgc3RyYXRlZ3kgdG8gdXNlLiBEZWZhdWx0OiBDcnlwdG9KUy5lbmMuSGV4XG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5ICsgJyc7XG4gICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKCk7XG4gICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICovXG4gIHRvU3RyaW5nKGVuY29kZXIgPSBIZXgpIHtcbiAgICByZXR1cm4gZW5jb2Rlci5zdHJpbmdpZnkodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGVzIGEgd29yZCBhcnJheSB0byB0aGlzIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuICAgKlxuICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoaXMgd29yZCBhcnJheS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuICAgKi9cbiAgY29uY2F0KHdvcmRBcnJheSkge1xuICAgIC8vIFNob3J0Y3V0c1xuICAgIGNvbnN0IHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG4gICAgY29uc3QgdGhhdFdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuICAgIGNvbnN0IHRoaXNTaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG4gICAgY29uc3QgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG4gICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcbiAgICB0aGlzLmNsYW1wKCk7XG5cbiAgICAvLyBDb25jYXRcbiAgICBpZiAodGhpc1NpZ0J5dGVzICUgNCkge1xuICAgICAgLy8gQ29weSBvbmUgYnl0ZSBhdCBhIHRpbWVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgdGhhdEJ5dGUgPSAodGhhdFdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcbiAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvcHkgb25lIHdvcmQgYXQgYSB0aW1lXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSArPSA0KSB7XG4gICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdID0gdGhhdFdvcmRzW2kgPj4+IDJdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNpZ0J5dGVzICs9IHRoYXRTaWdCeXRlcztcblxuICAgIC8vIENoYWluYWJsZVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgaW5zaWduaWZpY2FudCBiaXRzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgd29yZEFycmF5LmNsYW1wKCk7XG4gICAqL1xuICBjbGFtcCgpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCB7IHdvcmRzLCBzaWdCeXRlcyB9ID0gdGhpcztcblxuICAgIC8vIENsYW1wXG4gICAgd29yZHNbc2lnQnl0ZXMgPj4+IDJdICY9IDB4ZmZmZmZmZmYgPDwgKDMyIC0gKHNpZ0J5dGVzICUgNCkgKiA4KTtcbiAgICB3b3Jkcy5sZW5ndGggPSBNYXRoLmNlaWwoc2lnQnl0ZXMgLyA0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGNsb25lLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG4gICAqL1xuICBjbG9uZSgpIHtcbiAgICBjb25zdCBjbG9uZSA9IHN1cGVyLmNsb25lLmNhbGwodGhpcyk7XG4gICAgY2xvbmUud29yZHMgPSB0aGlzLndvcmRzLnNsaWNlKDApO1xuXG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG59XG5cbi8qKlxuICogSGV4IGVuY29kaW5nIHN0cmF0ZWd5LlxuICovXG5leHBvcnQgY29uc3QgSGV4ID0ge1xuICAvKipcbiAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaGV4IHN0cmluZy5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIGhleFN0cmluZyA9IENyeXB0b0pTLmVuYy5IZXguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG4gICAqL1xuICBzdHJpbmdpZnkod29yZEFycmF5KSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgeyB3b3Jkcywgc2lnQnl0ZXMgfSA9IHdvcmRBcnJheTtcblxuICAgIC8vIENvbnZlcnRcbiAgICBjb25zdCBoZXhDaGFycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG4gICAgICBoZXhDaGFycy5wdXNoKChiaXRlID4+PiA0KS50b1N0cmluZygxNikpO1xuICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSAmIDB4MGYpLnRvU3RyaW5nKDE2KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyIFRoZSBoZXggc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZShoZXhTdHJpbmcpO1xuICAgKi9cbiAgcGFyc2UoaGV4U3RyKSB7XG4gICAgLy8gU2hvcnRjdXRcbiAgICBjb25zdCBoZXhTdHJMZW5ndGggPSBoZXhTdHIubGVuZ3RoO1xuXG4gICAgLy8gQ29udmVydFxuICAgIGNvbnN0IHdvcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFdvcmRBcnJheSh3b3JkcywgaGV4U3RyTGVuZ3RoIC8gMik7XG4gIH0sXG59O1xuXG4vKipcbiAqIExhdGluMSBlbmNvZGluZyBzdHJhdGVneS5cbiAqL1xuZXhwb3J0IGNvbnN0IExhdGluMSA9IHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIExhdGluMSBzdHJpbmcuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciBsYXRpbjFTdHJpbmcgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuICAgKi9cbiAgc3RyaW5naWZ5KHdvcmRBcnJheSkge1xuICAgIC8vIFNob3J0Y3V0c1xuICAgIGNvbnN0IHsgd29yZHMsIHNpZ0J5dGVzIH0gPSB3b3JkQXJyYXk7XG5cbiAgICAvLyBDb252ZXJ0XG4gICAgY29uc3QgbGF0aW4xQ2hhcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuICAgICAgbGF0aW4xQ2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYXRpbjFTdHIgVGhlIExhdGluMSBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnBhcnNlKGxhdGluMVN0cmluZyk7XG4gICAqL1xuICBwYXJzZShsYXRpbjFTdHIpIHtcbiAgICAvLyBTaG9ydGN1dFxuICAgIGNvbnN0IGxhdGluMVN0ckxlbmd0aCA9IGxhdGluMVN0ci5sZW5ndGg7XG5cbiAgICAvLyBDb252ZXJ0XG4gICAgY29uc3Qgd29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkod29yZHMsIGxhdGluMVN0ckxlbmd0aCk7XG4gIH0sXG59O1xuXG4vKipcbiAqIFVURi04IGVuY29kaW5nIHN0cmF0ZWd5LlxuICovXG5leHBvcnQgY29uc3QgVXRmOCA9IHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi04IHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuICAgKi9cbiAgc3RyaW5naWZ5KHdvcmRBcnJheSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShMYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSkpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCBVVEYtOCBkYXRhJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1dGY4U3RyIFRoZSBVVEYtOCBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh1dGY4U3RyaW5nKTtcbiAgICovXG4gIHBhcnNlKHV0ZjhTdHIpIHtcbiAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuICB9LFxufTtcblxuLyoqXG4gKiBBYnN0cmFjdCBidWZmZXJlZCBibG9jayBhbGdvcml0aG0gdGVtcGxhdGUuXG4gKlxuICogVGhlIHByb3BlcnR5IGJsb2NrU2l6ZSBtdXN0IGJlIGltcGxlbWVudGVkIGluIGEgY29uY3JldGUgc3VidHlwZS5cbiAqXG4gKiBAcHJvcGVydHkge251bWJlcn0gX21pbkJ1ZmZlclNpemVcbiAqXG4gKiAgICAgVGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBzaG91bGQgYmUga2VwdCB1bnByb2Nlc3NlZCBpbiB0aGUgYnVmZmVyLiBEZWZhdWx0OiAwXG4gKi9cbmV4cG9ydCBjbGFzcyBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fbWluQnVmZmVyU2l6ZSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0KCk7XG4gICAqL1xuICByZXNldCgpIHtcbiAgICAvLyBJbml0aWFsIHZhbHVlc1xuICAgIHRoaXMuX2RhdGEgPSBuZXcgV29yZEFycmF5KCk7XG4gICAgdGhpcy5fbkRhdGFCeXRlcyA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBuZXcgZGF0YSB0byB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGJ1ZmZlci5cbiAgICpcbiAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhXG4gICAqXG4gICAqICAgICBUaGUgZGF0YSB0byBhcHBlbmQuIFN0cmluZ3MgYXJlIGNvbnZlcnRlZCB0byBhIFdvcmRBcnJheSB1c2luZyBVVEYtOC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCgnZGF0YScpO1xuICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG4gICAqL1xuICBfYXBwZW5kKGRhdGEpIHtcbiAgICBsZXQgbV9kYXRhID0gZGF0YTtcblxuICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcbiAgICBpZiAodHlwZW9mIG1fZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1fZGF0YSA9IFV0ZjgucGFyc2UobV9kYXRhKTtcbiAgICB9XG5cbiAgICAvLyBBcHBlbmRcbiAgICB0aGlzLl9kYXRhLmNvbmNhdChtX2RhdGEpO1xuICAgIHRoaXMuX25EYXRhQnl0ZXMgKz0gbV9kYXRhLnNpZ0J5dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGludm9rZXMgX2RvUHJvY2Vzc0Jsb2NrKG9mZnNldCksIHdoaWNoIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYSBjb25jcmV0ZSBzdWJ0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvRmx1c2ggV2hldGhlciBhbGwgYmxvY2tzIGFuZCBwYXJ0aWFsIGJsb2NrcyBzaG91bGQgYmUgcHJvY2Vzc2VkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcygpO1xuICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCEhJ2ZsdXNoJyk7XG4gICAqL1xuICBfcHJvY2Vzcyhkb0ZsdXNoKSB7XG4gICAgbGV0IHByb2Nlc3NlZFdvcmRzO1xuXG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgeyBfZGF0YTogZGF0YSwgYmxvY2tTaXplIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG4gICAgY29uc3QgZGF0YVNpZ0J5dGVzID0gZGF0YS5zaWdCeXRlcztcbiAgICBjb25zdCBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cbiAgICAvLyBDb3VudCBibG9ja3MgcmVhZHlcbiAgICBsZXQgbkJsb2Nrc1JlYWR5ID0gZGF0YVNpZ0J5dGVzIC8gYmxvY2tTaXplQnl0ZXM7XG4gICAgaWYgKGRvRmx1c2gpIHtcbiAgICAgIC8vIFJvdW5kIHVwIHRvIGluY2x1ZGUgcGFydGlhbCBibG9ja3NcbiAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSb3VuZCBkb3duIHRvIGluY2x1ZGUgb25seSBmdWxsIGJsb2NrcyxcbiAgICAgIC8vIGxlc3MgdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBtdXN0IHJlbWFpbiBpbiB0aGUgYnVmZmVyXG4gICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcbiAgICB9XG5cbiAgICAvLyBDb3VudCB3b3JkcyByZWFkeVxuICAgIGNvbnN0IG5Xb3Jkc1JlYWR5ID0gbkJsb2Nrc1JlYWR5ICogYmxvY2tTaXplO1xuXG4gICAgLy8gQ291bnQgYnl0ZXMgcmVhZHlcbiAgICBjb25zdCBuQnl0ZXNSZWFkeSA9IE1hdGgubWluKG5Xb3Jkc1JlYWR5ICogNCwgZGF0YVNpZ0J5dGVzKTtcblxuICAgIC8vIFByb2Nlc3MgYmxvY2tzXG4gICAgaWYgKG5Xb3Jkc1JlYWR5KSB7XG4gICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBuV29yZHNSZWFkeTsgb2Zmc2V0ICs9IGJsb2NrU2l6ZSkge1xuICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWFsZ29yaXRobSBsb2dpY1xuICAgICAgICB0aGlzLl9kb1Byb2Nlc3NCbG9jayhkYXRhV29yZHMsIG9mZnNldCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBwcm9jZXNzZWQgd29yZHNcbiAgICAgIHByb2Nlc3NlZFdvcmRzID0gZGF0YVdvcmRzLnNwbGljZSgwLCBuV29yZHNSZWFkeSk7XG4gICAgICBkYXRhLnNpZ0J5dGVzIC09IG5CeXRlc1JlYWR5O1xuICAgIH1cblxuICAgIC8vIFJldHVybiBwcm9jZXNzZWQgd29yZHNcbiAgICByZXR1cm4gbmV3IFdvcmRBcnJheShwcm9jZXNzZWRXb3JkcywgbkJ5dGVzUmVhZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciBjbG9uZSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uY2xvbmUoKTtcbiAgICovXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGNsb25lID0gc3VwZXIuY2xvbmUuY2FsbCh0aGlzKTtcbiAgICBjbG9uZS5fZGF0YSA9IHRoaXMuX2RhdGEuY2xvbmUoKTtcblxuICAgIHJldHVybiBjbG9uZTtcbiAgfVxufVxuXG4vKipcbiAqIEFic3RyYWN0IGhhc2hlciB0ZW1wbGF0ZS5cbiAqXG4gKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplXG4gKlxuICogICAgIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgaGFzaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiAxNiAoNTEyIGJpdHMpXG4gKi9cbmV4cG9ydCBjbGFzcyBIYXNoZXIgZXh0ZW5kcyBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtIHtcbiAgY29uc3RydWN0b3IoY2ZnKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYmxvY2tTaXplID0gNTEyIC8gMzI7XG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gICAgICovXG4gICAgdGhpcy5jZmcgPSBPYmplY3QuYXNzaWduKG5ldyBCYXNlKCksIGNmZyk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cbiAgICpcbiAgICogQHBhcmFtIHtIYXNoZXJ9IFN1Ykhhc2hlciBUaGUgaGFzaGVyIHRvIGNyZWF0ZSBhIGhlbHBlciBmb3IuXG4gICAqXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciBTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuICAgKi9cbiAgc3RhdGljIF9jcmVhdGVIZWxwZXIoU3ViSGFzaGVyKSB7XG4gICAgcmV0dXJuIChtZXNzYWdlLCBjZmcpID0+IG5ldyBTdWJIYXNoZXIoY2ZnKS5maW5hbGl6ZShtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hhc2hlcn0gU3ViSGFzaGVyIFRoZSBoYXNoZXIgdG8gdXNlIGluIHRoaXMgSE1BQyBoZWxwZXIuXG4gICAqXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciBIbWFjU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG4gICAqL1xuICBzdGF0aWMgX2NyZWF0ZUhtYWNIZWxwZXIoU3ViSGFzaGVyKSB7XG4gICAgcmV0dXJuIChtZXNzYWdlLCBrZXkpID0+IG5ldyBITUFDKFN1Ykhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICBoYXNoZXIucmVzZXQoKTtcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG4gICAgc3VwZXIucmVzZXQuY2FsbCh0aGlzKTtcblxuICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG4gICAgdGhpcy5fZG9SZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSBUaGUgbWVzc2FnZSB0byBhcHBlbmQuXG4gICAqXG4gICAqIEByZXR1cm4ge0hhc2hlcn0gVGhpcyBoYXNoZXIuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICBoYXNoZXIudXBkYXRlKCdtZXNzYWdlJyk7XG4gICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG4gICAqL1xuICB1cGRhdGUobWVzc2FnZVVwZGF0ZSkge1xuICAgIC8vIEFwcGVuZFxuICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuICAgIC8vIENoYWluYWJsZVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmFsaXplcyB0aGUgaGFzaCBjb21wdXRhdGlvbi5cbiAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cbiAgICpcbiAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCk7XG4gICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUod29yZEFycmF5KTtcbiAgICovXG4gIGZpbmFsaXplKG1lc3NhZ2VVcGRhdGUpIHtcbiAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuICAgIGlmIChtZXNzYWdlVXBkYXRlKSB7XG4gICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcbiAgICBjb25zdCBoYXNoID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xuXG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cbn1cblxuLyoqXG4gKiBITUFDIGFsZ29yaXRobS5cbiAqL1xuZXhwb3J0IGNsYXNzIEhNQUMgZXh0ZW5kcyBCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBITUFDLlxuICAgKlxuICAgKiBAcGFyYW0ge0hhc2hlcn0gU3ViSGFzaGVyIFRoZSBoYXNoIGFsZ29yaXRobSB0byB1c2UuXG4gICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIGhtYWNIYXNoZXIgPSBDcnlwdG9KUy5hbGdvLkhNQUMuY3JlYXRlKENyeXB0b0pTLmFsZ28uU0hBMjU2LCBrZXkpO1xuICAgKi9cbiAgY29uc3RydWN0b3IoU3ViSGFzaGVyLCBrZXkpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3QgaGFzaGVyID0gbmV3IFN1Ykhhc2hlcigpO1xuICAgIHRoaXMuX2hhc2hlciA9IGhhc2hlcjtcblxuICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcbiAgICBsZXQgX2tleSA9IGtleTtcbiAgICBpZiAodHlwZW9mIF9rZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBfa2V5ID0gVXRmOC5wYXJzZShfa2V5KTtcbiAgICB9XG5cbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBoYXNoZXJCbG9ja1NpemUgPSBoYXNoZXIuYmxvY2tTaXplO1xuICAgIGNvbnN0IGhhc2hlckJsb2NrU2l6ZUJ5dGVzID0gaGFzaGVyQmxvY2tTaXplICogNDtcblxuICAgIC8vIEFsbG93IGFyYml0cmFyeSBsZW5ndGgga2V5c1xuICAgIGlmIChfa2V5LnNpZ0J5dGVzID4gaGFzaGVyQmxvY2tTaXplQnl0ZXMpIHtcbiAgICAgIF9rZXkgPSBoYXNoZXIuZmluYWxpemUoa2V5KTtcbiAgICB9XG5cbiAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuICAgIF9rZXkuY2xhbXAoKTtcblxuICAgIC8vIENsb25lIGtleSBmb3IgaW5uZXIgYW5kIG91dGVyIHBhZHNcbiAgICBjb25zdCBvS2V5ID0gX2tleS5jbG9uZSgpO1xuICAgIHRoaXMuX29LZXkgPSBvS2V5O1xuICAgIGNvbnN0IGlLZXkgPSBfa2V5LmNsb25lKCk7XG4gICAgdGhpcy5faUtleSA9IGlLZXk7XG5cbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBvS2V5V29yZHMgPSBvS2V5LndvcmRzO1xuICAgIGNvbnN0IGlLZXlXb3JkcyA9IGlLZXkud29yZHM7XG5cbiAgICAvLyBYT1Iga2V5cyB3aXRoIHBhZCBjb25zdGFudHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhc2hlckJsb2NrU2l6ZTsgaSArPSAxKSB7XG4gICAgICBvS2V5V29yZHNbaV0gXj0gMHg1YzVjNWM1YztcbiAgICAgIGlLZXlXb3Jkc1tpXSBePSAweDM2MzYzNjM2O1xuICAgIH1cbiAgICBvS2V5LnNpZ0J5dGVzID0gaGFzaGVyQmxvY2tTaXplQnl0ZXM7XG4gICAgaUtleS5zaWdCeXRlcyA9IGhhc2hlckJsb2NrU2l6ZUJ5dGVzO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGlzIEhNQUMgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICBobWFjSGFzaGVyLnJlc2V0KCk7XG4gICAqL1xuICByZXNldCgpIHtcbiAgICAvLyBTaG9ydGN1dFxuICAgIGNvbnN0IGhhc2hlciA9IHRoaXMuX2hhc2hlcjtcblxuICAgIC8vIFJlc2V0XG4gICAgaGFzaGVyLnJlc2V0KCk7XG4gICAgaGFzaGVyLnVwZGF0ZSh0aGlzLl9pS2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoaXMgSE1BQyB3aXRoIGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIFRoZSBtZXNzYWdlIHRvIGFwcGVuZC5cbiAgICpcbiAgICogQHJldHVybiB7SE1BQ30gVGhpcyBITUFDIGluc3RhbmNlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgaG1hY0hhc2hlci51cGRhdGUoJ21lc3NhZ2UnKTtcbiAgICogICAgIGhtYWNIYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG4gICAqL1xuICB1cGRhdGUobWVzc2FnZVVwZGF0ZSkge1xuICAgIHRoaXMuX2hhc2hlci51cGRhdGUobWVzc2FnZVVwZGF0ZSk7XG5cbiAgICAvLyBDaGFpbmFibGVcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5hbGl6ZXMgdGhlIEhNQUMgY29tcHV0YXRpb24uXG4gICAqIE5vdGUgdGhhdCB0aGUgZmluYWxpemUgb3BlcmF0aW9uIGlzIGVmZmVjdGl2ZWx5IGEgZGVzdHJ1Y3RpdmUsIHJlYWQtb25jZSBvcGVyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG4gICAqXG4gICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgaG1hYyA9IGhtYWNIYXNoZXIuZmluYWxpemUoKTtcbiAgICogICAgIHZhciBobWFjID0gaG1hY0hhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuICAgKiAgICAgdmFyIGhtYWMgPSBobWFjSGFzaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG4gICAqL1xuICBmaW5hbGl6ZShtZXNzYWdlVXBkYXRlKSB7XG4gICAgLy8gU2hvcnRjdXRcbiAgICBjb25zdCBoYXNoZXIgPSB0aGlzLl9oYXNoZXI7XG5cbiAgICAvLyBDb21wdXRlIEhNQUNcbiAgICBjb25zdCBpbm5lckhhc2ggPSBoYXNoZXIuZmluYWxpemUobWVzc2FnZVVwZGF0ZSk7XG4gICAgaGFzaGVyLnJlc2V0KCk7XG4gICAgY29uc3QgaG1hYyA9IGhhc2hlci5maW5hbGl6ZSh0aGlzLl9vS2V5LmNsb25lKCkuY29uY2F0KGlubmVySGFzaCkpO1xuXG4gICAgcmV0dXJuIGhtYWM7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFdvcmRBcnJheSxcbn0gZnJvbSAnLi9jb3JlLmpzJztcblxuY29uc3QgcGFyc2VMb29wID0gKGJhc2U2NFN0ciwgYmFzZTY0U3RyTGVuZ3RoLCByZXZlcnNlTWFwKSA9PiB7XG4gIGNvbnN0IHdvcmRzID0gW107XG4gIGxldCBuQnl0ZXMgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2U2NFN0ckxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGkgJSA0KSB7XG4gICAgICBjb25zdCBiaXRzMSA9IHJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaSAtIDEpXSA8PCAoKGkgJSA0KSAqIDIpO1xuICAgICAgY29uc3QgYml0czIgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkpXSA+Pj4gKDYgLSAoaSAlIDQpICogMik7XG4gICAgICBjb25zdCBiaXRzQ29tYmluZWQgPSBiaXRzMSB8IGJpdHMyO1xuICAgICAgd29yZHNbbkJ5dGVzID4+PiAyXSB8PSBiaXRzQ29tYmluZWQgPDwgKDI0IC0gKG5CeXRlcyAlIDQpICogOCk7XG4gICAgICBuQnl0ZXMgKz0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFdvcmRBcnJheS5jcmVhdGUod29yZHMsIG5CeXRlcyk7XG59O1xuXG4vKipcbiAqIEJhc2U2NCBlbmNvZGluZyBzdHJhdGVneS5cbiAqL1xuZXhwb3J0IGNvbnN0IEJhc2U2NCA9IHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIEJhc2U2NCBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEJhc2U2NCBzdHJpbmcuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIGNvbnN0IGJhc2U2NFN0cmluZyA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG4gICAqL1xuICBzdHJpbmdpZnkod29yZEFycmF5KSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgeyB3b3Jkcywgc2lnQnl0ZXMgfSA9IHdvcmRBcnJheTtcbiAgICBjb25zdCBtYXAgPSB0aGlzLl9tYXA7XG5cbiAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXG4gICAgLy8gQ29udmVydFxuICAgIGNvbnN0IGJhc2U2NENoYXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSArPSAzKSB7XG4gICAgICBjb25zdCBieXRlMSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG4gICAgICBjb25zdCBieXRlMiA9ICh3b3Jkc1soaSArIDEpID4+PiAyXSA+Pj4gKDI0IC0gKChpICsgMSkgJSA0KSAqIDgpKSAmIDB4ZmY7XG4gICAgICBjb25zdCBieXRlMyA9ICh3b3Jkc1soaSArIDIpID4+PiAyXSA+Pj4gKDI0IC0gKChpICsgMikgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cbiAgICAgIGNvbnN0IHRyaXBsZXQgPSAoYnl0ZTEgPDwgMTYpIHwgKGJ5dGUyIDw8IDgpIHwgYnl0ZTM7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyAoaiA8IDQpICYmIChpICsgaiAqIDAuNzUgPCBzaWdCeXRlcyk7IGogKz0gMSkge1xuICAgICAgICBiYXNlNjRDaGFycy5wdXNoKG1hcC5jaGFyQXQoKHRyaXBsZXQgPj4+ICg2ICogKDMgLSBqKSkpICYgMHgzZikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBwYWRkaW5nXG4gICAgY29uc3QgcGFkZGluZ0NoYXIgPSBtYXAuY2hhckF0KDY0KTtcbiAgICBpZiAocGFkZGluZ0NoYXIpIHtcbiAgICAgIHdoaWxlIChiYXNlNjRDaGFycy5sZW5ndGggJSA0KSB7XG4gICAgICAgIGJhc2U2NENoYXJzLnB1c2gocGFkZGluZ0NoYXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYXNlNjRDaGFycy5qb2luKCcnKTtcbiAgfSxcblxuICAvKipcbiAgICogQ29udmVydHMgYSBCYXNlNjQgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2U2NFN0ciBUaGUgQmFzZTY0IHN0cmluZy5cbiAgICpcbiAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgY29uc3Qgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5wYXJzZShiYXNlNjRTdHJpbmcpO1xuICAgKi9cbiAgcGFyc2UoYmFzZTY0U3RyKSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgbGV0IGJhc2U2NFN0ckxlbmd0aCA9IGJhc2U2NFN0ci5sZW5ndGg7XG4gICAgY29uc3QgbWFwID0gdGhpcy5fbWFwO1xuICAgIGxldCByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcDtcblxuICAgIGlmICghcmV2ZXJzZU1hcCkge1xuICAgICAgdGhpcy5fcmV2ZXJzZU1hcCA9IFtdO1xuICAgICAgcmV2ZXJzZU1hcCA9IHRoaXMuX3JldmVyc2VNYXA7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hcC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICByZXZlcnNlTWFwW21hcC5jaGFyQ29kZUF0KGopXSA9IGo7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIHBhZGRpbmdcbiAgICBjb25zdCBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xuICAgIGlmIChwYWRkaW5nQ2hhcikge1xuICAgICAgY29uc3QgcGFkZGluZ0luZGV4ID0gYmFzZTY0U3RyLmluZGV4T2YocGFkZGluZ0NoYXIpO1xuICAgICAgaWYgKHBhZGRpbmdJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgYmFzZTY0U3RyTGVuZ3RoID0gcGFkZGluZ0luZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbnZlcnRcbiAgICByZXR1cm4gcGFyc2VMb29wKGJhc2U2NFN0ciwgYmFzZTY0U3RyTGVuZ3RoLCByZXZlcnNlTWFwKTtcbiAgfSxcblxuICBfbWFwOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nLFxufTtcbiIsImltcG9ydCB7XG4gIFdvcmRBcnJheSxcbiAgSGFzaGVyLFxufSBmcm9tICcuL2NvcmUuanMnO1xuXG4vLyBDb25zdGFudHMgdGFibGVcbmNvbnN0IFQgPSBbXTtcblxuLy8gQ29tcHV0ZSBjb25zdGFudHNcbmZvciAobGV0IGkgPSAwOyBpIDwgNjQ7IGkgKz0gMSkge1xuICBUW2ldID0gKE1hdGguYWJzKE1hdGguc2luKGkgKyAxKSkgKiAweDEwMDAwMDAwMCkgfCAwO1xufVxuXG5jb25zdCBGRiA9IChhLCBiLCBjLCBkLCB4LCBzLCB0KSA9PiB7XG4gIGNvbnN0IG4gPSBhICsgKChiICYgYykgfCAofmIgJiBkKSkgKyB4ICsgdDtcbiAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcbn07XG5cbmNvbnN0IEdHID0gKGEsIGIsIGMsIGQsIHgsIHMsIHQpID0+IHtcbiAgY29uc3QgbiA9IGEgKyAoKGIgJiBkKSB8IChjICYgfmQpKSArIHggKyB0O1xuICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xufTtcblxuY29uc3QgSEggPSAoYSwgYiwgYywgZCwgeCwgcywgdCkgPT4ge1xuICBjb25zdCBuID0gYSArIChiIF4gYyBeIGQpICsgeCArIHQ7XG4gIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XG59O1xuXG5jb25zdCBJSSA9IChhLCBiLCBjLCBkLCB4LCBzLCB0KSA9PiB7XG4gIGNvbnN0IG4gPSBhICsgKGMgXiAoYiB8IH5kKSkgKyB4ICsgdDtcbiAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcbn07XG5cbi8qKlxuICogTUQ1IGhhc2ggYWxnb3JpdGhtLlxuICovXG5leHBvcnQgY2xhc3MgTUQ1QWxnbyBleHRlbmRzIEhhc2hlciB7XG4gIF9kb1Jlc2V0KCkge1xuICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5KFtcbiAgICAgIDB4Njc0NTIzMDEsXG4gICAgICAweGVmY2RhYjg5LFxuICAgICAgMHg5OGJhZGNmZSxcbiAgICAgIDB4MTAzMjU0NzYsXG4gICAgXSk7XG4gIH1cblxuICBfZG9Qcm9jZXNzQmxvY2soTSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgX00gPSBNO1xuXG4gICAgLy8gU3dhcCBlbmRpYW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpICs9IDEpIHtcbiAgICAgIC8vIFNob3J0Y3V0c1xuICAgICAgY29uc3Qgb2Zmc2V0X2kgPSBvZmZzZXQgKyBpO1xuICAgICAgY29uc3QgTV9vZmZzZXRfaSA9IE1bb2Zmc2V0X2ldO1xuXG4gICAgICBfTVtvZmZzZXRfaV0gPSAoXG4gICAgICAgICgoKE1fb2Zmc2V0X2kgPDwgOCkgfCAoTV9vZmZzZXRfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpXG4gICAgICAgICAgfCAoKChNX29mZnNldF9pIDw8IDI0KSB8IChNX29mZnNldF9pID4+PiA4KSkgJiAweGZmMDBmZjAwKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBIID0gdGhpcy5faGFzaC53b3JkcztcblxuICAgIGNvbnN0IE1fb2Zmc2V0XzAgPSBfTVtvZmZzZXQgKyAwXTtcbiAgICBjb25zdCBNX29mZnNldF8xID0gX01bb2Zmc2V0ICsgMV07XG4gICAgY29uc3QgTV9vZmZzZXRfMiA9IF9NW29mZnNldCArIDJdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzMgPSBfTVtvZmZzZXQgKyAzXTtcbiAgICBjb25zdCBNX29mZnNldF80ID0gX01bb2Zmc2V0ICsgNF07XG4gICAgY29uc3QgTV9vZmZzZXRfNSA9IF9NW29mZnNldCArIDVdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzYgPSBfTVtvZmZzZXQgKyA2XTtcbiAgICBjb25zdCBNX29mZnNldF83ID0gX01bb2Zmc2V0ICsgN107XG4gICAgY29uc3QgTV9vZmZzZXRfOCA9IF9NW29mZnNldCArIDhdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzkgPSBfTVtvZmZzZXQgKyA5XTtcbiAgICBjb25zdCBNX29mZnNldF8xMCA9IF9NW29mZnNldCArIDEwXTtcbiAgICBjb25zdCBNX29mZnNldF8xMSA9IF9NW29mZnNldCArIDExXTtcbiAgICBjb25zdCBNX29mZnNldF8xMiA9IF9NW29mZnNldCArIDEyXTtcbiAgICBjb25zdCBNX29mZnNldF8xMyA9IF9NW29mZnNldCArIDEzXTtcbiAgICBjb25zdCBNX29mZnNldF8xNCA9IF9NW29mZnNldCArIDE0XTtcbiAgICBjb25zdCBNX29mZnNldF8xNSA9IF9NW29mZnNldCArIDE1XTtcblxuICAgIC8vIFdvcmtpbmcgdmFyaWFsYmVzXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuXG4gICAgLy8gQ29tcHV0YXRpb25cbiAgICBhID0gRkYoYSwgYiwgYywgZCwgTV9vZmZzZXRfMCwgNywgVFswXSk7XG4gICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEsIDEyLCBUWzFdKTtcbiAgICBjID0gRkYoYywgZCwgYSwgYiwgTV9vZmZzZXRfMiwgMTcsIFRbMl0pO1xuICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF8zLCAyMiwgVFszXSk7XG4gICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzQsIDcsIFRbNF0pO1xuICAgIGQgPSBGRihkLCBhLCBiLCBjLCBNX29mZnNldF81LCAxMiwgVFs1XSk7XG4gICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzYsIDE3LCBUWzZdKTtcbiAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfNywgMjIsIFRbN10pO1xuICAgIGEgPSBGRihhLCBiLCBjLCBkLCBNX29mZnNldF84LCA3LCBUWzhdKTtcbiAgICBkID0gRkYoZCwgYSwgYiwgYywgTV9vZmZzZXRfOSwgMTIsIFRbOV0pO1xuICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF8xMCwgMTcsIFRbMTBdKTtcbiAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTEsIDIyLCBUWzExXSk7XG4gICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEyLCA3LCBUWzEyXSk7XG4gICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEzLCAxMiwgVFsxM10pO1xuICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF8xNCwgMTcsIFRbMTRdKTtcbiAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTUsIDIyLCBUWzE1XSk7XG5cbiAgICBhID0gR0coYSwgYiwgYywgZCwgTV9vZmZzZXRfMSwgNSwgVFsxNl0pO1xuICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBNX29mZnNldF82LCA5LCBUWzE3XSk7XG4gICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzExLCAxNCwgVFsxOF0pO1xuICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF8wLCAyMCwgVFsxOV0pO1xuICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF81LCA1LCBUWzIwXSk7XG4gICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEwLCA5LCBUWzIxXSk7XG4gICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzE1LCAxNCwgVFsyMl0pO1xuICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF80LCAyMCwgVFsyM10pO1xuICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF85LCA1LCBUWzI0XSk7XG4gICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzE0LCA5LCBUWzI1XSk7XG4gICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzMsIDE0LCBUWzI2XSk7XG4gICAgYiA9IEdHKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzgsIDIwLCBUWzI3XSk7XG4gICAgYSA9IEdHKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEzLCA1LCBUWzI4XSk7XG4gICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzIsIDksIFRbMjldKTtcbiAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfNywgMTQsIFRbMzBdKTtcbiAgICBiID0gR0coYiwgYywgZCwgYSwgTV9vZmZzZXRfMTIsIDIwLCBUWzMxXSk7XG5cbiAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfNSwgNCwgVFszMl0pO1xuICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF84LCAxMSwgVFszM10pO1xuICAgIGMgPSBISChjLCBkLCBhLCBiLCBNX29mZnNldF8xMSwgMTYsIFRbMzRdKTtcbiAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTQsIDIzLCBUWzM1XSk7XG4gICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEsIDQsIFRbMzZdKTtcbiAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfNCwgMTEsIFRbMzddKTtcbiAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfNywgMTYsIFRbMzhdKTtcbiAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTAsIDIzLCBUWzM5XSk7XG4gICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEzLCA0LCBUWzQwXSk7XG4gICAgZCA9IEhIKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzAsIDExLCBUWzQxXSk7XG4gICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzMsIDE2LCBUWzQyXSk7XG4gICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzYsIDIzLCBUWzQzXSk7XG4gICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzksIDQsIFRbNDRdKTtcbiAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTIsIDExLCBUWzQ1XSk7XG4gICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzE1LCAxNiwgVFs0Nl0pO1xuICAgIGIgPSBISChiLCBjLCBkLCBhLCBNX29mZnNldF8yLCAyMywgVFs0N10pO1xuXG4gICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzAsIDYsIFRbNDhdKTtcbiAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfNywgMTAsIFRbNDldKTtcbiAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTQsIDE1LCBUWzUwXSk7XG4gICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzUsIDIxLCBUWzUxXSk7XG4gICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEyLCA2LCBUWzUyXSk7XG4gICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzMsIDEwLCBUWzUzXSk7XG4gICAgYyA9IElJKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzEwLCAxNSwgVFs1NF0pO1xuICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF8xLCAyMSwgVFs1NV0pO1xuICAgIGEgPSBJSShhLCBiLCBjLCBkLCBNX29mZnNldF84LCA2LCBUWzU2XSk7XG4gICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzE1LCAxMCwgVFs1N10pO1xuICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF82LCAxNSwgVFs1OF0pO1xuICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF8xMywgMjEsIFRbNTldKTtcbiAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfNCwgNiwgVFs2MF0pO1xuICAgIGQgPSBJSShkLCBhLCBiLCBjLCBNX29mZnNldF8xMSwgMTAsIFRbNjFdKTtcbiAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfMiwgMTUsIFRbNjJdKTtcbiAgICBiID0gSUkoYiwgYywgZCwgYSwgTV9vZmZzZXRfOSwgMjEsIFRbNjNdKTtcblxuICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG4gICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xuICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcbiAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG4gICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xuICB9XG4gIC8qIGVzbGludC1lbnNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbiAgX2RvRmluYWxpemUoKSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGE7XG4gICAgY29uc3QgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuICAgIGNvbnN0IG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcbiAgICBjb25zdCBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuICAgIC8vIEFkZCBwYWRkaW5nXG4gICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSAobkJpdHNMZWZ0ICUgMzIpKTtcblxuICAgIGNvbnN0IG5CaXRzVG90YWxIID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuICAgIGNvbnN0IG5CaXRzVG90YWxMID0gbkJpdHNUb3RhbDtcbiAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IChcbiAgICAgICgoKG5CaXRzVG90YWxIIDw8IDgpIHwgKG5CaXRzVG90YWxIID4+PiAyNCkpICYgMHgwMGZmMDBmZilcbiAgICAgICAgfCAoKChuQml0c1RvdGFsSCA8PCAyNCkgfCAobkJpdHNUb3RhbEggPj4+IDgpKSAmIDB4ZmYwMGZmMDApXG4gICAgKTtcbiAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IChcbiAgICAgICgoKG5CaXRzVG90YWxMIDw8IDgpIHwgKG5CaXRzVG90YWxMID4+PiAyNCkpICYgMHgwMGZmMDBmZilcbiAgICAgICAgfCAoKChuQml0c1RvdGFsTCA8PCAyNCkgfCAobkJpdHNUb3RhbEwgPj4+IDgpKSAmIDB4ZmYwMGZmMDApXG4gICAgKTtcblxuICAgIGRhdGEuc2lnQnl0ZXMgPSAoZGF0YVdvcmRzLmxlbmd0aCArIDEpICogNDtcblxuICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG4gICAgdGhpcy5fcHJvY2VzcygpO1xuXG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgaGFzaCA9IHRoaXMuX2hhc2g7XG4gICAgY29uc3QgSCA9IGhhc2gud29yZHM7XG5cbiAgICAvLyBTd2FwIGVuZGlhblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICAvLyBTaG9ydGN1dFxuICAgICAgY29uc3QgSF9pID0gSFtpXTtcblxuICAgICAgSFtpXSA9ICgoKEhfaSA8PCA4KSB8IChIX2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKVxuICAgICAgICB8ICgoKEhfaSA8PCAyNCkgfCAoSF9pID4+PiA4KSkgJiAweGZmMDBmZjAwKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgY2xvbmUgPSBzdXBlci5jbG9uZS5jYWxsKHRoaXMpO1xuICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG4gKlxuICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cbiAqXG4gKiBAc3RhdGljXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5NRDUoJ21lc3NhZ2UnKTtcbiAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLk1ENSh3b3JkQXJyYXkpO1xuICovXG5leHBvcnQgY29uc3QgTUQ1ID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoTUQ1QWxnbyk7XG5cbi8qKlxuICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuICpcbiAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG4gKlxuICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cbiAqXG4gKiBAc3RhdGljXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjTUQ1KG1lc3NhZ2UsIGtleSk7XG4gKi9cbmV4cG9ydCBjb25zdCBIbWFjTUQ1ID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKE1ENUFsZ28pO1xuIiwiLyoqIEBwcmVzZXJ2ZVxuKGMpIDIwMTIgYnkgQ8OpZHJpYyBNZXNuaWwuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cblJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWRcbnByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiAgICAtIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mXG4gICAgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICAgIC0gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3RcbiAgICBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFsc1xuICAgIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTXG5PUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUlxuQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG5XSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZXG5XQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7XG4gIFdvcmRBcnJheSxcbiAgSGFzaGVyLFxufSBmcm9tICcuL2NvcmUuanMnO1xuXG4vLyBDb25zdGFudHMgdGFibGVcbmNvbnN0IF96bCA9IFdvcmRBcnJheS5jcmVhdGUoW1xuICAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxuICA3LCA0LCAxMywgMSwgMTAsIDYsIDE1LCAzLCAxMiwgMCwgOSwgNSwgMiwgMTQsIDExLCA4LFxuICAzLCAxMCwgMTQsIDQsIDksIDE1LCA4LCAxLCAyLCA3LCAwLCA2LCAxMywgMTEsIDUsIDEyLFxuICAxLCA5LCAxMSwgMTAsIDAsIDgsIDEyLCA0LCAxMywgMywgNywgMTUsIDE0LCA1LCA2LCAyLFxuICA0LCAwLCA1LCA5LCA3LCAxMiwgMiwgMTAsIDE0LCAxLCAzLCA4LCAxMSwgNiwgMTUsIDEzXSk7XG5jb25zdCBfenIgPSBXb3JkQXJyYXkuY3JlYXRlKFtcbiAgNSwgMTQsIDcsIDAsIDksIDIsIDExLCA0LCAxMywgNiwgMTUsIDgsIDEsIDEwLCAzLCAxMixcbiAgNiwgMTEsIDMsIDcsIDAsIDEzLCA1LCAxMCwgMTQsIDE1LCA4LCAxMiwgNCwgOSwgMSwgMixcbiAgMTUsIDUsIDEsIDMsIDcsIDE0LCA2LCA5LCAxMSwgOCwgMTIsIDIsIDEwLCAwLCA0LCAxMyxcbiAgOCwgNiwgNCwgMSwgMywgMTEsIDE1LCAwLCA1LCAxMiwgMiwgMTMsIDksIDcsIDEwLCAxNCxcbiAgMTIsIDE1LCAxMCwgNCwgMSwgNSwgOCwgNywgNiwgMiwgMTMsIDE0LCAwLCAzLCA5LCAxMV0pO1xuY29uc3QgX3NsID0gV29yZEFycmF5LmNyZWF0ZShbXG4gIDExLCAxNCwgMTUsIDEyLCA1LCA4LCA3LCA5LCAxMSwgMTMsIDE0LCAxNSwgNiwgNywgOSwgOCxcbiAgNywgNiwgOCwgMTMsIDExLCA5LCA3LCAxNSwgNywgMTIsIDE1LCA5LCAxMSwgNywgMTMsIDEyLFxuICAxMSwgMTMsIDYsIDcsIDE0LCA5LCAxMywgMTUsIDE0LCA4LCAxMywgNiwgNSwgMTIsIDcsIDUsXG4gIDExLCAxMiwgMTQsIDE1LCAxNCwgMTUsIDksIDgsIDksIDE0LCA1LCA2LCA4LCA2LCA1LCAxMixcbiAgOSwgMTUsIDUsIDExLCA2LCA4LCAxMywgMTIsIDUsIDEyLCAxMywgMTQsIDExLCA4LCA1LCA2XSk7XG5jb25zdCBfc3IgPSBXb3JkQXJyYXkuY3JlYXRlKFtcbiAgOCwgOSwgOSwgMTEsIDEzLCAxNSwgMTUsIDUsIDcsIDcsIDgsIDExLCAxNCwgMTQsIDEyLCA2LFxuICA5LCAxMywgMTUsIDcsIDEyLCA4LCA5LCAxMSwgNywgNywgMTIsIDcsIDYsIDE1LCAxMywgMTEsXG4gIDksIDcsIDE1LCAxMSwgOCwgNiwgNiwgMTQsIDEyLCAxMywgNSwgMTQsIDEzLCAxMywgNywgNSxcbiAgMTUsIDUsIDgsIDExLCAxNCwgMTQsIDYsIDE0LCA2LCA5LCAxMiwgOSwgMTIsIDUsIDE1LCA4LFxuICA4LCA1LCAxMiwgOSwgMTIsIDUsIDE0LCA2LCA4LCAxMywgNiwgNSwgMTUsIDEzLCAxMSwgMTFdKTtcblxuY29uc3QgX2hsID0gV29yZEFycmF5LmNyZWF0ZShbMHgwMDAwMDAwMCwgMHg1QTgyNzk5OSwgMHg2RUQ5RUJBMSwgMHg4RjFCQkNEQywgMHhBOTUzRkQ0RV0pO1xuY29uc3QgX2hyID0gV29yZEFycmF5LmNyZWF0ZShbMHg1MEEyOEJFNiwgMHg1QzRERDEyNCwgMHg2RDcwM0VGMywgMHg3QTZENzZFOSwgMHgwMDAwMDAwMF0pO1xuXG5jb25zdCBmMSA9ICh4LCB5LCB6KSA9PiAoeCkgXiAoeSkgXiAoeik7XG5cbmNvbnN0IGYyID0gKHgsIHksIHopID0+ICgoeCkgJiAoeSkpIHwgKCh+eCkgJiAoeikpO1xuXG5jb25zdCBmMyA9ICh4LCB5LCB6KSA9PiAoKHgpIHwgKH4oeSkpKSBeICh6KTtcblxuY29uc3QgZjQgPSAoeCwgeSwgeikgPT4gKCh4KSAmICh6KSkgfCAoKHkpICYgKH4oeikpKTtcblxuY29uc3QgZjUgPSAoeCwgeSwgeikgPT4gKHgpIF4gKCh5KSB8ICh+KHopKSk7XG5cbmNvbnN0IHJvdGwgPSAoeCwgbikgPT4gKHggPDwgbikgfCAoeCA+Pj4gKDMyIC0gbikpO1xuXG4vKipcbiAqIFJJUEVNRDE2MCBoYXNoIGFsZ29yaXRobS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJJUEVNRDE2MEFsZ28gZXh0ZW5kcyBIYXNoZXIge1xuICBfZG9SZXNldCgpIHtcbiAgICB0aGlzLl9oYXNoID0gV29yZEFycmF5LmNyZWF0ZShbMHg2NzQ1MjMwMSwgMHhFRkNEQUI4OSwgMHg5OEJBRENGRSwgMHgxMDMyNTQ3NiwgMHhDM0QyRTFGMF0pO1xuICB9XG5cbiAgX2RvUHJvY2Vzc0Jsb2NrKE0sIG9mZnNldCkge1xuICAgIGNvbnN0IF9NID0gTTtcblxuICAgIC8vIFN3YXAgZW5kaWFuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSArPSAxKSB7XG4gICAgICAvLyBTaG9ydGN1dHNcbiAgICAgIGNvbnN0IG9mZnNldF9pID0gb2Zmc2V0ICsgaTtcbiAgICAgIGNvbnN0IE1fb2Zmc2V0X2kgPSBfTVtvZmZzZXRfaV07XG5cbiAgICAgIC8vIFN3YXBcbiAgICAgIF9NW29mZnNldF9pXSA9IChcbiAgICAgICAgKCgoTV9vZmZzZXRfaSA8PCA4KSB8IChNX29mZnNldF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZilcbiAgICAgICAgICB8ICgoKE1fb2Zmc2V0X2kgPDwgMjQpIHwgKE1fb2Zmc2V0X2kgPj4+IDgpKSAmIDB4ZmYwMGZmMDApXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBTaG9ydGN1dFxuICAgIGNvbnN0IEggPSB0aGlzLl9oYXNoLndvcmRzO1xuICAgIGNvbnN0IGhsID0gX2hsLndvcmRzO1xuICAgIGNvbnN0IGhyID0gX2hyLndvcmRzO1xuICAgIGNvbnN0IHpsID0gX3psLndvcmRzO1xuICAgIGNvbnN0IHpyID0gX3pyLndvcmRzO1xuICAgIGNvbnN0IHNsID0gX3NsLndvcmRzO1xuICAgIGNvbnN0IHNyID0gX3NyLndvcmRzO1xuXG4gICAgLy8gV29ya2luZyB2YXJpYWJsZXNcbiAgICBsZXQgYWwgPSBIWzBdO1xuICAgIGxldCBibCA9IEhbMV07XG4gICAgbGV0IGNsID0gSFsyXTtcbiAgICBsZXQgZGwgPSBIWzNdO1xuICAgIGxldCBlbCA9IEhbNF07XG4gICAgbGV0IGFyID0gSFswXTtcbiAgICBsZXQgYnIgPSBIWzFdO1xuICAgIGxldCBjciA9IEhbMl07XG4gICAgbGV0IGRyID0gSFszXTtcbiAgICBsZXQgZXIgPSBIWzRdO1xuXG4gICAgLy8gQ29tcHV0YXRpb25cbiAgICBsZXQgdDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpICs9IDEpIHtcbiAgICAgIHQgPSAoYWwgKyBfTVtvZmZzZXQgKyB6bFtpXV0pIHwgMDtcbiAgICAgIGlmIChpIDwgMTYpIHtcbiAgICAgICAgdCArPSBmMShibCwgY2wsIGRsKSArIGhsWzBdO1xuICAgICAgfSBlbHNlIGlmIChpIDwgMzIpIHtcbiAgICAgICAgdCArPSBmMihibCwgY2wsIGRsKSArIGhsWzFdO1xuICAgICAgfSBlbHNlIGlmIChpIDwgNDgpIHtcbiAgICAgICAgdCArPSBmMyhibCwgY2wsIGRsKSArIGhsWzJdO1xuICAgICAgfSBlbHNlIGlmIChpIDwgNjQpIHtcbiAgICAgICAgdCArPSBmNChibCwgY2wsIGRsKSArIGhsWzNdO1xuICAgICAgfSBlbHNlIHsgLy8gaWYgKGk8ODApIHtcbiAgICAgICAgdCArPSBmNShibCwgY2wsIGRsKSArIGhsWzRdO1xuICAgICAgfVxuICAgICAgdCB8PSAwO1xuICAgICAgdCA9IHJvdGwodCwgc2xbaV0pO1xuICAgICAgdCA9ICh0ICsgZWwpIHwgMDtcbiAgICAgIGFsID0gZWw7XG4gICAgICBlbCA9IGRsO1xuICAgICAgZGwgPSByb3RsKGNsLCAxMCk7XG4gICAgICBjbCA9IGJsO1xuICAgICAgYmwgPSB0O1xuXG4gICAgICB0ID0gKGFyICsgX01bb2Zmc2V0ICsgenJbaV1dKSB8IDA7XG4gICAgICBpZiAoaSA8IDE2KSB7XG4gICAgICAgIHQgKz0gZjUoYnIsIGNyLCBkcikgKyBoclswXTtcbiAgICAgIH0gZWxzZSBpZiAoaSA8IDMyKSB7XG4gICAgICAgIHQgKz0gZjQoYnIsIGNyLCBkcikgKyBoclsxXTtcbiAgICAgIH0gZWxzZSBpZiAoaSA8IDQ4KSB7XG4gICAgICAgIHQgKz0gZjMoYnIsIGNyLCBkcikgKyBoclsyXTtcbiAgICAgIH0gZWxzZSBpZiAoaSA8IDY0KSB7XG4gICAgICAgIHQgKz0gZjIoYnIsIGNyLCBkcikgKyBoclszXTtcbiAgICAgIH0gZWxzZSB7IC8vIGlmIChpPDgwKSB7XG4gICAgICAgIHQgKz0gZjEoYnIsIGNyLCBkcikgKyBocls0XTtcbiAgICAgIH1cbiAgICAgIHQgfD0gMDtcbiAgICAgIHQgPSByb3RsKHQsIHNyW2ldKTtcbiAgICAgIHQgPSAodCArIGVyKSB8IDA7XG4gICAgICBhciA9IGVyO1xuICAgICAgZXIgPSBkcjtcbiAgICAgIGRyID0gcm90bChjciwgMTApO1xuICAgICAgY3IgPSBicjtcbiAgICAgIGJyID0gdDtcbiAgICB9XG4gICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcbiAgICB0ID0gKEhbMV0gKyBjbCArIGRyKSB8IDA7XG4gICAgSFsxXSA9IChIWzJdICsgZGwgKyBlcikgfCAwO1xuICAgIEhbMl0gPSAoSFszXSArIGVsICsgYXIpIHwgMDtcbiAgICBIWzNdID0gKEhbNF0gKyBhbCArIGJyKSB8IDA7XG4gICAgSFs0XSA9IChIWzBdICsgYmwgKyBjcikgfCAwO1xuICAgIEhbMF0gPSB0O1xuICB9XG5cbiAgX2RvRmluYWxpemUoKSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGE7XG4gICAgY29uc3QgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuICAgIGNvbnN0IG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcbiAgICBjb25zdCBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuICAgIC8vIEFkZCBwYWRkaW5nXG4gICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSAobkJpdHNMZWZ0ICUgMzIpKTtcbiAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IChcbiAgICAgICgoKG5CaXRzVG90YWwgPDwgOCkgfCAobkJpdHNUb3RhbCA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpXG4gICAgICAgIHwgKCgobkJpdHNUb3RhbCA8PCAyNCkgfCAobkJpdHNUb3RhbCA+Pj4gOCkpICYgMHhmZjAwZmYwMClcbiAgICApO1xuICAgIGRhdGEuc2lnQnl0ZXMgPSAoZGF0YVdvcmRzLmxlbmd0aCArIDEpICogNDtcblxuICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG4gICAgdGhpcy5fcHJvY2VzcygpO1xuXG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgaGFzaCA9IHRoaXMuX2hhc2g7XG4gICAgY29uc3QgSCA9IGhhc2gud29yZHM7XG5cbiAgICAvLyBTd2FwIGVuZGlhblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgICAvLyBTaG9ydGN1dFxuICAgICAgY29uc3QgSF9pID0gSFtpXTtcblxuICAgICAgLy8gU3dhcFxuICAgICAgSFtpXSA9ICgoKEhfaSA8PCA4KSB8IChIX2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKVxuICAgICAgICB8ICgoKEhfaSA8PCAyNCkgfCAoSF9pID4+PiA4KSkgJiAweGZmMDBmZjAwKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgY2xvbmUgPSBzdXBlci5jbG9uZS5jYWxsKHRoaXMpO1xuICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG4gKlxuICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cbiAqXG4gKiBAc3RhdGljXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5SSVBFTUQxNjAoJ21lc3NhZ2UnKTtcbiAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlJJUEVNRDE2MCh3b3JkQXJyYXkpO1xuICovXG5leHBvcnQgY29uc3QgUklQRU1EMTYwID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoUklQRU1EMTYwQWxnbyk7XG5cbi8qKlxuICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuICpcbiAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG4gKlxuICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cbiAqXG4gKiBAc3RhdGljXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjUklQRU1EMTYwKG1lc3NhZ2UsIGtleSk7XG4gKi9cbmV4cG9ydCBjb25zdCBIbWFjUklQRU1EMTYwID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFJJUEVNRDE2MEFsZ28pO1xuIiwiaW1wb3J0IHtcbiAgV29yZEFycmF5LFxuICBIYXNoZXIsXG59IGZyb20gJy4vY29yZS5qcyc7XG5cbi8vIEluaXRpYWxpemF0aW9uIGFuZCByb3VuZCBjb25zdGFudHMgdGFibGVzXG5jb25zdCBIID0gW107XG5jb25zdCBLID0gW107XG5cbi8vIENvbXB1dGUgY29uc3RhbnRzXG5jb25zdCBpc1ByaW1lID0gKG4pID0+IHtcbiAgY29uc3Qgc3FydE4gPSBNYXRoLnNxcnQobik7XG4gIGZvciAobGV0IGZhY3RvciA9IDI7IGZhY3RvciA8PSBzcXJ0TjsgZmFjdG9yICs9IDEpIHtcbiAgICBpZiAoIShuICUgZmFjdG9yKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgZ2V0RnJhY3Rpb25hbEJpdHMgPSBuID0+ICgobiAtIChuIHwgMCkpICogMHgxMDAwMDAwMDApIHwgMDtcblxubGV0IG4gPSAyO1xubGV0IG5QcmltZSA9IDA7XG53aGlsZSAoblByaW1lIDwgNjQpIHtcbiAgaWYgKGlzUHJpbWUobikpIHtcbiAgICBpZiAoblByaW1lIDwgOCkge1xuICAgICAgSFtuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMobiAqKiAoMSAvIDIpKTtcbiAgICB9XG4gICAgS1tuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMobiAqKiAoMSAvIDMpKTtcblxuICAgIG5QcmltZSArPSAxO1xuICB9XG5cbiAgbiArPSAxO1xufVxuXG4vLyBSZXVzYWJsZSBvYmplY3RcbmNvbnN0IFcgPSBbXTtcblxuLyoqXG4gKiBTSEEtMjU2IGhhc2ggYWxnb3JpdGhtLlxuICovXG5leHBvcnQgY2xhc3MgU0hBMjU2QWxnbyBleHRlbmRzIEhhc2hlciB7XG4gIF9kb1Jlc2V0KCkge1xuICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5KEguc2xpY2UoMCkpO1xuICB9XG5cbiAgX2RvUHJvY2Vzc0Jsb2NrKE0sIG9mZnNldCkge1xuICAgIC8vIFNob3J0Y3V0XG4gICAgY29uc3QgX0ggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG4gICAgLy8gV29ya2luZyB2YXJpYWJsZXNcbiAgICBsZXQgYSA9IF9IWzBdO1xuICAgIGxldCBiID0gX0hbMV07XG4gICAgbGV0IGMgPSBfSFsyXTtcbiAgICBsZXQgZCA9IF9IWzNdO1xuICAgIGxldCBlID0gX0hbNF07XG4gICAgbGV0IGYgPSBfSFs1XTtcbiAgICBsZXQgZyA9IF9IWzZdO1xuICAgIGxldCBoID0gX0hbN107XG5cbiAgICAvLyBDb21wdXRhdGlvblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjQ7IGkgKz0gMSkge1xuICAgICAgaWYgKGkgPCAxNikge1xuICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBnYW1tYTB4ID0gV1tpIC0gMTVdO1xuICAgICAgICBjb25zdCBnYW1tYTAgPSAoKGdhbW1hMHggPDwgMjUpIHwgKGdhbW1hMHggPj4+IDcpKVxuICAgICAgICAgIF4gKChnYW1tYTB4IDw8IDE0KSB8IChnYW1tYTB4ID4+PiAxOCkpXG4gICAgICAgICAgXiAoZ2FtbWEweCA+Pj4gMyk7XG5cbiAgICAgICAgY29uc3QgZ2FtbWExeCA9IFdbaSAtIDJdO1xuICAgICAgICBjb25zdCBnYW1tYTEgPSAoKGdhbW1hMXggPDwgMTUpIHwgKGdhbW1hMXggPj4+IDE3KSlcbiAgICAgICAgICBeICgoZ2FtbWExeCA8PCAxMykgfCAoZ2FtbWExeCA+Pj4gMTkpKVxuICAgICAgICAgIF4gKGdhbW1hMXggPj4+IDEwKTtcblxuICAgICAgICBXW2ldID0gZ2FtbWEwICsgV1tpIC0gN10gKyBnYW1tYTEgKyBXW2kgLSAxNl07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoID0gKGUgJiBmKSBeICh+ZSAmIGcpO1xuICAgICAgY29uc3QgbWFqID0gKGEgJiBiKSBeIChhICYgYykgXiAoYiAmIGMpO1xuXG4gICAgICBjb25zdCBzaWdtYTAgPSAoKGEgPDwgMzApIHwgKGEgPj4+IDIpKSBeICgoYSA8PCAxOSkgfCAoYSA+Pj4gMTMpKSBeICgoYSA8PCAxMCkgfCAoYSA+Pj4gMjIpKTtcbiAgICAgIGNvbnN0IHNpZ21hMSA9ICgoZSA8PCAyNikgfCAoZSA+Pj4gNikpIF4gKChlIDw8IDIxKSB8IChlID4+PiAxMSkpIF4gKChlIDw8IDcpIHwgKGUgPj4+IDI1KSk7XG5cbiAgICAgIGNvbnN0IHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV07XG4gICAgICBjb25zdCB0MiA9IHNpZ21hMCArIG1hajtcblxuICAgICAgaCA9IGc7XG4gICAgICBnID0gZjtcbiAgICAgIGYgPSBlO1xuICAgICAgZSA9IChkICsgdDEpIHwgMDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IGI7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSAodDEgKyB0MikgfCAwO1xuICAgIH1cblxuICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG4gICAgX0hbMF0gPSAoX0hbMF0gKyBhKSB8IDA7XG4gICAgX0hbMV0gPSAoX0hbMV0gKyBiKSB8IDA7XG4gICAgX0hbMl0gPSAoX0hbMl0gKyBjKSB8IDA7XG4gICAgX0hbM10gPSAoX0hbM10gKyBkKSB8IDA7XG4gICAgX0hbNF0gPSAoX0hbNF0gKyBlKSB8IDA7XG4gICAgX0hbNV0gPSAoX0hbNV0gKyBmKSB8IDA7XG4gICAgX0hbNl0gPSAoX0hbNl0gKyBnKSB8IDA7XG4gICAgX0hbN10gPSAoX0hbN10gKyBoKSB8IDA7XG4gIH1cblxuICBfZG9GaW5hbGl6ZSgpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YTtcbiAgICBjb25zdCBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG4gICAgY29uc3QgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuICAgIGNvbnN0IG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG4gICAgLy8gQWRkIHBhZGRpbmdcbiAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIChuQml0c0xlZnQgJSAzMikpO1xuICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gbkJpdHNUb3RhbDtcbiAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XG5cbiAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG4gICAgcmV0dXJuIHRoaXMuX2hhc2g7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBjbG9uZSA9IHN1cGVyLmNsb25lLmNhbGwodGhpcyk7XG4gICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cbiAqXG4gKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuICpcbiAqIEBzdGF0aWNcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1NignbWVzc2FnZScpO1xuICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHdvcmRBcnJheSk7XG4gKi9cbmV4cG9ydCBjb25zdCBTSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEEyNTZBbGdvKTtcblxuLyoqXG4gKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG4gKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cbiAqXG4gKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuICpcbiAqIEBzdGF0aWNcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEyNTYobWVzc2FnZSwga2V5KTtcbiAqL1xuZXhwb3J0IGNvbnN0IEhtYWNTSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMjU2QWxnbyk7XG4iLCJpbXBvcnQge1xuICBXb3JkQXJyYXksXG4gIEhhc2hlcixcbn0gZnJvbSAnLi9jb3JlLmpzJztcbmltcG9ydCB7IFg2NFdvcmQgfSBmcm9tICcuL3g2NC1jb3JlLmpzJztcblxuLy8gQ29uc3RhbnRzIHRhYmxlc1xuY29uc3QgUkhPX09GRlNFVFMgPSBbXTtcbmNvbnN0IFBJX0lOREVYRVMgPSBbXTtcbmNvbnN0IFJPVU5EX0NPTlNUQU5UUyA9IFtdO1xuXG4vLyBDb21wdXRlIENvbnN0YW50c1xuLy8gQ29tcHV0ZSByaG8gb2Zmc2V0IGNvbnN0YW50c1xubGV0IF94ID0gMTtcbmxldCBfeSA9IDA7XG5mb3IgKGxldCB0ID0gMDsgdCA8IDI0OyB0ICs9IDEpIHtcbiAgUkhPX09GRlNFVFNbX3ggKyA1ICogX3ldID0gKCh0ICsgMSkgKiAodCArIDIpIC8gMikgJSA2NDtcblxuICBjb25zdCBuZXdYID0gX3kgJSA1O1xuICBjb25zdCBuZXdZID0gKDIgKiBfeCArIDMgKiBfeSkgJSA1O1xuICBfeCA9IG5ld1g7XG4gIF95ID0gbmV3WTtcbn1cblxuLy8gQ29tcHV0ZSBwaSBpbmRleCBjb25zdGFudHNcbmZvciAobGV0IHggPSAwOyB4IDwgNTsgeCArPSAxKSB7XG4gIGZvciAobGV0IHkgPSAwOyB5IDwgNTsgeSArPSAxKSB7XG4gICAgUElfSU5ERVhFU1t4ICsgNSAqIHldID0geSArICgoMiAqIHggKyAzICogeSkgJSA1KSAqIDU7XG4gIH1cbn1cblxuLy8gQ29tcHV0ZSByb3VuZCBjb25zdGFudHNcbmxldCBMRlNSID0gMHgwMTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkge1xuICBsZXQgcm91bmRDb25zdGFudE1zdyA9IDA7XG4gIGxldCByb3VuZENvbnN0YW50THN3ID0gMDtcblxuICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGogKz0gMSkge1xuICAgIGlmIChMRlNSICYgMHgwMSkge1xuICAgICAgY29uc3QgYml0UG9zaXRpb24gPSAoMSA8PCBqKSAtIDE7XG4gICAgICBpZiAoYml0UG9zaXRpb24gPCAzMikge1xuICAgICAgICByb3VuZENvbnN0YW50THN3IF49IDEgPDwgYml0UG9zaXRpb247XG4gICAgICB9IGVsc2UgLyogaWYgKGJpdFBvc2l0aW9uID49IDMyKSAqLyB7XG4gICAgICAgIHJvdW5kQ29uc3RhbnRNc3cgXj0gMSA8PCAoYml0UG9zaXRpb24gLSAzMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBuZXh0IExGU1JcbiAgICBpZiAoTEZTUiAmIDB4ODApIHtcbiAgICAgIC8vIFByaW1pdGl2ZSBwb2x5bm9taWFsIG92ZXIgR0YoMik6IHheOCArIHheNiArIHheNSArIHheNCArIDFcbiAgICAgIExGU1IgPSAoTEZTUiA8PCAxKSBeIDB4NzE7XG4gICAgfSBlbHNlIHtcbiAgICAgIExGU1IgPDw9IDE7XG4gICAgfVxuICB9XG5cbiAgUk9VTkRfQ09OU1RBTlRTW2ldID0gWDY0V29yZC5jcmVhdGUocm91bmRDb25zdGFudE1zdywgcm91bmRDb25zdGFudExzdyk7XG59XG5cbi8vIFJldXNhYmxlIG9iamVjdHMgZm9yIHRlbXBvcmFyeSB2YWx1ZXNcbmNvbnN0IFQgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU7IGkgKz0gMSkge1xuICBUW2ldID0gWDY0V29yZC5jcmVhdGUoKTtcbn1cblxuLyoqXG4gKiBTSEEtMyBoYXNoIGFsZ29yaXRobS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNIQTNBbGdvIGV4dGVuZHMgSGFzaGVyIHtcbiAgY29uc3RydWN0b3IoY2ZnKSB7XG4gICAgLyoqXG4gICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IG91dHB1dExlbmd0aFxuICAgICAqICAgVGhlIGRlc2lyZWQgbnVtYmVyIG9mIGJpdHMgaW4gdGhlIG91dHB1dCBoYXNoLlxuICAgICAqICAgT25seSB2YWx1ZXMgcGVybWl0dGVkIGFyZTogMjI0LCAyNTYsIDM4NCwgNTEyLlxuICAgICAqICAgRGVmYXVsdDogNTEyXG4gICAgICovXG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgb3V0cHV0TGVuZ3RoOiA1MTIgfSxcbiAgICAgIGNmZyxcbiAgICApKTtcbiAgfVxuXG4gIF9kb1Jlc2V0KCkge1xuICAgIHRoaXMuX3N0YXRlID0gW107XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9zdGF0ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1OyBpICs9IDEpIHtcbiAgICAgIHN0YXRlW2ldID0gbmV3IFg2NFdvcmQoKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrU2l6ZSA9ICgxNjAwIC0gMiAqIHRoaXMuY2ZnLm91dHB1dExlbmd0aCkgLyAzMjtcbiAgfVxuXG4gIF9kb1Byb2Nlc3NCbG9jayhNLCBvZmZzZXQpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgIGNvbnN0IG5CbG9ja1NpemVMYW5lcyA9IHRoaXMuYmxvY2tTaXplIC8gMjtcblxuICAgIC8vIEFic29yYlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbkJsb2NrU2l6ZUxhbmVzOyBpICs9IDEpIHtcbiAgICAgIC8vIFNob3J0Y3V0c1xuICAgICAgbGV0IE0yaSA9IE1bb2Zmc2V0ICsgMiAqIGldO1xuICAgICAgbGV0IE0yaTEgPSBNW29mZnNldCArIDIgKiBpICsgMV07XG5cbiAgICAgIC8vIFN3YXAgZW5kaWFuXG4gICAgICBNMmkgPSAoKChNMmkgPDwgOCkgfCAoTTJpID4+PiAyNCkpICYgMHgwMGZmMDBmZilcbiAgICAgICAgfCAoKChNMmkgPDwgMjQpIHwgKE0yaSA+Pj4gOCkpICYgMHhmZjAwZmYwMCk7XG4gICAgICBNMmkxID0gKCgoTTJpMSA8PCA4KSB8IChNMmkxID4+PiAyNCkpICYgMHgwMGZmMDBmZilcbiAgICAgICAgfCAoKChNMmkxIDw8IDI0KSB8IChNMmkxID4+PiA4KSkgJiAweGZmMDBmZjAwKTtcblxuICAgICAgLy8gQWJzb3JiIG1lc3NhZ2UgaW50byBzdGF0ZVxuICAgICAgY29uc3QgbGFuZSA9IHN0YXRlW2ldO1xuICAgICAgbGFuZS5oaWdoIF49IE0yaTE7XG4gICAgICBsYW5lLmxvdyBePSBNMmk7XG4gICAgfVxuXG4gICAgLy8gUm91bmRzXG4gICAgZm9yIChsZXQgcm91bmQgPSAwOyByb3VuZCA8IDI0OyByb3VuZCArPSAxKSB7XG4gICAgICAvLyBUaGV0YVxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4ICs9IDEpIHtcbiAgICAgICAgLy8gTWl4IGNvbHVtbiBsYW5lc1xuICAgICAgICBsZXQgdE1zdyA9IDA7XG4gICAgICAgIGxldCB0THN3ID0gMDtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCA1OyB5ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBsYW5lID0gc3RhdGVbeCArIDUgKiB5XTtcbiAgICAgICAgICB0TXN3IF49IGxhbmUuaGlnaDtcbiAgICAgICAgICB0THN3IF49IGxhbmUubG93O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGVtcG9yYXJ5IHZhbHVlc1xuICAgICAgICBjb25zdCBUeCA9IFRbeF07XG4gICAgICAgIFR4LmhpZ2ggPSB0TXN3O1xuICAgICAgICBUeC5sb3cgPSB0THN3O1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4ICs9IDEpIHtcbiAgICAgICAgLy8gU2hvcnRjdXRzXG4gICAgICAgIGNvbnN0IFR4NCA9IFRbKHggKyA0KSAlIDVdO1xuICAgICAgICBjb25zdCBUeDEgPSBUWyh4ICsgMSkgJSA1XTtcbiAgICAgICAgY29uc3QgVHgxTXN3ID0gVHgxLmhpZ2g7XG4gICAgICAgIGNvbnN0IFR4MUxzdyA9IFR4MS5sb3c7XG5cbiAgICAgICAgLy8gTWl4IHN1cnJvdW5kaW5nIGNvbHVtbnNcbiAgICAgICAgY29uc3QgdE1zdyA9IFR4NC5oaWdoIF4gKChUeDFNc3cgPDwgMSkgfCAoVHgxTHN3ID4+PiAzMSkpO1xuICAgICAgICBjb25zdCB0THN3ID0gVHg0LmxvdyBeICgoVHgxTHN3IDw8IDEpIHwgKFR4MU1zdyA+Pj4gMzEpKTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCA1OyB5ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBsYW5lID0gc3RhdGVbeCArIDUgKiB5XTtcbiAgICAgICAgICBsYW5lLmhpZ2ggXj0gdE1zdztcbiAgICAgICAgICBsYW5lLmxvdyBePSB0THN3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJobyBQaVxuICAgICAgZm9yIChsZXQgbGFuZUluZGV4ID0gMTsgbGFuZUluZGV4IDwgMjU7IGxhbmVJbmRleCArPSAxKSB7XG4gICAgICAgIGxldCB0TXN3O1xuICAgICAgICBsZXQgdExzdztcblxuICAgICAgICAvLyBTaG9ydGN1dHNcbiAgICAgICAgY29uc3QgbGFuZSA9IHN0YXRlW2xhbmVJbmRleF07XG4gICAgICAgIGNvbnN0IGxhbmVNc3cgPSBsYW5lLmhpZ2g7XG4gICAgICAgIGNvbnN0IGxhbmVMc3cgPSBsYW5lLmxvdztcbiAgICAgICAgY29uc3QgcmhvT2Zmc2V0ID0gUkhPX09GRlNFVFNbbGFuZUluZGV4XTtcblxuICAgICAgICAvLyBSb3RhdGUgbGFuZXNcbiAgICAgICAgaWYgKHJob09mZnNldCA8IDMyKSB7XG4gICAgICAgICAgdE1zdyA9IChsYW5lTXN3IDw8IHJob09mZnNldCkgfCAobGFuZUxzdyA+Pj4gKDMyIC0gcmhvT2Zmc2V0KSk7XG4gICAgICAgICAgdExzdyA9IChsYW5lTHN3IDw8IHJob09mZnNldCkgfCAobGFuZU1zdyA+Pj4gKDMyIC0gcmhvT2Zmc2V0KSk7XG4gICAgICAgIH0gZWxzZSAvKiBpZiAocmhvT2Zmc2V0ID49IDMyKSAqLyB7XG4gICAgICAgICAgdE1zdyA9IChsYW5lTHN3IDw8IChyaG9PZmZzZXQgLSAzMikpIHwgKGxhbmVNc3cgPj4+ICg2NCAtIHJob09mZnNldCkpO1xuICAgICAgICAgIHRMc3cgPSAobGFuZU1zdyA8PCAocmhvT2Zmc2V0IC0gMzIpKSB8IChsYW5lTHN3ID4+PiAoNjQgLSByaG9PZmZzZXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyYW5zcG9zZSBsYW5lc1xuICAgICAgICBjb25zdCBUUGlMYW5lID0gVFtQSV9JTkRFWEVTW2xhbmVJbmRleF1dO1xuICAgICAgICBUUGlMYW5lLmhpZ2ggPSB0TXN3O1xuICAgICAgICBUUGlMYW5lLmxvdyA9IHRMc3c7XG4gICAgICB9XG5cbiAgICAgIC8vIFJobyBwaSBhdCB4ID0geSA9IDBcbiAgICAgIGNvbnN0IFQwID0gVFswXTtcbiAgICAgIGNvbnN0IHN0YXRlMCA9IHN0YXRlWzBdO1xuICAgICAgVDAuaGlnaCA9IHN0YXRlMC5oaWdoO1xuICAgICAgVDAubG93ID0gc3RhdGUwLmxvdztcblxuICAgICAgLy8gQ2hpXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHggKz0gMSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDU7IHkgKz0gMSkge1xuICAgICAgICAgIC8vIFNob3J0Y3V0c1xuICAgICAgICAgIGNvbnN0IGxhbmVJbmRleCA9IHggKyA1ICogeTtcbiAgICAgICAgICBjb25zdCBsYW5lID0gc3RhdGVbbGFuZUluZGV4XTtcbiAgICAgICAgICBjb25zdCBUTGFuZSA9IFRbbGFuZUluZGV4XTtcbiAgICAgICAgICBjb25zdCBUeDFMYW5lID0gVFsoKHggKyAxKSAlIDUpICsgNSAqIHldO1xuICAgICAgICAgIGNvbnN0IFR4MkxhbmUgPSBUWygoeCArIDIpICUgNSkgKyA1ICogeV07XG5cbiAgICAgICAgICAvLyBNaXggcm93c1xuICAgICAgICAgIGxhbmUuaGlnaCA9IFRMYW5lLmhpZ2ggXiAoflR4MUxhbmUuaGlnaCAmIFR4MkxhbmUuaGlnaCk7XG4gICAgICAgICAgbGFuZS5sb3cgPSBUTGFuZS5sb3cgXiAoflR4MUxhbmUubG93ICYgVHgyTGFuZS5sb3cpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElvdGFcbiAgICAgIGNvbnN0IGxhbmUgPSBzdGF0ZVswXTtcbiAgICAgIGNvbnN0IHJvdW5kQ29uc3RhbnQgPSBST1VORF9DT05TVEFOVFNbcm91bmRdO1xuICAgICAgbGFuZS5oaWdoIF49IHJvdW5kQ29uc3RhbnQuaGlnaDtcbiAgICAgIGxhbmUubG93IF49IHJvdW5kQ29uc3RhbnQubG93O1xuICAgIH1cbiAgfVxuXG4gIF9kb0ZpbmFsaXplKCkge1xuICAgIC8vIFNob3J0Y3V0c1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhO1xuICAgIGNvbnN0IGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG4gICAgY29uc3QgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG4gICAgY29uc3QgYmxvY2tTaXplQml0cyA9IHRoaXMuYmxvY2tTaXplICogMzI7XG5cbiAgICAvLyBBZGQgcGFkZGluZ1xuICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4MSA8PCAoMjQgLSAobkJpdHNMZWZ0ICUgMzIpKTtcbiAgICBkYXRhV29yZHNbKChNYXRoLmNlaWwoKG5CaXRzTGVmdCArIDEpIC8gYmxvY2tTaXplQml0cykgKiBibG9ja1NpemVCaXRzKSA+Pj4gNSkgLSAxXSB8PSAweDgwO1xuICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG4gICAgdGhpcy5fcHJvY2VzcygpO1xuXG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9zdGF0ZTtcbiAgICBjb25zdCBvdXRwdXRMZW5ndGhCeXRlcyA9IHRoaXMuY2ZnLm91dHB1dExlbmd0aCAvIDg7XG4gICAgY29uc3Qgb3V0cHV0TGVuZ3RoTGFuZXMgPSBvdXRwdXRMZW5ndGhCeXRlcyAvIDg7XG5cbiAgICAvLyBTcXVlZXplXG4gICAgY29uc3QgaGFzaFdvcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRwdXRMZW5ndGhMYW5lczsgaSArPSAxKSB7XG4gICAgICAvLyBTaG9ydGN1dHNcbiAgICAgIGNvbnN0IGxhbmUgPSBzdGF0ZVtpXTtcbiAgICAgIGxldCBsYW5lTXN3ID0gbGFuZS5oaWdoO1xuICAgICAgbGV0IGxhbmVMc3cgPSBsYW5lLmxvdztcblxuICAgICAgLy8gU3dhcCBlbmRpYW5cbiAgICAgIGxhbmVNc3cgPSAoKChsYW5lTXN3IDw8IDgpIHwgKGxhbmVNc3cgPj4+IDI0KSkgJiAweDAwZmYwMGZmKVxuICAgICAgICB8ICgoKGxhbmVNc3cgPDwgMjQpIHwgKGxhbmVNc3cgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xuICAgICAgbGFuZUxzdyA9ICgoKGxhbmVMc3cgPDwgOCkgfCAobGFuZUxzdyA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpXG4gICAgICAgIHwgKCgobGFuZUxzdyA8PCAyNCkgfCAobGFuZUxzdyA+Pj4gOCkpICYgMHhmZjAwZmYwMCk7XG5cbiAgICAgIC8vIFNxdWVlemUgc3RhdGUgdG8gcmV0cmlldmUgaGFzaFxuICAgICAgaGFzaFdvcmRzLnB1c2gobGFuZUxzdyk7XG4gICAgICBoYXNoV29yZHMucHVzaChsYW5lTXN3KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuICAgIHJldHVybiBuZXcgV29yZEFycmF5KGhhc2hXb3Jkcywgb3V0cHV0TGVuZ3RoQnl0ZXMpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgY2xvbmUgPSBzdXBlci5jbG9uZS5jYWxsKHRoaXMpO1xuXG4gICAgY2xvbmUuX3N0YXRlID0gdGhpcy5fc3RhdGUuc2xpY2UoMCk7XG4gICAgY29uc3Qgc3RhdGUgPSBjbG9uZS5fc3RhdGU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSArPSAxKSB7XG4gICAgICBzdGF0ZVtpXSA9IHN0YXRlW2ldLmNsb25lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG4gKlxuICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cbiAqXG4gKiBAc3RhdGljXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEzKCdtZXNzYWdlJyk7XG4gKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEzKHdvcmRBcnJheSk7XG4gKi9cbmV4cG9ydCBjb25zdCBTSEEzID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBM0FsZ28pO1xuXG4vKipcbiAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cbiAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuICpcbiAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG4gKlxuICogQHN0YXRpY1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTMobWVzc2FnZSwga2V5KTtcbiAqL1xuZXhwb3J0IGNvbnN0IEhtYWNTSEEzID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTNBbGdvKTtcbiIsImltcG9ydCB7IEhhc2hlciB9IGZyb20gJy4vY29yZS5qcyc7XG5pbXBvcnQge1xuICBYNjRXb3JkLFxuICBYNjRXb3JkQXJyYXksXG59IGZyb20gJy4veDY0LWNvcmUuanMnO1xuXG4vLyBDb25zdGFudHNcbmNvbnN0IEsgPSBbXG4gIG5ldyBYNjRXb3JkKDB4NDI4YTJmOTgsIDB4ZDcyOGFlMjIpLFxuICBuZXcgWDY0V29yZCgweDcxMzc0NDkxLCAweDIzZWY2NWNkKSxcbiAgbmV3IFg2NFdvcmQoMHhiNWMwZmJjZiwgMHhlYzRkM2IyZiksXG4gIG5ldyBYNjRXb3JkKDB4ZTliNWRiYTUsIDB4ODE4OWRiYmMpLFxuICBuZXcgWDY0V29yZCgweDM5NTZjMjViLCAweGYzNDhiNTM4KSxcbiAgbmV3IFg2NFdvcmQoMHg1OWYxMTFmMSwgMHhiNjA1ZDAxOSksXG4gIG5ldyBYNjRXb3JkKDB4OTIzZjgyYTQsIDB4YWYxOTRmOWIpLFxuICBuZXcgWDY0V29yZCgweGFiMWM1ZWQ1LCAweGRhNmQ4MTE4KSxcbiAgbmV3IFg2NFdvcmQoMHhkODA3YWE5OCwgMHhhMzAzMDI0MiksXG4gIG5ldyBYNjRXb3JkKDB4MTI4MzViMDEsIDB4NDU3MDZmYmUpLFxuICBuZXcgWDY0V29yZCgweDI0MzE4NWJlLCAweDRlZTRiMjhjKSxcbiAgbmV3IFg2NFdvcmQoMHg1NTBjN2RjMywgMHhkNWZmYjRlMiksXG4gIG5ldyBYNjRXb3JkKDB4NzJiZTVkNzQsIDB4ZjI3Yjg5NmYpLFxuICBuZXcgWDY0V29yZCgweDgwZGViMWZlLCAweDNiMTY5NmIxKSxcbiAgbmV3IFg2NFdvcmQoMHg5YmRjMDZhNywgMHgyNWM3MTIzNSksXG4gIG5ldyBYNjRXb3JkKDB4YzE5YmYxNzQsIDB4Y2Y2OTI2OTQpLFxuICBuZXcgWDY0V29yZCgweGU0OWI2OWMxLCAweDllZjE0YWQyKSxcbiAgbmV3IFg2NFdvcmQoMHhlZmJlNDc4NiwgMHgzODRmMjVlMyksXG4gIG5ldyBYNjRXb3JkKDB4MGZjMTlkYzYsIDB4OGI4Y2Q1YjUpLFxuICBuZXcgWDY0V29yZCgweDI0MGNhMWNjLCAweDc3YWM5YzY1KSxcbiAgbmV3IFg2NFdvcmQoMHgyZGU5MmM2ZiwgMHg1OTJiMDI3NSksXG4gIG5ldyBYNjRXb3JkKDB4NGE3NDg0YWEsIDB4NmVhNmU0ODMpLFxuICBuZXcgWDY0V29yZCgweDVjYjBhOWRjLCAweGJkNDFmYmQ0KSxcbiAgbmV3IFg2NFdvcmQoMHg3NmY5ODhkYSwgMHg4MzExNTNiNSksXG4gIG5ldyBYNjRXb3JkKDB4OTgzZTUxNTIsIDB4ZWU2NmRmYWIpLFxuICBuZXcgWDY0V29yZCgweGE4MzFjNjZkLCAweDJkYjQzMjEwKSxcbiAgbmV3IFg2NFdvcmQoMHhiMDAzMjdjOCwgMHg5OGZiMjEzZiksXG4gIG5ldyBYNjRXb3JkKDB4YmY1OTdmYzcsIDB4YmVlZjBlZTQpLFxuICBuZXcgWDY0V29yZCgweGM2ZTAwYmYzLCAweDNkYTg4ZmMyKSxcbiAgbmV3IFg2NFdvcmQoMHhkNWE3OTE0NywgMHg5MzBhYTcyNSksXG4gIG5ldyBYNjRXb3JkKDB4MDZjYTYzNTEsIDB4ZTAwMzgyNmYpLFxuICBuZXcgWDY0V29yZCgweDE0MjkyOTY3LCAweDBhMGU2ZTcwKSxcbiAgbmV3IFg2NFdvcmQoMHgyN2I3MGE4NSwgMHg0NmQyMmZmYyksXG4gIG5ldyBYNjRXb3JkKDB4MmUxYjIxMzgsIDB4NWMyNmM5MjYpLFxuICBuZXcgWDY0V29yZCgweDRkMmM2ZGZjLCAweDVhYzQyYWVkKSxcbiAgbmV3IFg2NFdvcmQoMHg1MzM4MGQxMywgMHg5ZDk1YjNkZiksXG4gIG5ldyBYNjRXb3JkKDB4NjUwYTczNTQsIDB4OGJhZjYzZGUpLFxuICBuZXcgWDY0V29yZCgweDc2NmEwYWJiLCAweDNjNzdiMmE4KSxcbiAgbmV3IFg2NFdvcmQoMHg4MWMyYzkyZSwgMHg0N2VkYWVlNiksXG4gIG5ldyBYNjRXb3JkKDB4OTI3MjJjODUsIDB4MTQ4MjM1M2IpLFxuICBuZXcgWDY0V29yZCgweGEyYmZlOGExLCAweDRjZjEwMzY0KSxcbiAgbmV3IFg2NFdvcmQoMHhhODFhNjY0YiwgMHhiYzQyMzAwMSksXG4gIG5ldyBYNjRXb3JkKDB4YzI0YjhiNzAsIDB4ZDBmODk3OTEpLFxuICBuZXcgWDY0V29yZCgweGM3NmM1MWEzLCAweDA2NTRiZTMwKSxcbiAgbmV3IFg2NFdvcmQoMHhkMTkyZTgxOSwgMHhkNmVmNTIxOCksXG4gIG5ldyBYNjRXb3JkKDB4ZDY5OTA2MjQsIDB4NTU2NWE5MTApLFxuICBuZXcgWDY0V29yZCgweGY0MGUzNTg1LCAweDU3NzEyMDJhKSxcbiAgbmV3IFg2NFdvcmQoMHgxMDZhYTA3MCwgMHgzMmJiZDFiOCksXG4gIG5ldyBYNjRXb3JkKDB4MTlhNGMxMTYsIDB4YjhkMmQwYzgpLFxuICBuZXcgWDY0V29yZCgweDFlMzc2YzA4LCAweDUxNDFhYjUzKSxcbiAgbmV3IFg2NFdvcmQoMHgyNzQ4Nzc0YywgMHhkZjhlZWI5OSksXG4gIG5ldyBYNjRXb3JkKDB4MzRiMGJjYjUsIDB4ZTE5YjQ4YTgpLFxuICBuZXcgWDY0V29yZCgweDM5MWMwY2IzLCAweGM1Yzk1YTYzKSxcbiAgbmV3IFg2NFdvcmQoMHg0ZWQ4YWE0YSwgMHhlMzQxOGFjYiksXG4gIG5ldyBYNjRXb3JkKDB4NWI5Y2NhNGYsIDB4Nzc2M2UzNzMpLFxuICBuZXcgWDY0V29yZCgweDY4MmU2ZmYzLCAweGQ2YjJiOGEzKSxcbiAgbmV3IFg2NFdvcmQoMHg3NDhmODJlZSwgMHg1ZGVmYjJmYyksXG4gIG5ldyBYNjRXb3JkKDB4NzhhNTYzNmYsIDB4NDMxNzJmNjApLFxuICBuZXcgWDY0V29yZCgweDg0Yzg3ODE0LCAweGExZjBhYjcyKSxcbiAgbmV3IFg2NFdvcmQoMHg4Y2M3MDIwOCwgMHgxYTY0MzllYyksXG4gIG5ldyBYNjRXb3JkKDB4OTBiZWZmZmEsIDB4MjM2MzFlMjgpLFxuICBuZXcgWDY0V29yZCgweGE0NTA2Y2ViLCAweGRlODJiZGU5KSxcbiAgbmV3IFg2NFdvcmQoMHhiZWY5YTNmNywgMHhiMmM2NzkxNSksXG4gIG5ldyBYNjRXb3JkKDB4YzY3MTc4ZjIsIDB4ZTM3MjUzMmIpLFxuICBuZXcgWDY0V29yZCgweGNhMjczZWNlLCAweGVhMjY2MTljKSxcbiAgbmV3IFg2NFdvcmQoMHhkMTg2YjhjNywgMHgyMWMwYzIwNyksXG4gIG5ldyBYNjRXb3JkKDB4ZWFkYTdkZDYsIDB4Y2RlMGViMWUpLFxuICBuZXcgWDY0V29yZCgweGY1N2Q0ZjdmLCAweGVlNmVkMTc4KSxcbiAgbmV3IFg2NFdvcmQoMHgwNmYwNjdhYSwgMHg3MjE3NmZiYSksXG4gIG5ldyBYNjRXb3JkKDB4MGE2MzdkYzUsIDB4YTJjODk4YTYpLFxuICBuZXcgWDY0V29yZCgweDExM2Y5ODA0LCAweGJlZjkwZGFlKSxcbiAgbmV3IFg2NFdvcmQoMHgxYjcxMGIzNSwgMHgxMzFjNDcxYiksXG4gIG5ldyBYNjRXb3JkKDB4MjhkYjc3ZjUsIDB4MjMwNDdkODQpLFxuICBuZXcgWDY0V29yZCgweDMyY2FhYjdiLCAweDQwYzcyNDkzKSxcbiAgbmV3IFg2NFdvcmQoMHgzYzllYmUwYSwgMHgxNWM5YmViYyksXG4gIG5ldyBYNjRXb3JkKDB4NDMxZDY3YzQsIDB4OWMxMDBkNGMpLFxuICBuZXcgWDY0V29yZCgweDRjYzVkNGJlLCAweGNiM2U0MmI2KSxcbiAgbmV3IFg2NFdvcmQoMHg1OTdmMjk5YywgMHhmYzY1N2UyYSksXG4gIG5ldyBYNjRXb3JkKDB4NWZjYjZmYWIsIDB4M2FkNmZhZWMpLFxuICBuZXcgWDY0V29yZCgweDZjNDQxOThjLCAweDRhNDc1ODE3KSxcbl07XG5cbi8vIFJldXNhYmxlIG9iamVjdHNcbmNvbnN0IFcgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkgKz0gMSkge1xuICBXW2ldID0gbmV3IFg2NFdvcmQoKTtcbn1cblxuLyoqXG4gKiBTSEEtNTEyIGhhc2ggYWxnb3JpdGhtLlxuICovXG5leHBvcnQgY2xhc3MgU0hBNTEyQWxnbyBleHRlbmRzIEhhc2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmJsb2NrU2l6ZSA9IDEwMjQgLyAzMjtcbiAgfVxuXG4gIF9kb1Jlc2V0KCkge1xuICAgIHRoaXMuX2hhc2ggPSBuZXcgWDY0V29yZEFycmF5KFtcbiAgICAgIG5ldyBYNjRXb3JkKDB4NmEwOWU2NjcsIDB4ZjNiY2M5MDgpLFxuICAgICAgbmV3IFg2NFdvcmQoMHhiYjY3YWU4NSwgMHg4NGNhYTczYiksXG4gICAgICBuZXcgWDY0V29yZCgweDNjNmVmMzcyLCAweGZlOTRmODJiKSxcbiAgICAgIG5ldyBYNjRXb3JkKDB4YTU0ZmY1M2EsIDB4NWYxZDM2ZjEpLFxuICAgICAgbmV3IFg2NFdvcmQoMHg1MTBlNTI3ZiwgMHhhZGU2ODJkMSksXG4gICAgICBuZXcgWDY0V29yZCgweDliMDU2ODhjLCAweDJiM2U2YzFmKSxcbiAgICAgIG5ldyBYNjRXb3JkKDB4MWY4M2Q5YWIsIDB4ZmI0MWJkNmIpLFxuICAgICAgbmV3IFg2NFdvcmQoMHg1YmUwY2QxOSwgMHgxMzdlMjE3OSksXG4gICAgXSk7XG4gIH1cblxuICBfZG9Qcm9jZXNzQmxvY2soTSwgb2Zmc2V0KSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cbiAgICBjb25zdCBIMCA9IEhbMF07XG4gICAgY29uc3QgSDEgPSBIWzFdO1xuICAgIGNvbnN0IEgyID0gSFsyXTtcbiAgICBjb25zdCBIMyA9IEhbM107XG4gICAgY29uc3QgSDQgPSBIWzRdO1xuICAgIGNvbnN0IEg1ID0gSFs1XTtcbiAgICBjb25zdCBINiA9IEhbNl07XG4gICAgY29uc3QgSDcgPSBIWzddO1xuXG4gICAgY29uc3QgSDBoID0gSDAuaGlnaDtcbiAgICBsZXQgSDBsID0gSDAubG93O1xuICAgIGNvbnN0IEgxaCA9IEgxLmhpZ2g7XG4gICAgbGV0IEgxbCA9IEgxLmxvdztcbiAgICBjb25zdCBIMmggPSBIMi5oaWdoO1xuICAgIGxldCBIMmwgPSBIMi5sb3c7XG4gICAgY29uc3QgSDNoID0gSDMuaGlnaDtcbiAgICBsZXQgSDNsID0gSDMubG93O1xuICAgIGNvbnN0IEg0aCA9IEg0LmhpZ2g7XG4gICAgbGV0IEg0bCA9IEg0LmxvdztcbiAgICBjb25zdCBINWggPSBINS5oaWdoO1xuICAgIGxldCBINWwgPSBINS5sb3c7XG4gICAgY29uc3QgSDZoID0gSDYuaGlnaDtcbiAgICBsZXQgSDZsID0gSDYubG93O1xuICAgIGNvbnN0IEg3aCA9IEg3LmhpZ2g7XG4gICAgbGV0IEg3bCA9IEg3LmxvdztcblxuICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG4gICAgbGV0IGFoID0gSDBoO1xuICAgIGxldCBhbCA9IEgwbDtcbiAgICBsZXQgYmggPSBIMWg7XG4gICAgbGV0IGJsID0gSDFsO1xuICAgIGxldCBjaCA9IEgyaDtcbiAgICBsZXQgY2wgPSBIMmw7XG4gICAgbGV0IGRoID0gSDNoO1xuICAgIGxldCBkbCA9IEgzbDtcbiAgICBsZXQgZWggPSBINGg7XG4gICAgbGV0IGVsID0gSDRsO1xuICAgIGxldCBmaCA9IEg1aDtcbiAgICBsZXQgZmwgPSBINWw7XG4gICAgbGV0IGdoID0gSDZoO1xuICAgIGxldCBnbCA9IEg2bDtcbiAgICBsZXQgaGggPSBIN2g7XG4gICAgbGV0IGhsID0gSDdsO1xuXG4gICAgLy8gUm91bmRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSArPSAxKSB7XG4gICAgICBsZXQgV2lsO1xuICAgICAgbGV0IFdpaDtcblxuICAgICAgLy8gU2hvcnRjdXRcbiAgICAgIGNvbnN0IFdpID0gV1tpXTtcblxuICAgICAgLy8gRXh0ZW5kIG1lc3NhZ2VcbiAgICAgIGlmIChpIDwgMTYpIHtcbiAgICAgICAgV2kuaGlnaCA9IE1bb2Zmc2V0ICsgaSAqIDJdIHwgMDtcbiAgICAgICAgV2loID0gV2kuaGlnaDtcbiAgICAgICAgV2kubG93ID0gTVtvZmZzZXQgKyBpICogMiArIDFdIHwgMDtcbiAgICAgICAgV2lsID0gV2kubG93O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gR2FtbWEwXG4gICAgICAgIGNvbnN0IGdhbW1hMHggPSBXW2kgLSAxNV07XG4gICAgICAgIGNvbnN0IGdhbW1hMHhoID0gZ2FtbWEweC5oaWdoO1xuICAgICAgICBjb25zdCBnYW1tYTB4bCA9IGdhbW1hMHgubG93O1xuICAgICAgICBjb25zdCBnYW1tYTBoID0gKChnYW1tYTB4aCA+Pj4gMSkgfCAoZ2FtbWEweGwgPDwgMzEpKVxuICAgICAgICAgIF4gKChnYW1tYTB4aCA+Pj4gOCkgfCAoZ2FtbWEweGwgPDwgMjQpKVxuICAgICAgICAgIF4gKGdhbW1hMHhoID4+PiA3KTtcbiAgICAgICAgY29uc3QgZ2FtbWEwbCA9ICgoZ2FtbWEweGwgPj4+IDEpIHwgKGdhbW1hMHhoIDw8IDMxKSlcbiAgICAgICAgICBeICgoZ2FtbWEweGwgPj4+IDgpIHwgKGdhbW1hMHhoIDw8IDI0KSlcbiAgICAgICAgICBeICgoZ2FtbWEweGwgPj4+IDcpIHwgKGdhbW1hMHhoIDw8IDI1KSk7XG5cbiAgICAgICAgLy8gR2FtbWExXG4gICAgICAgIGNvbnN0IGdhbW1hMXggPSBXW2kgLSAyXTtcbiAgICAgICAgY29uc3QgZ2FtbWExeGggPSBnYW1tYTF4LmhpZ2g7XG4gICAgICAgIGNvbnN0IGdhbW1hMXhsID0gZ2FtbWExeC5sb3c7XG4gICAgICAgIGNvbnN0IGdhbW1hMWggPSAoKGdhbW1hMXhoID4+PiAxOSkgfCAoZ2FtbWExeGwgPDwgMTMpKVxuICAgICAgICAgIF4gKChnYW1tYTF4aCA8PCAzKSB8IChnYW1tYTF4bCA+Pj4gMjkpKVxuICAgICAgICAgIF4gKGdhbW1hMXhoID4+PiA2KTtcbiAgICAgICAgY29uc3QgZ2FtbWExbCA9ICgoZ2FtbWExeGwgPj4+IDE5KSB8IChnYW1tYTF4aCA8PCAxMykpXG4gICAgICAgICAgXiAoKGdhbW1hMXhsIDw8IDMpIHwgKGdhbW1hMXhoID4+PiAyOSkpXG4gICAgICAgICAgXiAoKGdhbW1hMXhsID4+PiA2KSB8IChnYW1tYTF4aCA8PCAyNikpO1xuXG4gICAgICAgIC8vIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XVxuICAgICAgICBjb25zdCBXaTcgPSBXW2kgLSA3XTtcbiAgICAgICAgY29uc3QgV2k3aCA9IFdpNy5oaWdoO1xuICAgICAgICBjb25zdCBXaTdsID0gV2k3LmxvdztcblxuICAgICAgICBjb25zdCBXaTE2ID0gV1tpIC0gMTZdO1xuICAgICAgICBjb25zdCBXaTE2aCA9IFdpMTYuaGlnaDtcbiAgICAgICAgY29uc3QgV2kxNmwgPSBXaTE2LmxvdztcblxuICAgICAgICBXaWwgPSBnYW1tYTBsICsgV2k3bDtcbiAgICAgICAgV2loID0gZ2FtbWEwaCArIFdpN2ggKyAoKFdpbCA+Pj4gMCkgPCAoZ2FtbWEwbCA+Pj4gMCkgPyAxIDogMCk7XG4gICAgICAgIFdpbCArPSBnYW1tYTFsO1xuICAgICAgICBXaWggPSBXaWggKyBnYW1tYTFoICsgKChXaWwgPj4+IDApIDwgKGdhbW1hMWwgPj4+IDApID8gMSA6IDApO1xuICAgICAgICBXaWwgKz0gV2kxNmw7XG4gICAgICAgIFdpaCA9IFdpaCArIFdpMTZoICsgKChXaWwgPj4+IDApIDwgKFdpMTZsID4+PiAwKSA/IDEgOiAwKTtcblxuICAgICAgICBXaS5oaWdoID0gV2loO1xuICAgICAgICBXaS5sb3cgPSBXaWw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaCA9IChlaCAmIGZoKSBeICh+ZWggJiBnaCk7XG4gICAgICBjb25zdCBjaGwgPSAoZWwgJiBmbCkgXiAofmVsICYgZ2wpO1xuICAgICAgY29uc3QgbWFqaCA9IChhaCAmIGJoKSBeIChhaCAmIGNoKSBeIChiaCAmIGNoKTtcbiAgICAgIGNvbnN0IG1hamwgPSAoYWwgJiBibCkgXiAoYWwgJiBjbCkgXiAoYmwgJiBjbCk7XG5cbiAgICAgIGNvbnN0IHNpZ21hMGggPSAoKGFoID4+PiAyOCkgfCAoYWwgPDwgNCkpXG4gICAgICAgIF4gKChhaCA8PCAzMCkgfCAoYWwgPj4+IDIpKVxuICAgICAgICBeICgoYWggPDwgMjUpIHwgKGFsID4+PiA3KSk7XG4gICAgICBjb25zdCBzaWdtYTBsID0gKChhbCA+Pj4gMjgpIHwgKGFoIDw8IDQpKVxuICAgICAgICBeICgoYWwgPDwgMzApIHwgKGFoID4+PiAyKSlcbiAgICAgICAgXiAoKGFsIDw8IDI1KSB8IChhaCA+Pj4gNykpO1xuICAgICAgY29uc3Qgc2lnbWExaCA9ICgoZWggPj4+IDE0KSB8IChlbCA8PCAxOCkpXG4gICAgICAgIF4gKChlaCA+Pj4gMTgpIHwgKGVsIDw8IDE0KSlcbiAgICAgICAgXiAoKGVoIDw8IDIzKSB8IChlbCA+Pj4gOSkpO1xuICAgICAgY29uc3Qgc2lnbWExbCA9ICgoZWwgPj4+IDE0KSB8IChlaCA8PCAxOCkpXG4gICAgICAgIF4gKChlbCA+Pj4gMTgpIHwgKGVoIDw8IDE0KSlcbiAgICAgICAgXiAoKGVsIDw8IDIzKSB8IChlaCA+Pj4gOSkpO1xuXG4gICAgICAvLyB0MSA9IGggKyBzaWdtYTEgKyBjaCArIEtbaV0gKyBXW2ldXG4gICAgICBjb25zdCBLaSA9IEtbaV07XG4gICAgICBjb25zdCBLaWggPSBLaS5oaWdoO1xuICAgICAgY29uc3QgS2lsID0gS2kubG93O1xuXG4gICAgICBsZXQgdDFsID0gaGwgKyBzaWdtYTFsO1xuICAgICAgbGV0IHQxaCA9IGhoICsgc2lnbWExaCArICgodDFsID4+PiAwKSA8IChobCA+Pj4gMCkgPyAxIDogMCk7XG4gICAgICB0MWwgKz0gY2hsO1xuICAgICAgdDFoID0gdDFoICsgY2hoICsgKCh0MWwgPj4+IDApIDwgKGNobCA+Pj4gMCkgPyAxIDogMCk7XG4gICAgICB0MWwgKz0gS2lsO1xuICAgICAgdDFoID0gdDFoICsgS2loICsgKCh0MWwgPj4+IDApIDwgKEtpbCA+Pj4gMCkgPyAxIDogMCk7XG4gICAgICB0MWwgKz0gV2lsO1xuICAgICAgdDFoID0gdDFoICsgV2loICsgKCh0MWwgPj4+IDApIDwgKFdpbCA+Pj4gMCkgPyAxIDogMCk7XG5cbiAgICAgIC8vIHQyID0gc2lnbWEwICsgbWFqXG4gICAgICBjb25zdCB0MmwgPSBzaWdtYTBsICsgbWFqbDtcbiAgICAgIGNvbnN0IHQyaCA9IHNpZ21hMGggKyBtYWpoICsgKCh0MmwgPj4+IDApIDwgKHNpZ21hMGwgPj4+IDApID8gMSA6IDApO1xuXG4gICAgICAvLyBVcGRhdGUgd29ya2luZyB2YXJpYWJsZXNcbiAgICAgIGhoID0gZ2g7XG4gICAgICBobCA9IGdsO1xuICAgICAgZ2ggPSBmaDtcbiAgICAgIGdsID0gZmw7XG4gICAgICBmaCA9IGVoO1xuICAgICAgZmwgPSBlbDtcbiAgICAgIGVsID0gKGRsICsgdDFsKSB8IDA7XG4gICAgICBlaCA9IChkaCArIHQxaCArICgoZWwgPj4+IDApIDwgKGRsID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuICAgICAgZGggPSBjaDtcbiAgICAgIGRsID0gY2w7XG4gICAgICBjaCA9IGJoO1xuICAgICAgY2wgPSBibDtcbiAgICAgIGJoID0gYWg7XG4gICAgICBibCA9IGFsO1xuICAgICAgYWwgPSAodDFsICsgdDJsKSB8IDA7XG4gICAgICBhaCA9ICh0MWggKyB0MmggKyAoKGFsID4+PiAwKSA8ICh0MWwgPj4+IDApID8gMSA6IDApKSB8IDA7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcbiAgICBIMC5sb3cgPSAoSDBsICsgYWwpO1xuICAgIEgwbCA9IEgwLmxvdztcbiAgICBIMC5oaWdoID0gKEgwaCArIGFoICsgKChIMGwgPj4+IDApIDwgKGFsID4+PiAwKSA/IDEgOiAwKSk7XG4gICAgSDEubG93ID0gKEgxbCArIGJsKTtcbiAgICBIMWwgPSBIMS5sb3c7XG4gICAgSDEuaGlnaCA9IChIMWggKyBiaCArICgoSDFsID4+PiAwKSA8IChibCA+Pj4gMCkgPyAxIDogMCkpO1xuICAgIEgyLmxvdyA9IChIMmwgKyBjbCk7XG4gICAgSDJsID0gSDIubG93O1xuICAgIEgyLmhpZ2ggPSAoSDJoICsgY2ggKyAoKEgybCA+Pj4gMCkgPCAoY2wgPj4+IDApID8gMSA6IDApKTtcbiAgICBIMy5sb3cgPSAoSDNsICsgZGwpO1xuICAgIEgzbCA9IEgzLmxvdztcbiAgICBIMy5oaWdoID0gKEgzaCArIGRoICsgKChIM2wgPj4+IDApIDwgKGRsID4+PiAwKSA/IDEgOiAwKSk7XG4gICAgSDQubG93ID0gKEg0bCArIGVsKTtcbiAgICBINGwgPSBINC5sb3c7XG4gICAgSDQuaGlnaCA9IChINGggKyBlaCArICgoSDRsID4+PiAwKSA8IChlbCA+Pj4gMCkgPyAxIDogMCkpO1xuICAgIEg1LmxvdyA9IChINWwgKyBmbCk7XG4gICAgSDVsID0gSDUubG93O1xuICAgIEg1LmhpZ2ggPSAoSDVoICsgZmggKyAoKEg1bCA+Pj4gMCkgPCAoZmwgPj4+IDApID8gMSA6IDApKTtcbiAgICBINi5sb3cgPSAoSDZsICsgZ2wpO1xuICAgIEg2bCA9IEg2LmxvdztcbiAgICBINi5oaWdoID0gKEg2aCArIGdoICsgKChINmwgPj4+IDApIDwgKGdsID4+PiAwKSA/IDEgOiAwKSk7XG4gICAgSDcubG93ID0gKEg3bCArIGhsKTtcbiAgICBIN2wgPSBINy5sb3c7XG4gICAgSDcuaGlnaCA9IChIN2ggKyBoaCArICgoSDdsID4+PiAwKSA8IChobCA+Pj4gMCkgPyAxIDogMCkpO1xuICB9XG5cbiAgX2RvRmluYWxpemUoKSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGE7XG4gICAgY29uc3QgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuICAgIGNvbnN0IG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcbiAgICBjb25zdCBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuICAgIC8vIEFkZCBwYWRkaW5nXG4gICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSAobkJpdHNMZWZ0ICUgMzIpKTtcbiAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgMTI4KSA+Pj4gMTApIDw8IDUpICsgMzBdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyAxMjgpID4+PiAxMCkgPDwgNSkgKyAzMV0gPSBuQml0c1RvdGFsO1xuICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG4gICAgdGhpcy5fcHJvY2VzcygpO1xuXG4gICAgLy8gQ29udmVydCBoYXNoIHRvIDMyLWJpdCB3b3JkIGFycmF5IGJlZm9yZSByZXR1cm5pbmdcbiAgICBjb25zdCBoYXNoID0gdGhpcy5faGFzaC50b1gzMigpO1xuXG4gICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGNsb25lID0gc3VwZXIuY2xvbmUuY2FsbCh0aGlzKTtcbiAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuICAgIHJldHVybiBjbG9uZTtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuICpcbiAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuICpcbiAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG4gKlxuICogQHN0YXRpY1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBNTEyKCdtZXNzYWdlJyk7XG4gKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEE1MTIod29yZEFycmF5KTtcbiAqL1xuZXhwb3J0IGNvbnN0IFNIQTUxMiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTUxMkFsZ28pO1xuXG4vKipcbiAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cbiAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuICpcbiAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG4gKlxuICogQHN0YXRpY1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTUxMihtZXNzYWdlLCBrZXkpO1xuICovXG5leHBvcnQgY29uc3QgSG1hY1NIQTUxMiA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEE1MTJBbGdvKTtcbiIsImltcG9ydCB7XG4gIEJhc2UsXG4gIFdvcmRBcnJheSxcbn0gZnJvbSAnLi9jb3JlLmpzJztcblxuY29uc3QgWDMyV29yZEFycmF5ID0gV29yZEFycmF5O1xuXG4vKipcbiAqIEEgNjQtYml0IHdvcmQuXG4gKi9cbmV4cG9ydCBjbGFzcyBYNjRXb3JkIGV4dGVuZHMgQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgNjQtYml0IHdvcmQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoIFRoZSBoaWdoIDMyIGJpdHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb3cgVGhlIGxvdyAzMiBiaXRzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIHg2NFdvcmQgPSBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgwMDAxMDIwMywgMHgwNDA1MDYwNyk7XG4gICAqL1xuICBjb25zdHJ1Y3RvcihoaWdoLCBsb3cpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5oaWdoID0gaGlnaDtcbiAgICB0aGlzLmxvdyA9IGxvdztcbiAgfVxufVxuXG4vKipcbiAqIEFuIGFycmF5IG9mIDY0LWJpdCB3b3Jkcy5cbiAqXG4gKiBAcHJvcGVydHkge0FycmF5fSB3b3JkcyBUaGUgYXJyYXkgb2YgQ3J5cHRvSlMueDY0LldvcmQgb2JqZWN0cy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cbiAqL1xuZXhwb3J0IGNsYXNzIFg2NFdvcmRBcnJheSBleHRlbmRzIEJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgQ3J5cHRvSlMueDY0LldvcmQgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNpZ0J5dGVzIChPcHRpb25hbCkgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGUgd29yZHMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMueDY0LldvcmRBcnJheS5jcmVhdGUoKTtcbiAgICpcbiAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy54NjQuV29yZEFycmF5LmNyZWF0ZShbXG4gICAqICAgICAgICAgQ3J5cHRvSlMueDY0LldvcmQuY3JlYXRlKDB4MDAwMTAyMDMsIDB4MDQwNTA2MDcpLFxuICAgKiAgICAgICAgIENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDE4MTkxYTFiLCAweDFjMWQxZTFmKVxuICAgKiAgICAgXSk7XG4gICAqXG4gICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMueDY0LldvcmRBcnJheS5jcmVhdGUoW1xuICAgKiAgICAgICAgIENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDAwMDEwMjAzLCAweDA0MDUwNjA3KSxcbiAgICogICAgICAgICBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgxODE5MWExYiwgMHgxYzFkMWUxZilcbiAgICogICAgIF0sIDEwKTtcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdvcmRzID0gW10sIHNpZ0J5dGVzID0gd29yZHMubGVuZ3RoICogOCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLndvcmRzID0gd29yZHM7XG4gICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoaXMgNjQtYml0IHdvcmQgYXJyYXkgdG8gYSAzMi1iaXQgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHJldHVybiB7Q3J5cHRvSlMubGliLldvcmRBcnJheX0gVGhpcyB3b3JkIGFycmF5J3MgZGF0YSBhcyBhIDMyLWJpdCB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIHgzMldvcmRBcnJheSA9IHg2NFdvcmRBcnJheS50b1gzMigpO1xuICAgKi9cbiAgdG9YMzIoKSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgeDY0V29yZHMgPSB0aGlzLndvcmRzO1xuICAgIGNvbnN0IHg2NFdvcmRzTGVuZ3RoID0geDY0V29yZHMubGVuZ3RoO1xuXG4gICAgLy8gQ29udmVydFxuICAgIGNvbnN0IHgzMldvcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4NjRXb3Jkc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB4NjRXb3JkID0geDY0V29yZHNbaV07XG4gICAgICB4MzJXb3Jkcy5wdXNoKHg2NFdvcmQuaGlnaCk7XG4gICAgICB4MzJXb3Jkcy5wdXNoKHg2NFdvcmQubG93KTtcbiAgICB9XG5cbiAgICByZXR1cm4gWDMyV29yZEFycmF5LmNyZWF0ZSh4MzJXb3JkcywgdGhpcy5zaWdCeXRlcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAcmV0dXJuIHtYNjRXb3JkQXJyYXl9IFRoZSBjbG9uZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciBjbG9uZSA9IHg2NFdvcmRBcnJheS5jbG9uZSgpO1xuICAgKi9cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgY2xvbmUgPSBzdXBlci5jbG9uZS5jYWxsKHRoaXMpO1xuXG4gICAgLy8gQ2xvbmUgXCJ3b3Jkc1wiIGFycmF5XG4gICAgY2xvbmUud29yZHMgPSB0aGlzLndvcmRzLnNsaWNlKDApO1xuICAgIGNvbnN0IHsgd29yZHMgfSA9IGNsb25lO1xuXG4gICAgLy8gQ2xvbmUgZWFjaCBYNjRXb3JkIG9iamVjdFxuICAgIGNvbnN0IHdvcmRzTGVuZ3RoID0gd29yZHMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHNMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXS5jbG9uZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZTtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBmLHVzZURlYnVnVmFsdWUgYXMgY31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIHAsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgZCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOlModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIFModGhpcy5wcm9wcyxuKXx8Uyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPUMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpwKHAobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP3AobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9cChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpwfSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBEKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIEYoKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sZj0hMD09PXQuX19oO3IuX191Kyt8fGZ8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1DKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnModixudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3ModixudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBNPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIFQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBqKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe2QobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSksZChzKFQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gSShuLHQpe3JldHVybiBzKGose19fdjpuLGk6dH0pfShGLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxNKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sRi5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PXAobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LEYucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1GLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtNKG4sZSx0KX0pfTt2YXIgVz1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiB6KG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLGQobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEIobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIEg9aC5ldmVudDtmdW5jdGlvbiBaKCl7fWZ1bmN0aW9uIFkoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PVosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1ZLG4uaXNEZWZhdWx0UHJldmVudGVkPSQsbi5uYXRpdmVFdmVudD1ufTt2YXIgcSxHPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxKPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7Zm9yKHZhciB1IGluIHI9e30sZSl7dmFyIG89ZVt1XTtcInZhbHVlXCI9PT11JiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09b3x8KFwiZGVmYXVsdFZhbHVlXCI9PT11JiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP3U9XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PXUmJiEwPT09bz9vPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KHUpP3U9XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KHUrdCkmJiFWKGUudHlwZSk/dT1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3QodSk/dT11LnRvTG93ZXJDYXNlKCk6UC50ZXN0KHUpP3U9dS5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09byYmKG89dm9pZCAwKSxyW3VdPW8pfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPXAoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPXAoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yfXQmJmUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoRy5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixHKSksbi4kJHR5cGVvZj1XLEomJkoobil9O3ZhciBLPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe0smJksobikscT1uLl9fY307dmFyIFE9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBxLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LFg9MSxubj0yLHRuPTMsZW49NCxybj01O2Z1bmN0aW9uIHVuKG4sdCl7cmV0dXJuIHQoKX12YXIgb249XCJvYmplY3RcIj09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3c/cGVyZm9ybWFuY2Uubm93LmJpbmQocGVyZm9ybWFuY2UpOmZ1bmN0aW9uKCl7cmV0dXJuIERhdGUubm93KCl9LGxuPVwiMTYuOC4wXCI7ZnVuY3Rpb24gZm4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGNuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PVd9ZnVuY3Rpb24gYW4obil7cmV0dXJuIGNuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gc24obil7cmV0dXJuISFuLl9fayYmKGQobnVsbCxuKSwhMCl9ZnVuY3Rpb24gaG4obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgcG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sdm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpmLHVzZURlYnVnVmFsdWU6Yyx2ZXJzaW9uOlwiMTYuOC4wXCIsQ2hpbGRyZW46ayxyZW5kZXI6eixoeWRyYXRlOkIsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpzbixjcmVhdGVQb3J0YWw6SSxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6Zm4sY2xvbmVFbGVtZW50OmFuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6Y24sZmluZERPTU5vZGU6aG4sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6cG4sU3RyaWN0TW9kZTp2LFN1c3BlbnNlOkwsU3VzcGVuc2VMaXN0OkYsbGF6eTpELF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOlF9O2V4cG9ydHtsbiBhcyB2ZXJzaW9uLGsgYXMgQ2hpbGRyZW4seiBhcyByZW5kZXIsQiBhcyBoeWRyYXRlLHNuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsSSBhcyBjcmVhdGVQb3J0YWwsZm4gYXMgY3JlYXRlRmFjdG9yeSxhbiBhcyBjbG9uZUVsZW1lbnQsY24gYXMgaXNWYWxpZEVsZW1lbnQsaG4gYXMgZmluZERPTU5vZGUsRSBhcyBQdXJlQ29tcG9uZW50LGcgYXMgbWVtbyx4IGFzIGZvcndhcmRSZWYscG4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsdm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLEYgYXMgU3VzcGVuc2VMaXN0LEQgYXMgbGF6eSxRIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELFggYXMgdW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHksbm4gYXMgdW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksdG4gYXMgdW5zdGFibGVfTm9ybWFsUHJpb3JpdHksZW4gYXMgdW5zdGFibGVfTG93UHJpb3JpdHkscm4gYXMgdW5zdGFibGVfSWRsZVByaW9yaXR5LHVuIGFzIHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSxvbiBhcyB1bnN0YWJsZV9ub3d9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsInZhciBuLGwsdSxpLHQsbyxyPXt9LGY9W10sZT0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGMobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gcyhuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBhKG4sbCx1KXt2YXIgaSx0LG8scj1hcmd1bWVudHMsZj17fTtmb3IobyBpbiBsKVwia2V5XCI9PW8/aT1sW29dOlwicmVmXCI9PW8/dD1sW29dOmZbb109bFtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjMpZm9yKHU9W3VdLG89MztvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXUucHVzaChyW29dKTtpZihudWxsIT11JiYoZi5jaGlsZHJlbj11KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZudWxsIT1uLmRlZmF1bHRQcm9wcylmb3IobyBpbiBuLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW29dJiYoZltvXT1uLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIHYobixmLGksdCxudWxsKX1mdW5jdGlvbiB2KGwsdSxpLHQsbyl7dmFyIHI9e3R5cGU6bCxwcm9wczp1LGtleTppLHJlZjp0LF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PW8/KytuLl9fdjpvfTtyZXR1cm4gbnVsbCE9bi52bm9kZSYmbi52bm9kZShyKSxyfWZ1bmN0aW9uIGgoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiB5KG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIHAobixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gZChuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ZChuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9kKG4pOm51bGx9ZnVuY3Rpb24gXyhuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIF8obil9fWZ1bmN0aW9uIGsobCl7KCFsLl9fZCYmKGwuX19kPSEwKSYmdS5wdXNoKGwpJiYhYi5fX3IrK3x8dCE9PW4uZGVib3VuY2VSZW5kZXJpbmcpJiYoKHQ9bi5kZWJvdW5jZVJlbmRlcmluZyl8fGkpKGIpfWZ1bmN0aW9uIGIoKXtmb3IodmFyIG47Yi5fX3I9dS5sZW5ndGg7KW49dS5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx1PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxvLHI7bi5fX2QmJihvPSh0PShsPW4pLl9fdikuX19lLChyPWwuX19QKSYmKHU9W10sKGk9Yyh7fSx0KSkuX192PXQuX192KzEsSShyLHQsaSxsLl9fbix2b2lkIDAhPT1yLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bb106bnVsbCx1LG51bGw9PW8/ZCh0KTpvLHQuX19oKSxUKHUsdCksdC5fX2UhPW8mJl8odCkpKX0pfWZ1bmN0aW9uIG0obixsLHUsaSx0LG8sZSxjLHMsYSl7dmFyIGgscCxfLGssYixtLHcsQT1pJiZpLl9fa3x8ZixQPUEubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KGs9dS5fX2tbaF09bnVsbD09KGs9bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2Ygaz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBrfHxcIm51bWJlclwiPT10eXBlb2Yga3x8XCJiaWdpbnRcIj09dHlwZW9mIGs/dihudWxsLGssbnVsbCxudWxsLGspOkFycmF5LmlzQXJyYXkoayk/dih5LHtjaGlsZHJlbjprfSxudWxsLG51bGwsbnVsbCk6ay5fX2I+MD92KGsudHlwZSxrLnByb3BzLGsua2V5LG51bGwsay5fX3YpOmspKXtpZihrLl9fPXUsay5fX2I9dS5fX2IrMSxudWxsPT09KF89QVtoXSl8fF8mJmsua2V5PT1fLmtleSYmay50eXBlPT09Xy50eXBlKUFbaF09dm9pZCAwO2Vsc2UgZm9yKHA9MDtwPFA7cCsrKXtpZigoXz1BW3BdKSYmay5rZXk9PV8ua2V5JiZrLnR5cGU9PT1fLnR5cGUpe0FbcF09dm9pZCAwO2JyZWFrfV89bnVsbH1JKG4sayxfPV98fHIsdCxvLGUsYyxzLGEpLGI9ay5fX2UsKHA9ay5yZWYpJiZfLnJlZiE9cCYmKHd8fCh3PVtdKSxfLnJlZiYmdy5wdXNoKF8ucmVmLG51bGwsayksdy5wdXNoKHAsay5fX2N8fGIsaykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGsudHlwZSYmbnVsbCE9ay5fX2smJmsuX19rPT09Xy5fX2s/ay5fX2Q9cz1nKGsscyxuKTpzPXgobixrLF8sQSxiLHMpLGF8fFwib3B0aW9uXCIhPT11LnR5cGU/XCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cyk6bi52YWx1ZT1cIlwiKTpzJiZfLl9fZT09cyYmcy5wYXJlbnROb2RlIT1uJiYocz1kKF8pKX1mb3IodS5fX2U9bSxoPVA7aC0tOyludWxsIT1BW2hdJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiZudWxsIT1BW2hdLl9fZSYmQVtoXS5fX2U9PXUuX19kJiYodS5fX2Q9ZChpLGgrMSkpLEwoQVtoXSxBW2hdKSk7aWYodylmb3IoaD0wO2g8dy5sZW5ndGg7aCsrKXood1toXSx3WysraF0sd1srK2hdKX1mdW5jdGlvbiBnKG4sbCx1KXt2YXIgaSx0O2ZvcihpPTA7aTxuLl9fay5sZW5ndGg7aSsrKSh0PW4uX19rW2ldKSYmKHQuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQudHlwZT9nKHQsbCx1KTp4KHUsdCx0LG4uX19rLHQuX19lLGwpKTtyZXR1cm4gbH1mdW5jdGlvbiB3KG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoQXJyYXkuaXNBcnJheShuKT9uLnNvbWUoZnVuY3Rpb24obil7dyhuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIHgobixsLHUsaSx0LG8pe3ZhciByLGYsZTtpZih2b2lkIDAhPT1sLl9fZClyPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PXV8fHQhPW98fG51bGw9PXQucGFyZW50Tm9kZSluOmlmKG51bGw9PW98fG8ucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh0KSxyPW51bGw7ZWxzZXtmb3IoZj1vLGU9MDsoZj1mLm5leHRTaWJsaW5nKSYmZTxpLmxlbmd0aDtlKz0yKWlmKGY9PXQpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh0LG8pLHI9b31yZXR1cm4gdm9pZCAwIT09cj9yOnQubmV4dFNpYmxpbmd9ZnVuY3Rpb24gQShuLGwsdSxpLHQpe3ZhciBvO2ZvcihvIGluIHUpXCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fG8gaW4gbHx8QyhuLG8sbnVsbCx1W29dLGkpO2ZvcihvIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fFwidmFsdWVcIj09PW98fFwiY2hlY2tlZFwiPT09b3x8dVtvXT09PWxbb118fEMobixvLGxbb10sdVtvXSxpKX1mdW5jdGlvbiBQKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxlLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIG87bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHxQKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fFAobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pbz1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK29dPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxvP0g6JCxvKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxvP0g6JCxvKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rW0g6aF0vLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwiaHJlZlwiIT09bCYmXCJsaXN0XCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidGFiSW5kZXhcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbCE9dSYmKCExIT09dXx8XCJhXCI9PT1sWzBdJiZcInJcIj09PWxbMV0pP24uc2V0QXR0cmlidXRlKGwsdSk6bi5yZW1vdmVBdHRyaWJ1dGUobCkpfX1mdW5jdGlvbiAkKGwpe3RoaXMubFtsLnR5cGUrITFdKG4uZXZlbnQ/bi5ldmVudChsKTpsKX1mdW5jdGlvbiBIKGwpe3RoaXMubFtsLnR5cGUrITBdKG4uZXZlbnQ/bi5ldmVudChsKTpsKX1mdW5jdGlvbiBJKGwsdSxpLHQsbyxyLGYsZSxzKXt2YXIgYSx2LGgsZCxfLGssYixnLHcseCxBLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihzPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxyPVtlXSksKGE9bi5fX2IpJiZhKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKGc9dS5wcm9wcyx3PShhPVAuY29udGV4dFR5cGUpJiZ0W2EuX19jXSx4PWE/dz93LnByb3BzLnZhbHVlOmEuX186dCxpLl9fYz9iPSh2PXUuX19jPWkuX19jKS5fXz12Ll9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz12PW5ldyBQKGcseCk6KHUuX19jPXY9bmV3IHAoZyx4KSx2LmNvbnN0cnVjdG9yPVAsdi5yZW5kZXI9TSksdyYmdy5zdWIodiksdi5wcm9wcz1nLHYuc3RhdGV8fCh2LnN0YXRlPXt9KSx2LmNvbnRleHQ9eCx2Ll9fbj10LGg9di5fX2Q9ITAsdi5fX2g9W10pLG51bGw9PXYuX19zJiYodi5fX3M9di5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJih2Ll9fcz09di5zdGF0ZSYmKHYuX19zPWMoe30sdi5fX3MpKSxjKHYuX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGcsdi5fX3MpKSksZD12LnByb3BzLF89di5zdGF0ZSxoKW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT12LmNvbXBvbmVudFdpbGxNb3VudCYmdi5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT12LmNvbXBvbmVudERpZE1vdW50JiZ2Ll9faC5wdXNoKHYuY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJmchPT1kJiZudWxsIT12LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJnYuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhnLHgpLCF2Ll9fZSYmbnVsbCE9di5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09di5zaG91bGRDb21wb25lbnRVcGRhdGUoZyx2Ll9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7di5wcm9wcz1nLHYuc3RhdGU9di5fX3MsdS5fX3YhPT1pLl9fdiYmKHYuX19kPSExKSx2Ll9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSx2Ll9faC5sZW5ndGgmJmYucHVzaCh2KTticmVhayBufW51bGwhPXYuY29tcG9uZW50V2lsbFVwZGF0ZSYmdi5jb21wb25lbnRXaWxsVXBkYXRlKGcsdi5fX3MseCksbnVsbCE9di5jb21wb25lbnREaWRVcGRhdGUmJnYuX19oLnB1c2goZnVuY3Rpb24oKXt2LmNvbXBvbmVudERpZFVwZGF0ZShkLF8sayl9KX12LmNvbnRleHQ9eCx2LnByb3BzPWcsdi5zdGF0ZT12Ll9fcywoYT1uLl9fcikmJmEodSksdi5fX2Q9ITEsdi5fX3Y9dSx2Ll9fUD1sLGE9di5yZW5kZXIodi5wcm9wcyx2LnN0YXRlLHYuY29udGV4dCksdi5zdGF0ZT12Ll9fcyxudWxsIT12LmdldENoaWxkQ29udGV4dCYmKHQ9YyhjKHt9LHQpLHYuZ2V0Q2hpbGRDb250ZXh0KCkpKSxofHxudWxsPT12LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoaz12LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKGQsXykpLEE9bnVsbCE9YSYmYS50eXBlPT09eSYmbnVsbD09YS5rZXk/YS5wcm9wcy5jaGlsZHJlbjphLG0obCxBcnJheS5pc0FycmF5KEEpP0E6W0FdLHUsaSx0LG8scixmLGUscyksdi5iYXNlPXUuX19lLHUuX19oPW51bGwsdi5fX2gubGVuZ3RoJiZmLnB1c2godiksYiYmKHYuX19FPXYuX189bnVsbCksdi5fX2U9ITF9ZWxzZSBudWxsPT1yJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9aihpLl9fZSx1LGksdCxvLHIsZixzKTsoYT1uLmRpZmZlZCkmJmEodSl9Y2F0Y2gobCl7dS5fX3Y9bnVsbCwoc3x8bnVsbCE9cikmJih1Ll9fZT1lLHUuX19oPSEhcyxyW3IuaW5kZXhPZihlKV09bnVsbCksbi5fX2UobCx1LGkpfX1mdW5jdGlvbiBUKGwsdSl7bi5fX2MmJm4uX19jKHUsbCksbC5zb21lKGZ1bmN0aW9uKHUpe3RyeXtsPXUuX19oLHUuX19oPVtdLGwuc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChsKXtuLl9fZShsLHUuX192KX19KX1mdW5jdGlvbiBqKG4sbCx1LGksdCxvLGUsYyl7dmFyIGEsdixoLHkscD11LnByb3BzLGQ9bC5wcm9wcyxfPWwudHlwZSxrPTA7aWYoXCJzdmdcIj09PV8mJih0PSEwKSxudWxsIT1vKWZvcig7azxvLmxlbmd0aDtrKyspaWYoKGE9b1trXSkmJihhPT09bnx8KF8/YS5sb2NhbE5hbWU9PV86Mz09YS5ub2RlVHlwZSkpKXtuPWEsb1trXT1udWxsO2JyZWFrfWlmKG51bGw9PW4pe2lmKG51bGw9PT1fKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkKTtuPXQ/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixfKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KF8sZC5pcyYmZCksbz1udWxsLGM9ITF9aWYobnVsbD09PV8pcD09PWR8fGMmJm4uZGF0YT09PWR8fChuLmRhdGE9ZCk7ZWxzZXtpZihvPW8mJmYuc2xpY2UuY2FsbChuLmNoaWxkTm9kZXMpLHY9KHA9dS5wcm9wc3x8cikuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsaD1kLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcihwPXt9LHk9MDt5PG4uYXR0cmlidXRlcy5sZW5ndGg7eSsrKXBbbi5hdHRyaWJ1dGVzW3ldLm5hbWVdPW4uYXR0cmlidXRlc1t5XS52YWx1ZTsoaHx8dikmJihoJiYodiYmaC5fX2h0bWw9PXYuX19odG1sfHxoLl9faHRtbD09PW4uaW5uZXJIVE1MKXx8KG4uaW5uZXJIVE1MPWgmJmguX19odG1sfHxcIlwiKSl9aWYoQShuLGQscCx0LGMpLGgpbC5fX2s9W107ZWxzZSBpZihrPWwucHJvcHMuY2hpbGRyZW4sbShuLEFycmF5LmlzQXJyYXkoayk/azpba10sbCx1LGksdCYmXCJmb3JlaWduT2JqZWN0XCIhPT1fLG8sZSxuLmZpcnN0Q2hpbGQsYyksbnVsbCE9bylmb3Ioaz1vLmxlbmd0aDtrLS07KW51bGwhPW9ba10mJnMob1trXSk7Y3x8KFwidmFsdWVcImluIGQmJnZvaWQgMCE9PShrPWQudmFsdWUpJiYoayE9PW4udmFsdWV8fFwicHJvZ3Jlc3NcIj09PV8mJiFrKSYmQyhuLFwidmFsdWVcIixrLHAudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gZCYmdm9pZCAwIT09KGs9ZC5jaGVja2VkKSYmayE9PW4uY2hlY2tlZCYmQyhuLFwiY2hlY2tlZFwiLGsscC5jaGVja2VkLCExKSl9cmV0dXJuIG59ZnVuY3Rpb24geihsLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIGw/bCh1KTpsLmN1cnJlbnQ9dX1jYXRjaChsKXtuLl9fZShsLGkpfX1mdW5jdGlvbiBMKGwsdSxpKXt2YXIgdCxvLHI7aWYobi51bm1vdW50JiZuLnVubW91bnQobCksKHQ9bC5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1sLl9fZXx8eih0LG51bGwsdSkpLGl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGwudHlwZXx8KGk9bnVsbCE9KG89bC5fX2UpKSxsLl9fZT1sLl9fZD12b2lkIDAsbnVsbCE9KHQ9bC5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobCl7bi5fX2UobCx1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PWwuX19rKWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXSYmTCh0W3JdLHUsaSk7bnVsbCE9byYmcyhvKX1mdW5jdGlvbiBNKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIE4obCx1LGkpe3ZhciB0LG8sZTtuLl9fJiZuLl9fKGwsdSksbz0odD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpKT9udWxsOmkmJmkuX19rfHx1Ll9fayxlPVtdLEkodSxsPSghdCYmaXx8dSkuX19rPWEoeSxudWxsLFtsXSksb3x8cixyLHZvaWQgMCE9PXUub3duZXJTVkdFbGVtZW50LCF0JiZpP1tpXTpvP251bGw6dS5maXJzdENoaWxkP2Yuc2xpY2UuY2FsbCh1LmNoaWxkTm9kZXMpOm51bGwsZSwhdCYmaT9pOm8/by5fX2U6dS5maXJzdENoaWxkLHQpLFQoZSxsKX1mdW5jdGlvbiBPKG4sbCl7TihuLGwsTyl9ZnVuY3Rpb24gUyhuLGwsdSl7dmFyIGksdCxvLHI9YXJndW1lbnRzLGY9Yyh7fSxuLnByb3BzKTtmb3IobyBpbiBsKVwia2V5XCI9PW8/aT1sW29dOlwicmVmXCI9PW8/dD1sW29dOmZbb109bFtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjMpZm9yKHU9W3VdLG89MztvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXUucHVzaChyW29dKTtyZXR1cm4gbnVsbCE9dSYmKGYuY2hpbGRyZW49dSksdihuLnR5cGUsZixpfHxuLmtleSx0fHxuLnJlZixudWxsKX1mdW5jdGlvbiBxKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK28rKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKGspfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufSxfX3Y6MH0sbD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0scC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9Yyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGMoe30sdSksdGhpcy5wcm9wcykpLG4mJmModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksayh0aGlzKSl9LHAucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxrKHRoaXMpKX0scC5wcm90b3R5cGUucmVuZGVyPXksdT1bXSxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGIuX19yPTAsbz0wO2V4cG9ydHtOIGFzIHJlbmRlcixPIGFzIGh5ZHJhdGUsYSBhcyBjcmVhdGVFbGVtZW50LGEgYXMgaCx5IGFzIEZyYWdtZW50LGggYXMgY3JlYXRlUmVmLGwgYXMgaXNWYWxpZEVsZW1lbnQscCBhcyBDb21wb25lbnQsUyBhcyBjbG9uZUVsZW1lbnQscSBhcyBjcmVhdGVDb250ZXh0LHcgYXMgdG9DaGlsZEFycmF5LG4gYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxkKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBkKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gQShuLHQpe3JldHVybiBvPTgsZChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBGKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5fX2M9bixyPyhudWxsPT1vLl9fJiYoby5fXz0hMCxyLnN1Yih1KSksci5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiBUKHQsdSl7bi51c2VEZWJ1Z1ZhbHVlJiZuLnVzZURlYnVnVmFsdWUodT91KHQpOnQpfWZ1bmN0aW9uIHEobil7dmFyIHI9bSh0KyssMTApLG89bCgpO3JldHVybiByLl9fPW4sdS5jb21wb25lbnREaWRDYXRjaHx8KHUuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obil7ci5fXyYmci5fXyhuKSxvWzFdKG4pfSksW29bMF0sZnVuY3Rpb24oKXtvWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiB4KCl7aS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChnKSx0Ll9fSC5fX2guZm9yRWFjaChqKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7dC5fX0guX19oPVtdLG4uX19lKHUsdC5fX3YpfX0pLGk9W119bi5fX2I9ZnVuY3Rpb24obil7dT1udWxsLGMmJmMobil9LG4uX19yPWZ1bmN0aW9uKG4pe2YmJmYobiksdD0wO3ZhciByPSh1PW4uX19jKS5fX0g7ciYmKHIuX19oLmZvckVhY2goZyksci5fX2guZm9yRWFjaChqKSxyLl9faD1bXSl9LG4uZGlmZmVkPWZ1bmN0aW9uKHQpe2UmJmUodCk7dmFyIG89dC5fX2M7byYmby5fX0gmJm8uX19ILl9faC5sZW5ndGgmJigxIT09aS5wdXNoKG8pJiZyPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgocj1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksYiYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtiJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoeCkpLHU9dm9pZCAwfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLGQgYXMgdXNlTWVtbyxBIGFzIHVzZUNhbGxiYWNrLEYgYXMgdXNlQ29udGV4dCxUIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIHIsRnJhZ21lbnQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7RnJhZ21lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gbyhfLG8sZSxuLHQpe3ZhciBmPXt9O2Zvcih2YXIgbCBpbiBvKVwicmVmXCIhPWwmJihmW2xdPW9bbF0pO3ZhciBzLHUsYT17dHlwZTpfLHByb3BzOmYsa2V5OmUscmVmOm8mJm8ucmVmLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Oisrci5fX3YsX19zb3VyY2U6bixfX3NlbGY6dH07aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgXyYmKHM9Xy5kZWZhdWx0UHJvcHMpKWZvcih1IGluIHMpdm9pZCAwPT09Zlt1XSYmKGZbdV09c1t1XSk7cmV0dXJuIHIudm5vZGUmJnIudm5vZGUoYSksYX1leHBvcnR7byBhcyBqc3gsbyBhcyBqc3hzLG8gYXMganN4REVWfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzeFJ1bnRpbWUubW9kdWxlLmpzLm1hcFxuIiwiZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2Vba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRhcmdldFtrZXldID0gbWVyZ2UoeyAuLi50YXJnZXRba2V5XSB9LCBzb3VyY2Vba2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzKG9iaikge1xuICBjb25zdCB2YWx1ZXMgPSBbXTtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBjb25zdCB2YWwgPSBvYmpba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlcy5wdXNoKC4uLmdldFZhbHVlcyh2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVzLnB1c2godmFsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZTkoLi4uc3R5bGVzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IHN0eWxlcy5yZWR1Y2UobWVyZ2UsIHt9KTtcbiAgcmV0dXJuIGdldFZhbHVlcyhtZXJnZWQpLmpvaW4oJyAnKTtcbn1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlOS5jcmVhdGUgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcignc3R5bGU5LmNyZWF0ZSBjYWxscyBzaG91bGQgYmUgY29tcGlsZWQgYXdheScpO1xufTtcblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlOS5rZXlmcmFtZXMgPSAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcignc3R5bGU5LmtleWZyYW1lcyBjYWxscyBzaG91bGQgYmUgY29tcGlsZWQgYXdheScpO1xufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgaWYgKCFzZWxlY3Rpb24ucmFuZ2VDb3VudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgfVxuICB2YXIgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICB2YXIgcmFuZ2VzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0aW9uLnJhbmdlQ291bnQ7IGkrKykge1xuICAgIHJhbmdlcy5wdXNoKHNlbGVjdGlvbi5nZXRSYW5nZUF0KGkpKTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aXZlLnRhZ05hbWUudG9VcHBlckNhc2UoKSkgeyAvLyAudG9VcHBlckNhc2UgaGFuZGxlcyBYSFRNTFxuICAgIGNhc2UgJ0lOUFVUJzpcbiAgICBjYXNlICdURVhUQVJFQSc6XG4gICAgICBhY3RpdmUuYmx1cigpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYWN0aXZlID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHNlbGVjdGlvbi50eXBlID09PSAnQ2FyZXQnICYmXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24ucmFuZ2VDb3VudCkge1xuICAgICAgcmFuZ2VzLmZvckVhY2goZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFjdGl2ZSAmJlxuICAgIGFjdGl2ZS5mb2N1cygpO1xuICB9O1xufTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2dW5kZWZpbmVkXG4gKiB1c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vL1xuLy8gSW4gb3JkZXIgdG8gYXZvaWQgcmVtb3ZpbmcgYW5kIHJlLWFkZGluZyBzdWJzY3JpcHRpb25zIGVhY2ggdGltZSB0aGlzIGhvb2sgaXMgY2FsbGVkLFxuLy8gdGhlIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoaXMgaG9vayBzaG91bGQgYmUgbWVtb2l6ZWQgaW4gc29tZSB3YXnigJNcbi8vIGVpdGhlciBieSB3cmFwcGluZyB0aGUgZW50aXJlIHBhcmFtcyBvYmplY3Qgd2l0aCB1c2VNZW1vKClcbi8vIG9yIGJ5IHdyYXBwaW5nIHRoZSBpbmRpdmlkdWFsIGNhbGxiYWNrcyB3aXRoIHVzZUNhbGxiYWNrKCkuXG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihfcmVmKSB7XG4gIHZhciBnZXRDdXJyZW50VmFsdWUgPSBfcmVmLmdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZSA9IF9yZWYuc3Vic2NyaWJlO1xuXG4gIC8vIFJlYWQgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSBvdXIgc3Vic2NyaXB0aW9uLlxuICAvLyBXaGVuIHRoaXMgdmFsdWUgY2hhbmdlcywgd2UnbGwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggUmVhY3QuXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGFsc28gc3RvcmUgdGhlIGhvb2sgcGFyYW1zIHNvIHRoYXQgd2UgY2FuIGNoZWNrIGZvciBzdGFsZW5lc3MuXG4gIC8vIChTZWUgdGhlIGNvbW1lbnQgaW4gY2hlY2tGb3JVcGRhdGVzKCkgYmVsb3cgZm9yIG1vcmUgaW5mby4pXG4gIHZhciBfdXNlU3RhdGUgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogZ2V0Q3VycmVudFZhbHVlKClcbiAgICB9O1xuICB9KSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHZhbHVlVG9SZXR1cm4gPSBzdGF0ZS52YWx1ZTsgLy8gSWYgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQgc2luY2Ugb3VyIGxhc3QgcmVuZGVyLCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBpdHMgY3VycmVudCB2YWx1ZS5cblxuICBpZiAoc3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgc3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAvLyBJZiB0aGUgc3Vic2NyaXB0aW9uIGhhcyBiZWVuIHVwZGF0ZWQsIHdlJ2xsIHNjaGVkdWxlIGFub3RoZXIgdXBkYXRlIHdpdGggUmVhY3QuXG4gICAgLy8gUmVhY3Qgd2lsbCBwcm9jZXNzIHRoaXMgdXBkYXRlIGltbWVkaWF0ZWx5LCBzbyB0aGUgb2xkIHN1YnNjcmlwdGlvbiB2YWx1ZSB3b24ndCBiZSBjb21taXR0ZWQuXG4gICAgLy8gSXQgaXMgc3RpbGwgbmljZSB0byBhdm9pZCByZXR1cm5pbmcgYSBtaXNtYXRjaGVkIHZhbHVlIHRob3VnaCwgc28gbGV0J3Mgb3ZlcnJpZGUgdGhlIHJldHVybiB2YWx1ZS5cbiAgICB2YWx1ZVRvUmV0dXJuID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVRvUmV0dXJuXG4gICAgfSk7XG4gIH0gLy8gRGlzcGxheSB0aGUgY3VycmVudCB2YWx1ZSBmb3IgdGhpcyBob29rIGluIFJlYWN0IERldlRvb2xzLlxuXG5cbiAgcmVhY3QudXNlRGVidWdWYWx1ZSh2YWx1ZVRvUmV0dXJuKTsgLy8gSXQgaXMgaW1wb3J0YW50IG5vdCB0byBzdWJzY3JpYmUgd2hpbGUgcmVuZGVyaW5nIGJlY2F1c2UgdGhpcyBjYW4gbGVhZCB0byBtZW1vcnkgbGVha3MuXG4gIC8vIChMZWFybiBtb3JlIGF0IHJlYWN0anMub3JnL2RvY3Mvc3RyaWN0LW1vZGUuaHRtbCNkZXRlY3RpbmctdW5leHBlY3RlZC1zaWRlLWVmZmVjdHMpXG4gIC8vIEluc3RlYWQsIHdlIHdhaXQgdW50aWwgdGhlIGNvbW1pdCBwaGFzZSB0byBhdHRhY2ggb3VyIGhhbmRsZXIuXG4gIC8vXG4gIC8vIFdlIGludGVudGlvbmFsbHkgdXNlIGEgcGFzc2l2ZSBlZmZlY3QgKHVzZUVmZmVjdCkgcmF0aGVyIHRoYW4gYSBzeW5jaHJvbm91cyBvbmUgKHVzZUxheW91dEVmZmVjdClcbiAgLy8gc28gdGhhdCB3ZSBkb24ndCBzdHJldGNoIHRoZSBjb21taXQgcGhhc2UuXG4gIC8vIFRoaXMgYWxzbyBoYXMgYW4gYWRkZWQgYmVuZWZpdCB3aGVuIG11bHRpcGxlIGNvbXBvbmVudHMgYXJlIHN1YnNjcmliZWQgdG8gdGhlIHNhbWUgc291cmNlOlxuICAvLyBJdCBhbGxvd3MgZWFjaCBvZiB0aGUgZXZlbnQgaGFuZGxlcnMgdG8gc2FmZWx5IHNjaGVkdWxlIHdvcmsgd2l0aG91dCBwb3RlbnRpYWxseSByZW1vdmluZyBhbiBhbm90aGVyIGhhbmRsZXIuXG4gIC8vIChMZWFybiBtb3JlIGF0IGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9rMHl2cjU5NzBvKVxuXG4gIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG5cbiAgICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGV2ZW4gYWZ0ZXIgYmVpbmcgdW5zdWJzY3JpYmVkLFxuICAgICAgLy8gaWYgaXQncyByZW1vdmVkIGFzIGEgcmVzdWx0IG9mIGEgc3Vic2NyaXB0aW9uIGV2ZW50L3VwZGF0ZS5cbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgUmVhY3Qgd2lsbCBsb2cgYSBERVYgd2FybmluZyBhYm91dCBhbiB1cGRhdGUgZnJvbSBhbiB1bm1vdW50ZWQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgY2FuIGF2b2lkIHRyaWdnZXJpbmcgdGhhdCB3YXJuaW5nIHdpdGggdGhpcyBjaGVjay5cbiAgICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFdlIHVzZSBhIHN0YXRlIHVwZGF0ZXIgZnVuY3Rpb24gdG8gYXZvaWQgc2NoZWR1bGluZyB3b3JrIGZvciBhIHN0YWxlIHNvdXJjZS5cbiAgICAgIC8vIEhvd2V2ZXIgaXQncyBpbXBvcnRhbnQgdG8gZWFnZXJseSByZWFkIHRoZSBjdXJyZW50bHkgdmFsdWUsXG4gICAgICAvLyBzbyB0aGF0IGFsbCBzY2hlZHVsZWQgd29yayBzaGFyZXMgdGhlIHNhbWUgdmFsdWUgKGluIHRoZSBldmVudCBvZiBtdWx0aXBsZSBzdWJzY3JpcHRpb25zKS5cbiAgICAgIC8vIFRoaXMgYXZvaWRzIHZpc3VhbCBcInRlYXJpbmdcIiB3aGVuIGEgbXV0YXRpb24gaGFwcGVucyBkdXJpbmcgYSAoY29uY3VycmVudCkgcmVuZGVyLlxuXG5cbiAgICAgIHZhciB2YWx1ZSA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAvLyBJZ25vcmUgdmFsdWVzIGZyb20gc3RhbGUgc291cmNlcyFcbiAgICAgICAgLy8gU2luY2Ugd2Ugc3Vic2NyaWJlIGFuIHVuc3Vic2NyaWJlIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBmb3IgYSBzdGFsZSAocHJldmlvdXMpIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBhdm9pZHMgc2NoZWR1bGluZyBhbiB1cGRhdGUgZm9yIHRoYXQgc3RhbGUgc3Vic2NyaXB0aW9uLlxuICAgICAgICBpZiAocHJldlN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHByZXZTdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH0gLy8gU29tZSBzdWJzY3JpcHRpb25zIHdpbGwgYXV0by1pbnZva2UgdGhlIGhhbmRsZXIsIGV2ZW4gaWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLlxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQsIG5vIHVwZGF0ZSBpcyBuZWVkZWQuXG4gICAgICAgIC8vIFJldHVybiBzdGF0ZSBhcy1pcyBzbyBSZWFjdCBjYW4gYmFpbCBvdXQgYW5kIGF2b2lkIGFuIHVubmVjZXNzYXJ5IHJlbmRlci5cblxuXG4gICAgICAgIGlmIChwcmV2U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGNoZWNrRm9yVXBkYXRlcyk7IC8vIEJlY2F1c2Ugd2UncmUgc3Vic2NyaWJpbmcgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgYW4gdXBkYXRlIGhhcyBvY2N1cnJlZCBiZXR3ZWVuIHJlbmRlciBhbmQgb3VyIGVmZmVjdCBoYW5kbGVyLlxuICAgIC8vIENoZWNrIGZvciB0aGlzIGFuZCBzY2hlZHVsZSBhbiB1cGRhdGUgaWYgd29yayBoYXMgb2NjdXJyZWQuXG5cbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbZ2V0Q3VycmVudFZhbHVlLCBzdWJzY3JpYmVdKTsgLy8gUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGZvciBvdXIgY2FsbGVyIHRvIHVzZSB3aGlsZSByZW5kZXJpbmcuXG5cbiAgcmV0dXJuIHZhbHVlVG9SZXR1cm47XG59XG5cbmV4cG9ydHMudXNlU3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMCxcblx0XCJzdHlsZXNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwYXNzd29yZF9tYW5hZ2VyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3Bhc3N3b3JkX21hbmFnZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=