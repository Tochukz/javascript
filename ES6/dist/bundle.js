/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./getClockTime.js":
/*!*************************!*\
  !*** ./getClockTime.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/*Executes a series of functions, passing the return value as argument to the next fro left to right*/\nvar pipe = function pipe() {\n    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {\n        funcs[_key] = arguments[_key];\n    }\n\n    return function (value) {\n        return funcs.reduce(function (currentVal, currentFunc) {\n            return currentFunc(currentVal);\n        }, value);\n    };\n};\n/*Just like pipe but in the opposite direction - right to left */\nvar compose = function compose() {\n    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        funcs[_key2] = arguments[_key2];\n    }\n\n    return function (value) {\n        return funcs.reduceRight(function (currentVal, currentFunc) {\n            return currentFunc(currentVal);\n        }, value);\n    };\n};\n\nvar oneSecond = function oneSecond() {\n    return 1000;\n};\nvar getCurrentTime = function getCurrentTime() {\n    return new Date();\n};\nvar clear = function clear() {\n    return console.clear();\n};\nvar log = function log(message) {\n    return console.log(message);\n};\nvar serializeClockTime = function serializeClockTime(date) {\n    return {\n        hours: date.getHours(),\n        minutes: date.getMinutes(),\n        seconds: date.getSeconds()\n    };\n};\n// const civilianHours = clockTime => ({\n//     ...clockTime,\n//     hours: (clockTime.hours > 12)? clockTime.hours - 12 : clockTime.hours\n// });\n// const appendAMPM = clockTime => ({\n//     ...clockTime,\n//     ampm: (clockTime.hours >= 12)? 'PM' : 'AM'\n// });\nvar civilianHours = function civilianHours(clockTime) {\n    return Object.assign({}, clockTime, { hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours });\n};\nvar appendAMPM = function appendAMPM(clockTime) {\n    return Object.assign({}, clockTime, { ampm: clockTime.hours >= 12 ? 'PM' : 'AM' });\n};\n\nvar display = function display(target) {\n    return function (time) {\n        return target(time);\n    };\n};\nvar formatClock = function formatClock(format) {\n    return function (time) {\n        return format.replace(\"hh\", time.hours).replace(\"mm\", time.minutes).replace(\"ss\", time.seconds).replace(\"tt\", time.ampm);\n    };\n};\n// const prependZero = key => clockTime => ({\n//     ...clockTime,\n//     [key]: (clockTime[key] < 10)? \"0\" + clockTime[key] : clockTime[key]\n// })\nvar prependZero = function prependZero(key) {\n    return function (clockTime) {\n        return Object.assign({}, clockTime, _defineProperty({}, key, clockTime[key] < 10 ? \"0\" + clockTime[key] : clockTime[key]));\n    };\n};\n\nvar convertToCivilianTime = function convertToCivilianTime(clockTime) {\n    return pipe(appendAMPM, civilianHours)(clockTime);\n};\nvar doubleDigits = function doubleDigits(civilianTime) {\n    return pipe(prependZero(\"hours\"), prependZero(\"minutes\"), prependZero(\"seconds\"))(civilianTime);\n};\nvar getClockTime = function getClockTime() {\n    return setInterval(pipe(clear, getCurrentTime, serializeClockTime, convertToCivilianTime, doubleDigits, formatClock(\"hh:mm:ss tt\"), display(log)), oneSecond());\n};\nexports.default = getClockTime;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nZXRDbG9ja1RpbWUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZ2V0Q2xvY2tUaW1lLmpzPzE3ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLypFeGVjdXRlcyBhIHNlcmllcyBvZiBmdW5jdGlvbnMsIHBhc3NpbmcgdGhlIHJldHVybiB2YWx1ZSBhcyBhcmd1bWVudCB0byB0aGUgbmV4dCBmcm8gbGVmdCB0byByaWdodCovXG5jb25zdCBwaXBlID0gKC4uLmZ1bmNzKSA9PiB2YWx1ZSA9PiB7XG4gICAgcmV0dXJuICBmdW5jcy5yZWR1Y2UoKGN1cnJlbnRWYWwsIGN1cnJlbnRGdW5jKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRGdW5jKGN1cnJlbnRWYWwpO1xuICAgICAgICAgICAgfSwgdmFsdWUpO1xufTtcbi8qSnVzdCBsaWtlIHBpcGUgYnV0IGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gLSByaWdodCB0byBsZWZ0ICovXG5jb25zdCBjb21wb3NlID0gKC4uLmZ1bmNzKSA9PiB2YWx1ZSA9PiB7XG4gICAgcmV0dXJuICBmdW5jcy5yZWR1Y2VSaWdodCgoY3VycmVudFZhbCwgY3VycmVudEZ1bmMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEZ1bmMoY3VycmVudFZhbCk7XG4gICAgICAgICAgICB9LCB2YWx1ZSk7XG59O1xuXG5jb25zdCBvbmVTZWNvbmQgPSAoKSA9PiAxMDAwO1xuY29uc3QgZ2V0Q3VycmVudFRpbWUgPSAoKSA9PiBuZXcgRGF0ZSgpO1xuY29uc3QgY2xlYXIgPSAoKSA9PiBjb25zb2xlLmNsZWFyKCk7XG5jb25zdCBsb2cgPSBtZXNzYWdlID0+IGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuY29uc3Qgc2VyaWFsaXplQ2xvY2tUaW1lID0gZGF0ZSA9PiAoe1xuICAgIGhvdXJzOiBkYXRlLmdldEhvdXJzKCksXG4gICAgbWludXRlczogZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgc2Vjb25kczogZGF0ZS5nZXRTZWNvbmRzKClcbn0pO1xuLy8gY29uc3QgY2l2aWxpYW5Ib3VycyA9IGNsb2NrVGltZSA9PiAoe1xuLy8gICAgIC4uLmNsb2NrVGltZSxcbi8vICAgICBob3VyczogKGNsb2NrVGltZS5ob3VycyA+IDEyKT8gY2xvY2tUaW1lLmhvdXJzIC0gMTIgOiBjbG9ja1RpbWUuaG91cnNcbi8vIH0pO1xuLy8gY29uc3QgYXBwZW5kQU1QTSA9IGNsb2NrVGltZSA9PiAoe1xuLy8gICAgIC4uLmNsb2NrVGltZSxcbi8vICAgICBhbXBtOiAoY2xvY2tUaW1lLmhvdXJzID49IDEyKT8gJ1BNJyA6ICdBTSdcbi8vIH0pO1xuY29uc3QgY2l2aWxpYW5Ib3VycyA9IGNsb2NrVGltZSA9PiBPYmplY3QuYXNzaWduKHt9LCBjbG9ja1RpbWUsIHtob3VyczogKGNsb2NrVGltZS5ob3VycyA+IDEyKT8gY2xvY2tUaW1lLmhvdXJzIC0gMTIgOiBjbG9ja1RpbWUuaG91cnN9KTtcbmNvbnN0IGFwcGVuZEFNUE0gPSAgY2xvY2tUaW1lID0+IE9iamVjdC5hc3NpZ24oe30sIGNsb2NrVGltZSwge2FtcG06IChjbG9ja1RpbWUuaG91cnMgPj0gMTIpPyAnUE0nIDogJ0FNJ30pO1xuXG5jb25zdCBkaXNwbGF5ID0gdGFyZ2V0ID0+IHRpbWUgPT50YXJnZXQodGltZSk7XG5jb25zdCBmb3JtYXRDbG9jayA9IGZvcm1hdCA9PiB0aW1lID0+IGZvcm1hdC5yZXBsYWNlKFwiaGhcIiwgdGltZS5ob3VycylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJtbVwiLCB0aW1lLm1pbnV0ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwic3NcIiwgdGltZS5zZWNvbmRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcInR0XCIsIHRpbWUuYW1wbSk7XG4vLyBjb25zdCBwcmVwZW5kWmVybyA9IGtleSA9PiBjbG9ja1RpbWUgPT4gKHtcbi8vICAgICAuLi5jbG9ja1RpbWUsXG4vLyAgICAgW2tleV06IChjbG9ja1RpbWVba2V5XSA8IDEwKT8gXCIwXCIgKyBjbG9ja1RpbWVba2V5XSA6IGNsb2NrVGltZVtrZXldXG4vLyB9KVxuY29uc3QgcHJlcGVuZFplcm8gPSBrZXkgPT4gY2xvY2tUaW1lID0+ICBPYmplY3QuYXNzaWduKHt9LCBjbG9ja1RpbWUsIHtba2V5XTogKGNsb2NrVGltZVtrZXldIDwgMTApPyBcIjBcIiArIGNsb2NrVGltZVtrZXldIDogY2xvY2tUaW1lW2tleV19KTtcblxuY29uc3QgY29udmVydFRvQ2l2aWxpYW5UaW1lID0gY2xvY2tUaW1lID0+IHBpcGUoYXBwZW5kQU1QTSwgY2l2aWxpYW5Ib3VycykoY2xvY2tUaW1lKTtcbmNvbnN0IGRvdWJsZURpZ2l0cyA9IGNpdmlsaWFuVGltZSA9PiBwaXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGVuZFplcm8oXCJob3Vyc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBlbmRaZXJvKFwibWludXRlc1wiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwZW5kWmVybyhcInNlY29uZHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKShjaXZpbGlhblRpbWUpO1xuY29uc3QgZ2V0Q2xvY2tUaW1lID0gKCkgPT4gc2V0SW50ZXJ2YWwoIHBpcGUoIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q3VycmVudFRpbWUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplQ2xvY2tUaW1lLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnRUb0NpdmlsaWFuVGltZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3VibGVEaWdpdHMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0Q2xvY2soXCJoaDptbTpzcyB0dFwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5KGxvZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgb25lU2Vjb25kKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuZXhwb3J0IGRlZmF1bHQgZ2V0Q2xvY2tUaW1lOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQVVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./getClockTime.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _getClockTime = __webpack_require__(/*! ./getClockTime */ \"./getClockTime.js\");\n\nvar _getClockTime2 = _interopRequireDefault(_getClockTime);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log('Welcome to es6 test');\n(0, _getClockTime2.default)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9pbmRleC5qcz8wNDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDbG9ja1RpbWUgIGZyb20gJy4vZ2V0Q2xvY2tUaW1lJztcbmNvbnNvbGUubG9nKCdXZWxjb21lIHRvIGVzNiB0ZXN0Jyk7XG5nZXRDbG9ja1RpbWUoKTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });