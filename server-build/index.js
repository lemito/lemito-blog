/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://lemitofrontend/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 13:0-14 */
/***/ ((module) => {

eval("/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  } // blank or null?\n\n\n  if (!css || typeof css !== \"string\") {\n    return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\"); // convert each url(...)\n\n  /*\n  This regular expression is just a way to recursively match brackets within\n  a string.\n  \t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n     (  = Start a capturing group\n       (?:  = Start a non-capturing group\n           [^)(]  = Match anything that isn't a parentheses\n           |  = OR\n           \\(  = Match a start parentheses\n               (?:  = Start another non-capturing groups\n                   [^)(]+  = Match anything that isn't a parentheses\n                   |  = OR\n                   \\(  = Match a start parentheses\n                       [^)(]*  = Match anything that isn't a parentheses\n                   \\)  = Match a end parentheses\n               )  = End Group\n               *\\) = Match anything and then a close parens\n           )  = Close non-capturing group\n           *  = Match anything\n        )  = Close capturing group\n   \\)  = Match a close parens\n  \t /gi  = Get all matches, not the first.  Be case insensitive.\n   */\n\n  var fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n    // strip quotes (if they exist)\n    var unquotedOrigUrl = origUrl.trim().replace(/^\"(.*)\"$/, function (o, $1) {\n      return $1;\n    }).replace(/^'(.*)'$/, function (o, $1) {\n      return $1;\n    }); // already a full url? no change\n\n    if (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n      return fullMatch;\n    } // convert the url to a full url\n\n\n    var newUrl;\n\n    if (unquotedOrigUrl.indexOf(\"//\") === 0) {\n      //TODO: should we add protocol?\n      newUrl = unquotedOrigUrl;\n    } else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n      // path should be relative to the base url\n      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n    } else {\n      // path should be relative to current directory\n      newUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n    } // send back the fixed url(...)\n\n\n    return \"url(\" + JSON.stringify(newUrl) + \")\";\n  }); // send back the fixed css\n\n  return fixedCss;\n};\n\n//# sourceURL=webpack://lemitofrontend/./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_App_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/App/App */ \"./src/components/App/App.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', function (req, res) {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString(react__WEBPACK_IMPORTED_MODULE_2___default().CreateElement( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src_components_App_App__WEBPACK_IMPORTED_MODULE_5__.default, null)));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('../build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default().static('../build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://lemitofrontend/./server/index.js?");

/***/ }),

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _private_route_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../private-route/PrivateRoute */ \"./src/components/private-route/PrivateRoute.tsx\");\n/* harmony import */ var _private_route_PrivateRoute__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_private_route_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/Login */ \"./src/components/login/Login.tsx\");\n/* harmony import */ var _login_Login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_login_Login__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _util_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/api */ \"./src/util/api.ts\");\n/* harmony import */ var _util_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/const */ \"./src/util/const.ts\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.css */ \"./src/components/App/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_Public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/Public */ \"./src/components/public/Public.tsx\");\n/* harmony import */ var _public_Public__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_Public__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n //import Authorship from \"../authorship/authorship/Authorship\";\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_2__.Component {\n  constructor() {\n    var _this;\n\n    super(...arguments);\n    _this = this;\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"state\", {\n      isAuthenticated: false\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"componentWillReceiveProps\", /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function* () {\n      yield (0,_util_api__WEBPACK_IMPORTED_MODULE_6__.checkAuth)().then(function (response) {\n        if (response.status === 200) {\n          _this.setState({\n            isAuthenticated: true\n          });\n        }\n      }).catch(function (error) {\n        _this.setState({\n          isAuthenticated: false\n        });\n      });\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"handleLogIn\", function (history) {\n      _this.setState({\n        isAuthenticated: true\n      });\n\n      history.push(\"/authorship/letters/last\");\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"handleLogOut\", function (history) {\n      localStorage.removeItem(_util_const__WEBPACK_IMPORTED_MODULE_7__.ACCESS_TOKEN);\n\n      _this.setState({\n        isAuthenticated: false\n      });\n\n      history.push(\"/public/letters/last\");\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n      path: \"/public/letters/:id\",\n      component: (_public_Public__WEBPACK_IMPORTED_MODULE_9___default())\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {\n      from: \"/\",\n      to: \"/public/letters/last\"\n    }))));\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://lemitofrontend/./src/components/App/App.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/App/App.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/App/App.css ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"* {\\r\\n  font-family: \\\"Caveat\\\", Caveat;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n::selection {\\r\\n  background: #ffffff00; /* WebKit/Blink Browsers */\\r\\n  color: #40a9ff;\\r\\n}\\r\\n::-moz-selection {\\r\\n  background: #ffffff00; /* Gecko Browsers */\\r\\n  color: #40a9ff;\\r\\n}\\r\\n\\r\\na {\\r\\n  outline: 0;\\r\\n}\\r\\n\\r\\n.app-content {\\r\\n  margin-top: 64px;   \\r\\n}\\r\\n\\r\\n.react-router-link {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.animated {\\r\\n  -webkit-animation: animated 1s;\\r\\n  -moz-animation:    animated 1s;\\r\\n  -o-animation:      animated 1s;\\r\\n  animation:         animated 1s;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes animated {\\r\\n  0%   { opacity: 0; }\\r\\n  100% { opacity: 1; }\\r\\n}\\r\\n\\r\\n@-moz-keyframes animated {\\r\\n  0%   { opacity: 0; }\\r\\n  100% { opacity: 1; }\\r\\n}\\r\\n\\r\\n@-o-keyframes animated {\\r\\n  0%   { opacity: 0; }\\r\\n  100% { opacity: 1; }\\r\\n}\\r\\n\\r\\n@keyframes animated {\\r\\n  0%   { opacity: 0; }\\r\\n  100% { opacity: 1; }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://lemitofrontend/./src/components/App/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/App/App.css":
/*!************************************!*\
  !*** ./src/components/App/App.css ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/*! CommonJS bailout: module.exports is used directly at 18:19-33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/App/App.css\");\n\nif(typeof content === 'string') content = [[module.id, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! !../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://lemitofrontend/./src/components/App/App.css?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 69:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack://lemitofrontend/./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./src/components/login/Login.tsx":
/*!****************************************!*\
  !*** ./src/components/login/Login.tsx ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (10:8)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| class Login extends Component {\\n> \\tpublic setState: any;\\n| \\tpublic props: any;\\n| \\tpublic showPassword: any;\");\n\n//# sourceURL=webpack://lemitofrontend/./src/components/login/Login.tsx?");

/***/ }),

/***/ "./src/components/private-route/PrivateRoute.tsx":
/*!*******************************************************!*\
  !*** ./src/components/private-route/PrivateRoute.tsx ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (7:8)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| class PrivateRoute extends Component {\\n> \\tpublic props: any;\\n| \\tpublic Component: any;\\n| \\tpublic authenticated: any;\");\n\n//# sourceURL=webpack://lemitofrontend/./src/components/private-route/PrivateRoute.tsx?");

/***/ }),

/***/ "./src/components/public/Public.tsx":
/*!******************************************!*\
  !*** ./src/components/public/Public.tsx ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (11:8)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| class Public extends Component {\\n> \\tpublic props: any;\\n| \\tpublic match: any;\\n| \");\n\n//# sourceURL=webpack://lemitofrontend/./src/components/public/Public.tsx?");

/***/ }),

/***/ "./src/util/api.ts":
/*!*************************!*\
  !*** ./src/util/api.ts ***!
  \*************************/
/*! namespace exports */
/*! export checkAuth [provided] [no usage info] [missing usage info prevents renaming] */
/*! export deleteLetter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getAllTitles [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getAnyLetterById [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPublicLetterById [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPublicTitles [provided] [no usage info] [missing usage info prevents renaming] */
/*! export login [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saveLetter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export savePicture [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPublicTitles\": () => /* binding */ getPublicTitles,\n/* harmony export */   \"getAllTitles\": () => /* binding */ getAllTitles,\n/* harmony export */   \"getPublicLetterById\": () => /* binding */ getPublicLetterById,\n/* harmony export */   \"getAnyLetterById\": () => /* binding */ getAnyLetterById,\n/* harmony export */   \"deleteLetter\": () => /* binding */ deleteLetter,\n/* harmony export */   \"login\": () => /* binding */ login,\n/* harmony export */   \"saveLetter\": () => /* binding */ saveLetter,\n/* harmony export */   \"savePicture\": () => /* binding */ savePicture,\n/* harmony export */   \"checkAuth\": () => /* binding */ checkAuth\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./src/util/const.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst request = (options) => {\r\n\r\n  let headers = {};\r\n  if(options.headers !== undefined)\r\n    headers = options.headers;\r\n\r\n  if(localStorage.getItem(_const__WEBPACK_IMPORTED_MODULE_0__.ACCESS_TOKEN)) {\r\n    headers['Authorization'] = 'Bearer ' + localStorage.getItem(_const__WEBPACK_IMPORTED_MODULE_0__.ACCESS_TOKEN);\r\n  }\r\n  \r\n  return axios__WEBPACK_IMPORTED_MODULE_1___default()({\r\n    url: options.url,\r\n    method: options.method,\r\n    data: options.data,\r\n    headers: headers\r\n  });\r\n}\r\n\r\nfunction getPublicTitles() {\r\n  return request({\r\n    url: _const__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL + \"/public/letters/titles\",\r\n    method: \"GET\",\r\n    data: null\r\n  });\r\n}\r\n\r\nfunction getAllTitles() {\r\n  return request({\r\n    url: _const__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL + \"/authorship/letters/titles\",\r\n    method: \"GET\",\r\n    data: null\r\n  });\r\n}\r\n\r\nfunction getPublicLetterById(id) {\r\n  return request({\r\n    url: _const__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL + \"/public/letters/\" + id,\r\n    method: \"GET\",\r\n    data: null\r\n  });\r\n}\r\n\r\nfunction getAnyLetterById(id) {\r\n  return request({\r\n    url: _const__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL + \"/authorship/letters/\" + id,\r\n    method: \"GET\",\r\n    data: null\r\n  });\r\n}\r\n\r\nfunction deleteLetter(id) {\r\n  return request({\r\n    url: _const__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL + \"/authorship/letters/delete_letter/\" + id,\r\n    method: \"POST\",\r\n    data: null\r\n  });\r\n}\r\n\r\nfunction login(loginRequest) {\r\n  return request({\r\n    url: _const__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL + \"/auth/signin\",\r\n    method: \"POST\",\r\n    data: loginRequest\r\n  });\r\n}\r\n\r\nfunction saveLetter(letter) {\r\n  return request({\r\n    url: _const__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL + \"/authorship/letters/save_letter\",\r\n    method: \"POST\",\r\n    data: letter\r\n  });\r\n}\r\n\r\nfunction savePicture(picture) {\r\n  return request({\r\n    url: _const__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL + \"/authorship/pictures/save_picture\",\r\n    method: \"POST\",\r\n    data: picture\r\n  });\r\n}\r\n\r\nfunction checkAuth() {\r\n  return request({\r\n    url: _const__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL + \"/auth/is_authed\",\r\n    method: \"GET\"\r\n  });\r\n}\n\n//# sourceURL=webpack://lemitofrontend/./src/util/api.ts?");

/***/ }),

/***/ "./src/util/const.ts":
/*!***************************!*\
  !*** ./src/util/const.ts ***!
  \***************************/
/*! namespace exports */
/*! export ACCESS_TOKEN [provided] [no usage info] [missing usage info prevents renaming] */
/*! export API_BASE_URL [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LETTERS_CONTENT_MODE [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_BASE_URL\": () => /* binding */ API_BASE_URL,\n/* harmony export */   \"ACCESS_TOKEN\": () => /* binding */ ACCESS_TOKEN,\n/* harmony export */   \"LETTERS_CONTENT_MODE\": () => /* binding */ LETTERS_CONTENT_MODE\n/* harmony export */ });\nconsole.clear()\r\nvar a,b=\"\";for(a=1;8>a;a++)b+=\"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-__-\".charAt(Math.floor(66*Math.random()+1));console.log(\"Your access token is \"+b);\r\nconst API_BASE_URL = \"https://shrouded-retreat-21347.herokuapp.com\";\r\nconst ACCESS_TOKEN = b;\r\nconst LETTERS_CONTENT_MODE = [\"ALL\", \"PUBLIC\"];\r\n/*console.log(\"Your access token is \"+ passwd)\r\nconst language = navigator.language || navigator.userLanguage || 'en'; \r\nconsole.log(\"Now your lang is \"+ language)*/\n\n//# sourceURL=webpack://lemitofrontend/./src/util/const.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");;\n\n//# sourceURL=webpack://lemitofrontend/external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");;\n\n//# sourceURL=webpack://lemitofrontend/external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"axios\");;\n\n//# sourceURL=webpack://lemitofrontend/external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://lemitofrontend/external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"fs\");;\n\n//# sourceURL=webpack://lemitofrontend/external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://lemitofrontend/external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react\");;\n\n//# sourceURL=webpack://lemitofrontend/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-dom/server\");;\n\n//# sourceURL=webpack://lemitofrontend/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-router-dom\");;\n\n//# sourceURL=webpack://lemitofrontend/external_%22react-router-dom%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./server/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;