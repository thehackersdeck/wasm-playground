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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/controllers/compile.js":
/*!***************************************!*\
  !*** ./server/controllers/compile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_queues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/queues */ \"./server/utils/queues.js\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_4__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar CompileController =\n/*#__PURE__*/\nfunction () {\n  function CompileController() {\n    _classCallCheck(this, CompileController);\n  }\n\n  _createClass(CompileController, null, [{\n    key: \"compileFile\",\n\n    /**\n     * Compile source to wasm.\n     * \n     * @param {Object} req\n     * @param {Object} res\n     * @return {json}\n     */\n    value: function compileFile(req, res) {\n      //Run job\n      var inputFile = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../server/uploads/') + req.file.filename;\n      var outputPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../client/compiled/');\n      var outputFileName = req.file.filename.split('.')[0];\n      var options = \" -o \".concat(outputPath).concat(outputFileName, \".js\");\n      var cmd = os__WEBPACK_IMPORTED_MODULE_1___default.a.homedir() + process.env.EMSCRIPTEN_BINARY + \" \".concat(inputFile) + options;\n      var child = Object(child_process__WEBPACK_IMPORTED_MODULE_4__[\"exec\"])(cmd, function (error, stdout, stderr) {\n        if (error) {\n          return res.status(500).send({\n            data: null,\n            message: 'Compile Error',\n            error: stderr\n          });\n        }\n\n        if (fs__WEBPACK_IMPORTED_MODULE_3___default.a.existsSync(outputPath + outputFileName + '.js')) {\n          fs__WEBPACK_IMPORTED_MODULE_3___default.a.unlinkSync(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../server/uploads/' + req.file.filename));\n        } //Send response\n\n\n        res.status(200).send({\n          data: {\n            file: {\n              filename: outputFileName,\n              originalname: req.file.originalname.split('.')[0],\n              size: req.file.size\n            }\n          },\n          message: 'Compiled successfully!'\n        });\n      });\n    }\n  }]);\n\n  return CompileController;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompileController);\n\n//# sourceURL=webpack:///./server/controllers/compile.js?");

/***/ }),

/***/ "./server/controllers/download.js":
/*!****************************************!*\
  !*** ./server/controllers/download.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar DownloadController =\n/*#__PURE__*/\nfunction () {\n  function DownloadController() {\n    _classCallCheck(this, DownloadController);\n  }\n\n  _createClass(DownloadController, null, [{\n    key: \"downloadFile\",\n\n    /**\n     * Download compiled codes.\n     * \n     * @param {Object} req\n     * @param {Object} res\n     * @return {Blob}\n     */\n    value: function downloadFile(req, res) {\n      var jsFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, \"../client/compiled/\".concat(req.body.filename, \".js\"));\n      var wasmFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, \"../client/compiled/\".concat(req.body.filename, \".wasm\"));\n\n      if (!fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(jsFile) && !fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(wasmFile)) {\n        //Show error\n        return res.redirect('/');\n      }\n\n      res.zip([{\n        path: jsFile,\n        name: req.body.originalname + '.js'\n      }, {\n        path: wasmFile,\n        name: req.body.originalname + '.wasm'\n      }], req.body.originalname + '.zip');\n    }\n  }]);\n\n  return DownloadController;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DownloadController);\n\n//# sourceURL=webpack:///./server/controllers/download.js?");

/***/ }),

/***/ "./server/middleware/validation.js":
/*!*****************************************!*\
  !*** ./server/middleware/validation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Validation =\n/*#__PURE__*/\nfunction () {\n  function Validation() {\n    _classCallCheck(this, Validation);\n  }\n\n  _createClass(Validation, null, [{\n    key: \"isSupportedFile\",\n\n    /**\n     * Check if file has a supported extension.\n     * \n     * @param {Object} req\n     * @param {Object} res\n     * @return {Function} cb\n     */\n    value: function isSupportedFile(req, file, cb) {\n      if (!file.originalname.match(/\\.(c)$/)) {\n        return cb(new Error('Only C scripts are supported'), false);\n      }\n\n      cb(null, true);\n    }\n  }]);\n\n  return Validation;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Validation);\n\n//# sourceURL=webpack:///./server/middleware/validation.js?");

/***/ }),

/***/ "./server/routes/router.js":
/*!*********************************!*\
  !*** ./server/routes/router.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middleware_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middleware/validation */ \"./server/middleware/validation.js\");\n/* harmony import */ var _controllers_compile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/compile */ \"./server/controllers/compile.js\");\n/* harmony import */ var _controllers_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/download */ \"./server/controllers/download.js\");\n\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router(); // Set up multer storage for file download\n\nvar storage = multer__WEBPACK_IMPORTED_MODULE_2___default.a.diskStorage({\n  destination: 'server/uploads',\n  filename: function filename(req, file, cb) {\n    crypto__WEBPACK_IMPORTED_MODULE_3___default.a.pseudoRandomBytes(16, function (err, raw) {\n      if (err) return cb(err);\n      cb(null, raw.toString('hex') + path__WEBPACK_IMPORTED_MODULE_0___default.a.extname(file.originalname));\n    });\n  }\n});\nvar upload = multer__WEBPACK_IMPORTED_MODULE_2___default()({\n  storage: storage,\n  fileFilter: _middleware_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isSupportedFile\n}); // VueJS Route\n\nrouter.route('/').get(function (req, res) {\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../../client/public/index.html'));\n});\nrouter.route('/compile').post(upload.single('script'), _controllers_compile__WEBPACK_IMPORTED_MODULE_5__[\"default\"].compileFile);\nrouter.route('/download').post(_controllers_download__WEBPACK_IMPORTED_MODULE_6__[\"default\"].downloadFile);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/router.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/router */ \"./server/routes/router.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _webpack_dev__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../webpack.dev */ \"./webpack.dev.js\");\n/* harmony import */ var _webpack_dev__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var express_zip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! express-zip */ \"express-zip\");\n/* harmony import */ var express_zip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(express_zip__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n // Create express app\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(); // Set up webpack\n\nvar compiler = webpack__WEBPACK_IMPORTED_MODULE_6___default()(_webpack_dev__WEBPACK_IMPORTED_MODULE_9___default.a); // Configure dotenv\n\ndotenv__WEBPACK_IMPORTED_MODULE_5___default.a.config(); // Enable cors\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()('*')); // DEVONLY: Set up dev-middleware\n\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_7___default()(compiler, {\n  publicPath: _webpack_dev__WEBPACK_IMPORTED_MODULE_9___default.a.output.publicPath\n})); // DEVONLY: Set up HMR\n\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_8___default()(compiler));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: false\n})); // Public directory for static files\n\napp.use('/', express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../client'))); // Router\n\napp.use('/', _routes_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar PORT = process.env.PORT || 3000;\napp.listen(PORT, function () {\n  console.log(\"Listening on port : \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./server/utils/queues.js":
/*!********************************!*\
  !*** ./server/utils/queues.js ***!
  \********************************/
/*! exports provided: queues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queues\", function() { return queues; });\n/* harmony import */ var bull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bull */ \"bull\");\n/* harmony import */ var bull__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bull__WEBPACK_IMPORTED_MODULE_0__);\n\nvar queues = {\n  compiler: new bull__WEBPACK_IMPORTED_MODULE_0___default.a('compiler', process.env.REDIS_URL)\n};\n\n//# sourceURL=webpack:///./server/utils/queues.js?");

/***/ }),

/***/ "./webpack.common.js":
/*!***************************!*\
  !*** ./webpack.common.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HTMLWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar CleanWebpackPlugin = __webpack_require__(/*! clean-webpack-plugin */ \"clean-webpack-plugin\");\n\nvar VueLoaderPlugin = __webpack_require__(/*! vue-loader/lib/plugin */ \"vue-loader/lib/plugin\");\n\nmodule.exports = {\n  entry: {\n    app: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './client/src/index.js']\n  },\n  output: {\n    filename: '[name].js',\n    path: path.join(__dirname, 'client/public'),\n    publicPath: '/'\n  },\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      use: {\n        loader: 'babel-loader'\n      }\n    }, {\n      test: /\\.vue$/,\n      exclude: /node_modules/,\n      loader: 'vue-loader'\n    }, {\n      test: /\\.html/,\n      use: [{\n        loader: 'html-loader',\n        options: {}\n      }]\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.sass$/,\n      use: ['style-loader', 'css-loader', 'sass-loader']\n    }, {\n      test: /\\.(png|svg|gif|jpg)$/,\n      use: ['file-loader']\n    }]\n  },\n  resolve: {\n    alias: {\n      vue: 'vue/dist/vue.js'\n    }\n  },\n  plugins: [new CleanWebpackPlugin(['client/public']), new HTMLWebpackPlugin({\n    template: './client/src/templates/index.html',\n    excludeChunks: ['server']\n  }), new VueLoaderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\n//# sourceURL=webpack:///./webpack.common.js?");

/***/ }),

/***/ "./webpack.dev.js":
/*!************************!*\
  !*** ./webpack.dev.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var merge = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\n\nvar common = __webpack_require__(/*! ./webpack.common */ \"./webpack.common.js\");\n\nmodule.exports = merge(common, {\n  mode: 'development',\n  devtool: 'inline-source-map'\n});\n\n//# sourceURL=webpack:///./webpack.dev.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "bull":
/*!***********************!*\
  !*** external "bull" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bull\");\n\n//# sourceURL=webpack:///external_%22bull%22?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "clean-webpack-plugin":
/*!***************************************!*\
  !*** external "clean-webpack-plugin" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"clean-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22clean-webpack-plugin%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-zip":
/*!******************************!*\
  !*** external "express-zip" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-zip\");\n\n//# sourceURL=webpack:///external_%22express-zip%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "vue-loader/lib/plugin":
/*!****************************************!*\
  !*** external "vue-loader/lib/plugin" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vue-loader/lib/plugin\");\n\n//# sourceURL=webpack:///external_%22vue-loader/lib/plugin%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-merge\");\n\n//# sourceURL=webpack:///external_%22webpack-merge%22?");

/***/ })

/******/ });