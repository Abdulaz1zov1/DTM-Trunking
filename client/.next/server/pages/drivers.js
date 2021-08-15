module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/drivers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/drivers/footer.js":
/*!**************************************!*\
  !*** ./components/drivers/footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/footer/footer.module.scss */ "./styles/footer/footer.module.scss");
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\drivers\\footer.js";






function Footer(props) {
  const sendMail = () => {
    window.location.href = "mailto:nfo@dtmtrucking.com?subject=Car exportation";
  };

  const instaGram = () => {
    window.open("https://www.instagram.com");
  };

  const faceBook = () => {
    // window.location.href = "https://youtu.be/CRtB7DZJqHk";
    window.open("https://www.facebook.com");
  };

  const twitTer = () => {
    // window.location.href = "https://youtu.be/CRtB7DZJqHk";
    window.open("https://www.twitter.com");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cont,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.row,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
          children: "We are a leading company in logistics that delivers real value."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.center,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.in,
              onClick: faceBook,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.img1,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                  transform: "scale(0.35)",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M37.2,64H28c-2.5,0-4.5-2-4.5-4.5V37H17c-2.5,0-4.5-2-4.5-4.5v-6.9c0-2.5,2-4.6,4.5-4.6h6.5v-5.5c0-9.1,6.2-15.5,15-15.5\r H47c1.4,0,2.5,1.1,2.5,2.5v13c0,1.4-1.1,2.5-2.5,2.5h-5.5v3h5.4c0,0,0.1,0,0.1,0c1.4,0.1,2.7,0.7,3.5,1.8c0.8,1.1,1.2,2.4,0.9,3.8\r l-1.3,6.7C49.8,35.4,48,37,45.7,37h-4.3v22.5C41.5,62,39.5,64,37.2,64z M28.5,59h8V34.5c0-1.4,1.1-2.5,2.5-2.5h6.3l1.2-6H39\r c-1.4,0-2.5-1.1-2.5-2.5v-8c0-1.4,1.1-2.5,2.5-2.5h5.5V5h-6c-6.1,0-10,4.1-10,10.5v8c0,1.4-1.1,2.5-2.5,2.5h-8.5v6H26\r c1.4,0,2.5,1.1,2.5,2.5V59z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.in,
              onClick: instaGram,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.img1,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                  transform: "scale(0.35)",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M32,16.9c-8.3,0-15,6.8-15,15.1c0,8.3,6.7,15.1,15,15.1c8.3,0,15-6.8,15-15.1C47,23.7,40.3,16.9,32,16.9z M32,42.1\r c-5.5,0-10-4.5-10-10.1s4.5-10.1,10-10.1c5.5,0,10,4.5,10,10.1S37.5,42.1,32,42.1z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M47,10c-2.8,0-5,2.3-5,5s2.2,5,5,5c2.8,0,5-2.3,5-5S49.8,10,47,10z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M48,0H16C7.2,0,0,7.2,0,16v31.7C0,56.7,7.3,64,16.3,64h31.5C56.7,64,64,56.7,64,47.7V16C64,7.2,56.8,0,48,0z M59,47.7\r C59,53.9,54,59,47.8,59H16.3C10.1,59,5,54,5,47.8V16C5,9.9,9.9,5,16,5H48c6.1,0,11,4.9,11,11V47.7z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.in,
              onClick: twitTer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.img1,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                  transform: "scale(0.35)",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M22.2,58c-5.4,0-13.3-1-20-5.8c-2-1.4-2.8-4.1-1.8-6.4c0.9-2.3,3.4-3.6,5.9-3.1l0,0c0,0,1,0.2,2.5,0.1\r c-1-1.4-1.9-3-2.5-4.7c-0.2-0.6-0.3-1.1-0.3-1.7c-2.5-2.9-3.8-6.5-3.8-10.5c0-0.9,0.2-1.8,0.7-2.5C2,20,1.7,15.5,4.6,10.7\r C5.5,9.3,7,8.3,8.7,8.1c0.1,0,0.1,0,0.2,0c1.8-0.1,3.4,0.6,4.5,1.8l0,0c0.7,0.7,6.1,6.4,13,8.3C28,11.2,34.4,6,42.1,6\r c3.4,0,6.7,1,9.3,2.9c0.7-0.2,1.6-0.5,2.4-1.1c1.6-1.1,3.7-1.3,5.4-0.4c1.7,0.8,2.9,2.4,3.1,4.3c0,0.1,0,0.2,0,0.3\r c0,0.1,0,0.3,0,0.6c1.4,1.4,1.9,3.4,1.3,5.2c-0.5,1.7-2.1,3.8-5.4,6.8C58,32,54.5,51.8,29.6,57.4C29.4,57.4,26.4,58,22.2,58z\r M5.4,47.6c-0.2,0-0.3,0.1-0.3,0.1c0,0,0,0.1,0,0.1C5,47.9,5,48,5.1,48.1c5.6,4.1,12.4,4.9,17.1,4.9c3.7,0,6.3-0.5,6.4-0.5\r c22.6-5.1,24.8-23.6,24.9-29.2c0-0.7,0.3-1.4,0.8-1.8c4.2-3.7,4.7-5,4.7-5.1c0.1-0.2-0.1-0.4-0.2-0.4c0,0-0.1-0.1-0.1-0.1\r c-1.1-0.5-1.7-1.8-1.3-3c0.1-0.3,0.1-0.5,0.1-0.7c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.4,0.1\r c-2.2,1.5-4.5,2-5.6,2.1c-0.7,0.1-1.3-0.1-1.8-0.5c-1.9-1.6-4.5-2.4-7.1-2.4c-6.1,0-11,4.5-11.2,10.4c0,0.7-0.3,1.4-0.9,1.8\r c-0.5,0.5-1.2,0.7-1.9,0.6c-9.5-1.3-17-8.9-18.5-10.4c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-0.3,0.2-0.4,0.3\r c-1.8,3-2,6.2-0.7,9.4c0.4,1,0.2,2.2-0.7,2.9c-0.1,0.1-0.2,0.2-0.2,0.2c0,3.2,1,5.8,3.2,7.8c0.7,0.7,0.9,1.6,0.7,2.5\r c0,0.1,0,0.2,0,0.3c0.8,2.5,2.4,4.5,4.6,5.8c0.8,0.5,1.3,1.4,1.2,2.4c-0.1,1-0.8,1.8-1.7,2.1c-4.6,1.5-9.5,0.8-9.7,0.7\r C5.5,47.6,5.4,47.6,5.4,47.6z M58.5,15.7C58.5,15.7,58.5,15.7,58.5,15.7C58.5,15.7,58.5,15.7,58.5,15.7z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "st0",
                  d: "M-5.7,0.9L-5.7,0.9L-5.7,0.9z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "st0",
                  d: "M32,32L32,32L32,32z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.row,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
          children: "Important Links"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wr,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 60
              }, this), "  Home"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 60
              }, this), " About us"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 60
              }, this), "  Services"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 60
              }, this), "  Why DTM?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 60
              }, this), "  Blog"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.row,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
          children: "Our Offices"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wr,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: "Chicago, IL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: "Philadelphia, PA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: "Edison, NJ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Telephone:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.phoneNumber,
              href: "tel:+17733092111",
              children: "+1 773 309 2111"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 53
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.email,
              onClick: sendMail,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Email:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, this), "  info@dtmtrucking.com"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.row,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rowFour
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.abs,
      children: "Copyright \xA9 2021 DTM Trucking Inc. All rights reserved"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/drivers/header.js":
/*!**************************************!*\
  !*** ./components/drivers/header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/header/header.module.scss */ "./styles/header/header.module.scss");
/* harmony import */ var _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\drivers\\header.js";






function Header({
  onPress1,
  bool1
}) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  const {
    0: isScroll,
    1: setIsScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const stylesMain = {
    display: `${bool1 ? "block" : "none"}`,
    position: "fixed",
    top: "0px",
    height: "100vh",
    width: "100%",
    zIndex: "100",
    background: "rgba(0,0,0,0.5)"
  };
  const {
    0: link,
    1: setLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('home');

  function handleScroll(e) {
    if (ref.current) {
      if (ref.current.getBoundingClientRect().top < 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
  }

  function pageScroll() {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
  }

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: ref,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: stylesMain,
      onClick: () => onPress1(!bool1)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wr, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tog,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bars,
          onClick: () => onPress1(!bool1),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.brand, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.newBrand : ''].join(' ')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.links,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "HOME"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "ABOUT US"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "SERVICES"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "WHY DTM?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/drivers",
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "FOR DRIVERS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            onClick: pageScroll,
            to: "section-4",
            spy: true,
            smooth: true,
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            offset: -100,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('Team'),
            ignoreCancelEvents: false,
            id: "asosiyLink",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "CONTACT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "BLOG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/quote",
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link8, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "GET A QUOTE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/drivers/index.js":
/*!*************************************!*\
  !*** ./components/drivers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_drivers_section1_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/drivers/section1.module.scss */ "./styles/drivers/section1.module.scss");
/* harmony import */ var _styles_drivers_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_drivers_section1_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\drivers\\index.js";



function Index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_drivers_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wr,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_drivers_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.overlay,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_drivers_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
        children: "Become a driver"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/drivers/progress.js":
/*!****************************************!*\
  !*** ./components/drivers/progress.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\drivers\\progress.js";


const Progress = ({
  percentage
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "progress",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "progress-bar progress-bar-striped bg-success",
      role: "progressbar",
      style: {
        width: `${percentage}%`
      },
      children: [percentage, "%"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

Progress.propTypes = {
  percentage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Progress);

/***/ }),

/***/ "./components/drivers/section-2.js":
/*!*****************************************!*\
  !*** ./components/drivers/section-2.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress */ "./components/drivers/progress.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/drivers/section2.module.scss */ "./styles/drivers/section2.module.scss");
/* harmony import */ var _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\drivers\\section-2.js";







const Section2 = () => {
  const {
    0: file,
    1: setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: filename,
    1: setFilename
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: filename1,
    1: setFilename1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: file1,
    1: setFile1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: uploadedFile,
    1: setUploadedFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: uploadPercentage,
    1: setUploadPercentage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: emailError,
    1: setEmailError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: message1,
    1: setMessage1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: company,
    1: setCompany
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const onChange = (e, id) => {
    if (e.target.files !== undefined && id === 1) {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    }

    if (e.target.files !== undefined && id === 2) {
      setFile1(e.target.files[0]);
      setFilename1(e.target.files[0].name);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append("file1", file1);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message1);
    formData.append('company', company);
    formData.append('phone', phone);

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data boundary=${form._boundary}'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total)));
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });
      const {
        fileName,
        filePath
      } = res.data;
      setUploadedFile({
        fileName,
        filePath
      });
      setMessage('File uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }

    setFile('');
    setCompany('');
    setEmail('');
    setFilename('');
    setMessage1('');
    setEmailError('');
    setPhone('');
    setName('');
    setFilename1('');
    setFile1('');
  };

  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(acceptedFiles => {
    if (acceptedFiles !== undefined) {
      setFile(acceptedFiles[0]);
      setFilename(acceptedFiles[0].name);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, [uploadPercentage]);
  const inputStyle = {
    visibility: "hidden",
    borderWidth: "2px",
    borderColor: "black",
    border: "dotted",
    width: "100%",
    height: "150px"
  };

  const validateEmail = e => {
    var email = e.target.value;

    if (validator__WEBPACK_IMPORTED_MODULE_5___default.a.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  function handleChange(event) {
    setFilename(event.target.files[0].name);
  }

  function handleChange(event) {
    setFilename1(event.target.files[0].name);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "drivers-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmit,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wr,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cu,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mTitle,
              children: "Become a driver"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.line
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.column,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.inputs,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.input,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    placeholder: "Full Name",
                    type: "text",
                    required: "",
                    className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.input1,
                    onChange: event => {
                      setName(event.target.value);
                    },
                    value: name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 41
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.input,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    placeholder: "Experience (years)",
                    type: "input",
                    required: "",
                    className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.input1,
                    onChange: event => {
                      setCompany(event.target.value);
                    },
                    value: company
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 41
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.input,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    id: "userEmail",
                    onChange: e => {
                      validateEmail(e);
                      setEmail(e.target.value);
                    },
                    className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.input1,
                    placeholder: "Email",
                    value: email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: {
                      fontWeight: 'bold',
                      color: 'red'
                    },
                    children: emailError
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.input,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.input1,
                    format: "+1 ### ### ## ##",
                    mask: "_",
                    placeholder: "Phone",
                    onChange: event => setPhone(event.target.value),
                    value: phone
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 41
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.textarea,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  draggable: "false",
                  placeholder: "References",
                  type: "text",
                  required: "",
                  rows: "4",
                  className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.input5,
                  onChange: event => {
                    setMessage1(event.target.value);
                  },
                  value: message1
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mb30",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_progress__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  percentage: uploadPercentage,
                  className: "progressbar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.inUploads,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.uploads,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.attachCv,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      className: "custom-file-upload",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        type: "file",
                        onChange: event => onChange(event, 1)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 49
                      }, undefined), "Attach CV/CDL"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: filename
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.attachCv,
                    style: {
                      margin: "20px"
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      className: "custom-file-upload",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        type: "file",
                        onChange: event => onChange(event, 2)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 49
                      }, undefined), "Attach MedCard"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: filename1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.button,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "submit",
                    value: "Send",
                    className: _styles_drivers_section2_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.btn
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 41
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Section2);

/***/ }),

/***/ "./components/home/contactUs.js":
/*!**************************************!*\
  !*** ./components/home/contactUs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactUs; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/home/contact.module.scss */ "./styles/home/contact.module.scss");
/* harmony import */ var _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-yandex-maps */ "react-yandex-maps");
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_yandex_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./components/home/map.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_vectorIcons_location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/vectorIcons/location */ "./public/vectorIcons/location.jsx");
/* harmony import */ var _public_vectorIcons_emailIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/vectorIcons/emailIcon */ "./public/vectorIcons/emailIcon.jsx");
/* harmony import */ var _public_vectorIcons_phoneIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/vectorIcons/phoneIcon */ "./public/vectorIcons/phoneIcon.jsx");
/* harmony import */ var _public_vectorIcons_facebookteamdefult1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/vectorIcons/facebookteamdefult1 */ "./public/vectorIcons/facebookteamdefult1.jsx");
/* harmony import */ var _public_vectorIcons_instagramteamdefult1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/vectorIcons/instagramteamdefult1 */ "./public/vectorIcons/instagramteamdefult1.jsx");
/* harmony import */ var _public_vectorIcons_twittertamdefult1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/vectorIcons/twittertamdefult1 */ "./public/vectorIcons/twittertamdefult1.jsx");

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\contactUs.js";











function ContactUs() {
  const instaGram = () => {
    // window.location.href = "https://youtu.be/CRtB7DZJqHk";
    window.open("https://www.instagram.com");
  };

  const faceBook = () => {
    // window.location.href = "https://youtu.be/CRtB7DZJqHk";
    window.open("https://www.facebook.com");
  };

  const twitTer = () => {
    // window.location.href = "https://youtu.be/CRtB7DZJqHk";
    window.open("https://www.twitter.com");
  };

  const sendMail = () => {
    window.location.href = "mailto:info@dtmtrucking.com?subject=DtmTruckCompany";
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    id: "section-7",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_map__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.left,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "Contact us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.htitle,
          children: "Headquarters"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.adress,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contactIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_location__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
            children: "1275 Davis Rd, Suite 130 Chicago, IL 60123"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.adress,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contactIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_emailIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.email,
              onClick: sendMail,
              children: "info@dtmtrucking.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.adress,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contactIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_phoneIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.phoneNumber,
              href: "tel:+17733092111",
              children: "+1 773 309 2111"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.phoneNumber,
                href: "tel:+16308838733 ",
                children: "+1 630 883 8733 "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.htitle,
          children: "Social networks"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconIn,
            onClick: faceBook,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_facebookteamdefult1__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconIn,
            onClick: instaGram,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_instagramteamdefult1__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconIn,
            onClick: twitTer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_twittertamdefult1__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/home/map.js":
/*!********************************!*\
  !*** ./components/home/map.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-yandex-maps */ "react-yandex-maps");
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\map.js";



const Ymap = () => {
  const isBigScreen = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])({
    query: '(max-width: 990px)'
  });
  const h = "70vh";
  const w = "100";
  const style = {
    height: h,
    zIndex: "20",
    width: w
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: style,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__["YMaps"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__["Map"], {
          defaultState: {
            center: [42.068154, -88.309284],
            zoom: 14
          },
          style: {
            width: '100%',
            height: h
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__["Placemark"], {
            defaultGeometry: [42.068154, -88.309284]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__["FullscreenControl"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Ymap);

/***/ }),

/***/ "./components/home/sidebar/sidebar.js":
/*!********************************************!*\
  !*** ./components/home/sidebar/sidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sidebar/sidebar.module.scss */ "./styles/sidebar/sidebar.module.scss");
/* harmony import */ var _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\sidebar\\sidebar.js";






function Sidebar({
  bool1,
  onPress1
}) {
  const style1 = {
    left: `${bool1 ? "0px" : "-100%"}`,
    transition: '1s'
  };

  const Func1 = () => onPress1(!bool1);

  const Func2 = () => {
    onPress1(!bool1);
  };

  const Func3 = () => {
    onPress1(!bool1);
  };

  const Func4 = () => {
    onPress1(!bool1);
  };

  const Func5 = () => {
    onPress1(!bool1);
  };

  const Func6 = () => {
    onPress1(!bool1);
  };

  const Func7 = () => {
    onPress1(!bool1);
  };

  const {
    0: link,
    1: setLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('home');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    style: style1,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.left,
      style: style1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.brand
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.links,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            onClick: () => Func1(),
            to: "section-1",
            spy: true,
            smooth: true,
            className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
            offset: 0,
            duration: 500,
            delay: 100,
            isDynamic: true,
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            onClick: () => Func2(),
            to: "section-2",
            spy: true,
            smooth: true,
            className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
            offset: 1000,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('services'),
            ignoreCancelEvents: false,
            children: "About us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            onClick: () => Func3(),
            to: "section-3",
            spy: true,
            smooth: true,
            className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
            offset: 0,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('projects'),
            ignoreCancelEvents: false,
            children: "Services"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            to: "section-6",
            onClick: () => Func4(),
            spy: true,
            smooth: true,
            className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
            offset: -80,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('technologies'),
            ignoreCancelEvents: false,
            children: "Why DTM?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/drivers",
            className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
            children: "For drivers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            onClick: () => Func6(),
            to: "section-7",
            spy: true,
            smooth: true,
            className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
            offset: -200,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('team'),
            ignoreCancelEvents: false,
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            to: "section-8",
            onClick: () => Func7(),
            spy: true,
            smooth: true,
            className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
            offset: 0,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('contact'),
            ignoreCancelEvents: false,
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/quote",
            className: _styles_sidebar_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inner,
            children: "Get a quote"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/layout/header/contact.js":
/*!*********************************************!*\
  !*** ./components/layout/header/contact.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/header/contact.module.scss */ "./styles/header/contact.module.scss");
/* harmony import */ var _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_vectorIcons_facebookteamdefult1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/vectorIcons/facebookteamdefult1 */ "./public/vectorIcons/facebookteamdefult1.jsx");
/* harmony import */ var _public_vectorIcons_twittertamdefult1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/vectorIcons/twittertamdefult1 */ "./public/vectorIcons/twittertamdefult1.jsx");
/* harmony import */ var _public_vectorIcons_instagramteamdefult1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/vectorIcons/instagramteamdefult1 */ "./public/vectorIcons/instagramteamdefult1.jsx");

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\layout\\header\\contact.js";








function Contact(props) {
  const sendMail = () => {
    window.location.href = "mailto:info@dtmtrucking.com?subject=exportation";
  };

  const faceBook = () => {
    window.open("http://facebook.com");
  };

  const instaGram = () => {
    window.open('http://instagram.com');
  };

  const twitTer = () => {
    window.open("http://twitter.com");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.left,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inLeft,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.adress,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelope"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.email,
              onClick: sendMail,
              children: "info@dtmtrucking.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.adress,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLocationArrow"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 24
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: "1275, Davis Rd, Chicago, Illinois"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.adress,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contactIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPhone"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 24
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.phoneNumber,
              href: "tel:+17733092111",
              children: "+1 773 309 21 11"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inRight,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightIcon,
          onClick: faceBook,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_facebookteamdefult1__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightIcon,
          onClick: twitTer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_twittertamdefult1__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_header_contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightIcon,
          onClick: instaGram,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_instagramteamdefult1__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./pages/drivers.js":
/*!**************************!*\
  !*** ./pages/drivers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_drivers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/drivers/index */ "./components/drivers/index.js");
/* harmony import */ var _components_layout_header_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/header/contact */ "./components/layout/header/contact.js");
/* harmony import */ var _components_drivers_section_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/drivers/section-2 */ "./components/drivers/section-2.js");
/* harmony import */ var _components_home_contactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/contactUs */ "./components/home/contactUs.js");
/* harmony import */ var _components_home_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/sidebar/sidebar */ "./components/home/sidebar/sidebar.js");
/* harmony import */ var _components_drivers_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/drivers/header */ "./components/drivers/header.js");
/* harmony import */ var _components_drivers_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/drivers/footer */ "./components/drivers/footer.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\pages\\drivers.js";









function Drivers(props) {
  const {
    0: bool,
    1: setBool
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      bool1: bool,
      onPress1: setBool
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_header_contact__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_drivers_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
      bool1: bool,
      onPress1: setBool
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_drivers_index__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_drivers_section_2__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home_contactUs__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_drivers_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Drivers);

/***/ }),

/***/ "./public/vectorIcons/emailIcon.jsx":
/*!******************************************!*\
  !*** ./public/vectorIcons/emailIcon.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\public\\vectorIcons\\emailIcon.jsx";

const EmailIcon = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      id: "emailIcon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        id: "Rectangle_4499",
        "data-name": "Rectangle 4499",
        width: "20",
        height: "20",
        fill: "#fff",
        opacity: "0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Icon",
        d: "M844.882,427.526h-19v-.01l5.794-5.692,1.189,1.2a3.544,3.544,0,0,0,5.011.024l.024-.024,1.19-1.2,5.794,5.692Zm-19.491-.589h-.01V415.385h.058c.471.5,2.406,2.465,5.751,5.846Zm19.99-.05h-.01l-5.8-5.7c3.308-3.347,5.3-5.369,5.752-5.846h.058v11.546Zm-10-3.745a2.827,2.827,0,0,1-2.021-.846l-7.408-7.455c.542-.007,2.238-.007,5.044-.007,2.258,0,6.452,0,13.615.008h.193l-7.4,7.453A2.829,2.829,0,0,1,835.381,423.142Z",
        transform: "translate(-825.381 -410.834)",
        fill: "#263238"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EmailIcon);

/***/ }),

/***/ "./public/vectorIcons/facebookteamdefult1.jsx":
/*!****************************************************!*\
  !*** ./public/vectorIcons/facebookteamdefult1.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/footer/footer.module.scss */ "./styles/footer/footer.module.scss");
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\public\\vectorIcons\\facebookteamdefult1.jsx";



const Facebookteamdefult1 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon1,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      id: "facebookteamdefult",
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        id: "Rectangle_4569",
        "data-name": "Rectangle 4569",
        width: "24",
        height: "24",
        opacity: "0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Facebook",
        d: "M116.31,3.1V5.3H114.7V8h1.614v8h3.315V8h2.225s.208-1.292.309-2.7h-2.522V3.451a.782.782,0,0,1,.719-.646h1.806V0h-2.456C116.228,0,116.31,2.7,116.31,3.1Z",
        transform: "translate(-106.696 3.999)",
        className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icons,
        fill: "#d3d6d7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Facebookteamdefult1);

/***/ }),

/***/ "./public/vectorIcons/instagramteamdefult1.jsx":
/*!*****************************************************!*\
  !*** ./public/vectorIcons/instagramteamdefult1.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/footer/footer.module.scss */ "./styles/footer/footer.module.scss");
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\public\\vectorIcons\\instagramteamdefult1.jsx";



const Instagramteamdefult1 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon1,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      id: "instagramteamdefult",
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "red",
      className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icons,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        id: "Rectangle_4571",
        "data-name": "Rectangle 4571",
        width: "24",
        height: "24",
        opacity: "0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "instagram",
        d: "M4.415,16A4.421,4.421,0,0,1,0,11.584V4.415A4.421,4.421,0,0,1,4.415,0h7.169A4.42,4.42,0,0,1,16,4.415v7.169A4.42,4.42,0,0,1,11.585,16Zm-3-11.585v7.169a3,3,0,0,0,3,3h7.169a3,3,0,0,0,3-3V4.415a3,3,0,0,0-3-3H4.415A3,3,0,0,0,1.42,4.415ZM3.877,8A4.123,4.123,0,1,1,8,12.123,4.128,4.128,0,0,1,3.877,8ZM5.3,8A2.7,2.7,0,1,0,8,5.3,2.707,2.707,0,0,0,5.3,8ZM11.56,4.451a1.04,1.04,0,1,1,.735.3A1.048,1.048,0,0,1,11.56,4.451Z",
        transform: "translate(4 4)",
        className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icons,
        fill: "#d3d6d7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Instagramteamdefult1);

/***/ }),

/***/ "./public/vectorIcons/location.jsx":
/*!*****************************************!*\
  !*** ./public/vectorIcons/location.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\public\\vectorIcons\\location.jsx";


const Location = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      id: "location",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        id: "Rectangle_4497",
        "data-name": "Rectangle 4497",
        width: "20",
        height: "20",
        fill: "#263238",
        opacity: "0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "ic_place_24px",
        d: "M11,2A6.151,6.151,0,0,0,5,8.3C5,13.025,11,20,11,20s6-6.975,6-11.7A6.151,6.151,0,0,0,11,2Zm0,8.55A2.2,2.2,0,0,1,8.857,8.3,2.2,2.2,0,0,1,11,6.05,2.2,2.2,0,0,1,13.143,8.3,2.2,2.2,0,0,1,11,10.55Z",
        transform: "translate(-1 -1)",
        fill: "#263238"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ }),

/***/ "./public/vectorIcons/phoneIcon.jsx":
/*!******************************************!*\
  !*** ./public/vectorIcons/phoneIcon.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\public\\vectorIcons\\phoneIcon.jsx";


const PhoneIcon = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      id: "phoneIcon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        id: "Rectangle_4497",
        "data-name": "Rectangle 4497",
        width: "20",
        height: "20",
        fill: "#263238",
        opacity: "0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "Icon",
        d: "M1.176,5.924A8.022,8.022,0,0,1,0,2.294c0-.841.207-1.082.416-1.277S1.571.24,1.732.131A.858.858,0,0,1,2.893.366C3.278.92,4,2.034,4.5,2.773c.785,1.047.16,1.507-.042,1.783-.372.507-.586.632-.586,1.255S5.617,8.2,6.033,8.639a10.708,10.708,0,0,0,2.684,2.034,2.242,2.242,0,0,0,1.42-.636c.784-.6,1.226-.145,1.587.053s1.992,1.214,2.5,1.557a1.072,1.072,0,0,1,.446.872s-.981,1.557-1.1,1.744c-.149.218-.505.4-1.308.4s-1.66-.147-3.7-1.267a19.653,19.653,0,0,1-4.089-3.194A20.323,20.323,0,0,1,1.176,5.924Z",
        transform: "translate(2.667 2.667)",
        fill: "#263238"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PhoneIcon);

/***/ }),

/***/ "./public/vectorIcons/twittertamdefult1.jsx":
/*!**************************************************!*\
  !*** ./public/vectorIcons/twittertamdefult1.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/footer/footer.module.scss */ "./styles/footer/footer.module.scss");
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\public\\vectorIcons\\twittertamdefult1.jsx";



const Twittertamdefult1 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon1,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      id: "twittertamdefult",
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        id: "Rectangle_4570",
        "data-name": "Rectangle 4570",
        width: "24",
        height: "24",
        opacity: "0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        id: "twitter",
        d: "M16,58.979a6.555,6.555,0,0,1-1.885.517,3.3,3.3,0,0,0,1.443-1.815,6.617,6.617,0,0,1-2.086.8A3.285,3.285,0,0,0,7.88,61.47a9.318,9.318,0,0,1-6.765-3.429,3.286,3.286,0,0,0,1.016,4.381A3.283,3.283,0,0,1,.645,62.01v.041A3.286,3.286,0,0,0,3.277,65.27a3.324,3.324,0,0,1-.865.115,3.151,3.151,0,0,1-.618-.061A3.284,3.284,0,0,0,4.86,67.6a6.585,6.585,0,0,1-4.076,1.4A6.974,6.974,0,0,1,0,68.961a9.278,9.278,0,0,0,5.031,1.477A9.274,9.274,0,0,0,14.37,61.1l-.011-.425A6.554,6.554,0,0,0,16,58.979Z",
        transform: "translate(3.999 -52.441)",
        className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icons,
        fill: "#d3d6d7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Twittertamdefult1);

/***/ }),

/***/ "./styles/drivers/section1.module.scss":
/*!*********************************************!*\
  !*** ./styles/drivers/section1.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wr": "section1_wr__1gLF1",
	"overlay": "section1_overlay__4A6aJ",
	"wrapper": "section1_wrapper__14qjG"
};


/***/ }),

/***/ "./styles/drivers/section2.module.scss":
/*!*********************************************!*\
  !*** ./styles/drivers/section2.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wr": "section2_wr__MFp1M",
	"wrapper": "section2_wrapper__AHfzV",
	"cu": "section2_cu__3Aaq7",
	"mTitle": "section2_mTitle__1RvW8",
	"line": "section2_line__3WZGK",
	"column": "section2_column__2VQRj",
	"left": "section2_left__3krHE",
	"inputs": "section2_inputs__1qxI3",
	"input": "section2_input__iLGQj",
	"inputT": "section2_inputT__3IWsa",
	"buttonClass": "section2_buttonClass__2yyUK",
	"inputClass": "section2_inputClass__2NEvm",
	"input1": "section2_input1__24o1c",
	"textarea": "section2_textarea__2ArKu",
	"input5": "section2_input5__2XGqO",
	"inUploads": "section2_inUploads__2jsfb",
	"uploads": "section2_uploads__3Ywks",
	"attachCv": "section2_attachCv__2836y",
	"button": "section2_button__MDV5V",
	"icon1": "section2_icon1__32GgY",
	"btn": "section2_btn__2rVpH",
	"icon": "section2_icon__2nUnx",
	"right": "section2_right__360QT",
	"rightImg": "section2_rightImg__wb_kX",
	"overliy": "section2_overliy__2xn-Y",
	"rightTitle": "section2_rightTitle__3D5ff",
	"rightText": "section2_rightText__1w6hI",
	"rightBtn": "section2_rightBtn__3Pmgz"
};


/***/ }),

/***/ "./styles/footer/footer.module.scss":
/*!******************************************!*\
  !*** ./styles/footer/footer.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "footer_wrapper__2dlVX",
	"cont": "footer_cont__21UsG",
	"row": "footer_row__1wGsc",
	"logo": "footer_logo__12T_0",
	"title": "footer_title__NEynN",
	"text": "footer_text__3Fo2N",
	"num": "footer_num__kby2f",
	"email": "footer_email__r9DLs",
	"center": "footer_center__2S1lS",
	"in": "footer_in__FOyRs",
	"box": "footer_box__hm55C",
	"imgWr": "footer_imgWr__2imOr",
	"img": "footer_img__1fxzX",
	"ne": "footer_ne__1htZ1",
	"title1": "footer_title1__2ABEh",
	"text1": "footer_text1__1WmJG",
	"date": "footer_date__2YQEP",
	"wr": "footer_wr__2o4mS",
	"link": "footer_link__3gPEv",
	"links": "footer_links__9feFK",
	"phoneNumber": "footer_phoneNumber__2whI8",
	"text2": "footer_text2__1YL15",
	"button": "footer_button__19b_f",
	"input": "footer_input__3VypW",
	"tr": "footer_tr__1WDi8",
	"icon": "footer_icon__34yQp",
	"btext": "footer_btext__HuMj2",
	"rowFour": "footer_rowFour__1qQNI",
	"abs": "footer_abs__3bVsO"
};


/***/ }),

/***/ "./styles/header/contact.module.scss":
/*!*******************************************!*\
  !*** ./styles/header/contact.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "contact_wrapper__3SO-I",
	"left": "contact_left__2tjMk",
	"inLeft": "contact_inLeft__2_yMD",
	"adress": "contact_adress__LGPkJ",
	"contactIcon": "contact_contactIcon__3agHE",
	"text": "contact_text__3Wefs",
	"phoneNumber": "contact_phoneNumber__3Kwt2",
	"right": "contact_right__3OI4d",
	"inRight": "contact_inRight__XzoVw",
	"rightIcon": "contact_rightIcon__3v12p"
};


/***/ }),

/***/ "./styles/header/header.module.scss":
/*!******************************************!*\
  !*** ./styles/header/header.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wr": "header_wr__1-xBO",
	"top": "header_top__2VKV1",
	"tog": "header_tog__3W_Dj",
	"brand": "header_brand__2-6y2",
	"wrapper": "header_wrapper__3Yplk",
	"newBrand": "header_newBrand__3AOXb",
	"links": "header_links__37J8o",
	"link": "header_link__3sQeA",
	"link8": "header_link8__1ag-3",
	"bars": "header_bars__1YJT7"
};


/***/ }),

/***/ "./styles/home/contact.module.scss":
/*!*****************************************!*\
  !*** ./styles/home/contact.module.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "contact_wrapper__28rU8",
	"contact": "contact_contact__1h_tz",
	"footer": "contact_footer__1orjy",
	"left": "contact_left__3LlJQ",
	"inner": "contact_inner__2nkPp",
	"title": "contact_title__3Fkm5",
	"htitle": "contact_htitle__2RXa5",
	"icon": "contact_icon__1fQ8T",
	"iconIn": "contact_iconIn__1PYgv",
	"adress": "contact_adress__2yG2v",
	"text": "contact_text__3BKP5",
	"email": "contact_email__2QkPp",
	"phoneNumber": "contact_phoneNumber__2F8_j"
};


/***/ }),

/***/ "./styles/sidebar/sidebar.module.scss":
/*!********************************************!*\
  !*** ./styles/sidebar/sidebar.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "sidebar_container__1GW25",
	"left": "sidebar_left__20LlI",
	"brand": "sidebar_brand__Nkkgg",
	"links": "sidebar_links__1UJMC",
	"link": "sidebar_link__1Cc9v",
	"inner": "sidebar_inner__2HYsg",
	"another": "sidebar_another__1Y3lN"
};


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-yandex-maps":
/*!************************************!*\
  !*** external "react-yandex-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-yandex-maps");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcml2ZXJzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RyaXZlcnMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJpdmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RyaXZlcnMvcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcml2ZXJzL3NlY3Rpb24tMi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvY29udGFjdFVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZS9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lL3NpZGViYXIvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kcml2ZXJzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy92ZWN0b3JJY29ucy9lbWFpbEljb24uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy92ZWN0b3JJY29ucy9mYWNlYm9va3RlYW1kZWZ1bHQxLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdmVjdG9ySWNvbnMvaW5zdGFncmFtdGVhbWRlZnVsdDEuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy92ZWN0b3JJY29ucy9sb2NhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3ZlY3Rvckljb25zL3Bob25lSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3ZlY3Rvckljb25zL3R3aXR0ZXJ0YW1kZWZ1bHQxLmpzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZHJpdmVycy9zZWN0aW9uMS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZHJpdmVycy9zZWN0aW9uMi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZm9vdGVyL2Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaGVhZGVyL2NvbnRhY3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hvbWUvY29udGFjdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1udW1iZXItZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXlhbmRleC1tYXBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmFsaWRhdG9yXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwicHJvcHMiLCJzZW5kTWFpbCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluc3RhR3JhbSIsIm9wZW4iLCJmYWNlQm9vayIsInR3aXRUZXIiLCJzdHlsZXMiLCJ3cmFwcGVyIiwiY29udCIsInJvdyIsImxvZ28iLCJ0ZXh0IiwiY2VudGVyIiwiaW4iLCJpbWcxIiwidGl0bGUiLCJ3ciIsImxpbmsiLCJsaW5rcyIsInBob25lTnVtYmVyIiwiZW1haWwiLCJyb3dGb3VyIiwiYWJzIiwiSGVhZGVyIiwib25QcmVzczEiLCJib29sMSIsInJlZiIsInVzZVJlZiIsImlzU2Nyb2xsIiwic2V0SXNTY3JvbGwiLCJ1c2VTdGF0ZSIsInN0eWxlc01haW4iLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ0b3AiLCJoZWlnaHQiLCJ3aWR0aCIsInpJbmRleCIsImJhY2tncm91bmQiLCJzZXRMaW5rIiwiaGFuZGxlU2Nyb2xsIiwiZSIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYWdlU2Nyb2xsIiwicm91dGVyIiwicHVzaCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbiIsInRvZyIsImJhcnMiLCJmYUJhcnMiLCJhbm90aGVyIiwiYnJhbmQiLCJuZXdCcmFuZCIsImxpbms4IiwiSW5kZXgiLCJvdmVybGF5IiwiUHJvZ3Jlc3MiLCJwZXJjZW50YWdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIlNlY3Rpb24yIiwiZmlsZSIsInNldEZpbGUiLCJmaWxlbmFtZSIsInNldEZpbGVuYW1lIiwiZmlsZW5hbWUxIiwic2V0RmlsZW5hbWUxIiwiZmlsZTEiLCJzZXRGaWxlMSIsInVwbG9hZGVkRmlsZSIsInNldFVwbG9hZGVkRmlsZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidXBsb2FkUGVyY2VudGFnZSIsInNldFVwbG9hZFBlcmNlbnRhZ2UiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsInNldEVtYWlsIiwibmFtZSIsInNldE5hbWUiLCJwaG9uZSIsInNldFBob25lIiwibWVzc2FnZTEiLCJzZXRNZXNzYWdlMSIsImNvbXBhbnkiLCJzZXRDb21wYW55Iiwib25DaGFuZ2UiLCJpZCIsInRhcmdldCIsImZpbGVzIiwidW5kZWZpbmVkIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXMiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwib25VcGxvYWRQcm9ncmVzcyIsInByb2dyZXNzRXZlbnQiLCJwYXJzZUludCIsIk1hdGgiLCJyb3VuZCIsImxvYWRlZCIsInRvdGFsIiwic2V0VGltZW91dCIsImZpbGVOYW1lIiwiZmlsZVBhdGgiLCJkYXRhIiwiZXJyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJtc2ciLCJvbkRyb3AiLCJ1c2VDYWxsYmFjayIsImFjY2VwdGVkRmlsZXMiLCJpbnB1dFN0eWxlIiwidmlzaWJpbGl0eSIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJib3JkZXIiLCJ2YWxpZGF0ZUVtYWlsIiwidmFsdWUiLCJ2YWxpZGF0b3IiLCJpc0VtYWlsIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJjdSIsIm1UaXRsZSIsImxpbmUiLCJjb2x1bW4iLCJsZWZ0IiwiaW5wdXRzIiwiaW5wdXQiLCJpbnB1dDEiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJ0ZXh0YXJlYSIsImlucHV0NSIsImluVXBsb2FkcyIsInVwbG9hZHMiLCJhdHRhY2hDdiIsIm1hcmdpbiIsImJ1dHRvbiIsImJ0biIsIkNvbnRhY3RVcyIsImlubmVyIiwiaHRpdGxlIiwiYWRyZXNzIiwiY29udGFjdEljb24iLCJpY29uIiwiaWNvbkluIiwiWW1hcCIsImlzQmlnU2NyZWVuIiwidXNlTWVkaWFRdWVyeSIsInF1ZXJ5IiwiaCIsInciLCJzdHlsZSIsInpvb20iLCJTaWRlYmFyIiwic3R5bGUxIiwidHJhbnNpdGlvbiIsIkZ1bmMxIiwiRnVuYzIiLCJGdW5jMyIsIkZ1bmM0IiwiRnVuYzUiLCJGdW5jNiIsIkZ1bmM3IiwiY29udGFpbmVyIiwiQ29udGFjdCIsImluTGVmdCIsImZhRW52ZWxvcGUiLCJmYUxvY2F0aW9uQXJyb3ciLCJmYVBob25lIiwicmlnaHQiLCJpblJpZ2h0IiwicmlnaHRJY29uIiwiRHJpdmVycyIsImJvb2wiLCJzZXRCb29sIiwiRW1haWxJY29uIiwiRmFjZWJvb2t0ZWFtZGVmdWx0MSIsImljb24xIiwiaWNvbnMiLCJJbnN0YWdyYW10ZWFtZGVmdWx0MSIsIkxvY2F0aW9uIiwiUGhvbmVJY29uIiwiVHdpdHRlcnRhbWRlZnVsdDEiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNuQixRQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNuQkMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixvREFBdkI7QUFDSCxHQUZEOztBQUdBLFFBQU1DLFNBQVMsR0FBRyxNQUFNO0FB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QURKO0FBUUgsQ0FURDs7QUFXZUksZ0ZBQWYsRTs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJwYWdlcy9kcml2ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kcml2ZXJzLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFMb2NhdGlvbkFycm93LCBmYVNtc30gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcihwcm9wcykge1xyXG4gICAgY29uc3Qgc2VuZE1haWwgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIm1haWx0bzpuZm9AZHRtdHJ1Y2tpbmcuY29tP3N1YmplY3Q9Q2FyIGV4cG9ydGF0aW9uXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbnN0YUdyYW0gPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tXCIpXHJcbiAgICB9XHJcbiAgICBjb25zdCBmYWNlQm9vayA9ICgpID0+IHtcclxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly95b3V0dS5iZS9DUnRCN0RaSnFIa1wiO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IHR3aXRUZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8veW91dHUuYmUvQ1J0QjdEWkpxSGtcIjtcclxuICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tXCIpO1xyXG5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBhcmUgYSBsZWFkaW5nIGNvbXBhbnkgaW4gbG9naXN0aWNzIHRoYXQgZGVsaXZlcnMgcmVhbCB2YWx1ZS5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlufSBvbkNsaWNrPXtmYWNlQm9va30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWcxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwic2NhbGUoMC4zNSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzcuMiw2NEgyOGMtMi41LDAtNC41LTItNC41LTQuNVYzN0gxN2MtMi41LDAtNC41LTItNC41LTQuNXYtNi45YzAtMi41LDItNC42LDQuNS00LjZoNi41di01LjVjMC05LjEsNi4yLTE1LjUsMTUtMTUuNVxyXG5cdCBcdEg0N2MxLjQsMCwyLjUsMS4xLDIuNSwyLjV2MTNjMCwxLjQtMS4xLDIuNS0yLjUsMi41aC01LjV2M2g1LjRjMCwwLDAuMSwwLDAuMSwwYzEuNCwwLjEsMi43LDAuNywzLjUsMS44YzAuOCwxLjEsMS4yLDIuNCwwLjksMy44XHJcblx0XHRsLTEuMyw2LjdDNDkuOCwzNS40LDQ4LDM3LDQ1LjcsMzdoLTQuM3YyMi41QzQxLjUsNjIsMzkuNSw2NCwzNy4yLDY0eiBNMjguNSw1OWg4VjM0LjVjMC0xLjQsMS4xLTIuNSwyLjUtMi41aDYuM2wxLjItNkgzOVxyXG5cdFx0Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjV2LThjMC0xLjQsMS4xLTIuNSwyLjUtMi41aDUuNVY1aC02Yy02LjEsMC0xMCw0LjEtMTAsMTAuNXY4YzAsMS40LTEuMSwyLjUtMi41LDIuNWgtOC41djZIMjZcclxuXHRcdGMxLjQsMCwyLjUsMS4xLDIuNSwyLjVWNTl6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW59IG9uQ2xpY2s9e2luc3RhR3JhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWcxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwic2NhbGUoMC4zNSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzIsMTYuOWMtOC4zLDAtMTUsNi44LTE1LDE1LjFjMCw4LjMsNi43LDE1LjEsMTUsMTUuMWM4LjMsMCwxNS02LjgsMTUtMTUuMUM0NywyMy43LDQwLjMsMTYuOSwzMiwxNi45eiBNMzIsNDIuMVxyXG5cdFx0Yy01LjUsMC0xMC00LjUtMTAtMTAuMXM0LjUtMTAuMSwxMC0xMC4xYzUuNSwwLDEwLDQuNSwxMCwxMC4xUzM3LjUsNDIuMSwzMiw0Mi4xelwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDcsMTBjLTIuOCwwLTUsMi4zLTUsNXMyLjIsNSw1LDVjMi44LDAsNS0yLjMsNS01UzQ5LjgsMTAsNDcsMTB6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00OCwwSDE2QzcuMiwwLDAsNy4yLDAsMTZ2MzEuN0MwLDU2LjcsNy4zLDY0LDE2LjMsNjRoMzEuNUM1Ni43LDY0LDY0LDU2LjcsNjQsNDcuN1YxNkM2NCw3LjIsNTYuOCwwLDQ4LDB6IE01OSw0Ny43XHJcblx0XHRDNTksNTMuOSw1NCw1OSw0Ny44LDU5SDE2LjNDMTAuMSw1OSw1LDU0LDUsNDcuOFYxNkM1LDkuOSw5LjksNSwxNiw1SDQ4YzYuMSwwLDExLDQuOSwxMSwxMVY0Ny43elwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlufSBvbkNsaWNrPXt0d2l0VGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZzF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJzY2FsZSgwLjM1KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMi4yLDU4Yy01LjQsMC0xMy4zLTEtMjAtNS44Yy0yLTEuNC0yLjgtNC4xLTEuOC02LjRjMC45LTIuMywzLjQtMy42LDUuOS0zLjFsMCwwYzAsMCwxLDAuMiwyLjUsMC4xXHJcblx0XHRjLTEtMS40LTEuOS0zLTIuNS00LjdjLTAuMi0wLjYtMC4zLTEuMS0wLjMtMS43Yy0yLjUtMi45LTMuOC02LjUtMy44LTEwLjVjMC0wLjksMC4yLTEuOCwwLjctMi41QzIsMjAsMS43LDE1LjUsNC42LDEwLjdcclxuXHRcdEM1LjUsOS4zLDcsOC4zLDguNyw4LjFjMC4xLDAsMC4xLDAsMC4yLDBjMS44LTAuMSwzLjQsMC42LDQuNSwxLjhsMCwwYzAuNywwLjcsNi4xLDYuNCwxMyw4LjNDMjgsMTEuMiwzNC40LDYsNDIuMSw2XHJcblx0XHRjMy40LDAsNi43LDEsOS4zLDIuOWMwLjctMC4yLDEuNi0wLjUsMi40LTEuMWMxLjYtMS4xLDMuNy0xLjMsNS40LTAuNGMxLjcsMC44LDIuOSwyLjQsMy4xLDQuM2MwLDAuMSwwLDAuMiwwLDAuM1xyXG5cdFx0YzAsMC4xLDAsMC4zLDAsMC42YzEuNCwxLjQsMS45LDMuNCwxLjMsNS4yYy0wLjUsMS43LTIuMSwzLjgtNS40LDYuOEM1OCwzMiw1NC41LDUxLjgsMjkuNiw1Ny40QzI5LjQsNTcuNCwyNi40LDU4LDIyLjIsNTh6XHJcblx0XHQgTTUuNCw0Ny42Yy0wLjIsMC0wLjMsMC4xLTAuMywwLjFjMCwwLDAsMC4xLDAsMC4xQzUsNDcuOSw1LDQ4LDUuMSw0OC4xYzUuNiw0LjEsMTIuNCw0LjksMTcuMSw0LjljMy43LDAsNi4zLTAuNSw2LjQtMC41XHJcblx0XHRjMjIuNi01LjEsMjQuOC0yMy42LDI0LjktMjkuMmMwLTAuNywwLjMtMS40LDAuOC0xLjhjNC4yLTMuNyw0LjctNSw0LjctNS4xYzAuMS0wLjItMC4xLTAuNC0wLjItMC40YzAsMC0wLjEtMC4xLTAuMS0wLjFcclxuXHRcdGMtMS4xLTAuNS0xLjctMS44LTEuMy0zYzAuMS0wLjMsMC4xLTAuNSwwLjEtMC43YzAtMC4xLTAuMS0wLjItMC4yLTAuM2MtMC4xLDAtMC4xLTAuMS0wLjItMC4xYy0wLjEsMC0wLjIsMC0wLjQsMC4xXHJcblx0XHRjLTIuMiwxLjUtNC41LDItNS42LDIuMWMtMC43LDAuMS0xLjMtMC4xLTEuOC0wLjVjLTEuOS0xLjYtNC41LTIuNC03LjEtMi40Yy02LjEsMC0xMSw0LjUtMTEuMiwxMC40YzAsMC43LTAuMywxLjQtMC45LDEuOFxyXG5cdFx0Yy0wLjUsMC41LTEuMiwwLjctMS45LDAuNmMtOS41LTEuMy0xNy04LjktMTguNS0xMC40YzAsMC0wLjEtMC4xLTAuMS0wLjFjLTAuMS0wLjEtMC4zLTAuMS0wLjQtMC4xYy0wLjIsMC0wLjMsMC4yLTAuNCwwLjNcclxuXHRcdGMtMS44LDMtMiw2LjItMC43LDkuNGMwLjQsMSwwLjIsMi4yLTAuNywyLjljLTAuMSwwLjEtMC4yLDAuMi0wLjIsMC4yYzAsMy4yLDEsNS44LDMuMiw3LjhjMC43LDAuNywwLjksMS42LDAuNywyLjVcclxuXHRcdGMwLDAuMSwwLDAuMiwwLDAuM2MwLjgsMi41LDIuNCw0LjUsNC42LDUuOGMwLjgsMC41LDEuMywxLjQsMS4yLDIuNGMtMC4xLDEtMC44LDEuOC0xLjcsMi4xYy00LjYsMS41LTkuNSwwLjgtOS43LDAuN1xyXG5cdFx0QzUuNSw0Ny42LDUuNCw0Ny42LDUuNCw0Ny42eiBNNTguNSwxNS43QzU4LjUsMTUuNyw1OC41LDE1LjcsNTguNSwxNS43QzU4LjUsMTUuNyw1OC41LDE1LjcsNTguNSwxNS43elwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTS01LjcsMC45TC01LjcsMC45TC01LjcsMC45elwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0zMiwzMkwzMiwzMkwzMiwzMnpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW1wb3J0YW50IExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+IDxzcGFuPi08L3NwYW4+ICBIb21lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+IDxzcGFuPi08L3NwYW4+IEFib3V0IHVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT4gPHNwYW4+LTwvc3Bhbj4gIFNlcnZpY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT4gPHNwYW4+LTwvc3Bhbj4gIFdoeSBEVE0/PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PiA8c3Bhbj4tPC9zcGFuPiAgQmxvZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE91ciBPZmZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGljYWdvLCBJTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBoaWxhZGVscGhpYSwgUEFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGlzb24sIE5KXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGVsZXBob25lOjwvc3Bhbj4gPGEgY2xhc3NOYW1lPXtzdHlsZXMucGhvbmVOdW1iZXJ9IGhyZWY9XCJ0ZWw6KzE3NzMzMDkyMTExXCI+KzEgNzczIDMwOSAyMTExPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NlbmRNYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsOjwvc3Bhbj4gIGluZm9AZHRtdHJ1Y2tpbmcuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0ZvdXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYnN9PlxyXG4gICAgICAgICAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjEgRFRNIFRydWNraW5nIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvaGVhZGVyL2hlYWRlci5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7ZmFCYXJzfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXNjcm9sbFwiXHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe29uUHJlc3MxLCBib29sMX0pIHtcclxuICAgIGNvbnN0IHJlZj0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2lzU2Nyb2xsLCBzZXRJc1Njcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBzdHlsZXNNYWluID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGAke2Jvb2wxID8gXCJibG9ja1wiIDogXCJub25lXCJ9YCxcclxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgIHRvcDogXCIwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgekluZGV4OiBcIjEwMFwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjUpXCJcclxuICAgIH1cclxuICAgIGNvbnN0IFtsaW5rLHNldExpbmtdID0gdXNlU3RhdGUoJ2hvbWUnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoZSl7XHJcblxyXG4gICAgICAgIGlmKHJlZi5jdXJyZW50KXtcclxuICAgICAgICAgICAgaWYocmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgMCl7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbCh0cnVlKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldElzU2Nyb2xsKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFnZVNjcm9sbCgpe1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpPT53aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXNNYWlufSBvbkNsaWNrPXsoKSA9PiBvblByZXNzMSghYm9vbDEpfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLndyLCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6JyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJzfSBvbkNsaWNrPXsoKSA9PiBvblByZXNzMSghYm9vbDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmt9ICR7bGluayA9PT0gJ1RlYW0nID8gc3R5bGVzLmFub3RoZXIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5icmFuZCwgaXNTY3JvbGwgPyBzdHlsZXMubmV3QnJhbmQ6JyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gJHtsaW5rID09PSAnVGVhbScgPyBzdHlsZXMuYW5vdGhlciA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6JyddLmpvaW4oJyAnKX0+SE9NRTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiICBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rfSAke2xpbmsgPT09ICdUZWFtJyA/IHN0eWxlcy5hbm90aGVyIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLmxpbmssIGlzU2Nyb2xsID8gc3R5bGVzLnRvcDonJ10uam9pbignICcpfT5BQk9VVCBVUzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmt9ICR7bGluayA9PT0gJ1RlYW0nID8gc3R5bGVzLmFub3RoZXIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMubGluaywgaXNTY3JvbGwgPyBzdHlsZXMudG9wOicnXS5qb2luKCcgJyl9PlNFUlZJQ0VTPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gJHtsaW5rID09PSAnVGVhbScgPyBzdHlsZXMuYW5vdGhlciA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6JyddLmpvaW4oJyAnKX0+V0hZIERUTT88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RyaXZlcnNcIiAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gJHtsaW5rID09PSAnVGVhbScgPyBzdHlsZXMuYW5vdGhlciA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6JyddLmpvaW4oJyAnKX0+Rk9SIERSSVZFUlM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiIG9uQ2xpY2s9e3BhZ2VTY3JvbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwic2VjdGlvbi00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmt9ICR7bGluayA9PT0gJ1RlYW0nID8gc3R5bGVzLmFub3RoZXIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEeW5hbWljPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldEFjdGl2ZT17KCkgPT4gc2V0TGluaygnVGVhbScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYW5jZWxFdmVudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFzb3NpeUxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6JyddLmpvaW4oJyAnKX0+Q09OVEFDVDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmt9ICR7bGluayA9PT0gJ1RlYW0nID8gc3R5bGVzLmFub3RoZXIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMubGluaywgaXNTY3JvbGwgPyBzdHlsZXMudG9wOicnXS5qb2luKCcgJyl9PkJMT0c8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3F1b3RlXCIgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmt9ICR7bGluayA9PT0gJ1RlYW0nID8gc3R5bGVzLmFub3RoZXIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMubGluazgsIGlzU2Nyb2xsID8gc3R5bGVzLnRvcDonJ10uam9pbignICcpfT5HRVQgQSBRVU9URTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9kcml2ZXJzL3NlY3Rpb24xLm1vZHVsZS5zY3NzXCJcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3J9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICBCZWNvbWUgYSBkcml2ZXJcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxyXG5cclxuY29uc3QgUHJvZ3Jlc3MgPSAoe3BlcmNlbnRhZ2V9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIGJnLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50YWdlfSVgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsgcGVyY2VudGFnZSB9JVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Qcm9ncmVzcy5wcm9wVHlwZXMgPSB7XHJcbiAgICBwZXJjZW50YWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NcclxuIiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9wcm9ncmVzc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9kcml2ZXJzL3NlY3Rpb24yLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSBcInZhbGlkYXRvclwiO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgU2VjdGlvbjIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZmlsZW5hbWUsIHNldEZpbGVuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtmaWxlbmFtZTEsIHNldEZpbGVuYW1lMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZmlsZTEsIHNldEZpbGUxXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1cGxvYWRlZEZpbGUsIHNldFVwbG9hZGVkRmlsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdXBsb2FkUGVyY2VudGFnZSwgc2V0VXBsb2FkUGVyY2VudGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtlbWFpbEVycm9yLCBzZXRFbWFpbEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFttZXNzYWdlMSwgc2V0TWVzc2FnZTFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NvbXBhbnksIHNldENvbXBhbnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGUsaWQpICA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzICE9PSB1bmRlZmluZWQgJiYgaWQgPT09IDEpe1xyXG4gICAgICAgICAgICBzZXRGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgc2V0RmlsZW5hbWUoZS50YXJnZXQuZmlsZXNbMF0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnRhcmdldC5maWxlcyAhPT0gdW5kZWZpbmVkICYmIGlkID09PSAyKXtcclxuICAgICAgICAgICAgc2V0RmlsZTEoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICBzZXRGaWxlbmFtZTEoZS50YXJnZXQuZmlsZXNbMF0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZTFcIiwgZmlsZTEpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIG5hbWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCBlbWFpbClcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21lc3NhZ2UnLCBtZXNzYWdlMSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbXBhbnknLCBjb21wYW55KVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvbmUnLCBwaG9uZSlcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VwbG9hZCcsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhIGJvdW5kYXJ5PSR7Zm9ybS5fYm91bmRhcnl9J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IHByb2dyZXNzRXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZFBlcmNlbnRhZ2UocGFyc2VJbnQoTWF0aC5yb3VuZCgocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFVwbG9hZFBlcmNlbnRhZ2UoMCksIDEwMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHtmaWxlTmFtZSwgZmlsZVBhdGh9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIHNldFVwbG9hZGVkRmlsZSh7ZmlsZU5hbWUsIGZpbGVQYXRofSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJ0ZpbGUgdXBsb2FkZWQnKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBzZXJ2ZXInKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoZXJyLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRGaWxlKCcnKTtcclxuICAgICAgICBzZXRDb21wYW55KCcnKTtcclxuICAgICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgICAgc2V0RmlsZW5hbWUoJycpO1xyXG4gICAgICAgIHNldE1lc3NhZ2UxKCcnKTtcclxuICAgICAgICBzZXRFbWFpbEVycm9yKCcnKTtcclxuICAgICAgICBzZXRQaG9uZSgnJyk7XHJcbiAgICAgICAgc2V0TmFtZSgnJyk7XHJcbiAgICAgICAgc2V0RmlsZW5hbWUxKCcnKTtcclxuICAgICAgICBzZXRGaWxlMSgnJylcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGFjY2VwdGVkRmlsZXMpID0+IHtcclxuICAgICAgICBpZiAoYWNjZXB0ZWRGaWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldEZpbGUoYWNjZXB0ZWRGaWxlc1swXSlcclxuICAgICAgICAgICAgc2V0RmlsZW5hbWUoYWNjZXB0ZWRGaWxlc1swXS5uYW1lKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICB9LFt1cGxvYWRQZXJjZW50YWdlXSlcclxuICAgIGNvbnN0IGlucHV0U3R5bGUgPSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIixcclxuICAgICAgICBib3JkZXJXaWR0aDogXCIycHhcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIGJvcmRlcjogXCJkb3R0ZWRcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjE1MHB4XCJcclxuICAgIH1cclxuICAgIGNvbnN0IHZhbGlkYXRlRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBlbWFpbCA9IGUudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgICAgIGlmICh2YWxpZGF0b3IuaXNFbWFpbChlbWFpbCkpIHtcclxuICAgICAgICAgICAgc2V0RW1haWxFcnJvcignJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFbWFpbEVycm9yKCdFbnRlciB2YWxpZCBFbWFpbCEnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHNldEZpbGVuYW1lKGV2ZW50LnRhcmdldC5maWxlc1swXS5uYW1lKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgc2V0RmlsZW5hbWUxKGV2ZW50LnRhcmdldC5maWxlc1swXS5uYW1lKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ICBpZD1cImRyaXZlcnMtMlwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVjb21lIGEgZHJpdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhwZXJpZW5jZSAoeWVhcnMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29tcGFueShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlckVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVFbWFpbChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiRW1haWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2VtYWlsRXJyb3J9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXQxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIisxICMjIyAjIyMgIyMgIyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9XCJfXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJQaG9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQaG9uZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVmZXJlbmNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UxKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2UxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIzMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXIgcGVyY2VudGFnZT17dXBsb2FkUGVyY2VudGFnZX0gY2xhc3NOYW1lPVwicHJvZ3Jlc3NiYXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pblVwbG9hZHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZHN9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXR0YWNoQ3Z9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS11cGxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudCwxICl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXR0YWNoIENWL0NETFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGVuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dGFjaEN2fSBzdHlsZT17e21hcmdpbjogXCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQsIDIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdHRhY2ggTWVkQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGVuYW1lMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uMjtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvY29udGFjdC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuXHJcbmltcG9ydCB7TWFwfSBmcm9tIFwicmVhY3QteWFuZGV4LW1hcHNcIjtcclxuaW1wb3J0IFltYXAgZnJvbSBcIi4vbWFwXCI7XHJcbmltcG9ydCB7ZmFMb2NhdGlvbkFycm93fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vLi4vcHVibGljL3ZlY3Rvckljb25zL2xvY2F0aW9uXCI7XHJcbmltcG9ydCBFbWFpbEljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy92ZWN0b3JJY29ucy9lbWFpbEljb25cIjtcclxuaW1wb3J0IFBob25lSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3ZlY3Rvckljb25zL3Bob25lSWNvblwiO1xyXG5pbXBvcnQgRmFjZWJvb2t0ZWFtZGVmdWx0MSBmcm9tIFwiLi4vLi4vcHVibGljL3ZlY3Rvckljb25zL2ZhY2Vib29rdGVhbWRlZnVsdDFcIjtcclxuaW1wb3J0IEluc3RhZ3JhbXRlYW1kZWZ1bHQxIGZyb20gXCIuLi8uLi9wdWJsaWMvdmVjdG9ySWNvbnMvaW5zdGFncmFtdGVhbWRlZnVsdDFcIjtcclxuaW1wb3J0IFR3aXR0ZXJ0YW1kZWZ1bHQxIGZyb20gXCIuLi8uLi9wdWJsaWMvdmVjdG9ySWNvbnMvdHdpdHRlcnRhbWRlZnVsdDFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RVcygpIHtcclxuICAgIGNvbnN0IGluc3RhR3JhbSA9ICgpID0+IHtcclxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly95b3V0dS5iZS9DUnRCN0RaSnFIa1wiO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbVwiKTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBmYWNlQm9vayA9ICgpID0+IHtcclxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly95b3V0dS5iZS9DUnRCN0RaSnFIa1wiO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IHR3aXRUZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8veW91dHUuYmUvQ1J0QjdEWkpxSGtcIjtcclxuICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRNYWlsID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJtYWlsdG86aW5mb0BkdG10cnVja2luZy5jb20/c3ViamVjdD1EdG1UcnVja0NvbXBhbnlcIjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfSBpZD1cInNlY3Rpb24tN1wiPlxyXG4gICAgICAgICAgICA8WW1hcC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgdXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmh0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRxdWFydGVyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0SWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyNzUgRGF2aXMgUmQsIFN1aXRlIDEzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2FnbywgSUwgNjAxMjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHJlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbWFpbEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvQGR0bXRydWNraW5nLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0SWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGhvbmVJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5waG9uZU51bWJlcn0gaHJlZj1cInRlbDorMTc3MzMwOTIxMTFcIj4rMSA3NzMgMzA5IDIxMTE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnBob25lTnVtYmVyfSBocmVmPVwidGVsOisxNjMwODgzODczMyBcIj4rMSA2MzAgODgzIDg3MzMgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaHRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU29jaWFsIG5ldHdvcmtzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uSW59IG9uQ2xpY2s9e2ZhY2VCb29rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va3RlYW1kZWZ1bHQxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25Jbn0gb25DbGljaz17aW5zdGFHcmFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW10ZWFtZGVmdWx0MSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uSW59IG9uQ2xpY2s9e3R3aXRUZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJ0YW1kZWZ1bHQxLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7WU1hcHMsIE1hcCwgUGxhY2VtYXJrLCBab29tQ29udHJvbCwgRnVsbHNjcmVlbkNvbnRyb2x9IGZyb20gJ3JlYWN0LXlhbmRleC1tYXBzJztcclxuaW1wb3J0IHt1c2VNZWRpYVF1ZXJ5fSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBZbWFwID0gKCkgPT57XHJcbiAgICBjb25zdCBpc0JpZ1NjcmVlbiA9IHVzZU1lZGlhUXVlcnkoeyBxdWVyeTogJyhtYXgtd2lkdGg6IDk5MHB4KScgfSlcclxuICAgIGNvbnN0IGggPSBcIjcwdmhcIjtcclxuICAgIGNvbnN0IHcgPSBcIjEwMFwiXHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICBoZWlnaHQ6IGgsXHJcbiAgICAgICAgekluZGV4OlwiMjBcIixcclxuICAgICAgICB3aWR0aDp3LFxyXG5cclxuICAgIH07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICA8WU1hcHM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXAgICAgIGRlZmF1bHRTdGF0ZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs0Mi4wNjgxNTQsICAtODguMzA5Mjg0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbTogMTRcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiBofX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2VtYXJrIGRlZmF1bHRHZW9tZXRyeT17WzQyLjA2ODE1NCwgIC04OC4zMDkyODRdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnVsbHNjcmVlbkNvbnRyb2wgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01hcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1lNYXBzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBZbWFwIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3NpZGViYXIvc2lkZWJhci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQge1xyXG4gICAgZmFEZXNrdG9wLFxyXG4gICAgZmFIb21lLCBmYU9iamVjdEdyb3VwLFxyXG4gICAgZmFQZW9wbGVDYXJyeSwgZmFQaG9uZSxcclxuICAgIGZhUHJvamVjdERpYWdyYW0sXHJcbiAgICBmYVNlcnZlcixcclxuICAgIGZhVGFjaG9tZXRlckFsdFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcih7Ym9vbDEsb25QcmVzczF9KSB7XHJcbiAgICBjb25zdCBzdHlsZTEgPSB7XHJcbiAgICAgICAgbGVmdDpgJHtib29sMSA/IFwiMHB4XCI6IFwiLTEwMCVcIn1gLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICcxcycsXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgRnVuYzEgPSAoKSA9PiBvblByZXNzMSghYm9vbDEpXHJcblxyXG4gICAgY29uc3QgRnVuYzIgPSAoKSA9PiB7XHJcbiAgICAgICAgb25QcmVzczEoIWJvb2wxKVxyXG4gICAgfVxyXG4gICAgY29uc3QgRnVuYzMgPSAoKSA9PiB7XHJcbiAgICAgICAgb25QcmVzczEoIWJvb2wxKVxyXG4gICAgfVxyXG4gICAgY29uc3QgRnVuYzQgPSAoKSA9PiB7XHJcbiAgICAgICAgb25QcmVzczEoIWJvb2wxKVxyXG4gICAgfVxyXG4gICAgY29uc3QgRnVuYzUgPSAoKSA9PiB7XHJcbiAgICAgICAgb25QcmVzczEoIWJvb2wxKVxyXG4gICAgfVxyXG4gICAgY29uc3QgRnVuYzYgPSAoKSA9PiB7XHJcbiAgICAgICAgb25QcmVzczEoIWJvb2wxKVxyXG4gICAgfVxyXG4gICAgY29uc3QgRnVuYzcgPSAoKSA9PiB7XHJcbiAgICAgICAgb25QcmVzczEoIWJvb2wxKVxyXG4gICAgfVxyXG4gICAgY29uc3QgW2xpbmssc2V0TGlua10gPSB1c2VTdGF0ZSgnaG9tZScpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHN0eWxlPXtzdHlsZTF9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9IHN0eWxlPXtzdHlsZTF9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCIgb25DbGljaz17KCkgPT4gRnVuYzEoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cInNlY3Rpb24tMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHluYW1pYz17dHJ1ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IEZ1bmMyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJzZWN0aW9uLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRBY3RpdmU9eygpID0+IHNldExpbmsoJ3NlcnZpY2VzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ2FuY2VsRXZlbnRzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IHVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9ID5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gRnVuYzMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cInNlY3Rpb24tM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHluYW1pYz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldEFjdGl2ZT17KCkgPT4gc2V0TGluaygncHJvamVjdHMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYW5jZWxFdmVudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cInNlY3Rpb24tNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gRnVuYzQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlubmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRBY3RpdmU9eygpID0+IHNldExpbmsoJ3RlY2hub2xvZ2llcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhbmNlbEV2ZW50cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaHkgRFRNP1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RyaXZlcnNcIiAgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGRyaXZlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IEZ1bmM2KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJzZWN0aW9uLTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstMjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRBY3RpdmU9eygpID0+IHNldExpbmsoJ3RlYW0nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYW5jZWxFdmVudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBob25lfS8+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwic2VjdGlvbi04XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBGdW5jNygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRBY3RpdmU9eygpID0+IHNldExpbmsoJ2NvbnRhY3QnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYW5jZWxFdmVudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmxvZ1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcXVvdGVcIiAgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHZXQgYSBxdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9IHN0eWxlPXtzdHlsZTF9PjwvZGl2PiovfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2hlYWRlci9jb250YWN0Lm1vZHVsZS5zY3NzXCJcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtmYUVudmVsb3BlLCBmYUxvY2F0aW9uQXJyb3csIGZhUGhvbmV9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IEZhY2Vib29rdGVhbWRlZnVsdDEgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy92ZWN0b3JJY29ucy9mYWNlYm9va3RlYW1kZWZ1bHQxXCI7XHJcbmltcG9ydCBUd2l0dGVydGFtZGVmdWx0MSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL3ZlY3Rvckljb25zL3R3aXR0ZXJ0YW1kZWZ1bHQxXCI7XHJcbmltcG9ydCBJbnN0YWdyYW10ZWFtZGVmdWx0MSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL3ZlY3Rvckljb25zL2luc3RhZ3JhbXRlYW1kZWZ1bHQxXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGFjdChwcm9wcykge1xyXG4gICAgY29uc3Qgc2VuZE1haWwgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIm1haWx0bzppbmZvQGR0bXRydWNraW5nLmNvbT9zdWJqZWN0PWV4cG9ydGF0aW9uXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmYWNlQm9vayA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cub3BlbihcImh0dHA6Ly9mYWNlYm9vay5jb21cIilcclxuICAgIH1cclxuICAgIGNvbnN0IGluc3RhR3JhbSA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cub3BlbignaHR0cDovL2luc3RhZ3JhbS5jb20nKVxyXG4gICAgfVxyXG4gICAgY29uc3QgdHdpdFRlciA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cub3BlbihcImh0dHA6Ly90d2l0dGVyLmNvbVwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5MZWZ0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVudmVsb3BlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2VuZE1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9AZHRtdHJ1Y2tpbmcuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkcmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0SWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvY2F0aW9uQXJyb3d9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMjc1LCBEYXZpcyBSZCwgQ2hpY2FnbywgSWxsaW5vaXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHJlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQaG9uZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnBob25lTnVtYmVyfSBocmVmPVwidGVsOisxNzczMzA5MjExMVwiPisxIDc3MyAzMDkgMjEgMTE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluUmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRJY29ufSBvbkNsaWNrPXtmYWNlQm9va30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va3RlYW1kZWZ1bHQxLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0SWNvbn0gb25DbGljaz17dHdpdFRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUd2l0dGVydGFtZGVmdWx0MS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodEljb259IG9uQ2xpY2s9e2luc3RhR3JhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW10ZWFtZGVmdWx0MS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbmRleCBmcm9tIFwiLi4vY29tcG9uZW50cy9kcml2ZXJzL2luZGV4XCJcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9jb250YWN0XCJcclxuaW1wb3J0IFNlY3Rpb24yIGZyb20gXCIuLi9jb21wb25lbnRzL2RyaXZlcnMvc2VjdGlvbi0yXCJcclxuaW1wb3J0IENvbnRhY3RVcyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2NvbnRhY3RVc1wiXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvc2lkZWJhci9zaWRlYmFyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZHJpdmVycy9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9kcml2ZXJzL2Zvb3RlclwiO1xyXG5cclxuZnVuY3Rpb24gRHJpdmVycyhwcm9wcykge1xyXG4gICAgY29uc3QgW2Jvb2wsIHNldEJvb2xdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyIGJvb2wxPXtib29sfVxyXG4gICAgICAgICAgICAgICAgICAgICBvblByZXNzMT17c2V0Qm9vbH0gLz5cclxuICAgICAgICAgICAgPENvbnRhY3QvPlxyXG4gICAgICAgICAgICA8SGVhZGVyICBib29sMT17Ym9vbH1cclxuICAgICAgICAgICAgICAgICAgICAgb25QcmVzczE9e3NldEJvb2x9Lz5cclxuICAgICAgICAgICAgPEluZGV4Lz5cclxuICAgICAgICAgICAgPFNlY3Rpb24yLz5cclxuICAgICAgICAgICAgPENvbnRhY3RVcy8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyaXZlcnM7IiwiXHJcblxyXG5jb25zdCBFbWFpbEljb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdmcgaWQ9XCJlbWFpbEljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNDQ5OVwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA0NDk5XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgZmlsbD1cIiNmZmZcIiBvcGFjaXR5PVwiMFwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvblwiIGQ9XCJNODQ0Ljg4Miw0MjcuNTI2aC0xOXYtLjAxbDUuNzk0LTUuNjkyLDEuMTg5LDEuMmEzLjU0NCwzLjU0NCwwLDAsMCw1LjAxMS4wMjRsLjAyNC0uMDI0LDEuMTktMS4yLDUuNzk0LDUuNjkyWm0tMTkuNDkxLS41ODloLS4wMVY0MTUuMzg1aC4wNThjLjQ3MS41LDIuNDA2LDIuNDY1LDUuNzUxLDUuODQ2Wm0xOS45OS0uMDVoLS4wMWwtNS44LTUuN2MzLjMwOC0zLjM0Nyw1LjMtNS4zNjksNS43NTItNS44NDZoLjA1OHYxMS41NDZabS0xMC0zLjc0NWEyLjgyNywyLjgyNywwLDAsMS0yLjAyMS0uODQ2bC03LjQwOC03LjQ1NWMuNTQyLS4wMDcsMi4yMzgtLjAwNyw1LjA0NC0uMDA3LDIuMjU4LDAsNi40NTIsMCwxMy42MTUuMDA4aC4xOTNsLTcuNCw3LjQ1M0EyLjgyOSwyLjgyOSwwLDAsMSw4MzUuMzgxLDQyMy4xNDJaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04MjUuMzgxIC00MTAuODM0KVwiIGZpbGw9XCIjMjYzMjM4XCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1haWxJY29uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9mb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzXCJcclxuXHJcbmNvbnN0IEZhY2Vib29rdGVhbWRlZnVsdDEgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbjF9PlxyXG4gICAgICAgICAgPHN2ZyBpZD1cImZhY2Vib29rdGVhbWRlZnVsdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgPlxyXG4gICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV80NTY5XCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDQ1NjlcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBvcGFjaXR5PVwiMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggaWQ9XCJGYWNlYm9va1wiIGQ9XCJNMTE2LjMxLDMuMVY1LjNIMTE0LjdWOGgxLjYxNHY4aDMuMzE1VjhoMi4yMjVzLjIwOC0xLjI5Mi4zMDktMi43aC0yLjUyMlYzLjQ1MWEuNzgyLjc4MiwwLDAsMSwuNzE5LS42NDZoMS44MDZWMGgtMi40NTZDMTE2LjIyOCwwLDExNi4zMSwyLjcsMTE2LjMxLDMuMVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEwNi42OTYgMy45OTkpXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9IGZpbGw9XCIjZDNkNmQ3XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rdGVhbWRlZnVsdDE7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEluc3RhZ3JhbXRlYW1kZWZ1bHQxID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb24xfT5cclxuICAgICAgICAgIDxzdmcgaWQ9XCJpbnN0YWdyYW10ZWFtZGVmdWx0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwicmVkXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxyXG4gICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV80NTcxXCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDQ1NzFcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBvcGFjaXR5PVwiMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggaWQ9XCJpbnN0YWdyYW1cIiBkPVwiTTQuNDE1LDE2QTQuNDIxLDQuNDIxLDAsMCwxLDAsMTEuNTg0VjQuNDE1QTQuNDIxLDQuNDIxLDAsMCwxLDQuNDE1LDBoNy4xNjlBNC40Miw0LjQyLDAsMCwxLDE2LDQuNDE1djcuMTY5QTQuNDIsNC40MiwwLDAsMSwxMS41ODUsMTZabS0zLTExLjU4NXY3LjE2OWEzLDMsMCwwLDAsMywzaDcuMTY5YTMsMywwLDAsMCwzLTNWNC40MTVhMywzLDAsMCwwLTMtM0g0LjQxNUEzLDMsMCwwLDAsMS40Miw0LjQxNVpNMy44NzcsOEE0LjEyMyw0LjEyMywwLDEsMSw4LDEyLjEyMyw0LjEyOCw0LjEyOCwwLDAsMSwzLjg3Nyw4Wk01LjMsOEEyLjcsMi43LDAsMSwwLDgsNS4zLDIuNzA3LDIuNzA3LDAsMCwwLDUuMyw4Wk0xMS41Niw0LjQ1MWExLjA0LDEuMDQsMCwxLDEsLjczNS4zQTEuMDQ4LDEuMDQ4LDAsMCwxLDExLjU2LDQuNDUxWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0IDQpXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9IGZpbGw9XCIjZDNkNmQ3XCIvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zdGFncmFtdGVhbWRlZnVsdDE7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3ZnIGlkPVwibG9jYXRpb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNDQ5N1wiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA0NDk3XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgZmlsbD1cIiMyNjMyMzhcIiBvcGFjaXR5PVwiMFwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiaWNfcGxhY2VfMjRweFwiIGQ9XCJNMTEsMkE2LjE1MSw2LjE1MSwwLDAsMCw1LDguM0M1LDEzLjAyNSwxMSwyMCwxMSwyMHM2LTYuOTc1LDYtMTEuN0E2LjE1MSw2LjE1MSwwLDAsMCwxMSwyWm0wLDguNTVBMi4yLDIuMiwwLDAsMSw4Ljg1Nyw4LjMsMi4yLDIuMiwwLDAsMSwxMSw2LjA1LDIuMiwyLjIsMCwwLDEsMTMuMTQzLDguMywyLjIsMi4yLDAsMCwxLDExLDEwLjU1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMSAtMSlcIiBmaWxsPVwiIzI2MzIzOFwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQaG9uZUljb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdmcgaWQ9XCJwaG9uZUljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNDQ5N1wiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA0NDk3XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgZmlsbD1cIiMyNjMyMzhcIiBvcGFjaXR5PVwiMFwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvblwiIGQ9XCJNMS4xNzYsNS45MjRBOC4wMjIsOC4wMjIsMCwwLDEsMCwyLjI5NGMwLS44NDEuMjA3LTEuMDgyLjQxNi0xLjI3N1MxLjU3MS4yNCwxLjczMi4xMzFBLjg1OC44NTgsMCwwLDEsMi44OTMuMzY2QzMuMjc4LjkyLDQsMi4wMzQsNC41LDIuNzczYy43ODUsMS4wNDcuMTYsMS41MDctLjA0MiwxLjc4My0uMzcyLjUwNy0uNTg2LjYzMi0uNTg2LDEuMjU1UzUuNjE3LDguMiw2LjAzMyw4LjYzOWExMC43MDgsMTAuNzA4LDAsMCwwLDIuNjg0LDIuMDM0LDIuMjQyLDIuMjQyLDAsMCwwLDEuNDItLjYzNmMuNzg0LS42LDEuMjI2LS4xNDUsMS41ODcuMDUzczEuOTkyLDEuMjE0LDIuNSwxLjU1N2ExLjA3MiwxLjA3MiwwLDAsMSwuNDQ2Ljg3MnMtLjk4MSwxLjU1Ny0xLjEsMS43NDRjLS4xNDkuMjE4LS41MDUuNC0xLjMwOC40cy0xLjY2LS4xNDctMy43LTEuMjY3YTE5LjY1MywxOS42NTMsMCwwLDEtNC4wODktMy4xOTRBMjAuMzIzLDIwLjMyMywwLDAsMSwxLjE3Niw1LjkyNFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMi42NjcgMi42NjcpXCIgZmlsbD1cIiMyNjMyMzhcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG9uZUljb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IFR3aXR0ZXJ0YW1kZWZ1bHQxID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb24xfT5cclxuICAgICAgICAgIDxzdmcgaWQ9XCJ0d2l0dGVydGFtZGVmdWx0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNDU3MFwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA0NTcwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgb3BhY2l0eT1cIjBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGlkPVwidHdpdHRlclwiIGQ9XCJNMTYsNTguOTc5YTYuNTU1LDYuNTU1LDAsMCwxLTEuODg1LjUxNywzLjMsMy4zLDAsMCwwLDEuNDQzLTEuODE1LDYuNjE3LDYuNjE3LDAsMCwxLTIuMDg2LjhBMy4yODUsMy4yODUsMCwwLDAsNy44OCw2MS40N2E5LjMxOCw5LjMxOCwwLDAsMS02Ljc2NS0zLjQyOSwzLjI4NiwzLjI4NiwwLDAsMCwxLjAxNiw0LjM4MUEzLjI4MywzLjI4MywwLDAsMSwuNjQ1LDYyLjAxdi4wNDFBMy4yODYsMy4yODYsMCwwLDAsMy4yNzcsNjUuMjdhMy4zMjQsMy4zMjQsMCwwLDEtLjg2NS4xMTUsMy4xNTEsMy4xNTEsMCwwLDEtLjYxOC0uMDYxQTMuMjg0LDMuMjg0LDAsMCwwLDQuODYsNjcuNmE2LjU4NSw2LjU4NSwwLDAsMS00LjA3NiwxLjRBNi45NzQsNi45NzQsMCwwLDEsMCw2OC45NjFhOS4yNzgsOS4yNzgsMCwwLDAsNS4wMzEsMS40NzdBOS4yNzQsOS4yNzQsMCwwLDAsMTQuMzcsNjEuMWwtLjAxMS0uNDI1QTYuNTU0LDYuNTU0LDAsMCwwLDE2LDU4Ljk3OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMy45OTkgLTUyLjQ0MSlcIiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30gZmlsbD1cIiNkM2Q2ZDdcIi8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVydGFtZGVmdWx0MTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3clwiOiBcInNlY3Rpb24xX3dyX18xZ0xGMVwiLFxuXHRcIm92ZXJsYXlcIjogXCJzZWN0aW9uMV9vdmVybGF5X180QTZhSlwiLFxuXHRcIndyYXBwZXJcIjogXCJzZWN0aW9uMV93cmFwcGVyX18xNHFqR1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JcIjogXCJzZWN0aW9uMl93cl9fTUZwMU1cIixcblx0XCJ3cmFwcGVyXCI6IFwic2VjdGlvbjJfd3JhcHBlcl9fQUhmelZcIixcblx0XCJjdVwiOiBcInNlY3Rpb24yX2N1X18zQWFxN1wiLFxuXHRcIm1UaXRsZVwiOiBcInNlY3Rpb24yX21UaXRsZV9fMVJ2VzhcIixcblx0XCJsaW5lXCI6IFwic2VjdGlvbjJfbGluZV9fM1daR0tcIixcblx0XCJjb2x1bW5cIjogXCJzZWN0aW9uMl9jb2x1bW5fXzJWUVJqXCIsXG5cdFwibGVmdFwiOiBcInNlY3Rpb24yX2xlZnRfXzNrckhFXCIsXG5cdFwiaW5wdXRzXCI6IFwic2VjdGlvbjJfaW5wdXRzX18xcXhJM1wiLFxuXHRcImlucHV0XCI6IFwic2VjdGlvbjJfaW5wdXRfX2lMR1FqXCIsXG5cdFwiaW5wdXRUXCI6IFwic2VjdGlvbjJfaW5wdXRUX18zSVdzYVwiLFxuXHRcImJ1dHRvbkNsYXNzXCI6IFwic2VjdGlvbjJfYnV0dG9uQ2xhc3NfXzJ5eVVLXCIsXG5cdFwiaW5wdXRDbGFzc1wiOiBcInNlY3Rpb24yX2lucHV0Q2xhc3NfXzJORXZtXCIsXG5cdFwiaW5wdXQxXCI6IFwic2VjdGlvbjJfaW5wdXQxX18yNG8xY1wiLFxuXHRcInRleHRhcmVhXCI6IFwic2VjdGlvbjJfdGV4dGFyZWFfXzJBckt1XCIsXG5cdFwiaW5wdXQ1XCI6IFwic2VjdGlvbjJfaW5wdXQ1X18yWEdxT1wiLFxuXHRcImluVXBsb2Fkc1wiOiBcInNlY3Rpb24yX2luVXBsb2Fkc19fMmpzZmJcIixcblx0XCJ1cGxvYWRzXCI6IFwic2VjdGlvbjJfdXBsb2Fkc19fM1l3a3NcIixcblx0XCJhdHRhY2hDdlwiOiBcInNlY3Rpb24yX2F0dGFjaEN2X18yODM2eVwiLFxuXHRcImJ1dHRvblwiOiBcInNlY3Rpb24yX2J1dHRvbl9fTURWNVZcIixcblx0XCJpY29uMVwiOiBcInNlY3Rpb24yX2ljb24xX18zMkdnWVwiLFxuXHRcImJ0blwiOiBcInNlY3Rpb24yX2J0bl9fMnJWcEhcIixcblx0XCJpY29uXCI6IFwic2VjdGlvbjJfaWNvbl9fMm5VbnhcIixcblx0XCJyaWdodFwiOiBcInNlY3Rpb24yX3JpZ2h0X18zNjBRVFwiLFxuXHRcInJpZ2h0SW1nXCI6IFwic2VjdGlvbjJfcmlnaHRJbWdfX3diX2tYXCIsXG5cdFwib3ZlcmxpeVwiOiBcInNlY3Rpb24yX292ZXJsaXlfXzJ4bi1ZXCIsXG5cdFwicmlnaHRUaXRsZVwiOiBcInNlY3Rpb24yX3JpZ2h0VGl0bGVfXzNENWZmXCIsXG5cdFwicmlnaHRUZXh0XCI6IFwic2VjdGlvbjJfcmlnaHRUZXh0X18xdzZoSVwiLFxuXHRcInJpZ2h0QnRuXCI6IFwic2VjdGlvbjJfcmlnaHRCdG5fXzNQbWd6XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiZm9vdGVyX3dyYXBwZXJfXzJkbFZYXCIsXG5cdFwiY29udFwiOiBcImZvb3Rlcl9jb250X18yMVVzR1wiLFxuXHRcInJvd1wiOiBcImZvb3Rlcl9yb3dfXzF3R3NjXCIsXG5cdFwibG9nb1wiOiBcImZvb3Rlcl9sb2dvX18xMlRfMFwiLFxuXHRcInRpdGxlXCI6IFwiZm9vdGVyX3RpdGxlX19ORXluTlwiLFxuXHRcInRleHRcIjogXCJmb290ZXJfdGV4dF9fM0ZvMk5cIixcblx0XCJudW1cIjogXCJmb290ZXJfbnVtX19rYnkyZlwiLFxuXHRcImVtYWlsXCI6IFwiZm9vdGVyX2VtYWlsX19yOURMc1wiLFxuXHRcImNlbnRlclwiOiBcImZvb3Rlcl9jZW50ZXJfXzJTMWxTXCIsXG5cdFwiaW5cIjogXCJmb290ZXJfaW5fX0ZPeVJzXCIsXG5cdFwiYm94XCI6IFwiZm9vdGVyX2JveF9faG01NUNcIixcblx0XCJpbWdXclwiOiBcImZvb3Rlcl9pbWdXcl9fMmltT3JcIixcblx0XCJpbWdcIjogXCJmb290ZXJfaW1nX18xZnh6WFwiLFxuXHRcIm5lXCI6IFwiZm9vdGVyX25lX18xaHRaMVwiLFxuXHRcInRpdGxlMVwiOiBcImZvb3Rlcl90aXRsZTFfXzJBQkVoXCIsXG5cdFwidGV4dDFcIjogXCJmb290ZXJfdGV4dDFfXzFXbUpHXCIsXG5cdFwiZGF0ZVwiOiBcImZvb3Rlcl9kYXRlX18yWVFFUFwiLFxuXHRcIndyXCI6IFwiZm9vdGVyX3dyX18ybzRtU1wiLFxuXHRcImxpbmtcIjogXCJmb290ZXJfbGlua19fM2dQRXZcIixcblx0XCJsaW5rc1wiOiBcImZvb3Rlcl9saW5rc19fOWZlRktcIixcblx0XCJwaG9uZU51bWJlclwiOiBcImZvb3Rlcl9waG9uZU51bWJlcl9fMndoSThcIixcblx0XCJ0ZXh0MlwiOiBcImZvb3Rlcl90ZXh0Ml9fMVlMMTVcIixcblx0XCJidXR0b25cIjogXCJmb290ZXJfYnV0dG9uX18xOWJfZlwiLFxuXHRcImlucHV0XCI6IFwiZm9vdGVyX2lucHV0X18zVnlwV1wiLFxuXHRcInRyXCI6IFwiZm9vdGVyX3RyX18xV0RpOFwiLFxuXHRcImljb25cIjogXCJmb290ZXJfaWNvbl9fMzR5UXBcIixcblx0XCJidGV4dFwiOiBcImZvb3Rlcl9idGV4dF9fSHVNajJcIixcblx0XCJyb3dGb3VyXCI6IFwiZm9vdGVyX3Jvd0ZvdXJfXzFxUU5JXCIsXG5cdFwiYWJzXCI6IFwiZm9vdGVyX2Fic19fM2JWc09cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJjb250YWN0X3dyYXBwZXJfXzNTTy1JXCIsXG5cdFwibGVmdFwiOiBcImNvbnRhY3RfbGVmdF9fMnRqTWtcIixcblx0XCJpbkxlZnRcIjogXCJjb250YWN0X2luTGVmdF9fMl95TURcIixcblx0XCJhZHJlc3NcIjogXCJjb250YWN0X2FkcmVzc19fTEdQa0pcIixcblx0XCJjb250YWN0SWNvblwiOiBcImNvbnRhY3RfY29udGFjdEljb25fXzNhZ0hFXCIsXG5cdFwidGV4dFwiOiBcImNvbnRhY3RfdGV4dF9fM1dlZnNcIixcblx0XCJwaG9uZU51bWJlclwiOiBcImNvbnRhY3RfcGhvbmVOdW1iZXJfXzNLd3QyXCIsXG5cdFwicmlnaHRcIjogXCJjb250YWN0X3JpZ2h0X18zT0k0ZFwiLFxuXHRcImluUmlnaHRcIjogXCJjb250YWN0X2luUmlnaHRfX1h6b1Z3XCIsXG5cdFwicmlnaHRJY29uXCI6IFwiY29udGFjdF9yaWdodEljb25fXzN2MTJwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3clwiOiBcImhlYWRlcl93cl9fMS14Qk9cIixcblx0XCJ0b3BcIjogXCJoZWFkZXJfdG9wX18yVktWMVwiLFxuXHRcInRvZ1wiOiBcImhlYWRlcl90b2dfXzNXX0RqXCIsXG5cdFwiYnJhbmRcIjogXCJoZWFkZXJfYnJhbmRfXzItNnkyXCIsXG5cdFwid3JhcHBlclwiOiBcImhlYWRlcl93cmFwcGVyX18zWXBsa1wiLFxuXHRcIm5ld0JyYW5kXCI6IFwiaGVhZGVyX25ld0JyYW5kX18zQU9YYlwiLFxuXHRcImxpbmtzXCI6IFwiaGVhZGVyX2xpbmtzX18zN0o4b1wiLFxuXHRcImxpbmtcIjogXCJoZWFkZXJfbGlua19fM3NRZUFcIixcblx0XCJsaW5rOFwiOiBcImhlYWRlcl9saW5rOF9fMWFnLTNcIixcblx0XCJiYXJzXCI6IFwiaGVhZGVyX2JhcnNfXzFZSlQ3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiY29udGFjdF93cmFwcGVyX18yOHJVOFwiLFxuXHRcImNvbnRhY3RcIjogXCJjb250YWN0X2NvbnRhY3RfXzFoX3R6XCIsXG5cdFwiZm9vdGVyXCI6IFwiY29udGFjdF9mb290ZXJfXzFvcmp5XCIsXG5cdFwibGVmdFwiOiBcImNvbnRhY3RfbGVmdF9fM0xsSlFcIixcblx0XCJpbm5lclwiOiBcImNvbnRhY3RfaW5uZXJfXzJua1BwXCIsXG5cdFwidGl0bGVcIjogXCJjb250YWN0X3RpdGxlX18zRmttNVwiLFxuXHRcImh0aXRsZVwiOiBcImNvbnRhY3RfaHRpdGxlX18yUlhhNVwiLFxuXHRcImljb25cIjogXCJjb250YWN0X2ljb25fXzFmUThUXCIsXG5cdFwiaWNvbkluXCI6IFwiY29udGFjdF9pY29uSW5fXzFQWWd2XCIsXG5cdFwiYWRyZXNzXCI6IFwiY29udGFjdF9hZHJlc3NfXzJ5RzJ2XCIsXG5cdFwidGV4dFwiOiBcImNvbnRhY3RfdGV4dF9fM0JLUDVcIixcblx0XCJlbWFpbFwiOiBcImNvbnRhY3RfZW1haWxfXzJRa1BwXCIsXG5cdFwicGhvbmVOdW1iZXJcIjogXCJjb250YWN0X3Bob25lTnVtYmVyX18yRjhfalwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic2lkZWJhcl9jb250YWluZXJfXzFHVzI1XCIsXG5cdFwibGVmdFwiOiBcInNpZGViYXJfbGVmdF9fMjBMbElcIixcblx0XCJicmFuZFwiOiBcInNpZGViYXJfYnJhbmRfX05ra2dnXCIsXG5cdFwibGlua3NcIjogXCJzaWRlYmFyX2xpbmtzX18xVUpNQ1wiLFxuXHRcImxpbmtcIjogXCJzaWRlYmFyX2xpbmtfXzFDYzl2XCIsXG5cdFwiaW5uZXJcIjogXCJzaWRlYmFyX2lubmVyX18ySFlzZ1wiLFxuXHRcImFub3RoZXJcIjogXCJzaWRlYmFyX2Fub3RoZXJfXzFZM2xOXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC15YW5kZXgtbWFwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdG9yXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=