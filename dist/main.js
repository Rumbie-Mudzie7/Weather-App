/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/converter.js":
/*!**************************!*\
  !*** ./src/converter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction calculateTemp() {\n  function celToFah(celsius) {\n    var fahrenheit = Math.round(celsius * (9 / 5) + 32);\n    return fahrenheit;\n  }\n\n  function fahToCel(fahrenheit) {\n    var celsius = Math.round((fahrenheit - 32) * (5 / 9));\n    return celsius;\n  } // Checks if Calsius or Fahrenheit is selected\n\n\n  var tempSelected = document.getElementById(\"temp_diff\");\n  var valueTemp = tempSelected.options[tempSelected.selectedIndex].value; // Checks the value inside the Temperature input\n\n  var numberTemp = document.getElementById(\"temp\").value;\n  var result;\n\n  if (valueTemp == 1) {\n    result = celToFah(numberTemp);\n    document.getElementById(\"resultContainer\").innerHTML = \"= \" + result + \"°Fahrenheit\";\n  } else {\n    result = fahToCel(numberTemp);\n    document.getElementById(\"resultContainer\").innerHTML = \"= \" + result + \"°Celsius\";\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateTemp);\n\n//# sourceURL=webpack://weather-app/./src/converter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converter */ \"./src/converter.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar myForm = document.querySelector('.form-area');\nvar select = document.createElement('select');\nselect.innerHTML = '<select><option value=\"\">Select an option</option><option value=\"sunny\">Sunny</option><option value=\"rainy\">Rainy</option><option value=\"snowing\">Snowing</option><option value=\"overcast\">Overcast</option></select>';\nvar myBody = document.querySelector('body');\nmyBody.appendChild(select);\ndocument.querySelector('select').addEventListener('change', _weather__WEBPACK_IMPORTED_MODULE_0__.default);\n\nvar locationForm = function locationForm() {\n  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var newForm = \"<form action=\\\"#\\\" method=\\\"POST\\\" class=\\\"location-form\\\"><input type=\\\"text\\\" placeholder=\\\"Enter location name\\\" name=\\\"locationName\\\" required value=\\\"\".concat(value, \"\\\"><input type=\\\"submit\\\"></form>\");\n  return newForm;\n};\n\nmyForm.innerHTML = locationForm();\nvar weatherForm = document.querySelector('.location-form');\nweatherForm.addEventListener('submit', function () {\n  var userLocation = input.value;\n  getWeatherData(userLocation);\n});\n\nfunction getWeatherData(_x) {\n  return _getWeatherData.apply(this, arguments);\n}\n\nfunction _getWeatherData() {\n  _getWeatherData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {\n    var path, response, json;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            path = \"api.openweathermap.org/data/2.5/weather?q=\".concat(value, \"&units=metric&APPID=d943e1092dcc2cf810696528f8081ef6\");\n            _context.prev = 1;\n            _context.next = 4;\n            return fetch(path);\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            json = _context.sent;\n            return _context.abrupt(\"return\", json);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0);\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 11]]);\n  }));\n  return _getWeatherData.apply(this, arguments);\n}\n\ngetWeatherData();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction setWeather(choice) {\n  // let mySelect = document.querySelector('select');\n  // const choice = mySelect.value;\n  if (choice === \"sunny\") {\n    document.querySelector('body').style.backgroundImage = 'url(\"/src/images/weather4.jpg\")';\n  } else if (choice > \"rainy\") {\n    document.querySelector('body').style.backgroundImage = 'url(\"/src/images/weather1.jpg\")';\n  } else if (choice === \"snowing\") {\n    document.querySelector('body').style.backgroundImage = 'url(\"/src/images/weather4.jpg\")';\n  } else if (choice === \"overcast\") {\n    document.querySelector('body').style.backgroundImage = 'url(\"/src/images/weather2.jpg\")';\n  } else {\n    document.querySelector('body').style.backgroundImage = 'url(\"\")';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWeather);\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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
/************************************************************************/
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;