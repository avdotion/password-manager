(self["webpackChunkpassword_manager"] = self["webpackChunkpassword_manager"] || []).push([["src_pages_IndexPage_index_tsx"],{

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

/***/ "./src/pages/IndexPage/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/IndexPage/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context */ "./src/context.ts");
/* harmony import */ var _features_CopySaltedPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/CopySaltedPassword */ "./src/features/CopySaltedPassword/index.ts");
/* harmony import */ var _features_DynamicBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/DynamicBackground */ "./src/features/DynamicBackground/index.ts");
/* harmony import */ var _features_EmojiPrompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/EmojiPrompt */ "./src/features/EmojiPrompt/index.ts");
/* harmony import */ var _features_GeneratedPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/GeneratedPassword */ "./src/features/GeneratedPassword/index.ts");
/* harmony import */ var _features_PasswordSalting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/PasswordSalting */ "./src/features/PasswordSalting/index.ts");
/* harmony import */ var _features_SaltedPasswordLength__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/SaltedPasswordLength */ "./src/features/SaltedPasswordLength/index.ts");
/* harmony import */ var _features_SelectHashFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/SelectHashFunction */ "./src/features/SelectHashFunction/index.ts");
/* harmony import */ var _features_SessionTerminator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../features/SessionTerminator */ "./src/features/SessionTerminator/index.ts");
/* harmony import */ var _ui_layout_Frame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/layout/Frame */ "./src/ui/layout/Frame.tsx");
/* harmony import */ var _ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/layout/Spacing */ "./src/ui/layout/Spacing.tsx");
/* harmony import */ var _ui_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/Link */ "./src/ui/Link/index.tsx");
/* harmony import */ var _ui_Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/Text */ "./src/ui/Text/index.tsx");
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_pages_IndexPage_index_1Gi99HK_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/pages/IndexPage/index.1Gi99HK.css */ "./src/pages/IndexPage/index.1Gi99HK.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");













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
const BaseLayout = (0,_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_9__.overrideFrame)({
  styles: [indexPageStyles.baseLayout],
  as: 'main',
  def: 'base-layout'
});
function IndexPage() {
  const {
    repoLink,
    title
  } = _context__WEBPACK_IMPORTED_MODULE_0__.CONTEXT;
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_features_DynamicBackground__WEBPACK_IMPORTED_MODULE_2__.DynamicBackground, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(BaseLayout, {
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_Text__WEBPACK_IMPORTED_MODULE_12__.Text, {
        size: "xl",
        weight: "semiBold",
        children: title
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_Text__WEBPACK_IMPORTED_MODULE_12__.Text, {
        children: "...is secure and convenient!"
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_10__.VerticalSpacing, {
        size: 1
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_Link__WEBPACK_IMPORTED_MODULE_11__.Link, {
        href: repoLink,
        target: "_blank",
        tabIndex: 4,
        children: "Source code: How it works and what to do if an app become unavailable?"
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_10__.VerticalSpacing, {
        size: 10
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_features_PasswordSalting__WEBPACK_IMPORTED_MODULE_5__.PasswordSalting, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_10__.VerticalSpacing, {
        size: 6
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_features_EmojiPrompt__WEBPACK_IMPORTED_MODULE_3__.EmojiPrompt, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_10__.VerticalSpacing, {
        size: 6
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_ui_layout_Frame__WEBPACK_IMPORTED_MODULE_9__.Frame, {
        direction: "row",
        gap: 6,
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_features_SelectHashFunction__WEBPACK_IMPORTED_MODULE_7__.SelectHashFunction, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_features_SaltedPasswordLength__WEBPACK_IMPORTED_MODULE_6__.SaltedPasswordLength, {})]
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_10__.VerticalSpacing, {
        size: 6
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_features_CopySaltedPassword__WEBPACK_IMPORTED_MODULE_1__.CopySaltedPasswordButton, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_10__.VerticalSpacing, {
        size: 2
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_features_GeneratedPassword__WEBPACK_IMPORTED_MODULE_4__.GeneratedPassword, {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_layout_Spacing__WEBPACK_IMPORTED_MODULE_10__.VerticalSpacing, {
        size: 4
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_features_SessionTerminator__WEBPACK_IMPORTED_MODULE_8__.SessionTerminator, {})]
    })]
  });
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
/* harmony import */ var _Users_avdotion_sandbox_password_manager_src_ui_TextField_password_1WcruGx_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/ui/TextField/password.1WcruGx.css */ "./src/ui/TextField/password.1WcruGx.css");
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
      fontFamily: "c1kq5j8m"
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
    fontFamily: "c1r9fxf9"
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

/***/ "./src/ui/Link/index.2SxzEtD.css":
/*!***************************************!*\
  !*** ./src/ui/Link/index.2SxzEtD.css ***!
  \***************************************/
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

/***/ "./src/ui/TextField/password.1WcruGx.css":
/*!***********************************************!*\
  !*** ./src/ui/TextField/password.1WcruGx.css ***!
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL0NvcHlTYWx0ZWRQYXNzd29yZC92aWV3LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL0R5bmFtaWNCYWNrZ3JvdW5kL3ZpZXcudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvRW1vamlQcm9tcHQvY29udGV4dC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL0Vtb2ppUHJvbXB0L2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvRW1vamlQcm9tcHQvdmlldy50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9HZW5lcmF0ZWRQYXNzd29yZC9jb250ZXh0LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvR2VuZXJhdGVkUGFzc3dvcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9mZWF0dXJlcy9HZW5lcmF0ZWRQYXNzd29yZC92aWV3LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1Bhc3N3b3JkU2FsdGluZy9jb250ZXh0LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvUGFzc3dvcmRTYWx0aW5nL2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvUGFzc3dvcmRTYWx0aW5nL3ZpZXcudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvU2Vzc2lvblRlcm1pbmF0b3IvY29udGV4dC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL2ZlYXR1cmVzL1Nlc3Npb25UZXJtaW5hdG9yL2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvU2Vzc2lvblRlcm1pbmF0b3Ivdmlldy50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy9wYWdlcy9JbmRleFBhZ2UvaW5kZXgudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL0xpbmsvaW5kZXgudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvU3BvaWxlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9UZXh0RmllbGQvZW1haWwudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvVGV4dEZpZWxkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1RleHRGaWVsZC9udW1iZXIudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvVGV4dEZpZWxkL3Bhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1RleHRGaWVsZC90ZXh0LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1RleHRGaWVsZC91cmwudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvbGF5b3V0L1NwYWNpbmcudHN4Iiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdXRpbHMvaGlnaC1vcmRlci50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3V0aWxzL3JhbmRvbS50cyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NvcHktdG8tY2xpcGJvYXJkL2luZGV4LmpzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvRHluYW1pY0JhY2tncm91bmQvdmlldy4xU1VzTlBoLmNzcz9jMmQyIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvRW1vamlQcm9tcHQvdmlldy40dGdkekhPLmNzcz9iYjdjIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvZmVhdHVyZXMvR2VuZXJhdGVkUGFzc3dvcmQvdmlldy5uVXZjZEptLmNzcz8xYTJkIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvcGFnZXMvSW5kZXhQYWdlL2luZGV4LjFHaTk5SEsuY3NzPzcwYWUiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9CdXR0b24vaW5kZXguVWw2aDRhSy5jc3M/ZDBhMiIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL0xpbmsvaW5kZXguMlN4ekV0RC5jc3M/MTFhMiIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1Nwb2lsZXIvaW5kZXguVDNnM3c4eS5jc3M/YjkyNiIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1RleHRGaWVsZC9lbWFpbC5baGFzaDpiYXNlNjQ6N10uY3NzIiwid2VicGFjazovL3Bhc3N3b3JkLW1hbmFnZXIvLi9zcmMvdWkvVGV4dEZpZWxkL2luZGV4Lmo1U3ZEeWUuY3NzPzczYTkiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9UZXh0RmllbGQvbnVtYmVyLltoYXNoOmJhc2U2NDo3XS5jc3MiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9UZXh0RmllbGQvcGFzc3dvcmQuMVdjcnVHeC5jc3M/Yzg0NyIsIndlYnBhY2s6Ly9wYXNzd29yZC1tYW5hZ2VyLy4vc3JjL3VpL1RleHRGaWVsZC90ZXh0LltoYXNoOmJhc2U2NDo3XS5jc3MiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL3NyYy91aS9UZXh0RmllbGQvdXJsLltoYXNoOmJhc2U2NDo3XS5jc3MiLCJ3ZWJwYWNrOi8vcGFzc3dvcmQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy90b2dnbGUtc2VsZWN0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvcHlTYWx0ZWRQYXNzd29yZEJ1dHRvbiIsInNhbHRlZFBhc3N3b3JkVmFsdWUiLCJ1c2VBdG9tIiwic2FsdGVkUGFzc3dvcmQiLCJjb3B5VG9DbGlwYm9hcmQiLCJicm93c2VyQ29weSIsImR5bmFtaWNCYWNrZ3JvdW5kU3R5bGVzIiwiU1RBUlQiLCJFTkQiLCJPRkZfVEhFX1JPT1QiLCJEeW5hbWljQmFja2dyb3VuZCIsIm1lbW8iLCJ0aW1lcyIsImluZGV4IiwicmFuZG9tRW1vamkiLCJjaG9pY2UiLCJYIiwiTWF0aCIsIlkiLCJmb250U2l6ZSIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJwaWNrRW1vamkiLCJ2YWx1ZSIsInN0cmluZ1RvTnVtYmVyIiwiQ09MT1JGVUxfRU1PSklTX09SREVSRURfTElTVCIsIlNBTFRfU0hJRlQiLCJlbW9qaVByb21wdCIsImF0b20iLCIkIiwibWFzdGVyUGFzc3dvcmQiLCJERUZBVUxUX0VNT0pJIiwiZG9tYWluTmFtZSIsImV4dHJhY3RIb3N0IiwiZW1haWwiLCJlbW9qaVByb21wdFN0eWxlcyIsImVtb2ppUHJvbXB0VmFsdWUiLCJzYWx0VGhlUGFzcyIsImhhc2hGdW5jdGlvbiIsInNhbHRlZFBhc3N3b3JkTGVuZ3RoIiwic2hvd1NhbHRlZFBhc3N3b3JkIiwic3RhdGUiLCJ0b2dnbGUiLCJfIiwiZ2VuZXJhdGVkUGFzc3dvcmRTdHlsZXMiLCJzY2FsYXJDaGFuZ2UiLCJuZXdWYWx1ZSIsImNoYW5nZSIsIlBhc3N3b3JkU2FsdGluZyIsIm1hc3RlclBhc3N3b3JkVmFsdWUiLCJvbkNoYW5nZU1hc3RlclBhc3N3b3JkIiwiZG9tYWluTmFtZVZhbHVlIiwib25DaGFuZ2VEb21haW5OYW1lIiwiZW1haWxWYWx1ZSIsIm9uQ2hhbmdlRW1haWwiLCJ0ZXJtaW5hdGlvblRpbWVMZWZ0IiwiY3VycmVudFNhbHRlZFBhc3N3b3JkIiwic3RvcmUiLCJjdHgiLCJkaXNwYXRjaCIsInJlc2V0IiwidGVybWluYXRlIiwiZmlsbCIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiZGVjIiwiY3VycmVudCIsIm1heCIsIlNFU1NJT05fVElNRV9UT19URVJNSU5BVEUiLCJjcmVhdGVDdHgiLCJkZWJvdW5jZSIsIlNFQ09ORFNfSU5fTUlOVVRFIiwiZm9ybWF0VGltZSIsInRpbWUiLCJ0aW1lSW5TZWNvbmRzIiwiZmxvb3IiLCJtaW51dGVzIiwiU3RyaW5nIiwic2Vjb25kcyIsInBhZFN0YXJ0IiwiU2Vzc2lvblRlcm1pbmF0b3IiLCJ0ZXJtaW5hdGlvblRpbWVMZWZ0VmFsdWUiLCJpbmRleFBhZ2VTdHlsZXMiLCJCYXNlTGF5b3V0Iiwib3ZlcnJpZGVGcmFtZSIsInN0eWxlcyIsImFzIiwiZGVmIiwidGl0bGUiLCJidXR0b25TdHlsZXMiLCJ2YXJpYW50U3R5bGVzIiwic2l6ZVN0eWxlcyIsImNoaWxkcmVuIiwic2l6ZSIsInByb3BzIiwic3R5bGU5IiwibGlua1N0eWxlIiwic3BvaWxlclN0eWxlcyIsIm9wZW4iLCJFbWFpbElucHV0IiwiZm9yd2FyZFJlZiIsInRleHRGaWVsZFN0eWxlcyIsInRleHRGaWVsZFdyYXBwZXJTaXplIiwidGV4dEZpZWxkSHRtbElucHV0U2l6ZSIsIklOUFVUX0NPTVBPTkVOVFMiLCJwYXNzd29yZCIsInRleHQiLCJ1cmwiLCJudW1iZXIiLCJOdW1iZXJJbnB1dCIsIndyYXBwZXJTdHlsZXMiLCJpbnB1dFN0eWxlcyIsIm9uSW5wdXRDaGFuZ2UiLCJldmVudCIsIm9uQ2hhbmdlIiwiaHRtbElucHV0UmVmIiwidXNlUmVmIiwib25XcmFwcGVyQ2xpY2siLCJ1c2VTdGF0ZSIsIm9uSW5wdXRGb2N1cyIsInNldEZvY3VzZWQiLCJvbklucHV0Qmx1ciIsIklucHV0Q29tcG9uZW50IiwiZm9jdXNlZCIsImZhbWlseVN0eWxlcyIsIndlaWdodFN0eWxlcyIsInBhc3N3b3JkRmllbGRTdHlsZXMiLCJtYXNrIiwiZ2VuZXJhdGVTdHJpbmciLCJQYXNzd29yZElucHV0Iiwib25TaG93QnV0dG9uQ2xpY2siLCJzZXRIaWRkZW4iLCJoaWRkZW4iLCJUZXh0SW5wdXQiLCJVcmxJbnB1dCIsIm9uQmx1ciIsIm9uVmFsdWVDaGFuZ2UiLCJleHRyYWN0T3JpZ2luIiwib25CbHVyQ2FsbGJhY2siLCJWZXJ0aWNhbFNwYWNpbmciLCJjYWxsYmFjayIsIndhaXRGb3IiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiYXJncyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsIkNIQVJfU0VUIiwiQXJyYXkiLCJmcm9tIiwiU2V0Iiwic3BsaXQiLCJpdGVyYWJsZSIsInJhbmRvbUluZGV4IiwicmFuZG9tIiwibGVuZ3RoIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTs7QUFFTyxTQUFTQSx3QkFBVCxHQUFrRDtBQUNyRCxRQUFNLENBQUNDLG1CQUFELElBQXdCQyxzREFBTyxDQUFDQyw4REFBRCxDQUFyQzs7QUFFQSxRQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUMxQkMsa0RBQVcsQ0FBQ0osbUJBQUQsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsU0FBT0EsbUJBQW1CLEtBQUssRUFBeEIsR0FFQyx3REFBQyw4Q0FBRDtBQUFRLFdBQU8sRUFBQyxRQUFoQjtBQUF5QixZQUFRLEVBQUUsQ0FBbkM7QUFBc0MsV0FBTyxFQUFFRyxlQUEvQztBQUFBO0FBQUEsSUFGRCxHQU9DLHdEQUFDLDhDQUFEO0FBQVEsV0FBTyxFQUFDLFFBQWhCO0FBQXlCLFlBQVEsRUFBRSxDQUFuQztBQUFzQyxZQUFRLE1BQTlDO0FBQUE7QUFBQSxJQVBSO0FBWUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNoSEE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNyY19wYWdlc19JbmRleFBhZ2VfaW5kZXhfdHN4LjBhOGEyMjdjN2MyZDJmMzQxZDE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYnJvd3NlckNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IHt1c2VBdG9tfSBmcm9tICdAcmVhdG9tL3JlYWN0JztcbmltcG9ydCB7SlNYfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vLi4vdWkvQnV0dG9uJztcbmltcG9ydCB7c2FsdGVkUGFzc3dvcmR9IGZyb20gJy4uL0dlbmVyYXRlZFBhc3N3b3JkJztcblxuZXhwb3J0IGZ1bmN0aW9uIENvcHlTYWx0ZWRQYXNzd29yZEJ1dHRvbiAoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFtzYWx0ZWRQYXNzd29yZFZhbHVlXSA9IHVzZUF0b20oc2FsdGVkUGFzc3dvcmQpO1xuXG4gICAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKCkgPT4ge1xuICAgICAgICBicm93c2VyQ29weShzYWx0ZWRQYXNzd29yZFZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNhbHRlZFBhc3N3b3JkVmFsdWUgIT09ICcnXG4gICAgICAgID8gKFxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiYWN0aW9uXCIgdGFiSW5kZXg9ezF9IG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH0+XG4gICAgICAgICAgICAgICAgQ29weSBTYWx0ZWQgUGFzc3dvcmRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApXG4gICAgICAgIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiYWN0aW9uXCIgdGFiSW5kZXg9ezF9IGRpc2FibGVkPlxuICAgICAgICAgICAgICAgIFNhbHQgdGhlIHBhc3MhXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKVxuICAgIDtcbn1cbiIsImltcG9ydCB7bWVtb30gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQge0pTWH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBzdHlsZTkgZnJvbSAnc3R5bGU5JztcblxuaW1wb3J0IHtDT0xPUkZVTF9FTU9KSVNfT1JERVJFRF9MSVNUfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHtGcmFtZX0gZnJvbSAnLi4vLi4vdWkvbGF5b3V0L0ZyYW1lJztcbmltcG9ydCB7VGV4dH0gZnJvbSAnLi4vLi4vdWkvVGV4dCc7XG5pbXBvcnQge2Nob2ljZX0gZnJvbSAnLi4vLi4vdXRpbHMvcmFuZG9tJztcbmltcG9ydCB7dGltZXN9IGZyb20gJy4uLy4uL3V0aWxzL3N5bnRheCc7XG5cbmNvbnN0IGR5bmFtaWNCYWNrZ3JvdW5kU3R5bGVzID0gc3R5bGU5LmNyZWF0ZSh7XG4gICAgcm9vdDoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGFuaW1hdGlvbk5hbWU6IHN0eWxlOS5rZXlmcmFtZXMoe1xuICAgICAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoMCknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZykgdHJhbnNsYXRlKDApJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMTAwcycsXG4gICAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgY2VudGVyJyxcbiAgICB9LFxuICAgIGVtb2ppOiB7XG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgIGFuaW1hdGlvbk5hbWU6IHN0eWxlOS5rZXlmcmFtZXMoe1xuICAgICAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpIHRyYW5zbGF0ZSgwKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZykgdHJhbnNsYXRlKDApJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMTAwcycsXG4gICAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgY2VudGVyJyxcbiAgICB9LFxufSk7XG5cbmNvbnN0IFNUQVJUID0gMTA7XG5jb25zdCBFTkQgPSAzMjtcbmNvbnN0IE9GRl9USEVfUk9PVCA9IDEwO1xuXG5leHBvcnQgY29uc3QgRHluYW1pY0JhY2tncm91bmQgPSBtZW1vKGZ1bmN0aW9uIER5bmFtaWNCYWNrZ3JvdW5kKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhbWVcbiAgICAgICAgICAgIGRlZj1cImR5bmFtaWMtYmFja2dyb3VuZFwiXG4gICAgICAgICAgICBzdHlsZXM9e1tkeW5hbWljQmFja2dyb3VuZFN0eWxlcy5yb290XX1cbiAgICAgICAgPlxuICAgICAgICAgICAge3RpbWVzKDQwLCBpbmRleCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tRW1vamkgPSBjaG9pY2UoQ09MT1JGVUxfRU1PSklTX09SREVSRURfTElTVCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCArIE9GRl9USEVfUk9PVCAqIDIpIC0gT0ZGX1RIRV9ST09UKTtcbiAgICAgICAgICAgICAgICBjb25zdCBZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCArIE9GRl9USEVfUk9PVCAqIDIpIC0gT0ZGX1RIRV9ST09UKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplID0gU1RBUlQgKyAoaW5kZXggKiBNYXRoLmZsb29yKChFTkQgLSBTVEFSVCkgLyBpbmRleCkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17W2R5bmFtaWNCYWNrZ3JvdW5kU3R5bGVzLmVtb2ppXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGAke1l9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7WH0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke1l9JSkgdHJhbnNsYXRlWCgtJHtYfSUpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmPVwiZmxvYXRpbmctZW1vamlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmFuZG9tRW1vaml9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvRnJhbWU+XG4gICAgKTtcbn0pO1xuIiwiLy8gQW4gb3JkZXIgaXMgdmVyeSBpbXBvcnRhbnQsIHJlcGxhY2Ugd2lzZWx5IVxuaW1wb3J0IHtkZWNsYXJlQXRvbSBhcyBhdG9tfSBmcm9tICdAcmVhdG9tL2NvcmUnO1xuaW1wb3J0IHtDT0xPUkZVTF9FTU9KSVNfT1JERVJFRF9MSVNULCBERUZBVUxUX0VNT0pJfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHtzdHJpbmdUb051bWJlcn0gZnJvbSAnLi4vLi4vdXRpbHMvY3J5cHRvJztcbmltcG9ydCB7ZXh0cmFjdEhvc3R9IGZyb20gJy4uLy4uL3V0aWxzL3VybCc7XG5pbXBvcnQge2RvbWFpbk5hbWUsIGVtYWlsLCBtYXN0ZXJQYXNzd29yZH0gZnJvbSAnLi4vUGFzc3dvcmRTYWx0aW5nJztcblxuY29uc3QgcGlja0Vtb2ppID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHN0cmluZ1RvTnVtYmVyKHZhbHVlKSAlIENPTE9SRlVMX0VNT0pJU19PUkRFUkVEX0xJU1QubGVuZ3RoO1xuXG4gICAgcmV0dXJuIENPTE9SRlVMX0VNT0pJU19PUkRFUkVEX0xJU1RbaW5kZXhdO1xufTtcblxuY29uc3QgU0FMVF9TSElGVCA9ICdzaGlmdCc7XG5leHBvcnQgY29uc3QgZW1vamlQcm9tcHQgPSBhdG9tKFxuICAgICgkKTogW3N0cmluZywgc3RyaW5nLCBzdHJpbmddID0+IHtcbiAgICAgICAgaWYgKCQobWFzdGVyUGFzc3dvcmQpID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBERUZBVUxUX0VNT0pJLFxuICAgICAgICAgICAgICAgIERFRkFVTFRfRU1PSkksXG4gICAgICAgICAgICAgICAgREVGQVVMVF9FTU9KSSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQoZG9tYWluTmFtZSkgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHBpY2tFbW9qaSgkKG1hc3RlclBhc3N3b3JkKSksXG4gICAgICAgICAgICAgICAgREVGQVVMVF9FTU9KSSxcbiAgICAgICAgICAgICAgICBERUZBVUxUX0VNT0pJLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBwaWNrRW1vamkoJChtYXN0ZXJQYXNzd29yZCkpLFxuICAgICAgICAgICAgcGlja0Vtb2ppKGV4dHJhY3RIb3N0KCQoZG9tYWluTmFtZSkpICsgJChlbWFpbCkpLFxuICAgICAgICAgICAgcGlja0Vtb2ppKGV4dHJhY3RIb3N0KCQoZG9tYWluTmFtZSkpICsgJChlbWFpbCkgKyBTQUxUX1NISUZUKSxcbiAgICAgICAgXTtcbiAgICB9XG4pO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb250ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG4iLCJpbXBvcnQge3VzZUF0b219IGZyb20gJ0ByZWF0b20vcmVhY3QnO1xuaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5cbmltcG9ydCB7ZW1vamlQcm9tcHR9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQge1RleHR9IGZyb20gJy4uLy4uL3VpL1RleHQnO1xuXG5jb25zdCBlbW9qaVByb21wdFN0eWxlcyA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGxldHRlclNwYWNpbmc6IDEwLFxuICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gRW1vamlQcm9tcHQoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFtlbW9qaVByb21wdFZhbHVlXSA9IHVzZUF0b20oZW1vamlQcm9tcHQpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgICBzdHlsZXM9e1tlbW9qaVByb21wdFN0eWxlcy5kZWZhdWx0c119XG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBkZWY9XCJlbW9qaS1wcm9tcHRcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7ZW1vamlQcm9tcHRWYWx1ZS5qb2luKCcgJyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtkZWNsYXJlQXRvbSBhcyBhdG9tfSBmcm9tICdAcmVhdG9tL2NvcmUnO1xuaW1wb3J0IHtzYWx0VGhlUGFzc30gZnJvbSAnLi4vLi4vc2FsdGluZyc7XG5pbXBvcnQge2RvbWFpbk5hbWUsIGVtYWlsLCBtYXN0ZXJQYXNzd29yZH0gZnJvbSAnLi4vUGFzc3dvcmRTYWx0aW5nJztcbmltcG9ydCB7c2FsdGVkUGFzc3dvcmRMZW5ndGh9IGZyb20gJy4uL1NhbHRlZFBhc3N3b3JkTGVuZ3RoJztcbmltcG9ydCB7aGFzaEZ1bmN0aW9ufSBmcm9tICcuLi9TZWxlY3RIYXNoRnVuY3Rpb24nO1xuXG5leHBvcnQgY29uc3Qgc2FsdGVkUGFzc3dvcmQgPSBhdG9tKFxuICAgICQgPT4gc2FsdFRoZVBhc3MoJChoYXNoRnVuY3Rpb24pLCAkKHNhbHRlZFBhc3N3b3JkTGVuZ3RoKSwgJChtYXN0ZXJQYXNzd29yZCksICQoZG9tYWluTmFtZSksICQoZW1haWwpKVxuKTtcblxuZXhwb3J0IGNvbnN0IHNob3dTYWx0ZWRQYXNzd29yZCA9IGF0b20oXG4gICAgKCQsIHN0YXRlID0gZmFsc2UpID0+IHtcbiAgICAgICAgJChzYWx0ZWRQYXNzd29yZCwgKCkgPT4gKHN0YXRlID0gZmFsc2UpKTtcblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRvZ2dsZTogKF86IHZvaWQsIHN0YXRlKSA9PiAhc3RhdGUsXG4gICAgfVxuKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29udGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuIiwiaW1wb3J0IHt1c2VBdG9tfSBmcm9tICdAcmVhdG9tL3JlYWN0JztcbmltcG9ydCB7Q29tcG9uZW50UHJvcHMsIEpTWH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBzdHlsZTkgZnJvbSAnc3R5bGU5JztcblxuaW1wb3J0IHtGcmFtZX0gZnJvbSAnLi4vLi4vdWkvbGF5b3V0L0ZyYW1lJztcbmltcG9ydCB7U3BvaWxlcn0gZnJvbSAnLi4vLi4vdWkvU3BvaWxlcic7XG5pbXBvcnQge1RleHR9IGZyb20gJy4uLy4uL3VpL1RleHQnO1xuaW1wb3J0IHtzYWx0ZWRQYXNzd29yZCwgc2hvd1NhbHRlZFBhc3N3b3JkfSBmcm9tICcuL2NvbnRleHQnO1xuXG5jb25zdCBnZW5lcmF0ZWRQYXNzd29yZFN0eWxlcyA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIHNwb2lsZXI6IHtcbiAgICAgICAgaGVpZ2h0OiA0OCxcbiAgICB9LFxuICAgIHZhbHVlV3JhcHBlcjoge1xuICAgICAgICBwYWRkaW5nOiAnMnB4JyxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBHZW5lcmF0ZWRQYXNzd29yZChwcm9wczogUGFydGlhbDxDb21wb25lbnRQcm9wczx0eXBlb2YgU3BvaWxlcj4+KTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFtzYWx0ZWRQYXNzd29yZFZhbHVlXSA9IHVzZUF0b20oc2FsdGVkUGFzc3dvcmQpO1xuICAgIGNvbnN0IFtzaG93U2FsdGVkUGFzc3dvcmRWYWx1ZSwge3RvZ2dsZX1dID0gdXNlQXRvbShzaG93U2FsdGVkUGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNwb2lsZXJcbiAgICAgICAgICAgIHN1bW1hcnk9XCLwn5mIIFNob3cgZ2VuZXJhdGVkIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIHN1bW1hcnlPZmY9XCLwn5mKIEhpZGUgZ2VuZXJhdGVkIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIHN0eWxlcz17W2dlbmVyYXRlZFBhc3N3b3JkU3R5bGVzLnNwb2lsZXJdfVxuICAgICAgICAgICAgb3Blbj17c2hvd1NhbHRlZFBhc3N3b3JkVmFsdWV9XG4gICAgICAgICAgICB0YWJJbmRleD17Mn1cbiAgICAgICAgICAgIG9uVG9nZ2xlPXt0b2dnbGV9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxGcmFtZSBzdHlsZXM9e1tnZW5lcmF0ZWRQYXNzd29yZFN0eWxlcy52YWx1ZVdyYXBwZXJdfT5cbiAgICAgICAgICAgICAgICA8VGV4dCBmYW1pbHk9XCJtb25vc3BhY2VcIiBhbGlnbj1cImNlbnRlclwiPntzYWx0ZWRQYXNzd29yZFZhbHVlIHx8ICc8IGVtcHR5ID4nfTwvVGV4dD5cbiAgICAgICAgICAgIDwvRnJhbWU+XG4gICAgICAgIDwvU3BvaWxlcj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtkZWNsYXJlQXRvbSBhcyBhdG9tfSBmcm9tICdAcmVhdG9tL2NvcmUnO1xuXG5jb25zdCBzY2FsYXJDaGFuZ2UgPSAobmV3VmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiBuZXdWYWx1ZTtcbmV4cG9ydCBjb25zdCBtYXN0ZXJQYXNzd29yZCA9IGF0b20oJycsIHtjaGFuZ2U6IHNjYWxhckNoYW5nZX0pO1xuZXhwb3J0IGNvbnN0IGRvbWFpbk5hbWUgPSBhdG9tKCcnLCB7Y2hhbmdlOiBzY2FsYXJDaGFuZ2V9KTtcbmV4cG9ydCBjb25zdCBlbWFpbCA9IGF0b20oJycsIHtjaGFuZ2U6IHNjYWxhckNoYW5nZX0pO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb250ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG4iLCJpbXBvcnQge3VzZUF0b219IGZyb20gJ0ByZWF0b20vcmVhY3QnO1xuaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7RnJhbWV9IGZyb20gJy4uLy4uL3VpL2xheW91dC9GcmFtZSc7XG5pbXBvcnQge1RleHRGaWVsZH0gZnJvbSAnLi4vLi4vdWkvVGV4dEZpZWxkJztcbmltcG9ydCB7ZG9tYWluTmFtZSwgZW1haWwsIG1hc3RlclBhc3N3b3JkfSBmcm9tICcuL2NvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gUGFzc3dvcmRTYWx0aW5nKCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBbbWFzdGVyUGFzc3dvcmRWYWx1ZSwge2NoYW5nZTogb25DaGFuZ2VNYXN0ZXJQYXNzd29yZH1dID0gdXNlQXRvbShtYXN0ZXJQYXNzd29yZCk7XG4gICAgY29uc3QgW2RvbWFpbk5hbWVWYWx1ZSwge2NoYW5nZTogb25DaGFuZ2VEb21haW5OYW1lfV0gPSB1c2VBdG9tKGRvbWFpbk5hbWUpO1xuICAgIGNvbnN0IFtlbWFpbFZhbHVlLCB7Y2hhbmdlOiBvbkNoYW5nZUVtYWlsfV0gPSB1c2VBdG9tKGVtYWlsKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFtZSBnYXA9ezZ9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3VwZXItU2VjcmV0IE1hc3RlciBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWFzdGVyUGFzc3dvcmRWYWx1ZX1cbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VNYXN0ZXJQYXNzd29yZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEb21haW4gTmFtZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RvbWFpbk5hbWVWYWx1ZX1cbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VEb21haW5OYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxWYWx1ZX1cbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvRnJhbWU+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7ZGVjbGFyZUF0b20gYXMgYXRvbSwgU3RvcmV9IGZyb20gJ0ByZWF0b20vY29yZSc7XG5pbXBvcnQge1NFU1NJT05fVElNRV9UT19URVJNSU5BVEV9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tICcuLi8uLi91dGlscy9oaWdoLW9yZGVyJztcbmltcG9ydCB7c2FsdGVkUGFzc3dvcmR9IGZyb20gJy4uL0dlbmVyYXRlZFBhc3N3b3JkJztcbmltcG9ydCB7ZG9tYWluTmFtZSwgZW1haWwsIG1hc3RlclBhc3N3b3JkfSBmcm9tICcuLi9QYXNzd29yZFNhbHRpbmcnO1xuXG5leHBvcnQgY29uc3QgdGVybWluYXRpb25UaW1lTGVmdCA9IGF0b20oXG4gICAgKCQsIHN0YXRlID0gMCkgPT4ge1xuICAgICAgICAkKHNhbHRlZFBhc3N3b3JkLCAoY3VycmVudFNhbHRlZFBhc3N3b3JkKSA9PiAoc3RvcmUsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTYWx0ZWRQYXNzd29yZCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh0ZXJtaW5hdGlvblRpbWVMZWZ0LnJlc2V0KCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHgudGVybWluYXRlKHN0b3JlKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh0ZXJtaW5hdGlvblRpbWVMZWZ0LmZpbGwoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHguaW50ZXJ2YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY3R4LmludGVydmFsKTtcbiAgICAgICAgICAgICAgICBjdHguaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHguaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2godGVybWluYXRpb25UaW1lTGVmdC5kZWMoKSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG4gICAge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIHJlc2V0OiAoXzogdm9pZCkgPT4gMCxcbiAgICAgICAgZGVjOiAoXzogdm9pZCwgY3VycmVudCkgPT4gTWF0aC5tYXgoY3VycmVudCAtIDEwMDAsIDApLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGZpbGw6IChfOiB2b2lkKSA9PiBTRVNTSU9OX1RJTUVfVE9fVEVSTUlOQVRFLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjcmVhdGVDdHg6ICgpID0+ICh7XG4gICAgICAgICAgICBpbnRlcnZhbDogbnVsbCBhcyBOb2RlSlMuVGltZW91dCB8IG51bGwsXG4gICAgICAgICAgICB0ZXJtaW5hdGU6IGRlYm91bmNlKChzdG9yZTogU3RvcmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goW1xuICAgICAgICAgICAgICAgICAgICBtYXN0ZXJQYXNzd29yZC5jaGFuZ2UoJycpLFxuICAgICAgICAgICAgICAgICAgICBkb21haW5OYW1lLmNoYW5nZSgnJyksXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLmNoYW5nZSgnJyksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9LCBTRVNTSU9OX1RJTUVfVE9fVEVSTUlOQVRFKSxcbiAgICAgICAgfSksXG4gICAgfVxuKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29udGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuIiwiaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge3VzZUF0b219IGZyb20gJ0ByZWF0b20vcmVhY3QnO1xuaW1wb3J0IHtUZXh0fSBmcm9tICcuLi8uLi91aS9UZXh0JztcbmltcG9ydCB7dGVybWluYXRpb25UaW1lTGVmdH0gZnJvbSAnLi9jb250ZXh0JztcblxuY29uc3QgU0VDT05EU19JTl9NSU5VVEUgPSA2MDtcbmZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgY29uc3QgdGltZUluU2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAvIDEwMDApO1xuXG4gICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhNYXRoLmZsb29yKHRpbWVJblNlY29uZHMgLyBTRUNPTkRTX0lOX01JTlVURSkpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBTdHJpbmcodGltZUluU2Vjb25kcyAlIFNFQ09ORFNfSU5fTUlOVVRFKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2Vzc2lvblRlcm1pbmF0b3IoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFt0ZXJtaW5hdGlvblRpbWVMZWZ0VmFsdWVdID0gdXNlQXRvbSh0ZXJtaW5hdGlvblRpbWVMZWZ0KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7dGVybWluYXRpb25UaW1lTGVmdFZhbHVlID4gMFxuICAgICAgICAgICAgICAgID8gYFRoZSBzZXNzaW9uIHdpbGwgYmUgdGVybWluYXRlZCBpbiAke2Zvcm1hdFRpbWUodGVybWluYXRpb25UaW1lTGVmdFZhbHVlKX1gXG4gICAgICAgICAgICAgICAgOiAnVGhlIHNlc3Npb24gaGFzIGJlZW4gdGVybWluYXRlZCBvciBzaW1wbHkgbm90IHN0YXJ0ZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvVGV4dD5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5pbXBvcnQge0NPTlRFWFR9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5pbXBvcnQge0NvcHlTYWx0ZWRQYXNzd29yZEJ1dHRvbn0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvQ29weVNhbHRlZFBhc3N3b3JkJztcbmltcG9ydCB7RHluYW1pY0JhY2tncm91bmR9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL0R5bmFtaWNCYWNrZ3JvdW5kJztcbmltcG9ydCB7RW1vamlQcm9tcHR9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL0Vtb2ppUHJvbXB0JztcbmltcG9ydCB7R2VuZXJhdGVkUGFzc3dvcmR9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL0dlbmVyYXRlZFBhc3N3b3JkJztcbmltcG9ydCB7UGFzc3dvcmRTYWx0aW5nfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9QYXNzd29yZFNhbHRpbmcnO1xuaW1wb3J0IHtTYWx0ZWRQYXNzd29yZExlbmd0aH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvU2FsdGVkUGFzc3dvcmRMZW5ndGgnO1xuaW1wb3J0IHtTZWxlY3RIYXNoRnVuY3Rpb259IGZyb20gJy4uLy4uL2ZlYXR1cmVzL1NlbGVjdEhhc2hGdW5jdGlvbic7XG5pbXBvcnQge1Nlc3Npb25UZXJtaW5hdG9yfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9TZXNzaW9uVGVybWluYXRvcic7XG5pbXBvcnQge0ZyYW1lLCBvdmVycmlkZUZyYW1lfSBmcm9tICcuLi8uLi91aS9sYXlvdXQvRnJhbWUnO1xuaW1wb3J0IHtWZXJ0aWNhbFNwYWNpbmd9IGZyb20gJy4uLy4uL3VpL2xheW91dC9TcGFjaW5nJztcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vLi4vdWkvTGluayc7XG5pbXBvcnQge1RleHR9IGZyb20gJy4uLy4uL3VpL1RleHQnO1xuXG5jb25zdCBpbmRleFBhZ2VTdHlsZXMgPSBzdHlsZTkuY3JlYXRlKHtcbiAgICBiYXNlTGF5b3V0OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLWJhc2UtbGF5b3V0LWJnKScsXG4gICAgICAgIG1heFdpZHRoOiAzNDAsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDQsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA0LFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogNCxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogNCxcbiAgICAgICAgcGFkZGluZzogJzMwcHggMjBweCcsXG4gICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KScsXG4gICAgICAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpJzoge1xuICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbmNvbnN0IEJhc2VMYXlvdXQgPSBvdmVycmlkZUZyYW1lKHtzdHlsZXM6IFtpbmRleFBhZ2VTdHlsZXMuYmFzZUxheW91dF0sIGFzOiAnbWFpbicsIGRlZjogJ2Jhc2UtbGF5b3V0J30pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IHtyZXBvTGluaywgdGl0bGV9ID0gQ09OVEVYVDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8RHluYW1pY0JhY2tncm91bmQgLz5cbiAgICAgICAgICAgIDxCYXNlTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxUZXh0IHNpemU9XCJ4bFwiIHdlaWdodD1cInNlbWlCb2xkXCI+e3RpdGxlfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dD4uLi5pcyBzZWN1cmUgYW5kIGNvbnZlbmllbnQhPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWZXJ0aWNhbFNwYWNpbmcgc2l6ZT17MX0gLz5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtyZXBvTGlua31cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezR9XG4gICAgICAgICAgICAgICAgPlNvdXJjZSBjb2RlOiBIb3cgaXQgd29ya3MgYW5kIHdoYXQgdG8gZG8gaWYgYW4gYXBwIGJlY29tZSB1bmF2YWlsYWJsZT88L0xpbms+XG4gICAgICAgICAgICAgICAgPFZlcnRpY2FsU3BhY2luZyBzaXplPXsxMH0gLz5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRTYWx0aW5nIC8+XG4gICAgICAgICAgICAgICAgPFZlcnRpY2FsU3BhY2luZyBzaXplPXs2fSAvPlxuICAgICAgICAgICAgICAgIDxFbW9qaVByb21wdCAvPlxuICAgICAgICAgICAgICAgIDxWZXJ0aWNhbFNwYWNpbmcgc2l6ZT17Nn0gLz5cbiAgICAgICAgICAgICAgICA8RnJhbWUgZGlyZWN0aW9uPVwicm93XCIgZ2FwPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEhhc2hGdW5jdGlvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8U2FsdGVkUGFzc3dvcmRMZW5ndGggLz5cbiAgICAgICAgICAgICAgICA8L0ZyYW1lPlxuICAgICAgICAgICAgICAgIDxWZXJ0aWNhbFNwYWNpbmcgc2l6ZT17Nn0gLz5cbiAgICAgICAgICAgICAgICA8Q29weVNhbHRlZFBhc3N3b3JkQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgPFZlcnRpY2FsU3BhY2luZyBzaXplPXsyfSAvPlxuICAgICAgICAgICAgICAgIDxHZW5lcmF0ZWRQYXNzd29yZCAvPlxuICAgICAgICAgICAgICAgIDxWZXJ0aWNhbFNwYWNpbmcgc2l6ZT17NH0gLz5cbiAgICAgICAgICAgICAgICA8U2Vzc2lvblRlcm1pbmF0b3IgLz5cbiAgICAgICAgICAgIDwvQmFzZUxheW91dD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7SlNYfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHN0eWxlOSwge1N0eWxlfSBmcm9tICdzdHlsZTknO1xuaW1wb3J0IHtFeHRlbmRDb21wb25lbnRQcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcblxuaW1wb3J0IHtUZXh0fSBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgYnV0dG9uU3R5bGVzID0gc3R5bGU5LmNyZWF0ZSh7XG4gICAgZGVmYXVsdDoge1xuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgfSxcbiAgICB0ZXh0RGVmYXVsdDoge1xuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgIH0sXG59KTtcblxudHlwZSBWYXJpYW50U3R5bGUgPSAnc2VsZWN0JyB8ICdhY3Rpb24nIHwgJ3BzZXVkbyc7XG5jb25zdCB2YXJpYW50U3R5bGVzID0gc3R5bGU5LmNyZWF0ZTxSZWNvcmQ8VmFyaWFudFN0eWxlLCBTdHlsZT4+KHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tYnV0dG9uLXNlbGVjdC1iZyknLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICAgIGJveFNoYWRvdzogJzBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiA2LFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogNixcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDYsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDYsXG4gICAgfSxcbiAgICBhY3Rpb246IHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogNCxcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDQsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiA0LFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiA0LFxuICAgICAgICAnOm5vdCg6ZGlzYWJsZWQpJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tYnV0dG9uLWFjdGlvbi1iZyknLFxuICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1idXR0b24tYWN0aW9uLWNvbG9yKScsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDhweCB2YXIoLS1idXR0b24tYWN0aW9uLXNoYWRvdyknLFxuICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IC41cywgY29sb3IgLjJzJyxcbiAgICAgICAgfSxcbiAgICAgICAgJzpob3Zlcjpub3QoOmRpc2FibGVkKSc6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCAxcHggMThweCB2YXIoLS1idXR0b24tYWN0aW9uLXNoYWRvdy1ob3ZlciknLFxuICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxuICAgICAgICB9LFxuICAgICAgICAnOmFjdGl2ZTpub3QoOmRpc2FibGVkKSc6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCAxcHggMThweCB2YXIoLS1idXR0b24tYWN0aW9uLXNoYWRvdy1hY3RpdmUpLCBpbnNldCAwcHggLTFweCA4cHggdmFyKC0tYnV0dG9uLWFjdGlvbi1zaGFkb3ctYWN0aXZlLWluc2V0KScsXG4gICAgICAgIH0sXG4gICAgICAgICc6ZGlzYWJsZWQnOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWJ1dHRvbi1hY3Rpb24tZGlzYWJsZWQtY29sb3IpJyxcbiAgICAgICAgICAgIGJvcmRlcjogJzJweCBkYXNoZWQgdmFyKC0tYnV0dG9uLWFjdGlvbi1kaXNhYmxlZC1kYXNoKScsXG4gICAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBzZXVkbzoge1xuICAgICAgICBjb2xvcjogJ3ZhcigtLWJ1dHRvbi1wc2V1ZG8tY29sb3IpJyxcbiAgICB9LFxufSk7XG5cbnR5cGUgU2l6ZVN0eWxlID0gJ3MnIHwgJ20nIHwgJ2wnO1xuY29uc3Qgc2l6ZVN0eWxlcyA9IHN0eWxlOS5jcmVhdGU8UmVjb3JkPFNpemVTdHlsZSwgU3R5bGU+Pih7XG4gICAgczoge1xuICAgICAgICBwYWRkaW5nOiAnMnB4IDEwcHgnLFxuICAgICAgICBmb250U2l6ZTogMTAsXG4gICAgfSxcbiAgICBtOiB7XG4gICAgICAgIHBhZGRpbmc6ICc0cHgnLFxuICAgIH0sXG4gICAgbDoge1xuICAgICAgICBwYWRkaW5nOiAnNXB4IDE2cHgnLFxuICAgIH0sXG59KTtcblxudHlwZSBCdXR0b25Qcm9wcyA9IEV4dGVuZENvbXBvbmVudFByb3BzPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snYnV0dG9uJ10sIHtcbiAgICB2YXJpYW50OiBWYXJpYW50U3R5bGUsXG4gICAgc2l6ZT86IFNpemVTdHlsZSxcblxuICAgIHN0eWxlcz86IFN0eWxlW10sXG59PjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7XG4gICAgY2hpbGRyZW46IHRleHQsXG4gICAgdmFyaWFudCxcbiAgICBzaXplID0gJ20nLFxuICAgIHN0eWxlcyxcbiAgICAuLi5wcm9wc1xufTogQnV0dG9uUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZTkoXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGVzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgdmFyaWFudFN0eWxlc1t2YXJpYW50XSxcbiAgICAgICAgICAgICAgICBzaXplU3R5bGVzW3NpemVdLFxuICAgICAgICAgICAgICAgIC4uLihzdHlsZXMgfHwgW10pLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAgIHN0eWxlcz17W2J1dHRvblN0eWxlcy50ZXh0RGVmYXVsdF19XG4gICAgICAgICAgICA+e3RleHR9PC9UZXh0PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHtKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5LCB7U3R5bGV9IGZyb20gJ3N0eWxlOSc7XG5pbXBvcnQge1RleHRDb2xvcnNTdHlsZX0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvVGhlbWluZyc7XG5pbXBvcnQge0V4dGVuZENvbXBvbmVudFByb3BzfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xuaW1wb3J0IHtGcmFtZX0gZnJvbSAnLi4vbGF5b3V0L0ZyYW1lJztcbmltcG9ydCB7VGV4dH0gZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IGxpbmtTdHlsZSA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZScsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICd1bmRlcmxpbmUnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtYXJrOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICBjb2xvcjogJ3ZhcigtLWxpbmstbWFyay1jb2xvciknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1saW5rLW1hcmstYmcpJyxcbiAgICB9LFxufSk7XG5cbnR5cGUgTGlua1Byb3BzID0gRXh0ZW5kQ29tcG9uZW50UHJvcHM8SlNYLkludHJpbnNpY0VsZW1lbnRzWydhJ10sIHtcbiAgICBzdHlsZXM/OiBTdHlsZVtdLFxuICAgIGNvbG9yPzogVGV4dENvbG9yc1N0eWxlLFxufT5cblxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoe1xuICAgIHN0eWxlcyA9IFtdLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLnByb3BzXG59OiBMaW5rUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHQgYXM9XCJhXCIgey4uLnByb3BzfSBzdHlsZXM9e1tsaW5rU3R5bGUuZGVmYXVsdCwgLi4uc3R5bGVzXX0+XG4gICAgICAgICAgICA8RnJhbWUgc3R5bGVzPXtbbGlua1N0eWxlLm1hcmtdfSBhcz1cIm1hcmtcIj57Y2hpbGRyZW59PC9GcmFtZT5cbiAgICAgICAgPC9UZXh0PlxuICAgICk7XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudFByb3BzLCBKU1h9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgc3R5bGU5IGZyb20gJ3N0eWxlOSc7XG5cbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHtGcmFtZX0gZnJvbSAnLi4vbGF5b3V0L0ZyYW1lJztcblxuY29uc3Qgc3BvaWxlclN0eWxlcyA9IHN0eWxlOS5jcmVhdGUoe1xuICAgIGRldGFpbHM6IHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogNCxcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDQsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiA0LFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiA0LFxuICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAuM3MnLFxuICAgIH0sXG4gICAgZGV0YWlsc09wZW46IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tc3BvaWxlci1vcGVuLWJnKScsXG4gICAgfSxcbiAgICBzdW1tYXJ5OiB7XG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDQsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA0LFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogNCxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogNCxcblxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBwYWRkaW5nOiAnM3B4IDE2cHggJyxcbiAgICAgICAgbGluZUhlaWdodDogJzE2cHgnLFxuICAgICAgICAnOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuMDUpJyxcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgLjNzJyxcbiAgICB9LFxuICAgIHN1bW1hcnlPcGVuOiB7XG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgc3VtbWFyeTogc3RyaW5nLFxuICAgIHN1bW1hcnlPZmY/OiBzdHJpbmcsXG4gICAgb3BlbjogYm9vbGVhbixcbiAgICBvblRvZ2dsZTogKCkgPT4gdm9pZCxcbn0gJiBDb21wb25lbnRQcm9wczx0eXBlb2YgRnJhbWU+O1xuXG5leHBvcnQgZnVuY3Rpb24gU3BvaWxlcih7XG4gICAgc3VtbWFyeSxcbiAgICBzdW1tYXJ5T2ZmLFxuICAgIGNoaWxkcmVuLFxuICAgIHN0eWxlcyA9IFtdLFxuICAgIG9wZW4sXG4gICAgdGFiSW5kZXgsXG4gICAgb25Ub2dnbGUsXG4gICAgLi4ucHJvcHNcbn06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFtZVxuICAgICAgICAgICAgc3R5bGVzPXtbc3BvaWxlclN0eWxlcy5kZXRhaWxzLCBvcGVuICYmIHNwb2lsZXJTdHlsZXMuZGV0YWlsc09wZW4sIC4uLnN0eWxlc119XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHNldWRvXCJcbiAgICAgICAgICAgICAgICBzdHlsZXM9e1tzcG9pbGVyU3R5bGVzLnN1bW1hcnksIG9wZW4gJiYgc3BvaWxlclN0eWxlcy5zdW1tYXJ5T3Blbl19XG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1cIlxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZX1cbiAgICAgICAgICAgID57KG9wZW4gJiYgc3VtbWFyeU9mZikgfHwgc3VtbWFyeX08L0J1dHRvbj5cbiAgICAgICAgICAgIHtvcGVuICYmIGNoaWxkcmVufVxuICAgICAgICA8L0ZyYW1lPlxuICAgICk7XG59XG4iLCJpbXBvcnQge2ZvcndhcmRSZWZ9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHN0eWxlOSBmcm9tICdzdHlsZTknO1xuXG5pbXBvcnQge0NvbW1vbklucHV0UHJvcHN9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG5leHBvcnQgY29uc3QgRW1haWxJbnB1dCA9IGZvcndhcmRSZWY8SFRNTElucHV0RWxlbWVudCwgQ29tbW9uSW5wdXRQcm9wcz4oKHtcbiAgICBodG1sSW5wdXRTdHlsZXMsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIG9uVmFsdWVDaGFuZ2UsXG4gICAgLi4ucHJvcHNcbn06IENvbW1vbklucHV0UHJvcHMsIGh0bWxJbnB1dFJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtodG1sSW5wdXRSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlOSguLi5odG1sSW5wdXRTdHlsZXMpfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcbiIsImltcG9ydCB7SlNYfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdwcmVhY3QvaG9va3MnO1xuaW1wb3J0IHN0eWxlOSwge1N0eWxlfSBmcm9tICdzdHlsZTknO1xuaW1wb3J0IHtFeHRlbmRDb21wb25lbnRQcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcblxuaW1wb3J0IHtGcmFtZX0gZnJvbSAnLi4vbGF5b3V0L0ZyYW1lJztcbmltcG9ydCB7ZmFtaWx5U3R5bGVzLCBzaXplU3R5bGVzLCB3ZWlnaHRTdHlsZXN9IGZyb20gJy4uL1RleHQnO1xuaW1wb3J0IHtFbWFpbElucHV0fSBmcm9tICcuL2VtYWlsJztcbmltcG9ydCB7TnVtYmVySW5wdXR9IGZyb20gJy4vbnVtYmVyJztcbmltcG9ydCB7UGFzc3dvcmRJbnB1dH0gZnJvbSAnLi9wYXNzd29yZCc7XG5pbXBvcnQge1RleHRJbnB1dH0gZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7VXJsSW5wdXR9IGZyb20gJy4vdXJsJztcblxuY29uc3QgdGV4dEZpZWxkU3R5bGVzID0gc3R5bGU5LmNyZWF0ZSh7XG4gICAgd3JhcHBlcjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS10ZXh0LWZpZWxkLWJnKScsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgY3Vyc29yOiAndGV4dCcsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDZweCB2YXIoLS10ZXh0LWZpZWxkLXNoYWRvdyknLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnNHB4JyxcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICc0cHgnLFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzRweCcsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICc0cHgnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAuMnMnLFxuICAgIH0sXG4gICAgd3JhcHBlckZvY3VzZWQ6IHtcbiAgICAgICAgYm94U2hhZG93OiAnMHB4IDFweCAxMnB4IHZhcigtLXRleHQtZmllbGQtc2hhZG93LWZvY3VzKScsXG4gICAgfSxcbiAgICBodG1sSW5wdXQ6IHtcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMjhweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG5cbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBjb2xvcjogJ3ZhcigtLXRleHQtZmllbGQtY29sb3IpJyxcbiAgICAgICAgY2FyZXRDb2xvcjogJ3ZhcigtLXRleHQtZmllbGQtY29sb3IpJyxcblxuICAgICAgICBmb250U2l6ZTogMTQsXG5cbiAgICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLXRleHQtZmllbGQtcGxhY2Vob2xkZXItY29sb3IpJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbnR5cGUgVGV4dEZpZWxkU2l6ZSA9ICdzJyB8ICdtJztcbmNvbnN0IHRleHRGaWVsZFdyYXBwZXJTaXplID0gc3R5bGU5LmNyZWF0ZTxSZWNvcmQ8VGV4dEZpZWxkU2l6ZSwgU3R5bGU+Pih7XG4gICAgczoge1xuICAgICAgICBwYWRkaW5nOiAnMnB4IDE2cHgnLFxuICAgIH0sXG4gICAgbToge1xuICAgICAgICBwYWRkaW5nOiAnNnB4IDIycHgnLFxuICAgIH0sXG59KTtcbmNvbnN0IHRleHRGaWVsZEh0bWxJbnB1dFNpemUgPSBzdHlsZTkuY3JlYXRlPFJlY29yZDxUZXh0RmllbGRTaXplLCBTdHlsZT4+KHtcbiAgICBzOiB7XG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxuICAgIH0sXG4gICAgbToge1xuICAgICAgICBoZWlnaHQ6ICcyOHB4JyxcbiAgICB9LFxufSk7XG5cbmNvbnN0IElOUFVUX0NPTVBPTkVOVFMgPSB7XG4gICAgcGFzc3dvcmQ6IFBhc3N3b3JkSW5wdXQsXG4gICAgdGV4dDogVGV4dElucHV0LFxuICAgIHVybDogVXJsSW5wdXQsXG4gICAgZW1haWw6IEVtYWlsSW5wdXQsXG4gICAgbnVtYmVyOiBOdW1iZXJJbnB1dCxcbn0gYXMgY29uc3Q7XG50eXBlIElucHV0VHlwZSA9IGtleW9mIHR5cGVvZiBJTlBVVF9DT01QT05FTlRTO1xuXG50eXBlIElucHV0UHJvcHMgPSBFeHRlbmRDb21wb25lbnRQcm9wczxKU1guSW50cmluc2ljRWxlbWVudHNbJ2lucHV0J10sIHtcbiAgICB0eXBlOiBJbnB1dFR5cGUsXG4gICAgc2l6ZT86IFRleHRGaWVsZFNpemUsXG4gICAgdmFsdWU6IHN0cmluZyB8IG51bWJlcixcbiAgICB3cmFwcGVyU3R5bGVzPzogU3R5bGVbXSxcbiAgICBpbnB1dFN0eWxlcz86IFN0eWxlW10sXG4gICAgb25DaGFuZ2U6IChuZXdWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkLFxufT47XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0RmllbGQoe1xuICAgIHR5cGUsXG4gICAgc2l6ZSA9ICdtJyxcbiAgICB3cmFwcGVyU3R5bGVzID0gW10sXG4gICAgaW5wdXRTdHlsZXMgPSBbXSxcbiAgICBvbkNoYW5nZSxcbiAgICAuLi5wcm9wc1xufTogSW5wdXRQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBvbklucHV0Q2hhbmdlID0gZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuICAgIGNvbnN0IGh0bWxJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgb25XcmFwcGVyQ2xpY2sgPSAoKSA9PiBodG1sSW5wdXRSZWYuY3VycmVudCAmJiBodG1sSW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuXG4gICAgY29uc3QgW2ZvY3VzZWQsIHNldEZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG9uSW5wdXRGb2N1cyA9ICgpID0+IHNldEZvY3VzZWQodHJ1ZSk7XG4gICAgY29uc3Qgb25JbnB1dEJsdXIgPSAoKSA9PiBzZXRGb2N1c2VkKGZhbHNlKTtcblxuICAgIGNvbnN0IElucHV0Q29tcG9uZW50ID0gSU5QVVRfQ09NUE9ORU5UU1t0eXBlXSB8fCBUZXh0SW5wdXQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhbWVcbiAgICAgICAgICAgIHN0eWxlcz17W1xuICAgICAgICAgICAgICAgIHRleHRGaWVsZFN0eWxlcy53cmFwcGVyLFxuICAgICAgICAgICAgICAgIHRleHRGaWVsZFdyYXBwZXJTaXplW3NpemVdLFxuICAgICAgICAgICAgICAgIGZvY3VzZWQgJiYgdGV4dEZpZWxkU3R5bGVzLndyYXBwZXJGb2N1c2VkLFxuICAgICAgICAgICAgICAgIC4uLndyYXBwZXJTdHlsZXMsXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgZGVmPVwicHNldWRvLWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uV3JhcHBlckNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRDb21wb25lbnRcbiAgICAgICAgICAgICAgICByZWY9e2h0bWxJbnB1dFJlZn1cbiAgICAgICAgICAgICAgICBodG1sSW5wdXRTdHlsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkU3R5bGVzLmh0bWxJbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkSHRtbElucHV0U2l6ZVtzaXplXSxcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5U3R5bGVzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIHNpemVTdHlsZXMubSxcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0U3R5bGVzLnJlZ3VsYXIsXG4gICAgICAgICAgICAgICAgICAgIC4uLmlucHV0U3R5bGVzLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXtvbklucHV0Rm9jdXN9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtvbklucHV0Qmx1cn1cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0ZyYW1lPlxuICAgICk7XG59XG4iLCJpbXBvcnQge2ZvcndhcmRSZWZ9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHN0eWxlOSBmcm9tICdzdHlsZTknO1xuXG5pbXBvcnQge0NvbW1vbklucHV0UHJvcHN9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG5leHBvcnQgY29uc3QgTnVtYmVySW5wdXQgPSBmb3J3YXJkUmVmPEhUTUxJbnB1dEVsZW1lbnQsIENvbW1vbklucHV0UHJvcHM+KCh7XG4gICAgaHRtbElucHV0U3R5bGVzLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBvblZhbHVlQ2hhbmdlLFxuICAgIC4uLnByb3BzXG59OiBDb21tb25JbnB1dFByb3BzLCBodG1sSW5wdXRSZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17aHRtbElucHV0UmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZTkoLi4uaHRtbElucHV0U3R5bGVzKX1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG4iLCJpbXBvcnQge2ZvcndhcmRSZWZ9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncHJlYWN0L2hvb2tzJztcbmltcG9ydCBzdHlsZTkgZnJvbSAnc3R5bGU5JztcblxuaW1wb3J0IHtnZW5lcmF0ZVN0cmluZ30gZnJvbSAnLi4vLi4vdXRpbHMvcmFuZG9tJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHtGcmFtZX0gZnJvbSAnLi4vbGF5b3V0L0ZyYW1lJztcbmltcG9ydCB7VGV4dCwgZmFtaWx5U3R5bGVzfSBmcm9tICcuLi9UZXh0JztcbmltcG9ydCB7Q29tbW9uSW5wdXRQcm9wc30gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHBhc3N3b3JkRmllbGRTdHlsZXMgPSBzdHlsZTkuY3JlYXRlKHtcbiAgICBpbnB1dEJhc2U6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSxcbiAgICBodG1sSW5wdXQ6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHpJbmRleDogMyxcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLXRleHQtZmllbGQtcGxhY2Vob2xkZXItY29sb3IpJyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICd2YXIoLS1mb250LXNhbnMtc2VyaWYpJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1hc2s6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHpJbmRleDogMixcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAndmFyKC0tdGV4dC1maWVsZC1jb2xvciknLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMjhweCcsXG4gICAgICAgIGZvbnRGYW1pbHk6ICd2YXIoLS1mb250LW1vbm9zcGFjZSknLFxuICAgIH0sXG59KTtcblxuY29uc3QgbWFzayA9IGdlbmVyYXRlU3RyaW5nKDEyMCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbmV4cG9ydCBjb25zdCBQYXNzd29yZElucHV0ID0gZm9yd2FyZFJlZjxIVE1MSW5wdXRFbGVtZW50LCBDb21tb25JbnB1dFByb3BzPigoe1xuICAgIHZhbHVlLFxuICAgIGh0bWxJbnB1dFN0eWxlcyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgb25WYWx1ZUNoYW5nZSxcbiAgICAuLi5wcm9wc1xufTogQ29tbW9uSW5wdXRQcm9wcywgaHRtbElucHV0UmVmKSA9PiB7XG4gICAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IG9uU2hvd0J1dHRvbkNsaWNrID0gKCkgPT4gc2V0SGlkZGVuKCFoaWRkZW4pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxGcmFtZSBzdHlsZXM9e1suLi5odG1sSW5wdXRTdHlsZXMsIHBhc3N3b3JkRmllbGRTdHlsZXMuaW5wdXRCYXNlXX0gZGVmPVwiaW5wdXQtYmFzZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9e2h0bWxJbnB1dFJlZn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZTkoXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5odG1sSW5wdXRTdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEZpZWxkU3R5bGVzLmh0bWxJbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbWlseVN0eWxlcy5tb25vc3BhY2UsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgZmFtaWx5PVwibW9ub3NwYWNlXCIgc3R5bGVzPXtbXG4gICAgICAgICAgICAgICAgICAgIC4uLmh0bWxJbnB1dFN0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRGaWVsZFN0eWxlcy5tYXNrLFxuICAgICAgICAgICAgICAgIF19IGRlZj1cImlucHV0LW1hc2tcIj5cbiAgICAgICAgICAgICAgICAgICAge2hpZGRlbiA/IG1hc2suc2xpY2UoMCwgdmFsdWUubGVuZ3RoKSA6IHZhbHVlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvRnJhbWU+XG4gICAgICAgICAgICB7dmFsdWUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2VsZWN0XCIgb25DbGljaz17b25TaG93QnV0dG9uQ2xpY2t9IHNpemU9XCJzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtoaWRkZW4gPyAnU2hvdycgOiAnSGlkZSd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufSk7XG4iLCJpbXBvcnQge2ZvcndhcmRSZWZ9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHN0eWxlOSBmcm9tICdzdHlsZTknO1xuXG5pbXBvcnQge0NvbW1vbklucHV0UHJvcHN9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG5leHBvcnQgY29uc3QgVGV4dElucHV0ID0gZm9yd2FyZFJlZjxIVE1MSW5wdXRFbGVtZW50LCBDb21tb25JbnB1dFByb3BzPigoe1xuICAgIGh0bWxJbnB1dFN0eWxlcyxcbiAgICAuLi5wcm9wc1xufTogQ29tbW9uSW5wdXRQcm9wcywgaHRtbElucHV0UmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2h0bWxJbnB1dFJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGU5KC4uLmh0bWxJbnB1dFN0eWxlcyl9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuIiwiaW1wb3J0IHtmb3J3YXJkUmVmfSBmcm9tICdwcmVhY3QvY29tcGF0JztcbmltcG9ydCB7Rm9jdXNFdmVudEhhbmRsZXJ9IGZyb20gJ3ByZWFjdC9zcmMvanN4JztcbmltcG9ydCBzdHlsZTkgZnJvbSAnc3R5bGU5JztcbmltcG9ydCB7ZXh0cmFjdE9yaWdpbn0gZnJvbSAnLi4vLi4vdXRpbHMvdXJsJztcblxuaW1wb3J0IHtDb21tb25JbnB1dFByb3BzfSBmcm9tICcuL3R5cGVzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuZXhwb3J0IGNvbnN0IFVybElucHV0ID0gZm9yd2FyZFJlZjxIVE1MSW5wdXRFbGVtZW50LCBDb21tb25JbnB1dFByb3BzPigoe1xuICAgIGh0bWxJbnB1dFN0eWxlcyxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2VDYWxsYmFjayxcbiAgICBvbkJsdXI6IG9uQmx1ckNhbGxiYWNrLFxuICAgIG9uVmFsdWVDaGFuZ2UsXG4gICAgLi4ucHJvcHNcbn06IENvbW1vbklucHV0UHJvcHMsIGh0bWxJbnB1dFJlZikgPT4ge1xuICAgIGNvbnN0IG9uQmx1ciA9IChldmVudDogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgb25WYWx1ZUNoYW5nZShleHRyYWN0T3JpZ2luKHZhbHVlKSk7XG4gICAgICAgIG9uQmx1ckNhbGxiYWNrICYmIG9uQmx1ckNhbGxiYWNrKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2h0bWxJbnB1dFJlZn1cbiAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgcm9sZT1cInVybFwiXG4gICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGU5KC4uLmh0bWxJbnB1dFN0eWxlcyl9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDYWxsYmFja31cbiAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcbiIsImltcG9ydCB7b3ZlcnJpZGVGcmFtZX0gZnJvbSAnLi9GcmFtZSc7XG5cbmV4cG9ydCBjb25zdCBWZXJ0aWNhbFNwYWNpbmcgPSBvdmVycmlkZUZyYW1lKHtkZWY6ICdzcGFjaW5nJ30sIHtzaXplOiAnaGVpZ2h0J30gYXMgY29uc3QpO1xuXG4iLCJleHBvcnQgZnVuY3Rpb24gZGVib3VuY2U8Q2FsbGJhY2sgZXh0ZW5kcyAoLi4uYXJncykgPT4gdm9pZD4oXG4gICAgY2FsbGJhY2s6IENhbGxiYWNrLFxuICAgIHdhaXRGb3I6IG51bWJlcixcbiAgICBpbW1lZGlhdGU/OiBib29sZWFuXG4pOiAoLi4uYXJnczogUGFyYW1ldGVyczxDYWxsYmFjaz4pID0+IHZvaWQge1xuICAgIGxldCB0aW1lb3V0OiBOb2RlSlMuVGltZW91dCB8IG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczogUGFyYW1ldGVyczxDYWxsYmFjaz4pIHtcbiAgICAgICAgdGltZW91dCAmJiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgd2FpdEZvcik7XG5cbiAgICAgICAgaWYgKGltbWVkaWF0ZSAmJiAhdGltZW91dCkge1xuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiaW1wb3J0IHt0aW1lc30gZnJvbSAnLi9zeW50YXgnO1xuXG5jb25zdCBDSEFSX1NFVCA9IEFycmF5LmZyb20obmV3IFNldCgnIUAjJCVeJiooKXt9XCI8Picuc3BsaXQoJycpKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9pY2U8VD4oaXRlcmFibGU6IFRbXSk6IFQge1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlcmFibGUubGVuZ3RoKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgcmV0dXJuIGl0ZXJhYmxlW3JhbmRvbUluZGV4XSE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVN0cmluZyhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpbWVzKGxlbmd0aCwgKCkgPT4gY2hvaWNlKENIQVJfU0VUKSkuam9pbignJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGRlc2VsZWN0Q3VycmVudCA9IHJlcXVpcmUoXCJ0b2dnbGUtc2VsZWN0aW9uXCIpO1xuXG52YXIgY2xpcGJvYXJkVG9JRTExRm9ybWF0dGluZyA9IHtcbiAgXCJ0ZXh0L3BsYWluXCI6IFwiVGV4dFwiLFxuICBcInRleHQvaHRtbFwiOiBcIlVybFwiLFxuICBcImRlZmF1bHRcIjogXCJUZXh0XCJcbn1cblxudmFyIGRlZmF1bHRNZXNzYWdlID0gXCJDb3B5IHRvIGNsaXBib2FyZDogI3trZXl9LCBFbnRlclwiO1xuXG5mdW5jdGlvbiBmb3JtYXQobWVzc2FnZSkge1xuICB2YXIgY29weUtleSA9ICgvbWFjIG9zIHgvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCLijJhcIiA6IFwiQ3RybFwiKSArIFwiK0NcIjtcbiAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvI3tcXHMqa2V5XFxzKn0vZywgY29weUtleSk7XG59XG5cbmZ1bmN0aW9uIGNvcHkodGV4dCwgb3B0aW9ucykge1xuICB2YXIgZGVidWcsXG4gICAgbWVzc2FnZSxcbiAgICByZXNlbGVjdFByZXZpb3VzLFxuICAgIHJhbmdlLFxuICAgIHNlbGVjdGlvbixcbiAgICBtYXJrLFxuICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGRlYnVnID0gb3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZTtcbiAgdHJ5IHtcbiAgICByZXNlbGVjdFByZXZpb3VzID0gZGVzZWxlY3RDdXJyZW50KCk7XG5cbiAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbWFyay50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgLy8gcmVzZXQgdXNlciBzdHlsZXMgZm9yIHNwYW4gZWxlbWVudFxuICAgIG1hcmsuc3R5bGUuYWxsID0gXCJ1bnNldFwiO1xuICAgIC8vIHByZXZlbnRzIHNjcm9sbGluZyB0byB0aGUgZW5kIG9mIHRoZSBwYWdlXG4gICAgbWFyay5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICBtYXJrLnN0eWxlLnRvcCA9IDA7XG4gICAgbWFyay5zdHlsZS5jbGlwID0gXCJyZWN0KDAsIDAsIDAsIDApXCI7XG4gICAgLy8gdXNlZCB0byBwcmVzZXJ2ZSBzcGFjZXMgYW5kIGxpbmUgYnJlYWtzXG4gICAgbWFyay5zdHlsZS53aGl0ZVNwYWNlID0gXCJwcmVcIjtcbiAgICAvLyBkbyBub3QgaW5oZXJpdCB1c2VyLXNlbGVjdCAoaXQgbWF5IGJlIGBub25lYClcbiAgICBtYXJrLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSBcInRleHRcIjtcbiAgICBtYXJrLnN0eWxlLk1velVzZXJTZWxlY3QgPSBcInRleHRcIjtcbiAgICBtYXJrLnN0eWxlLm1zVXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuc3R5bGUudXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuYWRkRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChvcHRpb25zLmZvcm1hdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgZS5jbGlwYm9hcmREYXRhID09PSBcInVuZGVmaW5lZFwiKSB7IC8vIElFIDExXG4gICAgICAgICAgZGVidWcgJiYgY29uc29sZS53YXJuKFwidW5hYmxlIHRvIHVzZSBlLmNsaXBib2FyZERhdGFcIik7XG4gICAgICAgICAgZGVidWcgJiYgY29uc29sZS53YXJuKFwidHJ5aW5nIElFIHNwZWNpZmljIHN0dWZmXCIpO1xuICAgICAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhLmNsZWFyRGF0YSgpO1xuICAgICAgICAgIHZhciBmb3JtYXQgPSBjbGlwYm9hcmRUb0lFMTFGb3JtYXR0aW5nW29wdGlvbnMuZm9ybWF0XSB8fCBjbGlwYm9hcmRUb0lFMTFGb3JtYXR0aW5nW1wiZGVmYXVsdFwiXVxuICAgICAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGEoZm9ybWF0LCB0ZXh0KTtcbiAgICAgICAgfSBlbHNlIHsgLy8gYWxsIG90aGVyIGJyb3dzZXJzXG4gICAgICAgICAgZS5jbGlwYm9hcmREYXRhLmNsZWFyRGF0YSgpO1xuICAgICAgICAgIGUuY2xpcGJvYXJkRGF0YS5zZXREYXRhKG9wdGlvbnMuZm9ybWF0LCB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMub25Db3B5KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb3B0aW9ucy5vbkNvcHkoZS5jbGlwYm9hcmREYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFyayk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobWFyayk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIGlmICghc3VjY2Vzc2Z1bCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29weSBjb21tYW5kIHdhcyB1bnN1Y2Nlc3NmdWxcIik7XG4gICAgfVxuICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWJ1ZyAmJiBjb25zb2xlLmVycm9yKFwidW5hYmxlIHRvIGNvcHkgdXNpbmcgZXhlY0NvbW1hbmQ6IFwiLCBlcnIpO1xuICAgIGRlYnVnICYmIGNvbnNvbGUud2FybihcInRyeWluZyBJRSBzcGVjaWZpYyBzdHVmZlwiKTtcbiAgICB0cnkge1xuICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YShvcHRpb25zLmZvcm1hdCB8fCBcInRleHRcIiwgdGV4dCk7XG4gICAgICBvcHRpb25zLm9uQ29weSAmJiBvcHRpb25zLm9uQ29weSh3aW5kb3cuY2xpcGJvYXJkRGF0YSk7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoXCJ1bmFibGUgdG8gY29weSB1c2luZyBjbGlwYm9hcmREYXRhOiBcIiwgZXJyKTtcbiAgICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoXCJmYWxsaW5nIGJhY2sgdG8gcHJvbXB0XCIpO1xuICAgICAgbWVzc2FnZSA9IGZvcm1hdChcIm1lc3NhZ2VcIiBpbiBvcHRpb25zID8gb3B0aW9ucy5tZXNzYWdlIDogZGVmYXVsdE1lc3NhZ2UpO1xuICAgICAgd2luZG93LnByb21wdChtZXNzYWdlLCB0ZXh0KTtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBzZWxlY3Rpb24ucmVtb3ZlUmFuZ2UgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVSYW5nZShyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hcmspIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWFyayk7XG4gICAgfVxuICAgIHJlc2VsZWN0UHJldmlvdXMoKTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gIGlmICghc2VsZWN0aW9uLnJhbmdlQ291bnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge307XG4gIH1cbiAgdmFyIGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgdmFyIHJhbmdlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGlvbi5yYW5nZUNvdW50OyBpKyspIHtcbiAgICByYW5nZXMucHVzaChzZWxlY3Rpb24uZ2V0UmFuZ2VBdChpKSk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGl2ZS50YWdOYW1lLnRvVXBwZXJDYXNlKCkpIHsgLy8gLnRvVXBwZXJDYXNlIGhhbmRsZXMgWEhUTUxcbiAgICBjYXNlICdJTlBVVCc6XG4gICAgY2FzZSAnVEVYVEFSRUEnOlxuICAgICAgYWN0aXZlLmJsdXIoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGFjdGl2ZSA9IG51bGw7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxlY3Rpb24udHlwZSA9PT0gJ0NhcmV0JyAmJlxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICAgIGlmICghc2VsZWN0aW9uLnJhbmdlQ291bnQpIHtcbiAgICAgIHJhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhY3RpdmUgJiZcbiAgICBhY3RpdmUuZm9jdXMoKTtcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9