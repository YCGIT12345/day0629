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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj", function() { return obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
let str = 'qwert';

let obj = {
    name: 'zhangsan'
}

let test = function(){
    alert(1);
} 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(`name: ${this.name}, age": ${this.age}`);
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Person;
;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c__ = __webpack_require__(0);
// commonJS  引入方式
// var aModule = require('./a.js');


// es6   引入方式
// import XXX from 'path'


//1.默认输出，执行引入
// import aModule from './a.js'
// console.log(aModule);


// 2.指定输出名字输出。执行引入：

/*
import {obj, Person} from './b.js'

console.log(obj);
console.log(Person);
let lisi = new Person('李四', 0);
lisi.say();
*/



//3.既默认输出，又指定输出名字输出。
// import {str} from './c'
// import {obj} from './c'

// import {str, obj, test} from './c'
// import cModule from './c'

//引入所有


console.log(__WEBPACK_IMPORTED_MODULE_0__c__);






// as关键字


console.log(str);
console.log(__WEBPACK_IMPORTED_MODULE_0__c__["str"]);



/***/ })
/******/ ]);