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
/* harmony export */   "CONTEXT": () => (/* binding */ CONTEXT)
/* harmony export */ });
const CONTEXT = {"type":"development","title":"Password Manager Dev","rootContainerId":"root","version":"1.0.0","repoLink":"https://github.com/avdotion/password-manager","selfLink":"","routes":{"index":{"name":"index","controller":"IndexPage","overrideParams":{},"path":"/"}}};

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
/* harmony import */ var _reatom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reatom/core */ "./node_modules/@reatom/core/build/index.es.js");
/* harmony import */ var _reatom_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reatom/react */ "./node_modules/@reatom/react/build/index.es.js");
/* harmony import */ var _ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _StoreLocally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StoreLocally */ "./src/features/StoreLocally/index.ts");
/* harmony import */ var _StylesReset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StylesReset */ "./src/features/StylesReset/index.tsx");
/* harmony import */ var _Theming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Theming */ "./src/features/Theming/index.ts");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_features_Root_view_36v8_C_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/features/Root/view.-36v8_C.css */ "./src/features/Root/view.-36v8_C.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");






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
const Easel = (0,_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__.overrideFrame)({
  styles: [easelStyles.defaults],
  def: 'easel'
});
function Root({
  Content,
  params
}) {
  const store = (0,_reatom_core__WEBPACK_IMPORTED_MODULE_5__.createStore)();
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StylesReset__WEBPACK_IMPORTED_MODULE_3__.ResetStyles, {
    children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Theming__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
      overrideTheme: params === null || params === void 0 ? void 0 : params.theme,
      children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Easel, {
        children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_reatom_react__WEBPACK_IMPORTED_MODULE_0__.reatomContext.Provider, {
          value: store,
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Content, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StoreLocally__WEBPACK_IMPORTED_MODULE_2__.StoreLocallyConnector, {})]
        })
      })
    })
  });
}




/***/ }),

/***/ "./src/features/Routing/index.tsx":
/*!****************************************!*\
  !*** ./src/features/Routing/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveCurrentPage": () => (/* binding */ resolveCurrentPage)
/* harmony export */ });
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/dist.es2015/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context */ "./src/context.ts");
/* harmony import */ var _utils_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/syntax */ "./src/utils/syntax.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");




async function resolveCurrentPage(url) {
  const parsedUrl = new URL(url);
  const pathname = parsedUrl.pathname;
  const queryParams = Object.fromEntries(parsedUrl.searchParams);
  const basePrefix = _context__WEBPACK_IMPORTED_MODULE_0__.CONTEXT.selfLink && new URL(_context__WEBPACK_IMPORTED_MODULE_0__.CONTEXT.selfLink).pathname;

  for (const route of (0,_utils_syntax__WEBPACK_IMPORTED_MODULE_1__.valuesOf)(_context__WEBPACK_IMPORTED_MODULE_0__.CONTEXT.routes)) {
    const {
      controller,
      overrideParams,
      path
    } = route;
    const matcher = (0,path_to_regexp__WEBPACK_IMPORTED_MODULE_3__.match)(basePrefix + path);
    const result = matcher(pathname);

    if (!result) {
      continue;
    }

    const params = { ...queryParams,
      ...result.params,
      ...overrideParams
    };
    return __webpack_require__("./src/pages lazy recursive ^\\.\\/.*\\/index$")(`./${controller}/index`).then(module => [module.default, params]);
  }

  return Promise.resolve([() => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
    children: "Not Found!"
  }), {}]);
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
  return `${_context__WEBPACK_IMPORTED_MODULE_0__.CONTEXT.version}_${id}`;
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


const stylesReset = {
  font: {
    '--font-sans-serif': 'Inter',
    '--font-monospace': 'Roboto Mono',
    fontFamily: 'var(--font-sans-serif)'
  }
};
const ResetStyles = (0,_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__.overrideFrame)({
  def: 'reset-styles',
  styles: [stylesReset.font]
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
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette */ "./src/features/Theming/palette.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");




function ThemeProvider({
  overrideTheme,
  children
}) {
  const detectedTheme = useThemeListener();
  const theme = overrideTheme in _palette__WEBPACK_IMPORTED_MODULE_2__.THEMES ? overrideTheme : detectedTheme;
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_1__.Frame, {
    styles: [_palette__WEBPACK_IMPORTED_MODULE_2__.themeStyles[theme]],
    def: "theme-provider",
    children: children
  });
}

function useThemeListener() {
  const isNightTime = matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(isNightTime ? _palette__WEBPACK_IMPORTED_MODULE_2__.THEMES.dark : _palette__WEBPACK_IMPORTED_MODULE_2__.THEMES.light);
  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    matchMedia('(prefers-color-scheme: dark)').addListener(e => e.matches && setTheme(_palette__WEBPACK_IMPORTED_MODULE_2__.THEMES.dark));
    matchMedia('(prefers-color-scheme: light)').addListener(e => e.matches && setTheme(_palette__WEBPACK_IMPORTED_MODULE_2__.THEMES.light));
  });
  return theme;
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
/* harmony import */ var _features_Routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/Routing */ "./src/features/Routing/index.tsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");






async function main() {
  const currentUrl = document.location.href;
  const [CurrentPage, params] = await (0,_features_Routing__WEBPACK_IMPORTED_MODULE_3__.resolveCurrentPage)(currentUrl);
  const rootElement = document.getElementById(_context__WEBPACK_IMPORTED_MODULE_1__.CONTEXT.rootContainerId);
  (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_features_Root__WEBPACK_IMPORTED_MODULE_2__.Root, {
    Content: CurrentPage,
    params: params
  }), rootElement);
}

main().catch(e => {
  console.error(e);
});

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
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_Text_index_26RXuTK_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ui/Text/index.26RXuTK.css */ "./src/ui/Text/index.26RXuTK.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

const textStyles = {
  default: {
    color: "cps0bng"
  }
};
const { ...familyStyles
} = {
  default: {
    fontFamily: "c1ldl3gt"
  },
  monospace: {
    fontFamily: "c1r9fxf9"
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

/***/ "./src/ui/Label/index.1Wu-4lf.css":
/*!****************************************!*\
  !*** ./src/ui/Label/index.1Wu-4lf.css ***!
  \****************************************/
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

/***/ "./src/ui/Text/index.26RXuTK.css":
/*!***************************************!*\
  !*** ./src/ui/Text/index.26RXuTK.css ***!
  \***************************************/
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

/***/ "./node_modules/path-to-regexp/dist.es2015/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/path-to-regexp/dist.es2015/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "compile": () => (/* binding */ compile),
/* harmony export */   "tokensToFunction": () => (/* binding */ tokensToFunction),
/* harmony export */   "match": () => (/* binding */ match),
/* harmony export */   "regexpToFunction": () => (/* binding */ regexpToFunction),
/* harmony export */   "tokensToRegexp": () => (/* binding */ tokensToRegexp),
/* harmony export */   "pathToRegexp": () => (/* binding */ pathToRegexp)
/* harmony export */ });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map

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


/***/ }),

/***/ "./src/pages lazy recursive ^\\.\\/.*\\/index$":
/*!**********************************************************!*\
  !*** ./src/pages/ lazy ^\.\/.*\/index$ namespace object ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./IndexPage/index": [
		"./src/pages/IndexPage/index.tsx",
		"styles",
		"src_pages_IndexPage_index_tsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/pages lazy recursive ^\\.\\/.*\\/index$";
module.exports = webpackAsyncContext;

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "0a8a227c7c2d2f341d16" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "password-manager:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("styles" != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL0ByZWF0b20vY29yZS9idWlsZC9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL0ByZWF0b20vcmVhY3QvYnVpbGQvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9jb250ZXh0LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvUm9vdC92aWV3LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1JvdXRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvU2FsdGVkUGFzc3dvcmRMZW5ndGgvY29udGV4dC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1NhbHRlZFBhc3N3b3JkTGVuZ3RoL2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvU2FsdGVkUGFzc3dvcmRMZW5ndGgvdmlldy50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9TZWxlY3RIYXNoRnVuY3Rpb24vY29udGV4dC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1NlbGVjdEhhc2hGdW5jdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1NlbGVjdEhhc2hGdW5jdGlvbi92aWV3LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1N0b3JlTG9jYWxseS9jb21tb24udHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9TdG9yZUxvY2FsbHkvY29udGV4dC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1N0b3JlTG9jYWxseS9pbmRleC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1N0b3JlTG9jYWxseS9yZXN0b3JlTG9jYWxseS50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1N0b3JlTG9jYWxseS9zdG9yZUxvY2FsbHkudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9TdG9yZUxvY2FsbHkvdmlldy50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9TdHlsZXNSZXNldC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9UaGVtaW5nL2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvVGhlbWluZy9wYWxldHRlLnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvVGhlbWluZy90aGVtZVByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3NhbHRpbmcudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9MYWJlbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9TZWxlY3QvT3B0aW9uLnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1NlbGVjdC9TZWxlY3QudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvU2VsZWN0L2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvVGV4dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9sYXlvdXQvRnJhbWUudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdXRpbHMvY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3V0aWxzL2NyeXB0by50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3V0aWxzL3N5bnRheC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3V0aWxzL3VybC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1lcy9saWIvY29yZS5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1lcy9saWIvZW5jLWJhc2U2NC5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1lcy9saWIvbWQ1LmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWVzL2xpYi9yaXBlbWQxNjAuanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jcnlwdG8tZXMvbGliL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1lcy9saWIvc2hhMy5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1lcy9saWIvc2hhNTEyLmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWVzL2xpYi94NjQtY29yZS5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL21vZGVybi1jc3MtcmVzZXQvZGlzdC9yZXNldC5taW4uY3NzPzRhMDgiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9Sb290L3ZpZXcuLTM2djhfQy5jc3M/M2QzMiIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1RoZW1pbmcvcGFsZXR0ZS5ZQ1p1MGhrLmNzcz9lZjNmIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvTGFiZWwvaW5kZXguMVd1LTRsZi5jc3M/YjZkOSIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1NlbGVjdC9TZWxlY3QuMmxpWEh5Ry5jc3M/ZGJkNCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1RleHQvaW5kZXguMjZSWHVUSy5jc3M/M2JiYiIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL2xheW91dC9GcmFtZS5VeXVSdUtzLmNzcz82MTkyIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3BhdGgtdG8tcmVnZXhwL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL2Rpc3QvanN4UnVudGltZS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZTkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3BhZ2VzfGxhenl8L15cXC5cXC8uKlxcL2luZGV4JC98Z3JvdXBPcHRpb25zOiB7fXxuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiQ09MT1JGVUxfRU1PSklTX09SREVSRURfTElTVCIsIkRFRkFVTFRfRU1PSkkiLCJTQUxURURfUEFTU1dPUkRfREVGQVVMVF9MRU5HVEgiLCJTQUxURURfUEFTU1dPUkRfTUlOX0xFTkdUSCIsIlNBTFRFRF9QQVNTV09SRF9NQVhfTEVOR1RIIiwiU0VTU0lPTl9USU1FX1RPX1RFUk1JTkFURSIsIkNPTlRFWFQiLCJwcm9jZXNzIiwiZWFzZWxTdHlsZXMiLCJFYXNlbCIsIm92ZXJyaWRlRnJhbWUiLCJzdHlsZXMiLCJkZWYiLCJwYXJhbXMiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVzb2x2ZUN1cnJlbnRQYWdlIiwidXJsIiwicGFyc2VkVXJsIiwiVVJMIiwicGF0aG5hbWUiLCJxdWVyeVBhcmFtcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwic2VhcmNoUGFyYW1zIiwiYmFzZVByZWZpeCIsInJvdXRlIiwidmFsdWVzT2YiLCJjb250cm9sbGVyIiwib3ZlcnJpZGVQYXJhbXMiLCJwYXRoIiwibWF0Y2hlciIsIm1hdGNoIiwicmVzdWx0IiwidGhlbiIsIm1vZHVsZSIsImRlZmF1bHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNhbHRlZFBhc3N3b3JkTGVuZ3RoIiwiYXRvbSIsInJlc3RvcmVMb2NhbGx5IiwiY2hhbmdlIiwidmFsdWUiLCJTYWx0ZWRQYXNzd29yZExlbmd0aCIsInNhbHRlZFBhc3N3b3JkTGVuZ3RoVmFsdWUiLCJ1c2VBdG9tIiwicmFuZ2UiLCJtYXAiLCJsZW5ndGgiLCJoYXNoRnVuY3Rpb25OYW1lIiwiREVGQVVMVF9IQVNIX0ZVTkNUSU9OX05BTUUiLCJ4IiwiaGFzaEZ1bmN0aW9uIiwiJCIsIkhBU0hfRlVOQ1RJT05TIiwiU2VsZWN0SGFzaEZ1bmN0aW9uIiwiaGFzaEZ1bmN0aW9uTmFtZVZhbHVlIiwib25TZWxlY3QiLCJrZXlzT2YiLCJnZW5lcmF0ZUZpZWxkS2V5IiwiaWQiLCJzdG9yZUxvY2FsbHlPYnNlcnZlciIsInN0b3JlTG9jYWxseSIsImZpZWxkSWQiLCJzdG9yZWRWYWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJKU09OIiwicGFyc2UiLCJlIiwicmVtb3ZlSXRlbSIsIkVycm9yIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlN0b3JlTG9jYWxseUNvbm5lY3RvciIsInN0eWxlc1Jlc2V0IiwiZm9udCIsImZvbnRGYW1pbHkiLCJSZXNldFN0eWxlcyIsIlRIRU1FUyIsImxpZ2h0IiwiZGFyayIsImJsYWNrIiwidGhlbWVTdHlsZXMiLCJUaGVtZVByb3ZpZGVyIiwib3ZlcnJpZGVUaGVtZSIsImNoaWxkcmVuIiwiZGV0ZWN0ZWRUaGVtZSIsInVzZVRoZW1lTGlzdGVuZXIiLCJ0aGVtZSIsImlzTmlnaHRUaW1lIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzZXRUaGVtZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWRkTGlzdGVuZXIiLCJtYWluIiwiY3VycmVudFVybCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJocmVmIiwiQ3VycmVudFBhZ2UiLCJyb290RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJtZDUiLCJzaGEzIiwic2hhMjU2Iiwic2hhNTEyIiwicmlwZW1kMTYwIiwic2FsdFRoZVBhc3MiLCJtYXN0ZXJQYXNzd29yZCIsImRvbWFpbk5hbWUiLCJlbWFpbCIsInRyaW0iLCJlc2NhcGVCYXNlNjQiLCJiYXNlNjQiLCJleHRyYWN0SG9zdCIsImxhYmVsU3R5bGUiLCJPcHRpb24iLCJwcm9wcyIsInNlbGVjdFN0eWxlcyIsInN0eWxlOSIsImZhbWlseVN0eWxlcyIsInNpemVTdHlsZXMiLCJvbkNoYW5nZSIsInRleHRTdHlsZXMiLCJ3ZWlnaHRTdHlsZXMiLCJhbGlnblN0eWxlcyIsImFzIiwiVGFnIiwiZmFtaWx5Iiwic2l6ZSIsIndlaWdodCIsImFsaWduIiwiaGVpZ2h0U3R5bGVzIiwid2lkdGhTdHlsZXMiLCJnYXBTdHlsZXMiLCJkaXJlY3Rpb25TdHlsZXMiLCJmcmFtZVN0eWxlcyIsImRpcmVjdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FwIiwib3ZlcnJpZGVDb21wb25lbnQiLCJDb21wb25lbnQiLCJvdmVycmlkZVByb3BzIiwibWFwcGluZyIsIk92ZXJyaWRkZW5Db21wb25lbnQiLCJtYXBwZWRQcm9wcyIsImtleSIsInN0cmluZ1RvTnVtYmVyIiwiaSIsImNoYXJDb2RlQXQiLCJNRDUiLCJTSEEzIiwiU0hBMjU2IiwiU0hBNTEyIiwiUklQRU1EMTYwIiwidG9TdHJpbmciLCJCYXNlNjQiLCJyZXBsYWNlIiwiZW50cmllc09mIiwiZW50cmllcyIsImtleXMiLCJ2YWx1ZXMiLCJ0aW1lcyIsIm4iLCJmbiIsIkFycmF5IiwiZnJvbSIsIl8iLCJpbmRleCIsInN1YnN0cmluZyIsInRvIiwic3RlcCIsInB1c2giLCJwYXJzZVVybCIsInVybFRvUGFyc2UiLCJzdGFydHNXaXRoIiwiaG9zdCIsImV4dHJhY3RPcmlnaW4iLCJvcmlnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0IsY0FBYyxJQUFJLGdEQUFnRCxTQUFTLGlFQUFpRSxRQUFRLEtBQUssa0JBQWtCLGVBQWUsd0NBQXdDLGtCQUFrQixlQUFlLGtEQUFrRCxjQUFjLHlCQUF5QixjQUFjLG1DQUFtQyxjQUFjLDJCQUEyQixnQkFBZ0IsNERBQTRELGNBQWMsMkJBQTJCLGdCQUFnQix3REFBd0QsY0FBYywyQkFBMkIsZ0JBQWdCLDBEQUEwRCxjQUFjLHNDQUFzQyxnQkFBZ0IsMkNBQTJDLG9CQUFvQixtREFBbUQsbUJBQW1CLEVBQUUsT0FBTywyQ0FBMkMsbUJBQW1CLGlEQUFpRCwrQ0FBK0Msa0JBQWtCLFNBQVMsa0JBQWtCLGlEQUFpRCxhQUFhLCtCQUErQiw0REFBNEQsZ0JBQWdCLEVBQUUsb0RBQW9ELGlDQUFpQyxHQUFHLGFBQWEscUJBQXFCLG1DQUFtQyxTQUFTLGFBQWEsOEJBQThCLGtCQUFrQixnQkFBZ0IsS0FBSyx3Q0FBd0MsVUFBVSxtQ0FBbUMsR0FBRyxlQUFlLGdDQUFnQyxvQkFBb0IsdUJBQXVCLGNBQWMsaUNBQWlDLGtCQUFrQixFQUFFLHlCQUF5Qiw2Q0FBNkMsSUFBSSw2QkFBNkIsbUJBQW1CLFVBQVUseUNBQXlDLG1HQUFtRyxlQUFlLDBEQUEwRCxxQ0FBcUMsZUFBZSxNQUFNLG9LQUFvSyxtQ0FBbUMsMkNBQTJDLFFBQVEsS0FBSyx5REFBeUQsa0JBQWtCLE9BQU8sV0FBVyxLQUFLLGdCQUFnQiwyQ0FBMkMsNEJBQTRCLCtDQUErQyx1SUFBdUksSUFBSSxPQUFPLEdBQUcsNkJBQTZCLDREQUE0RCx5QkFBeUIsd0JBQXdCLFlBQVksUUFBUSxrQkFBa0IsaUJBQWlCLG1CQUFtQixFQUFFLGVBQWUsS0FBSyxzQ0FBc0MsU0FBUyw0REFBNEQsdUJBQXVCLDJCQUEyQixvREFBb0QsbUJBQW1CLEdBQUcsMkNBQTJDLE9BQU8sOENBQThDLE9BQU8scUJBQXFCLG1CQUFtQixrQkFBa0IsOEJBQThCLGdCQUFnQixxQ0FBcUMsZ0JBQWdCLElBQUksVUFBVSxnQkFBZ0IsZ0JBQWdCLDhDQUE4Qyw4QkFBOEIsZUFBZSwwRUFBMEUsa0NBQWtDLElBQUksK0dBQStHLGlCQUFpQix1QkFBdUIscUJBQXFCLHlCQUF5Qix3QkFBd0IsR0FBRyxjQUFjLGlCQUFpQixFQUFFLDBEQUEwRCxnQkFBZ0IsaUJBQWlCLEVBQUUsb0JBQW9CLDZDQUE2Qyx5QkFBeUIsSUFBSSxrQkFBa0IsNkJBQTZCLHNEQUFzRCw4Q0FBOEMsSUFBSSxzQkFBc0IsZ0JBQWdCLDRDQUE0QyxvQkFBb0IsRUFBRSx3QkFBd0IsTUFBTSw0REFBNEQsb0JBQW9CLEVBQUUsMEJBQTBCLHVCQUF1QixXQUFXLGtEQUFrRCxnQkFBZ0Isa0RBQWtELGdDQUFnQyw4QkFBOEIsZ0NBQWdDLHdFQUF3RSxRQUFRLEVBQUUsU0FBUyxvQ0FBb0MsT0FBTywyQkFBMkIsNkJBQTZCLGNBQWMsd0JBQXdCLE1BQU0sMERBQTBELHVCQUF1QixFQUFFLHdCQUF3QixNQUFNLDREQUE0RCxjQUFjLEVBQUUsK0NBQStDLCtCQUErQixlQUFlLEVBQUUsSUFBSSxjQUFjLGdCQUFnQixjQUFjLGVBQWUsU0FBUywrQkFBK0IsY0FBYyxJQUFJLCtCQUErQixXQUFXLHVCQUF1Qiw2RUFBNkUsa0JBQWtCLGdCQUFnQixvQkFBb0IsYUFBYSx3RUFBd0UsZ0JBQWdCLEdBQUcscURBQXFELElBQUksOENBQThDLGdCQUFnQixJQUFJLFNBQVMsYUFBYSxnQkFBZ0IsZ0NBQWdDLHNCQUFzQixjQUFjLDJCQUEyQixvQkFBb0IsT0FBTyxpREFBaUQsK0NBQStDLGNBQWMsRUFBRSxrQkFBa0IsNkJBQTZCLFdBQVcsR0FBRyxzQkFBc0IsK0JBQStCLDZIQUE2SCx1Q0FBdUMsNkZBQTZGLFNBQVMsVUFBcVc7QUFDaDJOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGtLLE1BQU0sd0RBQWUsQ0FBQyxzREFBQyxFQUFFLGdCQUFnQixtQkFBbUIsV0FBVyxHQUFHLGtFQUF5QixZQUFZLGNBQWMsR0FBRyxnQkFBZ0IsbUJBQW1CLE1BQU0scURBQVksSUFBSSxPQUFPLHNEQUFhLHFCQUFxQixnQkFBZ0IsbUJBQW1CLE1BQU0scURBQVksTUFBTSxrREFBUyxZQUFZLFFBQVEsMkJBQTJCLHFCQUFxQix1QkFBdUIseUJBQXlCLHdDQUF3QyxrQkFBa0IsT0FBTyw2REFBQyxxQkFBcUIsR0FBRyxHQUFHLGtCQUFrQixPQUFPLGlFQUFDLGFBQWEsZ0JBQWdCLG1CQUFtQixNQUFNLHFEQUFZLElBQUksb0RBQVcsWUFBWSx5QkFBeUIsSUFBd0U7QUFDajNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNETyxNQUFNQSw0QkFBNEIsR0FBRyxDQUN4QyxJQUR3QyxFQUNuQyxJQURtQyxFQUM5QixJQUQ4QixFQUN6QixJQUR5QixFQUNwQixJQURvQixFQUNmLElBRGUsRUFDVixJQURVLEVBQ0wsSUFESyxFQUNBLElBREEsRUFDSyxJQURMLEVBQ1UsSUFEVixFQUNlLElBRGYsRUFDb0IsSUFEcEIsRUFDeUIsSUFEekIsRUFDOEIsSUFEOUIsRUFDbUMsSUFEbkMsRUFDd0MsSUFEeEMsRUFDNkMsSUFEN0MsRUFDa0QsSUFEbEQsRUFDdUQsSUFEdkQsRUFDNEQsSUFENUQsRUFDaUUsSUFEakUsRUFDc0UsSUFEdEUsRUFDMkUsSUFEM0UsRUFFeEMsSUFGd0MsRUFFbkMsSUFGbUMsRUFFOUIsSUFGOEIsRUFFekIsSUFGeUIsRUFFcEIsSUFGb0IsRUFFZixJQUZlLEVBRVYsSUFGVSxFQUVMLElBRkssRUFFQSxJQUZBLEVBRUssSUFGTCxFQUVVLElBRlYsRUFFZSxJQUZmLEVBRW9CLElBRnBCLEVBRXlCLElBRnpCLEVBRThCLElBRjlCLEVBRW1DLElBRm5DLEVBRXdDLElBRnhDLEVBRTZDLElBRjdDLEVBRWtELElBRmxELEVBRXVELElBRnZELEVBRTRELElBRjVELEVBRWlFLElBRmpFLEVBRXNFLElBRnRFLEVBRTJFLElBRjNFLEVBR3hDLElBSHdDLEVBR25DLElBSG1DLEVBRzlCLElBSDhCLEVBR3pCLElBSHlCLEVBR3BCLElBSG9CLEVBR2YsSUFIZSxFQUdWLElBSFUsRUFHTCxJQUhLLEVBR0EsSUFIQSxFQUdLLElBSEwsRUFHVSxJQUhWLEVBR2UsSUFIZixFQUdvQixJQUhwQixFQUd5QixJQUh6QixFQUc4QixJQUg5QixFQUdtQyxJQUhuQyxFQUd3QyxJQUh4QyxFQUc2QyxJQUg3QyxFQUdrRCxJQUhsRCxFQUd1RCxJQUh2RCxFQUc0RCxJQUg1RCxFQUdpRSxJQUhqRSxFQUdzRSxJQUh0RSxFQUcyRSxJQUgzRSxFQUl4QyxJQUp3QyxFQUluQyxJQUptQyxFQUk5QixJQUo4QixFQUl6QixJQUp5QixFQUlwQixJQUpvQixFQUlmLElBSmUsRUFJVixJQUpVLEVBSUwsSUFKSyxFQUlBLElBSkEsRUFJSyxJQUpMLEVBSVUsSUFKVixFQUllLElBSmYsRUFJb0IsSUFKcEIsRUFJeUIsSUFKekIsRUFJOEIsSUFKOUIsRUFJbUMsSUFKbkMsRUFJd0MsSUFKeEMsRUFJNkMsSUFKN0MsRUFJa0QsSUFKbEQsRUFJdUQsSUFKdkQsRUFJNEQsSUFKNUQsRUFJaUUsSUFKakUsRUFJc0UsSUFKdEUsRUFJMkUsSUFKM0UsRUFLeEMsSUFMd0MsRUFLbkMsSUFMbUMsRUFLOUIsSUFMOEIsRUFLekIsSUFMeUIsRUFLcEIsSUFMb0IsRUFLZixJQUxlLEVBS1YsSUFMVSxFQUtMLElBTEssRUFLQSxJQUxBLEVBS0ssSUFMTCxFQUtVLElBTFYsRUFLZSxJQUxmLEVBS29CLElBTHBCLEVBS3lCLElBTHpCLEVBSzhCLElBTDlCLEVBS29DLElBTHBDLEVBS3lDLElBTHpDLEVBSzhDLElBTDlDLEVBS21ELElBTG5ELEVBS3dELElBTHhELEVBSzZELElBTDdELEVBS2tFLElBTGxFLEVBS3VFLElBTHZFLEVBSzRFLElBTDVFLEVBTXhDLElBTndDLEVBTW5DLElBTm1DLEVBTTlCLElBTjhCLEVBTXpCLElBTnlCLEVBTXBCLElBTm9CLEVBTWYsSUFOZSxFQU1WLElBTlUsRUFNTCxJQU5LLEVBTUEsSUFOQSxFQU1LLEdBTkwsRUFNUyxJQU5ULEVBTWMsSUFOZCxFQU1tQixJQU5uQixFQU13QixJQU54QixFQU02QixJQU43QixFQU1rQyxJQU5sQyxFQU11QyxJQU52QyxFQU00QyxJQU41QyxFQU1pRCxJQU5qRCxFQU1zRCxJQU50RCxFQU0yRCxJQU4zRCxFQU1nRSxJQU5oRSxFQU1xRSxJQU5yRSxFQU0wRSxJQU4xRSxFQU94QyxJQVB3QyxFQU9uQyxJQVBtQyxFQU85QixJQVA4QixFQU96QixJQVB5QixFQU9wQixJQVBvQixFQU9mLElBUGUsRUFPVixJQVBVLEVBT0wsSUFQSyxFQU9BLElBUEEsRUFPSyxJQVBMLEVBT1UsSUFQVixFQU9lLElBUGYsRUFPb0IsSUFQcEIsRUFPeUIsSUFQekIsRUFPOEIsSUFQOUIsRUFPbUMsSUFQbkMsRUFPd0MsSUFQeEMsRUFPNkMsSUFQN0MsRUFPa0QsSUFQbEQsRUFPdUQsSUFQdkQsRUFPNEQsR0FQNUQsRUFPZ0UsSUFQaEUsRUFPcUUsSUFQckUsRUFPMEUsSUFQMUUsRUFReEMsR0FSd0MsRUFRcEMsSUFSb0MsRUFRL0IsSUFSK0IsRUFRMUIsSUFSMEIsRUFRckIsSUFScUIsRUFRaEIsSUFSZ0IsRUFRWCxJQVJXLEVBUU4sSUFSTSxFQVFELElBUkMsRUFRSSxJQVJKLEVBUVMsSUFSVCxFQVFjLElBUmQsRUFRbUIsSUFSbkIsRUFRd0IsSUFSeEIsRUFRNkIsSUFSN0IsRUFRa0MsSUFSbEMsRUFRdUMsSUFSdkMsRUFRNEMsSUFSNUMsRUFRaUQsSUFSakQsRUFRc0QsSUFSdEQsRUFRMkQsSUFSM0QsRUFRZ0UsSUFSaEUsRUFRcUUsSUFSckUsRUFRMEUsSUFSMUUsRUFTeEMsSUFUd0MsRUFTbkMsSUFUbUMsRUFTOUIsSUFUOEIsRUFTekIsSUFUeUIsRUFTcEIsSUFUb0IsRUFTZixJQVRlLEVBU1YsSUFUVSxFQVNMLElBVEssRUFTQSxJQVRBLEVBU0ssSUFUTCxFQVNVLElBVFYsRUFTZSxJQVRmLEVBU29CLElBVHBCLEVBU3lCLElBVHpCLEVBUzhCLElBVDlCLEVBU21DLElBVG5DLEVBU3dDLElBVHhDLEVBUzZDLEdBVDdDLEVBU2lELElBVGpELEVBU3NELElBVHRELEVBUzJELElBVDNELEVBU2dFLEdBVGhFLEVBU29FLElBVHBFLEVBU3lFLElBVHpFLEVBVXhDLEdBVndDLEVBVXBDLElBVm9DLEVBVS9CLElBVitCLEVBVTFCLElBVjBCLEVBVXJCLElBVnFCLEVBVWhCLElBVmdCLEVBVVgsSUFWVyxFQVVOLElBVk0sRUFVRCxJQVZDLEVBVUksSUFWSixFQVVTLElBVlQsRUFVYyxJQVZkLEVBVW1CLElBVm5CLEVBVXdCLElBVnhCLEVBVTZCLElBVjdCLEVBVWtDLElBVmxDLEVBVXVDLElBVnZDLEVBVTRDLElBVjVDLEVBVWlELEdBVmpELEVBVXFELElBVnJELEVBVTBELElBVjFELEVBVStELElBVi9ELEVBVW9FLElBVnBFLEVBVXlFLElBVnpFLEVBV3hDLElBWHdDLEVBV25DLElBWG1DLEVBVzlCLElBWDhCLEVBV3pCLElBWHlCLEVBV3BCLElBWG9CLEVBV2YsSUFYZSxFQVdWLElBWFUsRUFXTCxJQVhLLEVBV0EsSUFYQSxFQVdLLElBWEwsRUFXVSxJQVhWLEVBV2UsSUFYZixFQVdvQixJQVhwQixFQVd5QixJQVh6QixFQVc4QixJQVg5QixFQVdtQyxJQVhuQyxFQVd3QyxJQVh4QyxFQVc2QyxJQVg3QyxFQVdrRCxJQVhsRCxFQVd1RCxJQVh2RCxFQVc0RCxJQVg1RCxFQVdpRSxJQVhqRSxFQVdzRSxJQVh0RSxFQVcyRSxHQVgzRSxFQVl4QyxJQVp3QyxFQVluQyxJQVptQyxFQVk5QixHQVo4QixFQVkxQixJQVowQixFQVlyQixHQVpxQixFQVlqQixHQVppQixFQVliLElBWmEsRUFZUixJQVpRLEVBWUgsSUFaRyxFQVlFLElBWkYsRUFZTyxJQVpQLEVBWVksR0FaWixFQVlnQixJQVpoQixFQVlxQixJQVpyQixFQVkwQixJQVoxQixFQVkrQixJQVovQixFQVlvQyxJQVpwQyxFQVl5QyxJQVp6QyxFQVk4QyxJQVo5QyxFQVltRCxJQVpuRCxFQVl3RCxJQVp4RCxFQVk2RCxJQVo3RCxFQVlrRSxJQVpsRSxFQVl1RSxJQVp2RSxFQWF4QyxJQWJ3QyxFQWFuQyxJQWJtQyxFQWE5QixJQWI4QixFQWF6QixJQWJ5QixFQWFwQixJQWJvQixFQWFmLElBYmUsRUFhVixJQWJVLEVBYUwsSUFiSyxFQWFBLElBYkEsRUFhSyxJQWJMLEVBYVUsSUFiVixFQWFlLElBYmYsRUFhb0IsR0FicEIsRUFhd0IsSUFieEIsRUFhNkIsSUFiN0IsRUFha0MsSUFibEMsRUFhdUMsSUFidkMsRUFhNEMsR0FiNUMsRUFhZ0QsR0FiaEQsRUFhb0QsSUFicEQsRUFheUQsSUFiekQsRUFhOEQsSUFiOUQsRUFhbUUsSUFibkUsRUFhd0UsSUFieEUsRUFjeEMsSUFkd0MsRUFjbkMsSUFkbUMsRUFjOUIsSUFkOEIsRUFjekIsSUFkeUIsRUFjcEIsSUFkb0IsRUFjZixJQWRlLEVBY1YsR0FkVSxFQWNOLElBZE0sRUFjRCxJQWRDLEVBY0ksSUFkSixDQUFyQztBQWdCQSxNQUFNQyxhQUFhLEdBQUcsSUFBdEI7QUFFQSxNQUFNQyw4QkFBOEIsR0FBRyxFQUF2QztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLEVBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsRUFBbkM7QUFFQSxNQUFNQyx5QkFBeUIsR0FBRyxLQUFLLENBQUwsR0FBUyxJQUEzQyxDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkEsTUFBTUMsT0FBTyxHQUFHQyxvUUFBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFqQjtBQWFBLE1BQU1DLEtBQUssR0FBR0MsK0RBQWEsQ0FBQztBQUFDQyxRQUFNLEVBQUUsQ0FBQ0gsV0FBVyxDQUFyQixRQUFTLENBQVQ7QUFBaUNJLEtBQUcsRUFBRTtBQUF0QyxDQUFELENBQTNCO0FBT08sY0FBYztBQUFBO0FBRWpCQztBQUZpQixDQUFkLEVBR2dCO0FBQ25CLFFBQU1DLEtBQUssR0FBR0MseURBQWQ7QUFFQSxTQUNJO0FBQUEsY0FDSTtBQUFlLHFCQUFlRixNQUFmLGFBQWVBLE1BQWYsdUJBQWVBLE1BQU0sQ0FBcEM7QUFBQSxnQkFDSTtBQUFBLGtCQUNJLHlEQUFDLGlFQUFEO0FBQXdCLGlCQUF4QjtBQUFBLHFCQUNJLG9FQURKLEVBRUksNkhBRko7QUFBQTtBQURKO0FBREo7QUFESixJQURKO0FBWUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREQ7QUFHQTtBQUNBOztBQUlPLGVBQWVHLGtCQUFmLENBQWtDQyxHQUFsQyxFQUFrRztBQUNyRyxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsR0FBSixDQUFRRixHQUFSLENBQWxCO0FBQ0EsUUFBTUcsUUFBUSxHQUFHRixTQUFTLENBQUNFLFFBQTNCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUJMLFNBQVMsQ0FBQ00sWUFBN0IsQ0FBcEI7QUFFQSxRQUFNQyxVQUFVLEdBQUduQixzREFBQSxJQUFxQixJQUFJYSxHQUFKLENBQVFiLHNEQUFSLENBQUQsQ0FBNEJjLFFBQW5FOztBQUVBLE9BQUssTUFBTU0sS0FBWCxJQUFvQkMsdURBQVEsQ0FBQ3JCLG9EQUFELENBQTVCLEVBQThDO0FBQzFDLFVBQU07QUFBQ3NCLGdCQUFEO0FBQWFDLG9CQUFiO0FBQTZCQztBQUE3QixRQUFxQ0osS0FBM0M7QUFDQSxVQUFNSyxPQUFPLEdBQUdDLHFEQUFLLENBQUNQLFVBQVUsR0FBR0ssSUFBZCxDQUFyQjtBQUNBLFVBQU1HLE1BQU0sR0FBR0YsT0FBTyxDQUFDWCxRQUFELENBQXRCOztBQUVBLFFBQUksQ0FBQ2EsTUFBTCxFQUFhO0FBQ1Q7QUFDSDs7QUFFRCxVQUFNcEIsTUFBTSxHQUFHLEVBQ1gsR0FBR1EsV0FEUTtBQUVYLFNBQUdZLE1BQU0sQ0FBQ3BCLE1BRkM7QUFHWCxTQUFHZ0I7QUFIUSxLQUFmO0FBTUEsV0FBTyxxRUFBUSxLQUFjRCxVQUFXLFFBQWpDLEVBQ0ZNLElBREUsQ0FDR0MsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQ0MsT0FBUixFQUFpQnZCLE1BQWpCLENBRGIsQ0FBUDtBQUVIOztBQUVELFNBQU93QixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsQ0FBQyxNQUFNO0FBQUE7QUFBQSxJQUFQLEVBQTRCLEVBQTVCLENBQWhCLENBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFDQTtBQUNBO0FBRU8sTUFBTUMsb0JBQW9CLEdBQUdDLHlEQUFJLENBQ3BDQyw2REFBYyxDQUFTLHNCQUFULENBQWQsSUFBa0R2QyxzRUFEZCxFQUVwQztBQUNJd0MsUUFBTSxFQUFHQyxLQUFELElBQW1CO0FBQ3ZCLFFBQUlBLEtBQUssR0FBR3ZDLGtFQUFaLEVBQXdDO0FBQ3BDLGFBQU9BLGtFQUFQO0FBQ0g7O0FBRUQsUUFBSXVDLEtBQUssR0FBR3hDLGtFQUFaLEVBQXdDO0FBQ3BDLGFBQU9BLGtFQUFQO0FBQ0g7O0FBRUQsV0FBT3dDLEtBQVA7QUFDSDtBQVhMLENBRm9DLENBQWpDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTQyxvQkFBVCxHQUE2QztBQUNoRCxRQUFNLENBQUNDLHlCQUFELEVBQTRCO0FBQUNIO0FBQUQsR0FBNUIsSUFBd0NJLHNEQUFPLENBQUNQLDBEQUFELENBQXJEO0FBRUEsU0FDSSx3REFBQyw0Q0FBRDtBQUFPLFNBQUssRUFBQyxTQUFiO0FBQUEsY0FDSSx3REFBQyw4Q0FBRDtBQUNJLFdBQUssRUFBRU0seUJBRFg7QUFFSSxjQUFRLEVBQUUsQ0FGZDtBQUdJLGNBQVEsRUFBRUgsTUFIZDtBQUFBLGdCQUtLSyxvREFBSyxDQUFDNUMsa0VBQUQsRUFBNkJDLGtFQUEwQixHQUFDLENBQXhELEVBQTJELENBQTNELENBQUwsQ0FBbUU0QyxHQUFuRSxDQUF1RUMsTUFBTSxJQUMxRSx3REFBQyw4Q0FBRDtBQUFRLGFBQUssRUFBRUEsTUFBZjtBQUFBLGtCQUFxQ0E7QUFBckMsU0FBNEJBLE1BQTVCLENBREg7QUFMTDtBQURKLElBREo7QUFhSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJEO0FBRUE7QUFDQTtBQUVPLE1BQU1DLGdCQUFnQixHQUFHVix5REFBSSxDQUNoQ0MsNkRBQWMsQ0FBUyxrQkFBVCxDQUFkLElBQThDVSxnRUFEZCxFQUVoQztBQUFDVCxRQUFNLEVBQUVVLENBQUMsSUFBSUE7QUFBZCxDQUZnQyxDQUE3QjtBQUlBLE1BQU1DLFlBQVksR0FBR2IseURBQUksQ0FBQ2MsQ0FBQyxJQUFJQyxvREFBYyxDQUFDRCxDQUFDLENBQUNKLGdCQUFELENBQUYsQ0FBcEIsQ0FBekIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTTSxrQkFBVCxHQUEyQztBQUM5QyxRQUFNLENBQUNDLHFCQUFELEVBQXdCO0FBQUNmLFVBQU0sRUFBRWdCO0FBQVQsR0FBeEIsSUFBOENaLHNEQUFPLENBQUNJLHNEQUFELENBQTNEO0FBRUEsU0FDSSx3REFBQyw0Q0FBRDtBQUFPLFNBQUssRUFBQyxnQkFBYjtBQUFBLGNBQ0ksd0RBQUMsOENBQUQ7QUFDSSxXQUFLLEVBQUVPLHFCQURYO0FBRUksY0FBUSxFQUFFLENBRmQ7QUFHSSxjQUFRLEVBQUVDLFFBSGQ7QUFBQSxnQkFLS0MscURBQU0sQ0FBQ0osb0RBQUQsQ0FBTixDQUF1QlAsR0FBdkIsQ0FBMkJFLGdCQUFnQixJQUN4Qyx3REFBQyw4Q0FBRDtBQUErQixhQUFLLEVBQUVBLGdCQUF0QztBQUFBLGtCQUF5REE7QUFBekQsU0FBYUEsZ0JBQWIsQ0FESDtBQUxMO0FBREosSUFESjtBQWFILEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFFTyxTQUFTVSxnQkFBVCxDQUEwQkMsRUFBMUIsRUFBOEM7QUFDakQsU0FBUSxHQUFFdkQscURBQWdCLElBQUd1RCxFQUFHLEVBQWhDO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQ0E7QUFFQTtBQUNBO0FBRU8sTUFBTUMsb0JBQW9CLEdBQUd0Qix5REFBSSxDQUFDYyxDQUFDLElBQUk7QUFDMUNBLEdBQUMsQ0FBQ0osaUVBQUQsRUFBbUJQLEtBQUssSUFBSTtBQUN6Qm9CLCtEQUFZLENBQUMsa0JBQUQsRUFBcUJwQixLQUFyQixDQUFaO0FBQ0gsR0FGQSxDQUFEO0FBR0FXLEdBQUMsQ0FBQ2YsdUVBQUQsRUFBdUJJLEtBQUssSUFBSW9CLDJEQUFZLENBQUMsc0JBQUQsRUFBeUJwQixLQUF6QixDQUE1QyxDQUFEO0FBQ0gsQ0FMdUMsQ0FBakMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05QO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLFNBQVNGLGNBQVQsQ0FBMkJvQixFQUEzQixFQUFzRDtBQUN6RCxRQUFNRyxPQUFPLEdBQUdKLHlEQUFnQixDQUFDQyxFQUFELENBQWhDO0FBRUEsUUFBTUksV0FBVyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILE9BQXJCLENBQXBCOztBQUNBLE1BQUlDLFdBQVcsS0FBS0csU0FBcEIsRUFBK0I7QUFDM0IsV0FBT0EsU0FBUDtBQUNIOztBQUVELE1BQUk7QUFDQSxXQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsV0FBWCxDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU9NLENBQVAsRUFBbUI7QUFDakJMLGdCQUFZLENBQUNNLFVBQWIsQ0FBd0JSLE9BQXhCO0FBQ0EsVUFBTSxJQUFJUyxLQUFKLENBQVcsa0RBQWlEVCxPQUFRLEVBQXBFLENBQU47QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFFTyxTQUFTRCxZQUFULENBQXlCRixFQUF6QixFQUFxQ2xCLEtBQXJDLEVBQXFEO0FBQ3hELFFBQU1xQixPQUFPLEdBQUdKLHlEQUFnQixDQUFDQyxFQUFELENBQWhDO0FBRUFLLGNBQVksQ0FBQ1EsT0FBYixDQUFxQlYsT0FBckIsRUFBOEJLLElBQUksQ0FBQ00sU0FBTCxDQUFlaEMsS0FBZixDQUE5QjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFFQTtBQUVPLFNBQVNpQyxxQkFBVCxHQUE4QztBQUNqRDlCLHdEQUFPLENBQUNnQiwwREFBRCxDQUFQO0FBRUEsU0FBTyxJQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRDtBQUVBO0FBRUEsTUFBTWUsV0FBVyxHQUFHO0FBQ2hCQyxNQUFJLEVBQUU7QUFDRix5QkFBcUIsT0FEbkI7QUFFRix3QkFBb0IsYUFGbEI7QUFHRkMsY0FBVSxFQUFFO0FBSFY7QUFEVSxDQUFwQjtBQVFPLE1BQU1DLFdBQVcsR0FBR3RFLCtEQUFhLENBQUM7QUFBQ0UsS0FBRyxFQUFFLGNBQU47QUFBc0JELFFBQU0sRUFBRSxDQUFDa0UsV0FBVyxDQUFDQyxJQUFiO0FBQTlCLENBQUQsQ0FBakMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrQ08sTUFBTUcsTUFBTSxHQUFHO0FBQ2xCQyxPQUFLLEVBRGE7QUFFbEJDLE1BQUksRUFGYztBQUdsQkMsT0FBSyxFQUFFO0FBSFcsQ0FBZjtBQU1BLE1BQU0sRUFBQyxHQUFHQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRFA7QUFDQTtBQUNBOztBQU9PLFNBQVNDLGFBQVQsQ0FBdUI7QUFBQ0MsZUFBRDtBQUFnQkM7QUFBaEIsQ0FBdkIsRUFBbUY7QUFDdEYsUUFBTUMsYUFBYSxHQUFHQyxnQkFBZ0IsRUFBdEM7QUFDQSxRQUFNQyxLQUFLLEdBQUdKLGFBQWEsSUFBSU4sNENBQWpCLEdBQTBCTSxhQUExQixHQUEwQ0UsYUFBeEQ7QUFFQSxTQUNJLHdEQUFDLG1EQUFEO0FBQU8sVUFBTSxFQUFFLENBQ1hKLGlEQUFXLENBQUNNLEtBQUQsQ0FEQSxDQUFmO0FBRUcsT0FBRyxFQUFDLGdCQUZQO0FBQUEsY0FHS0g7QUFITCxJQURKO0FBT0g7O0FBRUQsU0FBU0UsZ0JBQVQsR0FBNEI7QUFDeEIsUUFBTUUsV0FBVyxHQUFHQyxVQUFVLENBQUMsOEJBQUQsQ0FBVixDQUEyQ0MsT0FBL0Q7QUFFQSxRQUFNLENBQUNILEtBQUQsRUFBUUksUUFBUixJQUFvQkMsc0RBQVEsQ0FDOUJKLFdBQVcsR0FBR1gsaURBQUgsR0FBaUJBLGtEQURFLENBQWxDO0FBSUFnQix5REFBUyxDQUFDLE1BQU07QUFDWkosY0FBVSxDQUFDLDhCQUFELENBQVYsQ0FBMkNLLFdBQTNDLENBQ0kzQixDQUFDLElBQUlBLENBQUMsQ0FBQ3VCLE9BQUYsSUFBYUMsUUFBUSxDQUFDZCxpREFBRCxDQUQ5QjtBQUlBWSxjQUFVLENBQUMsK0JBQUQsQ0FBVixDQUE0Q0ssV0FBNUMsQ0FDSTNCLENBQUMsSUFBSUEsQ0FBQyxDQUFDdUIsT0FBRixJQUFhQyxRQUFRLENBQUNkLGtEQUFELENBRDlCO0FBR0gsR0FSUSxDQUFUO0FBVUEsU0FBT1UsS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNEO0FBRUE7QUFFQTtBQUNBOzs7QUFFQSxlQUFlUSxJQUFmLEdBQXNCO0FBQ2xCLFFBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFyQztBQUNBLFFBQU0sQ0FBQ0MsV0FBRCxFQUFjM0YsTUFBZCxJQUF3QixNQUFNRyxxRUFBa0IsQ0FBQ29GLFVBQUQsQ0FBdEQ7QUFFQSxRQUFNSyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QnBHLDZEQUF4QixDQUFwQjtBQUNBcUcsZ0RBQU0sQ0FBQyx3REFBQyxnREFBRDtBQUFNLFdBQU8sRUFBRUgsV0FBZjtBQUE0QixVQUFNLEVBQUUzRjtBQUFwQyxJQUFELEVBQWlENEYsV0FBakQsQ0FBTjtBQUNIOztBQUVETixJQUFJLEdBQUdTLEtBQVAsQ0FBYXJDLENBQUMsSUFBSTtBQUNkc0MsU0FBTyxDQUFDQyxLQUFSLENBQWN2QyxDQUFkO0FBQ0gsQ0FGRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUVPLE1BQU1oQixjQUFjLEdBQUc7QUFBQ3dELEtBQUQ7QUFBTUMsTUFBTjtBQUFZQyxRQUFaO0FBQW9CQyxRQUFwQjtBQUE0QkMsV0FBU0E7QUFBckMsQ0FBdkI7QUFHQSxNQUFNaEUsMEJBQTRDLEdBQUcsTUFBckQ7QUFFQSxTQUFTaUUsV0FBVCxDQUNIL0QsWUFERyxFQUVISixNQUZHLEVBR0hvRSxjQUhHLEVBSUhDLFVBSkcsRUFLSEMsS0FMRyxFQU1HO0FBQ04sTUFBSUYsY0FBYyxLQUFLLEVBQW5CLElBQXlCQyxVQUFVLEtBQUssRUFBeEMsSUFBOENDLEtBQUssS0FBSyxFQUE1RCxFQUFnRTtBQUM1RCxXQUFPLEVBQVA7QUFDSDs7QUFFRCxTQUFPQyxtREFBSSxDQUNQdkUsTUFETyxFQUVQd0UsMkRBQVksQ0FDUkMscURBQU0sQ0FDRnJFLFlBQVksQ0FDUmdFLGNBQWMsR0FDZE0sdURBQVcsQ0FBQ0wsVUFBRCxDQURYLEdBRUFDLEtBSFEsQ0FEVixDQURFLENBRkwsQ0FBWDtBQVlILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFDQTtBQUVBLE1BQU1LLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFoQjtBQWdCTyxlQUFlO0FBQUE7QUFFbEJwQztBQUZrQixDQUFmLEVBR3FCO0FBQ3hCLFNBQ0k7QUFDSSxRQURKO0FBRUksU0FGSjtBQUdJLFlBQVEsQ0FBQ29DLFVBQVUsQ0FIdkIsT0FHWSxDQUhaO0FBQUEsZUFLSTtBQUFNLGNBQVEsQ0FBQ0EsVUFBVSxDQUF6QixLQUFjLENBQWQ7QUFBQSxnQkFBa0M7QUFBbEMsTUFMSixFQU1JO0FBQU8sY0FBUSxDQUFDQSxVQUFVLENBQTFCLE9BQWUsQ0FBZjtBQUFBLGdCQUFxQztBQUFyQyxNQU5KO0FBQUEsSUFESjtBQVVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCTSxTQUFTQyxNQUFULENBQWdCLEVBQ25CLEdBQUdDO0FBRGdCLENBQWhCLEVBRXNCO0FBQ3pCLFNBQ0ksdUVBQVlBO0FBQVosSUFESjtBQUdILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUVBO0FBRUEsTUFBTUMsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbEI7QUF3Qk8sZ0JBQWdCO0FBQUE7QUFFbkIsS0FBR0Q7QUFGZ0IsQ0FBaEIsRUFHc0I7QUFDekIsU0FDSTtBQUNJLGVBQVdFLCtDQUFNLENBQ2JELFlBQVksQ0FEQyxPQUViQSxZQUFZLENBRkMsWUFHYkUsdURBSGEsRUFJYkMsK0NBSmEsQ0FEckI7QUFPSSxjQUFVM0QsQ0FBQyxJQUFJNEQsUUFBUSxDQUFDNUQsQ0FBQyxDQUFEQSxPQVA1QixLQU8yQixDQVAzQjtBQUFBLE9BREo7QUFDSSxJQURKO0FBWUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFLQSxNQUFNNkQsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWhCO0FBT08sTUFBTSxFQUFDLEdBQUdIO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFOO0FBVUEsTUFBTSxFQUFDLEdBQUdDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFOO0FBbUJBLE1BQU0sRUFBQyxHQUFHRztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBTjtBQW1CUCxNQUFNQyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBakI7QUF3Qk8sY0FBYztBQUNqQjlDLFVBQVEsRUFEUztBQUVqQitDLElBQUUsRUFBRUMsR0FBRyxHQUZVO0FBR2pCN0gsUUFBTSxHQUhXO0FBSWpCQyxLQUFHLEdBSmM7QUFNakI2SCxRQUFNLEdBTlc7QUFPakJDLE1BQUksR0FQYTtBQVFqQkMsUUFBTSxHQVJXO0FBU2pCQyxPQUFLLEdBVFk7QUFVakIsS0FBR2Q7QUFWYyxDQUFkLEVBV29CO0FBQ3ZCLFNBQ0k7QUFDSSxnQkFESjtBQUVJLGVBQVdFLCtDQUFNLENBQ2JJLFVBQVUsQ0FERyxTQUViSCxZQUFZLENBRkMsTUFFRCxDQUZDLEVBR2JDLFVBQVUsQ0FIRyxJQUdILENBSEcsRUFJYkcsWUFBWSxDQUpDLE1BSUQsQ0FKQyxFQUtiQyxXQUFXLENBTEUsS0FLRixDQUxFLEVBTWIsR0FSUixNQUVxQixDQUZyQjtBQUFBO0FBQUEsY0FZSTtBQVpKLElBREo7QUFnQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEQ7QUFFQTtBQU9BLE1BQU1PLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFsQjtBQUtBLE1BQU1DLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFqQjtBQUtBLE1BQU1DLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFmO0FBTUEsTUFBTUMsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXJCO0FBU0EsTUFBTUMsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBakI7QUF1Qk8sZUFBZTtBQUNsQlYsSUFBRSxFQUFFQyxHQUFHLEdBRFc7QUFBQTtBQUFBO0FBSWxCNUgsS0FBRyxHQUplO0FBQUE7QUFBQTtBQUFBO0FBU2xCc0ksV0FBUyxHQVRTO0FBV2xCLEtBQUdwQjtBQVhlLENBQWYsRUFZcUI7QUFDeEIsU0FDSTtBQUNJLGdCQURKO0FBRUksZUFBV0UsK0NBQU0sQ0FDYmlCLFdBQVcsQ0FERSxTQUViRSxLQUFLLElBQUlMLFdBQVcsQ0FGUCxLQUVPLENBRlAsRUFHYk0sTUFBTSxJQUFJUCxZQUFZLENBSFQsTUFHUyxDQUhULEVBSWJRLEdBQUcsSUFBSU4sU0FBUyxDQUpILEdBSUcsQ0FKSCxFQUtiRyxTQUFTLElBQUlGLGVBQWUsQ0FMZixTQUtlLENBTGYsRUFNYixJQUFJckksTUFBTSxJQVJsQixFQVFRLENBTmEsQ0FGckI7QUFBQTtBQUFBLGNBWUk7QUFaSixJQURKO0FBZ0JIO0FBRU0sTUFBTUQsYUFBYSxHQUFHNEksbUVBQWlCLENBQXZDLEtBQXVDLENBQXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZQOztBQUVPLFNBQVNBLGlCQUFULENBQXVGQyxTQUF2RixFQUFzRztBQUN6RyxTQUFPLFVBQTZDQyxhQUE3QyxFQUErREMsT0FBL0QsRUFBNEU7QUFDL0U7QUFDQSxXQUFPLFNBQVNDLG1CQUFULENBQTZCQyxXQUE3QixFQUEyRztBQUM5RyxVQUFJLENBQUNGLE9BQUwsRUFBYztBQUNWLGVBQ0ksd0RBQUMsU0FBRCxPQUFlRSxXQUFmO0FBQUEsYUFBeUNIO0FBQXpDLFVBREo7QUFHSDs7QUFFRCxZQUFNMUIsS0FBSyxHQUFHLEVBQWQ7O0FBQ0EsV0FBSyxNQUFNOEIsR0FBWCxJQUFrQmpHLCtDQUFNLENBQUM4RixPQUFELENBQXhCLEVBQW1DO0FBQy9CLFlBQUlHLEdBQUcsSUFBSUQsV0FBWCxFQUF3QjtBQUNwQjtBQUNBN0IsZUFBSyxDQUFDMkIsT0FBTyxDQUFDRyxHQUFELENBQVIsQ0FBTCxHQUE2QkQsV0FBVyxDQUFDQyxHQUFELENBQXhDO0FBQ0gsU0FIRCxNQUdPO0FBQ0g7QUFDQTlCLGVBQUssQ0FBQzhCLEdBQUQsQ0FBTCxHQUFvQkQsV0FBVyxDQUFDQyxHQUFELENBQS9CO0FBQ0g7QUFDSjs7QUFFRCxhQUNJLHdEQUFDLFNBQUQsT0FBZTlCLEtBQWY7QUFBQSxXQUFtQzBCO0FBQW5DLFFBREo7QUFHSCxLQXJCRDtBQXNCSCxHQXhCRDtBQXlCSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLE1BQU1LLGNBQWMsR0FBSWxILEtBQUQsSUFBMkI7QUFDckQsTUFBSVYsTUFBTSxHQUFHLENBQWI7O0FBQ0EsT0FBSyxJQUFJNkgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25ILEtBQUssQ0FBQ00sTUFBMUIsRUFBa0MsRUFBRTZHLENBQXBDLEVBQXVDO0FBQ25DN0gsVUFBTSxJQUFJVSxLQUFLLENBQUNvSCxVQUFOLENBQWlCRCxDQUFqQixJQUFzQkEsQ0FBaEM7QUFDSDs7QUFDRCxTQUFPN0gsTUFBUDtBQUNILENBTk07QUFRQSxNQUFNOEUsR0FBRyxHQUFJcEUsS0FBRCxJQUE4QnFILHNEQUFHLENBQUNySCxLQUFELENBQTdDO0FBQ0EsTUFBTXFFLElBQUksR0FBSXJFLEtBQUQsSUFBOEJzSCx3REFBSSxDQUFDdEgsS0FBRCxDQUEvQztBQUNBLE1BQU1zRSxNQUFNLEdBQUl0RSxLQUFELElBQThCdUgsNERBQU0sQ0FBQ3ZILEtBQUQsQ0FBbkQ7QUFDQSxNQUFNdUUsTUFBTSxHQUFJdkUsS0FBRCxJQUE4QndILDREQUFNLENBQUN4SCxLQUFELENBQW5EO0FBQ0EsTUFBTXdFLFNBQVMsR0FBSXhFLEtBQUQsSUFBOEJ5SCxrRUFBUyxDQUFDekgsS0FBRCxDQUF6RDtBQUVBLE1BQU0rRSxNQUFNLEdBQUkvRSxLQUFELElBQThCQSxLQUFLLENBQUMwSCxRQUFOLENBQWVDLDREQUFmLENBQTdDO0FBRUEsTUFBTTdDLFlBQVksR0FBSTlFLEtBQUQsSUFDeEJBLEtBQUssQ0FDQTRILE9BREwsQ0FDYSxLQURiLEVBQ29CLEVBRHBCLEVBRUtBLE9BRkwsQ0FFYSxLQUZiLEVBRW9CLEdBRnBCLEVBR0tBLE9BSEwsQ0FHYSxLQUhiLEVBR29CLEdBSHBCLENBREcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkEsTUFBTUMsU0FBUyxHQUFPcEgsQ0FBSixJQUF5QjlCLE1BQU0sQ0FBQ21KLE9BQVAsQ0FBZXJILENBQWYsQ0FBM0M7QUFDQSxNQUFNTyxNQUFNLEdBQU9QLENBQUosSUFBMEI5QixNQUFNLENBQUNvSixJQUFQLENBQVl0SCxDQUFaLENBQXpDO0FBQ0EsTUFBTXpCLFFBQVEsR0FBT3lCLENBQUosSUFBNkI5QixNQUFNLENBQUNxSixNQUFQLENBQWN2SCxDQUFkLENBQTlDO0FBRUEsTUFBTXdILEtBQUssR0FBRyxDQUFJQyxDQUFKLEVBQWVDLEVBQWYsS0FDakJDLEtBQUssQ0FBQ0MsSUFBTixDQUFXO0FBQUMvSCxRQUFNLEVBQUU0SDtBQUFULENBQVgsRUFBd0IsQ0FBQ0ksQ0FBRCxFQUFJQyxLQUFKLEtBQWNKLEVBQUUsQ0FBQ0ksS0FBRCxDQUF4QyxDQURHO0FBR0EsTUFBTTFELElBQUksR0FBRyxDQUFDdkUsTUFBRCxFQUFpQk4sS0FBakIsS0FBMkNBLEtBQUssQ0FBQ3dJLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUJsSSxNQUFuQixDQUF4RDtBQUNBLE1BQU1GLEtBQUssR0FBRyxDQUFDaUksSUFBRCxFQUFlSSxFQUFmLEVBQTJCQyxJQUFJLEdBQUcsQ0FBbEMsS0FBa0Q7QUFDbkUsUUFBTXBKLE1BQU0sR0FBRyxFQUFmOztBQUNBLE9BQUssSUFBSTZILENBQUMsR0FBR2tCLElBQWIsRUFBbUJsQixDQUFDLEdBQUdzQixFQUF2QixFQUEyQnRCLENBQUMsSUFBSXVCLElBQWhDLEVBQXNDO0FBQ2xDcEosVUFBTSxDQUFDcUosSUFBUCxDQUFZeEIsQ0FBWjtBQUNIOztBQUVELFNBQU83SCxNQUFQO0FBQ0gsQ0FQTSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWlAsU0FBU3NKLFFBQVQsQ0FBa0J0SyxHQUFsQixFQUFnRDtBQUM1QyxNQUFJdUssVUFBVSxHQUFHdkssR0FBakI7QUFDQSxNQUFJLENBQUNBLEdBQUcsQ0FBQ3dLLFVBQUosQ0FBZSxVQUFmLENBQUwsRUFBaUNELFVBQVUsR0FBSyxXQUFVdkssR0FBSSxFQUE3Qjs7QUFFakMsTUFBSTtBQUNBLFdBQU8sSUFBSUUsR0FBSixDQUFRcUssVUFBUixDQUFQLENBREEsQ0FFQTtBQUNILEdBSEQsQ0FHRSxPQUFPakgsQ0FBUCxFQUFtQixDQUFFO0FBQzFCOztBQUVNLFNBQVNvRCxXQUFULENBQXFCMUcsR0FBckIsRUFBMEM7QUFDN0MsUUFBTUMsU0FBUyxHQUFHcUssUUFBUSxDQUFDdEssR0FBRCxDQUExQjtBQUNBLFNBQU9DLFNBQVMsSUFBSSxJQUFiLEdBQW9CQSxTQUFwQixhQUFvQkEsU0FBcEIsdUJBQW9CQSxTQUFTLENBQUV3SyxJQUEvQixHQUFzQ3pLLEdBQTdDO0FBQ0g7QUFFTSxTQUFTMEssYUFBVCxDQUF1QjFLLEdBQXZCLEVBQTRDO0FBQy9DLFFBQU1DLFNBQVMsR0FBR3FLLFFBQVEsQ0FBQ3RLLEdBQUQsQ0FBMUI7QUFDQSxTQUFPQyxTQUFTLElBQUksSUFBYixHQUFvQkEsU0FBcEIsYUFBb0JBLFNBQXBCLHVCQUFvQkEsU0FBUyxDQUFFMEssTUFBL0IsR0FBd0MzSyxHQUEvQztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFlBQVk7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0JBQWtCOztBQUU3QjtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0JBQWtCOztBQUU3QjtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxjQUFjLFVBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxjQUFjLFVBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsc0JBQXNCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0EsY0FBYyxLQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQSxjQUFjLFVBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3B3Qm1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNEQUFnQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLHNDQUFzQztBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPLHNCQUFzQiw0Q0FBTTtBQUNuQztBQUNBLHFCQUFxQiwrQ0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxZQUFZLDBEQUFvQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxZQUFZLFVB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TUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQU87QUFDYixNQUFN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b3VyY2VzQ29udGVudCI6WyJ2YXIgdD0hMCxuPWZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBlKHQpe3RyeXtyZXR1cm4gdC5hcHBseSh0aGlzLFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKX1jYXRjaCh0KXtyZXR1cm4gdD10IGluc3RhbmNlb2YgRXJyb3I/dDpuZXcgRXJyb3IodCksc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IHR9KSx0fX1mdW5jdGlvbiByKHQsbixlKXt2YXIgcj10LmdldChuKTt2b2lkIDA9PT1yJiZ0LnNldChuLHI9bmV3IFNldCksci5hZGQoZSl9ZnVuY3Rpb24gYSh0LG4sZSl7dmFyIHI9dC5nZXQobik7dm9pZCAwIT09ciYmKHIuZGVsZXRlKGUpLDA9PT1yLnNpemUmJnQuZGVsZXRlKG4pKX1mdW5jdGlvbiBjKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGkodCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPT10fWZ1bmN0aW9uIG8odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiB1KHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPXQpLHYoIW8odCksbitcIiwgZXhwZWN0ZWQgZnVuY3Rpb25cIiksdH1mdW5jdGlvbiBzKHQpe3JldHVybiBvKHQpJiZvKHQuZ2V0U3RhdGUpfWZ1bmN0aW9uIGYodCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49dCksdighcyh0KSxuK1wiLCBleHBlY3RlZCBhdG9tXCIpLHR9ZnVuY3Rpb24gZCh0KXtyZXR1cm4gbyh0KSYmbyh0LmRpc3BhdGNoKX1mdW5jdGlvbiBwKHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPXQpLHYoIWQodCksbitcIiwgZXhwZWN0ZWQgYWN0aW9uXCIpLHR9ZnVuY3Rpb24gbCh0KXtyZXR1cm4gaSh0KSYmYyh0LnR5cGUpJiZcInBheWxvYWRcImluIHR9ZnVuY3Rpb24gdih0LG4pe2lmKHQpdGhyb3cgbmV3IEVycm9yKFwiUmVhdG9tOiBpbnZhbGlkIFwiK24pfWZ1bmN0aW9uIGgodCxuLGUscil7dm9pZCAwPT09biYmKG49bmV3IE1hcCksdm9pZCAwPT09ZSYmKGU9ZnVuY3Rpb24oKXt9KSx2b2lkIDA9PT1yJiYocj17fSk7dmFyIGE9e2FjdGlvbnM6dCxlZmZlY3RzOltdLHByb2Nlc3M6ZnVuY3Rpb24odCxjKXt2YXIgaSxvLHU9bi5nZXQodCk7cmV0dXJuIHV8fCh1PXQoYSxudWxsIT0oaT1udWxsIT0obz1lKHQpKT9vOmMpP2k6e2RlcHM6W10sY3R4OnZvaWQgMCxzdGF0ZTpyW3QuaWRdLHR5cGVzOm5ldyBTZXR9KSxuLnNldCh0LHUpKSx1fX07cmV0dXJuIGF9ZnVuY3Rpb24geSh0LG4sZSl7dmFyIHIsYT1uLmRlcHMsYz1bXSxpPW5ldyBTZXQsdT0hMSxmPSExLHA9ITEsbD0wO2Z1bmN0aW9uIGgoKXtyZXR1cm4gcD9jLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGQodCk/aS5hZGQodC50eXBlKTp0LmNhY2hlLnR5cGVzLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGkuYWRkKHQpfSl9KTppPW4udHlwZXMsdXx8IU9iamVjdC5pcyhuLnN0YXRlLHIpfHwwPT09YS5sZW5ndGg/e2RlcHM6YyxjdHg6bi5jdHgsc3RhdGU6cix0eXBlczppfTpufWZ1bmN0aW9uIHkoKXtjLmxlbmd0aD0wLGkuY2xlYXIoKX1pZihhLmxlbmd0aD4wJiZhLmV2ZXJ5KGZ1bmN0aW9uKG4pe2lmKGQobikpe3ZhciBlPW4udHlwZTtpZih0LmFjdGlvbnMuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gdC50eXBlPT09ZX0pKXJldHVybiB5KCksITF9ZWxzZXt2YXIgcj1uLmF0b20sYT1uLmNhY2hlLGk9dC5wcm9jZXNzKHIsYSk7aWYoaSE9PWEpe2lmKGkuc3RhdGUhPT1hLnN0YXRlKXJldHVybiB5KCksITE7bj17YXRvbTpyLGNhY2hlOml9LHU9ITAscHx8KHA9aS50eXBlcyE9PWEudHlwZXMpfX1yZXR1cm4gYy5wdXNoKG4pLCEwfSkpcmV0dXJuIHI9bi5zdGF0ZSxoKCk7ZnVuY3Rpb24gZyhlKXtvKGUpJiZ0LmVmZmVjdHMucHVzaChmdW5jdGlvbih0KXtyZXR1cm4gZSh0LG4uY3R4KX0pfXJldHVybiByPWUoZnVuY3Rpb24obixlKXt2KE51bWJlci5pc05hTihsKSxcIm91dGRhdGVkIHRyYWNrIGNhbGxcIiksbCsrO3RyeXtpZihzKG4pKXJldHVybiBmdW5jdGlvbihuLGUpe3ZhciByPXQucHJvY2VzcyhuKTtpZigxPT09bCl7dmFyIGk9YS5sZW5ndGg+Yy5sZW5ndGg/YVtjLmxlbmd0aF06bnVsbDtmfHwoZj0obnVsbD09aT92b2lkIDA6aS5hdG9tKSE9PW4pLHV8fCh1PWZ8fGkuY2FjaGUhPT1yKSxwfHwocD1mfHxpLmNhY2hlLnR5cGVzIT09ci50eXBlcyksYy5wdXNoKHthdG9tOm4sY2FjaGU6cn0pLCFlfHwhZiYmT2JqZWN0LmlzKGkuY2FjaGUuc3RhdGUsci5zdGF0ZSl8fGcoZShyLnN0YXRlKSl9ZWxzZSB2KGUsXCJjYWxsYmFjayBpbiBuZXN0ZWQgdHJhY2tcIik7cmV0dXJuIHIuc3RhdGV9KG4sZSk7dighZChuKSxcInRyYWNrIGFyZ3VtZW50c1wiKSwxPT09bD8odighZSxcImFjdGlvbiB0cmFjayB3aXRob3V0IGNhbGxiYWNrXCIpLGZ8fChmPWEubGVuZ3RoPD1jLmxlbmd0aHx8YVtjLmxlbmd0aF0hPT1uKSxwfHwocD1mKSxjLnB1c2gobiksdC5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24odCl7dC50eXBlPT09bi50eXBlJiZnKGUodC5wYXlsb2FkLHQpKX0pKTp2KCEwLFwiYWN0aW9uIGhhbmRsaW5nIGluIG5lc3RlZCB0cmFja1wiKX1maW5hbGx5e2wtLX19LG4uc3RhdGUpLGw9TmFOLGY9Znx8YS5sZW5ndGg+Yy5sZW5ndGgsdT11fHxmLHA9cHx8ZixoKCl9dmFyIGc9ZnVuY3Rpb24odCl7cmV0dXJue3BheWxvYWQ6dH19LEU9MDtmdW5jdGlvbiBtKHQsbil7dm9pZCAwPT09biYmKG49Yyh0KT90OlwiYWN0aW9uIFtcIisgKytFK1wiXVwiKTt2YXIgZT1vKHQpP3Q6ZyxyPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5hcHBseSh2b2lkIDAsW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtyZXR1cm4gdihcInR5cGVcImluIHQsXCJhY3Rpb24gdHlwZSBpbiBjcmVhdGVkIGFjdGlvbiBkYXRhXCIpLHYoXCJwYXlsb2FkXCJpbiB0PT0wLFwibWlzc2luZyBwYXlsb2FkIGluIGNyZWF0ZWQgYWN0aW9uIGRhdGFcIiksT2JqZWN0LmFzc2lnbih7fSx0LHt0eXBlOm59KX07cmV0dXJuIHIuZGlzcGF0Y2g9ZnVuY3Rpb24oKXtyZXR1cm4geC5kaXNwYXRjaChyLmFwcGx5KHZvaWQgMCxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKX0sci5zdWJzY3JpYmU9ZnVuY3Rpb24odCl7cmV0dXJuIHguc3Vic2NyaWJlKHIsdCl9LHIudHlwZT1uLHJ9dmFyIGI9MDtmdW5jdGlvbiB3KHQsbixlKXt2b2lkIDA9PT1uJiYobj17fSksdm9pZCAwPT09ZSYmKGU9e30pO3ZhciByPShlPWMoZSk/e2lkOmV9OmUpLmNyZWF0ZUN0eCxhPXZvaWQgMD09PXI/ZnVuY3Rpb24oKXtyZXR1cm57fX06cixpPWUuaWQsdT12b2lkIDA9PT1pP1wiYXRvbSBbXCIrICsrYitcIl1cIjppLHM9ZS5vbkNoYW5nZSxmPXQ7byh0KXx8KGY9ZnVuY3Rpb24obixlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dCksZX0sMD09PU9iamVjdC5rZXlzKG4pLmxlbmd0aCYmKG4udXBkYXRlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG8odCk/dChuKTp0fSkpO3ZhciBkPVtoXSxwPU9iamVjdC5rZXlzKG4pLm1hcChmdW5jdGlvbih0KXtyZXR1cm57cmVkdWNlcjpuW3RdLGFjdGlvbkNyZWF0b3I6aFt0XT1tKGZ1bmN0aW9uKHQpe3JldHVybntwYXlsb2FkOnQsdGFyZ2V0czpkfX0sdCsnIG9mIFwiJyt1KydcIicpfX0pLGw9ZnVuY3Rpb24odCxuKXtyZXR1cm4gcC5yZWR1Y2UoZnVuY3Rpb24obixlKXt2YXIgcj1lLnJlZHVjZXI7cmV0dXJuIHQoZS5hY3Rpb25DcmVhdG9yLGZ1bmN0aW9uKHQpe3JldHVybiBuPXIodCxuKX0pLG59LGYodCxuKSl9O2Z1bmN0aW9uIGgodCxuKXt2b2lkIDA9PT1uJiYobj17ZGVwczpbXSxjdHg6dm9pZCAwLHN0YXRlOnZvaWQgMCx0eXBlczpuZXcgU2V0fSksdm9pZCAwPT09bi5jdHgmJihuLmN0eD1hKCkpO3ZhciBlPXkodCxuLGwpO3JldHVybiB2b2lkIDA9PT1zfHxPYmplY3QuaXMoZS5zdGF0ZSxuLnN0YXRlKXx8dC5lZmZlY3RzLnB1c2goZnVuY3Rpb24odCl7cmV0dXJuIHMobi5zdGF0ZSxlLnN0YXRlLHQsZS5jdHgpfSksZX1yZXR1cm4gdighKHZvaWQgMCE9PXQmJm8oZikmJmModSkmJm8oYSkmJk9iamVjdC52YWx1ZXMobikuZXZlcnkobykpLFwiYXRvbSBhcmd1bWVudHNcIiksaC5pZD11LGguaW5pdD1mdW5jdGlvbigpe3JldHVybiB4LmluaXQoaCl9LGguZ2V0U3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4geC5nZXRTdGF0ZShoKX0saC5zdWJzY3JpYmU9ZnVuY3Rpb24odCl7cmV0dXJuIHguc3Vic2NyaWJlKGgsdCl9LGh9ZnVuY3Rpb24gUyh0KXt2b2lkIDA9PT10JiYodD17fSk7dmFyIGM9bmV3IE1hcCxpPW5ldyBNYXAsdT1uZXcgV2Vha01hcCxmPW5ldyBNYXAscD1uZXcgU2V0O2Z1bmN0aW9uIHkodCxuKXt2b2lkIDA9PT1uJiYobj17fSk7dmFyIGU9RSh0KSxyPWUuZGVwcztyZXR1cm4gblt0LmlkXT1lLnN0YXRlLHIuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4hZCh0KSYmeSh0LmF0b20sbil9KSxufXZhciBnPWZ1bmN0aW9uKG4pe3ZhciBvPUFycmF5LmlzQXJyYXkobik/bjpbbl07digwPT09by5sZW5ndGh8fCExPT09by5ldmVyeShsKSxcImRpc3BhdGNoIGFyZ3VtZW50c1wiKTt2YXIgcz1uZXcgTWFwLGQ9aChvLHMsRSx0KSx5PW5ldyBBcnJheSxnPW51bGw7dHJ5e28uZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgbj10LnRhcmdldHM7cmV0dXJuIG51bGw9PW4/dm9pZCAwOm4uZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZC5wcm9jZXNzKHQpfSl9KSxvLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIG47cmV0dXJuIG51bGw9PShuPWMuZ2V0KHQudHlwZSkpP3ZvaWQgMDpuLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGQucHJvY2Vzcyh0KX0pfSkscy5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHQsbixlKXt2YXIgaT1FKHQpO2YuaGFzKHQpJiYodm9pZCAwPT09aT9uLnR5cGVzLmZvckVhY2goZnVuY3Rpb24obil7cmV0dXJuIHIoYyxuLHQpfSk6aS50eXBlcyE9PW4udHlwZXMmJihuLnR5cGVzLmZvckVhY2goZnVuY3Rpb24obil7cmV0dXJuIGkudHlwZXMuaGFzKG4pfHxyKGMsbix0KX0pLGkudHlwZXMuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gbi50eXBlcy5oYXMoZSl8fGEoYyxlLHQpfSkpKSx1LnNldCh0LG4pLE9iamVjdC5pcyhudWxsPT1pP3ZvaWQgMDppLnN0YXRlLG4uc3RhdGUpfHxlLnB1c2goW3Qsbl0pfShuLHQseSl9KX1jYXRjaCh0KXtnPXQgaW5zdGFuY2VvZiBFcnJvcj90Om5ldyBFcnJvcih0KX12YXIgbT17YWN0aW9uczpvLGVycm9yOmcscGF0Y2g6c307cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZSh0LG0pfSkseS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBuO3JldHVybiBudWxsPT0obj1mLmdldCh0WzBdKSk/dm9pZCAwOm4uZm9yRWFjaChmdW5jdGlvbihuKXtyZXR1cm4gZShuLHRbMV0uc3RhdGUpfSl9KSxvLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIG47cmV0dXJuIG51bGw9PShuPWkuZ2V0KHQudHlwZSkpP3ZvaWQgMDpuLmZvckVhY2goZnVuY3Rpb24obil7cmV0dXJuIGUobix0KX0pfSksUHJvbWlzZS5hbGxTZXR0bGVkKGQuZWZmZWN0cy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4pe3JldHVybiBuKHQoeCkpfSl9KSl9O2Z1bmN0aW9uIEUodCl7cmV0dXJuIHUuZ2V0KHQpfWZ1bmN0aW9uIG0odCl7aWYodm9pZCAwPT09dCl7dmFyIG49e307cmV0dXJuIGYuZm9yRWFjaChmdW5jdGlvbih0LGUpe3JldHVybiB5KGUsbil9KSxufXYoIXModCksJ1wiZ2V0U3RhdGVcIiBhcmd1bWVudCcpO3ZhciBlPUUodCk7cmV0dXJuIHZvaWQgMD09PWUmJihnKHt0eXBlOidpbml0IFwiJyt0LmlkKydcIiB+JytNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KSxwYXlsb2FkOm51bGwsdGFyZ2V0czpbdF19KSxlPUUodCkpLGUuc3RhdGV9ZnVuY3Rpb24gYih0LG4pe3ZhciBlPWYuZ2V0KHQpLGk9ITE7ZnVuY3Rpb24gbygpe2UuZGVsZXRlKG4pLDA9PT1lLnNpemUmJihmLmRlbGV0ZSh0KSx1LmdldCh0KS50eXBlcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe3JldHVybiBhKGMsbix0KX0pKX12b2lkIDA9PT1lJiYoaT11Lmhhcyh0KSxmLnNldCh0LGU9bmV3IFNldCkpLGUuYWRkKG4pO3RyeXtyZXR1cm4gbSh0KSxpJiZFKHQpLnR5cGVzLmZvckVhY2goZnVuY3Rpb24obil7cmV0dXJuIHIoYyxuLHQpfSksb31jYXRjaCh0KXt0aHJvdyBvKCksdH19ZnVuY3Rpb24gdyh0LG4pe3JldHVybiByKGksdC50eXBlLG4pLGZ1bmN0aW9uKCl7cmV0dXJuIGEoaSx0LnR5cGUsbil9fWZ1bmN0aW9uIFModCl7cmV0dXJuIHAuYWRkKHQpLGZ1bmN0aW9uKCl7cmV0dXJuIHAuZGVsZXRlKHQpfX12YXIgeD17ZGlzcGF0Y2g6ZyxnZXRDYWNoZTpFLGdldFN0YXRlOm0saW5pdDpmdW5jdGlvbigpe3ZhciB0PVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGIodCxuKX0pO3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHQoKX0pfX0sc3Vic2NyaWJlOmZ1bmN0aW9uKCl7dmFyIHQ9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO3JldHVybiAxPT09dC5sZW5ndGgmJm8odFswXSk/Uyh0WzBdKTpzKHRbMF0pJiZvKHRbMV0pP2IodFswXSx0WzFdKTpkKHRbMF0pJiZvKHRbMV0pP3codFswXSx0WzFdKTp2KCEwLFwic3Vic2NyaWJlIGFyZ3VtZW50c1wiKX0sX19ET19OT1RfVVNFX0lUX09SX1lPVV9XSUxMX0JFX0ZJUkVEOnthY3Rpb25zQ29tcHV0ZXJzOmMsYWN0aW9uc0xpc3RlbmVyczppLGF0b21zQ2FjaGU6dSxhdG9tc0xpc3RlbmVyczpmLHRyYW5zYWN0aW9uTGlzdGVuZXJzOnB9fTtyZXR1cm4geH12YXIgeD1TKCk7ZXhwb3J0e3QgYXMgSVNfREVWLHIgYXMgYWRkVG9TZXRzTWFwLGUgYXMgY2FsbFNhZmV0eSxTIGFzIGNyZWF0ZVN0b3JlLGggYXMgY3JlYXRlVHJhbnNhY3Rpb24sbSBhcyBkZWNsYXJlQWN0aW9uLHcgYXMgZGVjbGFyZUF0b20seCBhcyBkZWZhdWx0U3RvcmUsYSBhcyBkZWxGcm9tU2V0c01hcCx2IGFzIGludmFsaWQsbCBhcyBpc0FjdGlvbixkIGFzIGlzQWN0aW9uQ3JlYXRvcixzIGFzIGlzQXRvbSxvIGFzIGlzRnVuY3Rpb24saSBhcyBpc09iamVjdCxjIGFzIGlzU3RyaW5nLHkgYXMgbWVtbyxuIGFzIG5vb3AscCBhcyBzYWZlQWN0aW9uQ3JlYXRvcixmIGFzIHNhZmVBdG9tLHUgYXMgc2FmZUZ1bmN0aW9ufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzLmpzLm1hcFxuIiwiaW1wb3J0e2RlZmF1bHRTdG9yZSBhcyB0LGlzQWN0aW9uQ3JlYXRvciBhcyBlfWZyb21cIkByZWF0b20vY29yZVwiO2ltcG9ydCByIGZyb21cInJlYWN0XCI7aW1wb3J0IG4gZnJvbVwicmVhY3QtZG9tXCI7aW1wb3J0e3VzZVN1YnNjcmlwdGlvbiBhcyBvfWZyb21cInVzZS1zdWJzY3JpcHRpb25cIjt2YXIgdT1yLmNyZWF0ZUNvbnRleHQodCk7ZnVuY3Rpb24gYyh0LGUpe3JldHVybiBmdW5jdGlvbihyKXt2YXIgbz1lKHIpO28mJm4udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoZnVuY3Rpb24oKXt0LmRpc3BhdGNoKG8pfSl9fWZ1bmN0aW9uIGkodCxlKXt2b2lkIDA9PT1lJiYoZT1bXSk7dmFyIG49ci51c2VDb250ZXh0KHUpO3JldHVybiByLnVzZUNhbGxiYWNrKGMobix0KSxlLmNvbmNhdChuKSl9ZnVuY3Rpb24gYSh0LG4pe3ZvaWQgMD09PW4mJihuPVtdKTt2YXIgaT1yLnVzZUNvbnRleHQodSksYT1yLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm5be2dldEN1cnJlbnRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBpLmdldFN0YXRlKHQpfSxzdWJzY3JpYmU6ZnVuY3Rpb24oZSl7cmV0dXJuIGkuc3Vic2NyaWJlKHQsZSl9fSxPYmplY3QuZW50cmllcyh0KS5yZWR1Y2UoZnVuY3Rpb24odCxyKXt2YXIgbj1yWzBdLG89clsxXTtyZXR1cm4gZShvKSYmKHRbbl09YyhpLG8pKSx0fSx7fSldfSxuLmNvbmNhdChbdCxpXSkpO3JldHVybltvKGFbMF0pLGFbMV1dfWZ1bmN0aW9uIGYodCxlKXt2b2lkIDA9PT1lJiYoZT1bXSk7dmFyIG49ci51c2VDb250ZXh0KHUpO3IudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIG4uaW5pdC5hcHBseShuLHQpfSxlKX1leHBvcnR7dSBhcyByZWF0b21Db250ZXh0LGkgYXMgdXNlQWN0aW9uLGEgYXMgdXNlQXRvbSxmIGFzIHVzZUluaXR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iLCJleHBvcnQgY29uc3QgQ09MT1JGVUxfRU1PSklTX09SREVSRURfTElTVCA9IFtcbiAgICAn8J+YuicsJ/CfmLgnLCfwn5i5Jywn8J+YuycsJ/CfmLwnLCfwn5i9Jywn8J+ZgCcsJ/CfmL8nLCfwn5i+Jywn8J+ZiCcsJ/CfmYknLCfwn6adJywn8J+QtScsJ/CfkJInLCfwn6aNJywn8J+QticsJ/CfkJUnLCfwn5CpJywn8J+QuicsJ/CfpoonLCfwn5CxJywn8J+QiCcsJ/CfpoEnLCfwn5CvJyxcbiAgICAn8J+QhScsJ/CfkIYnLCfwn5C0Jywn8J+QjicsJ/CfpoQnLCfwn6aTJywn8J+mjCcsJ/CfkK4nLCfwn5CCJywn8J+mmScsJ/CfkIMnLCfwn5CEJywn8J+QtycsJ/CfppsnLCfwn5CWJywn8J+QlycsJ/CfkL0nLCfwn5CPJywn8J+QkScsJ/CfkJAnLCfwn5CqJywn8J+QqycsJ/CfppInLCfwn5CYJyxcbiAgICAn8J+mjycsJ/CfkK0nLCfwn5CBJywn8J+QgCcsJ/CfppgnLCfwn5C5Jywn8J+moScsJ/CfkLAnLCfwn5CHJywn8J+QvycsJ/CfppQnLCfwn6aHJywn8J+QuycsJ/CfkKgnLCfwn5C8Jywn8J+QvicsJ/CfpoMnLCfwn5CUJywn8J+moicsJ/CfkJMnLCfwn5CjJywn8J+QpCcsJ/CfpponLCfwn5ClJyxcbiAgICAn8J+QpicsJ/CfppwnLCfwn5CnJywn8J+ViicsJ/CfpoUnLCfwn6aGJywn8J+miScsJ/CfkLgnLCfwn5CKJywn8J+QoicsJ/Cfpo4nLCfwn5CNJywn8J+QsicsJ/CfkIknLCfwn6aVJywn8J+mlicsJ/CfkLMnLCfwn5CLJywn8J+QrCcsJ/CfkJ8nLCfwn5CgJywn8J+QoScsJ/CfpognLCfwn5CZJyxcbiAgICAn8J+QmicsJ/CfpoAnLCfwn6afJywn8J+mkCcsJ/CfpqAnLCfwn6aRJywn8J+QjCcsJ/CfposnLCfwn5CbJywn8J+QnCcsJ/CfkJ0nLCfwn5CeJywn8J+mlycsJ/CflbcnLCfwn5W4JywgJ/CfpoInLCfwn6aeJywn8J+MuCcsJ/Cfkq4nLCfwn4+1Jywn8J+MuScsJ/CfpYAnLCfwn4y6Jywn8J+MuycsXG4gICAgJ/CfjLwnLCfwn4y3Jywn8J+MsScsJ/CfjLInLCfwn4yzJywn8J+MtCcsJ/CfjLUnLCfwn4y+Jywn8J+MvycsJ+KYmCcsJ/CfjYAnLCfwn42BJywn8J+NgicsJ/CfjYMnLCfwn42EJywn8J+ShScsJ/CfkZMnLCfwn5W2Jywn8J+RlCcsJ/CfkZUnLCfwn5GWJywn8J+noycsJ/Cfp6QnLCfwn6elJyxcbiAgICAn8J+npicsJ/CfkZcnLCfwn5GYJywn8J+RmScsJ/CfkZonLCfwn5GbJywn8J+RnCcsJ/CfkZ0nLCfwn5uNJywn8J+OkicsJ/CfkZ4nLCfwn5GfJywn8J+RoCcsJ/CfkaEnLCfwn5GiJywn8J+RkScsJ/CfkZInLCfwn46pJywn8J+OkycsJ/Cfp6InLCfim5EnLCfwn5O/Jywn8J+ShCcsJ/CfjIInLFxuICAgICfimIInLCfwn469Jywn8J+lvScsJ/CfpbwnLCfwn6W+Jywn8J+lvycsJ/Cfp7onLCfwn5qCJywn8J+agycsJ/CfmoQnLCfwn5qFJywn8J+ahicsJ/CfmocnLCfwn5qIJywn8J+aiScsJ/CfmoonLCfwn5qdJywn8J+anicsJ/CfmosnLCfwn5qMJywn8J+ajScsJ/Cfmo4nLCfwn5qQJywn8J+akScsXG4gICAgJ/CfmpInLCfwn5qTJywn8J+alCcsJ/CfmpUnLCfwn5qWJywn8J+alycsJ/CfmpgnLCfwn5qZJywn8J+amicsJ/CfmpsnLCfwn5qcJywn8J+asicsJ/Cfm7QnLCfwn5u1Jywn8J+ajycsJ/Cfm6MnLCfwn5ukJywn4pu1Jywn8J+bticsJ/CfmqQnLCfwn5uzJywn4pu0Jywn8J+bpScsJ/CfmqInLFxuICAgICfinIgnLCfwn5upJywn8J+bqycsJ/Cfm6wnLCfwn5qBJywn8J+anycsJ/CfmqAnLCfwn5qhJywn8J+bsCcsJ/CfmoAnLCfwn5u4Jywn8J+MjScsJ/CfjI4nLCfwn4yPJywn8J+MkCcsJ/Cfl7onLCfwn5e+Jywn8J+PlCcsJ+KbsCcsJ/Cfl7snLCfwn4+VJywn8J+PlicsJ/Cfj5wnLCfwn4+dJyxcbiAgICAn8J+PnicsJ/Cfj58nLCfwn4+bJywn8J+PlycsJ/Cfj5gnLCfwn4+aJywn8J+PoCcsJ/Cfj6EnLCfwn4+iJywn8J+PoycsJ/Cfj6QnLCfwn4+lJywn8J+PpicsJ/Cfj6gnLCfwn4+pJywn8J+PqicsJ/Cfj6snLCfwn4+sJywn8J+PrScsJ/Cfj68nLCfwn4+wJywn8J+XvCcsJ/Cfl70nLCfim6onLFxuICAgICfwn5WMJywn8J+VjScsJ+KbqScsJ/CflYsnLCfim7InLCfim7onLCfwn4+ZJywn8J+OoCcsJ/CfjqEnLCfwn46iJywn8J+OqicsJ+KbsycsJ/Cfl78nLCfwn5KmJywn8J+MiycsJ/CfjIEnLCfwn4yDJywn8J+MhCcsJ/CfjIUnLCfwn4yGJywn8J+MhycsJ/CfjIknLCfwn4yMJywn8J+MkScsXG4gICAgJ/CfjJInLCfwn4yTJywn8J+MlCcsJ/CfjJUnLCfwn4yWJywn8J+MlycsJ/CfjJgnLCfwn4yZJywn8J+MmicsJ/CfjJsnLCfwn4ycJywn8J+MoScsJ+KYgCcsJ/CfjJ0nLCfwn4yeJywn8J+MnycsJ/CfjKAnLCfim4UnLCfim4gnLCfwn4ykJywn8J+MpScsJ/CfjKYnLCfwn4ynJywn8J+MqCcsXG4gICAgJ/CfjKknLCfwn4yqJywn8J+MqycsJ/CfjKwnLCfwn4yAJywn8J+MiCcsJ+KbhCcsJ/CfkqcnLCfwn4yKJywn8J+OkScsXG5dO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRU1PSkkgPSAn8J+Ukic7XG5cbmV4cG9ydCBjb25zdCBTQUxURURfUEFTU1dPUkRfREVGQVVMVF9MRU5HVEggPSAyMDtcbmV4cG9ydCBjb25zdCBTQUxURURfUEFTU1dPUkRfTUlOX0xFTkdUSCA9IDEwO1xuZXhwb3J0IGNvbnN0IFNBTFRFRF9QQVNTV09SRF9NQVhfTEVOR1RIID0gNDA7XG5cbmV4cG9ydCBjb25zdCBTRVNTSU9OX1RJTUVfVE9fVEVSTUlOQVRFID0gNjAgKiAzICogMTAwMDtcbiIsImltcG9ydCB7UnVudGltZUNvbnRleHR9IGZyb20gJy4uL2NvbmZpZ3MvY29udGV4dHMnO1xuXG5leHBvcnQgdHlwZSBDb250ZXh0ID0gUnVudGltZUNvbnRleHQ7XG5leHBvcnQgY29uc3QgQ09OVEVYVCA9IHByb2Nlc3MuZW52LlJVTlRJTUVfQ09OVEVYVCBhcyB1bmtub3duIGFzIENvbnRleHQ7XG4iLCJpbXBvcnQge0pTWH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ0ByZWF0b20vY29yZSc7XG5pbXBvcnQge3JlYXRvbUNvbnRleHR9IGZyb20gJ0ByZWF0b20vcmVhY3QnO1xuaW1wb3J0IHN0eWxlOSBmcm9tICdzdHlsZTknO1xuXG5pbXBvcnQge292ZXJyaWRlRnJhbWV9IGZyb20gJy4uLy4uL3VpL2xheW91dC9GcmFtZSc7XG5pbXBvcnQge1N0b3JlTG9jYWxseUNvbm5lY3Rvcn0gZnJvbSAnLi4vU3RvcmVMb2NhbGx5JztcbmltcG9ydCB7UmVzZXRTdHlsZXN9IGZyb20gJy4uL1N0eWxlc1Jlc2V0JztcbmltcG9ydCB7VGhlbWVQcm92aWRlciwgVEhFTUVTfSBmcm9tICcuLi9UaGVtaW5nJztcblxuY29uc3QgZWFzZWxTdHlsZXMgPSBzdHlsZTkuY3JlYXRlKHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXJvb3QtYmcpJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93WTogJ2hpZGRlbicsXG4gICAgICAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpJzoge1xuICAgICAgICAgICAgbWluSGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuY29uc3QgRWFzZWwgPSBvdmVycmlkZUZyYW1lKHtzdHlsZXM6IFtlYXNlbFN0eWxlcy5kZWZhdWx0c10sIGRlZjogJ2Vhc2VsJ30pO1xuXG50eXBlIFByb3BzID0ge1xuICAgIENvbnRlbnQ6ICgpID0+IEpTWC5FbGVtZW50LFxuICAgIHBhcmFtczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUm9vdCh7XG4gICAgQ29udGVudCxcbiAgICBwYXJhbXMsXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVzZXRTdHlsZXM+XG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciBvdmVycmlkZVRoZW1lPXtwYXJhbXM/LnRoZW1lIGFzIHN0cmluZyB8IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAgPEVhc2VsPlxuICAgICAgICAgICAgICAgICAgICA8cmVhdG9tQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdG9yZUxvY2FsbHlDb25uZWN0b3IgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9yZWF0b21Db250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDwvRWFzZWw+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvUmVzZXRTdHlsZXM+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7bWF0Y2h9IGZyb20gJ3BhdGgtdG8tcmVnZXhwJztcbmltcG9ydCB7SlNYfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQge0NPTlRFWFR9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuaW1wb3J0IHt2YWx1ZXNPZn0gZnJvbSAnLi4vLi4vdXRpbHMvc3ludGF4JztcblxudHlwZSBQYWdlQ29tcG9uZW50ID0gKCkgPT4gSlNYLkVsZW1lbnQ7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlQ3VycmVudFBhZ2UodXJsOiBzdHJpbmcpOiBQcm9taXNlPFtQYWdlQ29tcG9uZW50LCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPl0+IHtcbiAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHVybCk7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXJzZWRVcmwucGF0aG5hbWU7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBPYmplY3QuZnJvbUVudHJpZXMocGFyc2VkVXJsLnNlYXJjaFBhcmFtcyk7XG5cbiAgICBjb25zdCBiYXNlUHJlZml4ID0gQ09OVEVYVC5zZWxmTGluayAmJiAobmV3IFVSTChDT05URVhULnNlbGZMaW5rKSkucGF0aG5hbWU7XG5cbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHZhbHVlc09mKENPTlRFWFQucm91dGVzKSkge1xuICAgICAgICBjb25zdCB7Y29udHJvbGxlciwgb3ZlcnJpZGVQYXJhbXMsIHBhdGh9ID0gcm91dGU7XG4gICAgICAgIGNvbnN0IG1hdGNoZXIgPSBtYXRjaChiYXNlUHJlZml4ICsgcGF0aCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG1hdGNoZXIocGF0aG5hbWUpO1xuXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgLi4ucmVzdWx0LnBhcmFtcyxcbiAgICAgICAgICAgIC4uLm92ZXJyaWRlUGFyYW1zLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBpbXBvcnQoYC4uLy4uL3BhZ2VzLyR7Y29udHJvbGxlcn0vaW5kZXhgKVxuICAgICAgICAgICAgLnRoZW4obW9kdWxlID0+IFttb2R1bGUuZGVmYXVsdCwgcGFyYW1zXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbKCkgPT4gPGgxPk5vdCBGb3VuZCE8L2gxPiwge31dKTtcbn1cbiIsImltcG9ydCB7ZGVjbGFyZUF0b20gYXMgYXRvbX0gZnJvbSAnQHJlYXRvbS9jb3JlJztcbmltcG9ydCB7U0FMVEVEX1BBU1NXT1JEX0RFRkFVTFRfTEVOR1RILCBTQUxURURfUEFTU1dPUkRfTUFYX0xFTkdUSCwgU0FMVEVEX1BBU1NXT1JEX01JTl9MRU5HVEh9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge3Jlc3RvcmVMb2NhbGx5fSBmcm9tICcuLi9TdG9yZUxvY2FsbHknO1xuXG5leHBvcnQgY29uc3Qgc2FsdGVkUGFzc3dvcmRMZW5ndGggPSBhdG9tKFxuICAgIHJlc3RvcmVMb2NhbGx5PG51bWJlcj4oJ3NhbHRlZFBhc3N3b3JkTGVuZ3RoJykgPz8gU0FMVEVEX1BBU1NXT1JEX0RFRkFVTFRfTEVOR1RILFxuICAgIHtcbiAgICAgICAgY2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gU0FMVEVEX1BBU1NXT1JEX01BWF9MRU5HVEgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU0FMVEVEX1BBU1NXT1JEX01BWF9MRU5HVEg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IFNBTFRFRF9QQVNTV09SRF9NSU5fTEVOR1RIKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNBTFRFRF9QQVNTV09SRF9NSU5fTEVOR1RIO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb250ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG4iLCJpbXBvcnQge0pTWH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7dXNlQXRvbX0gZnJvbSAnQHJlYXRvbS9yZWFjdCc7XG5cbmltcG9ydCB7U0FMVEVEX1BBU1NXT1JEX01BWF9MRU5HVEgsIFNBTFRFRF9QQVNTV09SRF9NSU5fTEVOR1RIfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHtMYWJlbH0gZnJvbSAnLi4vLi4vdWkvTGFiZWwnO1xuaW1wb3J0IHtPcHRpb24sIFNlbGVjdH0gZnJvbSAnLi4vLi4vdWkvU2VsZWN0JztcbmltcG9ydCB7cmFuZ2V9IGZyb20gJy4uLy4uL3V0aWxzL3N5bnRheCc7XG5pbXBvcnQge3NhbHRlZFBhc3N3b3JkTGVuZ3RofSBmcm9tICcuL2NvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2FsdGVkUGFzc3dvcmRMZW5ndGgoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFtzYWx0ZWRQYXNzd29yZExlbmd0aFZhbHVlLCB7Y2hhbmdlfV0gPSB1c2VBdG9tKHNhbHRlZFBhc3N3b3JkTGVuZ3RoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYWJlbCBsYWJlbD1cIkxlbmd0aDpcIj5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2FsdGVkUGFzc3dvcmRMZW5ndGhWYWx1ZX1cbiAgICAgICAgICAgICAgICB0YWJJbmRleD17M31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyYW5nZShTQUxURURfUEFTU1dPUkRfTUlOX0xFTkdUSCwgU0FMVEVEX1BBU1NXT1JEX01BWF9MRU5HVEgrMSwgNSkubWFwKGxlbmd0aCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xlbmd0aH0ga2V5PXtsZW5ndGh9PntsZW5ndGh9PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC9MYWJlbD5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtkZWNsYXJlQXRvbSBhcyBhdG9tfSBmcm9tICdAcmVhdG9tL2NvcmUnO1xuaW1wb3J0IHtTQUxURURfUEFTU1dPUkRfREVGQVVMVF9MRU5HVEh9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge0RFRkFVTFRfSEFTSF9GVU5DVElPTl9OQU1FLCBIQVNIX0ZVTkNUSU9OU30gZnJvbSAnLi4vLi4vc2FsdGluZyc7XG5pbXBvcnQge3Jlc3RvcmVMb2NhbGx5fSBmcm9tICcuLi9TdG9yZUxvY2FsbHknO1xuXG5leHBvcnQgY29uc3QgaGFzaEZ1bmN0aW9uTmFtZSA9IGF0b20oXG4gICAgcmVzdG9yZUxvY2FsbHk8bnVtYmVyPignaGFzaEZ1bmN0aW9uTmFtZScpID8/IERFRkFVTFRfSEFTSF9GVU5DVElPTl9OQU1FLFxuICAgIHtjaGFuZ2U6IHggPT4geH1cbik7XG5leHBvcnQgY29uc3QgaGFzaEZ1bmN0aW9uID0gYXRvbSgkID0+IEhBU0hfRlVOQ1RJT05TWyQoaGFzaEZ1bmN0aW9uTmFtZSldKTtcblxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb250ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG4iLCJpbXBvcnQge0pTWH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7dXNlQXRvbX0gZnJvbSAnQHJlYXRvbS9yZWFjdCc7XG5pbXBvcnQge0hBU0hfRlVOQ1RJT05TfSBmcm9tICcuLi8uLi9zYWx0aW5nJztcbmltcG9ydCB7TGFiZWx9IGZyb20gJy4uLy4uL3VpL0xhYmVsJztcbmltcG9ydCB7T3B0aW9uLCBTZWxlY3R9IGZyb20gJy4uLy4uL3VpL1NlbGVjdCc7XG5pbXBvcnQge2tleXNPZn0gZnJvbSAnLi4vLi4vdXRpbHMvc3ludGF4JztcbmltcG9ydCB7aGFzaEZ1bmN0aW9uTmFtZX0gZnJvbSAnLi9jb250ZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdEhhc2hGdW5jdGlvbigpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW2hhc2hGdW5jdGlvbk5hbWVWYWx1ZSwge2NoYW5nZTogb25TZWxlY3R9XSA9IHVzZUF0b20oaGFzaEZ1bmN0aW9uTmFtZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGFiZWwgbGFiZWw9XCJIYXNoIGZ1bmN0aW9uOlwiPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHZhbHVlPXtoYXNoRnVuY3Rpb25OYW1lVmFsdWV9XG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtrZXlzT2YoSEFTSF9GVU5DVElPTlMpLm1hcChoYXNoRnVuY3Rpb25OYW1lID0+IChcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2hhc2hGdW5jdGlvbk5hbWV9IHZhbHVlPXtoYXNoRnVuY3Rpb25OYW1lfT57aGFzaEZ1bmN0aW9uTmFtZX08L09wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L0xhYmVsPlxuICAgICk7XG59XG4iLCJpbXBvcnQge0NPTlRFWFR9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGaWVsZEtleShpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7Q09OVEVYVC52ZXJzaW9ufV8ke2lkfWA7XG59XG4iLCJpbXBvcnQge2RlY2xhcmVBdG9tIGFzIGF0b219IGZyb20gJ0ByZWF0b20vY29yZSc7XG5pbXBvcnQge3NhbHRlZFBhc3N3b3JkTGVuZ3RofSBmcm9tICcuLi9TYWx0ZWRQYXNzd29yZExlbmd0aCc7XG5cbmltcG9ydCB7aGFzaEZ1bmN0aW9uTmFtZX0gZnJvbSAnLi4vU2VsZWN0SGFzaEZ1bmN0aW9uJztcbmltcG9ydCB7c3RvcmVMb2NhbGx5fSBmcm9tICcuL3N0b3JlTG9jYWxseSc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZUxvY2FsbHlPYnNlcnZlciA9IGF0b20oJCA9PiB7XG4gICAgJChoYXNoRnVuY3Rpb25OYW1lLCB2YWx1ZSA9PiB7XG4gICAgICAgIHN0b3JlTG9jYWxseSgnaGFzaEZ1bmN0aW9uTmFtZScsIHZhbHVlKTtcbiAgICB9KTtcbiAgICAkKHNhbHRlZFBhc3N3b3JkTGVuZ3RoLCB2YWx1ZSA9PiBzdG9yZUxvY2FsbHkoJ3NhbHRlZFBhc3N3b3JkTGVuZ3RoJywgdmFsdWUpKTtcbn0pO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9yZXN0b3JlTG9jYWxseSc7XG5leHBvcnQgKiBmcm9tICcuL3N0b3JlTG9jYWxseSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcbiIsImltcG9ydCB7Z2VuZXJhdGVGaWVsZEtleX0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZUxvY2FsbHk8VD4oaWQ6IHN0cmluZyk6IFQgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGZpZWxkSWQgPSBnZW5lcmF0ZUZpZWxkS2V5KGlkKTtcblxuICAgIGNvbnN0IHN0b3JlZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZmllbGRJZCk7XG4gICAgaWYgKHN0b3JlZFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdG9yZWRWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShmaWVsZElkKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gcGFyc2UgbG9jYWwgc3RvcmVkIHZhbHVlIHdpdGggYSBrZXk6ICR7ZmllbGRJZH1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge2dlbmVyYXRlRmllbGRLZXl9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlTG9jYWxseTxUPihpZDogc3RyaW5nLCB2YWx1ZTogVCk6IHZvaWQge1xuICAgIGNvbnN0IGZpZWxkSWQgPSBnZW5lcmF0ZUZpZWxkS2V5KGlkKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGZpZWxkSWQsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG59XG4iLCJpbXBvcnQge3VzZUF0b219IGZyb20gJ0ByZWF0b20vcmVhY3QnO1xuaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge3N0b3JlTG9jYWxseU9ic2VydmVyfSBmcm9tICcuL2NvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gU3RvcmVMb2NhbGx5Q29ubmVjdG9yKCk6IEpTWC5FbGVtZW50IHtcbiAgICB1c2VBdG9tKHN0b3JlTG9jYWxseU9ic2VydmVyKTtcblxuICAgIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0ICdtb2Rlcm4tY3NzLXJlc2V0JztcblxuaW1wb3J0IHtvdmVycmlkZUZyYW1lfSBmcm9tICcuLi8uLi91aS9sYXlvdXQvRnJhbWUnO1xuXG5jb25zdCBzdHlsZXNSZXNldCA9IHtcbiAgICBmb250OiB7XG4gICAgICAgICctLWZvbnQtc2Fucy1zZXJpZic6ICdJbnRlcicsXG4gICAgICAgICctLWZvbnQtbW9ub3NwYWNlJzogJ1JvYm90byBNb25vJyxcbiAgICAgICAgZm9udEZhbWlseTogJ3ZhcigtLWZvbnQtc2Fucy1zZXJpZiknLFxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgUmVzZXRTdHlsZXMgPSBvdmVycmlkZUZyYW1lKHtkZWY6ICdyZXNldC1zdHlsZXMnLCBzdHlsZXM6IFtzdHlsZXNSZXNldC5mb250XX0pO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9wYWxldHRlJztcbmV4cG9ydCAqIGZyb20gJy4vdGhlbWVQcm92aWRlcic7XG4iLCJpbXBvcnQgc3R5bGU5LCB7U3R5bGV9IGZyb20gJ3N0eWxlOSc7XG5cbmRlY2xhcmUgbW9kdWxlICdzdHlsZTknIHtcbiAgICBpbnRlcmZhY2UgQ3VzdG9tUHJvcGVydGllcyB7XG4gICAgICAgIGdhcD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgICAgdHJhbnNpdGlvbj86IHN0cmluZyxcbiAgICAgICAgJzpub3QoOmRpc2FibGVkKSc/OiBTdHlsZSxcbiAgICAgICAgJzpob3Zlcjpub3QoOmRpc2FibGVkKSc/OiBTdHlsZSxcbiAgICAgICAgJzphY3RpdmU6bm90KDpkaXNhYmxlZCknPzogU3R5bGUsXG4gICAgfVxufVxuXG5kZWNsYXJlIG1vZHVsZSAnc3R5bGU5JyB7XG4gICAgaW50ZXJmYWNlIEN1c3RvbVByb3BlcnRpZXMge1xuICAgICAgICAnLS1mb250LXNhbnMtc2VyaWYnPzogc3RyaW5nO1xuICAgICAgICAnLS1mb250LW1vbm9zcGFjZSc/OiBzdHJpbmc7XG5cbiAgICAgICAgJy0tYmFzZS1sYXlvdXQtYmcnPzogc3RyaW5nLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWJnJz86IHN0cmluZyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1jb2xvcic/OiBzdHJpbmcsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tZGlzYWJsZWQtY29sb3InPzogc3RyaW5nLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWRpc2FibGVkLWRhc2gnPzogc3RyaW5nLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLXNoYWRvdyc/OiBzdHJpbmcsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWFjdGl2ZSc/OiBzdHJpbmcsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWFjdGl2ZS1pbnNldCc/OiBzdHJpbmcsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWhvdmVyJz86IHN0cmluZyxcbiAgICAgICAgJy0tYnV0dG9uLXBzZXVkby1jb2xvcic/OiBzdHJpbmcsXG4gICAgICAgICctLWJ1dHRvbi1zZWxlY3QtYmcnPzogc3RyaW5nLFxuICAgICAgICAnLS1sYWJlbC1jb2xvcic/OiBzdHJpbmcsXG4gICAgICAgICctLWxpbmstbWFyay1iZyc/OiBzdHJpbmcsXG4gICAgICAgICctLWxpbmstbWFyay1jb2xvcic/OiBzdHJpbmcsXG4gICAgICAgICctLXJvb3QtYmcnPzogc3RyaW5nLFxuICAgICAgICAnLS1zZWxlY3QtYmcnPzogc3RyaW5nLFxuICAgICAgICAnLS1zZWxlY3QtYm9yZGVyJz86IHN0cmluZyxcbiAgICAgICAgJy0tc2VsZWN0LWNvbG9yJz86IHN0cmluZyxcbiAgICAgICAgJy0tc2VsZWN0LXNoYWRvdyc/OiBzdHJpbmcsXG4gICAgICAgICctLXNwb2lsZXItb3Blbi1iZyc/OiBzdHJpbmcsXG4gICAgICAgICctLXRleHQtY29sb3InPzogc3RyaW5nLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLWJnJz86IHN0cmluZyxcbiAgICAgICAgJy0tdGV4dC1maWVsZC1jb2xvcic/OiBzdHJpbmcsXG4gICAgICAgICctLXRleHQtZmllbGQtcGxhY2Vob2xkZXItY29sb3InPzogc3RyaW5nLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLXNoYWRvdyc/OiBzdHJpbmcsXG4gICAgICAgICctLXRleHQtZmllbGQtc2hhZG93LWZvY3VzJz86IHN0cmluZyxcblxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRIRU1FUyA9IHtcbiAgICBsaWdodDogJ2xpZ2h0JyxcbiAgICBkYXJrOiAnZGFyaycsXG4gICAgYmxhY2s6ICdibGFjaycsXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVGhlbWVOYW1lID0ga2V5b2YgdHlwZW9mIFRIRU1FUztcbmV4cG9ydCBjb25zdCB7Li4udGhlbWVTdHlsZXN9ID0gc3R5bGU5LmNyZWF0ZTxSZWNvcmQ8VGhlbWVOYW1lLCBTdHlsZT4+KHtcbiAgICBsaWdodDoge1xuICAgICAgICAnLS1iYXNlLWxheW91dC1iZyc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWJnJzogJ3JnYmEoMCwgMCwgMCwgMSknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjgpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1kaXNhYmxlZC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWRpc2FibGVkLWRhc2gnOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1zaGFkb3ctYWN0aXZlJzogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWFjdGl2ZS1pbnNldCc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLXNoYWRvdy1ob3Zlcic6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICAgICAnLS1idXR0b24tcHNldWRvLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMC44KScsXG4gICAgICAgICctLWJ1dHRvbi1zZWxlY3QtYmcnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gICAgICAgICctLWxhYmVsLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgLjUpJyxcbiAgICAgICAgJy0tbGluay1tYXJrLWJnJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44KScsXG4gICAgICAgICctLWxpbmstbWFyay1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuOCknLFxuICAgICAgICAnLS1yb290LWJnJzogJ3JnYigyNDQsIDI0NCwgMjQ0KScsXG4gICAgICAgICctLXNlbGVjdC1iZyc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcbiAgICAgICAgJy0tc2VsZWN0LWJvcmRlcic6ICdyZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAgICAgJy0tc2VsZWN0LWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMC44KScsXG4gICAgICAgICctLXNlbGVjdC1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICctLXNwb2lsZXItb3Blbi1iZyc6ICdyZ2JhKDAsIDAsIDAsIC4wNSknLFxuICAgICAgICAnLS10ZXh0LWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMC45KScsXG4gICAgICAgICctLXRleHQtZmllbGQtYmcnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gICAgICAgICctLXRleHQtZmllbGQtY29sb3InOiAncmdiYSgwLCAwLCAwLCAuOCknLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLXBsYWNlaG9sZGVyLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgLjQpJyxcbiAgICAgICAgJy0tdGV4dC1maWVsZC1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICctLXRleHQtZmllbGQtc2hhZG93LWZvY3VzJzogJ3JnYmEoMCwgMCwgMCwgMC4xNSknLFxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgICAnLS1iYXNlLWxheW91dC1iZyc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1iZyc6ICdyZ2JhKDAsIDAsIDAsIDAuNiknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjYpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1kaXNhYmxlZC1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWRpc2FibGVkLWRhc2gnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1zaGFkb3ctYWN0aXZlJzogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWFjdGl2ZS1pbnNldCc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLXNoYWRvdy1ob3Zlcic6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICAgICAnLS1idXR0b24tcHNldWRvLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG4gICAgICAgICctLWJ1dHRvbi1zZWxlY3QtYmcnOiAncmdiYSgwLCAwLCAwLCAwLjIpJyxcbiAgICAgICAgJy0tbGFiZWwtY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAuNSknLFxuICAgICAgICAnLS1saW5rLW1hcmstYmcnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpJyxcbiAgICAgICAgJy0tbGluay1tYXJrLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC42KScsXG4gICAgICAgICctLXJvb3QtYmcnOiAncmdiKDQwLCA0MCwgNDApJyxcbiAgICAgICAgJy0tc2VsZWN0LWJnJzogJ3JnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgICctLXNlbGVjdC1ib3JkZXInOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICctLXNlbGVjdC1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgICAgICAnLS1zZWxlY3Qtc2hhZG93JzogJ3JnYmEoMCwgMCwgMCwgMC4wNSknLFxuICAgICAgICAnLS1zcG9pbGVyLW9wZW4tYmcnOiAncmdiYSgwLCAwLCAwLCAuMDUpJyxcbiAgICAgICAgJy0tdGV4dC1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLWJnJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScsXG4gICAgICAgICctLXRleHQtZmllbGQtY29sb3InOiAncmdiYSgwLCAwLCAwLCAuOCknLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLXBsYWNlaG9sZGVyLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgLjQpJyxcbiAgICAgICAgJy0tdGV4dC1maWVsZC1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICctLXRleHQtZmllbGQtc2hhZG93LWZvY3VzJzogJ3JnYmEoMCwgMCwgMCwgMC4xNSknLFxuICAgIH0sXG4gICAgYmxhY2s6IHtcbiAgICAgICAgJy0tYmFzZS1sYXlvdXQtYmcnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tYmcnOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAuOCknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLWRpc2FibGVkLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tZGlzYWJsZWQtZGFzaCc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLXNoYWRvdyc6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICAgICAnLS1idXR0b24tYWN0aW9uLXNoYWRvdy1hY3RpdmUnOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAgICAgJy0tYnV0dG9uLWFjdGlvbi1zaGFkb3ctYWN0aXZlLWluc2V0JzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgICAgICctLWJ1dHRvbi1hY3Rpb24tc2hhZG93LWhvdmVyJzogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgICAgICctLWJ1dHRvbi1wc2V1ZG8tY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICAgICAgJy0tYnV0dG9uLXNlbGVjdC1iZyc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknLFxuICAgICAgICAnLS1sYWJlbC1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC40KScsXG4gICAgICAgICctLWxpbmstbWFyay1iZyc6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknLFxuICAgICAgICAnLS1saW5rLW1hcmstY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICAgICAgJy0tcm9vdC1iZyc6ICdyZ2IoMTAsIDEwLCAxMCknLFxuICAgICAgICAnLS1zZWxlY3QtYmcnOiAncmdiYSgwLCAwLCAwLCAwLjYpJyxcbiAgICAgICAgJy0tc2VsZWN0LWJvcmRlcic6ICdyZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAgICAgJy0tc2VsZWN0LWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44KScsXG4gICAgICAgICctLXNlbGVjdC1zaGFkb3cnOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG4gICAgICAgICctLXNwb2lsZXItb3Blbi1iZyc6ICdyZ2JhKDAsIDAsIDAsIC4zKScsXG4gICAgICAgICctLXRleHQtY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJyxcbiAgICAgICAgJy0tdGV4dC1maWVsZC1iZyc6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjUpJyxcbiAgICAgICAgJy0tdGV4dC1maWVsZC1wbGFjZWhvbGRlci1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKScsXG4gICAgICAgICctLXRleHQtZmllbGQtc2hhZG93JzogJ3JnYmEoMCwgMCwgMCwgMC4wNSknLFxuICAgICAgICAnLS10ZXh0LWZpZWxkLXNoYWRvdy1mb2N1cyc6ICdyZ2JhKDAsIDAsIDAsIDAuMTUpJyxcbiAgICB9LFxufSk7XG4iLCJpbXBvcnQge0NvbXBvbmVudENoaWxkcmVuLCBKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQge0ZyYW1lfSBmcm9tICcuLi8uLi91aS9sYXlvdXQvRnJhbWUnO1xuaW1wb3J0IHtUaGVtZU5hbWUsIFRIRU1FUywgdGhlbWVTdHlsZXN9IGZyb20gJy4vcGFsZXR0ZSc7XG5cbnR5cGUgVGhlbWVQcm92aWRlclByb3BzID0ge1xuICAgIG92ZXJyaWRlVGhlbWU/OiBzdHJpbmcsXG4gICAgY2hpbGRyZW4/OiBDb21wb25lbnRDaGlsZHJlbixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHtvdmVycmlkZVRoZW1lLCBjaGlsZHJlbn06IFRoZW1lUHJvdmlkZXJQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBkZXRlY3RlZFRoZW1lID0gdXNlVGhlbWVMaXN0ZW5lcigpO1xuICAgIGNvbnN0IHRoZW1lID0gb3ZlcnJpZGVUaGVtZSBpbiBUSEVNRVMgPyBvdmVycmlkZVRoZW1lIDogZGV0ZWN0ZWRUaGVtZTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFtZSBzdHlsZXM9e1tcbiAgICAgICAgICAgIHRoZW1lU3R5bGVzW3RoZW1lXSxcbiAgICAgICAgXX0gZGVmPVwidGhlbWUtcHJvdmlkZXJcIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9GcmFtZT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiB1c2VUaGVtZUxpc3RlbmVyKCkge1xuICAgIGNvbnN0IGlzTmlnaHRUaW1lID0gbWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG5cbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlPFRoZW1lTmFtZT4oXG4gICAgICAgIGlzTmlnaHRUaW1lID8gVEhFTUVTLmRhcmsgOiBUSEVNRVMubGlnaHRcbiAgICApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLmFkZExpc3RlbmVyKFxuICAgICAgICAgICAgZSA9PiBlLm1hdGNoZXMgJiYgc2V0VGhlbWUoVEhFTUVTLmRhcmspXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5hZGRMaXN0ZW5lcihcbiAgICAgICAgICAgIGUgPT4gZS5tYXRjaGVzICYmIHNldFRoZW1lKFRIRU1FUy5saWdodClcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGVtZTtcbn1cbiIsImltcG9ydCB7cmVuZGVyfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQge0NPTlRFWFR9IGZyb20gJy4vY29udGV4dCc7XG5cbmltcG9ydCB7Um9vdH0gZnJvbSAnLi9mZWF0dXJlcy9Sb290JztcbmltcG9ydCB7cmVzb2x2ZUN1cnJlbnRQYWdlfSBmcm9tICcuL2ZlYXR1cmVzL1JvdXRpbmcnO1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IGN1cnJlbnRVcmwgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IFtDdXJyZW50UGFnZSwgcGFyYW1zXSA9IGF3YWl0IHJlc29sdmVDdXJyZW50UGFnZShjdXJyZW50VXJsKTtcblxuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09OVEVYVC5yb290Q29udGFpbmVySWQpO1xuICAgIHJlbmRlcig8Um9vdCBDb250ZW50PXtDdXJyZW50UGFnZX0gcGFyYW1zPXtwYXJhbXN9IC8+LCByb290RWxlbWVudCk7XG59XG5cbm1haW4oKS5jYXRjaChlID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xufSk7XG4iLCJpbXBvcnQge2Jhc2U2NCwgZXNjYXBlQmFzZTY0LCBtZDUsIHNoYTI1Niwgc2hhMywgcmlwZW1kMTYwLCBzaGE1MTJ9IGZyb20gJy4vdXRpbHMvY3J5cHRvJztcbmltcG9ydCB7dHJpbX0gZnJvbSAnLi91dGlscy9zeW50YXgnO1xuaW1wb3J0IHtleHRyYWN0SG9zdH0gZnJvbSAnLi91dGlscy91cmwnO1xuXG5leHBvcnQgY29uc3QgSEFTSF9GVU5DVElPTlMgPSB7bWQ1LCBzaGEzLCBzaGEyNTYsIHNoYTUxMiwgcmlwZW1kMTYwfSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIEhhc2hGdW5jdGlvbk5hbWUgPSBrZXlvZiB0eXBlb2YgSEFTSF9GVU5DVElPTlM7XG5leHBvcnQgdHlwZSBIYXNoRnVuY3Rpb24gPSB0eXBlb2YgSEFTSF9GVU5DVElPTlNba2V5b2YgdHlwZW9mIEhBU0hfRlVOQ1RJT05TXTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0hBU0hfRlVOQ1RJT05fTkFNRTogSGFzaEZ1bmN0aW9uTmFtZSA9ICdzaGEzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNhbHRUaGVQYXNzKFxuICAgIGhhc2hGdW5jdGlvbjogSGFzaEZ1bmN0aW9uLFxuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIG1hc3RlclBhc3N3b3JkOiBzdHJpbmcsXG4gICAgZG9tYWluTmFtZTogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4pOiBzdHJpbmcge1xuICAgIGlmIChtYXN0ZXJQYXNzd29yZCA9PT0gJycgJiYgZG9tYWluTmFtZSA9PT0gJycgJiYgZW1haWwgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpbShcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBlc2NhcGVCYXNlNjQoXG4gICAgICAgICAgICBiYXNlNjQoXG4gICAgICAgICAgICAgICAgaGFzaEZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICBtYXN0ZXJQYXNzd29yZCArXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhY3RIb3N0KGRvbWFpbk5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICApO1xufVxuIiwiaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5pbXBvcnQge0V4dGVuZENvbXBvbmVudFByb3BzfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xuaW1wb3J0IHtGcmFtZX0gZnJvbSAnLi4vbGF5b3V0L0ZyYW1lJztcbmltcG9ydCB7VGV4dH0gZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IGxhYmVsU3R5bGUgPSBzdHlsZTkuY3JlYXRlKHtcbiAgICB3cmFwcGVyOiB7XG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgICBjb2xvcjogJ3ZhcigtLWxhYmVsLWNvbG9yKScsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbn0pO1xuXG50eXBlIExhYmVsUHJvcHMgPSBFeHRlbmRDb21wb25lbnRQcm9wczxKU1guSW50cmluc2ljRWxlbWVudHNbJ2xhYmVsJ10sIHtcbiAgICBsYWJlbDogc3RyaW5nLFxufT47XG5cbmV4cG9ydCBmdW5jdGlvbiBMYWJlbCh7XG4gICAgbGFiZWwsXG4gICAgY2hpbGRyZW4sXG59OiBMYWJlbFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFtZVxuICAgICAgICAgICAgYXM9XCJsYWJlbFwiXG4gICAgICAgICAgICBnYXA9ezJ9XG4gICAgICAgICAgICBzdHlsZXM9e1tsYWJlbFN0eWxlLndyYXBwZXJdfVxuICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZXM9e1tsYWJlbFN0eWxlLmxhYmVsXX0+e2xhYmVsfTwvVGV4dD5cbiAgICAgICAgICAgIDxGcmFtZSBzdHlsZXM9e1tsYWJlbFN0eWxlLmNvbnRlbnRdfT57Y2hpbGRyZW59PC9GcmFtZT5cbiAgICAgICAgPC9GcmFtZT5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge0V4dGVuZENvbXBvbmVudFByb3BzfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xuXG50eXBlIE9wdGlvblByb3BzID0gRXh0ZW5kQ29tcG9uZW50UHJvcHM8SlNYLkludHJpbnNpY0VsZW1lbnRzWydvcHRpb24nXSwge1xuXG59PjtcblxuZXhwb3J0IGZ1bmN0aW9uIE9wdGlvbih7XG4gICAgLi4ucHJvcHNcbn06IE9wdGlvblByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxvcHRpb24gey4uLnByb3BzfSAvPlxuICAgICk7XG59XG4iLCJpbXBvcnQge0pTWH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBzdHlsZTkgZnJvbSAnc3R5bGU5JztcbmltcG9ydCB7RXh0ZW5kQ29tcG9uZW50UHJvcHN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudCc7XG5pbXBvcnQge2ZhbWlseVN0eWxlcywgc2l6ZVN0eWxlc30gZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IHNlbGVjdFN0eWxlcyA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIHJlc2V0OiB7XG4gICAgICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIH0sXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHZhcigtLXNlbGVjdC1ib3JkZXIpJyxcbiAgICAgICAgYm94U2hhZG93OiAnMHB4IDFweCAxcHggdmFyKC0tc2VsZWN0LXNoYWRvdyknLFxuICAgICAgICBwYWRkaW5nOiAnMnB4IDE2cHgnLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiA2LFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogNixcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDYsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDYsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1zZWxlY3QtYmcpJyxcbiAgICAgICAgY29sb3I6ICd2YXIoLS1zZWxlY3QtY29sb3IpJyxcbiAgICB9LFxufSk7XG5cbnR5cGUgU2VsZWN0UHJvcHMgPSBFeHRlbmRDb21wb25lbnRQcm9wczxKU1guSW50cmluc2ljRWxlbWVudHNbJ3NlbGVjdCddLCB7XG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxufT47XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Qoe1xuICAgIG9uQ2hhbmdlLFxuICAgIC4uLnByb3BzXG59OiBTZWxlY3RQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlOShcbiAgICAgICAgICAgICAgICBzZWxlY3RTdHlsZXMucmVzZXQsXG4gICAgICAgICAgICAgICAgc2VsZWN0U3R5bGVzLmFwcGVhcmFuY2UsXG4gICAgICAgICAgICAgICAgZmFtaWx5U3R5bGVzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgc2l6ZVN0eWxlcy5tLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICApO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9PcHRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9TZWxlY3QnO1xuIiwiaW1wb3J0IHtDb21wb25lbnRDaGlsZHJlbiwgSlNYfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHN0eWxlOSwge1N0eWxlfSBmcm9tICdzdHlsZTknO1xuaW1wb3J0IHtFeHRlbmRDb21wb25lbnRQcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcblxudHlwZSBIVE1MQXR0cmlidXRlcyA9IEpTWC5IVE1MQXR0cmlidXRlcztcblxuY29uc3QgdGV4dFN0eWxlcyA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29sb3I6ICd2YXIoLS10ZXh0LWNvbG9yKScsXG4gICAgfSxcbn0pO1xuXG50eXBlIEZhbWlseVN0eWxlID0gJ2RlZmF1bHQnIHwgJ21vbm9zcGFjZSc7XG5leHBvcnQgY29uc3Qgey4uLmZhbWlseVN0eWxlc30gPSBzdHlsZTkuY3JlYXRlPFJlY29yZDxGYW1pbHlTdHlsZSwgU3R5bGU+Pih7XG4gICAgZGVmYXVsdDoge1xuICAgICAgICBmb250RmFtaWx5OiAndmFyKC0tZm9udC1zYW5zLXNlcmlmKScsXG4gICAgfSxcbiAgICBtb25vc3BhY2U6IHtcbiAgICAgICAgZm9udEZhbWlseTogJ3ZhcigtLWZvbnQtbW9ub3NwYWNlKScsXG4gICAgfSxcbn0pO1xuXG50eXBlIFNpemVTdHlsZSA9ICd4cycgfCAncycgfCAnbScgfCAnbCcgfCAneGwnO1xuZXhwb3J0IGNvbnN0IHsuLi5zaXplU3R5bGVzfSA9IHN0eWxlOS5jcmVhdGU8UmVjb3JkPFNpemVTdHlsZSwgU3R5bGU+Pih7XG4gICAgeHM6IHtcbiAgICAgICAgZm9udFNpemU6IDksXG4gICAgfSxcbiAgICBzOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMCxcbiAgICB9LFxuICAgIG06IHtcbiAgICAgICAgZm9udFNpemU6IDExLFxuICAgIH0sXG4gICAgbDoge1xuICAgICAgICBmb250U2l6ZTogMTgsXG4gICAgfSxcbiAgICB4bDoge1xuICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgfSxcbn0pO1xuXG50eXBlIFdlaWdodFN0eWxlID0gJ2xpZ2h0JyB8ICdyZWd1bGFyJyB8ICdtZWRpdW0nIHwgJ3NlbWlCb2xkJyB8ICdib2xkJztcbmV4cG9ydCBjb25zdCB7Li4ud2VpZ2h0U3R5bGVzfSA9IHN0eWxlOS5jcmVhdGU8UmVjb3JkPFdlaWdodFN0eWxlLCBTdHlsZT4+KHtcbiAgICBsaWdodDoge1xuICAgICAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgfSxcbiAgICByZWd1bGFyOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICB9LFxuICAgIG1lZGl1bToge1xuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgfSxcbiAgICBzZW1pQm9sZDoge1xuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgfSxcbiAgICBib2xkOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICB9LFxufSk7XG5cbnR5cGUgQWxpZ25TdHlsZSA9ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcbmNvbnN0IGFsaWduU3R5bGVzID0gc3R5bGU5LmNyZWF0ZTxSZWNvcmQ8QWxpZ25TdHlsZSwgU3R5bGU+Pih7XG4gICAgbGVmdDoge1xuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICB9LFxuICAgIGNlbnRlcjoge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgIH0sXG59KTtcblxudHlwZSBUZXh0UHJvcHMgPSBFeHRlbmRDb21wb25lbnRQcm9wczxIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4sIHtcbiAgICBhcz86ICdhJyB8ICdzcGFuJyB8ICdoMScgfCAnaDInIHwgJ2gzJyB8ICdoNCcgfCAnaDUnIHwgJ2g2JyB8ICdwJyxcbiAgICBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW4sXG4gICAgc3R5bGVzPzogU3R5bGVbXSxcbiAgICBkZWY/OiBzdHJpbmcsXG5cbiAgICBmYW1pbHk/OiBGYW1pbHlTdHlsZSxcbiAgICBzaXplPzogU2l6ZVN0eWxlLFxuICAgIHdlaWdodD86IFdlaWdodFN0eWxlLFxuICAgIGFsaWduPzogQWxpZ25TdHlsZSxcbn0+O1xuXG5leHBvcnQgZnVuY3Rpb24gVGV4dCh7XG4gICAgY2hpbGRyZW46IHBvZW0sXG4gICAgYXM6IFRhZyA9ICdzcGFuJyxcbiAgICBzdHlsZXMgPSBbXSxcbiAgICBkZWYgPSAndGV4dCcsXG5cbiAgICBmYW1pbHkgPSAnZGVmYXVsdCcsXG4gICAgc2l6ZSA9ICdtJyxcbiAgICB3ZWlnaHQgPSAncmVndWxhcicsXG4gICAgYWxpZ24gPSAnbGVmdCcsXG4gICAgLi4ucHJvcHNcbn06IFRleHRQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGFnXG4gICAgICAgICAgICBkYXRhLWRlZj17ZGVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZTkoXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlcy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIGZhbWlseVN0eWxlc1tmYW1pbHldLFxuICAgICAgICAgICAgICAgIHNpemVTdHlsZXNbc2l6ZV0sXG4gICAgICAgICAgICAgICAgd2VpZ2h0U3R5bGVzW3dlaWdodF0sXG4gICAgICAgICAgICAgICAgYWxpZ25TdHlsZXNbYWxpZ25dLFxuICAgICAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtwb2VtfVxuICAgICAgICA8L1RhZz5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtDb21wb25lbnRDaGlsZHJlbiwgSlNYfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHN0eWxlOSwge1N0eWxlfSBmcm9tICdzdHlsZTknO1xuXG5pbXBvcnQge0V4dGVuZENvbXBvbmVudFByb3BzLCBvdmVycmlkZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcblxudHlwZSBTVkdBdHRyaWJ1dGVzID0gSlNYLlNWR0F0dHJpYnV0ZXM7XG50eXBlIEhUTUxBdHRyaWJ1dGVzID0gSlNYLkhUTUxBdHRyaWJ1dGVzO1xuXG5leHBvcnQgdHlwZSBTaXplID0gMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTA7XG5cbmNvbnN0IGhlaWdodFN0eWxlcyA9IHN0eWxlOS5jcmVhdGU8UmVjb3JkPFNpemUsIFN0eWxlPj4oe1xuICAgIDE6IHtoZWlnaHQ6IDR9LCAyOiB7aGVpZ2h0OiA4fSwgMzoge2hlaWdodDogMTJ9LCA0OiB7aGVpZ2h0OiAxNn0sIDU6IHtoZWlnaHQ6IDIwfSxcbiAgICA2OiB7aGVpZ2h0OiAyNH0sIDc6IHtoZWlnaHQ6IDI4fSwgODoge2hlaWdodDogMzJ9LCA5OiB7aGVpZ2h0OiAzNn0sIDEwOiB7aGVpZ2h0OiA0MH0sXG59KTtcblxuY29uc3Qgd2lkdGhTdHlsZXMgPSBzdHlsZTkuY3JlYXRlPFJlY29yZDxTaXplLCBTdHlsZT4+KHtcbiAgICAxOiB7d2lkdGg6IDR9LCAyOiB7d2lkdGg6IDh9LCAzOiB7d2lkdGg6IDEyfSwgNDoge3dpZHRoOiAxNn0sIDU6IHt3aWR0aDogMjB9LFxuICAgIDY6IHt3aWR0aDogMjR9LCA3OiB7d2lkdGg6IDI4fSwgODoge3dpZHRoOiAzMn0sIDk6IHt3aWR0aDogMzZ9LCAxMDoge3dpZHRoOiA0MH0sXG59KTtcblxuY29uc3QgZ2FwU3R5bGVzID0gc3R5bGU5LmNyZWF0ZTxSZWNvcmQ8U2l6ZSwgU3R5bGU+Pih7XG4gICAgMToge2dhcDogNH0sIDI6IHtnYXA6IDh9LCAzOiB7Z2FwOiAxMn0sIDQ6IHtnYXA6IDE2fSwgNToge2dhcDogMjB9LFxuICAgIDY6IHtnYXA6IDI0fSwgNzoge2dhcDogMjh9LCA4OiB7Z2FwOiAzMn0sIDk6IHtnYXA6IDM2fSwgMTA6IHtnYXA6IDQwfSxcbn0pO1xuXG50eXBlIERpcmVjdGlvbiA9ICdjb2x1bW4nIHwgJ3Jvdyc7XG5jb25zdCBkaXJlY3Rpb25TdHlsZXMgPSBzdHlsZTkuY3JlYXRlPFJlY29yZDxEaXJlY3Rpb24sIFN0eWxlPj4oe1xuICAgIGNvbHVtbjoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIHJvdzoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICB9LFxufSk7XG5cbmNvbnN0IGZyYW1lU3R5bGVzID0gc3R5bGU5LmNyZWF0ZSh7XG4gICAgZGVmYXVsdDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbn0pO1xuXG50eXBlIFZhbHVlT2Y8VD4gPSBUW2tleW9mIFRdO1xudHlwZSBGaWx0ZXI8Q29sbGVjdGlvbiwgVmFsdWU+ID0gVmFsdWVPZjx7W0sgaW4ga2V5b2YgQ29sbGVjdGlvbl06IENvbGxlY3Rpb25bS10gZXh0ZW5kcyBWYWx1ZSA/IG5ldmVyIDogS30+O1xudHlwZSBFbGVtZW50VGFnID0gRmlsdGVyPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgU1ZHQXR0cmlidXRlczx1bmtub3duPj47XG5cbnR5cGUgRnJhbWVQcm9wcyA9IEV4dGVuZENvbXBvbmVudFByb3BzPEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50Piwge1xuICAgIGFzPzogRWxlbWVudFRhZyxcbiAgICBjaGlsZHJlbj86IENvbXBvbmVudENoaWxkcmVuLFxuICAgIHN0eWxlcz86IFN0eWxlW10sXG4gICAgZGVmPzogc3RyaW5nLFxuXG4gICAgd2lkdGg/OiBTaXplLFxuICAgIGhlaWdodD86IFNpemUsXG4gICAgZ2FwPzogU2l6ZSxcbiAgICBkaXJlY3Rpb24/OiBEaXJlY3Rpb24sXG59PjtcblxuZXhwb3J0IGZ1bmN0aW9uIEZyYW1lKHtcbiAgICBhczogVGFnID0gJ2RpdicsXG4gICAgY2hpbGRyZW4sXG4gICAgc3R5bGVzLFxuICAgIGRlZiA9ICdmcmFtZScsXG5cbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgZ2FwLFxuICAgIGRpcmVjdGlvbiA9ICdjb2x1bW4nLFxuXG4gICAgLi4ucHJvcHNcbn06IEZyYW1lUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRhZ1xuICAgICAgICAgICAgZGF0YS1kZWY9e2RlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGU5KFxuICAgICAgICAgICAgICAgIGZyYW1lU3R5bGVzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgd2lkdGggJiYgd2lkdGhTdHlsZXNbd2lkdGhdLFxuICAgICAgICAgICAgICAgIGhlaWdodCAmJiBoZWlnaHRTdHlsZXNbaGVpZ2h0XSxcbiAgICAgICAgICAgICAgICBnYXAgJiYgZ2FwU3R5bGVzW2dhcF0sXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uICYmIGRpcmVjdGlvblN0eWxlc1tkaXJlY3Rpb25dLFxuICAgICAgICAgICAgICAgIC4uLihzdHlsZXMgfHwgW10pLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RhZz5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3Qgb3ZlcnJpZGVGcmFtZSA9IG92ZXJyaWRlQ29tcG9uZW50KEZyYW1lKTtcbiIsImltcG9ydCB7Q29tcG9uZW50UHJvcHMsIEZ1bmN0aW9uQ29tcG9uZW50LCBKU1h9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7a2V5c09mfSBmcm9tICcuL3N5bnRheCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVycmlkZUNvbXBvbmVudDxGQyBleHRlbmRzIEZ1bmN0aW9uQ29tcG9uZW50LCBQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHM8RkM+PihDb21wb25lbnQ6IEZDKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIDxNIGV4dGVuZHMgUmVjb3JkPHN0cmluZywga2V5b2YgUD4+KG92ZXJyaWRlUHJvcHM6IFAsIG1hcHBpbmc/OiBNKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9mdW5jdGlvbi1jb21wb25lbnQtZGVmaW5pdGlvblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gT3ZlcnJpZGRlbkNvbXBvbmVudChtYXBwZWRQcm9wczogRXhjbHVkZTxQLCBNW2tleW9mIE1dPiAmIHtbSyBpbiBrZXlvZiBNXTogUFtNW0tdXX0pOiBKU1guRWxlbWVudCB7XG4gICAgICAgICAgICBpZiAoIW1hcHBpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5tYXBwZWRQcm9wcyBhcyBuZXZlcn0gey4uLm92ZXJyaWRlUHJvcHMgYXMgbmV2ZXJ9IC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXNPZihtYXBwaW5nKSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gbWFwcGVkUHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbbWFwcGluZ1trZXldIGFzIGFueV0gPSBtYXBwZWRQcm9wc1trZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW2tleSBhcyBhbnldID0gbWFwcGVkUHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHMgYXMgbmV2ZXJ9IHsuLi5vdmVycmlkZVByb3BzfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICB9O1xufVxuXG5leHBvcnQgdHlwZSBFeHRlbmRDb21wb25lbnRQcm9wczxcbiAgICBDb21wb25lbnRQcm9wcyxcbiAgICBQcm9wc1xuPiA9IFByb3BzICYgT21pdDxDb21wb25lbnRQcm9wcywga2V5b2YgUHJvcHM+O1xuIiwiaW1wb3J0IHtXb3JkQXJyYXl9IGZyb20gJ2NyeXB0by1lcy9saWIvY29yZSc7XG5pbXBvcnQge01ENX0gZnJvbSAnY3J5cHRvLWVzL2xpYi9tZDUnO1xuaW1wb3J0IHtTSEEzfSBmcm9tICdjcnlwdG8tZXMvbGliL3NoYTMnO1xuaW1wb3J0IHtTSEEyNTZ9IGZyb20gJ2NyeXB0by1lcy9saWIvc2hhMjU2JztcbmltcG9ydCB7U0hBNTEyfSBmcm9tICdjcnlwdG8tZXMvbGliL3NoYTUxMic7XG5pbXBvcnQge1JJUEVNRDE2MH0gZnJvbSAnY3J5cHRvLWVzL2xpYi9yaXBlbWQxNjAnO1xuXG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnY3J5cHRvLWVzL2xpYi9lbmMtYmFzZTY0JztcblxuZXhwb3J0IGNvbnN0IHN0cmluZ1RvTnVtYmVyID0gKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgcmVzdWx0ICs9IHZhbHVlLmNoYXJDb2RlQXQoaSkgKiBpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IG1kNSA9ICh2YWx1ZTogc3RyaW5nKTogV29yZEFycmF5ID0+IE1ENSh2YWx1ZSk7XG5leHBvcnQgY29uc3Qgc2hhMyA9ICh2YWx1ZTogc3RyaW5nKTogV29yZEFycmF5ID0+IFNIQTModmFsdWUpO1xuZXhwb3J0IGNvbnN0IHNoYTI1NiA9ICh2YWx1ZTogc3RyaW5nKTogV29yZEFycmF5ID0+IFNIQTI1Nih2YWx1ZSk7XG5leHBvcnQgY29uc3Qgc2hhNTEyID0gKHZhbHVlOiBzdHJpbmcpOiBXb3JkQXJyYXkgPT4gU0hBNTEyKHZhbHVlKTtcbmV4cG9ydCBjb25zdCByaXBlbWQxNjAgPSAodmFsdWU6IHN0cmluZyk6IFdvcmRBcnJheSA9PiBSSVBFTUQxNjAodmFsdWUpO1xuXG5leHBvcnQgY29uc3QgYmFzZTY0ID0gKHZhbHVlOiBXb3JkQXJyYXkpOiBzdHJpbmcgPT4gdmFsdWUudG9TdHJpbmcoQmFzZTY0KTtcblxuZXhwb3J0IGNvbnN0IGVzY2FwZUJhc2U2NCA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+XG4gICAgdmFsdWVcbiAgICAgICAgLnJlcGxhY2UoLz0rJC8sICcnKVxuICAgICAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xuXG4iLCJ0eXBlIEVudHJpZXM8VD4gPSB7XG4gICAgW0sgaW4ga2V5b2YgVF06IFtLLCBUW0tdXTtcbn1ba2V5b2YgVF1bXTtcblxuZXhwb3J0IGNvbnN0IGVudHJpZXNPZiA9IDxUPih4OiBUKTogRW50cmllczxUPiA9PiBPYmplY3QuZW50cmllcyh4KSBhcyBFbnRyaWVzPFQ+O1xuZXhwb3J0IGNvbnN0IGtleXNPZiA9IDxUPih4OiBUKTogKGtleW9mIFQpW10gPT4gT2JqZWN0LmtleXMoeCkgYXMgKGtleW9mIFQpW107XG5leHBvcnQgY29uc3QgdmFsdWVzT2YgPSA8VD4oeDogVCk6IChUW2tleW9mIFRdKVtdID0+IE9iamVjdC52YWx1ZXMoeCkgYXMgKFRba2V5b2YgVF0pW107XG5cbmV4cG9ydCBjb25zdCB0aW1lcyA9IDxUPihuOiBudW1iZXIsIGZuOiAoaW5kZXg6IG51bWJlcikgPT4gVCk6IFRbXSA9PlxuICAgIEFycmF5LmZyb20oe2xlbmd0aDogbn0sIChfLCBpbmRleCkgPT4gZm4oaW5kZXgpKTtcblxuZXhwb3J0IGNvbnN0IHRyaW0gPSAobGVuZ3RoOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4gdmFsdWUuc3Vic3RyaW5nKDAsIGxlbmd0aCk7XG5leHBvcnQgY29uc3QgcmFuZ2UgPSAoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBzdGVwID0gMSk6IG51bWJlcltdID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gZnJvbTsgaSA8IHRvOyBpICs9IHN0ZXApIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJmdW5jdGlvbiBwYXJzZVVybCh1cmw6IHN0cmluZyk6IFVSTCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IHVybFRvUGFyc2UgPSB1cmw7XG4gICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkgdXJsVG9QYXJzZSA9ICBgaHR0cHM6Ly8ke3VybH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkwodXJsVG9QYXJzZSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SG9zdCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFyc2VkVXJsID0gcGFyc2VVcmwodXJsKTtcbiAgICByZXR1cm4gcGFyc2VkVXJsICE9IG51bGwgPyBwYXJzZWRVcmw/Lmhvc3QgOiB1cmw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0T3JpZ2luKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJzZWRVcmwgPSBwYXJzZVVybCh1cmwpO1xuICAgIHJldHVybiBwYXJzZWRVcmwgIT0gbnVsbCA/IHBhcnNlZFVybD8ub3JpZ2luIDogdXJsO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbmhlcml0YW5jZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2Uge1xuICAvKipcbiAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG4gICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcbiAgICovXG4gIHN0YXRpYyBjcmVhdGUoLi4uYXJncykge1xuICAgIHJldHVybiBuZXcgdGhpcyguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICBNeVR5cGUubWl4SW4oe1xuICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG4gICAqICAgICB9KTtcbiAgICovXG4gIG1peEluKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgY2xvbmUgPSBpbnN0YW5jZS5jbG9uZSgpO1xuICAgKi9cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgY2xvbmUgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpO1xuICAgIE9iamVjdC5hc3NpZ24oY2xvbmUsIHRoaXMpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cbiAqXG4gKiBAcHJvcGVydHkge0FycmF5fSB3b3JkcyBUaGUgYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNpZ0J5dGVzIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhpcyB3b3JkIGFycmF5LlxuICovXG5leHBvcnQgY2xhc3MgV29yZEFycmF5IGV4dGVuZHMgQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgKE9wdGlvbmFsKSBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG4gICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddKTtcbiAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10sIDYpO1xuICAgKi9cbiAgY29uc3RydWN0b3Iod29yZHMgPSBbXSwgc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGxldCB0eXBlZEFycmF5ID0gd29yZHM7XG4gICAgLy8gQ29udmVydCBidWZmZXJzIHRvIHVpbnQ4XG4gICAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgdHlwZWRBcnJheSA9IG5ldyBVaW50OEFycmF5KHR5cGVkQXJyYXkpO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgb3RoZXIgYXJyYXkgdmlld3MgdG8gdWludDhcbiAgICBpZiAoXG4gICAgICB0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50OEFycmF5XG4gICAgICB8fCB0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXlcbiAgICAgIHx8IHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQxNkFycmF5XG4gICAgICB8fCB0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDE2QXJyYXlcbiAgICAgIHx8IHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQzMkFycmF5XG4gICAgICB8fCB0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDMyQXJyYXlcbiAgICAgIHx8IHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXlcbiAgICAgIHx8IHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXlcbiAgICApIHtcbiAgICAgIHR5cGVkQXJyYXkgPSBuZXcgVWludDhBcnJheSh0eXBlZEFycmF5LmJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5LmJ5dGVMZW5ndGgpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBVaW50OEFycmF5XG4gICAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAvLyBTaG9ydGN1dFxuICAgICAgY29uc3QgdHlwZWRBcnJheUJ5dGVMZW5ndGggPSB0eXBlZEFycmF5LmJ5dGVMZW5ndGg7XG5cbiAgICAgIC8vIEV4dHJhY3QgYnl0ZXNcbiAgICAgIGNvbnN0IF93b3JkcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlZEFycmF5Qnl0ZUxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIF93b3Jkc1tpID4+PiAyXSB8PSB0eXBlZEFycmF5W2ldIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGlzIHdvcmQgYXJyYXlcbiAgICAgIHRoaXMud29yZHMgPSBfd29yZHM7XG4gICAgICB0aGlzLnNpZ0J5dGVzID0gdHlwZWRBcnJheUJ5dGVMZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEVsc2UgY2FsbCBub3JtYWwgaW5pdFxuICAgICAgdGhpcy53b3JkcyA9IHdvcmRzO1xuICAgICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuQnl0ZXMgVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXG4gICAqXG4gICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHJhbmRvbSB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20oMTYpO1xuICAgKi9cbiAgc3RhdGljIHJhbmRvbShuQnl0ZXMpIHtcbiAgICBjb25zdCB3b3JkcyA9IFtdO1xuXG4gICAgY29uc3QgciA9IChtX3cpID0+IHtcbiAgICAgIGxldCBfbV93ID0gbV93O1xuICAgICAgbGV0IF9tX3ogPSAweDNhZGU2OGIxO1xuICAgICAgY29uc3QgbWFzayA9IDB4ZmZmZmZmZmY7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIF9tX3ogPSAoMHg5MDY5ICogKF9tX3ogJiAweEZGRkYpICsgKF9tX3ogPj4gMHgxMCkpICYgbWFzaztcbiAgICAgICAgX21fdyA9ICgweDQ2NTAgKiAoX21fdyAmIDB4RkZGRikgKyAoX21fdyA+PiAweDEwKSkgJiBtYXNrO1xuICAgICAgICBsZXQgcmVzdWx0ID0gKChfbV96IDw8IDB4MTApICsgX21fdykgJiBtYXNrO1xuICAgICAgICByZXN1bHQgLz0gMHgxMDAwMDAwMDA7XG4gICAgICAgIHJlc3VsdCArPSAwLjU7XG4gICAgICAgIHJldHVybiByZXN1bHQgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMCwgcmNhY2hlOyBpIDwgbkJ5dGVzOyBpICs9IDQpIHtcbiAgICAgIGNvbnN0IF9yID0gcigocmNhY2hlIHx8IE1hdGgucmFuZG9tKCkpICogMHgxMDAwMDAwMDApO1xuXG4gICAgICByY2FjaGUgPSBfcigpICogMHgzYWRlNjdiNztcbiAgICAgIHdvcmRzLnB1c2goKF9yKCkgKiAweDEwMDAwMDAwMCkgfCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFdvcmRBcnJheSh3b3JkcywgbkJ5dGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGlzIHdvcmQgYXJyYXkgdG8gYSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5naWZpZWQgd29yZCBhcnJheS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcbiAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoKTtcbiAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgKi9cbiAgdG9TdHJpbmcoZW5jb2RlciA9IEhleCkge1xuICAgIHJldHVybiBlbmNvZGVyLnN0cmluZ2lmeSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheSB0byBhcHBlbmQuXG4gICAqXG4gICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhpcyB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgd29yZEFycmF5MS5jb25jYXQod29yZEFycmF5Mik7XG4gICAqL1xuICBjb25jYXQod29yZEFycmF5KSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgdGhpc1dvcmRzID0gdGhpcy53b3JkcztcbiAgICBjb25zdCB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG4gICAgY29uc3QgdGhpc1NpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcbiAgICBjb25zdCB0aGF0U2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cbiAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuICAgIHRoaXMuY2xhbXAoKTtcblxuICAgIC8vIENvbmNhdFxuICAgIGlmICh0aGlzU2lnQnl0ZXMgJSA0KSB7XG4gICAgICAvLyBDb3B5IG9uZSBieXRlIGF0IGEgdGltZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCB0aGF0Qnl0ZSA9ICh0aGF0V29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSB8PSB0aGF0Qnl0ZSA8PCAoMjQgLSAoKHRoaXNTaWdCeXRlcyArIGkpICUgNCkgKiA4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29weSBvbmUgd29yZCBhdCBhIHRpbWVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpICs9IDQpIHtcbiAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gPSB0aGF0V29yZHNbaSA+Pj4gMl07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG4gICAgLy8gQ2hhaW5hYmxlXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB3b3JkQXJyYXkuY2xhbXAoKTtcbiAgICovXG4gIGNsYW1wKCkge1xuICAgIC8vIFNob3J0Y3V0c1xuICAgIGNvbnN0IHsgd29yZHMsIHNpZ0J5dGVzIH0gPSB0aGlzO1xuXG4gICAgLy8gQ2xhbXBcbiAgICB3b3Jkc1tzaWdCeXRlcyA+Pj4gMl0gJj0gMHhmZmZmZmZmZiA8PCAoMzIgLSAoc2lnQnl0ZXMgJSA0KSAqIDgpO1xuICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgY2xvbmUuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgY2xvbmUgPSB3b3JkQXJyYXkuY2xvbmUoKTtcbiAgICovXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGNsb25lID0gc3VwZXIuY2xvbmUuY2FsbCh0aGlzKTtcbiAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG4gKi9cbmV4cG9ydCBjb25zdCBIZXggPSB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBoZXggc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcbiAgICovXG4gIHN0cmluZ2lmeSh3b3JkQXJyYXkpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCB7IHdvcmRzLCBzaWdCeXRlcyB9ID0gd29yZEFycmF5O1xuXG4gICAgLy8gQ29udmVydFxuICAgIGNvbnN0IGhleENoYXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSArPSAxKSB7XG4gICAgICBjb25zdCBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcbiAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG4gICAgICBoZXhDaGFycy5wdXNoKChiaXRlICYgMHgwZikudG9TdHJpbmcoMTYpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGV4Q2hhcnMuam9pbignJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgaGV4IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHIgVGhlIGhleCBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG4gICAqL1xuICBwYXJzZShoZXhTdHIpIHtcbiAgICAvLyBTaG9ydGN1dFxuICAgIGNvbnN0IGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cbiAgICAvLyBDb252ZXJ0XG4gICAgY29uc3Qgd29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhleFN0ckxlbmd0aDsgaSArPSAyKSB7XG4gICAgICB3b3Jkc1tpID4+PiAzXSB8PSBwYXJzZUludChoZXhTdHIuc3Vic3RyKGksIDIpLCAxNikgPDwgKDI0IC0gKGkgJSA4KSAqIDQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgV29yZEFycmF5KHdvcmRzLCBoZXhTdHJMZW5ndGggLyAyKTtcbiAgfSxcbn07XG5cbi8qKlxuICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuICovXG5leHBvcnQgY29uc3QgTGF0aW4xID0ge1xuICAvKipcbiAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgTGF0aW4xIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG4gICAqL1xuICBzdHJpbmdpZnkod29yZEFycmF5KSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgeyB3b3Jkcywgc2lnQnl0ZXMgfSA9IHdvcmRBcnJheTtcblxuICAgIC8vIENvbnZlcnRcbiAgICBjb25zdCBsYXRpbjFDaGFycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG4gICAgICBsYXRpbjFDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYml0ZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXRpbjFDaGFycy5qb2luKCcnKTtcbiAgfSxcblxuICAvKipcbiAgICogQ29udmVydHMgYSBMYXRpbjEgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhdGluMVN0ciBUaGUgTGF0aW4xIHN0cmluZy5cbiAgICpcbiAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcbiAgICovXG4gIHBhcnNlKGxhdGluMVN0cikge1xuICAgIC8vIFNob3J0Y3V0XG4gICAgY29uc3QgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuICAgIC8vIENvbnZlcnRcbiAgICBjb25zdCB3b3JkcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF0aW4xU3RyTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHdvcmRzW2kgPj4+IDJdIHw9IChsYXRpbjFTdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYpIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFdvcmRBcnJheSh3b3JkcywgbGF0aW4xU3RyTGVuZ3RoKTtcbiAgfSxcbn07XG5cbi8qKlxuICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG4gKi9cbmV4cG9ydCBjb25zdCBVdGY4ID0ge1xuICAvKipcbiAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgVVRGLTggc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtOCBzdHJpbmcuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciB1dGY4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLlV0Zjguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG4gICAqL1xuICBzdHJpbmdpZnkod29yZEFycmF5KSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKExhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgVVRGLTggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHV0ZjhTdHIgVGhlIFVURi04IHN0cmluZy5cbiAgICpcbiAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuICAgKi9cbiAgcGFyc2UodXRmOFN0cikge1xuICAgIHJldHVybiBMYXRpbjEucGFyc2UodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHV0ZjhTdHIpKSk7XG4gIH0sXG59O1xuXG4vKipcbiAqIEFic3RyYWN0IGJ1ZmZlcmVkIGJsb2NrIGFsZ29yaXRobSB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGUgcHJvcGVydHkgYmxvY2tTaXplIG11c3QgYmUgaW1wbGVtZW50ZWQgaW4gYSBjb25jcmV0ZSBzdWJ0eXBlLlxuICpcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfbWluQnVmZmVyU2l6ZVxuICpcbiAqICAgICBUaGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IHNob3VsZCBiZSBrZXB0IHVucHJvY2Vzc2VkIGluIHRoZSBidWZmZXIuIERlZmF1bHQ6IDBcbiAqL1xuZXhwb3J0IGNsYXNzIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9taW5CdWZmZXJTaXplID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhpcyBibG9jayBhbGdvcml0aG0ncyBkYXRhIGJ1ZmZlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIC8vIEluaXRpYWwgdmFsdWVzXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBXb3JkQXJyYXkoKTtcbiAgICB0aGlzLl9uRGF0YUJ5dGVzID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGRhdGFcbiAgICpcbiAgICogICAgIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKCdkYXRhJyk7XG4gICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQod29yZEFycmF5KTtcbiAgICovXG4gIF9hcHBlbmQoZGF0YSkge1xuICAgIGxldCBtX2RhdGEgPSBkYXRhO1xuXG4gICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuICAgIGlmICh0eXBlb2YgbV9kYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgbV9kYXRhID0gVXRmOC5wYXJzZShtX2RhdGEpO1xuICAgIH1cblxuICAgIC8vIEFwcGVuZFxuICAgIHRoaXMuX2RhdGEuY29uY2F0KG1fZGF0YSk7XG4gICAgdGhpcy5fbkRhdGFCeXRlcyArPSBtX2RhdGEuc2lnQnl0ZXM7XG4gIH1cblxuICAvKipcbiAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkYXRhIGJsb2Nrcy5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaW52b2tlcyBfZG9Qcm9jZXNzQmxvY2sob2Zmc2V0KSwgd2hpY2ggbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhIGNvbmNyZXRlIHN1YnR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHByb2Nlc3NlZCBkYXRhLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG4gICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoISEnZmx1c2gnKTtcbiAgICovXG4gIF9wcm9jZXNzKGRvRmx1c2gpIHtcbiAgICBsZXQgcHJvY2Vzc2VkV29yZHM7XG5cbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCB7IF9kYXRhOiBkYXRhLCBibG9ja1NpemUgfSA9IHRoaXM7XG4gICAgY29uc3QgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcbiAgICBjb25zdCBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuICAgIGNvbnN0IGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuICAgIC8vIENvdW50IGJsb2NrcyByZWFkeVxuICAgIGxldCBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcbiAgICBpZiAoZG9GbHVzaCkge1xuICAgICAgLy8gUm91bmQgdXAgdG8gaW5jbHVkZSBwYXJ0aWFsIGJsb2Nrc1xuICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJvdW5kIGRvd24gdG8gaW5jbHVkZSBvbmx5IGZ1bGwgYmxvY2tzLFxuICAgICAgLy8gbGVzcyB0aGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IG11c3QgcmVtYWluIGluIHRoZSBidWZmZXJcbiAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGgubWF4KChuQmxvY2tzUmVhZHkgfCAwKSAtIHRoaXMuX21pbkJ1ZmZlclNpemUsIDApO1xuICAgIH1cblxuICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XG4gICAgY29uc3QgbldvcmRzUmVhZHkgPSBuQmxvY2tzUmVhZHkgKiBibG9ja1NpemU7XG5cbiAgICAvLyBDb3VudCBieXRlcyByZWFkeVxuICAgIGNvbnN0IG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCBkYXRhU2lnQnl0ZXMpO1xuXG4gICAgLy8gUHJvY2VzcyBibG9ja3NcbiAgICBpZiAobldvcmRzUmVhZHkpIHtcbiAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IG5Xb3Jkc1JlYWR5OyBvZmZzZXQgKz0gYmxvY2tTaXplKSB7XG4gICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXG4gICAgICAgIHRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGRhdGFXb3Jkcywgb2Zmc2V0KTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHByb2Nlc3NlZCB3b3Jkc1xuICAgICAgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcbiAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHByb2Nlc3NlZCB3b3Jkc1xuICAgIHJldHVybiBuZXcgV29yZEFycmF5KHByb2Nlc3NlZFdvcmRzLCBuQnl0ZXNSZWFkeSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuICAgKi9cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgY2xvbmUgPSBzdXBlci5jbG9uZS5jYWxsKHRoaXMpO1xuICAgIGNsb25lLl9kYXRhID0gdGhpcy5fZGF0YS5jbG9uZSgpO1xuXG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG59XG5cbi8qKlxuICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuICpcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemVcbiAqXG4gKiAgICAgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcbiAqL1xuZXhwb3J0IGNsYXNzIEhhc2hlciBleHRlbmRzIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ge1xuICBjb25zdHJ1Y3RvcihjZmcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5ibG9ja1NpemUgPSA1MTIgLyAzMjtcblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICAgKi9cbiAgICB0aGlzLmNmZyA9IE9iamVjdC5hc3NpZ24obmV3IEJhc2UoKSwgY2ZnKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gYSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hhc2hlcn0gU3ViSGFzaGVyIFRoZSBoYXNoZXIgdG8gY3JlYXRlIGEgaGVscGVyIGZvci5cbiAgICpcbiAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG4gICAqL1xuICBzdGF0aWMgX2NyZWF0ZUhlbHBlcihTdWJIYXNoZXIpIHtcbiAgICByZXR1cm4gKG1lc3NhZ2UsIGNmZykgPT4gbmV3IFN1Ykhhc2hlcihjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7SGFzaGVyfSBTdWJIYXNoZXIgVGhlIGhhc2hlciB0byB1c2UgaW4gdGhpcyBITUFDIGhlbHBlci5cbiAgICpcbiAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcbiAgICovXG4gIHN0YXRpYyBfY3JlYXRlSG1hY0hlbHBlcihTdWJIYXNoZXIpIHtcbiAgICByZXR1cm4gKG1lc3NhZ2UsIGtleSkgPT4gbmV3IEhNQUMoU3ViSGFzaGVyLCBrZXkpLmZpbmFsaXplKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGlzIGhhc2hlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIGhhc2hlci5yZXNldCgpO1xuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgLy8gUmVzZXQgZGF0YSBidWZmZXJcbiAgICBzdXBlci5yZXNldC5jYWxsKHRoaXMpO1xuXG4gICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcbiAgICB0aGlzLl9kb1Jlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGlzIGhhc2hlciB3aXRoIGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIFRoZSBtZXNzYWdlIHRvIGFwcGVuZC5cbiAgICpcbiAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIGhhc2hlci51cGRhdGUoJ21lc3NhZ2UnKTtcbiAgICogICAgIGhhc2hlci51cGRhdGUod29yZEFycmF5KTtcbiAgICovXG4gIHVwZGF0ZShtZXNzYWdlVXBkYXRlKSB7XG4gICAgLy8gQXBwZW5kXG4gICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBoYXNoXG4gICAgdGhpcy5fcHJvY2VzcygpO1xuXG4gICAgLy8gQ2hhaW5hYmxlXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRmluYWxpemVzIHRoZSBoYXNoIGNvbXB1dGF0aW9uLlxuICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgKE9wdGlvbmFsKSBBIGZpbmFsIG1lc3NhZ2UgdXBkYXRlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoKTtcbiAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XG4gICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuICAgKi9cbiAgZmluYWxpemUobWVzc2FnZVVwZGF0ZSkge1xuICAgIC8vIEZpbmFsIG1lc3NhZ2UgdXBkYXRlXG4gICAgaWYgKG1lc3NhZ2VVcGRhdGUpIHtcbiAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuICAgIGNvbnN0IGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cbiAgICByZXR1cm4gaGFzaDtcbiAgfVxufVxuXG4vKipcbiAqIEhNQUMgYWxnb3JpdGhtLlxuICovXG5leHBvcnQgY2xhc3MgSE1BQyBleHRlbmRzIEJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIEhNQUMuXG4gICAqXG4gICAqIEBwYXJhbSB7SGFzaGVyfSBTdWJIYXNoZXIgVGhlIGhhc2ggYWxnb3JpdGhtIHRvIHVzZS5cbiAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgaG1hY0hhc2hlciA9IENyeXB0b0pTLmFsZ28uSE1BQy5jcmVhdGUoQ3J5cHRvSlMuYWxnby5TSEEyNTYsIGtleSk7XG4gICAqL1xuICBjb25zdHJ1Y3RvcihTdWJIYXNoZXIsIGtleSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBoYXNoZXIgPSBuZXcgU3ViSGFzaGVyKCk7XG4gICAgdGhpcy5faGFzaGVyID0gaGFzaGVyO1xuXG4gICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuICAgIGxldCBfa2V5ID0ga2V5O1xuICAgIGlmICh0eXBlb2YgX2tleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIF9rZXkgPSBVdGY4LnBhcnNlKF9rZXkpO1xuICAgIH1cblxuICAgIC8vIFNob3J0Y3V0c1xuICAgIGNvbnN0IGhhc2hlckJsb2NrU2l6ZSA9IGhhc2hlci5ibG9ja1NpemU7XG4gICAgY29uc3QgaGFzaGVyQmxvY2tTaXplQnl0ZXMgPSBoYXNoZXJCbG9ja1NpemUgKiA0O1xuXG4gICAgLy8gQWxsb3cgYXJiaXRyYXJ5IGxlbmd0aCBrZXlzXG4gICAgaWYgKF9rZXkuc2lnQnl0ZXMgPiBoYXNoZXJCbG9ja1NpemVCeXRlcykge1xuICAgICAgX2tleSA9IGhhc2hlci5maW5hbGl6ZShrZXkpO1xuICAgIH1cblxuICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG4gICAgX2tleS5jbGFtcCgpO1xuXG4gICAgLy8gQ2xvbmUga2V5IGZvciBpbm5lciBhbmQgb3V0ZXIgcGFkc1xuICAgIGNvbnN0IG9LZXkgPSBfa2V5LmNsb25lKCk7XG4gICAgdGhpcy5fb0tleSA9IG9LZXk7XG4gICAgY29uc3QgaUtleSA9IF9rZXkuY2xvbmUoKTtcbiAgICB0aGlzLl9pS2V5ID0gaUtleTtcblxuICAgIC8vIFNob3J0Y3V0c1xuICAgIGNvbnN0IG9LZXlXb3JkcyA9IG9LZXkud29yZHM7XG4gICAgY29uc3QgaUtleVdvcmRzID0gaUtleS53b3JkcztcblxuICAgIC8vIFhPUiBrZXlzIHdpdGggcGFkIGNvbnN0YW50c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFzaGVyQmxvY2tTaXplOyBpICs9IDEpIHtcbiAgICAgIG9LZXlXb3Jkc1tpXSBePSAweDVjNWM1YzVjO1xuICAgICAgaUtleVdvcmRzW2ldIF49IDB4MzYzNjM2MzY7XG4gICAgfVxuICAgIG9LZXkuc2lnQnl0ZXMgPSBoYXNoZXJCbG9ja1NpemVCeXRlcztcbiAgICBpS2V5LnNpZ0J5dGVzID0gaGFzaGVyQmxvY2tTaXplQnl0ZXM7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoaXMgSE1BQyB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIGhtYWNIYXNoZXIucmVzZXQoKTtcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIC8vIFNob3J0Y3V0XG4gICAgY29uc3QgaGFzaGVyID0gdGhpcy5faGFzaGVyO1xuXG4gICAgLy8gUmVzZXRcbiAgICBoYXNoZXIucmVzZXQoKTtcbiAgICBoYXNoZXIudXBkYXRlKHRoaXMuX2lLZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhpcyBITUFDIHdpdGggYSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuICAgKlxuICAgKiBAcmV0dXJuIHtITUFDfSBUaGlzIEhNQUMgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICBobWFjSGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuICAgKiAgICAgaG1hY0hhc2hlci51cGRhdGUod29yZEFycmF5KTtcbiAgICovXG4gIHVwZGF0ZShtZXNzYWdlVXBkYXRlKSB7XG4gICAgdGhpcy5faGFzaGVyLnVwZGF0ZShtZXNzYWdlVXBkYXRlKTtcblxuICAgIC8vIENoYWluYWJsZVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmFsaXplcyB0aGUgSE1BQyBjb21wdXRhdGlvbi5cbiAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cbiAgICpcbiAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciBobWFjID0gaG1hY0hhc2hlci5maW5hbGl6ZSgpO1xuICAgKiAgICAgdmFyIGhtYWMgPSBobWFjSGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XG4gICAqICAgICB2YXIgaG1hYyA9IGhtYWNIYXNoZXIuZmluYWxpemUod29yZEFycmF5KTtcbiAgICovXG4gIGZpbmFsaXplKG1lc3NhZ2VVcGRhdGUpIHtcbiAgICAvLyBTaG9ydGN1dFxuICAgIGNvbnN0IGhhc2hlciA9IHRoaXMuX2hhc2hlcjtcblxuICAgIC8vIENvbXB1dGUgSE1BQ1xuICAgIGNvbnN0IGlubmVySGFzaCA9IGhhc2hlci5maW5hbGl6ZShtZXNzYWdlVXBkYXRlKTtcbiAgICBoYXNoZXIucmVzZXQoKTtcbiAgICBjb25zdCBobWFjID0gaGFzaGVyLmZpbmFsaXplKHRoaXMuX29LZXkuY2xvbmUoKS5jb25jYXQoaW5uZXJIYXNoKSk7XG5cbiAgICByZXR1cm4gaG1hYztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgV29yZEFycmF5LFxufSBmcm9tICcuL2NvcmUuanMnO1xuXG5jb25zdCBwYXJzZUxvb3AgPSAoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApID0+IHtcbiAgY29uc3Qgd29yZHMgPSBbXTtcbiAgbGV0IG5CeXRlcyA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZTY0U3RyTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaSAlIDQpIHtcbiAgICAgIGNvbnN0IGJpdHMxID0gcmV2ZXJzZU1hcFtiYXNlNjRTdHIuY2hhckNvZGVBdChpIC0gMSldIDw8ICgoaSAlIDQpICogMik7XG4gICAgICBjb25zdCBiaXRzMiA9IHJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaSldID4+PiAoNiAtIChpICUgNCkgKiAyKTtcbiAgICAgIGNvbnN0IGJpdHNDb21iaW5lZCA9IGJpdHMxIHwgYml0czI7XG4gICAgICB3b3Jkc1tuQnl0ZXMgPj4+IDJdIHw9IGJpdHNDb21iaW5lZCA8PCAoMjQgLSAobkJ5dGVzICUgNCkgKiA4KTtcbiAgICAgIG5CeXRlcyArPSAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gV29yZEFycmF5LmNyZWF0ZSh3b3JkcywgbkJ5dGVzKTtcbn07XG5cbi8qKlxuICogQmFzZTY0IGVuY29kaW5nIHN0cmF0ZWd5LlxuICovXG5leHBvcnQgY29uc3QgQmFzZTY0ID0ge1xuICAvKipcbiAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgQmFzZTY0IHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgQmFzZTY0IHN0cmluZy5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgY29uc3QgYmFzZTY0U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkod29yZEFycmF5KTtcbiAgICovXG4gIHN0cmluZ2lmeSh3b3JkQXJyYXkpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCB7IHdvcmRzLCBzaWdCeXRlcyB9ID0gd29yZEFycmF5O1xuICAgIGNvbnN0IG1hcCA9IHRoaXMuX21hcDtcblxuICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG4gICAgd29yZEFycmF5LmNsYW1wKCk7XG5cbiAgICAvLyBDb252ZXJ0XG4gICAgY29uc3QgYmFzZTY0Q2hhcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpICs9IDMpIHtcbiAgICAgIGNvbnN0IGJ5dGUxID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcbiAgICAgIGNvbnN0IGJ5dGUyID0gKHdvcmRzWyhpICsgMSkgPj4+IDJdID4+PiAoMjQgLSAoKGkgKyAxKSAlIDQpICogOCkpICYgMHhmZjtcbiAgICAgIGNvbnN0IGJ5dGUzID0gKHdvcmRzWyhpICsgMikgPj4+IDJdID4+PiAoMjQgLSAoKGkgKyAyKSAlIDQpICogOCkpICYgMHhmZjtcblxuICAgICAgY29uc3QgdHJpcGxldCA9IChieXRlMSA8PCAxNikgfCAoYnl0ZTIgPDwgOCkgfCBieXRlMztcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IChqIDwgNCkgJiYgKGkgKyBqICogMC43NSA8IHNpZ0J5dGVzKTsgaiArPSAxKSB7XG4gICAgICAgIGJhc2U2NENoYXJzLnB1c2gobWFwLmNoYXJBdCgodHJpcGxldCA+Pj4gKDYgKiAoMyAtIGopKSkgJiAweDNmKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHBhZGRpbmdcbiAgICBjb25zdCBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xuICAgIGlmIChwYWRkaW5nQ2hhcikge1xuICAgICAgd2hpbGUgKGJhc2U2NENoYXJzLmxlbmd0aCAlIDQpIHtcbiAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChwYWRkaW5nQ2hhcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NENoYXJzLmpvaW4oJycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIEJhc2U2NCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZTY0U3RyIFRoZSBCYXNlNjQgc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICBjb25zdCB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnBhcnNlKGJhc2U2NFN0cmluZyk7XG4gICAqL1xuICBwYXJzZShiYXNlNjRTdHIpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBsZXQgYmFzZTY0U3RyTGVuZ3RoID0gYmFzZTY0U3RyLmxlbmd0aDtcbiAgICBjb25zdCBtYXAgPSB0aGlzLl9tYXA7XG4gICAgbGV0IHJldmVyc2VNYXAgPSB0aGlzLl9yZXZlcnNlTWFwO1xuXG4gICAgaWYgKCFyZXZlcnNlTWFwKSB7XG4gICAgICB0aGlzLl9yZXZlcnNlTWFwID0gW107XG4gICAgICByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWFwLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHJldmVyc2VNYXBbbWFwLmNoYXJDb2RlQXQoaildID0gajtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZ25vcmUgcGFkZGluZ1xuICAgIGNvbnN0IHBhZGRpbmdDaGFyID0gbWFwLmNoYXJBdCg2NCk7XG4gICAgaWYgKHBhZGRpbmdDaGFyKSB7XG4gICAgICBjb25zdCBwYWRkaW5nSW5kZXggPSBiYXNlNjRTdHIuaW5kZXhPZihwYWRkaW5nQ2hhcik7XG4gICAgICBpZiAocGFkZGluZ0luZGV4ICE9PSAtMSkge1xuICAgICAgICBiYXNlNjRTdHJMZW5ndGggPSBwYWRkaW5nSW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29udmVydFxuICAgIHJldHVybiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApO1xuICB9LFxuXG4gIF9tYXA6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPScsXG59O1xuIiwiaW1wb3J0IHtcbiAgV29yZEFycmF5LFxuICBIYXNoZXIsXG59IGZyb20gJy4vY29yZS5qcyc7XG5cbi8vIENvbnN0YW50cyB0YWJsZVxuY29uc3QgVCA9IFtdO1xuXG4vLyBDb21wdXRlIGNvbnN0YW50c1xuZm9yIChsZXQgaSA9IDA7IGkgPCA2NDsgaSArPSAxKSB7XG4gIFRbaV0gPSAoTWF0aC5hYnMoTWF0aC5zaW4oaSArIDEpKSAqIDB4MTAwMDAwMDAwKSB8IDA7XG59XG5cbmNvbnN0IEZGID0gKGEsIGIsIGMsIGQsIHgsIHMsIHQpID0+IHtcbiAgY29uc3QgbiA9IGEgKyAoKGIgJiBjKSB8ICh+YiAmIGQpKSArIHggKyB0O1xuICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xufTtcblxuY29uc3QgR0cgPSAoYSwgYiwgYywgZCwgeCwgcywgdCkgPT4ge1xuICBjb25zdCBuID0gYSArICgoYiAmIGQpIHwgKGMgJiB+ZCkpICsgeCArIHQ7XG4gIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XG59O1xuXG5jb25zdCBISCA9IChhLCBiLCBjLCBkLCB4LCBzLCB0KSA9PiB7XG4gIGNvbnN0IG4gPSBhICsgKGIgXiBjIF4gZCkgKyB4ICsgdDtcbiAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcbn07XG5cbmNvbnN0IElJID0gKGEsIGIsIGMsIGQsIHgsIHMsIHQpID0+IHtcbiAgY29uc3QgbiA9IGEgKyAoYyBeIChiIHwgfmQpKSArIHggKyB0O1xuICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xufTtcblxuLyoqXG4gKiBNRDUgaGFzaCBhbGdvcml0aG0uXG4gKi9cbmV4cG9ydCBjbGFzcyBNRDVBbGdvIGV4dGVuZHMgSGFzaGVyIHtcbiAgX2RvUmVzZXQoKSB7XG4gICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkoW1xuICAgICAgMHg2NzQ1MjMwMSxcbiAgICAgIDB4ZWZjZGFiODksXG4gICAgICAweDk4YmFkY2ZlLFxuICAgICAgMHgxMDMyNTQ3NixcbiAgICBdKTtcbiAgfVxuXG4gIF9kb1Byb2Nlc3NCbG9jayhNLCBvZmZzZXQpIHtcbiAgICBjb25zdCBfTSA9IE07XG5cbiAgICAvLyBTd2FwIGVuZGlhblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkgKz0gMSkge1xuICAgICAgLy8gU2hvcnRjdXRzXG4gICAgICBjb25zdCBvZmZzZXRfaSA9IG9mZnNldCArIGk7XG4gICAgICBjb25zdCBNX29mZnNldF9pID0gTVtvZmZzZXRfaV07XG5cbiAgICAgIF9NW29mZnNldF9pXSA9IChcbiAgICAgICAgKCgoTV9vZmZzZXRfaSA8PCA4KSB8IChNX29mZnNldF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZilcbiAgICAgICAgICB8ICgoKE1fb2Zmc2V0X2kgPDwgMjQpIHwgKE1fb2Zmc2V0X2kgPj4+IDgpKSAmIDB4ZmYwMGZmMDApXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFNob3J0Y3V0c1xuICAgIGNvbnN0IEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG4gICAgY29uc3QgTV9vZmZzZXRfMCA9IF9NW29mZnNldCArIDBdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzEgPSBfTVtvZmZzZXQgKyAxXTtcbiAgICBjb25zdCBNX29mZnNldF8yID0gX01bb2Zmc2V0ICsgMl07XG4gICAgY29uc3QgTV9vZmZzZXRfMyA9IF9NW29mZnNldCArIDNdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzQgPSBfTVtvZmZzZXQgKyA0XTtcbiAgICBjb25zdCBNX29mZnNldF81ID0gX01bb2Zmc2V0ICsgNV07XG4gICAgY29uc3QgTV9vZmZzZXRfNiA9IF9NW29mZnNldCArIDZdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzcgPSBfTVtvZmZzZXQgKyA3XTtcbiAgICBjb25zdCBNX29mZnNldF84ID0gX01bb2Zmc2V0ICsgOF07XG4gICAgY29uc3QgTV9vZmZzZXRfOSA9IF9NW29mZnNldCArIDldO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzEwID0gX01bb2Zmc2V0ICsgMTBdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzExID0gX01bb2Zmc2V0ICsgMTFdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzEyID0gX01bb2Zmc2V0ICsgMTJdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzEzID0gX01bb2Zmc2V0ICsgMTNdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzE0ID0gX01bb2Zmc2V0ICsgMTRdO1xuICAgIGNvbnN0IE1fb2Zmc2V0XzE1ID0gX01bb2Zmc2V0ICsgMTVdO1xuXG4gICAgLy8gV29ya2luZyB2YXJpYWxiZXNcbiAgICBsZXQgYSA9IEhbMF07XG4gICAgbGV0IGIgPSBIWzFdO1xuICAgIGxldCBjID0gSFsyXTtcbiAgICBsZXQgZCA9IEhbM107XG5cbiAgICAvLyBDb21wdXRhdGlvblxuICAgIGEgPSBGRihhLCBiLCBjLCBkLCBNX29mZnNldF8wLCA3LCBUWzBdKTtcbiAgICBkID0gRkYoZCwgYSwgYiwgYywgTV9vZmZzZXRfMSwgMTIsIFRbMV0pO1xuICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF8yLCAxNywgVFsyXSk7XG4gICAgYiA9IEZGKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzMsIDIyLCBUWzNdKTtcbiAgICBhID0gRkYoYSwgYiwgYywgZCwgTV9vZmZzZXRfNCwgNywgVFs0XSk7XG4gICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzUsIDEyLCBUWzVdKTtcbiAgICBjID0gRkYoYywgZCwgYSwgYiwgTV9vZmZzZXRfNiwgMTcsIFRbNl0pO1xuICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF83LCAyMiwgVFs3XSk7XG4gICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzgsIDcsIFRbOF0pO1xuICAgIGQgPSBGRihkLCBhLCBiLCBjLCBNX29mZnNldF85LCAxMiwgVFs5XSk7XG4gICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzEwLCAxNywgVFsxMF0pO1xuICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF8xMSwgMjIsIFRbMTFdKTtcbiAgICBhID0gRkYoYSwgYiwgYywgZCwgTV9vZmZzZXRfMTIsIDcsIFRbMTJdKTtcbiAgICBkID0gRkYoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTMsIDEyLCBUWzEzXSk7XG4gICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzE0LCAxNywgVFsxNF0pO1xuICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF8xNSwgMjIsIFRbMTVdKTtcblxuICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF8xLCA1LCBUWzE2XSk7XG4gICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzYsIDksIFRbMTddKTtcbiAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfMTEsIDE0LCBUWzE4XSk7XG4gICAgYiA9IEdHKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzAsIDIwLCBUWzE5XSk7XG4gICAgYSA9IEdHKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzUsIDUsIFRbMjBdKTtcbiAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfMTAsIDksIFRbMjFdKTtcbiAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfMTUsIDE0LCBUWzIyXSk7XG4gICAgYiA9IEdHKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzQsIDIwLCBUWzIzXSk7XG4gICAgYSA9IEdHKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzksIDUsIFRbMjRdKTtcbiAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfMTQsIDksIFRbMjVdKTtcbiAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfMywgMTQsIFRbMjZdKTtcbiAgICBiID0gR0coYiwgYywgZCwgYSwgTV9vZmZzZXRfOCwgMjAsIFRbMjddKTtcbiAgICBhID0gR0coYSwgYiwgYywgZCwgTV9vZmZzZXRfMTMsIDUsIFRbMjhdKTtcbiAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfMiwgOSwgVFsyOV0pO1xuICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBNX29mZnNldF83LCAxNCwgVFszMF0pO1xuICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF8xMiwgMjAsIFRbMzFdKTtcblxuICAgIGEgPSBISChhLCBiLCBjLCBkLCBNX29mZnNldF81LCA0LCBUWzMyXSk7XG4gICAgZCA9IEhIKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzgsIDExLCBUWzMzXSk7XG4gICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzExLCAxNiwgVFszNF0pO1xuICAgIGIgPSBISChiLCBjLCBkLCBhLCBNX29mZnNldF8xNCwgMjMsIFRbMzVdKTtcbiAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfMSwgNCwgVFszNl0pO1xuICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF80LCAxMSwgVFszN10pO1xuICAgIGMgPSBISChjLCBkLCBhLCBiLCBNX29mZnNldF83LCAxNiwgVFszOF0pO1xuICAgIGIgPSBISChiLCBjLCBkLCBhLCBNX29mZnNldF8xMCwgMjMsIFRbMzldKTtcbiAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfMTMsIDQsIFRbNDBdKTtcbiAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfMCwgMTEsIFRbNDFdKTtcbiAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfMywgMTYsIFRbNDJdKTtcbiAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfNiwgMjMsIFRbNDNdKTtcbiAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfOSwgNCwgVFs0NF0pO1xuICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF8xMiwgMTEsIFRbNDVdKTtcbiAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTUsIDE2LCBUWzQ2XSk7XG4gICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzIsIDIzLCBUWzQ3XSk7XG5cbiAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfMCwgNiwgVFs0OF0pO1xuICAgIGQgPSBJSShkLCBhLCBiLCBjLCBNX29mZnNldF83LCAxMCwgVFs0OV0pO1xuICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF8xNCwgMTUsIFRbNTBdKTtcbiAgICBiID0gSUkoYiwgYywgZCwgYSwgTV9vZmZzZXRfNSwgMjEsIFRbNTFdKTtcbiAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfMTIsIDYsIFRbNTJdKTtcbiAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfMywgMTAsIFRbNTNdKTtcbiAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTAsIDE1LCBUWzU0XSk7XG4gICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzEsIDIxLCBUWzU1XSk7XG4gICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzgsIDYsIFRbNTZdKTtcbiAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTUsIDEwLCBUWzU3XSk7XG4gICAgYyA9IElJKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzYsIDE1LCBUWzU4XSk7XG4gICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzEzLCAyMSwgVFs1OV0pO1xuICAgIGEgPSBJSShhLCBiLCBjLCBkLCBNX29mZnNldF80LCA2LCBUWzYwXSk7XG4gICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzExLCAxMCwgVFs2MV0pO1xuICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF8yLCAxNSwgVFs2Ml0pO1xuICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF85LCAyMSwgVFs2M10pO1xuXG4gICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcbiAgICBIWzBdID0gKEhbMF0gKyBhKSB8IDA7XG4gICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuICAgIEhbMl0gPSAoSFsyXSArIGMpIHwgMDtcbiAgICBIWzNdID0gKEhbM10gKyBkKSB8IDA7XG4gIH1cbiAgLyogZXNsaW50LWVuc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuICBfZG9GaW5hbGl6ZSgpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YTtcbiAgICBjb25zdCBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG4gICAgY29uc3QgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuICAgIGNvbnN0IG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG4gICAgLy8gQWRkIHBhZGRpbmdcbiAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIChuQml0c0xlZnQgJSAzMikpO1xuXG4gICAgY29uc3QgbkJpdHNUb3RhbEggPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG4gICAgY29uc3QgbkJpdHNUb3RhbEwgPSBuQml0c1RvdGFsO1xuICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gKFxuICAgICAgKCgobkJpdHNUb3RhbEggPDwgOCkgfCAobkJpdHNUb3RhbEggPj4+IDI0KSkgJiAweDAwZmYwMGZmKVxuICAgICAgICB8ICgoKG5CaXRzVG90YWxIIDw8IDI0KSB8IChuQml0c1RvdGFsSCA+Pj4gOCkpICYgMHhmZjAwZmYwMClcbiAgICApO1xuICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gKFxuICAgICAgKCgobkJpdHNUb3RhbEwgPDwgOCkgfCAobkJpdHNUb3RhbEwgPj4+IDI0KSkgJiAweDAwZmYwMGZmKVxuICAgICAgICB8ICgoKG5CaXRzVG90YWxMIDw8IDI0KSB8IChuQml0c1RvdGFsTCA+Pj4gOCkpICYgMHhmZjAwZmYwMClcbiAgICApO1xuXG4gICAgZGF0YS5zaWdCeXRlcyA9IChkYXRhV29yZHMubGVuZ3RoICsgMSkgKiA0O1xuXG4gICAgLy8gSGFzaCBmaW5hbCBibG9ja3NcbiAgICB0aGlzLl9wcm9jZXNzKCk7XG5cbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBoYXNoID0gdGhpcy5faGFzaDtcbiAgICBjb25zdCBIID0gaGFzaC53b3JkcztcblxuICAgIC8vIFN3YXAgZW5kaWFuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgIC8vIFNob3J0Y3V0XG4gICAgICBjb25zdCBIX2kgPSBIW2ldO1xuXG4gICAgICBIW2ldID0gKCgoSF9pIDw8IDgpIHwgKEhfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpXG4gICAgICAgIHwgKCgoSF9pIDw8IDI0KSB8IChIX2kgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBjbG9uZSA9IHN1cGVyLmNsb25lLmNhbGwodGhpcyk7XG4gICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cbiAqXG4gKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuICpcbiAqIEBzdGF0aWNcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLk1ENSgnbWVzc2FnZScpO1xuICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuTUQ1KHdvcmRBcnJheSk7XG4gKi9cbmV4cG9ydCBjb25zdCBNRDUgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihNRDVBbGdvKTtcblxuLyoqXG4gKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG4gKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cbiAqXG4gKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuICpcbiAqIEBzdGF0aWNcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNNRDUobWVzc2FnZSwga2V5KTtcbiAqL1xuZXhwb3J0IGNvbnN0IEhtYWNNRDUgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoTUQ1QWxnbyk7XG4iLCIvKiogQHByZXNlcnZlXG4oYykgMjAxMiBieSBDw6lkcmljIE1lc25pbC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZFxucHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICAgIC0gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2ZcbiAgICBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gICAgLSBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdFxuICAgIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzXG4gICAgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG5USElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1Ncbk9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SXG5DT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG5EQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG5EQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbldIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTllcbldBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHtcbiAgV29yZEFycmF5LFxuICBIYXNoZXIsXG59IGZyb20gJy4vY29yZS5qcyc7XG5cbi8vIENvbnN0YW50cyB0YWJsZVxuY29uc3QgX3psID0gV29yZEFycmF5LmNyZWF0ZShbXG4gIDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsXG4gIDcsIDQsIDEzLCAxLCAxMCwgNiwgMTUsIDMsIDEyLCAwLCA5LCA1LCAyLCAxNCwgMTEsIDgsXG4gIDMsIDEwLCAxNCwgNCwgOSwgMTUsIDgsIDEsIDIsIDcsIDAsIDYsIDEzLCAxMSwgNSwgMTIsXG4gIDEsIDksIDExLCAxMCwgMCwgOCwgMTIsIDQsIDEzLCAzLCA3LCAxNSwgMTQsIDUsIDYsIDIsXG4gIDQsIDAsIDUsIDksIDcsIDEyLCAyLCAxMCwgMTQsIDEsIDMsIDgsIDExLCA2LCAxNSwgMTNdKTtcbmNvbnN0IF96ciA9IFdvcmRBcnJheS5jcmVhdGUoW1xuICA1LCAxNCwgNywgMCwgOSwgMiwgMTEsIDQsIDEzLCA2LCAxNSwgOCwgMSwgMTAsIDMsIDEyLFxuICA2LCAxMSwgMywgNywgMCwgMTMsIDUsIDEwLCAxNCwgMTUsIDgsIDEyLCA0LCA5LCAxLCAyLFxuICAxNSwgNSwgMSwgMywgNywgMTQsIDYsIDksIDExLCA4LCAxMiwgMiwgMTAsIDAsIDQsIDEzLFxuICA4LCA2LCA0LCAxLCAzLCAxMSwgMTUsIDAsIDUsIDEyLCAyLCAxMywgOSwgNywgMTAsIDE0LFxuICAxMiwgMTUsIDEwLCA0LCAxLCA1LCA4LCA3LCA2LCAyLCAxMywgMTQsIDAsIDMsIDksIDExXSk7XG5jb25zdCBfc2wgPSBXb3JkQXJyYXkuY3JlYXRlKFtcbiAgMTEsIDE0LCAxNSwgMTIsIDUsIDgsIDcsIDksIDExLCAxMywgMTQsIDE1LCA2LCA3LCA5LCA4LFxuICA3LCA2LCA4LCAxMywgMTEsIDksIDcsIDE1LCA3LCAxMiwgMTUsIDksIDExLCA3LCAxMywgMTIsXG4gIDExLCAxMywgNiwgNywgMTQsIDksIDEzLCAxNSwgMTQsIDgsIDEzLCA2LCA1LCAxMiwgNywgNSxcbiAgMTEsIDEyLCAxNCwgMTUsIDE0LCAxNSwgOSwgOCwgOSwgMTQsIDUsIDYsIDgsIDYsIDUsIDEyLFxuICA5LCAxNSwgNSwgMTEsIDYsIDgsIDEzLCAxMiwgNSwgMTIsIDEzLCAxNCwgMTEsIDgsIDUsIDZdKTtcbmNvbnN0IF9zciA9IFdvcmRBcnJheS5jcmVhdGUoW1xuICA4LCA5LCA5LCAxMSwgMTMsIDE1LCAxNSwgNSwgNywgNywgOCwgMTEsIDE0LCAxNCwgMTIsIDYsXG4gIDksIDEzLCAxNSwgNywgMTIsIDgsIDksIDExLCA3LCA3LCAxMiwgNywgNiwgMTUsIDEzLCAxMSxcbiAgOSwgNywgMTUsIDExLCA4LCA2LCA2LCAxNCwgMTIsIDEzLCA1LCAxNCwgMTMsIDEzLCA3LCA1LFxuICAxNSwgNSwgOCwgMTEsIDE0LCAxNCwgNiwgMTQsIDYsIDksIDEyLCA5LCAxMiwgNSwgMTUsIDgsXG4gIDgsIDUsIDEyLCA5LCAxMiwgNSwgMTQsIDYsIDgsIDEzLCA2LCA1LCAxNSwgMTMsIDExLCAxMV0pO1xuXG5jb25zdCBfaGwgPSBXb3JkQXJyYXkuY3JlYXRlKFsweDAwMDAwMDAwLCAweDVBODI3OTk5LCAweDZFRDlFQkExLCAweDhGMUJCQ0RDLCAweEE5NTNGRDRFXSk7XG5jb25zdCBfaHIgPSBXb3JkQXJyYXkuY3JlYXRlKFsweDUwQTI4QkU2LCAweDVDNEREMTI0LCAweDZENzAzRUYzLCAweDdBNkQ3NkU5LCAweDAwMDAwMDAwXSk7XG5cbmNvbnN0IGYxID0gKHgsIHksIHopID0+ICh4KSBeICh5KSBeICh6KTtcblxuY29uc3QgZjIgPSAoeCwgeSwgeikgPT4gKCh4KSAmICh5KSkgfCAoKH54KSAmICh6KSk7XG5cbmNvbnN0IGYzID0gKHgsIHksIHopID0+ICgoeCkgfCAofih5KSkpIF4gKHopO1xuXG5jb25zdCBmNCA9ICh4LCB5LCB6KSA9PiAoKHgpICYgKHopKSB8ICgoeSkgJiAofih6KSkpO1xuXG5jb25zdCBmNSA9ICh4LCB5LCB6KSA9PiAoeCkgXiAoKHkpIHwgKH4oeikpKTtcblxuY29uc3Qgcm90bCA9ICh4LCBuKSA9PiAoeCA8PCBuKSB8ICh4ID4+PiAoMzIgLSBuKSk7XG5cbi8qKlxuICogUklQRU1EMTYwIGhhc2ggYWxnb3JpdGhtLlxuICovXG5leHBvcnQgY2xhc3MgUklQRU1EMTYwQWxnbyBleHRlbmRzIEhhc2hlciB7XG4gIF9kb1Jlc2V0KCkge1xuICAgIHRoaXMuX2hhc2ggPSBXb3JkQXJyYXkuY3JlYXRlKFsweDY3NDUyMzAxLCAweEVGQ0RBQjg5LCAweDk4QkFEQ0ZFLCAweDEwMzI1NDc2LCAweEMzRDJFMUYwXSk7XG4gIH1cblxuICBfZG9Qcm9jZXNzQmxvY2soTSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgX00gPSBNO1xuXG4gICAgLy8gU3dhcCBlbmRpYW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpICs9IDEpIHtcbiAgICAgIC8vIFNob3J0Y3V0c1xuICAgICAgY29uc3Qgb2Zmc2V0X2kgPSBvZmZzZXQgKyBpO1xuICAgICAgY29uc3QgTV9vZmZzZXRfaSA9IF9NW29mZnNldF9pXTtcblxuICAgICAgLy8gU3dhcFxuICAgICAgX01bb2Zmc2V0X2ldID0gKFxuICAgICAgICAoKChNX29mZnNldF9pIDw8IDgpIHwgKE1fb2Zmc2V0X2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKVxuICAgICAgICAgIHwgKCgoTV9vZmZzZXRfaSA8PCAyNCkgfCAoTV9vZmZzZXRfaSA+Pj4gOCkpICYgMHhmZjAwZmYwMClcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIFNob3J0Y3V0XG4gICAgY29uc3QgSCA9IHRoaXMuX2hhc2gud29yZHM7XG4gICAgY29uc3QgaGwgPSBfaGwud29yZHM7XG4gICAgY29uc3QgaHIgPSBfaHIud29yZHM7XG4gICAgY29uc3QgemwgPSBfemwud29yZHM7XG4gICAgY29uc3QgenIgPSBfenIud29yZHM7XG4gICAgY29uc3Qgc2wgPSBfc2wud29yZHM7XG4gICAgY29uc3Qgc3IgPSBfc3Iud29yZHM7XG5cbiAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuICAgIGxldCBhbCA9IEhbMF07XG4gICAgbGV0IGJsID0gSFsxXTtcbiAgICBsZXQgY2wgPSBIWzJdO1xuICAgIGxldCBkbCA9IEhbM107XG4gICAgbGV0IGVsID0gSFs0XTtcbiAgICBsZXQgYXIgPSBIWzBdO1xuICAgIGxldCBiciA9IEhbMV07XG4gICAgbGV0IGNyID0gSFsyXTtcbiAgICBsZXQgZHIgPSBIWzNdO1xuICAgIGxldCBlciA9IEhbNF07XG5cbiAgICAvLyBDb21wdXRhdGlvblxuICAgIGxldCB0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkgKz0gMSkge1xuICAgICAgdCA9IChhbCArIF9NW29mZnNldCArIHpsW2ldXSkgfCAwO1xuICAgICAgaWYgKGkgPCAxNikge1xuICAgICAgICB0ICs9IGYxKGJsLCBjbCwgZGwpICsgaGxbMF07XG4gICAgICB9IGVsc2UgaWYgKGkgPCAzMikge1xuICAgICAgICB0ICs9IGYyKGJsLCBjbCwgZGwpICsgaGxbMV07XG4gICAgICB9IGVsc2UgaWYgKGkgPCA0OCkge1xuICAgICAgICB0ICs9IGYzKGJsLCBjbCwgZGwpICsgaGxbMl07XG4gICAgICB9IGVsc2UgaWYgKGkgPCA2NCkge1xuICAgICAgICB0ICs9IGY0KGJsLCBjbCwgZGwpICsgaGxbM107XG4gICAgICB9IGVsc2UgeyAvLyBpZiAoaTw4MCkge1xuICAgICAgICB0ICs9IGY1KGJsLCBjbCwgZGwpICsgaGxbNF07XG4gICAgICB9XG4gICAgICB0IHw9IDA7XG4gICAgICB0ID0gcm90bCh0LCBzbFtpXSk7XG4gICAgICB0ID0gKHQgKyBlbCkgfCAwO1xuICAgICAgYWwgPSBlbDtcbiAgICAgIGVsID0gZGw7XG4gICAgICBkbCA9IHJvdGwoY2wsIDEwKTtcbiAgICAgIGNsID0gYmw7XG4gICAgICBibCA9IHQ7XG5cbiAgICAgIHQgPSAoYXIgKyBfTVtvZmZzZXQgKyB6cltpXV0pIHwgMDtcbiAgICAgIGlmIChpIDwgMTYpIHtcbiAgICAgICAgdCArPSBmNShiciwgY3IsIGRyKSArIGhyWzBdO1xuICAgICAgfSBlbHNlIGlmIChpIDwgMzIpIHtcbiAgICAgICAgdCArPSBmNChiciwgY3IsIGRyKSArIGhyWzFdO1xuICAgICAgfSBlbHNlIGlmIChpIDwgNDgpIHtcbiAgICAgICAgdCArPSBmMyhiciwgY3IsIGRyKSArIGhyWzJdO1xuICAgICAgfSBlbHNlIGlmIChpIDwgNjQpIHtcbiAgICAgICAgdCArPSBmMihiciwgY3IsIGRyKSArIGhyWzNdO1xuICAgICAgfSBlbHNlIHsgLy8gaWYgKGk8ODApIHtcbiAgICAgICAgdCArPSBmMShiciwgY3IsIGRyKSArIGhyWzRdO1xuICAgICAgfVxuICAgICAgdCB8PSAwO1xuICAgICAgdCA9IHJvdGwodCwgc3JbaV0pO1xuICAgICAgdCA9ICh0ICsgZXIpIHwgMDtcbiAgICAgIGFyID0gZXI7XG4gICAgICBlciA9IGRyO1xuICAgICAgZHIgPSByb3RsKGNyLCAxMCk7XG4gICAgICBjciA9IGJyO1xuICAgICAgYnIgPSB0O1xuICAgIH1cbiAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuICAgIHQgPSAoSFsxXSArIGNsICsgZHIpIHwgMDtcbiAgICBIWzFdID0gKEhbMl0gKyBkbCArIGVyKSB8IDA7XG4gICAgSFsyXSA9IChIWzNdICsgZWwgKyBhcikgfCAwO1xuICAgIEhbM10gPSAoSFs0XSArIGFsICsgYnIpIHwgMDtcbiAgICBIWzRdID0gKEhbMF0gKyBibCArIGNyKSB8IDA7XG4gICAgSFswXSA9IHQ7XG4gIH1cblxuICBfZG9GaW5hbGl6ZSgpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YTtcbiAgICBjb25zdCBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG4gICAgY29uc3QgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuICAgIGNvbnN0IG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG4gICAgLy8gQWRkIHBhZGRpbmdcbiAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIChuQml0c0xlZnQgJSAzMikpO1xuICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gKFxuICAgICAgKCgobkJpdHNUb3RhbCA8PCA4KSB8IChuQml0c1RvdGFsID4+PiAyNCkpICYgMHgwMGZmMDBmZilcbiAgICAgICAgfCAoKChuQml0c1RvdGFsIDw8IDI0KSB8IChuQml0c1RvdGFsID4+PiA4KSkgJiAweGZmMDBmZjAwKVxuICAgICk7XG4gICAgZGF0YS5zaWdCeXRlcyA9IChkYXRhV29yZHMubGVuZ3RoICsgMSkgKiA0O1xuXG4gICAgLy8gSGFzaCBmaW5hbCBibG9ja3NcbiAgICB0aGlzLl9wcm9jZXNzKCk7XG5cbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBoYXNoID0gdGhpcy5faGFzaDtcbiAgICBjb25zdCBIID0gaGFzaC53b3JkcztcblxuICAgIC8vIFN3YXAgZW5kaWFuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICAgIC8vIFNob3J0Y3V0XG4gICAgICBjb25zdCBIX2kgPSBIW2ldO1xuXG4gICAgICAvLyBTd2FwXG4gICAgICBIW2ldID0gKCgoSF9pIDw8IDgpIHwgKEhfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpXG4gICAgICAgIHwgKCgoSF9pIDw8IDI0KSB8IChIX2kgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBjbG9uZSA9IHN1cGVyLmNsb25lLmNhbGwodGhpcyk7XG4gICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cbiAqXG4gKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuICpcbiAqIEBzdGF0aWNcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlJJUEVNRDE2MCgnbWVzc2FnZScpO1xuICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuUklQRU1EMTYwKHdvcmRBcnJheSk7XG4gKi9cbmV4cG9ydCBjb25zdCBSSVBFTUQxNjAgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihSSVBFTUQxNjBBbGdvKTtcblxuLyoqXG4gKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG4gKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cbiAqXG4gKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuICpcbiAqIEBzdGF0aWNcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNSSVBFTUQxNjAobWVzc2FnZSwga2V5KTtcbiAqL1xuZXhwb3J0IGNvbnN0IEhtYWNSSVBFTUQxNjAgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoUklQRU1EMTYwQWxnbyk7XG4iLCJpbXBvcnQge1xuICBXb3JkQXJyYXksXG4gIEhhc2hlcixcbn0gZnJvbSAnLi9jb3JlLmpzJztcblxuLy8gSW5pdGlhbGl6YXRpb24gYW5kIHJvdW5kIGNvbnN0YW50cyB0YWJsZXNcbmNvbnN0IEggPSBbXTtcbmNvbnN0IEsgPSBbXTtcblxuLy8gQ29tcHV0ZSBjb25zdGFudHNcbmNvbnN0IGlzUHJpbWUgPSAobikgPT4ge1xuICBjb25zdCBzcXJ0TiA9IE1hdGguc3FydChuKTtcbiAgZm9yIChsZXQgZmFjdG9yID0gMjsgZmFjdG9yIDw9IHNxcnROOyBmYWN0b3IgKz0gMSkge1xuICAgIGlmICghKG4gJSBmYWN0b3IpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBnZXRGcmFjdGlvbmFsQml0cyA9IG4gPT4gKChuIC0gKG4gfCAwKSkgKiAweDEwMDAwMDAwMCkgfCAwO1xuXG5sZXQgbiA9IDI7XG5sZXQgblByaW1lID0gMDtcbndoaWxlIChuUHJpbWUgPCA2NCkge1xuICBpZiAoaXNQcmltZShuKSkge1xuICAgIGlmIChuUHJpbWUgPCA4KSB7XG4gICAgICBIW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhuICoqICgxIC8gMikpO1xuICAgIH1cbiAgICBLW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhuICoqICgxIC8gMykpO1xuXG4gICAgblByaW1lICs9IDE7XG4gIH1cblxuICBuICs9IDE7XG59XG5cbi8vIFJldXNhYmxlIG9iamVjdFxuY29uc3QgVyA9IFtdO1xuXG4vKipcbiAqIFNIQS0yNTYgaGFzaCBhbGdvcml0aG0uXG4gKi9cbmV4cG9ydCBjbGFzcyBTSEEyNTZBbGdvIGV4dGVuZHMgSGFzaGVyIHtcbiAgX2RvUmVzZXQoKSB7XG4gICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkoSC5zbGljZSgwKSk7XG4gIH1cblxuICBfZG9Qcm9jZXNzQmxvY2soTSwgb2Zmc2V0KSB7XG4gICAgLy8gU2hvcnRjdXRcbiAgICBjb25zdCBfSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cbiAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuICAgIGxldCBhID0gX0hbMF07XG4gICAgbGV0IGIgPSBfSFsxXTtcbiAgICBsZXQgYyA9IF9IWzJdO1xuICAgIGxldCBkID0gX0hbM107XG4gICAgbGV0IGUgPSBfSFs0XTtcbiAgICBsZXQgZiA9IF9IWzVdO1xuICAgIGxldCBnID0gX0hbNl07XG4gICAgbGV0IGggPSBfSFs3XTtcblxuICAgIC8vIENvbXB1dGF0aW9uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2NDsgaSArPSAxKSB7XG4gICAgICBpZiAoaSA8IDE2KSB7XG4gICAgICAgIFdbaV0gPSBNW29mZnNldCArIGldIHwgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGdhbW1hMHggPSBXW2kgLSAxNV07XG4gICAgICAgIGNvbnN0IGdhbW1hMCA9ICgoZ2FtbWEweCA8PCAyNSkgfCAoZ2FtbWEweCA+Pj4gNykpXG4gICAgICAgICAgXiAoKGdhbW1hMHggPDwgMTQpIHwgKGdhbW1hMHggPj4+IDE4KSlcbiAgICAgICAgICBeIChnYW1tYTB4ID4+PiAzKTtcblxuICAgICAgICBjb25zdCBnYW1tYTF4ID0gV1tpIC0gMl07XG4gICAgICAgIGNvbnN0IGdhbW1hMSA9ICgoZ2FtbWExeCA8PCAxNSkgfCAoZ2FtbWExeCA+Pj4gMTcpKVxuICAgICAgICAgIF4gKChnYW1tYTF4IDw8IDEzKSB8IChnYW1tYTF4ID4+PiAxOSkpXG4gICAgICAgICAgXiAoZ2FtbWExeCA+Pj4gMTApO1xuXG4gICAgICAgIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2ggPSAoZSAmIGYpIF4gKH5lICYgZyk7XG4gICAgICBjb25zdCBtYWogPSAoYSAmIGIpIF4gKGEgJiBjKSBeIChiICYgYyk7XG5cbiAgICAgIGNvbnN0IHNpZ21hMCA9ICgoYSA8PCAzMCkgfCAoYSA+Pj4gMikpIF4gKChhIDw8IDE5KSB8IChhID4+PiAxMykpIF4gKChhIDw8IDEwKSB8IChhID4+PiAyMikpO1xuICAgICAgY29uc3Qgc2lnbWExID0gKChlIDw8IDI2KSB8IChlID4+PiA2KSkgXiAoKGUgPDwgMjEpIHwgKGUgPj4+IDExKSkgXiAoKGUgPDwgNykgfCAoZSA+Pj4gMjUpKTtcblxuICAgICAgY29uc3QgdDEgPSBoICsgc2lnbWExICsgY2ggKyBLW2ldICsgV1tpXTtcbiAgICAgIGNvbnN0IHQyID0gc2lnbWEwICsgbWFqO1xuXG4gICAgICBoID0gZztcbiAgICAgIGcgPSBmO1xuICAgICAgZiA9IGU7XG4gICAgICBlID0gKGQgKyB0MSkgfCAwO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gYjtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9ICh0MSArIHQyKSB8IDA7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcbiAgICBfSFswXSA9IChfSFswXSArIGEpIHwgMDtcbiAgICBfSFsxXSA9IChfSFsxXSArIGIpIHwgMDtcbiAgICBfSFsyXSA9IChfSFsyXSArIGMpIHwgMDtcbiAgICBfSFszXSA9IChfSFszXSArIGQpIHwgMDtcbiAgICBfSFs0XSA9IChfSFs0XSArIGUpIHwgMDtcbiAgICBfSFs1XSA9IChfSFs1XSArIGYpIHwgMDtcbiAgICBfSFs2XSA9IChfSFs2XSArIGcpIHwgMDtcbiAgICBfSFs3XSA9IChfSFs3XSArIGgpIHwgMDtcbiAgfVxuXG4gIF9kb0ZpbmFsaXplKCkge1xuICAgIC8vIFNob3J0Y3V0c1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhO1xuICAgIGNvbnN0IGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cbiAgICBjb25zdCBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG4gICAgY29uc3QgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cbiAgICAvLyBBZGQgcGFkZGluZ1xuICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gKG5CaXRzTGVmdCAlIDMyKSk7XG4gICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG4gICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNV0gPSBuQml0c1RvdGFsO1xuICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG4gICAgdGhpcy5fcHJvY2VzcygpO1xuXG4gICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcbiAgICByZXR1cm4gdGhpcy5faGFzaDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGNsb25lID0gc3VwZXIuY2xvbmUuY2FsbCh0aGlzKTtcbiAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuICAgIHJldHVybiBjbG9uZTtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuICpcbiAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuICpcbiAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG4gKlxuICogQHN0YXRpY1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KCdtZXNzYWdlJyk7XG4gKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYod29yZEFycmF5KTtcbiAqL1xuZXhwb3J0IGNvbnN0IFNIQTI1NiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTI1NkFsZ28pO1xuXG4vKipcbiAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cbiAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuICpcbiAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG4gKlxuICogQHN0YXRpY1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTI1NihtZXNzYWdlLCBrZXkpO1xuICovXG5leHBvcnQgY29uc3QgSG1hY1NIQTI1NiA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEEyNTZBbGdvKTtcbiIsImltcG9ydCB7XG4gIFdvcmRBcnJheSxcbiAgSGFzaGVyLFxufSBmcm9tICcuL2NvcmUuanMnO1xuaW1wb3J0IHsgWDY0V29yZCB9IGZyb20gJy4veDY0LWNvcmUuanMnO1xuXG4vLyBDb25zdGFudHMgdGFibGVzXG5jb25zdCBSSE9fT0ZGU0VUUyA9IFtdO1xuY29uc3QgUElfSU5ERVhFUyA9IFtdO1xuY29uc3QgUk9VTkRfQ09OU1RBTlRTID0gW107XG5cbi8vIENvbXB1dGUgQ29uc3RhbnRzXG4vLyBDb21wdXRlIHJobyBvZmZzZXQgY29uc3RhbnRzXG5sZXQgX3ggPSAxO1xubGV0IF95ID0gMDtcbmZvciAobGV0IHQgPSAwOyB0IDwgMjQ7IHQgKz0gMSkge1xuICBSSE9fT0ZGU0VUU1tfeCArIDUgKiBfeV0gPSAoKHQgKyAxKSAqICh0ICsgMikgLyAyKSAlIDY0O1xuXG4gIGNvbnN0IG5ld1ggPSBfeSAlIDU7XG4gIGNvbnN0IG5ld1kgPSAoMiAqIF94ICsgMyAqIF95KSAlIDU7XG4gIF94ID0gbmV3WDtcbiAgX3kgPSBuZXdZO1xufVxuXG4vLyBDb21wdXRlIHBpIGluZGV4IGNvbnN0YW50c1xuZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4ICs9IDEpIHtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCA1OyB5ICs9IDEpIHtcbiAgICBQSV9JTkRFWEVTW3ggKyA1ICogeV0gPSB5ICsgKCgyICogeCArIDMgKiB5KSAlIDUpICogNTtcbiAgfVxufVxuXG4vLyBDb21wdXRlIHJvdW5kIGNvbnN0YW50c1xubGV0IExGU1IgPSAweDAxO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSArPSAxKSB7XG4gIGxldCByb3VuZENvbnN0YW50TXN3ID0gMDtcbiAgbGV0IHJvdW5kQ29uc3RhbnRMc3cgPSAwO1xuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgNzsgaiArPSAxKSB7XG4gICAgaWYgKExGU1IgJiAweDAxKSB7XG4gICAgICBjb25zdCBiaXRQb3NpdGlvbiA9ICgxIDw8IGopIC0gMTtcbiAgICAgIGlmIChiaXRQb3NpdGlvbiA8IDMyKSB7XG4gICAgICAgIHJvdW5kQ29uc3RhbnRMc3cgXj0gMSA8PCBiaXRQb3NpdGlvbjtcbiAgICAgIH0gZWxzZSAvKiBpZiAoYml0UG9zaXRpb24gPj0gMzIpICovIHtcbiAgICAgICAgcm91bmRDb25zdGFudE1zdyBePSAxIDw8IChiaXRQb3NpdGlvbiAtIDMyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb21wdXRlIG5leHQgTEZTUlxuICAgIGlmIChMRlNSICYgMHg4MCkge1xuICAgICAgLy8gUHJpbWl0aXZlIHBvbHlub21pYWwgb3ZlciBHRigyKTogeF44ICsgeF42ICsgeF41ICsgeF40ICsgMVxuICAgICAgTEZTUiA9IChMRlNSIDw8IDEpIF4gMHg3MTtcbiAgICB9IGVsc2Uge1xuICAgICAgTEZTUiA8PD0gMTtcbiAgICB9XG4gIH1cblxuICBST1VORF9DT05TVEFOVFNbaV0gPSBYNjRXb3JkLmNyZWF0ZShyb3VuZENvbnN0YW50TXN3LCByb3VuZENvbnN0YW50THN3KTtcbn1cblxuLy8gUmV1c2FibGUgb2JqZWN0cyBmb3IgdGVtcG9yYXJ5IHZhbHVlc1xuY29uc3QgVCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSArPSAxKSB7XG4gIFRbaV0gPSBYNjRXb3JkLmNyZWF0ZSgpO1xufVxuXG4vKipcbiAqIFNIQS0zIGhhc2ggYWxnb3JpdGhtLlxuICovXG5leHBvcnQgY2xhc3MgU0hBM0FsZ28gZXh0ZW5kcyBIYXNoZXIge1xuICBjb25zdHJ1Y3RvcihjZmcpIHtcbiAgICAvKipcbiAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gb3V0cHV0TGVuZ3RoXG4gICAgICogICBUaGUgZGVzaXJlZCBudW1iZXIgb2YgYml0cyBpbiB0aGUgb3V0cHV0IGhhc2guXG4gICAgICogICBPbmx5IHZhbHVlcyBwZXJtaXR0ZWQgYXJlOiAyMjQsIDI1NiwgMzg0LCA1MTIuXG4gICAgICogICBEZWZhdWx0OiA1MTJcbiAgICAgKi9cbiAgICBzdXBlcihPYmplY3QuYXNzaWduKFxuICAgICAgeyBvdXRwdXRMZW5ndGg6IDUxMiB9LFxuICAgICAgY2ZnLFxuICAgICkpO1xuICB9XG5cbiAgX2RvUmVzZXQoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBbXTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU7IGkgKz0gMSkge1xuICAgICAgc3RhdGVbaV0gPSBuZXcgWDY0V29yZCgpO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tTaXplID0gKDE2MDAgLSAyICogdGhpcy5jZmcub3V0cHV0TGVuZ3RoKSAvIDMyO1xuICB9XG5cbiAgX2RvUHJvY2Vzc0Jsb2NrKE0sIG9mZnNldCkge1xuICAgIC8vIFNob3J0Y3V0c1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgY29uc3QgbkJsb2NrU2l6ZUxhbmVzID0gdGhpcy5ibG9ja1NpemUgLyAyO1xuXG4gICAgLy8gQWJzb3JiXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuQmxvY2tTaXplTGFuZXM7IGkgKz0gMSkge1xuICAgICAgLy8gU2hvcnRjdXRzXG4gICAgICBsZXQgTTJpID0gTVtvZmZzZXQgKyAyICogaV07XG4gICAgICBsZXQgTTJpMSA9IE1bb2Zmc2V0ICsgMiAqIGkgKyAxXTtcblxuICAgICAgLy8gU3dhcCBlbmRpYW5cbiAgICAgIE0yaSA9ICgoKE0yaSA8PCA4KSB8IChNMmkgPj4+IDI0KSkgJiAweDAwZmYwMGZmKVxuICAgICAgICB8ICgoKE0yaSA8PCAyNCkgfCAoTTJpID4+PiA4KSkgJiAweGZmMDBmZjAwKTtcbiAgICAgIE0yaTEgPSAoKChNMmkxIDw8IDgpIHwgKE0yaTEgPj4+IDI0KSkgJiAweDAwZmYwMGZmKVxuICAgICAgICB8ICgoKE0yaTEgPDwgMjQpIHwgKE0yaTEgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xuXG4gICAgICAvLyBBYnNvcmIgbWVzc2FnZSBpbnRvIHN0YXRlXG4gICAgICBjb25zdCBsYW5lID0gc3RhdGVbaV07XG4gICAgICBsYW5lLmhpZ2ggXj0gTTJpMTtcbiAgICAgIGxhbmUubG93IF49IE0yaTtcbiAgICB9XG5cbiAgICAvLyBSb3VuZHNcbiAgICBmb3IgKGxldCByb3VuZCA9IDA7IHJvdW5kIDwgMjQ7IHJvdW5kICs9IDEpIHtcbiAgICAgIC8vIFRoZXRhXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHggKz0gMSkge1xuICAgICAgICAvLyBNaXggY29sdW1uIGxhbmVzXG4gICAgICAgIGxldCB0TXN3ID0gMDtcbiAgICAgICAgbGV0IHRMc3cgPSAwO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDU7IHkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGxhbmUgPSBzdGF0ZVt4ICsgNSAqIHldO1xuICAgICAgICAgIHRNc3cgXj0gbGFuZS5oaWdoO1xuICAgICAgICAgIHRMc3cgXj0gbGFuZS5sb3c7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZW1wb3JhcnkgdmFsdWVzXG4gICAgICAgIGNvbnN0IFR4ID0gVFt4XTtcbiAgICAgICAgVHguaGlnaCA9IHRNc3c7XG4gICAgICAgIFR4LmxvdyA9IHRMc3c7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHggKz0gMSkge1xuICAgICAgICAvLyBTaG9ydGN1dHNcbiAgICAgICAgY29uc3QgVHg0ID0gVFsoeCArIDQpICUgNV07XG4gICAgICAgIGNvbnN0IFR4MSA9IFRbKHggKyAxKSAlIDVdO1xuICAgICAgICBjb25zdCBUeDFNc3cgPSBUeDEuaGlnaDtcbiAgICAgICAgY29uc3QgVHgxTHN3ID0gVHgxLmxvdztcblxuICAgICAgICAvLyBNaXggc3Vycm91bmRpbmcgY29sdW1uc1xuICAgICAgICBjb25zdCB0TXN3ID0gVHg0LmhpZ2ggXiAoKFR4MU1zdyA8PCAxKSB8IChUeDFMc3cgPj4+IDMxKSk7XG4gICAgICAgIGNvbnN0IHRMc3cgPSBUeDQubG93IF4gKChUeDFMc3cgPDwgMSkgfCAoVHgxTXN3ID4+PiAzMSkpO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDU7IHkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGxhbmUgPSBzdGF0ZVt4ICsgNSAqIHldO1xuICAgICAgICAgIGxhbmUuaGlnaCBePSB0TXN3O1xuICAgICAgICAgIGxhbmUubG93IF49IHRMc3c7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmhvIFBpXG4gICAgICBmb3IgKGxldCBsYW5lSW5kZXggPSAxOyBsYW5lSW5kZXggPCAyNTsgbGFuZUluZGV4ICs9IDEpIHtcbiAgICAgICAgbGV0IHRNc3c7XG4gICAgICAgIGxldCB0THN3O1xuXG4gICAgICAgIC8vIFNob3J0Y3V0c1xuICAgICAgICBjb25zdCBsYW5lID0gc3RhdGVbbGFuZUluZGV4XTtcbiAgICAgICAgY29uc3QgbGFuZU1zdyA9IGxhbmUuaGlnaDtcbiAgICAgICAgY29uc3QgbGFuZUxzdyA9IGxhbmUubG93O1xuICAgICAgICBjb25zdCByaG9PZmZzZXQgPSBSSE9fT0ZGU0VUU1tsYW5lSW5kZXhdO1xuXG4gICAgICAgIC8vIFJvdGF0ZSBsYW5lc1xuICAgICAgICBpZiAocmhvT2Zmc2V0IDwgMzIpIHtcbiAgICAgICAgICB0TXN3ID0gKGxhbmVNc3cgPDwgcmhvT2Zmc2V0KSB8IChsYW5lTHN3ID4+PiAoMzIgLSByaG9PZmZzZXQpKTtcbiAgICAgICAgICB0THN3ID0gKGxhbmVMc3cgPDwgcmhvT2Zmc2V0KSB8IChsYW5lTXN3ID4+PiAoMzIgLSByaG9PZmZzZXQpKTtcbiAgICAgICAgfSBlbHNlIC8qIGlmIChyaG9PZmZzZXQgPj0gMzIpICovIHtcbiAgICAgICAgICB0TXN3ID0gKGxhbmVMc3cgPDwgKHJob09mZnNldCAtIDMyKSkgfCAobGFuZU1zdyA+Pj4gKDY0IC0gcmhvT2Zmc2V0KSk7XG4gICAgICAgICAgdExzdyA9IChsYW5lTXN3IDw8IChyaG9PZmZzZXQgLSAzMikpIHwgKGxhbmVMc3cgPj4+ICg2NCAtIHJob09mZnNldCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJhbnNwb3NlIGxhbmVzXG4gICAgICAgIGNvbnN0IFRQaUxhbmUgPSBUW1BJX0lOREVYRVNbbGFuZUluZGV4XV07XG4gICAgICAgIFRQaUxhbmUuaGlnaCA9IHRNc3c7XG4gICAgICAgIFRQaUxhbmUubG93ID0gdExzdztcbiAgICAgIH1cblxuICAgICAgLy8gUmhvIHBpIGF0IHggPSB5ID0gMFxuICAgICAgY29uc3QgVDAgPSBUWzBdO1xuICAgICAgY29uc3Qgc3RhdGUwID0gc3RhdGVbMF07XG4gICAgICBUMC5oaWdoID0gc3RhdGUwLmhpZ2g7XG4gICAgICBUMC5sb3cgPSBzdGF0ZTAubG93O1xuXG4gICAgICAvLyBDaGlcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgNTsgeSArPSAxKSB7XG4gICAgICAgICAgLy8gU2hvcnRjdXRzXG4gICAgICAgICAgY29uc3QgbGFuZUluZGV4ID0geCArIDUgKiB5O1xuICAgICAgICAgIGNvbnN0IGxhbmUgPSBzdGF0ZVtsYW5lSW5kZXhdO1xuICAgICAgICAgIGNvbnN0IFRMYW5lID0gVFtsYW5lSW5kZXhdO1xuICAgICAgICAgIGNvbnN0IFR4MUxhbmUgPSBUWygoeCArIDEpICUgNSkgKyA1ICogeV07XG4gICAgICAgICAgY29uc3QgVHgyTGFuZSA9IFRbKCh4ICsgMikgJSA1KSArIDUgKiB5XTtcblxuICAgICAgICAgIC8vIE1peCByb3dzXG4gICAgICAgICAgbGFuZS5oaWdoID0gVExhbmUuaGlnaCBeICh+VHgxTGFuZS5oaWdoICYgVHgyTGFuZS5oaWdoKTtcbiAgICAgICAgICBsYW5lLmxvdyA9IFRMYW5lLmxvdyBeICh+VHgxTGFuZS5sb3cgJiBUeDJMYW5lLmxvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSW90YVxuICAgICAgY29uc3QgbGFuZSA9IHN0YXRlWzBdO1xuICAgICAgY29uc3Qgcm91bmRDb25zdGFudCA9IFJPVU5EX0NPTlNUQU5UU1tyb3VuZF07XG4gICAgICBsYW5lLmhpZ2ggXj0gcm91bmRDb25zdGFudC5oaWdoO1xuICAgICAgbGFuZS5sb3cgXj0gcm91bmRDb25zdGFudC5sb3c7XG4gICAgfVxuICB9XG5cbiAgX2RvRmluYWxpemUoKSB7XG4gICAgLy8gU2hvcnRjdXRzXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGE7XG4gICAgY29uc3QgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcbiAgICBjb25zdCBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcbiAgICBjb25zdCBibG9ja1NpemVCaXRzID0gdGhpcy5ibG9ja1NpemUgKiAzMjtcblxuICAgIC8vIEFkZCBwYWRkaW5nXG4gICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHgxIDw8ICgyNCAtIChuQml0c0xlZnQgJSAzMikpO1xuICAgIGRhdGFXb3Jkc1soKE1hdGguY2VpbCgobkJpdHNMZWZ0ICsgMSkgLyBibG9ja1NpemVCaXRzKSAqIGJsb2NrU2l6ZUJpdHMpID4+PiA1KSAtIDFdIHw9IDB4ODA7XG4gICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG4gICAgLy8gSGFzaCBmaW5hbCBibG9ja3NcbiAgICB0aGlzLl9wcm9jZXNzKCk7XG5cbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgIGNvbnN0IG91dHB1dExlbmd0aEJ5dGVzID0gdGhpcy5jZmcub3V0cHV0TGVuZ3RoIC8gODtcbiAgICBjb25zdCBvdXRwdXRMZW5ndGhMYW5lcyA9IG91dHB1dExlbmd0aEJ5dGVzIC8gODtcblxuICAgIC8vIFNxdWVlemVcbiAgICBjb25zdCBoYXNoV29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHB1dExlbmd0aExhbmVzOyBpICs9IDEpIHtcbiAgICAgIC8vIFNob3J0Y3V0c1xuICAgICAgY29uc3QgbGFuZSA9IHN0YXRlW2ldO1xuICAgICAgbGV0IGxhbmVNc3cgPSBsYW5lLmhpZ2g7XG4gICAgICBsZXQgbGFuZUxzdyA9IGxhbmUubG93O1xuXG4gICAgICAvLyBTd2FwIGVuZGlhblxuICAgICAgbGFuZU1zdyA9ICgoKGxhbmVNc3cgPDwgOCkgfCAobGFuZU1zdyA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpXG4gICAgICAgIHwgKCgobGFuZU1zdyA8PCAyNCkgfCAobGFuZU1zdyA+Pj4gOCkpICYgMHhmZjAwZmYwMCk7XG4gICAgICBsYW5lTHN3ID0gKCgobGFuZUxzdyA8PCA4KSB8IChsYW5lTHN3ID4+PiAyNCkpICYgMHgwMGZmMDBmZilcbiAgICAgICAgfCAoKChsYW5lTHN3IDw8IDI0KSB8IChsYW5lTHN3ID4+PiA4KSkgJiAweGZmMDBmZjAwKTtcblxuICAgICAgLy8gU3F1ZWV6ZSBzdGF0ZSB0byByZXRyaWV2ZSBoYXNoXG4gICAgICBoYXNoV29yZHMucHVzaChsYW5lTHN3KTtcbiAgICAgIGhhc2hXb3Jkcy5wdXNoKGxhbmVNc3cpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG4gICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkoaGFzaFdvcmRzLCBvdXRwdXRMZW5ndGhCeXRlcyk7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBjbG9uZSA9IHN1cGVyLmNsb25lLmNhbGwodGhpcyk7XG5cbiAgICBjbG9uZS5fc3RhdGUgPSB0aGlzLl9zdGF0ZS5zbGljZSgwKTtcbiAgICBjb25zdCBzdGF0ZSA9IGNsb25lLl9zdGF0ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1OyBpICs9IDEpIHtcbiAgICAgIHN0YXRlW2ldID0gc3RhdGVbaV0uY2xvbmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cbiAqXG4gKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuICpcbiAqIEBzdGF0aWNcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTMoJ21lc3NhZ2UnKTtcbiAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTMod29yZEFycmF5KTtcbiAqL1xuZXhwb3J0IGNvbnN0IFNIQTMgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEEzQWxnbyk7XG5cbi8qKlxuICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuICpcbiAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG4gKlxuICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cbiAqXG4gKiBAc3RhdGljXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMyhtZXNzYWdlLCBrZXkpO1xuICovXG5leHBvcnQgY29uc3QgSG1hY1NIQTMgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBM0FsZ28pO1xuIiwiaW1wb3J0IHsgSGFzaGVyIH0gZnJvbSAnLi9jb3JlLmpzJztcbmltcG9ydCB7XG4gIFg2NFdvcmQsXG4gIFg2NFdvcmRBcnJheSxcbn0gZnJvbSAnLi94NjQtY29yZS5qcyc7XG5cbi8vIENvbnN0YW50c1xuY29uc3QgSyA9IFtcbiAgbmV3IFg2NFdvcmQoMHg0MjhhMmY5OCwgMHhkNzI4YWUyMiksXG4gIG5ldyBYNjRXb3JkKDB4NzEzNzQ0OTEsIDB4MjNlZjY1Y2QpLFxuICBuZXcgWDY0V29yZCgweGI1YzBmYmNmLCAweGVjNGQzYjJmKSxcbiAgbmV3IFg2NFdvcmQoMHhlOWI1ZGJhNSwgMHg4MTg5ZGJiYyksXG4gIG5ldyBYNjRXb3JkKDB4Mzk1NmMyNWIsIDB4ZjM0OGI1MzgpLFxuICBuZXcgWDY0V29yZCgweDU5ZjExMWYxLCAweGI2MDVkMDE5KSxcbiAgbmV3IFg2NFdvcmQoMHg5MjNmODJhNCwgMHhhZjE5NGY5YiksXG4gIG5ldyBYNjRXb3JkKDB4YWIxYzVlZDUsIDB4ZGE2ZDgxMTgpLFxuICBuZXcgWDY0V29yZCgweGQ4MDdhYTk4LCAweGEzMDMwMjQyKSxcbiAgbmV3IFg2NFdvcmQoMHgxMjgzNWIwMSwgMHg0NTcwNmZiZSksXG4gIG5ldyBYNjRXb3JkKDB4MjQzMTg1YmUsIDB4NGVlNGIyOGMpLFxuICBuZXcgWDY0V29yZCgweDU1MGM3ZGMzLCAweGQ1ZmZiNGUyKSxcbiAgbmV3IFg2NFdvcmQoMHg3MmJlNWQ3NCwgMHhmMjdiODk2ZiksXG4gIG5ldyBYNjRXb3JkKDB4ODBkZWIxZmUsIDB4M2IxNjk2YjEpLFxuICBuZXcgWDY0V29yZCgweDliZGMwNmE3LCAweDI1YzcxMjM1KSxcbiAgbmV3IFg2NFdvcmQoMHhjMTliZjE3NCwgMHhjZjY5MjY5NCksXG4gIG5ldyBYNjRXb3JkKDB4ZTQ5YjY5YzEsIDB4OWVmMTRhZDIpLFxuICBuZXcgWDY0V29yZCgweGVmYmU0Nzg2LCAweDM4NGYyNWUzKSxcbiAgbmV3IFg2NFdvcmQoMHgwZmMxOWRjNiwgMHg4YjhjZDViNSksXG4gIG5ldyBYNjRXb3JkKDB4MjQwY2ExY2MsIDB4NzdhYzljNjUpLFxuICBuZXcgWDY0V29yZCgweDJkZTkyYzZmLCAweDU5MmIwMjc1KSxcbiAgbmV3IFg2NFdvcmQoMHg0YTc0ODRhYSwgMHg2ZWE2ZTQ4MyksXG4gIG5ldyBYNjRXb3JkKDB4NWNiMGE5ZGMsIDB4YmQ0MWZiZDQpLFxuICBuZXcgWDY0V29yZCgweDc2Zjk4OGRhLCAweDgzMTE1M2I1KSxcbiAgbmV3IFg2NFdvcmQoMHg5ODNlNTE1MiwgMHhlZTY2ZGZhYiksXG4gIG5ldyBYNjRXb3JkKDB4YTgzMWM2NmQsIDB4MmRiNDMyMTApLFxuICBuZXcgWDY0V29yZCgweGIwMDMyN2M4LCAweDk4ZmIyMTNmKSxcbiAgbmV3IFg2NFdvcmQoMHhiZjU5N2ZjNywgMHhiZWVmMGVlNCksXG4gIG5ldyBYNjRXb3JkKDB4YzZlMDBiZjMsIDB4M2RhODhmYzIpLFxuICBuZXcgWDY0V29yZCgweGQ1YTc5MTQ3LCAweDkzMGFhNzI1KSxcbiAgbmV3IFg2NFdvcmQoMHgwNmNhNjM1MSwgMHhlMDAzODI2ZiksXG4gIG5ldyBYNjRXb3JkKDB4MTQyOTI5NjcsIDB4MGEwZTZlNzApLFxuICBuZXcgWDY0V29yZCgweDI3YjcwYTg1LCAweDQ2ZDIyZmZjKSxcbiAgbmV3IFg2NFdvcmQoMHgyZTFiMjEzOCwgMHg1YzI2YzkyNiksXG4gIG5ldyBYNjRXb3JkKDB4NGQyYzZkZmMsIDB4NWFjNDJhZWQpLFxuICBuZXcgWDY0V29yZCgweDUzMzgwZDEzLCAweDlkOTViM2RmKSxcbiAgbmV3IFg2NFdvcmQoMHg2NTBhNzM1NCwgMHg4YmFmNjNkZSksXG4gIG5ldyBYNjRXb3JkKDB4NzY2YTBhYmIsIDB4M2M3N2IyYTgpLFxuICBuZXcgWDY0V29yZCgweDgxYzJjOTJlLCAweDQ3ZWRhZWU2KSxcbiAgbmV3IFg2NFdvcmQoMHg5MjcyMmM4NSwgMHgxNDgyMzUzYiksXG4gIG5ldyBYNjRXb3JkKDB4YTJiZmU4YTEsIDB4NGNmMTAzNjQpLFxuICBuZXcgWDY0V29yZCgweGE4MWE2NjRiLCAweGJjNDIzMDAxKSxcbiAgbmV3IFg2NFdvcmQoMHhjMjRiOGI3MCwgMHhkMGY4OTc5MSksXG4gIG5ldyBYNjRXb3JkKDB4Yzc2YzUxYTMsIDB4MDY1NGJlMzApLFxuICBuZXcgWDY0V29yZCgweGQxOTJlODE5LCAweGQ2ZWY1MjE4KSxcbiAgbmV3IFg2NFdvcmQoMHhkNjk5MDYyNCwgMHg1NTY1YTkxMCksXG4gIG5ldyBYNjRXb3JkKDB4ZjQwZTM1ODUsIDB4NTc3MTIwMmEpLFxuICBuZXcgWDY0V29yZCgweDEwNmFhMDcwLCAweDMyYmJkMWI4KSxcbiAgbmV3IFg2NFdvcmQoMHgxOWE0YzExNiwgMHhiOGQyZDBjOCksXG4gIG5ldyBYNjRXb3JkKDB4MWUzNzZjMDgsIDB4NTE0MWFiNTMpLFxuICBuZXcgWDY0V29yZCgweDI3NDg3NzRjLCAweGRmOGVlYjk5KSxcbiAgbmV3IFg2NFdvcmQoMHgzNGIwYmNiNSwgMHhlMTliNDhhOCksXG4gIG5ldyBYNjRXb3JkKDB4MzkxYzBjYjMsIDB4YzVjOTVhNjMpLFxuICBuZXcgWDY0V29yZCgweDRlZDhhYTRhLCAweGUzNDE4YWNiKSxcbiAgbmV3IFg2NFdvcmQoMHg1YjljY2E0ZiwgMHg3NzYzZTM3MyksXG4gIG5ldyBYNjRXb3JkKDB4NjgyZTZmZjMsIDB4ZDZiMmI4YTMpLFxuICBuZXcgWDY0V29yZCgweDc0OGY4MmVlLCAweDVkZWZiMmZjKSxcbiAgbmV3IFg2NFdvcmQoMHg3OGE1NjM2ZiwgMHg0MzE3MmY2MCksXG4gIG5ldyBYNjRXb3JkKDB4ODRjODc4MTQsIDB4YTFmMGFiNzIpLFxuICBuZXcgWDY0V29yZCgweDhjYzcwMjA4LCAweDFhNjQzOWVjKSxcbiAgbmV3IFg2NFdvcmQoMHg5MGJlZmZmYSwgMHgyMzYzMWUyOCksXG4gIG5ldyBYNjRXb3JkKDB4YTQ1MDZjZWIsIDB4ZGU4MmJkZTkpLFxuICBuZXcgWDY0V29yZCgweGJlZjlhM2Y3LCAweGIyYzY3OTE1KSxcbiAgbmV3IFg2NFdvcmQoMHhjNjcxNzhmMiwgMHhlMzcyNTMyYiksXG4gIG5ldyBYNjRXb3JkKDB4Y2EyNzNlY2UsIDB4ZWEyNjYxOWMpLFxuICBuZXcgWDY0V29yZCgweGQxODZiOGM3LCAweDIxYzBjMjA3KSxcbiAgbmV3IFg2NFdvcmQoMHhlYWRhN2RkNiwgMHhjZGUwZWIxZSksXG4gIG5ldyBYNjRXb3JkKDB4ZjU3ZDRmN2YsIDB4ZWU2ZWQxNzgpLFxuICBuZXcgWDY0V29yZCgweDA2ZjA2N2FhLCAweDcyMTc2ZmJhKSxcbiAgbmV3IFg2NFdvcmQoMHgwYTYzN2RjNSwgMHhhMmM4OThhNiksXG4gIG5ldyBYNjRXb3JkKDB4MTEzZjk4MDQsIDB4YmVmOTBkYWUpLFxuICBuZXcgWDY0V29yZCgweDFiNzEwYjM1LCAweDEzMWM0NzFiKSxcbiAgbmV3IFg2NFdvcmQoMHgyOGRiNzdmNSwgMHgyMzA0N2Q4NCksXG4gIG5ldyBYNjRXb3JkKDB4MzJjYWFiN2IsIDB4NDBjNzI0OTMpLFxuICBuZXcgWDY0V29yZCgweDNjOWViZTBhLCAweDE1YzliZWJjKSxcbiAgbmV3IFg2NFdvcmQoMHg0MzFkNjdjNCwgMHg5YzEwMGQ0YyksXG4gIG5ldyBYNjRXb3JkKDB4NGNjNWQ0YmUsIDB4Y2IzZTQyYjYpLFxuICBuZXcgWDY0V29yZCgweDU5N2YyOTljLCAweGZjNjU3ZTJhKSxcbiAgbmV3IFg2NFdvcmQoMHg1ZmNiNmZhYiwgMHgzYWQ2ZmFlYyksXG4gIG5ldyBYNjRXb3JkKDB4NmM0NDE5OGMsIDB4NGE0NzU4MTcpLFxuXTtcblxuLy8gUmV1c2FibGUgb2JqZWN0c1xuY29uc3QgVyA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSArPSAxKSB7XG4gIFdbaV0gPSBuZXcgWDY0V29yZCgpO1xufVxuXG4vKipcbiAqIFNIQS01MTIgaGFzaCBhbGdvcml0aG0uXG4gKi9cbmV4cG9ydCBjbGFzcyBTSEE1MTJBbGdvIGV4dGVuZHMgSGFzaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYmxvY2tTaXplID0gMTAyNCAvIDMyO1xuICB9XG5cbiAgX2RvUmVzZXQoKSB7XG4gICAgdGhpcy5faGFzaCA9IG5ldyBYNjRXb3JkQXJyYXkoW1xuICAgICAgbmV3IFg2NFdvcmQoMHg2YTA5ZTY2NywgMHhmM2JjYzkwOCksXG4gICAgICBuZXcgWDY0V29yZCgweGJiNjdhZTg1LCAweDg0Y2FhNzNiKSxcbiAgICAgIG5ldyBYNjRXb3JkKDB4M2M2ZWYzNzIsIDB4ZmU5NGY4MmIpLFxuICAgICAgbmV3IFg2NFdvcmQoMHhhNTRmZjUzYSwgMHg1ZjFkMzZmMSksXG4gICAgICBuZXcgWDY0V29yZCgweDUxMGU1MjdmLCAweGFkZTY4MmQxKSxcbiAgICAgIG5ldyBYNjRXb3JkKDB4OWIwNTY4OGMsIDB4MmIzZTZjMWYpLFxuICAgICAgbmV3IFg2NFdvcmQoMHgxZjgzZDlhYiwgMHhmYjQxYmQ2YiksXG4gICAgICBuZXcgWDY0V29yZCgweDViZTBjZDE5LCAweDEzN2UyMTc5KSxcbiAgICBdKTtcbiAgfVxuXG4gIF9kb1Byb2Nlc3NCbG9jayhNLCBvZmZzZXQpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBIID0gdGhpcy5faGFzaC53b3JkcztcblxuICAgIGNvbnN0IEgwID0gSFswXTtcbiAgICBjb25zdCBIMSA9IEhbMV07XG4gICAgY29uc3QgSDIgPSBIWzJdO1xuICAgIGNvbnN0IEgzID0gSFszXTtcbiAgICBjb25zdCBINCA9IEhbNF07XG4gICAgY29uc3QgSDUgPSBIWzVdO1xuICAgIGNvbnN0IEg2ID0gSFs2XTtcbiAgICBjb25zdCBINyA9IEhbN107XG5cbiAgICBjb25zdCBIMGggPSBIMC5oaWdoO1xuICAgIGxldCBIMGwgPSBIMC5sb3c7XG4gICAgY29uc3QgSDFoID0gSDEuaGlnaDtcbiAgICBsZXQgSDFsID0gSDEubG93O1xuICAgIGNvbnN0IEgyaCA9IEgyLmhpZ2g7XG4gICAgbGV0IEgybCA9IEgyLmxvdztcbiAgICBjb25zdCBIM2ggPSBIMy5oaWdoO1xuICAgIGxldCBIM2wgPSBIMy5sb3c7XG4gICAgY29uc3QgSDRoID0gSDQuaGlnaDtcbiAgICBsZXQgSDRsID0gSDQubG93O1xuICAgIGNvbnN0IEg1aCA9IEg1LmhpZ2g7XG4gICAgbGV0IEg1bCA9IEg1LmxvdztcbiAgICBjb25zdCBINmggPSBINi5oaWdoO1xuICAgIGxldCBINmwgPSBINi5sb3c7XG4gICAgY29uc3QgSDdoID0gSDcuaGlnaDtcbiAgICBsZXQgSDdsID0gSDcubG93O1xuXG4gICAgLy8gV29ya2luZyB2YXJpYWJsZXNcbiAgICBsZXQgYWggPSBIMGg7XG4gICAgbGV0IGFsID0gSDBsO1xuICAgIGxldCBiaCA9IEgxaDtcbiAgICBsZXQgYmwgPSBIMWw7XG4gICAgbGV0IGNoID0gSDJoO1xuICAgIGxldCBjbCA9IEgybDtcbiAgICBsZXQgZGggPSBIM2g7XG4gICAgbGV0IGRsID0gSDNsO1xuICAgIGxldCBlaCA9IEg0aDtcbiAgICBsZXQgZWwgPSBINGw7XG4gICAgbGV0IGZoID0gSDVoO1xuICAgIGxldCBmbCA9IEg1bDtcbiAgICBsZXQgZ2ggPSBINmg7XG4gICAgbGV0IGdsID0gSDZsO1xuICAgIGxldCBoaCA9IEg3aDtcbiAgICBsZXQgaGwgPSBIN2w7XG5cbiAgICAvLyBSb3VuZHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpICs9IDEpIHtcbiAgICAgIGxldCBXaWw7XG4gICAgICBsZXQgV2loO1xuXG4gICAgICAvLyBTaG9ydGN1dFxuICAgICAgY29uc3QgV2kgPSBXW2ldO1xuXG4gICAgICAvLyBFeHRlbmQgbWVzc2FnZVxuICAgICAgaWYgKGkgPCAxNikge1xuICAgICAgICBXaS5oaWdoID0gTVtvZmZzZXQgKyBpICogMl0gfCAwO1xuICAgICAgICBXaWggPSBXaS5oaWdoO1xuICAgICAgICBXaS5sb3cgPSBNW29mZnNldCArIGkgKiAyICsgMV0gfCAwO1xuICAgICAgICBXaWwgPSBXaS5sb3c7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBHYW1tYTBcbiAgICAgICAgY29uc3QgZ2FtbWEweCA9IFdbaSAtIDE1XTtcbiAgICAgICAgY29uc3QgZ2FtbWEweGggPSBnYW1tYTB4LmhpZ2g7XG4gICAgICAgIGNvbnN0IGdhbW1hMHhsID0gZ2FtbWEweC5sb3c7XG4gICAgICAgIGNvbnN0IGdhbW1hMGggPSAoKGdhbW1hMHhoID4+PiAxKSB8IChnYW1tYTB4bCA8PCAzMSkpXG4gICAgICAgICAgXiAoKGdhbW1hMHhoID4+PiA4KSB8IChnYW1tYTB4bCA8PCAyNCkpXG4gICAgICAgICAgXiAoZ2FtbWEweGggPj4+IDcpO1xuICAgICAgICBjb25zdCBnYW1tYTBsID0gKChnYW1tYTB4bCA+Pj4gMSkgfCAoZ2FtbWEweGggPDwgMzEpKVxuICAgICAgICAgIF4gKChnYW1tYTB4bCA+Pj4gOCkgfCAoZ2FtbWEweGggPDwgMjQpKVxuICAgICAgICAgIF4gKChnYW1tYTB4bCA+Pj4gNykgfCAoZ2FtbWEweGggPDwgMjUpKTtcblxuICAgICAgICAvLyBHYW1tYTFcbiAgICAgICAgY29uc3QgZ2FtbWExeCA9IFdbaSAtIDJdO1xuICAgICAgICBjb25zdCBnYW1tYTF4aCA9IGdhbW1hMXguaGlnaDtcbiAgICAgICAgY29uc3QgZ2FtbWExeGwgPSBnYW1tYTF4LmxvdztcbiAgICAgICAgY29uc3QgZ2FtbWExaCA9ICgoZ2FtbWExeGggPj4+IDE5KSB8IChnYW1tYTF4bCA8PCAxMykpXG4gICAgICAgICAgXiAoKGdhbW1hMXhoIDw8IDMpIHwgKGdhbW1hMXhsID4+PiAyOSkpXG4gICAgICAgICAgXiAoZ2FtbWExeGggPj4+IDYpO1xuICAgICAgICBjb25zdCBnYW1tYTFsID0gKChnYW1tYTF4bCA+Pj4gMTkpIHwgKGdhbW1hMXhoIDw8IDEzKSlcbiAgICAgICAgICBeICgoZ2FtbWExeGwgPDwgMykgfCAoZ2FtbWExeGggPj4+IDI5KSlcbiAgICAgICAgICBeICgoZ2FtbWExeGwgPj4+IDYpIHwgKGdhbW1hMXhoIDw8IDI2KSk7XG5cbiAgICAgICAgLy8gV1tpXSA9IGdhbW1hMCArIFdbaSAtIDddICsgZ2FtbWExICsgV1tpIC0gMTZdXG4gICAgICAgIGNvbnN0IFdpNyA9IFdbaSAtIDddO1xuICAgICAgICBjb25zdCBXaTdoID0gV2k3LmhpZ2g7XG4gICAgICAgIGNvbnN0IFdpN2wgPSBXaTcubG93O1xuXG4gICAgICAgIGNvbnN0IFdpMTYgPSBXW2kgLSAxNl07XG4gICAgICAgIGNvbnN0IFdpMTZoID0gV2kxNi5oaWdoO1xuICAgICAgICBjb25zdCBXaTE2bCA9IFdpMTYubG93O1xuXG4gICAgICAgIFdpbCA9IGdhbW1hMGwgKyBXaTdsO1xuICAgICAgICBXaWggPSBnYW1tYTBoICsgV2k3aCArICgoV2lsID4+PiAwKSA8IChnYW1tYTBsID4+PiAwKSA/IDEgOiAwKTtcbiAgICAgICAgV2lsICs9IGdhbW1hMWw7XG4gICAgICAgIFdpaCA9IFdpaCArIGdhbW1hMWggKyAoKFdpbCA+Pj4gMCkgPCAoZ2FtbWExbCA+Pj4gMCkgPyAxIDogMCk7XG4gICAgICAgIFdpbCArPSBXaTE2bDtcbiAgICAgICAgV2loID0gV2loICsgV2kxNmggKyAoKFdpbCA+Pj4gMCkgPCAoV2kxNmwgPj4+IDApID8gMSA6IDApO1xuXG4gICAgICAgIFdpLmhpZ2ggPSBXaWg7XG4gICAgICAgIFdpLmxvdyA9IFdpbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hoID0gKGVoICYgZmgpIF4gKH5laCAmIGdoKTtcbiAgICAgIGNvbnN0IGNobCA9IChlbCAmIGZsKSBeICh+ZWwgJiBnbCk7XG4gICAgICBjb25zdCBtYWpoID0gKGFoICYgYmgpIF4gKGFoICYgY2gpIF4gKGJoICYgY2gpO1xuICAgICAgY29uc3QgbWFqbCA9IChhbCAmIGJsKSBeIChhbCAmIGNsKSBeIChibCAmIGNsKTtcblxuICAgICAgY29uc3Qgc2lnbWEwaCA9ICgoYWggPj4+IDI4KSB8IChhbCA8PCA0KSlcbiAgICAgICAgXiAoKGFoIDw8IDMwKSB8IChhbCA+Pj4gMikpXG4gICAgICAgIF4gKChhaCA8PCAyNSkgfCAoYWwgPj4+IDcpKTtcbiAgICAgIGNvbnN0IHNpZ21hMGwgPSAoKGFsID4+PiAyOCkgfCAoYWggPDwgNCkpXG4gICAgICAgIF4gKChhbCA8PCAzMCkgfCAoYWggPj4+IDIpKVxuICAgICAgICBeICgoYWwgPDwgMjUpIHwgKGFoID4+PiA3KSk7XG4gICAgICBjb25zdCBzaWdtYTFoID0gKChlaCA+Pj4gMTQpIHwgKGVsIDw8IDE4KSlcbiAgICAgICAgXiAoKGVoID4+PiAxOCkgfCAoZWwgPDwgMTQpKVxuICAgICAgICBeICgoZWggPDwgMjMpIHwgKGVsID4+PiA5KSk7XG4gICAgICBjb25zdCBzaWdtYTFsID0gKChlbCA+Pj4gMTQpIHwgKGVoIDw8IDE4KSlcbiAgICAgICAgXiAoKGVsID4+PiAxOCkgfCAoZWggPDwgMTQpKVxuICAgICAgICBeICgoZWwgPDwgMjMpIHwgKGVoID4+PiA5KSk7XG5cbiAgICAgIC8vIHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV1cbiAgICAgIGNvbnN0IEtpID0gS1tpXTtcbiAgICAgIGNvbnN0IEtpaCA9IEtpLmhpZ2g7XG4gICAgICBjb25zdCBLaWwgPSBLaS5sb3c7XG5cbiAgICAgIGxldCB0MWwgPSBobCArIHNpZ21hMWw7XG4gICAgICBsZXQgdDFoID0gaGggKyBzaWdtYTFoICsgKCh0MWwgPj4+IDApIDwgKGhsID4+PiAwKSA/IDEgOiAwKTtcbiAgICAgIHQxbCArPSBjaGw7XG4gICAgICB0MWggPSB0MWggKyBjaGggKyAoKHQxbCA+Pj4gMCkgPCAoY2hsID4+PiAwKSA/IDEgOiAwKTtcbiAgICAgIHQxbCArPSBLaWw7XG4gICAgICB0MWggPSB0MWggKyBLaWggKyAoKHQxbCA+Pj4gMCkgPCAoS2lsID4+PiAwKSA/IDEgOiAwKTtcbiAgICAgIHQxbCArPSBXaWw7XG4gICAgICB0MWggPSB0MWggKyBXaWggKyAoKHQxbCA+Pj4gMCkgPCAoV2lsID4+PiAwKSA/IDEgOiAwKTtcblxuICAgICAgLy8gdDIgPSBzaWdtYTAgKyBtYWpcbiAgICAgIGNvbnN0IHQybCA9IHNpZ21hMGwgKyBtYWpsO1xuICAgICAgY29uc3QgdDJoID0gc2lnbWEwaCArIG1hamggKyAoKHQybCA+Pj4gMCkgPCAoc2lnbWEwbCA+Pj4gMCkgPyAxIDogMCk7XG5cbiAgICAgIC8vIFVwZGF0ZSB3b3JraW5nIHZhcmlhYmxlc1xuICAgICAgaGggPSBnaDtcbiAgICAgIGhsID0gZ2w7XG4gICAgICBnaCA9IGZoO1xuICAgICAgZ2wgPSBmbDtcbiAgICAgIGZoID0gZWg7XG4gICAgICBmbCA9IGVsO1xuICAgICAgZWwgPSAoZGwgKyB0MWwpIHwgMDtcbiAgICAgIGVoID0gKGRoICsgdDFoICsgKChlbCA+Pj4gMCkgPCAoZGwgPj4+IDApID8gMSA6IDApKSB8IDA7XG4gICAgICBkaCA9IGNoO1xuICAgICAgZGwgPSBjbDtcbiAgICAgIGNoID0gYmg7XG4gICAgICBjbCA9IGJsO1xuICAgICAgYmggPSBhaDtcbiAgICAgIGJsID0gYWw7XG4gICAgICBhbCA9ICh0MWwgKyB0MmwpIHwgMDtcbiAgICAgIGFoID0gKHQxaCArIHQyaCArICgoYWwgPj4+IDApIDwgKHQxbCA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuICAgIEgwLmxvdyA9IChIMGwgKyBhbCk7XG4gICAgSDBsID0gSDAubG93O1xuICAgIEgwLmhpZ2ggPSAoSDBoICsgYWggKyAoKEgwbCA+Pj4gMCkgPCAoYWwgPj4+IDApID8gMSA6IDApKTtcbiAgICBIMS5sb3cgPSAoSDFsICsgYmwpO1xuICAgIEgxbCA9IEgxLmxvdztcbiAgICBIMS5oaWdoID0gKEgxaCArIGJoICsgKChIMWwgPj4+IDApIDwgKGJsID4+PiAwKSA/IDEgOiAwKSk7XG4gICAgSDIubG93ID0gKEgybCArIGNsKTtcbiAgICBIMmwgPSBIMi5sb3c7XG4gICAgSDIuaGlnaCA9IChIMmggKyBjaCArICgoSDJsID4+PiAwKSA8IChjbCA+Pj4gMCkgPyAxIDogMCkpO1xuICAgIEgzLmxvdyA9IChIM2wgKyBkbCk7XG4gICAgSDNsID0gSDMubG93O1xuICAgIEgzLmhpZ2ggPSAoSDNoICsgZGggKyAoKEgzbCA+Pj4gMCkgPCAoZGwgPj4+IDApID8gMSA6IDApKTtcbiAgICBINC5sb3cgPSAoSDRsICsgZWwpO1xuICAgIEg0bCA9IEg0LmxvdztcbiAgICBINC5oaWdoID0gKEg0aCArIGVoICsgKChINGwgPj4+IDApIDwgKGVsID4+PiAwKSA/IDEgOiAwKSk7XG4gICAgSDUubG93ID0gKEg1bCArIGZsKTtcbiAgICBINWwgPSBINS5sb3c7XG4gICAgSDUuaGlnaCA9IChINWggKyBmaCArICgoSDVsID4+PiAwKSA8IChmbCA+Pj4gMCkgPyAxIDogMCkpO1xuICAgIEg2LmxvdyA9IChINmwgKyBnbCk7XG4gICAgSDZsID0gSDYubG93O1xuICAgIEg2LmhpZ2ggPSAoSDZoICsgZ2ggKyAoKEg2bCA+Pj4gMCkgPCAoZ2wgPj4+IDApID8gMSA6IDApKTtcbiAgICBINy5sb3cgPSAoSDdsICsgaGwpO1xuICAgIEg3bCA9IEg3LmxvdztcbiAgICBINy5oaWdoID0gKEg3aCArIGhoICsgKChIN2wgPj4+IDApIDwgKGhsID4+PiAwKSA/IDEgOiAwKSk7XG4gIH1cblxuICBfZG9GaW5hbGl6ZSgpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YTtcbiAgICBjb25zdCBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG4gICAgY29uc3QgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuICAgIGNvbnN0IG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG4gICAgLy8gQWRkIHBhZGRpbmdcbiAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIChuQml0c0xlZnQgJSAzMikpO1xuICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyAxMjgpID4+PiAxMCkgPDwgNSkgKyAzMF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG4gICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDEyOCkgPj4+IDEwKSA8PCA1KSArIDMxXSA9IG5CaXRzVG90YWw7XG4gICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG4gICAgLy8gSGFzaCBmaW5hbCBibG9ja3NcbiAgICB0aGlzLl9wcm9jZXNzKCk7XG5cbiAgICAvLyBDb252ZXJ0IGhhc2ggdG8gMzItYml0IHdvcmQgYXJyYXkgYmVmb3JlIHJldHVybmluZ1xuICAgIGNvbnN0IGhhc2ggPSB0aGlzLl9oYXNoLnRvWDMyKCk7XG5cbiAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgY2xvbmUgPSBzdXBlci5jbG9uZS5jYWxsKHRoaXMpO1xuICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG4gKlxuICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cbiAqXG4gKiBAc3RhdGljXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEE1MTIoJ21lc3NhZ2UnKTtcbiAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTUxMih3b3JkQXJyYXkpO1xuICovXG5leHBvcnQgY29uc3QgU0hBNTEyID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBNTEyQWxnbyk7XG5cbi8qKlxuICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuICpcbiAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG4gKlxuICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cbiAqXG4gKiBAc3RhdGljXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBNTEyKG1lc3NhZ2UsIGtleSk7XG4gKi9cbmV4cG9ydCBjb25zdCBIbWFjU0hBNTEyID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTUxMkFsZ28pO1xuIiwiaW1wb3J0IHtcbiAgQmFzZSxcbiAgV29yZEFycmF5LFxufSBmcm9tICcuL2NvcmUuanMnO1xuXG5jb25zdCBYMzJXb3JkQXJyYXkgPSBXb3JkQXJyYXk7XG5cbi8qKlxuICogQSA2NC1iaXQgd29yZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFg2NFdvcmQgZXh0ZW5kcyBCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCA2NC1iaXQgd29yZC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhpZ2ggVGhlIGhpZ2ggMzIgYml0cy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvdyBUaGUgbG93IDMyIGJpdHMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgeDY0V29yZCA9IENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDAwMDEwMjAzLCAweDA0MDUwNjA3KTtcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhpZ2gsIGxvdykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmhpZ2ggPSBoaWdoO1xuICAgIHRoaXMubG93ID0gbG93O1xuICB9XG59XG5cbi8qKlxuICogQW4gYXJyYXkgb2YgNjQtYml0IHdvcmRzLlxuICpcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiBDcnlwdG9KUy54NjQuV29yZCBvYmplY3RzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNpZ0J5dGVzIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhpcyB3b3JkIGFycmF5LlxuICovXG5leHBvcnQgY2xhc3MgWDY0V29yZEFycmF5IGV4dGVuZHMgQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgKE9wdGlvbmFsKSBBbiBhcnJheSBvZiBDcnlwdG9KUy54NjQuV29yZCBvYmplY3RzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy54NjQuV29yZEFycmF5LmNyZWF0ZSgpO1xuICAgKlxuICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLng2NC5Xb3JkQXJyYXkuY3JlYXRlKFtcbiAgICogICAgICAgICBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgwMDAxMDIwMywgMHgwNDA1MDYwNyksXG4gICAqICAgICAgICAgQ3J5cHRvSlMueDY0LldvcmQuY3JlYXRlKDB4MTgxOTFhMWIsIDB4MWMxZDFlMWYpXG4gICAqICAgICBdKTtcbiAgICpcbiAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy54NjQuV29yZEFycmF5LmNyZWF0ZShbXG4gICAqICAgICAgICAgQ3J5cHRvSlMueDY0LldvcmQuY3JlYXRlKDB4MDAwMTAyMDMsIDB4MDQwNTA2MDcpLFxuICAgKiAgICAgICAgIENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDE4MTkxYTFiLCAweDFjMWQxZTFmKVxuICAgKiAgICAgXSwgMTApO1xuICAgKi9cbiAgY29uc3RydWN0b3Iod29yZHMgPSBbXSwgc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA4KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMud29yZHMgPSB3b3JkcztcbiAgICB0aGlzLnNpZ0J5dGVzID0gc2lnQnl0ZXM7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhpcyA2NC1iaXQgd29yZCBhcnJheSB0byBhIDMyLWJpdCB3b3JkIGFycmF5LlxuICAgKlxuICAgKiBAcmV0dXJuIHtDcnlwdG9KUy5saWIuV29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkncyBkYXRhIGFzIGEgMzItYml0IHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqICAgICB2YXIgeDMyV29yZEFycmF5ID0geDY0V29yZEFycmF5LnRvWDMyKCk7XG4gICAqL1xuICB0b1gzMigpIHtcbiAgICAvLyBTaG9ydGN1dHNcbiAgICBjb25zdCB4NjRXb3JkcyA9IHRoaXMud29yZHM7XG4gICAgY29uc3QgeDY0V29yZHNMZW5ndGggPSB4NjRXb3Jkcy5sZW5ndGg7XG5cbiAgICAvLyBDb252ZXJ0XG4gICAgY29uc3QgeDMyV29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHg2NFdvcmRzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHg2NFdvcmQgPSB4NjRXb3Jkc1tpXTtcbiAgICAgIHgzMldvcmRzLnB1c2goeDY0V29yZC5oaWdoKTtcbiAgICAgIHgzMldvcmRzLnB1c2goeDY0V29yZC5sb3cpO1xuICAgIH1cblxuICAgIHJldHVybiBYMzJXb3JkQXJyYXkuY3JlYXRlKHgzMldvcmRzLCB0aGlzLnNpZ0J5dGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG4gICAqXG4gICAqIEByZXR1cm4ge1g2NFdvcmRBcnJheX0gVGhlIGNsb25lLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAgICAgdmFyIGNsb25lID0geDY0V29yZEFycmF5LmNsb25lKCk7XG4gICAqL1xuICBjbG9uZSgpIHtcbiAgICBjb25zdCBjbG9uZSA9IHN1cGVyLmNsb25lLmNhbGwodGhpcyk7XG5cbiAgICAvLyBDbG9uZSBcIndvcmRzXCIgYXJyYXlcbiAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG4gICAgY29uc3QgeyB3b3JkcyB9ID0gY2xvbmU7XG5cbiAgICAvLyBDbG9uZSBlYWNoIFg2NFdvcmQgb2JqZWN0XG4gICAgY29uc3Qgd29yZHNMZW5ndGggPSB3b3Jkcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICB3b3Jkc1tpXSA9IHdvcmRzW2ldLmNsb25lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIHZhciBncm91cHNSZWdleCA9IC9cXCgoPzpcXD88KC4qPyk+KT8oPyFcXD8pL2c7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgZXhlY1Jlc3VsdCA9IGdyb3Vwc1JlZ2V4LmV4ZWMocGF0aC5zb3VyY2UpO1xuICAgIHdoaWxlIChleGVjUmVzdWx0KSB7XG4gICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAvLyBVc2UgcGFyZW50aGVzaXplZCBzdWJzdHJpbmcgbWF0Y2ggaWYgYXZhaWxhYmxlLCBpbmRleCBvdGhlcndpc2VcbiAgICAgICAgICAgIG5hbWU6IGV4ZWNSZXN1bHRbMV0gfHwgaW5kZXgrKyxcbiAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICB9KTtcbiAgICAgICAgZXhlY1Jlc3VsdCA9IGdyb3Vwc1JlZ2V4LmV4ZWMocGF0aC5zb3VyY2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgZix1c2VEZWJ1Z1ZhbHVlIGFzIGN9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyBwLEZyYWdtZW50IGFzIHYscmVuZGVyIGFzIGQsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpTKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBTKHRoaXMucHJvcHMsbil8fFModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1DKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6cChwKG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9wKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXAobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6cH0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRChuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBGKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGY9ITA9PT10Ll9faDtyLl9fdSsrfHxmfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Qyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKHYsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKHYsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgTT1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBUKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gaihuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtkKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLGQocyhULHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIEkobix0KXtyZXR1cm4gcyhqLHtfX3Y6bixpOnR9KX0oRi5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksTSh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LEYucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD1wKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxGLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9Ri5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7TShuLGUsdCl9KX07dmFyIFc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24geihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxkKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBIPWguZXZlbnQ7ZnVuY3Rpb24gWigpe31mdW5jdGlvbiBZKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uICQoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEgmJihuPUgobikpLG4ucGVyc2lzdD1aLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9WSxuLmlzRGVmYXVsdFByZXZlbnRlZD0kLG4ubmF0aXZlRXZlbnQ9bn07dmFyIHEsRz17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSj1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2Zvcih2YXIgdSBpbiByPXt9LGUpe3ZhciBvPWVbdV07XCJ2YWx1ZVwiPT09dSYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PW98fChcImRlZmF1bHRWYWx1ZVwiPT09dSYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT91PVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT11JiYhMD09PW8/bz1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdCh1KT91PVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdCh1K3QpJiYhVihlLnR5cGUpP3U9XCJvbmlucHV0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KHUpP3U9dS50b0xvd2VyQ2FzZSgpOlAudGVzdCh1KT91PXUucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PW8mJihvPXZvaWQgMCksclt1XT1vKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT1wKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT1wKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cn10JiZlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEcuZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsRykpLG4uJCR0eXBlb2Y9VyxKJiZKKG4pfTt2YXIgSz1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtLJiZLKG4pLHE9bi5fX2N9O3ZhciBRPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gcS5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxYPTEsbm49Mix0bj0zLGVuPTQscm49NTtmdW5jdGlvbiB1bihuLHQpe3JldHVybiB0KCl9dmFyIG9uPVwib2JqZWN0XCI9PXR5cGVvZiBwZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlLm5vdy5iaW5kKHBlcmZvcm1hbmNlKTpmdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpfSxsbj1cIjE2LjguMFwiO2Z1bmN0aW9uIGZuKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBjbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1XfWZ1bmN0aW9uIGFuKG4pe3JldHVybiBjbihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHNuKG4pe3JldHVybiEhbi5fX2smJihkKG51bGwsbiksITApfWZ1bmN0aW9uIGhuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIHBuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LHZuPXY7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Zix1c2VEZWJ1Z1ZhbHVlOmMsdmVyc2lvbjpcIjE2LjguMFwiLENoaWxkcmVuOmsscmVuZGVyOnosaHlkcmF0ZTpCLHVubW91bnRDb21wb25lbnRBdE5vZGU6c24sY3JlYXRlUG9ydGFsOkksY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5OmZuLGNsb25lRWxlbWVudDphbixjcmVhdGVSZWY6YixGcmFnbWVudDp2LGlzVmFsaWRFbGVtZW50OmNuLGZpbmRET01Ob2RlOmhuLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOnBuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpGLGxhenk6RCxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpRfTtleHBvcnR7bG4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLHogYXMgcmVuZGVyLEIgYXMgaHlkcmF0ZSxzbiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLEkgYXMgY3JlYXRlUG9ydGFsLGZuIGFzIGNyZWF0ZUZhY3RvcnksYW4gYXMgY2xvbmVFbGVtZW50LGNuIGFzIGlzVmFsaWRFbGVtZW50LGhuIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLHBuIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLHZuIGFzIFN0cmljdE1vZGUsTCBhcyBTdXNwZW5zZSxGIGFzIFN1c3BlbnNlTGlzdCxEIGFzIGxhenksUSBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxYIGFzIHVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LG5uIGFzIHVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LHRuIGFzIHVuc3RhYmxlX05vcm1hbFByaW9yaXR5LGVuIGFzIHVuc3RhYmxlX0xvd1ByaW9yaXR5LHJuIGFzIHVuc3RhYmxlX0lkbGVQcmlvcml0eSx1biBhcyB1bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHksb24gYXMgdW5zdGFibGVfbm93fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJ2YXIgbixsLHUsaSx0LG8scj17fSxmPVtdLGU9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBjKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIHMobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gYShuLGwsdSl7dmFyIGksdCxvLHI9YXJndW1lbnRzLGY9e307Zm9yKG8gaW4gbClcImtleVwiPT1vP2k9bFtvXTpcInJlZlwiPT1vP3Q9bFtvXTpmW29dPWxbb107aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSxvPTM7bzxhcmd1bWVudHMubGVuZ3RoO28rKyl1LnB1c2gocltvXSk7aWYobnVsbCE9dSYmKGYuY2hpbGRyZW49dSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbnVsbCE9bi5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbi5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bi5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB2KG4sZixpLHQsbnVsbCl9ZnVuY3Rpb24gdihsLHUsaSx0LG8pe3ZhciByPXt0eXBlOmwscHJvcHM6dSxrZXk6aSxyZWY6dCxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrbi5fX3Y6b307cmV0dXJuIG51bGwhPW4udm5vZGUmJm4udm5vZGUocikscn1mdW5jdGlvbiBoKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24geShuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBwKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGQobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2Qobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ZChuKTpudWxsfWZ1bmN0aW9uIF8obil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBfKG4pfX1mdW5jdGlvbiBrKGwpeyghbC5fX2QmJihsLl9fZD0hMCkmJnUucHVzaChsKSYmIWIuX19yKyt8fHQhPT1uLmRlYm91bmNlUmVuZGVyaW5nKSYmKCh0PW4uZGVib3VuY2VSZW5kZXJpbmcpfHxpKShiKX1mdW5jdGlvbiBiKCl7Zm9yKHZhciBuO2IuX19yPXUubGVuZ3RoOyluPXUuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdT1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQsbyxyO24uX19kJiYobz0odD0obD1uKS5fX3YpLl9fZSwocj1sLl9fUCkmJih1PVtdLChpPWMoe30sdCkpLl9fdj10Ll9fdisxLEkocix0LGksbC5fX24sdm9pZCAwIT09ci5vd25lclNWR0VsZW1lbnQsbnVsbCE9dC5fX2g/W29dOm51bGwsdSxudWxsPT1vP2QodCk6byx0Ll9faCksVCh1LHQpLHQuX19lIT1vJiZfKHQpKSl9KX1mdW5jdGlvbiBtKG4sbCx1LGksdCxvLGUsYyxzLGEpe3ZhciBoLHAsXyxrLGIsbSx3LEE9aSYmaS5fX2t8fGYsUD1BLmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShrPXUuX19rW2hdPW51bGw9PShrPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIGs/bnVsbDpcInN0cmluZ1wiPT10eXBlb2Yga3x8XCJudW1iZXJcIj09dHlwZW9mIGt8fFwiYmlnaW50XCI9PXR5cGVvZiBrP3YobnVsbCxrLG51bGwsbnVsbCxrKTpBcnJheS5pc0FycmF5KGspP3YoeSx7Y2hpbGRyZW46a30sbnVsbCxudWxsLG51bGwpOmsuX19iPjA/dihrLnR5cGUsay5wcm9wcyxrLmtleSxudWxsLGsuX192KTprKSl7aWYoay5fXz11LGsuX19iPXUuX19iKzEsbnVsbD09PShfPUFbaF0pfHxfJiZrLmtleT09Xy5rZXkmJmsudHlwZT09PV8udHlwZSlBW2hdPXZvaWQgMDtlbHNlIGZvcihwPTA7cDxQO3ArKyl7aWYoKF89QVtwXSkmJmsua2V5PT1fLmtleSYmay50eXBlPT09Xy50eXBlKXtBW3BdPXZvaWQgMDticmVha31fPW51bGx9SShuLGssXz1ffHxyLHQsbyxlLGMscyxhKSxiPWsuX19lLChwPWsucmVmKSYmXy5yZWYhPXAmJih3fHwodz1bXSksXy5yZWYmJncucHVzaChfLnJlZixudWxsLGspLHcucHVzaChwLGsuX19jfHxiLGspKSxudWxsIT1iPyhudWxsPT1tJiYobT1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBrLnR5cGUmJm51bGwhPWsuX19rJiZrLl9faz09PV8uX19rP2suX19kPXM9ZyhrLHMsbik6cz14KG4sayxfLEEsYixzKSxhfHxcIm9wdGlvblwiIT09dS50eXBlP1wiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpOm4udmFsdWU9XCJcIik6cyYmXy5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ZChfKSl9Zm9yKHUuX19lPW0saD1QO2gtLTspbnVsbCE9QVtoXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9QVtoXS5fX2UmJkFbaF0uX19lPT11Ll9fZCYmKHUuX19kPWQoaSxoKzEpKSxMKEFbaF0sQVtoXSkpO2lmKHcpZm9yKGg9MDtoPHcubGVuZ3RoO2grKyl6KHdbaF0sd1srK2hdLHdbKytoXSl9ZnVuY3Rpb24gZyhuLGwsdSl7dmFyIGksdDtmb3IoaT0wO2k8bi5fX2subGVuZ3RoO2krKykodD1uLl9fa1tpXSkmJih0Ll9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnR5cGU/Zyh0LGwsdSk6eCh1LHQsdCxuLl9fayx0Ll9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gdyhuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe3cobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiB4KG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEEobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEMobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxDKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gUChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8ZS50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gQyhuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8UChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHxQKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9IOiQsbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9IOiQsbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gJChsKXt0aGlzLmxbbC50eXBlKyExXShuLmV2ZW50P24uZXZlbnQobCk6bCl9ZnVuY3Rpb24gSChsKXt0aGlzLmxbbC50eXBlKyEwXShuLmV2ZW50P24uZXZlbnQobCk6bCl9ZnVuY3Rpb24gSShsLHUsaSx0LG8scixmLGUscyl7dmFyIGEsdixoLGQsXyxrLGIsZyx3LHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYocz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwscj1bZV0pLChhPW4uX19iKSYmYSh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihnPXUucHJvcHMsdz0oYT1QLmNvbnRleHRUeXBlKSYmdFthLl9fY10seD1hP3c/dy5wcm9wcy52YWx1ZTphLl9fOnQsaS5fX2M/Yj0odj11Ll9fYz1pLl9fYykuX189di5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9dj1uZXcgUChnLHgpOih1Ll9fYz12PW5ldyBwKGcseCksdi5jb25zdHJ1Y3Rvcj1QLHYucmVuZGVyPU0pLHcmJncuc3ViKHYpLHYucHJvcHM9Zyx2LnN0YXRlfHwodi5zdGF0ZT17fSksdi5jb250ZXh0PXgsdi5fX249dCxoPXYuX19kPSEwLHYuX19oPVtdKSxudWxsPT12Ll9fcyYmKHYuX19zPXYuc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYodi5fX3M9PXYuc3RhdGUmJih2Ll9fcz1jKHt9LHYuX19zKSksYyh2Ll9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhnLHYuX19zKSkpLGQ9di5wcm9wcyxfPXYuc3RhdGUsaCludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9di5jb21wb25lbnRXaWxsTW91bnQmJnYuY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9di5jb21wb25lbnREaWRNb3VudCYmdi5fX2gucHVzaCh2LmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZnIT09ZCYmbnVsbCE9di5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZ2LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoZyx4KSwhdi5fX2UmJm51bGwhPXYuc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PXYuc2hvdWxkQ29tcG9uZW50VXBkYXRlKGcsdi5fX3MseCl8fHUuX192PT09aS5fX3Ype3YucHJvcHM9Zyx2LnN0YXRlPXYuX19zLHUuX192IT09aS5fX3YmJih2Ll9fZD0hMSksdi5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksdi5fX2gubGVuZ3RoJiZmLnB1c2godik7YnJlYWsgbn1udWxsIT12LmNvbXBvbmVudFdpbGxVcGRhdGUmJnYuY29tcG9uZW50V2lsbFVwZGF0ZShnLHYuX19zLHgpLG51bGwhPXYuY29tcG9uZW50RGlkVXBkYXRlJiZ2Ll9faC5wdXNoKGZ1bmN0aW9uKCl7di5jb21wb25lbnREaWRVcGRhdGUoZCxfLGspfSl9di5jb250ZXh0PXgsdi5wcm9wcz1nLHYuc3RhdGU9di5fX3MsKGE9bi5fX3IpJiZhKHUpLHYuX19kPSExLHYuX192PXUsdi5fX1A9bCxhPXYucmVuZGVyKHYucHJvcHMsdi5zdGF0ZSx2LmNvbnRleHQpLHYuc3RhdGU9di5fX3MsbnVsbCE9di5nZXRDaGlsZENvbnRleHQmJih0PWMoYyh7fSx0KSx2LmdldENoaWxkQ29udGV4dCgpKSksaHx8bnVsbD09di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShkLF8pKSxBPW51bGwhPWEmJmEudHlwZT09PXkmJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSxtKGwsQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxvLHIsZixlLHMpLHYuYmFzZT11Ll9fZSx1Ll9faD1udWxsLHYuX19oLmxlbmd0aCYmZi5wdXNoKHYpLGImJih2Ll9fRT12Ll9fPW51bGwpLHYuX19lPSExfWVsc2UgbnVsbD09ciYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPWooaS5fX2UsdSxpLHQsbyxyLGYscyk7KGE9bi5kaWZmZWQpJiZhKHUpfWNhdGNoKGwpe3UuX192PW51bGwsKHN8fG51bGwhPXIpJiYodS5fX2U9ZSx1Ll9faD0hIXMscltyLmluZGV4T2YoZSldPW51bGwpLG4uX19lKGwsdSxpKX19ZnVuY3Rpb24gVChsLHUpe24uX19jJiZuLl9fYyh1LGwpLGwuc29tZShmdW5jdGlvbih1KXt0cnl7bD11Ll9faCx1Ll9faD1bXSxsLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobCl7bi5fX2UobCx1Ll9fdil9fSl9ZnVuY3Rpb24gaihuLGwsdSxpLHQsbyxlLGMpe3ZhciBhLHYsaCx5LHA9dS5wcm9wcyxkPWwucHJvcHMsXz1sLnR5cGUsaz0wO2lmKFwic3ZnXCI9PT1fJiYodD0hMCksbnVsbCE9bylmb3IoO2s8by5sZW5ndGg7aysrKWlmKChhPW9ba10pJiYoYT09PW58fChfP2EubG9jYWxOYW1lPT1fOjM9PWEubm9kZVR5cGUpKSl7bj1hLG9ba109bnVsbDticmVha31pZihudWxsPT1uKXtpZihudWxsPT09XylyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZCk7bj10P2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXyk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChfLGQuaXMmJmQpLG89bnVsbCxjPSExfWlmKG51bGw9PT1fKXA9PT1kfHxjJiZuLmRhdGE9PT1kfHwobi5kYXRhPWQpO2Vsc2V7aWYobz1vJiZmLnNsaWNlLmNhbGwobi5jaGlsZE5vZGVzKSx2PShwPXUucHJvcHN8fHIpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLGg9ZC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9bylmb3IocD17fSx5PTA7eTxuLmF0dHJpYnV0ZXMubGVuZ3RoO3krKylwW24uYXR0cmlidXRlc1t5XS5uYW1lXT1uLmF0dHJpYnV0ZXNbeV0udmFsdWU7KGh8fHYpJiYoaCYmKHYmJmguX19odG1sPT12Ll9faHRtbHx8aC5fX2h0bWw9PT1uLmlubmVySFRNTCl8fChuLmlubmVySFRNTD1oJiZoLl9faHRtbHx8XCJcIikpfWlmKEEobixkLHAsdCxjKSxoKWwuX19rPVtdO2Vsc2UgaWYoaz1sLnByb3BzLmNoaWxkcmVuLG0obixBcnJheS5pc0FycmF5KGspP2s6W2tdLGwsdSxpLHQmJlwiZm9yZWlnbk9iamVjdFwiIT09XyxvLGUsbi5maXJzdENoaWxkLGMpLG51bGwhPW8pZm9yKGs9by5sZW5ndGg7ay0tOyludWxsIT1vW2tdJiZzKG9ba10pO2N8fChcInZhbHVlXCJpbiBkJiZ2b2lkIDAhPT0oaz1kLnZhbHVlKSYmKGshPT1uLnZhbHVlfHxcInByb2dyZXNzXCI9PT1fJiYhaykmJkMobixcInZhbHVlXCIsayxwLnZhbHVlLCExKSxcImNoZWNrZWRcImluIGQmJnZvaWQgMCE9PShrPWQuY2hlY2tlZCkmJmshPT1uLmNoZWNrZWQmJkMobixcImNoZWNrZWRcIixrLHAuY2hlY2tlZCwhMSkpfXJldHVybiBufWZ1bmN0aW9uIHoobCx1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2wodSk6bC5jdXJyZW50PXV9Y2F0Y2gobCl7bi5fX2UobCxpKX19ZnVuY3Rpb24gTChsLHUsaSl7dmFyIHQsbyxyO2lmKG4udW5tb3VudCYmbi51bm1vdW50KGwpLCh0PWwucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bC5fX2V8fHoodCxudWxsLHUpKSxpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGV8fChpPW51bGwhPShvPWwuX19lKSksbC5fX2U9bC5fX2Q9dm9pZCAwLG51bGwhPSh0PWwuX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGwpe24uX19lKGwsdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1sLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJkwodFtyXSx1LGkpO251bGwhPW8mJnMobyl9ZnVuY3Rpb24gTShuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBOKGwsdSxpKXt2YXIgdCxvLGU7bi5fXyYmbi5fXyhsLHUpLG89KHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgaSk/bnVsbDppJiZpLl9fa3x8dS5fX2ssZT1bXSxJKHUsbD0oIXQmJml8fHUpLl9faz1hKHksbnVsbCxbbF0pLG98fHIscix2b2lkIDAhPT11Lm93bmVyU1ZHRWxlbWVudCwhdCYmaT9baV06bz9udWxsOnUuZmlyc3RDaGlsZD9mLnNsaWNlLmNhbGwodS5jaGlsZE5vZGVzKTpudWxsLGUsIXQmJmk/aTpvP28uX19lOnUuZmlyc3RDaGlsZCx0KSxUKGUsbCl9ZnVuY3Rpb24gTyhuLGwpe04obixsLE8pfWZ1bmN0aW9uIFMobixsLHUpe3ZhciBpLHQsbyxyPWFyZ3VtZW50cyxmPWMoe30sbi5wcm9wcyk7Zm9yKG8gaW4gbClcImtleVwiPT1vP2k9bFtvXTpcInJlZlwiPT1vP3Q9bFtvXTpmW29dPWxbb107aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSxvPTM7bzxhcmd1bWVudHMubGVuZ3RoO28rKyl1LnB1c2gocltvXSk7cmV0dXJuIG51bGwhPXUmJihmLmNoaWxkcmVuPXUpLHYobi50eXBlLGYsaXx8bi5rZXksdHx8bi5yZWYsbnVsbCl9ZnVuY3Rpb24gcShuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitvKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShrKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYoKGk9dS5jb25zdHJ1Y3RvcikmJm51bGwhPWkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodS5zZXRTdGF0ZShpLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSksdD11Ll9fZCksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHUuY29tcG9uZW50RGlkQ2F0Y2gobiksdD11Ll9fZCksdClyZXR1cm4gdS5fX0U9dX1jYXRjaChsKXtuPWx9dGhyb3cgbn0sX192OjB9LGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LHAucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWMoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihjKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZjKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLGsodGhpcykpfSxwLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksayh0aGlzKSl9LHAucHJvdG90eXBlLnJlbmRlcj15LHU9W10saT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxiLl9fcj0wLG89MDtleHBvcnR7TiBhcyByZW5kZXIsTyBhcyBoeWRyYXRlLGEgYXMgY3JlYXRlRWxlbWVudCxhIGFzIGgseSBhcyBGcmFnbWVudCxoIGFzIGNyZWF0ZVJlZixsIGFzIGlzVmFsaWRFbGVtZW50LHAgYXMgQ29tcG9uZW50LFMgYXMgY2xvbmVFbGVtZW50LHEgYXMgY3JlYXRlQ29udGV4dCx3IGFzIHRvQ2hpbGRBcnJheSxuIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsZChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gZChuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEEobix0KXtyZXR1cm4gbz04LGQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gRihuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uX19jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gVCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PXZvaWQgMH0sbi5fX2M9ZnVuY3Rpb24odCx1KXt1LnNvbWUoZnVuY3Rpb24odCl7dHJ5e3QuX19oLmZvckVhY2goZyksdC5fX2g9dC5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxqKG4pfSl9Y2F0Y2gocil7dS5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdT1bXSxuLl9fZShyLHQuX192KX19KSxhJiZhKHQsdSl9LG4udW5tb3VudD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciB1PXQuX19jO2lmKHUmJnUuX19IKXRyeXt1Ll9fSC5fXy5mb3JFYWNoKGcpfWNhdGNoKHQpe24uX19lKHQsdS5fX3YpfX07dmFyIGI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGcobil7dmFyIHQ9dTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKSx1PXR9ZnVuY3Rpb24gaihuKXt2YXIgdD11O24uX19jPW4uX18oKSx1PXR9ZnVuY3Rpb24gayhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e2wgYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLHkgYXMgdXNlRWZmZWN0LGggYXMgdXNlTGF5b3V0RWZmZWN0LHMgYXMgdXNlUmVmLF8gYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxkIGFzIHVzZU1lbW8sQSBhcyB1c2VDYWxsYmFjayxGIGFzIHVzZUNvbnRleHQsVCBhcyB1c2VEZWJ1Z1ZhbHVlLHEgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyByLEZyYWdtZW50IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e0ZyYWdtZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIG8oXyxvLGUsbix0KXt2YXIgZj17fTtmb3IodmFyIGwgaW4gbylcInJlZlwiIT1sJiYoZltsXT1vW2xdKTt2YXIgcyx1LGE9e3R5cGU6Xyxwcm9wczpmLGtleTplLHJlZjpvJiZvLnJlZixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjorK3IuX192LF9fc291cmNlOm4sX19zZWxmOnR9O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIF8mJihzPV8uZGVmYXVsdFByb3BzKSlmb3IodSBpbiBzKXZvaWQgMD09PWZbdV0mJihmW3VdPXNbdV0pO3JldHVybiByLnZub2RlJiZyLnZub2RlKGEpLGF9ZXhwb3J0e28gYXMganN4LG8gYXMganN4cyxvIGFzIGpzeERFVn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc3hSdW50aW1lLm1vZHVsZS5qcy5tYXBcbiIsImZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IG1lcmdlKHsgLi4udGFyZ2V0W2tleV0gfSwgc291cmNlW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlcyhvYmopIHtcbiAgY29uc3QgdmFsdWVzID0gW107XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgY29uc3QgdmFsID0gb2JqW2tleV07XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZXMucHVzaCguLi5nZXRWYWx1ZXModmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlcy5wdXNoKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGU5KC4uLnN0eWxlcykge1xuICBjb25zdCBtZXJnZWQgPSBzdHlsZXMucmVkdWNlKG1lcmdlLCB7fSk7XG4gIHJldHVybiBnZXRWYWx1ZXMobWVyZ2VkKS5qb2luKCcgJyk7XG59XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZTkuY3JlYXRlID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3N0eWxlOS5jcmVhdGUgY2FsbHMgc2hvdWxkIGJlIGNvbXBpbGVkIGF3YXknKTtcbn07XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZTkua2V5ZnJhbWVzID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3N0eWxlOS5rZXlmcmFtZXMgY2FsbHMgc2hvdWxkIGJlIGNvbXBpbGVkIGF3YXknKTtcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdnVuZGVmaW5lZFxuICogdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIHJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy9cbi8vIEluIG9yZGVyIHRvIGF2b2lkIHJlbW92aW5nIGFuZCByZS1hZGRpbmcgc3Vic2NyaXB0aW9ucyBlYWNoIHRpbWUgdGhpcyBob29rIGlzIGNhbGxlZCxcbi8vIHRoZSBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGlzIGhvb2sgc2hvdWxkIGJlIG1lbW9pemVkIGluIHNvbWUgd2F54oCTXG4vLyBlaXRoZXIgYnkgd3JhcHBpbmcgdGhlIGVudGlyZSBwYXJhbXMgb2JqZWN0IHdpdGggdXNlTWVtbygpXG4vLyBvciBieSB3cmFwcGluZyB0aGUgaW5kaXZpZHVhbCBjYWxsYmFja3Mgd2l0aCB1c2VDYWxsYmFjaygpLlxuXG5mdW5jdGlvbiB1c2VTdWJzY3JpcHRpb24oX3JlZikge1xuICB2YXIgZ2V0Q3VycmVudFZhbHVlID0gX3JlZi5nZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmUgPSBfcmVmLnN1YnNjcmliZTtcblxuICAvLyBSZWFkIHRoZSBjdXJyZW50IHZhbHVlIGZyb20gb3VyIHN1YnNjcmlwdGlvbi5cbiAgLy8gV2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMsIHdlJ2xsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIFJlYWN0LlxuICAvLyBJdCdzIGltcG9ydGFudCB0byBhbHNvIHN0b3JlIHRoZSBob29rIHBhcmFtcyBzbyB0aGF0IHdlIGNhbiBjaGVjayBmb3Igc3RhbGVuZXNzLlxuICAvLyAoU2VlIHRoZSBjb21tZW50IGluIGNoZWNrRm9yVXBkYXRlcygpIGJlbG93IGZvciBtb3JlIGluZm8uKVxuICB2YXIgX3VzZVN0YXRlID0gcmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IGdldEN1cnJlbnRWYWx1ZSgpXG4gICAgfTtcbiAgfSksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciB2YWx1ZVRvUmV0dXJuID0gc3RhdGUudmFsdWU7IC8vIElmIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkIHNpbmNlIG91ciBsYXN0IHJlbmRlciwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggaXRzIGN1cnJlbnQgdmFsdWUuXG5cbiAgaWYgKHN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgLy8gSWYgdGhlIHN1YnNjcmlwdGlvbiBoYXMgYmVlbiB1cGRhdGVkLCB3ZSdsbCBzY2hlZHVsZSBhbm90aGVyIHVwZGF0ZSB3aXRoIFJlYWN0LlxuICAgIC8vIFJlYWN0IHdpbGwgcHJvY2VzcyB0aGlzIHVwZGF0ZSBpbW1lZGlhdGVseSwgc28gdGhlIG9sZCBzdWJzY3JpcHRpb24gdmFsdWUgd29uJ3QgYmUgY29tbWl0dGVkLlxuICAgIC8vIEl0IGlzIHN0aWxsIG5pY2UgdG8gYXZvaWQgcmV0dXJuaW5nIGEgbWlzbWF0Y2hlZCB2YWx1ZSB0aG91Z2gsIHNvIGxldCdzIG92ZXJyaWRlIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgdmFsdWVUb1JldHVybiA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogdmFsdWVUb1JldHVyblxuICAgIH0pO1xuICB9IC8vIERpc3BsYXkgdGhlIGN1cnJlbnQgdmFsdWUgZm9yIHRoaXMgaG9vayBpbiBSZWFjdCBEZXZUb29scy5cblxuXG4gIHJlYWN0LnVzZURlYnVnVmFsdWUodmFsdWVUb1JldHVybik7IC8vIEl0IGlzIGltcG9ydGFudCBub3QgdG8gc3Vic2NyaWJlIHdoaWxlIHJlbmRlcmluZyBiZWNhdXNlIHRoaXMgY2FuIGxlYWQgdG8gbWVtb3J5IGxlYWtzLlxuICAvLyAoTGVhcm4gbW9yZSBhdCByZWFjdGpzLm9yZy9kb2NzL3N0cmljdC1tb2RlLmh0bWwjZGV0ZWN0aW5nLXVuZXhwZWN0ZWQtc2lkZS1lZmZlY3RzKVxuICAvLyBJbnN0ZWFkLCB3ZSB3YWl0IHVudGlsIHRoZSBjb21taXQgcGhhc2UgdG8gYXR0YWNoIG91ciBoYW5kbGVyLlxuICAvL1xuICAvLyBXZSBpbnRlbnRpb25hbGx5IHVzZSBhIHBhc3NpdmUgZWZmZWN0ICh1c2VFZmZlY3QpIHJhdGhlciB0aGFuIGEgc3luY2hyb25vdXMgb25lICh1c2VMYXlvdXRFZmZlY3QpXG4gIC8vIHNvIHRoYXQgd2UgZG9uJ3Qgc3RyZXRjaCB0aGUgY29tbWl0IHBoYXNlLlxuICAvLyBUaGlzIGFsc28gaGFzIGFuIGFkZGVkIGJlbmVmaXQgd2hlbiBtdWx0aXBsZSBjb21wb25lbnRzIGFyZSBzdWJzY3JpYmVkIHRvIHRoZSBzYW1lIHNvdXJjZTpcbiAgLy8gSXQgYWxsb3dzIGVhY2ggb2YgdGhlIGV2ZW50IGhhbmRsZXJzIHRvIHNhZmVseSBzY2hlZHVsZSB3b3JrIHdpdGhvdXQgcG90ZW50aWFsbHkgcmVtb3ZpbmcgYW4gYW5vdGhlciBoYW5kbGVyLlxuICAvLyAoTGVhcm4gbW9yZSBhdCBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvazB5dnI1OTcwbylcblxuICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuXG4gICAgdmFyIGNoZWNrRm9yVXBkYXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBldmVuIGFmdGVyIGJlaW5nIHVuc3Vic2NyaWJlZCxcbiAgICAgIC8vIGlmIGl0J3MgcmVtb3ZlZCBhcyBhIHJlc3VsdCBvZiBhIHN1YnNjcmlwdGlvbiBldmVudC91cGRhdGUuXG4gICAgICAvLyBJbiB0aGlzIGNhc2UsIFJlYWN0IHdpbGwgbG9nIGEgREVWIHdhcm5pbmcgYWJvdXQgYW4gdXBkYXRlIGZyb20gYW4gdW5tb3VudGVkIGNvbXBvbmVudC5cbiAgICAgIC8vIFdlIGNhbiBhdm9pZCB0cmlnZ2VyaW5nIHRoYXQgd2FybmluZyB3aXRoIHRoaXMgY2hlY2suXG4gICAgICBpZiAoZGlkVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXZSB1c2UgYSBzdGF0ZSB1cGRhdGVyIGZ1bmN0aW9uIHRvIGF2b2lkIHNjaGVkdWxpbmcgd29yayBmb3IgYSBzdGFsZSBzb3VyY2UuXG4gICAgICAvLyBIb3dldmVyIGl0J3MgaW1wb3J0YW50IHRvIGVhZ2VybHkgcmVhZCB0aGUgY3VycmVudGx5IHZhbHVlLFxuICAgICAgLy8gc28gdGhhdCBhbGwgc2NoZWR1bGVkIHdvcmsgc2hhcmVzIHRoZSBzYW1lIHZhbHVlIChpbiB0aGUgZXZlbnQgb2YgbXVsdGlwbGUgc3Vic2NyaXB0aW9ucykuXG4gICAgICAvLyBUaGlzIGF2b2lkcyB2aXN1YWwgXCJ0ZWFyaW5nXCIgd2hlbiBhIG11dGF0aW9uIGhhcHBlbnMgZHVyaW5nIGEgKGNvbmN1cnJlbnQpIHJlbmRlci5cblxuXG4gICAgICB2YXIgdmFsdWUgPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgLy8gSWdub3JlIHZhbHVlcyBmcm9tIHN0YWxlIHNvdXJjZXMhXG4gICAgICAgIC8vIFNpbmNlIHdlIHN1YnNjcmliZSBhbiB1bnN1YnNjcmliZSBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZm9yIGEgc3RhbGUgKHByZXZpb3VzKSBzdWJzY3JpcHRpb24uXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgYXZvaWRzIHNjaGVkdWxpbmcgYW4gdXBkYXRlIGZvciB0aGF0IHN0YWxlIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBwcmV2U3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9IC8vIFNvbWUgc3Vic2NyaXB0aW9ucyB3aWxsIGF1dG8taW52b2tlIHRoZSBoYW5kbGVyLCBldmVuIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZC5cbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLCBubyB1cGRhdGUgaXMgbmVlZGVkLlxuICAgICAgICAvLyBSZXR1cm4gc3RhdGUgYXMtaXMgc28gUmVhY3QgY2FuIGJhaWwgb3V0IGFuZCBhdm9pZCBhbiB1bm5lY2Vzc2FyeSByZW5kZXIuXG5cblxuICAgICAgICBpZiAocHJldlN0YXRlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShjaGVja0ZvclVwZGF0ZXMpOyAvLyBCZWNhdXNlIHdlJ3JlIHN1YnNjcmliaW5nIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IGFuIHVwZGF0ZSBoYXMgb2NjdXJyZWQgYmV0d2VlbiByZW5kZXIgYW5kIG91ciBlZmZlY3QgaGFuZGxlci5cbiAgICAvLyBDaGVjayBmb3IgdGhpcyBhbmQgc2NoZWR1bGUgYW4gdXBkYXRlIGlmIHdvcmsgaGFzIG9jY3VycmVkLlxuXG4gICAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW2dldEN1cnJlbnRWYWx1ZSwgc3Vic2NyaWJlXSk7IC8vIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBmb3Igb3VyIGNhbGxlciB0byB1c2Ugd2hpbGUgcmVuZGVyaW5nLlxuXG4gIHJldHVybiB2YWx1ZVRvUmV0dXJuO1xufVxuXG5leHBvcnRzLnVzZVN1YnNjcmlwdGlvbiA9IHVzZVN1YnNjcmlwdGlvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9JbmRleFBhZ2UvaW5kZXhcIjogW1xuXHRcdFwiLi9zcmMvcGFnZXMvSW5kZXhQYWdlL2luZGV4LnRzeFwiLFxuXHRcdFwic3R5bGVzXCIsXG5cdFx0XCJzcmNfcGFnZXNfSW5kZXhQYWdlX2luZGV4X3RzeFwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvcGFnZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvaW5kZXgkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIFwiMGE4YTIyN2M3YzJkMmYzNDFkMTZcIiArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuY3NzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInBhc3N3b3JkLW1hbmFnZXI6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwLFxuXHRcInN0eWxlc1wiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKFwic3R5bGVzXCIgIT0gY2h1bmtJZCkge1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwYXNzd29yZF9tYW5hZ2VyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3Bhc3N3b3JkX21hbmFnZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=