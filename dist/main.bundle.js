"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_exercise"] = self["webpackChunkwebpack_exercise"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@400;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --sec: red;\\r\\n  --main: #13160c;\\r\\n  --third: #989898;\\r\\n  --fourth: #eef3f0;\\r\\n  --text: #b3dcc4;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--fourth);\\r\\n  font-family: \\\"Karla\\\", sans-serif;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.listCont {\\r\\n  background-color: var(--main);\\r\\n  min-width: 90%;\\r\\n  box-shadow:\\r\\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\\r\\n    0 10px 15px -3px rgba(0, 0, 0, 0.1);\\r\\n  border-radius: 5px;\\r\\n  margin-top: 5rem;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 1.4rem;\\r\\n  padding: 15px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid var(--sec);\\r\\n  color: var(--text);\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\ni {\\r\\n  color: var(--third);\\r\\n}\\r\\n\\r\\ni:not(.enter) {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ni:not(.enter):hover {\\r\\n  color: var(--text);\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  width: 100%;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 15px;\\r\\n  border-bottom: 1px solid var(--sec);\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.checkList {\\r\\n  position: relative;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\nli .checkList {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  border: none;\\r\\n  color: aqua;\\r\\n  background: transparent;\\r\\n  font-size: 18px;\\r\\n  font-style: italic;\\r\\n  outline: 0;\\r\\n}\\r\\n\\r\\n.checkList input {\\r\\n  margin-right: 10px;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n#add {\\r\\n  padding: 15px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid var(--sec);\\r\\n}\\r\\n\\r\\n#add i {\\r\\n  transform: rotate(90deg);\\r\\n  margin-right: 2px;\\r\\n}\\r\\n\\r\\n.clearCont {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 15px;\\r\\n  background-color: var(--fourth);\\r\\n}\\r\\n\\r\\n.clearCont .clrBtn {\\r\\n  outline: none;\\r\\n  color: var(--main);\\r\\n  border: none;\\r\\n  background: inherit;\\r\\n  line-height: 1.5rem;\\r\\n  font-size: inherit;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  transition: opacity 0.3s ease-in-out;\\r\\n  text-decoration: line-through var(--text);\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.refresh:hover {\\r\\n  transform: rotateZ(90deg);\\r\\n}\\r\\n\\r\\n.task-item:hover {\\r\\n  background-color: var(--sec);\\r\\n}\\r\\n\\r\\n.chcek {\\r\\n  appearance: none;\\r\\n  -webkit-appearance: none;\\r\\n  -moz-appearance: none;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  border-radius: 4px;\\r\\n  border: 2px solid transparent; /* Hide the square border */\\r\\n  background-color: var(--fourth);\\r\\n  position: relative;\\r\\n  cursor: pointer;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.chcek:checked {\\r\\n  background-color: var(--fourth);\\r\\n}\\r\\n\\r\\n.chcek::after {\\r\\n  content: \\\"\\\\2713\\\"; /* Checkmark character */\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  font-size: 16px;\\r\\n  color: #000;\\r\\n  transition: opacity 0.3s ease-in-out;\\r\\n  opacity: 0; /* Initially hide the checkmark */\\r\\n}\\r\\n\\r\\n.chcek:checked::after {\\r\\n  opacity: 1; /* Show the checkmark when checked */\\r\\n}\\r\\n\\r\\n.inputDesc {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background-color: transparent;\\r\\n  font-size: 16px;\\r\\n  color: var(--text);\\r\\n  padding: 2px;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .listCont {\\r\\n    background-color: var(--main);\\r\\n    min-width: 50%;\\r\\n    box-shadow:\\r\\n      0 10px 15px -3px rgba(0, 0, 0, 0.1),\\r\\n      0 10px 15px -3px rgba(0, 0, 0, 0.1);\\r\\n    border-radius: 5px;\\r\\n    margin-top: 5rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _modules_Status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Status.js */ \"./src/modules/Status.js\");\n\n\n\n\nwindow.onload = _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayTasks();\n_modules_Status_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateStatus();\n_modules_Status_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearCompleted();\n\nconst refersh = document.querySelector('.refresh');\nrefersh.addEventListener('click', () => {\n  window.location.reload();\n});\n\n_modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__.submit.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    e.preventDefault();\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask();\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__.submit.value = '';\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.innerHTML = '';\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayTasks();\n    _modules_Status_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateStatus();\n  }\n});\n\n//# sourceURL=webpack://webpack-exercise/./src/index.js?");

/***/ }),

/***/ "./src/modules/Status.js":
/*!*******************************!*\
  !*** ./src/modules/Status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskStatus)\n/* harmony export */ });\n/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save.js */ \"./src/modules/save.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\n\nclass TaskStatus {\n    static updateStatus = () => {\n      const checkBox = document.querySelectorAll('.chcek');\n\n      checkBox.forEach((ch, i) => {\n        ch.addEventListener('change', () => {\n          if (!_tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList[i].completed) {\n            _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList[i].completed = true;\n            (0,_save_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList);\n            ch.nextElementSibling.classList.add('completed');\n          } else {\n            _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList[i].completed = false;\n            (0,_save_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList);\n            ch.nextElementSibling.classList.remove('completed');\n          }\n        });\n      });\n    };\n\n    static clearCompleted = () => {\n      const clrCompleted = document.querySelector('.clrBtn');\n      clrCompleted.addEventListener('click', () => {\n        const notCompleted = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasksList.filter((task) => task.completed !== true);\n        notCompleted.forEach((e, i) => {\n          e.index = i + 1;\n        });\n        (0,_save_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(notCompleted);\n        window.location.reload();\n      });\n    }\n}\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/Status.js?");

/***/ }),

/***/ "./src/modules/save.js":
/*!*****************************!*\
  !*** ./src/modules/save.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst saveData = (d) => {\n  localStorage.setItem('todo', JSON.stringify(d));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveData);\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/save.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks),\n/* harmony export */   \"listContainer\": () => (/* binding */ listContainer),\n/* harmony export */   \"submit\": () => (/* binding */ submit),\n/* harmony export */   \"tasksList\": () => (/* binding */ tasksList)\n/* harmony export */ });\n/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save.js */ \"./src/modules/save.js\");\n\n\nconst tasksList = JSON.parse(localStorage.getItem('todo')) || [];\n\nconst listContainer = document.querySelector('.tasks-container');\nconst submit = document.querySelector('#addDo');\n\nclass Tasks {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n\n  static addTask = () => {\n    const task = new Tasks(submit.value, false, tasksList.length + 1);\n    if (submit.value !== '') {\n      tasksList.push(task);\n      (0,_save_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksList);\n    }\n  }\n\n  static displayTasks = () => {\n    let singleTask = '';\n    tasksList.forEach((task) => {\n      singleTask += `<li class=\"task-item\" id='${task.index}'>\n                      <div class=\"checkList\">\n                       <input type=\"checkbox\" name=\"check\" class=\"chcek\" ${task.completed === true ? 'checked' : ''}>\n                       <!-- put the description inside input so the user can edit it -->\n                       <input tabindex=\"-1\" class='inputDesc ${!task.completed ? '' : 'completed'}' value=\"${task.description}\">\n                        </div>\n                      <i class=\"fa-solid fa-trash delete\"></i>\n                  </li>`;\n      listContainer.innerHTML = singleTask;\n    });\n    // Implement the delete task\n    const delButton = document.querySelectorAll('.delete');\n    delButton.forEach((delBtn, i) => {\n      delBtn.addEventListener('click', () => {\n        Tasks.removeTask(i);\n      });\n    });\n\n    // Implement the editing task\n    const editTaskInput = document.querySelectorAll('.inputDesc');\n\n    editTaskInput.forEach((editTask, i) => {\n      editTask.addEventListener('change', () => {\n        if (editTask.value) {\n          tasksList[i].description = editTask.value;\n          (0,_save_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksList);\n        }\n      });\n    });\n  };\n\n  static removeTask = (index) => {\n    tasksList.splice(index, 1);\n\n    tasksList.forEach((val, i) => {\n      val.index = i + 1;\n    });\n\n    listContainer.innerHTML = '';\n    (0,_save_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksList);\n    Tasks.displayTasks();\n  }\n}\n\n\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/tasks.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);