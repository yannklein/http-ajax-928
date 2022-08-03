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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// //////////////////////
// Rehearsal
// //////////////////////
// // 1. Select elements (button)
// const button = document.querySelector("#click-me");
// // 2. Listen to an even (click on button)
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (change innerText, disable)
//   event.currentTarget.innerText = "Loading...";
//   event.currentTarget.disabled = true;
// });
// //////////////////////
// HTTP GET request
// //////////////////////
// 1. Select elements (search, input, results)
var search = document.querySelector("#submit");
var input = document.querySelector("#keyword");
var results = document.querySelector("#results");
console.log("Element selected!"); // 2. Listen to an event (click on search)

search.addEventListener("click", function (event) {
  console.log("Just clicked!"); // We need to prevent to default refresh of the page

  event.preventDefault();
  console.log(event); // 2.5 Fetch OmDB API, get the movie data

  var url = "https://www.omdbapi.com/?s=".concat(input.value, "&apikey=adf1f2d7"); // const movies = fetch(url) NOT WORKING!

  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    console.log("Data arrived!"); // 3. Change the DOM (display the movies)

    results.innerHTML = "";
    var movies = data.Search;
    movies.forEach(function (movie) {
      results.insertAdjacentHTML('beforeend', "<li class='list-inline-item'>\n          <img src=\"".concat(movie.Poster, "\" alt=\"poster\" />\n          <p>").concat(movie.Title, "</p>\n        </li>"));
    });
  });
  console.log("That's after the fetch in the JS!");
}); // //////////////////////
// HTTP POST request
// //////////////////////

var signUp = function signUp(event) {
  event.preventDefault();
  var emailValue = document.getElementById("email").value;
  var passwordValue = document.getElementById("password").value; // 2.5 Fetch an API

  var data = {
    email: emailValue,
    password: passwordValue
  };
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  fetch("https://reqres.in/api/register", options).then(function (response) {
    return response.json();
  }).then(function (data) {
    // 3. Change DOM
    console.log(data);
  });
}; // 1. select elements


var form = document.querySelector("#form"); // 2. listen to a submit

form.addEventListener("submit", signUp);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map