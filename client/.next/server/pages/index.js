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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/home/carusel/app.js":
/*!****************************************!*\
  !*** ./components/home/carusel/app.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_carusel_card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/carusel/card.module.scss */ "./styles/carusel/card.module.scss");
/* harmony import */ var _styles_carusel_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_carusel_card_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./components/home/carusel/card.js");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list */ "./components/home/list.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\carusel\\app.js";





function App(props) {
  const breakPoints = [{
    width: 200,
    itemsToShow: 1
  }, {
    width: 400,
    itemsToShow: 2
  }, {
    width: 700,
    itemsToShow: 3
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_carusel_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.App,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4___default.a, {
      breakPoints: breakPoints,
      disableArrowsOnEnd: false,
      children: _list__WEBPACK_IMPORTED_MODULE_5__["default"].map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_carusel_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: item.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: item.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4___default.a, {
      breakPoints: breakPoints,
      disableArrowsOnEnd: false,
      children: _list__WEBPACK_IMPORTED_MODULE_5__["default"].map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_carusel_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
          className: _styles_carusel_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.land,
          alt: "picture",
          layout: "fill",
          objectFit: "cover",
          objectPosition: "center",
          src: `/home/${item.img}.jpg`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, this)
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/home/carusel/card.js":
/*!*****************************************!*\
  !*** ./components/home/carusel/card.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/home/section9.module.scss */ "./styles/home/section9.module.scss");
/* harmony import */ var _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\carusel\\card.js";



const Card = ({
  number
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rowItem,
  children: number
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 30
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Card);

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

/***/ "./components/home/index.js":
/*!**********************************!*\
  !*** ./components/home/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _section_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-1 */ "./components/home/section-1.js");
/* harmony import */ var _section_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-2 */ "./components/home/section-2.js");
/* harmony import */ var _section_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-3 */ "./components/home/section-3.js");
/* harmony import */ var _layout_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/header/header */ "./components/layout/header/header.js");
/* harmony import */ var _layout_footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/footer/footer */ "./components/layout/footer/footer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! global/window */ "global/window");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar */ "./components/home/sidebar/sidebar.js");
/* harmony import */ var _layout_header_contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layout/header/contact */ "./components/layout/header/contact.js");
/* harmony import */ var _section_6__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./section-6 */ "./components/home/section-6.js");
/* harmony import */ var _section_4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./section-4 */ "./components/home/section-4.js");
/* harmony import */ var _section_5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./section-5 */ "./components/home/section-5.js");
/* harmony import */ var _section_8__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./section-8 */ "./components/home/section-8.js");
/* harmony import */ var _section_9__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./section-9 */ "./components/home/section-9.js");
/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sample */ "./components/home/sample.js");
/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contactUs */ "./components/home/contactUs.js");
/* harmony import */ var _carusel_app__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./carusel/app */ "./components/home/carusel/app.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\index.js";














 // import Section7 from "./section-7";






function Home() {
  const linkToTop = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  const {
    0: bool,
    1: setBool
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);

  function getPageYOffSet() {
    if (global_window__WEBPACK_IMPORTED_MODULE_10___default.a !== undefined) {
      return global_window__WEBPACK_IMPORTED_MODULE_10___default.a.pageYOffset;
    } else {
      return 0;
    }
  }

  const {
    0: offTop,
    1: setOffTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(getPageYOffSet());
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    if (global_window__WEBPACK_IMPORTED_MODULE_10___default.a !== undefined) {
      global_window__WEBPACK_IMPORTED_MODULE_10___default.a.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (global_window__WEBPACK_IMPORTED_MODULE_10___default.a !== undefined) {
        global_window__WEBPACK_IMPORTED_MODULE_10___default.a.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  function handleScroll() {
    setOffTop(getPageYOffSet);
  }

  const onScrollToTop = () => {
    linkToTop.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      bool1: bool,
      onPress1: setBool
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "top",
      ref: linkToTop
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_header_contact__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_header_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onPress1: setBool,
      bool1: bool
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_section_1__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_section_2__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_section_3__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_section_6__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_section_5__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_section_9__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contactUs__WEBPACK_IMPORTED_MODULE_19__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_section_8__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_footer_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: onScrollToTop,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.scroll,
      style: {
        display: `${offTop > 400 ? "flex" : "none"}`
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faArrowUp"],
        className: "icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 14
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/home/list.js":
/*!*********************************!*\
  !*** ./components/home/list.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  title: "OPERATIONS",
  text: "We provide 24/7 support for " + "our clients and drivers along " + "with real time location service " + "for all loads.  Transparent dispatching" + " with rate confirmations on every load" + " – we have nothing to hide, Owner" + " Operator gets paid percentage from" + " full gross pay",
  img: "logo1"
}, {
  id: 2,
  text: "Full safety team: compliance tracking," + " paperwork reviews and preparations," + " on the road support. Ticket and violation " + "removal support. DOT violation challenges" + " by experienced staff. Usage of company’s" + " IFTA stickers and legal reporting.",
  title: "SAFETY",
  img: "logo2"
}, {
  id: 3,
  text: "With our maintenance support team" + " drivers can be sure that all equipment" + " is on time maintained and any breakdown" + " can be solved without delay. Our outstanding" + "  communication always leave our clients " + "satisfied with on time delivery.",
  title: "MAINTENANCE",
  img: "logo3"
}, {
  id: 4,
  // icon:<FaAppleAlt/>,
  text: "We keep our business as clear as possible, that's why we share Rate Confirmations with our Owner Operators!\n" + "\n" + "No forced dispatch.\n" + "\n" + "No touch freight.\n" + "\n" + "Owner/Ops get 88% pay from GROSS.\n" + "\n" + "All our dispatchers speak Russian as well.",
  title: "WE TREAT OUR EMPLOYEES AS FAMILY",
  img: "logo4"
}]);

/***/ }),

/***/ "./components/home/listSection3.js":
/*!*****************************************!*\
  !*** ./components/home/listSection3.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\listSection3.js";

/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaDonate"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 15
  }, undefined),
  title: "Best Earnings",
  text: "Our experienced dispatchers will keep you busy with constant loads and best rates on the market!",
  readMore: "Read More",
  readMoreIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaArrowRight"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 23
  }, undefined)
}, {
  id: 2,
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaMoneyBillWave"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 15
  }, undefined),
  title: "Benefits",
  text: "We pay for all miles loaded or empty, with $50 for extra stops and non-vilolation bonus making up $360.",
  readMore: "Read More",
  readMoreIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaArrowRight"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 23
  }, undefined)
}, {
  id: 3,
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaHandHoldingUsd"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 15
  }, undefined),
  title: "Lease Program",
  text: "Truck lease programs are one of the main ways a company driver can take the next step in their career...",
  readMore: "Read More",
  readMoreIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaArrowRight"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 23
  }, undefined)
}]);

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

/***/ "./components/home/sample.js":
/*!***********************************!*\
  !*** ./components/home/sample.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_home_sensor_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/home/sensor.module.scss */ "./styles/home/sensor.module.scss");
/* harmony import */ var _styles_home_sensor_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_home_sensor_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\sample.js";




function Sample(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: ({
      isVisible
    }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `${_styles_home_sensor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link} ${isVisible ? _styles_home_sensor_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.another : ""}`,
      style: {
        transform: isVisible ? "translateX(400px)" : "translateX(100px)"
      },
      children: ["I am ", isVisible ? 'visible' : 'invisible']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Sample);

/***/ }),

/***/ "./components/home/section-1.js":
/*!**************************************!*\
  !*** ./components/home/section-1.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/home/section1.module.scss */ "./styles/home/section1.module.scss");
/* harmony import */ var _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\section-1.js";




function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
    id: "section-1",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.overlay,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
            children: "We deliver real value, more loads on time."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: "The leading company your can trust."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.outerBtn,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/drivers",
                className: _styles_home_section1_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnText,
                children: "Become a driver"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/home/section-2.js":
/*!**************************************!*\
  !*** ./components/home/section-2.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/home/section2.module.scss */ "./styles/home/section2.module.scss");
/* harmony import */ var _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_vectorIcons_cargoTruck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/vectorIcons/cargoTruck */ "./public/vectorIcons/cargoTruck.jsx");
/* harmony import */ var _public_vectorIcons_callCenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/vectorIcons/callCenter */ "./public/vectorIcons/callCenter.jsx");
/* harmony import */ var _public_vectorIcons_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/vectorIcons/badge */ "./public/vectorIcons/badge.jsx");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\section-2.js";










function Section2(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
    id: "section-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partOne,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_cargoTruck__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerTitle,
            children: "48 States Mainland"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerText,
            children: "We run all over the US, coast to coast, north to south over dedicated lane."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_callCenter__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerTitle,
            children: "24/7 Service"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerText,
            children: "24/7 Multilingual Dispatch Service is only one phone call away."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_vectorIcons_badge__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerTitle,
            children: "Reliability"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerText,
            children: "As truckers ourselves, we know how important it is to get paid on time."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partTwo,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inDisplay,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.left,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box1,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cover1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 23
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cover2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 23
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cover3,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.boxTitle,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_countup__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  end: 12,
                  prefix: "Over ",
                  suffix: "K+",
                  redraw: true,
                  duration: 2,
                  className: "count",
                  children: ({
                    countUpRef,
                    start
                  }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9___default.a, {
                    onChange: start,
                    delayedCall: true,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      ref: countUpRef
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 47
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 43
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 35
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 31
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.boxText,
                children: "Completed shipments"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 31
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 23
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerRight,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grayTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 27
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightTitle,
              children: " Our Commitment to Drivers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 27
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightText1,
              children: "We recognize the daily sacrifices of the men and women working tirelessly to provide for both our families and theirs. Our team is committed to providing easier loads, opportunity, tools and professional dispatch services."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 27
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightText2,
              children: "We will assist our drivers to plan their day from a trip planner with GPS navigation, to parking, weather and more..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 27
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.checkboxTexts,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inDisplayCheck,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.checkIcon,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 39
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 35
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.checkText,
                  children: "Driver NO touch loads"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 35
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 31
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inDisplayCheck,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.checkIcon,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 39
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 35
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.checkText,
                  children: "Drop and Hook loads"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 35
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 31
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inDisplayCheck,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.checkIcon,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 39
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 35
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section2_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.checkText,
                  children: "Newer trucks 2018 and up"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 35
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 31
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 27
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 23
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Section2);

/***/ }),

/***/ "./components/home/section-3.js":
/*!**************************************!*\
  !*** ./components/home/section-3.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section3; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/home/section3.module.scss */ "./styles/home/section3.module.scss");
/* harmony import */ var _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _carusel_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carusel/app */ "./components/home/carusel/app.js");
/* harmony import */ var _listSection3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listSection3 */ "./components/home/listSection3.js");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\section-3.js";







function Section3() {
  const breakPoints = [{
    width: 350,
    itemsToShow: 1
  }, {
    width: 450,
    itemsToShow: 2
  }, {
    width: 700,
    itemsToShow: 3
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wr,
    id: "section-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.overlay,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.innerOverlay,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inDisplay,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.left,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.grayTitle,
                children: "THE LEADING FRIGHT COMPANY"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.leftTitle,
                children: ["Provide 100% customer and", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: " driver satisfaction."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 30
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.leftText,
                children: " We understand customers value service, transparency, and results. By building a strong team of knowledgeable individuals that are passionate about moving your freight we are able to foster relationships with our established carrier base."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
                breakPoints: breakPoints,
                disableArrowsOnEnd: false,
                className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.carusel,
                children: _listSection3__WEBPACK_IMPORTED_MODULE_6__["default"].map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.caruselItem,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.caruselIcon,
                    children: item.icon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.caruselTitle,
                    children: item.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section3_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.caruselText,
                    children: item.text
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 45
                  }, this)]
                }, item.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 41
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/home/section-4.js":
/*!**************************************!*\
  !*** ./components/home/section-4.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/home/section4.module.scss */ "./styles/home/section4.module.scss");
/* harmony import */ var _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\section-4.js";







function Section4(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wr,
    id: "section-4",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partTwo,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.boldTitle,
          children: "Why DTM Trucking INC?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHandHoldingUsd"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerTitle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_countup__WEBPACK_IMPORTED_MODULE_5___default.a, {
              end: 350,
              suffix: "$",
              redraw: true,
              duration: 4,
              children: ({
                countUpRef,
                start
              }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_6___default.a, {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  ref: countUpRef
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerText,
            children: "Safety Bonus"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTruckMoving"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerTitle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_countup__WEBPACK_IMPORTED_MODULE_5___default.a, {
              end: 264,
              suffix: "+",
              redraw: true,
              duration: 3.8,
              children: ({
                countUpRef,
                start
              }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_6___default.a, {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  ref: countUpRef
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerText,
            children: "Trucks"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPeopleArrows"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerTitle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_countup__WEBPACK_IMPORTED_MODULE_5___default.a, {
              end: 185,
              suffix: "+",
              redraw: true,
              duration: 3.4,
              children: ({
                countUpRef,
                start
              }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_6___default.a, {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  ref: countUpRef
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerText,
            children: "Drivers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerIcon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGlobe"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerTitle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_countup__WEBPACK_IMPORTED_MODULE_5___default.a, {
              end: 40,
              suffix: "+",
              redraw: true,
              duration: 2.6,
              children: ({
                countUpRef,
                start
              }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_6___default.a, {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  ref: countUpRef
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section4_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerText,
            children: "Countries"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Section4);

/***/ }),

/***/ "./components/home/section-5.js":
/*!**************************************!*\
  !*** ./components/home/section-5.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/home/section5.module.scss */ "./styles/home/section5.module.scss");
/* harmony import */ var _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\section-5.js";



function Section5(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wr,
    id: "section-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.overlay,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mTitle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.boldTitle,
            children: " From our Drivers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inGrid,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridCircle,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerCircle1,
                  children: "\u275D"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridText,
                children: "They're just driver-friendly. Whenever you have a problem or suggestion, they're open-minded and they'll listen to you and try to help you find a solution.\" "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.line
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridTitle,
                children: "Mohamed Digale"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridTitle2,
                children: "Truck Driver"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridCircle,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerCircle2,
                  children: "\u275D"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridText,
                children: "\"It's a great company and it's growing. I believe that if you want to start somewhere and grow with a company, DTM Trucking would be a great company for you.\""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.line
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridTitle,
                children: "Keith Moore"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridTitle2,
                children: "Truck Driver"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridCircle,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerCircle3,
                  children: "\u275D"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridText,
                children: "\"The best part about driving for DTM is the family atmosphere and the way you get treated. It's a good job driving for DTM and I feel like I'm part of the family.\""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.line
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridTitle,
                children: "David Crenshaw"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section5_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridTitle2,
                children: "Truck Driver"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
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

/* harmony default export */ __webpack_exports__["default"] = (Section5);

/***/ }),

/***/ "./components/home/section-6.js":
/*!**************************************!*\
  !*** ./components/home/section-6.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/home/section6.module.scss */ "./styles/home/section6.module.scss");
/* harmony import */ var _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_vectorIcons_cargoTruck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/vectorIcons/cargoTruck */ "./public/vectorIcons/cargoTruck.jsx");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list */ "./components/home/list.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\section-6.js";








function Section6(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wr,
    id: "section-6",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partTwo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inPartTwo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partTwoTitle,
            children: "WHY DTM TRUCKING INC?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inDisplay,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partTwoImg,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inPartTwoImg,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faClock"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwo,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwoTitle,
                    children: "OPERATIONS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwoText,
                    children: "We provide 24/7 support for our clients and drivers along with real time location service for all loads.  Transparent dispatching with rate confirmations on every load \u2013 we have nothing to hide, Owner Operator gets paid percentage from full gross pay"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inDisplay,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partTwoImg,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inPartTwoImg,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faShieldAlt"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwo,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwoTitle,
                    children: "SAFETY"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwoText,
                    children: "Full safety team: compliance tracking, paperwork reviews and preparations, on the road support. Ticket and violation removal support. DOT violation challenges by experienced staff. Usage of company\u2019s IFTA stickers and legal reporting."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inDisplay,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partTwoImg,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inPartTwoImg,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faRunning"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwo,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwoTitle,
                    children: "MAINTENANCE"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwoText,
                    children: "With our maintenance support team drivers can be sure that all equipment is on time maintained and any breakdown can be solved without delay. Our outstanding  communication always leave our clients satisfied with on time delivery."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inDisplay,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partTwoImg,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inPartTwoImg,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwo,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwoTitle,
                    children: "WE TREAT OUR EMPLOYEES AS FAMILY"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightPartTwoText,
                    children: "We keep our business as clear as possible, that's why we share Rate Confirmations with our Owner Operators! No forced dispatch. No touch freight. Owner/Ops get 88% pay from GROSS. All our dispatchers speak Russian as well."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnPartTwo,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inPartTwoBtn,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/quote",
                className: _styles_home_section6_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnText,
                children: "Apply"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Section6);

/***/ }),

/***/ "./components/home/section-8.js":
/*!**************************************!*\
  !*** ./components/home/section-8.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/home/section8.module.scss */ "./styles/home/section8.module.scss");
/* harmony import */ var _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_vectorIcons_cargoTruck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/vectorIcons/cargoTruck */ "./public/vectorIcons/cargoTruck.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\section-8.js";







function Section8(props) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://localhost:3000/news/all').then(response => setData(response.data.ddd)).catch(e => console.log(e));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wr,
    id: "section-8",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mainTitle,
          children: "From Our Blog!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inGrid,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
          children: data !== undefined ? data.map((i, k) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridItem,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridImg1,
                style: {
                  backgroundImage: `url(${i.image})`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridTitle,
                children: i.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridText,
                children: [i.description, " ... "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridBtn,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/blogs",
                  className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnText,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.readMore,
                    children: "Read More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 49
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_section8_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.readMoreIcon,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowRight"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 41
              }, this)]
            }, k, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 37
            }, this);
          }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "no results"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 32
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Section8);

/***/ }),

/***/ "./components/home/section-9.js":
/*!**************************************!*\
  !*** ./components/home/section-9.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section9; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/home/section9.module.scss */ "./styles/home/section9.module.scss");
/* harmony import */ var _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ "./components/home/list.js");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\home\\section-9.js";




function Section9() {
  const img1 = {
    width: "100%",
    backgroundImage: `url('./section9.jpg')`,
    height: "130vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    paddingTop: "1px",
    marginTop: "-1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  };
  const breakPoints = [{
    width: 200,
    itemsToShow: 1
  }, {
    width: 400,
    itemsToShow: 2
  }, {
    width: 700,
    itemsToShow: 3
  }, {
    width: 900,
    itemsToShow: 4
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wr,
    id: "section-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.overlay,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.projects,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mTitle,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Our"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, this), " Partners"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.line
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_4___default.a, {
          breakPoints: breakPoints,
          itemPadding: [20, 20],
          pagination: false,
          showArrows: false,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowItem2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowItem3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowItem4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowItem5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowItem6
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowItem7
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_section9_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowItem8
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

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

/***/ "./components/layout/footer/footer.js":
/*!********************************************!*\
  !*** ./components/layout/footer/footer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/footer/footer.module.scss */ "./styles/footer/footer.module.scss");
/* harmony import */ var _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\layout\\footer\\footer.js";






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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            to: "section-1",
            spy: true,
            smooth: true,
            offset: 0,
            duration: 500,
            delay: 100,
            isDynamic: true,
            ignoreCancelEvents: false,
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 60
              }, this), "  Home"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            to: "section-2",
            spy: true,
            smooth: true,
            offset: 235,
            duration: 500,
            delay: 100,
            isDynamic: true,
            ignoreCancelEvents: false,
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 60
              }, this), "  About us"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            to: "section-3",
            spy: true,
            smooth: true,
            offset: -100,
            duration: 500,
            delay: 100,
            isDynamic: true,
            ignoreCancelEvents: false,
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 60
              }, this), "  Services"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            to: "section-6",
            spy: true,
            smooth: true,
            offset: -80,
            duration: 500,
            delay: 100,
            isDynamic: true,
            ignoreCancelEvents: false,
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 60
              }, this), "  Why DTM"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            activeClass: "active",
            to: "section-8",
            spy: true,
            smooth: true,
            offset: 0,
            duration: 500,
            delay: 100,
            isDynamic: true,
            ignoreCancelEvents: false,
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 60
              }, this), "  Blog"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
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
          lineNumber: 165,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wr,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: "Chicago, IL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: "Philadelphia, PA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: "Edison, NJ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Telephone:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 28
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.phoneNumber,
              href: "tel:+17733092111",
              children: "+1 773 309 2111"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 52
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
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
                lineNumber: 185,
                columnNumber: 31
              }, this), "  info@dtmtrucking.com"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.row,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_footer_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rowFour
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
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
      lineNumber: 196,
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

/***/ "./components/layout/header/header.js":
/*!********************************************!*\
  !*** ./components/layout/header/header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/header/header.module.scss */ "./styles/header/header.module.scss");
/* harmony import */ var _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\components\\layout\\header\\header.js";





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
      lineNumber: 41,
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
            lineNumber: 45,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          activeClass: "active",
          to: "section-1",
          spy: true,
          smooth: true,
          className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'home' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
          offset: 0,
          duration: 500,
          delay: 100,
          isDynamic: true,
          onSetActive: () => setLink('home'),
          ignoreCancelEvents: false,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.brand, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.newBrand : ''].join(' ')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.links,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            to: "section-1",
            spy: true,
            smooth: true,
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'home' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            offset: 0,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('home'),
            ignoreCancelEvents: false,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "  HOME"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 24
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            to: "section-2",
            spy: true,
            smooth: true,
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'services' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            offset: 240,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('about'),
            ignoreCancelEvents: false,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ""].join(' '),
              children: "ABOUT US"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            to: "section-3",
            spy: true,
            smooth: true,
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'services' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            offset: -40,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('services'),
            ignoreCancelEvents: false,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ""].join(' '),
              children: "SERVICES"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            to: "section-6",
            spy: true,
            smooth: true,
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'whyDtm' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            offset: -80,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('whyDtm'),
            ignoreCancelEvents: false,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "WHY DTM?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/drivers",
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'forDrivers' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "FOR DRIVERS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 32
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            to: "section-7",
            spy: true,
            smooth: true,
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            offset: -150,
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
              lineNumber: 145,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            to: "section-8",
            spy: true,
            smooth: true,
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Contact' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            offset: 0,
            duration: 500,
            delay: 100,
            isDynamic: true,
            onSetActive: () => setLink('Contact'),
            ignoreCancelEvents: false,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "BLOG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/quote",
            className: `${_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link} ${link === 'Team' ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.another : ""}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: [_styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link8, isScroll ? _styles_header_header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.top : ''].join(' '),
              children: "GET A QUOTE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home */ "./components/home/index.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\pages\\index.js";

function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_home__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./public/vectorIcons/badge.jsx":
/*!**************************************!*\
  !*** ./public/vectorIcons/badge.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\public\\vectorIcons\\badge.jsx";


function Badge(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      fill: "#CD241D",
      height: "60px",
      viewBox: "-63 0 512 512.00203",
      width: "60px",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m155.703125 409.210938c-12.878906 4.089843-26.882813 3.871093-39.746094-.808594-12.863281-4.683594-23.726562-13.515625-30.964843-24.925782-13.503907-.5625-26.585938-5.558593-37.070313-14.355468-1.324219-1.109375-2.597656-2.273438-3.8125-3.484375l-33.445313 69.992187c-2.511718 5.253906-1.796874 11.480469 1.835938 16.03125 3.632812 4.550782 9.546875 6.625 15.230469 5.335938l67.039062-15.203125 30.285157 61.710937c2.554687 5.203125 7.847656 8.5 13.636718 8.5h.082032c5.824218-.03125 11.117187-3.390625 13.625-8.644531l38.878906-81.359375c-12.953125-.433594-25.40625-4.953125-35.574219-12.789062zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 125
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m338.734375 369.121094c-10.484375 8.796875-23.570313 13.789062-37.070313 14.351562-7.238281 11.414063-18.105468 20.246094-30.96875 24.925782-12.859374 4.683593-26.863281 4.902343-39.742187.8125-10.167969 7.835937-22.621094 12.355468-35.574219 12.789062l38.875 81.359375c2.511719 5.253906 7.804688 8.609375 13.628906 8.640625h.078126c5.792968 0 11.082031-3.292969 13.636718-8.496094l30.289063-61.710937 67.039062 15.199219c5.679688 1.292968 11.59375-.78125 15.226563-5.332032 3.636718-4.550781 4.347656-10.777344 1.839844-16.03125l-33.449219-69.992187c-1.214844 1.210937-2.484375 2.371093-3.808594 3.484375zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 737
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m380.027344 186.480469c5.445312-6.972657 7.6875-15.960938 6.15625-24.65625-1.535156-8.695313-6.714844-16.375-14.214844-21.066407-5.910156-3.695312-8.550781-10.9375-6.394531-17.570312 2.730469-8.414062 1.765625-17.625-2.652344-25.273438-4.414063-7.648437-11.910156-13.089843-20.5625-14.933593-6.816406-1.449219-11.773437-7.355469-12.019531-14.320313-.3125-8.84375-4.371094-17.167968-11.132813-22.84375-6.765625-5.679687-15.667969-8.226562-24.433593-7-6.898438.972656-13.578126-2.886718-16.191407-9.347656-3.316406-8.203125-9.976562-14.640625-18.277343-17.660156-8.296876-3.019532-17.539063-2.371094-25.347657 1.78125-6.15625 3.269531-13.75 1.929687-18.417969-3.25-5.917968-6.570313-14.378906-10.339844-23.210937-10.339844s-17.292969 3.769531-23.210937 10.339844c-4.667969 5.179687-12.261719 6.519531-18.417969 3.25-7.808594-4.152344-17.050781-4.800782-25.347657-1.78125-8.300781 3.019531-14.960937 9.457031-18.277343 17.660156-2.613281 6.460938-9.289063 10.320312-16.191407 9.347656-8.761718-1.226562-17.667968 1.320313-24.433593 7-6.765625 5.675782-10.820313 14-11.132813 22.84375-.246094 6.964844-5.199218 12.871094-12.019531 14.324219-8.652344 1.839844-16.148437 7.28125-20.5625 14.929687-4.417969 7.648438-5.382813 16.859376-2.652344 25.273438 2.152344 6.632812-.484375 13.875-6.394531 17.574219-7.5 4.6875-12.679688 12.367187-14.214844 21.0625-1.53125 8.699219.710938 17.683593 6.15625 24.660156 4.289063 5.492187 4.289063 13.203125 0 18.695313-5.445312 6.972656-7.6875 15.960937-6.15625 24.65625 1.535156 8.699218 6.714844 16.375 14.214844 21.066406 5.910156 3.695312 8.550781 10.9375 6.398438 17.570312-2.734376 8.414063-1.765626 17.625 2.648437 25.273438 4.417969 7.648437 11.910156 13.089844 20.5625 14.933594 6.820313 1.449218 11.773437 7.355468 12.019531 14.324218.3125 8.839844 4.371094 17.167969 11.136719 22.84375 6.765625 5.675782 15.671875 8.226563 24.429687 6.996094 6.902344-.964844 13.578126 2.886719 16.191407 9.351562 3.316406 8.199219 9.980469 14.636719 18.277343 17.65625 8.300782 3.019532 17.539063 2.371094 25.351563-1.777343 2.25-1.199219 4.699219-1.777344 7.121094-1.777344 4.199219 0 8.332031 1.738281 11.292969 5.023437 5.921874 6.574219 14.382812 10.339844 23.210937 10.339844 8.832031 0 17.292969-3.769531 23.214844-10.339844 4.664062-5.179687 12.257812-6.515624 18.414062-3.246093 7.8125 4.152343 17.050781 4.796875 25.351563 1.777343 8.296875-3.019531 14.957031-9.457031 18.273437-17.65625 2.613281-6.464843 9.292969-10.320312 16.195313-9.351562 8.757812 1.226562 17.664062-1.320312 24.429687-6.996094 6.765625-5.675781 10.824219-14.003906 11.136719-22.84375.242188-6.96875 5.199219-12.871094 12.015625-14.324218 8.652344-1.84375 16.148437-7.285157 20.566406-14.933594 4.414063-7.648438 5.378907-16.859375 2.648438-25.273438-2.152344-6.628906.484375-13.875 6.394531-17.570312 7.503906-4.691406 12.683594-12.367188 14.21875-21.0625 1.53125-8.699219-.710938-17.683594-6.15625-24.660156-4.292969-5.496094-4.292969-13.203126-.003906-18.699219zm-186.699219 142.457031c-73.394531 0-133.109375-59.710938-133.109375-133.105469 0-73.398437 59.714844-133.109375 133.109375-133.109375s133.105469 59.710938 133.105469 133.109375c0 73.394531-59.710938 133.105469-133.105469 133.105469zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 1359
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m193.328125 93.105469c-56.644531 0-102.726563 46.082031-102.726563 102.726562 0 56.640625 46.082032 102.722657 102.726563 102.722657s102.722656-46.082032 102.722656-102.722657c0-56.644531-46.082031-102.726562-102.722656-102.726562zm-64.164063 83.882812c5.933594-5.933593 15.550782-5.933593 21.484376 0l30.273437 30.273438 55.085937-55.085938c5.933594-5.933593 15.550782-5.933593 21.484376 0 5.933593 5.929688 5.933593 15.550781 0 21.480469l-65.828126 65.832031c-2.847656 2.847657-6.714843 4.449219-10.742187 4.449219s-7.890625-1.601562-10.742187-4.449219l-41.011719-41.015625c-5.9375-5.933594-5.9375-15.550781-.003907-21.484375zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 4579
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./public/vectorIcons/callCenter.jsx":
/*!*******************************************!*\
  !*** ./public/vectorIcons/callCenter.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\public\\vectorIcons\\callCenter.jsx";


function CallCenter(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      fill: "#CD241D",
      height: "80px",
      viewBox: "-48 0 512 512",
      width: "80px",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m301 335.546875v.789063c0 51.390624-41.808594 93.199218-93.199219 93.199218s-93.199219-41.808594-93.199219-93.199218v-.789063c-68.652343 23.980469-114.601562 88.542969-114.601562 161.453125 0 8.285156 6.714844 15 15 15h385.601562c8.28125 0 15-6.722656 15-15.007812 0-72.902344-45.949218-137.460938-114.601562-161.445313zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 119
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m144.601562 336.050781v.285157c0 34.847656 28.351563 63.199218 63.199219 63.199218 34.847657 0 63.199219-28.351562 63.199219-63.199218v-.390626c-19.355469 8.515626-40.734375 13.253907-63.199219 13.253907-22.117187 0-43.535156-4.535157-63.199219-13.148438zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 455
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m395.265625 175.667969v-32.132813c0-12.589844-4.902344-24.425781-13.796875-33.320312-4.6875-4.691406-10.203125-8.242188-16.203125-10.578125v119.949219c6.003906-2.332032 11.511719-5.902344 16.195313-10.589844 8.902343-8.902344 13.804687-20.738282 13.804687-33.328125zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 726
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m159.601562 64.265625c6.953126 0 12.953126 4.78125 14.574219 11.460937 7.816407 31.09375 35.652344 52.804688 67.726563 52.804688h93.363281v-33.214844c0-52.558594-42.757813-95.316406-95.316406-95.316406h-64.300781c-52.554688 0-95.316407 42.757812-95.316407 95.316406v6.8125l72.558594-36.277344c2.082031-1.042968 4.378906-1.585937 6.710937-1.585937zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 1008
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m207.800781 319.199219c70.285157 0 127.464844-57.179688 127.464844-127.464844v-33.203125h-93.363281c-39.65625 0-74.785156-23.21875-90.78125-58.253906l-70.789063 35.394531v56.078125c0 34.042969 13.257813 66.046875 37.332031 90.121094 24.074219 24.070312 56.078126 37.328125 90.136719 37.328125zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 1371
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "m80.332031 319.199219c8.285157 0 15-6.714844 15-15 0-8.285157-6.714843-15-15-15-15.980469 0-30-23.019531-30-49.265625v-140.296875c-6 2.335937-11.515625 5.886719-16.199219 10.578125-8.898437 8.894531-13.800781 20.726562-13.800781 33.316406v96.402344c0 20.214844 5.644531 39.410156 15.894531 54.046875 11.222657 16.027343 27.296876 25.21875 44.105469 25.21875zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 1680
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CallCenter);

/***/ }),

/***/ "./public/vectorIcons/cargoTruck.jsx":
/*!*******************************************!*\
  !*** ./public/vectorIcons/cargoTruck.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\dtmFinal\\client\\public\\vectorIcons\\cargoTruck.jsx";


function CargoTruck(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      version: "1.1",
      id: "Capa_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      fill: "#CD241D",
      viewBox: "0 0 612 612",
      height: "80",
      width: "80",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M504.9,395.756c-28.684,0-52.02,23.342-52.02,52.02c0,28.684,23.336,52.02,52.02,52.02c28.678,0,52.02-23.336,52.02-52.02\r C556.92,419.098,533.578,395.756,504.9,395.756z M504.9,463.076c-8.439,0-15.3-6.861-15.3-15.3c0-8.439,6.861-15.3,15.3-15.3\r s15.3,6.861,15.3,15.3C520.2,456.215,513.339,463.076,504.9,463.076z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M499.918,179.518H410.04c-6.763,0-12.24,5.484-12.24,12.24v238.68c0,6.756,5.477,12.24,12.24,12.24h12.981\r c6.059,0,11.426-4.364,12.209-10.373c4.804-36.806,34.162-59.633,69.676-59.633s64.872,22.828,69.676,59.633\r c0.783,6.01,6.144,10.373,12.209,10.373h12.968c6.756,0,12.24-5.484,12.24-12.24v-119.34c0-2.876-1.01-5.655-2.852-7.852\r l-99.842-119.34C506.981,181.128,503.541,179.518,499.918,179.518z M422.28,277.438v-61.2c0-6.756,5.477-12.24,12.24-12.24h53.917\r c3.629,0,7.075,1.616,9.4,4.406l50.998,61.2c6.64,7.974,0.973,20.074-9.406,20.074H434.52\r C427.757,289.678,422.28,284.201,422.28,277.438z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M12.24,442.684h31.341c6.059,0,11.426-4.364,12.209-10.373c4.804-36.806,34.162-59.633,69.676-59.633\r s64.872,22.828,69.676,59.633c0.783,6.01,6.144,10.373,12.209,10.373H361.08c6.757,0,12.24-5.484,12.24-12.24v-306\r c0-6.756-5.484-12.24-12.24-12.24H12.24c-6.763,0-12.24,5.484-12.24,12.24v306C0,437.201,5.477,442.684,12.24,442.684z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M125.46,395.756c-28.684,0-52.02,23.342-52.02,52.02c0,28.684,23.336,52.02,52.02,52.02\r c28.678,0,52.02-23.336,52.02-52.02C177.48,419.098,154.138,395.756,125.46,395.756z M125.46,463.076\r c-8.439,0-15.3-6.861-15.3-15.3c0-8.439,6.861-15.3,15.3-15.3s15.3,6.861,15.3,15.3\r C140.76,456.215,133.899,463.076,125.46,463.076z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 3
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 2
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CargoTruck);

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

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"scroll": "Home_scroll__2nTEx",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "./styles/carusel/card.module.scss":
/*!*****************************************!*\
  !*** ./styles/carusel/card.module.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"App": "card_App__3bc8d",
	"card": "card_card__gZuHk"
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

/***/ "./styles/home/section1.module.scss":
/*!******************************************!*\
  !*** ./styles/home/section1.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "section1_wrapper__2-TFe",
	"overlay": "section1_overlay__313ho",
	"container": "section1_container__1LFsJ",
	"content": "section1_content__3Ll6K",
	"title": "section1_title__2oEwV",
	"mymove": "section1_mymove__3DhMX",
	"text": "section1_text__18f40",
	"mytext": "section1_mytext__eeBV7",
	"outerBtn": "section1_outerBtn__9PyJe",
	"btn": "section1_btn__1Q8Ct",
	"btnText": "section1_btnText__3s8tj"
};


/***/ }),

/***/ "./styles/home/section2.module.scss":
/*!******************************************!*\
  !*** ./styles/home/section2.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "section2_wrapper__1Y39N",
	"partOne": "section2_partOne__1t1Cq",
	"grid": "section2_grid__3yHND",
	"gridItem": "section2_gridItem__sDXG5",
	"innerIcon": "section2_innerIcon__3-iqe",
	"innerTitle": "section2_innerTitle__s8V5v",
	"innerText": "section2_innerText__1HxoH",
	"animation": "section2_animation__DAJ6o",
	"wave": "section2_wave__1oMuF",
	"partTwo": "section2_partTwo__3z2Vv",
	"inDisplay": "section2_inDisplay__1aFvF",
	"left": "section2_left__11xgu",
	"box1": "section2_box1__potVy",
	"cover1": "section2_cover1__Q2RLM",
	"box2": "section2_box2__3GFvq",
	"cover2": "section2_cover2__16BpY",
	"box3": "section2_box3__sGz0h",
	"cover3": "section2_cover3__-8Q1G",
	"boxTitle": "section2_boxTitle__cU7U1",
	"boxText": "section2_boxText__2C0_8",
	"right": "section2_right__3nyfL",
	"innerRight": "section2_innerRight__qYrKu",
	"grayTitle": "section2_grayTitle__3xahz",
	"rightTitle": "section2_rightTitle__119bP",
	"rightText1": "section2_rightText1__1TTra",
	"rightText2": "section2_rightText2__1Q0be",
	"checkboxTexts": "section2_checkboxTexts__2F9vs",
	"inDisplayCheck": "section2_inDisplayCheck__1Qg5b",
	"checkIcon": "section2_checkIcon__19RxE",
	"btn": "section2_btn__2AaZp",
	"btnDisplay": "section2_btnDisplay__2L8Ss",
	"btnText": "section2_btnText__2qupJ",
	"btnIcon": "section2_btnIcon__227co"
};


/***/ }),

/***/ "./styles/home/section3.module.scss":
/*!******************************************!*\
  !*** ./styles/home/section3.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wr": "section3_wr__3EitP",
	"overlay": "section3_overlay__1YCtH",
	"innerOverlay": "section3_innerOverlay__1AEqL",
	"inDisplay": "section3_inDisplay__8W5Zg",
	"left": "section3_left__29B5S",
	"grayTitle": "section3_grayTitle__1qzUj",
	"leftTitle": "section3_leftTitle__1qLTU",
	"leftText": "section3_leftText__1VKvi",
	"btn": "section3_btn__3WKfc",
	"btnDisplay": "section3_btnDisplay__3gTYI",
	"btnText": "section3_btnText__35Gfs",
	"btnIcon": "section3_btnIcon__ivxPp",
	"right": "section3_right__1k057",
	"carusel": "section3_carusel__1bXHq",
	"caruselItem": "section3_caruselItem__2r9Yw",
	"caruselIcon": "section3_caruselIcon__3nc24",
	"caruselTitle": "section3_caruselTitle__3xEc9",
	"caruselText": "section3_caruselText__Efii_",
	"caruselBtn": "section3_caruselBtn__d6PiA",
	"readMore": "section3_readMore__V6x-r",
	"readMoreIcon": "section3_readMoreIcon__p0koW"
};


/***/ }),

/***/ "./styles/home/section4.module.scss":
/*!******************************************!*\
  !*** ./styles/home/section4.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wr": "section4_wr__2c4z8",
	"partTwo": "section4_partTwo__3aZZ4",
	"mTitle": "section4_mTitle__j6c00",
	"grayTitle": "section4_grayTitle__CHFt2",
	"boldTitle": "section4_boldTitle__2ObBd",
	"grid": "section4_grid__2kxxG",
	"gridItem": "section4_gridItem__1CD9u",
	"innerIcon": "section4_innerIcon__21Qzf",
	"innerTitle": "section4_innerTitle__2tjR3",
	"innerText": "section4_innerText__1Bx9r"
};


/***/ }),

/***/ "./styles/home/section5.module.scss":
/*!******************************************!*\
  !*** ./styles/home/section5.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wr": "section5_wr__jEZSg",
	"overlay": "section5_overlay__3OdQw",
	"wrapper": "section5_wrapper__3kpN0",
	"mTitle": "section5_mTitle__26RBY",
	"grayTitle": "section5_grayTitle__1rF6V",
	"boldTitle": "section5_boldTitle__1cuoN",
	"inGrid": "section5_inGrid__OtZUy",
	"grid": "section5_grid__6Deuc",
	"gridItem": "section5_gridItem__1zkBK",
	"gridCircle": "section5_gridCircle__3Umjo",
	"innerCircle1": "section5_innerCircle1__17Ir8",
	"innerCircle2": "section5_innerCircle2__aoPxN",
	"innerCircle3": "section5_innerCircle3__2Q3GC",
	"gridTitle": "section5_gridTitle__1H76m",
	"gridTitle2": "section5_gridTitle2__37mmS",
	"line": "section5_line__1abrx",
	"gridText": "section5_gridText__3ZZkc",
	"gridBtn": "section5_gridBtn__jFIZF",
	"readMore": "section5_readMore__oL3GA",
	"readMoreIcon": "section5_readMoreIcon__3MCgY"
};


/***/ }),

/***/ "./styles/home/section6.module.scss":
/*!******************************************!*\
  !*** ./styles/home/section6.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wr": "section6_wr__3xHWX",
	"wrapper": "section6_wrapper__3bjoT",
	"top": "section6_top__3-4_R",
	"img": "section6_img__9Sl2_",
	"right": "section6_right__2jbi_",
	"rightDisplay": "section6_rightDisplay__1pyaR",
	"rightTitle": "section6_rightTitle__1Lca4",
	"rightText": "section6_rightText__JWUFQ",
	"btn": "section6_btn__3b2qs",
	"btnDisplay": "section6_btnDisplay__1HjbO",
	"btnText": "section6_btnText__3Wv1c",
	"btnIcon": "section6_btnIcon__3nGy-",
	"partTwo": "section6_partTwo__1BZkS",
	"inPartTwo": "section6_inPartTwo__3j_-g",
	"partTwoTitle": "section6_partTwoTitle__3tqvJ",
	"grid": "section6_grid__3CsDT",
	"gridItem": "section6_gridItem__3JM4a",
	"inDisplay": "section6_inDisplay__1It-M",
	"partTwoImg": "section6_partTwoImg__2_dhH",
	"inPartTwoImg": "section6_inPartTwoImg__b7WJp",
	"rightPartTwo": "section6_rightPartTwo__3KGnp",
	"rightPartTwoTitle": "section6_rightPartTwoTitle__3i0wV",
	"rightPartTwoText": "section6_rightPartTwoText__3UBB0",
	"btnPartTwo": "section6_btnPartTwo__3tIwx",
	"inPartTwoBtn": "section6_inPartTwoBtn__31CkV"
};


/***/ }),

/***/ "./styles/home/section8.module.scss":
/*!******************************************!*\
  !*** ./styles/home/section8.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wr": "section8_wr__yQefW",
	"wrapper": "section8_wrapper__1H81R",
	"mTitle": "section8_mTitle__3asCv",
	"grayTitle": "section8_grayTitle__yR3Lo",
	"mainTitle": "section8_mainTitle__3t4oH",
	"boldTitle": "section8_boldTitle__PXOmV",
	"inGrid": "section8_inGrid__2Sg5u",
	"grid": "section8_grid__3mISe",
	"gridItem": "section8_gridItem__-D2Ba",
	"gridImg1": "section8_gridImg1__2sMKU",
	"gridImg2": "section8_gridImg2__ZA8hL",
	"gridImg3": "section8_gridImg3__1Gjsn",
	"gridCircle": "section8_gridCircle__vEG-A",
	"innerCircle1": "section8_innerCircle1__3JW0t",
	"innerCircle2": "section8_innerCircle2__w6zE2",
	"innerCircle3": "section8_innerCircle3__3rUYN",
	"gridTitle": "section8_gridTitle__1H69B",
	"gridText": "section8_gridText__1b-Zy",
	"gridBtn": "section8_gridBtn__qtXUe",
	"btnText": "section8_btnText__1cW2r",
	"readMore": "section8_readMore__4WAJ7",
	"readMoreIcon": "section8_readMoreIcon__yFxDx"
};


/***/ }),

/***/ "./styles/home/section9.module.scss":
/*!******************************************!*\
  !*** ./styles/home/section9.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wr": "section9_wr__2mMIK",
	"overlay": "section9_overlay__27PsG",
	"projects": "section9_projects__Ml-cr",
	"mTitle": "section9_mTitle__1UIUY",
	"wrapper": "section9_wrapper__2cZSK",
	"rec": "section9_rec__auQqI",
	"rec-arrow": "section9_rec-arrow__21vHV",
	"rowItem1": "section9_rowItem1__2gCpw",
	"rowItem2": "section9_rowItem2__AMYWq",
	"rowItem3": "section9_rowItem3__8VKOF",
	"rowItem4": "section9_rowItem4__2nbAS",
	"rowItem5": "section9_rowItem5__fIVzH",
	"rowItem6": "section9_rowItem6__1Fr7O",
	"rowItem7": "section9_rowItem7__1TBEu",
	"rowItem8": "section9_rowItem8__3K127"
};


/***/ }),

/***/ "./styles/home/sensor.module.scss":
/*!****************************************!*\
  !*** ./styles/home/sensor.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"link": "sensor_link__1sWEY"
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

/***/ "global/window":
/*!********************************!*\
  !*** external "global/window" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("global/window");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-elastic-carousel":
/*!*****************************************!*\
  !*** external "react-elastic-carousel" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-elastic-carousel");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvY2FydXNlbC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lL2NhcnVzZWwvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvY29udGFjdFVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvbGlzdFNlY3Rpb24zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZS9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lL3NhbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvc2VjdGlvbi0xLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZS9zZWN0aW9uLTIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lL3NlY3Rpb24tMy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvc2VjdGlvbi00LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZS9zZWN0aW9uLTUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lL3NlY3Rpb24tNi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvc2VjdGlvbi04LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZS9zZWN0aW9uLTkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lL3NpZGViYXIvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9jb250YWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy92ZWN0b3JJY29ucy9iYWRnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3ZlY3Rvckljb25zL2NhbGxDZW50ZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy92ZWN0b3JJY29ucy9jYXJnb1RydWNrLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdmVjdG9ySWNvbnMvZW1haWxJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdmVjdG9ySWNvbnMvZmFjZWJvb2t0ZWFtZGVmdWx0MS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3ZlY3Rvckljb25zL2luc3RhZ3JhbXRlYW1kZWZ1bHQxLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdmVjdG9ySWNvbnMvbG9jYXRpb24uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy92ZWN0b3JJY29ucy9waG9uZUljb24uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy92ZWN0b3JJY29ucy90d2l0dGVydGFtZGVmdWx0MS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY2FydXNlbC9jYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9mb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9oZWFkZXIvY29udGFjdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZS9jb250YWN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lL3NlY3Rpb24xLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lL3NlY3Rpb24yLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lL3NlY3Rpb24zLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lL3NlY3Rpb240Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lL3NlY3Rpb241Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lL3NlY3Rpb242Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lL3NlY3Rpb244Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lL3NlY3Rpb245Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lL3NlbnNvci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ2xvYmFsL3dpbmRvd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY291bnR1cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXlhbmRleC1tYXBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJicmVha1BvaW50cyIsIndpZHRoIiwiaXRlbXNUb1Nob3ciLCJzdHlsZXMiLCJkYXRhIiwibWFwIiwiaXRlbSIsImNhcmQiLCJ0aXRsZSIsImlkIiwiaWNvbiIsImxhbmQiLCJpbWciLCJDYXJkIiwibnVtYmVyIiwicm93SXRlbSIsIkNvbnRhY3RVcyIsImluc3RhR3JhbSIsIndpbmRvdyIsIm9wZW4iLCJmYWNlQm9vayIsInR3aXRUZXIiLCJzZW5kTWFpbCIsImxvY2F0aW9uIiwiaHJlZiIsIndyYXBwZXIiLCJsZWZ0IiwiaW5uZXIiLCJodGl0bGUiLCJhZHJlc3MiLCJjb250YWN0SWNvbiIsInRleHQiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiaWNvbkluIiwiSG9tZSIsImxpbmtUb1RvcCIsInVzZVJlZiIsImJvb2wiLCJzZXRCb29sIiwidXNlU3RhdGUiLCJnZXRQYWdlWU9mZlNldCIsInVuZGVmaW5lZCIsInBhZ2VZT2Zmc2V0Iiwib2ZmVG9wIiwic2V0T2ZmVG9wIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvblNjcm9sbFRvVG9wIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJzY3JvbGwiLCJkaXNwbGF5IiwiZmFBcnJvd1VwIiwicmVhZE1vcmUiLCJyZWFkTW9yZUljb24iLCJZbWFwIiwiaXNCaWdTY3JlZW4iLCJ1c2VNZWRpYVF1ZXJ5IiwicXVlcnkiLCJoIiwidyIsInN0eWxlIiwiaGVpZ2h0IiwiekluZGV4IiwiY2VudGVyIiwiem9vbSIsIlNhbXBsZSIsImlzVmlzaWJsZSIsImxpbmsiLCJhbm90aGVyIiwidHJhbnNmb3JtIiwib3ZlcmxheSIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJvdXRlckJ0biIsImJ0biIsImJ0blRleHQiLCJTZWN0aW9uMiIsInBhcnRPbmUiLCJncmlkIiwiZ3JpZEl0ZW0iLCJpbm5lckljb24iLCJpbm5lclRpdGxlIiwiaW5uZXJUZXh0IiwiYW5pbWF0aW9uIiwicGFydFR3byIsImluRGlzcGxheSIsImJveDEiLCJjb3ZlcjEiLCJib3gyIiwiY292ZXIyIiwiYm94MyIsImNvdmVyMyIsImJveFRpdGxlIiwiY291bnRVcFJlZiIsInN0YXJ0IiwiYm94VGV4dCIsInJpZ2h0IiwiaW5uZXJSaWdodCIsImdyYXlUaXRsZSIsInJpZ2h0VGl0bGUiLCJyaWdodFRleHQxIiwicmlnaHRUZXh0MiIsImNoZWNrYm94VGV4dHMiLCJpbkRpc3BsYXlDaGVjayIsImNoZWNrSWNvbiIsImZhQ2hlY2tDaXJjbGUiLCJjaGVja1RleHQiLCJTZWN0aW9uMyIsIndyIiwiaW5uZXJPdmVybGF5IiwibGVmdFRpdGxlIiwibGVmdFRleHQiLCJjYXJ1c2VsIiwiY2FydXNlbEl0ZW0iLCJjYXJ1c2VsSWNvbiIsImNhcnVzZWxUaXRsZSIsImNhcnVzZWxUZXh0IiwiU2VjdGlvbjQiLCJtVGl0bGUiLCJib2xkVGl0bGUiLCJmYUhhbmRIb2xkaW5nVXNkIiwiZmFUcnVja01vdmluZyIsImZhUGVvcGxlQXJyb3dzIiwiZmFHbG9iZSIsIlNlY3Rpb241IiwiaW5HcmlkIiwiZ3JpZENpcmNsZSIsImlubmVyQ2lyY2xlMSIsImdyaWRUZXh0IiwibGluZSIsImdyaWRUaXRsZSIsImdyaWRUaXRsZTIiLCJpbm5lckNpcmNsZTIiLCJpbm5lckNpcmNsZTMiLCJTZWN0aW9uNiIsImluUGFydFR3byIsInBhcnRUd29UaXRsZSIsInBhcnRUd29JbWciLCJpblBhcnRUd29JbWciLCJmYUNsb2NrIiwicmlnaHRQYXJ0VHdvIiwicmlnaHRQYXJ0VHdvVGl0bGUiLCJyaWdodFBhcnRUd29UZXh0IiwiZmFTaGllbGRBbHQiLCJmYVJ1bm5pbmciLCJmYVVzZXJzIiwiYnRuUGFydFR3byIsImluUGFydFR3b0J0biIsIlNlY3Rpb244Iiwic2V0RGF0YSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGRkIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImxvZyIsIm1haW5UaXRsZSIsImkiLCJrIiwiZ3JpZEltZzEiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiZ3JpZEJ0biIsImZhQXJyb3dSaWdodCIsIlNlY3Rpb245IiwiaW1nMSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRBdHRhY2htZW50IiwicG9zaXRpb24iLCJwYWRkaW5nVG9wIiwibWFyZ2luVG9wIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicHJvamVjdHMiLCJyb3dJdGVtMiIsInJvd0l0ZW0zIiwicm93SXRlbTQiLCJyb3dJdGVtNSIsInJvd0l0ZW02Iiwicm93SXRlbTciLCJyb3dJdGVtOCIsIlNpZGViYXIiLCJib29sMSIsIm9uUHJlc3MxIiwic3R5bGUxIiwidHJhbnNpdGlvbiIsIkZ1bmMxIiwiRnVuYzIiLCJGdW5jMyIsIkZ1bmM0IiwiRnVuYzUiLCJGdW5jNiIsIkZ1bmM3Iiwic2V0TGluayIsImJyYW5kIiwibGlua3MiLCJGb290ZXIiLCJjb250Iiwicm93IiwibG9nbyIsImluIiwicm93Rm91ciIsImFicyIsIkNvbnRhY3QiLCJpbkxlZnQiLCJmYUVudmVsb3BlIiwiZmFMb2NhdGlvbkFycm93IiwiZmFQaG9uZSIsImluUmlnaHQiLCJyaWdodEljb24iLCJIZWFkZXIiLCJyZWYiLCJpc1Njcm9sbCIsInNldElzU2Nyb2xsIiwic3R5bGVzTWFpbiIsInRvcCIsImJhY2tncm91bmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJqb2luIiwidG9nIiwiYmFycyIsImZhQmFycyIsIm5ld0JyYW5kIiwibGluazgiLCJnbG9iYWwiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwicGF0aCIsImRvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImEiLCJzaXplcyIsImxheW91dCIsInBlcmNlbnRTaXplcyIsIm0iLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwid2lkdGhzIiwicyIsImtpbmQiLCJwIiwic3JjU2V0IiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyYyIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsImJvdHRvbSIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwic2V0UmVmIiwiZWwiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiSW5kZXgiLCJCYWRnZSIsIkNhbGxDZW50ZXIiLCJDYXJnb1RydWNrIiwiRW1haWxJY29uIiwiRmFjZWJvb2t0ZWFtZGVmdWx0MSIsImljb24xIiwiaWNvbnMiLCJJbnN0YWdyYW10ZWFtZGVmdWx0MSIsIkxvY2F0aW9uIiwiUGhvbmVJY29uIiwiVHdpdHRlcnRhbWRlZnVsdDEiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQy9CLFFBQU1DLFdBQVcsR0FBRyxDQUNoQjtBQUFDQyxTQUFLLEVBQUUsR0FBUjtBQUFhQyxlQUFXLEVBQUU7QUFBMUIsR0FEZ0IsRUFFaEI7QUFBQ0QsU0FBSyxFQUFFLEdBQVI7QUFBYUMsZUFBVyxFQUFFO0FBQTFCLEdBRmdCLEVBR2hCO0FBQUNELFNBQUssRUFBRSxHQUFSO0FBQWFDLGVBQVcs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Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBLDhEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2NhcnVzZWwvY2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZFwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIlxyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vbGlzdFwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzKSB7XHJcbiAgICBjb25zdCBicmVha1BvaW50cyA9IFtcclxuICAgICAgICB7d2lkdGg6IDIwMCwgaXRlbXNUb1Nob3c6IDF9LFxyXG4gICAgICAgIHt3aWR0aDogNDAwLCBpdGVtc1RvU2hvdzogMn0sXHJcbiAgICAgICAge3dpZHRoOiA3MDAsIGl0ZW1zVG9TaG93OiAzfVxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgYnJlYWtQb2ludHM9e2JyZWFrUG9pbnRzfSBkaXNhYmxlQXJyb3dzT25FbmQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG5cclxuICAgICAgICAgICAgPENhcm91c2VsIGJyZWFrUG9pbnRzPXticmVha1BvaW50c30gZGlzYWJsZUFycm93c09uRW5kPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtcInBpY3R1cmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD17XCJmaWxsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9e1wiY292ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2hvbWUvJHtpdGVtLmltZ30uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvaG9tZS9zZWN0aW9uOS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuXHJcbmNvbnN0IENhcmQgPSAoeyBudW1iZXIgfSkgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3dJdGVtfT57bnVtYmVyfTwvZGl2PjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvY29udGFjdC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuXHJcbmltcG9ydCB7TWFwfSBmcm9tIFwicmVhY3QteWFuZGV4LW1hcHNcIjtcclxuaW1wb3J0IFltYXAgZnJvbSBcIi4vbWFwXCI7XHJcbmltcG9ydCB7ZmFMb2NhdGlvbkFycm93fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vLi4vcHVibGljL3ZlY3Rvckljb25zL2xvY2F0aW9uXCI7XHJcbmltcG9ydCBFbWFpbEljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy92ZWN0b3JJY29ucy9lbWFpbEljb25cIjtcclxuaW1wb3J0IFBob25lSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3ZlY3Rvckljb25zL3Bob25lSWNvblwiO1xyXG5pbXBvcnQgRmFjZWJvb2t0ZWFtZGVmdWx0MSBmcm9tIFwiLi4vLi4vcHVibGljL3ZlY3Rvckljb25zL2ZhY2Vib29rdGVhbWRlZnVsdDFcIjtcclxuaW1wb3J0IEluc3RhZ3JhbXRlYW1kZWZ1bHQxIGZyb20gXCIuLi8uLi9wdWJsaWMvdmVjdG9ySWNvbnMvaW5zdGFncmFtdGVhbWRlZnVsdDFcIjtcclxuaW1wb3J0IFR3aXR0ZXJ0YW1kZWZ1bHQxIGZyb20gXCIuLi8uLi9wdWJsaWMvdmVjdG9ySWNvbnMvdHdpdHRlcnRhbWRlZnVsdDFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RVcygpIHtcclxuICAgIGNvbnN0IGluc3RhR3JhbSA9ICgpID0+IHtcclxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly95b3V0dS5iZS9DUnRCN0RaSnFIa1wiO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbVwiKTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBmYWNlQm9vayA9ICgpID0+IHtcclxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly95b3V0dS5iZS9DUnRCN0RaSnFIa1wiO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IHR3aXRUZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8veW91dHUuYmUvQ1J0QjdEWkpxSGtcIjtcclxuICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRNYWlsID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJtYWlsdG86aW5mb0BkdG10cnVja2luZy5jb20/c3ViamVjdD1EdG1UcnVja0NvbXBhbnlcIjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfSBpZD1cInNlY3Rpb24tN1wiPlxyXG4gICAgICAgICAgICA8WW1hcC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgdXNcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmh0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRxdWFydGVyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0SWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyNzUgRGF2aXMgUmQsIFN1aXRlIDEzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpY2FnbywgSUwgNjAxMjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHJlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbWFpbEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvQGR0bXRydWNraW5nLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0SWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGhvbmVJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5waG9uZU51bWJlcn0gaHJlZj1cInRlbDorMTc3MzMwOTIxMTFcIj4rMSA3NzMgMzA5IDIxMTE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnBob25lTnVtYmVyfSBocmVmPVwidGVsOisxNjMwODgzODczMyBcIj4rMSA2MzAgODgzIDg3MzMgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaHRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU29jaWFsIG5ldHdvcmtzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uSW59IG9uQ2xpY2s9e2ZhY2VCb29rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va3RlYW1kZWZ1bHQxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25Jbn0gb25DbGljaz17aW5zdGFHcmFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW10ZWFtZGVmdWx0MSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uSW59IG9uQ2xpY2s9e3R3aXRUZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJ0YW1kZWZ1bHQxLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBTZWN0aW9uMSBmcm9tIFwiLi9zZWN0aW9uLTFcIjtcclxuaW1wb3J0IFNlY3Rpb24yIGZyb20gXCIuL3NlY3Rpb24tMlwiO1xyXG5pbXBvcnQgU2VjdGlvbjMgZnJvbSBcIi4vc2VjdGlvbi0zXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2xheW91dC9oZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2xheW91dC9mb290ZXIvZm9vdGVyXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7ZmFBcnJvd1VwLCBmYUxhcHRvcENvZGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB3aW5kb3cgZnJvbSBcImdsb2JhbC93aW5kb3dcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci9zaWRlYmFyXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9sYXlvdXQvaGVhZGVyL2NvbnRhY3RcIjtcclxuaW1wb3J0IFNlY3Rpb242IGZyb20gXCIuL3NlY3Rpb24tNlwiO1xyXG5pbXBvcnQgU2VjdGlvbjQgZnJvbSBcIi4vc2VjdGlvbi00XCI7XHJcbmltcG9ydCBTZWN0aW9uNSBmcm9tIFwiLi9zZWN0aW9uLTVcIjtcclxuLy8gaW1wb3J0IFNlY3Rpb243IGZyb20gXCIuL3NlY3Rpb24tN1wiO1xyXG5pbXBvcnQgU2VjdGlvbjggZnJvbSBcIi4vc2VjdGlvbi04XCI7XHJcbmltcG9ydCBTZWN0aW9uOSBmcm9tIFwiLi9zZWN0aW9uLTlcIjtcclxuaW1wb3J0IFNhbXBsZSBmcm9tIFwiLi9zYW1wbGVcIlxyXG5pbXBvcnQgQ29udGFjdFVzIGZyb20gXCIuL2NvbnRhY3RVc1wiXHJcblxyXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NhcnVzZWwvYXBwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIGNvbnN0IGxpbmtUb1RvcCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBbYm9vbCwgc2V0Qm9vbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZVlPZmZTZXQoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtvZmZUb3AsIHNldE9mZlRvcF0gPSB1c2VTdGF0ZShnZXRQYWdlWU9mZlNldCgpKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICBzZXRPZmZUb3AoZ2V0UGFnZVlPZmZTZXQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb25TY3JvbGxUb1RvcCA9ICgpID0+e1xyXG4gICAgICAgIGxpbmtUb1RvcC5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyIGJvb2wxPXtib29sfVxyXG4gICAgICAgICAgICAgICAgICAgICBvblByZXNzMSA9IHtzZXRCb29sfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwidG9wXCIgcmVmPXtsaW5rVG9Ub3B9Lz5cclxuICAgICAgICAgICAgPENvbnRhY3QvPlxyXG4gICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgb25QcmVzczEgPSB7c2V0Qm9vbH1cclxuICAgICAgICAgICAgICAgICAgICBib29sMT17Ym9vbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlY3Rpb24xLz5cclxuICAgICAgICAgICAgPFNlY3Rpb24yLz5cclxuXHJcbiAgICAgICAgICAgIDxTZWN0aW9uMy8+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uNi8+XHJcblxyXG5cclxuICAgICAgICAgICAgPFNlY3Rpb241Lz5cclxuICAgICAgICAgICAgPFNlY3Rpb245Lz5cclxuXHJcbiAgICAgICAgICAgIDxDb250YWN0VXMvPlxyXG4gICAgICAgICAgICA8U2VjdGlvbjgvPlxyXG5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25TY3JvbGxUb1RvcH1cclxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zY3JvbGx9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYCR7b2ZmVG9wID4gNDAwID8gXCJmbGV4XCIgOiBcIm5vbmVcIn1gXHJcbiAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1VwfSBjbGFzc05hbWU9XCJpY29uXCIvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IEZhQXBwbGVBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICB0aXRsZTpcIk9QRVJBVElPTlNcIixcclxuICAgICAgICB0ZXh0OlwiV2UgcHJvdmlkZSAyNC83IHN1cHBvcnQgZm9yIFwiICtcclxuICAgICAgICAgICAgXCJvdXIgY2xpZW50cyBhbmQgZHJpdmVycyBhbG9uZyBcIiArXHJcbiAgICAgICAgICAgIFwid2l0aCByZWFsIHRpbWUgbG9jYXRpb24gc2VydmljZSBcIiArXHJcbiAgICAgICAgICAgIFwiZm9yIGFsbCBsb2Fkcy4gIFRyYW5zcGFyZW50IGRpc3BhdGNoaW5nXCIgK1xyXG4gICAgICAgICAgICBcIiB3aXRoIHJhdGUgY29uZmlybWF0aW9ucyBvbiBldmVyeSBsb2FkXCIgK1xyXG4gICAgICAgICAgICBcIiDigJMgd2UgaGF2ZSBub3RoaW5nIHRvIGhpZGUsIE93bmVyXCIgK1xyXG4gICAgICAgICAgICBcIiBPcGVyYXRvciBnZXRzIHBhaWQgcGVyY2VudGFnZSBmcm9tXCIgK1xyXG4gICAgICAgICAgICBcIiBmdWxsIGdyb3NzIHBheVwiLFxyXG4gICAgICAgIGltZzpcImxvZ28xXCIsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoyLFxyXG4gICAgICAgIHRleHQ6XCJGdWxsIHNhZmV0eSB0ZWFtOiBjb21wbGlhbmNlIHRyYWNraW5nLFwiICtcclxuICAgICAgICAgICAgXCIgcGFwZXJ3b3JrIHJldmlld3MgYW5kIHByZXBhcmF0aW9ucyxcIiArXHJcbiAgICAgICAgICAgIFwiIG9uIHRoZSByb2FkIHN1cHBvcnQuIFRpY2tldCBhbmQgdmlvbGF0aW9uIFwiICtcclxuICAgICAgICAgICAgXCJyZW1vdmFsIHN1cHBvcnQuIERPVCB2aW9sYXRpb24gY2hhbGxlbmdlc1wiICtcclxuICAgICAgICAgICAgXCIgYnkgZXhwZXJpZW5jZWQgc3RhZmYuIFVzYWdlIG9mIGNvbXBhbnnigJlzXCIgK1xyXG4gICAgICAgICAgICBcIiBJRlRBIHN0aWNrZXJzIGFuZCBsZWdhbCByZXBvcnRpbmcuXCIsXHJcbiAgICAgICAgdGl0bGU6XCJTQUZFVFlcIixcclxuICAgICAgICBpbWc6XCJsb2dvMlwiLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6MyxcclxuICAgICAgICB0ZXh0OlwiV2l0aCBvdXIgbWFpbnRlbmFuY2Ugc3VwcG9ydCB0ZWFtXCIgK1xyXG4gICAgICAgICAgICBcIiBkcml2ZXJzIGNhbiBiZSBzdXJlIHRoYXQgYWxsIGVxdWlwbWVudFwiICtcclxuICAgICAgICAgICAgXCIgaXMgb24gdGltZSBtYWludGFpbmVkIGFuZCBhbnkgYnJlYWtkb3duXCIgK1xyXG4gICAgICAgICAgICBcIiBjYW4gYmUgc29sdmVkIHdpdGhvdXQgZGVsYXkuIE91ciBvdXRzdGFuZGluZ1wiICtcclxuICAgICAgICAgICAgXCIgIGNvbW11bmljYXRpb24gYWx3YXlzIGxlYXZlIG91ciBjbGllbnRzIFwiICtcclxuICAgICAgICAgICAgXCJzYXRpc2ZpZWQgd2l0aCBvbiB0aW1lIGRlbGl2ZXJ5LlwiLFxyXG5cclxuICAgICAgICB0aXRsZTpcIk1BSU5URU5BTkNFXCIsXHJcbiAgICAgICAgaW1nOlwibG9nbzNcIixcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjQsXHJcbiAgICAgICAgLy8gaWNvbjo8RmFBcHBsZUFsdC8+LFxyXG4gICAgICAgIHRleHQ6XCJXZSBrZWVwIG91ciBidXNpbmVzcyBhcyBjbGVhciBhcyBwb3NzaWJsZSwgdGhhdCdzIHdoeSB3ZSBzaGFyZSBSYXRlIENvbmZpcm1hdGlvbnMgd2l0aCBvdXIgT3duZXIgT3BlcmF0b3JzIVxcblwiICtcclxuICAgICAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgICAgIFwiTm8gZm9yY2VkIGRpc3BhdGNoLlxcblwiICtcclxuICAgICAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgICAgIFwiTm8gdG91Y2ggZnJlaWdodC5cXG5cIiArXHJcbiAgICAgICAgICAgIFwiXFxuXCIgK1xyXG4gICAgICAgICAgICBcIk93bmVyL09wcyBnZXQgODglIHBheSBmcm9tIEdST1NTLlxcblwiICtcclxuICAgICAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgICAgIFwiQWxsIG91ciBkaXNwYXRjaGVycyBzcGVhayBSdXNzaWFuIGFzIHdlbGwuXCIsXHJcbiAgICAgICAgdGl0bGU6XCJXRSBUUkVBVCBPVVIgRU1QTE9ZRUVTIEFTIEZBTUlMWVwiLFxyXG4gICAgICAgIGltZzpcImxvZ280XCIsXHJcbiAgICB9XHJcbl0iLCJpbXBvcnQge0ZhTW9uZXlCaWxsV2F2ZSwgRmFIYW5kSG9sZGluZ1VzZCwgRmFBcnJvd1JpZ2h0LCBGYUdsb2JlLCBGYURvbmF0ZX0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBpY29uOiA8RmFEb25hdGUvPixcclxuICAgICAgICB0aXRsZTogXCJCZXN0IEVhcm5pbmdzXCIsXHJcbiAgICAgICAgdGV4dDpcIk91ciBleHBlcmllbmNlZCBkaXNwYXRjaGVycyB3aWxsIGtlZXAgeW91IGJ1c3kgd2l0aCBjb25zdGFudCBsb2FkcyBhbmQgYmVzdCByYXRlcyBvbiB0aGUgbWFya2V0IVwiLFxyXG4gICAgICAgIHJlYWRNb3JlOiBcIlJlYWQgTW9yZVwiLFxyXG4gICAgICAgIHJlYWRNb3JlSWNvbjogPEZhQXJyb3dSaWdodC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIGljb246IDxGYU1vbmV5QmlsbFdhdmUvPixcclxuICAgICAgICB0aXRsZTogXCJCZW5lZml0c1wiLFxyXG4gICAgICAgIHRleHQ6XCJXZSBwYXkgZm9yIGFsbCBtaWxlcyBsb2FkZWQgb3IgZW1wdHksIHdpdGggJDUwIGZvciBleHRyYSBzdG9wcyBhbmQgbm9uLXZpbG9sYXRpb24gYm9udXMgbWFraW5nIHVwICQzNjAuXCIsXHJcbiAgICAgICAgcmVhZE1vcmU6IFwiUmVhZCBNb3JlXCIsXHJcbiAgICAgICAgcmVhZE1vcmVJY29uOiA8RmFBcnJvd1JpZ2h0Lz5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgaWNvbjogPEZhSGFuZEhvbGRpbmdVc2QvPixcclxuICAgICAgICB0aXRsZTogXCJMZWFzZSBQcm9ncmFtXCIsXHJcbiAgICAgICAgdGV4dDpcIlRydWNrIGxlYXNlIHByb2dyYW1zIGFyZSBvbmUgb2YgdGhlIG1haW4gd2F5cyBhIGNvbXBhbnkgZHJpdmVyIGNhbiB0YWtlIHRoZSBuZXh0IHN0ZXAgaW4gdGhlaXIgY2FyZWVyLi4uXCIsXHJcbiAgICAgICAgcmVhZE1vcmU6IFwiUmVhZCBNb3JlXCIsXHJcbiAgICAgICAgcmVhZE1vcmVJY29uOiA8RmFBcnJvd1JpZ2h0Lz5cclxuICAgIH1cclxuXSIsImltcG9ydCB7WU1hcHMsIE1hcCwgUGxhY2VtYXJrLCBab29tQ29udHJvbCwgRnVsbHNjcmVlbkNvbnRyb2x9IGZyb20gJ3JlYWN0LXlhbmRleC1tYXBzJztcclxuaW1wb3J0IHt1c2VNZWRpYVF1ZXJ5fSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBZbWFwID0gKCkgPT57XHJcbiAgICBjb25zdCBpc0JpZ1NjcmVlbiA9IHVzZU1lZGlhUXVlcnkoeyBxdWVyeTogJyhtYXgtd2lkdGg6IDk5MHB4KScgfSlcclxuICAgIGNvbnN0IGggPSBcIjcwdmhcIjtcclxuICAgIGNvbnN0IHcgPSBcIjEwMFwiXHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICBoZWlnaHQ6IGgsXHJcbiAgICAgICAgekluZGV4OlwiMjBcIixcclxuICAgICAgICB3aWR0aDp3LFxyXG5cclxuICAgIH07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICA8WU1hcHM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXAgICAgIGRlZmF1bHRTdGF0ZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs0Mi4wNjgxNTQsICAtODguMzA5Mjg0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbTogMTRcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiBofX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2VtYXJrIGRlZmF1bHRHZW9tZXRyeT17WzQyLjA2ODE1NCwgIC04OC4zMDkyODRdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnVsbHNjcmVlbkNvbnRyb2wgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01hcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1lNYXBzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBZbWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSBcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvc2Vuc29yLm1vZHVsZS5zY3NzXCJcclxuXHJcbmZ1bmN0aW9uIFNhbXBsZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VmlzaWJpbGl0eVNlbnNvcj5cclxuICAgICAgICAgICAgeyh7aXNWaXNpYmxlfSkgPT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gJHtpc1Zpc2libGUgPyBzdHlsZXMuYW5vdGhlciA6IFwiXCJ9YH0gc3R5bGU9e3sgdHJhbnNmb3JtOiBpc1Zpc2libGUgPyBcInRyYW5zbGF0ZVgoNDAwcHgpXCIgOiBcInRyYW5zbGF0ZVgoMTAwcHgpXCJ9fT5JIGFtIHtpc1Zpc2libGUgPyAndmlzaWJsZScgOiAnaW52aXNpYmxlJ308L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbXBsZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zZWN0aW9uMS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuXHJcbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfSBpZD1cInNlY3Rpb24tMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgZGVsaXZlciByZWFsIHZhbHVlLCBtb3JlIGxvYWRzIG9uIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGxlYWRpbmcgY29tcGFueSB5b3VyIGNhbiB0cnVzdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3V0ZXJCdG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG59PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RyaXZlcnNcIiBjbGFzc05hbWU9e3N0eWxlcy5idG5UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVjb21lIGEgZHJpdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvc2VjdGlvbjIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7ZmFBcnJvd1JpZ2h0LCBmYUNhciwgZmFDaGVja0NpcmNsZSwgZmFDb3B5LCBmYVBlb3BsZUFycm93c30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IENhcmdvVHJ1Y2sgZnJvbSBcIi4uLy4uL3B1YmxpYy92ZWN0b3JJY29ucy9jYXJnb1RydWNrXCI7XHJcbmltcG9ydCBDYWxsQ2VudGVyIGZyb20gXCIuLi8uLi9wdWJsaWMvdmVjdG9ySWNvbnMvY2FsbENlbnRlclwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcIi4uLy4uL3B1YmxpYy92ZWN0b3JJY29ucy9iYWRnZVwiO1xyXG5pbXBvcnQgQ291bnRVcCBmcm9tIFwicmVhY3QtY291bnR1cFwiO1xyXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tIFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIjtcclxuZnVuY3Rpb24gU2VjdGlvbjIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfSBpZD1cInNlY3Rpb24tMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJ0T25lfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZ29UcnVjay8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJUaXRsZX0+NDggU3RhdGVzIE1haW5sYW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyVGV4dH0+V2UgcnVuIGFsbCBvdmVyIHRoZSBVUywgY29hc3QgdG8gY29hc3QsIG5vcnRoIHRvIHNvdXRoIG92ZXIgZGVkaWNhdGVkIGxhbmUuPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVySWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FsbENlbnRlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lclRpdGxlfT4yNC83IFNlcnZpY2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyVGV4dH0+MjQvNyBNdWx0aWxpbmd1YWwgRGlzcGF0Y2ggU2VydmljZSBpcyBvbmx5IG9uZSBwaG9uZSBjYWxsIGF3YXkuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyVGl0bGV9PlJlbGlhYmlsaXR5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lclRleHR9PkFzIHRydWNrZXJzIG91cnNlbHZlcywgd2Uga25vdyBob3cgaW1wb3J0YW50IGl0IGlzIHRvIGdldCBwYWlkIG9uIHRpbWUuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbmltYXRpb259PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuaW1hdGlvbn0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcnRUd299PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5EaXNwbGF5fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3ZlcjF9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveDJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXIyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3gzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94VGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgZW5kPXsxMn0gcHJlZml4PVwiT3ZlciBcIiBzdWZmaXg9XCJLK1wiIHJlZHJhdz17dHJ1ZX0gZHVyYXRpb249ezJ9IGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7Y291bnRVcFJlZiwgc3RhcnR9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXtzdGFydH0gZGVsYXllZENhbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2NvdW50VXBSZWZ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3hUZXh0fT5Db21wbGV0ZWQgc2hpcG1lbnRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lclJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyYXlUaXRsZX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodFRpdGxlfT4gT3VyIENvbW1pdG1lbnQgdG8gRHJpdmVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRUZXh0MX0+V2UgcmVjb2duaXplIHRoZSBkYWlseSBzYWNyaWZpY2VzIG9mIHRoZSBtZW4gYW5kIHdvbWVuIHdvcmtpbmcgdGlyZWxlc3NseSB0byBwcm92aWRlIGZvciBib3RoIG91ciBmYW1pbGllcyBhbmQgdGhlaXJzLiBPdXIgdGVhbSBpcyBjb21taXR0ZWQgdG8gcHJvdmlkaW5nIGVhc2llciBsb2Fkcywgb3Bwb3J0dW5pdHksIHRvb2xzIGFuZCBwcm9mZXNzaW9uYWwgZGlzcGF0Y2ggc2VydmljZXMuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodFRleHQyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Ugd2lsbCBhc3Npc3Qgb3VyIGRyaXZlcnMgdG8gcGxhbiB0aGVpciBkYXkgZnJvbSBhIHRyaXAgcGxhbm5lciB3aXRoIEdQUyBuYXZpZ2F0aW9uLCB0byBwYXJraW5nLCB3ZWF0aGVyIGFuZCBtb3JlLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveFRleHRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbkRpc3BsYXlDaGVja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrSWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrQ2lyY2xlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcml2ZXIgTk8gdG91Y2ggbG9hZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbkRpc3BsYXlDaGVja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrSWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrQ2lyY2xlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wIGFuZCBIb29rIGxvYWRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5EaXNwbGF5Q2hlY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja0ljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0NpcmNsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3ZXIgdHJ1Y2tzIDIwMTggYW5kIHVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG59PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuRGlzcGxheX0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuVGV4dH0+RGlzY292ZXIgTW9yZTwvZGl2PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ0bkljb259PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93UmlnaHR9Lz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24yOyIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9ob21lL3NlY3Rpb24zLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7ZmFBcnJvd1JpZ2h0LCBmYUNoZWNrQ2lyY2xlLCBmYUdsb2JlLCBmYUhhbmRIb2xkaW5nVXNkLCBmYU1vbmV5QmlsbH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jYXJ1c2VsL2FwcCdcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4vbGlzdFNlY3Rpb24zXCJcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbjMoKSB7XHJcblxyXG4gICAgY29uc3QgYnJlYWtQb2ludHMgPSBbXHJcbiAgICAgICAge3dpZHRoOiAzNTAsIGl0ZW1zVG9TaG93OiAxfSxcclxuICAgICAgICB7d2lkdGg6IDQ1MCwgaXRlbXNUb1Nob3c6IDJ9LFxyXG4gICAgICAgIHt3aWR0aDogNzAwLCBpdGVtc1RvU2hvdzogM31cclxuICAgIF1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cn0gaWQ9XCJzZWN0aW9uLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lck92ZXJsYXl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5EaXNwbGF5fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyYXlUaXRsZX0+VEhFIExFQURJTkcgRlJJR0hUIENPTVBBTlk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0VGl0bGV9PlByb3ZpZGUgMTAwJSBjdXN0b21lciBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gZHJpdmVyIHNhdGlzZmFjdGlvbi48L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRUZXh0fT4gV2UgdW5kZXJzdGFuZCBjdXN0b21lcnMgdmFsdWUgc2VydmljZSwgdHJhbnNwYXJlbmN5LCBhbmQgcmVzdWx0cy4gQnkgYnVpbGRpbmcgYSBzdHJvbmcgdGVhbSBvZiBrbm93bGVkZ2VhYmxlIGluZGl2aWR1YWxzIHRoYXQgYXJlIHBhc3Npb25hdGUgYWJvdXQgbW92aW5nIHlvdXIgZnJlaWdodCB3ZSBhcmUgYWJsZSB0byBmb3N0ZXIgcmVsYXRpb25zaGlwcyB3aXRoIG91ciBlc3RhYmxpc2hlZCBjYXJyaWVyIGJhc2UuPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgYnJlYWtQb2ludHM9e2JyZWFrUG9pbnRzfSBkaXNhYmxlQXJyb3dzT25FbmQ9e2ZhbHNlfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJ1c2VsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJ1c2VsSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ1c2VsSWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ1c2VsVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnVzZWxUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zZWN0aW9uNC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgZmFBcnJvd1JpZ2h0LFxyXG4gICAgZmFDYXIsXHJcbiAgICBmYUNvcHksIGZhR2xvYmUsXHJcbiAgICBmYUhhbmRIb2xkaW5nVXNkLFxyXG4gICAgZmFQZW9wbGVBcnJvd3MsXHJcbiAgICBmYVRydWNrTG9hZGluZywgZmFUcnVja01vdmluZ1xyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IENvdW50VXAgZnJvbSBcInJlYWN0LWNvdW50dXBcIjtcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSBcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCI7XHJcblxyXG5mdW5jdGlvbiBTZWN0aW9uNChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyfSBpZD1cInNlY3Rpb24tNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcnRUd299PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZFRpdGxlfT5XaHkgRFRNIFRydWNraW5nIElOQz88L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhhbmRIb2xkaW5nVXNkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50VXAgZW5kPXszNTB9IHN1ZmZpeD1cIiRcIiByZWRyYXc9e3RydWV9IGR1cmF0aW9uPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtjb3VudFVwUmVmLCBzdGFydH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9e3N0YXJ0fSBkZWxheWVkQ2FsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17Y291bnRVcFJlZn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJUZXh0fT5TYWZldHkgQm9udXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRydWNrTW92aW5nfT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBlbmQ9ezI2NH0gc3VmZml4PVwiK1wiIHJlZHJhdz17dHJ1ZX0gZHVyYXRpb249ezMuOH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7Y291bnRVcFJlZiwgc3RhcnR9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXtzdGFydH0gZGVsYXllZENhbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2NvdW50VXBSZWZ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyVGV4dH0+VHJ1Y2tzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZW9wbGVBcnJvd3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBlbmQ9ezE4NX0gc3VmZml4PVwiK1wiIHJlZHJhdz17dHJ1ZX0gZHVyYXRpb249ezMuNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7Y291bnRVcFJlZiwgc3RhcnR9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXtzdGFydH0gZGVsYXllZENhbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2NvdW50VXBSZWZ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvdW50VXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyVGV4dH0+RHJpdmVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVySWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2xvYmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBlbmQ9ezQwfSBzdWZmaXg9XCIrXCIgcmVkcmF3PXt0cnVlfSBkdXJhdGlvbj17Mi42fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtjb3VudFVwUmVmLCBzdGFydH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9e3N0YXJ0fSBkZWxheWVkQ2FsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17Y291bnRVcFJlZn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJUZXh0fT5Db3VudHJpZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvc2VjdGlvbjUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFNlY3Rpb241KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3J9IGlkPVwic2VjdGlvbi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2xkVGl0bGV9PiBGcm9tIG91ciBEcml2ZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5HcmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZENpcmNsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckNpcmNsZTF9PuKdnTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkVGV4dH0+VGhleSdyZSBqdXN0IGRyaXZlci1mcmllbmRseS4gV2hlbmV2ZXIgeW91IGhhdmUgYSBwcm9ibGVtIG9yIHN1Z2dlc3Rpb24sIHRoZXkncmUgb3Blbi1taW5kZWQgYW5kIHRoZXknbGwgbGlzdGVuIHRvIHlvdSBhbmQgdHJ5IHRvIGhlbHAgeW91IGZpbmQgYSBzb2x1dGlvbi5cIiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRUaXRsZX0+TW9oYW1lZCBEaWdhbGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZFRpdGxlMn0+VHJ1Y2sgRHJpdmVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZENpcmNsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckNpcmNsZTJ9PuKdnTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkVGV4dH0+XCJJdCdzIGEgZ3JlYXQgY29tcGFueSBhbmQgaXQncyBncm93aW5nLiBJIGJlbGlldmUgdGhhdCBpZiB5b3Ugd2FudCB0byBzdGFydCBzb21ld2hlcmUgYW5kIGdyb3cgd2l0aCBhIGNvbXBhbnksIERUTSBUcnVja2luZyB3b3VsZCBiZSBhIGdyZWF0IGNvbXBhbnkgZm9yIHlvdS5cIjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZFRpdGxlfT5LZWl0aCBNb29yZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkVGl0bGUyfT5UcnVjayBEcml2ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkQ2lyY2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyQ2lyY2xlM30+4p2dPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRUZXh0fT5cIlRoZSBiZXN0IHBhcnQgYWJvdXQgZHJpdmluZyBmb3IgRFRNIGlzIHRoZSBmYW1pbHkgYXRtb3NwaGVyZSBhbmQgdGhlIHdheSB5b3UgZ2V0IHRyZWF0ZWQuIEl0J3MgYSBnb29kIGpvYiBkcml2aW5nIGZvciBEVE0gYW5kIEkgZmVlbCBsaWtlIEknbSBwYXJ0IG9mIHRoZSBmYW1pbHkuXCI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRUaXRsZX0+RGF2aWQgQ3JlbnNoYXc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZFRpdGxlMn0+VHJ1Y2sgRHJpdmVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb241OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9ob21lL3NlY3Rpb242Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7XHJcbiAgICBmYUFycm93UmlnaHQsXHJcbiAgICBmYUNhciwgZmFDbG9jayxcclxuICAgIGZhQ29weSwgZmFHbG9iZSxcclxuICAgIGZhSGFuZEhvbGRpbmdVc2QsXHJcbiAgICBmYVBlb3BsZUFycm93cywgZmFSdW5uaW5nLCBmYVNoaWVsZEFsdCxcclxuICAgIGZhVHJ1Y2tMb2FkaW5nLCBmYVRydWNrTW92aW5nLCBmYVVzZXJzXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgQ2FyZ29UcnVjayBmcm9tIFwiLi4vLi4vcHVibGljL3ZlY3Rvckljb25zL2NhcmdvVHJ1Y2tcIlxyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9saXN0XCJcclxuXHJcbmZ1bmN0aW9uIFNlY3Rpb242KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3J9IGlkPVwic2VjdGlvbi02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcnRUd299PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5QYXJ0VHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJ0VHdvVGl0bGV9PldIWSBEVE0gVFJVQ0tJTkcgSU5DPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbkRpc3BsYXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcnRUd29JbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pblBhcnRUd29JbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDbG9ja30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0UGFydFR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0UGFydFR3b1RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPUEVSQVRJT05TXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRQYXJ0VHdvVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgcHJvdmlkZSAyNC83IHN1cHBvcnQgZm9yIG91ciBjbGllbnRzIGFuZCBkcml2ZXJzIGFsb25nIHdpdGggcmVhbCB0aW1lIGxvY2F0aW9uIHNlcnZpY2UgZm9yIGFsbCBsb2Fkcy4gIFRyYW5zcGFyZW50IGRpc3BhdGNoaW5nIHdpdGggcmF0ZSBjb25maXJtYXRpb25zIG9uIGV2ZXJ5IGxvYWQg4oCTIHdlIGhhdmUgbm90aGluZyB0byBoaWRlLCBPd25lciBPcGVyYXRvciBnZXRzIHBhaWQgcGVyY2VudGFnZSBmcm9tIGZ1bGwgZ3Jvc3MgcGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5EaXNwbGF5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJ0VHdvSW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5QYXJ0VHdvSW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hpZWxkQWx0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRQYXJ0VHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRQYXJ0VHdvVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNBRkVUWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0UGFydFR3b1RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGwgc2FmZXR5IHRlYW06IGNvbXBsaWFuY2UgdHJhY2tpbmcsIHBhcGVyd29yayByZXZpZXdzIGFuZCBwcmVwYXJhdGlvbnMsIG9uIHRoZSByb2FkIHN1cHBvcnQuIFRpY2tldCBhbmQgdmlvbGF0aW9uIHJlbW92YWwgc3VwcG9ydC4gRE9UIHZpb2xhdGlvbiBjaGFsbGVuZ2VzIGJ5IGV4cGVyaWVuY2VkIHN0YWZmLiBVc2FnZSBvZiBjb21wYW554oCZcyBJRlRBIHN0aWNrZXJzIGFuZCBsZWdhbCByZXBvcnRpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5EaXNwbGF5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJ0VHdvSW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5QYXJ0VHdvSW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUnVubmluZ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0UGFydFR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0UGFydFR3b1RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQUlOVEVOQU5DRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0UGFydFR3b1RleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpdGggb3VyIG1haW50ZW5hbmNlIHN1cHBvcnQgdGVhbSBkcml2ZXJzIGNhbiBiZSBzdXJlIHRoYXQgYWxsIGVxdWlwbWVudCBpcyBvbiB0aW1lIG1haW50YWluZWQgYW5kIGFueSBicmVha2Rvd24gY2FuIGJlIHNvbHZlZCB3aXRob3V0IGRlbGF5LiBPdXIgb3V0c3RhbmRpbmcgIGNvbW11bmljYXRpb24gYWx3YXlzIGxlYXZlIG91ciBjbGllbnRzIHNhdGlzZmllZCB3aXRoIG9uIHRpbWUgZGVsaXZlcnkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5EaXNwbGF5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJ0VHdvSW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5QYXJ0VHdvSW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcnN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodFBhcnRUd299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodFBhcnRUd29UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV0UgVFJFQVQgT1VSIEVNUExPWUVFUyBBUyBGQU1JTFlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodFBhcnRUd29UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBrZWVwIG91ciBidXNpbmVzcyBhcyBjbGVhciBhcyBwb3NzaWJsZSwgdGhhdCdzIHdoeSB3ZSBzaGFyZSBSYXRlIENvbmZpcm1hdGlvbnMgd2l0aCBvdXIgT3duZXIgT3BlcmF0b3JzIVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBmb3JjZWQgZGlzcGF0Y2guXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHRvdWNoIGZyZWlnaHQuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE93bmVyL09wcyBnZXQgODglIHBheSBmcm9tIEdST1NTLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgb3VyIGRpc3BhdGNoZXJzIHNwZWFrIFJ1c3NpYW4gYXMgd2VsbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuUGFydFR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluUGFydFR3b0J0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9xdW90ZVwiIGNsYXNzTmFtZT17c3R5bGVzLmJ0blRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb242OyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvc2VjdGlvbjgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICAgIGZhQXJyb3dSaWdodCxcclxuICAgIGZhQ2FyLFxyXG4gICAgZmFDb3B5LCBmYUdsb2JlLFxyXG4gICAgZmFIYW5kSG9sZGluZ1VzZCxcclxuICAgIGZhUGVvcGxlQXJyb3dzLFxyXG4gICAgZmFUcnVja0xvYWRpbmcsIGZhVHJ1Y2tNb3ZpbmdcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBDYXJnb1RydWNrIGZyb20gXCIuLi8uLi9wdWJsaWMvdmVjdG9ySWNvbnMvY2FyZ29UcnVja1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIFNlY3Rpb244KHByb3BzKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbmV3cy9hbGwnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBzZXREYXRhKHJlc3BvbnNlLmRhdGEuZGRkKSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cn0gaWQ9XCJzZWN0aW9uLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubVRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5UaXRsZX0+RnJvbSBPdXIgQmxvZyE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbkdyaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaSxrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtfSBrZXk9e2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSW1nMX0gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6ICBgdXJsKCR7aS5pbWFnZX0pYH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkVGl0bGV9PntpLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkVGV4dH0+e2kuZGVzY3JpcHRpb259IC4uLiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEJ0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ibG9nc1wiIGNsYXNzTmFtZT17c3R5bGVzLmJ0blRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlYWRNb3JlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWFkTW9yZUljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93UmlnaHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOjxkaXY+bm8gcmVzdWx0czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjg7XHJcblxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zZWN0aW9uOS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4vbGlzdFwiXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uOSgpIHtcclxuICAgIGNvbnN0IGltZzEgPSB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnLi9zZWN0aW9uOS5qcGcnKWAsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEzMHZoXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogXCJmaXhlZFwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxcHhcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTFweFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCJcclxuICAgIH1cclxuICAgIGNvbnN0IGJyZWFrUG9pbnRzID0gW1xyXG4gICAgICAgIHt3aWR0aDogMjAwLCBpdGVtc1RvU2hvdzogMX0sXHJcbiAgICAgICAge3dpZHRoOiA0MDAsIGl0ZW1zVG9TaG93OiAyfSxcclxuICAgICAgICB7d2lkdGg6IDcwMCwgaXRlbXNUb1Nob3c6IDN9LFxyXG4gICAgICAgIHt3aWR0aDogOTAwLCBpdGVtc1RvU2hvdzogNH1cclxuICAgIF1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cn0gaWQ9XCJzZWN0aW9uLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0c30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+T3VyPC9zcGFuPiBQYXJ0bmVyc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnRzPXticmVha1BvaW50c31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFkZGluZz17WzIwLCAyMF19XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Fycm93cz17ZmFsc2V9XHJcblxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0l0ZW0yfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0l0ZW0zfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0l0ZW00fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0l0ZW01fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0l0ZW02fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0l0ZW03fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0l0ZW04fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7XHJcbiAgICBmYURlc2t0b3AsXHJcbiAgICBmYUhvbWUsIGZhT2JqZWN0R3JvdXAsXHJcbiAgICBmYVBlb3BsZUNhcnJ5LCBmYVBob25lLFxyXG4gICAgZmFQcm9qZWN0RGlhZ3JhbSxcclxuICAgIGZhU2VydmVyLFxyXG4gICAgZmFUYWNob21ldGVyQWx0XHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKHtib29sMSxvblByZXNzMX0pIHtcclxuICAgIGNvbnN0IHN0eWxlMSA9IHtcclxuICAgICAgICBsZWZ0OmAke2Jvb2wxID8gXCIwcHhcIjogXCItMTAwJVwifWAsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJzFzJyxcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBGdW5jMSA9ICgpID0+IG9uUHJlc3MxKCFib29sMSlcclxuXHJcbiAgICBjb25zdCBGdW5jMiA9ICgpID0+IHtcclxuICAgICAgICBvblByZXNzMSghYm9vbDEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBGdW5jMyA9ICgpID0+IHtcclxuICAgICAgICBvblByZXNzMSghYm9vbDEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBGdW5jNCA9ICgpID0+IHtcclxuICAgICAgICBvblByZXNzMSghYm9vbDEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBGdW5jNSA9ICgpID0+IHtcclxuICAgICAgICBvblByZXNzMSghYm9vbDEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBGdW5jNiA9ICgpID0+IHtcclxuICAgICAgICBvblByZXNzMSghYm9vbDEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBGdW5jNyA9ICgpID0+IHtcclxuICAgICAgICBvblByZXNzMSghYm9vbDEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBbbGluayxzZXRMaW5rXSA9IHVzZVN0YXRlKCdob21lJylcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3N0eWxlMX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0gc3R5bGU9e3N0eWxlMX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIiBvbkNsaWNrPXsoKSA9PiBGdW5jMSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwic2VjdGlvbi0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlubmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEeW5hbWljPXt0cnVlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9ID5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gRnVuYzIoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cInNlY3Rpb24tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHluYW1pYz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldEFjdGl2ZT17KCkgPT4gc2V0TGluaygnc2VydmljZXMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYW5jZWxFdmVudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXQgdXNcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBGdW5jMygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwic2VjdGlvbi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlubmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEeW5hbWljPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0QWN0aXZlPXsoKSA9PiBzZXRMaW5rKCdwcm9qZWN0cycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhbmNlbEV2ZW50cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwic2VjdGlvbi02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBGdW5jNCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstODB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHluYW1pYz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldEFjdGl2ZT17KCkgPT4gc2V0TGluaygndGVjaG5vbG9naWVzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ2FuY2VsRXZlbnRzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdoeSBEVE0/XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZHJpdmVyc1wiICBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgZHJpdmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9ID5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gRnVuYzYoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cInNlY3Rpb24tN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ey0yMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHluYW1pYz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldEFjdGl2ZT17KCkgPT4gc2V0TGluaygndGVhbScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhbmNlbEV2ZW50cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9ID5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGhvbmV9Lz4qL31cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJzZWN0aW9uLThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IEZ1bmM3KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHluYW1pYz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldEFjdGl2ZT17KCkgPT4gc2V0TGluaygnY29udGFjdCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhbmNlbEV2ZW50cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9xdW90ZVwiICBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdldCBhIHF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0gc3R5bGU9e3N0eWxlMX0+PC9kaXY+Ki99XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvZm9vdGVyL2Zvb3Rlci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUxvY2F0aW9uQXJyb3csIGZhU21zfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBzZW5kTWFpbCA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwibWFpbHRvOm5mb0BkdG10cnVja2luZy5jb20/c3ViamVjdD1DYXIgZXhwb3J0YXRpb25cIjtcclxuICAgIH1cclxuICAgIGNvbnN0IGluc3RhR3JhbSA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb21cIilcclxuICAgIH1cclxuICAgIGNvbnN0IGZhY2VCb29rID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3lvdXR1LmJlL0NSdEI3RFpKcUhrXCI7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5mYWNlYm9vay5jb21cIik7XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgdHdpdFRlciA9ICgpID0+IHtcclxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly95b3V0dS5iZS9DUnRCN0RaSnFIa1wiO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cudHdpdHRlci5jb21cIik7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIGFyZSBhIGxlYWRpbmcgY29tcGFueSBpbiBsb2dpc3RpY3MgdGhhdCBkZWxpdmVycyByZWFsIHZhbHVlLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW59IG9uQ2xpY2s9e2ZhY2VCb29rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZzF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJzY2FsZSgwLjM1KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNy4yLDY0SDI4Yy0yLjUsMC00LjUtMi00LjUtNC41VjM3SDE3Yy0yLjUsMC00LjUtMi00LjUtNC41di02LjljMC0yLjUsMi00LjYsNC41LTQuNmg2LjV2LTUuNWMwLTkuMSw2LjItMTUuNSwxNS0xNS41XHJcblx0IFx0SDQ3YzEuNCwwLDIuNSwxLjEsMi41LDIuNXYxM2MwLDEuNC0xLjEsMi41LTIuNSwyLjVoLTUuNXYzaDUuNGMwLDAsMC4xLDAsMC4xLDBjMS40LDAuMSwyLjcsMC43LDMuNSwxLjhjMC44LDEuMSwxLjIsMi40LDAuOSwzLjhcclxuXHRcdGwtMS4zLDYuN0M0OS44LDM1LjQsNDgsMzcsNDUuNywzN2gtNC4zdjIyLjVDNDEuNSw2MiwzOS41LDY0LDM3LjIsNjR6IE0yOC41LDU5aDhWMzQuNWMwLTEuNCwxLjEtMi41LDIuNS0yLjVoNi4zbDEuMi02SDM5XHJcblx0XHRjLTEuNCwwLTIuNS0xLjEtMi41LTIuNXYtOGMwLTEuNCwxLjEtMi41LDIuNS0yLjVoNS41VjVoLTZjLTYuMSwwLTEwLDQuMS0xMCwxMC41djhjMCwxLjQtMS4xLDIuNS0yLjUsMi41aC04LjV2NkgyNlxyXG5cdFx0YzEuNCwwLDIuNSwxLjEsMi41LDIuNVY1OXpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbn0gb25DbGljaz17aW5zdGFHcmFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZzF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJzY2FsZSgwLjM1KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMiwxNi45Yy04LjMsMC0xNSw2LjgtMTUsMTUuMWMwLDguMyw2LjcsMTUuMSwxNSwxNS4xYzguMywwLDE1LTYuOCwxNS0xNS4xQzQ3LDIzLjcsNDAuMywxNi45LDMyLDE2Ljl6IE0zMiw0Mi4xXHJcblx0XHRjLTUuNSwwLTEwLTQuNS0xMC0xMC4xczQuNS0xMC4xLDEwLTEwLjFjNS41LDAsMTAsNC41LDEwLDEwLjFTMzcuNSw0Mi4xLDMyLDQyLjF6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NywxMGMtMi44LDAtNSwyLjMtNSw1czIuMiw1LDUsNWMyLjgsMCw1LTIuMyw1LTVTNDkuOCwxMCw0NywxMHpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ4LDBIMTZDNy4yLDAsMCw3LjIsMCwxNnYzMS43QzAsNTYuNyw3LjMsNjQsMTYuMyw2NGgzMS41QzU2LjcsNjQsNjQsNTYuNyw2NCw0Ny43VjE2QzY0LDcuMiw1Ni44LDAsNDgsMHogTTU5LDQ3LjdcclxuXHRcdEM1OSw1My45LDU0LDU5LDQ3LjgsNTlIMTYuM0MxMC4xLDU5LDUsNTQsNSw0Ny44VjE2QzUsOS45LDkuOSw1LDE2LDVINDhjNi4xLDAsMTEsNC45LDExLDExVjQ3Ljd6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW59IG9uQ2xpY2s9e3R3aXRUZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInNjYWxlKDAuMzUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyLjIsNThjLTUuNCwwLTEzLjMtMS0yMC01LjhjLTItMS40LTIuOC00LjEtMS44LTYuNGMwLjktMi4zLDMuNC0zLjYsNS45LTMuMWwwLDBjMCwwLDEsMC4yLDIuNSwwLjFcclxuXHRcdGMtMS0xLjQtMS45LTMtMi41LTQuN2MtMC4yLTAuNi0wLjMtMS4xLTAuMy0xLjdjLTIuNS0yLjktMy44LTYuNS0zLjgtMTAuNWMwLTAuOSwwLjItMS44LDAuNy0yLjVDMiwyMCwxLjcsMTUuNSw0LjYsMTAuN1xyXG5cdFx0QzUuNSw5LjMsNyw4LjMsOC43LDguMWMwLjEsMCwwLjEsMCwwLjIsMGMxLjgtMC4xLDMuNCwwLjYsNC41LDEuOGwwLDBjMC43LDAuNyw2LjEsNi40LDEzLDguM0MyOCwxMS4yLDM0LjQsNiw0Mi4xLDZcclxuXHRcdGMzLjQsMCw2LjcsMSw5LjMsMi45YzAuNy0wLjIsMS42LTAuNSwyLjQtMS4xYzEuNi0xLjEsMy43LTEuMyw1LjQtMC40YzEuNywwLjgsMi45LDIuNCwzLjEsNC4zYzAsMC4xLDAsMC4yLDAsMC4zXHJcblx0XHRjMCwwLjEsMCwwLjMsMCwwLjZjMS40LDEuNCwxLjksMy40LDEuMyw1LjJjLTAuNSwxLjctMi4xLDMuOC01LjQsNi44QzU4LDMyLDU0LjUsNTEuOCwyOS42LDU3LjRDMjkuNCw1Ny40LDI2LjQsNTgsMjIuMiw1OHpcclxuXHRcdCBNNS40LDQ3LjZjLTAuMiwwLTAuMywwLjEtMC4zLDAuMWMwLDAsMCwwLjEsMCwwLjFDNSw0Ny45LDUsNDgsNS4xLDQ4LjFjNS42LDQuMSwxMi40LDQuOSwxNy4xLDQuOWMzLjcsMCw2LjMtMC41LDYuNC0wLjVcclxuXHRcdGMyMi42LTUuMSwyNC44LTIzLjYsMjQuOS0yOS4yYzAtMC43LDAuMy0xLjQsMC44LTEuOGM0LjItMy43LDQuNy01LDQuNy01LjFjMC4xLTAuMi0wLjEtMC40LTAuMi0wLjRjMCwwLTAuMS0wLjEtMC4xLTAuMVxyXG5cdFx0Yy0xLjEtMC41LTEuNy0xLjgtMS4zLTNjMC4xLTAuMywwLjEtMC41LDAuMS0wLjdjMC0wLjEtMC4xLTAuMi0wLjItMC4zYy0wLjEsMC0wLjEtMC4xLTAuMi0wLjFjLTAuMSwwLTAuMiwwLTAuNCwwLjFcclxuXHRcdGMtMi4yLDEuNS00LjUsMi01LjYsMi4xYy0wLjcsMC4xLTEuMy0wLjEtMS44LTAuNWMtMS45LTEuNi00LjUtMi40LTcuMS0yLjRjLTYuMSwwLTExLDQuNS0xMS4yLDEwLjRjMCwwLjctMC4zLDEuNC0wLjksMS44XHJcblx0XHRjLTAuNSwwLjUtMS4yLDAuNy0xLjksMC42Yy05LjUtMS4zLTE3LTguOS0xOC41LTEwLjRjMCwwLTAuMS0wLjEtMC4xLTAuMWMtMC4xLTAuMS0wLjMtMC4xLTAuNC0wLjFjLTAuMiwwLTAuMywwLjItMC40LDAuM1xyXG5cdFx0Yy0xLjgsMy0yLDYuMi0wLjcsOS40YzAuNCwxLDAuMiwyLjItMC43LDIuOWMtMC4xLDAuMS0wLjIsMC4yLTAuMiwwLjJjMCwzLjIsMSw1LjgsMy4yLDcuOGMwLjcsMC43LDAuOSwxLjYsMC43LDIuNVxyXG5cdFx0YzAsMC4xLDAsMC4yLDAsMC4zYzAuOCwyLjUsMi40LDQuNSw0LjYsNS44YzAuOCwwLjUsMS4zLDEuNCwxLjIsMi40Yy0wLjEsMS0wLjgsMS44LTEuNywyLjFjLTQuNiwxLjUtOS41LDAuOC05LjcsMC43XHJcblx0XHRDNS41LDQ3LjYsNS40LDQ3LjYsNS40LDQ3LjZ6IE01OC41LDE1LjdDNTguNSwxNS43LDU4LjUsMTUuNyw1OC41LDE1LjdDNTguNSwxNS43LDU4LjUsMTUuNyw1OC41LDE1Ljd6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiIGQ9XCJNLTUuNywwLjlMLTUuNywwLjlMLTUuNywwLjl6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTMyLDMyTDMyLDMyTDMyLDMyelwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnRhbnQgTGlua3NcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJzZWN0aW9uLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhbmNlbEV2ZW50cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT4gPHNwYW4+LTwvc3Bhbj4gIEhvbWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJzZWN0aW9uLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXsyMzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHluYW1pYz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ2FuY2VsRXZlbnRzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PiA8c3Bhbj4tPC9zcGFuPiAgQWJvdXQgdXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwic2VjdGlvbi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEeW5hbWljPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYW5jZWxFdmVudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW5rfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+IDxzcGFuPi08L3NwYW4+ICBTZXJ2aWNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJzZWN0aW9uLTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstODB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHluYW1pYz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ2FuY2VsRXZlbnRzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PiA8c3Bhbj4tPC9zcGFuPiAgV2h5IERUTTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJzZWN0aW9uLThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhbmNlbEV2ZW50cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT4gPHNwYW4+LTwvc3Bhbj4gIEJsb2c8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE91ciBPZmZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGljYWdvLCBJTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBoaWxhZGVscGhpYSwgUEFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGlzb24sIE5KXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UZWxlcGhvbmU6PC9zcGFuPiA8YSBjbGFzc05hbWU9e3N0eWxlcy5waG9uZU51bWJlcn0gaHJlZj1cInRlbDorMTc3MzMwOTIxMTFcIj4rMSA3NzMgMzA5IDIxMTE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2VuZE1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsOjwvc3Bhbj4gIGluZm9AZHRtdHJ1Y2tpbmcuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0ZvdXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYnN9PlxyXG4gICAgICAgICAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjEgRFRNIFRydWNraW5nIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvaGVhZGVyL2NvbnRhY3QubW9kdWxlLnNjc3NcIlxyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge2ZhRW52ZWxvcGUsIGZhTG9jYXRpb25BcnJvdywgZmFQaG9uZX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgRmFjZWJvb2t0ZWFtZGVmdWx0MSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL3ZlY3Rvckljb25zL2ZhY2Vib29rdGVhbWRlZnVsdDFcIjtcclxuaW1wb3J0IFR3aXR0ZXJ0YW1kZWZ1bHQxIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvdmVjdG9ySWNvbnMvdHdpdHRlcnRhbWRlZnVsdDFcIjtcclxuaW1wb3J0IEluc3RhZ3JhbXRlYW1kZWZ1bHQxIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvdmVjdG9ySWNvbnMvaW5zdGFncmFtdGVhbWRlZnVsdDFcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDb250YWN0KHByb3BzKSB7XHJcbiAgICBjb25zdCBzZW5kTWFpbCA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwibWFpbHRvOmluZm9AZHRtdHJ1Y2tpbmcuY29tP3N1YmplY3Q9ZXhwb3J0YXRpb25cIjtcclxuICAgIH1cclxuICAgIGNvbnN0IGZhY2VCb29rID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cDovL2ZhY2Vib29rLmNvbVwiKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5zdGFHcmFtID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vaW5zdGFncmFtLmNvbScpXHJcbiAgICB9XHJcbiAgICBjb25zdCB0d2l0VGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cDovL3R3aXR0ZXIuY29tXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbkxlZnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZHJlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRW52ZWxvcGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb0BkdG10cnVja2luZy5jb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRyZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTG9jYXRpb25BcnJvd30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEyNzUsIERhdmlzIFJkLCBDaGljYWdvLCBJbGxpbm9pc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkcmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0SWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBob25lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMucGhvbmVOdW1iZXJ9IGhyZWY9XCJ0ZWw6KzE3NzMzMDkyMTExXCI+KzEgNzczIDMwOSAyMSAxMTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5SaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodEljb259IG9uQ2xpY2s9e2ZhY2VCb29rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rdGVhbWRlZnVsdDEvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRJY29ufSBvbkNsaWNrPXt0d2l0VGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJ0YW1kZWZ1bHQxLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0SWNvbn0gb25DbGljaz17aW5zdGFHcmFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEluc3RhZ3JhbXRlYW1kZWZ1bHQxLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHtmYUJhcnN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCJcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7b25QcmVzczEsIGJvb2wxfSkge1xyXG4gICAgY29uc3QgcmVmPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaXNTY3JvbGwsIHNldElzU2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHN0eWxlc01haW4gPSB7XHJcbiAgICAgICAgZGlzcGxheTogYCR7Ym9vbDEgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn1gLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgdG9wOiBcIjBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB6SW5kZXg6IFwiMTAwXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuNSlcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgW2xpbmssc2V0TGlua10gPSB1c2VTdGF0ZSgnaG9tZScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbChlKXtcclxuXHJcbiAgIGlmKHJlZi5jdXJyZW50KXtcclxuICAgICAgIGlmKHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IDApe1xyXG4gICAgICAgICAgIHNldElzU2Nyb2xsKHRydWUpXHJcbiAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICBzZXRJc1Njcm9sbChmYWxzZSlcclxuICAgICAgIH1cclxuICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCk9PndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlc01haW59IG9uQ2xpY2s9eygpID0+IG9uUHJlc3MxKCFib29sMSl9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMud3IsIGlzU2Nyb2xsID8gc3R5bGVzLnRvcDonJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9nfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcnN9IG9uQ2xpY2s9eygpID0+IG9uUHJlc3MxKCFib29sMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwic2VjdGlvbi0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmt9ICR7bGluayA9PT0gJ2hvbWUnID8gc3R5bGVzLmFub3RoZXIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRBY3RpdmU9eygpID0+IHNldExpbmsoJ2hvbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYW5jZWxFdmVudHM9e2ZhbHNlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLmJyYW5kLCBpc1Njcm9sbCA/IHN0eWxlcy5uZXdCcmFuZDonJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cInNlY3Rpb24tMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rfSAke2xpbmsgPT09ICdob21lJyA/IHN0eWxlcy5hbm90aGVyIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHluYW1pYz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRBY3RpdmU9eygpID0+IHNldExpbmsoJ2hvbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ2FuY2VsRXZlbnRzPXtmYWxzZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6ICcnXS5qb2luKCcgJyl9PiAgSE9NRTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJzZWN0aW9uLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gJHtsaW5rID09PSAnc2VydmljZXMnID8gc3R5bGVzLmFub3RoZXIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17MjQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0QWN0aXZlPXsoKSA9PiBzZXRMaW5rKCdhYm91dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYW5jZWxFdmVudHM9e2ZhbHNlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6IFwiXCJdLmpvaW4oJyAnKX0+QUJPVVQgVVM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwic2VjdGlvbi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmt9ICR7bGluayA9PT0gJ3NlcnZpY2VzJyA/IHN0eWxlcy5hbm90aGVyIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ey00MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEeW5hbWljPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldEFjdGl2ZT17KCkgPT4gc2V0TGluaygnc2VydmljZXMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ2FuY2VsRXZlbnRzPXtmYWxzZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMubGluaywgaXNTY3JvbGwgPyBzdHlsZXMudG9wOlwiXCJdLmpvaW4oJyAnKX0+U0VSVklDRVM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwic2VjdGlvbi02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmt9ICR7bGluayA9PT0gJ3doeUR0bScgPyBzdHlsZXMuYW5vdGhlciA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstODB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHluYW1pYz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRBY3RpdmU9eygpID0+IHNldExpbmsoJ3doeUR0bScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYW5jZWxFdmVudHM9e2ZhbHNlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6JyddLmpvaW4oJyAnKX0+V0hZIERUTT88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RyaXZlcnNcIiAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gJHtsaW5rID09PSAnZm9yRHJpdmVycycgPyBzdHlsZXMuYW5vdGhlciA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6JyddLmpvaW4oJyAnKX0+Rk9SIERSSVZFUlM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwic2VjdGlvbi03XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmt9ICR7bGluayA9PT0gJ1RlYW0nID8gc3R5bGVzLmFub3RoZXIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTE1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEeW5hbWljPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldEFjdGl2ZT17KCkgPT4gc2V0TGluaygnVGVhbScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYW5jZWxFdmVudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFzb3NpeUxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5saW5rLCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6JyddLmpvaW4oJyAnKX0+Q09OVEFDVDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJzZWN0aW9uLThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gJHtsaW5rID09PSAnQ29udGFjdCcgPyBzdHlsZXMuYW5vdGhlciA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0R5bmFtaWM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0QWN0aXZlPXsoKSA9PiBzZXRMaW5rKCdDb250YWN0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhbmNlbEV2ZW50cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLmxpbmssIGlzU2Nyb2xsID8gc3R5bGVzLnRvcDonJ10uam9pbignICcpfT5CTE9HPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9xdW90ZVwiICBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rfSAke2xpbmsgPT09ICdUZWFtJyA/IHN0eWxlcy5hbm90aGVyIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLmxpbms4LCBpc1Njcm9sbCA/IHN0eWxlcy50b3A6JyddLmpvaW4oJyAnKX0+R0VUIEEgUVVPVEU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3QgcGVyY2VudFNpemVzID0gWy4uLnNpemVzLm1hdGNoQWxsKC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nKV0ubWFwKChtKSA9PlxuICAgICAgcGFyc2VJbnQobVsyXSlcbiAgICApXG4gICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoXG4gICAgICAgICAgKHMpID0+IHMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICksXG4gICAgICAgIGtpbmQ6ICd3JyxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBhbGxTaXplcywga2luZDogJ3cnIH1cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuXG4gICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAnaW5oZXJpdCcgOiAnaGlkZGVuJyxcblxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsImltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIDxIb21lLz5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBCYWRnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3ZnIGZpbGw9XCIjQ0QyNDFEXCIgaGVpZ2h0PVwiNjBweFwiIHZpZXdCb3g9XCItNjMgMCA1MTIgNTEyLjAwMjAzXCIgd2lkdGg9XCI2MHB4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtMTU1LjcwMzEyNSA0MDkuMjEwOTM4Yy0xMi44Nzg5MDYgNC4wODk4NDMtMjYuODgyODEzIDMuODcxMDkzLTM5Ljc0NjA5NC0uODA4NTk0LTEyLjg2MzI4MS00LjY4MzU5NC0yMy43MjY1NjItMTMuNTE1NjI1LTMwLjk2NDg0My0yNC45MjU3ODItMTMuNTAzOTA3LS41NjI1LTI2LjU4NTkzOC01LjU1ODU5My0zNy4wNzAzMTMtMTQuMzU1NDY4LTEuMzI0MjE5LTEuMTA5Mzc1LTIuNTk3NjU2LTIuMjczNDM4LTMuODEyNS0zLjQ4NDM3NWwtMzMuNDQ1MzEzIDY5Ljk5MjE4N2MtMi41MTE3MTggNS4yNTM5MDYtMS43OTY4NzQgMTEuNDgwNDY5IDEuODM1OTM4IDE2LjAzMTI1IDMuNjMyODEyIDQuNTUwNzgyIDkuNTQ2ODc1IDYuNjI1IDE1LjIzMDQ2OSA1LjMzNTkzOGw2Ny4wMzkwNjItMTUuMjAzMTI1IDMwLjI4NTE1NyA2MS43MTA5MzdjMi41NTQ2ODcgNS4yMDMxMjUgNy44NDc2NTYgOC41IDEzLjYzNjcxOCA4LjVoLjA4MjAzMmM1LjgyNDIxOC0uMDMxMjUgMTEuMTE3MTg3LTMuMzkwNjI1IDEzLjYyNS04LjY0NDUzMWwzOC44Nzg5MDYtODEuMzU5Mzc1Yy0xMi45NTMxMjUtLjQzMzU5NC0yNS40MDYyNS00Ljk1MzEyNS0zNS41NzQyMTktMTIuNzg5MDYyem0wIDBcIi8+PHBhdGggZD1cIm0zMzguNzM0Mzc1IDM2OS4xMjEwOTRjLTEwLjQ4NDM3NSA4Ljc5Njg3NS0yMy41NzAzMTMgMTMuNzg5MDYyLTM3LjA3MDMxMyAxNC4zNTE1NjItNy4yMzgyODEgMTEuNDE0MDYzLTE4LjEwNTQ2OCAyMC4yNDYwOTQtMzAuOTY4NzUgMjQuOTI1NzgyLTEyLjg1OTM3NCA0LjY4MzU5My0yNi44NjMyODEgNC45MDIzNDMtMzkuNzQyMTg3LjgxMjUtMTAuMTY3OTY5IDcuODM1OTM3LTIyLjYyMTA5NCAxMi4zNTU0NjgtMzUuNTc0MjE5IDEyLjc4OTA2MmwzOC44NzUgODEuMzU5Mzc1YzIuNTExNzE5IDUuMjUzOTA2IDcuODA0Njg4IDguNjA5Mzc1IDEzLjYyODkwNiA4LjY0MDYyNWguMDc4MTI2YzUuNzkyOTY4IDAgMTEuMDgyMDMxLTMuMjkyOTY5IDEzLjYzNjcxOC04LjQ5NjA5NGwzMC4yODkwNjMtNjEuNzEwOTM3IDY3LjAzOTA2MiAxNS4xOTkyMTljNS42Nzk2ODggMS4yOTI5NjggMTEuNTkzNzUtLjc4MTI1IDE1LjIyNjU2My01LjMzMjAzMiAzLjYzNjcxOC00LjU1MDc4MSA0LjM0NzY1Ni0xMC43NzczNDQgMS44Mzk4NDQtMTYuMDMxMjVsLTMzLjQ0OTIxOS02OS45OTIxODdjLTEuMjE0ODQ0IDEuMjEwOTM3LTIuNDg0Mzc1IDIuMzcxMDkzLTMuODA4NTk0IDMuNDg0Mzc1em0wIDBcIi8+PHBhdGggZD1cIm0zODAuMDI3MzQ0IDE4Ni40ODA0NjljNS40NDUzMTItNi45NzI2NTcgNy42ODc1LTE1Ljk2MDkzOCA2LjE1NjI1LTI0LjY1NjI1LTEuNTM1MTU2LTguNjk1MzEzLTYuNzE0ODQ0LTE2LjM3NS0xNC4yMTQ4NDQtMjEuMDY2NDA3LTUuOTEwMTU2LTMuNjk1MzEyLTguNTUwNzgxLTEwLjkzNzUtNi4zOTQ1MzEtMTcuNTcwMzEyIDIuNzMwNDY5LTguNDE0MDYyIDEuNzY1NjI1LTE3LjYyNS0yLjY1MjM0NC0yNS4yNzM0MzgtNC40MTQwNjMtNy42NDg0MzctMTEuOTEwMTU2LTEzLjA4OTg0My0yMC41NjI1LTE0LjkzMzU5My02LjgxNjQwNi0xLjQ0OTIxOS0xMS43NzM0MzctNy4zNTU0NjktMTIuMDE5NTMxLTE0LjMyMDMxMy0uMzEyNS04Ljg0Mzc1LTQuMzcxMDk0LTE3LjE2Nzk2OC0xMS4xMzI4MTMtMjIuODQzNzUtNi43NjU2MjUtNS42Nzk2ODctMTUuNjY3OTY5LTguMjI2NTYyLTI0LjQzMzU5My03LTYuODk4NDM4Ljk3MjY1Ni0xMy41NzgxMjYtMi44ODY3MTgtMTYuMTkxNDA3LTkuMzQ3NjU2LTMuMzE2NDA2LTguMjAzMTI1LTkuOTc2NTYyLTE0LjY0MDYyNS0xOC4yNzczNDMtMTcuNjYwMTU2LTguMjk2ODc2LTMuMDE5NTMyLTE3LjUzOTA2My0yLjM3MTA5NC0yNS4zNDc2NTcgMS43ODEyNS02LjE1NjI1IDMuMjY5NTMxLTEzLjc1IDEuOTI5Njg3LTE4LjQxNzk2OS0zLjI1LTUuOTE3OTY4LTYuNTcwMzEzLTE0LjM3ODkwNi0xMC4zMzk4NDQtMjMuMjEwOTM3LTEwLjMzOTg0NHMtMTcuMjkyOTY5IDMuNzY5NTMxLTIzLjIxMDkzNyAxMC4zMzk4NDRjLTQuNjY3OTY5IDUuMTc5Njg3LTEyLjI2MTcxOSA2LjUxOTUzMS0xOC40MTc5NjkgMy4yNS03LjgwODU5NC00LjE1MjM0NC0xNy4wNTA3ODEtNC44MDA3ODItMjUuMzQ3NjU3LTEuNzgxMjUtOC4zMDA3ODEgMy4wMTk1MzEtMTQuOTYwOTM3IDkuNDU3MDMxLTE4LjI3NzM0MyAxNy42NjAxNTYtMi42MTMyODEgNi40NjA5MzgtOS4yODkwNjMgMTAuMzIwMzEyLTE2LjE5MTQwNyA5LjM0NzY1Ni04Ljc2MTcxOC0xLjIyNjU2Mi0xNy42Njc5NjggMS4zMjAzMTMtMjQuNDMzNTkzIDctNi43NjU2MjUgNS42NzU3ODItMTAuODIwMzEzIDE0LTExLjEzMjgxMyAyMi44NDM3NS0uMjQ2MDk0IDYuOTY0ODQ0LTUuMTk5MjE4IDEyLjg3MTA5NC0xMi4wMTk1MzEgMTQuMzI0MjE5LTguNjUyMzQ0IDEuODM5ODQ0LTE2LjE0ODQzNyA3LjI4MTI1LTIwLjU2MjUgMTQuOTI5Njg3LTQuNDE3OTY5IDcuNjQ4NDM4LTUuMzgyODEzIDE2Ljg1OTM3Ni0yLjY1MjM0NCAyNS4yNzM0MzggMi4xNTIzNDQgNi42MzI4MTItLjQ4NDM3NSAxMy44NzUtNi4zOTQ1MzEgMTcuNTc0MjE5LTcuNSA0LjY4NzUtMTIuNjc5Njg4IDEyLjM2NzE4Ny0xNC4yMTQ4NDQgMjEuMDYyNS0xLjUzMTI1IDguNjk5MjE5LjcxMDkzOCAxNy42ODM1OTMgNi4xNTYyNSAyNC42NjAxNTYgNC4yODkwNjMgNS40OTIxODcgNC4yODkwNjMgMTMuMjAzMTI1IDAgMTguNjk1MzEzLTUuNDQ1MzEyIDYuOTcyNjU2LTcuNjg3NSAxNS45NjA5MzctNi4xNTYyNSAyNC42NTYyNSAxLjUzNTE1NiA4LjY5OTIxOCA2LjcxNDg0NCAxNi4zNzUgMTQuMjE0ODQ0IDIxLjA2NjQwNiA1LjkxMDE1NiAzLjY5NTMxMiA4LjU1MDc4MSAxMC45Mzc1IDYuMzk4NDM4IDE3LjU3MDMxMi0yLjczNDM3NiA4LjQxNDA2My0xLjc2NTYyNiAxNy42MjUgMi42NDg0MzcgMjUuMjczNDM4IDQuNDE3OTY5IDcuNjQ4NDM3IDExLjkxMDE1NiAxMy4wODk4NDQgMjAuNTYyNSAxNC45MzM1OTQgNi44MjAzMTMgMS40NDkyMTggMTEuNzczNDM3IDcuMzU1NDY4IDEyLjAxOTUzMSAxNC4zMjQyMTguMzEyNSA4LjgzOTg0NCA0LjM3MTA5NCAxNy4xNjc5NjkgMTEuMTM2NzE5IDIyLjg0Mzc1IDYuNzY1NjI1IDUuNjc1NzgyIDE1LjY3MTg3NSA4LjIyNjU2MyAyNC40Mjk2ODcgNi45OTYwOTQgNi45MDIzNDQtLjk2NDg0NCAxMy41NzgxMjYgMi44ODY3MTkgMTYuMTkxNDA3IDkuMzUxNTYyIDMuMzE2NDA2IDguMTk5MjE5IDkuOTgwNDY5IDE0LjYzNjcxOSAxOC4yNzczNDMgMTcuNjU2MjUgOC4zMDA3ODIgMy4wMTk1MzIgMTcuNTM5MDYzIDIuMzcxMDk0IDI1LjM1MTU2My0xLjc3NzM0MyAyLjI1LTEuMTk5MjE5IDQuNjk5MjE5LTEuNzc3MzQ0IDcuMTIxMDk0LTEuNzc3MzQ0IDQuMTk5MjE5IDAgOC4zMzIwMzEgMS43MzgyODEgMTEuMjkyOTY5IDUuMDIzNDM3IDUuOTIxODc0IDYuNTc0MjE5IDE0LjM4MjgxMiAxMC4zMzk4NDQgMjMuMjEwOTM3IDEwLjMzOTg0NCA4LjgzMjAzMSAwIDE3LjI5Mjk2OS0zLjc2OTUzMSAyMy4yMTQ4NDQtMTAuMzM5ODQ0IDQuNjY0MDYyLTUuMTc5Njg3IDEyLjI1NzgxMi02LjUxNTYyNCAxOC40MTQwNjItMy4yNDYwOTMgNy44MTI1IDQuMTUyMzQzIDE3LjA1MDc4MSA0Ljc5Njg3NSAyNS4zNTE1NjMgMS43NzczNDMgOC4yOTY4NzUtMy4wMTk1MzEgMTQuOTU3MDMxLTkuNDU3MDMxIDE4LjI3MzQzNy0xNy42NTYyNSAyLjYxMzI4MS02LjQ2NDg0MyA5LjI5Mjk2OS0xMC4zMjAzMTIgMTYuMTk1MzEzLTkuMzUxNTYyIDguNzU3ODEyIDEuMjI2NTYyIDE3LjY2NDA2Mi0xLjMyMDMxMiAyNC40Mjk2ODctNi45OTYwOTQgNi43NjU2MjUtNS42NzU3ODEgMTAuODI0MjE5LTE0LjAwMzkwNiAxMS4xMzY3MTktMjIuODQzNzUuMjQyMTg4LTYuOTY4NzUgNS4xOTkyMTktMTIuODcxMDk0IDEyLjAxNTYyNS0xNC4zMjQyMTggOC42NTIzNDQtMS44NDM3NSAxNi4xNDg0MzctNy4yODUxNTcgMjAuNTY2NDA2LTE0LjkzMzU5NCA0LjQxNDA2My03LjY0ODQzOCA1LjM3ODkwNy0xNi44NTkzNzUgMi42NDg0MzgtMjUuMjczNDM4LTIuMTUyMzQ0LTYuNjI4OTA2LjQ4NDM3NS0xMy44NzUgNi4zOTQ1MzEtMTcuNTcwMzEyIDcuNTAzOTA2LTQuNjkxNDA2IDEyLjY4MzU5NC0xMi4zNjcxODggMTQuMjE4NzUtMjEuMDYyNSAxLjUzMTI1LTguNjk5MjE5LS43MTA5MzgtMTcuNjgzNTk0LTYuMTU2MjUtMjQuNjYwMTU2LTQuMjkyOTY5LTUuNDk2MDk0LTQuMjkyOTY5LTEzLjIwMzEyNi0uMDAzOTA2LTE4LjY5OTIxOXptLTE4Ni42OTkyMTkgMTQyLjQ1NzAzMWMtNzMuMzk0NTMxIDAtMTMzLjEwOTM3NS01OS43MTA5MzgtMTMzLjEwOTM3NS0xMzMuMTA1NDY5IDAtNzMuMzk4NDM3IDU5LjcxNDg0NC0xMzMuMTA5Mzc1IDEzMy4xMDkzNzUtMTMzLjEwOTM3NXMxMzMuMTA1NDY5IDU5LjcxMDkzOCAxMzMuMTA1NDY5IDEzMy4xMDkzNzVjMCA3My4zOTQ1MzEtNTkuNzEwOTM4IDEzMy4xMDU0NjktMTMzLjEwNTQ2OSAxMzMuMTA1NDY5em0wIDBcIi8+PHBhdGggZD1cIm0xOTMuMzI4MTI1IDkzLjEwNTQ2OWMtNTYuNjQ0NTMxIDAtMTAyLjcyNjU2MyA0Ni4wODIwMzEtMTAyLjcyNjU2MyAxMDIuNzI2NTYyIDAgNTYuNjQwNjI1IDQ2LjA4MjAzMiAxMDIuNzIyNjU3IDEwMi43MjY1NjMgMTAyLjcyMjY1N3MxMDIuNzIyNjU2LTQ2LjA4MjAzMiAxMDIuNzIyNjU2LTEwMi43MjI2NTdjMC01Ni42NDQ1MzEtNDYuMDgyMDMxLTEwMi43MjY1NjItMTAyLjcyMjY1Ni0xMDIuNzI2NTYyem0tNjQuMTY0MDYzIDgzLjg4MjgxMmM1LjkzMzU5NC01LjkzMzU5MyAxNS41NTA3ODItNS45MzM1OTMgMjEuNDg0Mzc2IDBsMzAuMjczNDM3IDMwLjI3MzQzOCA1NS4wODU5MzctNTUuMDg1OTM4YzUuOTMzNTk0LTUuOTMzNTkzIDE1LjU1MDc4Mi01LjkzMzU5MyAyMS40ODQzNzYgMCA1LjkzMzU5MyA1LjkyOTY4OCA1LjkzMzU5MyAxNS41NTA3ODEgMCAyMS40ODA0NjlsLTY1LjgyODEyNiA2NS44MzIwMzFjLTIuODQ3NjU2IDIuODQ3NjU3LTYuNzE0ODQzIDQuNDQ5MjE5LTEwLjc0MjE4NyA0LjQ0OTIxOXMtNy44OTA2MjUtMS42MDE1NjItMTAuNzQyMTg3LTQuNDQ5MjE5bC00MS4wMTE3MTktNDEuMDE1NjI1Yy01LjkzNzUtNS45MzM1OTQtNS45Mzc1LTE1LjU1MDc4MS0uMDAzOTA3LTIxLjQ4NDM3NXptMCAwXCIvPjwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENhbGxDZW50ZXIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN2ZyBmaWxsPVwiI0NEMjQxRFwiIGhlaWdodD1cIjgwcHhcIiB2aWV3Qm94PVwiLTQ4IDAgNTEyIDUxMlwiIHdpZHRoPVwiODBweFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTMwMSAzMzUuNTQ2ODc1di43ODkwNjNjMCA1MS4zOTA2MjQtNDEuODA4NTk0IDkzLjE5OTIxOC05My4xOTkyMTkgOTMuMTk5MjE4cy05My4xOTkyMTktNDEuODA4NTk0LTkzLjE5OTIxOS05My4xOTkyMTh2LS43ODkwNjNjLTY4LjY1MjM0MyAyMy45ODA0NjktMTE0LjYwMTU2MiA4OC41NDI5NjktMTE0LjYwMTU2MiAxNjEuNDUzMTI1IDAgOC4yODUxNTYgNi43MTQ4NDQgMTUgMTUgMTVoMzg1LjYwMTU2MmM4LjI4MTI1IDAgMTUtNi43MjI2NTYgMTUtMTUuMDA3ODEyIDAtNzIuOTAyMzQ0LTQ1Ljk0OTIxOC0xMzcuNDYwOTM4LTExNC42MDE1NjItMTYxLjQ0NTMxM3ptMCAwXCIvPjxwYXRoIGQ9XCJtMTQ0LjYwMTU2MiAzMzYuMDUwNzgxdi4yODUxNTdjMCAzNC44NDc2NTYgMjguMzUxNTYzIDYzLjE5OTIxOCA2My4xOTkyMTkgNjMuMTk5MjE4IDM0Ljg0NzY1NyAwIDYzLjE5OTIxOS0yOC4zNTE1NjIgNjMuMTk5MjE5LTYzLjE5OTIxOHYtLjM5MDYyNmMtMTkuMzU1NDY5IDguNTE1NjI2LTQwLjczNDM3NSAxMy4yNTM5MDctNjMuMTk5MjE5IDEzLjI1MzkwNy0yMi4xMTcxODcgMC00My41MzUxNTYtNC41MzUxNTctNjMuMTk5MjE5LTEzLjE0ODQzOHptMCAwXCIvPjxwYXRoIGQ9XCJtMzk1LjI2NTYyNSAxNzUuNjY3OTY5di0zMi4xMzI4MTNjMC0xMi41ODk4NDQtNC45MDIzNDQtMjQuNDI1NzgxLTEzLjc5Njg3NS0zMy4zMjAzMTItNC42ODc1LTQuNjkxNDA2LTEwLjIwMzEyNS04LjI0MjE4OC0xNi4yMDMxMjUtMTAuNTc4MTI1djExOS45NDkyMTljNi4wMDM5MDYtMi4zMzIwMzIgMTEuNTExNzE5LTUuOTAyMzQ0IDE2LjE5NTMxMy0xMC41ODk4NDQgOC45MDIzNDMtOC45MDIzNDQgMTMuODA0Njg3LTIwLjczODI4MiAxMy44MDQ2ODctMzMuMzI4MTI1em0wIDBcIi8+PHBhdGggZD1cIm0xNTkuNjAxNTYyIDY0LjI2NTYyNWM2Ljk1MzEyNiAwIDEyLjk1MzEyNiA0Ljc4MTI1IDE0LjU3NDIxOSAxMS40NjA5MzcgNy44MTY0MDcgMzEuMDkzNzUgMzUuNjUyMzQ0IDUyLjgwNDY4OCA2Ny43MjY1NjMgNTIuODA0Njg4aDkzLjM2MzI4MXYtMzMuMjE0ODQ0YzAtNTIuNTU4NTk0LTQyLjc1NzgxMy05NS4zMTY0MDYtOTUuMzE2NDA2LTk1LjMxNjQwNmgtNjQuMzAwNzgxYy01Mi41NTQ2ODggMC05NS4zMTY0MDcgNDIuNzU3ODEyLTk1LjMxNjQwNyA5NS4zMTY0MDZ2Ni44MTI1bDcyLjU1ODU5NC0zNi4yNzczNDRjMi4wODIwMzEtMS4wNDI5NjggNC4zNzg5MDYtMS41ODU5MzcgNi43MTA5MzctMS41ODU5Mzd6bTAgMFwiLz48cGF0aCBkPVwibTIwNy44MDA3ODEgMzE5LjE5OTIxOWM3MC4yODUxNTcgMCAxMjcuNDY0ODQ0LTU3LjE3OTY4OCAxMjcuNDY0ODQ0LTEyNy40NjQ4NDR2LTMzLjIwMzEyNWgtOTMuMzYzMjgxYy0zOS42NTYyNSAwLTc0Ljc4NTE1Ni0yMy4yMTg3NS05MC43ODEyNS01OC4yNTM5MDZsLTcwLjc4OTA2MyAzNS4zOTQ1MzF2NTYuMDc4MTI1YzAgMzQuMDQyOTY5IDEzLjI1NzgxMyA2Ni4wNDY4NzUgMzcuMzMyMDMxIDkwLjEyMTA5NCAyNC4wNzQyMTkgMjQuMDcwMzEyIDU2LjA3ODEyNiAzNy4zMjgxMjUgOTAuMTM2NzE5IDM3LjMyODEyNXptMCAwXCIvPjxwYXRoIGQ9XCJtODAuMzMyMDMxIDMxOS4xOTkyMTljOC4yODUxNTcgMCAxNS02LjcxNDg0NCAxNS0xNSAwLTguMjg1MTU3LTYuNzE0ODQzLTE1LTE1LTE1LTE1Ljk4MDQ2OSAwLTMwLTIzLjAxOTUzMS0zMC00OS4yNjU2MjV2LTE0MC4yOTY4NzVjLTYgMi4zMzU5MzctMTEuNTE1NjI1IDUuODg2NzE5LTE2LjE5OTIxOSAxMC41NzgxMjUtOC44OTg0MzcgOC44OTQ1MzEtMTMuODAwNzgxIDIwLjcyNjU2Mi0xMy44MDA3ODEgMzMuMzE2NDA2djk2LjQwMjM0NGMwIDIwLjIxNDg0NCA1LjY0NDUzMSAzOS40MTAxNTYgMTUuODk0NTMxIDU0LjA0Njg3NSAxMS4yMjI2NTcgMTYuMDI3MzQzIDI3LjI5Njg3NiAyNS4yMTg3NSA0NC4xMDU0NjkgMjUuMjE4NzV6bTAgMFwiLz48L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGxDZW50ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENhcmdvVHJ1Y2socHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcblx0XHRcdDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICB4PVwiMHB4XCIgeT1cIjBweFwiXHJcblx0XHRcdFx0IGZpbGw9XCIjQ0QyNDFEXCIgdmlld0JveD1cIjAgMCA2MTIgNjEyXCIgaGVpZ2h0PVwiODBcIiAgd2lkdGg9XCI4MFwiID5cclxuPGc+XHJcblx0PGc+XHJcblx0XHQ8cGF0aCBkPVwiTTUwNC45LDM5NS43NTZjLTI4LjY4NCwwLTUyLjAyLDIzLjM0Mi01Mi4wMiw1Mi4wMmMwLDI4LjY4NCwyMy4zMzYsNTIuMDIsNTIuMDIsNTIuMDJjMjguNjc4LDAsNTIuMDItMjMuMzM2LDUyLjAyLTUyLjAyXHJcblx0XHRcdEM1NTYuOTIsNDE5LjA5OCw1MzMuNTc4LDM5NS43NTYsNTA0LjksMzk1Ljc1NnogTTUwNC45LDQ2My4wNzZjLTguNDM5LDAtMTUuMy02Ljg2MS0xNS4zLTE1LjNjMC04LjQzOSw2Ljg2MS0xNS4zLDE1LjMtMTUuM1xyXG5cdFx0XHRzMTUuMyw2Ljg2MSwxNS4zLDE1LjNDNTIwLjIsNDU2LjIxNSw1MTMuMzM5LDQ2My4wNzYsNTA0LjksNDYzLjA3NnpcIi8+XHJcblx0XHQ8cGF0aCBkPVwiTTQ5OS45MTgsMTc5LjUxOEg0MTAuMDRjLTYuNzYzLDAtMTIuMjQsNS40ODQtMTIuMjQsMTIuMjR2MjM4LjY4YzAsNi43NTYsNS40NzcsMTIuMjQsMTIuMjQsMTIuMjRoMTIuOTgxXHJcblx0XHRcdGM2LjA1OSwwLDExLjQyNi00LjM2NCwxMi4yMDktMTAuMzczYzQuODA0LTM2LjgwNiwzNC4xNjItNTkuNjMzLDY5LjY3Ni01OS42MzNzNjQuODcyLDIyLjgyOCw2OS42NzYsNTkuNjMzXHJcblx0XHRcdGMwLjc4Myw2LjAxLDYuMTQ0LDEwLjM3MywxMi4yMDksMTAuMzczaDEyLjk2OGM2Ljc1NiwwLDEyLjI0LTUuNDg0LDEyLjI0LTEyLjI0di0xMTkuMzRjMC0yLjg3Ni0xLjAxLTUuNjU1LTIuODUyLTcuODUyXHJcblx0XHRcdGwtOTkuODQyLTExOS4zNEM1MDYuOTgxLDE4MS4xMjgsNTAzLjU0MSwxNzkuNTE4LDQ5OS45MTgsMTc5LjUxOHogTTQyMi4yOCwyNzcuNDM4di02MS4yYzAtNi43NTYsNS40NzctMTIuMjQsMTIuMjQtMTIuMjRoNTMuOTE3XHJcblx0XHRcdGMzLjYyOSwwLDcuMDc1LDEuNjE2LDkuNCw0LjQwNmw1MC45OTgsNjEuMmM2LjY0LDcuOTc0LDAuOTczLDIwLjA3NC05LjQwNiwyMC4wNzRINDM0LjUyXHJcblx0XHRcdEM0MjcuNzU3LDI4OS42NzgsNDIyLjI4LDI4NC4yMDEsNDIyLjI4LDI3Ny40Mzh6XCIvPlxyXG5cdFx0PHBhdGggZD1cIk0xMi4yNCw0NDIuNjg0aDMxLjM0MWM2LjA1OSwwLDExLjQyNi00LjM2NCwxMi4yMDktMTAuMzczYzQuODA0LTM2LjgwNiwzNC4xNjItNTkuNjMzLDY5LjY3Ni01OS42MzNcclxuXHRcdFx0czY0Ljg3MiwyMi44MjgsNjkuNjc2LDU5LjYzM2MwLjc4Myw2LjAxLDYuMTQ0LDEwLjM3MywxMi4yMDksMTAuMzczSDM2MS4wOGM2Ljc1NywwLDEyLjI0LTUuNDg0LDEyLjI0LTEyLjI0di0zMDZcclxuXHRcdFx0YzAtNi43NTYtNS40ODQtMTIuMjQtMTIuMjQtMTIuMjRIMTIuMjRjLTYuNzYzLDAtMTIuMjQsNS40ODQtMTIuMjQsMTIuMjR2MzA2QzAsNDM3LjIwMSw1LjQ3Nyw0NDIuNjg0LDEyLjI0LDQ0Mi42ODR6XCIvPlxyXG5cdFx0PHBhdGggZD1cIk0xMjUuNDYsMzk1Ljc1NmMtMjguNjg0LDAtNTIuMDIsMjMuMzQyLTUyLjAyLDUyLjAyYzAsMjguNjg0LDIzLjMzNiw1Mi4wMiw1Mi4wMiw1Mi4wMlxyXG5cdFx0XHRjMjguNjc4LDAsNTIuMDItMjMuMzM2LDUyLjAyLTUyLjAyQzE3Ny40OCw0MTkuMDk4LDE1NC4xMzgsMzk1Ljc1NiwxMjUuNDYsMzk1Ljc1NnogTTEyNS40Niw0NjMuMDc2XHJcblx0XHRcdGMtOC40MzksMC0xNS4zLTYuODYxLTE1LjMtMTUuM2MwLTguNDM5LDYuODYxLTE1LjMsMTUuMy0xNS4zczE1LjMsNi44NjEsMTUuMywxNS4zXHJcblx0XHRcdEMxNDAuNzYsNDU2LjIxNSwxMzMuODk5LDQ2My4wNzYsMTI1LjQ2LDQ2My4wNzZ6XCIvPlxyXG5cdDwvZz5cclxuPC9nPlxyXG5cdFx0XHRcdDxnPlxyXG48L2c+XHJcblx0XHRcdFx0PGc+XHJcbjwvZz5cclxuXHRcdFx0XHQ8Zz5cclxuPC9nPlxyXG5cdFx0XHRcdDxnPlxyXG48L2c+XHJcblx0XHRcdFx0PGc+XHJcbjwvZz5cclxuXHRcdFx0XHQ8Zz5cclxuPC9nPlxyXG5cdFx0XHRcdDxnPlxyXG48L2c+XHJcblx0XHRcdFx0PGc+XHJcbjwvZz5cclxuXHRcdFx0XHQ8Zz5cclxuPC9nPlxyXG5cdFx0XHRcdDxnPlxyXG48L2c+XHJcblx0XHRcdFx0PGc+XHJcbjwvZz5cclxuXHRcdFx0XHQ8Zz5cclxuPC9nPlxyXG5cdFx0XHRcdDxnPlxyXG48L2c+XHJcblx0XHRcdFx0PGc+XHJcbjwvZz5cclxuXHRcdFx0XHQ8Zz5cclxuPC9nPlxyXG48L3N2Zz5cclxuXHJcblx0XHQ8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmdvVHJ1Y2s7IiwiXHJcblxyXG5jb25zdCBFbWFpbEljb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdmcgaWQ9XCJlbWFpbEljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNDQ5OVwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA0NDk5XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgZmlsbD1cIiNmZmZcIiBvcGFjaXR5PVwiMFwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvblwiIGQ9XCJNODQ0Ljg4Miw0MjcuNTI2aC0xOXYtLjAxbDUuNzk0LTUuNjkyLDEuMTg5LDEuMmEzLjU0NCwzLjU0NCwwLDAsMCw1LjAxMS4wMjRsLjAyNC0uMDI0LDEuMTktMS4yLDUuNzk0LDUuNjkyWm0tMTkuNDkxLS41ODloLS4wMVY0MTUuMzg1aC4wNThjLjQ3MS41LDIuNDA2LDIuNDY1LDUuNzUxLDUuODQ2Wm0xOS45OS0uMDVoLS4wMWwtNS44LTUuN2MzLjMwOC0zLjM0Nyw1LjMtNS4zNjksNS43NTItNS44NDZoLjA1OHYxMS41NDZabS0xMC0zLjc0NWEyLjgyNywyLjgyNywwLDAsMS0yLjAyMS0uODQ2bC03LjQwOC03LjQ1NWMuNTQyLS4wMDcsMi4yMzgtLjAwNyw1LjA0NC0uMDA3LDIuMjU4LDAsNi40NTIsMCwxMy42MTUuMDA4aC4xOTNsLTcuNCw3LjQ1M0EyLjgyOSwyLjgyOSwwLDAsMSw4MzUuMzgxLDQyMy4xNDJaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04MjUuMzgxIC00MTAuODM0KVwiIGZpbGw9XCIjMjYzMjM4XCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1haWxJY29uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9mb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzXCJcclxuXHJcbmNvbnN0IEZhY2Vib29rdGVhbWRlZnVsdDEgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbjF9PlxyXG4gICAgICAgICAgPHN2ZyBpZD1cImZhY2Vib29rdGVhbWRlZnVsdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgPlxyXG4gICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV80NTY5XCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDQ1NjlcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBvcGFjaXR5PVwiMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggaWQ9XCJGYWNlYm9va1wiIGQ9XCJNMTE2LjMxLDMuMVY1LjNIMTE0LjdWOGgxLjYxNHY4aDMuMzE1VjhoMi4yMjVzLjIwOC0xLjI5Mi4zMDktMi43aC0yLjUyMlYzLjQ1MWEuNzgyLjc4MiwwLDAsMSwuNzE5LS42NDZoMS44MDZWMGgtMi40NTZDMTE2LjIyOCwwLDExNi4zMSwyLjcsMTE2LjMxLDMuMVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEwNi42OTYgMy45OTkpXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9IGZpbGw9XCIjZDNkNmQ3XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rdGVhbWRlZnVsdDE7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEluc3RhZ3JhbXRlYW1kZWZ1bHQxID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb24xfT5cclxuICAgICAgICAgIDxzdmcgaWQ9XCJpbnN0YWdyYW10ZWFtZGVmdWx0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwicmVkXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxyXG4gICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV80NTcxXCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDQ1NzFcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBvcGFjaXR5PVwiMFwiLz5cclxuICAgICAgICAgICAgPHBhdGggaWQ9XCJpbnN0YWdyYW1cIiBkPVwiTTQuNDE1LDE2QTQuNDIxLDQuNDIxLDAsMCwxLDAsMTEuNTg0VjQuNDE1QTQuNDIxLDQuNDIxLDAsMCwxLDQuNDE1LDBoNy4xNjlBNC40Miw0LjQyLDAsMCwxLDE2LDQuNDE1djcuMTY5QTQuNDIsNC40MiwwLDAsMSwxMS41ODUsMTZabS0zLTExLjU4NXY3LjE2OWEzLDMsMCwwLDAsMywzaDcuMTY5YTMsMywwLDAsMCwzLTNWNC40MTVhMywzLDAsMCwwLTMtM0g0LjQxNUEzLDMsMCwwLDAsMS40Miw0LjQxNVpNMy44NzcsOEE0LjEyMyw0LjEyMywwLDEsMSw4LDEyLjEyMyw0LjEyOCw0LjEyOCwwLDAsMSwzLjg3Nyw4Wk01LjMsOEEyLjcsMi43LDAsMSwwLDgsNS4zLDIuNzA3LDIuNzA3LDAsMCwwLDUuMyw4Wk0xMS41Niw0LjQ1MWExLjA0LDEuMDQsMCwxLDEsLjczNS4zQTEuMDQ4LDEuMDQ4LDAsMCwxLDExLjU2LDQuNDUxWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0IDQpXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9IGZpbGw9XCIjZDNkNmQ3XCIvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zdGFncmFtdGVhbWRlZnVsdDE7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3ZnIGlkPVwibG9jYXRpb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNDQ5N1wiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA0NDk3XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgZmlsbD1cIiMyNjMyMzhcIiBvcGFjaXR5PVwiMFwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiaWNfcGxhY2VfMjRweFwiIGQ9XCJNMTEsMkE2LjE1MSw2LjE1MSwwLDAsMCw1LDguM0M1LDEzLjAyNSwxMSwyMCwxMSwyMHM2LTYuOTc1LDYtMTEuN0E2LjE1MSw2LjE1MSwwLDAsMCwxMSwyWm0wLDguNTVBMi4yLDIuMiwwLDAsMSw4Ljg1Nyw4LjMsMi4yLDIuMiwwLDAsMSwxMSw2LjA1LDIuMiwyLjIsMCwwLDEsMTMuMTQzLDguMywyLjIsMi4yLDAsMCwxLDExLDEwLjU1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMSAtMSlcIiBmaWxsPVwiIzI2MzIzOFwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQaG9uZUljb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdmcgaWQ9XCJwaG9uZUljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNDQ5N1wiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA0NDk3XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgZmlsbD1cIiMyNjMyMzhcIiBvcGFjaXR5PVwiMFwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiSWNvblwiIGQ9XCJNMS4xNzYsNS45MjRBOC4wMjIsOC4wMjIsMCwwLDEsMCwyLjI5NGMwLS44NDEuMjA3LTEuMDgyLjQxNi0xLjI3N1MxLjU3MS4yNCwxLjczMi4xMzFBLjg1OC44NTgsMCwwLDEsMi44OTMuMzY2QzMuMjc4LjkyLDQsMi4wMzQsNC41LDIuNzczYy43ODUsMS4wNDcuMTYsMS41MDctLjA0MiwxLjc4My0uMzcyLjUwNy0uNTg2LjYzMi0uNTg2LDEuMjU1UzUuNjE3LDguMiw2LjAzMyw4LjYzOWExMC43MDgsMTAuNzA4LDAsMCwwLDIuNjg0LDIuMDM0LDIuMjQyLDIuMjQyLDAsMCwwLDEuNDItLjYzNmMuNzg0LS42LDEuMjI2LS4xNDUsMS41ODcuMDUzczEuOTkyLDEuMjE0LDIuNSwxLjU1N2ExLjA3MiwxLjA3MiwwLDAsMSwuNDQ2Ljg3MnMtLjk4MSwxLjU1Ny0xLjEsMS43NDRjLS4xNDkuMjE4LS41MDUuNC0xLjMwOC40cy0xLjY2LS4xNDctMy43LTEuMjY3YTE5LjY1MywxOS42NTMsMCwwLDEtNC4wODktMy4xOTRBMjAuMzIzLDIwLjMyMywwLDAsMSwxLjE3Niw1LjkyNFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMi42NjcgMi42NjcpXCIgZmlsbD1cIiMyNjMyMzhcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG9uZUljb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IFR3aXR0ZXJ0YW1kZWZ1bHQxID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb24xfT5cclxuICAgICAgICAgIDxzdmcgaWQ9XCJ0d2l0dGVydGFtZGVmdWx0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNDU3MFwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA0NTcwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgb3BhY2l0eT1cIjBcIi8+XHJcbiAgICAgICAgICAgIDxwYXRoIGlkPVwidHdpdHRlclwiIGQ9XCJNMTYsNTguOTc5YTYuNTU1LDYuNTU1LDAsMCwxLTEuODg1LjUxNywzLjMsMy4zLDAsMCwwLDEuNDQzLTEuODE1LDYuNjE3LDYuNjE3LDAsMCwxLTIuMDg2LjhBMy4yODUsMy4yODUsMCwwLDAsNy44OCw2MS40N2E5LjMxOCw5LjMxOCwwLDAsMS02Ljc2NS0zLjQyOSwzLjI4NiwzLjI4NiwwLDAsMCwxLjAxNiw0LjM4MUEzLjI4MywzLjI4MywwLDAsMSwuNjQ1LDYyLjAxdi4wNDFBMy4yODYsMy4yODYsMCwwLDAsMy4yNzcsNjUuMjdhMy4zMjQsMy4zMjQsMCwwLDEtLjg2NS4xMTUsMy4xNTEsMy4xNTEsMCwwLDEtLjYxOC0uMDYxQTMuMjg0LDMuMjg0LDAsMCwwLDQuODYsNjcuNmE2LjU4NSw2LjU4NSwwLDAsMS00LjA3NiwxLjRBNi45NzQsNi45NzQsMCwwLDEsMCw2OC45NjFhOS4yNzgsOS4yNzgsMCwwLDAsNS4wMzEsMS40NzdBOS4yNzQsOS4yNzQsMCwwLDAsMTQuMzcsNjEuMWwtLjAxMS0uNDI1QTYuNTU0LDYuNTU0LDAsMCwwLDE2LDU4Ljk3OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMy45OTkgLTUyLjQ0MSlcIiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30gZmlsbD1cIiNkM2Q2ZDdcIi8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVydGFtZGVmdWx0MTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJzY3JvbGxcIjogXCJIb21lX3Njcm9sbF9fMm5URXhcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFwcFwiOiBcImNhcmRfQXBwX18zYmM4ZFwiLFxuXHRcImNhcmRcIjogXCJjYXJkX2NhcmRfX2dadUhrXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiZm9vdGVyX3dyYXBwZXJfXzJkbFZYXCIsXG5cdFwiY29udFwiOiBcImZvb3Rlcl9jb250X18yMVVzR1wiLFxuXHRcInJvd1wiOiBcImZvb3Rlcl9yb3dfXzF3R3NjXCIsXG5cdFwibG9nb1wiOiBcImZvb3Rlcl9sb2dvX18xMlRfMFwiLFxuXHRcInRpdGxlXCI6IFwiZm9vdGVyX3RpdGxlX19ORXluTlwiLFxuXHRcInRleHRcIjogXCJmb290ZXJfdGV4dF9fM0ZvMk5cIixcblx0XCJudW1cIjogXCJmb290ZXJfbnVtX19rYnkyZlwiLFxuXHRcImVtYWlsXCI6IFwiZm9vdGVyX2VtYWlsX19yOURMc1wiLFxuXHRcImNlbnRlclwiOiBcImZvb3Rlcl9jZW50ZXJfXzJTMWxTXCIsXG5cdFwiaW5cIjogXCJmb290ZXJfaW5fX0ZPeVJzXCIsXG5cdFwiYm94XCI6IFwiZm9vdGVyX2JveF9faG01NUNcIixcblx0XCJpbWdXclwiOiBcImZvb3Rlcl9pbWdXcl9fMmltT3JcIixcblx0XCJpbWdcIjogXCJmb290ZXJfaW1nX18xZnh6WFwiLFxuXHRcIm5lXCI6IFwiZm9vdGVyX25lX18xaHRaMVwiLFxuXHRcInRpdGxlMVwiOiBcImZvb3Rlcl90aXRsZTFfXzJBQkVoXCIsXG5cdFwidGV4dDFcIjogXCJmb290ZXJfdGV4dDFfXzFXbUpHXCIsXG5cdFwiZGF0ZVwiOiBcImZvb3Rlcl9kYXRlX18yWVFFUFwiLFxuXHRcIndyXCI6IFwiZm9vdGVyX3dyX18ybzRtU1wiLFxuXHRcImxpbmtcIjogXCJmb290ZXJfbGlua19fM2dQRXZcIixcblx0XCJsaW5rc1wiOiBcImZvb3Rlcl9saW5rc19fOWZlRktcIixcblx0XCJwaG9uZU51bWJlclwiOiBcImZvb3Rlcl9waG9uZU51bWJlcl9fMndoSThcIixcblx0XCJ0ZXh0MlwiOiBcImZvb3Rlcl90ZXh0Ml9fMVlMMTVcIixcblx0XCJidXR0b25cIjogXCJmb290ZXJfYnV0dG9uX18xOWJfZlwiLFxuXHRcImlucHV0XCI6IFwiZm9vdGVyX2lucHV0X18zVnlwV1wiLFxuXHRcInRyXCI6IFwiZm9vdGVyX3RyX18xV0RpOFwiLFxuXHRcImljb25cIjogXCJmb290ZXJfaWNvbl9fMzR5UXBcIixcblx0XCJidGV4dFwiOiBcImZvb3Rlcl9idGV4dF9fSHVNajJcIixcblx0XCJyb3dGb3VyXCI6IFwiZm9vdGVyX3Jvd0ZvdXJfXzFxUU5JXCIsXG5cdFwiYWJzXCI6IFwiZm9vdGVyX2Fic19fM2JWc09cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJjb250YWN0X3dyYXBwZXJfXzNTTy1JXCIsXG5cdFwibGVmdFwiOiBcImNvbnRhY3RfbGVmdF9fMnRqTWtcIixcblx0XCJpbkxlZnRcIjogXCJjb250YWN0X2luTGVmdF9fMl95TURcIixcblx0XCJhZHJlc3NcIjogXCJjb250YWN0X2FkcmVzc19fTEdQa0pcIixcblx0XCJjb250YWN0SWNvblwiOiBcImNvbnRhY3RfY29udGFjdEljb25fXzNhZ0hFXCIsXG5cdFwidGV4dFwiOiBcImNvbnRhY3RfdGV4dF9fM1dlZnNcIixcblx0XCJwaG9uZU51bWJlclwiOiBcImNvbnRhY3RfcGhvbmVOdW1iZXJfXzNLd3QyXCIsXG5cdFwicmlnaHRcIjogXCJjb250YWN0X3JpZ2h0X18zT0k0ZFwiLFxuXHRcImluUmlnaHRcIjogXCJjb250YWN0X2luUmlnaHRfX1h6b1Z3XCIsXG5cdFwicmlnaHRJY29uXCI6IFwiY29udGFjdF9yaWdodEljb25fXzN2MTJwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3clwiOiBcImhlYWRlcl93cl9fMS14Qk9cIixcblx0XCJ0b3BcIjogXCJoZWFkZXJfdG9wX18yVktWMVwiLFxuXHRcInRvZ1wiOiBcImhlYWRlcl90b2dfXzNXX0RqXCIsXG5cdFwiYnJhbmRcIjogXCJoZWFkZXJfYnJhbmRfXzItNnkyXCIsXG5cdFwid3JhcHBlclwiOiBcImhlYWRlcl93cmFwcGVyX18zWXBsa1wiLFxuXHRcIm5ld0JyYW5kXCI6IFwiaGVhZGVyX25ld0JyYW5kX18zQU9YYlwiLFxuXHRcImxpbmtzXCI6IFwiaGVhZGVyX2xpbmtzX18zN0o4b1wiLFxuXHRcImxpbmtcIjogXCJoZWFkZXJfbGlua19fM3NRZUFcIixcblx0XCJsaW5rOFwiOiBcImhlYWRlcl9saW5rOF9fMWFnLTNcIixcblx0XCJiYXJzXCI6IFwiaGVhZGVyX2JhcnNfXzFZSlQ3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiY29udGFjdF93cmFwcGVyX18yOHJVOFwiLFxuXHRcImNvbnRhY3RcIjogXCJjb250YWN0X2NvbnRhY3RfXzFoX3R6XCIsXG5cdFwiZm9vdGVyXCI6IFwiY29udGFjdF9mb290ZXJfXzFvcmp5XCIsXG5cdFwibGVmdFwiOiBcImNvbnRhY3RfbGVmdF9fM0xsSlFcIixcblx0XCJpbm5lclwiOiBcImNvbnRhY3RfaW5uZXJfXzJua1BwXCIsXG5cdFwidGl0bGVcIjogXCJjb250YWN0X3RpdGxlX18zRmttNVwiLFxuXHRcImh0aXRsZVwiOiBcImNvbnRhY3RfaHRpdGxlX18yUlhhNVwiLFxuXHRcImljb25cIjogXCJjb250YWN0X2ljb25fXzFmUThUXCIsXG5cdFwiaWNvbkluXCI6IFwiY29udGFjdF9pY29uSW5fXzFQWWd2XCIsXG5cdFwiYWRyZXNzXCI6IFwiY29udGFjdF9hZHJlc3NfXzJ5RzJ2XCIsXG5cdFwidGV4dFwiOiBcImNvbnRhY3RfdGV4dF9fM0JLUDVcIixcblx0XCJlbWFpbFwiOiBcImNvbnRhY3RfZW1haWxfXzJRa1BwXCIsXG5cdFwicGhvbmVOdW1iZXJcIjogXCJjb250YWN0X3Bob25lTnVtYmVyX18yRjhfalwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcInNlY3Rpb24xX3dyYXBwZXJfXzItVEZlXCIsXG5cdFwib3ZlcmxheVwiOiBcInNlY3Rpb24xX292ZXJsYXlfXzMxM2hvXCIsXG5cdFwiY29udGFpbmVyXCI6IFwic2VjdGlvbjFfY29udGFpbmVyX18xTEZzSlwiLFxuXHRcImNvbnRlbnRcIjogXCJzZWN0aW9uMV9jb250ZW50X18zTGw2S1wiLFxuXHRcInRpdGxlXCI6IFwic2VjdGlvbjFfdGl0bGVfXzJvRXdWXCIsXG5cdFwibXltb3ZlXCI6IFwic2VjdGlvbjFfbXltb3ZlX18zRGhNWFwiLFxuXHRcInRleHRcIjogXCJzZWN0aW9uMV90ZXh0X18xOGY0MFwiLFxuXHRcIm15dGV4dFwiOiBcInNlY3Rpb24xX215dGV4dF9fZWVCVjdcIixcblx0XCJvdXRlckJ0blwiOiBcInNlY3Rpb24xX291dGVyQnRuX185UHlKZVwiLFxuXHRcImJ0blwiOiBcInNlY3Rpb24xX2J0bl9fMVE4Q3RcIixcblx0XCJidG5UZXh0XCI6IFwic2VjdGlvbjFfYnRuVGV4dF9fM3M4dGpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJzZWN0aW9uMl93cmFwcGVyX18xWTM5TlwiLFxuXHRcInBhcnRPbmVcIjogXCJzZWN0aW9uMl9wYXJ0T25lX18xdDFDcVwiLFxuXHRcImdyaWRcIjogXCJzZWN0aW9uMl9ncmlkX18zeUhORFwiLFxuXHRcImdyaWRJdGVtXCI6IFwic2VjdGlvbjJfZ3JpZEl0ZW1fX3NEWEc1XCIsXG5cdFwiaW5uZXJJY29uXCI6IFwic2VjdGlvbjJfaW5uZXJJY29uX18zLWlxZVwiLFxuXHRcImlubmVyVGl0bGVcIjogXCJzZWN0aW9uMl9pbm5lclRpdGxlX19zOFY1dlwiLFxuXHRcImlubmVyVGV4dFwiOiBcInNlY3Rpb24yX2lubmVyVGV4dF9fMUh4b0hcIixcblx0XCJhbmltYXRpb25cIjogXCJzZWN0aW9uMl9hbmltYXRpb25fX0RBSjZvXCIsXG5cdFwid2F2ZVwiOiBcInNlY3Rpb24yX3dhdmVfXzFvTXVGXCIsXG5cdFwicGFydFR3b1wiOiBcInNlY3Rpb24yX3BhcnRUd29fXzN6MlZ2XCIsXG5cdFwiaW5EaXNwbGF5XCI6IFwic2VjdGlvbjJfaW5EaXNwbGF5X18xYUZ2RlwiLFxuXHRcImxlZnRcIjogXCJzZWN0aW9uMl9sZWZ0X18xMXhndVwiLFxuXHRcImJveDFcIjogXCJzZWN0aW9uMl9ib3gxX19wb3RWeVwiLFxuXHRcImNvdmVyMVwiOiBcInNlY3Rpb24yX2NvdmVyMV9fUTJSTE1cIixcblx0XCJib3gyXCI6IFwic2VjdGlvbjJfYm94Ml9fM0dGdnFcIixcblx0XCJjb3ZlcjJcIjogXCJzZWN0aW9uMl9jb3ZlcjJfXzE2QnBZXCIsXG5cdFwiYm94M1wiOiBcInNlY3Rpb24yX2JveDNfX3NHejBoXCIsXG5cdFwiY292ZXIzXCI6IFwic2VjdGlvbjJfY292ZXIzX18tOFExR1wiLFxuXHRcImJveFRpdGxlXCI6IFwic2VjdGlvbjJfYm94VGl0bGVfX2NVN1UxXCIsXG5cdFwiYm94VGV4dFwiOiBcInNlY3Rpb24yX2JveFRleHRfXzJDMF84XCIsXG5cdFwicmlnaHRcIjogXCJzZWN0aW9uMl9yaWdodF9fM255ZkxcIixcblx0XCJpbm5lclJpZ2h0XCI6IFwic2VjdGlvbjJfaW5uZXJSaWdodF9fcVlyS3VcIixcblx0XCJncmF5VGl0bGVcIjogXCJzZWN0aW9uMl9ncmF5VGl0bGVfXzN4YWh6XCIsXG5cdFwicmlnaHRUaXRsZVwiOiBcInNlY3Rpb24yX3JpZ2h0VGl0bGVfXzExOWJQXCIsXG5cdFwicmlnaHRUZXh0MVwiOiBcInNlY3Rpb24yX3JpZ2h0VGV4dDFfXzFUVHJhXCIsXG5cdFwicmlnaHRUZXh0MlwiOiBcInNlY3Rpb24yX3JpZ2h0VGV4dDJfXzFRMGJlXCIsXG5cdFwiY2hlY2tib3hUZXh0c1wiOiBcInNlY3Rpb24yX2NoZWNrYm94VGV4dHNfXzJGOXZzXCIsXG5cdFwiaW5EaXNwbGF5Q2hlY2tcIjogXCJzZWN0aW9uMl9pbkRpc3BsYXlDaGVja19fMVFnNWJcIixcblx0XCJjaGVja0ljb25cIjogXCJzZWN0aW9uMl9jaGVja0ljb25fXzE5UnhFXCIsXG5cdFwiYnRuXCI6IFwic2VjdGlvbjJfYnRuX18yQWFacFwiLFxuXHRcImJ0bkRpc3BsYXlcIjogXCJzZWN0aW9uMl9idG5EaXNwbGF5X18yTDhTc1wiLFxuXHRcImJ0blRleHRcIjogXCJzZWN0aW9uMl9idG5UZXh0X18ycXVwSlwiLFxuXHRcImJ0bkljb25cIjogXCJzZWN0aW9uMl9idG5JY29uX18yMjdjb1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JcIjogXCJzZWN0aW9uM193cl9fM0VpdFBcIixcblx0XCJvdmVybGF5XCI6IFwic2VjdGlvbjNfb3ZlcmxheV9fMVlDdEhcIixcblx0XCJpbm5lck92ZXJsYXlcIjogXCJzZWN0aW9uM19pbm5lck92ZXJsYXlfXzFBRXFMXCIsXG5cdFwiaW5EaXNwbGF5XCI6IFwic2VjdGlvbjNfaW5EaXNwbGF5X184VzVaZ1wiLFxuXHRcImxlZnRcIjogXCJzZWN0aW9uM19sZWZ0X18yOUI1U1wiLFxuXHRcImdyYXlUaXRsZVwiOiBcInNlY3Rpb24zX2dyYXlUaXRsZV9fMXF6VWpcIixcblx0XCJsZWZ0VGl0bGVcIjogXCJzZWN0aW9uM19sZWZ0VGl0bGVfXzFxTFRVXCIsXG5cdFwibGVmdFRleHRcIjogXCJzZWN0aW9uM19sZWZ0VGV4dF9fMVZLdmlcIixcblx0XCJidG5cIjogXCJzZWN0aW9uM19idG5fXzNXS2ZjXCIsXG5cdFwiYnRuRGlzcGxheVwiOiBcInNlY3Rpb24zX2J0bkRpc3BsYXlfXzNnVFlJXCIsXG5cdFwiYnRuVGV4dFwiOiBcInNlY3Rpb24zX2J0blRleHRfXzM1R2ZzXCIsXG5cdFwiYnRuSWNvblwiOiBcInNlY3Rpb24zX2J0bkljb25fX2l2eFBwXCIsXG5cdFwicmlnaHRcIjogXCJzZWN0aW9uM19yaWdodF9fMWswNTdcIixcblx0XCJjYXJ1c2VsXCI6IFwic2VjdGlvbjNfY2FydXNlbF9fMWJYSHFcIixcblx0XCJjYXJ1c2VsSXRlbVwiOiBcInNlY3Rpb24zX2NhcnVzZWxJdGVtX18ycjlZd1wiLFxuXHRcImNhcnVzZWxJY29uXCI6IFwic2VjdGlvbjNfY2FydXNlbEljb25fXzNuYzI0XCIsXG5cdFwiY2FydXNlbFRpdGxlXCI6IFwic2VjdGlvbjNfY2FydXNlbFRpdGxlX18zeEVjOVwiLFxuXHRcImNhcnVzZWxUZXh0XCI6IFwic2VjdGlvbjNfY2FydXNlbFRleHRfX0VmaWlfXCIsXG5cdFwiY2FydXNlbEJ0blwiOiBcInNlY3Rpb24zX2NhcnVzZWxCdG5fX2Q2UGlBXCIsXG5cdFwicmVhZE1vcmVcIjogXCJzZWN0aW9uM19yZWFkTW9yZV9fVjZ4LXJcIixcblx0XCJyZWFkTW9yZUljb25cIjogXCJzZWN0aW9uM19yZWFkTW9yZUljb25fX3Awa29XXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3clwiOiBcInNlY3Rpb240X3dyX18yYzR6OFwiLFxuXHRcInBhcnRUd29cIjogXCJzZWN0aW9uNF9wYXJ0VHdvX18zYVpaNFwiLFxuXHRcIm1UaXRsZVwiOiBcInNlY3Rpb240X21UaXRsZV9fajZjMDBcIixcblx0XCJncmF5VGl0bGVcIjogXCJzZWN0aW9uNF9ncmF5VGl0bGVfX0NIRnQyXCIsXG5cdFwiYm9sZFRpdGxlXCI6IFwic2VjdGlvbjRfYm9sZFRpdGxlX18yT2JCZFwiLFxuXHRcImdyaWRcIjogXCJzZWN0aW9uNF9ncmlkX18ya3h4R1wiLFxuXHRcImdyaWRJdGVtXCI6IFwic2VjdGlvbjRfZ3JpZEl0ZW1fXzFDRDl1XCIsXG5cdFwiaW5uZXJJY29uXCI6IFwic2VjdGlvbjRfaW5uZXJJY29uX18yMVF6ZlwiLFxuXHRcImlubmVyVGl0bGVcIjogXCJzZWN0aW9uNF9pbm5lclRpdGxlX18ydGpSM1wiLFxuXHRcImlubmVyVGV4dFwiOiBcInNlY3Rpb240X2lubmVyVGV4dF9fMUJ4OXJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyXCI6IFwic2VjdGlvbjVfd3JfX2pFWlNnXCIsXG5cdFwib3ZlcmxheVwiOiBcInNlY3Rpb241X292ZXJsYXlfXzNPZFF3XCIsXG5cdFwid3JhcHBlclwiOiBcInNlY3Rpb241X3dyYXBwZXJfXzNrcE4wXCIsXG5cdFwibVRpdGxlXCI6IFwic2VjdGlvbjVfbVRpdGxlX18yNlJCWVwiLFxuXHRcImdyYXlUaXRsZVwiOiBcInNlY3Rpb241X2dyYXlUaXRsZV9fMXJGNlZcIixcblx0XCJib2xkVGl0bGVcIjogXCJzZWN0aW9uNV9ib2xkVGl0bGVfXzFjdW9OXCIsXG5cdFwiaW5HcmlkXCI6IFwic2VjdGlvbjVfaW5HcmlkX19PdFpVeVwiLFxuXHRcImdyaWRcIjogXCJzZWN0aW9uNV9ncmlkX182RGV1Y1wiLFxuXHRcImdyaWRJdGVtXCI6IFwic2VjdGlvbjVfZ3JpZEl0ZW1fXzF6a0JLXCIsXG5cdFwiZ3JpZENpcmNsZVwiOiBcInNlY3Rpb241X2dyaWRDaXJjbGVfXzNVbWpvXCIsXG5cdFwiaW5uZXJDaXJjbGUxXCI6IFwic2VjdGlvbjVfaW5uZXJDaXJjbGUxX18xN0lyOFwiLFxuXHRcImlubmVyQ2lyY2xlMlwiOiBcInNlY3Rpb241X2lubmVyQ2lyY2xlMl9fYW9QeE5cIixcblx0XCJpbm5lckNpcmNsZTNcIjogXCJzZWN0aW9uNV9pbm5lckNpcmNsZTNfXzJRM0dDXCIsXG5cdFwiZ3JpZFRpdGxlXCI6IFwic2VjdGlvbjVfZ3JpZFRpdGxlX18xSDc2bVwiLFxuXHRcImdyaWRUaXRsZTJcIjogXCJzZWN0aW9uNV9ncmlkVGl0bGUyX18zN21tU1wiLFxuXHRcImxpbmVcIjogXCJzZWN0aW9uNV9saW5lX18xYWJyeFwiLFxuXHRcImdyaWRUZXh0XCI6IFwic2VjdGlvbjVfZ3JpZFRleHRfXzNaWmtjXCIsXG5cdFwiZ3JpZEJ0blwiOiBcInNlY3Rpb241X2dyaWRCdG5fX2pGSVpGXCIsXG5cdFwicmVhZE1vcmVcIjogXCJzZWN0aW9uNV9yZWFkTW9yZV9fb0wzR0FcIixcblx0XCJyZWFkTW9yZUljb25cIjogXCJzZWN0aW9uNV9yZWFkTW9yZUljb25fXzNNQ2dZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3clwiOiBcInNlY3Rpb242X3dyX18zeEhXWFwiLFxuXHRcIndyYXBwZXJcIjogXCJzZWN0aW9uNl93cmFwcGVyX18zYmpvVFwiLFxuXHRcInRvcFwiOiBcInNlY3Rpb242X3RvcF9fMy00X1JcIixcblx0XCJpbWdcIjogXCJzZWN0aW9uNl9pbWdfXzlTbDJfXCIsXG5cdFwicmlnaHRcIjogXCJzZWN0aW9uNl9yaWdodF9fMmpiaV9cIixcblx0XCJyaWdodERpc3BsYXlcIjogXCJzZWN0aW9uNl9yaWdodERpc3BsYXlfXzFweWFSXCIsXG5cdFwicmlnaHRUaXRsZVwiOiBcInNlY3Rpb242X3JpZ2h0VGl0bGVfXzFMY2E0XCIsXG5cdFwicmlnaHRUZXh0XCI6IFwic2VjdGlvbjZfcmlnaHRUZXh0X19KV1VGUVwiLFxuXHRcImJ0blwiOiBcInNlY3Rpb242X2J0bl9fM2IycXNcIixcblx0XCJidG5EaXNwbGF5XCI6IFwic2VjdGlvbjZfYnRuRGlzcGxheV9fMUhqYk9cIixcblx0XCJidG5UZXh0XCI6IFwic2VjdGlvbjZfYnRuVGV4dF9fM1d2MWNcIixcblx0XCJidG5JY29uXCI6IFwic2VjdGlvbjZfYnRuSWNvbl9fM25HeS1cIixcblx0XCJwYXJ0VHdvXCI6IFwic2VjdGlvbjZfcGFydFR3b19fMUJaa1NcIixcblx0XCJpblBhcnRUd29cIjogXCJzZWN0aW9uNl9pblBhcnRUd29fXzNqXy1nXCIsXG5cdFwicGFydFR3b1RpdGxlXCI6IFwic2VjdGlvbjZfcGFydFR3b1RpdGxlX18zdHF2SlwiLFxuXHRcImdyaWRcIjogXCJzZWN0aW9uNl9ncmlkX18zQ3NEVFwiLFxuXHRcImdyaWRJdGVtXCI6IFwic2VjdGlvbjZfZ3JpZEl0ZW1fXzNKTTRhXCIsXG5cdFwiaW5EaXNwbGF5XCI6IFwic2VjdGlvbjZfaW5EaXNwbGF5X18xSXQtTVwiLFxuXHRcInBhcnRUd29JbWdcIjogXCJzZWN0aW9uNl9wYXJ0VHdvSW1nX18yX2RoSFwiLFxuXHRcImluUGFydFR3b0ltZ1wiOiBcInNlY3Rpb242X2luUGFydFR3b0ltZ19fYjdXSnBcIixcblx0XCJyaWdodFBhcnRUd29cIjogXCJzZWN0aW9uNl9yaWdodFBhcnRUd29fXzNLR25wXCIsXG5cdFwicmlnaHRQYXJ0VHdvVGl0bGVcIjogXCJzZWN0aW9uNl9yaWdodFBhcnRUd29UaXRsZV9fM2kwd1ZcIixcblx0XCJyaWdodFBhcnRUd29UZXh0XCI6IFwic2VjdGlvbjZfcmlnaHRQYXJ0VHdvVGV4dF9fM1VCQjBcIixcblx0XCJidG5QYXJ0VHdvXCI6IFwic2VjdGlvbjZfYnRuUGFydFR3b19fM3RJd3hcIixcblx0XCJpblBhcnRUd29CdG5cIjogXCJzZWN0aW9uNl9pblBhcnRUd29CdG5fXzMxQ2tWXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3clwiOiBcInNlY3Rpb244X3dyX195UWVmV1wiLFxuXHRcIndyYXBwZXJcIjogXCJzZWN0aW9uOF93cmFwcGVyX18xSDgxUlwiLFxuXHRcIm1UaXRsZVwiOiBcInNlY3Rpb244X21UaXRsZV9fM2FzQ3ZcIixcblx0XCJncmF5VGl0bGVcIjogXCJzZWN0aW9uOF9ncmF5VGl0bGVfX3lSM0xvXCIsXG5cdFwibWFpblRpdGxlXCI6IFwic2VjdGlvbjhfbWFpblRpdGxlX18zdDRvSFwiLFxuXHRcImJvbGRUaXRsZVwiOiBcInNlY3Rpb244X2JvbGRUaXRsZV9fUFhPbVZcIixcblx0XCJpbkdyaWRcIjogXCJzZWN0aW9uOF9pbkdyaWRfXzJTZzV1XCIsXG5cdFwiZ3JpZFwiOiBcInNlY3Rpb244X2dyaWRfXzNtSVNlXCIsXG5cdFwiZ3JpZEl0ZW1cIjogXCJzZWN0aW9uOF9ncmlkSXRlbV9fLUQyQmFcIixcblx0XCJncmlkSW1nMVwiOiBcInNlY3Rpb244X2dyaWRJbWcxX18yc01LVVwiLFxuXHRcImdyaWRJbWcyXCI6IFwic2VjdGlvbjhfZ3JpZEltZzJfX1pBOGhMXCIsXG5cdFwiZ3JpZEltZzNcIjogXCJzZWN0aW9uOF9ncmlkSW1nM19fMUdqc25cIixcblx0XCJncmlkQ2lyY2xlXCI6IFwic2VjdGlvbjhfZ3JpZENpcmNsZV9fdkVHLUFcIixcblx0XCJpbm5lckNpcmNsZTFcIjogXCJzZWN0aW9uOF9pbm5lckNpcmNsZTFfXzNKVzB0XCIsXG5cdFwiaW5uZXJDaXJjbGUyXCI6IFwic2VjdGlvbjhfaW5uZXJDaXJjbGUyX193NnpFMlwiLFxuXHRcImlubmVyQ2lyY2xlM1wiOiBcInNlY3Rpb244X2lubmVyQ2lyY2xlM19fM3JVWU5cIixcblx0XCJncmlkVGl0bGVcIjogXCJzZWN0aW9uOF9ncmlkVGl0bGVfXzFINjlCXCIsXG5cdFwiZ3JpZFRleHRcIjogXCJzZWN0aW9uOF9ncmlkVGV4dF9fMWItWnlcIixcblx0XCJncmlkQnRuXCI6IFwic2VjdGlvbjhfZ3JpZEJ0bl9fcXRYVWVcIixcblx0XCJidG5UZXh0XCI6IFwic2VjdGlvbjhfYnRuVGV4dF9fMWNXMnJcIixcblx0XCJyZWFkTW9yZVwiOiBcInNlY3Rpb244X3JlYWRNb3JlX180V0FKN1wiLFxuXHRcInJlYWRNb3JlSWNvblwiOiBcInNlY3Rpb244X3JlYWRNb3JlSWNvbl9feUZ4RHhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyXCI6IFwic2VjdGlvbjlfd3JfXzJtTUlLXCIsXG5cdFwib3ZlcmxheVwiOiBcInNlY3Rpb245X292ZXJsYXlfXzI3UHNHXCIsXG5cdFwicHJvamVjdHNcIjogXCJzZWN0aW9uOV9wcm9qZWN0c19fTWwtY3JcIixcblx0XCJtVGl0bGVcIjogXCJzZWN0aW9uOV9tVGl0bGVfXzFVSVVZXCIsXG5cdFwid3JhcHBlclwiOiBcInNlY3Rpb245X3dyYXBwZXJfXzJjWlNLXCIsXG5cdFwicmVjXCI6IFwic2VjdGlvbjlfcmVjX19hdVFxSVwiLFxuXHRcInJlYy1hcnJvd1wiOiBcInNlY3Rpb245X3JlYy1hcnJvd19fMjF2SFZcIixcblx0XCJyb3dJdGVtMVwiOiBcInNlY3Rpb245X3Jvd0l0ZW0xX18yZ0Nwd1wiLFxuXHRcInJvd0l0ZW0yXCI6IFwic2VjdGlvbjlfcm93SXRlbTJfX0FNWVdxXCIsXG5cdFwicm93SXRlbTNcIjogXCJzZWN0aW9uOV9yb3dJdGVtM19fOFZLT0ZcIixcblx0XCJyb3dJdGVtNFwiOiBcInNlY3Rpb245X3Jvd0l0ZW00X18ybmJBU1wiLFxuXHRcInJvd0l0ZW01XCI6IFwic2VjdGlvbjlfcm93SXRlbTVfX2ZJVnpIXCIsXG5cdFwicm93SXRlbTZcIjogXCJzZWN0aW9uOV9yb3dJdGVtNl9fMUZyN09cIixcblx0XCJyb3dJdGVtN1wiOiBcInNlY3Rpb245X3Jvd0l0ZW03X18xVEJFdVwiLFxuXHRcInJvd0l0ZW04XCI6IFwic2VjdGlvbjlfcm93SXRlbThfXzNLMTI3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaW5rXCI6IFwic2Vuc29yX2xpbmtfXzFzV0VZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzaWRlYmFyX2NvbnRhaW5lcl9fMUdXMjVcIixcblx0XCJsZWZ0XCI6IFwic2lkZWJhcl9sZWZ0X18yMExsSVwiLFxuXHRcImJyYW5kXCI6IFwic2lkZWJhcl9icmFuZF9fTmtrZ2dcIixcblx0XCJsaW5rc1wiOiBcInNpZGViYXJfbGlua3NfXzFVSk1DXCIsXG5cdFwibGlua1wiOiBcInNpZGViYXJfbGlua19fMUNjOXZcIixcblx0XCJpbm5lclwiOiBcInNpZGViYXJfaW5uZXJfXzJIWXNnXCIsXG5cdFwiYW5vdGhlclwiOiBcInNpZGViYXJfYW5vdGhlcl9fMVkzbE5cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ2xvYmFsL3dpbmRvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb3VudHVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWVsYXN0aWMtY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QteWFuZGV4LW1hcHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=