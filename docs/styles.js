(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n  width: 1400px;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  font-size: 100%;\n}\n* {\n  font-family: \"Lato\", Helvetica, sans-serif;\n  color: #333447;\n  line-height: 1.5;\n}\ninput.middle:focus {\n  outline-width: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\nh1 {\n  font-size: 2.5rem;\n}\nh2 {\n  font-size: 2rem;\n}\nh3 {\n  font-size: 1.375rem;\n}\nh4 {\n  font-size: 1.125rem;\n}\nh5 {\n  font-size: 1rem;\n}\nh6 {\n  font-size: 0.875rem;\n}\np {\n  font-size: 1.125rem;\n  font-weight: 200;\n  line-height: 1.8;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-regular {\n  font-weight: 400;\n}\n.font-heavy {\n  font-weight: 700;\n}\n.left {\n  text-align: left;\n}\n.right {\n  text-align: right;\n}\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.justify {\n  text-align: justify;\n}\n.hidden-sm {\n  display: none;\n}\n.container {\n  width: 90%;\n  min-width: 1400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 33.75em) {\n  .container {\n    width: 80%;\n    min-width: 1400px;\n  }\n}\n@media only screen and (min-width: 60em) {\n  .container {\n    width: 75%;\n    min-width: 1400px;\n    max-width: 60rem;\n  }\n}\n.container-full {\n  width: 100%;\n  min-width: 1400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.row {\n  position: relative;\n  width: 100%;\n}\n.row [class^=col] {\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem;\n}\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.col-1,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-10,\n.col-11,\n.col-12 {\n  width: 96%;\n}\n.col-1-sm {\n  width: 4.3333333333%;\n}\n.col-2-sm {\n  width: 12.6666666667%;\n}\n.col-3-sm {\n  width: 21%;\n}\n.col-4-sm {\n  width: 29.3333333333%;\n}\n.col-5-sm {\n  width: 37.6666666667%;\n}\n.col-6-sm {\n  width: 46%;\n}\n.col-7-sm {\n  width: 54.3333333333%;\n}\n.col-8-sm {\n  width: 62.6666666667%;\n}\n.col-9-sm {\n  width: 71%;\n}\n.col-10-sm {\n  width: 79.3333333333%;\n}\n.col-11-sm {\n  width: 87.6666666667%;\n}\n.col-12-sm {\n  width: 96%;\n}\n@media only screen and (min-width: 45em) {\n  .col-1 {\n    width: 4.3333333333%;\n  }\n\n  .col-2 {\n    width: 12.6666666667%;\n  }\n\n  .col-3 {\n    width: 21%;\n  }\n\n  .col-4 {\n    width: 29.3333333333%;\n  }\n\n  .col-5 {\n    width: 37.6666666667%;\n  }\n\n  .col-6 {\n    width: 46%;\n  }\n\n  .col-7 {\n    width: 54.3333333333%;\n  }\n\n  .col-8 {\n    width: 62.6666666667%;\n  }\n\n  .col-9 {\n    width: 71%;\n  }\n\n  .col-10 {\n    width: 79.3333333333%;\n  }\n\n  .col-11 {\n    width: 87.6666666667%;\n  }\n\n  .col-12 {\n    width: 96%;\n  }\n\n  .hidden-sm {\n    display: block;\n  }\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":";AAAA,8EAAA;AAsBA;;EAEI,YAAA;EAEA,aARU;EASV,SAAA;EACA,UAAA;EACA,OAAA;EACA,MAAA;EACA,eAAA;AApBJ;AAuBA;EACI,0CA7BU;EA8BV,cArBQ;EAsBR,gBAzBkB;AAKtB;AAuBA;EACI,gBAAA;AApBJ;AAuBA;;;;EAII,aAAA;AApBJ;AAyBA;EACI,iBAAA;AAtBJ;AAyBA;EACI,eAAA;AAtBJ;AAyBA;EACI,mBAAA;AAtBJ;AAyBA;EACI,mBAAA;AAtBJ;AAyBA;EACI,eAAA;AAtBJ;AAyBA;EACI,mBAAA;AAtBJ;AAyBA;EACI,mBAAA;EACA,gBAAA;EACA,gBAAA;AAtBJ;AAyBA;EACI,gBA3EkB;AAqDtB;AAyBA;EACI,gBA9EkB;AAwDtB;AAyBA;EACI,gBAjFkB;AA2DtB;AA2BA;EACI,gBAAA;AAxBJ;AA2BA;EACI,iBAAA;AAxBJ;AA2BA;EACI,kBAAA;EACA,iBAAA;EACA,kBAAA;AAxBJ;AA2BA;EACI,mBAAA;AAxBJ;AA2BA;EACI,aAAA;AAxBJ;AAmCA;EACI,UAAA;EACA,iBA/GU;EAgHV,iBAAA;EACA,kBAAA;AAhCJ;AAkCI;EANJ;IAOQ,UAAA;IACA,iBArHM;EAsFZ;AACF;AAiCI;EAXJ;IAYQ,UAAA;IACA,iBA1HM;IA2HN,gBAAA;EA9BN;AACF;AAiCA;EACI,WAAA;EACA,iBAjIU;EAkIV,iBAAA;EACA,kBAAA;AA9BJ;AAiCA;EACI,kBAAA;EACA,WAAA;AA9BJ;AAiCA;EACI,WAAA;EACA,iBAAA;EACA,oBAAA;AA9BJ;AAiCA;EACI,WAAA;EACA,cAAA;EACA,WAAA;AA9BJ;AAiCA;;;;;;;;;;;;EAYI,UA5De;AA8BnB;AAiCA;EACI,oBAAA;AA9BJ;AAiCA;EACI,qBAAA;AA9BJ;AAiCA;EACI,UAAA;AA9BJ;AAiCA;EACI,qBAAA;AA9BJ;AAiCA;EACI,qBAAA;AA9BJ;AAiCA;EACI,UAAA;AA9BJ;AAiCA;EACI,qBAAA;AA9BJ;AAiCA;EACI,qBAAA;AA9BJ;AAiCA;EACI,UAAA;AA9BJ;AAiCA;EACI,qBAAA;AA9BJ;AAiCA;EACI,qBAAA;AA9BJ;AAiCA;EACI,UA5Ge;AA8EnB;AAiCA;EACI;IACI,oBAAA;EA9BN;;EAiCE;IACI,qBAAA;EA9BN;;EAiCE;IACI,UAAA;EA9BN;;EAiCE;IACI,qBAAA;EA9BN;;EAiCE;IACI,qBAAA;EA9BN;;EAiCE;IACI,UAAA;EA9BN;;EAiCE;IACI,qBAAA;EA9BN;;EAiCE;IACI,qBAAA;EA9BN;;EAiCE;IACI,UAAA;EA9BN;;EAiCE;IACI,qBAAA;EA9BN;;EAiCE;IACI,qBAAA;EA9BN;;EAiCE;IACI,UA7JW;EA+HjB;;EAiCE;IACI,cAAA;EA9BN;AACF","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n// SIMPLE GRID - SASS/SCSS\r\n\r\n@import url(https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic);\r\n\r\n// fonts\r\n$font-family: 'Lato',\r\nHelvetica,\r\nsans-serif;\r\n$font-weight-light  : 300;\r\n$font-weight-regular: 400;\r\n$font-weight-heavy  : 700;\r\n$font-height        : 1.5;\r\n\r\n// colors\r\n$dark-grey: #333447;\r\n$dark-gray: #333447; // for the Americans\r\n\r\n$body-width : 1400px;\r\n\r\n// universal\r\n\r\nhtml,\r\nbody {\r\n    height      : 100%;\r\n    // width    : 100%;\r\n    width       : $body-width;\r\n    margin      : 0;\r\n    padding     : 0;\r\n    left        : 0;\r\n    top         : 0;\r\n    font-size   : 100%;\r\n}\r\n\r\n* {\r\n    font-family: $font-family;\r\n    color      : $dark-grey;\r\n    line-height: $font-height;\r\n}\r\n\r\ninput.middle:focus {\r\n    outline-width: 0;\r\n}\r\n\r\ninput:focus,\r\nselect:focus,\r\ntextarea:focus,\r\nbutton:focus {\r\n    outline: none;\r\n}\r\n\r\n// typography\r\n\r\nh1 {\r\n    font-size: 2.5rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 2rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.375rem;\r\n}\r\n\r\nh4 {\r\n    font-size: 1.125rem;\r\n}\r\n\r\nh5 {\r\n    font-size: 1rem;\r\n}\r\n\r\nh6 {\r\n    font-size: 0.875rem;\r\n}\r\n\r\np {\r\n    font-size  : 1.125rem;\r\n    font-weight: 200;\r\n    line-height: 1.8;\r\n}\r\n\r\n.font-light {\r\n    font-weight: $font-weight-light;\r\n}\r\n\r\n.font-regular {\r\n    font-weight: $font-weight-regular;\r\n}\r\n\r\n.font-heavy {\r\n    font-weight: $font-weight-heavy;\r\n}\r\n\r\n// utility\r\n\r\n.left {\r\n    text-align: left;\r\n}\r\n\r\n.right {\r\n    text-align: right;\r\n}\r\n\r\n.center {\r\n    text-align  : center;\r\n    margin-left : auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.justify {\r\n    text-align: justify;\r\n}\r\n\r\n.hidden-sm {\r\n    display: none;\r\n}\r\n\r\n// grid\r\n\r\n$width           : 96%;\r\n$gutter          : 4%;\r\n$breakpoint-small: 33.75em; // 540px\r\n$breakpoint-med  : 45em; // 720px\r\n$breakpoint-large: 60em; // 960px\r\n\r\n.container {\r\n    width       : 90%;\r\n    min-width: $body-width;\r\n    margin-left : auto;\r\n    margin-right: auto;\r\n\r\n    @media only screen and (min-width: $breakpoint-small) {\r\n        width: 80%;\r\n        min-width: $body-width;\r\n    }\r\n\r\n    @media only screen and (min-width: $breakpoint-large) {\r\n        width    : 75%;\r\n        min-width: $body-width;\r\n        max-width: 60rem;\r\n    }\r\n}\r\n\r\n.container-full {\r\n    width       : 100%;\r\n    min-width: $body-width;\r\n    margin-left : auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.row {\r\n    position: relative;\r\n    width   : 100%;\r\n}\r\n\r\n.row [class^=\"col\"] {\r\n    float     : left;\r\n    margin    : 0.5rem 2%;\r\n    min-height: 0.125rem;\r\n}\r\n\r\n.row::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear  : both;\r\n}\r\n\r\n.col-1,\r\n.col-2,\r\n.col-3,\r\n.col-4,\r\n.col-5,\r\n.col-6,\r\n.col-7,\r\n.col-8,\r\n.col-9,\r\n.col-10,\r\n.col-11,\r\n.col-12 {\r\n    width: $width;\r\n}\r\n\r\n.col-1-sm {\r\n    width: ($width / 12) - ($gutter * 11 / 12);\r\n}\r\n\r\n.col-2-sm {\r\n    width: ($width / 6) - ($gutter * 10 / 12);\r\n}\r\n\r\n.col-3-sm {\r\n    width: ($width / 4) - ($gutter * 9 / 12);\r\n}\r\n\r\n.col-4-sm {\r\n    width: ($width / 3) - ($gutter * 8 / 12);\r\n}\r\n\r\n.col-5-sm {\r\n    width: ($width / (12 / 5)) - ($gutter * 7 / 12);\r\n}\r\n\r\n.col-6-sm {\r\n    width: ($width / 2) - ($gutter * 6 / 12);\r\n}\r\n\r\n.col-7-sm {\r\n    width: ($width / (12 / 7)) - ($gutter * 5 / 12);\r\n}\r\n\r\n.col-8-sm {\r\n    width: ($width / (12 / 8)) - ($gutter * 4 / 12);\r\n}\r\n\r\n.col-9-sm {\r\n    width: ($width / (12 / 9)) - ($gutter * 3 / 12);\r\n}\r\n\r\n.col-10-sm {\r\n    width: ($width / (12 / 10)) - ($gutter * 2 / 12);\r\n}\r\n\r\n.col-11-sm {\r\n    width: ($width / (12 / 11)) - ($gutter * 1 / 12);\r\n}\r\n\r\n.col-12-sm {\r\n    width: $width;\r\n}\r\n\r\n@media only screen and (min-width: $breakpoint-med) {\r\n    .col-1 {\r\n        width: ($width / 12) - ($gutter * 11 / 12);\r\n    }\r\n\r\n    .col-2 {\r\n        width: ($width / 6) - ($gutter * 10 / 12);\r\n    }\r\n\r\n    .col-3 {\r\n        width: ($width / 4) - ($gutter * 9 / 12);\r\n    }\r\n\r\n    .col-4 {\r\n        width: ($width / 3) - ($gutter * 8 / 12);\r\n    }\r\n\r\n    .col-5 {\r\n        width: ($width / (12 / 5)) - ($gutter * 7 / 12);\r\n    }\r\n\r\n    .col-6 {\r\n        width: ($width / 2) - ($gutter * 6 / 12);\r\n    }\r\n\r\n    .col-7 {\r\n        width: ($width / (12 / 7)) - ($gutter * 5 / 12);\r\n    }\r\n\r\n    .col-8 {\r\n        width: ($width / (12 / 8)) - ($gutter * 4 / 12);\r\n    }\r\n\r\n    .col-9 {\r\n        width: ($width / (12 / 9)) - ($gutter * 3 / 12);\r\n    }\r\n\r\n    .col-10 {\r\n        width: ($width / (12 / 10)) - ($gutter * 2 / 12);\r\n    }\r\n\r\n    .col-11 {\r\n        width: ($width / (12 / 11)) - ($gutter * 1 / 12);\r\n    }\r\n\r\n    .col-12 {\r\n        width: $width;\r\n    }\r\n\r\n    .hidden-sm {\r\n        display: block;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Documents\Lab\Git\tax-calculation\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map