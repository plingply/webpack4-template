(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_main"],{

/***/ "/4li":
/*!**********************************!*\
  !*** ./src/plugin/ajax/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "WcyC");

/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$http';
    Object.defineProperty(Vue.prototype, name, {
      value: _ajax__WEBPACK_IMPORTED_MODULE_0__["default"]
    });
  }
});

/***/ }),

/***/ "/MJi":
/*!****************************!*\
  !*** ./src/store/state.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/vconsole-webpack-plugin/src/vconsole.js ./src/main.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/penglin/myfile/webpack4-template/node_modules/vconsole-webpack-plugin/src/vconsole.js */"1nax");
module.exports = __webpack_require__(/*! ./src/main.js */"Vtdi");


/***/ }),

/***/ "BDkB":
/*!********************************!*\
  !*** ./src/store/mutations.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "CKc3":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./src/app.vue?vue&type=template&id=5ef48958& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "D03r":
/*!***********************************!*\
  !*** ./src/plugin/token/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  setToken: function setToken(name, token) {
    if (localStorage) {
      localStorage.setItem(name, token);
    } else if (window.navigator.cookieEnabled) {
      document.cookie = name + "=" + token;
    } else {
      alert('浏览器版本太低，请升级浏览器!');
    }
  },
  getToken: function getToken(token) {
    if (localStorage && localStorage.getItem(token)) {
      return localStorage.getItem(token);
    }

    if (window.navigator.cookieEnabled) {
      var ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        if (c.split('=')[0].trim() == token) {
          return c.split('=')[1];
        }
      }

      return null;
    }

    return null;
  },
  removeToken: function removeToken(name) {
    if (localStorage && localStorage.getItem(name)) {
      localStorage.removeItem(name);
    }

    if (window.navigator.cookieEnabled) {
      document.cookie = name + "=; expires=-1";
    }
  }
});

/***/ }),

/***/ "HMJI":
/*!******************************************!*\
  !*** ./src/config/config.development.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  baseURL: 'https://api-dev.imxyb.com'
});

/***/ }),

/***/ "Q2AE":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "lDcw");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "CMFx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "/MJi");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mutations */ "BDkB");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "Y+Aq");





vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  strict: "development" !== 'production',
  state: _state__WEBPACK_IMPORTED_MODULE_2__["default"],
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_3__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "Vtdi":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "lDcw");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "xHjv");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "f+TK");
/* harmony import */ var _plugin_ajax_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin/ajax/index */ "/4li");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "Q2AE");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! element-ui */ "XJYT");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! element-ui/lib/theme-chalk/index.css */ "D66Q");
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./less/index.less */ "fcRp");
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_less_index_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router/index */ "oYx3");








vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_plugin_ajax_index__WEBPACK_IMPORTED_MODULE_3__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(element_ui__WEBPACK_IMPORTED_MODULE_5___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$ELEMENT = {
  size: 'small',
  zIndex: 3000
};

var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  routes: _router_index__WEBPACK_IMPORTED_MODULE_8__["default"]
});
window.vm = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  router: router,
  render: function render(h) {
    return h(_app__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "WcyC":
/*!*********************************!*\
  !*** ./src/plugin/ajax/ajax.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($config) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token */ "D03r");



var Promise = __webpack_require__(/*! es6-promise */ "E2g8").Promise;

var Axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: $config.baseURL,
  timeout: 10000,
  withCredentials: true
});
Axios.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    var formData = new FormData();
    Object.keys(config.data).forEach(function (key) {
      return formData.append(key, config.data[key]);
    });
    config.data = formData;
  }

  if (config.method === 'put' || config.method == 'delete') {
    var url = '';

    for (var key in config.data) {
      url += key + '=' + config.data[key] + '&';
    }

    url = url.slice(0, url.length - 1);
    config.data = url;
  }

  if (config.method === 'get' && config.url.indexOf('/api/') != -1 && config.data) {
    var _url = '?';

    for (var _key in config.data) {
      _url += _key + '=' + config.data[_key] + '&';
    }

    _url = _url.slice(0, _url.length - 1);
    config.url += _url;
  }

  if (!_token__WEBPACK_IMPORTED_MODULE_1__["default"].getToken('token')) {} else {
    config.headers.Authorization = _token__WEBPACK_IMPORTED_MODULE_1__["default"].getToken('token');
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});
Axios.interceptors.response.use(function (res) {
  var data = res.data;

  if (data.status == 'ok') {
    return data;
  } else {}

  return data;
}, function (error) {
  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (Axios);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/config.development.js */ "HMJI")["default"]))

/***/ }),

/***/ "Y+Aq":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "f+TK":
/*!*********************!*\
  !*** ./src/app.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=5ef48958& */ "fwzw");
/* harmony import */ var _node_modules_vue_loader_15_7_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/_vue-loader@15.7.2@vue-loader/lib/runtime/componentNormalizer.js */ "ToIM");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_15_7_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "fcRp":
/*!*****************************!*\
  !*** ./src/less/index.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fwzw":
/*!****************************************************!*\
  !*** ./src/app.vue?vue&type=template&id=5ef48958& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=5ef48958& */ "CKc3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_5ef48958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "oYx3":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var routes = [{
  path: "/home",
  name: "home",
  component: function component(resolve) {
    return __webpack_require__.e(/*! require.ensure | home */ "home").then((function () {
      return resolve(__webpack_require__(/*! @/views/home/home.vue */ "d7gD"));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}, {
  path: "/info",
  name: "info",
  component: function component() {
    return new Promise(function (resolve) {
      __webpack_require__.e(/*! require.ensure */ "chunk-a599").then((function (require) {
        resolve(__webpack_require__(/*! @/views/info/info.vue */ "3aN4"));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });
  }
}, {
  path: "/h5",
  name: "h5",
  component: function component() {
    return new Promise(function (resolve) {
      __webpack_require__.e(/*! require.ensure */ "chunk-9a3d").then((function (require) {
        resolve(__webpack_require__(/*! @/views/h5/h5.vue */ "cZ60"));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=_main.ab2db.js.map