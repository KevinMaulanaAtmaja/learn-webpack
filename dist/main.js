(self["webpackChunkbelajar_webpack_code"] = self["webpackChunkbelajar_webpack_code"] || []).push([["main"],{

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var cekInputValid = __webpack_require__(/*! ./utils/cekInputValid.js */ "./src/app/utils/cekInputValid.js");
// import { cekInputValid } from './utils/cekInputValid.js';

// export
module.exports = /*#__PURE__*/_createClass(function AlertService() {
  var _this = this;
  _classCallCheck(this, AlertService);
  _defineProperty(this, "tampilkanErrorPenjumlahan", function (input, angka) {
    var hasil = input.reduce(function (pesan, nilai, index) {
      if (cekInputValid(angka[index])) {
        return pesan + '';
      } else {
        return pesan + "".concat(nilai, " itu bukan angka! ");
      }
    }, 'Silahkan masukkan angka yang benar: ');
    _this.error.classList.remove('d-none');
    _this.error.innerText = hasil;
  });
  _defineProperty(this, "sembunyikanError", function () {
    return _this.error.classList.add('d-none');
  });
  this.error = document.querySelector('#error');
});

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var cekInputValid = __webpack_require__(/*! ./utils/cekInputValid.js */ "./src/app/utils/cekInputValid.js");
var parseInput = __webpack_require__(/*! ./utils/parseInput.js */ "./src/app/utils/parseInput.js");

// import { cekInputValid } from './utils/cekInputValid.js';
// import { parseInput } from './utils/parseInput.js';

// export 
var run = function run(alertService, calculatorService, jokesService) {
  alertService.sembunyikanError();
  calculatorService.onClick(function () {
    alertService.sembunyikanError();
    var input = calculatorService.getInput();
    var angka = parseInput.apply(void 0, _toConsumableArray(input));
    if (cekInputValid.apply(void 0, _toConsumableArray(angka))) {
      var _angka = _slicedToArray(angka, 2),
        angka1 = _angka[0],
        angka2 = _angka[1];
      calculatorService.setResult(angka1, angka2);
    } else {
      calculatorService.setResult('');
      alertService.tampilkanErrorPenjumlahan(input, angka);
    }
  });
  jokesService.onClick(function () {
    fetch('https://candaan-api.vercel.app/api/text/random').then(function (response) {
      return response.json();
    }).then(function (data) {
      jokesService.setModal(data.data);
    });
  });
};
module.exports = run;

/***/ }),

/***/ "./src/app/calculator.service.js":
/*!***************************************!*\
  !*** ./src/app/calculator.service.js ***!
  \***************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// export 
module.exports = /*#__PURE__*/function () {
  function CalculatorService() {
    _classCallCheck(this, CalculatorService);
    this.operand1 = document.querySelector('#operand1');
    this.operand2 = document.querySelector('#operand2');
    this.tombolTambah = document.querySelector('#tombol-tambah');
    this.hasil = document.querySelector('#hasil');
  }
  _createClass(CalculatorService, [{
    key: "getInput",
    value: function getInput() {
      return [this.operand1.value, this.operand2.value];
    }
  }, {
    key: "setResult",
    value: function setResult(angka1, angka2) {
      this.hasil.innerText = angka1 + angka2;
    }
  }, {
    key: "onClick",
    value: function onClick(cb) {
      this.tombolTambah.addEventListener('click', cb);
    }
  }]);
  return CalculatorService;
}();

/***/ }),

/***/ "./src/app/jokes.service.js":
/*!**********************************!*\
  !*** ./src/app/jokes.service.js ***!
  \**********************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// export 
module.exports = /*#__PURE__*/function () {
  function JokesService() {
    _classCallCheck(this, JokesService);
    this.tombolJokes = document.querySelector('#jokes-receh');
    this.modalBody = document.querySelector('.modal-body');
  }
  _createClass(JokesService, [{
    key: "setModal",
    value: function setModal(str) {
      this.modalBody.innerHTML = str;
    }
  }, {
    key: "onClick",
    value: function onClick(cb) {
      this.tombolJokes.addEventListener('click', cb);
    }
  }]);
  return JokesService;
}();

/***/ }),

/***/ "./src/app/utils/cekInputValid.js":
/*!****************************************!*\
  !*** ./src/app/utils/cekInputValid.js ***!
  \****************************************/
/***/ ((module) => {

// export 
var cekInputValid = function cekInputValid() {
  for (var _len = arguments.length, angka = new Array(_len), _key = 0; _key < _len; _key++) {
    angka[_key] = arguments[_key];
  }
  return angka.every(function (num) {
    return typeof num === 'number' && !isNaN(num);
  });
};
module.exports = cekInputValid;

/***/ }),

/***/ "./src/app/utils/parseInput.js":
/*!*************************************!*\
  !*** ./src/app/utils/parseInput.js ***!
  \*************************************/
/***/ ((module) => {

// export 
var parseInput = function parseInput() {
  for (var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++) {
    input[_key] = arguments[_key];
  }
  return input.map(function (str) {
    return parseInt(str);
  });
};
module.exports = parseInput;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/vendor.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var run = __webpack_require__(/*! ./app/app.js */ "./src/app/app.js");
var AlertService = __webpack_require__(/*! ./app/alert.service.js */ "./src/app/alert.service.js");
var CalculatorService = __webpack_require__(/*! ./app/calculator.service.js */ "./src/app/calculator.service.js");
var JokesService = __webpack_require__(/*! ./app/jokes.service */ "./src/app/jokes.service.js");

// import { run } from './app/app.js';
// import { AlertService } from './app/alert.service.js';
// import { CalculatorService } from './app/calculator.service.js';
// import { JokesService } from './app/jokes.service';

var alertService = new AlertService();
var calculatorService = new CalculatorService();
var jokesService = new JokesService();
run(alertService, calculatorService, jokesService);
console.log(lodash__WEBPACK_IMPORTED_MODULE_2___default().toUpper('hello from index.js'));

/***/ }),

/***/ "./src/vendor.js":
/*!***********************!*\
  !*** ./src/vendor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-tilt */ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_vanilla-tilt_lib_vanilla-161c68"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);