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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _htmlExtractor = __webpack_require__(2);

var _htmlExtractor2 = _interopRequireDefault(_htmlExtractor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Template = '\n  <div>\n    <div :style="style" id="box-area" contenteditable>\n    </div>\n  </div>\n';

var init = function init(Vue) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Vue.component('vue-poor-editor', {
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        title: 'value',
        type: String,
        default: ''
      },
      instantSend: {
        title: 'instantSend',
        type: Boolean,
        default: false
      },
      autoFormat: {
        title: 'autoFormat',
        type: Boolean,
        default: true
      },
      borderLess: {
        title: 'borderLess',
        type: Boolean,
        default: true
      },
      minHeight: {
        title: 'minHeight',
        type: String,
        default: '100px'
      },
      width: {
        title: 'width',
        type: String,
        default: '100%'
      }
    },
    template: Template,
    data: function data() {
      return {
        box: null,
        style: {
          border: '1px solid #b2bec3',
          padding: '4px',
          'font-size': '13px',
          'line-height': '1.18',
          'border-radius': '4px',
          outline: 'none',
          'min-height': this.minHeight,
          'width': this.width
        }
      };
    },
    mounted: function mounted() {
      if (typeof document !== 'undefined') {
        if (this.borderLess === true) {
          this.style.border = 'none';
        }
        this.listener(this.value);
      }
    },
    methods: {
      eventListener: function eventListener(e) {
        if (e.which === 13 && !e.shiftKey) {
          this.submitEvent(this.box.innerHTML);
        }
        this.$emit('input', this.box.innerHTML);
      },
      format: function format() {
        document.execCommand('removeFormat', false);
      },
      listener: function listener(value) {
        this.box = document.getElementById('box-area');
        this.box.innerHTML = value;
        document.execCommand('defaultParagraphSeparator', false, 'p');
        this.box.addEventListener('keydown', this.eventListener);
        if (this.autoFormat === true) {
          this.pasteEvent();
        }
      },
      pasteEvent: function pasteEvent() {
        this.box.addEventListener('paste', function (e) {
          e.preventDefault();
          document.execCommand('insertHTML', false, e.clipboardData.getData('text/plain'));
        });
      },
      submitEvent: function submitEvent(html) {
        if ((0, _htmlExtractor2.default)(html) !== '') {
          this.$emit('submit:enter', html);
        }
      }
    }
  });
};

var VuePoorEditor = function VuePoorEditor() {
  return { init: init };
};

exports.default = VuePoorEditor();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.init.version = "1.0.3";

exports.default = _main2.default.init;


if (typeof window !== 'undefined' && window.Vue) {
  window.VuePoorEditor = _main2.default.init;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regExp = new RegExp(/(<([^>]+)>)/, 'ig');

var extractorHTML = function extractorHTML(html) {
  return html.replace(regExp, '').trim();
};

module.exports = extractorHTML;

/***/ })
/******/ ]);