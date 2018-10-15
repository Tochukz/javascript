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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar num = 19;\n{\n    var _num = 11;\n}\nconsole.log(num);\n//const name = 'tochukwu';\nconsole.log(name);\nvar name = 'Tochukwu';\n\nconsole.log(myname());\nfunction myname() {\n    return 'Tochukwu';\n}\n\nvar nums = [];\nfor (var i = 0; i < 3; i++) {\n    //Each closure is referencing the same variable i\n    nums.push(function () {\n        return i;\n    });\n}\nconsole.log(nums[0]()); //3\nconsole.log(nums[1]()); //3\nconsole.log(nums[2]()); //3\n\nvar nums2 = [];\n\nvar _loop = function _loop(_i) {\n    //Each closure has it own independent copy of i\n    nums2.push(function () {\n        return _i;\n    });\n};\n\nfor (var _i = 0; _i < 3; _i++) {\n    _loop(_i);\n}\nconsole.log(nums2[0]()); //0\nconsole.log(nums2[1]()); //1\nconsole.log(nums2[2]()); //2\n\nvar city = 'Joburg';\nvar state = 'Lagos';\nvar pie = 22 / 7;\nfunction person() {\n    console.log('person');\n}\nconsole.log(window.city); //undefined\nconsole.log(window.state); //undefined\nconsole.log(window.pie); //undefined\nconsole.log(window.person); //undefined\n\nfunction getContext() {\n    console.log(this);\n}\ngetContext(); //undefined\nconsole.log(window);\nconsole.log(undefined);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9pbmRleC5qcz8wNDk3Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBudW0gPSAxOTtcbntcbiAgICBsZXQgbnVtID0gMTE7XG5cbn1cbmNvbnNvbGUubG9nKG51bSk7XG4vL2NvbnN0IG5hbWUgPSAndG9jaHVrd3UnO1xuY29uc29sZS5sb2cobmFtZSk7XG52YXIgbmFtZSA9ICdUb2NodWt3dSc7XG5cbmNvbnNvbGUubG9nKG15bmFtZSgpKTtcbmZ1bmN0aW9uIG15bmFtZSgpe1xuICAgIHJldHVybiAnVG9jaHVrd3UnO1xufVxuXG52YXIgbnVtcyA9IFtdO1xuZm9yKHZhciBpPTA7IGk8MzsgaSsrKXtcbiAgICAvL0VhY2ggY2xvc3VyZSBpcyByZWZlcmVuY2luZyB0aGUgc2FtZSB2YXJpYWJsZSBpXG4gICAgbnVtcy5wdXNoKGZ1bmN0aW9uKCl7IHJldHVybiBpfSk7XG5cbn1cbmNvbnNvbGUubG9nKG51bXNbMF0oKSk7IC8vM1xuY29uc29sZS5sb2cobnVtc1sxXSgpKTsgLy8zXG5jb25zb2xlLmxvZyhudW1zWzJdKCkpOyAvLzNcblxudmFyIG51bXMyID0gW107XG5mb3IobGV0IGk9MDsgaTwzOyBpKyspe1xuICAgIC8vRWFjaCBjbG9zdXJlIGhhcyBpdCBvd24gaW5kZXBlbmRlbnQgY29weSBvZiBpXG4gICAgbnVtczIucHVzaChmdW5jdGlvbigpeyByZXR1cm4gaX0pO1xuXG59XG5jb25zb2xlLmxvZyhudW1zMlswXSgpKTsgLy8wXG5jb25zb2xlLmxvZyhudW1zMlsxXSgpKTsgLy8xXG5jb25zb2xlLmxvZyhudW1zMlsyXSgpKTsgLy8yXG5cbnZhciBjaXR5ID0gJ0pvYnVyZyc7XG5sZXQgc3RhdGUgPSAnTGFnb3MnO1xuY29uc3QgcGllID0gMjIvNztcbmZ1bmN0aW9uIHBlcnNvbigpe1xuICAgIGNvbnNvbGUubG9nKCdwZXJzb24nKTtcbn1cbmNvbnNvbGUubG9nKHdpbmRvdy5jaXR5KTsgLy91bmRlZmluZWRcbmNvbnNvbGUubG9nKHdpbmRvdy5zdGF0ZSk7IC8vdW5kZWZpbmVkXG5jb25zb2xlLmxvZyh3aW5kb3cucGllKTsgLy91bmRlZmluZWRcbmNvbnNvbGUubG9nKHdpbmRvdy5wZXJzb24pOyAvL3VuZGVmaW5lZFxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCl7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG59XG5nZXRDb250ZXh0KCk7Ly91bmRlZmluZWRcbmNvbnNvbGUubG9nKHdpbmRvdyk7IFxuY29uc29sZS5sb2codGhpcyk7XG5cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });