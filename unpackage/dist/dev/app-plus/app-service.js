(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*****************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 28));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 74));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBdUI7QUFBQTtBQUV2QkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNaRyxZQUFHLEVBQ1I7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
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
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!********************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/pages.json ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!*******************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/pages/index/index.vue?mpType=page ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 70);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzZNO0FBQzdNLGdCQUFnQixxTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniForms:
      __webpack_require__(/*! @/uni_modules/uni-forms/components/uni-forms/uni-forms.vue */ 10)
        .default,
    uniFormsItem:
      __webpack_require__(/*! @/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue */ 30)
        .default,
    uniDataSelect:
      __webpack_require__(/*! @/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue */ 35)
        .default,
    uniEasyinput:
      __webpack_require__(/*! @/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue */ 65)
        .default,
    uniIcons:
      __webpack_require__(/*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 38)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c(
        "uni-forms",
        {
          ref: "form",
          attrs: {
            modelValue: _vm.formData,
            rules: _vm.rules,
            labelAlign: "left",
            labelWidth: "150upx",
            _i: 1,
          },
        },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "title"),
            attrs: { _i: 2 },
          }),
          _c(
            "uni-forms-item",
            { attrs: { label: "品牌款式", name: "name", _i: 3 } },
            [
              _c("uni-data-select", {
                attrs: { disabled: _vm.disabled, localdata: _vm.range, _i: 4 },
                on: { change: _vm.change },
                model: {
                  value: _vm._$s(4, "v-model", _vm.formData.age),
                  callback: function ($$v) {
                    _vm.$set(_vm.formData, "age", $$v)
                  },
                  expression: "formData.age",
                },
              }),
            ],
            1
          ),
          _c(
            "uni-forms-item",
            { attrs: { label: "球杆编号", name: "age", _i: 5 } },
            [
              _c("uni-easyinput", {
                attrs: {
                  disabled: _vm.disabled,
                  type: "text",
                  placeholder: "请输入",
                  _i: 6,
                },
                model: {
                  value: _vm._$s(6, "v-model", _vm.formData.age),
                  callback: function ($$v) {
                    _vm.$set(_vm.formData, "age", $$v)
                  },
                  expression: "formData.age",
                },
              }),
            ],
            1
          ),
          _c(
            "uni-forms-item",
            { attrs: { label: "统一售价", name: "age", _i: 7 } },
            [
              _c(
                "uni-easyinput",
                {
                  attrs: {
                    disabled: _vm.disabled,
                    type: "text",
                    placeholder: "请输入",
                    _i: 8,
                  },
                  model: {
                    value: _vm._$s(8, "v-model", _vm.formData.age),
                    callback: function ($$v) {
                      _vm.$set(_vm.formData, "age", $$v)
                    },
                    expression: "formData.age",
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(9, "sc", "ml12"),
                    attrs: { _i: 9 },
                    slot: "left",
                  }),
                ]
              ),
            ],
            1
          ),
          _c(
            "view",
            { staticClass: _vm._$s(10, "sc", "title"), attrs: { _i: 10 } },
            [
              _c("uni-icons", {
                staticClass: _vm._$s(11, "sc", "readonly"),
                attrs: { type: "chatboxes", size: "30", _i: 11 },
                on: { click: _vm.setReadonly },
              }),
            ],
            1
          ),
          _c(
            "uni-forms-item",
            { attrs: { label: "杆型", name: "name", _i: 12 } },
            [
              _c("uni-data-select", {
                attrs: { disabled: _vm.disabled, localdata: _vm.range, _i: 13 },
                on: { change: _vm.change },
                model: {
                  value: _vm._$s(13, "v-model", _vm.formData.age),
                  callback: function ($$v) {
                    _vm.$set(_vm.formData, "age", $$v)
                  },
                  expression: "formData.age",
                },
              }),
            ],
            1
          ),
          _c(
            "uni-forms-item",
            { attrs: { label: "杆头直径", name: "age", _i: 14 } },
            [
              _c(
                "uni-easyinput",
                {
                  attrs: {
                    disabled: _vm.disabled,
                    type: "text",
                    placeholder: "请输入",
                    _i: 15,
                  },
                  model: {
                    value: _vm._$s(15, "v-model", _vm.formData.age),
                    callback: function ($$v) {
                      _vm.$set(_vm.formData, "age", $$v)
                    },
                    expression: "formData.age",
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(16, "sc", "mr12"),
                    attrs: { _i: 16 },
                    slot: "right",
                  }),
                ]
              ),
            ],
            1
          ),
          _c(
            "uni-forms-item",
            { attrs: { label: "前枝材质", name: "age", _i: 17 } },
            [
              _c("uni-data-select", {
                attrs: { disabled: _vm.disabled, localdata: _vm.range, _i: 18 },
                on: { change: _vm.change },
                model: {
                  value: _vm._$s(18, "v-model", _vm.formData.age),
                  callback: function ($$v) {
                    _vm.$set(_vm.formData, "age", $$v)
                  },
                  expression: "formData.age",
                },
              }),
            ],
            1
          ),
          _c(
            "uni-forms-item",
            { attrs: { label: "后把直径", name: "age", _i: 19 } },
            [
              _c(
                "uni-easyinput",
                {
                  attrs: {
                    disabled: _vm.disabled,
                    type: "text",
                    placeholder: "请输入",
                    _i: 20,
                  },
                  model: {
                    value: _vm._$s(20, "v-model", _vm.formData.age),
                    callback: function ($$v) {
                      _vm.$set(_vm.formData, "age", $$v)
                    },
                    expression: "formData.age",
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(21, "sc", "mr12"),
                    attrs: { _i: 21 },
                    slot: "right",
                  }),
                ]
              ),
            ],
            1
          ),
          _c(
            "uni-forms-item",
            { attrs: { label: "后把材质", name: "age", _i: 22 } },
            [
              _c("uni-data-select", {
                attrs: { disabled: _vm.disabled, localdata: _vm.range, _i: 23 },
                on: { change: _vm.change },
                model: {
                  value: _vm._$s(23, "v-model", _vm.formData.age),
                  callback: function ($$v) {
                    _vm.$set(_vm.formData, "age", $$v)
                  },
                  expression: "formData.age",
                },
              }),
            ],
            1
          ),
          _c(
            "uni-forms-item",
            { attrs: { label: "长度", name: "age", _i: 24 } },
            [
              _c(
                "uni-easyinput",
                {
                  attrs: {
                    disabled: _vm.disabled,
                    type: "text",
                    placeholder: "请输入",
                    _i: 25,
                  },
                  model: {
                    value: _vm._$s(25, "v-model", _vm.formData.age),
                    callback: function ($$v) {
                      _vm.$set(_vm.formData, "age", $$v)
                    },
                    expression: "formData.age",
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(26, "sc", "mr12"),
                    attrs: { _i: 26 },
                    slot: "right",
                  }),
                ]
              ),
            ],
            1
          ),
          _c(
            "uni-forms-item",
            { attrs: { label: "重量", name: "age", _i: 27 } },
            [
              _c(
                "uni-easyinput",
                {
                  attrs: {
                    disabled: _vm.disabled,
                    type: "text",
                    placeholder: "请输入",
                    _i: 28,
                  },
                  model: {
                    value: _vm._$s(28, "v-model", _vm.formData.age),
                    callback: function ($$v) {
                      _vm.$set(_vm.formData, "age", $$v)
                    },
                    expression: "formData.age",
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(29, "sc", "mr12"),
                    attrs: { _i: 29 },
                    slot: "right",
                  }),
                ]
              ),
            ],
            1
          ),
          _c(
            "uni-forms-item",
            { attrs: { label: "重心", name: "age", _i: 30 } },
            [
              _c(
                "uni-easyinput",
                {
                  attrs: {
                    disabled: _vm.disabled,
                    type: "text",
                    placeholder: "请输入",
                    _i: 31,
                  },
                  model: {
                    value: _vm._$s(31, "v-model", _vm.formData.age),
                    callback: function ($$v) {
                      _vm.$set(_vm.formData, "age", $$v)
                    },
                    expression: "formData.age",
                  },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(32, "sc", "mr12"),
                    attrs: { _i: 32 },
                    slot: "right",
                  }),
                ]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "view",
        { staticClass: _vm._$s(33, "sc", "footer"), attrs: { _i: 33 } },
        [
          _c("button", {
            attrs: {
              disabled: _vm._$s(34, "a-disabled", _vm.disabled),
              _i: 34,
            },
            on: { click: _vm.writeData },
          }),
        ]
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!******************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms/uni-forms.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_forms_vue_vue_type_template_id_7ae0e404___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-forms.vue?vue&type=template&id=7ae0e404& */ 11);\n/* harmony import */ var _uni_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-forms.vue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_forms_vue_vue_type_template_id_7ae0e404___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_forms_vue_vue_type_template_id_7ae0e404___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_forms_vue_vue_type_template_id_7ae0e404___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-forms/components/uni-forms/uni-forms.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQzZNO0FBQzdNLGdCQUFnQixxTkFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1mb3Jtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2FlMGU0MDQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktZm9ybXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktZm9ybXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLWZvcm1zL2NvbXBvbmVudHMvdW5pLWZvcm1zL3VuaS1mb3Jtcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*************************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms/uni-forms.vue?vue&type=template&id=7ae0e404& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_template_id_7ae0e404___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-forms.vue?vue&type=template&id=7ae0e404& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_template_id_7ae0e404___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_template_id_7ae0e404___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_template_id_7ae0e404___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_template_id_7ae0e404___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms/uni-forms.vue?vue&type=template&id=7ae0e404& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "uni-forms"), attrs: { _i: 0 } },
    [_c("form", [_vm._t("default", null, { _i: 2 })], 2)]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!*******************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms/uni-forms.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-forms.vue?vue&type=script&lang=js& */ 14);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9zQixDQUFnQiwrdEJBQUcsRUFBQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWZvcm1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktZm9ybXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms/uni-forms.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 16));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 18));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ 19));\nvar _utils = __webpack_require__(/*! ./utils.js */ 27);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 28));\n//\n//\n//\n//\n//\n//\n//\n//\n\n// 后续会慢慢废弃这个方法\n\n_vue.default.prototype.binddata = function (name, value, formName) {\n  if (formName) {\n    this.$refs[formName].setValue(name, value);\n  } else {\n    var formVm;\n    for (var i in this.$refs) {\n      var vm = this.$refs[i];\n      if (vm && vm.$options && vm.$options.name === 'uniForms') {\n        formVm = vm;\n        break;\n      }\n    }\n    if (!formVm) return __f__(\"error\", '当前 uni-froms 组件缺少 ref 属性', \" at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:38\");\n    formVm.setValue(name, value);\n  }\n};\n\n/**\n * Forms 表单\n * @description 由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据\n * @tutorial https://ext.dcloud.net.cn/plugin?id=2773\n * @property {Object} rules\t表单校验规则\n * @property {String} validateTrigger = [bind|submit|blur]\t校验触发器方式 默认 submit\n * @value bind\t\t发生变化时触发\n * @value submit\t提交时触发\n * @value blur\t  失去焦点时触发\n * @property {String} labelPosition = [top|left]\tlabel 位置 默认 left\n * @value top\t\t顶部显示 label\n * @value left\t左侧显示 label\n * @property {String} labelWidth\tlabel 宽度，默认 65px\n * @property {String} labelAlign = [left|center|right]\tlabel 居中方式  默认 left\n * @value left\t\tlabel 左侧显示\n * @value center\tlabel 居中\n * @value right\t\tlabel 右侧对齐\n * @property {String} errShowType = [undertext|toast|modal]\t校验错误信息提示方式\n * @value undertext\t错误信息在底部显示\n * @value toast\t\t\t错误信息toast显示\n * @value modal\t\t\t错误信息modal显示\n * @event {Function} submit\t提交时触发\n * @event {Function} validate\t校验结果发生变化触发\n */\nvar _default2 = {\n  name: 'uniForms',\n  emits: ['validate', 'submit'],\n  options: {\n    virtualHost: true\n  },\n  props: {\n    // 即将弃用\n    value: {\n      type: Object,\n      default: function _default() {\n        return null;\n      }\n    },\n    // vue3 替换 value 属性\n    modelValue: {\n      type: Object,\n      default: function _default() {\n        return null;\n      }\n    },\n    // 1.4.0 开始将不支持 v-model ，且废弃 value 和 modelValue\n    model: {\n      type: Object,\n      default: function _default() {\n        return null;\n      }\n    },\n    // 表单校验规则\n    rules: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    //校验错误信息提示方式 默认 undertext 取值 [undertext|toast|modal]\n    errShowType: {\n      type: String,\n      default: 'undertext'\n    },\n    // 校验触发器方式 默认 bind 取值 [bind|submit]\n    validateTrigger: {\n      type: String,\n      default: 'submit'\n    },\n    // label 位置，默认 left 取值  top/left\n    labelPosition: {\n      type: String,\n      default: 'left'\n    },\n    // label 宽度\n    labelWidth: {\n      type: [String, Number],\n      default: ''\n    },\n    // label 居中方式，默认 left 取值 left/center/right\n    labelAlign: {\n      type: String,\n      default: 'left'\n    },\n    border: {\n      type: Boolean,\n      default: false\n    }\n  },\n  provide: function provide() {\n    return {\n      uniForm: this\n    };\n  },\n  data: function data() {\n    return {\n      // 表单本地值的记录，不应该与传如的值进行关联\n      formData: {},\n      formRules: {}\n    };\n  },\n  computed: {\n    // 计算数据源变化的\n    localData: function localData() {\n      var localVal = this.model || this.modelValue || this.value;\n      if (localVal) {\n        return (0, _utils.deepCopy)(localVal);\n      }\n      return {};\n    }\n  },\n  watch: {\n    // 监听数据变化 ,暂时不使用，需要单独赋值\n    // localData: {},\n    // 监听规则变化\n    rules: {\n      handler: function handler(val, oldVal) {\n        this.setRules(val);\n      },\n      deep: true,\n      immediate: true\n    }\n  },\n  created: function created() {\n    // 子组件实例数组\n    this.childrens = [];\n    // TODO 兼容旧版 uni-data-picker ,新版本中无效，只是避免报错\n    this.inputChildrens = [];\n    this.setRules(this.rules);\n  },\n  methods: {\n    /**\n     * 外部调用方法\n     * 设置规则 ，主要用于小程序自定义检验规则\n     * @param {Array} rules 规则源数据\n     */\n    setRules: function setRules(rules) {\n      // TODO 有可能子组件合并规则的时机比这个要早，所以需要合并对象 ，而不是直接赋值，可能会被覆盖\n      this.formRules = Object.assign({}, this.formRules, rules);\n      // 初始化校验函数\n      this.validator = new _validate.default(rules);\n    },\n    /**\n     * 外部调用方法\n     * 设置数据，用于设置表单数据，公开给用户使用 ， 不支持在动态表单中使用\n     * @param {Object} key\n     * @param {Object} value\n     */\n    setValue: function setValue(key, value) {\n      var example = this.childrens.find(function (child) {\n        return child.name === key;\n      });\n      if (!example) return null;\n      this.formData[key] = (0, _utils.getValue)(key, value, this.formRules[key] && this.formRules[key].rules || []);\n      return example.onFieldChange(this.formData[key]);\n    },\n    /**\n     * 外部调用方法\n     * 手动提交校验表单\n     * 对整个表单进行校验的方法，参数为一个回调函数。\n     * @param {Array} keepitem 保留不参与校验的字段\n     * @param {type} callback 方法回调\n     */\n    validate: function validate(keepitem, callback) {\n      return this.checkAll(this.formData, keepitem, callback);\n    },\n    /**\n     * 外部调用方法\n     * 部分表单校验\n     * @param {Array|String} props 需要校验的字段\n     * @param {Function} 回调函数\n     */\n    validateField: function validateField() {\n      var _this = this;\n      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n      var callback = arguments.length > 1 ? arguments[1] : undefined;\n      props = [].concat(props);\n      var invalidFields = {};\n      this.childrens.forEach(function (item) {\n        var name = (0, _utils.realName)(item.name);\n        if (props.indexOf(name) !== -1) {\n          invalidFields = Object.assign({}, invalidFields, (0, _defineProperty2.default)({}, name, _this.formData[name]));\n        }\n      });\n      return this.checkAll(invalidFields, [], callback);\n    },\n    /**\n     * 外部调用方法\n     * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果\n     * @param {Array|String} props 需要移除校验的字段 ，不填为所有\n     */\n    clearValidate: function clearValidate() {\n      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n      props = [].concat(props);\n      this.childrens.forEach(function (item) {\n        if (props.length === 0) {\n          item.errMsg = '';\n        } else {\n          var name = (0, _utils.realName)(item.name);\n          if (props.indexOf(name) !== -1) {\n            item.errMsg = '';\n          }\n        }\n      });\n    },\n    /**\n     * 外部调用方法 ，即将废弃\n     * 手动提交校验表单\n     * 对整个表单进行校验的方法，参数为一个回调函数。\n     * @param {Array} keepitem 保留不参与校验的字段\n     * @param {type} callback 方法回调\n     */\n    submit: function submit(keepitem, callback, type) {\n      var _this2 = this;\n      var _loop = function _loop(i) {\n        var itemData = _this2.childrens.find(function (v) {\n          return v.name === i;\n        });\n        if (itemData) {\n          if (_this2.formData[i] === undefined) {\n            _this2.formData[i] = _this2._getValue(i, _this2.dataValue[i]);\n          }\n        }\n      };\n      for (var i in this.dataValue) {\n        _loop(i);\n      }\n      if (!type) {\n        __f__(\"warn\", 'submit 方法即将废弃，请使用validate方法代替！', \" at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:289\");\n      }\n      return this.checkAll(this.formData, keepitem, callback, 'submit');\n    },\n    // 校验所有\n    checkAll: function checkAll(invalidFields, keepitem, callback, type) {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var childrens, _loop2, i, promise, results, tempFormData, _i, child, name, result, resetFormData;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (_this3.validator) {\n                  _context.next = 2;\n                  break;\n                }\n                return _context.abrupt(\"return\");\n              case 2:\n                childrens = []; // 处理参与校验的item实例\n                _loop2 = function _loop2(i) {\n                  var item = _this3.childrens.find(function (v) {\n                    return (0, _utils.realName)(v.name) === i;\n                  });\n                  if (item) {\n                    childrens.push(item);\n                  }\n                };\n                for (i in invalidFields) {\n                  _loop2(i);\n                }\n\n                // 如果validate第一个参数是funciont ,那就走回调\n                if (!callback && typeof keepitem === 'function') {\n                  callback = keepitem;\n                }\n                // 如果不存在回调，那么使用 Promise 方式返回\n                if (!callback && typeof callback !== 'function' && Promise) {\n                  promise = new Promise(function (resolve, reject) {\n                    callback = function callback(valid, invalidFields) {\n                      !valid ? resolve(invalidFields) : reject(valid);\n                    };\n                  });\n                }\n                results = []; // 避免引用错乱 ，建议拷贝对象处理\n                tempFormData = JSON.parse(JSON.stringify(invalidFields)); // 所有子组件参与校验,使用 for 可以使用  awiat\n                _context.t0 = _regenerator.default.keys(childrens);\n              case 10:\n                if ((_context.t1 = _context.t0()).done) {\n                  _context.next = 23;\n                  break;\n                }\n                _i = _context.t1.value;\n                child = childrens[_i];\n                name = (0, _utils.realName)(child.name);\n                _context.next = 16;\n                return child.onFieldChange(tempFormData[name]);\n              case 16:\n                result = _context.sent;\n                if (!result) {\n                  _context.next = 21;\n                  break;\n                }\n                results.push(result);\n                // toast ,modal 只需要执行第一次就可以\n                if (!(_this3.errShowType === 'toast' || _this3.errShowType === 'modal')) {\n                  _context.next = 21;\n                  break;\n                }\n                return _context.abrupt(\"break\", 23);\n              case 21:\n                _context.next = 10;\n                break;\n              case 23:\n                if (Array.isArray(results)) {\n                  if (results.length === 0) results = null;\n                }\n                if (Array.isArray(keepitem)) {\n                  keepitem.forEach(function (v) {\n                    var vName = (0, _utils.realName)(v);\n                    var value = (0, _utils.getDataValue)(v, _this3.localData);\n                    if (value !== undefined) {\n                      tempFormData[vName] = value;\n                    }\n                  });\n                }\n\n                // TODO submit 即将废弃\n                if (type === 'submit') {\n                  _this3.$emit('submit', {\n                    detail: {\n                      value: tempFormData,\n                      errors: results\n                    }\n                  });\n                } else {\n                  _this3.$emit('validate', results);\n                }\n\n                // const resetFormData = rawData(tempFormData, this.localData, this.name)\n                resetFormData = {};\n                resetFormData = (0, _utils.rawData)(tempFormData, _this3.name);\n                callback && typeof callback === 'function' && callback(results, resetFormData);\n                if (!(promise && callback)) {\n                  _context.next = 33;\n                  break;\n                }\n                return _context.abrupt(\"return\", promise);\n              case 33:\n                return _context.abrupt(\"return\", null);\n              case 34:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    /**\n     * 返回validate事件\n     * @param {Object} result\n     */\n    validateCheck: function validateCheck(result) {\n      this.$emit('validate', result);\n    },\n    _getValue: _utils.getValue,\n    _isRequiredField: _utils.isRequiredField,\n    _setDataValue: _utils.setDataValue,\n    _getDataValue: _utils.getDataValue,\n    _realName: _utils.realName,\n    _isRealName: _utils.isRealName,\n    _isEqual: _utils.isEqual\n  }\n};\nexports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWZvcm1zL2NvbXBvbmVudHMvdW5pLWZvcm1zL3VuaS1mb3Jtcy52dWUiXSwibmFtZXMiOlsiVnVlIiwiZm9ybVZtIiwibmFtZSIsImVtaXRzIiwib3B0aW9ucyIsInZpcnR1YWxIb3N0IiwicHJvcHMiLCJ2YWx1ZSIsInR5cGUiLCJkZWZhdWx0IiwibW9kZWxWYWx1ZSIsIm1vZGVsIiwicnVsZXMiLCJlcnJTaG93VHlwZSIsInZhbGlkYXRlVHJpZ2dlciIsImxhYmVsUG9zaXRpb24iLCJsYWJlbFdpZHRoIiwibGFiZWxBbGlnbiIsImJvcmRlciIsInByb3ZpZGUiLCJ1bmlGb3JtIiwiZGF0YSIsImZvcm1EYXRhIiwiZm9ybVJ1bGVzIiwiY29tcHV0ZWQiLCJsb2NhbERhdGEiLCJ3YXRjaCIsImhhbmRsZXIiLCJkZWVwIiwiaW1tZWRpYXRlIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJzZXRSdWxlcyIsInNldFZhbHVlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZUZpZWxkIiwiaW52YWxpZEZpZWxkcyIsImNsZWFyVmFsaWRhdGUiLCJpdGVtIiwic3VibWl0IiwiaSIsImNoZWNrQWxsIiwiY2hpbGRyZW5zIiwiY2FsbGJhY2siLCJwcm9taXNlIiwicmVzdWx0cyIsInRlbXBGb3JtRGF0YSIsImNoaWxkIiwicmVzdWx0Iiwia2VlcGl0ZW0iLCJkZXRhaWwiLCJlcnJvcnMiLCJyZXNldEZvcm1EYXRhIiwidmFsaWRhdGVDaGVjayIsIl9nZXRWYWx1ZSIsIl9pc1JlcXVpcmVkRmllbGQiLCJfc2V0RGF0YVZhbHVlIiwiX2dldERhdGFWYWx1ZSIsIl9yZWFsTmFtZSIsIl9pc1JlYWxOYW1lIiwiX2lzRXF1YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBY0E7Ozs7Ozs7Ozs7QUFEQTs7QUFFQUE7RUFDQTtJQUNBO0VBQ0E7SUFDQTtJQUNBO01BQ0E7TUFDQTtRQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FBO0VBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkEsZ0JBd0JBO0VBQ0FDO0VBQ0FDO0VBQ0FDO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBQztNQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FJO01BQ0FMO01BQ0FDO0lBQ0E7SUFDQTtJQUNBSztNQUNBTjtNQUNBQztJQUNBO0lBQ0E7SUFDQU07TUFDQVA7TUFDQUM7SUFDQTtJQUNBO0lBQ0FPO01BQ0FSO01BQ0FDO0lBQ0E7SUFDQTtJQUNBUTtNQUNBVDtNQUNBQztJQUNBO0lBQ0FTO01BQ0FWO01BQ0FDO0lBQ0E7RUFDQTtFQUNBVTtJQUNBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO01BQ0E7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTtJQUNBZDtNQUNBZTtRQUNBO01BQ0E7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBdUJBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7UUFBQTtNQUFBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFBQTtNQUFBO01BQUE7TUFDQTdCO01BQ0E7TUFDQTtRQUNBO1FBQ0E7VUFDQThCLG1GQUNBbEMsNEJBQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQW1DO01BQUE7TUFDQS9CO01BQ0E7UUFDQTtVQUNBZ0M7UUFDQTtVQUNBO1VBQ0E7WUFDQUE7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQUE7TUFBQSwyQkFDQUM7UUFDQTtVQUFBO1FBQUE7UUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO01BQUE7TUFOQTtRQUFBO01BT0E7TUFFQTtRQUNBO01BQ0E7TUFFQTtJQUNBO0lBRUE7SUFDQUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxJQUVBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQ0FDLGdCQUNBO2dCQUFBLHlCQUNBRjtrQkFDQTtvQkFBQTtrQkFBQTtrQkFDQTtvQkFDQUU7a0JBQ0E7Z0JBQUE7Z0JBSkE7a0JBQUE7Z0JBS0E7O2dCQUVBO2dCQUNBO2tCQUNBQztnQkFDQTtnQkFHQTtnQkFDQTtrQkFDQUM7b0JBQ0FEO3NCQUNBO29CQUNBO2tCQUNBO2dCQUNBO2dCQUVBRSxjQUNBO2dCQUNBQywwREFDQTtnQkFBQSx3Q0FDQUo7Y0FBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQUY7Z0JBQ0FPO2dCQUNBN0M7Z0JBQUE7Z0JBQUEsT0FDQTZDO2NBQUE7Z0JBQUFDO2dCQUFBLEtBQ0FBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUNBSDtnQkFDQTtnQkFBQSxNQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFLQTtrQkFDQTtnQkFDQTtnQkFDQTtrQkFDQUk7b0JBQ0E7b0JBQ0E7b0JBQ0E7c0JBQ0FIO29CQUNBO2tCQUNBO2dCQUNBOztnQkFFQTtnQkFDQTtrQkFDQTtvQkFDQUk7c0JBQ0EzQztzQkFDQTRDO29CQUNBO2tCQUNBO2dCQUNBO2tCQUNBO2dCQUNBOztnQkFFQTtnQkFDQUM7Z0JBQ0FBO2dCQUNBVDtnQkFBQSxNQUVBQztrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQSxpQ0FDQUE7Y0FBQTtnQkFBQSxpQ0FFQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUdBO0lBRUE7QUFDQTtBQUNBO0FBQ0E7SUFDQVM7TUFDQTtJQUNBO0lBQ0FDO0lBQ0FDO0lBQ0FDO0lBQ0FDO0lBQ0FDO0lBQ0FDO0lBQ0FDO0VBQ0E7QUFDQTtBQUFBLDRCIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidW5pLWZvcm1zXCI+XHJcblx0XHQ8Zm9ybT5cclxuXHRcdFx0PHNsb3Q+PC9zbG90PlxyXG5cdFx0PC9mb3JtPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRlLmpzJztcclxuXHRpbXBvcnQge1xyXG5cdFx0ZGVlcENvcHksXHJcblx0XHRnZXRWYWx1ZSxcclxuXHRcdGlzUmVxdWlyZWRGaWVsZCxcclxuXHRcdHNldERhdGFWYWx1ZSxcclxuXHRcdGdldERhdGFWYWx1ZSxcclxuXHRcdHJlYWxOYW1lLFxyXG5cdFx0aXNSZWFsTmFtZSxcclxuXHRcdHJhd0RhdGEsXHJcblx0XHRpc0VxdWFsXHJcblx0fSBmcm9tICcuL3V0aWxzLmpzJ1xyXG5cclxuXHQvLyAjaWZuZGVmIFZVRTNcclxuXHQvLyDlkI7nu63kvJrmhaLmhaLlup/lvIPov5nkuKrmlrnms5VcclxuXHRpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcblx0VnVlLnByb3RvdHlwZS5iaW5kZGF0YSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtTmFtZSkge1xyXG5cdFx0aWYgKGZvcm1OYW1lKSB7XHJcblx0XHRcdHRoaXMuJHJlZnNbZm9ybU5hbWVdLnNldFZhbHVlKG5hbWUsIHZhbHVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCBmb3JtVm07XHJcblx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy4kcmVmcykge1xyXG5cdFx0XHRcdGNvbnN0IHZtID0gdGhpcy4kcmVmc1tpXTtcclxuXHRcdFx0XHRpZiAodm0gJiYgdm0uJG9wdGlvbnMgJiYgdm0uJG9wdGlvbnMubmFtZSA9PT0gJ3VuaUZvcm1zJykge1xyXG5cdFx0XHRcdFx0Zm9ybVZtID0gdm07XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFmb3JtVm0pIHJldHVybiBjb25zb2xlLmVycm9yKCflvZPliY0gdW5pLWZyb21zIOe7hOS7tue8uuWwkSByZWYg5bGe5oCnJyk7XHJcblx0XHRcdGZvcm1WbS5zZXRWYWx1ZShuYW1lLCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHQvLyAjZW5kaWZcclxuXHQvKipcclxuXHQgKiBGb3JtcyDooajljZVcclxuXHQgKiBAZGVzY3JpcHRpb24g55Sx6L6T5YWl5qGG44CB6YCJ5oup5Zmo44CB5Y2V6YCJ5qGG44CB5aSa6YCJ5qGG562J5o6n5Lu257uE5oiQ77yM55So5Lul5pS26ZuG44CB5qCh6aqM44CB5o+Q5Lqk5pWw5o2uXHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTI3NzNcclxuXHQgKiBAcHJvcGVydHkge09iamVjdH0gcnVsZXNcdOihqOWNleagoemqjOinhOWImVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB2YWxpZGF0ZVRyaWdnZXIgPSBbYmluZHxzdWJtaXR8Ymx1cl1cdOagoemqjOinpuWPkeWZqOaWueW8jyDpu5jorqQgc3VibWl0XHJcblx0ICogQHZhbHVlIGJpbmRcdFx05Y+R55Sf5Y+Y5YyW5pe26Kem5Y+RXHJcblx0ICogQHZhbHVlIHN1Ym1pdFx05o+Q5Lqk5pe26Kem5Y+RXHJcblx0ICogQHZhbHVlIGJsdXJcdCAg5aSx5Y6754Sm54K55pe26Kem5Y+RXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGxhYmVsUG9zaXRpb24gPSBbdG9wfGxlZnRdXHRsYWJlbCDkvY3nva4g6buY6K6kIGxlZnRcclxuXHQgKiBAdmFsdWUgdG9wXHRcdOmhtumDqOaYvuekuiBsYWJlbFxyXG5cdCAqIEB2YWx1ZSBsZWZ0XHTlt6bkvqfmmL7npLogbGFiZWxcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gbGFiZWxXaWR0aFx0bGFiZWwg5a695bqm77yM6buY6K6kIDY1cHhcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gbGFiZWxBbGlnbiA9IFtsZWZ0fGNlbnRlcnxyaWdodF1cdGxhYmVsIOWxheS4reaWueW8jyAg6buY6K6kIGxlZnRcclxuXHQgKiBAdmFsdWUgbGVmdFx0XHRsYWJlbCDlt6bkvqfmmL7npLpcclxuXHQgKiBAdmFsdWUgY2VudGVyXHRsYWJlbCDlsYXkuK1cclxuXHQgKiBAdmFsdWUgcmlnaHRcdFx0bGFiZWwg5Y+z5L6n5a+56b2QXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGVyclNob3dUeXBlID0gW3VuZGVydGV4dHx0b2FzdHxtb2RhbF1cdOagoemqjOmUmeivr+S/oeaBr+aPkOekuuaWueW8j1xyXG5cdCAqIEB2YWx1ZSB1bmRlcnRleHRcdOmUmeivr+S/oeaBr+WcqOW6lemDqOaYvuekulxyXG5cdCAqIEB2YWx1ZSB0b2FzdFx0XHRcdOmUmeivr+S/oeaBr3RvYXN05pi+56S6XHJcblx0ICogQHZhbHVlIG1vZGFsXHRcdFx06ZSZ6K+v5L+h5oGvbW9kYWzmmL7npLpcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBzdWJtaXRcdOaPkOS6pOaXtuinpuWPkVxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IHZhbGlkYXRlXHTmoKHpqoznu5Pmnpzlj5HnlJ/lj5jljJbop6blj5FcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndW5pRm9ybXMnLFxyXG5cdFx0ZW1pdHM6IFsndmFsaWRhdGUnLCAnc3VibWl0J10sXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHZpcnR1YWxIb3N0OiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Ly8g5Y2z5bCG5byD55SoXHJcblx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyB2dWUzIOabv+aNoiB2YWx1ZSDlsZ7mgKdcclxuXHRcdFx0bW9kZWxWYWx1ZToge1xyXG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gMS40LjAg5byA5aeL5bCG5LiN5pSv5oyBIHYtbW9kZWwg77yM5LiU5bqf5byDIHZhbHVlIOWSjCBtb2RlbFZhbHVlXHJcblx0XHRcdG1vZGVsOiB7XHJcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDooajljZXmoKHpqozop4TliJlcclxuXHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge307XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+agoemqjOmUmeivr+S/oeaBr+aPkOekuuaWueW8jyDpu5jorqQgdW5kZXJ0ZXh0IOWPluWAvCBbdW5kZXJ0ZXh0fHRvYXN0fG1vZGFsXVxyXG5cdFx0XHRlcnJTaG93VHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAndW5kZXJ0ZXh0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmoKHpqozop6blj5HlmajmlrnlvI8g6buY6K6kIGJpbmQg5Y+W5YC8IFtiaW5kfHN1Ym1pdF1cclxuXHRcdFx0dmFsaWRhdGVUcmlnZ2VyOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdzdWJtaXQnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIGxhYmVsIOS9jee9ru+8jOm7mOiupCBsZWZ0IOWPluWAvCAgdG9wL2xlZnRcclxuXHRcdFx0bGFiZWxQb3NpdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnbGVmdCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gbGFiZWwg5a695bqmXHJcblx0XHRcdGxhYmVsV2lkdGg6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIGxhYmVsIOWxheS4reaWueW8j++8jOm7mOiupCBsZWZ0IOWPluWAvCBsZWZ0L2NlbnRlci9yaWdodFxyXG5cdFx0XHRsYWJlbEFsaWduOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdsZWZ0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRib3JkZXI6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRwcm92aWRlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHVuaUZvcm06IHRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8g6KGo5Y2V5pys5Zyw5YC855qE6K6w5b2V77yM5LiN5bqU6K+l5LiO5Lyg5aaC55qE5YC86L+b6KGM5YWz6IGUXHJcblx0XHRcdFx0Zm9ybURhdGE6IHt9LFxyXG5cdFx0XHRcdGZvcm1SdWxlczoge31cclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQvLyDorqHnrpfmlbDmja7mupDlj5jljJbnmoRcclxuXHRcdFx0bG9jYWxEYXRhKCkge1xyXG5cdFx0XHRcdGNvbnN0IGxvY2FsVmFsID0gdGhpcy5tb2RlbCB8fCB0aGlzLm1vZGVsVmFsdWUgfHwgdGhpcy52YWx1ZVxyXG5cdFx0XHRcdGlmIChsb2NhbFZhbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGRlZXBDb3B5KGxvY2FsVmFsKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4ge31cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdC8vIOebkeWQrOaVsOaNruWPmOWMliAs5pqC5pe25LiN5L2/55So77yM6ZyA6KaB5Y2V54us6LWL5YC8XHJcblx0XHRcdC8vIGxvY2FsRGF0YToge30sXHJcblx0XHRcdC8vIOebkeWQrOinhOWImeWPmOWMllxyXG5cdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKHZhbCwgb2xkVmFsKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldFJ1bGVzKHZhbClcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGRlZXA6IHRydWUsXHJcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyAjaWZkZWYgVlVFM1xyXG5cdFx0XHRsZXQgZ2V0YmluZGRhdGEgPSBnZXRBcHAoKS4kdm0uJC5hcHBDb250ZXh0LmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLmJpbmRkYXRhXHJcblx0XHRcdGlmICghZ2V0YmluZGRhdGEpIHtcclxuXHRcdFx0XHRnZXRBcHAoKS4kdm0uJC5hcHBDb250ZXh0LmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLmJpbmRkYXRhID0gZnVuY3Rpb24obmFtZSwgdmFsdWUsIGZvcm1OYW1lKSB7XHJcblx0XHRcdFx0XHRpZiAoZm9ybU5hbWUpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kcmVmc1tmb3JtTmFtZV0uc2V0VmFsdWUobmFtZSwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bGV0IGZvcm1WbTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLiRyZWZzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3Qgdm0gPSB0aGlzLiRyZWZzW2ldO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh2bSAmJiB2bS4kb3B0aW9ucyAmJiB2bS4kb3B0aW9ucy5uYW1lID09PSAndW5pRm9ybXMnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3JtVm0gPSB2bTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoIWZvcm1WbSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ+W9k+WJjSB1bmktZnJvbXMg57uE5Lu257y65bCRIHJlZiDlsZ7mgKcnKTtcclxuXHRcdFx0XHRcdFx0Zm9ybVZtLnNldFZhbHVlKG5hbWUsIHZhbHVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHQvLyDlrZDnu4Tku7blrp7kvovmlbDnu4RcclxuXHRcdFx0dGhpcy5jaGlsZHJlbnMgPSBbXVxuXHRcdFx0Ly8gVE9ETyDlhbzlrrnml6fniYggdW5pLWRhdGEtcGlja2VyICzmlrDniYjmnKzkuK3ml6DmlYjvvIzlj6rmmK/pgb/lhY3miqXplJlcblx0XHRcdHRoaXMuaW5wdXRDaGlsZHJlbnMgPSBbXVxyXG5cdFx0XHR0aGlzLnNldFJ1bGVzKHRoaXMucnVsZXMpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5aSW6YOo6LCD55So5pa55rOVXHJcblx0XHRcdCAqIOiuvue9ruinhOWImSDvvIzkuLvopoHnlKjkuo7lsI/nqIvluo/oh6rlrprkuYnmo4Dpqozop4TliJlcclxuXHRcdFx0ICogQHBhcmFtIHtBcnJheX0gcnVsZXMg6KeE5YiZ5rqQ5pWw5o2uXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRzZXRSdWxlcyhydWxlcykge1xyXG5cdFx0XHRcdC8vIFRPRE8g5pyJ5Y+v6IO95a2Q57uE5Lu25ZCI5bm26KeE5YiZ55qE5pe25py65q+U6L+Z5Liq6KaB5pep77yM5omA5Lul6ZyA6KaB5ZCI5bm25a+56LGhIO+8jOiAjOS4jeaYr+ebtOaOpei1i+WAvO+8jOWPr+iDveS8muiiq+imhuebllxyXG5cdFx0XHRcdHRoaXMuZm9ybVJ1bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mb3JtUnVsZXMsIHJ1bGVzKVxyXG5cdFx0XHRcdC8vIOWIneWni+WMluagoemqjOWHveaVsFxyXG5cdFx0XHRcdHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcihydWxlcyk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5aSW6YOo6LCD55So5pa55rOVXHJcblx0XHRcdCAqIOiuvue9ruaVsOaNru+8jOeUqOS6juiuvue9ruihqOWNleaVsOaNru+8jOWFrOW8gOe7meeUqOaIt+S9v+eUqCDvvIwg5LiN5pSv5oyB5Zyo5Yqo5oCB6KGo5Y2V5Lit5L2/55SoXHJcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBrZXlcclxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRzZXRWYWx1ZShrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0bGV0IGV4YW1wbGUgPSB0aGlzLmNoaWxkcmVucy5maW5kKGNoaWxkID0+IGNoaWxkLm5hbWUgPT09IGtleSk7XHJcblx0XHRcdFx0aWYgKCFleGFtcGxlKSByZXR1cm4gbnVsbDtcclxuXHRcdFx0XHR0aGlzLmZvcm1EYXRhW2tleV0gPSBnZXRWYWx1ZShrZXksIHZhbHVlLCAodGhpcy5mb3JtUnVsZXNba2V5XSAmJiB0aGlzLmZvcm1SdWxlc1trZXldLnJ1bGVzKSB8fCBbXSlcclxuXHRcdFx0XHRyZXR1cm4gZXhhbXBsZS5vbkZpZWxkQ2hhbmdlKHRoaXMuZm9ybURhdGFba2V5XSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5aSW6YOo6LCD55So5pa55rOVXHJcblx0XHRcdCAqIOaJi+WKqOaPkOS6pOagoemqjOihqOWNlVxyXG5cdFx0XHQgKiDlr7nmlbTkuKrooajljZXov5vooYzmoKHpqoznmoTmlrnms5XvvIzlj4LmlbDkuLrkuIDkuKrlm57osIPlh73mlbDjgIJcclxuXHRcdFx0ICogQHBhcmFtIHtBcnJheX0ga2VlcGl0ZW0g5L+d55WZ5LiN5Y+C5LiO5qCh6aqM55qE5a2X5q61XHJcblx0XHRcdCAqIEBwYXJhbSB7dHlwZX0gY2FsbGJhY2sg5pa55rOV5Zue6LCDXHJcblx0XHRcdCAqL1xyXG5cdFx0XHR2YWxpZGF0ZShrZWVwaXRlbSwgY2FsbGJhY2spIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0FsbCh0aGlzLmZvcm1EYXRhLCBrZWVwaXRlbSwgY2FsbGJhY2spO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOWklumDqOiwg+eUqOaWueazlVxyXG5cdFx0XHQgKiDpg6jliIbooajljZXmoKHpqoxcclxuXHRcdFx0ICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHByb3BzIOmcgOimgeagoemqjOeahOWtl+autVxyXG5cdFx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSDlm57osIPlh73mlbBcclxuXHRcdFx0ICovXHJcblx0XHRcdHZhbGlkYXRlRmllbGQocHJvcHMgPSBbXSwgY2FsbGJhY2spIHtcclxuXHRcdFx0XHRwcm9wcyA9IFtdLmNvbmNhdChwcm9wcyk7XHJcblx0XHRcdFx0bGV0IGludmFsaWRGaWVsZHMgPSB7fTtcclxuXHRcdFx0XHR0aGlzLmNoaWxkcmVucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHJlYWxOYW1lKGl0ZW0ubmFtZSlcclxuXHRcdFx0XHRcdGlmIChwcm9wcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRpbnZhbGlkRmllbGRzID0gT2JqZWN0LmFzc2lnbih7fSwgaW52YWxpZEZpZWxkcywge1xyXG5cdFx0XHRcdFx0XHRcdFtuYW1lXTogdGhpcy5mb3JtRGF0YVtuYW1lXVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0FsbChpbnZhbGlkRmllbGRzLCBbXSwgY2FsbGJhY2spO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOWklumDqOiwg+eUqOaWueazlVxyXG5cdFx0XHQgKiDnp7vpmaTooajljZXpobnnmoTmoKHpqoznu5PmnpzjgILkvKDlhaXlvoXnp7vpmaTnmoTooajljZXpobnnmoQgcHJvcCDlsZ7mgKfmiJbogIUgcHJvcCDnu4TmiJDnmoTmlbDnu4TvvIzlpoLkuI3kvKDliJnnp7vpmaTmlbTkuKrooajljZXnmoTmoKHpqoznu5PmnpxcclxuXHRcdFx0ICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHByb3BzIOmcgOimgeenu+mZpOagoemqjOeahOWtl+autSDvvIzkuI3loavkuLrmiYDmnIlcclxuXHRcdFx0ICovXHJcblx0XHRcdGNsZWFyVmFsaWRhdGUocHJvcHMgPSBbXSkge1xyXG5cdFx0XHRcdHByb3BzID0gW10uY29uY2F0KHByb3BzKTtcclxuXHRcdFx0XHR0aGlzLmNoaWxkcmVucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHByb3BzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRpdGVtLmVyck1zZyA9ICcnO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHJlYWxOYW1lKGl0ZW0ubmFtZSlcclxuXHRcdFx0XHRcdFx0aWYgKHByb3BzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJNc2cgPSAnJztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOWklumDqOiwg+eUqOaWueazlSDvvIzljbPlsIblup/lvINcclxuXHRcdFx0ICog5omL5Yqo5o+Q5Lqk5qCh6aqM6KGo5Y2VXHJcblx0XHRcdCAqIOWvueaVtOS4quihqOWNlei/m+ihjOagoemqjOeahOaWueazle+8jOWPguaVsOS4uuS4gOS4quWbnuiwg+WHveaVsOOAglxyXG5cdFx0XHQgKiBAcGFyYW0ge0FycmF5fSBrZWVwaXRlbSDkv53nlZnkuI3lj4LkuI7moKHpqoznmoTlrZfmrrVcclxuXHRcdFx0ICogQHBhcmFtIHt0eXBlfSBjYWxsYmFjayDmlrnms5Xlm57osINcclxuXHRcdFx0ICovXHJcblx0XHRcdHN1Ym1pdChrZWVwaXRlbSwgY2FsbGJhY2ssIHR5cGUpIHtcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMuZGF0YVZhbHVlKSB7XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtRGF0YSA9IHRoaXMuY2hpbGRyZW5zLmZpbmQodiA9PiB2Lm5hbWUgPT09IGkpO1xyXG5cdFx0XHRcdFx0aWYgKGl0ZW1EYXRhKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmZvcm1EYXRhW2ldID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZvcm1EYXRhW2ldID0gdGhpcy5fZ2V0VmFsdWUoaSwgdGhpcy5kYXRhVmFsdWVbaV0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIXR5cGUpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUud2Fybignc3VibWl0IOaWueazleWNs+WwhuW6n+W8g++8jOivt+S9v+eUqHZhbGlkYXRl5pa55rOV5Luj5pu/77yBJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja0FsbCh0aGlzLmZvcm1EYXRhLCBrZWVwaXRlbSwgY2FsbGJhY2ssICdzdWJtaXQnKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIOagoemqjOaJgOaciVxyXG5cdFx0XHRhc3luYyBjaGVja0FsbChpbnZhbGlkRmllbGRzLCBrZWVwaXRlbSwgY2FsbGJhY2ssIHR5cGUpIHtcclxuXHRcdFx0XHQvLyDkuI3lrZjlnKjmoKHpqozop4TliJkg77yM5YiZ5YGc5q2i5qCh6aqM5rWB56iLXHJcblx0XHRcdFx0aWYgKCF0aGlzLnZhbGlkYXRvcikgcmV0dXJuXHJcblx0XHRcdFx0bGV0IGNoaWxkcmVucyA9IFtdXHJcblx0XHRcdFx0Ly8g5aSE55CG5Y+C5LiO5qCh6aqM55qEaXRlbeWunuS+i1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gaW52YWxpZEZpZWxkcykge1xyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IHRoaXMuY2hpbGRyZW5zLmZpbmQodiA9PiByZWFsTmFtZSh2Lm5hbWUpID09PSBpKVxyXG5cdFx0XHRcdFx0aWYgKGl0ZW0pIHtcclxuXHRcdFx0XHRcdFx0Y2hpbGRyZW5zLnB1c2goaXRlbSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIOWmguaenHZhbGlkYXRl56ys5LiA5Liq5Y+C5pWw5pivZnVuY2lvbnQgLOmCo+Wwsei1sOWbnuiwg1xyXG5cdFx0XHRcdGlmICghY2FsbGJhY2sgJiYgdHlwZW9mIGtlZXBpdGVtID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHRjYWxsYmFjayA9IGtlZXBpdGVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IHByb21pc2U7XHJcblx0XHRcdFx0Ly8g5aaC5p6c5LiN5a2Y5Zyo5Zue6LCD77yM6YKj5LmI5L2/55SoIFByb21pc2Ug5pa55byP6L+U5ZueXHJcblx0XHRcdFx0aWYgKCFjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgJiYgUHJvbWlzZSkge1xyXG5cdFx0XHRcdFx0cHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBmdW5jdGlvbih2YWxpZCwgaW52YWxpZEZpZWxkcykge1xyXG5cdFx0XHRcdFx0XHRcdCF2YWxpZCA/IHJlc29sdmUoaW52YWxpZEZpZWxkcykgOiByZWplY3QodmFsaWQpO1xyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXQgcmVzdWx0cyA9IFtdO1xyXG5cdFx0XHRcdC8vIOmBv+WFjeW8leeUqOmUmeS5sSDvvIzlu7rorq7mi7fotJ3lr7nosaHlpITnkIZcclxuXHRcdFx0XHRsZXQgdGVtcEZvcm1EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbnZhbGlkRmllbGRzKSlcclxuXHRcdFx0XHQvLyDmiYDmnInlrZDnu4Tku7blj4LkuI7moKHpqows5L2/55SoIGZvciDlj6/ku6Xkvb/nlKggIGF3aWF0XHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiBjaGlsZHJlbnMpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGNoaWxkID0gY2hpbGRyZW5zW2ldXHJcblx0XHRcdFx0XHRsZXQgbmFtZSA9IHJlYWxOYW1lKGNoaWxkLm5hbWUpO1xyXG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY2hpbGQub25GaWVsZENoYW5nZSh0ZW1wRm9ybURhdGFbbmFtZV0pO1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0XHRcdFx0Ly8gdG9hc3QgLG1vZGFsIOWPqumcgOimgeaJp+ihjOesrOS4gOasoeWwseWPr+S7pVxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5lcnJTaG93VHlwZSA9PT0gJ3RvYXN0JyB8fCB0aGlzLmVyclNob3dUeXBlID09PSAnbW9kYWwnKSBicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRzKSkge1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSByZXN1bHRzID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoa2VlcGl0ZW0pKSB7XHJcblx0XHRcdFx0XHRrZWVwaXRlbS5mb3JFYWNoKHYgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgdk5hbWUgPSByZWFsTmFtZSh2KTtcclxuXHRcdFx0XHRcdFx0bGV0IHZhbHVlID0gZ2V0RGF0YVZhbHVlKHYsIHRoaXMubG9jYWxEYXRhKVxyXG5cdFx0XHRcdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRlbXBGb3JtRGF0YVt2TmFtZV0gPSB2YWx1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFRPRE8gc3VibWl0IOWNs+WwhuW6n+W8g1xyXG5cdFx0XHRcdGlmICh0eXBlID09PSAnc3VibWl0Jykge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnc3VibWl0Jywge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGVtcEZvcm1EYXRhLFxyXG5cdFx0XHRcdFx0XHRcdGVycm9yczogcmVzdWx0c1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgndmFsaWRhdGUnLCByZXN1bHRzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHJlc2V0Rm9ybURhdGEgPSByYXdEYXRhKHRlbXBGb3JtRGF0YSwgdGhpcy5sb2NhbERhdGEsIHRoaXMubmFtZSlcclxuXHRcdFx0XHRsZXQgcmVzZXRGb3JtRGF0YSA9IHt9XHJcblx0XHRcdFx0cmVzZXRGb3JtRGF0YSA9IHJhd0RhdGEodGVtcEZvcm1EYXRhLCB0aGlzLm5hbWUpXHJcblx0XHRcdFx0Y2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmIGNhbGxiYWNrKHJlc3VsdHMsIHJlc2V0Rm9ybURhdGEpO1xyXG5cclxuXHRcdFx0XHRpZiAocHJvbWlzZSAmJiBjYWxsYmFjaykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog6L+U5ZuedmFsaWRhdGXkuovku7ZcclxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IHJlc3VsdFxyXG5cdFx0XHQgKi9cclxuXHRcdFx0dmFsaWRhdGVDaGVjayhyZXN1bHQpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCd2YWxpZGF0ZScsIHJlc3VsdCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdF9nZXRWYWx1ZTogZ2V0VmFsdWUsXHJcblx0XHRcdF9pc1JlcXVpcmVkRmllbGQ6IGlzUmVxdWlyZWRGaWVsZCxcclxuXHRcdFx0X3NldERhdGFWYWx1ZTogc2V0RGF0YVZhbHVlLFxyXG5cdFx0XHRfZ2V0RGF0YVZhbHVlOiBnZXREYXRhVmFsdWUsXHJcblx0XHRcdF9yZWFsTmFtZTogcmVhbE5hbWUsXHJcblx0XHRcdF9pc1JlYWxOYW1lOiBpc1JlYWxOYW1lLFxyXG5cdFx0XHRfaXNFcXVhbDogaXNFcXVhbFxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0LnVuaS1mb3JtcyB7fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 16 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 17)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 17 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/*!****************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms/validate.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 16));\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 20));\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 22));\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 24));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 18));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 25));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 26));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nvar pattern = {\n  email: /^\\S+?@\\S+?\\.\\S+?$/,\n  idcard: /^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/,\n  url: new RegExp(\"^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\\\S+(?::\\\\S*)?@)?(?:(?:(?:[1-9]\\\\d?|1\\\\d\\\\d|2[01]\\\\d|22[0-3])(?:\\\\.(?:1?\\\\d{1,2}|2[0-4]\\\\d|25[0-5])){2}(?:\\\\.(?:[0-9]\\\\d?|1\\\\d\\\\d|2[0-4]\\\\d|25[0-4]))|(?:(?:[a-z\\\\u00a1-\\\\uffff0-9]+-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff0-9]+-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)*(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff]{2,})))|localhost)(?::\\\\d{2,5})?(?:(/|\\\\?|#)[^\\\\s]*)?$\", 'i')\n};\nvar FORMAT_MAPPING = {\n  \"int\": 'integer',\n  \"bool\": 'boolean',\n  \"double\": 'number',\n  \"long\": 'number',\n  \"password\": 'string'\n  // \"fileurls\": 'array'\n};\n\nfunction formatMessage(args) {\n  var resources = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var defaultMessage = ['label'];\n  defaultMessage.forEach(function (item) {\n    if (args[item] === undefined) {\n      args[item] = '';\n    }\n  });\n  var str = resources;\n  for (var key in args) {\n    var reg = new RegExp('{' + key + '}');\n    str = str.replace(reg, args[key]);\n  }\n  return str;\n}\nfunction isEmptyValue(value, type) {\n  if (value === undefined || value === null) {\n    return true;\n  }\n  if (typeof value === 'string' && !value) {\n    return true;\n  }\n  if (Array.isArray(value) && !value.length) {\n    return true;\n  }\n  if (type === 'object' && !Object.keys(value).length) {\n    return true;\n  }\n  return false;\n}\nvar types = {\n  integer: function integer(value) {\n    return types.number(value) && parseInt(value, 10) === value;\n  },\n  string: function string(value) {\n    return typeof value === 'string';\n  },\n  number: function number(value) {\n    if (isNaN(value)) {\n      return false;\n    }\n    return typeof value === 'number';\n  },\n  \"boolean\": function boolean(value) {\n    return typeof value === 'boolean';\n  },\n  \"float\": function float(value) {\n    return types.number(value) && !types.integer(value);\n  },\n  array: function array(value) {\n    return Array.isArray(value);\n  },\n  object: function object(value) {\n    return (0, _typeof2.default)(value) === 'object' && !types.array(value);\n  },\n  date: function date(value) {\n    return value instanceof Date;\n  },\n  timestamp: function timestamp(value) {\n    if (!this.integer(value) || Math.abs(value).toString().length > 16) {\n      return false;\n    }\n    return true;\n  },\n  file: function file(value) {\n    return typeof value.url === 'string';\n  },\n  email: function email(value) {\n    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;\n  },\n  url: function url(value) {\n    return typeof value === 'string' && !!value.match(pattern.url);\n  },\n  pattern: function pattern(reg, value) {\n    try {\n      return new RegExp(reg).test(value);\n    } catch (e) {\n      return false;\n    }\n  },\n  method: function method(value) {\n    return typeof value === 'function';\n  },\n  idcard: function idcard(value) {\n    return typeof value === 'string' && !!value.match(pattern.idcard);\n  },\n  'url-https': function urlHttps(value) {\n    return this.url(value) && value.startsWith('https://');\n  },\n  'url-scheme': function urlScheme(value) {\n    return value.startsWith('://');\n  },\n  'url-web': function urlWeb(value) {\n    return false;\n  }\n};\nvar RuleValidator = /*#__PURE__*/function () {\n  function RuleValidator(message) {\n    (0, _classCallCheck2.default)(this, RuleValidator);\n    this._message = message;\n  }\n  (0, _createClass2.default)(RuleValidator, [{\n    key: \"validateRule\",\n    value: function () {\n      var _validateRule = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(fieldKey, fieldValue, value, data, allData) {\n        var result, rules, hasRequired, message, i, rule, vt, now, resultExpr;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                result = null;\n                rules = fieldValue.rules;\n                hasRequired = rules.findIndex(function (item) {\n                  return item.required;\n                });\n                if (!(hasRequired < 0)) {\n                  _context.next = 8;\n                  break;\n                }\n                if (!(value === null || value === undefined)) {\n                  _context.next = 6;\n                  break;\n                }\n                return _context.abrupt(\"return\", result);\n              case 6:\n                if (!(typeof value === 'string' && !value.length)) {\n                  _context.next = 8;\n                  break;\n                }\n                return _context.abrupt(\"return\", result);\n              case 8:\n                message = this._message;\n                if (!(rules === undefined)) {\n                  _context.next = 11;\n                  break;\n                }\n                return _context.abrupt(\"return\", message['default']);\n              case 11:\n                i = 0;\n              case 12:\n                if (!(i < rules.length)) {\n                  _context.next = 35;\n                  break;\n                }\n                rule = rules[i];\n                vt = this._getValidateType(rule);\n                Object.assign(rule, {\n                  label: fieldValue.label || \"[\\\"\".concat(fieldKey, \"\\\"]\")\n                });\n                if (!RuleValidatorHelper[vt]) {\n                  _context.next = 20;\n                  break;\n                }\n                result = RuleValidatorHelper[vt](rule, value, message);\n                if (!(result != null)) {\n                  _context.next = 20;\n                  break;\n                }\n                return _context.abrupt(\"break\", 35);\n              case 20:\n                if (!rule.validateExpr) {\n                  _context.next = 26;\n                  break;\n                }\n                now = Date.now();\n                resultExpr = rule.validateExpr(value, allData, now);\n                if (!(resultExpr === false)) {\n                  _context.next = 26;\n                  break;\n                }\n                result = this._getMessage(rule, rule.errorMessage || this._message['default']);\n                return _context.abrupt(\"break\", 35);\n              case 26:\n                if (!rule.validateFunction) {\n                  _context.next = 32;\n                  break;\n                }\n                _context.next = 29;\n                return this.validateFunction(rule, value, data, allData, vt);\n              case 29:\n                result = _context.sent;\n                if (!(result !== null)) {\n                  _context.next = 32;\n                  break;\n                }\n                return _context.abrupt(\"break\", 35);\n              case 32:\n                i++;\n                _context.next = 12;\n                break;\n              case 35:\n                if (result !== null) {\n                  result = message.TAG + result;\n                }\n                return _context.abrupt(\"return\", result);\n              case 37:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n      function validateRule(_x, _x2, _x3, _x4, _x5) {\n        return _validateRule.apply(this, arguments);\n      }\n      return validateRule;\n    }()\n  }, {\n    key: \"validateFunction\",\n    value: function () {\n      var _validateFunction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(rule, value, data, allData, vt) {\n        var result, callbackMessage, res;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                result = null;\n                _context2.prev = 1;\n                callbackMessage = null;\n                _context2.next = 5;\n                return rule.validateFunction(rule, value, allData || data, function (message) {\n                  callbackMessage = message;\n                });\n              case 5:\n                res = _context2.sent;\n                if (callbackMessage || typeof res === 'string' && res || res === false) {\n                  result = this._getMessage(rule, callbackMessage || res, vt);\n                }\n                _context2.next = 12;\n                break;\n              case 9:\n                _context2.prev = 9;\n                _context2.t0 = _context2[\"catch\"](1);\n                result = this._getMessage(rule, _context2.t0.message, vt);\n              case 12:\n                return _context2.abrupt(\"return\", result);\n              case 13:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this, [[1, 9]]);\n      }));\n      function validateFunction(_x6, _x7, _x8, _x9, _x10) {\n        return _validateFunction.apply(this, arguments);\n      }\n      return validateFunction;\n    }()\n  }, {\n    key: \"_getMessage\",\n    value: function _getMessage(rule, message, vt) {\n      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message['default']);\n    }\n  }, {\n    key: \"_getValidateType\",\n    value: function _getValidateType(rule) {\n      var result = '';\n      if (rule.required) {\n        result = 'required';\n      } else if (rule.format) {\n        result = 'format';\n      } else if (rule.arrayType) {\n        result = 'arrayTypeFormat';\n      } else if (rule.range) {\n        result = 'range';\n      } else if (rule.maximum !== undefined || rule.minimum !== undefined) {\n        result = 'rangeNumber';\n      } else if (rule.maxLength !== undefined || rule.minLength !== undefined) {\n        result = 'rangeLength';\n      } else if (rule.pattern) {\n        result = 'pattern';\n      } else if (rule.validateFunction) {\n        result = 'validateFunction';\n      }\n      return result;\n    }\n  }]);\n  return RuleValidator;\n}();\nvar RuleValidatorHelper = {\n  required: function required(rule, value, message) {\n    if (rule.required && isEmptyValue(value, rule.format || (0, _typeof2.default)(value))) {\n      return formatMessage(rule, rule.errorMessage || message.required);\n    }\n    return null;\n  },\n  range: function range(rule, value, message) {\n    var range = rule.range,\n      errorMessage = rule.errorMessage;\n    var list = new Array(range.length);\n    for (var i = 0; i < range.length; i++) {\n      var item = range[i];\n      if (types.object(item) && item.value !== undefined) {\n        list[i] = item.value;\n      } else {\n        list[i] = item;\n      }\n    }\n    var result = false;\n    if (Array.isArray(value)) {\n      result = new Set(value.concat(list)).size === list.length;\n    } else {\n      if (list.indexOf(value) > -1) {\n        result = true;\n      }\n    }\n    if (!result) {\n      return formatMessage(rule, errorMessage || message['enum']);\n    }\n    return null;\n  },\n  rangeNumber: function rangeNumber(rule, value, message) {\n    if (!types.number(value)) {\n      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);\n    }\n    var minimum = rule.minimum,\n      maximum = rule.maximum,\n      exclusiveMinimum = rule.exclusiveMinimum,\n      exclusiveMaximum = rule.exclusiveMaximum;\n    var min = exclusiveMinimum ? value <= minimum : value < minimum;\n    var max = exclusiveMaximum ? value >= maximum : value > maximum;\n    if (minimum !== undefined && min) {\n      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMinimum ? 'exclusiveMinimum' : 'minimum']);\n    } else if (maximum !== undefined && max) {\n      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMaximum ? 'exclusiveMaximum' : 'maximum']);\n    } else if (minimum !== undefined && maximum !== undefined && (min || max)) {\n      return formatMessage(rule, rule.errorMessage || message['number'].range);\n    }\n    return null;\n  },\n  rangeLength: function rangeLength(rule, value, message) {\n    if (!types.string(value) && !types.array(value)) {\n      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);\n    }\n    var min = rule.minLength;\n    var max = rule.maxLength;\n    var val = value.length;\n    if (min !== undefined && val < min) {\n      return formatMessage(rule, rule.errorMessage || message['length'].minLength);\n    } else if (max !== undefined && val > max) {\n      return formatMessage(rule, rule.errorMessage || message['length'].maxLength);\n    } else if (min !== undefined && max !== undefined && (val < min || val > max)) {\n      return formatMessage(rule, rule.errorMessage || message['length'].range);\n    }\n    return null;\n  },\n  pattern: function pattern(rule, value, message) {\n    if (!types['pattern'](rule.pattern, value)) {\n      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);\n    }\n    return null;\n  },\n  format: function format(rule, value, message) {\n    var customTypes = Object.keys(types);\n    var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;\n    if (customTypes.indexOf(format) > -1) {\n      if (!types[format](value)) {\n        return formatMessage(rule, rule.errorMessage || message.typeError);\n      }\n    }\n    return null;\n  },\n  arrayTypeFormat: function arrayTypeFormat(rule, value, message) {\n    if (!Array.isArray(value)) {\n      return formatMessage(rule, rule.errorMessage || message.typeError);\n    }\n    for (var i = 0; i < value.length; i++) {\n      var element = value[i];\n      var formatResult = this.format(rule, element, message);\n      if (formatResult !== null) {\n        return formatResult;\n      }\n    }\n    return null;\n  }\n};\nvar SchemaValidator = /*#__PURE__*/function (_RuleValidator) {\n  (0, _inherits2.default)(SchemaValidator, _RuleValidator);\n  var _super = _createSuper(SchemaValidator);\n  function SchemaValidator(schema, options) {\n    var _this;\n    (0, _classCallCheck2.default)(this, SchemaValidator);\n    _this = _super.call(this, SchemaValidator.message);\n    _this._schema = schema;\n    _this._options = options || null;\n    return _this;\n  }\n  (0, _createClass2.default)(SchemaValidator, [{\n    key: \"updateSchema\",\n    value: function updateSchema(schema) {\n      this._schema = schema;\n    }\n  }, {\n    key: \"validate\",\n    value: function () {\n      var _validate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data, allData) {\n        var result;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                result = this._checkFieldInSchema(data);\n                if (result) {\n                  _context3.next = 5;\n                  break;\n                }\n                _context3.next = 4;\n                return this.invokeValidate(data, false, allData);\n              case 4:\n                result = _context3.sent;\n              case 5:\n                return _context3.abrupt(\"return\", result.length ? result[0] : null);\n              case 6:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n      function validate(_x11, _x12) {\n        return _validate.apply(this, arguments);\n      }\n      return validate;\n    }()\n  }, {\n    key: \"validateAll\",\n    value: function () {\n      var _validateAll = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(data, allData) {\n        var result;\n        return _regenerator.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                result = this._checkFieldInSchema(data);\n                if (result) {\n                  _context4.next = 5;\n                  break;\n                }\n                _context4.next = 4;\n                return this.invokeValidate(data, true, allData);\n              case 4:\n                result = _context4.sent;\n              case 5:\n                return _context4.abrupt(\"return\", result);\n              case 6:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n      function validateAll(_x13, _x14) {\n        return _validateAll.apply(this, arguments);\n      }\n      return validateAll;\n    }()\n  }, {\n    key: \"validateUpdate\",\n    value: function () {\n      var _validateUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(data, allData) {\n        var result;\n        return _regenerator.default.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                result = this._checkFieldInSchema(data);\n                if (result) {\n                  _context5.next = 5;\n                  break;\n                }\n                _context5.next = 4;\n                return this.invokeValidateUpdate(data, false, allData);\n              case 4:\n                result = _context5.sent;\n              case 5:\n                return _context5.abrupt(\"return\", result.length ? result[0] : null);\n              case 6:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5, this);\n      }));\n      function validateUpdate(_x15, _x16) {\n        return _validateUpdate.apply(this, arguments);\n      }\n      return validateUpdate;\n    }()\n  }, {\n    key: \"invokeValidate\",\n    value: function () {\n      var _invokeValidate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(data, all, allData) {\n        var result, schema, key, value, errorMessage;\n        return _regenerator.default.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                result = [];\n                schema = this._schema;\n                _context6.t0 = _regenerator.default.keys(schema);\n              case 3:\n                if ((_context6.t1 = _context6.t0()).done) {\n                  _context6.next = 15;\n                  break;\n                }\n                key = _context6.t1.value;\n                value = schema[key];\n                _context6.next = 8;\n                return this.validateRule(key, value, data[key], data, allData);\n              case 8:\n                errorMessage = _context6.sent;\n                if (!(errorMessage != null)) {\n                  _context6.next = 13;\n                  break;\n                }\n                result.push({\n                  key: key,\n                  errorMessage: errorMessage\n                });\n                if (all) {\n                  _context6.next = 13;\n                  break;\n                }\n                return _context6.abrupt(\"break\", 15);\n              case 13:\n                _context6.next = 3;\n                break;\n              case 15:\n                return _context6.abrupt(\"return\", result);\n              case 16:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6, this);\n      }));\n      function invokeValidate(_x17, _x18, _x19) {\n        return _invokeValidate.apply(this, arguments);\n      }\n      return invokeValidate;\n    }()\n  }, {\n    key: \"invokeValidateUpdate\",\n    value: function () {\n      var _invokeValidateUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(data, all, allData) {\n        var result, key, errorMessage;\n        return _regenerator.default.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                result = [];\n                _context7.t0 = _regenerator.default.keys(data);\n              case 2:\n                if ((_context7.t1 = _context7.t0()).done) {\n                  _context7.next = 13;\n                  break;\n                }\n                key = _context7.t1.value;\n                _context7.next = 6;\n                return this.validateRule(key, this._schema[key], data[key], data, allData);\n              case 6:\n                errorMessage = _context7.sent;\n                if (!(errorMessage != null)) {\n                  _context7.next = 11;\n                  break;\n                }\n                result.push({\n                  key: key,\n                  errorMessage: errorMessage\n                });\n                if (all) {\n                  _context7.next = 11;\n                  break;\n                }\n                return _context7.abrupt(\"break\", 13);\n              case 11:\n                _context7.next = 2;\n                break;\n              case 13:\n                return _context7.abrupt(\"return\", result);\n              case 14:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7, this);\n      }));\n      function invokeValidateUpdate(_x20, _x21, _x22) {\n        return _invokeValidateUpdate.apply(this, arguments);\n      }\n      return invokeValidateUpdate;\n    }()\n  }, {\n    key: \"_checkFieldInSchema\",\n    value: function _checkFieldInSchema(data) {\n      var keys = Object.keys(data);\n      var keys2 = Object.keys(this._schema);\n      if (new Set(keys.concat(keys2)).size === keys2.length) {\n        return '';\n      }\n      var noExistFields = keys.filter(function (key) {\n        return keys2.indexOf(key) < 0;\n      });\n      var errorMessage = formatMessage({\n        field: JSON.stringify(noExistFields)\n      }, SchemaValidator.message.TAG + SchemaValidator.message['defaultInvalid']);\n      return [{\n        key: 'invalid',\n        errorMessage: errorMessage\n      }];\n    }\n  }]);\n  return SchemaValidator;\n}(RuleValidator);\nfunction Message() {\n  return {\n    TAG: \"\",\n    default: '验证错误',\n    defaultInvalid: '提交的字段{field}在数据库中并不存在',\n    validateFunction: '验证无效',\n    required: '{label}必填',\n    'enum': '{label}超出范围',\n    timestamp: '{label}格式无效',\n    whitespace: '{label}不能为空',\n    typeError: '{label}类型无效',\n    date: {\n      format: '{label}日期{value}格式无效',\n      parse: '{label}日期无法解析,{value}无效',\n      invalid: '{label}日期{value}无效'\n    },\n    length: {\n      minLength: '{label}长度不能少于{minLength}',\n      maxLength: '{label}长度不能超过{maxLength}',\n      range: '{label}必须介于{minLength}和{maxLength}之间'\n    },\n    number: {\n      minimum: '{label}不能小于{minimum}',\n      maximum: '{label}不能大于{maximum}',\n      exclusiveMinimum: '{label}不能小于等于{minimum}',\n      exclusiveMaximum: '{label}不能大于等于{maximum}',\n      range: '{label}必须介于{minimum}and{maximum}之间'\n    },\n    pattern: {\n      mismatch: '{label}格式不匹配'\n    }\n  };\n}\nSchemaValidator.message = new Message();\nvar _default = SchemaValidator;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWZvcm1zL2NvbXBvbmVudHMvdW5pLWZvcm1zL3ZhbGlkYXRlLmpzIl0sIm5hbWVzIjpbInBhdHRlcm4iLCJlbWFpbCIsImlkY2FyZCIsInVybCIsIlJlZ0V4cCIsIkZPUk1BVF9NQVBQSU5HIiwiZm9ybWF0TWVzc2FnZSIsImFyZ3MiLCJyZXNvdXJjZXMiLCJkZWZhdWx0TWVzc2FnZSIsImZvckVhY2giLCJpdGVtIiwidW5kZWZpbmVkIiwic3RyIiwia2V5IiwicmVnIiwicmVwbGFjZSIsImlzRW1wdHlWYWx1ZSIsInZhbHVlIiwidHlwZSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJ0eXBlcyIsImludGVnZXIiLCJudW1iZXIiLCJwYXJzZUludCIsInN0cmluZyIsImlzTmFOIiwiYXJyYXkiLCJvYmplY3QiLCJkYXRlIiwiRGF0ZSIsInRpbWVzdGFtcCIsIk1hdGgiLCJhYnMiLCJ0b1N0cmluZyIsImZpbGUiLCJtYXRjaCIsInRlc3QiLCJlIiwibWV0aG9kIiwic3RhcnRzV2l0aCIsIlJ1bGVWYWxpZGF0b3IiLCJtZXNzYWdlIiwiX21lc3NhZ2UiLCJmaWVsZEtleSIsImZpZWxkVmFsdWUiLCJkYXRhIiwiYWxsRGF0YSIsInJlc3VsdCIsInJ1bGVzIiwiaGFzUmVxdWlyZWQiLCJmaW5kSW5kZXgiLCJyZXF1aXJlZCIsImkiLCJydWxlIiwidnQiLCJfZ2V0VmFsaWRhdGVUeXBlIiwiYXNzaWduIiwibGFiZWwiLCJSdWxlVmFsaWRhdG9ySGVscGVyIiwidmFsaWRhdGVFeHByIiwibm93IiwicmVzdWx0RXhwciIsIl9nZXRNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdGVGdW5jdGlvbiIsIlRBRyIsImNhbGxiYWNrTWVzc2FnZSIsInJlcyIsImZvcm1hdCIsImFycmF5VHlwZSIsInJhbmdlIiwibWF4aW11bSIsIm1pbmltdW0iLCJtYXhMZW5ndGgiLCJtaW5MZW5ndGgiLCJsaXN0IiwiU2V0IiwiY29uY2F0Iiwic2l6ZSIsImluZGV4T2YiLCJyYW5nZU51bWJlciIsIm1pc21hdGNoIiwiZXhjbHVzaXZlTWluaW11bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJtaW4iLCJtYXgiLCJyYW5nZUxlbmd0aCIsInZhbCIsImN1c3RvbVR5cGVzIiwidHlwZUVycm9yIiwiYXJyYXlUeXBlRm9ybWF0IiwiZWxlbWVudCIsImZvcm1hdFJlc3VsdCIsIlNjaGVtYVZhbGlkYXRvciIsInNjaGVtYSIsIm9wdGlvbnMiLCJfc2NoZW1hIiwiX29wdGlvbnMiLCJfY2hlY2tGaWVsZEluU2NoZW1hIiwiaW52b2tlVmFsaWRhdGUiLCJpbnZva2VWYWxpZGF0ZVVwZGF0ZSIsImFsbCIsInZhbGlkYXRlUnVsZSIsInB1c2giLCJrZXlzMiIsIm5vRXhpc3RGaWVsZHMiLCJmaWx0ZXIiLCJmaWVsZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJNZXNzYWdlIiwiZGVmYXVsdCIsImRlZmF1bHRJbnZhbGlkIiwid2hpdGVzcGFjZSIsInBhcnNlIiwiaW52YWxpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUc7RUFDYkMsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQkMsTUFBTSxFQUFFLDhGQUE4RjtFQUN0R0MsR0FBRyxFQUFFLElBQUlDLE1BQU0sQ0FDZCxnWkFBZ1osRUFDaFosR0FBRztBQUNMLENBQUM7QUFFRCxJQUFNQyxjQUFjLEdBQUc7RUFDdEIsS0FBSyxFQUFFLFNBQVM7RUFDaEIsTUFBTSxFQUFFLFNBQVM7RUFDakIsUUFBUSxFQUFFLFFBQVE7RUFDbEIsTUFBTSxFQUFFLFFBQVE7RUFDaEIsVUFBVSxFQUFFO0VBQ1o7QUFDRCxDQUFDOztBQUVELFNBQVNDLGFBQWEsQ0FBQ0MsSUFBSSxFQUFrQjtFQUFBLElBQWhCQyxTQUFTLHVFQUFHLEVBQUU7RUFDMUMsSUFBSUMsY0FBYyxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQzlCQSxjQUFjLENBQUNDLE9BQU8s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Q3ZDaEQsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QmIsUUFBUSxFQUFFLFdBQVc7SUFDckIsTUFBTSxFQUFFLGFBQWE7SUFDckJyQixTQUFTLEVBQUUsYUFBYTtJQUN4Qm1GLFVBQVUsRUFBRSxhQUFhO0lBQ3pCeEIsU0FBUyxFQUFFLGFBQWE7SUFDeEI3RCxJQUFJLEVBQUU7TUFDTHdDLE1BQU0sRUFBRSxzQkFBc0I7TUFDOUI4QyxLQUFLLEVBQUUseUJBQXlCO01BQ2hDQyxPQUFPLEVBQUU7SUFDVixDQUFDO0lBQ0RsRyxNQUFNLEVBQUU7TUFDUHlELFNBQVMsRUFBRSwwQkFBMEI7TUFDckNELFNBQVMsRUFBRSwwQkFBMEI7TUFDckNILEtBQUssRUFBRTtJQUNSLENBQUM7SUFDRGhELE1BQU0sRUFBRTtNQUNQa0QsT0FBTyxFQUFFLHNCQUFzQjtNQUMvQkQsT0FBTyxFQUFFLHNCQUFzQjtNQUMvQlcsZ0JBQWdCLEVBQUUsd0JBQXdCO01BQzFDQyxnQkFBZ0IsRUFBRSx3QkFBd0I7TUFDMUNiLEtBQUssRUFBRTtJQUNSLENBQUM7SUFDRDNFLE9BQU8sRUFBRTtNQUNSc0YsUUFBUSxFQUFFO0lBQ1g7RUFDRCxDQUFDO0FBQ0Y7QUFHQVksZUFBZSxDQUFDcEQsT0FBTyxHQUFHLElBQUlxRSxPQUFPLEVBQUU7QUFBQyxlQUV6QmpCLGVBQWU7QUFBQSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwYXR0ZXJuID0ge1xyXG5cdGVtYWlsOiAvXlxcUys/QFxcUys/XFwuXFxTKz8kLyxcclxuXHRpZGNhcmQ6IC9eWzEtOV1cXGR7NX0oMTh8MTl8KFsyM11cXGQpKVxcZHsyfSgoMFsxLTldKXwoMTB8MTF8MTIpKSgoWzAtMl1bMS05XSl8MTB8MjB8MzB8MzEpXFxkezN9WzAtOVh4XSQvLFxyXG5cdHVybDogbmV3IFJlZ0V4cChcclxuXHRcdFwiXig/IW1haWx0bzopKD86KD86aHR0cHxodHRwc3xmdHApOi8vfC8vKSg/OlxcXFxTKyg/OjpcXFxcUyopP0ApPyg/Oig/Oig/OlsxLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMDFdXFxcXGR8MjJbMC0zXSkoPzpcXFxcLig/OjE/XFxcXGR7MSwyfXwyWzAtNF1cXFxcZHwyNVswLTVdKSl7Mn0oPzpcXFxcLig/OlswLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMC00XVxcXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLSopKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLSopKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKig/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmZdezIsfSkpKXxsb2NhbGhvc3QpKD86OlxcXFxkezIsNX0pPyg/OigvfFxcXFw/fCMpW15cXFxcc10qKT8kXCIsXHJcblx0XHQnaScpXHJcbn07XHJcblxyXG5jb25zdCBGT1JNQVRfTUFQUElORyA9IHtcclxuXHRcImludFwiOiAnaW50ZWdlcicsXHJcblx0XCJib29sXCI6ICdib29sZWFuJyxcclxuXHRcImRvdWJsZVwiOiAnbnVtYmVyJyxcclxuXHRcImxvbmdcIjogJ251bWJlcicsXHJcblx0XCJwYXNzd29yZFwiOiAnc3RyaW5nJ1xyXG5cdC8vIFwiZmlsZXVybHNcIjogJ2FycmF5J1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRNZXNzYWdlKGFyZ3MsIHJlc291cmNlcyA9ICcnKSB7XHJcblx0dmFyIGRlZmF1bHRNZXNzYWdlID0gWydsYWJlbCddXHJcblx0ZGVmYXVsdE1lc3NhZ2UuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0aWYgKGFyZ3NbaXRlbV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRhcmdzW2l0ZW1dID0gJydcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHRsZXQgc3RyID0gcmVzb3VyY2VzXHJcblx0Zm9yIChsZXQga2V5IGluIGFyZ3MpIHtcclxuXHRcdGxldCByZWcgPSBuZXcgUmVnRXhwKCd7JyArIGtleSArICd9JylcclxuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKHJlZywgYXJnc1trZXldKVxyXG5cdH1cclxuXHRyZXR1cm4gc3RyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHlWYWx1ZSh2YWx1ZSwgdHlwZSkge1xyXG5cdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIXZhbHVlLmxlbmd0aCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgIU9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCB0eXBlcyA9IHtcclxuXHRpbnRlZ2VyKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdHlwZXMubnVtYmVyKHZhbHVlKSAmJiBwYXJzZUludCh2YWx1ZSwgMTApID09PSB2YWx1ZTtcclxuXHR9LFxyXG5cdHN0cmluZyh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XHJcblx0fSxcclxuXHRudW1iZXIodmFsdWUpIHtcclxuXHRcdGlmIChpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XHJcblx0fSxcclxuXHRcImJvb2xlYW5cIjogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcclxuXHR9LFxyXG5cdFwiZmxvYXRcIjogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiB0eXBlcy5udW1iZXIodmFsdWUpICYmICF0eXBlcy5pbnRlZ2VyKHZhbHVlKTtcclxuXHR9LFxyXG5cdGFycmF5KHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcblx0fSxcclxuXHRvYmplY3QodmFsdWUpIHtcclxuXHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICF0eXBlcy5hcnJheSh2YWx1ZSk7XHJcblx0fSxcclxuXHRkYXRlKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlO1xyXG5cdH0sXHJcblx0dGltZXN0YW1wKHZhbHVlKSB7XHJcblx0XHRpZiAoIXRoaXMuaW50ZWdlcih2YWx1ZSkgfHwgTWF0aC5hYnModmFsdWUpLnRvU3RyaW5nKCkubGVuZ3RoID4gMTYpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cdGZpbGUodmFsdWUpIHtcclxuXHRcdHJldHVybiB0eXBlb2YgdmFsdWUudXJsID09PSAnc3RyaW5nJztcclxuXHR9LFxyXG5cdGVtYWlsKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhIXZhbHVlLm1hdGNoKHBhdHRlcm4uZW1haWwpICYmIHZhbHVlLmxlbmd0aCA8IDI1NTtcclxuXHR9LFxyXG5cdHVybCh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISF2YWx1ZS5tYXRjaChwYXR0ZXJuLnVybCk7XHJcblx0fSxcclxuXHRwYXR0ZXJuKHJlZywgdmFsdWUpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKHJlZykudGVzdCh2YWx1ZSk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1ldGhvZCh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxuXHR9LFxyXG5cdGlkY2FyZCh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISF2YWx1ZS5tYXRjaChwYXR0ZXJuLmlkY2FyZCk7XHJcblx0fSxcclxuXHQndXJsLWh0dHBzJyh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMudXJsKHZhbHVlKSAmJiB2YWx1ZS5zdGFydHNXaXRoKCdodHRwczovLycpO1xyXG5cdH0sXHJcblx0J3VybC1zY2hlbWUnKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdmFsdWUuc3RhcnRzV2l0aCgnOi8vJyk7XHJcblx0fSxcclxuXHQndXJsLXdlYicodmFsdWUpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFJ1bGVWYWxpZGF0b3Ige1xyXG5cclxuXHRjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcblx0XHR0aGlzLl9tZXNzYWdlID0gbWVzc2FnZVxyXG5cdH1cclxuXHJcblx0YXN5bmMgdmFsaWRhdGVSdWxlKGZpZWxkS2V5LCBmaWVsZFZhbHVlLCB2YWx1ZSwgZGF0YSwgYWxsRGF0YSkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IG51bGxcclxuXHJcblx0XHRsZXQgcnVsZXMgPSBmaWVsZFZhbHVlLnJ1bGVzXHJcblxyXG5cdFx0bGV0IGhhc1JlcXVpcmVkID0gcnVsZXMuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcblx0XHRcdHJldHVybiBpdGVtLnJlcXVpcmVkXHJcblx0XHR9KVxyXG5cdFx0aWYgKGhhc1JlcXVpcmVkIDwgMCkge1xyXG5cdFx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHRcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhdmFsdWUubGVuZ3RoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG1lc3NhZ2UgPSB0aGlzLl9tZXNzYWdlXHJcblxyXG5cdFx0aWYgKHJ1bGVzID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuIG1lc3NhZ2VbJ2RlZmF1bHQnXVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IHJ1bGUgPSBydWxlc1tpXVxyXG5cdFx0XHRsZXQgdnQgPSB0aGlzLl9nZXRWYWxpZGF0ZVR5cGUocnVsZSlcclxuXHJcblx0XHRcdE9iamVjdC5hc3NpZ24ocnVsZSwge1xyXG5cdFx0XHRcdGxhYmVsOiBmaWVsZFZhbHVlLmxhYmVsIHx8IGBbXCIke2ZpZWxkS2V5fVwiXWBcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdGlmIChSdWxlVmFsaWRhdG9ySGVscGVyW3Z0XSkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IFJ1bGVWYWxpZGF0b3JIZWxwZXJbdnRdKHJ1bGUsIHZhbHVlLCBtZXNzYWdlKVxyXG5cdFx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChydWxlLnZhbGlkYXRlRXhwcikge1xyXG5cdFx0XHRcdGxldCBub3cgPSBEYXRlLm5vdygpXHJcblx0XHRcdFx0bGV0IHJlc3VsdEV4cHIgPSBydWxlLnZhbGlkYXRlRXhwcih2YWx1ZSwgYWxsRGF0YSwgbm93KVxyXG5cdFx0XHRcdGlmIChyZXN1bHRFeHByID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5fZ2V0TWVzc2FnZShydWxlLCBydWxlLmVycm9yTWVzc2FnZSB8fCB0aGlzLl9tZXNzYWdlWydkZWZhdWx0J10pXHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHJ1bGUudmFsaWRhdGVGdW5jdGlvbikge1xyXG5cdFx0XHRcdHJlc3VsdCA9IGF3YWl0IHRoaXMudmFsaWRhdGVGdW5jdGlvbihydWxlLCB2YWx1ZSwgZGF0YSwgYWxsRGF0YSwgdnQpXHJcblx0XHRcdFx0aWYgKHJlc3VsdCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocmVzdWx0ICE9PSBudWxsKSB7XHJcblx0XHRcdHJlc3VsdCA9IG1lc3NhZ2UuVEFHICsgcmVzdWx0XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdFxyXG5cdH1cclxuXHJcblx0YXN5bmMgdmFsaWRhdGVGdW5jdGlvbihydWxlLCB2YWx1ZSwgZGF0YSwgYWxsRGF0YSwgdnQpIHtcclxuXHRcdGxldCByZXN1bHQgPSBudWxsXHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgY2FsbGJhY2tNZXNzYWdlID0gbnVsbFxyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBydWxlLnZhbGlkYXRlRnVuY3Rpb24ocnVsZSwgdmFsdWUsIGFsbERhdGEgfHwgZGF0YSwgKG1lc3NhZ2UpID0+IHtcclxuXHRcdFx0XHRjYWxsYmFja01lc3NhZ2UgPSBtZXNzYWdlXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmIChjYWxsYmFja01lc3NhZ2UgfHwgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnICYmIHJlcykgfHwgcmVzID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMuX2dldE1lc3NhZ2UocnVsZSwgY2FsbGJhY2tNZXNzYWdlIHx8IHJlcywgdnQpXHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0cmVzdWx0ID0gdGhpcy5fZ2V0TWVzc2FnZShydWxlLCBlLm1lc3NhZ2UsIHZ0KVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdFxyXG5cdH1cclxuXHJcblx0X2dldE1lc3NhZ2UocnVsZSwgbWVzc2FnZSwgdnQpIHtcclxuXHRcdHJldHVybiBmb3JtYXRNZXNzYWdlKHJ1bGUsIG1lc3NhZ2UgfHwgcnVsZS5lcnJvck1lc3NhZ2UgfHwgdGhpcy5fbWVzc2FnZVt2dF0gfHwgbWVzc2FnZVsnZGVmYXVsdCddKVxyXG5cdH1cclxuXHJcblx0X2dldFZhbGlkYXRlVHlwZShydWxlKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gJydcclxuXHRcdGlmIChydWxlLnJlcXVpcmVkKSB7XHJcblx0XHRcdHJlc3VsdCA9ICdyZXF1aXJlZCdcclxuXHRcdH0gZWxzZSBpZiAocnVsZS5mb3JtYXQpIHtcclxuXHRcdFx0cmVzdWx0ID0gJ2Zvcm1hdCdcclxuXHRcdH0gZWxzZSBpZiAocnVsZS5hcnJheVR5cGUpIHtcclxuXHRcdFx0cmVzdWx0ID0gJ2FycmF5VHlwZUZvcm1hdCdcclxuXHRcdH0gZWxzZSBpZiAocnVsZS5yYW5nZSkge1xyXG5cdFx0XHRyZXN1bHQgPSAncmFuZ2UnXHJcblx0XHR9IGVsc2UgaWYgKHJ1bGUubWF4aW11bSAhPT0gdW5kZWZpbmVkIHx8IHJ1bGUubWluaW11bSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHJlc3VsdCA9ICdyYW5nZU51bWJlcidcclxuXHRcdH0gZWxzZSBpZiAocnVsZS5tYXhMZW5ndGggIT09IHVuZGVmaW5lZCB8fCBydWxlLm1pbkxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHJlc3VsdCA9ICdyYW5nZUxlbmd0aCdcclxuXHRcdH0gZWxzZSBpZiAocnVsZS5wYXR0ZXJuKSB7XHJcblx0XHRcdHJlc3VsdCA9ICdwYXR0ZXJuJ1xyXG5cdFx0fSBlbHNlIGlmIChydWxlLnZhbGlkYXRlRnVuY3Rpb24pIHtcclxuXHRcdFx0cmVzdWx0ID0gJ3ZhbGlkYXRlRnVuY3Rpb24nXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBSdWxlVmFsaWRhdG9ySGVscGVyID0ge1xyXG5cdHJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBtZXNzYWdlKSB7XHJcblx0XHRpZiAocnVsZS5yZXF1aXJlZCAmJiBpc0VtcHR5VmFsdWUodmFsdWUsIHJ1bGUuZm9ybWF0IHx8IHR5cGVvZiB2YWx1ZSkpIHtcclxuXHRcdFx0cmV0dXJuIGZvcm1hdE1lc3NhZ2UocnVsZSwgcnVsZS5lcnJvck1lc3NhZ2UgfHwgbWVzc2FnZS5yZXF1aXJlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGxcclxuXHR9LFxyXG5cclxuXHRyYW5nZShydWxlLCB2YWx1ZSwgbWVzc2FnZSkge1xyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRyYW5nZSxcclxuXHRcdFx0ZXJyb3JNZXNzYWdlXHJcblx0XHR9ID0gcnVsZTtcclxuXHJcblx0XHRsZXQgbGlzdCA9IG5ldyBBcnJheShyYW5nZS5sZW5ndGgpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpdGVtID0gcmFuZ2VbaV07XHJcblx0XHRcdGlmICh0eXBlcy5vYmplY3QoaXRlbSkgJiYgaXRlbS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0bGlzdFtpXSA9IGl0ZW0udmFsdWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGlzdFtpXSA9IGl0ZW07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcmVzdWx0ID0gZmFsc2VcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0XHRyZXN1bHQgPSAobmV3IFNldCh2YWx1ZS5jb25jYXQobGlzdCkpLnNpemUgPT09IGxpc3QubGVuZ3RoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChsaXN0LmluZGV4T2YodmFsdWUpID4gLTEpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFyZXN1bHQpIHtcclxuXHRcdFx0cmV0dXJuIGZvcm1hdE1lc3NhZ2UocnVsZSwgZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VbJ2VudW0nXSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGxcclxuXHR9LFxyXG5cclxuXHRyYW5nZU51bWJlcihydWxlLCB2YWx1ZSwgbWVzc2FnZSkge1xyXG5cdFx0aWYgKCF0eXBlcy5udW1iZXIodmFsdWUpKSB7XHJcblx0XHRcdHJldHVybiBmb3JtYXRNZXNzYWdlKHJ1bGUsIHJ1bGUuZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2UucGF0dGVybi5taXNtYXRjaCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHtcclxuXHRcdFx0bWluaW11bSxcclxuXHRcdFx0bWF4aW11bSxcclxuXHRcdFx0ZXhjbHVzaXZlTWluaW11bSxcclxuXHRcdFx0ZXhjbHVzaXZlTWF4aW11bVxyXG5cdFx0fSA9IHJ1bGU7XHJcblx0XHRsZXQgbWluID0gZXhjbHVzaXZlTWluaW11bSA/IHZhbHVlIDw9IG1pbmltdW0gOiB2YWx1ZSA8IG1pbmltdW07XHJcblx0XHRsZXQgbWF4ID0gZXhjbHVzaXZlTWF4aW11bSA/IHZhbHVlID49IG1heGltdW0gOiB2YWx1ZSA+IG1heGltdW07XHJcblxyXG5cdFx0aWYgKG1pbmltdW0gIT09IHVuZGVmaW5lZCAmJiBtaW4pIHtcclxuXHRcdFx0cmV0dXJuIGZvcm1hdE1lc3NhZ2UocnVsZSwgcnVsZS5lcnJvck1lc3NhZ2UgfHwgbWVzc2FnZVsnbnVtYmVyJ11bZXhjbHVzaXZlTWluaW11bSA/XHJcblx0XHRcdFx0J2V4Y2x1c2l2ZU1pbmltdW0nIDogJ21pbmltdW0nXHJcblx0XHRcdF0pXHJcblx0XHR9IGVsc2UgaWYgKG1heGltdW0gIT09IHVuZGVmaW5lZCAmJiBtYXgpIHtcclxuXHRcdFx0cmV0dXJuIGZvcm1hdE1lc3NhZ2UocnVsZSwgcnVsZS5lcnJvck1lc3NhZ2UgfHwgbWVzc2FnZVsnbnVtYmVyJ11bZXhjbHVzaXZlTWF4aW11bSA/XHJcblx0XHRcdFx0J2V4Y2x1c2l2ZU1heGltdW0nIDogJ21heGltdW0nXHJcblx0XHRcdF0pXHJcblx0XHR9IGVsc2UgaWYgKG1pbmltdW0gIT09IHVuZGVmaW5lZCAmJiBtYXhpbXVtICE9PSB1bmRlZmluZWQgJiYgKG1pbiB8fCBtYXgpKSB7XHJcblx0XHRcdHJldHVybiBmb3JtYXRNZXNzYWdlKHJ1bGUsIHJ1bGUuZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VbJ251bWJlciddLnJhbmdlKVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsXHJcblx0fSxcclxuXHJcblx0cmFuZ2VMZW5ndGgocnVsZSwgdmFsdWUsIG1lc3NhZ2UpIHtcclxuXHRcdGlmICghdHlwZXMuc3RyaW5nKHZhbHVlKSAmJiAhdHlwZXMuYXJyYXkodmFsdWUpKSB7XHJcblx0XHRcdHJldHVybiBmb3JtYXRNZXNzYWdlKHJ1bGUsIHJ1bGUuZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2UucGF0dGVybi5taXNtYXRjaCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG1pbiA9IHJ1bGUubWluTGVuZ3RoO1xyXG5cdFx0bGV0IG1heCA9IHJ1bGUubWF4TGVuZ3RoO1xyXG5cdFx0bGV0IHZhbCA9IHZhbHVlLmxlbmd0aDtcclxuXHJcblx0XHRpZiAobWluICE9PSB1bmRlZmluZWQgJiYgdmFsIDwgbWluKSB7XHJcblx0XHRcdHJldHVybiBmb3JtYXRNZXNzYWdlKHJ1bGUsIHJ1bGUuZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VbJ2xlbmd0aCddLm1pbkxlbmd0aClcclxuXHRcdH0gZWxzZSBpZiAobWF4ICE9PSB1bmRlZmluZWQgJiYgdmFsID4gbWF4KSB7XHJcblx0XHRcdHJldHVybiBmb3JtYXRNZXNzYWdlKHJ1bGUsIHJ1bGUuZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VbJ2xlbmd0aCddLm1heExlbmd0aClcclxuXHRcdH0gZWxzZSBpZiAobWluICE9PSB1bmRlZmluZWQgJiYgbWF4ICE9PSB1bmRlZmluZWQgJiYgKHZhbCA8IG1pbiB8fCB2YWwgPiBtYXgpKSB7XHJcblx0XHRcdHJldHVybiBmb3JtYXRNZXNzYWdlKHJ1bGUsIHJ1bGUuZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VbJ2xlbmd0aCddLnJhbmdlKVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsXHJcblx0fSxcclxuXHJcblx0cGF0dGVybihydWxlLCB2YWx1ZSwgbWVzc2FnZSkge1xyXG5cdFx0aWYgKCF0eXBlc1sncGF0dGVybiddKHJ1bGUucGF0dGVybiwgdmFsdWUpKSB7XHJcblx0XHRcdHJldHVybiBmb3JtYXRNZXNzYWdlKHJ1bGUsIHJ1bGUuZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2UucGF0dGVybi5taXNtYXRjaCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGxcclxuXHR9LFxyXG5cclxuXHRmb3JtYXQocnVsZSwgdmFsdWUsIG1lc3NhZ2UpIHtcclxuXHRcdHZhciBjdXN0b21UeXBlcyA9IE9iamVjdC5rZXlzKHR5cGVzKTtcclxuXHRcdHZhciBmb3JtYXQgPSBGT1JNQVRfTUFQUElOR1tydWxlLmZvcm1hdF0gPyBGT1JNQVRfTUFQUElOR1tydWxlLmZvcm1hdF0gOiAocnVsZS5mb3JtYXQgfHwgcnVsZS5hcnJheVR5cGUpO1xyXG5cclxuXHRcdGlmIChjdXN0b21UeXBlcy5pbmRleE9mKGZvcm1hdCkgPiAtMSkge1xyXG5cdFx0XHRpZiAoIXR5cGVzW2Zvcm1hdF0odmFsdWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZvcm1hdE1lc3NhZ2UocnVsZSwgcnVsZS5lcnJvck1lc3NhZ2UgfHwgbWVzc2FnZS50eXBlRXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGxcclxuXHR9LFxyXG5cclxuXHRhcnJheVR5cGVGb3JtYXQocnVsZSwgdmFsdWUsIG1lc3NhZ2UpIHtcclxuXHRcdGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuXHRcdFx0cmV0dXJuIGZvcm1hdE1lc3NhZ2UocnVsZSwgcnVsZS5lcnJvck1lc3NhZ2UgfHwgbWVzc2FnZS50eXBlRXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHZhbHVlW2ldO1xyXG5cdFx0XHRsZXQgZm9ybWF0UmVzdWx0ID0gdGhpcy5mb3JtYXQocnVsZSwgZWxlbWVudCwgbWVzc2FnZSlcclxuXHRcdFx0aWYgKGZvcm1hdFJlc3VsdCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHVybiBmb3JtYXRSZXN1bHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsXHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTY2hlbWFWYWxpZGF0b3IgZXh0ZW5kcyBSdWxlVmFsaWRhdG9yIHtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NoZW1hLCBvcHRpb25zKSB7XHJcblx0XHRzdXBlcihTY2hlbWFWYWxpZGF0b3IubWVzc2FnZSk7XHJcblxyXG5cdFx0dGhpcy5fc2NoZW1hID0gc2NoZW1hXHJcblx0XHR0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCBudWxsXHJcblx0fVxyXG5cclxuXHR1cGRhdGVTY2hlbWEoc2NoZW1hKSB7XHJcblx0XHR0aGlzLl9zY2hlbWEgPSBzY2hlbWFcclxuXHR9XHJcblxyXG5cdGFzeW5jIHZhbGlkYXRlKGRhdGEsIGFsbERhdGEpIHtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLl9jaGVja0ZpZWxkSW5TY2hlbWEoZGF0YSlcclxuXHRcdGlmICghcmVzdWx0KSB7XHJcblx0XHRcdHJlc3VsdCA9IGF3YWl0IHRoaXMuaW52b2tlVmFsaWRhdGUoZGF0YSwgZmFsc2UsIGFsbERhdGEpXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXSA6IG51bGxcclxuXHR9XHJcblxyXG5cdGFzeW5jIHZhbGlkYXRlQWxsKGRhdGEsIGFsbERhdGEpIHtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLl9jaGVja0ZpZWxkSW5TY2hlbWEoZGF0YSlcclxuXHRcdGlmICghcmVzdWx0KSB7XHJcblx0XHRcdHJlc3VsdCA9IGF3YWl0IHRoaXMuaW52b2tlVmFsaWRhdGUoZGF0YSwgdHJ1ZSwgYWxsRGF0YSlcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHRcclxuXHR9XHJcblxyXG5cdGFzeW5jIHZhbGlkYXRlVXBkYXRlKGRhdGEsIGFsbERhdGEpIHtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLl9jaGVja0ZpZWxkSW5TY2hlbWEoZGF0YSlcclxuXHRcdGlmICghcmVzdWx0KSB7XHJcblx0XHRcdHJlc3VsdCA9IGF3YWl0IHRoaXMuaW52b2tlVmFsaWRhdGVVcGRhdGUoZGF0YSwgZmFsc2UsIGFsbERhdGEpXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXSA6IG51bGxcclxuXHR9XHJcblxyXG5cdGFzeW5jIGludm9rZVZhbGlkYXRlKGRhdGEsIGFsbCwgYWxsRGF0YSkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IFtdXHJcblx0XHRsZXQgc2NoZW1hID0gdGhpcy5fc2NoZW1hXHJcblx0XHRmb3IgKGxldCBrZXkgaW4gc2NoZW1hKSB7XHJcblx0XHRcdGxldCB2YWx1ZSA9IHNjaGVtYVtrZXldXHJcblx0XHRcdGxldCBlcnJvck1lc3NhZ2UgPSBhd2FpdCB0aGlzLnZhbGlkYXRlUnVsZShrZXksIHZhbHVlLCBkYXRhW2tleV0sIGRhdGEsIGFsbERhdGEpXHJcblx0XHRcdGlmIChlcnJvck1lc3NhZ2UgIT0gbnVsbCkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKHtcclxuXHRcdFx0XHRcdGtleSxcclxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKCFhbGwpIGJyZWFrXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHRcclxuXHR9XHJcblxyXG5cdGFzeW5jIGludm9rZVZhbGlkYXRlVXBkYXRlKGRhdGEsIGFsbCwgYWxsRGF0YSkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IFtdXHJcblx0XHRmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG5cdFx0XHRsZXQgZXJyb3JNZXNzYWdlID0gYXdhaXQgdGhpcy52YWxpZGF0ZVJ1bGUoa2V5LCB0aGlzLl9zY2hlbWFba2V5XSwgZGF0YVtrZXldLCBkYXRhLCBhbGxEYXRhKVxyXG5cdFx0XHRpZiAoZXJyb3JNZXNzYWdlICE9IG51bGwpIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaCh7XHJcblx0XHRcdFx0XHRrZXksXHJcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmICghYWxsKSBicmVha1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0XHJcblx0fVxyXG5cclxuXHRfY2hlY2tGaWVsZEluU2NoZW1hKGRhdGEpIHtcclxuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcclxuXHRcdHZhciBrZXlzMiA9IE9iamVjdC5rZXlzKHRoaXMuX3NjaGVtYSlcclxuXHRcdGlmIChuZXcgU2V0KGtleXMuY29uY2F0KGtleXMyKSkuc2l6ZSA9PT0ga2V5czIubGVuZ3RoKSB7XHJcblx0XHRcdHJldHVybiAnJ1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBub0V4aXN0RmllbGRzID0ga2V5cy5maWx0ZXIoKGtleSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4ga2V5czIuaW5kZXhPZihrZXkpIDwgMDtcclxuXHRcdH0pXHJcblx0XHR2YXIgZXJyb3JNZXNzYWdlID0gZm9ybWF0TWVzc2FnZSh7XHJcblx0XHRcdGZpZWxkOiBKU09OLnN0cmluZ2lmeShub0V4aXN0RmllbGRzKVxyXG5cdFx0fSwgU2NoZW1hVmFsaWRhdG9yLm1lc3NhZ2UuVEFHICsgU2NoZW1hVmFsaWRhdG9yLm1lc3NhZ2VbJ2RlZmF1bHRJbnZhbGlkJ10pXHJcblx0XHRyZXR1cm4gW3tcclxuXHRcdFx0a2V5OiAnaW52YWxpZCcsXHJcblx0XHRcdGVycm9yTWVzc2FnZVxyXG5cdFx0fV1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2UoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdFRBRzogXCJcIixcclxuXHRcdGRlZmF1bHQ6ICfpqozor4HplJnor68nLFxyXG5cdFx0ZGVmYXVsdEludmFsaWQ6ICfmj5DkuqTnmoTlrZfmrrV7ZmllbGR95Zyo5pWw5o2u5bqT5Lit5bm25LiN5a2Y5ZyoJyxcclxuXHRcdHZhbGlkYXRlRnVuY3Rpb246ICfpqozor4Hml6DmlYgnLFxyXG5cdFx0cmVxdWlyZWQ6ICd7bGFiZWx95b+F5aGrJyxcclxuXHRcdCdlbnVtJzogJ3tsYWJlbH3otoXlh7rojIPlm7QnLFxyXG5cdFx0dGltZXN0YW1wOiAne2xhYmVsfeagvOW8j+aXoOaViCcsXHJcblx0XHR3aGl0ZXNwYWNlOiAne2xhYmVsfeS4jeiDveS4uuepuicsXHJcblx0XHR0eXBlRXJyb3I6ICd7bGFiZWx957G75Z6L5peg5pWIJyxcclxuXHRcdGRhdGU6IHtcclxuXHRcdFx0Zm9ybWF0OiAne2xhYmVsfeaXpeacn3t2YWx1ZX3moLzlvI/ml6DmlYgnLFxyXG5cdFx0XHRwYXJzZTogJ3tsYWJlbH3ml6XmnJ/ml6Dms5Xop6PmnpAse3ZhbHVlfeaXoOaViCcsXHJcblx0XHRcdGludmFsaWQ6ICd7bGFiZWx95pel5pyfe3ZhbHVlfeaXoOaViCdcclxuXHRcdH0sXHJcblx0XHRsZW5ndGg6IHtcclxuXHRcdFx0bWluTGVuZ3RoOiAne2xhYmVsfemVv+W6puS4jeiDveWwkeS6jnttaW5MZW5ndGh9JyxcclxuXHRcdFx0bWF4TGVuZ3RoOiAne2xhYmVsfemVv+W6puS4jeiDvei2hei/h3ttYXhMZW5ndGh9JyxcclxuXHRcdFx0cmFuZ2U6ICd7bGFiZWx95b+F6aG75LuL5LqOe21pbkxlbmd0aH3lkox7bWF4TGVuZ3RofeS5i+mXtCdcclxuXHRcdH0sXHJcblx0XHRudW1iZXI6IHtcclxuXHRcdFx0bWluaW11bTogJ3tsYWJlbH3kuI3og73lsI/kuo57bWluaW11bX0nLFxyXG5cdFx0XHRtYXhpbXVtOiAne2xhYmVsfeS4jeiDveWkp+S6jnttYXhpbXVtfScsXHJcblx0XHRcdGV4Y2x1c2l2ZU1pbmltdW06ICd7bGFiZWx95LiN6IO95bCP5LqO562J5LqOe21pbmltdW19JyxcclxuXHRcdFx0ZXhjbHVzaXZlTWF4aW11bTogJ3tsYWJlbH3kuI3og73lpKfkuo7nrYnkuo57bWF4aW11bX0nLFxyXG5cdFx0XHRyYW5nZTogJ3tsYWJlbH3lv4Xpobvku4vkuo57bWluaW11bX1hbmR7bWF4aW11bX3kuYvpl7QnXHJcblx0XHR9LFxyXG5cdFx0cGF0dGVybjoge1xyXG5cdFx0XHRtaXNtYXRjaDogJ3tsYWJlbH3moLzlvI/kuI3ljLnphY0nXHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuXHJcblNjaGVtYVZhbGlkYXRvci5tZXNzYWdlID0gbmV3IE1lc3NhZ2UoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVZhbGlkYXRvclxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 21);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 23);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 23 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 24 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 25 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 26 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 27 */
/*!*************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms/utils.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.typeFilter = exports.type = exports.setDataValue = exports.realName = exports.rawData = exports.objSet = exports.objGet = exports.name2arr = exports.isRequiredField = exports.isRealName = exports.isNumber = exports.isEqual = exports.isBoolean = exports.getValue = exports.getDataValueType = exports.getDataValue = exports.deepCopy = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\n/**\r\n * 简单处理对象拷贝\r\n * @param {Obejct} 被拷贝对象\r\n * @@return {Object} 拷贝对象\r\n */\nvar deepCopy = function deepCopy(val) {\n  return JSON.parse(JSON.stringify(val));\n};\n/**\r\n * 过滤数字类型\r\n * @param {String} format 数字类型\r\n * @@return {Boolean} 返回是否为数字类型\r\n */\nexports.deepCopy = deepCopy;\nvar typeFilter = function typeFilter(format) {\n  return format === 'int' || format === 'double' || format === 'number' || format === 'timestamp';\n};\n\n/**\r\n * 把 value 转换成指定的类型，用于处理初始值，原因是初始值需要入库不能为 undefined\r\n * @param {String} key 字段名\r\n * @param {any} value 字段值\r\n * @param {Object} rules 表单校验规则\r\n */\nexports.typeFilter = typeFilter;\nvar getValue = function getValue(key, value, rules) {\n  var isRuleNumType = rules.find(function (val) {\n    return val.format && typeFilter(val.format);\n  });\n  var isRuleBoolType = rules.find(function (val) {\n    return val.format && val.format === 'boolean' || val.format === 'bool';\n  });\n  // 输入类型为 number\n  if (!!isRuleNumType) {\n    if (!value && value !== 0) {\n      value = null;\n    } else {\n      value = isNumber(Number(value)) ? Number(value) : value;\n    }\n  }\n\n  // 输入类型为 boolean\n  if (!!isRuleBoolType) {\n    value = isBoolean(value) ? value : false;\n  }\n  return value;\n};\n\n/**\r\n * 获取表单数据\r\n * @param {String|Array} name 真实名称，需要使用 realName 获取\r\n * @param {Object} data 原始数据\r\n * @param {any} value  需要设置的值\r\n */\nexports.getValue = getValue;\nvar setDataValue = function setDataValue(field, formdata, value) {\n  formdata[field] = value;\n  return value || '';\n};\n\n/**\r\n * 获取表单数据\r\n * @param {String|Array} field 真实名称，需要使用 realName 获取\r\n * @param {Object} data 原始数据\r\n */\nexports.setDataValue = setDataValue;\nvar getDataValue = function getDataValue(field, data) {\n  return objGet(data, field);\n};\n\n/**\r\n * 获取表单类型\r\n * @param {String|Array} field 真实名称，需要使用 realName 获取\r\n */\nexports.getDataValue = getDataValue;\nvar getDataValueType = function getDataValueType(field, data) {\n  var value = getDataValue(field, data);\n  return {\n    type: type(value),\n    value: value\n  };\n};\n\n/**\r\n * 获取表单可用的真实name\r\n * @param {String|Array} name 表单name\r\n * @@return {String} 表单可用的真实name\r\n */\nexports.getDataValueType = getDataValueType;\nvar realName = function realName(name) {\n  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var base_name = _basePath(name);\n  if ((0, _typeof2.default)(base_name) === 'object' && Array.isArray(base_name) && base_name.length > 1) {\n    var realname = base_name.reduce(function (a, b) {\n      return a += \"#\".concat(b);\n    }, '_formdata_');\n    return realname;\n  }\n  return base_name[0] || name;\n};\n\n/**\r\n * 判断是否表单可用的真实name\r\n * @param {String|Array} name 表单name\r\n * @@return {String} 表单可用的真实name\r\n */\nexports.realName = realName;\nvar isRealName = function isRealName(name) {\n  var reg = /^_formdata_#*/;\n  return reg.test(name);\n};\n\n/**\r\n * 获取表单数据的原始格式\r\n * @@return {Object|Array} object 需要解析的数据\r\n */\nexports.isRealName = isRealName;\nvar rawData = function rawData() {\n  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var name = arguments.length > 1 ? arguments[1] : undefined;\n  var newData = JSON.parse(JSON.stringify(object));\n  var formData = {};\n  for (var i in newData) {\n    var path = name2arr(i);\n    objSet(formData, path, newData[i]);\n  }\n  return formData;\n};\n\n/**\r\n * 真实name还原为 array\r\n * @param {*} name \r\n */\nexports.rawData = rawData;\nvar name2arr = function name2arr(name) {\n  var field = name.replace('_formdata_#', '');\n  field = field.split('#').map(function (v) {\n    return isNumber(v) ? Number(v) : v;\n  });\n  return field;\n};\n\n/**\r\n * 对象中设置值\r\n * @param {Object|Array} object 源数据\r\n * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']\r\n * @param {String} value 需要设置的值\r\n */\nexports.name2arr = name2arr;\nvar objSet = function objSet(object, path, value) {\n  if ((0, _typeof2.default)(object) !== 'object') return object;\n  _basePath(path).reduce(function (o, k, i, _) {\n    if (i === _.length - 1) {\n      // 若遍历结束直接赋值\n      o[k] = value;\n      return null;\n    } else if (k in o) {\n      // 若存在对应路径，则返回找到的对象，进行下一次遍历\n      return o[k];\n    } else {\n      // 若不存在对应路径，则创建对应对象，若下一路径是数字，新对象赋值为空数组，否则赋值为空对象\n      o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};\n      return o[k];\n    }\n  }, object);\n  // 返回object\n  return object;\n};\n\n// 处理 path， path有三种形式：'a[0].b.c'、'a.0.b.c' 和 ['a','0','b','c']，需要统一处理成数组，便于后续使用\nexports.objSet = objSet;\nfunction _basePath(path) {\n  // 若是数组，则直接返回\n  if (Array.isArray(path)) return path;\n  // 若有 '[',']'，则替换成将 '[' 替换成 '.',去掉 ']'\n  return path.replace(/\\[/g, '.').replace(/\\]/g, '').split('.');\n}\n\n/**\r\n * 从对象中获取值\r\n * @param {Object|Array} object 源数据\r\n * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']\r\n * @param {String} defaultVal 如果无法从调用链中获取值的默认值\r\n */\nvar objGet = function objGet(object, path) {\n  var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undefined';\n  // 先将path处理成统一格式\n  var newPath = _basePath(path);\n  // 递归处理，返回最后结果\n  var val = newPath.reduce(function (o, k) {\n    return (o || {})[k];\n  }, object);\n  return !val || val !== undefined ? val : defaultVal;\n};\n\n/**\r\n * 是否为 number 类型 \r\n * @param {any} num 需要判断的值\r\n * @return {Boolean} 是否为 number\r\n */\nexports.objGet = objGet;\nvar isNumber = function isNumber(num) {\n  return !isNaN(Number(num));\n};\n\n/**\r\n * 是否为 boolean 类型 \r\n * @param {any} bool 需要判断的值\r\n * @return {Boolean} 是否为 boolean\r\n */\nexports.isNumber = isNumber;\nvar isBoolean = function isBoolean(bool) {\n  return typeof bool === 'boolean';\n};\n/**\r\n * 是否有必填字段\r\n * @param {Object} rules 规则\r\n * @return {Boolean} 是否有必填字段\r\n */\nexports.isBoolean = isBoolean;\nvar isRequiredField = function isRequiredField(rules) {\n  var isNoField = false;\n  for (var i = 0; i < rules.length; i++) {\n    var ruleData = rules[i];\n    if (ruleData.required) {\n      isNoField = true;\n      break;\n    }\n  }\n  return isNoField;\n};\n\n/**\r\n * 获取数据类型\r\n * @param {Any} obj 需要获取数据类型的值\r\n */\nexports.isRequiredField = isRequiredField;\nvar type = function type(obj) {\n  var class2type = {};\n\n  // 生成class2type映射\n  \"Boolean Number String Function Array Date RegExp Object Error\".split(\" \").map(function (item, index) {\n    class2type[\"[object \" + item + \"]\"] = item.toLowerCase();\n  });\n  if (obj == null) {\n    return obj + \"\";\n  }\n  return (0, _typeof2.default)(obj) === \"object\" || typeof obj === \"function\" ? class2type[Object.prototype.toString.call(obj)] || \"object\" : (0, _typeof2.default)(obj);\n};\n\n/**\r\n * 判断两个值是否相等\r\n * @param {any} a 值  \r\n * @param {any} b 值  \r\n * @return {Boolean} 是否相等\r\n */\nexports.type = type;\nvar isEqual = function isEqual(a, b) {\n  //如果a和b本来就全等\n  if (a === b) {\n    //判断是否为0和-0\n    return a !== 0 || 1 / a === 1 / b;\n  }\n  //判断是否为null和undefined\n  if (a == null || b == null) {\n    return a === b;\n  }\n  //接下来判断a和b的数据类型\n  var classNameA = toString.call(a),\n    classNameB = toString.call(b);\n  //如果数据类型不相等，则返回false\n  if (classNameA !== classNameB) {\n    return false;\n  }\n  //如果数据类型相等，再根据不同数据类型分别判断\n  switch (classNameA) {\n    case '[object RegExp]':\n    case '[object String]':\n      //进行字符串转换比较\n      return '' + a === '' + b;\n    case '[object Number]':\n      //进行数字转换比较,判断是否为NaN\n      if (+a !== +a) {\n        return +b !== +b;\n      }\n      //判断是否为0或-0\n      return +a === 0 ? 1 / +a === 1 / b : +a === +b;\n    case '[object Date]':\n    case '[object Boolean]':\n      return +a === +b;\n  }\n  //如果是对象类型\n  if (classNameA == '[object Object]') {\n    //获取a和b的属性长度\n    var propsA = Object.getOwnPropertyNames(a),\n      propsB = Object.getOwnPropertyNames(b);\n    if (propsA.length != propsB.length) {\n      return false;\n    }\n    for (var i = 0; i < propsA.length; i++) {\n      var propName = propsA[i];\n      //如果对应属性对应值不相等，则返回false\n      if (a[propName] !== b[propName]) {\n        return false;\n      }\n    }\n    return true;\n  }\n  //如果是数组类型\n  if (classNameA == '[object Array]') {\n    if (a.toString() == b.toString()) {\n      return true;\n    }\n    return false;\n  }\n};\nexports.isEqual = isEqual;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWZvcm1zL2NvbXBvbmVudHMvdW5pLWZvcm1zL3V0aWxzLmpzIl0sIm5hbWVzIjpbImRlZXBDb3B5IiwidmFsIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidHlwZUZpbHRlciIsImZvcm1hdCIsImdldFZhbHVlIiwia2V5IiwidmFsdWUiLCJydWxlcyIsImlzUnVsZU51bVR5cGUiLCJmaW5kIiwiaXNSdWxlQm9vbFR5cGUiLCJpc051bWJlciIsIk51bWJlciIsImlzQm9vbGVhbiIsInNldERhdGFWYWx1ZSIsImZpZWxkIiwiZm9ybWRhdGEiLCJnZXREYXRhVmFsdWUiLCJkYXRhIiwib2JqR2V0IiwiZ2V0RGF0YVZhbHVlVHlwZSIsInR5cGUiLCJyZWFsTmFtZSIsIm5hbWUiLCJiYXNlX25hbWUiLCJfYmFzZVBhdGgiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJyZWFsbmFtZSIsInJlZHVjZSIsImEiLCJiIiwiaXNSZWFsTmFtZSIsInJlZyIsInRlc3QiLCJyYXdEYXRhIiwib2JqZWN0IiwibmV3RGF0YSIsImZvcm1EYXRhIiwiaSIsInBhdGgiLCJuYW1lMmFyciIsIm9ialNldCIsInJlcGxhY2UiLCJzcGxpdCIsIm1hcCIsInYiLCJvIiwiayIsIl8iLCJkZWZhdWx0VmFsIiwibmV3UGF0aCIsInVuZGVmaW5lZCIsIm51bSIsImlzTmFOIiwiYm9vbCIsImlzUmVxdWlyZWRGaWVsZCIsImlzTm9GaWVsZCIsInJ1bGVEYXRhIiwicmVxdWlyZWQiLCJvYmoiLCJjbGFzczJ0eXBlIiwiaXRlbSIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpc0VxdWFsIiwiY2xhc3NOYW1lQSIsImNsYXNzTmFtZUIiLCJwcm9wc0EiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvcHNCIiwicHJvcE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FB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QUFLLGtCQUFrQjtNQUN0QixPQUFPLENBQUNELENBQUMsS0FBSyxDQUFDQyxDQUFDO0VBQUM7RUFFbkI7RUFDQSxJQUFJdUMsVUFBVSxJQUFJLGlCQUFpQixFQUFFO0lBQ3BDO0lBQ0EsSUFBSUUsTUFBTSxHQUFHUCxNQUFNLENBQUNRLG1CQUFtQixDQUFDM0MsQ0FBQyxDQUFDO01BQ3pDNEMsTUFBTSxHQUFHVCxNQUFNLENBQUNRLG1CQUFtQixDQUFDMUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUl5QyxNQUFNLENBQUM3QyxNQUFNLElBQUkrQyxNQUFNLENBQUMvQyxNQUFNLEVBQUU7TUFDbkMsT0FBTyxLQUFLO0lBQ2I7SUFDQSxLQUFLLElBQUlZLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2lDLE1BQU0sQ0FBQzdDLE1BQU0sRUFBRVksQ0FBQyxFQUFFLEVBQUU7TUFDdkMsSUFBSW9DLFFBQVEsR0FBR0gsTUFBTSxDQUFDakMsQ0FBQyxDQUFDO01BQ3hCO01BQ0EsSUFBSVQsQ0FBQyxDQUFDNkMsUUFBUSxDQUFDLEtBQUs1QyxDQUFDLENBQUM0QyxRQUFRLENBQUMsRUFBRTtRQUNoQyxPQUFPLEtBQUs7TUFDYjtJQUNEO0lBQ0EsT0FBTyxJQUFJO0VBQ1o7RUFDQTtFQUNBLElBQUlMLFVBQVUsSUFBSSxnQkFBZ0IsRUFBRTtJQUNuQyxJQUFJeEMsQ0FBQyxDQUFDcUMsUUFBUSxFQUFFLElBQUlwQyxDQUFDLENBQUNvQyxRQUFRLEVBQUUsRUFBRTtNQUNqQyxPQUFPLElBQUk7SUFDWjtJQUNBLE9BQU8sS0FBSztFQUNiO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOeugOWNleWkhOeQhuWvueixoeaLt+i0nVxyXG4gKiBAcGFyYW0ge09iZWpjdH0g6KKr5ou36LSd5a+56LGhXHJcbiAqIEBAcmV0dXJuIHtPYmplY3R9IOaLt+i0neWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRlZXBDb3B5ID0gKHZhbCkgPT4ge1xyXG5cdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpXHJcbn1cclxuLyoqXHJcbiAqIOi/h+a7pOaVsOWtl+exu+Wei1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IOaVsOWtl+exu+Wei1xyXG4gKiBAQHJldHVybiB7Qm9vbGVhbn0g6L+U5Zue5piv5ZCm5Li65pWw5a2X57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdHlwZUZpbHRlciA9IChmb3JtYXQpID0+IHtcclxuXHRyZXR1cm4gZm9ybWF0ID09PSAnaW50JyB8fCBmb3JtYXQgPT09ICdkb3VibGUnIHx8IGZvcm1hdCA9PT0gJ251bWJlcicgfHwgZm9ybWF0ID09PSAndGltZXN0YW1wJztcclxufVxyXG5cclxuLyoqXHJcbiAqIOaKiiB2YWx1ZSDovazmjaLmiJDmjIflrprnmoTnsbvlnovvvIznlKjkuo7lpITnkIbliJ3lp4vlgLzvvIzljp/lm6DmmK/liJ3lp4vlgLzpnIDopoHlhaXlupPkuI3og73kuLogdW5kZWZpbmVkXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkg5a2X5q615ZCNXHJcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSDlrZfmrrXlgLxcclxuICogQHBhcmFtIHtPYmplY3R9IHJ1bGVzIOihqOWNleagoemqjOinhOWImVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFZhbHVlID0gKGtleSwgdmFsdWUsIHJ1bGVzKSA9PiB7XHJcblx0Y29uc3QgaXNSdWxlTnVtVHlwZSA9IHJ1bGVzLmZpbmQodmFsID0+IHZhbC5mb3JtYXQgJiYgdHlwZUZpbHRlcih2YWwuZm9ybWF0KSk7XHJcblx0Y29uc3QgaXNSdWxlQm9vbFR5cGUgPSBydWxlcy5maW5kKHZhbCA9PiAodmFsLmZvcm1hdCAmJiB2YWwuZm9ybWF0ID09PSAnYm9vbGVhbicpIHx8IHZhbC5mb3JtYXQgPT09ICdib29sJyk7XHJcblx0Ly8g6L6T5YWl57G75Z6L5Li6IG51bWJlclxyXG5cdGlmICghIWlzUnVsZU51bVR5cGUpIHtcclxuXHRcdGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcclxuXHRcdFx0dmFsdWUgPSBudWxsXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YWx1ZSA9IGlzTnVtYmVyKE51bWJlcih2YWx1ZSkpID8gTnVtYmVyKHZhbHVlKSA6IHZhbHVlXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyDovpPlhaXnsbvlnovkuLogYm9vbGVhblxyXG5cdGlmICghIWlzUnVsZUJvb2xUeXBlKSB7XHJcblx0XHR2YWx1ZSA9IGlzQm9vbGVhbih2YWx1ZSkgPyB2YWx1ZSA6IGZhbHNlXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5booajljZXmlbDmja5cclxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IG5hbWUg55yf5a6e5ZCN56ew77yM6ZyA6KaB5L2/55SoIHJlYWxOYW1lIOiOt+WPllxyXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDljp/lp4vmlbDmja5cclxuICogQHBhcmFtIHthbnl9IHZhbHVlICDpnIDopoHorr7nva7nmoTlgLxcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXREYXRhVmFsdWUgPSAoZmllbGQsIGZvcm1kYXRhLCB2YWx1ZSkgPT4ge1xyXG5cdGZvcm1kYXRhW2ZpZWxkXSA9IHZhbHVlXHJcblx0cmV0dXJuIHZhbHVlIHx8ICcnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5booajljZXmlbDmja5cclxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGZpZWxkIOecn+WunuWQjeensO+8jOmcgOimgeS9v+eUqCByZWFsTmFtZSDojrflj5ZcclxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEg5Y6f5aeL5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0RGF0YVZhbHVlID0gKGZpZWxkLCBkYXRhKSA9PiB7XHJcblx0cmV0dXJuIG9iakdldChkYXRhLCBmaWVsZClcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluihqOWNleexu+Wei1xyXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gZmllbGQg55yf5a6e5ZCN56ew77yM6ZyA6KaB5L2/55SoIHJlYWxOYW1lIOiOt+WPllxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldERhdGFWYWx1ZVR5cGUgPSAoZmllbGQsIGRhdGEpID0+IHtcclxuXHRjb25zdCB2YWx1ZSA9IGdldERhdGFWYWx1ZShmaWVsZCwgZGF0YSlcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogdHlwZSh2YWx1ZSksXHJcblx0XHR2YWx1ZVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluihqOWNleWPr+eUqOeahOecn+Wunm5hbWVcclxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IG5hbWUg6KGo5Y2VbmFtZVxyXG4gKiBAQHJldHVybiB7U3RyaW5nfSDooajljZXlj6/nlKjnmoTnnJ/lrp5uYW1lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVhbE5hbWUgPSAobmFtZSwgZGF0YSA9IHt9KSA9PiB7XHJcblx0Y29uc3QgYmFzZV9uYW1lID0gX2Jhc2VQYXRoKG5hbWUpXHJcblx0aWYgKHR5cGVvZiBiYXNlX25hbWUgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkoYmFzZV9uYW1lKSAmJiBiYXNlX25hbWUubGVuZ3RoID4gMSkge1xyXG5cdFx0Y29uc3QgcmVhbG5hbWUgPSBiYXNlX25hbWUucmVkdWNlKChhLCBiKSA9PiBhICs9IGAjJHtifWAsICdfZm9ybWRhdGFfJylcclxuXHRcdHJldHVybiByZWFsbmFtZVxyXG5cdH1cclxuXHRyZXR1cm4gYmFzZV9uYW1lWzBdIHx8IG5hbWVcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuihqOWNleWPr+eUqOeahOecn+Wunm5hbWVcclxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IG5hbWUg6KGo5Y2VbmFtZVxyXG4gKiBAQHJldHVybiB7U3RyaW5nfSDooajljZXlj6/nlKjnmoTnnJ/lrp5uYW1lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNSZWFsTmFtZSA9IChuYW1lKSA9PiB7XHJcblx0Y29uc3QgcmVnID0gL15fZm9ybWRhdGFfIyovXHJcblx0cmV0dXJuIHJlZy50ZXN0KG5hbWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5booajljZXmlbDmja7nmoTljp/lp4vmoLzlvI9cclxuICogQEByZXR1cm4ge09iamVjdHxBcnJheX0gb2JqZWN0IOmcgOimgeino+aekOeahOaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJhd0RhdGEgPSAob2JqZWN0ID0ge30sIG5hbWUpID0+IHtcclxuXHRsZXQgbmV3RGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSlcclxuXHRsZXQgZm9ybURhdGEgPSB7fVxyXG5cdGZvcihsZXQgaSBpbiBuZXdEYXRhKXtcclxuXHRcdGxldCBwYXRoID0gbmFtZTJhcnIoaSlcclxuXHRcdG9ialNldChmb3JtRGF0YSxwYXRoLG5ld0RhdGFbaV0pXHJcblx0fVxyXG5cdHJldHVybiBmb3JtRGF0YVxyXG59XHJcblxyXG4vKipcclxuICog55yf5a6ebmFtZei/mOWOn+S4uiBhcnJheVxyXG4gKiBAcGFyYW0geyp9IG5hbWUgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbmFtZTJhcnIgPSAobmFtZSkgPT4ge1xyXG5cdGxldCBmaWVsZCA9IG5hbWUucmVwbGFjZSgnX2Zvcm1kYXRhXyMnLCAnJylcclxuXHRmaWVsZCA9IGZpZWxkLnNwbGl0KCcjJykubWFwKHYgPT4gKGlzTnVtYmVyKHYpID8gTnVtYmVyKHYpIDogdikpXHJcblx0cmV0dXJuIGZpZWxkXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlr7nosaHkuK3orr7nva7lgLxcclxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iamVjdCDmupDmlbDmja5cclxuICogQHBhcmFtIHtTdHJpbmd8IEFycmF5fSBwYXRoICdhLmIuYycg5oiWIFsnYScsMCwnYicsJ2MnXVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUg6ZyA6KaB6K6+572u55qE5YC8XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb2JqU2V0ID0gKG9iamVjdCwgcGF0aCwgdmFsdWUpID0+IHtcclxuXHRpZiAodHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHJldHVybiBvYmplY3Q7XHJcblx0X2Jhc2VQYXRoKHBhdGgpLnJlZHVjZSgobywgaywgaSwgXykgPT4ge1xyXG5cdFx0aWYgKGkgPT09IF8ubGVuZ3RoIC0gMSkgeyBcclxuXHRcdFx0Ly8g6Iul6YGN5Y6G57uT5p2f55u05o6l6LWL5YC8XHJcblx0XHRcdG9ba10gPSB2YWx1ZVxyXG5cdFx0XHRyZXR1cm4gbnVsbFxyXG5cdFx0fSBlbHNlIGlmIChrIGluIG8pIHsgXHJcblx0XHRcdC8vIOiLpeWtmOWcqOWvueW6lOi3r+W+hO+8jOWImei/lOWbnuaJvuWIsOeahOWvueixoe+8jOi/m+ihjOS4i+S4gOasoemBjeWOhlxyXG5cdFx0XHRyZXR1cm4gb1trXVxyXG5cdFx0fSBlbHNlIHsgXHJcblx0XHRcdC8vIOiLpeS4jeWtmOWcqOWvueW6lOi3r+W+hO+8jOWImeWIm+W7uuWvueW6lOWvueixoe+8jOiLpeS4i+S4gOi3r+W+hOaYr+aVsOWtl++8jOaWsOWvueixoei1i+WAvOS4uuepuuaVsOe7hO+8jOWQpuWImei1i+WAvOS4uuepuuWvueixoVxyXG5cdFx0XHRvW2tdID0gL15bMC05XXsxLH0kLy50ZXN0KF9baSArIDFdKSA/IFtdIDoge31cclxuXHRcdFx0cmV0dXJuIG9ba11cclxuXHRcdH1cclxuXHR9LCBvYmplY3QpXHJcblx0Ly8g6L+U5Zueb2JqZWN0XHJcblx0cmV0dXJuIG9iamVjdDtcclxufVxyXG5cclxuLy8g5aSE55CGIHBhdGjvvIwgcGF0aOacieS4ieenjeW9ouW8j++8midhWzBdLmIuYyfjgIEnYS4wLmIuYycg5ZKMIFsnYScsJzAnLCdiJywnYydd77yM6ZyA6KaB57uf5LiA5aSE55CG5oiQ5pWw57uE77yM5L6/5LqO5ZCO57ut5L2/55SoXHJcbmZ1bmN0aW9uIF9iYXNlUGF0aChwYXRoKSB7XHJcblx0Ly8g6Iul5piv5pWw57uE77yM5YiZ55u05o6l6L+U5ZueXHJcblx0aWYgKEFycmF5LmlzQXJyYXkocGF0aCkpIHJldHVybiBwYXRoXHJcblx0Ly8g6Iul5pyJICdbJywnXSfvvIzliJnmm7/mjaLmiJDlsIYgJ1snIOabv+aNouaIkCAnLics5Y675o6JICddJ1xyXG5cdHJldHVybiBwYXRoLnJlcGxhY2UoL1xcWy9nLCAnLicpLnJlcGxhY2UoL1xcXS9nLCAnJykuc3BsaXQoJy4nKVxyXG59XHJcblxyXG4vKipcclxuICog5LuO5a+56LGh5Lit6I635Y+W5YC8XHJcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmplY3Qg5rqQ5pWw5o2uXHJcbiAqIEBwYXJhbSB7U3RyaW5nfCBBcnJheX0gcGF0aCAnYS5iLmMnIOaIliBbJ2EnLDAsJ2InLCdjJ11cclxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRWYWwg5aaC5p6c5peg5rOV5LuO6LCD55So6ZO+5Lit6I635Y+W5YC855qE6buY6K6k5YC8XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb2JqR2V0ID0gKG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbCA9ICd1bmRlZmluZWQnKSA9PiB7XHJcblx0Ly8g5YWI5bCGcGF0aOWkhOeQhuaIkOe7n+S4gOagvOW8j1xyXG5cdGxldCBuZXdQYXRoID0gX2Jhc2VQYXRoKHBhdGgpXHJcblx0Ly8g6YCS5b2S5aSE55CG77yM6L+U5Zue5pyA5ZCO57uT5p6cXHJcblx0bGV0IHZhbCA9IG5ld1BhdGgucmVkdWNlKChvLCBrKSA9PiB7XHJcblx0XHRyZXR1cm4gKG8gfHwge30pW2tdXHJcblx0fSwgb2JqZWN0KTtcclxuXHRyZXR1cm4gIXZhbCB8fCB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA6IGRlZmF1bHRWYWxcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLogbnVtYmVyIOexu+WeiyBcclxuICogQHBhcmFtIHthbnl9IG51bSDpnIDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybiB7Qm9vbGVhbn0g5piv5ZCm5Li6IG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKG51bSkgPT4ge1xyXG5cdHJldHVybiAhaXNOYU4oTnVtYmVyKG51bSkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbkuLogYm9vbGVhbiDnsbvlnosgXHJcbiAqIEBwYXJhbSB7YW55fSBib29sIOmcgOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSDmmK/lkKbkuLogYm9vbGVhblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9IChib29sKSA9PiB7XHJcblx0cmV0dXJuICh0eXBlb2YgYm9vbCA9PT0gJ2Jvb2xlYW4nKVxyXG59XHJcbi8qKlxyXG4gKiDmmK/lkKbmnInlv4XloavlrZfmrrVcclxuICogQHBhcmFtIHtPYmplY3R9IHJ1bGVzIOinhOWImVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSDmmK/lkKbmnInlv4XloavlrZfmrrVcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1JlcXVpcmVkRmllbGQgPSAocnVsZXMpID0+IHtcclxuXHRsZXQgaXNOb0ZpZWxkID0gZmFsc2U7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgcnVsZURhdGEgPSBydWxlc1tpXTtcclxuXHRcdGlmIChydWxlRGF0YS5yZXF1aXJlZCkge1xyXG5cdFx0XHRpc05vRmllbGQgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGlzTm9GaWVsZDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDojrflj5bmlbDmja7nsbvlnotcclxuICogQHBhcmFtIHtBbnl9IG9iaiDpnIDopoHojrflj5bmlbDmja7nsbvlnovnmoTlgLxcclxuICovXHJcbmV4cG9ydCBjb25zdCB0eXBlID0gKG9iaikgPT4ge1xyXG5cdHZhciBjbGFzczJ0eXBlID0ge307XHJcblxyXG5cdC8vIOeUn+aIkGNsYXNzMnR5cGXmmKDlsIRcclxuXHRcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIikubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcblx0XHRjbGFzczJ0eXBlW1wiW29iamVjdCBcIiArIGl0ZW0gKyBcIl1cIl0gPSBpdGVtLnRvTG93ZXJDYXNlKCk7XHJcblx0fSlcclxuXHRpZiAob2JqID09IG51bGwpIHtcclxuXHRcdHJldHVybiBvYmogKyBcIlwiO1xyXG5cdH1cclxuXHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgP1xyXG5cdFx0Y2xhc3MydHlwZVtPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIiA6XHJcblx0XHR0eXBlb2Ygb2JqO1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5Lik5Liq5YC85piv5ZCm55u4562JXHJcbiAqIEBwYXJhbSB7YW55fSBhIOWAvCAgXHJcbiAqIEBwYXJhbSB7YW55fSBiIOWAvCAgXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOaYr+WQpuebuOetiVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzRXF1YWwgPSAoYSwgYikgPT4ge1xyXG5cdC8v5aaC5p6cYeWSjGLmnKzmnaXlsLHlhajnrYlcclxuXHRpZiAoYSA9PT0gYikge1xyXG5cdFx0Ly/liKTmlq3mmK/lkKbkuLow5ZKMLTBcclxuXHRcdHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcclxuXHR9XHJcblx0Ly/liKTmlq3mmK/lkKbkuLpudWxs5ZKMdW5kZWZpbmVkXHJcblx0aWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHtcclxuXHRcdHJldHVybiBhID09PSBiO1xyXG5cdH1cclxuXHQvL+aOpeS4i+adpeWIpOaWrWHlkoxi55qE5pWw5o2u57G75Z6LXHJcblx0dmFyIGNsYXNzTmFtZUEgPSB0b1N0cmluZy5jYWxsKGEpLFxyXG5cdFx0Y2xhc3NOYW1lQiA9IHRvU3RyaW5nLmNhbGwoYik7XHJcblx0Ly/lpoLmnpzmlbDmja7nsbvlnovkuI3nm7jnrYnvvIzliJnov5Tlm55mYWxzZVxyXG5cdGlmIChjbGFzc05hbWVBICE9PSBjbGFzc05hbWVCKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdC8v5aaC5p6c5pWw5o2u57G75Z6L55u4562J77yM5YaN5qC55o2u5LiN5ZCM5pWw5o2u57G75Z6L5YiG5Yir5Yik5patXHJcblx0c3dpdGNoIChjbGFzc05hbWVBKSB7XHJcblx0XHRjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOlxyXG5cdFx0Y2FzZSAnW29iamVjdCBTdHJpbmddJzpcclxuXHRcdFx0Ly/ov5vooYzlrZfnrKbkuLLovazmjaLmr5TovoNcclxuXHRcdFx0cmV0dXJuICcnICsgYSA9PT0gJycgKyBiO1xyXG5cdFx0Y2FzZSAnW29iamVjdCBOdW1iZXJdJzpcclxuXHRcdFx0Ly/ov5vooYzmlbDlrZfovazmjaLmr5TovoMs5Yik5pat5piv5ZCm5Li6TmFOXHJcblx0XHRcdGlmICgrYSAhPT0gK2EpIHtcclxuXHRcdFx0XHRyZXR1cm4gK2IgIT09ICtiO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8v5Yik5pat5piv5ZCm5Li6MOaIli0wXHJcblx0XHRcdHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XHJcblx0XHRjYXNlICdbb2JqZWN0IERhdGVdJzpcclxuXHRcdGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxyXG5cdFx0XHRyZXR1cm4gK2EgPT09ICtiO1xyXG5cdH1cclxuXHQvL+WmguaenOaYr+Wvueixoeexu+Wei1xyXG5cdGlmIChjbGFzc05hbWVBID09ICdbb2JqZWN0IE9iamVjdF0nKSB7XHJcblx0XHQvL+iOt+WPlmHlkoxi55qE5bGe5oCn6ZW/5bqmXHJcblx0XHR2YXIgcHJvcHNBID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSksXHJcblx0XHRcdHByb3BzQiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpO1xyXG5cdFx0aWYgKHByb3BzQS5sZW5ndGggIT0gcHJvcHNCLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzQS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgcHJvcE5hbWUgPSBwcm9wc0FbaV07XHJcblx0XHRcdC8v5aaC5p6c5a+55bqU5bGe5oCn5a+55bqU5YC85LiN55u4562J77yM5YiZ6L+U5ZueZmFsc2VcclxuXHRcdFx0aWYgKGFbcHJvcE5hbWVdICE9PSBiW3Byb3BOYW1lXSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdC8v5aaC5p6c5piv5pWw57uE57G75Z6LXHJcblx0aWYgKGNsYXNzTmFtZUEgPT0gJ1tvYmplY3QgQXJyYXldJykge1xyXG5cdFx0aWYgKGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCkpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 29 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 30 */
/*!****************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_forms_item_vue_vue_type_template_id_61dfc0d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-forms-item.vue?vue&type=template&id=61dfc0d0& */ 31);\n/* harmony import */ var _uni_forms_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-forms-item.vue?vue&type=script&lang=js& */ 33);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_forms_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_forms_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_forms_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_forms_item_vue_vue_type_template_id_61dfc0d0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_forms_item_vue_vue_type_template_id_61dfc0d0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_forms_item_vue_vue_type_template_id_61dfc0d0___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQzZNO0FBQzdNLGdCQUFnQixxTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1mb3Jtcy1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MWRmYzBkMCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1mb3Jtcy1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWZvcm1zLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLWZvcm1zL2NvbXBvbmVudHMvdW5pLWZvcm1zLWl0ZW0vdW5pLWZvcm1zLWl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!***********************************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue?vue&type=template&id=61dfc0d0& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_template_id_61dfc0d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-forms-item.vue?vue&type=template&id=61dfc0d0& */ 32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_template_id_61dfc0d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_template_id_61dfc0d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_template_id_61dfc0d0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_template_id_61dfc0d0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 32 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue?vue&type=template&id=61dfc0d0& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "uni-forms-item"),
      class: _vm._$s(0, "c", [
        "is-direction-" + _vm.localLabelPos,
        _vm.border ? "uni-forms-item--border" : "",
        _vm.border && _vm.isFirstBorder ? "is-first-border" : "",
      ]),
      attrs: { _i: 0 },
    },
    [
      _vm._t(
        "label",
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "uni-forms-item__label"),
              class: _vm._$s(2, "c", {
                "no-label": !_vm.label && !_vm.required,
              }),
              style: _vm._$s(2, "s", {
                width: _vm.localLabelWidth,
                justifyContent: _vm.localLabelAlign,
              }),
              attrs: { _i: 2 },
            },
            [
              _vm._$s(3, "i", _vm.required)
                ? _c("text", {
                    staticClass: _vm._$s(3, "sc", "is-required"),
                    attrs: { _i: 3 },
                  })
                : _vm._e(),
              _c("text", [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.label)))]),
            ]
          ),
        ],
        { _i: 1 }
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(5, "sc", "uni-forms-item__content"),
          attrs: { _i: 5 },
        },
        [
          _vm._t("default", null, { _i: 6 }),
          _c(
            "view",
            {
              staticClass: _vm._$s(7, "sc", "uni-forms-item__error"),
              class: _vm._$s(7, "c", { "msg--active": _vm.msg }),
              attrs: { _i: 7 },
            },
            [_c("text", [_vm._v(_vm._$s(8, "t0-0", _vm._s(_vm.msg)))])]
          ),
        ],
        2
      ),
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 33 */
/*!*****************************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-forms-item.vue?vue&type=script&lang=js& */ 34);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_forms_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlzQixDQUFnQixvdUJBQUcsRUFBQyIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWZvcm1zLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTEhRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1mb3Jtcy1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 16));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 18));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * uni-fomrs-item 表单子组件\n * @description uni-fomrs-item 表单子组件，提供了基础布局已经校验能力\n * @tutorial https://ext.dcloud.net.cn/plugin?id=2773\n * @property {Boolean} required 是否必填，左边显示红色\"*\"号\n * @property {String } \tlabel \t\t\t\t输入框左边的文字提示\n * @property {Number } \tlabelWidth \t\t\tlabel的宽度，单位px（默认65）\n * @property {String } \tlabelAlign = [left|center|right] label的文字对齐方式（默认left）\n * \t@value left\t\tlabel 左侧显示\n * \t@value center\tlabel 居中\n * \t@value right\tlabel 右侧对齐\n * @property {String } \terrorMessage \t\t显示的错误提示内容，如果为空字符串或者false，则不显示错误信息\n * @property {String } \tname \t\t\t\t表单域的属性名，在使用校验规则时必填\n * @property {String } \tleftIcon \t\t\t【1.4.0废弃】label左边的图标，限 uni-ui 的图标名称\n * @property {String } \ticonColor \t\t【1.4.0废弃】左边通过icon配置的图标的颜色（默认#606266）\n * @property {String} validateTrigger = [bind|submit|blur]\t【1.4.0废弃】校验触发器方式 默认 submit\n * \t@value bind \t发生变化时触发\n * \t@value submit 提交时触发\n * \t@value blur \t失去焦点触发\n * @property {String } \tlabelPosition = [top|left] 【1.4.0废弃】label的文字的位置（默认left）\n * \t@value top\t顶部显示 label\n * \t@value left\t左侧显示 label\n */\nvar _default2 = {\n  name: 'uniFormsItem',\n  options: {\n    virtualHost: true\n  },\n  provide: function provide() {\n    return {\n      uniFormItem: this\n    };\n  },\n  inject: {\n    form: {\n      from: 'uniForm',\n      default: null\n    }\n  },\n  props: {\n    // 表单校验规则\n    rules: {\n      type: Array,\n      default: function _default() {\n        return null;\n      }\n    },\n    // 表单域的属性名，在使用校验规则时必填\n    name: {\n      type: [String, Array],\n      default: ''\n    },\n    required: {\n      type: Boolean,\n      default: false\n    },\n    label: {\n      type: String,\n      default: ''\n    },\n    // label的宽度 ，默认 80\n    labelWidth: {\n      type: [String, Number],\n      default: ''\n    },\n    // label 居中方式，默认 left 取值 left/center/right\n    labelAlign: {\n      type: String,\n      default: ''\n    },\n    // 强制显示错误信息\n    errorMessage: {\n      type: [String, Boolean],\n      default: ''\n    },\n    // 1.4.0 弃用，统一使用 form 的校验时机\n    // validateTrigger: {\n    // \ttype: String,\n    // \tdefault: ''\n    // },\n    // 1.4.0 弃用，统一使用 form 的label 位置\n    // labelPosition: {\n    // \ttype: String,\n    // \tdefault: ''\n    // },\n    // 1.4.0 以下属性已经废弃，请使用  #label 插槽代替\n    leftIcon: String,\n    iconColor: {\n      type: String,\n      default: '#606266'\n    }\n  },\n  data: function data() {\n    return {\n      errMsg: '',\n      userRules: null,\n      localLabelAlign: 'left',\n      localLabelWidth: '65px',\n      localLabelPos: 'left',\n      border: false,\n      isFirstBorder: false\n    };\n  },\n  computed: {\n    // 处理错误信息\n    msg: function msg() {\n      return this.errorMessage || this.errMsg;\n    }\n  },\n  watch: {\n    // 规则发生变化通知子组件更新\n    'form.formRules': function formFormRules(val) {\n      // TODO 处理头条vue3 watch不生效的问题\n\n      this.init();\n    },\n    'form.labelWidth': function formLabelWidth(val) {\n      // 宽度\n      this.localLabelWidth = this._labelWidthUnit(val);\n    },\n    'form.labelPosition': function formLabelPosition(val) {\n      // 标签位置\n      this.localLabelPos = this._labelPosition();\n    },\n    'form.labelAlign': function formLabelAlign(val) {}\n  },\n  created: function created() {\n    var _this = this;\n    this.init(true);\n    if (this.name && this.form) {\n      // TODO 处理头条vue3 watch不生效的问题\n\n      // 监听变化\n      this.$watch(function () {\n        var val = _this.form._getDataValue(_this.name, _this.form.localData);\n        return val;\n      }, function (value, oldVal) {\n        var isEqual = _this.form._isEqual(value, oldVal);\n        // 简单判断前后值的变化，只有发生变化才会发生校验\n        // TODO  如果 oldVal = undefined ，那么大概率是源数据里没有值导致 ，这个情况不哦校验 ,可能不严谨 ，需要在做观察\n        // fix by mehaotian 暂时取消 && oldVal !== undefined ，如果formData 中不存在，可能会不校验\n        if (!isEqual) {\n          var val = _this.itemSetValue(value);\n          _this.onFieldChange(val, false);\n        }\n      }, {\n        immediate: false\n      });\n    }\n  },\n  destroyed: function destroyed() {\n    if (this.__isUnmounted) return;\n    this.unInit();\n  },\n  methods: {\n    /**\n     * 外部调用方法\n     * 设置规则 ，主要用于小程序自定义检验规则\n     * @param {Array} rules 规则源数据\n     */\n    setRules: function setRules() {\n      var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.userRules = rules;\n      this.init(false);\n    },\n    // 兼容老版本表单组件\n    setValue: function setValue() {\n      // console.log('setValue 方法已经弃用，请使用最新版本的 uni-forms 表单组件以及其他关联组件。');\n    },\n    /**\n     * 外部调用方法\n     * 校验数据\n     * @param {any} value 需要校验的数据\n     * @param {boolean} 是否立即校验\n     * @return {Array|null} 校验内容\n     */\n    onFieldChange: function onFieldChange(value) {\n      var _arguments = arguments,\n        _this2 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var formtrigger, _this2$form, formData, localData, errShowType, validateCheck, validateTrigger, _isRequiredField, _realName, name, ruleLen, isRequiredField, result;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                formtrigger = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : true;\n                _this2$form = _this2.form, formData = _this2$form.formData, localData = _this2$form.localData, errShowType = _this2$form.errShowType, validateCheck = _this2$form.validateCheck, validateTrigger = _this2$form.validateTrigger, _isRequiredField = _this2$form._isRequiredField, _realName = _this2$form._realName;\n                name = _realName(_this2.name);\n                if (!value) {\n                  value = _this2.form.formData[name];\n                }\n                // fixd by mehaotian 不在校验前清空信息，解决闪屏的问题\n                // this.errMsg = '';\n\n                // fix by mehaotian 解决没有检验规则的情况下，抛出错误的问题\n                ruleLen = _this2.itemRules.rules && _this2.itemRules.rules.length;\n                if (!(!_this2.validator || !ruleLen || ruleLen === 0)) {\n                  _context.next = 7;\n                  break;\n                }\n                return _context.abrupt(\"return\");\n              case 7:\n                // 检验时机\n                // let trigger = this.isTrigger(this.itemRules.validateTrigger, this.validateTrigger, validateTrigger);\n                isRequiredField = _isRequiredField(_this2.itemRules.rules || []);\n                result = null; // 只有等于 bind 时 ，才能开启时实校验\n                if (!(validateTrigger === 'bind' || formtrigger)) {\n                  _context.next = 18;\n                  break;\n                }\n                _context.next = 12;\n                return _this2.validator.validateUpdate((0, _defineProperty2.default)({}, name, value), formData);\n              case 12:\n                result = _context.sent;\n                // 判断是否必填,非必填，不填不校验，填写才校验 ,暂时只处理 undefined  和空的情况\n                if (!isRequiredField && (value === undefined || value === '')) {\n                  result = null;\n                }\n\n                // 判断错误信息显示类型\n                if (result && result.errorMessage) {\n                  if (errShowType === 'undertext') {\n                    // 获取错误信息\n                    _this2.errMsg = !result ? '' : result.errorMessage;\n                  }\n                  if (errShowType === 'toast') {\n                    uni.showToast({\n                      title: result.errorMessage || '校验错误',\n                      icon: 'none'\n                    });\n                  }\n                  if (errShowType === 'modal') {\n                    uni.showModal({\n                      title: '提示',\n                      content: result.errorMessage || '校验错误'\n                    });\n                  }\n                } else {\n                  _this2.errMsg = '';\n                }\n                // 通知 form 组件更新事件\n                validateCheck(result ? result : null);\n                _context.next = 19;\n                break;\n              case 18:\n                _this2.errMsg = '';\n              case 19:\n                return _context.abrupt(\"return\", result ? result : null);\n              case 20:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    /**\n     * 初始组件数据\n     */\n    init: function init() {\n      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var _ref = this.form || {},\n        validator = _ref.validator,\n        formRules = _ref.formRules,\n        childrens = _ref.childrens,\n        formData = _ref.formData,\n        localData = _ref.localData,\n        _realName = _ref._realName,\n        labelWidth = _ref.labelWidth,\n        _getDataValue = _ref._getDataValue,\n        _setDataValue = _ref._setDataValue;\n      // 对齐方式\n      this.localLabelAlign = this._justifyContent();\n      // 宽度\n      this.localLabelWidth = this._labelWidthUnit(labelWidth);\n      // 标签位置\n      this.localLabelPos = this._labelPosition();\n      // 将需要校验的子组件加入form 队列\n      this.form && type && childrens.push(this);\n      if (!validator || !formRules) return;\n      // 判断第一个 item\n      if (!this.form.isFirstBorder) {\n        this.form.isFirstBorder = true;\n        this.isFirstBorder = true;\n      }\n\n      // 判断 group 里的第一个 item\n      if (this.group) {\n        if (!this.group.isFirstBorder) {\n          this.group.isFirstBorder = true;\n          this.isFirstBorder = true;\n        }\n      }\n      this.border = this.form.border;\n      // 获取子域的真实名称\n      var name = _realName(this.name);\n      var itemRule = this.userRules || this.rules;\n      if ((0, _typeof2.default)(formRules) === 'object' && itemRule) {\n        // 子规则替换父规则\n        formRules[name] = {\n          rules: itemRule\n        };\n        validator.updateSchema(formRules);\n      }\n      // 注册校验规则\n      var itemRules = formRules[name] || {};\n      this.itemRules = itemRules;\n      // 注册校验函数\n      this.validator = validator;\n      // 默认值赋予\n      this.itemSetValue(_getDataValue(this.name, localData));\n    },\n    unInit: function unInit() {\n      var _this3 = this;\n      if (this.form) {\n        var _this$form = this.form,\n          childrens = _this$form.childrens,\n          formData = _this$form.formData,\n          _realName = _this$form._realName;\n        childrens.forEach(function (item, index) {\n          if (item === _this3) {\n            _this3.form.childrens.splice(index, 1);\n            delete formData[_realName(item.name)];\n          }\n        });\n      }\n    },\n    // 设置item 的值\n    itemSetValue: function itemSetValue(value) {\n      var name = this.form._realName(this.name);\n      var rules = this.itemRules.rules || [];\n      var val = this.form._getValue(name, value, rules);\n      this.form._setDataValue(name, this.form.formData, val);\n      return val;\n    },\n    /**\n     * 移除该表单项的校验结果\n     */\n    clearValidate: function clearValidate() {\n      this.errMsg = '';\n    },\n    // 是否显示星号\n    _isRequired: function _isRequired() {\n      // TODO 不根据规则显示 星号，考虑后续兼容\n      // if (this.form) {\n      // \tif (this.form._isRequiredField(this.itemRules.rules || []) && this.required) {\n      // \t\treturn true\n      // \t}\n      // \treturn false\n      // }\n      return this.required;\n    },\n    // 处理对齐方式\n    _justifyContent: function _justifyContent() {\n      if (this.form) {\n        var labelAlign = this.form.labelAlign;\n        var labelAli = this.labelAlign ? this.labelAlign : labelAlign;\n        if (labelAli === 'left') return 'flex-start';\n        if (labelAli === 'center') return 'center';\n        if (labelAli === 'right') return 'flex-end';\n      }\n      return 'flex-start';\n    },\n    // 处理 label宽度单位 ,继承父元素的值\n    _labelWidthUnit: function _labelWidthUnit(labelWidth) {\n      // if (this.form) {\n      // \tconst {\n      // \t\tlabelWidth\n      // \t} = this.form\n      return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 65 : 'auto'));\n      // }\n      // return '65px'\n    },\n    // 处理 label 位置\n    _labelPosition: function _labelPosition() {\n      if (this.form) return this.form.labelPosition || 'left';\n      return 'left';\n    },\n    /**\n     * 触发时机\n     * @param {Object} rule 当前规则内时机\n     * @param {Object} itemRlue 当前组件时机\n     * @param {Object} parentRule 父组件时机\n     */\n    isTrigger: function isTrigger(rule, itemRlue, parentRule) {\n      //  bind  submit\n      if (rule === 'submit' || !rule) {\n        if (rule === undefined) {\n          if (itemRlue !== 'bind') {\n            if (!itemRlue) {\n              return parentRule === '' ? 'bind' : 'submit';\n            }\n            return 'submit';\n          }\n          return 'bind';\n        }\n        return 'submit';\n      }\n      return 'bind';\n    },\n    num2px: function num2px(num) {\n      if (typeof num === 'number') {\n        return \"\".concat(num, \"px\");\n      }\n      return num;\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWZvcm1zL2NvbXBvbmVudHMvdW5pLWZvcm1zLWl0ZW0vdW5pLWZvcm1zLWl0ZW0udnVlIl0sIm5hbWVzIjpbIm5hbWUiLCJvcHRpb25zIiwidmlydHVhbEhvc3QiLCJwcm92aWRlIiwidW5pRm9ybUl0ZW0iLCJpbmplY3QiLCJmb3JtIiwiZnJvbSIsImRlZmF1bHQiLCJwcm9wcyIsInJ1bGVzIiwidHlwZSIsInJlcXVpcmVkIiwibGFiZWwiLCJsYWJlbFdpZHRoIiwibGFiZWxBbGlnbiIsImVycm9yTWVzc2FnZSIsImxlZnRJY29uIiwiaWNvbkNvbG9yIiwiZGF0YSIsImVyck1zZyIsInVzZXJSdWxlcyIsImxvY2FsTGFiZWxBbGlnbiIsImxvY2FsTGFiZWxXaWR0aCIsImxvY2FsTGFiZWxQb3MiLCJib3JkZXIiLCJpc0ZpcnN0Qm9yZGVyIiwiY29tcHV0ZWQiLCJtc2ciLCJ3YXRjaCIsImNyZWF0ZWQiLCJpbW1lZGlhdGUiLCJkZXN0cm95ZWQiLCJtZXRob2RzIiwic2V0UnVsZXMiLCJzZXRWYWx1ZSIsIm9uRmllbGRDaGFuZ2UiLCJmb3JtdHJpZ2dlciIsImZvcm1EYXRhIiwibG9jYWxEYXRhIiwiZXJyU2hvd1R5cGUiLCJ2YWxpZGF0ZUNoZWNrIiwidmFsaWRhdGVUcmlnZ2VyIiwiX2lzUmVxdWlyZWRGaWVsZCIsIl9yZWFsTmFtZSIsInZhbHVlIiwicnVsZUxlbiIsImlzUmVxdWlyZWRGaWVsZCIsInJlc3VsdCIsInVuaSIsInRpdGxlIiwiaWNvbiIsImNvbnRlbnQiLCJpbml0IiwidmFsaWRhdG9yIiwiZm9ybVJ1bGVzIiwiY2hpbGRyZW5zIiwiX2dldERhdGFWYWx1ZSIsIl9zZXREYXRhVmFsdWUiLCJ1bkluaXQiLCJpdGVtU2V0VmFsdWUiLCJjbGVhclZhbGlkYXRlIiwiX2lzUmVxdWlyZWQiLCJfanVzdGlmeUNvbnRlbnQiLCJfbGFiZWxXaWR0aFVuaXQiLCJfbGFiZWxQb3NpdGlvbiIsImlzVHJpZ2dlciIsIm51bTJweCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkEsZ0JBd0JBO0VBQ0FBO0VBQ0FDO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUg7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBUjtNQUNBVztNQUNBSDtJQUNBO0lBQ0FJO01BQ0FEO01BQ0FIO0lBQ0E7SUFDQUs7TUFDQUY7TUFDQUg7SUFDQTtJQUNBO0lBQ0FNO01BQ0FIO01BQ0FIO0lBQ0E7SUFDQTtJQUNBTztNQUNBSjtNQUNBSDtJQUNBO0lBQ0E7SUFDQVE7TUFDQUw7TUFDQUg7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQVM7SUFDQUM7TUFDQVA7TUFDQUg7SUFDQTtFQUNBO0VBQ0FXO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO01BQ0E7O01BRUE7SUFFQTtJQUNBO01BQ0E7TUFDQTtJQUVBO0lBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQSxpREFFQTtFQUNBO0VBQ0FDO0lBQUE7SUFDQTtJQUNBO01BQ0E7O01BT0E7TUFDQSxZQUNBO1FBQ0E7UUFDQTtNQUNBLEdBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7UUFDQUM7TUFDQSxFQUNBO0lBQ0E7RUFFQTtFQUVBQztJQUNBO0lBQ0E7RUFDQTtFQVFBQztJQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFBQSxDQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFBQTtRQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBQztnQkFBQSxjQVNBLGFBUEFDLGlDQUNBQyxtQ0FDQUMsdUNBQ0FDLDJDQUNBQywrQ0FDQUMsaURBQ0FDO2dCQUVBNUM7Z0JBQ0E7a0JBQ0E2QztnQkFDQTtnQkFDQTtnQkFDQTs7Z0JBRUE7Z0JBQ0FDO2dCQUFBLE1BQ0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFFQTtnQkFDQTtnQkFDQUM7Z0JBQ0FDLGVBQ0E7Z0JBQUEsTUFDQU47a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQSxrRUFDQTFDLGNBRUFzQyxTQUNBO2NBQUE7Z0JBSkFVO2dCQU1BO2dCQUNBO2tCQUNBQTtnQkFDQTs7Z0JBRUE7Z0JBQ0E7a0JBQ0E7b0JBQ0E7b0JBQ0E7a0JBQ0E7a0JBQ0E7b0JBQ0FDO3NCQUNBQztzQkFDQUM7b0JBQ0E7a0JBQ0E7a0JBQ0E7b0JBQ0FGO3NCQUNBQztzQkFDQUU7b0JBQ0E7a0JBQ0E7Z0JBQ0E7a0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0FYO2dCQUFBO2dCQUFBO2NBQUE7Z0JBRUE7Y0FBQTtnQkFBQSxpQ0FFQU87Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBSztNQUFBO01BQ0EsV0FVQTtRQVRBQztRQUNBQztRQUNBQztRQUNBbEI7UUFDQUM7UUFDQUs7UUFDQTlCO1FBQ0EyQztRQUNBQztNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7UUFDQTtRQUNBO01BQ0E7O01BRUE7TUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQUg7VUFDQTdDO1FBQ0E7UUFDQTRDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FLO01BQUE7TUFDQTtRQUNBLGlCQUlBO1VBSEFIO1VBQ0FsQjtVQUNBTTtRQUVBWTtVQUNBO1lBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUk7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQTtBQUNBO0FBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO1FBQ0EsSUFDQWhELGFBQ0EsVUFEQUE7UUFFQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FpRDtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFFQTtJQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQTtVQUNBO1lBQ0E7Y0FDQTtZQUNBO1lBQ0E7VUFDQTtVQUNBO1FBQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktZm9ybXMtaXRlbVwiXHJcblx0XHQ6Y2xhc3M9XCJbJ2lzLWRpcmVjdGlvbi0nICsgbG9jYWxMYWJlbFBvcyAsYm9yZGVyPyd1bmktZm9ybXMtaXRlbS0tYm9yZGVyJzonJyAsYm9yZGVyICYmIGlzRmlyc3RCb3JkZXI/J2lzLWZpcnN0LWJvcmRlcic6JyddXCI+XHJcblx0XHQ8c2xvdCBuYW1lPVwibGFiZWxcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktZm9ybXMtaXRlbV9fbGFiZWxcIiA6Y2xhc3M9XCJ7J25vLWxhYmVsJzohbGFiZWwgJiYgIXJlcXVpcmVkfVwiXHJcblx0XHRcdFx0OnN0eWxlPVwie3dpZHRoOmxvY2FsTGFiZWxXaWR0aCxqdXN0aWZ5Q29udGVudDogbG9jYWxMYWJlbEFsaWdufVwiPlxyXG5cdFx0XHRcdDx0ZXh0IHYtaWY9XCJyZXF1aXJlZFwiIGNsYXNzPVwiaXMtcmVxdWlyZWRcIj4qPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0Pnt7bGFiZWx9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9zbG90PlxyXG5cdFx0PCEtLSAjaWZuZGVmIEFQUC1OVlVFIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktZm9ybXMtaXRlbV9fY29udGVudFwiPlxyXG5cdFx0XHQ8c2xvdD48L3Nsb3Q+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWZvcm1zLWl0ZW1fX2Vycm9yXCIgOmNsYXNzPVwieydtc2ctLWFjdGl2ZSc6bXNnfVwiPlxyXG5cdFx0XHRcdDx0ZXh0Pnt7bXNnfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0PCEtLSAjaWZkZWYgQVBQLU5WVUUgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1mb3Jtcy1pdGVtX19udXZlLWNvbnRlbnRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktZm9ybXMtaXRlbV9fY29udGVudFwiPlxyXG5cdFx0XHRcdDxzbG90Pjwvc2xvdD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1mb3Jtcy1pdGVtX19lcnJvclwiIDpjbGFzcz1cInsnbXNnLS1hY3RpdmUnOm1zZ31cIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImVycm9yLXRleHRcIj57e21zZ319PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8qKlxyXG5cdCAqIHVuaS1mb21ycy1pdGVtIOihqOWNleWtkOe7hOS7tlxyXG5cdCAqIEBkZXNjcmlwdGlvbiB1bmktZm9tcnMtaXRlbSDooajljZXlrZDnu4Tku7bvvIzmj5Dkvpvkuobln7rnoYDluIPlsYDlt7Lnu4/moKHpqozog73liptcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9Mjc3M1xyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcmVxdWlyZWQg5piv5ZCm5b+F5aGr77yM5bem6L655pi+56S657qi6ImyXCIqXCLlj7dcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB9IFx0bGFiZWwgXHRcdFx0XHTovpPlhaXmoYblt6bovrnnmoTmloflrZfmj5DnpLpcclxuXHQgKiBAcHJvcGVydHkge051bWJlciB9IFx0bGFiZWxXaWR0aCBcdFx0XHRsYWJlbOeahOWuveW6pu+8jOWNleS9jXB477yI6buY6K6kNjXvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB9IFx0bGFiZWxBbGlnbiA9IFtsZWZ0fGNlbnRlcnxyaWdodF0gbGFiZWznmoTmloflrZflr7npvZDmlrnlvI/vvIjpu5jorqRsZWZ077yJXHJcblx0ICogXHRAdmFsdWUgbGVmdFx0XHRsYWJlbCDlt6bkvqfmmL7npLpcclxuXHQgKiBcdEB2YWx1ZSBjZW50ZXJcdGxhYmVsIOWxheS4rVxyXG5cdCAqIFx0QHZhbHVlIHJpZ2h0XHRsYWJlbCDlj7Pkvqflr7npvZBcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB9IFx0ZXJyb3JNZXNzYWdlIFx0XHTmmL7npLrnmoTplJnor6/mj5DnpLrlhoXlrrnvvIzlpoLmnpzkuLrnqbrlrZfnrKbkuLLmiJbogIVmYWxzZe+8jOWImeS4jeaYvuekuumUmeivr+S/oeaBr1xyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIH0gXHRuYW1lIFx0XHRcdFx06KGo5Y2V5Z+f55qE5bGe5oCn5ZCN77yM5Zyo5L2/55So5qCh6aqM6KeE5YiZ5pe25b+F5aGrXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfSBcdGxlZnRJY29uIFx0XHRcdOOAkDEuNC4w5bqf5byD44CRbGFiZWzlt6bovrnnmoTlm77moIfvvIzpmZAgdW5pLXVpIOeahOWbvuagh+WQjeensFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIH0gXHRpY29uQ29sb3IgXHRcdOOAkDEuNC4w5bqf5byD44CR5bem6L656YCa6L+HaWNvbumFjee9rueahOWbvuagh+eahOminOiJsu+8iOm7mOiupCM2MDYyNjbvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdmFsaWRhdGVUcmlnZ2VyID0gW2JpbmR8c3VibWl0fGJsdXJdXHTjgJAxLjQuMOW6n+W8g+OAkeagoemqjOinpuWPkeWZqOaWueW8jyDpu5jorqQgc3VibWl0XHJcblx0ICogXHRAdmFsdWUgYmluZCBcdOWPkeeUn+WPmOWMluaXtuinpuWPkVxyXG5cdCAqIFx0QHZhbHVlIHN1Ym1pdCDmj5DkuqTml7bop6blj5FcclxuXHQgKiBcdEB2YWx1ZSBibHVyIFx05aSx5Y6754Sm54K56Kem5Y+RXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfSBcdGxhYmVsUG9zaXRpb24gPSBbdG9wfGxlZnRdIOOAkDEuNC4w5bqf5byD44CRbGFiZWznmoTmloflrZfnmoTkvY3nva7vvIjpu5jorqRsZWZ077yJXHJcblx0ICogXHRAdmFsdWUgdG9wXHTpobbpg6jmmL7npLogbGFiZWxcclxuXHQgKiBcdEB2YWx1ZSBsZWZ0XHTlt6bkvqfmmL7npLogbGFiZWxcclxuXHQgKi9cclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ3VuaUZvcm1zSXRlbScsXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHZpcnR1YWxIb3N0OiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0cHJvdmlkZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR1bmlGb3JtSXRlbTogdGhpc1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aW5qZWN0OiB7XHJcblx0XHRcdGZvcm06IHtcclxuXHRcdFx0XHRmcm9tOiAndW5pRm9ybScsXHJcblx0XHRcdFx0ZGVmYXVsdDogbnVsbFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdC8vIOihqOWNleagoemqjOinhOWImVxyXG5cdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDooajljZXln5/nmoTlsZ7mgKflkI3vvIzlnKjkvb/nlKjmoKHpqozop4TliJnml7blv4XloatcclxuXHRcdFx0bmFtZToge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXF1aXJlZDoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0bGFiZWw6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gbGFiZWznmoTlrr3luqYg77yM6buY6K6kIDgwXHJcblx0XHRcdGxhYmVsV2lkdGg6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIGxhYmVsIOWxheS4reaWueW8j++8jOm7mOiupCBsZWZ0IOWPluWAvCBsZWZ0L2NlbnRlci9yaWdodFxyXG5cdFx0XHRsYWJlbEFsaWduOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW8uuWItuaYvuekuumUmeivr+S/oeaBr1xyXG5cdFx0XHRlcnJvck1lc3NhZ2U6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyAxLjQuMCDlvIPnlKjvvIznu5/kuIDkvb/nlKggZm9ybSDnmoTmoKHpqozml7bmnLpcclxuXHRcdFx0Ly8gdmFsaWRhdGVUcmlnZ2VyOiB7XHJcblx0XHRcdC8vIFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHQvLyBcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdC8vIDEuNC4wIOW8g+eUqO+8jOe7n+S4gOS9v+eUqCBmb3JtIOeahGxhYmVsIOS9jee9rlxyXG5cdFx0XHQvLyBsYWJlbFBvc2l0aW9uOiB7XHJcblx0XHRcdC8vIFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHQvLyBcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdC8vIDEuNC4wIOS7peS4i+WxnuaAp+W3sue7j+W6n+W8g++8jOivt+S9v+eUqCAgI2xhYmVsIOaPkuanveS7o+abv1xyXG5cdFx0XHRsZWZ0SWNvbjogU3RyaW5nLFxyXG5cdFx0XHRpY29uQ29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyM2MDYyNjYnXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRlcnJNc2c6ICcnLFxyXG5cdFx0XHRcdHVzZXJSdWxlczogbnVsbCxcclxuXHRcdFx0XHRsb2NhbExhYmVsQWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRsb2NhbExhYmVsV2lkdGg6ICc2NXB4JyxcclxuXHRcdFx0XHRsb2NhbExhYmVsUG9zOiAnbGVmdCcsXHJcblx0XHRcdFx0Ym9yZGVyOiBmYWxzZSxcclxuXHRcdFx0XHRpc0ZpcnN0Qm9yZGVyOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQvLyDlpITnkIbplJnor6/kv6Hmga9cclxuXHRcdFx0bXNnKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmVycm9yTWVzc2FnZSB8fCB0aGlzLmVyck1zZztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdC8vIOinhOWImeWPkeeUn+WPmOWMlumAmuefpeWtkOe7hOS7tuabtOaWsFxyXG5cdFx0XHQnZm9ybS5mb3JtUnVsZXMnKHZhbCkge1xyXG5cdFx0XHRcdC8vIFRPRE8g5aSE55CG5aS05p2hdnVlMyB3YXRjaOS4jeeUn+aViOeahOmXrumimFxyXG5cdFx0XHRcdC8vICNpZm5kZWYgTVAtVE9VVElBT1xyXG5cdFx0XHRcdHRoaXMuaW5pdCgpXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdCdmb3JtLmxhYmVsV2lkdGgnKHZhbCkge1xyXG5cdFx0XHRcdC8vIOWuveW6plxyXG5cdFx0XHRcdHRoaXMubG9jYWxMYWJlbFdpZHRoID0gdGhpcy5fbGFiZWxXaWR0aFVuaXQodmFsKVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0J2Zvcm0ubGFiZWxQb3NpdGlvbicodmFsKSB7XHJcblx0XHRcdFx0Ly8g5qCH562+5L2N572uXHJcblx0XHRcdFx0dGhpcy5sb2NhbExhYmVsUG9zID0gdGhpcy5fbGFiZWxQb3NpdGlvbigpXHJcblx0XHRcdH0sXHJcblx0XHRcdCdmb3JtLmxhYmVsQWxpZ24nKHZhbCkge1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMuaW5pdCh0cnVlKVxyXG5cdFx0XHRpZiAodGhpcy5uYW1lICYmIHRoaXMuZm9ybSkge1xyXG5cdFx0XHRcdC8vIFRPRE8g5aSE55CG5aS05p2hdnVlMyB3YXRjaOS4jeeUn+aViOeahOmXrumimFxyXG5cdFx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXHJcblx0XHRcdFx0dGhpcy4kd2F0Y2goJ2Zvcm0uZm9ybVJ1bGVzJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5pbml0KClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHQvLyDnm5HlkKzlj5jljJZcclxuXHRcdFx0XHR0aGlzLiR3YXRjaChcclxuXHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdmFsID0gdGhpcy5mb3JtLl9nZXREYXRhVmFsdWUodGhpcy5uYW1lLCB0aGlzLmZvcm0ubG9jYWxEYXRhKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KHZhbHVlLCBvbGRWYWwpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgaXNFcXVhbCA9IHRoaXMuZm9ybS5faXNFcXVhbCh2YWx1ZSwgb2xkVmFsKVxyXG5cdFx0XHRcdFx0XHQvLyDnroDljZXliKTmlq3liY3lkI7lgLznmoTlj5jljJbvvIzlj6rmnInlj5HnlJ/lj5jljJbmiY3kvJrlj5HnlJ/moKHpqoxcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETyAg5aaC5p6cIG9sZFZhbCA9IHVuZGVmaW5lZCDvvIzpgqPkuYjlpKfmpoLnjofmmK/mupDmlbDmja7ph4zmsqHmnInlgLzlr7zoh7Qg77yM6L+Z5Liq5oOF5Ya15LiN5ZOm5qCh6aqMICzlj6/og73kuI3kuKXosKgg77yM6ZyA6KaB5Zyo5YGa6KeC5a+fXHJcblx0XHRcdFx0XHRcdC8vIGZpeCBieSBtZWhhb3RpYW4g5pqC5pe25Y+W5raIICYmIG9sZFZhbCAhPT0gdW5kZWZpbmVkIO+8jOWmguaenGZvcm1EYXRhIOS4reS4jeWtmOWcqO+8jOWPr+iDveS8muS4jeagoemqjFxyXG5cdFx0XHRcdFx0XHRpZiAoIWlzRXF1YWwpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB2YWwgPSB0aGlzLml0ZW1TZXRWYWx1ZSh2YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm9uRmllbGRDaGFuZ2UodmFsLCBmYWxzZSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHRpbW1lZGlhdGU6IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblx0XHQvLyAjaWZuZGVmIFZVRTNcclxuXHRcdGRlc3Ryb3llZCgpIHtcclxuXHRcdFx0aWYgKHRoaXMuX19pc1VubW91bnRlZCkgcmV0dXJuXHJcblx0XHRcdHRoaXMudW5Jbml0KClcclxuXHRcdH0sXHJcblx0XHQvLyAjZW5kaWZcclxuXHRcdC8vICNpZmRlZiBWVUUzXHJcblx0XHR1bm1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuX19pc1VubW91bnRlZCA9IHRydWVcclxuXHRcdFx0dGhpcy51bkluaXQoKVxyXG5cdFx0fSxcclxuXHRcdC8vICNlbmRpZlxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog5aSW6YOo6LCD55So5pa55rOVXHJcblx0XHRcdCAqIOiuvue9ruinhOWImSDvvIzkuLvopoHnlKjkuo7lsI/nqIvluo/oh6rlrprkuYnmo4Dpqozop4TliJlcclxuXHRcdFx0ICogQHBhcmFtIHtBcnJheX0gcnVsZXMg6KeE5YiZ5rqQ5pWw5o2uXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRzZXRSdWxlcyhydWxlcyA9IG51bGwpIHtcclxuXHRcdFx0XHR0aGlzLnVzZXJSdWxlcyA9IHJ1bGVzXHJcblx0XHRcdFx0dGhpcy5pbml0KGZhbHNlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlhbzlrrnogIHniYjmnKzooajljZXnu4Tku7ZcclxuXHRcdFx0c2V0VmFsdWUoKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3NldFZhbHVlIOaWueazleW3sue7j+W8g+eUqO+8jOivt+S9v+eUqOacgOaWsOeJiOacrOeahCB1bmktZm9ybXMg6KGo5Y2V57uE5Lu25Lul5Y+K5YW25LuW5YWz6IGU57uE5Lu244CCJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDlpJbpg6josIPnlKjmlrnms5VcclxuXHRcdFx0ICog5qCh6aqM5pWw5o2uXHJcblx0XHRcdCAqIEBwYXJhbSB7YW55fSB2YWx1ZSDpnIDopoHmoKHpqoznmoTmlbDmja5cclxuXHRcdFx0ICogQHBhcmFtIHtib29sZWFufSDmmK/lkKbnq4vljbPmoKHpqoxcclxuXHRcdFx0ICogQHJldHVybiB7QXJyYXl8bnVsbH0g5qCh6aqM5YaF5a65XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRhc3luYyBvbkZpZWxkQ2hhbmdlKHZhbHVlLCBmb3JtdHJpZ2dlciA9IHRydWUpIHtcclxuXHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHRmb3JtRGF0YSxcclxuXHRcdFx0XHRcdGxvY2FsRGF0YSxcclxuXHRcdFx0XHRcdGVyclNob3dUeXBlLFxyXG5cdFx0XHRcdFx0dmFsaWRhdGVDaGVjayxcclxuXHRcdFx0XHRcdHZhbGlkYXRlVHJpZ2dlcixcclxuXHRcdFx0XHRcdF9pc1JlcXVpcmVkRmllbGQsXHJcblx0XHRcdFx0XHRfcmVhbE5hbWVcclxuXHRcdFx0XHR9ID0gdGhpcy5mb3JtXHJcblx0XHRcdFx0Y29uc3QgbmFtZSA9IF9yZWFsTmFtZSh0aGlzLm5hbWUpXHJcblx0XHRcdFx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSB0aGlzLmZvcm0uZm9ybURhdGFbbmFtZV1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gZml4ZCBieSBtZWhhb3RpYW4g5LiN5Zyo5qCh6aqM5YmN5riF56m65L+h5oGv77yM6Kej5Yaz6Zeq5bGP55qE6Zeu6aKYXHJcblx0XHRcdFx0Ly8gdGhpcy5lcnJNc2cgPSAnJztcclxuXHJcblx0XHRcdFx0Ly8gZml4IGJ5IG1laGFvdGlhbiDop6PlhrPmsqHmnInmo4Dpqozop4TliJnnmoTmg4XlhrXkuIvvvIzmipvlh7rplJnor6/nmoTpl67pophcclxuXHRcdFx0XHRjb25zdCBydWxlTGVuID0gdGhpcy5pdGVtUnVsZXMucnVsZXMgJiYgdGhpcy5pdGVtUnVsZXMucnVsZXMubGVuZ3RoXHJcblx0XHRcdFx0aWYgKCF0aGlzLnZhbGlkYXRvciB8fCAhcnVsZUxlbiB8fCBydWxlTGVuID09PSAwKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdC8vIOajgOmqjOaXtuaculxyXG5cdFx0XHRcdC8vIGxldCB0cmlnZ2VyID0gdGhpcy5pc1RyaWdnZXIodGhpcy5pdGVtUnVsZXMudmFsaWRhdGVUcmlnZ2VyLCB0aGlzLnZhbGlkYXRlVHJpZ2dlciwgdmFsaWRhdGVUcmlnZ2VyKTtcclxuXHRcdFx0XHRjb25zdCBpc1JlcXVpcmVkRmllbGQgPSBfaXNSZXF1aXJlZEZpZWxkKHRoaXMuaXRlbVJ1bGVzLnJ1bGVzIHx8IFtdKTtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcclxuXHRcdFx0XHQvLyDlj6rmnInnrYnkuo4gYmluZCDml7Yg77yM5omN6IO95byA5ZCv5pe25a6e5qCh6aqMXHJcblx0XHRcdFx0aWYgKHZhbGlkYXRlVHJpZ2dlciA9PT0gJ2JpbmQnIHx8IGZvcm10cmlnZ2VyKSB7XHJcblx0XHRcdFx0XHQvLyDmoKHpqozlvZPliY3ooajljZXpoblcclxuXHRcdFx0XHRcdHJlc3VsdCA9IGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlVXBkYXRlKHtcclxuXHRcdFx0XHRcdFx0XHRbbmFtZV06IHZhbHVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZvcm1EYXRhXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdC8vIOWIpOaWreaYr+WQpuW/heWhqyzpnZ7lv4XloavvvIzkuI3loavkuI3moKHpqozvvIzloavlhpnmiY3moKHpqowgLOaaguaXtuWPquWkhOeQhiB1bmRlZmluZWQgIOWSjOepuueahOaDheWGtVxyXG5cdFx0XHRcdFx0aWYgKCFpc1JlcXVpcmVkRmllbGQgJiYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIOWIpOaWremUmeivr+S/oeaBr+aYvuekuuexu+Wei1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3JNZXNzYWdlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChlcnJTaG93VHlwZSA9PT0gJ3VuZGVydGV4dCcpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDojrflj5bplJnor6/kv6Hmga9cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmVyck1zZyA9ICFyZXN1bHQgPyAnJyA6IHJlc3VsdC5lcnJvck1lc3NhZ2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKGVyclNob3dUeXBlID09PSAndG9hc3QnKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmVycm9yTWVzc2FnZSB8fCAn5qCh6aqM6ZSZ6K+vJyxcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChlcnJTaG93VHlwZSA9PT0gJ21vZGFsJykge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzdWx0LmVycm9yTWVzc2FnZSB8fCAn5qCh6aqM6ZSZ6K+vJ1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmVyck1zZyA9ICcnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyDpgJrnn6UgZm9ybSDnu4Tku7bmm7TmlrDkuovku7ZcclxuXHRcdFx0XHRcdHZhbGlkYXRlQ2hlY2socmVzdWx0ID8gcmVzdWx0IDogbnVsbClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJNc2cgPSAnJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ID8gcmVzdWx0IDogbnVsbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOWIneWni+e7hOS7tuaVsOaNrlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0aW5pdCh0eXBlID0gZmFsc2UpIHtcclxuXHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHR2YWxpZGF0b3IsXHJcblx0XHRcdFx0XHRmb3JtUnVsZXMsXHJcblx0XHRcdFx0XHRjaGlsZHJlbnMsXHJcblx0XHRcdFx0XHRmb3JtRGF0YSxcclxuXHRcdFx0XHRcdGxvY2FsRGF0YSxcclxuXHRcdFx0XHRcdF9yZWFsTmFtZSxcclxuXHRcdFx0XHRcdGxhYmVsV2lkdGgsXHJcblx0XHRcdFx0XHRfZ2V0RGF0YVZhbHVlLFxyXG5cdFx0XHRcdFx0X3NldERhdGFWYWx1ZVxyXG5cdFx0XHRcdH0gPSB0aGlzLmZvcm0gfHwge31cclxuXHRcdFx0XHQvLyDlr7npvZDmlrnlvI9cclxuXHRcdFx0XHR0aGlzLmxvY2FsTGFiZWxBbGlnbiA9IHRoaXMuX2p1c3RpZnlDb250ZW50KClcclxuXHRcdFx0XHQvLyDlrr3luqZcclxuXHRcdFx0XHR0aGlzLmxvY2FsTGFiZWxXaWR0aCA9IHRoaXMuX2xhYmVsV2lkdGhVbml0KGxhYmVsV2lkdGgpXHJcblx0XHRcdFx0Ly8g5qCH562+5L2N572uXHJcblx0XHRcdFx0dGhpcy5sb2NhbExhYmVsUG9zID0gdGhpcy5fbGFiZWxQb3NpdGlvbigpXHJcblx0XHRcdFx0Ly8g5bCG6ZyA6KaB5qCh6aqM55qE5a2Q57uE5Lu25Yqg5YWlZm9ybSDpmJ/liJdcclxuXHRcdFx0XHR0aGlzLmZvcm0gJiYgdHlwZSAmJiBjaGlsZHJlbnMucHVzaCh0aGlzKVxyXG5cclxuXHRcdFx0XHRpZiAoIXZhbGlkYXRvciB8fCAhZm9ybVJ1bGVzKSByZXR1cm5cclxuXHRcdFx0XHQvLyDliKTmlq3nrKzkuIDkuKogaXRlbVxyXG5cdFx0XHRcdGlmICghdGhpcy5mb3JtLmlzRmlyc3RCb3JkZXIpIHtcclxuXHRcdFx0XHRcdHRoaXMuZm9ybS5pc0ZpcnN0Qm9yZGVyID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuaXNGaXJzdEJvcmRlciA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyDliKTmlq0gZ3JvdXAg6YeM55qE56ys5LiA5LiqIGl0ZW1cclxuXHRcdFx0XHRpZiAodGhpcy5ncm91cCkge1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmdyb3VwLmlzRmlyc3RCb3JkZXIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5ncm91cC5pc0ZpcnN0Qm9yZGVyID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc0ZpcnN0Qm9yZGVyID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5ib3JkZXIgPSB0aGlzLmZvcm0uYm9yZGVyO1xyXG5cdFx0XHRcdC8vIOiOt+WPluWtkOWfn+eahOecn+WunuWQjeensFxyXG5cdFx0XHRcdGNvbnN0IG5hbWUgPSBfcmVhbE5hbWUodGhpcy5uYW1lKVxyXG5cdFx0XHRcdGNvbnN0IGl0ZW1SdWxlID0gdGhpcy51c2VyUnVsZXMgfHwgdGhpcy5ydWxlc1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybVJ1bGVzID09PSAnb2JqZWN0JyAmJiBpdGVtUnVsZSkge1xyXG5cdFx0XHRcdFx0Ly8g5a2Q6KeE5YiZ5pu/5o2i54i26KeE5YiZXHJcblx0XHRcdFx0XHRmb3JtUnVsZXNbbmFtZV0gPSB7XHJcblx0XHRcdFx0XHRcdHJ1bGVzOiBpdGVtUnVsZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFsaWRhdG9yLnVwZGF0ZVNjaGVtYShmb3JtUnVsZXMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDms6jlhozmoKHpqozop4TliJlcclxuXHRcdFx0XHRjb25zdCBpdGVtUnVsZXMgPSBmb3JtUnVsZXNbbmFtZV0gfHwge31cclxuXHRcdFx0XHR0aGlzLml0ZW1SdWxlcyA9IGl0ZW1SdWxlc1xyXG5cdFx0XHRcdC8vIOazqOWGjOagoemqjOWHveaVsFxyXG5cdFx0XHRcdHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yXHJcblx0XHRcdFx0Ly8g6buY6K6k5YC86LWL5LqIXHJcblx0XHRcdFx0dGhpcy5pdGVtU2V0VmFsdWUoX2dldERhdGFWYWx1ZSh0aGlzLm5hbWUsIGxvY2FsRGF0YSkpXHJcblx0XHRcdH0sXHJcblx0XHRcdHVuSW5pdCgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5mb3JtKSB7XHJcblx0XHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHRcdGNoaWxkcmVucyxcclxuXHRcdFx0XHRcdFx0Zm9ybURhdGEsXHJcblx0XHRcdFx0XHRcdF9yZWFsTmFtZVxyXG5cdFx0XHRcdFx0fSA9IHRoaXMuZm9ybVxyXG5cdFx0XHRcdFx0Y2hpbGRyZW5zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtID09PSB0aGlzKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5mb3JtLmNoaWxkcmVucy5zcGxpY2UoaW5kZXgsIDEpXHJcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGZvcm1EYXRhW19yZWFsTmFtZShpdGVtLm5hbWUpXVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K6+572uaXRlbSDnmoTlgLxcclxuXHRcdFx0aXRlbVNldFZhbHVlKHZhbHVlKSB7XHJcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZm9ybS5fcmVhbE5hbWUodGhpcy5uYW1lKVxyXG5cdFx0XHRcdGNvbnN0IHJ1bGVzID0gdGhpcy5pdGVtUnVsZXMucnVsZXMgfHwgW11cclxuXHRcdFx0XHRjb25zdCB2YWwgPSB0aGlzLmZvcm0uX2dldFZhbHVlKG5hbWUsIHZhbHVlLCBydWxlcylcclxuXHRcdFx0XHR0aGlzLmZvcm0uX3NldERhdGFWYWx1ZShuYW1lLCB0aGlzLmZvcm0uZm9ybURhdGEsIHZhbClcclxuXHRcdFx0XHRyZXR1cm4gdmFsXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog56e76Zmk6K+l6KGo5Y2V6aG555qE5qCh6aqM57uT5p6cXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRjbGVhclZhbGlkYXRlKCkge1xyXG5cdFx0XHRcdHRoaXMuZXJyTXNnID0gJyc7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDmmK/lkKbmmL7npLrmmJ/lj7dcclxuXHRcdFx0X2lzUmVxdWlyZWQoKSB7XHJcblx0XHRcdFx0Ly8gVE9ETyDkuI3moLnmja7op4TliJnmmL7npLog5pif5Y+377yM6ICD6JmR5ZCO57ut5YW85a65XHJcblx0XHRcdFx0Ly8gaWYgKHRoaXMuZm9ybSkge1xyXG5cdFx0XHRcdC8vIFx0aWYgKHRoaXMuZm9ybS5faXNSZXF1aXJlZEZpZWxkKHRoaXMuaXRlbVJ1bGVzLnJ1bGVzIHx8IFtdKSAmJiB0aGlzLnJlcXVpcmVkKSB7XHJcblx0XHRcdFx0Ly8gXHRcdHJldHVybiB0cnVlXHJcblx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0Ly8gXHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucmVxdWlyZWRcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIOWkhOeQhuWvuem9kOaWueW8j1xyXG5cdFx0XHRfanVzdGlmeUNvbnRlbnQoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZm9ybSkge1xyXG5cdFx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0XHRsYWJlbEFsaWduXHJcblx0XHRcdFx0XHR9ID0gdGhpcy5mb3JtXHJcblx0XHRcdFx0XHRsZXQgbGFiZWxBbGkgPSB0aGlzLmxhYmVsQWxpZ24gPyB0aGlzLmxhYmVsQWxpZ24gOiBsYWJlbEFsaWduO1xyXG5cdFx0XHRcdFx0aWYgKGxhYmVsQWxpID09PSAnbGVmdCcpIHJldHVybiAnZmxleC1zdGFydCc7XHJcblx0XHRcdFx0XHRpZiAobGFiZWxBbGkgPT09ICdjZW50ZXInKSByZXR1cm4gJ2NlbnRlcic7XHJcblx0XHRcdFx0XHRpZiAobGFiZWxBbGkgPT09ICdyaWdodCcpIHJldHVybiAnZmxleC1lbmQnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gJ2ZsZXgtc3RhcnQnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlpITnkIYgbGFiZWzlrr3luqbljZXkvY0gLOe7p+aJv+eItuWFg+e0oOeahOWAvFxyXG5cdFx0XHRfbGFiZWxXaWR0aFVuaXQobGFiZWxXaWR0aCkge1xyXG5cclxuXHRcdFx0XHQvLyBpZiAodGhpcy5mb3JtKSB7XHJcblx0XHRcdFx0Ly8gXHRjb25zdCB7XHJcblx0XHRcdFx0Ly8gXHRcdGxhYmVsV2lkdGhcclxuXHRcdFx0XHQvLyBcdH0gPSB0aGlzLmZvcm1cclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW0ycHgodGhpcy5sYWJlbFdpZHRoID8gdGhpcy5sYWJlbFdpZHRoIDogKGxhYmVsV2lkdGggfHwgKHRoaXMubGFiZWwgPyA2NSA6ICdhdXRvJykpKVxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHQvLyByZXR1cm4gJzY1cHgnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWkhOeQhiBsYWJlbCDkvY3nva5cclxuXHRcdFx0X2xhYmVsUG9zaXRpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZm9ybSkgcmV0dXJuIHRoaXMuZm9ybS5sYWJlbFBvc2l0aW9uIHx8ICdsZWZ0J1xyXG5cdFx0XHRcdHJldHVybiAnbGVmdCdcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog6Kem5Y+R5pe25py6XHJcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBydWxlIOW9k+WJjeinhOWImeWGheaXtuaculxyXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gaXRlbVJsdWUg5b2T5YmN57uE5Lu25pe25py6XHJcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnRSdWxlIOeItue7hOS7tuaXtuaculxyXG5cdFx0XHQgKi9cclxuXHRcdFx0aXNUcmlnZ2VyKHJ1bGUsIGl0ZW1SbHVlLCBwYXJlbnRSdWxlKSB7XHJcblx0XHRcdFx0Ly8gIGJpbmQgIHN1Ym1pdFxyXG5cdFx0XHRcdGlmIChydWxlID09PSAnc3VibWl0JyB8fCAhcnVsZSkge1xyXG5cdFx0XHRcdFx0aWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbVJsdWUgIT09ICdiaW5kJykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICghaXRlbVJsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXJlbnRSdWxlID09PSAnJyA/ICdiaW5kJyA6ICdzdWJtaXQnO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ3N1Ym1pdCc7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuICdiaW5kJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAnc3VibWl0JztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuICdiaW5kJztcclxuXHRcdFx0fSxcclxuXHRcdFx0bnVtMnB4KG51bSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGAke251bX1weGBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG51bVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQudW5pLWZvcm1zLWl0ZW0ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0Ly8g5ZyoIG52dWUg5Lit77yM5L2/55SoIG1hcmdpbi1ib3R0b20gZXJyb3Ig5L+h5oGv5Lya6KKr6ZqQ6JePXHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjJweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjJweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcblx0XHQmX19sYWJlbCB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0Y29sb3I6ICM2MDYyNjY7XHJcblx0XHRcdGhlaWdodDogMzZweDtcclxuXHRcdFx0cGFkZGluZzogMCAxMnB4IDAgMDtcclxuXHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdFx0XHRmbGV4LXNocmluazogMDtcclxuXHRcdFx0LyogI2VuZGlmICovXHJcblxyXG5cdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFx0Ji5uby1sYWJlbCB7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCZfX2NvbnRlbnQge1xyXG5cdFx0XHQvKiAjaWZuZGVmIE1QLVRPVVRJQU8gKi9cclxuXHRcdFx0Ly8gZGlzcGxheTogZmxleDtcclxuXHRcdFx0Ly8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuXHRcdFx0LyogI2lmbmRlZiBBUFAgfHwgSDUgfHwgTVAtV0VJWElOIHx8IEFQUC1OVlVFICovXHJcblx0XHRcdC8vIFRPRE8g5Zug5Li65bCP56iL5bqP5bmz5Y+w5Lya5aSa5LiA5bGC5qCH562+6IqC54K5IO+8jOaJgOS7pemcgOimgeWcqOWkmuS9meiKgueCuee7p+aJv+W9k+WJjeagt+W8j1xyXG5cdFx0XHQmPnVuaS1lYXN5aW5wdXQsXHJcblx0XHRcdCY+dW5pLWRhdGEtcGlja2VyIHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyogI2VuZGlmICovXHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdCYgLnVuaS1mb3Jtcy1pdGVtX19udXZlLWNvbnRlbnQge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRmbGV4OiAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdCZfX2Vycm9yIHtcclxuXHRcdFx0Y29sb3I6ICNmNTZjNmM7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRcdHBhZGRpbmctdG9wOiA0cHg7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0XHR0b3A6IDEwMCU7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG5cdFx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0XHRcdGJvdHRvbTogNXB4O1xyXG5cdFx0XHQvKiAjZW5kaWYgKi9cclxuXHJcblx0XHRcdG9wYWNpdHk6IDA7XHJcblxyXG5cdFx0XHQuZXJyb3ItdGV4dCB7XHJcblx0XHRcdFx0Ly8g5Y+q5pyJIG52dWUg5LiL6L+Z5Liq5qC35byP5omN55Sf5pWIXHJcblx0XHRcdFx0Y29sb3I6ICNmNTZjNmM7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmLm1zZy0tYWN0aXZlIHtcclxuXHRcdFx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyDkvY3nva7kv67ppbDmoLflvI9cclxuXHRcdCYuaXMtZGlyZWN0aW9uLWxlZnQge1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0fVxyXG5cclxuXHRcdCYuaXMtZGlyZWN0aW9uLXRvcCB7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cdFx0XHQudW5pLWZvcm1zLWl0ZW1fX2xhYmVsIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAwIDAgOHB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU3MTU7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRcdFx0d2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcblx0XHRcdFx0LyogI2VuZGlmICovXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuaXMtcmVxdWlyZWQge1xyXG5cdFx0XHQvLyBjb2xvcjogJHVuaS1jb2xvci1lcnJvcjtcclxuXHRcdFx0Y29sb3I6ICNkZDUyNGQ7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdC51bmktZm9ybXMtaXRlbS0tYm9yZGVyIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRwYWRkaW5nOiAxMHB4IDA7XHJcblx0XHQvLyBwYWRkaW5nLWJvdHRvbTogMDtcclxuXHRcdGJvcmRlci10b3A6IDFweCAjZWVlIHNvbGlkO1xyXG5cclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdC51bmktZm9ybXMtaXRlbV9fY29udGVudCB7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG5cdFx0XHQudW5pLWZvcm1zLWl0ZW1fX2Vycm9yIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0dG9wOiA1cHg7XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cdFx0LnVuaS1mb3Jtcy1pdGVtX19lcnJvciB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0dG9wOiAwcHg7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAwO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogI2VuZGlmICovXHJcblxyXG5cdH1cclxuXHJcblx0LmlzLWZpcnN0LWJvcmRlciB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAwO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_data_select_vue_vue_type_template_id_6b64008e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-data-select.vue?vue&type=template&id=6b64008e& */ 36);\n/* harmony import */ var _uni_data_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-data-select.vue?vue&type=script&lang=js& */ 44);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_data_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_data_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_data_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_data_select_vue_vue_type_template_id_6b64008e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_data_select_vue_vue_type_template_id_6b64008e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_data_select_vue_vue_type_template_id_6b64008e___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQzZNO0FBQzdNLGdCQUFnQixxTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1kYXRhLXNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmI2NDAwOGUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktZGF0YS1zZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktZGF0YS1zZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLWRhdGEtc2VsZWN0L2NvbXBvbmVudHMvdW5pLWRhdGEtc2VsZWN0L3VuaS1kYXRhLXNlbGVjdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!*******************************************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue?vue&type=template&id=6b64008e& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_template_id_6b64008e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-data-select.vue?vue&type=template&id=6b64008e& */ 37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_template_id_6b64008e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_template_id_6b64008e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_template_id_6b64008e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_template_id_6b64008e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 37 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue?vue&type=template&id=6b64008e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons:
      __webpack_require__(/*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 38)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "uni-stat__select"), attrs: { _i: 0 } },
    [
      _vm._$s(1, "i", _vm.label)
        ? _c(
            "span",
            {
              staticClass: _vm._$s(1, "sc", "uni-label-text hide-on-phone"),
              attrs: { _i: 1 },
            },
            [_vm._v(_vm._$s(1, "t0-0", _vm._s(_vm.label + "：")))]
          )
        : _vm._e(),
      _c(
        "view",
        {
          staticClass: _vm._$s(2, "sc", "uni-stat-box"),
          class: _vm._$s(2, "c", { "uni-stat__actived": _vm.current }),
          attrs: { _i: 2 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(3, "sc", "uni-select"),
              class: _vm._$s(3, "c", { "uni-select--disabled": _vm.disabled }),
              attrs: { _i: 3 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(4, "sc", "uni-select__input-box"),
                  attrs: { _i: 4 },
                  on: { click: _vm.toggleSelector },
                },
                [
                  _vm._$s(5, "i", _vm.current)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            5,
                            "sc",
                            "uni-select__input-text"
                          ),
                          attrs: { _i: 5 },
                        },
                        [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.current)))]
                      )
                    : _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            6,
                            "sc",
                            "uni-select__input-text uni-select__input-placeholder"
                          ),
                          attrs: { _i: 6 },
                        },
                        [
                          _vm._v(
                            _vm._$s(6, "t0-0", _vm._s(_vm.typePlaceholder))
                          ),
                        ]
                      ),
                  _vm._$s(7, "i", _vm.current && _vm.clear && !_vm.disabled)
                    ? _c(
                        "view",
                        {
                          attrs: { _i: 7 },
                          on: {
                            click: function ($event) {
                              $event.stopPropagation()
                              return _vm.clearVal($event)
                            },
                          },
                        },
                        [
                          _c("uni-icons", {
                            attrs: {
                              type: "clear",
                              color: "#c0c4cc",
                              size: "24",
                              _i: 8,
                            },
                          }),
                        ],
                        1
                      )
                    : _c(
                        "view",
                        [
                          _c("uni-icons", {
                            attrs: {
                              type: _vm.showSelector ? "top" : "bottom",
                              size: "14",
                              color: "#999",
                              _i: 10,
                            },
                          }),
                        ],
                        1
                      ),
                ]
              ),
              _vm._$s(11, "i", _vm.showSelector)
                ? _c("view", {
                    staticClass: _vm._$s(11, "sc", "uni-select--mask"),
                    attrs: { _i: 11 },
                    on: { click: _vm.toggleSelector },
                  })
                : _vm._e(),
              _vm._$s(12, "i", _vm.showSelector)
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(12, "sc", "uni-select__selector"),
                      attrs: { _i: 12 },
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(13, "sc", "uni-popper__arrow"),
                        attrs: { _i: 13 },
                      }),
                      _c(
                        "scroll-view",
                        {
                          staticClass: _vm._$s(
                            14,
                            "sc",
                            "uni-select__selector-scroll"
                          ),
                          attrs: { _i: 14 },
                        },
                        [
                          _vm._$s(15, "i", _vm.mixinDatacomResData.length === 0)
                            ? _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    15,
                                    "sc",
                                    "uni-select__selector-empty"
                                  ),
                                  attrs: { _i: 15 },
                                },
                                [
                                  _c("text", [
                                    _vm._v(
                                      _vm._$s(16, "t0-0", _vm._s(_vm.emptyTips))
                                    ),
                                  ]),
                                ]
                              )
                            : _vm._l(
                                _vm._$s(17, "f", {
                                  forItems: _vm.mixinDatacomResData,
                                }),
                                function (item, index, $20, $30) {
                                  return _c(
                                    "view",
                                    {
                                      key: _vm._$s(17, "f", {
                                        forIndex: $20,
                                        key: index,
                                      }),
                                      staticClass: _vm._$s(
                                        "17-" + $30,
                                        "sc",
                                        "uni-select__selector-item"
                                      ),
                                      attrs: { _i: "17-" + $30 },
                                      on: {
                                        click: function ($event) {
                                          return _vm.change(item)
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "text",
                                        {
                                          class: _vm._$s("18-" + $30, "c", {
                                            "uni-select__selector__disabled":
                                              item.disable,
                                          }),
                                          attrs: { _i: "18-" + $30 },
                                        },
                                        [
                                          _vm._v(
                                            _vm._$s(
                                              "18-" + $30,
                                              "t0-0",
                                              _vm._s(_vm.formatItemName(item))
                                            )
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                }
                              ),
                        ],
                        2
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 38 */
/*!******************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-icons/components/uni-icons/uni-icons.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=template&id=a2e81f6e& */ 39);\n/* harmony import */ var _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=script&lang=js& */ 41);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-icons/components/uni-icons/uni-icons.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQzZNO0FBQzdNLGdCQUFnQixxTkFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTJlODFmNmUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLWljb25zL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!*************************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=template&id=a2e81f6e& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=template&id=a2e81f6e& */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_a2e81f6e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 40 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=template&id=a2e81f6e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("text", {
    staticClass: _vm._$s(0, "sc", "uni-icons"),
    class: _vm._$s(0, "c", [
      "uniui-" + _vm.type,
      _vm.customPrefix,
      _vm.customPrefix ? _vm.type : "",
    ]),
    style: _vm._$s(0, "s", { color: _vm.color, "font-size": _vm.iconSize }),
    attrs: { _i: 0 },
    on: { click: _vm._onClick },
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 41 */
/*!*******************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=script&lang=js& */ 42);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9zQixDQUFnQiwrdEJBQUcsRUFBQyIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/uni_modules/uni-icons/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _icons = _interopRequireDefault(__webpack_require__(/*! ./icons.js */ 43));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar getVal = function getVal(val) {\n  var reg = /^[0-9]*$/g;\n  return typeof val === 'number' || reg.test(val) ? val + 'px' : val;\n};\n\n/**\n * Icons 图标\n * @description 用于展示 icons 图标\n * @tutorial https://ext.dcloud.net.cn/plugin?id=28\n * @property {Number} size 图标大小\n * @property {String} type 图标图案，参考示例\n * @property {String} color 图标颜色\n * @property {String} customPrefix 自定义图标\n * @event {Function} click 点击 Icon 触发事件\n */\nvar _default = {\n  name: 'UniIcons',\n  emits: ['click'],\n  props: {\n    type: {\n      type: String,\n      default: ''\n    },\n    color: {\n      type: String,\n      default: '#333333'\n    },\n    size: {\n      type: [Number, String],\n      default: 16\n    },\n    customPrefix: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      icons: _icons.default.glyphs\n    };\n  },\n  computed: {\n    unicode: function unicode() {\n      var _this = this;\n      var code = this.icons.find(function (v) {\n        return v.font_class === _this.type;\n      });\n      if (code) {\n        return unescape(\"%u\".concat(code.unicode));\n      }\n      return '';\n    },\n    iconSize: function iconSize() {\n      return getVal(this.size);\n    }\n  },\n  methods: {\n    _onClick: function _onClick() {\n      this.$emit('click');\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWljb25zL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWUiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwicHJvcHMiLCJ0eXBlIiwiZGVmYXVsdCIsImNvbG9yIiwic2l6ZSIsImN1c3RvbVByZWZpeCIsImRhdGEiLCJpY29ucyIsImNvbXB1dGVkIiwidW5pY29kZSIsImljb25TaXplIiwibWV0aG9kcyIsIl9vbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7O0FBQ0E7RUFDQTtFQUNBO0FBQ0E7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQSxlQVVBO0VBQ0FBO0VBQ0FDO0VBQ0FDO0lBQ0FDO01BQ0FBO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0lBQ0FHO01BQ0FKO01BQ0FDO0lBQ0E7RUFDQTtFQUNBSTtJQUNBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUFBO01BQ0E7UUFBQTtNQUFBO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiNDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDwhLS0gI2lmZGVmIEFQUC1OVlVFIC0tPlxuXHQ8dGV4dCA6c3R5bGU9XCJ7IGNvbG9yOiBjb2xvciwgJ2ZvbnQtc2l6ZSc6IGljb25TaXplIH1cIiBjbGFzcz1cInVuaS1pY29uc1wiIEBjbGljaz1cIl9vbkNsaWNrXCI+e3t1bmljb2RlfX08L3RleHQ+XG5cdDwhLS0gI2VuZGlmIC0tPlxuXHQ8IS0tICNpZm5kZWYgQVBQLU5WVUUgLS0+XG5cdDx0ZXh0IDpzdHlsZT1cInsgY29sb3I6IGNvbG9yLCAnZm9udC1zaXplJzogaWNvblNpemUgfVwiIGNsYXNzPVwidW5pLWljb25zXCIgOmNsYXNzPVwiWyd1bml1aS0nK3R5cGUsY3VzdG9tUHJlZml4LGN1c3RvbVByZWZpeD90eXBlOicnXVwiIEBjbGljaz1cIl9vbkNsaWNrXCI+PC90ZXh0PlxuXHQ8IS0tICNlbmRpZiAtLT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGljb25zIGZyb20gJy4vaWNvbnMuanMnO1xuXHRjb25zdCBnZXRWYWwgPSAodmFsKSA9PiB7XG5cdFx0Y29uc3QgcmVnID0gL15bMC05XSokL2dcblx0XHRyZXR1cm4gKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx844CAcmVnLnRlc3QodmFsKSApPyB2YWwgKyAncHgnIDogdmFsO1xuXHR9IFxyXG5cdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdHZhciBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdGltcG9ydCBpY29uVXJsIGZyb20gJy4vdW5paWNvbnMudHRmJ1xyXG5cdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdCdmb250RmFtaWx5JzogXCJ1bmlpY29uc1wiLFxyXG5cdFx0J3NyYyc6IFwidXJsKCdcIitpY29uVXJsK1wiJylcIlxyXG5cdH0pO1xyXG5cdC8vICNlbmRpZlxyXG5cclxuXHQvKipcclxuXHQgKiBJY29ucyDlm77moIdcclxuXHQgKiBAZGVzY3JpcHRpb24g55So5LqO5bGV56S6IGljb25zIOWbvuagh1xyXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0yOFxyXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBzaXplIOWbvuagh+Wkp+Wwj1xyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlIOWbvuagh+WbvuahiO+8jOWPguiAg+ekuuS+i1xyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBjb2xvciDlm77moIfpopzoibJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGN1c3RvbVByZWZpeCDoh6rlrprkuYnlm77moIdcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2xpY2sg54K55Ye7IEljb24g6Kem5Y+R5LqL5Lu2XHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaUljb25zJyxcclxuXHRcdGVtaXRzOlsnY2xpY2snXSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHR5cGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyMzMzMzMzMnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDE2XHJcblx0XHRcdH0sXG5cdFx0XHRjdXN0b21QcmVmaXg6e1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpY29uczogaWNvbnMuZ2x5cGhzXHJcblx0XHRcdH1cclxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6e1xuXHRcdFx0dW5pY29kZSgpe1xuXHRcdFx0XHRsZXQgY29kZSA9IHRoaXMuaWNvbnMuZmluZCh2PT52LmZvbnRfY2xhc3MgPT09IHRoaXMudHlwZSlcblx0XHRcdFx0aWYoY29kZSl7XG5cdFx0XHRcdFx0cmV0dXJuIHVuZXNjYXBlKGAldSR7Y29kZS51bmljb2RlfWApXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICcnXG5cdFx0XHR9LFxuXHRcdFx0aWNvblNpemUoKXtcblx0XHRcdFx0cmV0dXJuIGdldFZhbCh0aGlzLnNpemUpXG5cdFx0XHR9XG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0X29uQ2xpY2soKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdEBpbXBvcnQgJy4vdW5paWNvbnMuY3NzJztcclxuXHRAZm9udC1mYWNlIHtcclxuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcclxuXHRcdHNyYzogdXJsKCcuL3VuaWljb25zLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xuXHQudW5pLWljb25zIHtcclxuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!*************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  \"id\": \"2852637\",\n  \"name\": \"uniui图标库\",\n  \"font_family\": \"uniicons\",\n  \"css_prefix_text\": \"uniui-\",\n  \"description\": \"\",\n  \"glyphs\": [{\n    \"icon_id\": \"25027049\",\n    \"name\": \"yanse\",\n    \"font_class\": \"color\",\n    \"unicode\": \"e6cf\",\n    \"unicode_decimal\": 59087\n  }, {\n    \"icon_id\": \"25027048\",\n    \"name\": \"wallet\",\n    \"font_class\": \"wallet\",\n    \"unicode\": \"e6b1\",\n    \"unicode_decimal\": 59057\n  }, {\n    \"icon_id\": \"25015720\",\n    \"name\": \"settings-filled\",\n    \"font_class\": \"settings-filled\",\n    \"unicode\": \"e6ce\",\n    \"unicode_decimal\": 59086\n  }, {\n    \"icon_id\": \"25015434\",\n    \"name\": \"shimingrenzheng-filled\",\n    \"font_class\": \"auth-filled\",\n    \"unicode\": \"e6cc\",\n    \"unicode_decimal\": 59084\n  }, {\n    \"icon_id\": \"24934246\",\n    \"name\": \"shop-filled\",\n    \"font_class\": \"shop-filled\",\n    \"unicode\": \"e6cd\",\n    \"unicode_decimal\": 59085\n  }, {\n    \"icon_id\": \"24934159\",\n    \"name\": \"staff-filled-01\",\n    \"font_class\": \"staff-filled\",\n    \"unicode\": \"e6cb\",\n    \"unicode_decimal\": 59083\n  }, {\n    \"icon_id\": \"24932461\",\n    \"name\": \"VIP-filled\",\n    \"font_class\": \"vip-filled\",\n    \"unicode\": \"e6c6\",\n    \"unicode_decimal\": 59078\n  }, {\n    \"icon_id\": \"24932462\",\n    \"name\": \"plus_circle_fill\",\n    \"font_class\": \"plus-filled\",\n    \"unicode\": \"e6c7\",\n    \"unicode_decimal\": 59079\n  }, {\n    \"icon_id\": \"24932463\",\n    \"name\": \"folder_add-filled\",\n    \"font_class\": \"folder-add-filled\",\n    \"unicode\": \"e6c8\",\n    \"unicode_decimal\": 59080\n  }, {\n    \"icon_id\": \"24932464\",\n    \"name\": \"yanse-filled\",\n    \"font_class\": \"color-filled\",\n    \"unicode\": \"e6c9\",\n    \"unicode_decimal\": 59081\n  }, {\n    \"icon_id\": \"24932465\",\n    \"name\": \"tune-filled\",\n    \"font_class\": \"tune-filled\",\n    \"unicode\": \"e6ca\",\n    \"unicode_decimal\": 59082\n  }, {\n    \"icon_id\": \"24932455\",\n    \"name\": \"a-rilidaka-filled\",\n    \"font_class\": \"calendar-filled\",\n    \"unicode\": \"e6c0\",\n    \"unicode_decimal\": 59072\n  }, {\n    \"icon_id\": \"24932456\",\n    \"name\": \"notification-filled\",\n    \"font_class\": \"notification-filled\",\n    \"unicode\": \"e6c1\",\n    \"unicode_decimal\": 59073\n  }, {\n    \"icon_id\": \"24932457\",\n    \"name\": \"wallet-filled\",\n    \"font_class\": \"wallet-filled\",\n    \"unicode\": \"e6c2\",\n    \"unicode_decimal\": 59074\n  }, {\n    \"icon_id\": \"24932458\",\n    \"name\": \"paihangbang-filled\",\n    \"font_class\": \"medal-filled\",\n    \"unicode\": \"e6c3\",\n    \"unicode_decimal\": 59075\n  }, {\n    \"icon_id\": \"24932459\",\n    \"name\": \"gift-filled\",\n    \"font_class\": \"gift-filled\",\n    \"unicode\": \"e6c4\",\n    \"unicode_decimal\": 59076\n  }, {\n    \"icon_id\": \"24932460\",\n    \"name\": \"fire-filled\",\n    \"font_class\": \"fire-filled\",\n    \"unicode\": \"e6c5\",\n    \"unicode_decimal\": 59077\n  }, {\n    \"icon_id\": \"24928001\",\n    \"name\": \"refreshempty\",\n    \"font_class\": \"refreshempty\",\n    \"unicode\": \"e6bf\",\n    \"unicode_decimal\": 59071\n  }, {\n    \"icon_id\": \"24926853\",\n    \"name\": \"location-ellipse\",\n    \"font_class\": \"location-filled\",\n    \"unicode\": \"e6af\",\n    \"unicode_decimal\": 59055\n  }, {\n    \"icon_id\": \"24926735\",\n    \"name\": \"person-filled\",\n    \"font_class\": \"person-filled\",\n    \"unicode\": \"e69d\",\n    \"unicode_decimal\": 59037\n  }, {\n    \"icon_id\": \"24926703\",\n    \"name\": \"personadd-filled\",\n    \"font_class\": \"personadd-filled\",\n    \"unicode\": \"e698\",\n    \"unicode_decimal\": 59032\n  }, {\n    \"icon_id\": \"24923351\",\n    \"name\": \"back\",\n    \"font_class\": \"back\",\n    \"unicode\": \"e6b9\",\n    \"unicode_decimal\": 59065\n  }, {\n    \"icon_id\": \"24923352\",\n    \"name\": \"forward\",\n    \"font_class\": \"forward\",\n    \"unicode\": \"e6ba\",\n    \"unicode_decimal\": 59066\n  }, {\n    \"icon_id\": \"24923353\",\n    \"name\": \"arrowthinright\",\n    \"font_class\": \"arrow-right\",\n    \"unicode\": \"e6bb\",\n    \"unicode_decimal\": 59067\n  }, {\n    \"icon_id\": \"24923353\",\n    \"name\": \"arrowthinright\",\n    \"font_class\": \"arrowthinright\",\n    \"unicode\": \"e6bb\",\n    \"unicode_decimal\": 59067\n  }, {\n    \"icon_id\": \"24923354\",\n    \"name\": \"arrowthinleft\",\n    \"font_class\": \"arrow-left\",\n    \"unicode\": \"e6bc\",\n    \"unicode_decimal\": 59068\n  }, {\n    \"icon_id\": \"24923354\",\n    \"name\": \"arrowthinleft\",\n    \"font_class\": \"arrowthinleft\",\n    \"unicode\": \"e6bc\",\n    \"unicode_decimal\": 59068\n  }, {\n    \"icon_id\": \"24923355\",\n    \"name\": \"arrowthinup\",\n    \"font_class\": \"arrow-up\",\n    \"unicode\": \"e6bd\",\n    \"unicode_decimal\": 59069\n  }, {\n    \"icon_id\": \"24923355\",\n    \"name\": \"arrowthinup\",\n    \"font_class\": \"arrowthinup\",\n    \"unicode\": \"e6bd\",\n    \"unicode_decimal\": 59069\n  }, {\n    \"icon_id\": \"24923356\",\n    \"name\": \"arrowthindown\",\n    \"font_class\": \"arrow-down\",\n    \"unicode\": \"e6be\",\n    \"unicode_decimal\": 59070\n  }, {\n    \"icon_id\": \"24923356\",\n    \"name\": \"arrowthindown\",\n    \"font_class\": \"arrowthindown\",\n    \"unicode\": \"e6be\",\n    \"unicode_decimal\": 59070\n  }, {\n    \"icon_id\": \"24923349\",\n    \"name\": \"arrowdown\",\n    \"font_class\": \"bottom\",\n    \"unicode\": \"e6b8\",\n    \"unicode_decimal\": 59064\n  }, {\n    \"icon_id\": \"24923349\",\n    \"name\": \"arrowdown\",\n    \"font_class\": \"arrowdown\",\n    \"unicode\": \"e6b8\",\n    \"unicode_decimal\": 59064\n  }, {\n    \"icon_id\": \"24923346\",\n    \"name\": \"arrowright\",\n    \"font_class\": \"right\",\n    \"unicode\": \"e6b5\",\n    \"unicode_decimal\": 59061\n  }, {\n    \"icon_id\": \"24923346\",\n    \"name\": \"arrowright\",\n    \"font_class\": \"arrowright\",\n    \"unicode\": \"e6b5\",\n    \"unicode_decimal\": 59061\n  }, {\n    \"icon_id\": \"24923347\",\n    \"name\": \"arrowup\",\n    \"font_class\": \"top\",\n    \"unicode\": \"e6b6\",\n    \"unicode_decimal\": 59062\n  }, {\n    \"icon_id\": \"24923347\",\n    \"name\": \"arrowup\",\n    \"font_class\": \"arrowup\",\n    \"unicode\": \"e6b6\",\n    \"unicode_decimal\": 59062\n  }, {\n    \"icon_id\": \"24923348\",\n    \"name\": \"arrowleft\",\n    \"font_class\": \"left\",\n    \"unicode\": \"e6b7\",\n    \"unicode_decimal\": 59063\n  }, {\n    \"icon_id\": \"24923348\",\n    \"name\": \"arrowleft\",\n    \"font_class\": \"arrowleft\",\n    \"unicode\": \"e6b7\",\n    \"unicode_decimal\": 59063\n  }, {\n    \"icon_id\": \"24923334\",\n    \"name\": \"eye\",\n    \"font_class\": \"eye\",\n    \"unicode\": \"e651\",\n    \"unicode_decimal\": 58961\n  }, {\n    \"icon_id\": \"24923335\",\n    \"name\": \"eye-filled\",\n    \"font_class\": \"eye-filled\",\n    \"unicode\": \"e66a\",\n    \"unicode_decimal\": 58986\n  }, {\n    \"icon_id\": \"24923336\",\n    \"name\": \"eye-slash\",\n    \"font_class\": \"eye-slash\",\n    \"unicode\": \"e6b3\",\n    \"unicode_decimal\": 59059\n  }, {\n    \"icon_id\": \"24923337\",\n    \"name\": \"eye-slash-filled\",\n    \"font_class\": \"eye-slash-filled\",\n    \"unicode\": \"e6b4\",\n    \"unicode_decimal\": 59060\n  }, {\n    \"icon_id\": \"24923305\",\n    \"name\": \"info-filled\",\n    \"font_class\": \"info-filled\",\n    \"unicode\": \"e649\",\n    \"unicode_decimal\": 58953\n  }, {\n    \"icon_id\": \"24923299\",\n    \"name\": \"reload-01\",\n    \"font_class\": \"reload\",\n    \"unicode\": \"e6b2\",\n    \"unicode_decimal\": 59058\n  }, {\n    \"icon_id\": \"24923195\",\n    \"name\": \"mic_slash_fill\",\n    \"font_class\": \"micoff-filled\",\n    \"unicode\": \"e6b0\",\n    \"unicode_decimal\": 59056\n  }, {\n    \"icon_id\": \"24923165\",\n    \"name\": \"map-pin-ellipse\",\n    \"font_class\": \"map-pin-ellipse\",\n    \"unicode\": \"e6ac\",\n    \"unicode_decimal\": 59052\n  }, {\n    \"icon_id\": \"24923166\",\n    \"name\": \"map-pin\",\n    \"font_class\": \"map-pin\",\n    \"unicode\": \"e6ad\",\n    \"unicode_decimal\": 59053\n  }, {\n    \"icon_id\": \"24923167\",\n    \"name\": \"location\",\n    \"font_class\": \"location\",\n    \"unicode\": \"e6ae\",\n    \"unicode_decimal\": 59054\n  }, {\n    \"icon_id\": \"24923064\",\n    \"name\": \"starhalf\",\n    \"font_class\": \"starhalf\",\n    \"unicode\": \"e683\",\n    \"unicode_decimal\": 59011\n  }, {\n    \"icon_id\": \"24923065\",\n    \"name\": \"star\",\n    \"font_class\": \"star\",\n    \"unicode\": \"e688\",\n    \"unicode_decimal\": 59016\n  }, {\n    \"icon_id\": \"24923066\",\n    \"name\": \"star-filled\",\n    \"font_class\": \"star-filled\",\n    \"unicode\": \"e68f\",\n    \"unicode_decimal\": 59023\n  }, {\n    \"icon_id\": \"24899646\",\n    \"name\": \"a-rilidaka\",\n    \"font_class\": \"calendar\",\n    \"unicode\": \"e6a0\",\n    \"unicode_decimal\": 59040\n  }, {\n    \"icon_id\": \"24899647\",\n    \"name\": \"fire\",\n    \"font_class\": \"fire\",\n    \"unicode\": \"e6a1\",\n    \"unicode_decimal\": 59041\n  }, {\n    \"icon_id\": \"24899648\",\n    \"name\": \"paihangbang\",\n    \"font_class\": \"medal\",\n    \"unicode\": \"e6a2\",\n    \"unicode_decimal\": 59042\n  }, {\n    \"icon_id\": \"24899649\",\n    \"name\": \"font\",\n    \"font_class\": \"font\",\n    \"unicode\": \"e6a3\",\n    \"unicode_decimal\": 59043\n  }, {\n    \"icon_id\": \"24899650\",\n    \"name\": \"gift\",\n    \"font_class\": \"gift\",\n    \"unicode\": \"e6a4\",\n    \"unicode_decimal\": 59044\n  }, {\n    \"icon_id\": \"24899651\",\n    \"name\": \"link\",\n    \"font_class\": \"link\",\n    \"unicode\": \"e6a5\",\n    \"unicode_decimal\": 59045\n  }, {\n    \"icon_id\": \"24899652\",\n    \"name\": \"notification\",\n    \"font_class\": \"notification\",\n    \"unicode\": \"e6a6\",\n    \"unicode_decimal\": 59046\n  }, {\n    \"icon_id\": \"24899653\",\n    \"name\": \"staff\",\n    \"font_class\": \"staff\",\n    \"unicode\": \"e6a7\",\n    \"unicode_decimal\": 59047\n  }, {\n    \"icon_id\": \"24899654\",\n    \"name\": \"VIP\",\n    \"font_class\": \"vip\",\n    \"unicode\": \"e6a8\",\n    \"unicode_decimal\": 59048\n  }, {\n    \"icon_id\": \"24899655\",\n    \"name\": \"folder_add\",\n    \"font_class\": \"folder-add\",\n    \"unicode\": \"e6a9\",\n    \"unicode_decimal\": 59049\n  }, {\n    \"icon_id\": \"24899656\",\n    \"name\": \"tune\",\n    \"font_class\": \"tune\",\n    \"unicode\": \"e6aa\",\n    \"unicode_decimal\": 59050\n  }, {\n    \"icon_id\": \"24899657\",\n    \"name\": \"shimingrenzheng\",\n    \"font_class\": \"auth\",\n    \"unicode\": \"e6ab\",\n    \"unicode_decimal\": 59051\n  }, {\n    \"icon_id\": \"24899565\",\n    \"name\": \"person\",\n    \"font_class\": \"person\",\n    \"unicode\": \"e699\",\n    \"unicode_decimal\": 59033\n  }, {\n    \"icon_id\": \"24899566\",\n    \"name\": \"email-filled\",\n    \"font_class\": \"email-filled\",\n    \"unicode\": \"e69a\",\n    \"unicode_decimal\": 59034\n  }, {\n    \"icon_id\": \"24899567\",\n    \"name\": \"phone-filled\",\n    \"font_class\": \"phone-filled\",\n    \"unicode\": \"e69b\",\n    \"unicode_decimal\": 59035\n  }, {\n    \"icon_id\": \"24899568\",\n    \"name\": \"phone\",\n    \"font_class\": \"phone\",\n    \"unicode\": \"e69c\",\n    \"unicode_decimal\": 59036\n  }, {\n    \"icon_id\": \"24899570\",\n    \"name\": \"email\",\n    \"font_class\": \"email\",\n    \"unicode\": \"e69e\",\n    \"unicode_decimal\": 59038\n  }, {\n    \"icon_id\": \"24899571\",\n    \"name\": \"personadd\",\n    \"font_class\": \"personadd\",\n    \"unicode\": \"e69f\",\n    \"unicode_decimal\": 59039\n  }, {\n    \"icon_id\": \"24899558\",\n    \"name\": \"chatboxes-filled\",\n    \"font_class\": \"chatboxes-filled\",\n    \"unicode\": \"e692\",\n    \"unicode_decimal\": 59026\n  }, {\n    \"icon_id\": \"24899559\",\n    \"name\": \"contact\",\n    \"font_class\": \"contact\",\n    \"unicode\": \"e693\",\n    \"unicode_decimal\": 59027\n  }, {\n    \"icon_id\": \"24899560\",\n    \"name\": \"chatbubble-filled\",\n    \"font_class\": \"chatbubble-filled\",\n    \"unicode\": \"e694\",\n    \"unicode_decimal\": 59028\n  }, {\n    \"icon_id\": \"24899561\",\n    \"name\": \"contact-filled\",\n    \"font_class\": \"contact-filled\",\n    \"unicode\": \"e695\",\n    \"unicode_decimal\": 59029\n  }, {\n    \"icon_id\": \"24899562\",\n    \"name\": \"chatboxes\",\n    \"font_class\": \"chatboxes\",\n    \"unicode\": \"e696\",\n    \"unicode_decimal\": 59030\n  }, {\n    \"icon_id\": \"24899563\",\n    \"name\": \"chatbubble\",\n    \"font_class\": \"chatbubble\",\n    \"unicode\": \"e697\",\n    \"unicode_decimal\": 59031\n  }, {\n    \"icon_id\": \"24881290\",\n    \"name\": \"upload-filled\",\n    \"font_class\": \"upload-filled\",\n    \"unicode\": \"e68e\",\n    \"unicode_decimal\": 59022\n  }, {\n    \"icon_id\": \"24881292\",\n    \"name\": \"upload\",\n    \"font_class\": \"upload\",\n    \"unicode\": \"e690\",\n    \"unicode_decimal\": 59024\n  }, {\n    \"icon_id\": \"24881293\",\n    \"name\": \"weixin\",\n    \"font_class\": \"weixin\",\n    \"unicode\": \"e691\",\n    \"unicode_decimal\": 59025\n  }, {\n    \"icon_id\": \"24881274\",\n    \"name\": \"compose\",\n    \"font_class\": \"compose\",\n    \"unicode\": \"e67f\",\n    \"unicode_decimal\": 59007\n  }, {\n    \"icon_id\": \"24881275\",\n    \"name\": \"qq\",\n    \"font_class\": \"qq\",\n    \"unicode\": \"e680\",\n    \"unicode_decimal\": 59008\n  }, {\n    \"icon_id\": \"24881276\",\n    \"name\": \"download-filled\",\n    \"font_class\": \"download-filled\",\n    \"unicode\": \"e681\",\n    \"unicode_decimal\": 59009\n  }, {\n    \"icon_id\": \"24881277\",\n    \"name\": \"pengyouquan\",\n    \"font_class\": \"pyq\",\n    \"unicode\": \"e682\",\n    \"unicode_decimal\": 59010\n  }, {\n    \"icon_id\": \"24881279\",\n    \"name\": \"sound\",\n    \"font_class\": \"sound\",\n    \"unicode\": \"e684\",\n    \"unicode_decimal\": 59012\n  }, {\n    \"icon_id\": \"24881280\",\n    \"name\": \"trash-filled\",\n    \"font_class\": \"trash-filled\",\n    \"unicode\": \"e685\",\n    \"unicode_decimal\": 59013\n  }, {\n    \"icon_id\": \"24881281\",\n    \"name\": \"sound-filled\",\n    \"font_class\": \"sound-filled\",\n    \"unicode\": \"e686\",\n    \"unicode_decimal\": 59014\n  }, {\n    \"icon_id\": \"24881282\",\n    \"name\": \"trash\",\n    \"font_class\": \"trash\",\n    \"unicode\": \"e687\",\n    \"unicode_decimal\": 59015\n  }, {\n    \"icon_id\": \"24881284\",\n    \"name\": \"videocam-filled\",\n    \"font_class\": \"videocam-filled\",\n    \"unicode\": \"e689\",\n    \"unicode_decimal\": 59017\n  }, {\n    \"icon_id\": \"24881285\",\n    \"name\": \"spinner-cycle\",\n    \"font_class\": \"spinner-cycle\",\n    \"unicode\": \"e68a\",\n    \"unicode_decimal\": 59018\n  }, {\n    \"icon_id\": \"24881286\",\n    \"name\": \"weibo\",\n    \"font_class\": \"weibo\",\n    \"unicode\": \"e68b\",\n    \"unicode_decimal\": 59019\n  }, {\n    \"icon_id\": \"24881288\",\n    \"name\": \"videocam\",\n    \"font_class\": \"videocam\",\n    \"unicode\": \"e68c\",\n    \"unicode_decimal\": 59020\n  }, {\n    \"icon_id\": \"24881289\",\n    \"name\": \"download\",\n    \"font_class\": \"download\",\n    \"unicode\": \"e68d\",\n    \"unicode_decimal\": 59021\n  }, {\n    \"icon_id\": \"24879601\",\n    \"name\": \"help\",\n    \"font_class\": \"help\",\n    \"unicode\": \"e679\",\n    \"unicode_decimal\": 59001\n  }, {\n    \"icon_id\": \"24879602\",\n    \"name\": \"navigate-filled\",\n    \"font_class\": \"navigate-filled\",\n    \"unicode\": \"e67a\",\n    \"unicode_decimal\": 59002\n  }, {\n    \"icon_id\": \"24879603\",\n    \"name\": \"plusempty\",\n    \"font_class\": \"plusempty\",\n    \"unicode\": \"e67b\",\n    \"unicode_decimal\": 59003\n  }, {\n    \"icon_id\": \"24879604\",\n    \"name\": \"smallcircle\",\n    \"font_class\": \"smallcircle\",\n    \"unicode\": \"e67c\",\n    \"unicode_decimal\": 59004\n  }, {\n    \"icon_id\": \"24879605\",\n    \"name\": \"minus-filled\",\n    \"font_class\": \"minus-filled\",\n    \"unicode\": \"e67d\",\n    \"unicode_decimal\": 59005\n  }, {\n    \"icon_id\": \"24879606\",\n    \"name\": \"micoff\",\n    \"font_class\": \"micoff\",\n    \"unicode\": \"e67e\",\n    \"unicode_decimal\": 59006\n  }, {\n    \"icon_id\": \"24879588\",\n    \"name\": \"closeempty\",\n    \"font_class\": \"closeempty\",\n    \"unicode\": \"e66c\",\n    \"unicode_decimal\": 58988\n  }, {\n    \"icon_id\": \"24879589\",\n    \"name\": \"clear\",\n    \"font_class\": \"clear\",\n    \"unicode\": \"e66d\",\n    \"unicode_decimal\": 58989\n  }, {\n    \"icon_id\": \"24879590\",\n    \"name\": \"navigate\",\n    \"font_class\": \"navigate\",\n    \"unicode\": \"e66e\",\n    \"unicode_decimal\": 58990\n  }, {\n    \"icon_id\": \"24879591\",\n    \"name\": \"minus\",\n    \"font_class\": \"minus\",\n    \"unicode\": \"e66f\",\n    \"unicode_decimal\": 58991\n  }, {\n    \"icon_id\": \"24879592\",\n    \"name\": \"image\",\n    \"font_class\": \"image\",\n    \"unicode\": \"e670\",\n    \"unicode_decimal\": 58992\n  }, {\n    \"icon_id\": \"24879593\",\n    \"name\": \"mic\",\n    \"font_class\": \"mic\",\n    \"unicode\": \"e671\",\n    \"unicode_decimal\": 58993\n  }, {\n    \"icon_id\": \"24879594\",\n    \"name\": \"paperplane\",\n    \"font_class\": \"paperplane\",\n    \"unicode\": \"e672\",\n    \"unicode_decimal\": 58994\n  }, {\n    \"icon_id\": \"24879595\",\n    \"name\": \"close\",\n    \"font_class\": \"close\",\n    \"unicode\": \"e673\",\n    \"unicode_decimal\": 58995\n  }, {\n    \"icon_id\": \"24879596\",\n    \"name\": \"help-filled\",\n    \"font_class\": \"help-filled\",\n    \"unicode\": \"e674\",\n    \"unicode_decimal\": 58996\n  }, {\n    \"icon_id\": \"24879597\",\n    \"name\": \"plus-filled\",\n    \"font_class\": \"paperplane-filled\",\n    \"unicode\": \"e675\",\n    \"unicode_decimal\": 58997\n  }, {\n    \"icon_id\": \"24879598\",\n    \"name\": \"plus\",\n    \"font_class\": \"plus\",\n    \"unicode\": \"e676\",\n    \"unicode_decimal\": 58998\n  }, {\n    \"icon_id\": \"24879599\",\n    \"name\": \"mic-filled\",\n    \"font_class\": \"mic-filled\",\n    \"unicode\": \"e677\",\n    \"unicode_decimal\": 58999\n  }, {\n    \"icon_id\": \"24879600\",\n    \"name\": \"image-filled\",\n    \"font_class\": \"image-filled\",\n    \"unicode\": \"e678\",\n    \"unicode_decimal\": 59000\n  }, {\n    \"icon_id\": \"24855900\",\n    \"name\": \"locked-filled\",\n    \"font_class\": \"locked-filled\",\n    \"unicode\": \"e668\",\n    \"unicode_decimal\": 58984\n  }, {\n    \"icon_id\": \"24855901\",\n    \"name\": \"info\",\n    \"font_class\": \"info\",\n    \"unicode\": \"e669\",\n    \"unicode_decimal\": 58985\n  }, {\n    \"icon_id\": \"24855903\",\n    \"name\": \"locked\",\n    \"font_class\": \"locked\",\n    \"unicode\": \"e66b\",\n    \"unicode_decimal\": 58987\n  }, {\n    \"icon_id\": \"24855884\",\n    \"name\": \"camera-filled\",\n    \"font_class\": \"camera-filled\",\n    \"unicode\": \"e658\",\n    \"unicode_decimal\": 58968\n  }, {\n    \"icon_id\": \"24855885\",\n    \"name\": \"chat-filled\",\n    \"font_class\": \"chat-filled\",\n    \"unicode\": \"e659\",\n    \"unicode_decimal\": 58969\n  }, {\n    \"icon_id\": \"24855886\",\n    \"name\": \"camera\",\n    \"font_class\": \"camera\",\n    \"unicode\": \"e65a\",\n    \"unicode_decimal\": 58970\n  }, {\n    \"icon_id\": \"24855887\",\n    \"name\": \"circle\",\n    \"font_class\": \"circle\",\n    \"unicode\": \"e65b\",\n    \"unicode_decimal\": 58971\n  }, {\n    \"icon_id\": \"24855888\",\n    \"name\": \"checkmarkempty\",\n    \"font_class\": \"checkmarkempty\",\n    \"unicode\": \"e65c\",\n    \"unicode_decimal\": 58972\n  }, {\n    \"icon_id\": \"24855889\",\n    \"name\": \"chat\",\n    \"font_class\": \"chat\",\n    \"unicode\": \"e65d\",\n    \"unicode_decimal\": 58973\n  }, {\n    \"icon_id\": \"24855890\",\n    \"name\": \"circle-filled\",\n    \"font_class\": \"circle-filled\",\n    \"unicode\": \"e65e\",\n    \"unicode_decimal\": 58974\n  }, {\n    \"icon_id\": \"24855891\",\n    \"name\": \"flag\",\n    \"font_class\": \"flag\",\n    \"unicode\": \"e65f\",\n    \"unicode_decimal\": 58975\n  }, {\n    \"icon_id\": \"24855892\",\n    \"name\": \"flag-filled\",\n    \"font_class\": \"flag-filled\",\n    \"unicode\": \"e660\",\n    \"unicode_decimal\": 58976\n  }, {\n    \"icon_id\": \"24855893\",\n    \"name\": \"gear-filled\",\n    \"font_class\": \"gear-filled\",\n    \"unicode\": \"e661\",\n    \"unicode_decimal\": 58977\n  }, {\n    \"icon_id\": \"24855894\",\n    \"name\": \"home\",\n    \"font_class\": \"home\",\n    \"unicode\": \"e662\",\n    \"unicode_decimal\": 58978\n  }, {\n    \"icon_id\": \"24855895\",\n    \"name\": \"home-filled\",\n    \"font_class\": \"home-filled\",\n    \"unicode\": \"e663\",\n    \"unicode_decimal\": 58979\n  }, {\n    \"icon_id\": \"24855896\",\n    \"name\": \"gear\",\n    \"font_class\": \"gear\",\n    \"unicode\": \"e664\",\n    \"unicode_decimal\": 58980\n  }, {\n    \"icon_id\": \"24855897\",\n    \"name\": \"smallcircle-filled\",\n    \"font_class\": \"smallcircle-filled\",\n    \"unicode\": \"e665\",\n    \"unicode_decimal\": 58981\n  }, {\n    \"icon_id\": \"24855898\",\n    \"name\": \"map-filled\",\n    \"font_class\": \"map-filled\",\n    \"unicode\": \"e666\",\n    \"unicode_decimal\": 58982\n  }, {\n    \"icon_id\": \"24855899\",\n    \"name\": \"map\",\n    \"font_class\": \"map\",\n    \"unicode\": \"e667\",\n    \"unicode_decimal\": 58983\n  }, {\n    \"icon_id\": \"24855825\",\n    \"name\": \"refresh-filled\",\n    \"font_class\": \"refresh-filled\",\n    \"unicode\": \"e656\",\n    \"unicode_decimal\": 58966\n  }, {\n    \"icon_id\": \"24855826\",\n    \"name\": \"refresh\",\n    \"font_class\": \"refresh\",\n    \"unicode\": \"e657\",\n    \"unicode_decimal\": 58967\n  }, {\n    \"icon_id\": \"24855808\",\n    \"name\": \"cloud-upload\",\n    \"font_class\": \"cloud-upload\",\n    \"unicode\": \"e645\",\n    \"unicode_decimal\": 58949\n  }, {\n    \"icon_id\": \"24855809\",\n    \"name\": \"cloud-download-filled\",\n    \"font_class\": \"cloud-download-filled\",\n    \"unicode\": \"e646\",\n    \"unicode_decimal\": 58950\n  }, {\n    \"icon_id\": \"24855810\",\n    \"name\": \"cloud-download\",\n    \"font_class\": \"cloud-download\",\n    \"unicode\": \"e647\",\n    \"unicode_decimal\": 58951\n  }, {\n    \"icon_id\": \"24855811\",\n    \"name\": \"cloud-upload-filled\",\n    \"font_class\": \"cloud-upload-filled\",\n    \"unicode\": \"e648\",\n    \"unicode_decimal\": 58952\n  }, {\n    \"icon_id\": \"24855813\",\n    \"name\": \"redo\",\n    \"font_class\": \"redo\",\n    \"unicode\": \"e64a\",\n    \"unicode_decimal\": 58954\n  }, {\n    \"icon_id\": \"24855814\",\n    \"name\": \"images-filled\",\n    \"font_class\": \"images-filled\",\n    \"unicode\": \"e64b\",\n    \"unicode_decimal\": 58955\n  }, {\n    \"icon_id\": \"24855815\",\n    \"name\": \"undo-filled\",\n    \"font_class\": \"undo-filled\",\n    \"unicode\": \"e64c\",\n    \"unicode_decimal\": 58956\n  }, {\n    \"icon_id\": \"24855816\",\n    \"name\": \"more\",\n    \"font_class\": \"more\",\n    \"unicode\": \"e64d\",\n    \"unicode_decimal\": 58957\n  }, {\n    \"icon_id\": \"24855817\",\n    \"name\": \"more-filled\",\n    \"font_class\": \"more-filled\",\n    \"unicode\": \"e64e\",\n    \"unicode_decimal\": 58958\n  }, {\n    \"icon_id\": \"24855818\",\n    \"name\": \"undo\",\n    \"font_class\": \"undo\",\n    \"unicode\": \"e64f\",\n    \"unicode_decimal\": 58959\n  }, {\n    \"icon_id\": \"24855819\",\n    \"name\": \"images\",\n    \"font_class\": \"images\",\n    \"unicode\": \"e650\",\n    \"unicode_decimal\": 58960\n  }, {\n    \"icon_id\": \"24855821\",\n    \"name\": \"paperclip\",\n    \"font_class\": \"paperclip\",\n    \"unicode\": \"e652\",\n    \"unicode_decimal\": 58962\n  }, {\n    \"icon_id\": \"24855822\",\n    \"name\": \"settings\",\n    \"font_class\": \"settings\",\n    \"unicode\": \"e653\",\n    \"unicode_decimal\": 58963\n  }, {\n    \"icon_id\": \"24855823\",\n    \"name\": \"search\",\n    \"font_class\": \"search\",\n    \"unicode\": \"e654\",\n    \"unicode_decimal\": 58964\n  }, {\n    \"icon_id\": \"24855824\",\n    \"name\": \"redo-filled\",\n    \"font_class\": \"redo-filled\",\n    \"unicode\": \"e655\",\n    \"unicode_decimal\": 58965\n  }, {\n    \"icon_id\": \"24841702\",\n    \"name\": \"list\",\n    \"font_class\": \"list\",\n    \"unicode\": \"e644\",\n    \"unicode_decimal\": 58948\n  }, {\n    \"icon_id\": \"24841489\",\n    \"name\": \"mail-open-filled\",\n    \"font_class\": \"mail-open-filled\",\n    \"unicode\": \"e63a\",\n    \"unicode_decimal\": 58938\n  }, {\n    \"icon_id\": \"24841491\",\n    \"name\": \"hand-thumbsdown-filled\",\n    \"font_class\": \"hand-down-filled\",\n    \"unicode\": \"e63c\",\n    \"unicode_decimal\": 58940\n  }, {\n    \"icon_id\": \"24841492\",\n    \"name\": \"hand-thumbsdown\",\n    \"font_class\": \"hand-down\",\n    \"unicode\": \"e63d\",\n    \"unicode_decimal\": 58941\n  }, {\n    \"icon_id\": \"24841493\",\n    \"name\": \"hand-thumbsup-filled\",\n    \"font_class\": \"hand-up-filled\",\n    \"unicode\": \"e63e\",\n    \"unicode_decimal\": 58942\n  }, {\n    \"icon_id\": \"24841494\",\n    \"name\": \"hand-thumbsup\",\n    \"font_class\": \"hand-up\",\n    \"unicode\": \"e63f\",\n    \"unicode_decimal\": 58943\n  }, {\n    \"icon_id\": \"24841496\",\n    \"name\": \"heart-filled\",\n    \"font_class\": \"heart-filled\",\n    \"unicode\": \"e641\",\n    \"unicode_decimal\": 58945\n  }, {\n    \"icon_id\": \"24841498\",\n    \"name\": \"mail-open\",\n    \"font_class\": \"mail-open\",\n    \"unicode\": \"e643\",\n    \"unicode_decimal\": 58947\n  }, {\n    \"icon_id\": \"24841488\",\n    \"name\": \"heart\",\n    \"font_class\": \"heart\",\n    \"unicode\": \"e639\",\n    \"unicode_decimal\": 58937\n  }, {\n    \"icon_id\": \"24839963\",\n    \"name\": \"loop\",\n    \"font_class\": \"loop\",\n    \"unicode\": \"e633\",\n    \"unicode_decimal\": 58931\n  }, {\n    \"icon_id\": \"24839866\",\n    \"name\": \"pulldown\",\n    \"font_class\": \"pulldown\",\n    \"unicode\": \"e632\",\n    \"unicode_decimal\": 58930\n  }, {\n    \"icon_id\": \"24813798\",\n    \"name\": \"scan\",\n    \"font_class\": \"scan\",\n    \"unicode\": \"e62a\",\n    \"unicode_decimal\": 58922\n  }, {\n    \"icon_id\": \"24813786\",\n    \"name\": \"bars\",\n    \"font_class\": \"bars\",\n    \"unicode\": \"e627\",\n    \"unicode_decimal\": 58919\n  }, {\n    \"icon_id\": \"24813788\",\n    \"name\": \"cart-filled\",\n    \"font_class\": \"cart-filled\",\n    \"unicode\": \"e629\",\n    \"unicode_decimal\": 58921\n  }, {\n    \"icon_id\": \"24813790\",\n    \"name\": \"checkbox\",\n    \"font_class\": \"checkbox\",\n    \"unicode\": \"e62b\",\n    \"unicode_decimal\": 58923\n  }, {\n    \"icon_id\": \"24813791\",\n    \"name\": \"checkbox-filled\",\n    \"font_class\": \"checkbox-filled\",\n    \"unicode\": \"e62c\",\n    \"unicode_decimal\": 58924\n  }, {\n    \"icon_id\": \"24813794\",\n    \"name\": \"shop\",\n    \"font_class\": \"shop\",\n    \"unicode\": \"e62f\",\n    \"unicode_decimal\": 58927\n  }, {\n    \"icon_id\": \"24813795\",\n    \"name\": \"headphones\",\n    \"font_class\": \"headphones\",\n    \"unicode\": \"e630\",\n    \"unicode_decimal\": 58928\n  }, {\n    \"icon_id\": \"24813796\",\n    \"name\": \"cart\",\n    \"font_class\": \"cart\",\n    \"unicode\": \"e631\",\n    \"unicode_decimal\": 58929\n  }]\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWljb25zL2NvbXBvbmVudHMvdW5pLWljb25zL2ljb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztlQUFlO0VBQ2IsSUFBSSxFQUFFLFNBQVM7RUFDZixNQUFNLEVBQUUsVUFBVTtFQUNsQixhQUFhLEVBQUUsVUFBVTtFQUN6QixpQkFBaUIsRUFBRSxRQUFRO0VBQzNCLGFBQWEsRUFBRSxFQUFFO0VBQ2pCLFFBQVEsRUFBRSxDQUNSO0lBQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLE9BQU87SUFDZixZQUFZLEVBQUUsT0FBTztJQUNyQixTQUFTLEVBQUUsTUFBTTtJQUNqQixpQkFBaUIsRUFBRTtFQUNyQixDQUFDLEVBQ0Q7SUFDRSxTQUFTLEVBQUUsVUFBVTtJQUNyQixNQUFNLEVBQUUsUUFBUTtJQUNoQixZQUFZLEVBQUUsUUFBUTtJQUN0QixTQUFTLEVBQUUsTUFBTTtJQUNqQixpQkFBaUIsRUFBRTtFQUNyQixDQUFDLEVBQ0Q7SUFDRSxTQUFTLEVBQUUsVUFBVTtJQUNyQixNQUFNLEVBQUUsaUJBQWlCO0lBQ3pCLFlBQVksRUFBRSxpQkFBaUI7SUFDL0IsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUU7RUFDckIsQ0FBQyxFQUNEO0lBQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLHdCQUF3QjtJQUNoQyxZQUFZLEVBQUUsYUFBYTtJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixpQkFBaUIsRUFBRTtFQUNyQixDQUFDLEVBQ0Q7SUFDRSxTQUFTLEVBQUUsVUFBVTtJQUNyQixNQUFNLEVBQUUsYUFBYTtJQUNyQixZQUFZLEVBQUUsYUFBYTtJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixpQkFBaUIsRUFBRTtFQUNyQixDQUFDLEVBQ0Q7SUFDRSxTQUFTLEVBQUUsVUFBVTtJQUNyQixNQUFNLEVBQUUsaUJBQWlCO0lBQ3pCLFlBQVksRUFBRSxj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QWE7SUFDckIsWUFBWSxFQUFFLGFBQWE7SUFDM0IsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUU7RUFDckIsQ0FBQyxFQUNDO0lBQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsWUFBWSxFQUFFLFlBQVk7SUFDMUIsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUU7RUFDckIsQ0FBQyxFQUFDO0lBQ0EsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsWUFBWSxFQUFFLGVBQWU7SUFDN0IsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUU7RUFDckIsQ0FBQyxFQUNEO0lBQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLFdBQVc7SUFDbkIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUU7RUFDckIsQ0FBQyxFQUFDO0lBQ0EsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLFdBQVc7SUFDbkIsWUFBWSxFQUFFLFdBQVc7SUFDekIsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUU7RUFDckIsQ0FBQyxFQUNEO0lBQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLFlBQVk7SUFDcEIsWUFBWSxFQUFFLE9BQU87SUFDckIsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUU7RUFDckIsQ0FBQyxFQUNIO0lBQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLFlBQVk7SUFDcEIsWUFBWSxFQUFFLFlBQVk7SUFDMUIsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUU7RUFDckIsQ0FBQyxFQUNDO0lBQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckIsTUFBTSxFQUFFLFNBQVM7SUFDakIsWUFBWSxFQUFFLEtBQUs7SUFDbkIsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUU7RUFDckIsQ0FBQyxFQUNIO0lB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dCBkZWZhdWx0IHtcbiAgXCJpZFwiOiBcIjI4NTI2MzdcIixcbiAgXCJuYW1lXCI6IFwidW5pdWnlm77moIflupNcIixcbiAgXCJmb250X2ZhbWlseVwiOiBcInVuaWljb25zXCIsXG4gIFwiY3NzX3ByZWZpeF90ZXh0XCI6IFwidW5pdWktXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgXCJnbHlwaHNcIjogW1xuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI1MDI3MDQ5XCIsXG4gICAgICBcIm5hbWVcIjogXCJ5YW5zZVwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2Y2ZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDg3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNTAyNzA0OFwiLFxuICAgICAgXCJuYW1lXCI6IFwid2FsbGV0XCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ3YWxsZXRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YjFcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDU3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNTAxNTcyMFwiLFxuICAgICAgXCJuYW1lXCI6IFwic2V0dGluZ3MtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJzZXR0aW5ncy1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2Y2VcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNTAxNTQzNFwiLFxuICAgICAgXCJuYW1lXCI6IFwic2hpbWluZ3JlbnpoZW5nLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYXV0aC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2Y2NcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDg0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkzNDI0NlwiLFxuICAgICAgXCJuYW1lXCI6IFwic2hvcC1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNob3AtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmNkXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA4NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzQxNTlcIixcbiAgICAgIFwibmFtZVwiOiBcInN0YWZmLWZpbGxlZC0wMVwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwic3RhZmYtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmNiXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA4M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzI0NjFcIixcbiAgICAgIFwibmFtZVwiOiBcIlZJUC1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInZpcC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YzZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkzMjQ2MlwiLFxuICAgICAgXCJuYW1lXCI6IFwicGx1c19jaXJjbGVfZmlsbFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicGx1cy1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YzdcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDc5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkzMjQ2M1wiLFxuICAgICAgXCJuYW1lXCI6IFwiZm9sZGVyX2FkZC1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImZvbGRlci1hZGQtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmM4XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA4MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzI0NjRcIixcbiAgICAgIFwibmFtZVwiOiBcInlhbnNlLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY29sb3ItZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmM5XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA4MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzI0NjVcIixcbiAgICAgIFwibmFtZVwiOiBcInR1bmUtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ0dW5lLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjYVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTMyNDU1XCIsXG4gICAgICBcIm5hbWVcIjogXCJhLXJpbGlkYWthLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2FsZW5kYXItZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmMwXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MzI0NTZcIixcbiAgICAgIFwibmFtZVwiOiBcIm5vdGlmaWNhdGlvbi1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm5vdGlmaWNhdGlvbi1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YzFcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDczXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkzMjQ1N1wiLFxuICAgICAgXCJuYW1lXCI6IFwid2FsbGV0LWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwid2FsbGV0LWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjMlwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTMyNDU4XCIsXG4gICAgICBcIm5hbWVcIjogXCJwYWloYW5nYmFuZy1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm1lZGFsLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZjM1wiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTMyNDU5XCIsXG4gICAgICBcIm5hbWVcIjogXCJnaWZ0LWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZ2lmdC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YzRcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkzMjQ2MFwiLFxuICAgICAgXCJuYW1lXCI6IFwiZmlyZS1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImZpcmUtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmM1XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA3N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjgwMDFcIixcbiAgICAgIFwibmFtZVwiOiBcInJlZnJlc2hlbXB0eVwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicmVmcmVzaGVtcHR5XCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmJmXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA3MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjY4NTNcIixcbiAgICAgIFwibmFtZVwiOiBcImxvY2F0aW9uLWVsbGlwc2VcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImxvY2F0aW9uLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZhZlwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTI2NzM1XCIsXG4gICAgICBcIm5hbWVcIjogXCJwZXJzb24tZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJwZXJzb24tZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjlkXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAzN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjY3MDNcIixcbiAgICAgIFwibmFtZVwiOiBcInBlcnNvbmFkZC1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInBlcnNvbmFkZC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OThcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM1MVwiLFxuICAgICAgXCJuYW1lXCI6IFwiYmFja1wiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYmFja1wiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiOVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzUyXCIsXG4gICAgICBcIm5hbWVcIjogXCJmb3J3YXJkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJmb3J3YXJkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmJhXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNTNcIixcbiAgICAgIFwibmFtZVwiOiBcImFycm93dGhpbnJpZ2h0XCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJhcnJvdy1yaWdodFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiYlwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjdcbiAgICB9LFxuXHRcdHtcblx0XHQgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzUzXCIsXG5cdFx0ICBcIm5hbWVcIjogXCJhcnJvd3RoaW5yaWdodFwiLFxuXHRcdCAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3d0aGlucmlnaHRcIixcblx0XHQgIFwidW5pY29kZVwiOiBcImU2YmJcIixcblx0XHQgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDY3XG5cdFx0fSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM1NFwiLFxuICAgICAgXCJuYW1lXCI6IFwiYXJyb3d0aGlubGVmdFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3ctbGVmdFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiY1wiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjhcbiAgICB9LFxuXHRcdHtcblx0XHQgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzU0XCIsXG5cdFx0ICBcIm5hbWVcIjogXCJhcnJvd3RoaW5sZWZ0XCIsXG5cdFx0ICBcImZvbnRfY2xhc3NcIjogXCJhcnJvd3RoaW5sZWZ0XCIsXG5cdFx0ICBcInVuaWNvZGVcIjogXCJlNmJjXCIsXG5cdFx0ICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2OFxuXHRcdH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNTVcIixcbiAgICAgIFwibmFtZVwiOiBcImFycm93dGhpbnVwXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJhcnJvdy11cFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiZFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjlcbiAgICB9LFxuXHRcdHtcblx0XHQgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzU1XCIsXG5cdFx0ICBcIm5hbWVcIjogXCJhcnJvd3RoaW51cFwiLFxuXHRcdCAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3d0aGludXBcIixcblx0XHQgIFwidW5pY29kZVwiOiBcImU2YmRcIixcblx0XHQgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDY5XG5cdFx0fSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM1NlwiLFxuICAgICAgXCJuYW1lXCI6IFwiYXJyb3d0aGluZG93blwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3ctZG93blwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiZVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNzBcbiAgICB9LHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzU2XCIsXG4gICAgICBcIm5hbWVcIjogXCJhcnJvd3RoaW5kb3duXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJhcnJvd3RoaW5kb3duXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmJlXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA3MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNDlcIixcbiAgICAgIFwibmFtZVwiOiBcImFycm93ZG93blwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYm90dG9tXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmI4XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2NFxuICAgIH0se1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNDlcIixcbiAgICAgIFwibmFtZVwiOiBcImFycm93ZG93blwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3dkb3duXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmI4XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNDZcIixcbiAgICAgIFwibmFtZVwiOiBcImFycm93cmlnaHRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInJpZ2h0XCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmI1XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2MVxuICAgIH0sXG5cdFx0e1xuXHRcdCAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNDZcIixcblx0XHQgIFwibmFtZVwiOiBcImFycm93cmlnaHRcIixcblx0XHQgIFwiZm9udF9jbGFzc1wiOiBcImFycm93cmlnaHRcIixcblx0XHQgIFwidW5pY29kZVwiOiBcImU2YjVcIixcblx0XHQgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDYxXG5cdFx0fSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM0N1wiLFxuICAgICAgXCJuYW1lXCI6IFwiYXJyb3d1cFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwidG9wXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmI2XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2MlxuICAgIH0sXG5cdFx0e1xuXHRcdCAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNDdcIixcblx0XHQgIFwibmFtZVwiOiBcImFycm93dXBcIixcblx0XHQgIFwiZm9udF9jbGFzc1wiOiBcImFycm93dXBcIixcblx0XHQgIFwidW5pY29kZVwiOiBcImU2YjZcIixcblx0XHQgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDYyXG5cdFx0fSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzM0OFwiLFxuICAgICAgXCJuYW1lXCI6IFwiYXJyb3dsZWZ0XCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJsZWZ0XCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmI3XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2M1xuICAgIH0sXG5cdFx0e1xuXHRcdCAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzNDhcIixcblx0XHQgIFwibmFtZVwiOiBcImFycm93bGVmdFwiLFxuXHRcdCAgXCJmb250X2NsYXNzXCI6IFwiYXJyb3dsZWZ0XCIsXG5cdFx0ICBcInVuaWNvZGVcIjogXCJlNmI3XCIsXG5cdFx0ICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA2M1xuXHRcdH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzMzRcIixcbiAgICAgIFwibmFtZVwiOiBcImV5ZVwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZXllXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjUxXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMzMzVcIixcbiAgICAgIFwibmFtZVwiOiBcImV5ZS1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImV5ZS1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NmFcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzMzNlwiLFxuICAgICAgXCJuYW1lXCI6IFwiZXllLXNsYXNoXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJleWUtc2xhc2hcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YjNcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzMzN1wiLFxuICAgICAgXCJuYW1lXCI6IFwiZXllLXNsYXNoLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZXllLXNsYXNoLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZiNFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMzA1XCIsXG4gICAgICBcIm5hbWVcIjogXCJpbmZvLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiaW5mby1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDlcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzI5OVwiLFxuICAgICAgXCJuYW1lXCI6IFwicmVsb2FkLTAxXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJyZWxvYWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YjJcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzE5NVwiLFxuICAgICAgXCJuYW1lXCI6IFwibWljX3NsYXNoX2ZpbGxcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm1pY29mZi1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YjBcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzE2NVwiLFxuICAgICAgXCJuYW1lXCI6IFwibWFwLXBpbi1lbGxpcHNlXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJtYXAtcGluLWVsbGlwc2VcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YWNcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzE2NlwiLFxuICAgICAgXCJuYW1lXCI6IFwibWFwLXBpblwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWFwLXBpblwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZhZFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0OTIzMTY3XCIsXG4gICAgICBcIm5hbWVcIjogXCJsb2NhdGlvblwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibG9jYXRpb25cIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YWVcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDU0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzA2NFwiLFxuICAgICAgXCJuYW1lXCI6IFwic3RhcmhhbGZcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInN0YXJoYWxmXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjgzXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAxMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ5MjMwNjVcIixcbiAgICAgIFwibmFtZVwiOiBcInN0YXJcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInN0YXJcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2ODhcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDkyMzA2NlwiLFxuICAgICAgXCJuYW1lXCI6IFwic3Rhci1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInN0YXItZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjhmXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAyM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NDZcIixcbiAgICAgIFwibmFtZVwiOiBcImEtcmlsaWRha2FcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNhbGVuZGFyXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmEwXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA0MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NDdcIixcbiAgICAgIFwibmFtZVwiOiBcImZpcmVcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImZpcmVcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YTFcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTY0OFwiLFxuICAgICAgXCJuYW1lXCI6IFwicGFpaGFuZ2JhbmdcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm1lZGFsXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmEyXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NDlcIixcbiAgICAgIFwibmFtZVwiOiBcImZvbnRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImZvbnRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YTNcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDQzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTY1MFwiLFxuICAgICAgXCJuYW1lXCI6IFwiZ2lmdFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZ2lmdFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZhNFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NjUxXCIsXG4gICAgICBcIm5hbWVcIjogXCJsaW5rXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJsaW5rXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmE1XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA0NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NTJcIixcbiAgICAgIFwibmFtZVwiOiBcIm5vdGlmaWNhdGlvblwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibm90aWZpY2F0aW9uXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmE2XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA0NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NTNcIixcbiAgICAgIFwibmFtZVwiOiBcInN0YWZmXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJzdGFmZlwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZhN1wiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NjU0XCIsXG4gICAgICBcIm5hbWVcIjogXCJWSVBcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInZpcFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTZhOFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwNDhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NjU1XCIsXG4gICAgICBcIm5hbWVcIjogXCJmb2xkZXJfYWRkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJmb2xkZXItYWRkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmE5XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA0OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk2NTZcIixcbiAgICAgIFwibmFtZVwiOiBcInR1bmVcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInR1bmVcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2YWFcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTY1N1wiLFxuICAgICAgXCJuYW1lXCI6IFwic2hpbWluZ3JlbnpoZW5nXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJhdXRoXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNmFiXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTA1MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NjVcIixcbiAgICAgIFwibmFtZVwiOiBcInBlcnNvblwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicGVyc29uXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjk5XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAzM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NjZcIixcbiAgICAgIFwibmFtZVwiOiBcImVtYWlsLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZW1haWwtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjlhXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NjdcIixcbiAgICAgIFwibmFtZVwiOiBcInBob25lLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicGhvbmUtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjliXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAzNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NjhcIixcbiAgICAgIFwibmFtZVwiOiBcInBob25lXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJwaG9uZVwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5Y1wiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NTcwXCIsXG4gICAgICBcIm5hbWVcIjogXCJlbWFpbFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZW1haWxcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OWVcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDM4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTU3MVwiLFxuICAgICAgXCJuYW1lXCI6IFwicGVyc29uYWRkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJwZXJzb25hZGRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OWZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTU1OFwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2hhdGJveGVzLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2hhdGJveGVzLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5MlwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NTU5XCIsXG4gICAgICBcIm5hbWVcIjogXCJjb250YWN0XCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjb250YWN0XCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjkzXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAyN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4OTk1NjBcIixcbiAgICAgIFwibmFtZVwiOiBcImNoYXRidWJibGUtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjaGF0YnViYmxlLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5NFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODk5NTYxXCIsXG4gICAgICBcIm5hbWVcIjogXCJjb250YWN0LWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY29udGFjdC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OTVcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTU2MlwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2hhdGJveGVzXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjaGF0Ym94ZXNcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OTZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg5OTU2M1wiLFxuICAgICAgXCJuYW1lXCI6IFwiY2hhdGJ1YmJsZVwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2hhdGJ1YmJsZVwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY5N1wiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjkwXCIsXG4gICAgICBcIm5hbWVcIjogXCJ1cGxvYWQtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ1cGxvYWQtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjhlXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAyMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyOTJcIixcbiAgICAgIFwibmFtZVwiOiBcInVwbG9hZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwidXBsb2FkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjkwXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAyNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyOTNcIixcbiAgICAgIFwibmFtZVwiOiBcIndlaXhpblwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwid2VpeGluXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjkxXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyNzRcIixcbiAgICAgIFwibmFtZVwiOiBcImNvbXBvc2VcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNvbXBvc2VcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2N2ZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDA3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg4MTI3NVwiLFxuICAgICAgXCJuYW1lXCI6IFwicXFcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInFxXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjgwXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAwOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyNzZcIixcbiAgICAgIFwibmFtZVwiOiBcImRvd25sb2FkLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiZG93bmxvYWQtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjgxXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAwOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyNzdcIixcbiAgICAgIFwibmFtZVwiOiBcInBlbmd5b3VxdWFuXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJweXFcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2ODJcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDEwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg4MTI3OVwiLFxuICAgICAgXCJuYW1lXCI6IFwic291bmRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNvdW5kXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjg0XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAxMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyODBcIixcbiAgICAgIFwibmFtZVwiOiBcInRyYXNoLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwidHJhc2gtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjg1XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyODFcIixcbiAgICAgIFwibmFtZVwiOiBcInNvdW5kLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwic291bmQtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjg2XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAxNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyODJcIixcbiAgICAgIFwibmFtZVwiOiBcInRyYXNoXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ0cmFzaFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY4N1wiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjg0XCIsXG4gICAgICBcIm5hbWVcIjogXCJ2aWRlb2NhbS1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInZpZGVvY2FtLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY4OVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjg1XCIsXG4gICAgICBcIm5hbWVcIjogXCJzcGlubmVyLWN5Y2xlXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJzcGlubmVyLWN5Y2xlXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjhhXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAxOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4ODEyODZcIixcbiAgICAgIFwibmFtZVwiOiBcIndlaWJvXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ3ZWlib1wiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY4YlwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTkwMTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODgxMjg4XCIsXG4gICAgICBcIm5hbWVcIjogXCJ2aWRlb2NhbVwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwidmlkZW9jYW1cIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2OGNcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDIwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg4MTI4OVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZG93bmxvYWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImRvd25sb2FkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjhkXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk2MDFcIixcbiAgICAgIFwibmFtZVwiOiBcImhlbHBcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhlbHBcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NzlcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDAxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTYwMlwiLFxuICAgICAgXCJuYW1lXCI6IFwibmF2aWdhdGUtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJuYXZpZ2F0ZS1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2N2FcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTYwM1wiLFxuICAgICAgXCJuYW1lXCI6IFwicGx1c2VtcHR5XCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJwbHVzZW1wdHlcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2N2JcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU5MDAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTYwNFwiLFxuICAgICAgXCJuYW1lXCI6IFwic21hbGxjaXJjbGVcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNtYWxsY2lyY2xlXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjdjXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAwNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk2MDVcIixcbiAgICAgIFwibmFtZVwiOiBcIm1pbnVzLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWludXMtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjdkXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAwNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk2MDZcIixcbiAgICAgIFwibmFtZVwiOiBcIm1pY29mZlwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWljb2ZmXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjdlXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAwNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1ODhcIixcbiAgICAgIFwibmFtZVwiOiBcImNsb3NlZW1wdHlcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNsb3NlZW1wdHlcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NmNcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTg4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTU4OVwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2xlYXJcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNsZWFyXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjZkXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTBcIixcbiAgICAgIFwibmFtZVwiOiBcIm5hdmlnYXRlXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJuYXZpZ2F0ZVwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2ZVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5OTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODc5NTkxXCIsXG4gICAgICBcIm5hbWVcIjogXCJtaW51c1wiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWludXNcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NmZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTkxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTU5MlwiLFxuICAgICAgXCJuYW1lXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImltYWdlXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjcwXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTNcIixcbiAgICAgIFwibmFtZVwiOiBcIm1pY1wiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibWljXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjcxXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTRcIixcbiAgICAgIFwibmFtZVwiOiBcInBhcGVycGxhbmVcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInBhcGVycGxhbmVcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NzJcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTk0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTU5NVwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2xvc2VcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNsb3NlXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjczXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk1OTZcIixcbiAgICAgIFwibmFtZVwiOiBcImhlbHAtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJoZWxwLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY3NFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5OTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODc5NTk3XCIsXG4gICAgICBcIm5hbWVcIjogXCJwbHVzLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicGFwZXJwbGFuZS1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NzVcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTk3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg3OTU5OFwiLFxuICAgICAgXCJuYW1lXCI6IFwicGx1c1wiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicGx1c1wiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY3NlwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODc5NTk5XCIsXG4gICAgICBcIm5hbWVcIjogXCJtaWMtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJtaWMtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjc3XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Nzk2MDBcIixcbiAgICAgIFwibmFtZVwiOiBcImltYWdlLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiaW1hZ2UtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjc4XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1OTAwMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU5MDBcIixcbiAgICAgIFwibmFtZVwiOiBcImxvY2tlZC1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImxvY2tlZC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NjhcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTg0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTkwMVwiLFxuICAgICAgXCJuYW1lXCI6IFwiaW5mb1wiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiaW5mb1wiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2OVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5ODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1OTAzXCIsXG4gICAgICBcIm5hbWVcIjogXCJsb2NrZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImxvY2tlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2YlwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5ODdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODg0XCIsXG4gICAgICBcIm5hbWVcIjogXCJjYW1lcmEtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjYW1lcmEtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjU4XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4ODVcIixcbiAgICAgIFwibmFtZVwiOiBcImNoYXQtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjaGF0LWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1OVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODg2XCIsXG4gICAgICBcIm5hbWVcIjogXCJjYW1lcmFcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNhbWVyYVwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1YVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODg3XCIsXG4gICAgICBcIm5hbWVcIjogXCJjaXJjbGVcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNpcmNsZVwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1YlwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODg4XCIsXG4gICAgICBcIm5hbWVcIjogXCJjaGVja21hcmtlbXB0eVwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2hlY2ttYXJrZW1wdHlcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NWNcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTg4OVwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2hhdFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2hhdFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1ZFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODkwXCIsXG4gICAgICBcIm5hbWVcIjogXCJjaXJjbGUtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjaXJjbGUtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjVlXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4OTFcIixcbiAgICAgIFwibmFtZVwiOiBcImZsYWdcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImZsYWdcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NWZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTc1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTg5MlwiLFxuICAgICAgXCJuYW1lXCI6IFwiZmxhZy1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImZsYWctZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjYwXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4OTNcIixcbiAgICAgIFwibmFtZVwiOiBcImdlYXItZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJnZWFyLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2MVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODk0XCIsXG4gICAgICBcIm5hbWVcIjogXCJob21lXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJob21lXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjYyXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk3OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4OTVcIixcbiAgICAgIFwibmFtZVwiOiBcImhvbWUtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJob21lLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY2M1wiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODk2XCIsXG4gICAgICBcIm5hbWVcIjogXCJnZWFyXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJnZWFyXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjY0XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk4MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4OTdcIixcbiAgICAgIFwibmFtZVwiOiBcInNtYWxsY2lyY2xlLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwic21hbGxjaXJjbGUtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjY1XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk4MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4OThcIixcbiAgICAgIFwibmFtZVwiOiBcIm1hcC1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcIm1hcC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NjZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTg5OVwiLFxuICAgICAgXCJuYW1lXCI6IFwibWFwXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJtYXBcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NjdcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgyNVwiLFxuICAgICAgXCJuYW1lXCI6IFwicmVmcmVzaC1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInJlZnJlc2gtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjU2XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MjZcIixcbiAgICAgIFwibmFtZVwiOiBcInJlZnJlc2hcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInJlZnJlc2hcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NTdcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgwOFwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2xvdWQtdXBsb2FkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjbG91ZC11cGxvYWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDVcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgwOVwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2xvdWQtZG93bmxvYWQtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjbG91ZC1kb3dubG9hZC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgxMFwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2xvdWQtZG93bmxvYWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNsb3VkLWRvd25sb2FkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjQ3XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk1MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MTFcIixcbiAgICAgIFwibmFtZVwiOiBcImNsb3VkLXVwbG9hZC1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNsb3VkLXVwbG9hZC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDhcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg1NTgxM1wiLFxuICAgICAgXCJuYW1lXCI6IFwicmVkb1wiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicmVkb1wiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY0YVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODE0XCIsXG4gICAgICBcIm5hbWVcIjogXCJpbWFnZXMtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJpbWFnZXMtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjRiXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MTVcIixcbiAgICAgIFwibmFtZVwiOiBcInVuZG8tZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ1bmRvLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY0Y1wiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODE2XCIsXG4gICAgICBcIm5hbWVcIjogXCJtb3JlXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJtb3JlXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjRkXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk1N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MTdcIixcbiAgICAgIFwibmFtZVwiOiBcIm1vcmUtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJtb3JlLWZpbGxlZFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY0ZVwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODE4XCIsXG4gICAgICBcIm5hbWVcIjogXCJ1bmRvXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJ1bmRvXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjRmXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MTlcIixcbiAgICAgIFwibmFtZVwiOiBcImltYWdlc1wiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiaW1hZ2VzXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjUwXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MjFcIixcbiAgICAgIFwibmFtZVwiOiBcInBhcGVyY2xpcFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicGFwZXJjbGlwXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjUyXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NTU4MjJcIixcbiAgICAgIFwibmFtZVwiOiBcInNldHRpbmdzXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJzZXR0aW5nc1wiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1M1wiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODIzXCIsXG4gICAgICBcIm5hbWVcIjogXCJzZWFyY2hcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNlYXJjaFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY1NFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODU1ODI0XCIsXG4gICAgICBcIm5hbWVcIjogXCJyZWRvLWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwicmVkby1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NTVcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg0MTcwMlwiLFxuICAgICAgXCJuYW1lXCI6IFwibGlzdFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwibGlzdFwiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTY0NFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5NDhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODQxNDg5XCIsXG4gICAgICBcIm5hbWVcIjogXCJtYWlsLW9wZW4tZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJtYWlsLW9wZW4tZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjNhXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODkzOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NDE0OTFcIixcbiAgICAgIFwibmFtZVwiOiBcImhhbmQtdGh1bWJzZG93bi1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhhbmQtZG93bi1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2M2NcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg0MTQ5MlwiLFxuICAgICAgXCJuYW1lXCI6IFwiaGFuZC10aHVtYnNkb3duXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJoYW5kLWRvd25cIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2M2RcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg0MTQ5M1wiLFxuICAgICAgXCJuYW1lXCI6IFwiaGFuZC10aHVtYnN1cC1maWxsZWRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhhbmQtdXAtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjNlXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODk0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4NDE0OTRcIixcbiAgICAgIFwibmFtZVwiOiBcImhhbmQtdGh1bWJzdXBcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhhbmQtdXBcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2M2ZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTQzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg0MTQ5NlwiLFxuICAgICAgXCJuYW1lXCI6IFwiaGVhcnQtZmlsbGVkXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJoZWFydC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDFcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg0MTQ5OFwiLFxuICAgICAgXCJuYW1lXCI6IFwibWFpbC1vcGVuXCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJtYWlsLW9wZW5cIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2NDNcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTQ3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDg0MTQ4OFwiLFxuICAgICAgXCJuYW1lXCI6IFwiaGVhcnRcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImhlYXJ0XCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjM5XCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODkzN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4Mzk5NjNcIixcbiAgICAgIFwibmFtZVwiOiBcImxvb3BcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImxvb3BcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2MzNcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTMxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDgzOTg2NlwiLFxuICAgICAgXCJuYW1lXCI6IFwicHVsbGRvd25cIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInB1bGxkb3duXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjMyXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODkzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4MTM3OThcIixcbiAgICAgIFwibmFtZVwiOiBcInNjYW5cIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNjYW5cIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2MmFcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTIyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDgxMzc4NlwiLFxuICAgICAgXCJuYW1lXCI6IFwiYmFyc1wiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiYmFyc1wiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTYyN1wiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5MTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODEzNzg4XCIsXG4gICAgICBcIm5hbWVcIjogXCJjYXJ0LWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2FydC1maWxsZWRcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2MjlcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDgxMzc5MFwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcImNoZWNrYm94XCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjJiXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODkyM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4MTM3OTFcIixcbiAgICAgIFwibmFtZVwiOiBcImNoZWNrYm94LWZpbGxlZFwiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiY2hlY2tib3gtZmlsbGVkXCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjJjXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODkyNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpY29uX2lkXCI6IFwiMjQ4MTM3OTRcIixcbiAgICAgIFwibmFtZVwiOiBcInNob3BcIixcbiAgICAgIFwiZm9udF9jbGFzc1wiOiBcInNob3BcIixcbiAgICAgIFwidW5pY29kZVwiOiBcImU2MmZcIixcbiAgICAgIFwidW5pY29kZV9kZWNpbWFsXCI6IDU4OTI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImljb25faWRcIjogXCIyNDgxMzc5NVwiLFxuICAgICAgXCJuYW1lXCI6IFwiaGVhZHBob25lc1wiLFxuICAgICAgXCJmb250X2NsYXNzXCI6IFwiaGVhZHBob25lc1wiLFxuICAgICAgXCJ1bmljb2RlXCI6IFwiZTYzMFwiLFxuICAgICAgXCJ1bmljb2RlX2RlY2ltYWxcIjogNTg5MjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWNvbl9pZFwiOiBcIjI0ODEzNzk2XCIsXG4gICAgICBcIm5hbWVcIjogXCJjYXJ0XCIsXG4gICAgICBcImZvbnRfY2xhc3NcIjogXCJjYXJ0XCIsXG4gICAgICBcInVuaWNvZGVcIjogXCJlNjMxXCIsXG4gICAgICBcInVuaWNvZGVfZGVjaW1hbFwiOiA1ODkyOVxuICAgIH1cbiAgXVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!*************************************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-data-select.vue?vue&type=script&lang=js& */ 45);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_data_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBzQixDQUFnQixxdUJBQUcsRUFBQyIsImZpbGUiOiI0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWRhdGEtc2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktZGF0YS1zZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * DataChecklist 数据选择器\n * @description 通过数据渲染的下拉框组件\n * @tutorial https://uniapp.dcloud.io/component/uniui/uni-data-select\n * @property {String} value 默认值\n * @property {Array} localdata 本地数据 ，格式 [{text:'',value:''}]\n * @property {Boolean} clear 是否可以清空已选项\n * @property {Boolean} emptyText 没有数据时显示的文字 ，本地数据无效\n * @property {String} label 左侧标题\n * @property {String} placeholder 输入框的提示文字\n * @property {Boolean} disabled 是否禁用\n * @event {Function} change  选中发生变化触发\n */\nvar _default2 = {\n  name: \"uni-data-select\",\n  mixins: [uniCloud.mixinDatacom || {}],\n  props: {\n    localdata: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    },\n    value: {\n      type: [String, Number],\n      default: ''\n    },\n    modelValue: {\n      type: [String, Number],\n      default: ''\n    },\n    label: {\n      type: String,\n      default: ''\n    },\n    placeholder: {\n      type: String,\n      default: '请选择'\n    },\n    emptyTips: {\n      type: String,\n      default: '无选项'\n    },\n    clear: {\n      type: Boolean,\n      default: true\n    },\n    defItem: {\n      type: Number,\n      default: 0\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    // 格式化输出 用法 field=\"_id as value, version as text, uni_platform as label\" format=\"{label} - {text}\"\n    format: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      showSelector: false,\n      current: '',\n      mixinDatacomResData: [],\n      apps: [],\n      channels: [],\n      cacheKey: \"uni-data-select-lastSelectedValue\"\n    };\n  },\n  created: function created() {\n    var _this = this;\n    this.debounceGet = this.debounce(function () {\n      _this.query();\n    }, 300);\n    if (this.collection && !this.localdata.length) {\n      this.debounceGet();\n    }\n  },\n  computed: {\n    typePlaceholder: function typePlaceholder() {\n      var text = {\n        'opendb-stat-app-versions': '版本',\n        'opendb-app-channels': '渠道',\n        'opendb-app-list': '应用'\n      };\n      var common = this.placeholder;\n      var placeholder = text[this.collection];\n      return placeholder ? common + placeholder : common;\n    },\n    valueCom: function valueCom() {\n      return this.value;\n    }\n  },\n  watch: {\n    localdata: {\n      immediate: true,\n      handler: function handler(val, old) {\n        if (Array.isArray(val) && old !== val) {\n          this.mixinDatacomResData = val;\n        }\n      }\n    },\n    valueCom: function valueCom(val, old) {\n      this.initDefVal();\n    },\n    mixinDatacomResData: {\n      immediate: true,\n      handler: function handler(val) {\n        if (val.length) {\n          this.initDefVal();\n        }\n      }\n    }\n  },\n  methods: {\n    debounce: function debounce(fn) {\n      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n      var timer = null;\n      return function () {\n        var _this2 = this;\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n        if (timer) clearTimeout(timer);\n        timer = setTimeout(function () {\n          fn.apply(_this2, args);\n        }, time);\n      };\n    },\n    // 执行数据库查询\n    query: function query() {\n      this.mixinDatacomEasyGet();\n    },\n    // 监听查询条件变更事件\n    onMixinDatacomPropsChange: function onMixinDatacomPropsChange() {\n      if (this.collection) {\n        this.debounceGet();\n      }\n    },\n    initDefVal: function initDefVal() {\n      var defValue = '';\n      if ((this.valueCom || this.valueCom === 0) && !this.isDisabled(this.valueCom)) {\n        defValue = this.valueCom;\n      } else {\n        var strogeValue;\n        if (this.collection) {\n          strogeValue = this.getCache();\n        }\n        if (strogeValue || strogeValue === 0) {\n          defValue = strogeValue;\n        } else {\n          var defItem = '';\n          if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {\n            defItem = this.mixinDatacomResData[this.defItem - 1].value;\n          }\n          defValue = defItem;\n        }\n        if (defValue || defValue === 0) {\n          this.emit(defValue);\n        }\n      }\n      var def = this.mixinDatacomResData.find(function (item) {\n        return item.value === defValue;\n      });\n      this.current = def ? this.formatItemName(def) : '';\n    },\n    /**\n     * @param {[String, Number]} value\n     * 判断用户给的 value 是否同时为禁用状态\n     */\n    isDisabled: function isDisabled(value) {\n      var isDisabled = false;\n      this.mixinDatacomResData.forEach(function (item) {\n        if (item.value === value) {\n          isDisabled = item.disable;\n        }\n      });\n      return isDisabled;\n    },\n    clearVal: function clearVal() {\n      this.emit('');\n      if (this.collection) {\n        this.removeCache();\n      }\n    },\n    change: function change(item) {\n      if (!item.disable) {\n        this.showSelector = false;\n        this.current = this.formatItemName(item);\n        this.emit(item.value);\n      }\n    },\n    emit: function emit(val) {\n      this.$emit('input', val);\n      this.$emit('update:modelValue', val);\n      this.$emit('change', val);\n      if (this.collection) {\n        this.setCache(val);\n      }\n    },\n    toggleSelector: function toggleSelector() {\n      if (this.disabled) {\n        return;\n      }\n      this.showSelector = !this.showSelector;\n    },\n    formatItemName: function formatItemName(item) {\n      var text = item.text,\n        value = item.value,\n        channel_code = item.channel_code;\n      channel_code = channel_code ? \"(\".concat(channel_code, \")\") : '';\n      if (this.format) {\n        // 格式化输出\n        var str = \"\";\n        str = this.format;\n        for (var key in item) {\n          str = str.replace(new RegExp(\"{\".concat(key, \"}\"), \"g\"), item[key]);\n        }\n        return str;\n      } else {\n        return this.collection.indexOf('app-list') > 0 ? \"\".concat(text, \"(\").concat(value, \")\") : text ? text : \"\\u672A\\u547D\\u540D\".concat(channel_code);\n      }\n    },\n    // 获取当前加载的数据\n    getLoadData: function getLoadData() {\n      return this.mixinDatacomResData;\n    },\n    // 获取当前缓存key\n    getCurrentCacheKey: function getCurrentCacheKey() {\n      return this.collection;\n    },\n    // 获取缓存\n    getCache: function getCache() {\n      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getCurrentCacheKey();\n      var cacheData = uni.getStorageSync(this.cacheKey) || {};\n      return cacheData[name];\n    },\n    // 设置缓存\n    setCache: function setCache(value) {\n      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getCurrentCacheKey();\n      var cacheData = uni.getStorageSync(this.cacheKey) || {};\n      cacheData[name] = value;\n      uni.setStorageSync(this.cacheKey, cacheData);\n    },\n    // 删除缓存\n    removeCache: function removeCache() {\n      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getCurrentCacheKey();\n      var cacheData = uni.getStorageSync(this.cacheKey) || {};\n      delete cacheData[name];\n      uni.setStorageSync(this.cacheKey, cacheData);\n    }\n  }\n};\nexports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 46)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWRhdGEtc2VsZWN0L2NvbXBvbmVudHMvdW5pLWRhdGEtc2VsZWN0L3VuaS1kYXRhLXNlbGVjdC52dWUiXSwibmFtZXMiOlsibmFtZSIsIm1peGlucyIsInByb3BzIiwibG9jYWxkYXRhIiwidHlwZSIsImRlZmF1bHQiLCJ2YWx1ZSIsIm1vZGVsVmFsdWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiZW1wdHlUaXBzIiwiY2xlYXIiLCJkZWZJdGVtIiwiZGlzYWJsZWQiLCJmb3JtYXQiLCJkYXRhIiwic2hvd1NlbGVjdG9yIiwiY3VycmVudCIsIm1peGluRGF0YWNvbVJlc0RhdGEiLCJhcHBzIiwiY2hhbm5lbHMiLCJjYWNoZUtleSIsImNyZWF0ZWQiLCJjb21wdXRlZCIsInR5cGVQbGFjZWhvbGRlciIsImNvbW1vbiIsInZhbHVlQ29tIiwid2F0Y2giLCJpbW1lZGlhdGUiLCJoYW5kbGVyIiwibWV0aG9kcyIsImRlYm91bmNlIiwiYXJncyIsInRpbWVyIiwiZm4iLCJxdWVyeSIsIm9uTWl4aW5EYXRhY29tUHJvcHNDaGFuZ2UiLCJpbml0RGVmVmFsIiwiZGVmVmFsdWUiLCJzdHJvZ2VWYWx1ZSIsImlzRGlzYWJsZWQiLCJjbGVhclZhbCIsImNoYW5nZSIsImVtaXQiLCJ0b2dnbGVTZWxlY3RvciIsImZvcm1hdEl0ZW1OYW1lIiwidGV4dCIsIml0ZW0iLCJjaGFubmVsX2NvZGUiLCJzdHIiLCJnZXRMb2FkRGF0YSIsImdldEN1cnJlbnRDYWNoZUtleSIsImdldENhY2hlIiwic2V0Q2FjaGUiLCJjYWNoZURhdGEiLCJ1bmkiLCJyZW1vdmVDYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsZ0JBY0E7RUFDQUE7RUFDQUM7RUFDQUM7SUFDQUM7TUFDQUM7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0lBQ0FHO01BQ0FKO01BQ0FDO0lBQ0E7SUFDQUk7TUFDQUw7TUFDQUM7SUFDQTtJQUNBSztNQUNBTjtNQUNBQztJQUNBO0lBQ0FNO01BQ0FQO01BQ0FDO0lBQ0E7SUFDQU87TUFDQVI7TUFDQUM7SUFDQTtJQUNBUTtNQUNBVDtNQUNBQztJQUNBO0lBQ0E7SUFDQVM7TUFDQVY7TUFDQUM7SUFDQTtFQUNBO0VBQ0FVO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQUE7SUFDQTtNQUNBO0lBQ0E7SUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0EscUJBQ0FDLHVCQUNBQTtJQUNBO0lBQ0FDO01BS0E7SUFFQTtFQUNBO0VBQ0FDO0lBQ0F4QjtNQUNBeUI7TUFDQUM7UUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FIO01BQ0E7SUFDQTtJQUNBUjtNQUNBVTtNQUNBQztRQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUFBO01BQ0E7TUFDQTtRQUFBO1FBQUE7VUFBQUM7UUFBQTtRQUNBO1FBQ0FDO1VBQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQUM7TUFDQTtRQUNBO1FBQ0E7VUFDQUM7UUFDQTtRQUNBO1VBQ0FEO1FBQ0E7VUFDQTtVQUNBO1lBQ0ExQjtVQUNBO1VBQ0EwQjtRQUNBO1FBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQTtRQUFBO01BQUE7TUFDQTtJQUNBO0lBRUE7QUFDQTtBQUNBO0FBQ0E7SUFDQUU7TUFDQTtNQUVBO1FBQ0E7VUFDQUE7UUFDQTtNQUNBO01BRUE7SUFDQTtJQUVBQztNQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0E7TUFDQTtNQUVBO0lBQ0E7SUFDQUM7TUFDQSxJQUNBQyxPQUdBQyxLQUhBRDtRQUNBeEMsUUFFQXlDLEtBRkF6QztRQUNBMEMsZUFDQUQsS0FEQUM7TUFFQUE7TUFFQTtRQUNBO1FBQ0E7UUFDQUM7UUFDQTtVQUNBQTtRQUNBO1FBQ0E7TUFDQTtRQUNBLDJEQUNBSCxnQ0FFQUEsT0FDQUEsbUNBQ0FFLGFBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUU7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBQztNQUNBQztJQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7TUFDQUQ7SUFDQTtFQUNBO0FBQ0E7QUFBQSw0QiIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaS1zdGF0X19zZWxlY3RcIj5cclxuXHRcdDxzcGFuIHYtaWY9XCJsYWJlbFwiIGNsYXNzPVwidW5pLWxhYmVsLXRleHQgaGlkZS1vbi1waG9uZVwiPnt7bGFiZWwgKyAn77yaJ319PC9zcGFuPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktc3RhdC1ib3hcIiA6Y2xhc3M9XCJ7J3VuaS1zdGF0X19hY3RpdmVkJzogY3VycmVudH1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktc2VsZWN0XCIgOmNsYXNzPVwieyd1bmktc2VsZWN0LS1kaXNhYmxlZCc6ZGlzYWJsZWR9XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktc2VsZWN0X19pbnB1dC1ib3hcIiBAY2xpY2s9XCJ0b2dnbGVTZWxlY3RvclwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1pZj1cImN1cnJlbnRcIiBjbGFzcz1cInVuaS1zZWxlY3RfX2lucHV0LXRleHRcIj57e2N1cnJlbnR9fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IHYtZWxzZSBjbGFzcz1cInVuaS1zZWxlY3RfX2lucHV0LXRleHQgdW5pLXNlbGVjdF9faW5wdXQtcGxhY2Vob2xkZXJcIj57e3R5cGVQbGFjZWhvbGRlcn19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1pZj1cImN1cnJlbnQgJiYgY2xlYXIgJiYgIWRpc2FibGVkXCIgQGNsaWNrLnN0b3A9XCJjbGVhclZhbFwiID5cclxuXHRcdFx0XHRcdFx0PHVuaS1pY29ucyB0eXBlPVwiY2xlYXJcIiBjb2xvcj1cIiNjMGM0Y2NcIiBzaXplPVwiMjRcIi8+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdDx1bmktaWNvbnMgOnR5cGU9XCJzaG93U2VsZWN0b3I/ICd0b3AnIDogJ2JvdHRvbSdcIiBzaXplPVwiMTRcIiBjb2xvcj1cIiM5OTlcIiAvPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1zZWxlY3QtLW1hc2tcIiB2LWlmPVwic2hvd1NlbGVjdG9yXCIgQGNsaWNrPVwidG9nZ2xlU2VsZWN0b3JcIiAvPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLXNlbGVjdF9fc2VsZWN0b3JcIiB2LWlmPVwic2hvd1NlbGVjdG9yXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1wb3BwZXJfX2Fycm93XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15PVwidHJ1ZVwiIGNsYXNzPVwidW5pLXNlbGVjdF9fc2VsZWN0b3Itc2Nyb2xsXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLXNlbGVjdF9fc2VsZWN0b3ItZW1wdHlcIiB2LWlmPVwibWl4aW5EYXRhY29tUmVzRGF0YS5sZW5ndGggPT09IDBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD57e2VtcHR5VGlwc319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtZWxzZSBjbGFzcz1cInVuaS1zZWxlY3RfX3NlbGVjdG9yLWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBtaXhpbkRhdGFjb21SZXNEYXRhXCIgOmtleT1cImluZGV4XCJcclxuXHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJjaGFuZ2UoaXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJ7J3VuaS1zZWxlY3RfX3NlbGVjdG9yX19kaXNhYmxlZCc6IGl0ZW0uZGlzYWJsZX1cIj57e2Zvcm1hdEl0ZW1OYW1lKGl0ZW0pfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvKipcclxuXHQgKiBEYXRhQ2hlY2tsaXN0IOaVsOaNrumAieaLqeWZqFxyXG5cdCAqIEBkZXNjcmlwdGlvbiDpgJrov4fmlbDmja7muLLmn5PnmoTkuIvmi4nmoYbnu4Tku7ZcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly91bmlhcHAuZGNsb3VkLmlvL2NvbXBvbmVudC91bml1aS91bmktZGF0YS1zZWxlY3RcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdmFsdWUg6buY6K6k5YC8XHJcblx0ICogQHByb3BlcnR5IHtBcnJheX0gbG9jYWxkYXRhIOacrOWcsOaVsOaNriDvvIzmoLzlvI8gW3t0ZXh0OicnLHZhbHVlOicnfV1cclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGNsZWFyIOaYr+WQpuWPr+S7pea4heepuuW3sumAiemhuVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZW1wdHlUZXh0IOayoeacieaVsOaNruaXtuaYvuekuueahOaWh+WtlyDvvIzmnKzlnLDmlbDmja7ml6DmlYhcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gbGFiZWwg5bem5L6n5qCH6aKYXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHBsYWNlaG9sZGVyIOi+k+WFpeahhueahOaPkOekuuaWh+Wtl1xyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGlzYWJsZWQg5piv5ZCm56aB55SoXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2hhbmdlICDpgInkuK3lj5HnlJ/lj5jljJbop6blj5FcclxuXHQgKi9cclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogXCJ1bmktZGF0YS1zZWxlY3RcIixcclxuXHRcdG1peGluczogW3VuaUNsb3VkLm1peGluRGF0YWNvbSB8fCB7fV0sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRsb2NhbGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBBcnJheSxcclxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcclxuXHRcdFx0XHRcdHJldHVybiBbXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dmFsdWU6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGVsVmFsdWU6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGxhYmVsOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHBsYWNlaG9sZGVyOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICfor7fpgInmi6knXHJcblx0XHRcdH0sXHJcblx0XHRcdGVtcHR5VGlwczoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAn5peg6YCJ6aG5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGVhcjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWZJdGVtOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGlzYWJsZWQ6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOagvOW8j+WMlui+k+WHuiDnlKjms5UgZmllbGQ9XCJfaWQgYXMgdmFsdWUsIHZlcnNpb24gYXMgdGV4dCwgdW5pX3BsYXRmb3JtIGFzIGxhYmVsXCIgZm9ybWF0PVwie2xhYmVsfSAtIHt0ZXh0fVwiXHJcblx0XHRcdGZvcm1hdDoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c2hvd1NlbGVjdG9yOiBmYWxzZSxcclxuXHRcdFx0XHRjdXJyZW50OiAnJyxcclxuXHRcdFx0XHRtaXhpbkRhdGFjb21SZXNEYXRhOiBbXSxcclxuXHRcdFx0XHRhcHBzOiBbXSxcclxuXHRcdFx0XHRjaGFubmVsczogW10sXHJcblx0XHRcdFx0Y2FjaGVLZXk6IFwidW5pLWRhdGEtc2VsZWN0LWxhc3RTZWxlY3RlZFZhbHVlXCIsXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy5kZWJvdW5jZUdldCA9IHRoaXMuZGVib3VuY2UoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucXVlcnkoKTtcclxuXHRcdFx0fSwgMzAwKTtcclxuXHRcdFx0aWYgKHRoaXMuY29sbGVjdGlvbiAmJiAhdGhpcy5sb2NhbGRhdGEubGVuZ3RoKSB7XHJcblx0XHRcdFx0dGhpcy5kZWJvdW5jZUdldCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0dHlwZVBsYWNlaG9sZGVyKCkge1xyXG5cdFx0XHRcdGNvbnN0IHRleHQgPSB7XHJcblx0XHRcdFx0XHQnb3BlbmRiLXN0YXQtYXBwLXZlcnNpb25zJzogJ+eJiOacrCcsXHJcblx0XHRcdFx0XHQnb3BlbmRiLWFwcC1jaGFubmVscyc6ICfmuKDpgZMnLFxyXG5cdFx0XHRcdFx0J29wZW5kYi1hcHAtbGlzdCc6ICflupTnlKgnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IGNvbW1vbiA9IHRoaXMucGxhY2Vob2xkZXJcclxuXHRcdFx0XHRjb25zdCBwbGFjZWhvbGRlciA9IHRleHRbdGhpcy5jb2xsZWN0aW9uXVxyXG5cdFx0XHRcdHJldHVybiBwbGFjZWhvbGRlciA/XHJcblx0XHRcdFx0XHRjb21tb24gKyBwbGFjZWhvbGRlciA6XHJcblx0XHRcdFx0XHRjb21tb25cclxuXHRcdFx0fSxcclxuXHRcdFx0dmFsdWVDb20oKXtcclxuXHRcdFx0XHQvLyAjaWZkZWYgVlVFM1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLm1vZGVsVmFsdWU7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBWVUUzXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRsb2NhbGRhdGE6IHtcclxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWUsXHJcblx0XHRcdFx0aGFuZGxlcih2YWwsIG9sZCkge1xyXG5cdFx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiBvbGQgIT09IHZhbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm1peGluRGF0YWNvbVJlc0RhdGEgPSB2YWxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHZhbHVlQ29tKHZhbCwgb2xkKSB7XHJcblx0XHRcdFx0dGhpcy5pbml0RGVmVmFsKClcclxuXHRcdFx0fSxcclxuXHRcdFx0bWl4aW5EYXRhY29tUmVzRGF0YToge1xyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZSxcclxuXHRcdFx0XHRoYW5kbGVyKHZhbCkge1xyXG5cdFx0XHRcdFx0aWYgKHZhbC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pbml0RGVmVmFsKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGRlYm91bmNlKGZuLCB0aW1lID0gMTAwKXtcclxuXHRcdFx0XHRsZXQgdGltZXIgPSBudWxsXHJcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuXHRcdFx0XHRcdGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG5cdFx0XHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Zm4uYXBwbHkodGhpcywgYXJncylcclxuXHRcdFx0XHRcdH0sIHRpbWUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmiafooYzmlbDmja7lupPmn6Xor6JcclxuXHRcdFx0cXVlcnkoKXtcclxuXHRcdFx0XHR0aGlzLm1peGluRGF0YWNvbUVhc3lHZXQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g55uR5ZCs5p+l6K+i5p2h5Lu25Y+Y5pu05LqL5Lu2XHJcblx0XHRcdG9uTWl4aW5EYXRhY29tUHJvcHNDaGFuZ2UoKXtcclxuXHRcdFx0XHRpZiAodGhpcy5jb2xsZWN0aW9uKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRlYm91bmNlR2V0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbml0RGVmVmFsKCkge1xyXG5cdFx0XHRcdGxldCBkZWZWYWx1ZSA9ICcnXHJcblx0XHRcdFx0aWYgKCh0aGlzLnZhbHVlQ29tIHx8IHRoaXMudmFsdWVDb20gPT09IDApICYmICF0aGlzLmlzRGlzYWJsZWQodGhpcy52YWx1ZUNvbSkpIHtcclxuXHRcdFx0XHRcdGRlZlZhbHVlID0gdGhpcy52YWx1ZUNvbVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgc3Ryb2dlVmFsdWVcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNvbGxlY3Rpb24pIHtcclxuXHRcdFx0XHRcdFx0c3Ryb2dlVmFsdWUgPSB0aGlzLmdldENhY2hlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChzdHJvZ2VWYWx1ZSB8fCBzdHJvZ2VWYWx1ZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRkZWZWYWx1ZSA9IHN0cm9nZVZhbHVlXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGVmSXRlbSA9ICcnXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmRlZkl0ZW0gPiAwICYmIHRoaXMuZGVmSXRlbSA8PSB0aGlzLm1peGluRGF0YWNvbVJlc0RhdGEubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0ZGVmSXRlbSA9IHRoaXMubWl4aW5EYXRhY29tUmVzRGF0YVt0aGlzLmRlZkl0ZW0gLSAxXS52YWx1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGRlZlZhbHVlID0gZGVmSXRlbVxyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgaWYgKGRlZlZhbHVlIHx8IGRlZlZhbHVlID09PSAwKSB7XHJcblx0XHRcdFx0XHQgIHRoaXMuZW1pdChkZWZWYWx1ZSlcclxuICAgICAgICAgIH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3QgZGVmID0gdGhpcy5taXhpbkRhdGFjb21SZXNEYXRhLmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBkZWZWYWx1ZSlcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBkZWYgPyB0aGlzLmZvcm1hdEl0ZW1OYW1lKGRlZikgOiAnJ1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIEBwYXJhbSB7W1N0cmluZywgTnVtYmVyXX0gdmFsdWVcclxuXHRcdFx0ICog5Yik5pat55So5oi357uZ55qEIHZhbHVlIOaYr+WQpuWQjOaXtuS4uuemgeeUqOeKtuaAgVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0aXNEaXNhYmxlZCh2YWx1ZSkge1xyXG5cdFx0XHRcdGxldCBpc0Rpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHRoaXMubWl4aW5EYXRhY29tUmVzRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGl0ZW0udmFsdWUgPT09IHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdGlzRGlzYWJsZWQgPSBpdGVtLmRpc2FibGVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gaXNEaXNhYmxlZDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGNsZWFyVmFsKCkge1xyXG5cdFx0XHRcdHRoaXMuZW1pdCgnJylcclxuXHRcdFx0XHRpZiAodGhpcy5jb2xsZWN0aW9uKSB7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUNhY2hlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZShpdGVtKSB7XHJcblx0XHRcdFx0aWYgKCFpdGVtLmRpc2FibGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2VcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudCA9IHRoaXMuZm9ybWF0SXRlbU5hbWUoaXRlbSlcclxuXHRcdFx0XHRcdHRoaXMuZW1pdChpdGVtLnZhbHVlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZW1pdCh2YWwpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbClcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbClcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWwpXHJcblx0XHRcdFx0aWYgKHRoaXMuY29sbGVjdGlvbikge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRDYWNoZSh2YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9nZ2xlU2VsZWN0b3IoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5zaG93U2VsZWN0b3IgPSAhdGhpcy5zaG93U2VsZWN0b3JcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybWF0SXRlbU5hbWUoaXRlbSkge1xyXG5cdFx0XHRcdGxldCB7XHJcblx0XHRcdFx0XHR0ZXh0LFxyXG5cdFx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdFx0XHRjaGFubmVsX2NvZGVcclxuXHRcdFx0XHR9ID0gaXRlbVxyXG5cdFx0XHRcdGNoYW5uZWxfY29kZSA9IGNoYW5uZWxfY29kZSA/IGAoJHtjaGFubmVsX2NvZGV9KWAgOiAnJ1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5mb3JtYXQpIHtcclxuXHRcdFx0XHRcdC8vIOagvOW8j+WMlui+k+WHulxyXG5cdFx0XHRcdFx0bGV0IHN0ciA9IFwiXCI7XHJcblx0XHRcdFx0XHRzdHIgPSB0aGlzLmZvcm1hdDtcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBpbiBpdGVtKSB7XHJcblx0XHRcdFx0XHRcdHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYHske2tleX19YCxcImdcIiksaXRlbVtrZXldKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBzdHI7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZignYXBwLWxpc3QnKSA+IDAgP1xyXG5cdFx0XHRcdFx0XHRgJHt0ZXh0fSgke3ZhbHVlfSlgIDpcclxuXHRcdFx0XHRcdFx0KFxyXG5cdFx0XHRcdFx0XHRcdHRleHQgP1xyXG5cdFx0XHRcdFx0XHRcdHRleHQgOlxyXG5cdFx0XHRcdFx0XHRcdGDmnKrlkb3lkI0ke2NoYW5uZWxfY29kZX1gXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiOt+WPluW9k+WJjeWKoOi9veeahOaVsOaNrlxyXG5cdFx0XHRnZXRMb2FkRGF0YSgpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLm1peGluRGF0YWNvbVJlc0RhdGE7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiOt+WPluW9k+WJjee8k+WtmGtleVxyXG5cdFx0XHRnZXRDdXJyZW50Q2FjaGVLZXkoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9uO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5bnvJPlrZhcclxuXHRcdFx0Z2V0Q2FjaGUobmFtZT10aGlzLmdldEN1cnJlbnRDYWNoZUtleSgpKXtcclxuXHRcdFx0XHRsZXQgY2FjaGVEYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKHRoaXMuY2FjaGVLZXkpIHx8IHt9O1xyXG5cdFx0XHRcdHJldHVybiBjYWNoZURhdGFbbmFtZV07XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiuvue9rue8k+WtmFxyXG5cdFx0XHRzZXRDYWNoZSh2YWx1ZSwgbmFtZT10aGlzLmdldEN1cnJlbnRDYWNoZUtleSgpKXtcclxuXHRcdFx0XHRsZXQgY2FjaGVEYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKHRoaXMuY2FjaGVLZXkpIHx8IHt9O1xyXG5cdFx0XHRcdGNhY2hlRGF0YVtuYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyh0aGlzLmNhY2hlS2V5LCBjYWNoZURhdGEpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDliKDpmaTnvJPlrZhcclxuXHRcdFx0cmVtb3ZlQ2FjaGUobmFtZT10aGlzLmdldEN1cnJlbnRDYWNoZUtleSgpKXtcclxuXHRcdFx0XHRsZXQgY2FjaGVEYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKHRoaXMuY2FjaGVLZXkpIHx8IHt9O1xyXG5cdFx0XHRcdGRlbGV0ZSBjYWNoZURhdGFbbmFtZV07XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKHRoaXMuY2FjaGVLZXksIGNhY2hlRGF0YSk7XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdCR1bmktYmFzZS1jb2xvcjogIzZhNmE2YSAhZGVmYXVsdDtcclxuXHQkdW5pLW1haW4tY29sb3I6ICMzMzMgIWRlZmF1bHQ7XHJcblx0JHVuaS1zZWNvbmRhcnktY29sb3I6ICM5MDkzOTkgIWRlZmF1bHQ7XHJcblx0JHVuaS1ib3JkZXItMzogI2U1ZTVlNTtcclxuXHJcblxyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG5cdFx0LmhpZGUtb24tcGhvbmUge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblx0LnVuaS1zdGF0X19zZWxlY3Qge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHQvLyBwYWRkaW5nOiAxNXB4O1xyXG5cdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdC51bmktc3RhdC1ib3gge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zdGF0X19hY3RpdmVkIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdC8vIG91dGxpbmU6IDFweCBzb2xpZCAjMjk3OWZmO1xyXG5cdH1cclxuXHJcblx0LnVuaS1sYWJlbC10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Y29sb3I6ICR1bmktYmFzZS1jb2xvcjtcclxuXHRcdG1hcmdpbjogYXV0byAwO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlbGVjdCB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAkdW5pLWJvcmRlci0zO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdHBhZGRpbmc6IDAgNXB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkdW5pLWJvcmRlci0zO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0aGVpZ2h0OiAzNXB4O1xyXG5cclxuXHRcdCYtLWRpc2FibGVkIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYTtcclxuXHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC51bmktc2VsZWN0X19sYWJlbCB7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHQvLyBsaW5lLWhlaWdodDogMjJweDtcclxuXHRcdGhlaWdodDogMzVweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRjb2xvcjogJHVuaS1zZWNvbmRhcnktY29sb3I7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlbGVjdF9faW5wdXQtYm94IHtcclxuXHRcdGhlaWdodDogMzVweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC51bmktc2VsZWN0X19pbnB1dCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0aGVpZ2h0OiAyMnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIycHg7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlbGVjdF9faW5wdXQtcGxhYyB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRjb2xvcjogJHVuaS1zZWNvbmRhcnktY29sb3I7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlbGVjdF9fc2VsZWN0b3Ige1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiBjYWxjKDEwMCUgKyAxMnB4KTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjRUJFRUY1O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMCAycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRcdHotaW5kZXg6IDM7XHJcblx0XHRwYWRkaW5nOiA0cHggMDtcclxuXHR9XHJcblxyXG5cdC51bmktc2VsZWN0X19zZWxlY3Rvci1zY3JvbGwge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0bWF4LWhlaWdodDogMjAwcHg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQvKiAjaWZkZWYgSDUgKi9cclxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHRcdC51bmktc2VsZWN0X19zZWxlY3Rvci1zY3JvbGwge1xyXG5cdFx0XHRtYXgtaGVpZ2h0OiA2MDBweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC51bmktc2VsZWN0X19zZWxlY3Rvci1lbXB0eSxcclxuXHQudW5pLXNlbGVjdF9fc2VsZWN0b3ItaXRlbSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRsaW5lLWhlaWdodDogMzVweDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdC8qIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkdW5pLWJvcmRlci0zOyAqL1xyXG5cdFx0cGFkZGluZzogMHB4IDEwcHg7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlbGVjdF9fc2VsZWN0b3ItaXRlbTpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG5cdH1cclxuXHJcblx0LnVuaS1zZWxlY3RfX3NlbGVjdG9yLWVtcHR5Omxhc3QtY2hpbGQsXHJcblx0LnVuaS1zZWxlY3RfX3NlbGVjdG9yLWl0ZW06bGFzdC1jaGlsZCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQudW5pLXNlbGVjdF9fc2VsZWN0b3JfX2Rpc2FibGVkIHtcclxuXHRcdG9wYWNpdHk6IDAuNDtcclxuXHRcdGN1cnNvcjogZGVmYXVsdDtcclxuXHR9XHJcblxyXG5cdC8qIHBpY2tlciDlvLnlh7rlsYLpgJrnlKjnmoTmjIfnpLrlsI/kuInop5IgKi9cclxuXHQudW5pLXBvcHBlcl9fYXJyb3csXHJcblx0LnVuaS1wb3BwZXJfX2Fycm93OjphZnRlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItd2lkdGg6IDZweDtcclxuXHR9XHJcblxyXG5cdC51bmktcG9wcGVyX19hcnJvdyB7XHJcblx0XHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjAzKSk7XHJcblx0XHR0b3A6IC02cHg7XHJcblx0XHRsZWZ0OiAxMCU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDNweDtcclxuXHRcdGJvcmRlci10b3Atd2lkdGg6IDA7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjRUJFRUY1O1xyXG5cdH1cclxuXHJcblx0LnVuaS1wb3BwZXJfX2Fycm93OjphZnRlciB7XHJcblx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdHRvcDogMXB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC02cHg7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdC51bmktc2VsZWN0X19pbnB1dC10ZXh0IHtcclxuXHRcdC8vIHdpZHRoOiAyODBweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Y29sb3I6ICR1bmktbWFpbi1jb2xvcjtcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC51bmktc2VsZWN0X19pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogJHVuaS1iYXNlLWNvbG9yO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1zZWxlY3QtLW1hc2sge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ei1pbmRleDogMjtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 16));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ 23));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 49));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 55));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 20));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 22));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 24));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 59));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 25));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 26));
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 63));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e34) { throw _e34; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e35) { didErr = true; err = _e35; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function n(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var s = n(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) {
              e.hasOwnProperty(t) && (this[t] = e[t]);
            }
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) {
              t[s + i >>> 2] = n[i >>> 2];
            }
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) {
              n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            }
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) {
              n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            }
            return new o.init(n, t);
          }
        },
        h = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        l = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var h = 0; h < c; h += i) {
                this._doProcessBlock(s, h);
              }
              var l = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(l, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = l.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          l.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  r = s,
  i = (n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) {
          a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            p = e[t + 2],
            f = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            I = e[t + 10],
            S = e[t + 11],
            b = e[t + 12],
            k = e[t + 13],
            A = e[t + 14],
            P = e[t + 15],
            T = i[0],
            C = i[1],
            x = i[2],
            O = i[3];
          T = u(T, C, x, O, o, 7, a[0]), O = u(O, T, C, x, c, 12, a[1]), x = u(x, O, T, C, p, 17, a[2]), C = u(C, x, O, T, f, 22, a[3]), T = u(T, C, x, O, g, 7, a[4]), O = u(O, T, C, x, m, 12, a[5]), x = u(x, O, T, C, y, 17, a[6]), C = u(C, x, O, T, _, 22, a[7]), T = u(T, C, x, O, w, 7, a[8]), O = u(O, T, C, x, v, 12, a[9]), x = u(x, O, T, C, I, 17, a[10]), C = u(C, x, O, T, S, 22, a[11]), T = u(T, C, x, O, b, 7, a[12]), O = u(O, T, C, x, k, 12, a[13]), x = u(x, O, T, C, A, 17, a[14]), T = h(T, C = u(C, x, O, T, P, 22, a[15]), x, O, c, 5, a[16]), O = h(O, T, C, x, y, 9, a[17]), x = h(x, O, T, C, S, 14, a[18]), C = h(C, x, O, T, o, 20, a[19]), T = h(T, C, x, O, m, 5, a[20]), O = h(O, T, C, x, I, 9, a[21]), x = h(x, O, T, C, P, 14, a[22]), C = h(C, x, O, T, g, 20, a[23]), T = h(T, C, x, O, v, 5, a[24]), O = h(O, T, C, x, A, 9, a[25]), x = h(x, O, T, C, f, 14, a[26]), C = h(C, x, O, T, w, 20, a[27]), T = h(T, C, x, O, k, 5, a[28]), O = h(O, T, C, x, p, 9, a[29]), x = h(x, O, T, C, _, 14, a[30]), T = l(T, C = h(C, x, O, T, b, 20, a[31]), x, O, m, 4, a[32]), O = l(O, T, C, x, w, 11, a[33]), x = l(x, O, T, C, S, 16, a[34]), C = l(C, x, O, T, A, 23, a[35]), T = l(T, C, x, O, c, 4, a[36]), O = l(O, T, C, x, g, 11, a[37]), x = l(x, O, T, C, _, 16, a[38]), C = l(C, x, O, T, I, 23, a[39]), T = l(T, C, x, O, k, 4, a[40]), O = l(O, T, C, x, o, 11, a[41]), x = l(x, O, T, C, f, 16, a[42]), C = l(C, x, O, T, y, 23, a[43]), T = l(T, C, x, O, v, 4, a[44]), O = l(O, T, C, x, b, 11, a[45]), x = l(x, O, T, C, P, 16, a[46]), T = d(T, C = l(C, x, O, T, p, 23, a[47]), x, O, o, 6, a[48]), O = d(O, T, C, x, _, 10, a[49]), x = d(x, O, T, C, A, 15, a[50]), C = d(C, x, O, T, m, 21, a[51]), T = d(T, C, x, O, b, 6, a[52]), O = d(O, T, C, x, f, 10, a[53]), x = d(x, O, T, C, I, 15, a[54]), C = d(C, x, O, T, c, 21, a[55]), T = d(T, C, x, O, w, 6, a[56]), O = d(O, T, C, x, P, 10, a[57]), x = d(x, O, T, C, y, 15, a[58]), C = d(C, x, O, T, k, 21, a[59]), T = d(T, C, x, O, g, 6, a[60]), O = d(O, T, C, x, S, 10, a[61]), x = d(x, O, T, C, p, 15, a[62]), C = d(C, x, O, T, v, 21, a[63]), i[0] = i[0] + T | 0, i[1] = i[1] + C | 0, i[2] = i[2] + x | 0, i[3] = i[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var h = c[u];
            c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), n(function (e, t) {
    var n;
    e.exports = (n = r, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {
            a[u] ^= 1549556828, c[u] ^= 909522486;
          }
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), n(function (e, t) {
    e.exports = r.HmacMD5;
  })),
  o = n(function (e, t) {
    e.exports = r.enc.Utf8;
  }),
  a = n(function (e, t) {
    var n;
    e.exports = (n = r, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) {
          if (o % 4) {
            var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
              c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
            r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
          }
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) {
            for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
              r.push(s.charAt(o >>> 6 * (3 - a) & 63));
            }
          }
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) {
            r.push(c);
          }
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) {
              r[n.charCodeAt(i)] = i;
            }
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var c = "FUNCTION",
  u = "OBJECT",
  h = "CLIENT_DB",
  l = "pending",
  d = "fulfilled",
  p = "rejected";
function f(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function g(e) {
  return "object" === f(e);
}
function m(e) {
  return "function" == typeof e;
}
function y(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var _ = "REJECTED",
  w = "NOT_PENDING";
var v = /*#__PURE__*/function () {
  function v() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref.createPromise,
      _ref$retryRule = _ref.retryRule,
      t = _ref$retryRule === void 0 ? _ : _ref$retryRule;
    (0, _classCallCheck2.default)(this, v);
    this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t;
  }
  (0, _createClass2.default)(v, [{
    key: "needRetry",
    get: function get() {
      if (!this.status) return !0;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
  }, {
    key: "exec",
    value: function exec() {
      var _this = this;
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then(function (e) {
        return _this.status = d, Promise.resolve(e);
      }, function (e) {
        return _this.status = p, Promise.reject(e);
      }), this.promise) : this.promise;
    }
  }]);
  return v;
}();
function I(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var S = "development" === "development",
  b = "app-plus",
  k = "true" === false || !0 === false,
  A = I([]),
  P = "h5" === b ? "web" : "app-plus" === b ? "app" : b,
  T = I(undefined),
  C = I([]) || [],
  x = true;
var O = "";
try {
  O = (__webpack_require__(/*! uni-stat-config */ 64).default || __webpack_require__(/*! uni-stat-config */ 64)).appid;
} catch (e) {}
var E = {};
function L(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = E, s = e, Object.prototype.hasOwnProperty.call(n, s) || (E[e] = t), E[e];
}
"app" === P && (E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var R = ["invoke", "success", "fail", "complete"],
  U = L("_globalUniCloudInterceptor");
function N(e, t) {
  U[e] || (U[e] = {}), g(t) && Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      s || (s = U[e][t] = []), -1 === s.indexOf(n) && m(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function D(e, t) {
  U[e] || (U[e] = {}), g(t) ? Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete U[e];
}
function M(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function q(e, t) {
  return U[e] && U[e][t] || [];
}
function F(e) {
  N("callObject", e);
}
var K = L("_globalUniCloudListener"),
  j = "response",
  $ = "needLogin",
  B = "refreshToken",
  W = "clientdb",
  H = "cloudfunction",
  z = "cloudobject";
function J(e) {
  return K[e] || (K[e] = []), K[e];
}
function G(e, t) {
  var n = J(e);
  n.includes(t) || n.push(t);
}
function V(e, t) {
  var n = J(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function Y(e, t) {
  var n = J(e);
  for (var _e2 = 0; _e2 < n.length; _e2++) {
    (0, n[_e2])(t);
  }
}
var Q,
  X = !1;
function Z() {
  return Q || (Q = new Promise(function (e) {
    X && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (X = !0, e());
      }
      X || setTimeout(function () {
        t();
      }, 30);
    }();
  }), Q);
}
function ee(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    m(_s2) && (t[_n2] = y(_s2));
  }
  return t;
}
var te = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(te, _Error);
  var _super = _createSuper(te);
  function te(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, te);
    _this2 = _super.call(this, e.message), _this2.errMsg = e.message || e.errMsg || "unknown system error", _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(te, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return te;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
var ne = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  }
};
function se() {
  return {
    token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"),
    tokenExpired: ne.getStorageSync("uni_id_token_expired")
  };
}
function re() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref2.token,
    t = _ref2.tokenExpired;
  e && ne.setStorageSync("uni_id_token", e), t && ne.setStorageSync("uni_id_token_expired", t);
}
var ie, oe;
function ae() {
  return ie || (ie = uni.getSystemInfoSync()), ie;
}
function ce() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
function ue() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (oe) return _objectSpread(_objectSpread({}, oe), {}, {
    locale: e,
    LOCALE: e
  });
  var t = ae(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
  for (var _e3 = 0; _e3 < o.length; _e3++) {
    delete t[o[_e3]];
  }
  return oe = _objectSpread(_objectSpread({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, ce()), t), _objectSpread(_objectSpread({}, oe), {}, {
    locale: e,
    LOCALE: e
  });
}
var he = {
  sign: function sign(e, t) {
    var n = "";
    return Object.keys(e).sort().forEach(function (t) {
      e[t] && (n = n + "&" + t + "=" + e[t]);
    }), n = n.slice(1), i(n, t).toString();
  },
  wrappedRequest: function wrappedRequest(e, t) {
    return new Promise(function (n, s) {
      t(Object.assign(e, {
        complete: function complete(e) {
          e || (e = {}), S && "web" === P && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
          var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
          if (!e.statusCode || e.statusCode >= 400) return s(new te({
            code: "SYS_ERR",
            message: e.errMsg || "request:fail",
            requestId: t
          }));
          var r = e.data;
          if (r.error) return s(new te({
            code: r.error.code,
            message: r.error.message,
            requestId: t
          }));
          r.result = r.data, r.requestId = t, delete r.data, n(r);
        }
      }));
    });
  },
  toBase64: function toBase64(e) {
    return a.stringify(o.parse(e));
  }
};
var le = /*#__PURE__*/function () {
  function le(e) {
    var _this3 = this;
    (0, _classCallCheck2.default)(this, le);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), this.config = Object.assign({}, {
      endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({
      createPromise: function createPromise() {
        return _this3.requestAuth(_this3.setupRequest({
          method: "serverless.auth.user.anonymousAuthorize",
          params: "{}"
        }, "auth")).then(function (e) {
          if (!e.result || !e.result.accessToken) throw new te({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          });
          _this3.setAccessToken(e.result.accessToken);
        });
      },
      retryRule: w
    });
  }
  (0, _createClass2.default)(le, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return he.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this4 = this;
      return Promise.resolve().then(function () {
        return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this4.getAccessToken();
          }).then(function () {
            var t = _this4.rebuildRequest(e);
            return _this4.request(t, !0);
          });
        }) : _this4.getAccessToken().then(function () {
          var t = _this4.rebuildRequest(e);
          return _this4.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = he.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAccessToken();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function authorize() {
        return _authorize.apply(this, arguments);
      }
      return authorize;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref3) {
      var _this5 = this;
      var e = _ref3.url,
        t = _ref3.formData,
        n = _ref3.name,
        s = _ref3.filePath,
        r = _ref3.fileType,
        i = _ref3.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
        var e, t, _ref4$fileType, n, _ref4$cloudPathAsReal, s, r, i, o, a, c, u, h, l, d, p, g, m, y, _, _e4, w;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e = _ref4.filePath, t = _ref4.cloudPath, _ref4$fileType = _ref4.fileType, n = _ref4$fileType === void 0 ? "image" : _ref4$fileType, _ref4$cloudPathAsReal = _ref4.cloudPathAsRealPath, s = _ref4$cloudPathAsReal === void 0 ? !1 : _ref4$cloudPathAsReal, r = _ref4.onUploadProgress, i = _ref4.config;
                if (!("string" !== f(t))) {
                  _context2.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context2.next = 5;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context2.next = 7;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                o = i && i.envType || this.config.envType;
                if (!(s && ("/" !== t[0] && (t = "/" + t), t.indexOf("\\") > -1))) {
                  _context2.next = 10;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                });
              case 10:
                _context2.next = 12;
                return this.getOSSUploadOptionsFromPath({
                  env: o,
                  filename: s ? t.split("/").pop() : t,
                  fileId: s ? t : void 0
                });
              case 12:
                a = _context2.sent.result;
                c = "https://" + a.cdnDomain + "/" + a.ossPath;
                u = a.securityToken;
                h = a.accessKeyId;
                l = a.signature;
                d = a.host;
                p = a.ossPath;
                g = a.id;
                m = a.policy;
                y = a.ossCallbackUrl;
                _ = {
                  "Cache-Control": "max-age=2592000",
                  "Content-Disposition": "attachment",
                  OSSAccessKeyId: h,
                  Signature: l,
                  host: d,
                  id: g,
                  key: p,
                  policy: m,
                  success_action_status: 200
                };
                if (u && (_["x-oss-security-token"] = u), y) {
                  _e4 = JSON.stringify({
                    callbackUrl: y,
                    callbackBody: JSON.stringify({
                      fileId: g,
                      spaceId: this.config.spaceId
                    }),
                    callbackBodyType: "application/json"
                  });
                  _.callback = he.toBase64(_e4);
                }
                w = {
                  url: "https://" + a.host,
                  formData: _,
                  fileName: "file",
                  name: "file",
                  filePath: e,
                  fileType: n
                };
                _context2.next = 27;
                return this.uploadFileToOSS(Object.assign({}, w, {
                  onUploadProgress: r
                }));
              case 27:
                if (!y) {
                  _context2.next = 29;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 29:
                _context2.next = 31;
                return this.reportOSSUpload({
                  id: g
                });
              case 31:
                if (!_context2.sent.success) {
                  _context2.next = 33;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 33:
                throw new te({
                  code: "UPLOAD_FAILED",
                  message: "文件上传失败"
                });
              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref5.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new te({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _ref6,
          e,
          t,
          _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref6 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref6.fileList;
                if (!(!Array.isArray(e) || 0 === e.length)) {
                  _context3.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
              case 3:
                t = {
                  method: "serverless.file.resource.info",
                  params: JSON.stringify({
                    id: e.map(function (e) {
                      return e.split("?")[0];
                    }).join(",")
                  })
                };
                _context3.next = 6;
                return this.request(this.setupRequest(t));
              case 6:
                _context3.t0 = _context3.sent.result;
                return _context3.abrupt("return", {
                  fileList: _context3.t0
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return le;
}();
var de = {
  init: function init(e) {
    var t = new le(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var pe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var fe;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(fe || (fe = {}));
var ge = function ge() {},
  me = n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [],
        c = [];
      !function () {
        function t(t) {
          for (var n = e.sqrt(t), s = 2; s <= n; s++) {
            if (!(t % s)) return !1;
          }
          return !0;
        }
        function n(e) {
          return 4294967296 * (e - (0 | e)) | 0;
        }
        for (var s = 2, r = 0; r < 64;) {
          t(s) && (r < 8 && (a[r] = n(e.pow(s, .5))), c[r] = n(e.pow(s, 1 / 3)), r++), s++;
        }
      }();
      var u = [],
        h = o.SHA256 = i.extend({
          _doReset: function _doReset() {
            this._hash = new r.init(a.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(e, t) {
            for (var n = this._hash.words, s = n[0], r = n[1], i = n[2], o = n[3], a = n[4], h = n[5], l = n[6], d = n[7], p = 0; p < 64; p++) {
              if (p < 16) u[p] = 0 | e[t + p];else {
                var f = u[p - 15],
                  g = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                  m = u[p - 2],
                  y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                u[p] = g + u[p - 7] + y + u[p - 16];
              }
              var _ = s & r ^ s & i ^ r & i,
                w = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22),
                v = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & l) + c[p] + u[p];
              d = l, l = h, h = a, a = o + v | 0, o = i, i = r, r = s, s = v + (w + _) | 0;
            }
            n[0] = n[0] + s | 0, n[1] = n[1] + r | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0, n[5] = n[5] + h | 0, n[6] = n[6] + l | 0, n[7] = n[7] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            var t = this._data,
              n = t.words,
              s = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(s / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = s, t.sigBytes = 4 * n.length, this._process(), this._hash;
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      t.SHA256 = i._createHelper(h), t.HmacSHA256 = i._createHmacHelper(h);
    }(Math), n.SHA256);
  }),
  ye = me,
  _e = n(function (e, t) {
    e.exports = r.HmacSHA256;
  });
var we = function we() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new te({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e5, s) {
      return _e5 ? n(_e5) : t(s);
    };
  });
  return e.promise = t, e;
};
function ve(e) {
  return void 0 === e;
}
function Ie(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var Se;
function be(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = _createForOfIteratorHelper(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e6 = _step.value;
      var _t4 = _e6.isMatch,
        _n4 = _e6.genAdapter,
        _s4 = _e6.runtime;
      if (_t4()) return {
        adapter: _n4(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(Se || (Se = {}));
var ke = {
    adapter: null,
    runtime: void 0
  },
  Ae = ["anonymousUuidKey"];
var Pe = /*#__PURE__*/function (_ge) {
  (0, _inherits2.default)(Pe, _ge);
  var _super2 = _createSuper(Pe);
  function Pe() {
    var _this6;
    (0, _classCallCheck2.default)(this, Pe);
    _this6 = _super2.call(this), ke.adapter.root.tcbObject || (ke.adapter.root.tcbObject = {});
    return _this6;
  }
  (0, _createClass2.default)(Pe, [{
    key: "setItem",
    value: function setItem(e, t) {
      ke.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return ke.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete ke.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete ke.adapter.root.tcbObject;
    }
  }]);
  return Pe;
}(ge);
function Te(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new Pe();
    case "none":
      return new Pe();
    default:
      return t.sessionStorage || new Pe();
  }
}
var Ce = /*#__PURE__*/function () {
  function Ce(e) {
    (0, _classCallCheck2.default)(this, Ce);
    if (!this._storage) {
      this._persistence = ke.adapter.primaryStorage || e.persistence, this._storage = Te(this._persistence, ke.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n5 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n5,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r,
        loginTypeKey: _i,
        userInfoKey: _o
      };
    }
  }
  (0, _createClass2.default)(Ce, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Te(e, ke.adapter);
      for (var _e7 in this.keys) {
        var _s6 = this.keys[_e7];
        if (t && Ae.includes(_e7)) continue;
        var _r2 = this._storage.getItem(_s6);
        ve(_r2) || Ie(_r2) || (n.setItem(_s6, _r2), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return Ce;
}();
var xe = {},
  Oe = {};
function Ee(e) {
  return xe[e];
}
var Le = /*#__PURE__*/(0, _createClass2.default)(function Le(e, t) {
  (0, _classCallCheck2.default)(this, Le);
  this.data = t || null, this.name = e;
});
var Re = /*#__PURE__*/function (_Le) {
  (0, _inherits2.default)(Re, _Le);
  var _super3 = _createSuper(Re);
  function Re(e, t) {
    var _this7;
    (0, _classCallCheck2.default)(this, Re);
    _this7 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this7.error = e;
    return _this7;
  }
  return (0, _createClass2.default)(Re);
}(Le);
var Ue = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Re) return console.error(e.error), this;
      var n = "string" == typeof e ? new Le(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e8 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = _createForOfIteratorHelper(_e8),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function Ne(e, t) {
  Ue.on(e, t);
}
function De(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Ue.fire(e, t);
}
function Me(e, t) {
  Ue.off(e, t);
}
var qe = "loginStateChanged",
  Fe = "loginStateExpire",
  Ke = "loginTypeChanged",
  je = "anonymousConverted",
  $e = "refreshAccessToken";
var Be;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(Be || (Be = {}));
var We = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  He = {
    "X-SDK-Version": "1.3.5"
  };
function ze(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e9 in r) {
        o.append(_e9, r[_e9]);
      }
    }(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);
  };
}
function Je() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: _objectSpread(_objectSpread({}, He), {}, {
      "x-seqid": e
    })
  };
}
var Ge = /*#__PURE__*/function () {
  function Ge() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Ge);
    var t;
    this.config = e, this._reqClass = new ke.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = Ee(this.config.env), this._localCache = (t = this.config.env, Oe[t]), ze(this._reqClass, "post", [Je]), ze(this._reqClass, "upload", [Je]), ze(this._reqClass, "download", [Je]);
  }
  (0, _createClass2.default)(Ge, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._reqClass.post(e);
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function post(_x2) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._reqClass.upload(e);
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function upload(_x3) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(e) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._reqClass.download(e);
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function download(_x4) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var e, t;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context7.prev = 1;
                _context7.next = 4;
                return this._refreshAccessTokenPromise;
              case 4:
                e = _context7.sent;
                _context7.next = 10;
                break;
              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                t = _context7.t0;
              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context7.next = 12;
                  break;
                }
                throw t;
              case 12:
                return _context7.abrupt("return", e);
              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this$_cache$keys, e, t, n, s, r, i, o, a, _e10, _e11, _t7, _s8;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                i = this._cache.getStore(n);
                if (i) {
                  _context8.next = 5;
                  break;
                }
                throw new te({
                  message: "未登录CloudBase"
                });
              case 5:
                o = {
                  refresh_token: i
                };
                _context8.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", o);
              case 8:
                a = _context8.sent;
                if (!a.data.code) {
                  _context8.next = 21;
                  break;
                }
                _e10 = a.data.code;
                if (!("SIGN_PARAM_INVALID" === _e10 || "REFRESH_TOKEN_EXPIRED" === _e10 || "INVALID_REFRESH_TOKEN" === _e10)) {
                  _context8.next = 20;
                  break;
                }
                if (!(this._cache.getStore(s) === Be.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e10)) {
                  _context8.next = 19;
                  break;
                }
                _e11 = this._cache.getStore(r);
                _t7 = this._cache.getStore(n);
                _context8.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e11,
                  refresh_token: _t7
                });
              case 17:
                _s8 = _context8.sent;
                return _context8.abrupt("return", (this.setRefreshToken(_s8.refresh_token), this._refreshAccessToken()));
              case 19:
                De(Fe), this._cache.removeStore(n);
              case 20:
                throw new te({
                  code: a.data.code,
                  message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
                });
              case 21:
                if (!a.data.access_token) {
                  _context8.next = 23;
                  break;
                }
                return _context8.abrupt("return", (De($e), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));
              case 23:
                a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
              case 24:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _this$_cache$keys2, e, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;
                if (this._cache.getStore(n)) {
                  _context9.next = 3;
                  break;
                }
                throw new te({
                  message: "refresh token不存在，登录状态异常"
                });
              case 3:
                s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
                _context9.t0 = this._shouldRefreshAccessTokenHook;
                if (!_context9.t0) {
                  _context9.next = 9;
                  break;
                }
                _context9.next = 8;
                return this._shouldRefreshAccessTokenHook(s, r);
              case 8:
                _context9.t0 = !_context9.sent;
              case 9:
                _context9.t1 = _context9.t0;
                if (!_context9.t1) {
                  _context9.next = 12;
                  break;
                }
                i = !1;
              case 12:
                return _context9.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                  accessToken: s,
                  accessTokenExpire: r
                });
              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(e, t, n) {
        var s, r, i, _e12, o, _e13, _e14, a, c, u, h, l, d, p, f, g;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                s = "x-tcb-trace_".concat(this.config.env);
                r = "application/x-www-form-urlencoded";
                i = _objectSpread({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);
                if (!(-1 === We.indexOf(e))) {
                  _context10.next = 10;
                  break;
                }
                _e12 = this._cache.keys.refreshTokenKey;
                _context10.t0 = this._cache.getStore(_e12);
                if (!_context10.t0) {
                  _context10.next = 10;
                  break;
                }
                _context10.next = 9;
                return this.getAccessToken();
              case 9:
                i.access_token = _context10.sent.accessToken;
              case 10:
                if ("storage.uploadFile" === e) {
                  o = new FormData();
                  for (_e13 in o) {
                    o.hasOwnProperty(_e13) && void 0 !== o[_e13] && o.append(_e13, i[_e13]);
                  }
                  r = "multipart/form-data";
                } else {
                  r = "application/json", o = {};
                  for (_e14 in i) {
                    void 0 !== i[_e14] && (o[_e14] = i[_e14]);
                  }
                }
                a = {
                  headers: {
                    "content-type": r
                  }
                };
                n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
                c = this._localCache.getStore(s);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, h = t.inQuery, l = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));
                p = function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var s = /\?/.test(t);
                  var r = "";
                  for (var _e15 in n) {
                    "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e15, "=").concat(encodeURIComponent(n[_e15]));
                  }
                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(pe, "//tcb-api.tencentcloudapi.com/web", d);
                l && (p += l);
                _context10.next = 22;
                return this.post(_objectSpread({
                  url: p,
                  data: o
                }, a));
              case 22:
                f = _context10.sent;
                g = f.header && f.header["x-tcb-trace"];
                if (!(g && this._localCache.setStore(s, g), 200 !== Number(f.status) && 200 !== Number(f.statusCode) || !f.data)) {
                  _context10.next = 26;
                  break;
                }
                throw new te({
                  code: "NETWORK_ERROR",
                  message: "network request error"
                });
              case 26:
                return _context10.abrupt("return", f);
              case 27:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function request(_x5, _x6, _x7) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {
        var t,
          n,
          _n6,
          _args11 = arguments;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                t = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                _context11.next = 3;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 3:
                n = _context11.sent;
                if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === We.indexOf(e))) {
                  _context11.next = 13;
                  break;
                }
                _context11.next = 7;
                return this.refreshAccessToken();
              case 7:
                _context11.next = 9;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 9:
                _n6 = _context11.sent;
                if (!_n6.data.code) {
                  _context11.next = 12;
                  break;
                }
                throw new te({
                  code: _n6.data.code,
                  message: _n6.data.message
                });
              case 12:
                return _context11.abrupt("return", _n6.data);
              case 13:
                if (!n.data.code) {
                  _context11.next = 15;
                  break;
                }
                throw new te({
                  code: n.data.code,
                  message: n.data.message
                });
              case 15:
                return _context11.abrupt("return", n.data);
              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function send(_x8) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
        t = _this$_cache$keys3.accessTokenKey,
        n = _this$_cache$keys3.accessTokenExpireKey,
        s = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return Ge;
}();
var Ve = {};
function Ye(e) {
  return Ve[e];
}
var Qe = /*#__PURE__*/function () {
  function Qe(e) {
    (0, _classCallCheck2.default)(this, Qe);
    this.config = e, this._cache = Ee(e.env), this._request = Ye(e.env);
  }
  (0, _createClass2.default)(Qe, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
        t = _this$_cache$keys4.accessTokenKey,
        n = _this$_cache$keys4.accessTokenExpireKey,
        s = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
        n = _this$_cache$keys5.accessTokenKey,
        s = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _yield$this$_request$, e;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$ = _context12.sent;
                e = _yield$this$_request$.data;
                return _context12.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return Qe;
}();
var Xe = /*#__PURE__*/function () {
  function Xe(e) {
    (0, _classCallCheck2.default)(this, Xe);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = Ee(this._envId), this._request = Ye(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(Xe, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var _yield$this$_request$2, e, t, n;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._request.send("auth.getLinkedUidList", {});
              case 2:
                _yield$this$_request$2 = _context13.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                n = e.users;
                return _context13.abrupt("return", (n.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: n,
                  hasPrimaryUid: t
                }));
              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                t = e.nickName;
                n = e.gender;
                s = e.avatarUrl;
                r = e.province;
                i = e.country;
                o = e.city;
                _context14.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: n,
                  avatarUrl: s,
                  province: r,
                  country: i,
                  city: o
                });
              case 8:
                _yield$this$_request$3 = _context14.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);
              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function update(_x9) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        var _yield$this$_request$4, e;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$4 = _context15.sent;
                e = _yield$this$_request$4.data;
                return _context15.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return Xe;
}();
var Ze = /*#__PURE__*/function () {
  function Ze(e) {
    (0, _classCallCheck2.default)(this, Ze);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = Ee(e);
    var _this$_cache$keys6 = this._cache.keys,
      t = _this$_cache$keys6.refreshTokenKey,
      n = _this$_cache$keys6.accessTokenKey,
      s = _this$_cache$keys6.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new Xe(e);
  }
  (0, _createClass2.default)(Ze, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === Be.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === Be.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === Be.WECHAT || this.loginType === Be.WECHAT_OPEN || this.loginType === Be.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return Ze;
}();
var et = /*#__PURE__*/function (_Qe) {
  (0, _inherits2.default)(et, _Qe);
  var _super4 = _createSuper(et);
  function et() {
    (0, _classCallCheck2.default)(this, et);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(et, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var _this$_cache$keys7, e, t, n, s, r, _e16;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._cache.updatePersistence("local");
                _this$_cache$keys7 = this._cache.keys;
                e = _this$_cache$keys7.anonymousUuidKey;
                t = _this$_cache$keys7.refreshTokenKey;
                n = this._cache.getStore(e) || void 0;
                s = this._cache.getStore(t) || void 0;
                _context16.next = 8;
                return this._request.send("auth.signInAnonymously", {
                  anonymous_uuid: n,
                  refresh_token: s
                });
              case 8:
                r = _context16.sent;
                if (!(r.uuid && r.refresh_token)) {
                  _context16.next = 20;
                  break;
                }
                this._setAnonymousUUID(r.uuid);
                this.setRefreshToken(r.refresh_token);
                _context16.next = 14;
                return this._request.refreshAccessToken();
              case 14:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.ANONYMOUS,
                  persistence: "local"
                });
                _e16 = new Ze(this.config.env);
                _context16.next = 19;
                return _e16.user.refresh();
              case 19:
                return _context16.abrupt("return", _e16);
              case 20:
                throw new te({
                  message: "匿名登录失败"
                });
              case 21:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {
        var _this$_cache$keys8, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _this$_cache$keys8 = this._cache.keys;
                t = _this$_cache$keys8.anonymousUuidKey;
                n = _this$_cache$keys8.refreshTokenKey;
                s = this._cache.getStore(t);
                r = this._cache.getStore(n);
                _context17.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: s,
                  refresh_token: r,
                  ticket: e
                });
              case 7:
                i = _context17.sent;
                if (!i.refresh_token) {
                  _context17.next = 16;
                  break;
                }
                this._clearAnonymousUUID();
                this.setRefreshToken(i.refresh_token);
                _context17.next = 13;
                return this._request.refreshAccessToken();
              case 13:
                De(je, {
                  env: this.config.env
                });
                De(Ke, {
                  loginType: Be.CUSTOM,
                  persistence: "local"
                });
                return _context17.abrupt("return", {
                  credential: {
                    refreshToken: i.refresh_token
                  }
                });
              case 16:
                throw new te({
                  message: "匿名转化失败"
                });
              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function linkAndRetrieveDataWithTicket(_x10) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
        t = _this$_cache$keys9.anonymousUuidKey,
        n = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Be.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return et;
}(Qe);
var tt = /*#__PURE__*/function (_Qe2) {
  (0, _inherits2.default)(tt, _Qe2);
  var _super5 = _createSuper(tt);
  function tt() {
    (0, _classCallCheck2.default)(this, tt);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(tt, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context18.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "ticket must be a string"
                });
              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context18.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });
              case 5:
                n = _context18.sent;
                if (!n.refresh_token) {
                  _context18.next = 15;
                  break;
                }
                this.setRefreshToken(n.refresh_token);
                _context18.next = 10;
                return this._request.refreshAccessToken();
              case 10:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.CUSTOM,
                  persistence: this.config.persistence
                });
                _context18.next = 14;
                return this.refreshUserInfo();
              case 14:
                return _context18.abrupt("return", new Ze(this.config.env));
              case 15:
                throw new te({
                  message: "自定义登录失败"
                });
              case 16:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function signIn(_x11) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return tt;
}(Qe);
var nt = /*#__PURE__*/function (_Qe3) {
  (0, _inherits2.default)(nt, _Qe3);
  var _super6 = _createSuper(nt);
  function nt() {
    (0, _classCallCheck2.default)(this, nt);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(nt, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context19.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "email must be a string"
                });
              case 2:
                n = this._cache.keys.refreshTokenKey;
                _context19.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 5:
                s = _context19.sent;
                r = s.refresh_token;
                i = s.access_token;
                o = s.access_token_expire;
                if (!r) {
                  _context19.next = 22;
                  break;
                }
                this.setRefreshToken(r);
                if (!(i && o)) {
                  _context19.next = 15;
                  break;
                }
                this.setAccessToken(i, o);
                _context19.next = 17;
                break;
              case 15:
                _context19.next = 17;
                return this._request.refreshAccessToken();
              case 17:
                _context19.next = 19;
                return this.refreshUserInfo();
              case 19:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.EMAIL,
                  persistence: this.config.persistence
                });
                return _context19.abrupt("return", new Ze(this.config.env));
              case 22:
                throw s.code ? new te({
                  code: s.code,
                  message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new te({
                  message: "邮箱登录失败"
                });
              case 23:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function signIn(_x12, _x13) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(e) {
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));
              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
      function activate(_x14) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));
              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
      function resetPasswordWithToken(_x15, _x16) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return nt;
}(Qe);
var st = /*#__PURE__*/function (_Qe4) {
  (0, _inherits2.default)(st, _Qe4);
  var _super7 = _createSuper(st);
  function st() {
    (0, _classCallCheck2.default)(this, st);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(st, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context22.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                n = this._cache.keys.refreshTokenKey;
                _context22.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: Be.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 6:
                s = _context22.sent;
                r = s.refresh_token;
                i = s.access_token_expire;
                o = s.access_token;
                if (!r) {
                  _context22.next = 23;
                  break;
                }
                this.setRefreshToken(r);
                if (!(o && i)) {
                  _context22.next = 16;
                  break;
                }
                this.setAccessToken(o, i);
                _context22.next = 18;
                break;
              case 16:
                _context22.next = 18;
                return this._request.refreshAccessToken();
              case 18:
                _context22.next = 20;
                return this.refreshUserInfo();
              case 20:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.USERNAME,
                  persistence: this.config.persistence
                });
                return _context22.abrupt("return", new Ze(this.config.env));
              case 23:
                throw s.code ? new te({
                  code: s.code,
                  message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new te({
                  message: "用户名密码登录失败"
                });
              case 24:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
      function signIn(_x17, _x18) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return st;
}(Qe);
var rt = /*#__PURE__*/function () {
  function rt(e) {
    (0, _classCallCheck2.default)(this, rt);
    this.config = e, this._cache = Ee(e.env), this._request = Ye(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ne(Ke, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(rt, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new et(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new tt(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new nt(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new st(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23() {
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", new et(this.config).signIn());
              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", new nt(this.config).signIn(e, t));
              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
      function signInWithEmailAndPassword(_x19, _x20) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new st(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new et(this.config)), Ne(je, this._onAnonymousConverted);
                _context25.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
              case 3:
                return _context25.abrupt("return", _context25.sent);
              case 4:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
      function linkAndRetrieveDataWithTicket(_x21) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26() {
        var _this$_cache$keys10, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(this.loginType === Be.ANONYMOUS)) {
                  _context26.next = 2;
                  break;
                }
                throw new te({
                  message: "匿名用户不支持登出操作"
                });
              case 2:
                _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);
                if (s) {
                  _context26.next = 5;
                  break;
                }
                return _context26.abrupt("return");
              case 5:
                _context26.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: s
                });
              case 7:
                r = _context26.sent;
                return _context26.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), De(qe), De(Ke, {
                  env: this.config.env,
                  loginType: Be.NULL,
                  persistence: this.config.persistence
                }), r));
              case 9:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27(e, t) {
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));
              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
      function signUpWithEmailAndPassword(_x22, _x23) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));
              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
      function sendPasswordResetEmail(_x24) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;
      Ne(qe, function () {
        var t = _this9.hasLoginState();
        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      Ne(Fe, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      Ne($e, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      Ne(je, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;
      Ne(Ke, function () {
        var t = _this10.hasLoginState();
        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29() {
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this._request.getAccessToken();
              case 2:
                _context29.t0 = _context29.sent.accessToken;
                _context29.t1 = this.config.env;
                return _context29.abrupt("return", {
                  accessToken: _context29.t0,
                  env: _context29.t1
                });
              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new Ze(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30(e) {
        var _yield$this$_request$5, t;
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context30.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                _context30.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });
              case 4:
                _yield$this$_request$5 = _context30.sent;
                t = _yield$this$_request$5.data;
                return _context30.abrupt("return", t && t.isRegistered);
              case 7:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
      function isUsernameRegistered(_x25) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31(e) {
        return _regenerator.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", new tt(this.config).signIn(e));
              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
      function signInWithTicket(_x26) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
        e = _this$_cache$keys11.refreshTokenKey,
        t = _this$_cache$keys11.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return rt;
}();
var it = function it(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        h = _e$data2.fileId,
        l = _e$data2.cosFileId,
        d = e.requestId,
        p = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": l,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: p,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: h,
          requestId: d
        }) : t(new te({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ot = function ot(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  at = function at(_ref7, t) {
    var e = _ref7.fileList;
    if (t = t || we(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t8 = _step3.value;
        if (!_t8 || "string" != typeof _t8) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return Ye(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ct = function ct(_ref8, t) {
    var e = _ref8.fileList;
    t = t || we(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = _createForOfIteratorHelper(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s9 = _step4.value;
        "object" == (0, _typeof2.default)(_s9) ? (_s9.hasOwnProperty("fileID") && _s9.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s9.fileID,
          max_age: _s9.maxAge
        })) : "string" == typeof _s9 ? n.push({
          fileid: _s9
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return Ye(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ut = /*#__PURE__*/function () {
    var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32(_ref9, t) {
      var e, n, s, r;
      return _regenerator.default.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              e = _ref9.fileID;
              _context32.next = 3;
              return ct.call(this, {
                fileList: [{
                  fileID: e,
                  maxAge: 600
                }]
              });
            case 3:
              n = _context32.sent.fileList[0];
              if (!("SUCCESS" !== n.code)) {
                _context32.next = 6;
                break;
              }
              return _context32.abrupt("return", t ? t(n) : new Promise(function (e) {
                e(n);
              }));
            case 6:
              s = Ye(this.config.env);
              r = n.download_url;
              if (!(r = encodeURI(r), !t)) {
                _context32.next = 10;
                break;
              }
              return _context32.abrupt("return", s.download({
                url: r
              }));
            case 10:
              _context32.t0 = t;
              _context32.next = 13;
              return s.download({
                url: r
              });
            case 13:
              _context32.t1 = _context32.sent;
              (0, _context32.t0)(_context32.t1);
            case 15:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, this);
    }));
    return function ut(_x27, _x28) {
      return _ref10.apply(this, arguments);
    };
  }(),
  ht = function ht(_ref11, i) {
    var e = _ref11.name,
      t = _ref11.data,
      n = _ref11.query,
      s = _ref11.parse,
      r = _ref11.search;
    var o = i || we();
    var a;
    try {
      a = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new te({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var c = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: a
    };
    return Ye(this.config.env).send("functions.invokeFunction", c).then(function (e) {
      if (e.code) o(null, e);else {
        var _t9 = e.data.response_data;
        if (s) o(null, {
          result: _t9,
          requestId: e.requestId
        });else try {
          _t9 = JSON.parse(e.data.response_data), o(null, {
            result: _t9,
            requestId: e.requestId
          });
        } catch (e) {
          o(new te({
            message: "response data must be json"
          }));
        }
      }
      return o.promise;
    }).catch(function (e) {
      o(e);
    }), o.promise;
  },
  lt = {
    timeout: 15e3,
    persistence: "session"
  },
  dt = {};
var pt = /*#__PURE__*/function () {
  function pt(e) {
    (0, _classCallCheck2.default)(this, pt);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(pt, [{
    key: "init",
    value: function init(e) {
      switch (ke.adapter || (this.requestClient = new ke.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = _objectSpread(_objectSpread({}, lt), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new pt(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref12.persistence;
      if (this.authObj) return this.authObj;
      var t = e || ke.adapter.primaryStorage || lt.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        xe[t] = new Ce(e), Oe[t] = new Ce(_objectSpread(_objectSpread({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, Ve[n.env] = new Ge(n), this.authObj = new rt(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return Ne.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Me.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return ht.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return at.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return ct.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return ut.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return it.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return ot.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      dt[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33(e, t) {
        var n;
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                n = dt[e];
                if (n) {
                  _context33.next = 3;
                  break;
                }
                throw new te({
                  message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
                });
              case 3:
                _context33.next = 5;
                return n.invoke(t, this);
              case 5:
                return _context33.abrupt("return", _context33.sent);
              case 6:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function invokeExtension(_x29, _x30) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref13 = be(e) || {},
        t = _ref13.adapter,
        n = _ref13.runtime;
      t && (ke.adapter = t), n && (ke.runtime = n);
    }
  }]);
  return pt;
}();
var ft = new pt();
function gt(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) {
    "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  }
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var mt = /*#__PURE__*/function () {
  function mt() {
    (0, _classCallCheck2.default)(this, mt);
  }
  (0, _createClass2.default)(mt, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers;
      return new Promise(function (e, r) {
        ne.request({
          url: gt("https:", t),
          data: n,
          method: "POST",
          header: s,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = ne.uploadFile({
            url: gt("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return mt;
}();
var yt = {
  setItem: function setItem(e, t) {
    ne.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return ne.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    ne.removeStorageSync(e);
  },
  clear: function clear() {
    ne.clearStorageSync();
  }
};
var _t = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: mt,
      localStorage: yt,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
ft.useAdapters(_t);
var wt = ft,
  vt = wt.init;
wt.init = function (e) {
  e.env = e.spaceId;
  var t = vt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      var n;
      t[e] = (n = t[e], function (e) {
        e = e || {};
        var _ee = ee(e),
          t = _ee.success,
          s = _ee.fail,
          r = _ee.complete;
        if (!(t || s || r)) return n.call(this, e);
        n.call(this, e).then(function (e) {
          t && t(e), r && r(e);
        }, function (e) {
          s && s(e), r && r(e);
        });
      }).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var It = wt;
var St = /*#__PURE__*/function (_le) {
  (0, _inherits2.default)(St, _le);
  var _super8 = _createSuper(St);
  function St() {
    (0, _classCallCheck2.default)(this, St);
    return _super8.apply(this, arguments);
  }
  (0, _createClass2.default)(St, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;
      return new Promise(function (e, t) {
        var n = "Anonymous_Access_token";
        _this11.setAccessToken(n), e(n);
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret);
      var r = ue();
      s["x-client-info"] = encodeURIComponent(JSON.stringify(r));
      var _se = se(),
        i = _se.token;
      return s["x-client-token"] = i, {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: JSON.parse(JSON.stringify(s))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref14) {
      var _this12 = this;
      var e = _ref14.url,
        t = _ref14.formData,
        n = _ref14.name,
        s = _ref14.filePath,
        r = _ref14.fileType,
        i = _ref14.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref15) {
      var _this13 = this;
      var e = _ref15.filePath,
        t = _ref15.cloudPath,
        _ref15$fileType = _ref15.fileType,
        n = _ref15$fileType === void 0 ? "image" : _ref15$fileType,
        s = _ref15.onUploadProgress;
      if (!t) throw new te({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        r = t.result.fileUrl;
        var c = {
          url: i,
          formData: o,
          name: a,
          filePath: e,
          fileType: n
        };
        return _this13.uploadFileToOSS(Object.assign({}, c, {
          onUploadProgress: s
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new te({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref16) {
      var e = _ref16.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return e.result;
        throw new te({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref17.fileList,
        t = _ref17.maxAge;
      if (!Array.isArray(e) || 0 === e.length) throw new te({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var n = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e,
          maxAge: t
        })
      };
      return this.request(this.setupRequest(n)).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new te({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return St;
}(le);
var bt = {
    init: function init(e) {
      var t = new St(e),
        n = {
          signInAnonymously: function signInAnonymously() {
            return t.authorize();
          },
          getLoginState: function getLoginState() {
            return Promise.resolve(!1);
          }
        };
      return t.auth = function () {
        return n;
      }, t.customAuth = t.auth, t;
    }
  },
  kt = n(function (e, t) {
    e.exports = r.enc.Hex;
  });
function At() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n = t.data,
    s = t.functionName,
    r = t.method,
    i = t.headers,
    _t$signHeaderKeys = t.signHeaderKeys,
    o = _t$signHeaderKeys === void 0 ? [] : _t$signHeaderKeys,
    a = t.config,
    c = Date.now(),
    u = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = 16 * Math.random() | 0;
      return ("x" === e ? t : 3 & t | 8).toString(16);
    }),
    h = Object.assign({}, i, {
      "x-from-app-id": a.spaceAppId,
      "x-from-env-id": a.spaceId,
      "x-to-env-id": a.spaceId,
      "x-from-instance-id": c,
      "x-from-function-name": s,
      "x-client-timestamp": c,
      "x-alipay-source": "client",
      "x-request-id": u,
      "x-alipay-callid": u,
      "x-trace-id": u
    }),
    l = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o),
    _ref18 = e.split("?") || [],
    _ref19 = (0, _slicedToArray2.default)(_ref18, 2),
    _ref19$ = _ref19[0],
    d = _ref19$ === void 0 ? "" : _ref19$,
    _ref19$2 = _ref19[1],
    p = _ref19$2 === void 0 ? "" : _ref19$2,
    f = function (e) {
      var t = e.signedHeaders.join(";"),
        n = e.signedHeaders.map(function (t) {
          return "".concat(t.toLowerCase(), ":").concat(e.headers[t], "\n");
        }).join(""),
        s = ye(e.body).toString(kt),
        r = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(n, "\n").concat(t, "\n").concat(s, "\n"),
        i = ye(r).toString(kt),
        o = "HMAC-SHA256\n".concat(e.timestamp, "\n").concat(i, "\n"),
        a = _e(o, e.secretKey).toString(kt);
      return "HMAC-SHA256 Credential=".concat(e.secretId, ", SignedHeaders=").concat(t, ", Signature=").concat(a);
    }({
      path: d,
      query: p,
      method: r,
      headers: h,
      timestamp: c,
      body: JSON.stringify(n),
      secretId: a.accessKey,
      secretKey: a.secretKey,
      signedHeaders: l.sort()
    });
  return {
    url: "".concat(a.endpoint).concat(e),
    headers: Object.assign({}, h, {
      Authorization: f
    })
  };
}
function Pt(_ref20) {
  var e = _ref20.url,
    t = _ref20.data,
    _ref20$method = _ref20.method,
    n = _ref20$method === void 0 ? "POST" : _ref20$method,
    _ref20$headers = _ref20.headers,
    s = _ref20$headers === void 0 ? {} : _ref20$headers;
  return new Promise(function (r, i) {
    ne.request({
      url: e,
      method: n,
      data: t,
      header: s,
      dataType: "json",
      complete: function complete() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = s["x-trace-id"] || "";
        if (!e.statusCode || e.statusCode >= 400) {
          var _ref21 = e.data || {},
            _n7 = _ref21.message,
            _s10 = _ref21.errMsg,
            _r3 = _ref21.trace_id;
          return i(new te({
            code: "SYS_ERR",
            message: _n7 || _s10 || "request:fail",
            requestId: _r3 || t
          }));
        }
        r({
          status: e.statusCode,
          data: e.data,
          headers: e.header,
          requestId: t
        });
      }
    });
  });
}
function Tt(e, t) {
  var n = e.path,
    s = e.data,
    _e$method = e.method,
    r = _e$method === void 0 ? "GET" : _e$method,
    _At = At(n, {
      functionName: "",
      data: s,
      method: r,
      headers: {
        "x-alipay-cloud-mode": "oss",
        "x-data-api-type": "oss",
        "x-expire-timestamp": Date.now() + 6e4
      },
      signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
      config: t
    }),
    i = _At.url,
    o = _At.headers;
  return Pt({
    url: i,
    data: s,
    method: r,
    headers: o
  }).then(function (e) {
    var t = e.data || {};
    if (!t.success) throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
    return t.data || {};
  }).catch(function (e) {
    throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
  });
}
function Ct() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = e.trim().replace(/^cloud:\/\//, ""),
    n = t.indexOf("/");
  if (n <= 0) throw new te({
    code: "INVALID_PARAM",
    message: "fileID不合法"
  });
  var s = t.substring(0, n),
    r = t.substring(n + 1);
  return s !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), r;
}
function xt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "cloud://".concat(this.config.spaceId, "/").concat(e.replace(/^\/+/, ""));
}
var Ot = /*#__PURE__*/function () {
  function Ot(e) {
    (0, _classCallCheck2.default)(this, Ot);
    if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), e.endpoint) {
      if ("string" != typeof e.endpoint) throw new Error("endpoint must be string");
      if (!/^https:\/\//.test(e.endpoint)) throw new Error("endpoint must start with https://");
      e.endpoint = e.endpoint.replace(/\/$/, "");
    }
    this.config = Object.assign({}, e, {
      endpoint: e.endpoint || "https://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn")
    });
  }
  (0, _createClass2.default)(Ot, [{
    key: "callFunction",
    value: function callFunction(e) {
      return function (e, t) {
        var n = e.name,
          s = e.data,
          r = "POST",
          _At2 = At("/functions/invokeFunction", {
            functionName: n,
            data: s,
            method: r,
            headers: {
              "x-to-function-name": n
            },
            signHeaderKeys: ["x-to-function-name"],
            config: t
          }),
          i = _At2.url,
          o = _At2.headers;
        return Pt({
          url: i,
          data: s,
          method: r,
          headers: o
        }).then(function (e) {
          return {
            errCode: 0,
            success: !0,
            requestId: e.requestId,
            result: e.data
          };
        }).catch(function (e) {
          throw new te({
            code: e.errCode,
            message: e.errMsg,
            requestId: e.requestId
          });
        });
      }(e, this.config);
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref22) {
      var e = _ref22.url,
        t = _ref22.filePath,
        n = _ref22.fileType,
        s = _ref22.formData,
        r = _ref22.onUploadProgress;
      return new Promise(function (i, o) {
        var a = ne.uploadFile({
          url: e,
          filePath: t,
          fileType: n,
          formData: s,
          name: "file",
          success: function success(e) {
            e && e.statusCode < 400 ? i(e) : o(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            o(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof r && a && "function" == typeof a.onProgressUpdate && a.onProgressUpdate(function (e) {
          r({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34(_ref23) {
        var e, _ref23$cloudPath, t, _ref23$fileType, n, s, r, i, o, a, c;
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                e = _ref23.filePath, _ref23$cloudPath = _ref23.cloudPath, t = _ref23$cloudPath === void 0 ? "" : _ref23$cloudPath, _ref23$fileType = _ref23.fileType, n = _ref23$fileType === void 0 ? "image" : _ref23$fileType, s = _ref23.onUploadProgress;
                if (!("string" !== f(t))) {
                  _context34.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context34.next = 5;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context34.next = 7;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                _context34.next = 9;
                return Tt({
                  path: "/".concat(t.replace(/^\//, ""), "?post_url")
                }, this.config);
              case 9:
                r = _context34.sent;
                i = r.file_id;
                o = r.upload_url;
                a = r.form_data;
                c = a && a.reduce(function (e, t) {
                  return e[t.key] = t.value, e;
                }, {});
                return _context34.abrupt("return", this.uploadFileToOSS({
                  url: o,
                  filePath: e,
                  fileType: n,
                  formData: c,
                  onUploadProgress: s
                }).then(function () {
                  return {
                    fileID: i
                  };
                }));
              case 15:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function uploadFile(_x31) {
        return _uploadFile2.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function () {
      var _getTempFileURL = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35(_ref24) {
        var _this14 = this;
        var e;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                e = _ref24.fileList;
                return _context35.abrupt("return", new Promise(function (t, n) {
                  (!e || e.length < 0) && n(new te({
                    errCode: "INVALID_PARAM",
                    errMsg: "fileList不能为空数组"
                  })), e.length > 50 && n(new te({
                    errCode: "INVALID_PARAM",
                    errMsg: "fileList数组长度不能超过50"
                  }));
                  var s = [];
                  var _iterator5 = _createForOfIteratorHelper(e),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _t10 = _step5.value;
                      "string" !== f(_t10) && n(new te({
                        errCode: "INVALID_PARAM",
                        errMsg: "fileList的元素必须是非空的字符串"
                      }));
                      var _e17 = Ct.call(_this14, _t10);
                      s.push({
                        file_id: _e17,
                        expire: 600
                      });
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                  Tt({
                    path: "/?download_url",
                    data: {
                      file_list: s
                    },
                    method: "POST"
                  }, _this14.config).then(function (e) {
                    var _e$file_list = e.file_list,
                      n = _e$file_list === void 0 ? [] : _e$file_list;
                    t({
                      fileList: n.map(function (e) {
                        return {
                          fileID: xt.call(_this14, e.file_id),
                          tempFileURL: e.download_url
                        };
                      })
                    });
                  }).catch(function (e) {
                    return n(e);
                  });
                }));
              case 2:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35);
      }));
      function getTempFileURL(_x32) {
        return _getTempFileURL.apply(this, arguments);
      }
      return getTempFileURL;
    }()
  }]);
  return Ot;
}();
var Et = {
  init: function init(e) {
    e.provider = "alipay";
    var t = new Ot(e);
    return t.auth = function () {
      return {
        signInAnonymously: function signInAnonymously() {
          return Promise.resolve();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!0);
        }
      };
    }, t;
  }
};
function Lt(_ref25) {
  var e = _ref25.data;
  var t;
  t = ue();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _se2 = se(),
      _e18 = _se2.token;
    _e18 && (n.uniIdToken = _e18);
  }
  return n;
}
function Rt() {
  return _Rt.apply(this, arguments);
}
function _Rt() {
  _Rt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee56() {
    var _this27 = this;
    var _ref67,
      e,
      t,
      _this$__dev__,
      n,
      s,
      r,
      i,
      o,
      a,
      _args6 = arguments;
    return _regenerator.default.wrap(function _callee56$(_context56) {
      while (1) {
        switch (_context56.prev = _context56.next) {
          case 0:
            _ref67 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, e = _ref67.name, t = _ref67.data;
            _context56.next = 3;
            return this.__dev__.initLocalNetwork();
          case 3:
            _this$__dev__ = this.__dev__, n = _this$__dev__.localAddress, s = _this$__dev__.localPort, r = {
              aliyun: "aliyun",
              tencent: "tcb",
              alipay: "alipay"
            }[this.config.provider], i = this.config.spaceId, o = "http://".concat(n, ":").concat(s, "/system/check-function"), a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);
            return _context56.abrupt("return", new Promise(function (t, n) {
              ne.request({
                method: "POST",
                url: o,
                data: {
                  name: e,
                  platform: P,
                  provider: r,
                  spaceId: i
                },
                timeout: 3e3,
                success: function success(e) {
                  t(e);
                },
                fail: function fail() {
                  t({
                    data: {
                      code: "NETWORK_ERROR",
                      message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                    }
                  });
                }
              });
            }).then(function () {
              var _ref68 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                e = _ref68.data;
              var _ref69 = e || {},
                t = _ref69.code,
                n = _ref69.message;
              return {
                code: 0 === t ? 0 : t || "SYS_ERR",
                message: n || "SYS_ERR"
              };
            }).then(function (_ref70) {
              var n = _ref70.code,
                s = _ref70.message;
              if (0 !== n) {
                switch (n) {
                  case "MODULE_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "FUNCTION_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "ACTION_ENCRYPTED":
                    console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                    break;
                  case "NETWORK_ERROR":
                    {
                      var _e30 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
                      throw console.error(_e30), new Error(_e30);
                    }
                  case "SWITCH_TO_CLOUD":
                    break;
                  default:
                    {
                      var _e31 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
                      throw console.error(_e31), new Error(_e31);
                    }
                }
                return _this27._callCloudFunction({
                  name: e,
                  data: t
                });
              }
              return new Promise(function (e, n) {
                var s = Lt.call(_this27, {
                  data: t
                });
                ne.request({
                  method: "POST",
                  url: a,
                  data: {
                    provider: r,
                    platform: P,
                    param: s
                  },
                  success: function success() {
                    var _ref71 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      t = _ref71.statusCode,
                      s = _ref71.data;
                    return !t || t >= 400 ? n(new te({
                      code: s.code || "SYS_ERR",
                      message: s.message || "request:fail"
                    })) : e({
                      result: s
                    });
                  },
                  fail: function fail(e) {
                    n(new te({
                      code: e.code || e.errCode || "SYS_ERR",
                      message: e.message || e.errMsg || "request:fail"
                    }));
                  }
                });
              });
            }));
          case 5:
          case "end":
            return _context56.stop();
        }
      }
    }, _callee56, this);
  }));
  return _Rt.apply(this, arguments);
}
var Ut = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var Nt = /[\\^$.*+?()[\]{}|]/g,
  Dt = RegExp(Nt.source);
function Mt(e, t, n) {
  return e.replace(new RegExp((s = t) && Dt.test(s) ? s.replace(Nt, "\\$&") : s, "g"), n);
  var s;
}
var qt = "none",
  Ft = "request",
  Kt = "response",
  jt = "both";
var $t = /*#__PURE__*/function () {
  function $t() {
    var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref26.secretType,
      t = _ref26.uniCloudIns;
    (0, _classCallCheck2.default)(this, $t);
    this.clientType = "", this.secretType = e || qt, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)($t, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = ae()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36(e) {
        return _regenerator.default.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", this.secretType === qt ? e : this.platformEncryptData(e));
              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));
      function encryptData(_x33) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37(e) {
        var _ref27, t, n;
        return _regenerator.default.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (!(this.secretType === qt)) {
                  _context37.next = 2;
                  break;
                }
                return _context37.abrupt("return", e);
              case 2:
                _ref27 = e || {}, t = _ref27.errCode, n = _ref27.content;
                return _context37.abrupt("return", t || !n ? e : this.secretType === Ft ? n : this.platformDecryptResult(e));
              case 4:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));
      function decryptResult(_x34) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
        var _ref29,
          n,
          _ref29$data,
          s,
          r,
          _args38 = arguments;
        return _regenerator.default.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _ref29 = _args38.length > 0 && _args38[0] !== undefined ? _args38[0] : {}, n = _ref29.name, _ref29$data = _ref29.data, s = _ref29$data === void 0 ? {} : _ref29$data;
                _context38.next = 3;
                return t.prepare();
              case 3:
                _context38.next = 5;
                return t.platformGetSignOption();
              case 5:
                (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context38.sent;
                _context38.next = 8;
                return e({
                  name: n,
                  data: s
                });
              case 8:
                r = _context38.sent;
                _context38.t0 = t.isClientKeyNotFound(r);
                if (!_context38.t0) {
                  _context38.next = 19;
                  break;
                }
                _context38.next = 13;
                return t.prepare({
                  forceUpdate: !0
                });
              case 13:
                _context38.next = 15;
                return t.platformGetSignOption();
              case 15:
                s._uniCloudOptions = _context38.sent;
                _context38.next = 18;
                return e({
                  name: n,
                  data: s
                });
              case 18:
                r = _context38.sent;
              case 19:
                return _context38.abrupt("return", r);
              case 20:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39() {
        var _ref31,
          n,
          _ref31$data,
          s,
          r,
          i,
          _r4,
          _args39 = arguments;
        return _regenerator.default.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _ref31 = _args39.length > 0 && _args39[0] !== undefined ? _args39[0] : {}, n = _ref31.name, _ref31$data = _ref31.data, s = _ref31$data === void 0 ? {} : _ref31$data;
                _context39.next = 3;
                return t.prepare();
              case 3:
                _context39.next = 5;
                return t.encryptData(s);
              case 5:
                r = _context39.sent;
                _context39.next = 8;
                return e({
                  name: n,
                  data: r
                });
              case 8:
                i = _context39.sent;
                if (!t.isClientKeyNotFound(i)) {
                  _context39.next = 21;
                  break;
                }
                _context39.next = 12;
                return t.prepare({
                  forceUpdate: !0
                });
              case 12:
                _context39.next = 14;
                return t.encryptData(s);
              case 14:
                _r4 = _context39.sent;
                _context39.next = 17;
                return t.platformGetSignOption();
              case 17:
                s._uniCloudOptions = _context39.sent;
                _context39.next = 20;
                return e({
                  name: n,
                  data: _r4
                });
              case 20:
                i = _context39.sent;
              case 21:
                _context39.next = 23;
                return t.decryptResult(i.result);
              case 23:
                i.result = _context39.sent;
                return _context39.abrupt("return", i);
              case 25:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39);
      }));
    }
  }]);
  return $t;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function Bt(e) {
  return parseInt(e) === e;
}
function Wt(e) {
  if (!Bt(e.length)) return !1;
  for (var t = 0; t < e.length; t++) {
    if (!Bt(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  }
  return !0;
}
function Ht(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!Wt(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (Bt(e.length) && Wt(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function zt(e) {
  return new Uint8Array(e);
}
function Jt(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var Gt,
  Vt = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return Ht(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  Yt = (Gt = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(Gt[(240 & s) >> 4] + Gt[15 & s]);
      }
      return t.join("");
    }
  }),
  Qt = {
    16: 10,
    24: 12,
    32: 14
  },
  Xt = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  Zt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  en = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  tn = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  nn = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  sn = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  rn = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  on = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  an = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  cn = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  un = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  hn = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  ln = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  dn = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  pn = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function fn(e) {
  for (var t = [], n = 0; n < e.length; n += 4) {
    t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  }
  return t;
}
var gn = /*#__PURE__*/function () {
  function gn(e) {
    (0, _classCallCheck2.default)(this, gn);
    if (!(this instanceof gn)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: Ht(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(gn, [{
    key: "_prepare",
    value: function _prepare() {
      var e = Qt[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) {
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      }
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = fn(this.key);
      for (t = 0; t < r; t++) {
        n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      }
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= Zt[o >> 16 & 255] << 24 ^ Zt[o >> 8 & 255] << 16 ^ Zt[255 & o] << 8 ^ Zt[o >> 24 & 255] ^ Xt[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {
          i[t] ^= i[t - 1];
        } else {
          for (t = 1; t < r / 2; t++) {
            i[t] ^= i[t - 1];
          }
          o = i[r / 2 - 1], i[r / 2] ^= Zt[255 & o] ^ Zt[o >> 8 & 255] << 8 ^ Zt[o >> 16 & 255] << 16 ^ Zt[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) {
            i[t] ^= i[t - 1];
          }
        }
        for (t = 0; t < r && c < s;) {
          u = c >> 2, h = c % 4, this._Ke[u][h] = i[t], this._Kd[e - u][h] = i[t++], c++;
        }
      }
      for (var u = 1; u < e; u++) {
        for (var h = 0; h < 4; h++) {
          o = this._Kd[u][h], this._Kd[u][h] = hn[o >> 24 & 255] ^ ln[o >> 16 & 255] ^ dn[o >> 8 & 255] ^ pn[255 & o];
        }
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = fn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Ke[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = tn[s[r] >> 24 & 255] ^ nn[s[(r + 1) % 4] >> 16 & 255] ^ sn[s[(r + 2) % 4] >> 8 & 255] ^ rn[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        }
        s = n.slice();
      }
      var o,
        a = zt(16);
      for (r = 0; r < 4; r++) {
        o = this._Ke[t][r], a[4 * r] = 255 & (Zt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Zt[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Zt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Zt[255 & s[(r + 3) % 4]] ^ o);
      }
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = fn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Kd[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = on[s[r] >> 24 & 255] ^ an[s[(r + 3) % 4] >> 16 & 255] ^ cn[s[(r + 2) % 4] >> 8 & 255] ^ un[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        }
        s = n.slice();
      }
      var o,
        a = zt(16);
      for (r = 0; r < 4; r++) {
        o = this._Kd[t][r], a[4 * r] = 255 & (en[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (en[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (en[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (en[255 & s[(r + 1) % 4]] ^ o);
      }
      return a;
    }
  }]);
  return gn;
}();
var mn = /*#__PURE__*/function () {
  function mn(e) {
    (0, _classCallCheck2.default)(this, mn);
    if (!(this instanceof mn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new gn(e);
  }
  (0, _createClass2.default)(mn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), Jt(n = this._aes.encrypt(n), t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), Jt(n = this._aes.decrypt(n), t, s);
      }
      return t;
    }
  }]);
  return mn;
}();
var yn = /*#__PURE__*/function () {
  function yn(e, t) {
    (0, _classCallCheck2.default)(this, yn);
    if (!(this instanceof yn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = zt(16);
    this._lastCipherblock = Ht(t, !0), this._aes = new gn(e);
  }
  (0, _createClass2.default)(yn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) {
          n[r] ^= this._lastCipherblock[r];
        }
        this._lastCipherblock = this._aes.encrypt(n), Jt(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) {
          t[s + r] = n[r] ^ this._lastCipherblock[r];
        }
        Jt(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return yn;
}();
var _n = /*#__PURE__*/function () {
  function _n(e, t, n) {
    (0, _classCallCheck2.default)(this, _n);
    if (!(this instanceof _n)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = zt(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = Ht(t, !0), this._aes = new gn(e);
  }
  (0, _createClass2.default)(_n, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = Ht(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Jt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Jt(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = Ht(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Jt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Jt(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return _n;
}();
var wn = /*#__PURE__*/function () {
  function wn(e, t) {
    (0, _classCallCheck2.default)(this, wn);
    if (!(this instanceof wn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = zt(16);
    this._lastPrecipher = Ht(t, !0), this._lastPrecipherIndex = 16, this._aes = new gn(e);
  }
  (0, _createClass2.default)(wn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ht(e, !0), n = 0; n < t.length; n++) {
        16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return wn;
}();
var vn = /*#__PURE__*/function () {
  function vn(e) {
    (0, _classCallCheck2.default)(this, vn);
    if (!(this instanceof vn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = zt(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(vn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) {
        this._counter[t] = e % 256, e = parseInt(e / 256);
      }
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = Ht(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return vn;
}();
var In = /*#__PURE__*/function () {
  function In(e, t) {
    (0, _classCallCheck2.default)(this, In);
    if (!(this instanceof In)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof vn || (t = new vn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new gn(e);
  }
  (0, _createClass2.default)(In, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ht(e, !0), n = 0; n < t.length; n++) {
        16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return In;
}();
var Sn = {
  AES: gn,
  Counter: vn,
  ModeOfOperation: {
    ecb: mn,
    cbc: yn,
    cfb: _n,
    ofb: wn,
    ctr: In
  },
  utils: {
    hex: Yt,
    utf8: Vt
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = Ht(e, !0)).length % 16,
          n = zt(e.length + t);
        Jt(e, n);
        for (var s = e.length; s < n.length; s++) {
          n[s] = t;
        }
        return n;
      },
      strip: function strip(e) {
        if ((e = Ht(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) {
          if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        }
        var r = zt(n);
        return Jt(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: Ht,
    createArray: zt,
    copyArray: Jt
  }
};
function bn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = Sn.utils.utf8.toBytes(n),
    i = Sn.utils.utf8.toBytes(e),
    o = new Sn.ModeOfOperation.cbc(s, r),
    a = Sn.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var kn = {
    code: 2e4,
    message: "System error"
  },
  An = {
    code: 20101,
    message: "Invalid client"
  },
  Pn = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  Tn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function Cn(e) {
  var _ref32 = e || {},
    t = _ref32.errSubject,
    n = _ref32.subject,
    s = _ref32.errCode,
    r = _ref32.errMsg,
    i = _ref32.code,
    o = _ref32.message,
    a = _ref32.cause;
  return new te({
    subject: t || n || "uni-secure-network",
    code: s || i || kn.code,
    message: r || o,
    cause: a
  });
}
var xn,
  On,
  En = null;
var Ln = /*#__PURE__*/function (_$t) {
  (0, _inherits2.default)(Ln, _$t);
  var _super9 = _createSuper(Ln);
  function Ln(e) {
    var _this15;
    (0, _classCallCheck2.default)(this, Ln);
    _this15 = _super9.call(this, e), _this15.clientType = "mp-weixin", _this15.userEncryptKey = null;
    return _this15;
  }
  (0, _createClass2.default)(Ln, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode || !!this.scopedGlobalCache.mpWeixinOpenid;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40() {
        return _regenerator.default.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                if (this.isLogin()) {
                  _context40.next = 7;
                  break;
                }
                if (this.scopedGlobalCache.initPromise) {
                  _context40.next = 3;
                  break;
                }
                throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
              case 3:
                _context40.next = 5;
                return this.scopedGlobalCache.initPromise;
              case 5:
                if (this.isLogin()) {
                  _context40.next = 7;
                  break;
                }
                throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
              case 7:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41() {
        var _this16 = this;
        var e;
        return _regenerator.default.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                if (!this.userEncryptKey) {
                  _context41.next = 2;
                  break;
                }
                return _context41.abrupt("return", this.userEncryptKey);
              case 2:
                if (!(En && En.expireTime)) {
                  _context41.next = 6;
                  break;
                }
                e = Date.now();
                if (!(En.expireTime - e > 0)) {
                  _context41.next = 6;
                  break;
                }
                return _context41.abrupt("return", (this.userEncryptKey = En, this.userEncryptKey));
              case 6:
                return _context41.abrupt("return", new Promise(function (e, t) {
                  uni.getUserCryptoManager().getLatestUserKey({
                    success: function success(t) {
                      En = t, _this16.userEncryptKey = t, e(_this16.userEncryptKey);
                    },
                    fail: function fail(e) {
                      t(Cn(_objectSpread(_objectSpread({}, Pn), {}, {
                        cause: e
                      })));
                    }
                  });
                }));
              case 7:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42() {
        var _yield$this$getUserEn, e, t, n;
        return _regenerator.default.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn = _context42.sent;
                e = _yield$this$getUserEn.encryptKey;
                t = _yield$this$getUserEn.iv;
                n = _yield$this$getUserEn.version;
                return _context42.abrupt("return", {
                  verifyClientSign: bn(JSON.stringify({
                    data: JSON.stringify({}),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ae().platform,
                    timestamp: Date.now()
                  }), e, t),
                  encryptKeyId: n,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                });
              case 7:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee43(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return _regenerator.default.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn2 = _context43.sent;
                t = _yield$this$getUserEn2.encryptKey;
                n = _yield$this$getUserEn2.iv;
                s = _yield$this$getUserEn2.version;
                r = {
                  secretType: this.secretType,
                  encryptKeyId: s,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                };
                return _context43.abrupt("return", this.secretType === Kt ? {
                  content: e,
                  _uniCloudOptions: r
                } : {
                  content: bn(JSON.stringify({
                    data: JSON.stringify(e),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ae().platform,
                    timestamp: Date.now()
                  }), t, n),
                  _uniCloudOptions: r
                });
              case 8:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
      function platformEncryptData(_x35) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee44(e) {
        var t, _yield$this$getUserEn3, n, s;
        return _regenerator.default.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                t = e.content;
                _context44.next = 3;
                return this.getUserEncryptKey();
              case 3:
                _yield$this$getUserEn3 = _context44.sent;
                n = _yield$this$getUserEn3.encryptKey;
                s = _yield$this$getUserEn3.iv;
                return _context44.abrupt("return", JSON.parse(function (e, t, n) {
                  var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                    r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                    i = Sn.utils.utf8.toBytes(n),
                    o = new Sn.ModeOfOperation.cbc(r, i),
                    a = Sn.padding.pkcs7.strip(o.decrypt(s));
                  return Sn.utils.utf8.fromBytes(a);
                }(t, n, s)));
              case 7:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));
      function platformDecryptResult(_x36) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      return !1;
    }
  }]);
  return Ln;
}($t);
function Rn(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop(_s11) {
    var r = t[_s11];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref33.type,
            t = _ref33.data,
            r = _ref33.errCode,
            i = _ref33.errMsg,
            o = _ref33.errSubject,
            a = _ref33.message;
          "success" === e ? n(t) : s(Cn({
            errCode: r,
            errMsg: Tn[r] || i || a,
            errSubject: o
          }));
        }])) : s(Cn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s11 = 0; _s11 < t.length; _s11++) {
    _loop(_s11);
  }
  return n;
}
var Un = /*#__PURE__*/function (_$t2) {
  (0, _inherits2.default)(Un, _$t2);
  var _super10 = _createSuper(Un);
  function Un(e) {
    var _this17;
    (0, _classCallCheck2.default)(this, Un);
    _this17 = _super10.call(this, e), _this17.clientType = "app", _this17.appUtils = _objectSpread({}, Rn(uni.requireNativePlugin("plus"))), _this17.systemInfo = xn || (xn = ae());
    return _this17;
  }
  (0, _createClass2.default)(Un, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee45() {
        return _regenerator.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return this.appUtils.hasClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId
                });
              case 2:
                this._hasClientKey = _context45.sent;
                return _context45.abrupt("return", this._hasClientKey);
              case 4:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee46() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _context46.next = 2;
                return this.appUtils.encryptGetClientKeyPayload({
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$ = _context46.sent;
                e = _yield$this$appUtils$.data;
                t = _yield$this$appUtils$.key;
                _context46.next = 7;
                return this.uniCloudIns.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    redirectTo: "encryption",
                    action: "getAppClientKey",
                    data: e,
                    key: t
                  }
                });
              case 7:
                _context46.t0 = _context46.sent.result;
                if (_context46.t0) {
                  _context46.next = 10;
                  break;
                }
                _context46.t0 = {};
              case 10:
                n = _context46.t0;
                if (!(0 !== n.errCode)) {
                  _context46.next = 13;
                  break;
                }
                throw function (e) {
                  return new te({
                    subject: e.errSubject || "uni-secure-network",
                    code: e.errCode || e.code || kn.code,
                    message: e.errMsg || e.message
                  });
                }(n);
              case 13:
                s = n.clientKey, r = n.key;
                _context46.next = 16;
                return this.appUtils.setClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  clientKey: s,
                  key: r
                });
              case 16:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee47() {
        var _this18 = this;
        var _ref34,
          _ref34$forceUpdate,
          e,
          _args47 = arguments;
        return _regenerator.default.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _ref34 = _args47.length > 0 && _args47[0] !== undefined ? _args47[0] : {}, _ref34$forceUpdate = _ref34.forceUpdate, e = _ref34$forceUpdate === void 0 ? !1 : _ref34$forceUpdate;
                _context47.t1 = !0;
                _context47.next = 4;
                return this.hasClientKey();
              case 4:
                _context47.t2 = _context47.sent;
                _context47.t0 = _context47.t1 !== _context47.t2;
                if (_context47.t0) {
                  _context47.next = 8;
                  break;
                }
                _context47.t0 = e;
              case 8:
                if (!_context47.t0) {
                  _context47.next = 10;
                  break;
                }
                return _context47.abrupt("return", (e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === l || !e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== p || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                  _this18.scopedGlobalCache.initStatus = d;
                }).catch(function (e) {
                  throw _this18.scopedGlobalCache.initStatus = p, e;
                }), this.scopedGlobalCache.initStatus = l), this.scopedGlobalCache.initPromise));
              case 10:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee48() {
        var _ref35,
          _ref35$forceUpdate,
          e,
          _args48 = arguments;
        return _regenerator.default.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _ref35 = _args48.length > 0 && _args48[0] !== undefined ? _args48[0] : {}, _ref35$forceUpdate = _ref35.forceUpdate, e = _ref35$forceUpdate === void 0 ? !1 : _ref35$forceUpdate;
                _context48.next = 3;
                return this.ensureClientKey({
                  forceUpdate: e
                });
              case 3:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee49() {
        var _yield$this$appUtils$2, e, t;
        return _regenerator.default.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                _context49.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$2 = _context49.sent;
                e = _yield$this$appUtils$2.data;
                t = _yield$this$appUtils$2.key;
                return _context49.abrupt("return", {
                  verifyClientSign: e,
                  encryptKeyId: t
                });
              case 6:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee50(e) {
        var _yield$this$appUtils$3, t, n, s;
        return _regenerator.default.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify(e)
                });
              case 2:
                _yield$this$appUtils$3 = _context50.sent;
                t = _yield$this$appUtils$3.data;
                n = _yield$this$appUtils$3.key;
                s = {
                  secretType: this.secretType,
                  encryptKeyId: n
                };
                return _context50.abrupt("return", this.secretType === Kt ? {
                  content: e,
                  _uniCloudOptions: s
                } : {
                  content: t,
                  _uniCloudOptions: s
                });
              case 7:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));
      function platformEncryptData(_x37) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee51(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return _regenerator.default.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                t = e.content;
                _e$_uniCloudOptions = e._uniCloudOptions;
                n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
                s = n.encryptKeyId;
                _context51.next = 6;
                return this.appUtils.decrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: t,
                  key: s
                });
              case 6:
                r = _context51.sent;
                return _context51.abrupt("return", JSON.parse(r.data));
              case 8:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));
      function platformDecryptResult(_x38) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.result || {};
      return 70009 === t.errCode && "uni-secure-network" === t.errSubject;
    }
  }]);
  return Un;
}($t);
function Nn() {
  var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref36.secretType;
  return e === Ft || e === Kt || e === jt;
}
function Dn() {
  var _ref37 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref37.name,
    _ref37$data = _ref37.data,
    t = _ref37$data === void 0 ? {} : _ref37$data;
  return "app" === P && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function Mn() {
  var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref38.provider,
    t = _ref38.spaceId,
    n = _ref38.functionName;
  var _ae = ae(),
    s = _ae.appId,
    r = _ae.uniPlatform,
    i = _ae.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref39.provider,
      t = _ref39.spaceId;
    var n = A;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var h = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!h) return !1;
  if ((c[h] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), Cn(An);
}
function qn(_ref40) {
  var e = _ref40.functionName,
    t = _ref40.result,
    n = _ref40.logPvd;
  if (S && this.__dev__.debugLog && t && t.requestId) {
    var _s12 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s12, "[/").concat(n, "-request]"));
  }
}
function Fn(e) {
  var t = e.callFunction,
    n = function n(_n8) {
      var _this19 = this;
      var s = _n8.name;
      _n8.data = Lt.call(e, {
        data: _n8.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb",
          alipay: "alipay"
        }[this.config.provider],
        i = Nn(_n8),
        o = Dn(_n8),
        a = i || o;
      return t.call(this, _n8).then(function (e) {
        return e.errCode = 0, !a && qn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && qn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref41 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref41$message = _ref41.message,
            e = _ref41$message === void 0 ? "" : _ref41$message,
            _ref41$extraInfo = _ref41.extraInfo,
            t = _ref41$extraInfo === void 0 ? {} : _ref41$extraInfo,
            _ref41$formatter = _ref41.formatter,
            n = _ref41$formatter === void 0 ? [] : _ref41$formatter;
          for (var _s13 = 0; _s13 < n.length; _s13++) {
            var _n$_s = n[_s13],
              _r5 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a = e.match(_r5);
            if (!_a) continue;
            var _c = _i3;
            for (var _e19 = 1; _e19 < _a.length; _e19++) {
              _c = Mt(_c, "{$".concat(_e19, "}"), _a[_e19]);
            }
            for (var _e20 in t) {
              _c = Mt(_c, "{".concat(_e20, "}"), t[_e20]);
            }
            return "replace" === _o3 ? _c : e + _c;
          }
          return e;
        }({
          message: "[".concat(_n8.name, "]: ").concat(e.message),
          formatter: Ut,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, S && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && C ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = Rt), o = Rt) : o = n, o = o.bind(e), Dn(t)) a = n.call(e, t);else if (function (_ref42) {
      var e = _ref42.name,
        _ref42$data = _ref42.data,
        t = _ref42$data === void 0 ? {} : _ref42$data;
      return "mp-weixin" === P && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (Nn(t)) {
      a = new On({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (Mn({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new On({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a.then(function (e) {
      return "undefined" != typeof UTSJSONObject && (e.result = new UTSJSONObject(e.result)), e;
    });
  };
}
On = "mp-weixin" !== P && "app" !== P ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw Cn({
      message: "Platform ".concat(P, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : k ? "mp-weixin" === P ? Ln : Un : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw Cn({
      message: "Platform ".concat(P, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var Kn = Symbol("CLIENT_DB_INTERNAL");
function jn(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Kn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t11 = e[n];
        return "function" == typeof _t11 ? _t11.bind(e) : _t11;
      }
      return t.get(e, n, s);
    }
  });
}
function $n(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var Bn = ["db.Geo", "db.command", "command.aggregate"];
function Wn(e, t) {
  return Bn.indexOf("".concat(e, ".").concat(t)) > -1;
}
function Hn(e) {
  switch (f(e)) {
    case "array":
      return e.map(function (e) {
        return Hn(e);
      });
    case "object":
      return e._internalType === Kn || Object.keys(e).forEach(function (t) {
        e[t] = Hn(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function zn(e) {
  return e && e.content && e.content.$method;
}
var Jn = /*#__PURE__*/function () {
  function Jn(e, t, n) {
    (0, _classCallCheck2.default)(this, Jn);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(Jn, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) {
        e = e.prevStage, t.push(e.content);
      }
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: Hn(e.$param)
          };
        })
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this.toJSON());
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = zn(e),
          _n9 = zn(e.prevStage);
        if ("aggregate" === t && "collection" === _n9 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === zn(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = zn(e),
          _n10 = zn(e.prevStage);
        if ("aggregate" === t && "command" === _n10) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return Gn({
          $method: e,
          $param: Hn(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: Hn(t)
      }), S) {
        var _e21 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t12 = _e21 && _e21.$param;
        _t12 && 1 === _t12.length && "string" == typeof _e21.$param[0] && _e21.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return Jn;
}();
function Gn(e, t, n) {
  return jn(new Jn(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), Wn(s, t) ? Gn({
        $method: t
      }, e, n) : function () {
        return Gn({
          $method: t,
          $param: Hn(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function Vn(_ref43) {
  var e = _ref43.path,
    t = _ref43.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.toJSON());
      }
    }]);
    return _class4;
  }();
}
function Yn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return jn(new e(t), {
    get: function get(e, t) {
      return Wn("db", t) ? Gn({
        $method: t
      }, null, e) : function () {
        return Gn({
          $method: t,
          $param: Hn(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var Qn = /*#__PURE__*/function (_ref44) {
  (0, _inherits2.default)(Qn, _ref44);
  var _super11 = _createSuper(Qn);
  function Qn() {
    (0, _classCallCheck2.default)(this, Qn);
    return _super11.apply(this, arguments);
  }
  (0, _createClass2.default)(Qn, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref45) {
      var _this20 = this;
      var e = _ref45.action,
        t = _ref45.command,
        n = _ref45.multiCommand,
        s = _ref45.queryList;
      function r(e, t) {
        if (n && s) for (var _n11 = 0; _n11 < s.length; _n11++) {
          var _r6 = s[_n11];
          _r6.udb && "function" == typeof _r6.udb.setResult && (t ? _r6.udb.setResult(t) : _r6.udb.setResult(e.result.dataList[_n11]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), M(q(o, "fail"), e).then(function () {
          return M(q(o, "complete"), e);
        }).then(function () {
          return r(null, e), Y(j, {
            type: W,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = M(q(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: h,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e22 = 0; _e22 < u.length; _e22++) {
          var _u$_e = u[_e22],
            _t13 = _u$_e.level,
            _n12 = _u$_e.message,
            _s14 = _u$_e.detail,
            _r7 = console["app" === P && "warn" === _t13 ? "error" : _t13] || console.log;
          var _i4 = "[System Info]" + _n12;
          _s14 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s14)), _r7(_i4);
        }
        if (t) {
          return a(new te({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (re({
          token: s,
          tokenExpired: c
        }), _this20._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this20._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), Y(B, {
          token: s,
          tokenExpired: c
        }));
        var h = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2(_t14) {
          var _h$_t = h[_t14],
            n = _h$_t.prop,
            s = _h$_t.tips;
          if (n in e.result) {
            var _t15 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t15;
              }
            });
          }
        };
        for (var _t14 = 0; _t14 < h.length; _t14++) {
          _loop2(_t14);
        }
        return function (e) {
          return M(q(o, "success"), e).then(function () {
            return M(q(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return Y(j, {
              type: W,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new te({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return Qn;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref46$uniClient = _ref46.uniClient,
      e = _ref46$uniClient === void 0 ? {} : _ref46$uniClient,
      _ref46$isJQL = _ref46.isJQL,
      t = _ref46$isJQL === void 0 ? !1 : _ref46$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t || (this.auth = $n(this._authCallBacks)), this._isJQL = t, Object.assign(this, $n(this._dbCallBacks)), this.env = jn({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = jn({}, {
      get: function get(e, t) {
        return Vn({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = Vn({
      path: [],
      method: "serverDate"
    }), this.RegExp = Vn({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }]);
  return _class5;
}());
var Xn = "token无效，跳转登录页面",
  Zn = "token过期，跳转登录页面",
  es = {
    TOKEN_INVALID_TOKEN_EXPIRED: Zn,
    TOKEN_INVALID_INVALID_CLIENTID: Xn,
    TOKEN_INVALID: Xn,
    TOKEN_INVALID_WRONG_TOKEN: Xn,
    TOKEN_INVALID_ANONYMOUS_USER: Xn
  },
  ts = {
    "uni-id-token-expired": Zn,
    "uni-id-check-token-failed": Xn,
    "uni-id-token-not-exist": Xn,
    "uni-id-check-device-feature-failed": Xn
  };
function ns(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function ss() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(ns(t, e.path)) : !1 === e.needLogin && s.push(ns(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function rs(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function is() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath || "";
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function os() {
  return rs(is());
}
function as() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = rs(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var cs = !!_pages.default.uniIdRouter;
var _ref47 = function () {
    var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref28$pages = _ref28.pages,
      t = _ref28$pages === void 0 ? [] : _ref28$pages,
      _ref28$subPackages = _ref28.subPackages,
      n = _ref28$subPackages === void 0 ? [] : _ref28$subPackages,
      _ref28$uniIdRouter = _ref28.uniIdRouter,
      s = _ref28$uniIdRouter === void 0 ? {} : _ref28$uniIdRouter,
      _ref28$tabBar = _ref28.tabBar,
      r = _ref28$tabBar === void 0 ? {} : _ref28$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _ss = ss(t),
      c = _ss.needLoginPage,
      u = _ss.notNeedLoginPage,
      _ref30 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _ss2 = ss(r, s),
            i = _ss2.needLoginPage,
            o = _ss2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      h = _ref30.needLoginPage,
      l = _ref30.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(h)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(l)),
      loginPageInTabBar: as(i, r)
    };
  }(),
  us = _ref47.loginPage,
  hs = _ref47.routerNeedLogin,
  ls = _ref47.resToLogin,
  ds = _ref47.needLoginPage,
  ps = _ref47.notNeedLoginPage,
  fs = _ref47.loginPageInTabBar;
if (ds.indexOf(us) > -1) throw new Error("Login page [".concat(us, "] should not be \"needLogin\", please check your pages.json"));
function gs(e) {
  var t = os();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e23 = 0; _e23 < r.length; _e23++) {
    var _t16 = r[_e23];
    ".." === _t16 ? i.pop() : "." !== _t16 && i.push(_t16);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function ms(e) {
  var t = rs(gs(e));
  return !(ps.indexOf(t) > -1) && (ds.indexOf(t) > -1 || hs.some(function (t) {
    return function (e, t) {
      return new RegExp(t).test(e);
    }(e, t);
  }));
}
function ys(_ref48) {
  var e = _ref48.redirect;
  var t = rs(e),
    n = rs(us);
  return os() !== n && t !== n;
}
function _s() {
  var _ref49 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref49.api,
    t = _ref49.redirect;
  if (!t || !ys({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(us, t);
  fs ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  });
}
function ws() {
  var _ref50 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref50.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _se3 = se(),
        e = _se3.token,
        t = _se3.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e24 = "uni-id-token-expired";
          n = {
            errCode: _e24,
            errMsg: ts[_e24]
          };
        }
      } else {
        var _e25 = "uni-id-check-token-failed";
        n = {
          errCode: _e25,
          errMsg: ts[_e25]
        };
      }
      return n;
    }();
  if (ms(e) && n) {
    n.uniIdRedirectUrl = e;
    if (J($).length > 0) return setTimeout(function () {
      Y($, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function vs() {
  !function () {
    var e = is(),
      _ws = ws({
        url: e
      }),
      t = _ws.abortLoginPageJump,
      n = _ws.autoToLoginPage;
    t || n && _s({
      api: "redirectTo",
      redirect: e
    });
  }();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3(_t17) {
    var n = e[_t17];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _ws2 = ws({
            url: e.url
          }),
          t = _ws2.abortLoginPageJump,
          s = _ws2.autoToLoginPage;
        return t ? e : s ? (_s({
          api: n,
          redirect: gs(e.url)
        }), !1) : e;
      }
    });
  };
  for (var _t17 = 0; _t17 < e.length; _t17++) {
    _loop3(_t17);
  }
}
function Is() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref51 = e || {},
            t = _ref51.errCode;
          return t in ts;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref52 = e || {},
            t = _ref52.errCode;
          return t in es;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = J($);
      Z().then(function () {
        var n = is();
        if (n && ys({
          redirect: n
        })) return t.length > 0 ? Y($, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (us && _s({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function Ss(e) {
  !function (e) {
    e.onResponse = function (e) {
      G(j, e);
    }, e.offResponse = function (e) {
      V(j, e);
    };
  }(e), function (e) {
    e.onNeedLogin = function (e) {
      G($, e);
    }, e.offNeedLogin = function (e) {
      V($, e);
    }, cs && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = !0, Z().then(function () {
      vs.call(e);
    }), ls && Is.call(e)));
  }(e), function (e) {
    e.onRefreshToken = function (e) {
      G(B, e);
    }, e.offRefreshToken = function (e) {
      V(B, e);
    };
  }(e);
}
var bs;
var ks = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  As = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function Ps() {
  var e = se().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse((s = t[1], decodeURIComponent(bs(s).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  var s;
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
bs = "function" != typeof atob ? function (e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !As.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t;
  e += "==".slice(2 - (3 & e.length));
  for (var n, s, r = "", i = 0; i < e.length;) {
    t = ks.indexOf(e.charAt(i++)) << 18 | ks.indexOf(e.charAt(i++)) << 12 | (n = ks.indexOf(e.charAt(i++))) << 6 | (s = ks.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
  }
  return r;
} : atob;
var Ts = n(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref53) {
      var s = _ref53.onChooseFile,
        r = _ref53.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t18 = s(e);
          if (void 0 !== _t18) return Promise.resolve(_t18).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) {
              c();
            }
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                provider: u.provider,
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                cloudPathAsRealPath: u.cloudPathAsRealPath,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  Cs = t(Ts);
var xs = "manual";
function Os(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {},
        mixinDatacomError: null
      };
    },
    created: function created() {
      var _this21 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this21[t]);
        }), e;
      }, function (e, t) {
        if (_this21.loadtime === xs) return;
        var n = !1;
        var s = [];
        for (var _r8 = 2; _r8 < e.length; _r8++) {
          e[_r8] !== t[_r8] && (s.push(e[_r8]), n = !0);
        }
        e[0] !== t[0] && (_this21.mixinDatacomPage.current = _this21.pageCurrent), _this21.mixinDatacomPage.size = _this21.pageSize, _this21.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this22 = this;
        var _ref54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref54$getone = _ref54.getone,
          e = _ref54$getone === void 0 ? !1 : _ref54$getone,
          t = _ref54.success,
          n = _ref54.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then(function (n) {
          _this22.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this22.getcount && (_this22.mixinDatacomPage.count = r), _this22.mixinDatacomHasMore = s.length < _this22.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this22.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this22.mixinDatacomLoading = !1, _this22.mixinDatacomErrorMessage = e, _this22.mixinDatacomError = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n13;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n;
        t = t || {}, n = "undefined" != typeof __uniX && __uniX ? e.databaseForJQL(this.spaceInfo) : e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n13 = n).collection.apply(_n13, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var h = t.orderby || this.orderby;
        h && (n = n.orderBy(h));
        var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          p = void 0 !== t.getcount ? t.getcount : this.getcount,
          f = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: p
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return f && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;
      }
    }
  };
}
function Es(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n14 = n,
      s = _n14.customUI,
      r = _n14.loadingOptions,
      i = _n14.errorOptions,
      o = _n14.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        switch (c) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function () {
          var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref55.fn,
            t = _ref55.interceptorName,
            n = _ref55.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee52() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return _regenerator.default.wrap(function _callee52$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      s[_key2] = _args[_key2];
                    }
                    r = n ? n({
                      params: s
                    }) : {};
                    _context52.prev = 2;
                    _context52.next = 5;
                    return M(q(t, "invoke"), _objectSpread({}, r));
                  case 5:
                    _context52.next = 7;
                    return e.apply(void 0, s);
                  case 7:
                    i = _context52.sent;
                    _context52.next = 10;
                    return M(q(t, "success"), _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 10:
                    return _context52.abrupt("return", i);
                  case 13:
                    _context52.prev = 13;
                    _context52.t0 = _context52["catch"](2);
                    o = _context52.t0;
                    _context52.next = 18;
                    return M(q(t, "fail"), _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }));
                  case 18:
                    throw o;
                  case 19:
                    _context52.prev = 19;
                    _context52.next = 22;
                    return M(q(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }) : _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 22:
                    return _context52.finish(19);
                  case 23:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee52, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee54() {
              var l,
                _len3,
                h,
                _key3,
                d,
                p,
                _ref57,
                f,
                g,
                m,
                y,
                _e26,
                _yield,
                _t19,
                _n15,
                _args4 = arguments;
              return _regenerator.default.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      a && uni.showLoading({
                        title: r.title,
                        mask: r.mask
                      });
                      for (_len3 = _args4.length, h = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        h[_key3] = _args4[_key3];
                      }
                      d = {
                        name: t,
                        type: u,
                        data: {
                          method: c,
                          params: h
                        }
                      };
                      "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                        var n = t.data.method,
                          s = e.secretMethods || {},
                          r = s[n] || s["*"];
                        r && (t.secretType = r);
                      }(n, d);
                      p = !1;
                      _context54.prev = 5;
                      _context54.next = 8;
                      return e.callFunction(d);
                    case 8:
                      l = _context54.sent;
                      _context54.next = 14;
                      break;
                    case 11:
                      _context54.prev = 11;
                      _context54.t0 = _context54["catch"](5);
                      p = !0, l = {
                        result: new te(_context54.t0)
                      };
                    case 14:
                      _ref57 = l.result || {}, f = _ref57.errSubject, g = _ref57.errCode, m = _ref57.errMsg, y = _ref57.newToken;
                      if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (re(y), Y(B, _objectSpread({}, y))), g)) {
                        _context54.next = 39;
                        break;
                      }
                      _e26 = m;
                      if (!(p && o)) {
                        _context54.next = 24;
                        break;
                      }
                      _context54.next = 20;
                      return o({
                        objectName: t,
                        methodName: c,
                        params: h,
                        errSubject: f,
                        errCode: g,
                        errMsg: m
                      });
                    case 20:
                      _context54.t1 = _context54.sent.errMsg;
                      if (_context54.t1) {
                        _context54.next = 23;
                        break;
                      }
                      _context54.t1 = m;
                    case 23:
                      _e26 = _context54.t1;
                    case 24:
                      if (!a) {
                        _context54.next = 37;
                        break;
                      }
                      if (!("toast" === i.type)) {
                        _context54.next = 29;
                        break;
                      }
                      uni.showToast({
                        title: _e26,
                        icon: "none"
                      });
                      _context54.next = 37;
                      break;
                    case 29:
                      if (!("modal" !== i.type)) {
                        _context54.next = 31;
                        break;
                      }
                      throw new Error("Invalid errorOptions.type: ".concat(i.type));
                    case 31:
                      _context54.next = 33;
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee53() {
                        var _ref59,
                          e,
                          t,
                          n,
                          s,
                          r,
                          _args2 = arguments;
                        return _regenerator.default.wrap(function _callee53$(_context53) {
                          while (1) {
                            switch (_context53.prev = _context53.next) {
                              case 0:
                                _ref59 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref59.title, t = _ref59.content, n = _ref59.showCancel, s = _ref59.cancelText, r = _ref59.confirmText;
                                return _context53.abrupt("return", new Promise(function (i, o) {
                                  uni.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: n,
                                    cancelText: s,
                                    confirmText: r,
                                    success: function success(e) {
                                      i(e);
                                    },
                                    fail: function fail() {
                                      i({
                                        confirm: !1,
                                        cancel: !0
                                      });
                                    }
                                  });
                                }));
                              case 2:
                              case "end":
                                return _context53.stop();
                            }
                          }
                        }, _callee53);
                      }))({
                        title: "提示",
                        content: _e26,
                        showCancel: i.retry,
                        cancelText: "取消",
                        confirmText: i.retry ? "重试" : "确定"
                      });
                    case 33:
                      _yield = _context54.sent;
                      _t19 = _yield.confirm;
                      if (!(i.retry && _t19)) {
                        _context54.next = 37;
                        break;
                      }
                      return _context54.abrupt("return", s.apply(void 0, h));
                    case 37:
                      _n15 = new te({
                        subject: f,
                        code: g,
                        message: m,
                        requestId: l.requestId
                      });
                      throw _n15.detail = l.result, Y(j, {
                        type: z,
                        content: _n15
                      }), _n15;
                    case 39:
                      return _context54.abrupt("return", (Y(j, {
                        type: z,
                        content: l.result
                      }), l.result));
                    case 40:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, null, [[5, 11]]);
            }));
            function s() {
              return _s15.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref60 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref60.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function Ls(e) {
  return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function Rs() {
  return _Rs.apply(this, arguments);
}
function _Rs() {
  _Rs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee57() {
    var _ref72,
      e,
      _ref72$callLoginByWei,
      t,
      n,
      s,
      r,
      _args7 = arguments;
    return _regenerator.default.wrap(function _callee57$(_context57) {
      while (1) {
        switch (_context57.prev = _context57.next) {
          case 0:
            _ref72 = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, e = _ref72.openid, _ref72$callLoginByWei = _ref72.callLoginByWeixin, t = _ref72$callLoginByWei === void 0 ? !1 : _ref72$callLoginByWei;
            n = Ls(this);
            if (!("mp-weixin" !== P)) {
              _context57.next = 4;
              break;
            }
            throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(P, "`"));
          case 4:
            if (!(e && t)) {
              _context57.next = 6;
              break;
            }
            throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
          case 6:
            if (!e) {
              _context57.next = 8;
              break;
            }
            return _context57.abrupt("return", (n.mpWeixinOpenid = e, {}));
          case 8:
            _context57.next = 10;
            return new Promise(function (e, t) {
              uni.login({
                success: function success(t) {
                  e(t.code);
                },
                fail: function fail(e) {
                  t(new Error(e.errMsg));
                }
              });
            });
          case 10:
            s = _context57.sent;
            r = this.importObject("uni-id-co", {
              customUI: !0
            });
            _context57.next = 14;
            return r.secureNetworkHandshakeByWeixin({
              code: s,
              callLoginByWeixin: t
            });
          case 14:
            n.mpWeixinCode = s;
            return _context57.abrupt("return", {
              code: s
            });
          case 16:
          case "end":
            return _context57.stop();
        }
      }
    }, _callee57, this);
  }));
  return _Rs.apply(this, arguments);
}
function Us(_x39) {
  return _Us.apply(this, arguments);
}
function _Us() {
  _Us = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee58(e) {
    var t;
    return _regenerator.default.wrap(function _callee58$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            t = Ls(this);
            return _context58.abrupt("return", (t.initPromise || (t.initPromise = Rs.call(this, e).then(function (e) {
              return e;
            }).catch(function (e) {
              throw delete t.initPromise, e;
            })), t.initPromise));
          case 2:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee58, this);
  }));
  return _Us.apply(this, arguments);
}
function Ns(e) {
  return function () {
    var _ref61 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref61.openid,
      _ref61$callLoginByWei = _ref61.callLoginByWeixin,
      n = _ref61$callLoginByWei === void 0 ? !1 : _ref61$callLoginByWei;
    return Us.call(e, {
      openid: t,
      callLoginByWeixin: n
    });
  };
}
function Ds(e) {
  var t = {
    getSystemInfo: uni.getSystemInfo,
    getPushClientId: uni.getPushClientId
  };
  return function (n) {
    return new Promise(function (s, r) {
      t[e](_objectSpread(_objectSpread({}, n), {}, {
        success: function success(e) {
          s(e);
        },
        fail: function fail(e) {
          r(e);
        }
      }));
    });
  };
}
var Ms = /*#__PURE__*/function (_ref62) {
  (0, _inherits2.default)(Ms, _ref62);
  var _super12 = _createSuper(Ms);
  function Ms() {
    var _this23;
    (0, _classCallCheck2.default)(this, Ms);
    _this23 = _super12.call(this), _this23._uniPushMessageCallback = _this23._receivePushMessage.bind((0, _assertThisInitialized2.default)(_this23)), _this23._currentMessageId = -1, _this23._payloadQueue = [];
    return _this23;
  }
  (0, _createClass2.default)(Ms, [{
    key: "init",
    value: function init() {
      var _this24 = this;
      return Promise.all([Ds("getSystemInfo")(), Ds("getPushClientId")()]).then(function () {
        var _ref63 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
          _ref64 = (0, _slicedToArray2.default)(_ref63, 2),
          _ref64$ = _ref64[0];
        _ref64$ = _ref64$ === void 0 ? {} : _ref64$;
        var e = _ref64$.appId,
          _ref64$2 = _ref64[1];
        _ref64$2 = _ref64$2 === void 0 ? {} : _ref64$2;
        var t = _ref64$2.cid;
        if (!e) throw new Error("Invalid appId, please check the manifest.json file");
        if (!t) throw new Error("Invalid push client id");
        _this24._appId = e, _this24._pushClientId = t, _this24._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), _this24.emit("open"), _this24._initMessageListener();
      }, function (e) {
        throw _this24.emit("error", e), _this24.close(), e;
      });
    }
  }, {
    key: "open",
    value: function () {
      var _open = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee55() {
        return _regenerator.default.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                return _context55.abrupt("return", this.init());
              case 1:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));
      function open() {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "_isUniCloudSSE",
    value: function _isUniCloudSSE(e) {
      if ("receive" !== e.type) return !1;
      var t = e && e.data && e.data.payload;
      return !(!t || "UNI_CLOUD_SSE" !== t.channel || t.seqId !== this._seqId);
    }
  }, {
    key: "_receivePushMessage",
    value: function _receivePushMessage(e) {
      if (!this._isUniCloudSSE(e)) return;
      var t = e && e.data && e.data.payload,
        n = t.action,
        s = t.messageId,
        r = t.message;
      this._payloadQueue.push({
        action: n,
        messageId: s,
        message: r
      }), this._consumMessage();
    }
  }, {
    key: "_consumMessage",
    value: function _consumMessage() {
      var _this25 = this;
      for (;;) {
        var _e27 = this._payloadQueue.find(function (e) {
          return e.messageId === _this25._currentMessageId + 1;
        });
        if (!_e27) break;
        this._currentMessageId++, this._parseMessagePayload(_e27);
      }
    }
  }, {
    key: "_parseMessagePayload",
    value: function _parseMessagePayload(e) {
      var t = e.action,
        n = e.messageId,
        s = e.message;
      "end" === t ? this._end({
        messageId: n,
        message: s
      }) : "message" === t && this._appendMessage({
        messageId: n,
        message: s
      });
    }
  }, {
    key: "_appendMessage",
    value: function _appendMessage() {
      var _ref65 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref65.messageId,
        t = _ref65.message;
      this.emit("message", t);
    }
  }, {
    key: "_end",
    value: function _end() {
      var _ref66 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref66.messageId,
        t = _ref66.message;
      this.emit("end", t), this.close();
    }
  }, {
    key: "_initMessageListener",
    value: function _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        appId: this._appId,
        pushClientId: this._pushClientId,
        seqId: this._seqId
      };
    }
  }, {
    key: "close",
    value: function close() {
      this._destroy(), this.emit("close");
    }
  }]);
  return Ms;
}( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
    this._callback = {};
  }
  (0, _createClass2.default)(_class6, [{
    key: "addListener",
    value: function addListener(e, t) {
      this._callback[e] || (this._callback[e] = []), this._callback[e].push(t);
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return this.addListener(e, t);
    }
  }, {
    key: "removeListener",
    value: function removeListener(e, t) {
      if (!t) throw new Error('The "listener" argument must be of type function. Received undefined');
      var n = this._callback[e];
      if (!n) return;
      var s = function (e, t) {
        for (var _n16 = e.length - 1; _n16 >= 0; _n16--) {
          if (e[_n16] === t) return _n16;
        }
        return -1;
      }(n, t);
      n.splice(s, 1);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return this.removeListener(e, t);
    }
  }, {
    key: "removeAllListener",
    value: function removeAllListener(e) {
      delete this._callback[e];
    }
  }, {
    key: "emit",
    value: function emit(e) {
      var n = this._callback[e];
      for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        t[_key4 - 1] = arguments[_key4];
      }
      if (n) for (var _e28 = 0; _e28 < n.length; _e28++) {
        n[_e28].apply(n, t);
      }
    }
  }]);
  return _class6;
}());
function qs(_x40, _x41) {
  return _qs.apply(this, arguments);
}
function _qs() {
  _qs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee59(e, t) {
    var n, _e32, s;
    return _regenerator.default.wrap(function _callee59$(_context59) {
      while (1) {
        switch (_context59.prev = _context59.next) {
          case 0:
            n = "http://".concat(e, ":").concat(t, "/system/ping");
            _context59.prev = 1;
            _context59.next = 4;
            return s = {
              url: n,
              timeout: 500
            }, new Promise(function (e, t) {
              ne.request(_objectSpread(_objectSpread({}, s), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });
          case 4:
            _e32 = _context59.sent;
            return _context59.abrupt("return", !(!_e32.data || 0 !== _e32.data.code));
          case 8:
            _context59.prev = 8;
            _context59.t0 = _context59["catch"](1);
            return _context59.abrupt("return", !1);
          case 11:
          case "end":
            return _context59.stop();
        }
      }
    }, _callee59, null, [[1, 8]]);
  }));
  return _qs.apply(this, arguments);
}
function Fs(_x42) {
  return _Fs.apply(this, arguments);
}
function _Fs() {
  _Fs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee61(e) {
    var _ae2, _e33, _t21, t, _t$debugInfo, n, s, _yield2, r, i, o;
    return _regenerator.default.wrap(function _callee61$(_context61) {
      while (1) {
        switch (_context61.prev = _context61.next) {
          case 0:
            if (S) {
              _context61.next = 2;
              break;
            }
            return _context61.abrupt("return", Promise.resolve());
          case 2:
            if ("app" === P) {
              _ae2 = ae(), _e33 = _ae2.osName, _t21 = _ae2.osVersion;
              "ios" === _e33 && function (e) {
                if (!e || "string" != typeof e) return 0;
                var t = e.match(/^(\d+)./);
                return t && t[1] ? parseInt(t[1]) : 0;
              }(_t21) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
            }
            t = e.__dev__;
            if (t.debugInfo) {
              _context61.next = 6;
              break;
            }
            return _context61.abrupt("return");
          case 6:
            _t$debugInfo = t.debugInfo;
            n = _t$debugInfo.address;
            s = _t$debugInfo.servePort;
            _context61.next = 11;
            return function () {
              var _ref73 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee60(e, t) {
                var n, _s16, _r9;
                return _regenerator.default.wrap(function _callee60$(_context60) {
                  while (1) {
                    switch (_context60.prev = _context60.next) {
                      case 0:
                        _s16 = 0;
                      case 1:
                        if (!(_s16 < e.length)) {
                          _context60.next = 11;
                          break;
                        }
                        _r9 = e[_s16];
                        _context60.next = 5;
                        return qs(_r9, t);
                      case 5:
                        if (!_context60.sent) {
                          _context60.next = 8;
                          break;
                        }
                        n = _r9;
                        return _context60.abrupt("break", 11);
                      case 8:
                        _s16++;
                        _context60.next = 1;
                        break;
                      case 11:
                        return _context60.abrupt("return", {
                          address: n,
                          port: t
                        });
                      case 12:
                      case "end":
                        return _context60.stop();
                    }
                  }
                }, _callee60);
              }));
              return function (_x43, _x44) {
                return _ref73.apply(this, arguments);
              };
            }()(n, s);
          case 11:
            _yield2 = _context61.sent;
            r = _yield2.address;
            if (!r) {
              _context61.next = 15;
              break;
            }
            return _context61.abrupt("return", (t.localAddress = r, void (t.localPort = s)));
          case 15:
            i = console["app" === P ? "error" : "warn"];
            o = "";
            if (!("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, o = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === P && (o += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === P.indexOf("mp-") && (o += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t.debugInfo.forceRemote)) {
              _context61.next = 19;
              break;
            }
            throw new Error(o);
          case 19:
            i(o);
          case 20:
          case "end":
            return _context61.stop();
        }
      }
    }, _callee61);
  }));
  return _Fs.apply(this, arguments);
}
function Ks(e) {
  e._initPromiseHub || (e._initPromiseHub = new v({
    createPromise: function createPromise() {
      var t = Promise.resolve();
      var n;
      n = 1, t = new Promise(function (e) {
        setTimeout(function () {
          e();
        }, n);
      });
      var s = e.auth();
      return t.then(function () {
        return s.getLoginState();
      }).then(function (e) {
        return e ? Promise.resolve() : s.signInAnonymously();
      });
    }
  }));
}
var js = {
  tcb: It,
  tencent: It,
  aliyun: de,
  private: bt,
  alipay: Et
};
var $s = new ( /*#__PURE__*/function () {
  function _class7() {
    (0, _classCallCheck2.default)(this, _class7);
  }
  (0, _createClass2.default)(_class7, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = js[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), S && function (e) {
        if (!S) return;
        var t = {};
        e.__dev__ = t, t.debugLog = S && ("web" === P && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === P);
        var n = T;
        n && !n.code && (t.debugInfo = n);
        var s = new v({
          createPromise: function createPromise() {
            return Fs(e);
          }
        });
        t.initLocalNetwork = function () {
          return s.exec();
        };
      }(t), Ks(t), Fn(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = Yn(Qn, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = Yn(Qn, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = Ps, e.chooseAndUploadFile = Cs.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return Os(e);
          }
        }), e.SSEChannel = Ms, e.initSecureNetworkByWeixin = Ns(e), e.importObject = Es(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return n.apply(t, Array.from(arguments));
        }, t[e] = function (e, t) {
          return function (n) {
            var _this26 = this;
            var s = !1;
            if ("callFunction" === t) {
              var _e29 = n && n.type || c;
              s = _e29 !== c;
            }
            var r = "callFunction" === t && !s,
              i = this._initPromiseHub.exec();
            n = n || {};
            var _ee2 = ee(n),
              o = _ee2.success,
              a = _ee2.fail,
              u = _ee2.complete,
              h = i.then(function () {
                return s ? Promise.resolve() : M(q(t, "invoke"), n);
              }).then(function () {
                return e.call(_this26, n);
              }).then(function (e) {
                return s ? Promise.resolve(e) : M(q(t, "success"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return r && Y(j, {
                    type: H,
                    content: e
                  }), Promise.resolve(e);
                });
              }, function (e) {
                return s ? Promise.reject(e) : M(q(t, "fail"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return Y(j, {
                    type: H,
                    content: e
                  }), Promise.reject(e);
                });
              });
            if (!(o || a || u)) return h;
            h.then(function (e) {
              o && o(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            }, function (e) {
              a && a(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            });
          };
        }(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class7;
}())();
(function () {
  var e = C;
  var t = {};
  if (e && 1 === e.length) t = e[0], $s = $s.init(t), $s._isDefault = !0;else {
    var _t20 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    var _n17;
    _n17 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : x ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t20.forEach(function (e) {
      $s[e] = function () {
        return console.error(_n17), Promise.reject(new te({
          code: "SYS_ERR",
          message: _n17
        }));
      };
    });
  }
  Object.assign($s, {
    get mixinDatacom() {
      return Os($s);
    }
  }), Ss($s), $s.addInterceptor = N, $s.removeInterceptor = D, $s.interceptObject = F, S && "web" === P && (window.uniCloud = $s);
})();
var Bs = $s;
exports.default = Bs;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 47), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 48)["default"]))

/***/ }),
/* 47 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 48 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Behavior = Behavior;
exports.Component = Component;
exports.Page = Page;
exports.nextTick = exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 49));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 28));
var _PROP_DEFAULT_VALUES;
function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}
function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var SOURCE_KEY = '__data__';
var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed'
};
var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);
var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize'
};
var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);
var PAGE_LIFECYCLE = ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}
function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}
function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {}
  };
  parseComponents(vueComponentOptions);
  parseData(mpComponentOptions.data, vueComponentOptions);
  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);
  return vueComponentOptions;
}
function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}
function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}
function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}
function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).push(mpComponentOptions[name]);
    }
  });
}
var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {}
};
function callDefinitionFilter(mpComponentOptions) {
  var behaviors = mpComponentOptions.behaviors,
    definitionFilter = mpComponentOptions.definitionFilter;
  var behaviorDefinitionFilters = [];
  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }
  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}
function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}
function parseBehavior(behavior) {
  var data = behavior.data,
    methods = behavior.methods,
    behaviors = behavior.behaviors,
    properties = behavior.properties;
  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);
  return vueComponentOptions;
}
var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }
      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String
        };
      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    }
  }
};

function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}
function parseSinglePath(path) {
  return path.split('.');
}
function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {
    return parseSinglePath(path);
  });
}
function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }
  var mpObservers = vueComponentOptions.mpOptions.mpObservers;
  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path]
    });
  });
}
function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}
function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}
function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: ''
    };
  });
}
function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}
function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}
function parseComponent(mpComponentOptions) {
  var data = mpComponentOptions.data,
    options = mpComponentOptions.options,
    methods = mpComponentOptions.methods,
    behaviors = mpComponentOptions.behaviors,
    lifetimes = mpComponentOptions.lifetimes,
    observers = mpComponentOptions.observers,
    relations = mpComponentOptions.relations,
    properties = mpComponentOptions.properties,
    pageLifetimes = mpComponentOptions.pageLifetimes,
    externalClasses = mpComponentOptions.externalClasses;
  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseComponents(vueComponentOptions);
  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);
  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);
  return vueComponentOptions;
}
function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}
function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}
function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}
function findParentRelation(parentVm, target, type) {
  var relations = parentVm && parentVm.$options.mpOptions && parentVm.$options.mpOptions.relations;
  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}
function initParentRelation(vm, childRelation, match) {
  var _match = match(vm, vm.$options.mpOptions.path),
    _match2 = (0, _slicedToArray2.default)(_match, 2),
    parentRelation = _match2[0],
    parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }
  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);
  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}
function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}
function initRelations(vm) {
  var _ref = vm.$options.mpOptions || {},
    relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}
function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {
    return handler();
  });
}
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};
function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}
function setData(data, callback) {
  var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
 * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
 */

var _toString$1 = Object.prototype.toString;
/**
 * 深度assign的函数
 * @param {Object} targetObject 要被拷贝的目标对象
 * @param {Object} originObject 拷贝的源对象
 * @return {Object} merge后的对象
 */
var deepAssign = function deepAssign() {
  var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
 * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
 * @param {*} [originObj] 原对象
 * @return {Object|Array} 拷贝结果
 */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};
var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, String, ''), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Number, 0), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Boolean, false), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Object, null), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Array, []), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, null, null), _PROP_DEFAULT_VALUES);
function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}
function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}
function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}
function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}
function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}
function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' && typeof vm[observer] === 'function') {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}
function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }
  var propsData = deepClone(vm.$options.propsData) || {};
  var _loop = function _loop(key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      }
    });
  };
  for (var key in properties) {
    _loop(key);
  }
}
function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}
function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));
  vm[SOURCE_KEY] = instanceData;
  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    }
  };
  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition
  });
  vm.setData = setData;
  initProperties(vm, instanceData);
  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}
function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset
    };
    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop
    };
    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {
      return !vm._isDestroyed;
    });
  };
  vm._$updateProperties = updateProperties;
}
function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}
var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;
    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {
    // properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  }
};
global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);
function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}
function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}
function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}
function Behavior(options) {
  return options;
}
var nextTick = _vue.default.nextTick;
exports.nextTick = nextTick;
var index = uni.__$wx__;
var _default = index;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 47)))

/***/ }),
/* 49 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 50);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 51);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 52);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 54);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 50 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 51 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 52 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 53);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 53 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 54 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 55 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 56);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 57);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 52);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 58);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 56 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 53);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 57 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 58 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 59 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 24);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 21);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 60);
var construct = __webpack_require__(/*! ./construct.js */ 61);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 60 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 61 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 21);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 62);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 62 */
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 63 */
/*!*************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/pages.json?{"type":"origin-pages-json"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": [{
    "path": "pages/index/index",
    "style": {
      "navigationBarTitleText": "NFC写入"
    }
  }],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "NFC写入",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  },
  "condition": {
    "current": 0,
    "list": [{
      "name": "",
      "path": "",
      "query": ""
    }]
  }
};
exports.default = _default;

/***/ }),
/* 64 */
/*!************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/pages.json?{"type":"stat"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": "__UNI__EE9FE7E"
};
exports.default = _default;

/***/ }),
/* 65 */
/*!******************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_easyinput_vue_vue_type_template_id_abe12412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-easyinput.vue?vue&type=template&id=abe12412& */ 66);\n/* harmony import */ var _uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-easyinput.vue?vue&type=script&lang=js& */ 68);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_easyinput_vue_vue_type_template_id_abe12412___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_easyinput_vue_vue_type_template_id_abe12412___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_easyinput_vue_vue_type_template_id_abe12412___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEg7QUFDMUg7QUFDaUU7QUFDTDs7O0FBRzVEO0FBQzZNO0FBQzdNLGdCQUFnQixxTkFBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1lYXN5aW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFiZTEyNDEyJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWVhc3lpbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1lYXN5aW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLWVhc3lpbnB1dC9jb21wb25lbnRzL3VuaS1lYXN5aW5wdXQvdW5pLWVhc3lpbnB1dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///65\n");

/***/ }),
/* 66 */
/*!*************************************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=template&id=abe12412& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_template_id_abe12412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-easyinput.vue?vue&type=template&id=abe12412& */ 67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_template_id_abe12412___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_template_id_abe12412___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_template_id_abe12412___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_template_id_abe12412___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 67 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=template&id=abe12412& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons:
      __webpack_require__(/*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 38)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "uni-easyinput"),
      class: _vm._$s(0, "c", { "uni-easyinput-error": _vm.msg }),
      style: _vm._$s(0, "s", _vm.boxStyle),
      attrs: { _i: 0 },
    },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "uni-easyinput__content"),
          class: _vm._$s(1, "c", _vm.inputContentClass),
          style: _vm._$s(1, "s", _vm.inputContentStyle),
          attrs: { _i: 1 },
        },
        [
          _vm._$s(2, "i", _vm.prefixIcon)
            ? _c("uni-icons", {
                staticClass: _vm._$s(2, "sc", "content-clear-icon"),
                attrs: {
                  type: _vm.prefixIcon,
                  color: "#c0c4cc",
                  size: "22",
                  _i: 2,
                },
                on: {
                  click: function ($event) {
                    return _vm.onClickIcon("prefix")
                  },
                },
              })
            : _vm._e(),
          _vm._t("left", null, { _i: 3 }),
          _vm._$s(4, "i", _vm.type === "textarea")
            ? _c("textarea", {
                staticClass: _vm._$s(
                  4,
                  "sc",
                  "uni-easyinput__content-textarea"
                ),
                class: _vm._$s(4, "c", { "input-padding": _vm.inputBorder }),
                attrs: {
                  name: _vm._$s(4, "a-name", _vm.name),
                  value: _vm._$s(4, "a-value", _vm.val),
                  placeholder: _vm._$s(4, "a-placeholder", _vm.placeholder),
                  placeholderStyle: _vm._$s(
                    4,
                    "a-placeholderStyle",
                    _vm.placeholderStyle
                  ),
                  disabled: _vm._$s(4, "a-disabled", _vm.disabled),
                  maxlength: _vm._$s(4, "a-maxlength", _vm.inputMaxlength),
                  focus: _vm._$s(4, "a-focus", _vm.focused),
                  autoHeight: _vm._$s(4, "a-autoHeight", _vm.autoHeight),
                  "cursor-spacing": _vm._$s(
                    4,
                    "a-cursor-spacing",
                    _vm.cursorSpacing
                  ),
                  _i: 4,
                },
                on: {
                  input: _vm.onInput,
                  blur: _vm._Blur,
                  focus: _vm._Focus,
                  confirm: _vm.onConfirm,
                  keyboardheightchange: _vm.onkeyboardheightchange,
                },
              })
            : _c("input", {
                staticClass: _vm._$s(5, "sc", "uni-easyinput__content-input"),
                style: _vm._$s(5, "s", _vm.inputStyle),
                attrs: {
                  type: _vm._$s(
                    5,
                    "a-type",
                    _vm.type === "password" ? "text" : _vm.type
                  ),
                  name: _vm._$s(5, "a-name", _vm.name),
                  value: _vm._$s(5, "a-value", _vm.val),
                  password: _vm._$s(
                    5,
                    "a-password",
                    !_vm.showPassword && _vm.type === "password"
                  ),
                  placeholder: _vm._$s(5, "a-placeholder", _vm.placeholder),
                  placeholderStyle: _vm._$s(
                    5,
                    "a-placeholderStyle",
                    _vm.placeholderStyle
                  ),
                  disabled: _vm._$s(5, "a-disabled", _vm.disabled),
                  maxlength: _vm._$s(5, "a-maxlength", _vm.inputMaxlength),
                  focus: _vm._$s(5, "a-focus", _vm.focused),
                  confirmType: _vm._$s(5, "a-confirmType", _vm.confirmType),
                  "cursor-spacing": _vm._$s(
                    5,
                    "a-cursor-spacing",
                    _vm.cursorSpacing
                  ),
                  _i: 5,
                },
                on: {
                  focus: _vm._Focus,
                  blur: _vm._Blur,
                  input: _vm.onInput,
                  confirm: _vm.onConfirm,
                  keyboardheightchange: _vm.onkeyboardheightchange,
                },
              }),
          _vm._$s(6, "i", _vm.type === "password" && _vm.passwordIcon)
            ? [
                _vm._$s(7, "i", _vm.isVal)
                  ? _c("uni-icons", {
                      staticClass: _vm._$s(7, "sc", "content-clear-icon"),
                      class: _vm._$s(7, "c", {
                        "is-textarea-icon": _vm.type === "textarea",
                      }),
                      attrs: {
                        type: _vm.showPassword
                          ? "eye-slash-filled"
                          : "eye-filled",
                        size: 22,
                        color: _vm.focusShow ? _vm.primaryColor : "#c0c4cc",
                        _i: 7,
                      },
                      on: { click: _vm.onEyes },
                    })
                  : _vm._e(),
              ]
            : _vm._$s(8, "e", _vm.suffixIcon)
            ? [
                _vm._$s(9, "i", _vm.suffixIcon)
                  ? _c("uni-icons", {
                      staticClass: _vm._$s(9, "sc", "content-clear-icon"),
                      attrs: {
                        type: _vm.suffixIcon,
                        color: "#c0c4cc",
                        size: "22",
                        _i: 9,
                      },
                      on: {
                        click: function ($event) {
                          return _vm.onClickIcon("suffix")
                        },
                      },
                    })
                  : _vm._e(),
              ]
            : [
                _vm._$s(
                  11,
                  "i",
                  _vm.clearable &&
                    _vm.isVal &&
                    !_vm.disabled &&
                    _vm.type !== "textarea"
                )
                  ? _c("uni-icons", {
                      staticClass: _vm._$s(11, "sc", "content-clear-icon"),
                      class: _vm._$s(11, "c", {
                        "is-textarea-icon": _vm.type === "textarea",
                      }),
                      attrs: {
                        type: "clear",
                        size: _vm.clearSize,
                        color: _vm.msg
                          ? "#dd524d"
                          : _vm.focusShow
                          ? _vm.primaryColor
                          : "#c0c4cc",
                        _i: 11,
                      },
                      on: { click: _vm.onClear },
                    })
                  : _vm._e(),
              ],
          _vm._t("right", null, { _i: 12 }),
        ],
        2
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 68 */
/*!*******************************************************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-easyinput.vue?vue&type=script&lang=js& */ 69);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_easyinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdzQixDQUFnQixtdUJBQUcsRUFBQyIsImZpbGUiOiI2OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWVhc3lpbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWVhc3lpbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///68\n");

/***/ }),
/* 69 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/**\r\n * Easyinput 输入框\r\n * @description 此组件可以实现表单的输入与校验，包括 \"text\" 和 \"textarea\" 类型。\r\n * @tutorial https://ext.dcloud.net.cn/plugin?id=3455\r\n * @property {String}\tvalue\t输入内容\r\n * @property {String }\ttype\t输入框的类型（默认text） password/text/textarea/..\r\n * \t@value text\t\t\t文本输入键盘\r\n * \t@value textarea\t多行文本输入键盘\r\n * \t@value password\t密码输入键盘\r\n * \t@value number\t\t数字输入键盘，注意iOS上app-vue弹出的数字键盘并非9宫格方式\r\n * \t@value idcard\t\t身份证输入键盘，信、支付宝、百度、QQ小程序\r\n * \t@value digit\t\t带小数点的数字键盘\t，App的nvue页面、微信、支付宝、百度、头条、QQ小程序支持\r\n * @property {Boolean}\tclearable\t是否显示右侧清空内容的图标控件，点击可清空输入框内容（默认true）\r\n * @property {Boolean}\tautoHeight\t是否自动增高输入区域，type为textarea时有效（默认true）\r\n * @property {String }\tplaceholder\t输入框的提示文字\r\n * @property {String }\tplaceholderStyle\tplaceholder的样式(内联样式，字符串)，如\"color: #ddd\"\r\n * @property {Boolean}\tfocus\t是否自动获得焦点（默认false）\r\n * @property {Boolean}\tdisabled\t是否禁用（默认false）\r\n * @property {Number }\tmaxlength\t最大输入长度，设置为 -1 的时候不限制最大长度（默认140）\r\n * @property {String }\tconfirmType\t设置键盘右下角按钮的文字，仅在type=\"text\"时生效（默认done）\r\n * @property {Number }\tclearSize\t清除图标的大小，单位px（默认15）\r\n * @property {String}\tprefixIcon\t输入框头部图标\r\n * @property {String}\tsuffixIcon\t输入框尾部图标\r\n * @property {String}\tprimaryColor\t设置主题色（默认#2979ff）\r\n * @property {Boolean}\ttrim\t是否自动去除两端的空格\r\n * @property {Boolean}\tcursorSpacing\t指定光标与键盘的距离，单位 px\r\n * @value both\t去除两端空格\r\n * @value left\t去除左侧空格\r\n * @value right\t去除右侧空格\r\n * @value start\t去除左侧空格\r\n * @value end\t\t去除右侧空格\r\n * @value all\t\t去除全部空格\r\n * @value none\t不去除空格\r\n * @property {Boolean}\tinputBorder\t是否显示input输入框的边框（默认true）\r\n * @property {Boolean}\tpasswordIcon\ttype=password时是否显示小眼睛图标\r\n * @property {Object}\tstyles\t自定义颜色\r\n * @event {Function}\tinput\t输入框内容发生变化时触发\r\n * @event {Function}\tfocus\t输入框获得焦点时触发\r\n * @event {Function}\tblur\t输入框失去焦点时触发\r\n * @event {Function}\tconfirm\t点击完成按钮时触发\r\n * @event {Function}\ticonClick\t点击图标时触发\r\n * @example <uni-easyinput v-model=\"mobile\"></uni-easyinput>\r\n */\nfunction obj2strClass(obj) {\n  var classess = '';\n  for (var key in obj) {\n    var val = obj[key];\n    if (val) {\n      classess += \"\".concat(key, \" \");\n    }\n  }\n  return classess;\n}\nfunction obj2strStyle(obj) {\n  var style = '';\n  for (var key in obj) {\n    var val = obj[key];\n    style += \"\".concat(key, \":\").concat(val, \";\");\n  }\n  return style;\n}\nvar _default2 = {\n  name: 'uni-easyinput',\n  emits: ['click', 'iconClick', 'update:modelValue', 'input', 'focus', 'blur', 'confirm', 'clear', 'eyes', 'change', 'keyboardheightchange'],\n  model: {\n    prop: 'modelValue',\n    event: 'update:modelValue'\n  },\n  options: {\n    virtualHost: true\n  },\n  inject: {\n    form: {\n      from: 'uniForm',\n      default: null\n    },\n    formItem: {\n      from: 'uniFormItem',\n      default: null\n    }\n  },\n  props: {\n    name: String,\n    value: [Number, String],\n    modelValue: [Number, String],\n    type: {\n      type: String,\n      default: 'text'\n    },\n    clearable: {\n      type: Boolean,\n      default: true\n    },\n    autoHeight: {\n      type: Boolean,\n      default: false\n    },\n    placeholder: {\n      type: String,\n      default: ' '\n    },\n    placeholderStyle: String,\n    focus: {\n      type: Boolean,\n      default: false\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    maxlength: {\n      type: [Number, String],\n      default: 140\n    },\n    confirmType: {\n      type: String,\n      default: 'done'\n    },\n    clearSize: {\n      type: [Number, String],\n      default: 24\n    },\n    inputBorder: {\n      type: Boolean,\n      default: true\n    },\n    prefixIcon: {\n      type: String,\n      default: ''\n    },\n    suffixIcon: {\n      type: String,\n      default: ''\n    },\n    trim: {\n      type: [Boolean, String],\n      default: false\n    },\n    cursorSpacing: {\n      type: Number,\n      default: 0\n    },\n    passwordIcon: {\n      type: Boolean,\n      default: true\n    },\n    primaryColor: {\n      type: String,\n      default: '#2979ff'\n    },\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {\n          color: '#333',\n          backgroundColor: '#fff',\n          disableColor: '#F7F6F6',\n          borderColor: '#e5e5e5'\n        };\n      }\n    },\n    errorMessage: {\n      type: [String, Boolean],\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      focused: false,\n      val: '',\n      showMsg: '',\n      border: false,\n      isFirstBorder: false,\n      showClearIcon: false,\n      showPassword: false,\n      focusShow: false,\n      localMsg: '',\n      isEnter: false // 用于判断当前是否是使用回车操作\n    };\n  },\n\n  computed: {\n    // 输入框内是否有值\n    isVal: function isVal() {\n      var val = this.val;\n      // fixed by mehaotian 处理值为0的情况，字符串0不在处理范围\n      if (val || val === 0) {\n        return true;\n      }\n      return false;\n    },\n    msg: function msg() {\n      // console.log('computed', this.form, this.formItem);\n      // if (this.form) {\n      // \treturn this.errorMessage || this.formItem.errMsg;\n      // }\n      // TODO 处理头条 formItem 中 errMsg 不更新的问题\n      return this.localMsg || this.errorMessage;\n    },\n    // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值\n    inputMaxlength: function inputMaxlength() {\n      return Number(this.maxlength);\n    },\n    // 处理外层样式的style\n    boxStyle: function boxStyle() {\n      return \"color:\".concat(this.inputBorder && this.msg ? '#e43d33' : this.styles.color, \";\");\n    },\n    // input 内容的类和样式处理\n    inputContentClass: function inputContentClass() {\n      return obj2strClass({\n        'is-input-border': this.inputBorder,\n        'is-input-error-border': this.inputBorder && this.msg,\n        'is-textarea': this.type === 'textarea',\n        'is-disabled': this.disabled,\n        'is-focused': this.focusShow\n      });\n    },\n    inputContentStyle: function inputContentStyle() {\n      var focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;\n      var borderColor = this.inputBorder && this.msg ? '#dd524d' : focusColor;\n      return obj2strStyle({\n        'border-color': borderColor || '#e5e5e5',\n        'background-color': this.disabled ? this.styles.disableColor : this.styles.backgroundColor\n      });\n    },\n    // input右侧样式\n    inputStyle: function inputStyle() {\n      var paddingRight = this.type === 'password' || this.clearable || this.prefixIcon ? '' : '10px';\n      return obj2strStyle({\n        'padding-right': paddingRight,\n        'padding-left': this.prefixIcon ? '' : '10px'\n      });\n    }\n  },\n  watch: {\n    value: function value(newVal) {\n      this.val = newVal;\n    },\n    modelValue: function modelValue(newVal) {\n      this.val = newVal;\n    },\n    focus: function focus(newVal) {\n      var _this = this;\n      this.$nextTick(function () {\n        _this.focused = _this.focus;\n        _this.focusShow = _this.focus;\n      });\n    }\n  },\n  created: function created() {\n    var _this2 = this;\n    this.init();\n    // TODO 处理头条vue3 computed 不监听 inject 更改的问题（formItem.errMsg）\n    if (this.form && this.formItem) {\n      this.$watch('formItem.errMsg', function (newVal) {\n        _this2.localMsg = newVal;\n      });\n    }\n  },\n  mounted: function mounted() {\n    var _this3 = this;\n    this.$nextTick(function () {\n      _this3.focused = _this3.focus;\n      _this3.focusShow = _this3.focus;\n    });\n  },\n  methods: {\n    /**\r\n     * 初始化变量值\r\n     */\n    init: function init() {\n      if (this.value || this.value === 0) {\n        this.val = this.value;\n      } else if (this.modelValue || this.modelValue === 0 || this.modelValue === '') {\n        this.val = this.modelValue;\n      } else {\n        this.val = null;\n      }\n    },\n    /**\r\n     * 点击图标时触发\r\n     * @param {Object} type\r\n     */\n    onClickIcon: function onClickIcon(type) {\n      this.$emit('iconClick', type);\n    },\n    /**\r\n     * 显示隐藏内容，密码框时生效\r\n     */\n    onEyes: function onEyes() {\n      this.showPassword = !this.showPassword;\n      this.$emit('eyes', this.showPassword);\n    },\n    /**\r\n     * 输入时触发\r\n     * @param {Object} event\r\n     */\n    onInput: function onInput(event) {\n      var value = event.detail.value;\n      // 判断是否去除空格\n      if (this.trim) {\n        if (typeof this.trim === 'boolean' && this.trim) {\n          value = this.trimStr(value);\n        }\n        if (typeof this.trim === 'string') {\n          value = this.trimStr(value, this.trim);\n        }\n      }\n      if (this.errMsg) this.errMsg = '';\n      this.val = value;\n      // TODO 兼容 vue2\n      this.$emit('input', value);\n      // TODO　兼容　vue3\n      this.$emit('update:modelValue', value);\n    },\n    /**\r\n     * 外部调用方法\r\n     * 获取焦点时触发\r\n     * @param {Object} event\r\n     */\n    onFocus: function onFocus() {\n      var _this4 = this;\n      this.$nextTick(function () {\n        _this4.focused = true;\n      });\n      this.$emit('focus', null);\n    },\n    _Focus: function _Focus(event) {\n      this.focusShow = true;\n      this.$emit('focus', event);\n    },\n    /**\r\n     * 外部调用方法\r\n     * 失去焦点时触发\r\n     * @param {Object} event\r\n     */\n    onBlur: function onBlur() {\n      this.focused = false;\n      this.$emit('focus', null);\n    },\n    _Blur: function _Blur(event) {\n      var value = event.detail.value;\n      this.focusShow = false;\n      this.$emit('blur', event);\n      // 根据类型返回值，在event中获取的值理论上讲都是string\n      if (this.isEnter === false) {\n        this.$emit('change', this.val);\n      }\n      // 失去焦点时参与表单校验\n      if (this.form && this.formItem) {\n        var validateTrigger = this.form.validateTrigger;\n        if (validateTrigger === 'blur') {\n          this.formItem.onFieldChange();\n        }\n      }\n    },\n    /**\r\n     * 按下键盘的发送键\r\n     * @param {Object} e\r\n     */\n    onConfirm: function onConfirm(e) {\n      var _this5 = this;\n      this.$emit('confirm', this.val);\n      this.isEnter = true;\n      this.$emit('change', this.val);\n      this.$nextTick(function () {\n        _this5.isEnter = false;\n      });\n    },\n    /**\r\n     * 清理内容\r\n     * @param {Object} event\r\n     */\n    onClear: function onClear(event) {\n      this.val = '';\n      // TODO 兼容 vue2\n      this.$emit('input', '');\n      // TODO 兼容 vue2\n      // TODO　兼容　vue3\n      this.$emit('update:modelValue', '');\n      // 点击叉号触发\n      this.$emit('clear');\n    },\n    /**\r\n     * 键盘高度发生变化的时候触发此事件\r\n     * 兼容性：微信小程序2.7.0+、App 3.1.0+\r\n     * @param {Object} event\r\n     */\n    onkeyboardheightchange: function onkeyboardheightchange(event) {\n      this.$emit(\"keyboardheightchange\", event);\n    },\n    /**\r\n     * 去除空格\r\n     */\n    trimStr: function trimStr(str) {\n      var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';\n      if (pos === 'both') {\n        return str.trim();\n      } else if (pos === 'left') {\n        return str.trimLeft();\n      } else if (pos === 'right') {\n        return str.trimRight();\n      } else if (pos === 'start') {\n        return str.trimStart();\n      } else if (pos === 'end') {\n        return str.trimEnd();\n      } else if (pos === 'all') {\n        return str.replace(/\\s+/g, '');\n      } else if (pos === 'none') {\n        return str;\n      }\n      return str;\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLWVhc3lpbnB1dC9jb21wb25lbnRzL3VuaS1lYXN5aW5wdXQvdW5pLWVhc3lpbnB1dC52dWUiXSwibmFtZXMiOlsiY2xhc3Nlc3MiLCJzdHlsZSIsIm5hbWUiLCJlbWl0cyIsIm1vZGVsIiwicHJvcCIsImV2ZW50Iiwib3B0aW9ucyIsInZpcnR1YWxIb3N0IiwiaW5qZWN0IiwiZm9ybSIsImZyb20iLCJkZWZhdWx0IiwiZm9ybUl0ZW0iLCJwcm9wcyIsInZhbHVlIiwibW9kZWxWYWx1ZSIsInR5cGUiLCJjbGVhcmFibGUiLCJhdXRvSGVpZ2h0IiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclN0eWxlIiwiZm9jdXMiLCJkaXNhYmxlZCIsIm1heGxlbmd0aCIsImNvbmZpcm1UeXBlIiwiY2xlYXJTaXplIiwiaW5wdXRCb3JkZXIiLCJwcmVmaXhJY29uIiwic3VmZml4SWNvbiIsInRyaW0iLCJjdXJzb3JTcGFjaW5nIiwicGFzc3dvcmRJY29uIiwicHJpbWFyeUNvbG9yIiwic3R5bGVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNhYmxlQ29sb3IiLCJib3JkZXJDb2xvciIsImVycm9yTWVzc2FnZSIsImRhdGEiLCJmb2N1c2VkIiwidmFsIiwic2hvd01zZyIsImJvcmRlciIsImlzRmlyc3RCb3JkZXIiLCJzaG93Q2xlYXJJY29uIiwic2hvd1Bhc3N3b3JkIiwiZm9jdXNTaG93IiwibG9jYWxNc2ciLCJpc0VudGVyIiwiY29tcHV0ZWQiLCJpc1ZhbCIsIm1zZyIsImlucHV0TWF4bGVuZ3RoIiwiYm94U3R5bGUiLCJpbnB1dENvbnRlbnRDbGFzcyIsImlucHV0Q29udGVudFN0eWxlIiwiaW5wdXRTdHlsZSIsIndhdGNoIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJtZXRob2RzIiwiaW5pdCIsIm9uQ2xpY2tJY29uIiwib25FeWVzIiwib25JbnB1dCIsIm9uRm9jdXMiLCJfRm9jdXMiLCJvbkJsdXIiLCJfQmx1ciIsIm9uQ29uZmlybSIsIm9uQ2xlYXIiLCJvbmtleWJvYXJkaGVpZ2h0Y2hhbmdlIiwidHJpbVN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0E7RUFDQTtJQUNBO0lBQ0E7TUFDQUE7SUFDQTtFQUNBO0VBQ0E7QUFDQTtBQUVBO0VBQ0E7RUFDQTtJQUNBO0lBQ0FDO0VBQ0E7RUFDQTtBQUNBO0FBQUEsZ0JBQ0E7RUFDQUM7RUFDQUM7RUFDQUM7SUFDQUM7SUFDQUM7RUFDQTtFQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7SUFDQTtFQUNBO0VBQ0FFO0lBQ0FaO0lBQ0FhO0lBQ0FDO0lBQ0FDO01BQ0FBO01BQ0FMO0lBQ0E7SUFDQU07TUFDQUQ7TUFDQUw7SUFDQTtJQUNBTztNQUNBRjtNQUNBTDtJQUNBO0lBQ0FRO01BQ0FIO01BQ0FMO0lBQ0E7SUFDQVM7SUFDQUM7TUFDQUw7TUFDQUw7SUFDQTtJQUNBVztNQUNBTjtNQUNBTDtJQUNBO0lBQ0FZO01BQ0FQO01BQ0FMO0lBQ0E7SUFDQWE7TUFDQVI7TUFDQUw7SUFDQTtJQUNBYztNQUNBVDtNQUNBTDtJQUNBO0lBQ0FlO01BQ0FWO01BQ0FMO0lBQ0E7SUFDQWdCO01BQ0FYO01BQ0FMO0lBQ0E7SUFDQWlCO01BQ0FaO01BQ0FMO0lBQ0E7SUFDQWtCO01BQ0FiO01BQ0FMO0lBQ0E7SUFDQW1CO01BQ0FkO01BQ0FMO0lBQ0E7SUFDQW9CO01BQ0FmO01BQ0FMO0lBQ0E7SUFDQXFCO01BQ0FoQjtNQUNBTDtJQUNBO0lBQ0FzQjtNQUNBakI7TUFDQUw7UUFDQTtVQUNBdUI7VUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQXRCO01BQ0FMO0lBQ0E7RUFDQTtFQUNBNEI7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7O0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E1QztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FNO01BQUE7TUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQXNDO0lBQUE7SUFDQTtJQUNBO0lBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQUE7SUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBO0FBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUVBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUVBO0FBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO1FBQ0E7VUFDQW5EO1FBQ0E7UUFDQTtVQUNBQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQW9EO01BQUE7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtJQUNBO0lBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBO1FBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBO0FBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBO0FBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFFQTtBQUNBO0FBQ0E7SUFDQUM7TUFBQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktZWFzeWlucHV0XCIgOmNsYXNzPVwieyAndW5pLWVhc3lpbnB1dC1lcnJvcic6IG1zZyB9XCIgOnN0eWxlPVwiYm94U3R5bGVcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWVhc3lpbnB1dF9fY29udGVudFwiIDpjbGFzcz1cImlucHV0Q29udGVudENsYXNzXCIgOnN0eWxlPVwiaW5wdXRDb250ZW50U3R5bGVcIj5cclxuXHRcdFx0PHVuaS1pY29ucyB2LWlmPVwicHJlZml4SWNvblwiIGNsYXNzPVwiY29udGVudC1jbGVhci1pY29uXCIgOnR5cGU9XCJwcmVmaXhJY29uXCIgY29sb3I9XCIjYzBjNGNjXCIgQGNsaWNrPVwib25DbGlja0ljb24oJ3ByZWZpeCcpXCIgc2l6ZT1cIjIyXCI+PC91bmktaWNvbnM+XHJcblx0XHRcdDxzbG90IG5hbWU9XCJsZWZ0XCI+PC9zbG90PlxyXG5cdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHR2LWlmPVwidHlwZSA9PT0gJ3RleHRhcmVhJ1wiXHJcblx0XHRcdFx0Y2xhc3M9XCJ1bmktZWFzeWlucHV0X19jb250ZW50LXRleHRhcmVhXCJcclxuXHRcdFx0XHQ6Y2xhc3M9XCJ7ICdpbnB1dC1wYWRkaW5nJzogaW5wdXRCb3JkZXIgfVwiXHJcblx0XHRcdFx0Om5hbWU9XCJuYW1lXCJcclxuXHRcdFx0XHQ6dmFsdWU9XCJ2YWxcIlxyXG5cdFx0XHRcdDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcclxuXHRcdFx0XHQ6cGxhY2Vob2xkZXJTdHlsZT1cInBsYWNlaG9sZGVyU3R5bGVcIlxyXG5cdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0XHRwbGFjZWhvbGRlci1jbGFzcz1cInVuaS1lYXN5aW5wdXRfX3BsYWNlaG9sZGVyLWNsYXNzXCJcclxuXHRcdFx0XHQ6bWF4bGVuZ3RoPVwiaW5wdXRNYXhsZW5ndGhcIlxyXG5cdFx0XHRcdDpmb2N1cz1cImZvY3VzZWRcIlxyXG5cdFx0XHRcdDphdXRvSGVpZ2h0PVwiYXV0b0hlaWdodFwiXHJcblx0XHRcdFx0OmN1cnNvci1zcGFjaW5nPVwiY3Vyc29yU3BhY2luZ1wiXHJcblx0XHRcdFx0QGlucHV0PVwib25JbnB1dFwiXHJcblx0XHRcdFx0QGJsdXI9XCJfQmx1clwiXHJcblx0XHRcdFx0QGZvY3VzPVwiX0ZvY3VzXCJcclxuXHRcdFx0XHRAY29uZmlybT1cIm9uQ29uZmlybVwiXHJcbiAgICAgICAgQGtleWJvYXJkaGVpZ2h0Y2hhbmdlPVwib25rZXlib2FyZGhlaWdodGNoYW5nZVwiXHJcblx0XHRcdD48L3RleHRhcmVhPlxyXG5cdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHR2LWVsc2VcclxuXHRcdFx0XHQ6dHlwZT1cInR5cGUgPT09ICdwYXNzd29yZCcgPyAndGV4dCcgOiB0eXBlXCJcclxuXHRcdFx0XHRjbGFzcz1cInVuaS1lYXN5aW5wdXRfX2NvbnRlbnQtaW5wdXRcIlxyXG5cdFx0XHRcdDpzdHlsZT1cImlucHV0U3R5bGVcIlxyXG5cdFx0XHRcdDpuYW1lPVwibmFtZVwiXHJcblx0XHRcdFx0OnZhbHVlPVwidmFsXCJcclxuXHRcdFx0XHQ6cGFzc3dvcmQ9XCIhc2hvd1Bhc3N3b3JkICYmIHR5cGUgPT09ICdwYXNzd29yZCdcIlxyXG5cdFx0XHRcdDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcclxuXHRcdFx0XHQ6cGxhY2Vob2xkZXJTdHlsZT1cInBsYWNlaG9sZGVyU3R5bGVcIlxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyLWNsYXNzPVwidW5pLWVhc3lpbnB1dF9fcGxhY2Vob2xkZXItY2xhc3NcIlxyXG5cdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0XHQ6bWF4bGVuZ3RoPVwiaW5wdXRNYXhsZW5ndGhcIlxyXG5cdFx0XHRcdDpmb2N1cz1cImZvY3VzZWRcIlxyXG5cdFx0XHRcdDpjb25maXJtVHlwZT1cImNvbmZpcm1UeXBlXCJcclxuXHRcdFx0XHQ6Y3Vyc29yLXNwYWNpbmc9XCJjdXJzb3JTcGFjaW5nXCJcclxuXHRcdFx0XHRAZm9jdXM9XCJfRm9jdXNcIlxyXG5cdFx0XHRcdEBibHVyPVwiX0JsdXJcIlxyXG5cdFx0XHRcdEBpbnB1dD1cIm9uSW5wdXRcIlxyXG5cdFx0XHRcdEBjb25maXJtPVwib25Db25maXJtXCJcclxuICAgICAgICBAa2V5Ym9hcmRoZWlnaHRjaGFuZ2U9XCJvbmtleWJvYXJkaGVpZ2h0Y2hhbmdlXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJ0eXBlID09PSAncGFzc3dvcmQnICYmIHBhc3N3b3JkSWNvblwiPlxyXG5cdFx0XHRcdDwhLS0g5byA5ZCv5a+G56CB5pe25pi+56S65bCP55y8552bIC0tPlxyXG5cdFx0XHRcdDx1bmktaWNvbnNcclxuXHRcdFx0XHRcdHYtaWY9XCJpc1ZhbFwiXHJcblx0XHRcdFx0XHRjbGFzcz1cImNvbnRlbnQtY2xlYXItaWNvblwiXHJcblx0XHRcdFx0XHQ6Y2xhc3M9XCJ7ICdpcy10ZXh0YXJlYS1pY29uJzogdHlwZSA9PT0gJ3RleHRhcmVhJyB9XCJcclxuXHRcdFx0XHRcdDp0eXBlPVwic2hvd1Bhc3N3b3JkID8gJ2V5ZS1zbGFzaC1maWxsZWQnIDogJ2V5ZS1maWxsZWQnXCJcclxuXHRcdFx0XHRcdDpzaXplPVwiMjJcIlxyXG5cdFx0XHRcdFx0OmNvbG9yPVwiZm9jdXNTaG93ID8gcHJpbWFyeUNvbG9yIDogJyNjMGM0Y2MnXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cIm9uRXllc1wiXHJcblx0XHRcdFx0PjwvdW5pLWljb25zPlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8dGVtcGxhdGUgdi1lbHNlLWlmPVwic3VmZml4SWNvblwiPlxyXG5cdFx0XHRcdDx1bmktaWNvbnMgdi1pZj1cInN1ZmZpeEljb25cIiBjbGFzcz1cImNvbnRlbnQtY2xlYXItaWNvblwiIDp0eXBlPVwic3VmZml4SWNvblwiIGNvbG9yPVwiI2MwYzRjY1wiIEBjbGljaz1cIm9uQ2xpY2tJY29uKCdzdWZmaXgnKVwiIHNpemU9XCIyMlwiPjwvdW5pLWljb25zPlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxyXG5cdFx0XHRcdDx1bmktaWNvbnNcclxuXHRcdFx0XHRcdHYtaWY9XCJjbGVhcmFibGUgJiYgaXNWYWwgJiYgIWRpc2FibGVkICYmIHR5cGUgIT09ICd0ZXh0YXJlYSdcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJjb250ZW50LWNsZWFyLWljb25cIlxyXG5cdFx0XHRcdFx0OmNsYXNzPVwieyAnaXMtdGV4dGFyZWEtaWNvbic6IHR5cGUgPT09ICd0ZXh0YXJlYScgfVwiXHJcblx0XHRcdFx0XHR0eXBlPVwiY2xlYXJcIlxyXG5cdFx0XHRcdFx0OnNpemU9XCJjbGVhclNpemVcIlxyXG5cdFx0XHRcdFx0OmNvbG9yPVwibXNnID8gJyNkZDUyNGQnIDogZm9jdXNTaG93ID8gcHJpbWFyeUNvbG9yIDogJyNjMGM0Y2MnXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cIm9uQ2xlYXJcIlxyXG5cdFx0XHRcdD48L3VuaS1pY29ucz5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0PHNsb3QgbmFtZT1cInJpZ2h0XCI+PC9zbG90PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8qKlxyXG4gKiBFYXN5aW5wdXQg6L6T5YWl5qGGXHJcbiAqIEBkZXNjcmlwdGlvbiDmraTnu4Tku7blj6/ku6Xlrp7njrDooajljZXnmoTovpPlhaXkuI7moKHpqozvvIzljIXmi6wgXCJ0ZXh0XCIg5ZKMIFwidGV4dGFyZWFcIiDnsbvlnovjgIJcclxuICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTM0NTVcclxuICogQHByb3BlcnR5IHtTdHJpbmd9XHR2YWx1ZVx06L6T5YWl5YaF5a65XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nIH1cdHR5cGVcdOi+k+WFpeahhueahOexu+Wei++8iOm7mOiupHRleHTvvIkgcGFzc3dvcmQvdGV4dC90ZXh0YXJlYS8uLlxyXG4gKiBcdEB2YWx1ZSB0ZXh0XHRcdFx05paH5pys6L6T5YWl6ZSu55uYXHJcbiAqIFx0QHZhbHVlIHRleHRhcmVhXHTlpJrooYzmlofmnKzovpPlhaXplK7nm5hcclxuICogXHRAdmFsdWUgcGFzc3dvcmRcdOWvhueggei+k+WFpemUruebmFxyXG4gKiBcdEB2YWx1ZSBudW1iZXJcdFx05pWw5a2X6L6T5YWl6ZSu55uY77yM5rOo5oSPaU9T5LiKYXBwLXZ1ZeW8ueWHuueahOaVsOWtl+mUruebmOW5tumdnjnlrqvmoLzmlrnlvI9cclxuICogXHRAdmFsdWUgaWRjYXJkXHRcdOi6q+S7veivgei+k+WFpemUruebmO+8jOS/oeOAgeaUr+S7mOWuneOAgeeZvuW6puOAgVFR5bCP56iL5bqPXHJcbiAqIFx0QHZhbHVlIGRpZ2l0XHRcdOW4puWwj+aVsOeCueeahOaVsOWtl+mUruebmFx077yMQXBw55qEbnZ1ZemhtemdouOAgeW+ruS/oeOAgeaUr+S7mOWuneOAgeeZvuW6puOAgeWktOadoeOAgVFR5bCP56iL5bqP5pSv5oyBXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdGNsZWFyYWJsZVx05piv5ZCm5pi+56S65Y+z5L6n5riF56m65YaF5a6555qE5Zu+5qCH5o6n5Lu277yM54K55Ye75Y+v5riF56m66L6T5YWl5qGG5YaF5a6577yI6buY6K6kdHJ1Ze+8iVxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59XHRhdXRvSGVpZ2h0XHTmmK/lkKboh6rliqjlop7pq5jovpPlhaXljLrln5/vvIx0eXBl5Li6dGV4dGFyZWHml7bmnInmlYjvvIjpu5jorqR0cnVl77yJXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nIH1cdHBsYWNlaG9sZGVyXHTovpPlhaXmoYbnmoTmj5DnpLrmloflrZdcclxuICogQHByb3BlcnR5IHtTdHJpbmcgfVx0cGxhY2Vob2xkZXJTdHlsZVx0cGxhY2Vob2xkZXLnmoTmoLflvI8o5YaF6IGU5qC35byP77yM5a2X56ym5LiyKe+8jOWmglwiY29sb3I6ICNkZGRcIlxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59XHRmb2N1c1x05piv5ZCm6Ieq5Yqo6I635b6X54Sm54K577yI6buY6K6kZmFsc2XvvIlcclxuICogQHByb3BlcnR5IHtCb29sZWFufVx0ZGlzYWJsZWRcdOaYr+WQpuemgeeUqO+8iOm7mOiupGZhbHNl77yJXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyIH1cdG1heGxlbmd0aFx05pyA5aSn6L6T5YWl6ZW/5bqm77yM6K6+572u5Li6IC0xIOeahOaXtuWAmeS4jemZkOWItuacgOWkp+mVv+W6pu+8iOm7mOiupDE0MO+8iVxyXG4gKiBAcHJvcGVydHkge1N0cmluZyB9XHRjb25maXJtVHlwZVx06K6+572u6ZSu55uY5Y+z5LiL6KeS5oyJ6ZKu55qE5paH5a2X77yM5LuF5ZyodHlwZT1cInRleHRcIuaXtueUn+aViO+8iOm7mOiupGRvbmXvvIlcclxuICogQHByb3BlcnR5IHtOdW1iZXIgfVx0Y2xlYXJTaXplXHTmuIXpmaTlm77moIfnmoTlpKflsI/vvIzljZXkvY1weO+8iOm7mOiupDE177yJXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0cHJlZml4SWNvblx06L6T5YWl5qGG5aS06YOo5Zu+5qCHXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0c3VmZml4SWNvblx06L6T5YWl5qGG5bC+6YOo5Zu+5qCHXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0cHJpbWFyeUNvbG9yXHTorr7nva7kuLvpopjoibLvvIjpu5jorqQjMjk3OWZm77yJXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdHRyaW1cdOaYr+WQpuiHquWKqOWOu+mZpOS4pOerr+eahOepuuagvFxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59XHRjdXJzb3JTcGFjaW5nXHTmjIflrprlhYnmoIfkuI7plK7nm5jnmoTot53nprvvvIzljZXkvY0gcHhcclxuICogQHZhbHVlIGJvdGhcdOWOu+mZpOS4pOerr+epuuagvFxyXG4gKiBAdmFsdWUgbGVmdFx05Y676Zmk5bem5L6n56m65qC8XHJcbiAqIEB2YWx1ZSByaWdodFx05Y676Zmk5Y+z5L6n56m65qC8XHJcbiAqIEB2YWx1ZSBzdGFydFx05Y676Zmk5bem5L6n56m65qC8XHJcbiAqIEB2YWx1ZSBlbmRcdFx05Y676Zmk5Y+z5L6n56m65qC8XHJcbiAqIEB2YWx1ZSBhbGxcdFx05Y676Zmk5YWo6YOo56m65qC8XHJcbiAqIEB2YWx1ZSBub25lXHTkuI3ljrvpmaTnqbrmoLxcclxuICogQHByb3BlcnR5IHtCb29sZWFufVx0aW5wdXRCb3JkZXJcdOaYr+WQpuaYvuekumlucHV06L6T5YWl5qGG55qE6L655qGG77yI6buY6K6kdHJ1Ze+8iVxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59XHRwYXNzd29yZEljb25cdHR5cGU9cGFzc3dvcmTml7bmmK/lkKbmmL7npLrlsI/nnLznnZvlm77moIdcclxuICogQHByb3BlcnR5IHtPYmplY3R9XHRzdHlsZXNcdOiHquWumuS5ieminOiJslxyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufVx0aW5wdXRcdOi+k+WFpeahhuWGheWuueWPkeeUn+WPmOWMluaXtuinpuWPkVxyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufVx0Zm9jdXNcdOi+k+WFpeahhuiOt+W+l+eEpueCueaXtuinpuWPkVxyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufVx0Ymx1clx06L6T5YWl5qGG5aSx5Y6754Sm54K55pe26Kem5Y+RXHJcbiAqIEBldmVudCB7RnVuY3Rpb259XHRjb25maXJtXHTngrnlh7vlrozmiJDmjInpkq7ml7bop6blj5FcclxuICogQGV2ZW50IHtGdW5jdGlvbn1cdGljb25DbGlja1x054K55Ye75Zu+5qCH5pe26Kem5Y+RXHJcbiAqIEBleGFtcGxlIDx1bmktZWFzeWlucHV0IHYtbW9kZWw9XCJtb2JpbGVcIj48L3VuaS1lYXN5aW5wdXQ+XHJcbiAqL1xyXG5mdW5jdGlvbiBvYmoyc3RyQ2xhc3Mob2JqKSB7XHJcblx0bGV0IGNsYXNzZXNzID0gJyc7XHJcblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xyXG5cdFx0Y29uc3QgdmFsID0gb2JqW2tleV07XHJcblx0XHRpZiAodmFsKSB7XHJcblx0XHRcdGNsYXNzZXNzICs9IGAke2tleX0gYDtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGNsYXNzZXNzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmoyc3RyU3R5bGUob2JqKSB7XHJcblx0bGV0IHN0eWxlID0gJyc7XHJcblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xyXG5cdFx0Y29uc3QgdmFsID0gb2JqW2tleV07XHJcblx0XHRzdHlsZSArPSBgJHtrZXl9OiR7dmFsfTtgO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGU7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICd1bmktZWFzeWlucHV0JyxcclxuXHRlbWl0czogWydjbGljaycsICdpY29uQ2xpY2snLCAndXBkYXRlOm1vZGVsVmFsdWUnLCAnaW5wdXQnLCAnZm9jdXMnLCAnYmx1cicsICdjb25maXJtJywgJ2NsZWFyJywgJ2V5ZXMnLCAnY2hhbmdlJywgJ2tleWJvYXJkaGVpZ2h0Y2hhbmdlJ10sXHJcblx0bW9kZWw6IHtcclxuXHRcdHByb3A6ICdtb2RlbFZhbHVlJyxcclxuXHRcdGV2ZW50OiAndXBkYXRlOm1vZGVsVmFsdWUnXHJcblx0fSxcclxuXHRvcHRpb25zOiB7XHJcblx0XHR2aXJ0dWFsSG9zdDogdHJ1ZVxyXG5cdH0sXHJcblx0aW5qZWN0OiB7XHJcblx0XHRmb3JtOiB7XHJcblx0XHRcdGZyb206ICd1bmlGb3JtJyxcclxuXHRcdFx0ZGVmYXVsdDogbnVsbFxyXG5cdFx0fSxcclxuXHRcdGZvcm1JdGVtOiB7XHJcblx0XHRcdGZyb206ICd1bmlGb3JtSXRlbScsXHJcblx0XHRcdGRlZmF1bHQ6IG51bGxcclxuXHRcdH1cclxuXHR9LFxyXG5cdHByb3BzOiB7XHJcblx0XHRuYW1lOiBTdHJpbmcsXHJcblx0XHR2YWx1ZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdG1vZGVsVmFsdWU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHR0eXBlOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ3RleHQnXHJcblx0XHR9LFxyXG5cdFx0Y2xlYXJhYmxlOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdH0sXHJcblx0XHRhdXRvSGVpZ2h0OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0cGxhY2Vob2xkZXI6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnICdcclxuXHRcdH0sXHJcblx0XHRwbGFjZWhvbGRlclN0eWxlOiBTdHJpbmcsXHJcblx0XHRmb2N1czoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdGRpc2FibGVkOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0bWF4bGVuZ3RoOiB7XHJcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdGRlZmF1bHQ6IDE0MFxyXG5cdFx0fSxcclxuXHRcdGNvbmZpcm1UeXBlOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ2RvbmUnXHJcblx0XHR9LFxyXG5cdFx0Y2xlYXJTaXplOiB7XHJcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdGRlZmF1bHQ6IDI0XHJcblx0XHR9LFxyXG5cdFx0aW5wdXRCb3JkZXI6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdHByZWZpeEljb246IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0fSxcclxuXHRcdHN1ZmZpeEljb246IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0fSxcclxuXHRcdHRyaW06IHtcclxuXHRcdFx0dHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0Y3Vyc29yU3BhY2luZzoge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdH0sXHJcblx0XHRwYXNzd29yZEljb246IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdHByaW1hcnlDb2xvcjoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcjMjk3OWZmJ1xyXG5cdFx0fSxcclxuXHRcdHN0eWxlczoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAnIzMzMycsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuXHRcdFx0XHRcdGRpc2FibGVDb2xvcjogJyNGN0Y2RjYnLFxyXG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6ICcjZTVlNWU1J1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRlcnJvck1lc3NhZ2U6IHtcclxuXHRcdFx0dHlwZTogW1N0cmluZywgQm9vbGVhbl0sXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Zm9jdXNlZDogZmFsc2UsXHJcblx0XHRcdHZhbDogJycsXHJcblx0XHRcdHNob3dNc2c6ICcnLFxyXG5cdFx0XHRib3JkZXI6IGZhbHNlLFxyXG5cdFx0XHRpc0ZpcnN0Qm9yZGVyOiBmYWxzZSxcclxuXHRcdFx0c2hvd0NsZWFySWNvbjogZmFsc2UsXHJcblx0XHRcdHNob3dQYXNzd29yZDogZmFsc2UsXHJcblx0XHRcdGZvY3VzU2hvdzogZmFsc2UsXHJcblx0XHRcdGxvY2FsTXNnOiAnJyxcclxuXHRcdFx0aXNFbnRlcjogZmFsc2UgLy8g55So5LqO5Yik5pat5b2T5YmN5piv5ZCm5piv5L2/55So5Zue6L2m5pON5L2cXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC8vIOi+k+WFpeahhuWGheaYr+WQpuacieWAvFxyXG5cdFx0aXNWYWwoKSB7XHJcblx0XHRcdGNvbnN0IHZhbCA9IHRoaXMudmFsO1xyXG5cdFx0XHQvLyBmaXhlZCBieSBtZWhhb3RpYW4g5aSE55CG5YC85Li6MOeahOaDheWGte+8jOWtl+espuS4sjDkuI3lnKjlpITnkIbojIPlm7RcclxuXHRcdFx0aWYgKHZhbCB8fCB2YWwgPT09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHRcdG1zZygpIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2NvbXB1dGVkJywgdGhpcy5mb3JtLCB0aGlzLmZvcm1JdGVtKTtcclxuXHRcdFx0Ly8gaWYgKHRoaXMuZm9ybSkge1xyXG5cdFx0XHQvLyBcdHJldHVybiB0aGlzLmVycm9yTWVzc2FnZSB8fCB0aGlzLmZvcm1JdGVtLmVyck1zZztcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHQvLyBUT0RPIOWkhOeQhuWktOadoSBmb3JtSXRlbSDkuK0gZXJyTXNnIOS4jeabtOaWsOeahOmXrumimFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5sb2NhbE1zZyB8fCB0aGlzLmVycm9yTWVzc2FnZTtcclxuXHRcdH0sXHJcblx0XHQvLyDlm6DkuLp1bmlhcHDnmoRpbnB1dOe7hOS7tueahG1heGxlbmd0aOe7hOS7tuW/hemhu+imgeaVsOWAvO+8jOi/memHjOi9rOS4uuaVsOWAvO+8jOeUqOaIt+WPr+S7peS8oOWFpeWtl+espuS4suaVsOWAvFxyXG5cdFx0aW5wdXRNYXhsZW5ndGgoKSB7XHJcblx0XHRcdHJldHVybiBOdW1iZXIodGhpcy5tYXhsZW5ndGgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyDlpITnkIblpJblsYLmoLflvI/nmoRzdHlsZVxyXG5cdFx0Ym94U3R5bGUoKSB7XHJcblx0XHRcdHJldHVybiBgY29sb3I6JHt0aGlzLmlucHV0Qm9yZGVyICYmIHRoaXMubXNnID8gJyNlNDNkMzMnIDogdGhpcy5zdHlsZXMuY29sb3J9O2A7XHJcblx0XHR9LFxyXG5cdFx0Ly8gaW5wdXQg5YaF5a6555qE57G75ZKM5qC35byP5aSE55CGXHJcblx0XHRpbnB1dENvbnRlbnRDbGFzcygpIHtcclxuXHRcdFx0cmV0dXJuIG9iajJzdHJDbGFzcyh7XHJcblx0XHRcdFx0J2lzLWlucHV0LWJvcmRlcic6IHRoaXMuaW5wdXRCb3JkZXIsXHJcblx0XHRcdFx0J2lzLWlucHV0LWVycm9yLWJvcmRlcic6IHRoaXMuaW5wdXRCb3JkZXIgJiYgdGhpcy5tc2csXHJcblx0XHRcdFx0J2lzLXRleHRhcmVhJzogdGhpcy50eXBlID09PSAndGV4dGFyZWEnLFxyXG5cdFx0XHRcdCdpcy1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXHJcblx0XHRcdFx0J2lzLWZvY3VzZWQnOiB0aGlzLmZvY3VzU2hvd1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRpbnB1dENvbnRlbnRTdHlsZSgpIHtcclxuXHRcdFx0Y29uc3QgZm9jdXNDb2xvciA9IHRoaXMuZm9jdXNTaG93ID8gdGhpcy5wcmltYXJ5Q29sb3IgOiB0aGlzLnN0eWxlcy5ib3JkZXJDb2xvcjtcclxuXHRcdFx0Y29uc3QgYm9yZGVyQ29sb3IgPSB0aGlzLmlucHV0Qm9yZGVyICYmIHRoaXMubXNnID8gJyNkZDUyNGQnIDogZm9jdXNDb2xvcjtcclxuXHRcdFx0cmV0dXJuIG9iajJzdHJTdHlsZSh7XHJcblx0XHRcdFx0J2JvcmRlci1jb2xvcic6IGJvcmRlckNvbG9yIHx8ICcjZTVlNWU1JyxcclxuXHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuZGlzYWJsZWQgPyB0aGlzLnN0eWxlcy5kaXNhYmxlQ29sb3IgOiB0aGlzLnN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8gaW5wdXTlj7PkvqfmoLflvI9cclxuXHRcdGlucHV0U3R5bGUoKSB7XHJcblx0XHRcdGNvbnN0IHBhZGRpbmdSaWdodCA9IHRoaXMudHlwZSA9PT0gJ3Bhc3N3b3JkJyB8fCB0aGlzLmNsZWFyYWJsZSB8fCB0aGlzLnByZWZpeEljb24gPyAnJyA6ICcxMHB4JztcclxuXHRcdFx0cmV0dXJuIG9iajJzdHJTdHlsZSh7XHJcblx0XHRcdFx0J3BhZGRpbmctcmlnaHQnOiBwYWRkaW5nUmlnaHQsXHJcblx0XHRcdFx0J3BhZGRpbmctbGVmdCc6IHRoaXMucHJlZml4SWNvbiA/ICcnIDogJzEwcHgnXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0d2F0Y2g6IHtcclxuXHRcdHZhbHVlKG5ld1ZhbCkge1xyXG5cdFx0XHR0aGlzLnZhbCA9IG5ld1ZhbDtcclxuXHRcdH0sXHJcblx0XHRtb2RlbFZhbHVlKG5ld1ZhbCkge1xyXG5cdFx0XHR0aGlzLnZhbCA9IG5ld1ZhbDtcclxuXHRcdH0sXHJcblx0XHRmb2N1cyhuZXdWYWwpIHtcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZm9jdXNlZCA9IHRoaXMuZm9jdXM7XHJcblx0XHRcdFx0dGhpcy5mb2N1c1Nob3cgPSB0aGlzLmZvY3VzO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdC8vIFRPRE8g5aSE55CG5aS05p2hdnVlMyBjb21wdXRlZCDkuI3nm5HlkKwgaW5qZWN0IOabtOaUueeahOmXrumimO+8iGZvcm1JdGVtLmVyck1zZ++8iVxyXG5cdFx0aWYgKHRoaXMuZm9ybSAmJiB0aGlzLmZvcm1JdGVtKSB7XHJcblx0XHRcdHRoaXMuJHdhdGNoKCdmb3JtSXRlbS5lcnJNc2cnLCBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdHRoaXMubG9jYWxNc2cgPSBuZXdWYWw7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0bW91bnRlZCgpIHtcclxuXHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0dGhpcy5mb2N1c2VkID0gdGhpcy5mb2N1cztcclxuXHRcdFx0dGhpcy5mb2N1c1Nob3cgPSB0aGlzLmZvY3VzO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHQvKipcclxuXHRcdCAqIOWIneWni+WMluWPmOmHj+WAvFxyXG5cdFx0ICovXHJcblx0XHRpbml0KCkge1xyXG5cdFx0XHRpZiAodGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlID09PSAwKSB7XHJcblx0XHRcdFx0dGhpcy52YWwgPSB0aGlzLnZhbHVlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMubW9kZWxWYWx1ZSB8fCB0aGlzLm1vZGVsVmFsdWUgPT09IDAgfHwgdGhpcy5tb2RlbFZhbHVlID09PSAnJykge1xyXG5cdFx0XHRcdHRoaXMudmFsID0gdGhpcy5tb2RlbFZhbHVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMudmFsID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOeCueWHu+Wbvuagh+aXtuinpuWPkVxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHR5cGVcclxuXHRcdCAqL1xyXG5cdFx0b25DbGlja0ljb24odHlwZSkge1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdpY29uQ2xpY2snLCB0eXBlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDmmL7npLrpmpDol4/lhoXlrrnvvIzlr4bnoIHmoYbml7bnlJ/mlYhcclxuXHRcdCAqL1xyXG5cdFx0b25FeWVzKCkge1xyXG5cdFx0XHR0aGlzLnNob3dQYXNzd29yZCA9ICF0aGlzLnNob3dQYXNzd29yZDtcclxuXHRcdFx0dGhpcy4kZW1pdCgnZXllcycsIHRoaXMuc2hvd1Bhc3N3b3JkKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDovpPlhaXml7bop6blj5FcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG5cdFx0ICovXHJcblx0XHRvbklucHV0KGV2ZW50KSB7XHJcblx0XHRcdGxldCB2YWx1ZSA9IGV2ZW50LmRldGFpbC52YWx1ZTtcclxuXHRcdFx0Ly8g5Yik5pat5piv5ZCm5Y676Zmk56m65qC8XHJcblx0XHRcdGlmICh0aGlzLnRyaW0pIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMudHJpbSA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMudHJpbSkge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSB0aGlzLnRyaW1TdHIodmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMudHJpbSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRcdHZhbHVlID0gdGhpcy50cmltU3RyKHZhbHVlLCB0aGlzLnRyaW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5lcnJNc2cpIHRoaXMuZXJyTXNnID0gJyc7XHJcblx0XHRcdHRoaXMudmFsID0gdmFsdWU7XHJcblx0XHRcdC8vIFRPRE8g5YW85a65IHZ1ZTJcclxuXHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XHJcblx0XHRcdC8vIFRPRE/jgIDlhbzlrrnjgIB2dWUzXHJcblx0XHRcdHRoaXMuJGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOWklumDqOiwg+eUqOaWueazlVxyXG5cdFx0ICog6I635Y+W54Sm54K55pe26Kem5Y+RXHJcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuXHRcdCAqL1xyXG5cdFx0b25Gb2N1cygpIHtcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZm9jdXNlZCA9IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdmb2N1cycsIG51bGwpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfRm9jdXMoZXZlbnQpIHtcclxuXHRcdFx0dGhpcy5mb2N1c1Nob3cgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdmb2N1cycsIGV2ZW50KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDlpJbpg6josIPnlKjmlrnms5VcclxuXHRcdCAqIOWkseWOu+eEpueCueaXtuinpuWPkVxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XHJcblx0XHQgKi9cclxuXHRcdG9uQmx1cigpIHtcclxuXHRcdFx0dGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuJGVtaXQoJ2ZvY3VzJywgbnVsbCk7XHJcblx0XHR9LFxyXG5cdFx0X0JsdXIoZXZlbnQpIHtcclxuXHRcdFx0bGV0IHZhbHVlID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xyXG5cdFx0XHR0aGlzLmZvY3VzU2hvdyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdibHVyJywgZXZlbnQpO1xyXG5cdFx0XHQvLyDmoLnmja7nsbvlnovov5Tlm57lgLzvvIzlnKhldmVudOS4reiOt+WPlueahOWAvOeQhuiuuuS4iuiusumDveaYr3N0cmluZ1xyXG5cdFx0XHRpZiAodGhpcy5pc0VudGVyID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMudmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyDlpLHljrvnhKbngrnml7blj4LkuI7ooajljZXmoKHpqoxcclxuXHRcdFx0aWYgKHRoaXMuZm9ybSAmJiB0aGlzLmZvcm1JdGVtKSB7XHJcblx0XHRcdFx0Y29uc3QgeyB2YWxpZGF0ZVRyaWdnZXIgfSA9IHRoaXMuZm9ybTtcclxuXHRcdFx0XHRpZiAodmFsaWRhdGVUcmlnZ2VyID09PSAnYmx1cicpIHtcclxuXHRcdFx0XHRcdHRoaXMuZm9ybUl0ZW0ub25GaWVsZENoYW5nZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOaMieS4i+mUruebmOeahOWPkemAgemUrlxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGVcclxuXHRcdCAqL1xyXG5cdFx0b25Db25maXJtKGUpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnY29uZmlybScsIHRoaXMudmFsKTtcclxuXHRcdFx0dGhpcy5pc0VudGVyID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy52YWwpO1xyXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pc0VudGVyID0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOa4heeQhuWGheWuuVxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XHJcblx0XHQgKi9cclxuXHRcdG9uQ2xlYXIoZXZlbnQpIHtcclxuXHRcdFx0dGhpcy52YWwgPSAnJztcclxuXHRcdFx0Ly8gVE9ETyDlhbzlrrkgdnVlMlxyXG5cdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsICcnKTtcclxuXHRcdFx0Ly8gVE9ETyDlhbzlrrkgdnVlMlxyXG5cdFx0XHQvLyBUT0RP44CA5YW85a6544CAdnVlM1xyXG5cdFx0XHR0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsICcnKTtcclxuXHRcdFx0Ly8g54K55Ye75Y+J5Y+36Kem5Y+RXHJcblx0XHRcdHRoaXMuJGVtaXQoJ2NsZWFyJyk7XHJcblx0XHR9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZSu55uY6auY5bqm5Y+R55Sf5Y+Y5YyW55qE5pe25YCZ6Kem5Y+R5q2k5LqL5Lu2XHJcbiAgICAgKiDlhbzlrrnmgKfvvJrlvq7kv6HlsI/nqIvluo8yLjcuMCvjgIFBcHAgMy4xLjArXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgb25rZXlib2FyZGhlaWdodGNoYW5nZShldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KFwia2V5Ym9hcmRoZWlnaHRjaGFuZ2VcIixldmVudCk7XHJcbiAgICB9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog5Y676Zmk56m65qC8XHJcblx0XHQgKi9cclxuXHRcdHRyaW1TdHIoc3RyLCBwb3MgPSAnYm90aCcpIHtcclxuXHRcdFx0aWYgKHBvcyA9PT0gJ2JvdGgnKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0ci50cmltKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAocG9zID09PSAnbGVmdCcpIHtcclxuXHRcdFx0XHRyZXR1cm4gc3RyLnRyaW1MZWZ0KCk7XHJcblx0XHRcdH0gZWxzZSBpZiAocG9zID09PSAncmlnaHQnKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0ci50cmltUmlnaHQoKTtcclxuXHRcdFx0fSBlbHNlIGlmIChwb3MgPT09ICdzdGFydCcpIHtcclxuXHRcdFx0XHRyZXR1cm4gc3RyLnRyaW1TdGFydCgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBvcyA9PT0gJ2VuZCcpIHtcclxuXHRcdFx0XHRyZXR1cm4gc3RyLnRyaW1FbmQoKTtcclxuXHRcdFx0fSBlbHNlIGlmIChwb3MgPT09ICdhbGwnKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrL2csICcnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChwb3MgPT09ICdub25lJykge1xyXG5cdFx0XHRcdHJldHVybiBzdHI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHN0cjtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiR1bmktZXJyb3I6ICNlNDNkMzM7XHJcbiR1bmktYm9yZGVyLTE6ICNkY2RmZTYgIWRlZmF1bHQ7XHJcblxyXG4udW5pLWVhc3lpbnB1dCB7XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdGZsZXg6IDE7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udW5pLWVhc3lpbnB1dF9fY29udGVudCB7XHJcblx0ZmxleDogMTtcclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC8vIG1pbi1oZWlnaHQ6IDM2cHg7XHJcblx0LyogI2VuZGlmICovXHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC8vIOWkhOeQhmJvcmRlcuWKqOeUu+WImuW8gOWni+aYvuekuum7keiJsueahOmXrumimFxyXG5cdGJvcmRlci1jb2xvcjogI2ZmZjtcclxuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItY29sb3I7XHJcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxufVxyXG5cclxuLnVuaS1lYXN5aW5wdXRfX2NvbnRlbnQtaW5wdXQge1xyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHR3aWR0aDogYXV0bztcclxuXHQvKiAjZW5kaWYgKi9cclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRmbGV4OiAxO1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRoZWlnaHQ6IDM1cHg7XHJcblx0Ly8gbWluLWhlaWdodDogMzZweDtcclxufVxyXG5cclxuLnVuaS1lYXN5aW5wdXRfX3BsYWNlaG9sZGVyLWNsYXNzIHtcclxuXHRjb2xvcjogIzk5OTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Ly8gZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLmlzLXRleHRhcmVhIHtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmlzLXRleHRhcmVhLWljb24ge1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnVuaS1lYXN5aW5wdXRfX2NvbnRlbnQtdGV4dGFyZWEge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGZsZXg6IDE7XHJcblx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWFyZ2luOiA2cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0aGVpZ2h0OiA4MHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDgwcHg7XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdG1pbi1oZWlnaHQ6IDgwcHg7XHJcblx0d2lkdGg6IGF1dG87XHJcblx0LyogI2VuZGlmICovXHJcbn1cclxuXHJcbi5pbnB1dC1wYWRkaW5nIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWNsZWFyLWljb24ge1xyXG5cdHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcblxyXG4ubGFiZWwtaWNvbiB7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0bWFyZ2luLXRvcDogLTFweDtcclxufVxyXG5cclxuLy8g5pi+56S66L655qGGXHJcbi5pcy1pbnB1dC1ib3JkZXIge1xyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LyogI2VuZGlmICovXHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICR1bmktYm9yZGVyLTE7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdC8qICNpZmRlZiBNUC1BTElQQVkgKi9cclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC8qICNlbmRpZiAqL1xyXG59XHJcblxyXG4udW5pLWVycm9yLW1lc3NhZ2Uge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IC0xN3B4O1xyXG5cdGxlZnQ6IDA7XHJcblx0bGluZS1oZWlnaHQ6IDEycHg7XHJcblx0Y29sb3I6ICR1bmktZXJyb3I7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi51bmktZXJyb3ItbXNnLS1ib2VkZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3R0b206IDA7XHJcblx0bGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5pcy1pbnB1dC1lcnJvci1ib3JkZXIge1xyXG5cdGJvcmRlci1jb2xvcjogJHVuaS1lcnJvcjtcclxuXHJcblx0LnVuaS1lYXN5aW5wdXRfX3BsYWNlaG9sZGVyLWNsYXNzIHtcclxuXHRcdGNvbG9yOiBtaXgoI2ZmZiwgJHVuaS1lcnJvciwgNTAlKTtcclxuXHR9XHJcbn1cclxuXHJcbi51bmktZWFzeWlucHV0LS1ib3JkZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0cGFkZGluZzogMTBweCAxNXB4O1xyXG5cdC8vIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cdGJvcmRlci10b3A6IDFweCAjZWVlIHNvbGlkO1xyXG59XHJcblxyXG4udW5pLWVhc3lpbnB1dC1lcnJvciB7XHJcblx0cGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5pcy1maXJzdC1ib3JkZXIge1xyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRib3JkZXI6IG5vbmU7XHJcblx0LyogI2VuZGlmICovXHJcblx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0Ym9yZGVyLXdpZHRoOiAwO1xyXG5cdC8qICNlbmRpZiAqL1xyXG59XHJcblxyXG4uaXMtZGlzYWJsZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmN2Y2ZjY7XHJcblx0Y29sb3I6ICNkNWQ1ZDU7XHJcblxyXG5cdC51bmktZWFzeWlucHV0X19wbGFjZWhvbGRlci1jbGFzcyB7XHJcblx0XHRjb2xvcjogI2Q1ZDVkNTtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///69\n");

/***/ }),
/* 70 */
/*!*******************************************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 71);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJzQixDQUFnQixzdUJBQUcsRUFBQyIsImZpbGUiOiI3MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///70\n");

/***/ }),
/* 71 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 16));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 18));\nvar _nfc = _interopRequireDefault(__webpack_require__(/*! ../../utils/nfc.js */ 72));\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.debounce */ 73));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      disabled: false,\n      formData: {\n        name: '',\n        age: ''\n      },\n      range: [{\n        value: 0,\n        text: \"篮球\"\n      }, {\n        value: 1,\n        text: \"足球\"\n      }, {\n        value: 2,\n        text: \"游泳\"\n      }],\n      // 校验规则\n      rules: {\n        age: {\n          rules: [{\n            required: true,\n            errorMessage: '年龄不能为空'\n          }, {\n            format: 'number',\n            errorMessage: '年龄只能输入数字'\n          }]\n        }\n      }\n    };\n  },\n  onLoad: function onLoad() {\n    _nfc.default.listenNFCStatus();\n  },\n  methods: {\n    change: function change(e) {\n      __f__(\"log\", \"e:\", e, \" at pages/index/index.vue:102\");\n    },\n    writeData: (0, _lodash.default)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n      var _this = this;\n      var res;\n      return _regenerator.default.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return this.$refs.form.validate();\n            case 3:\n              res = _context2.sent;\n              __f__(\"log\", 'success', res, \" at pages/index/index.vue:107\");\n              uni.showModal({\n                title: \"温馨提示\",\n                content: \"此操作将抹除芯片中的数据，且不可逆\",\n                success: function () {\n                  var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {\n                    var _res;\n                    return _regenerator.default.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            if (!res.confirm) {\n                              _context.next = 7;\n                              break;\n                            }\n                            _this.disabled = true;\n                            _context.next = 4;\n                            return new Promise(function (resolve) {\n                              return uni.request({\n                                url: 'https://www.example.com/request',\n                                //仅为示例，并非真实接口地址。\n                                data: {\n                                  text: ''\n                                },\n                                header: {\n                                  'custom-header': 'hello' //自定义请求头信息\n                                },\n\n                                success: resolve\n                              });\n                            });\n                          case 4:\n                            _res = _context.sent;\n                            _nfc.default.writeData('https://m.toutiao.com/article/7335686572622348812/?from_page_type=feed&upstream_biz=toutiao_m&wid=1708087515036&W2atIF=1', function () {\n                              this.disabled = false;\n                            }.bind(_this));\n                            setTimeout(function () {\n                              _this.disabled = false;\n                            }, 10000);\n                          case 7:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n                  function success(_x) {\n                    return _success.apply(this, arguments);\n                  }\n                  return success;\n                }()\n              });\n              _context2.next = 11;\n              break;\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](0);\n              __f__(\"log\", 'err', _context2.t0, \" at pages/index/index.vue:136\");\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this, [[0, 8]]);\n    })), 1000, {\n      leading: true,\n      trailing: false\n    }),\n    setReadonly: function setReadonly() {\n      uni.showModal({\n        title: '设置NFC只读',\n        content: '该操作为单向操作，不可逆，设置后将不可修改任何数据，请确保数据设置正确后再操作',\n        showCancel: true,\n        success: function success(res) {\n          res.confirm && _nfc.default.readonly();\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJkaXNhYmxlZCIsImZvcm1EYXRhIiwibmFtZSIsImFnZSIsInJhbmdlIiwidmFsdWUiLCJ0ZXh0IiwicnVsZXMiLCJyZXF1aXJlZCIsImVycm9yTWVzc2FnZSIsImZvcm1hdCIsIm9uTG9hZCIsIm5mYyIsIm1ldGhvZHMiLCJjaGFuZ2UiLCJ3cml0ZURhdGEiLCJyZXMiLCJ1bmkiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwidXJsIiwiaGVhZGVyIiwic2V0VGltZW91dCIsImxlYWRpbmciLCJ0cmFpbGluZyIsInNldFJlYWRvbmx5Iiwic2hvd0NhbmNlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBMkRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0E7RUFDQUE7SUFDQTtNQUNBQztNQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0FDO1FBQ0FDO1FBQ0FDO01BQ0EsR0FDQTtRQUNBRDtRQUNBQztNQUNBLEdBQ0E7UUFDQUQ7UUFDQUM7TUFDQSxFQUNBO01BQ0E7TUFDQUM7UUFDQUo7VUFDQUk7WUFDQUM7WUFDQUM7VUFDQTtZQUNBQztZQUNBRDtVQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUU7SUFDQUM7RUFDQTtFQUNBQztJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUEsT0FFQTtZQUFBO2NBQUFDO2NBQ0E7Y0FDQUM7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7a0JBQUE7b0JBQUE7b0JBQUE7c0JBQUE7d0JBQUE7MEJBQUE7NEJBQUEsS0FDQUo7OEJBQUE7OEJBQUE7NEJBQUE7NEJBQ0E7NEJBQUE7NEJBQUEsT0FDQTs4QkFBQTtnQ0FDQUs7Z0NBQUE7Z0NBQ0F0QjtrQ0FDQU87Z0NBQ0E7Z0NBQ0FnQjtrQ0FDQTtnQ0FDQTs7Z0NBQ0FGOzhCQUNBOzRCQUFBOzBCQUFBOzRCQVRBSjs0QkFVQUosdUJBQ0EsNEhBQ0E7OEJBQ0E7NEJBQ0E7NEJBQ0FXOzhCQUNBOzRCQUNBOzBCQUFBOzBCQUFBOzRCQUFBO3dCQUFBO3NCQUFBO29CQUFBO2tCQUFBLENBRUE7a0JBQUE7b0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Y0FDQTtjQUFBO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FFQTtZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBRUE7TUFDQUM7TUFDQUM7SUFDQTtJQUNBQztNQUNBVDtRQUNBQztRQUNBQztRQUNBUTtRQUNBUDtVQUNBSjtRQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiI3MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAxMTJ1cHg7XCI+XHJcblx0XHQ8dW5pLWZvcm1zIDptb2RlbFZhbHVlPVwiZm9ybURhdGFcIiByZWY9XCJmb3JtXCIgOnJ1bGVzPVwicnVsZXNcIiBsYWJlbEFsaWduPVwibGVmdFwiIGxhYmVsV2lkdGg9XCIxNTB1cHhcIlxyXG5cdFx0XHRzdHlsZT1cInBhZGRpbmc6IDI0dXB4IDQ4dXB4O1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+55CD5p2G5Z6L5Y+3PC92aWV3PlxyXG5cdFx0XHQ8dW5pLWZvcm1zLWl0ZW0gbGFiZWw9XCLlk4HniYzmrL7lvI9cIiBuYW1lPVwibmFtZVwiPlxyXG5cdFx0XHRcdDx1bmktZGF0YS1zZWxlY3QgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiB2LW1vZGVsPVwiZm9ybURhdGEuYWdlXCIgOmxvY2FsZGF0YT1cInJhbmdlXCIgQGNoYW5nZT1cImNoYW5nZVwiIC8+XHJcblx0XHRcdDwvdW5pLWZvcm1zLWl0ZW0+XHJcblx0XHRcdDx1bmktZm9ybXMtaXRlbSBsYWJlbD1cIueQg+adhue8luWPt1wiIG5hbWU9XCJhZ2VcIj5cclxuXHRcdFx0XHQ8dW5pLWVhc3lpbnB1dCA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm1EYXRhLmFnZVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCIgLz5cclxuXHRcdFx0PC91bmktZm9ybXMtaXRlbT5cclxuXHRcdFx0PHVuaS1mb3Jtcy1pdGVtIGxhYmVsPVwi57uf5LiA5ZSu5Lu3XCIgbmFtZT1cImFnZVwiPlxyXG5cdFx0XHRcdDx1bmktZWFzeWlucHV0IDpkaXNhYmxlZD1cImRpc2FibGVkXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybURhdGEuYWdlXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHNsb3Q9XCJsZWZ0XCIgY2xhc3M9XCJtbDEyXCI+Q05ZPC92aWV3PlxyXG5cdFx0XHRcdDwvdW5pLWVhc3lpbnB1dD5cclxuXHRcdFx0PC91bmktZm9ybXMtaXRlbT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPuWHuuWOguWPguaVsDx1bmktaWNvbnMgdHlwZT1cImNoYXRib3hlc1wiIHNpemU9XCIzMFwiIEBjbGljaz1cInNldFJlYWRvbmx5XCIgY2xhc3M9XCJyZWFkb25seVwiPjwvdW5pLWljb25zPjwvdmlldz5cclxuXHRcdFx0PHVuaS1mb3Jtcy1pdGVtIGxhYmVsPVwi5p2G5Z6LXCIgbmFtZT1cIm5hbWVcIj5cclxuXHRcdFx0XHQ8dW5pLWRhdGEtc2VsZWN0IDpkaXNhYmxlZD1cImRpc2FibGVkXCIgdi1tb2RlbD1cImZvcm1EYXRhLmFnZVwiIDpsb2NhbGRhdGE9XCJyYW5nZVwiIEBjaGFuZ2U9XCJjaGFuZ2VcIiAvPlxyXG5cdFx0XHQ8L3VuaS1mb3Jtcy1pdGVtPlxyXG5cdFx0XHQ8dW5pLWZvcm1zLWl0ZW0gbGFiZWw9XCLmnYblpLTnm7TlvoRcIiBuYW1lPVwiYWdlXCI+XHJcblx0XHRcdFx0PHVuaS1lYXN5aW5wdXQgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmb3JtRGF0YS5hZ2VcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgc2xvdD1cInJpZ2h0XCIgY2xhc3M9XCJtcjEyXCI+bW08L3ZpZXc+XHJcblx0XHRcdFx0PC91bmktZWFzeWlucHV0PlxyXG5cdFx0XHQ8L3VuaS1mb3Jtcy1pdGVtPlxyXG5cdFx0XHQ8dW5pLWZvcm1zLWl0ZW0gbGFiZWw9XCLliY3mnp3mnZDotKhcIiBuYW1lPVwiYWdlXCI+XHJcblx0XHRcdFx0PHVuaS1kYXRhLXNlbGVjdCA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIHYtbW9kZWw9XCJmb3JtRGF0YS5hZ2VcIiA6bG9jYWxkYXRhPVwicmFuZ2VcIiBAY2hhbmdlPVwiY2hhbmdlXCIgLz5cclxuXHRcdFx0PC91bmktZm9ybXMtaXRlbT5cclxuXHRcdFx0PHVuaS1mb3Jtcy1pdGVtIGxhYmVsPVwi5ZCO5oqK55u05b6EXCIgbmFtZT1cImFnZVwiPlxyXG5cdFx0XHRcdDx1bmktZWFzeWlucHV0IDpkaXNhYmxlZD1cImRpc2FibGVkXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybURhdGEuYWdlXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHNsb3Q9XCJyaWdodFwiIGNsYXNzPVwibXIxMlwiPm1tPC92aWV3PlxyXG5cdFx0XHRcdDwvdW5pLWVhc3lpbnB1dD5cclxuXHRcdFx0PC91bmktZm9ybXMtaXRlbT5cclxuXHRcdFx0PHVuaS1mb3Jtcy1pdGVtIGxhYmVsPVwi5ZCO5oqK5p2Q6LSoXCIgbmFtZT1cImFnZVwiPlxyXG5cdFx0XHRcdDx1bmktZGF0YS1zZWxlY3QgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiB2LW1vZGVsPVwiZm9ybURhdGEuYWdlXCIgOmxvY2FsZGF0YT1cInJhbmdlXCIgQGNoYW5nZT1cImNoYW5nZVwiIC8+XHJcblx0XHRcdDwvdW5pLWZvcm1zLWl0ZW0+XHJcblx0XHRcdDx1bmktZm9ybXMtaXRlbSBsYWJlbD1cIumVv+W6plwiIG5hbWU9XCJhZ2VcIj5cclxuXHRcdFx0XHQ8dW5pLWVhc3lpbnB1dCA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm1EYXRhLmFnZVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBzbG90PVwicmlnaHRcIiBjbGFzcz1cIm1yMTJcIj5jbTwvdmlldz5cclxuXHRcdFx0XHQ8L3VuaS1lYXN5aW5wdXQ+XHJcblx0XHRcdDwvdW5pLWZvcm1zLWl0ZW0+XHJcblx0XHRcdDx1bmktZm9ybXMtaXRlbSBsYWJlbD1cIumHjemHj1wiIG5hbWU9XCJhZ2VcIj5cclxuXHRcdFx0XHQ8dW5pLWVhc3lpbnB1dCA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm1EYXRhLmFnZVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBzbG90PVwicmlnaHRcIiBjbGFzcz1cIm1yMTJcIj5nPC92aWV3PlxyXG5cdFx0XHRcdDwvdW5pLWVhc3lpbnB1dD5cclxuXHRcdFx0PC91bmktZm9ybXMtaXRlbT5cclxuXHRcdFx0PHVuaS1mb3Jtcy1pdGVtIGxhYmVsPVwi6YeN5b+DXCIgbmFtZT1cImFnZVwiPlxyXG5cdFx0XHRcdDx1bmktZWFzeWlucHV0IDpkaXNhYmxlZD1cImRpc2FibGVkXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybURhdGEuYWdlXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHNsb3Q9XCJyaWdodFwiIGNsYXNzPVwibXIxMlwiPmNtPC92aWV3PlxyXG5cdFx0XHRcdDwvdW5pLWVhc3lpbnB1dD5cclxuXHRcdFx0PC91bmktZm9ybXMtaXRlbT5cclxuXHRcdDwvdW5pLWZvcm1zPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmb290ZXJcIj5cclxuXHRcdFx0PGJ1dHRvbiA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIEBjbGljaz1cIndyaXRlRGF0YVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcIj7lhpnlhaU8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBuZmMgZnJvbSAnLi4vLi4vdXRpbHMvbmZjLmpzJ1xyXG5cdGltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkaXNhYmxlZDogZmFsc2UsXHJcblx0XHRcdFx0Zm9ybURhdGE6IHtcclxuXHRcdFx0XHRcdG5hbWU6ICcnLFxyXG5cdFx0XHRcdFx0YWdlOiAnJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHJhbmdlOiBbe1xyXG5cdFx0XHRcdFx0XHR2YWx1ZTogMCxcclxuXHRcdFx0XHRcdFx0dGV4dDogXCLnr67nkINcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFsdWU6IDEsXHJcblx0XHRcdFx0XHRcdHRleHQ6IFwi6Laz55CDXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhbHVlOiAyLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiBcIua4uOazs1wiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Ly8g5qCh6aqM6KeE5YiZXHJcblx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdGFnZToge1xyXG5cdFx0XHRcdFx0XHRydWxlczogW3tcclxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2U6ICflubTpvoTkuI3og73kuLrnqbonXHJcblx0XHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0XHRmb3JtYXQ6ICdudW1iZXInLFxyXG5cdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZTogJ+W5tOm+hOWPquiDvei+k+WFpeaVsOWtlydcclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0bmZjLmxpc3Rlbk5GQ1N0YXR1cygpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2hhbmdlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImU6XCIsIGUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR3cml0ZURhdGE6IGRlYm91bmNlKGFzeW5jIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLiRyZWZzLmZvcm0udmFsaWRhdGUoKVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3N1Y2Nlc3MnLCByZXMpO1xyXG5cdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIua4qemmqOaPkOekulwiLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIuatpOaTjeS9nOWwhuaKuemZpOiKr+eJh+S4reeahOaVsOaNru+8jOS4lOS4jeWPr+mAhlwiLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBhc3luYyByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIHVybDogJ2h0dHBzOi8vd3d3LmV4YW1wbGUuY29tL3JlcXVlc3QnLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgdGV4dDogJydcclxuXHRcdFx0XHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGhlYWRlcjoge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAnY3VzdG9tLWhlYWRlcic6ICdoZWxsbycgLy/oh6rlrprkuYnor7fmsYLlpLTkv6Hmga9cclxuXHRcdFx0XHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIHN1Y2Nlc3M6IHJlc29sdmVcclxuXHRcdFx0XHRcdFx0XHRcdH0pKVxyXG5cdFx0XHRcdFx0XHRcdFx0bmZjLndyaXRlRGF0YShcclxuXHRcdFx0XHRcdFx0XHRcdFx0J2h0dHBzOi8vbS50b3V0aWFvLmNvbS9hcnRpY2xlLzczMzU2ODY1NzI2MjIzNDg4MTIvP2Zyb21fcGFnZV90eXBlPWZlZWQmdXBzdHJlYW1fYml6PXRvdXRpYW9fbSZ3aWQ9MTcwODA4NzUxNTAzNiZXMmF0SUY9MScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmRpc2FibGVkID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR9LCAxMDAwMClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2VycicsIGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMTAwMCwge1xyXG5cdFx0XHRcdGxlYWRpbmc6IHRydWUsXHJcblx0XHRcdFx0dHJhaWxpbmc6IGZhbHNlXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRzZXRSZWFkb25seSAoKSB7XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+iuvue9rk5GQ+WPquivuycsXHJcblx0XHRcdFx0XHRjb250ZW50OiAn6K+l5pON5L2c5Li65Y2V5ZCR5pON5L2c77yM5LiN5Y+v6YCG77yM6K6+572u5ZCO5bCG5LiN5Y+v5L+u5pS55Lu75L2V5pWw5o2u77yM6K+356Gu5L+d5pWw5o2u6K6+572u5q2j56Gu5ZCO5YaN5pON5L2cJyxcclxuXHRcdFx0XHRcdHNob3dDYW5jZWw6IHRydWUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXMuY29uZmlybSAmJiBuZmMucmVhZG9ubHkoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQudGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS10aXRsZTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0bWFyZ2luOiAyNHVweCAwO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0Lm1yMTIge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMnVweDtcclxuXHR9XHJcblxyXG5cdC5tbDEyIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMnVweDtcclxuXHR9XHJcblxyXG5cdC5mb290ZXIge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0aGVpZ2h0OiAxNDB1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nOiAyNHVweCA0OHVweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cdC5yZWFkb25seSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHR9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///71\n");

/***/ }),
/* 72 */
/*!**********************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/utils/nfc.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n/**\r\nNFC操作\r\n*/\n// 安卓配置\n// 包路径\n// 包路径\nvar package_NdefRecord = 'android.nfc.NdefRecord';\nvar package_NdefMessage = 'android.nfc.NdefMessage';\nvar package_TECH_DISCOVERED = 'android.nfc.action.TECH_DISCOVERED';\nvar package_Intent = 'android.content.Intent';\nvar package_Activity = 'android.app.Activity';\nvar package_PendingIntent = 'android.app.PendingIntent';\nvar package_IntentFilter = 'android.content.IntentFilter';\nvar package_NfcAdapter = 'android.nfc.NfcAdapter';\nvar package_Ndef = 'android.nfc.tech.Ndef';\nvar package_NdefFormatable = 'android.nfc.tech.NdefFormatable';\nvar package_Parcelable = 'android.os.Parcelable';\nvar package_String = 'java.lang.String';\nvar NfcAdapter;\nvar NdefRecord;\nvar NdefMessage;\nvar MifareUltralight;\nvar mfc;\nvar readyWriteData = false; //开启写\nvar readyRead = false; //开启读\nvar readOnly = false; //开启只读\nvar noNFC = false;\nvar techListsArray = [['android.nfc.tech.IsoDep'], ['android.nfc.tech.NfcA'], ['android.nfc.tech.NfcB'], ['android.nfc.tech.NfcF'], ['android.nfc.tech.Nfcf'], ['android.nfc.tech.NfcV'], ['android.nfc.tech.NdefFormatable'], ['android.nfc.tech.MifareClassi'], ['android.nfc.tech.MifareUltralight']];\nvar writeCB = function writeCB() {};\n// 要写入的数据\nvar text = 'https://m.toutiao.com/article/7335686572622348812/?from_page_type=feed&upstream_biz=toutiao_m&wid=1708087515036&W2atIF=1';\nvar readResult = '';\n// 安卓配置结束\nvar cid = null;\nvar _default = {\n  // 读nfc芯片\n  activ: function activ() {\n    // // 安卓操作\n    readyRead = true; //开启读\n\n    //  // toast('请将NFC标签靠近！');\n  },\n\n  listenNFCStatus: function listenNFCStatus() {\n    __f__(\"log\", \"---------监听NFC状态--------------\", \" at utils/nfc.js:55\");\n    var that = this;\n    try {\n      var main = plus.android.runtimeMainActivity();\n      var Intent = plus.android.importClass('android.content.Intent');\n      var Activity = plus.android.importClass('android.app.Activity');\n      var PendingIntent = plus.android.importClass('android.app.PendingIntent');\n      var IntentFilter = plus.android.importClass('android.content.IntentFilter');\n      NfcAdapter = plus.android.importClass('android.nfc.NfcAdapter');\n      var nfcAdapter = NfcAdapter.getDefaultAdapter(main);\n      if (nfcAdapter == null) {\n        uni.showToast({\n          title: '设备不支持NFC！',\n          icon: 'none'\n        });\n        noNFC = true;\n        return;\n      }\n      if (!nfcAdapter.isEnabled()) {\n        uni.showToast({\n          title: '请在系统设置中先启用NFC功能！',\n          icon: 'none'\n        });\n        noNFC = true;\n        return;\n      } else {\n        noNFC = false;\n      }\n      var intent = new Intent(main, main.getClass());\n      intent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);\n      var pendingIntent = PendingIntent.getActivity(main, 0, intent, 0);\n      var ndef = new IntentFilter(\"android.nfc.action.TECH_DISCOVERED\");\n      ndef.addDataType(\"*/*\");\n      var intentFiltersArray = [ndef];\n      __f__(\"log\", 'intent::', plus.globalEvent, \" at utils/nfc.js:93\");\n      plus.globalEvent.addEventListener('newintent', function () {\n        __f__(\"log\", 'newintent running', \" at utils/nfc.js:95\");\n        // 轮询调用 NFC\n        setTimeout(that.nfcRuning(), 1000);\n      });\n      plus.globalEvent.addEventListener('pause', function (e) {\n        __f__(\"log\", 'pause running', \" at utils/nfc.js:100\");\n        if (nfcAdapter) {\n          //关闭前台调度系统\n          //恢复默认状态\n          nfcAdapter.disableForegroundDispatch(main);\n        }\n      });\n      plus.globalEvent.addEventListener('resume', function (e) {\n        __f__(\"log\", 'resume running', \" at utils/nfc.js:108\");\n        if (nfcAdapter) {\n          //开启前台调度系统\n          // 优于所有其他NFC\n          nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray, techListsArray);\n        }\n      });\n      nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray, techListsArray);\n    } catch (e) {\n      __f__(\"error\", e, \" at utils/nfc.js:118\");\n    }\n  },\n  nfcRuning: function nfcRuning() {\n    //\n    __f__(\"log\", \"--------------NFC 运行---------------\", \" at utils/nfc.js:122\");\n    NdefRecord = plus.android.importClass(\"android.nfc.NdefRecord\");\n    NdefMessage = plus.android.importClass(\"android.nfc.NdefMessage\");\n    MifareUltralight = plus.android.importClass(\"android.nfc.tech.MifareUltralight\");\n    var main = plus.android.runtimeMainActivity();\n    var intent = main.getIntent();\n    var that = this;\n    __f__(\"log\", \"action type:\" + intent.getAction(), \" at utils/nfc.js:130\");\n    __f__(\"log\", package_TECH_DISCOVERED == intent.getAction(), \" at utils/nfc.js:131\");\n    __f__(\"log\", readyRead, \" at utils/nfc.js:132\");\n    if (package_TECH_DISCOVERED == intent.getAction()) {\n      if (readyWriteData) {\n        __f__(\"log\", \"----------我在写1-------------\", \" at utils/nfc.js:135\");\n        that.android_write(intent);\n        readyWriteData = false;\n        writeCB();\n      } else if (readyRead) {\n        __f__(\"log\", \"----------我在读1-------------\", \" at utils/nfc.js:140\");\n        that.android_read(intent);\n        readyRead = false;\n      } else if (readOnly) {\n        that.makeReadOnly(intent);\n      }\n    }\n  },\n  android_write: function android_write(intent) {\n    //写代码\n    __f__(\"log\", \"----------我在写-------------\", \" at utils/nfc.js:149\");\n    // app.byqc.com\n    try {\n      // toast('请勿移开标签 正在写入...');\n      __f__(\"log\", \"text=\" + text, \" at utils/nfc.js:153\");\n      var pkg = plus.android.invoke(\"包名\", \"getBytes\");\n      var urls = plus.android.invoke(text, \"getBytes\");\n      // 这个是写入url\n      var textRecord = new NdefRecord(NdefRecord.TNF_ABSOLUTE_URI, urls, plus.android.invoke('', \"getBytes\"), urls);\n      // 这个是写入包名，识别芯片跳转app\n      // let textRecord = new NdefRecord(NdefRecord.TNF_EXTERNAL_TYPE,plus.android.invoke(\"android.com:pkg\", \"getBytes\"),plus.android.invoke('nnn', \"getBytes\"),pkg);\n      var message = new NdefMessage([textRecord]);\n      var Ndef = plus.android.importClass('android.nfc.tech.Ndef');\n      var NdefFormatable = plus.android.importClass('android.nfc.tech.NdefFormatable');\n      var tag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);\n      var ndef = Ndef.get(tag);\n      if (ndef != null) {\n        // 待写入的数据长度\n        var size = message.toByteArray().length;\n        var a = ndef.connect();\n        if (!ndef.isWritable()) {\n          toast('tag不允许写入！');\n          return;\n        }\n        if (ndef.getMaxSize() < size) {\n          toast('文件大小超出容量！');\n          return;\n        }\n        ndef.writeNdefMessage(message); //写入数据\n        setTimeout(function () {\n          return toast('写入数据成功！');\n        }, 1000);\n        return;\n      } else {\n        var format = NdefFormatable.get(tag);\n        if (format != null) {\n          try {\n            format.connect();\n            format.format(message);\n            toast('格式化tag并且写入message');\n            return;\n          } catch (e) {\n            toast('格式化tag失败.');\n            return;\n          }\n        } else {\n          toast('Tag不支持NDEF');\n          return;\n        }\n      }\n    } catch (e) {\n      toast('写入失败');\n      __f__(\"log\", \"error=\" + e, \" at utils/nfc.js:201\");\n    }\n  },\n  android_read: function android_read(intent) {\n    // 读代码\n    __f__(\"log\", \"----------我在读read-------------\", \" at utils/nfc.js:206\");\n    // toast('请勿移开标签正在读取数据');\n    var that = this;\n    // NFC id\n    var bytesId = intent.getByteArrayExtra(NfcAdapter.EXTRA_ID);\n    var nfc_id = that.byteArrayToHexString(bytesId);\n    cid = nfc_id;\n    var Parcelable = plus.android.importClass(\"android.os.Parcelable\");\n    var rawmsgs = intent.getParcelableArrayExtra(\"android.nfc.extra.NDEF_MESSAGES\");\n    //let rawmsgs = intent.getParcelableArrayExtra();\n    __f__(\"log\", \"数据\" + rawmsgs, \" at utils/nfc.js:216\");\n    if (rawmsgs != null && rawmsgs.length > 0) {\n      var records = rawmsgs[0].getRecords();\n      var _result = records[0].getPayload();\n      var data = plus.android.newObject(\"java.lang.String\", _result);\n      // toast('NFC 数据：' + data);\n      __f__(\"log\", 'NFC 数据：', data, \" at utils/nfc.js:222\");\n      readResult = data;\n    } else {\n      toast('没有读取到数据');\n    }\n    // 判断这个cid是否绑定了用户\n    // 执行find()查询\n  },\n\n  byteArrayToHexString: function byteArrayToHexString(inarray) {\n    // 将字节数组转换为字符串  \n    var i, j, inn;\n    var hex = [\"0\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\"];\n    var out = \"\";\n    for (j = 0; j < inarray.length; ++j) {\n      inn = inarray[j] & 0xff;\n      i = inn >>> 4 & 0x0f;\n      out += hex[i];\n      i = inn & 0x0f;\n      out += hex[i];\n    }\n    return out;\n  },\n  writeData: function writeData(data, cb) {\n    // 更改写状态\n    if (noNFC) {\n      toast('请检查设备是否支持并开启 NFC 功能！');\n      return;\n    }\n    if (data) text = data;\n    if (cb) writeCB = cb;\n    // 轮询条件\n    readyWriteData = true;\n    toast('请将NFC标签靠近！');\n  },\n  readData: function readData() {\n    // 更改读状态\n    if (noNFC) {\n      toast('请检查设备是否支持并开启 NFC 功能！');\n      return;\n    }\n    // 轮询条件\n    readyRead = true;\n    toast('请将NFC标签靠近！');\n  },\n  // close: function(){\n  // },\n  readonly: function readonly() {\n    if (noNFC) {\n      toast('请检查设备是否支持并开启 NFC 功能！');\n      return;\n    }\n    // 轮询条件\n    readOnly = true;\n    toast('请将NFC标签靠近！');\n  },\n  setTxt: function setTxt(txt) {\n    if (noNFC) {\n      toast('请检查设备是否支持并开启 NFC 功能！');\n      return;\n    }\n    text = txt;\n  },\n  // 设为只读，该操作是单向操作，不可逆，请谨慎操作\n  makeReadOnly: function makeReadOnly(intent) {\n    var tag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);\n    var Ndef = plus.android.importClass('android.nfc.tech.Ndef');\n    var ndef = Ndef.get(tag);\n    // 先判断是否可设置\n    if (ndef.canMakeReadOnly()) {\n      var reuslt = ndef.makeReadOnly();\n      if (result) toast('设置只读成功，只读模式不可再写入任何信息');else toast('设置失败');\n    } else {\n      toast('此卡不支持该操作');\n    }\n  }\n};\nexports.default = _default;\nfunction toast(content) {\n  uni.showToast({\n    title: content,\n    icon: 'none'\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvbmZjLmpzIl0sIm5hbWVzIjpbInBhY2thZ2VfTmRlZlJlY29yZCIsInBhY2thZ2VfTmRlZk1lc3NhZ2UiLCJwYWNrYWdlX1RFQ0hfRElTQ09WRVJFRCIsInBhY2thZ2VfSW50ZW50IiwicGFja2FnZV9BY3Rpdml0eSIsInBhY2thZ2VfUGVuZGluZ0ludGVudCIsInBhY2thZ2VfSW50ZW50RmlsdGVyIiwicGFja2FnZV9OZmNBZGFwdGVyIiwicGFja2FnZV9OZGVmIiwicGFja2FnZV9OZGVmRm9ybWF0YWJsZSIsInBhY2thZ2VfUGFyY2VsYWJsZSIsInBhY2thZ2VfU3RyaW5nIiwiTmZjQWRhcHRlciIsIk5kZWZSZWNvcmQiLCJOZGVmTWVzc2FnZSIsIk1pZmFyZVVsdHJhbGlnaHQiLCJtZmMiLCJyZWFkeVdyaXRlRGF0YSIsInJlYWR5UmVhZCIsInJlYWRPbmx5Iiwibm9ORkMiLCJ0ZWNoTGlzdHNBcnJheSIsIndyaXRlQ0IiLCJ0ZXh0IiwicmVhZFJlc3VsdCIsImNpZCIsImFjdGl2IiwibGlzdGVuTkZDU3RhdHVzIiwidGhhdCIsIm1haW4iLCJwbHVzIiwiYW5kcm9pZCIsInJ1bnRpbWVNYWluQWN0aXZpdHkiLCJJbnRlbnQiLCJpbXBvcnRDbGFzcyIsIkFjdGl2aXR5IiwiUGVuZGluZ0ludGVudCIsIkludGVudEZpbHRlciIsIm5mY0FkYXB0ZXIiLCJnZXREZWZhdWx0QWRhcHRlciIsInVuaSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImlzRW5hYmxlZCIsImludGVudCIsImdldENsYXNzIiwiYWRkRmxhZ3MiLCJGTEFHX0FDVElWSVRZX1NJTkdMRV9UT1AiLCJwZW5kaW5nSW50ZW50IiwiZ2V0QWN0aXZpdHkiLCJuZGVmIiwiYWRkRGF0YVR5cGUiLCJpbnRlbnRGaWx0ZXJzQXJyYXkiLCJnbG9iYWxFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwibmZjUnVuaW5nIiwiZSIsImRpc2FibGVGb3JlZ3JvdW5kRGlzcGF0Y2giLCJlbmFibGVGb3JlZ3JvdW5kRGlzcGF0Y2giLCJnZXRJbnRlbnQiLCJnZXRBY3Rpb24iLCJhbmRyb2lkX3dyaXRlIiwiYW5kcm9pZF9yZWFkIiwibWFrZVJlYWRPbmx5IiwicGtnIiwiaW52b2tlIiwidXJscyIsInRleHRSZWNvcmQiLCJUTkZfQUJTT0xVVEVfVVJJIiwibWVzc2FnZSIsIk5kZWYiLCJOZGVmRm9ybWF0YWJsZSIsInRhZyIsImdldFBhcmNlbGFibGVFeHRyYSIsIkVYVFJBX1RBRyIsImdldCIsInNpemUiLCJ0b0J5dGVBcnJheSIsImxlbmd0aCIsImEiLCJjb25uZWN0IiwiaXNXcml0YWJsZSIsInRvYXN0IiwiZ2V0TWF4U2l6ZSIsIndyaXRlTmRlZk1lc3NhZ2UiLCJmb3JtYXQiLCJieXRlc0lkIiwiZ2V0Qnl0ZUFycmF5RXh0cmEiLCJFWFRSQV9JRCIsIm5mY19pZCIsImJ5dGVBcnJheVRvSGV4U3RyaW5nIiwiUGFyY2VsYWJsZSIsInJhd21zZ3MiLCJnZXRQYXJjZWxhYmxlQXJyYXlFeHRyYSIsInJlY29yZHMiLCJnZXRSZWNvcmRzIiwicmVzdWx0IiwiZ2V0UGF5bG9hZCIsImRhdGEiLCJuZXdPYmplY3QiLCJpbmFycmF5IiwiaSIsImoiLCJpbm4iLCJoZXgiLCJvdXQiLCJ3cml0ZURhdGEiLCJjYiIsInJlYWREYXRhIiwicmVhZG9ubHkiLCJzZXRUeHQiLCJ0eHQiLCJjYW5NYWtlUmVhZE9ubHkiLCJyZXVzbHQiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxrQkFBa0IsR0FBRyx3QkFBd0I7QUFDbkQsSUFBTUMsbUJBQW1CLEdBQUcseUJBQXlCO0FBQ3JELElBQU1DLHVCQUF1QixHQUFHLG9DQUFvQztBQUNwRSxJQUFNQyxjQUFjLEdBQUcsd0JBQXdCO0FBQy9DLElBQU1DLGdCQUFnQixHQUFHLHNCQUFzQjtBQUMvQyxJQUFNQyxxQkFBcUIsR0FBRywyQkFBMkI7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O0lBQ0E7SUFDQWpFLFFBQVEsR0FBRyxJQUFJO0lBQ2ZpRSxLQUFLLENBQUMsWUFBWSxDQUFDO0VBQ3BCLENBQUM7RUFDRDRCLE1BQU0sRUFBRSxnQkFBU0MsR0FBRyxFQUFFO0lBQ3JCLElBQUk3RixLQUFLLEVBQUU7TUFDVmdFLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztNQUM3QjtJQUNEO0lBQ0E3RCxJQUFJLEdBQUcwRixHQUFHO0VBQ1gsQ0FBQztFQUNEO0VBQ0FoRCxZQUFZLHdCQUFDcEIsTUFBTSxFQUFFO0lBQ3BCLElBQUk2QixHQUFHLEdBQUc3QixNQUFNLENBQUM4QixrQkFBa0IsQ0FBQy9ELFVBQVUsQ0FBQ2dFLFNBQVMsQ0FBQztJQUN6RCxJQUFJSixJQUFJLEdBQUcxQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0csV0FBVyxDQUFDLHVCQUF1QixDQUFDO0lBQzVELElBQU1pQixJQUFJLEdBQUdxQixJQUFJLENBQUNLLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDO0lBQzFCO0lBQ0EsSUFBSXZCLElBQUksQ0FBQytELGVBQWUsRUFBRSxFQUFFO01BQzNCLElBQU1DLE1BQU0sR0FBR2hFLElBQUksQ0FBQ2MsWUFBWSxFQUFFO01BQ2xDLElBQUlpQyxNQUFNLEVBQUVkLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxNQUNwQ0EsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNuQixDQUFDLE1BQU07TUFDTkEsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUNsQjtFQUNEO0FBQ0QsQ0FBQztBQUFBO0FBRUQsU0FBU0EsS0FBSyxDQUFDZ0MsT0FBTyxFQUFFO0VBQ3ZCNUUsR0FBRyxDQUFDQyxTQUFTLENBQUM7SUFDYkMsS0FBSyxFQUFFMEUsT0FBTztJQUNkekUsSUFBSSxFQUFFO0VBQ1AsQ0FBQyxDQUFDO0FBQ0gsQyIsImZpbGUiOiI3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG5ORkPmk43kvZxcclxuKi9cclxuLy8g5a6J5Y2T6YWN572uXHJcbi8vIOWMhei3r+W+hFxyXG4vLyDljIXot6/lvoRcclxuY29uc3QgcGFja2FnZV9OZGVmUmVjb3JkID0gJ2FuZHJvaWQubmZjLk5kZWZSZWNvcmQnO1xyXG5jb25zdCBwYWNrYWdlX05kZWZNZXNzYWdlID0gJ2FuZHJvaWQubmZjLk5kZWZNZXNzYWdlJztcclxuY29uc3QgcGFja2FnZV9URUNIX0RJU0NPVkVSRUQgPSAnYW5kcm9pZC5uZmMuYWN0aW9uLlRFQ0hfRElTQ09WRVJFRCc7XHJcbmNvbnN0IHBhY2thZ2VfSW50ZW50ID0gJ2FuZHJvaWQuY29udGVudC5JbnRlbnQnO1xyXG5jb25zdCBwYWNrYWdlX0FjdGl2aXR5ID0gJ2FuZHJvaWQuYXBwLkFjdGl2aXR5JztcclxuY29uc3QgcGFja2FnZV9QZW5kaW5nSW50ZW50ID0gJ2FuZHJvaWQuYXBwLlBlbmRpbmdJbnRlbnQnO1xyXG5jb25zdCBwYWNrYWdlX0ludGVudEZpbHRlciA9ICdhbmRyb2lkLmNvbnRlbnQuSW50ZW50RmlsdGVyJztcclxuY29uc3QgcGFja2FnZV9OZmNBZGFwdGVyID0gJ2FuZHJvaWQubmZjLk5mY0FkYXB0ZXInO1xyXG5jb25zdCBwYWNrYWdlX05kZWYgPSAnYW5kcm9pZC5uZmMudGVjaC5OZGVmJztcclxuY29uc3QgcGFja2FnZV9OZGVmRm9ybWF0YWJsZSA9ICdhbmRyb2lkLm5mYy50ZWNoLk5kZWZGb3JtYXRhYmxlJztcclxuY29uc3QgcGFja2FnZV9QYXJjZWxhYmxlID0gJ2FuZHJvaWQub3MuUGFyY2VsYWJsZSc7XHJcbmNvbnN0IHBhY2thZ2VfU3RyaW5nID0gJ2phdmEubGFuZy5TdHJpbmcnO1xyXG5cclxubGV0IE5mY0FkYXB0ZXI7XHJcbmxldCBOZGVmUmVjb3JkO1xyXG5sZXQgTmRlZk1lc3NhZ2U7XHJcbmxldCBNaWZhcmVVbHRyYWxpZ2h0O1xyXG5sZXQgbWZjXHJcbmxldCByZWFkeVdyaXRlRGF0YSA9IGZhbHNlOyAvL+W8gOWQr+WGmVxyXG5sZXQgcmVhZHlSZWFkID0gZmFsc2U7IC8v5byA5ZCv6K+7XHJcbmxldCByZWFkT25seSA9IGZhbHNlOyAvL+W8gOWQr+WPquivu1xyXG5sZXQgbm9ORkMgPSBmYWxzZTtcclxubGV0IHRlY2hMaXN0c0FycmF5ID0gW1xyXG5cdFsnYW5kcm9pZC5uZmMudGVjaC5Jc29EZXAnXSxcclxuXHRbJ2FuZHJvaWQubmZjLnRlY2guTmZjQSddLFxyXG5cdFsnYW5kcm9pZC5uZmMudGVjaC5OZmNCJ10sXHJcblx0WydhbmRyb2lkLm5mYy50ZWNoLk5mY0YnXSxcclxuXHRbJ2FuZHJvaWQubmZjLnRlY2guTmZjZiddLFxyXG5cdFsnYW5kcm9pZC5uZmMudGVjaC5OZmNWJ10sXHJcblx0WydhbmRyb2lkLm5mYy50ZWNoLk5kZWZGb3JtYXRhYmxlJ10sXHJcblx0WydhbmRyb2lkLm5mYy50ZWNoLk1pZmFyZUNsYXNzaSddLFxyXG5cdFsnYW5kcm9pZC5uZmMudGVjaC5NaWZhcmVVbHRyYWxpZ2h0J11cclxuXVxyXG5sZXQgd3JpdGVDQiA9ICgpID0+IHt9XHJcbi8vIOimgeWGmeWFpeeahOaVsOaNrlxyXG5sZXQgdGV4dCA9ICdodHRwczovL20udG91dGlhby5jb20vYXJ0aWNsZS83MzM1Njg2NTcyNjIyMzQ4ODEyLz9mcm9tX3BhZ2VfdHlwZT1mZWVkJnVwc3RyZWFtX2Jpej10b3V0aWFvX20md2lkPTE3MDgwODc1MTUwMzYmVzJhdElGPTEnO1xyXG5sZXQgcmVhZFJlc3VsdCA9ICcnO1xyXG4vLyDlronljZPphY3nva7nu5PmnZ9cclxudmFyIGNpZCA9IG51bGw7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHQvLyDor7tuZmPoiq/niYdcclxuXHRhY3RpdigpIHtcclxuXHRcdC8vIC8vIOWuieWNk+aTjeS9nFxyXG5cdFx0cmVhZHlSZWFkID0gdHJ1ZTsgLy/lvIDlkK/or7tcclxuXHJcblx0XHQvLyAgLy8gdG9hc3QoJ+ivt+Wwhk5GQ+agh+etvumdoOi/ke+8gScpO1xyXG5cdH0sXHJcblx0bGlzdGVuTkZDU3RhdHVzOiBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiLS0tLS0tLS0t55uR5ZCsTkZD54q25oCBLS0tLS0tLS0tLS0tLS1cIilcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcclxuXHRcdFx0bGV0IEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5jb250ZW50LkludGVudCcpO1xyXG5cdFx0XHRsZXQgQWN0aXZpdHkgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuYXBwLkFjdGl2aXR5Jyk7XHJcblx0XHRcdGxldCBQZW5kaW5nSW50ZW50ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLmFwcC5QZW5kaW5nSW50ZW50Jyk7XHJcblx0XHRcdGxldCBJbnRlbnRGaWx0ZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuY29udGVudC5JbnRlbnRGaWx0ZXInKTtcclxuXHRcdFx0TmZjQWRhcHRlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5uZmMuTmZjQWRhcHRlcicpO1xyXG5cdFx0XHRsZXQgbmZjQWRhcHRlciA9IE5mY0FkYXB0ZXIuZ2V0RGVmYXVsdEFkYXB0ZXIobWFpbik7XHJcblxyXG5cdFx0XHRpZiAobmZjQWRhcHRlciA9PSBudWxsKSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+iuvuWkh+S4jeaUr+aMgU5GQ++8gScsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdG5vTkZDID0gdHJ1ZTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghbmZjQWRhcHRlci5pc0VuYWJsZWQoKSkge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfor7flnKjns7vnu5/orr7nva7kuK3lhYjlkK/nlKhORkPlip/og73vvIEnLFxyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0bm9ORkMgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRub05GQyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgaW50ZW50ID0gbmV3IEludGVudChtYWluLCBtYWluLmdldENsYXNzKCkpO1xyXG5cdFx0XHRpbnRlbnQuYWRkRmxhZ3MoSW50ZW50LkZMQUdfQUNUSVZJVFlfU0lOR0xFX1RPUCk7XHJcblx0XHRcdGxldCBwZW5kaW5nSW50ZW50ID0gUGVuZGluZ0ludGVudC5nZXRBY3Rpdml0eShtYWluLCAwLCBpbnRlbnQsIDApO1xyXG5cdFx0XHRsZXQgbmRlZiA9IG5ldyBJbnRlbnRGaWx0ZXIoXCJhbmRyb2lkLm5mYy5hY3Rpb24uVEVDSF9ESVNDT1ZFUkVEXCIpO1xyXG5cdFx0XHRuZGVmLmFkZERhdGFUeXBlKFwiKi8qXCIpO1xyXG5cdFx0XHRsZXQgaW50ZW50RmlsdGVyc0FycmF5ID0gW25kZWZdO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coJ2ludGVudDo6JywgcGx1cy5nbG9iYWxFdmVudClcclxuXHRcdFx0cGx1cy5nbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCduZXdpbnRlbnQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnbmV3aW50ZW50IHJ1bm5pbmcnKTtcclxuXHRcdFx0XHQvLyDova7or6LosIPnlKggTkZDXHJcblx0XHRcdFx0c2V0VGltZW91dCh0aGF0Lm5mY1J1bmluZygpLCAxMDAwKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHBsdXMuZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BhdXNlIHJ1bm5pbmcnKTtcclxuXHRcdFx0XHRpZiAobmZjQWRhcHRlcikge1xyXG5cdFx0XHRcdFx0Ly/lhbPpl63liY3lj7DosIPluqbns7vnu59cclxuXHRcdFx0XHRcdC8v5oGi5aSN6buY6K6k54q25oCBXHJcblx0XHRcdFx0XHRuZmNBZGFwdGVyLmRpc2FibGVGb3JlZ3JvdW5kRGlzcGF0Y2gobWFpbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cGx1cy5nbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCdyZXN1bWUnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VtZSBydW5uaW5nJyk7XHJcblx0XHRcdFx0aWYgKG5mY0FkYXB0ZXIpIHtcclxuXHRcdFx0XHRcdC8v5byA5ZCv5YmN5Y+w6LCD5bqm57O757ufXHJcblx0XHRcdFx0XHQvLyDkvJjkuo7miYDmnInlhbbku5ZORkNcclxuXHRcdFx0XHRcdG5mY0FkYXB0ZXIuZW5hYmxlRm9yZWdyb3VuZERpc3BhdGNoKG1haW4sIHBlbmRpbmdJbnRlbnQsIGludGVudEZpbHRlcnNBcnJheSxcclxuXHRcdFx0XHRcdFx0dGVjaExpc3RzQXJyYXkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdG5mY0FkYXB0ZXIuZW5hYmxlRm9yZWdyb3VuZERpc3BhdGNoKG1haW4sIHBlbmRpbmdJbnRlbnQsIGludGVudEZpbHRlcnNBcnJheSwgdGVjaExpc3RzQXJyYXkpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0bmZjUnVuaW5nOiBmdW5jdGlvbigpIHsgLy9cclxuXHRcdGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS1ORkMg6L+Q6KGMLS0tLS0tLS0tLS0tLS0tXCIpXHJcblx0XHROZGVmUmVjb3JkID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5uZmMuTmRlZlJlY29yZFwiKTtcclxuXHRcdE5kZWZNZXNzYWdlID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5uZmMuTmRlZk1lc3NhZ2VcIik7XHJcblx0XHRNaWZhcmVVbHRyYWxpZ2h0ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5uZmMudGVjaC5NaWZhcmVVbHRyYWxpZ2h0XCIpO1xyXG5cdFx0bGV0IG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIGludGVudCA9IG1haW4uZ2V0SW50ZW50KCk7XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJhY3Rpb24gdHlwZTpcIiArIGludGVudC5nZXRBY3Rpb24oKSk7XHJcblx0XHRjb25zb2xlLmxvZyhwYWNrYWdlX1RFQ0hfRElTQ09WRVJFRCA9PSBpbnRlbnQuZ2V0QWN0aW9uKCkpO1xyXG5cdFx0Y29uc29sZS5sb2cocmVhZHlSZWFkKVxyXG5cdFx0aWYgKHBhY2thZ2VfVEVDSF9ESVNDT1ZFUkVEID09IGludGVudC5nZXRBY3Rpb24oKSkge1xyXG5cdFx0XHRpZiAocmVhZHlXcml0ZURhdGEpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS3miJHlnKjlhpkxLS0tLS0tLS0tLS0tLVwiKVxyXG5cdFx0XHRcdHRoYXQuYW5kcm9pZF93cml0ZShpbnRlbnQpO1xyXG5cdFx0XHRcdHJlYWR5V3JpdGVEYXRhID0gZmFsc2U7XHJcblx0XHRcdFx0d3JpdGVDQigpXHJcblx0XHRcdH0gZWxzZSBpZiAocmVhZHlSZWFkKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCItLS0tLS0tLS0t5oiR5Zyo6K+7MS0tLS0tLS0tLS0tLS1cIilcclxuXHRcdFx0XHR0aGF0LmFuZHJvaWRfcmVhZChpbnRlbnQpO1xyXG5cdFx0XHRcdHJlYWR5UmVhZCA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHJlYWRPbmx5KSB7XHJcblx0XHRcdFx0dGhhdC5tYWtlUmVhZE9ubHkoaW50ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0YW5kcm9pZF93cml0ZShpbnRlbnQpIHsgLy/lhpnku6PnoIFcclxuXHRcdGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLeaIkeWcqOWGmS0tLS0tLS0tLS0tLS1cIilcclxuXHRcdC8vIGFwcC5ieXFjLmNvbVxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Ly8gdG9hc3QoJ+ivt+WLv+enu+W8gOagh+etviDmraPlnKjlhpnlhaUuLi4nKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJ0ZXh0PVwiICsgdGV4dCk7XHJcblxyXG5cdFx0XHRsZXQgcGtnID0gcGx1cy5hbmRyb2lkLmludm9rZShcIuWMheWQjVwiLCBcImdldEJ5dGVzXCIpO1xyXG5cdFx0XHRsZXQgdXJscyA9IHBsdXMuYW5kcm9pZC5pbnZva2UodGV4dCwgXCJnZXRCeXRlc1wiKTtcclxuXHRcdFx0Ly8g6L+Z5Liq5piv5YaZ5YWldXJsXHJcblx0XHRcdGxldCB0ZXh0UmVjb3JkID0gbmV3IE5kZWZSZWNvcmQoTmRlZlJlY29yZC5UTkZfQUJTT0xVVEVfVVJJLCB1cmxzLCBwbHVzLmFuZHJvaWQuaW52b2tlKCcnLCBcImdldEJ5dGVzXCIpLFxyXG5cdFx0XHRcdHVybHMpO1xyXG5cdFx0XHQvLyDov5nkuKrmmK/lhpnlhaXljIXlkI3vvIzor4bliKvoiq/niYfot7PovaxhcHBcclxuXHRcdFx0Ly8gbGV0IHRleHRSZWNvcmQgPSBuZXcgTmRlZlJlY29yZChOZGVmUmVjb3JkLlRORl9FWFRFUk5BTF9UWVBFLHBsdXMuYW5kcm9pZC5pbnZva2UoXCJhbmRyb2lkLmNvbTpwa2dcIiwgXCJnZXRCeXRlc1wiKSxwbHVzLmFuZHJvaWQuaW52b2tlKCdubm4nLCBcImdldEJ5dGVzXCIpLHBrZyk7XHJcblx0XHRcdGxldCBtZXNzYWdlID0gbmV3IE5kZWZNZXNzYWdlKFt0ZXh0UmVjb3JkXSk7XHJcblx0XHRcdGxldCBOZGVmID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLm5mYy50ZWNoLk5kZWYnKTtcclxuXHRcdFx0bGV0IE5kZWZGb3JtYXRhYmxlID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLm5mYy50ZWNoLk5kZWZGb3JtYXRhYmxlJyk7XHJcblx0XHRcdGxldCB0YWcgPSBpbnRlbnQuZ2V0UGFyY2VsYWJsZUV4dHJhKE5mY0FkYXB0ZXIuRVhUUkFfVEFHKTtcclxuXHRcdFx0bGV0IG5kZWYgPSBOZGVmLmdldCh0YWcpO1xyXG5cdFx0XHRpZiAobmRlZiAhPSBudWxsKSB7XHJcblx0XHRcdFx0Ly8g5b6F5YaZ5YWl55qE5pWw5o2u6ZW/5bqmXHJcblx0XHRcdFx0bGV0IHNpemUgPSBtZXNzYWdlLnRvQnl0ZUFycmF5KCkubGVuZ3RoO1xyXG5cdFx0XHRcdHZhciBhID0gbmRlZi5jb25uZWN0KCk7XHJcblx0XHRcdFx0aWYgKCFuZGVmLmlzV3JpdGFibGUoKSkge1xyXG5cdFx0XHRcdFx0dG9hc3QoJ3RhZ+S4jeWFgeiuuOWGmeWFpe+8gScpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAobmRlZi5nZXRNYXhTaXplKCkgPCBzaXplKSB7XHJcblx0XHRcdFx0XHR0b2FzdCgn5paH5Lu25aSn5bCP6LaF5Ye65a656YeP77yBJyk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG5kZWYud3JpdGVOZGVmTWVzc2FnZShtZXNzYWdlKTsgLy/lhpnlhaXmlbDmja5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHRvYXN0KCflhpnlhaXmlbDmja7miJDlip/vvIEnKSwgMTAwMCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxldCBmb3JtYXQgPSBOZGVmRm9ybWF0YWJsZS5nZXQodGFnKTtcclxuXHRcdFx0XHRpZiAoZm9ybWF0ICE9IG51bGwpIHtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdGZvcm1hdC5jb25uZWN0KCk7XHJcblx0XHRcdFx0XHRcdGZvcm1hdC5mb3JtYXQobWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdHRvYXN0KCfmoLzlvI/ljJZ0YWflubbkuJTlhpnlhaVtZXNzYWdlJyk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdFx0dG9hc3QoJ+agvOW8j+WMlnRhZ+Wksei0pS4nKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0b2FzdCgnVGFn5LiN5pSv5oyBTkRFRicpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHR0b2FzdCgn5YaZ5YWl5aSx6LSlJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZXJyb3I9XCIgKyBlKTtcclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHRhbmRyb2lkX3JlYWQoaW50ZW50KSB7IC8vIOivu+S7o+eggVxyXG5cdFx0Y29uc29sZS5sb2coXCItLS0tLS0tLS0t5oiR5Zyo6K+7cmVhZC0tLS0tLS0tLS0tLS1cIilcclxuXHRcdC8vIHRvYXN0KCfor7fli7/np7vlvIDmoIfnrb7mraPlnKjor7vlj5bmlbDmja4nKTtcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdC8vIE5GQyBpZFxyXG5cdFx0bGV0IGJ5dGVzSWQgPSBpbnRlbnQuZ2V0Qnl0ZUFycmF5RXh0cmEoTmZjQWRhcHRlci5FWFRSQV9JRCk7XHJcblx0XHRsZXQgbmZjX2lkID0gdGhhdC5ieXRlQXJyYXlUb0hleFN0cmluZyhieXRlc0lkKTtcclxuXHRcdGNpZCA9IG5mY19pZDtcclxuXHRcdGxldCBQYXJjZWxhYmxlID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5vcy5QYXJjZWxhYmxlXCIpO1xyXG5cdFx0bGV0IHJhd21zZ3MgPSBpbnRlbnQuZ2V0UGFyY2VsYWJsZUFycmF5RXh0cmEoXCJhbmRyb2lkLm5mYy5leHRyYS5OREVGX01FU1NBR0VTXCIpO1xyXG5cdFx0Ly9sZXQgcmF3bXNncyA9IGludGVudC5nZXRQYXJjZWxhYmxlQXJyYXlFeHRyYSgpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLmlbDmja5cIiArIHJhd21zZ3MpXHJcblx0XHRpZiAocmF3bXNncyAhPSBudWxsICYmIHJhd21zZ3MubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRsZXQgcmVjb3JkcyA9IHJhd21zZ3NbMF0uZ2V0UmVjb3JkcygpO1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gcmVjb3Jkc1swXS5nZXRQYXlsb2FkKCk7XHJcblx0XHRcdGxldCBkYXRhID0gcGx1cy5hbmRyb2lkLm5ld09iamVjdChcImphdmEubGFuZy5TdHJpbmdcIiwgcmVzdWx0KTtcclxuXHRcdFx0Ly8gdG9hc3QoJ05GQyDmlbDmja7vvJonICsgZGF0YSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdORkMg5pWw5o2u77yaJywgZGF0YSk7XHJcblx0XHRcdHJlYWRSZXN1bHQgPSBkYXRhO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9hc3QoJ+ayoeacieivu+WPluWIsOaVsOaNricpO1xyXG5cdFx0fVxyXG5cdFx0Ly8g5Yik5pat6L+Z5LiqY2lk5piv5ZCm57uR5a6a5LqG55So5oi3XHJcblx0XHQvLyDmiafooYxmaW5kKCnmn6Xor6JcclxuXHR9LFxyXG5cdGJ5dGVBcnJheVRvSGV4U3RyaW5nOiBmdW5jdGlvbihpbmFycmF5KSB7IC8vIOWwhuWtl+iKguaVsOe7hOi9rOaNouS4uuWtl+espuS4siAgXHJcblx0XHRsZXQgaSwgaiwgaW5uO1xyXG5cdFx0bGV0IGhleCA9IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIl07XHJcblx0XHRsZXQgb3V0ID0gXCJcIjtcclxuXHJcblx0XHRmb3IgKGogPSAwOyBqIDwgaW5hcnJheS5sZW5ndGg7ICsraikge1xyXG5cdFx0XHRpbm4gPSBpbmFycmF5W2pdICYgMHhmZjtcclxuXHRcdFx0aSA9IChpbm4gPj4+IDQpICYgMHgwZjtcclxuXHRcdFx0b3V0ICs9IGhleFtpXTtcclxuXHRcdFx0aSA9IGlubiAmIDB4MGY7XHJcblx0XHRcdG91dCArPSBoZXhbaV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0O1xyXG5cdH0sXHJcblx0d3JpdGVEYXRhOiBmdW5jdGlvbihkYXRhLCBjYikgeyAvLyDmm7TmlLnlhpnnirbmgIFcclxuXHRcdGlmIChub05GQykge1xyXG5cdFx0XHR0b2FzdCgn6K+35qOA5p+l6K6+5aSH5piv5ZCm5pSv5oyB5bm25byA5ZCvIE5GQyDlip/og73vvIEnKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEpIHRleHQgPSBkYXRhXHJcblx0XHRpZiAoY2IpIHdyaXRlQ0IgPSBjYlxyXG5cdFx0Ly8g6L2u6K+i5p2h5Lu2XHJcblx0XHRyZWFkeVdyaXRlRGF0YSA9IHRydWU7XHJcblx0XHR0b2FzdCgn6K+35bCGTkZD5qCH562+6Z2g6L+R77yBJyk7XHJcblx0fSxcclxuXHRyZWFkRGF0YTogZnVuY3Rpb24oKSB7IC8vIOabtOaUueivu+eKtuaAgVxyXG5cdFx0aWYgKG5vTkZDKSB7XHJcblx0XHRcdHRvYXN0KCfor7fmo4Dmn6Xorr7lpIfmmK/lkKbmlK/mjIHlubblvIDlkK8gTkZDIOWKn+iDve+8gScpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHQvLyDova7or6LmnaHku7ZcclxuXHRcdHJlYWR5UmVhZCA9IHRydWU7XHJcblx0XHR0b2FzdCgn6K+35bCGTkZD5qCH562+6Z2g6L+R77yBJyk7XHJcblx0fSxcclxuXHQvLyBjbG9zZTogZnVuY3Rpb24oKXtcclxuXHJcblx0Ly8gfSxcclxuXHRyZWFkb25seSgpIHtcclxuXHRcdGlmIChub05GQykge1xyXG5cdFx0XHR0b2FzdCgn6K+35qOA5p+l6K6+5aSH5piv5ZCm5pSv5oyB5bm25byA5ZCvIE5GQyDlip/og73vvIEnKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Ly8g6L2u6K+i5p2h5Lu2XHJcblx0XHRyZWFkT25seSA9IHRydWU7XHJcblx0XHR0b2FzdCgn6K+35bCGTkZD5qCH562+6Z2g6L+R77yBJyk7XHJcblx0fSxcclxuXHRzZXRUeHQ6IGZ1bmN0aW9uKHR4dCkge1xyXG5cdFx0aWYgKG5vTkZDKSB7XHJcblx0XHRcdHRvYXN0KCfor7fmo4Dmn6Xorr7lpIfmmK/lkKbmlK/mjIHlubblvIDlkK8gTkZDIOWKn+iDve+8gScpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0ZXh0ID0gdHh0O1xyXG5cdH0sXHJcblx0Ly8g6K6+5Li65Y+q6K+777yM6K+l5pON5L2c5piv5Y2V5ZCR5pON5L2c77yM5LiN5Y+v6YCG77yM6K+36LCo5oWO5pON5L2cXHJcblx0bWFrZVJlYWRPbmx5KGludGVudCkge1xyXG5cdFx0bGV0IHRhZyA9IGludGVudC5nZXRQYXJjZWxhYmxlRXh0cmEoTmZjQWRhcHRlci5FWFRSQV9UQUcpO1xyXG5cdFx0bGV0IE5kZWYgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQubmZjLnRlY2guTmRlZicpO1xyXG5cdFx0Y29uc3QgbmRlZiA9IE5kZWYuZ2V0KHRhZyk7XHJcblx0XHQvLyDlhYjliKTmlq3mmK/lkKblj6/orr7nva5cclxuXHRcdGlmIChuZGVmLmNhbk1ha2VSZWFkT25seSgpKSB7XHJcblx0XHRcdGNvbnN0IHJldXNsdCA9IG5kZWYubWFrZVJlYWRPbmx5KClcclxuXHRcdFx0aWYgKHJlc3VsdCkgdG9hc3QoJ+iuvue9ruWPquivu+aIkOWKn++8jOWPquivu+aooeW8j+S4jeWPr+WGjeWGmeWFpeS7u+S9leS/oeaBrycpXHJcblx0XHRcdGVsc2UgdG9hc3QoJ+iuvue9ruWksei0pScpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0b2FzdCgn5q2k5Y2h5LiN5pSv5oyB6K+l5pON5L2cJylcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvYXN0KGNvbnRlbnQpIHtcclxuXHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdHRpdGxlOiBjb250ZW50LFxyXG5cdFx0aWNvbjogJ25vbmUnXHJcblx0fSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///72\n");

/***/ }),
/* 73 */
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 47)))

/***/ }),
/* 74 */
/*!*****************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/App.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 75);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNk07QUFDN00sZ0JBQWdCLHFOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6Ijc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///74\n");

/***/ }),
/* 75 */
/*!******************************************************************!*\
  !*** E:/code/uniapp/uniapp-nfc/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 76);\n/* harmony import */ var _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_tools_HBuilderX_4_01_2024020211_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThyQixDQUFnQix5dEJBQUcsRUFBQyIsImZpbGUiOiI3NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx0b29sc1xcXFxIQnVpbGRlclguNC4wMS4yMDI0MDIwMjExLWFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC40LjAxLjIwMjQwMjAyMTEtYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjQuMDEuMjAyNDAyMDIxMS1hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///75\n");

/***/ }),
/* 76 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/uniapp/uniapp-nfc/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6Ijc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///76\n");

/***/ })
],[[0,"app-config"]]]);