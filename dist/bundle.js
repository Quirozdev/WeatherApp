/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Poppins-Regular.ttf */ "./src/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Poppins';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html {
  font-size: 16px;
}

body {
  background-color: #0b131e;
  color: white;
  height: 100vh;
  height: 100dvh;
}

main {
  min-height: 90%;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
}

footer {
  min-height: 10%;
  display: flex;
  justify-content: end;
  align-items: center;
}

#weather-api-link {
  background-color: #082f49;
  padding: 8px;
  border-radius: 8px;
}

.content {
  position: relative;
  flex: 1;
}

#loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  z-index: 2;
}

.dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
}

#loading .dot:nth-child(1) {
  transform: translateY(-50px);
  animation: loadingDot 2s ease-in-out 0s infinite;
}

#loading .dot:nth-child(2) {
  animation: loadingDot 2s ease-in-out 0.2s infinite;
}

#loading .dot:nth-child(3) {
  animation: loadingDot 2s ease-in-out 0.4s infinite;
}

@keyframes loadingDot {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-75px);
  }

  100% {
    transform: translateY(0px);
  }
}

.content-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
}

.opacity-animated {
  transition: opacity 1s ease-in-out;
}

.hidden {
  opacity: 0;
}

.visible {
  opacity: 1;
}

.options {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

form {
  display: flex;
  justify-content: center;
  position: relative;
}

#toggle-temperature-type-btn {
  padding: 8px 16px;
  background-color: #60a5fa;
  border: 1px solid black;
  border-radius: 8px;
  color: white;
}

#toggle-temperature-type-btn:hover {
  background-color: white;
  color: #60a5fa;
}

#location-input {
  width: min(75%, 300px);
  border: 2px solid black;
  border-radius: 4px 0 0 4px;
  background-color: #202a3a;
  padding: 6px;
  color: wheat;
  font-size: 1.08rem;
}

#location-input:focus {
  outline: none;
  border: 2px solid #60a5fa;
}

#location-input::placeholder {
  color: white;
}

#search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  border: 1px solid black;
  border-radius: 0 4px 4px 0;
  background-color: #6f79ff;
  padding: 2px;
}

#search-btn:hover {
  background-color: white;
}

#search-btn > svg {
  fill: white;
}

#search-btn:hover > svg {
  fill: #6f79ff;
}

#error-msg {
  background-color: red;
  border: 1px solid black;
  padding: 12px;
  text-align: center;
  color: white;
  position: absolute;
  top: 100%;
}

.principal-weather-info {
  flex: 1;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
}

.location-info {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.location {
  font-size: 1.7rem;
}

.date,
.hour {
  font-size: 1.05rem;
}

.temperature-and-humidity-container {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.temperature-title {
  font-size: 1.8rem;
}

.humidity {
  font-size: 1.05rem;
}

#weather-icon {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: end;
}

.temperature-condition {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  text-align: center;
  font-size: 1.2rem;
  align-self: start;
}

.forecast-section,
.air-conditions {
  background-color: #202a3a;
  border-radius: 8px;
  flex: 1;
}

.forecast-section {
  display: grid;
  grid-template-rows: auto 1fr;
}

.forecast-title {
  text-align: center;
  font-size: 1.5rem;
}

.forecasts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  padding: 24px;
}

.forecast {
  background-color: #082f49;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Poppins';\r\n  src: url('./Poppins-Regular.ttf');\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nhtml {\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  background-color: #0b131e;\r\n  color: white;\r\n  height: 100vh;\r\n  height: 100dvh;\r\n}\r\n\r\nmain {\r\n  min-height: 90%;\r\n  padding-top: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nfooter {\r\n  min-height: 10%;\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n}\r\n\r\n#weather-api-link {\r\n  background-color: #082f49;\r\n  padding: 8px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.content {\r\n  position: relative;\r\n  flex: 1;\r\n}\r\n\r\n#loading {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 4px;\r\n  z-index: 2;\r\n}\r\n\r\n.dot {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n}\r\n\r\n#loading .dot:nth-child(1) {\r\n  transform: translateY(-50px);\r\n  animation: loadingDot 2s ease-in-out 0s infinite;\r\n}\r\n\r\n#loading .dot:nth-child(2) {\r\n  animation: loadingDot 2s ease-in-out 0.2s infinite;\r\n}\r\n\r\n#loading .dot:nth-child(3) {\r\n  animation: loadingDot 2s ease-in-out 0.4s infinite;\r\n}\r\n\r\n@keyframes loadingDot {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(-75px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n.content-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  padding: 32px;\r\n}\r\n\r\n.opacity-animated {\r\n  transition: opacity 1s ease-in-out;\r\n}\r\n\r\n.hidden {\r\n  opacity: 0;\r\n}\r\n\r\n.visible {\r\n  opacity: 1;\r\n}\r\n\r\n.options {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 24px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n#toggle-temperature-type-btn {\r\n  padding: 8px 16px;\r\n  background-color: #60a5fa;\r\n  border: 1px solid black;\r\n  border-radius: 8px;\r\n  color: white;\r\n}\r\n\r\n#toggle-temperature-type-btn:hover {\r\n  background-color: white;\r\n  color: #60a5fa;\r\n}\r\n\r\n#location-input {\r\n  width: min(75%, 300px);\r\n  border: 2px solid black;\r\n  border-radius: 4px 0 0 4px;\r\n  background-color: #202a3a;\r\n  padding: 6px;\r\n  color: wheat;\r\n  font-size: 1.08rem;\r\n}\r\n\r\n#location-input:focus {\r\n  outline: none;\r\n  border: 2px solid #60a5fa;\r\n}\r\n\r\n#location-input::placeholder {\r\n  color: white;\r\n}\r\n\r\n#search-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 2.2rem;\r\n  border: 1px solid black;\r\n  border-radius: 0 4px 4px 0;\r\n  background-color: #6f79ff;\r\n  padding: 2px;\r\n}\r\n\r\n#search-btn:hover {\r\n  background-color: white;\r\n}\r\n\r\n#search-btn > svg {\r\n  fill: white;\r\n}\r\n\r\n#search-btn:hover > svg {\r\n  fill: #6f79ff;\r\n}\r\n\r\n#error-msg {\r\n  background-color: red;\r\n  border: 1px solid black;\r\n  padding: 12px;\r\n  text-align: center;\r\n  color: white;\r\n  position: absolute;\r\n  top: 100%;\r\n}\r\n\r\n.principal-weather-info {\r\n  flex: 1;\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr;\r\n  grid-template-rows: 1fr 1fr;\r\n  gap: 32px;\r\n}\r\n\r\n.location-info {\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\n.location {\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.date,\r\n.hour {\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.temperature-and-humidity-container {\r\n  grid-column: 1 / 2;\r\n  grid-row: 2 / 3;\r\n}\r\n\r\n.temperature-title {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.humidity {\r\n  font-size: 1.05rem;\r\n}\r\n\r\n#weather-icon {\r\n  grid-column: 2 / 3;\r\n  grid-row: 1 / 2;\r\n  justify-self: center;\r\n  align-self: end;\r\n}\r\n\r\n.temperature-condition {\r\n  grid-column: 2 / 3;\r\n  grid-row: 2 / 3;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n  align-self: start;\r\n}\r\n\r\n.forecast-section,\r\n.air-conditions {\r\n  background-color: #202a3a;\r\n  border-radius: 8px;\r\n  flex: 1;\r\n}\r\n\r\n.forecast-section {\r\n  display: grid;\r\n  grid-template-rows: auto 1fr;\r\n}\r\n\r\n.forecast-title {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.forecasts-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  gap: 12px;\r\n  padding: 24px;\r\n}\r\n\r\n.forecast {\r\n  background-color: #082f49;\r\n  border-radius: 12px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dates.js":
/*!**********************!*\
  !*** ./src/dates.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   parseDate: () => (/* binding */ parseDate)
/* harmony export */ });
function formatDate(date) {
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day < 10 ? '0' + day : day}/${
    month < 10 ? '0' + month : month
  }/${year} ${hours}:${minutes}`;
}

function parseDate(dateStr) {
  const dateArr = dateStr.split('-');
  const year = dateArr[0];
  // 0 indexed months
  const month = dateArr[1] - 1;
  const day = dateArr[2];
  return new Date(year, month, day);
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeTemperatureTypeToAllTemperatureElems: () => (/* binding */ changeTemperatureTypeToAllTemperatureElems),
/* harmony export */   displayCurrentWeatherData: () => (/* binding */ displayCurrentWeatherData),
/* harmony export */   displayErrorMsg: () => (/* binding */ displayErrorMsg),
/* harmony export */   displayForecastData: () => (/* binding */ displayForecastData),
/* harmony export */   setHidden: () => (/* binding */ setHidden),
/* harmony export */   setVisible: () => (/* binding */ setVisible)
/* harmony export */ });
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates */ "./src/dates.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _temperatures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temperatures */ "./src/temperatures.js");




// this is to prevent the animations from triggering when the page is loading
window.addEventListener('load', () => {
  contentInfoElem.classList.add('opacity-animated');
  errorMsgElem.classList.add('opacity-animated');
});

const contentInfoElem = document.querySelector('.content-info');
const errorMsgElem = document.getElementById('error-msg');

const locationElem = document.querySelector('.location');
const dateElement = document.querySelector('.date');
const hourElement = document.querySelector('.hour');
const temperatureTitleElem = document.querySelector('.temperature-title');
const humidityElem = document.querySelector('.humidity');
const weatherIconElem = document.getElementById('weather-icon');
const temperatureConditionElem = document.querySelector(
  '.temperature-condition'
);

const forecastsContainer = document.querySelector('.forecasts-container');

function displayCurrentWeatherData(
  { current, location },
  temperatureType
) {
  locationElem.textContent = `${location.name}, ${location.region}, ${location.country}`;
  const [date, hour] = (0,_dates__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(location.localtime)).split(' ');
  dateElement.textContent = `${date}`;
  hourElement.textContent = `${hour}`;
  humidityElem.textContent = `Humidity: ${current.humidity}%`;
  let temperature;
  let temperatureTypeLetter;
  if (temperatureType !== 'celcius') {
    const temperatureObj = (0,_temperatures__WEBPACK_IMPORTED_MODULE_2__.getConvertedTemperatureAndLetterType)(
      current.temp_c,
      temperatureType
    );
    temperature = temperatureObj.temperature;
    temperatureTypeLetter = temperatureObj.temperatureTypeLetter;
  } else {
    temperature = current.temp_c;
    temperatureTypeLetter = 'C';
  }
  temperatureTitleElem.textContent = `${temperature}° ${temperatureTypeLetter}`;
  temperatureTitleElem.setAttribute('data-temperature', temperature);
  temperatureConditionElem.textContent = current.condition.text;
  const { src, alt } = (0,_weather__WEBPACK_IMPORTED_MODULE_1__.getWeatherIconSrcAndAlt)(
    current.condition,
    current.is_day
  );
  weatherIconElem.src = src;
  weatherIconElem.alt = alt;
}

function displayForecastData(forecastData, temperatureType) {
  forecastsContainer.innerHTML = '';
  forecastData.forEach((forecastDay) => {
    const { date, info } = forecastDay;
    const forecastTitleElem = document.createElement('h4');
    const parsedDate = (0,_dates__WEBPACK_IMPORTED_MODULE_0__.parseDate)(date);
    const dayOfTheWeek = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
    }).format(parsedDate);
    forecastTitleElem.textContent = dayOfTheWeek;

    const conditionIconElem = document.createElement('img');
    const { src, alt } = (0,_weather__WEBPACK_IMPORTED_MODULE_1__.getWeatherIconSrcAndAlt)(info.condition);
    conditionIconElem.src = src;
    conditionIconElem.alt = alt;

    const conditionTextElem = document.createElement('h3');
    conditionTextElem.textContent = info.condition.text;

    let temperature;
    let temperatureTypeLetter;
    if (temperatureType !== 'celcius') {
      const temperatureObj = (0,_temperatures__WEBPACK_IMPORTED_MODULE_2__.getConvertedTemperatureAndLetterType)(
        info.avgtemp_c,
        temperatureType
      );
      temperature = temperatureObj.temperature;
      temperatureTypeLetter = temperatureObj.temperatureTypeLetter;
    } else {
      temperature = info.avgtemp_c;
      temperatureTypeLetter = 'C';
    }

    const temperatureParaElem = document.createElement('p');
    temperatureParaElem.classList.add('temperature');
    temperatureParaElem.setAttribute('data-temperature', temperature);
    temperatureParaElem.textContent = `${temperature}° ${temperatureTypeLetter}`;

    const forecastContainer = document.createElement('div');
    forecastContainer.classList.add('forecast');

    forecastContainer.appendChild(forecastTitleElem);
    forecastContainer.appendChild(conditionIconElem);
    forecastContainer.appendChild(conditionTextElem);
    forecastContainer.appendChild(temperatureParaElem);

    forecastsContainer.appendChild(forecastContainer);
  });
}

function changeTemperatureTypeToAllTemperatureElems(
  temperatureElements,
  newTemperatureType
) {
  temperatureElements.forEach((temperatureElem) => {
    const currentTemperature = temperatureElem.getAttribute('data-temperature');
    const { temperature, temperatureTypeLetter } =
      (0,_temperatures__WEBPACK_IMPORTED_MODULE_2__.getConvertedTemperatureAndLetterType)(
        currentTemperature,
        newTemperatureType
      );
    temperatureElem.textContent = `${temperature}° ${temperatureTypeLetter}`;
    temperatureElem.setAttribute('data-temperature', temperature);
  });
}

function displayErrorMsg(errorMsg) {
  errorMsgElem.textContent = errorMsg;
  setVisible(errorMsgElem);
  setTimeout(() => {
    setHidden(errorMsgElem);
  }, 3000);
}

function setVisible(element) {
  element.classList.remove('hidden');
  element.classList.add('visible');
}

function setHidden(element) {
  element.classList.remove('visible');
  element.classList.add('hidden');
}


/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppState)
/* harmony export */ });
class AppState {
  constructor() {
    this.temperatureType = 'celcius';
    this.currentCity = '';
  }

  get temperatureType() {
    return this._temperatureType;
  }

  get currentCity() {
    return this._currentCity;
  }

  set temperatureType(tempType) {
    this._temperatureType = tempType;
  }

  set currentCity(city) {
    this._currentCity = city;
  }
}


/***/ }),

/***/ "./src/temperatures.js":
/*!*****************************!*\
  !*** ./src/temperatures.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToCelcius: () => (/* binding */ convertToCelcius),
/* harmony export */   convertToFahrenheit: () => (/* binding */ convertToFahrenheit),
/* harmony export */   getConvertedTemperatureAndLetterType: () => (/* binding */ getConvertedTemperatureAndLetterType)
/* harmony export */ });
function convertToFahrenheit(celciusGrades) {
  return ((celciusGrades * 9) / 5 + 32).toFixed(2);
}

function convertToCelcius(fahrenheitGrades) {
  return (((fahrenheitGrades - 32) * 5) / 9).toFixed(2);
}

function getConvertedTemperatureAndLetterType(
  temperature,
  currentTemperatureType
) {
  if (currentTemperatureType === 'celcius') {
    return {
      temperature: convertToCelcius(temperature),
      temperatureTypeLetter: 'C',
    };
  }
  return {
    temperature: convertToFahrenheit(temperature),
    temperatureTypeLetter: 'F',
  };
}


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData),
/* harmony export */   getWeatherIconSrcAndAlt: () => (/* binding */ getWeatherIconSrcAndAlt),
/* harmony export */   processForeCastData: () => (/* binding */ processForeCastData)
/* harmony export */ });
/* harmony import */ var _weather_conditions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather_conditions.json */ "./src/weather_conditions.json");


async function getWeatherData(country) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=33cf022bfd764080a3831303231907&q=${country}&days=3&aqi=no&alerts=no`
  );
  const weatherData = await response.json();
  return weatherData;
}

function getWeatherIconSrcAndAlt(conditionInfo, isDay = 1) {
  const weatherConditionIconCode = _weather_conditions_json__WEBPACK_IMPORTED_MODULE_0__.find(
    (weatherCondition) => {
      return weatherCondition.code === conditionInfo.code;
    }
  ).icon;
  const src = `./resources/icons/${
    isDay ? 'day' : 'night'
  }/${weatherConditionIconCode}.png`;
  const alt = conditionInfo.text;
  return { src, alt };
}

function processForeCastData(forecastArr) {
  return forecastArr.map((forecastDay) => {
    return { date: forecastDay.date, info: forecastDay.day };
  });
}


/***/ }),

/***/ "./src/Poppins-Regular.ttf":
/*!*********************************!*\
  !*** ./src/Poppins-Regular.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ }),

/***/ "./src/weather_conditions.json":
/*!*************************************!*\
  !*** ./src/weather_conditions.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"code":1000,"day":"Sunny","night":"Clear","icon":113},{"code":1003,"day":"Partly cloudy","night":"Partly cloudy","icon":116},{"code":1006,"day":"Cloudy","night":"Cloudy","icon":119},{"code":1009,"day":"Overcast","night":"Overcast","icon":122},{"code":1030,"day":"Mist","night":"Mist","icon":143},{"code":1063,"day":"Patchy rain possible","night":"Patchy rain possible","icon":176},{"code":1066,"day":"Patchy snow possible","night":"Patchy snow possible","icon":179},{"code":1069,"day":"Patchy sleet possible","night":"Patchy sleet possible","icon":182},{"code":1072,"day":"Patchy freezing drizzle possible","night":"Patchy freezing drizzle possible","icon":185},{"code":1087,"day":"Thundery outbreaks possible","night":"Thundery outbreaks possible","icon":200},{"code":1114,"day":"Blowing snow","night":"Blowing snow","icon":227},{"code":1117,"day":"Blizzard","night":"Blizzard","icon":230},{"code":1135,"day":"Fog","night":"Fog","icon":248},{"code":1147,"day":"Freezing fog","night":"Freezing fog","icon":260},{"code":1150,"day":"Patchy light drizzle","night":"Patchy light drizzle","icon":263},{"code":1153,"day":"Light drizzle","night":"Light drizzle","icon":266},{"code":1168,"day":"Freezing drizzle","night":"Freezing drizzle","icon":281},{"code":1171,"day":"Heavy freezing drizzle","night":"Heavy freezing drizzle","icon":284},{"code":1180,"day":"Patchy light rain","night":"Patchy light rain","icon":293},{"code":1183,"day":"Light rain","night":"Light rain","icon":296},{"code":1186,"day":"Moderate rain at times","night":"Moderate rain at times","icon":299},{"code":1189,"day":"Moderate rain","night":"Moderate rain","icon":302},{"code":1192,"day":"Heavy rain at times","night":"Heavy rain at times","icon":305},{"code":1195,"day":"Heavy rain","night":"Heavy rain","icon":308},{"code":1198,"day":"Light freezing rain","night":"Light freezing rain","icon":311},{"code":1201,"day":"Moderate or heavy freezing rain","night":"Moderate or heavy freezing rain","icon":314},{"code":1204,"day":"Light sleet","night":"Light sleet","icon":317},{"code":1207,"day":"Moderate or heavy sleet","night":"Moderate or heavy sleet","icon":320},{"code":1210,"day":"Patchy light snow","night":"Patchy light snow","icon":323},{"code":1213,"day":"Light snow","night":"Light snow","icon":326},{"code":1216,"day":"Patchy moderate snow","night":"Patchy moderate snow","icon":329},{"code":1219,"day":"Moderate snow","night":"Moderate snow","icon":332},{"code":1222,"day":"Patchy heavy snow","night":"Patchy heavy snow","icon":335},{"code":1225,"day":"Heavy snow","night":"Heavy snow","icon":338},{"code":1237,"day":"Ice pellets","night":"Ice pellets","icon":350},{"code":1240,"day":"Light rain shower","night":"Light rain shower","icon":353},{"code":1243,"day":"Moderate or heavy rain shower","night":"Moderate or heavy rain shower","icon":356},{"code":1246,"day":"Torrential rain shower","night":"Torrential rain shower","icon":359},{"code":1249,"day":"Light sleet showers","night":"Light sleet showers","icon":362},{"code":1252,"day":"Moderate or heavy sleet showers","night":"Moderate or heavy sleet showers","icon":365},{"code":1255,"day":"Light snow showers","night":"Light snow showers","icon":368},{"code":1258,"day":"Moderate or heavy snow showers","night":"Moderate or heavy snow showers","icon":371},{"code":1261,"day":"Light showers of ice pellets","night":"Light showers of ice pellets","icon":374},{"code":1264,"day":"Moderate or heavy showers of ice pellets","night":"Moderate or heavy showers of ice pellets","icon":377},{"code":1273,"day":"Patchy light rain with thunder","night":"Patchy light rain with thunder","icon":386},{"code":1276,"day":"Moderate or heavy rain with thunder","night":"Moderate or heavy rain with thunder","icon":389},{"code":1279,"day":"Patchy light snow with thunder","night":"Patchy light snow with thunder","icon":392},{"code":1282,"day":"Moderate or heavy snow with thunder","night":"Moderate or heavy snow with thunder","icon":395}]');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const form = document.querySelector('form');
const locationInput = document.getElementById('location-input');
const contentInfoElem = document.querySelector('.content-info');
const loadingElem = document.getElementById('loading');

const appState = new _state__WEBPACK_IMPORTED_MODULE_2__["default"]();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  // to avoid fetching already fetched data
  if (location === appState.currentCity) {
    return;
  }
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setHidden)(contentInfoElem);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setVisible)(loadingElem);
  const weatherData = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(location);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setHidden)(loadingElem);
  const { error } = weatherData;
  if (error) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayErrorMsg)(error.message);
    return;
  }
  appState.currentCity = location;
  const forecastData = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.processForeCastData)(weatherData.forecast.forecastday);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayCurrentWeatherData)(weatherData, appState.temperatureType);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayForecastData)(forecastData, appState.temperatureType);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setVisible)(contentInfoElem);
});

const toggleTemperatureTypeBtn = document.getElementById(
  'toggle-temperature-type-btn'
);

toggleTemperatureTypeBtn.addEventListener('click', function () {
  const currentTemperatureType = appState.temperatureType;
  const temperatureElements = document.querySelectorAll('.temperature');
  if (currentTemperatureType === 'celcius') {
    appState.temperatureType = 'fahrenheit';
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeTemperatureTypeToAllTemperatureElems)(
      temperatureElements,
      appState.temperatureType
    );
    this.textContent = 'Switch to Celcius';
  } else {
    appState.temperatureType = 'celcius';
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeTemperatureTypeToAllTemperatureElems)(
      temperatureElements,
      appState.temperatureType
    );
    this.textContent = 'Switch to Fahrenheit';
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxV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UTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBUztBQUNYLEVBQUUsZ0RBQVU7QUFDWiw0QkFBNEIsd0RBQWM7QUFDMUMsRUFBRSwrQ0FBUztBQUNYLFVBQVUsUUFBUTtBQUNsQjtBQUNBLElBQUkscURBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZEQUFtQjtBQUMxQyxFQUFFLCtEQUF5QjtBQUMzQixFQUFFLHlEQUFtQjtBQUNyQixFQUFFLGdEQUFVO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRkFBMEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJLGdGQUEwQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9kYXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdGVtcGVyYXR1cmVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjEzMWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDBkdmg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1pbi1oZWlnaHQ6IDkwJTtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgbWluLWhlaWdodDogMTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3dlYXRoZXItYXBpLWxpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODJmNDk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4jbG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5kb3Qge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNsb2FkaW5nIC5kb3Q6bnRoLWNoaWxkKDEpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gIGFuaW1hdGlvbjogbG9hZGluZ0RvdCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZTtcclxufVxyXG5cclxuI2xvYWRpbmcgLmRvdDpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbjogbG9hZGluZ0RvdCAycyBlYXNlLWluLW91dCAwLjJzIGluZmluaXRlO1xyXG59XHJcblxyXG4jbG9hZGluZyAuZG90Om50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uOiBsb2FkaW5nRG90IDJzIGVhc2UtaW4tb3V0IDAuNHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZ0RvdCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NXB4KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMzJweDtcclxufVxyXG5cclxuLm9wYWNpdHktYW5pbWF0ZWQge1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi52aXNpYmxlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjRweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jdG9nZ2xlLXRlbXBlcmF0dXJlLXR5cGUtYnRuIHtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBhNWZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0b2dnbGUtdGVtcGVyYXR1cmUtdHlwZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNjBhNWZhO1xyXG59XHJcblxyXG4jbG9jYXRpb24taW5wdXQge1xyXG4gIHdpZHRoOiBtaW4oNzUlLCAzMDBweCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMmEzYTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgY29sb3I6IHdoZWF0O1xyXG4gIGZvbnQtc2l6ZTogMS4wOHJlbTtcclxufVxyXG5cclxuI2xvY2F0aW9uLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MGE1ZmE7XHJcbn1cclxuXHJcbiNsb2NhdGlvbi1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3NlYXJjaC1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMi4ycmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Zjc5ZmY7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4jc2VhcmNoLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNzZWFyY2gtYnRuID4gc3ZnIHtcclxuICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuI3NlYXJjaC1idG46aG92ZXIgPiBzdmcge1xyXG4gIGZpbGw6ICM2Zjc5ZmY7XHJcbn1cclxuXHJcbiNlcnJvci1tc2cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxufVxyXG5cclxuLnByaW5jaXBhbC13ZWF0aGVyLWluZm8ge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gIGdhcDogMzJweDtcclxufVxyXG5cclxuLmxvY2F0aW9uLWluZm8ge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbn1cclxuXHJcbi5sb2NhdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbn1cclxuXHJcbi5kYXRlLFxyXG4uaG91ciB7XHJcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG59XHJcblxyXG4udGVtcGVyYXR1cmUtYW5kLWh1bWlkaXR5LWNvbnRhaW5lciB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gIGdyaWQtcm93OiAyIC8gMztcclxufVxyXG5cclxuLnRlbXBlcmF0dXJlLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxufVxyXG5cclxuLmh1bWlkaXR5IHtcclxuICBmb250LXNpemU6IDEuMDVyZW07XHJcbn1cclxuXHJcbiN3ZWF0aGVyLWljb24ge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogZW5kO1xyXG59XHJcblxyXG4udGVtcGVyYXR1cmUtY29uZGl0aW9uIHtcclxuICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgZ3JpZC1yb3c6IDIgLyAzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBhbGlnbi1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLmZvcmVjYXN0LXNlY3Rpb24sXHJcbi5haXItY29uZGl0aW9ucyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMmEzYTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmZvcmVjYXN0LXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxufVxyXG5cclxuLmZvcmVjYXN0LXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mb3JlY2FzdHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4uZm9yZWNhc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODJmNDk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQWlDO0FBQ25DOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXHJcXG4gIHNyYzogdXJsKCcuL1BvcHBpbnMtUmVndWxhci50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjEzMWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWluLWhlaWdodDogOTAlO1xcclxcbiAgcGFkZGluZy10b3A6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyLWFwaS1saW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODJmNDk7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNsb2FkaW5nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDRweDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5kb3Qge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvYWRpbmcgLmRvdDpudGgtY2hpbGQoMSkge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZ0RvdCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvYWRpbmcgLmRvdDpudGgtY2hpbGQoMikge1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nRG90IDJzIGVhc2UtaW4tb3V0IDAuMnMgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbiNsb2FkaW5nIC5kb3Q6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZ0RvdCAycyBlYXNlLWluLW91dCAwLjRzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvYWRpbmdEb3Qge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzVweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5vcGFjaXR5LWFuaW1hdGVkIHtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2libGUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiN0b2dnbGUtdGVtcGVyYXR1cmUtdHlwZS1idG4ge1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBhNWZhO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0b2dnbGUtdGVtcGVyYXR1cmUtdHlwZS1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogIzYwYTVmYTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uLWlucHV0IHtcXHJcXG4gIHdpZHRoOiBtaW4oNzUlLCAzMDBweCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMmEzYTtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGNvbG9yOiB3aGVhdDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4wOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uLWlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjBhNWZhO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb24taW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyLjJyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmNzlmZjtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYnRuID4gc3ZnIHtcXHJcXG4gIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJ0bjpob3ZlciA+IHN2ZyB7XFxyXFxuICBmaWxsOiAjNmY3OWZmO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3ItbXNnIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW5jaXBhbC13ZWF0aGVyLWluZm8ge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbi1pbmZvIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSxcXHJcXG4uaG91ciB7XFxyXFxuICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZW1wZXJhdHVyZS1hbmQtaHVtaWRpdHktY29udGFpbmVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG4gIGdyaWQtcm93OiAyIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHkge1xcclxcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlci1pY29uIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmUtY29uZGl0aW9uIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1zZWN0aW9uLFxcclxcbi5haXItY29uZGl0aW9ucyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyYTNhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0cy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbiAgcGFkZGluZzogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODJmNDk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gIHJldHVybiBgJHtkYXkgPCAxMCA/ICcwJyArIGRheSA6IGRheX0vJHtcclxuICAgIG1vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRoXHJcbiAgfS8ke3llYXJ9ICR7aG91cnN9OiR7bWludXRlc31gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHIpIHtcclxuICBjb25zdCBkYXRlQXJyID0gZGF0ZVN0ci5zcGxpdCgnLScpO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlQXJyWzBdO1xyXG4gIC8vIDAgaW5kZXhlZCBtb250aHNcclxuICBjb25zdCBtb250aCA9IGRhdGVBcnJbMV0gLSAxO1xyXG4gIGNvbnN0IGRheSA9IGRhdGVBcnJbMl07XHJcbiAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xyXG59XHJcbiIsImltcG9ydCB7IGZvcm1hdERhdGUsIHBhcnNlRGF0ZSB9IGZyb20gJy4vZGF0ZXMnO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVySWNvblNyY0FuZEFsdCB9IGZyb20gJy4vd2VhdGhlcic7XHJcbmltcG9ydCB7XHJcbiAgY29udmVydFRvQ2VsY2l1cyxcclxuICBjb252ZXJ0VG9GYWhyZW5oZWl0LFxyXG4gIGdldENvbnZlcnRlZFRlbXBlcmF0dXJlQW5kTGV0dGVyVHlwZSxcclxufSBmcm9tICcuL3RlbXBlcmF0dXJlcyc7XHJcblxyXG4vLyB0aGlzIGlzIHRvIHByZXZlbnQgdGhlIGFuaW1hdGlvbnMgZnJvbSB0cmlnZ2VyaW5nIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGluZ1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICBjb250ZW50SW5mb0VsZW0uY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS1hbmltYXRlZCcpO1xyXG4gIGVycm9yTXNnRWxlbS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LWFuaW1hdGVkJyk7XHJcbn0pO1xyXG5cclxuY29uc3QgY29udGVudEluZm9FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtaW5mbycpO1xyXG5jb25zdCBlcnJvck1zZ0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItbXNnJyk7XHJcblxyXG5jb25zdCBsb2NhdGlvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcclxuY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xyXG5jb25zdCBob3VyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VyJyk7XHJcbmNvbnN0IHRlbXBlcmF0dXJlVGl0bGVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLXRpdGxlJyk7XHJcbmNvbnN0IGh1bWlkaXR5RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xyXG5jb25zdCB3ZWF0aGVySWNvbkVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1pY29uJyk7XHJcbmNvbnN0IHRlbXBlcmF0dXJlQ29uZGl0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgJy50ZW1wZXJhdHVyZS1jb25kaXRpb24nXHJcbik7XHJcblxyXG5jb25zdCBmb3JlY2FzdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3RzLWNvbnRhaW5lcicpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlckRhdGEoXHJcbiAgeyBjdXJyZW50LCBsb2NhdGlvbiB9LFxyXG4gIHRlbXBlcmF0dXJlVHlwZVxyXG4pIHtcclxuICBsb2NhdGlvbkVsZW0udGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbi5uYW1lfSwgJHtsb2NhdGlvbi5yZWdpb259LCAke2xvY2F0aW9uLmNvdW50cnl9YDtcclxuICBjb25zdCBbZGF0ZSwgaG91cl0gPSBmb3JtYXREYXRlKG5ldyBEYXRlKGxvY2F0aW9uLmxvY2FsdGltZSkpLnNwbGl0KCcgJyk7XHJcbiAgZGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXRlfWA7XHJcbiAgaG91ckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtob3VyfWA7XHJcbiAgaHVtaWRpdHlFbGVtLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2N1cnJlbnQuaHVtaWRpdHl9JWA7XHJcbiAgbGV0IHRlbXBlcmF0dXJlO1xyXG4gIGxldCB0ZW1wZXJhdHVyZVR5cGVMZXR0ZXI7XHJcbiAgaWYgKHRlbXBlcmF0dXJlVHlwZSAhPT0gJ2NlbGNpdXMnKSB7XHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZU9iaiA9IGdldENvbnZlcnRlZFRlbXBlcmF0dXJlQW5kTGV0dGVyVHlwZShcclxuICAgICAgY3VycmVudC50ZW1wX2MsXHJcbiAgICAgIHRlbXBlcmF0dXJlVHlwZVxyXG4gICAgKTtcclxuICAgIHRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmVPYmoudGVtcGVyYXR1cmU7XHJcbiAgICB0ZW1wZXJhdHVyZVR5cGVMZXR0ZXIgPSB0ZW1wZXJhdHVyZU9iai50ZW1wZXJhdHVyZVR5cGVMZXR0ZXI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXBlcmF0dXJlID0gY3VycmVudC50ZW1wX2M7XHJcbiAgICB0ZW1wZXJhdHVyZVR5cGVMZXR0ZXIgPSAnQyc7XHJcbiAgfVxyXG4gIHRlbXBlcmF0dXJlVGl0bGVFbGVtLnRleHRDb250ZW50ID0gYCR7dGVtcGVyYXR1cmV9wrAgJHt0ZW1wZXJhdHVyZVR5cGVMZXR0ZXJ9YDtcclxuICB0ZW1wZXJhdHVyZVRpdGxlRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGVyYXR1cmUnLCB0ZW1wZXJhdHVyZSk7XHJcbiAgdGVtcGVyYXR1cmVDb25kaXRpb25FbGVtLnRleHRDb250ZW50ID0gY3VycmVudC5jb25kaXRpb24udGV4dDtcclxuICBjb25zdCB7IHNyYywgYWx0IH0gPSBnZXRXZWF0aGVySWNvblNyY0FuZEFsdChcclxuICAgIGN1cnJlbnQuY29uZGl0aW9uLFxyXG4gICAgY3VycmVudC5pc19kYXlcclxuICApO1xyXG4gIHdlYXRoZXJJY29uRWxlbS5zcmMgPSBzcmM7XHJcbiAgd2VhdGhlckljb25FbGVtLmFsdCA9IGFsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlGb3JlY2FzdERhdGEoZm9yZWNhc3REYXRhLCB0ZW1wZXJhdHVyZVR5cGUpIHtcclxuICBmb3JlY2FzdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgZm9yZWNhc3REYXRhLmZvckVhY2goKGZvcmVjYXN0RGF5KSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGUsIGluZm8gfSA9IGZvcmVjYXN0RGF5O1xyXG4gICAgY29uc3QgZm9yZWNhc3RUaXRsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlRGF0ZShkYXRlKTtcclxuICAgIGNvbnN0IGRheU9mVGhlV2VlayA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgd2Vla2RheTogJ2xvbmcnLFxyXG4gICAgfSkuZm9ybWF0KHBhcnNlZERhdGUpO1xyXG4gICAgZm9yZWNhc3RUaXRsZUVsZW0udGV4dENvbnRlbnQgPSBkYXlPZlRoZVdlZWs7XHJcblxyXG4gICAgY29uc3QgY29uZGl0aW9uSWNvbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbnN0IHsgc3JjLCBhbHQgfSA9IGdldFdlYXRoZXJJY29uU3JjQW5kQWx0KGluZm8uY29uZGl0aW9uKTtcclxuICAgIGNvbmRpdGlvbkljb25FbGVtLnNyYyA9IHNyYztcclxuICAgIGNvbmRpdGlvbkljb25FbGVtLmFsdCA9IGFsdDtcclxuXHJcbiAgICBjb25zdCBjb25kaXRpb25UZXh0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25kaXRpb25UZXh0RWxlbS50ZXh0Q29udGVudCA9IGluZm8uY29uZGl0aW9uLnRleHQ7XHJcblxyXG4gICAgbGV0IHRlbXBlcmF0dXJlO1xyXG4gICAgbGV0IHRlbXBlcmF0dXJlVHlwZUxldHRlcjtcclxuICAgIGlmICh0ZW1wZXJhdHVyZVR5cGUgIT09ICdjZWxjaXVzJykge1xyXG4gICAgICBjb25zdCB0ZW1wZXJhdHVyZU9iaiA9IGdldENvbnZlcnRlZFRlbXBlcmF0dXJlQW5kTGV0dGVyVHlwZShcclxuICAgICAgICBpbmZvLmF2Z3RlbXBfYyxcclxuICAgICAgICB0ZW1wZXJhdHVyZVR5cGVcclxuICAgICAgKTtcclxuICAgICAgdGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZU9iai50ZW1wZXJhdHVyZTtcclxuICAgICAgdGVtcGVyYXR1cmVUeXBlTGV0dGVyID0gdGVtcGVyYXR1cmVPYmoudGVtcGVyYXR1cmVUeXBlTGV0dGVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGVtcGVyYXR1cmUgPSBpbmZvLmF2Z3RlbXBfYztcclxuICAgICAgdGVtcGVyYXR1cmVUeXBlTGV0dGVyID0gJ0MnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlUGFyYUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZW1wZXJhdHVyZVBhcmFFbGVtLmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlJyk7XHJcbiAgICB0ZW1wZXJhdHVyZVBhcmFFbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wZXJhdHVyZScsIHRlbXBlcmF0dXJlKTtcclxuICAgIHRlbXBlcmF0dXJlUGFyYUVsZW0udGV4dENvbnRlbnQgPSBgJHt0ZW1wZXJhdHVyZX3CsCAke3RlbXBlcmF0dXJlVHlwZUxldHRlcn1gO1xyXG5cclxuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdCcpO1xyXG5cclxuICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0VGl0bGVFbGVtKTtcclxuICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbkljb25FbGVtKTtcclxuICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvblRleHRFbGVtKTtcclxuICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlUGFyYUVsZW0pO1xyXG5cclxuICAgIGZvcmVjYXN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdENvbnRhaW5lcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUZW1wZXJhdHVyZVR5cGVUb0FsbFRlbXBlcmF0dXJlRWxlbXMoXHJcbiAgdGVtcGVyYXR1cmVFbGVtZW50cyxcclxuICBuZXdUZW1wZXJhdHVyZVR5cGVcclxuKSB7XHJcbiAgdGVtcGVyYXR1cmVFbGVtZW50cy5mb3JFYWNoKCh0ZW1wZXJhdHVyZUVsZW0pID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGVyYXR1cmUnKTtcclxuICAgIGNvbnN0IHsgdGVtcGVyYXR1cmUsIHRlbXBlcmF0dXJlVHlwZUxldHRlciB9ID1cclxuICAgICAgZ2V0Q29udmVydGVkVGVtcGVyYXR1cmVBbmRMZXR0ZXJUeXBlKFxyXG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZSxcclxuICAgICAgICBuZXdUZW1wZXJhdHVyZVR5cGVcclxuICAgICAgKTtcclxuICAgIHRlbXBlcmF0dXJlRWxlbS50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlfcKwICR7dGVtcGVyYXR1cmVUeXBlTGV0dGVyfWA7XHJcbiAgICB0ZW1wZXJhdHVyZUVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBlcmF0dXJlJywgdGVtcGVyYXR1cmUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVycm9yTXNnKGVycm9yTXNnKSB7XHJcbiAgZXJyb3JNc2dFbGVtLnRleHRDb250ZW50ID0gZXJyb3JNc2c7XHJcbiAgc2V0VmlzaWJsZShlcnJvck1zZ0VsZW0pO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc2V0SGlkZGVuKGVycm9yTXNnRWxlbSk7XHJcbiAgfSwgMzAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRWaXNpYmxlKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SGlkZGVuKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGVtcGVyYXR1cmVUeXBlID0gJ2NlbGNpdXMnO1xyXG4gICAgdGhpcy5jdXJyZW50Q2l0eSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRlbXBlcmF0dXJlVHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90ZW1wZXJhdHVyZVR5cGU7XHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudENpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENpdHk7XHJcbiAgfVxyXG5cclxuICBzZXQgdGVtcGVyYXR1cmVUeXBlKHRlbXBUeXBlKSB7XHJcbiAgICB0aGlzLl90ZW1wZXJhdHVyZVR5cGUgPSB0ZW1wVHlwZTtcclxuICB9XHJcblxyXG4gIHNldCBjdXJyZW50Q2l0eShjaXR5KSB7XHJcbiAgICB0aGlzLl9jdXJyZW50Q2l0eSA9IGNpdHk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9GYWhyZW5oZWl0KGNlbGNpdXNHcmFkZXMpIHtcclxuICByZXR1cm4gKChjZWxjaXVzR3JhZGVzICogOSkgLyA1ICsgMzIpLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9DZWxjaXVzKGZhaHJlbmhlaXRHcmFkZXMpIHtcclxuICByZXR1cm4gKCgoZmFocmVuaGVpdEdyYWRlcyAtIDMyKSAqIDUpIC8gOSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnZlcnRlZFRlbXBlcmF0dXJlQW5kTGV0dGVyVHlwZShcclxuICB0ZW1wZXJhdHVyZSxcclxuICBjdXJyZW50VGVtcGVyYXR1cmVUeXBlXHJcbikge1xyXG4gIGlmIChjdXJyZW50VGVtcGVyYXR1cmVUeXBlID09PSAnY2VsY2l1cycpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRlbXBlcmF0dXJlOiBjb252ZXJ0VG9DZWxjaXVzKHRlbXBlcmF0dXJlKSxcclxuICAgICAgdGVtcGVyYXR1cmVUeXBlTGV0dGVyOiAnQycsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdGVtcGVyYXR1cmU6IGNvbnZlcnRUb0ZhaHJlbmhlaXQodGVtcGVyYXR1cmUpLFxyXG4gICAgdGVtcGVyYXR1cmVUeXBlTGV0dGVyOiAnRicsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgd2VhdGhlckNvbmRpdGlvbnMgZnJvbSAnLi93ZWF0aGVyX2NvbmRpdGlvbnMuanNvbic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY291bnRyeSkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzNjZjAyMmJmZDc2NDA4MGEzODMxMzAzMjMxOTA3JnE9JHtjb3VudHJ5fSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub2BcclxuICApO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXRoZXJJY29uU3JjQW5kQWx0KGNvbmRpdGlvbkluZm8sIGlzRGF5ID0gMSkge1xyXG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb25JY29uQ29kZSA9IHdlYXRoZXJDb25kaXRpb25zLmZpbmQoXHJcbiAgICAod2VhdGhlckNvbmRpdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4gd2VhdGhlckNvbmRpdGlvbi5jb2RlID09PSBjb25kaXRpb25JbmZvLmNvZGU7XHJcbiAgICB9XHJcbiAgKS5pY29uO1xyXG4gIGNvbnN0IHNyYyA9IGAuL3Jlc291cmNlcy9pY29ucy8ke1xyXG4gICAgaXNEYXkgPyAnZGF5JyA6ICduaWdodCdcclxuICB9LyR7d2VhdGhlckNvbmRpdGlvbkljb25Db2RlfS5wbmdgO1xyXG4gIGNvbnN0IGFsdCA9IGNvbmRpdGlvbkluZm8udGV4dDtcclxuICByZXR1cm4geyBzcmMsIGFsdCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0ZvcmVDYXN0RGF0YShmb3JlY2FzdEFycikge1xyXG4gIHJldHVybiBmb3JlY2FzdEFyci5tYXAoKGZvcmVjYXN0RGF5KSA9PiB7XHJcbiAgICByZXR1cm4geyBkYXRlOiBmb3JlY2FzdERheS5kYXRlLCBpbmZvOiBmb3JlY2FzdERheS5kYXkgfTtcclxuICB9KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldFdlYXRoZXJEYXRhLCBwcm9jZXNzRm9yZUNhc3REYXRhIH0gZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHtcclxuICBkaXNwbGF5Q3VycmVudFdlYXRoZXJEYXRhLFxyXG4gIGRpc3BsYXlGb3JlY2FzdERhdGEsXHJcbiAgZGlzcGxheUVycm9yTXNnLFxyXG4gIHNldFZpc2libGUsXHJcbiAgc2V0SGlkZGVuLFxyXG4gIGNoYW5nZVRlbXBlcmF0dXJlVHlwZVRvQWxsVGVtcGVyYXR1cmVFbGVtcyxcclxufSBmcm9tICcuL2RvbSc7XHJcbmltcG9ydCBBcHBTdGF0ZSBmcm9tICcuL3N0YXRlJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbi1pbnB1dCcpO1xyXG5jb25zdCBjb250ZW50SW5mb0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1pbmZvJyk7XHJcbmNvbnN0IGxvYWRpbmdFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmcnKTtcclxuXHJcbmNvbnN0IGFwcFN0YXRlID0gbmV3IEFwcFN0YXRlKCk7XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcclxuICAvLyB0byBhdm9pZCBmZXRjaGluZyBhbHJlYWR5IGZldGNoZWQgZGF0YVxyXG4gIGlmIChsb2NhdGlvbiA9PT0gYXBwU3RhdGUuY3VycmVudENpdHkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgc2V0SGlkZGVuKGNvbnRlbnRJbmZvRWxlbSk7XHJcbiAgc2V0VmlzaWJsZShsb2FkaW5nRWxlbSk7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XHJcbiAgc2V0SGlkZGVuKGxvYWRpbmdFbGVtKTtcclxuICBjb25zdCB7IGVycm9yIH0gPSB3ZWF0aGVyRGF0YTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGRpc3BsYXlFcnJvck1zZyhlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgYXBwU3RhdGUuY3VycmVudENpdHkgPSBsb2NhdGlvbjtcclxuICBjb25zdCBmb3JlY2FzdERhdGEgPSBwcm9jZXNzRm9yZUNhc3REYXRhKHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5KTtcclxuICBkaXNwbGF5Q3VycmVudFdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhLCBhcHBTdGF0ZS50ZW1wZXJhdHVyZVR5cGUpO1xyXG4gIGRpc3BsYXlGb3JlY2FzdERhdGEoZm9yZWNhc3REYXRhLCBhcHBTdGF0ZS50ZW1wZXJhdHVyZVR5cGUpO1xyXG4gIHNldFZpc2libGUoY29udGVudEluZm9FbGVtKTtcclxufSk7XHJcblxyXG5jb25zdCB0b2dnbGVUZW1wZXJhdHVyZVR5cGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAndG9nZ2xlLXRlbXBlcmF0dXJlLXR5cGUtYnRuJ1xyXG4pO1xyXG5cclxudG9nZ2xlVGVtcGVyYXR1cmVUeXBlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZVR5cGUgPSBhcHBTdGF0ZS50ZW1wZXJhdHVyZVR5cGU7XHJcbiAgY29uc3QgdGVtcGVyYXR1cmVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wZXJhdHVyZScpO1xyXG4gIGlmIChjdXJyZW50VGVtcGVyYXR1cmVUeXBlID09PSAnY2VsY2l1cycpIHtcclxuICAgIGFwcFN0YXRlLnRlbXBlcmF0dXJlVHlwZSA9ICdmYWhyZW5oZWl0JztcclxuICAgIGNoYW5nZVRlbXBlcmF0dXJlVHlwZVRvQWxsVGVtcGVyYXR1cmVFbGVtcyhcclxuICAgICAgdGVtcGVyYXR1cmVFbGVtZW50cyxcclxuICAgICAgYXBwU3RhdGUudGVtcGVyYXR1cmVUeXBlXHJcbiAgICApO1xyXG4gICAgdGhpcy50ZXh0Q29udGVudCA9ICdTd2l0Y2ggdG8gQ2VsY2l1cyc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFwcFN0YXRlLnRlbXBlcmF0dXJlVHlwZSA9ICdjZWxjaXVzJztcclxuICAgIGNoYW5nZVRlbXBlcmF0dXJlVHlwZVRvQWxsVGVtcGVyYXR1cmVFbGVtcyhcclxuICAgICAgdGVtcGVyYXR1cmVFbGVtZW50cyxcclxuICAgICAgYXBwU3RhdGUudGVtcGVyYXR1cmVUeXBlXHJcbiAgICApO1xyXG4gICAgdGhpcy50ZXh0Q29udGVudCA9ICdTd2l0Y2ggdG8gRmFocmVuaGVpdCc7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9