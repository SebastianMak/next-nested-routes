webpackHotUpdate("static/development/pages/my-allegiant/trips.js",{

/***/ "./pages/my-allegiant/trips.js":
/*!*************************************!*\
  !*** ./pages/my-allegiant/trips.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sebastianmak/Documents/Workspace/dynamic-routing-app/pages/my-allegiant/trips.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Trips = function Trips(_ref) {
  var router = _ref.router;
  var count = router.query.count;
  var countToNum = count.parseInt(count, 10);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "my trips"), __jsx("button", {
    onClick: function onClick() {
      router.push({
        pathname: '/my-allegiant/trips',
        query: {
          count: count + 1
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "+1"), count && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Count = ".concat(count)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Trips));

/***/ })

})
//# sourceMappingURL=trips.js.1b38f9a910acd9588863.hot-update.js.map