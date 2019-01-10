module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../ssr3000/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../lib/api/controllers/Error.js":
/*!***************************************!*\
  !*** ../lib/api/controllers/Error.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.handleError = function (res, error) {
  console.error('error', error);
  return res.status(500).send(error);
};

/***/ }),

/***/ "../lib/api/controllers/Pages.js":
/*!***************************************!*\
  !*** ../lib/api/controllers/Pages.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _deepDiff = __webpack_require__(/*! deep-diff */ "../node_modules/deep-diff/index.es.js");

var _deepDiff2 = _interopRequireDefault(_deepDiff);

var _Error = __webpack_require__(/*! ./Error */ "../lib/api/controllers/Error.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = __webpack_require__(/*! ../models/Page */ "../lib/api/models/Page.js");
var Value = __webpack_require__(/*! ../models/Value */ "../lib/api/models/Value.js");
var normalizeFields = function normalizeFields(original, target) {
  return (0, _keys2.default)(original).reduce(function (acc, key) {
    var value = target[key];
    acc[key] = value;
    return acc;
  }, {});
};

var normalizeDocument = function normalizeDocument(original, target) {
  return (0, _keys2.default)(original).reduce(function (acc, key) {
    var originalValue = original[key];
    var value = target[key];
    if (originalValue instanceof Array) {
      value = target[key].map(function (val) {
        return normalizeFields(originalValue[0], val);
      }).reverse();
    } else if (originalValue instanceof Object) {
      value = normalizeFields(originalValue, value);
    }
    acc[key] = value;
    return acc;
  }, {});
};

exports.create = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var _req$body, values, rest, page, tValues, savedPage;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, values = _req$body.values, rest = (0, _objectWithoutProperties3.default)(_req$body, ['values']);

            console.log('??', req.body);
            page = new Page(rest);
            tValues = values.map(function (v) {
              return new Value(v);
            });

            page.values = tValues;
            _context.next = 8;
            return page.saveAll({ values: true });

          case 8:
            savedPage = _context.sent;
            return _context.abrupt('return', res.status(200).json({
              savedPage: savedPage
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.get = function (req, res) {
  var id = req.params.id;
  Page.get(id).getJoin({ values: true }).run().then(function (value) {
    res.json({
      value: value
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.patch = function (req, res) {
  var _req$body2 = req.body,
      values = _req$body2.values,
      rest = (0, _objectWithoutProperties3.default)(_req$body2, ['values']);

  Page.get(rest.id).getJoin({ values: true }).run().then(function (existingPage) {
    var actions = values.reduce(function (acc, value) {
      var exists = existingPage.values.findIndex(function (v) {
        return v.key === value.key;
      });
      if (exists > -1) {
        console.log(exists);
        acc.update.push(existingPage.values[exists].merge(value));
      } else {
        console.log(value.key);
        acc.create.push(new Value(value));
      }
      return acc;
    }, { update: [], create: [] });
    existingPage.values = [].concat(actions.update, actions.create);
    existingPage.saveAll({ values: true }).then(function (result) {
      res.json(result);
    }).catch(function (err) {
      return (0, _Error.handleError)(err, err);
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.getBy = function (req, res) {
  var _Page$filter;

  var by = req.params.by;
  var value = req.params.value;
  Page.filter((_Page$filter = {}, _Page$filter[by] = value, _Page$filter)).getJoin({ values: true }).run().then(function (page) {
    res.json({
      page: page
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.getAll = function (req, res) {
  Page.getJoin({
    values: true
  }).run().then(function (pages) {
    res.json({
      pages: pages
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.deleteAll = function (req, res) {
  Page.getJoin({ values: true }).run().then(function (pages) {
    var all = pages.map(function (page) {
      return page.deleteAll({ values: true });
    });
    _promise2.default.all(all).then(function () {
      res.json({
        msg: 'all pages deleted'
      });
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.purgeAll = function (req, res) {
  Page.run().then(function (pages) {
    var all = pages.map(function (page) {
      return page.purge();
    });
    _promise2.default.all(all).then(function () {
      res.json({
        msg: 'all pages purged'
      });
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

/***/ }),

/***/ "../lib/api/controllers/Templates.js":
/*!*******************************************!*\
  !*** ../lib/api/controllers/Templates.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _deepDiff = __webpack_require__(/*! deep-diff */ "../node_modules/deep-diff/index.es.js");

var _deepDiff2 = _interopRequireDefault(_deepDiff);

var _Error = __webpack_require__(/*! ./Error */ "../lib/api/controllers/Error.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Template = __webpack_require__(/*! ../models/Template */ "../lib/api/models/Template.js");
var Value = __webpack_require__(/*! ../models/Value */ "../lib/api/models/Value.js");
var normalizeFields = function normalizeFields(original, target) {
  return (0, _keys2.default)(original).reduce(function (acc, key) {
    var value = target[key];
    acc[key] = value;
    return acc;
  }, {});
};

var normalizeDocument = function normalizeDocument(original, target) {
  return (0, _keys2.default)(original).reduce(function (acc, key) {
    var originalValue = original[key];
    var value = target[key];
    if (originalValue instanceof Array) {
      value = target[key].map(function (val) {
        return normalizeFields(originalValue[0], val);
      }).reverse();
    } else if (originalValue instanceof Object) {
      value = normalizeFields(originalValue, value);
    }
    acc[key] = value;
    return acc;
  }, {});
};

exports.create = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var _req$body, values, rest, exists, _template, normalizedTemplate, changes, template, tValues, savedTemplate;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, values = _req$body.values, rest = (0, _objectWithoutProperties3.default)(_req$body, ['values']);
            _context.prev = 1;
            _context.next = 4;
            return Template.filter({ name: rest.name }).run();

          case 4:
            exists = _context.sent;

            if (!exists.length) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return Template.filter({ name: rest.name }).getJoin({ values: true });

          case 8:
            _template = _context.sent;
            normalizedTemplate = normalizeDocument(req.body, _template[0]);
            changes = (0, _deepDiff2.default)(normalizedTemplate, req.body) || false;
            return _context.abrupt('return', res.status(200).json({
              template: _template[0],
              hasChanges: !!changes.length,
              changes: changes || null
            }));

          case 12:
            template = new Template(rest);
            tValues = values.map(function (v) {
              return new Value(v);
            });

            template.values = tValues;
            _context.next = 17;
            return template.saveAll({ values: true });

          case 17:
            savedTemplate = _context.sent;
            return _context.abrupt('return', res.status(200).json({
              savedTemplate: savedTemplate
            }));

          case 21:
            _context.prev = 21;
            _context.t0 = _context['catch'](1);

            console.log(_context.t0);

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 21]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.get = function (req, res) {
  var id = req.params.id;
  Template.get(id).getJoin({ values: true }).run().then(function (value) {
    res.json({
      value: value
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.patch = function (req, res) {
  var _req$body2 = req.body,
      values = _req$body2.values,
      rest = (0, _objectWithoutProperties3.default)(_req$body2, ['values']);

  Template.get(rest.id).getJoin({ values: true }).run().then(function (existingTemplate) {
    var actions = values.reduce(function (acc, value) {
      var exists = existingTemplate.values.findIndex(function (v) {
        return v.key === value.key;
      });
      if (exists > -1) {
        console.log(exists);
        acc.update.push(existingTemplate.values[exists].merge(value));
      } else {
        console.log(value.key);
        acc.create.push(new Value(value));
      }
      return acc;
    }, { update: [], create: [] });
    existingTemplate.values = [].concat(actions.update, actions.create);
    existingTemplate.saveAll({ values: true }).then(function (result) {
      res.json(result);
    }).catch(function (err) {
      return (0, _Error.handleError)(err, err);
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.getBy = function (req, res) {
  var _Template$filter;

  var by = req.params.by;
  var value = req.params.value;
  Template.filter((_Template$filter = {}, _Template$filter[by] = value, _Template$filter)).getJoin({ values: true }).run().then(function (page) {
    res.json({
      page: page
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.getAll = function (req, res) {
  Template.getJoin({
    values: true
  }).run().then(function (templates) {
    res.json({
      templates: templates
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.deleteAll = function (req, res) {
  Template.getJoin({ values: true }).run().then(function (templates) {
    var all = templates.map(function (template) {
      return template.deleteAll({ values: true });
    });
    _promise2.default.all(all).then(function () {
      res.json({
        msg: 'all templates deleted'
      });
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.purgeAll = function (req, res) {
  Template.run().then(function (templates) {
    var all = templates.map(function (template) {
      return template.purge();
    });
    _promise2.default.all(all).then(function () {
      res.json({
        msg: 'all templates purged'
      });
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

/***/ }),

/***/ "../lib/api/controllers/Values.js":
/*!****************************************!*\
  !*** ../lib/api/controllers/Values.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _Error = __webpack_require__(/*! ./Error */ "../lib/api/controllers/Error.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(/*! ../models/Value */ "../lib/api/models/Value.js");

exports.get = function (req, res) {
  var id = req.params.id;
  Value.get(id).getJoin({ template: true }).run().then(function (value) {
    res.json({
      value: value
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.getAll = function (req, res) {
  Value.getJoin({ template: true }).run().then(function (values) {
    res.json({
      values: values
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.deleteAll = function (req, res) {
  Value.run().then(function (values) {
    var all = values.map(function (value) {
      return value.delete();
    });
    _promise2.default.all(all).then(function () {
      res.json({
        msg: 'all values purged'
      });
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

exports.purgeAll = function (req, res) {
  Value.run().then(function (values) {
    var all = values.map(function (value) {
      return value.purge();
    });
    _promise2.default.all(all).then(function () {
      res.json({
        msg: 'all values purged'
      });
    });
  }).catch(function (err) {
    return (0, _Error.handleError)(res, err);
  });
};

/***/ }),

/***/ "../lib/api/db.js":
/*!************************!*\
  !*** ../lib/api/db.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! dotenv */ "../node_modules/dotenv/lib/main.js").config();

var thinky = __webpack_require__(/*! thinky */ "../node_modules/thinky/lib/thinky.js")({
  host: process.env.HOST,
  port: process.env.PORT,
  db: process.env.DB
});

module.exports = thinky;

/***/ }),

/***/ "../lib/api/models/Page.js":
/*!*********************************!*\
  !*** ../lib/api/models/Page.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _db = __webpack_require__(/*! ../db */ "../lib/api/db.js");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = _db2.default.createModel('Page', {
  id: _db2.default.type.string(),
  // title: thinky.type.string(),
  type: _db2.default.type.string(),
  title: _db2.default.type.virtual().default(function () {
    return this.values && this.values.find(function (v) {
      return v.key === 'title';
    }) ? this.values.find(function (v) {
      return v.key === 'title';
    }).value : 'No title found';
  })
}); // import cypher from 'cypher-query';


module.exports = Page;

// const Value = require('./Value');
// Page.hasMany(Value, 'values', 'id', 'pageId');

/***/ }),

/***/ "../lib/api/models/Template.js":
/*!*************************************!*\
  !*** ../lib/api/models/Template.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _db = __webpack_require__(/*! ../db */ "../lib/api/db.js");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Template = null; // import cypher from 'cypher-query';


if (!Template) {
  console.log('CREATING TEMPLATE', Template);
  Template = _db2.default.createModel('Template', {
    id: _db2.default.type.string(),
    name: _db2.default.type.string(),
    title: _db2.default.type.virtual().default(function () {
      return this.values ? this.values.find(function (v) {
        return v.key === 'title';
      }).value : 'No title found';
    })
  });
}

module.exports = Template;

var Value = __webpack_require__(/*! ./Value */ "../lib/api/models/Value.js");
Template.hasMany(Value, 'values', 'id', 'templateId');

/***/ }),

/***/ "../lib/api/models/Value.js":
/*!**********************************!*\
  !*** ../lib/api/models/Value.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _db = __webpack_require__(/*! ../db */ "../lib/api/db.js");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = null; // import cypher from 'cypher-query';

if (!Value) {
  console.log('CREATING Value', Value);
  Value = _db2.default.createModel('Value', {
    id: _db2.default.type.string(),
    templateId: _db2.default.type.string(),
    key: _db2.default.type.string(),
    value: _db2.default.type.string()
  });
}

module.exports = Value;

var Template = __webpack_require__(/*! ./Template */ "../lib/api/models/Template.js");
Value.belongsTo(Template, 'temlate', 'templateId', 'id');

/***/ }),

/***/ "../lib/index.js":
/*!***********************!*\
  !*** ../lib/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = __webpack_require__(/*! cors */ "../node_modules/cors/lib/index.js");

var _cors2 = _interopRequireDefault(_cors);

var _Values = __webpack_require__(/*! ./api/controllers/Values */ "../lib/api/controllers/Values.js");

var _Values2 = _interopRequireDefault(_Values);

var _Pages = __webpack_require__(/*! ./api/controllers/Pages */ "../lib/api/controllers/Pages.js");

var _Pages2 = _interopRequireDefault(_Pages);

var _Templates = __webpack_require__(/*! ./api/controllers/Templates */ "../lib/api/controllers/Templates.js");

var _Templates2 = _interopRequireDefault(_Templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();
// import testPage from './sample-data/draft-js-sample';


router.use((0, _cors2.default)());
// parse application/x-www-form-urlencoded
router.use(_bodyParser2.default.urlencoded({ extended: false }));
// parse application/json
router.use(_bodyParser2.default.json());

/*
 * BLOCKS
 */

router.route('/api/values').get(_Values2.default.getAll);
router.route('/api/values/:id').delete(_Values2.default.get);
router.route('/api/values').delete(_Values2.default.deleteAll);
router.route('/api/values/purge').delete(_Values2.default.purgeAll);

/*
 * Templates
 */

router.route('/api/templates').get(_Templates2.default.getAll);
router.route('/api/templates/:id').delete(_Templates2.default.get);
router.route('/api/templates/:by/:value').get(_Templates2.default.getBy);
router.route('/api/templates').post(_Templates2.default.create);
router.route('/api/templates').patch(_Templates2.default.patch);
router.route('/api/templates').delete(_Templates2.default.deleteAll);
router.route('/api/templates/purge').delete(_Templates2.default.purgeAll);

router.route('/api/pages').get(_Pages2.default.getAll);
router.route('/api/pages/:id').delete(_Pages2.default.get);
router.route('/api/pages/:by/:value').get(_Pages2.default.getBy);
router.route('/api/pages').post(_Pages2.default.create);
router.route('/api/pages').patch(_Pages2.default.patch);
router.route('/api/pages').delete(_Pages2.default.deleteAll);
router.route('/api/pages/purge').delete(_Pages2.default.purgeAll);

// router.route('*').get(routes.index);

// Start server
// app.listen('3000', () => {
//     // console.log('Express server listening on port %d in %s mode',
//     //     config.expressPort, app.settings.env);
// });

// const exitHandler = () => {
//   console.log('closing driver on programm exit');
//   process.exit(0);
// };

// process.on('SIGINT', () => { process.exit(0); });
// process.on('exit', exitHandler);

// process.once('SIGUSR2', () => {
//   console.log('[nodemon] cleanup');
// });
// 

exports.default = function () {
  return router;
};

/***/ }),

/***/ "../node_modules/cors/lib/index.js":
/*!*****************************************!*\
  !*** ../node_modules/cors/lib/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  'use strict';

  var assign = __webpack_require__(/*! object-assign */ "object-assign");
  var vary = __webpack_require__(/*! vary */ "vary");

  var defaults = {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204
    };

  function isString(s) {
    return typeof s === 'string' || s instanceof String;
  }

  function isOriginAllowed(origin, allowedOrigin) {
    if (Array.isArray(allowedOrigin)) {
      for (var i = 0; i < allowedOrigin.length; ++i) {
        if (isOriginAllowed(origin, allowedOrigin[i])) {
          return true;
        }
      }
      return false;
    } else if (isString(allowedOrigin)) {
      return origin === allowedOrigin;
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin);
    } else {
      return !!allowedOrigin;
    }
  }

  function configureOrigin(options, req) {
    var requestOrigin = req.headers.origin,
      headers = [],
      isAllowed;

    if (!options.origin || options.origin === '*') {
      // allow any origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: '*'
      }]);
    } else if (isString(options.origin)) {
      // fixed origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: options.origin
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    } else {
      isAllowed = isOriginAllowed(requestOrigin, options.origin);
      // reflect origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: isAllowed ? requestOrigin : false
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    }

    return headers;
  }

  function configureMethods(options) {
    var methods = options.methods;
    if (methods.join) {
      methods = options.methods.join(','); // .methods is an array, so turn it into a string
    }
    return {
      key: 'Access-Control-Allow-Methods',
      value: methods
    };
  }

  function configureCredentials(options) {
    if (options.credentials === true) {
      return {
        key: 'Access-Control-Allow-Credentials',
        value: 'true'
      };
    }
    return null;
  }

  function configureAllowedHeaders(options, req) {
    var allowedHeaders = options.allowedHeaders || options.headers;
    var headers = [];

    if (!allowedHeaders) {
      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers
      headers.push([{
        key: 'Vary',
        value: 'Access-Control-Request-Headers'
      }]);
    } else if (allowedHeaders.join) {
      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string
    }
    if (allowedHeaders && allowedHeaders.length) {
      headers.push([{
        key: 'Access-Control-Allow-Headers',
        value: allowedHeaders
      }]);
    }

    return headers;
  }

  function configureExposedHeaders(options) {
    var headers = options.exposedHeaders;
    if (!headers) {
      return null;
    } else if (headers.join) {
      headers = headers.join(','); // .headers is an array, so turn it into a string
    }
    if (headers && headers.length) {
      return {
        key: 'Access-Control-Expose-Headers',
        value: headers
      };
    }
    return null;
  }

  function configureMaxAge(options) {
    var maxAge = options.maxAge && options.maxAge.toString();
    if (maxAge && maxAge.length) {
      return {
        key: 'Access-Control-Max-Age',
        value: maxAge
      };
    }
    return null;
  }

  function applyHeaders(headers, res) {
    for (var i = 0, n = headers.length; i < n; i++) {
      var header = headers[i];
      if (header) {
        if (Array.isArray(header)) {
          applyHeaders(header, res);
        } else if (header.key === 'Vary' && header.value) {
          vary(res, header.value);
        } else if (header.value) {
          res.setHeader(header.key, header.value);
        }
      }
    }
  }

  function cors(options, req, res, next) {
    var headers = [],
      method = req.method && req.method.toUpperCase && req.method.toUpperCase();

    if (method === 'OPTIONS') {
      // preflight
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureMethods(options, req));
      headers.push(configureAllowedHeaders(options, req));
      headers.push(configureMaxAge(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);

      if (options.preflightContinue ) {
        next();
      } else {
        // Safari (and potentially other browsers) need content-length 0,
        //   for 204 or they just hang waiting for a body
        res.statusCode = options.optionsSuccessStatus || defaults.optionsSuccessStatus;
        res.setHeader('Content-Length', '0');
        res.end();
      }
    } else {
      // actual response
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);
      next();
    }
  }

  function middlewareWrapper(o) {
    // if options are static (either via defaults or custom options passed in), wrap in a function
    var optionsCallback = null;
    if (typeof o === 'function') {
      optionsCallback = o;
    } else {
      optionsCallback = function (req, cb) {
        cb(null, o);
      };
    }

    return function corsMiddleware(req, res, next) {
      optionsCallback(req, function (err, options) {
        if (err) {
          next(err);
        } else {
          var corsOptions = assign({}, defaults, options);
          var originCallback = null;
          if (corsOptions.origin && typeof corsOptions.origin === 'function') {
            originCallback = corsOptions.origin;
          } else if (corsOptions.origin) {
            originCallback = function (origin, cb) {
              cb(null, corsOptions.origin);
            };
          }

          if (originCallback) {
            originCallback(req.headers.origin, function (err2, origin) {
              if (err2 || !origin) {
                next(err2);
              } else {
                corsOptions.origin = origin;
                cors(corsOptions, req, res, next);
              }
            });
          } else {
            next();
          }
        }
      });
    };
  }

  // can pass either an options hash, an options delegate, or nothing
  module.exports = middlewareWrapper;

}());


/***/ }),

/***/ "../node_modules/deep-diff/index.es.js":
/*!*********************************************!*\
  !*** ../node_modules/deep-diff/index.es.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

var $scope, conflict, conflictResolution = [];
if (typeof global === 'object' && global) {
  $scope = global;
} else if (typeof window !== 'undefined') {
  $scope = window;
} else {
  $scope = {};
}
conflict = $scope.DeepDiff;
if (conflict) {
  conflictResolution.push(
    function() {
      if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
        $scope.DeepDiff = conflict;
        conflict = undefined;
      }
    });
}

// nodejs compatible on server side and in the browser.
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}

function Diff(kind, path) {
  Object.defineProperty(this, 'kind', {
    value: kind,
    enumerable: true
  });
  if (path && path.length) {
    Object.defineProperty(this, 'path', {
      value: path,
      enumerable: true
    });
  }
}

function DiffEdit(path, origin, value) {
  DiffEdit.super_.call(this, 'E', path);
  Object.defineProperty(this, 'lhs', {
    value: origin,
    enumerable: true
  });
  Object.defineProperty(this, 'rhs', {
    value: value,
    enumerable: true
  });
}
inherits(DiffEdit, Diff);

function DiffNew(path, value) {
  DiffNew.super_.call(this, 'N', path);
  Object.defineProperty(this, 'rhs', {
    value: value,
    enumerable: true
  });
}
inherits(DiffNew, Diff);

function DiffDeleted(path, value) {
  DiffDeleted.super_.call(this, 'D', path);
  Object.defineProperty(this, 'lhs', {
    value: value,
    enumerable: true
  });
}
inherits(DiffDeleted, Diff);

function DiffArray(path, index, item) {
  DiffArray.super_.call(this, 'A', path);
  Object.defineProperty(this, 'index', {
    value: index,
    enumerable: true
  });
  Object.defineProperty(this, 'item', {
    value: item,
    enumerable: true
  });
}
inherits(DiffArray, Diff);

function arrayRemove(arr, from, to) {
  var rest = arr.slice((to || from) + 1 || arr.length);
  arr.length = from < 0 ? arr.length + from : from;
  arr.push.apply(arr, rest);
  return arr;
}

function realTypeOf(subject) {
  var type = typeof subject;
  if (type !== 'object') {
    return type;
  }

  if (subject === Math) {
    return 'math';
  } else if (subject === null) {
    return 'null';
  } else if (Array.isArray(subject)) {
    return 'array';
  } else if (Object.prototype.toString.call(subject) === '[object Date]') {
    return 'date';
  } else if (typeof subject.toString === 'function' && /^\/.*\//.test(subject.toString())) {
    return 'regexp';
  }
  return 'object';
}

function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
  path = path || [];
  stack = stack || [];
  var currentPath = path.slice(0);
  if (typeof key !== 'undefined') {
    if (prefilter) {
      if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) {
        return; } else if (typeof(prefilter) === 'object') {
        if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) {
          return; }
        if (prefilter.normalize) {
          var alt = prefilter.normalize(currentPath, key, lhs, rhs);
          if (alt) {
            lhs = alt[0];
            rhs = alt[1];
          }
        }
      }
    }
    currentPath.push(key);
  }

  // Use string comparison for regexes
  if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
    lhs = lhs.toString();
    rhs = rhs.toString();
  }

  var ltype = typeof lhs;
  var rtype = typeof rhs;

  var ldefined = ltype !== 'undefined' || (stack && stack[stack.length - 1].lhs && stack[stack.length - 1].lhs.hasOwnProperty(key));
  var rdefined = rtype !== 'undefined' || (stack && stack[stack.length - 1].rhs && stack[stack.length - 1].rhs.hasOwnProperty(key));

  if (!ldefined && rdefined) {
    changes(new DiffNew(currentPath, rhs));
  } else if (!rdefined && ldefined) {
    changes(new DiffDeleted(currentPath, lhs));
  } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
    changes(new DiffEdit(currentPath, lhs, rhs));
  } else if (realTypeOf(lhs) === 'date' && (lhs - rhs) !== 0) {
    changes(new DiffEdit(currentPath, lhs, rhs));
  } else if (ltype === 'object' && lhs !== null && rhs !== null) {
    if (!stack.filter(function(x) {
        return x.lhs === lhs; }).length) {
      stack.push({ lhs: lhs, rhs: rhs });
      if (Array.isArray(lhs)) {
        var i, len = lhs.length;
        for (i = 0; i < lhs.length; i++) {
          if (i >= rhs.length) {
            changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
          } else {
            deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
          }
        }
        while (i < rhs.length) {
          changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
        }
      } else {
        var akeys = Object.keys(lhs);
        var pkeys = Object.keys(rhs);
        akeys.forEach(function(k, i) {
          var other = pkeys.indexOf(k);
          if (other >= 0) {
            deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
            pkeys = arrayRemove(pkeys, other);
          } else {
            deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
          }
        });
        pkeys.forEach(function(k) {
          deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
        });
      }
      stack.length = stack.length - 1;
    } else if (lhs !== rhs) {
      // lhs is contains a cycle at this element and it differs from rhs
      changes(new DiffEdit(currentPath, lhs, rhs));
    }
  } else if (lhs !== rhs) {
    if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    }
  }
}

function accumulateDiff(lhs, rhs, prefilter, accum) {
  accum = accum || [];
  deepDiff(lhs, rhs,
    function(diff) {
      if (diff) {
        accum.push(diff);
      }
    },
    prefilter);
  return (accum.length) ? accum : undefined;
}

function applyArrayChange(arr, index, change) {
  if (change.path && change.path.length) {
    var it = arr[index],
      i, u = change.path.length - 1;
    for (i = 0; i < u; i++) {
      it = it[change.path[i]];
    }
    switch (change.kind) {
      case 'A':
        applyArrayChange(it[change.path[i]], change.index, change.item);
        break;
      case 'D':
        delete it[change.path[i]];
        break;
      case 'E':
      case 'N':
        it[change.path[i]] = change.rhs;
        break;
    }
  } else {
    switch (change.kind) {
      case 'A':
        applyArrayChange(arr[index], change.index, change.item);
        break;
      case 'D':
        arr = arrayRemove(arr, index);
        break;
      case 'E':
      case 'N':
        arr[index] = change.rhs;
        break;
    }
  }
  return arr;
}

function applyChange(target, source, change) {
  if (target && source && change && change.kind) {
    var it = target,
      i = -1,
      last = change.path ? change.path.length - 1 : 0;
    while (++i < last) {
      if (typeof it[change.path[i]] === 'undefined') {
        it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
      }
      it = it[change.path[i]];
    }
    switch (change.kind) {
      case 'A':
        applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
        break;
      case 'D':
        delete it[change.path[i]];
        break;
      case 'E':
      case 'N':
        it[change.path[i]] = change.rhs;
        break;
    }
  }
}

function revertArrayChange(arr, index, change) {
  if (change.path && change.path.length) {
    // the structure of the object at the index has changed...
    var it = arr[index],
      i, u = change.path.length - 1;
    for (i = 0; i < u; i++) {
      it = it[change.path[i]];
    }
    switch (change.kind) {
      case 'A':
        revertArrayChange(it[change.path[i]], change.index, change.item);
        break;
      case 'D':
        it[change.path[i]] = change.lhs;
        break;
      case 'E':
        it[change.path[i]] = change.lhs;
        break;
      case 'N':
        delete it[change.path[i]];
        break;
    }
  } else {
    // the array item is different...
    switch (change.kind) {
      case 'A':
        revertArrayChange(arr[index], change.index, change.item);
        break;
      case 'D':
        arr[index] = change.lhs;
        break;
      case 'E':
        arr[index] = change.lhs;
        break;
      case 'N':
        arr = arrayRemove(arr, index);
        break;
    }
  }
  return arr;
}

function revertChange(target, source, change) {
  if (target && source && change && change.kind) {
    var it = target,
      i, u;
    u = change.path.length - 1;
    for (i = 0; i < u; i++) {
      if (typeof it[change.path[i]] === 'undefined') {
        it[change.path[i]] = {};
      }
      it = it[change.path[i]];
    }
    switch (change.kind) {
      case 'A':
        // Array was modified...
        // it will be an array...
        revertArrayChange(it[change.path[i]], change.index, change.item);
        break;
      case 'D':
        // Item was deleted...
        it[change.path[i]] = change.lhs;
        break;
      case 'E':
        // Item was edited...
        it[change.path[i]] = change.lhs;
        break;
      case 'N':
        // Item is new...
        delete it[change.path[i]];
        break;
    }
  }
}

function applyDiff(target, source, filter) {
  if (target && source) {
    var onChange = function(change) {
      if (!filter || filter(target, source, change)) {
        applyChange(target, source, change);
      }
    };
    deepDiff(target, source, onChange);
  }
}

Object.defineProperties(accumulateDiff, {

  diff: {
    value: accumulateDiff,
    enumerable: true
  },
  observableDiff: {
    value: deepDiff,
    enumerable: true
  },
  applyDiff: {
    value: applyDiff,
    enumerable: true
  },
  applyChange: {
    value: applyChange,
    enumerable: true
  },
  revertChange: {
    value: revertChange,
    enumerable: true
  },
  isConflict: {
    value: function() {
      return 'undefined' !== typeof conflict;
    },
    enumerable: true
  },
  noConflict: {
    value: function() {
      if (conflictResolution) {
        conflictResolution.forEach(function(it) {
          it();
        });
        conflictResolution = null;
      }
      return accumulateDiff;
    },
    enumerable: true
  }
});

/* harmony default export */ __webpack_exports__["default"] = (accumulateDiff);


/***/ }),

/***/ "../node_modules/dotenv/lib/main.js":
/*!******************************************!*\
  !*** ../node_modules/dotenv/lib/main.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(/*! fs */ "fs")

/*
 * Parses a string or buffer into an object
 * @param {String|Buffer} src - source to be parsed
 * @returns {Object}
*/
function parse (src) {
  var obj = {}

  // convert Buffers before splitting into lines and processing
  src.toString().split('\n').forEach(function (line) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    var keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/)
    // matched?
    if (keyValueArr != null) {
      var key = keyValueArr[1]

      // default undefined or missing values to empty string
      var value = keyValueArr[2] ? keyValueArr[2] : ''

      // expand newlines in quoted values
      var len = value ? value.length : 0
      if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
        value = value.replace(/\\n/gm, '\n')
      }

      // remove any surrounding quotes and extra spaces
      value = value.replace(/(^['"]|['"]$)/g, '').trim()

      obj[key] = value
    }
  })

  return obj
}

/*
 * Main entry point into dotenv. Allows configuration before loading .env
 * @param {Object} options - valid options: path ('.env'), encoding ('utf8')
 * @returns {Boolean}
*/
function config (options) {
  var path = '.env'
  var encoding = 'utf8'

  if (options) {
    if (options.path) {
      path = options.path
    }
    if (options.encoding) {
      encoding = options.encoding
    }
  }

  try {
    // specifying an encoding returns a string instead of a buffer
    var parsedObj = parse(fs.readFileSync(path, { encoding: encoding }))

    Object.keys(parsedObj).forEach(function (key) {
      process.env[key] = process.env[key] || parsedObj[key]
    })

    return { parsed: parsedObj }
  } catch (e) {
    return { error: e }
  }
}

module.exports.config = config
module.exports.load = config
module.exports.parse = parse


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/connection.js":
/*!*******************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/connection.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var net = __webpack_require__(/*! net */ "net");
var tls = __webpack_require__(/*! tls */ "tls");
var Promise = __webpack_require__(/*! bluebird */ "bluebird");
var events = __webpack_require__(/*! events */ "events");
var util = __webpack_require__(/*! util */ "util");
var crypto = __webpack_require__(/*! crypto */ "crypto");

var helper = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/helper.js */ "../node_modules/rethinkdbdash/lib/helper.js");
var Err = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/error.js */ "../node_modules/rethinkdbdash/lib/error.js");
var Cursor = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/cursor.js */ "../node_modules/rethinkdbdash/lib/cursor.js");
var ReadableStream = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/stream.js */ "../node_modules/rethinkdbdash/lib/stream.js");
var Metadata = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/metadata.js */ "../node_modules/rethinkdbdash/lib/metadata.js");

var protodef = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/protodef.js */ "../node_modules/rethinkdbdash/lib/protodef.js");
var responseTypes = protodef.Response.ResponseType;

// We'll ping a connection using this special value.
var PING_VALUE = "__rethinkdbdash_ping__";

var PROTOCOL_VERSION = 0;
var AUTHENTIFICATION_METHOD = "SCRAM-SHA-256";
var KEY_LENGTH = 32; // Because we are currently using SHA 256
var NULL_BUFFER = new Buffer('\0', "binary");
var CACHE_PBKDF2 = {};

function Connection(r, options, resolve, reject) {
  var self = this;
  this.r = r;
  this.state = 0; // Track the progress of the handshake. -1 will be used for an error state.

  // Set default options - We have to save them in case the user tries to reconnect
  if (!helper.isPlainObject(options)) options = {};
  this.host = options.host || r._host;
  this.port = options.port || r._port;
  if (options.authKey != null) {
    if (options.user != null || options.password != null) {
      throw new Err.ReqlDriverError('Cannot use both authKey and password');
    }
    this.user = r._user;
    this.password = options.authKey;
  } else {
    if (options.user === undefined) {
      this.user = r._user;
    } else {
      this.user = options.user;
    }
    if (options.password === undefined) {
      this.password = r._password;
    } else {
      this.password = options.password;
    }
  }

  this.authKey = options.authKey || r._authKey;
  // period in *seconds* for the connection to be opened
  this.timeoutConnect = options.timeout || r._timeoutConnect;
  // The connection will be pinged every <pingInterval> seconds
  this.pingInterval = options.pingInterval || r._pingInterval;

  if (options.db) this.db = options.db; // Pass to each query

  this.token = 1;
  this.buffer = new Buffer(0);

  this.metadata = {}

  this.open = false; // true only if the user can write on the socket
  this.timeout = null;

  if (options.connection) {
    this.connection = options.connection;
  }
  else {
    var family = 'IPv4';
    if (net.isIPv6(self.host)) {
      family = 'IPv6';
    }

    var connectionArgs = {
      host: self.host,
      port: self.port,
      family: family
    }

    var tlsOptions = options.ssl || false;
    if (tlsOptions === false) {
      self.connection = net.connect(connectionArgs);
    } else {
      if (helper.isPlainObject(tlsOptions)) {
        // Copy the TLS options in connectionArgs
        helper.loopKeys(tlsOptions, function(tlsOptions, key) {
          connectionArgs[key] = tlsOptions[key];
        });
      }
      self.connection = tls.connect(connectionArgs);
    }
  }

  self.connection.setKeepAlive(true);

  self.timeoutOpen = setTimeout(function() {
    self.connection.end(); // Send a FIN packet
    reject(new Err.ReqlDriverError('Failed to connect to '+self.host+':'+self.port+' in less than '+self.timeoutConnect+'s').setOperational());
  }, self.timeoutConnect*1000);

  self.connection.on('end', function() {
    self.open = false;
    self.emit('end');
    // We got a FIN packet, so we'll just flush
    self._flush();
  });
  self.connection.on('close', function() {
    // We emit end or close just once
    clearTimeout(self.timeoutOpen)
    clearInterval(self.pingIntervalId);
    self.connection.removeAllListeners();
    self.open = false;
    self.emit('closed');
    // The connection is fully closed, flush (in case 'end' was not triggered)
    self._flush();
  });
  self.connection.setNoDelay();
  self.connection.once('error', function(error) {
    reject(new Err.ReqlDriverError('Failed to connect to '+self.host+':'+self.port+'\nFull error:\n'+JSON.stringify(error)).setOperational());
  });
  self.connection.on('connect', function() {
    self.connection.removeAllListeners('error');
    self.connection.on('error', function(error) {
      self.emit('error', error);
    });

    var versionBuffer = new Buffer(4)
    versionBuffer.writeUInt32LE(protodef.VersionDummy.Version.V1_0, 0)

    self.randomString = new Buffer(crypto.randomBytes(18)).toString('base64')
    var authBuffer = new Buffer(JSON.stringify({
      protocol_version: PROTOCOL_VERSION,
      authentication_method: AUTHENTIFICATION_METHOD,
      authentication: "n,,n=" + self.user + ",r=" + self.randomString
    }));

    helper.tryCatch(function() {
      self.connection.write(Buffer.concat([versionBuffer, authBuffer, NULL_BUFFER]));
    }, function(err) {
      // The TCP connection is open, but the ReQL connection wasn't established.
      // We can just abort the whole thing
      self.open = false;
      reject(new Err.ReqlDriverError('Failed to perform handshake with '+self.host+':'+self.port).setOperational());
    });
  });
  self.connection.once('end', function() {
    self.open = false;
  });

  self.connection.on('data', function(buffer) {
    if (self.state === -1) {
      // This is an error state
      return;
    }
    self.buffer = Buffer.concat([self.buffer, buffer]);

    if (self.open == false) {
      for(var i=0; i<self.buffer.length; i++) {
        if (self.buffer[i] === 0) {
          var messageServerStr = self.buffer.slice(0, i).toString();
          self.buffer = self.buffer.slice(i+1); // +1 to remove the null byte
          try {
            var messageServer = JSON.parse(messageServerStr);
          } catch(error) {
            self._abort();
            reject(new Err.ReqlDriverError('Could not parse the message sent by the server : \''+messageServerStr+'\'').setOperational());
            return;
          }
          if (messageServer.success !== true) {
            self._abort();
            reject(new Err.ReqlDriverError('Error '+messageServer.error_code+':'+messageServer.error).setOperational());
            return;
          }

          if (self.state === 0) {
            self._checkProtocolVersion(messageServer, reject);
          } else if (self.state === 1) {
            // Compute salt and send the proof
            self._computeSaltedPassword(messageServer, reject);
          } else if (self.state === 2) {
            self._compareDigest(messageServer, resolve, reject);
          }
        }
      }
    }
    else {
      while(self.buffer.length >= 12) {
        var token = self.buffer.readUInt32LE(0) + 0x100000000 * self.buffer.readUInt32LE(4);
        var responseLength = self.buffer.readUInt32LE(8);

        if (self.buffer.length < 12+responseLength) break;

        var responseBuffer = self.buffer.slice(12, 12+responseLength);
        var response = JSON.parse(responseBuffer);

        self._processResponse(response, token);

        self.buffer = self.buffer.slice(12+responseLength);
      }
    }
  });

  self.connection.on('timeout', function(buffer) {
    self.connection.open = false;
    self.emit('timeout');
  })
  self.connection.toJSON = function() { // We want people to be able to jsonify a cursor
    return '"A socket object cannot be converted to JSON due to circular references."'
  }
}

util.inherits(Connection, events.EventEmitter);

Connection.prototype._checkProtocolVersion = function(messageServer, reject) {
  // Expect max_protocol_version, min_protocol_version, server_version, success
  var minVersion = messageServer.min_protocol_version
  var maxVersion = messageServer.max_protocol_version

  if (minVersion > PROTOCOL_VERSION || maxVersion < PROTOCOL_VERSION) {
    this._abort();
    reject(new Err.ReqlDriverError('Unsupported protocol version: '+PROTOCOL_VERSION+', expected between '+minVersion+' and '+ maxVersion).setOperational());
  }
  this.state = 1;
};

Connection.prototype._computeSaltedPassword = function(messageServer, reject) {
  var self = this;
  var authentication = helper.splitCommaEqual(messageServer.authentication);

  var randomNonce = authentication.r
  var salt = new Buffer(authentication.s, 'base64')
  var iterations = parseInt(authentication.i)

  if (randomNonce.substr(0, self.randomString.length) !== self.randomString) {
    self._abort();
    reject(new Err.ReqlDriverError('Invalid nonce from server').setOperational());
  }

  // The salt is constant, so we can cache the salted password.
  var cacheKey = self.password.toString("base64")+','+salt.toString("base64")+','+iterations;
  if (CACHE_PBKDF2.hasOwnProperty(cacheKey)) {
    helper.tryCatch(function() {
      self._sendProof(messageServer.authentication, randomNonce, CACHE_PBKDF2[cacheKey]);
    }, function(err) {
      // The TCP connection is open, but the ReQL connection wasn't established.
      // We can just abort the whole thing
      self.open = false;
      reject(new Err.ReqlDriverError('Failed to perform handshake with '+self.host+':'+self.port).setOperational());
    });
  } else {
    crypto.pbkdf2(self.password, salt, iterations, KEY_LENGTH, "sha256", function(error, saltedPassword) {
      if (error != null) {
        self._abort();
        reject(new Err.ReqlDriverError('Could not derive the key. Error:' + error.toString()).setOperational());
      }
      CACHE_PBKDF2[cacheKey] = saltedPassword;
      helper.tryCatch(function() {
        self._sendProof(messageServer.authentication, randomNonce, saltedPassword);
      }, function(err) {
        // The TCP connection is open, but the ReQL connection wasn't established.
        // We can just abort the whole thing
        self.open = false;
        reject(new Err.ReqlDriverError('Failed to perform handshake with '+self.host+':'+self.port).setOperational());
      });
    })
  }
}

Connection.prototype._sendProof = function(authentication, randomNonce, saltedPassword) {
  var clientFinalMessageWithoutProof = "c=biws,r=" + randomNonce;
  var clientKey = crypto.createHmac("sha256", saltedPassword).update("Client Key").digest()
  var storedKey = crypto.createHash("sha256").update(clientKey).digest()

  var authMessage =
      "n=" + this.user + ",r=" + this.randomString + "," +
      authentication + "," +
      clientFinalMessageWithoutProof

  var clientSignature = crypto.createHmac("sha256", storedKey).update(authMessage).digest()
  var clientProof = helper.xorBuffer(clientKey, clientSignature)

  var serverKey = crypto.createHmac("sha256", saltedPassword).update("Server Key").digest()
  this.serverSignature = crypto.createHmac("sha256", serverKey).update(authMessage).digest()

  this.state = 2
  var message = JSON.stringify({
    authentication: clientFinalMessageWithoutProof + ",p=" + clientProof.toString("base64")
  })
  this.connection.write(Buffer.concat([new Buffer(message.toString()), NULL_BUFFER]))
}

Connection.prototype._compareDigest = function(messageServer, resolve, reject) {
  var self = this;
  var firstEquals = messageServer.authentication.indexOf('=')
  var serverSignatureValue = messageServer.authentication.slice(firstEquals+1)

  if (!helper.compareDigest(serverSignatureValue, self.serverSignature.toString("base64"))) {
    reject(new Err.ReqlDriverError('Invalid server signature').setOperational());
  }

  self.state = 4
  self.connection.removeAllListeners('error');
  self.open = true;
  self.connection.on('error', function(e) {
    self.open = false;
  });
  clearTimeout(self.timeoutOpen)
  resolve(self);
  if (self.pingInterval > 0) {
    self.pingIntervalId = setInterval(function() {
      self.pendingPing = true;
      self.r.error(PING_VALUE).run(self).error(function(error) {
        self.pendingPing = false;
        if (error.message !== PING_VALUE) {
          self.emit('error', new Err.ReqlDriverError(
                'Could not ping the connection').setOperational());
          self.open = false;
          self.connection.end();
        } else {
        }
      });
    }, self.pingInterval*1000);
  }
}

Connection.prototype._abort = function() {
  this.state = -1;
  this.removeAllListeners();
  this.close();
}

Connection.prototype._processResponse = function(response, token) {
  //console.log('Connection.prototype._processResponse: '+token);
  //console.log(JSON.stringify(response, null, 2));
  var self = this;

  var type = response.t;
  var result;
  var cursor;
  var stream;
  var currentResolve, currentReject;
  var datum;
  var options;

  if (type === responseTypes.COMPILE_ERROR) {
    self.emit('release');
    if (typeof self.metadata[token].reject === 'function') {
      self.metadata[token].reject(new Err.ReqlCompileError(helper.makeAtom(response), self.metadata[token].query, response));
    }

    delete self.metadata[token]
  }
  else if (type === responseTypes.CLIENT_ERROR) {
    self.emit('release');

    if (typeof self.metadata[token].reject === 'function') {
      currentResolve = self.metadata[token].resolve;
      currentReject = self.metadata[token].reject;
      self.metadata[token].removeCallbacks();
      currentReject(new Err.ReqlClientError(helper.makeAtom(response), self.metadata[token].query, response));
      if (typeof self.metadata[token].endReject !== 'function') {
        // No pending STOP query, we can delete
        delete self.metadata[token]
      }
    }
    else if (typeof self.metadata[token].endResolve === 'function') {
      currentResolve = self.metadata[token].endResolve;
      currentReject = self.metadata[token].endReject;
      self.metadata[token].removeEndCallbacks();
      currentReject(new Err.ReqlClientError(helper.makeAtom(response), self.metadata[token].query, response));
      delete self.metadata[token]
    }
    else if (token === -1) { // This should not happen now since 1.13 took the token out of the query
      var error = new Err.ReqlClientError(helper.makeAtom(response)+'\nClosing all outstanding queries...');
      self.emit('error', error);
      // We don't want a function to yield forever, so we just reject everything
      helper.loopKeys(self.rejectMap, function(rejectMap, key) {
        rejectMap[key](error);
      });
      self.close();
      delete self.metadata[token]
    }
  }
  else if (type === responseTypes.RUNTIME_ERROR) {
    var errorValue = helper.makeAtom(response);
    var error;
    // We don't want to release a connection if we just pinged it.
    if (self.pendingPing === false || (errorValue !== PING_VALUE)) {
      self.emit('release');
      error = new Err.ReqlRuntimeError(errorValue, self.metadata[token].query, response);
    } else {
      error = new Err.ReqlRuntimeError(errorValue);
    }

    if (typeof self.metadata[token].reject === 'function') {
      currentResolve = self.metadata[token].resolve;
      currentReject = self.metadata[token].reject;
      self.metadata[token].removeCallbacks();
      error.setName(response.e);
      currentReject(error);
      if (typeof self.metadata[token].endReject !== 'function') {
        // No pending STOP query, we can delete
        delete self.metadata[token]
      }
    }
    else if (typeof self.metadata[token].endResolve === 'function') {
      currentResolve = self.metadata[token].endResolve;
      currentReject = self.metadata[token].endReject;
      self.metadata[token].removeEndCallbacks();
      delete self.metadata[token]
    }
  }
  else if (type === responseTypes.SUCCESS_ATOM) {
    self.emit('release');
    // self.metadata[token].resolve is always a function
    datum = helper.makeAtom(response, self.metadata[token].options);

    if ((Array.isArray(datum)) &&
        ((self.metadata[token].options.cursor === true) || ((self.metadata[token].options.cursor === undefined) && (self.r._options.cursor === true)))) {
      cursor = new Cursor(self, token, self.metadata[token].options, 'cursor');
      if (self.metadata[token].options.profile === true) {
        self.metadata[token].resolve({
          profile: response.p,
          result: cursor
        });
      }
      else {
        self.metadata[token].resolve(cursor);
      }

      cursor._push({done: true, response: { r: datum }});
    }
    else if ((Array.isArray(datum)) &&
        ((self.metadata[token].options.stream === true || self.r._options.stream === true))) {
      cursor = new Cursor(self, token, self.metadata[token].options, 'cursor');
      stream = new ReadableStream({}, cursor);
      if (self.metadata[token].options.profile === true) {
        self.metadata[token].resolve({
          profile: response.p,
          result: stream 
        });
      }
      else {
        self.metadata[token].resolve(stream);
      }
      cursor._push({done: true, response: { r: datum }});
    }
    else {
      if (self.metadata[token].options.profile === true) {
        result = {
          profile: response.p,
          result: cursor || datum
        }
      }
      else {
        result = datum;
      }
      self.metadata[token].resolve(result);
    }

    delete self.metadata[token];
  }
  else if (type === responseTypes.SUCCESS_PARTIAL) {
    // We save the current resolve function because we are going to call cursor._fetch before resuming the user's yield
    var done = false;
    if (typeof self.metadata[token].resolve !== 'function') {
      // According to issues/190, we can get a SUCESS_COMPLETE followed by a
      // SUCCESS_PARTIAL when closing an feed. So resolve/reject will be undefined
      // in this case.
      currentResolve = self.metadata[token].endResolve;
      currentReject = self.metadata[token].endReject;
      if (typeof currentResolve === 'function') {
        done = true;
      }
    }
    else {
      currentResolve = self.metadata[token].resolve;
      currentReject = self.metadata[token].reject;
    }

    // We need to delete before calling cursor._push
    self.metadata[token].removeCallbacks();

    if (!self.metadata[token].cursor) { //No cursor, let's create one
      self.metadata[token].cursor = true;

      var typeResult = 'Cursor';
      var includesStates = false;;
      if (Array.isArray(response.n)) {
        for(var i=0; i<response.n.length; i++) {
          if (response.n[i] === protodef.Response.ResponseNote.SEQUENCE_FEED) {
            typeResult = 'Feed';
          }
          else if (response.n[i] === protodef.Response.ResponseNote.ATOM_FEED) {
            typeResult = 'AtomFeed';
          }
          else if (response.n[i] === protodef.Response.ResponseNote.ORDER_BY_LIMIT_FEED) {
            typeResult = 'OrderByLimitFeed';
          }
          else if (response.n[i] === protodef.Response.ResponseNote.UNIONED_FEED) {
            typeResult = 'UnionedFeed';
          }
          else if (response.n[i] === protodef.Response.ResponseNote.INCLUDES_STATES) {
            includesStates = true;
          }
          else {
            currentReject(new Err.ReqlDriverError('Unknown ResponseNote '+response.n[i]+', the driver is probably out of date.').setOperational());
            return;
          }
        }
      }
      cursor = new Cursor(self, token, self.metadata[token].options, typeResult);
      if (includesStates === true) {
        cursor.setIncludesStates();
      }
      if ((self.metadata[token].options.cursor === true) || ((self.metadata[token].options.cursor === undefined) && (self.r._options.cursor === true))) {
        // Return a cursor
        if (self.metadata[token].options.profile === true) {
          currentResolve({
            profile: response.p,
            result: cursor
          });
        }
        else {
          currentResolve(cursor);
        }
      }
      else if ((self.metadata[token].options.stream === true || self.r._options.stream === true)) {
        stream = new ReadableStream({}, cursor);
        if (self.metadata[token].options.profile === true) {
          currentResolve({
            profile: response.p,
            result: stream 
          });
        }
        else {
          currentResolve(stream);
        }
      }
      else if (typeResult !== 'Cursor') {
        // Return a feed
        if (self.metadata[token].options.profile === true) {
          currentResolve({
            profile: response.p,
            result: cursor
          });
        }
        else {
          currentResolve(cursor);
        }
      }
      else {
        // When we get SUCCESS_SEQUENCE, we will delete self.metadata[token].options
        // So we keep a reference of it here
        options = self.metadata[token].options;

        // Fetch everything and return an array
        cursor.toArray().then(function(result) {
          if (options.profile === true) {
            currentResolve({
              profile: response.p,
              result: result
            });
          }
          else {
            currentResolve(result);
          }
        }).error(currentReject)
      }
      cursor._push({done: false, response: response});
    }
    else { // That was a continue query
      currentResolve({done: done, response: response});
    }
  }
  else if (type === responseTypes.SUCCESS_SEQUENCE) {
    self.emit('release');

    if (typeof self.metadata[token].resolve === 'function') {
      currentResolve = self.metadata[token].resolve;
      currentReject = self.metadata[token].reject;
      self.metadata[token].removeCallbacks();
    }
    else if (typeof self.metadata[token].endResolve === 'function') {
      currentResolve = self.metadata[token].endResolve;
      currentReject = self.metadata[token].endReject;
      self.metadata[token].removeEndCallbacks();
    }

    if (!self.metadata[token].cursor) { // No cursor, let's create one
      cursor = new Cursor(self, token, self.metadata[token].options, 'Cursor');

      if ((self.metadata[token].options.cursor === true) || ((self.metadata[token].options.cursor === undefined) && (self.r._options.cursor === true))) {
        if (self.metadata[token].options.profile === true) {
          currentResolve({
            profile: response.p,
            result: cursor
          });
        }
        else {
          currentResolve(cursor);
        }

        // We need to keep the options in the else statement, so we clean it inside the if/else blocks
        if (typeof self.metadata[token].endResolve !== 'function') {
          delete self.metadata[token];
        }
      }
      else if ((self.metadata[token].options.stream === true || self.r._options.stream === true)) {
        stream = new ReadableStream({}, cursor);
        if (self.metadata[token].options.profile === true) {
          currentResolve({
            profile: response.p,
            result: stream
          });
        }
        else {
          currentResolve(stream);
        }

        // We need to keep the options in the else statement,
        // so we clean it inside the if/else blocks (the one looking 
        // if a cursor was already created)
        if (typeof self.metadata[token].endResolve !== 'function') {
          // We do not want to delete the metadata if there is an END query waiting
          delete self.metadata[token];
        }

      }
      else {
        cursor.toArray().then(function(result) {
          if (self.metadata[token].options.profile === true) {
            currentResolve({
              profile: response.p,
              result: result
            });
          }
          else {
            currentResolve(result);
          }
          if (typeof self.metadata[token].endResolve !== 'function') {
            delete self.metadata[token];
          }

        }).error(currentReject)
      }
      done = true;
      cursor._push({done: true, response: response});
    }
    else { // That was a continue query
      // If there is a pending STOP query we do not want to close the cursor yet
      done = true;
      if (typeof self.metadata[token].endResolve === 'function') {
        done = false;
      }
      currentResolve({done: done, response: response});
    }
  }
  else if (type === responseTypes.WAIT_COMPLETE) {
    self.emit('release');
    self.metadata[token].resolve();

    delete self.metadata[token];
  }
  else if (type === responseTypes.SERVER_INFO) {
    self.emit('release');
    datum = helper.makeAtom(response, self.metadata[token].options);
    self.metadata[token].resolve(datum);
    delete self.metadata[token];
  }
}

Connection.prototype.reconnect = function(options, callback) {
  var self = this;

  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  if (!helper.isPlainObject(options)) options = {};

  if (options.noreplyWait === true) {
    var p = new Promise(function(resolve, reject) {
      self.close(options).then(function() {
        self.r.connect({
          host: self.host,
          port: self.port,
          authKey: self.authKey,
          db: self.db
        }).then(function(c) {
          resolve(c);
        }).error(function(e) {
          reject(e);
        });
      }).error(function(e) {
        reject(e)
      })
    }).nodeify(callback);
  }
  else {
    return self.r.connect({
      host: self.host,
      port: self.port,
      authKey: self.authKey,
      db: self.db
    }, callback);
  }

  return p;
}

Connection.prototype._send = function(query, token, resolve, reject, originalQuery, options, end) {
  //console.log('Connection.prototype._send: '+token);
  //console.log(JSON.stringify(query, null, 2));

  var self = this;
  if (self.open === false) {
    var err = new Err.ReqlDriverError('The connection was closed by the other party');
    err.setOperational();
    reject(err);
    return;
  }

  var queryStr = JSON.stringify(query);
  var querySize = Buffer.byteLength(queryStr);

  var buffer = new Buffer(8+4+querySize);
  buffer.writeUInt32LE(token & 0xFFFFFFFF, 0)
  buffer.writeUInt32LE(Math.floor(token / 0xFFFFFFFF), 4)

  buffer.writeUInt32LE(querySize, 8);

  buffer.write(queryStr, 12);

  // noreply instead of noReply because the otpions are translated for the server
  if ((!helper.isPlainObject(options)) || (options.noreply != true)) {
    if (!self.metadata[token]) {
      self.metadata[token] = new Metadata(resolve, reject, originalQuery, options);
    }
    else if (end === true) {
      self.metadata[token].setEnd(resolve, reject);
    }
    else {
      self.metadata[token].setCallbacks(resolve, reject);
    }
  }
  else {
    if (typeof resolve === 'function') resolve();
    this.emit('release');
  }

  // This will emit an error if the connection is closed
  helper.tryCatch(function() {
    self.connection.write(buffer);
  }, function(err) {
    self.metadata[token].reject(err);
    delete self.metadata[token]
  });

};

Connection.prototype._continue = function(token, resolve, reject) {
  var query = [protodef.Query.QueryType.CONTINUE];
  this._send(query, token, resolve, reject);
}
Connection.prototype._end = function(token, resolve, reject) {
  var query = [protodef.Query.QueryType.STOP];
  this._send(query, token, resolve, reject, undefined, undefined, true);
}


Connection.prototype.use = function(db) {
  if (typeof db !== 'string') throw new Err.ReqlDriverError('First argument of `use` must be a string')
  this.db = db;
}

Connection.prototype.server = function(callback) {
  var self = this;
  return new Promise(function(resolve, reject) {
    var query = [protodef.Query.QueryType.SERVER_INFO];
    self._send(query, self._getToken(), resolve, reject, undefined, undefined, true);
  }).nodeify(callback);
}

// Return the next token and update it.
Connection.prototype._getToken = function() {
  return this.token++;
}

Connection.prototype.close = function(options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  var self = this;

  var p = new Promise(function(resolve, reject) {
    if (!helper.isPlainObject(options)) options = {};
    if (options.noreplyWait === true) {
      self.noreplyWait().then(function(r) {
        self.open = false;
        self.connection.end()
        resolve(r);
      }).error(function(e) {
        reject(e)
      });
    }
    else{
      self.open = false;
      self.connection.end();
      resolve();
    }
  }).nodeify(callback);
  return p;
};


Connection.prototype.noReplyWait = function() {
  throw new Err.ReqlDriverError('Did you mean to use `noreplyWait` instead of `noReplyWait`?')
}
Connection.prototype.noreplyWait = function(callback) {
  var self = this;
  var token = self._getToken();

  var p = new Promise(function(resolve, reject) {
    var query = [protodef.Query.QueryType.NOREPLY_WAIT];

    self._send(query, token, resolve, reject);
  }).nodeify(callback);
  return p;
}
Connection.prototype._isConnection = function() {
  return true;
}
Connection.prototype._isOpen = function() {
  return this.open;
}

Connection.prototype._flush = function() {
  helper.loopKeys(this.metadata, function(metadata, key) {
    if (typeof metadata[key].reject === 'function') {
      metadata[key].reject(new Err.ReqlServerError(
            'The connection was closed before the query could be completed.',
            metadata[key].query));
    }
    if (typeof metadata[key].endReject === 'function') {
      metadata[key].endReject(new Err.ReqlServerError(
            'The connection was closed before the query could be completed.',
            metadata[key].query));
    }
  });
  this.metadata = {};
}

module.exports = Connection


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/cursor.js":
/*!***************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/cursor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Promise = __webpack_require__(/*! bluebird */ "bluebird");
var Err = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/error.js */ "../node_modules/rethinkdbdash/lib/error.js");
var helper = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/helper.js */ "../node_modules/rethinkdbdash/lib/helper.js");
var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;

var MAX_CALL_STACK = 1000;

function Cursor(connection, token, options, type) {
  this.connection = connection;
  this.token = token;

  this._stackSize = 0; // Estimation of our call stack.
  this._index = 0; // Position in this._data[0]
  this._data = []; // Array of non empty arrays
  this._fetching = false; // Are we fetching data
  this._canFetch = true; // Can we fetch more data?
  this._pendingPromises = []; // Pending promises' resolve/reject
  this.options = options || {};
  this._closed = false;
  this._closingPromise = null; // Promise returned by close
  this._type = type;
  this._setIncludesStates = false;
  if ((type === 'feed') || (type === 'atomFeed')) {
    this.toArray = _unsupportedToArray;
  }
  this._emittedEnd = false;
}

Cursor.prototype.toString = function() {
  return '[object '+this._type+']';
}
Cursor.prototype.setIncludesStates = function() {
  this._setIncludesStates = true;
}
Cursor.prototype.includesStates = function() {
  return this._setIncludesStates;
}
Cursor.prototype.getType = function() {
  return this._type;
}

Cursor.prototype.toJSON = function() {
  if (this._type === 'Cursor') {
    throw new Err.ReqlDriverError('You cannot serialize a Cursor to JSON. Retrieve data from the cursor with `toArray` or `next`');
  }
  else {
    throw new Err.ReqlDriverError('You cannot serialize a '+this._type+' to JSON. Retrieve data from the cursor with `each` or `next`');
  }
}

Cursor.prototype._next = function(callback) {
  var self = this;
  if (self._closed === true) {
    return Promise.reject(new Err.ReqlDriverError(
      'You cannot call `next` on a closed '+self._type).setOperational()
    ).nodeify(callback);
  }
  else if ((self._data.length === 0) && (self._canFetch === false)) {
    return Promise.reject(new Err.ReqlDriverError(
      'No more rows in the '+self._type.toLowerCase()).setOperational()
    ).nodeify(callback);
  }
  else {
    if ((self._data.length > 0) && (self._data[0].length > self._index)) {
      var result = self._data[0][self._index++];
      if (result instanceof Error) {
        return Promise.reject(result).nodeify(callback);
      }
      else {
        // This could be possible if we get back batch with just one document?
        if (self._data[0].length === self._index) {
          self._index = 0;
          self._data.shift();
          if ((self._data.length === 1)
            && (self._canFetch === true)
            && (self._closed === false)
            && (self._fetching === false)) {
              self._fetch();
          }
        }
        return Promise.resolve(result).nodeify(callback);
      }
    }
    else {
      return new Promise(function(resolve, reject) {
        self._pendingPromises.push({resolve: resolve, reject: reject});
      }).nodeify(callback);
    }
  }
}
Cursor.prototype.hasNext = function() {
  throw new Error('The `hasNext` command has been removed in 1.13, please use `next`.')
}
Cursor.prototype.toArray = function(callback) {
  var self = this;
  var p = new Promise(function(resolve, reject) {
    var result = [];
    var i =0;
    self._each(function(err, data) {
      if (err) {
        reject(err);
      }
      else {
        result.push(data);
      }
    }, function() {
      resolve(result);
    });
  }).nodeify(callback);
  return p;
}

Cursor.prototype._fetch = function() {
  var self = this;
  this._fetching = true;

  var p = new Promise(function(resolve, reject) {
    self.connection._continue(self.token, resolve, reject);
  }).then(function(response) {
    self._push(response);
    return null;
  }).error(function(error) {
    self._fetching = false;
    self._canFetch = false;
    self._pushError(error);
  })
}

Cursor.prototype._push = function(data) {
  var couldfetch = this._canFetch;
  if (data.done) this._done();
  var response = data.response;
  this._fetching = false;
  // If the cursor was closed, we ignore all following response
  if ((response.r.length > 0) && (couldfetch === true)) {
    this._data.push(helper.makeSequence(response, this.options));
  }
  // this._fetching = false
  if ((this._closed === false) && (this._canFetch) && (this._data.length <= 1)) this._fetch();
  this._flush();
}
// Try to solve as many pending promises as possible
Cursor.prototype._flush = function() {
  while ((this._pendingPromises.length > 0) && ((this._data.length > 0) || ((this._fetching === false) && (this._canFetch === false)))) {
    var fullfiller = this._pendingPromises.shift();
    var resolve = fullfiller.resolve;
    var reject = fullfiller.reject;

    if (this._data.length > 0) {
      var result = this._data[0][this._index++];
      if (result instanceof Error) {
        reject(result);
      }
      else {
        resolve(result);
      }

      if (this._data[0].length === this._index) {
        this._index = 0;
        this._data.shift();
        if ((this._data.length <= 1)
          && (this._canFetch === true)
          && (this._closed === false)
          && (this._fetching === false)) {
            this._fetch();
        }
      }
    }
    else {
      reject(new Err.ReqlDriverError('No more rows in the '+this._type.toLowerCase()).setOperational())
    }
  }
}
Cursor.prototype._pushError = function(error) {
  this._data.push([error]);
  this._flush();
}

Cursor.prototype._done = function() {
  this._canFetch = false;
  if (this._eventEmitter) {
    this._eventEmitter.emit('end');
  }
}

Cursor.prototype._set = function(ar) {
  this._fetching = false;
  this._canFetch = false;
  if (ar.length > 0) {
    this._data.push(ar);
  }
  this._flush();
}

Cursor.prototype.close = function(callback) {
  var self = this;
  if (self._closed === true) {
    return self._closingPromise.nodeify(callback);
  }
  self._closed = true;

  self._closingPromise = new Promise(function(resolve, reject) {
    if ((self._canFetch === false) && (self._fetching === false)) {
      resolve()
    }
    else { // since v0_4 (RethinkDB 2.0) we can (must) force a STOP request even if a CONTINUE query is pending
      var endCallback = function() {
        if (self._eventEmitter && (self._emittedEnd === false)) {
          self._emittedEnd = true;
          self._eventEmitter.emit('end');
        }
        resolve();
      }
      self.connection._end(self.token, endCallback, reject);
    }
  }).nodeify(callback);
  return self._closingPromise;
}
Cursor.prototype._each = function(callback, onFinish) {
  if (this._closed === true) {
    return callback(new Err.ReqlDriverError('You cannot retrieve data from a cursor that is closed').setOperational());
  }
  var self = this;

  var reject = function(err) {
    if (err.message === 'No more rows in the '+self._type.toLowerCase()+'.') {
      if (typeof onFinish === 'function') {
        onFinish();
      }
    }
    else {
      callback(err);
    }
    return null;
  }
  var resolve = function(data) {
    self._stackSize++;
    var keepGoing = callback(null, data);
    if (keepGoing === false) {
      if (typeof onFinish === 'function') {
        onFinish();
      }
    }
    else {
      if (self._closed === false) {
        if (self._stackSize <= MAX_CALL_STACK) {
          self._next().then(resolve).error(function(error) {
            if ((error.message !== 'You cannot retrieve data from a cursor that is closed.') &&
                (error.message.match(/You cannot call `next` on a closed/) === null)) {
              reject(error);
            }
          });
        }
        else {
          setTimeout(function() {
            self._stackSize = 0;
            self._next().then(resolve).error(function(error) {
              if ((error.message !== 'You cannot retrieve data from a cursor that is closed.') &&
                  (error.message.match(/You cannot call `next` on a closed/) === null)) {
                reject(error);
              }
            });
          }, 0);
        }
      }
    }
    return null;
  }

  self._next().then(resolve).error(function(error) {
    // We can silence error when the cursor is closed as this
    if ((error.message !== 'You cannot retrieve data from a cursor that is closed.') &&
        (error.message.match(/You cannot call `next` on a closed/) === null)) {
      reject(error);
    }
  });
  return null;
}
Cursor.prototype._eachAsync = function(callback) {
  var self = this;
  return new Promise(function(resolve, reject) {
    self._eachAsyncInternal(callback, resolve, reject)
  });
}
Cursor.prototype._eachAsyncInternal = function(callback, finalResolve, finalReject) {
  if (this._closed === true) {
    finalReject(new Err.ReqlDriverError('You cannot retrieve data from a cursor that is closed').setOperational());
    return;
  }
  var self = this;

  var nextCb = function() {
    self._stackSize++;
    self._next().then(function(row) {
      if (self._stackSize <= MAX_CALL_STACK) {
        if (callback.length <= 1) {
          Promise.resolve(callback(row)).then(nextCb)
          return null;
        }
        else {
          new Promise(function(resolve, reject) {
            return callback(row, resolve)
          }).then(nextCb);
          return null;
        }
      }
      else {
        new Promise(function(resolve, reject) {
          setTimeout(function() {
            self._stackSize = 0;
            if (callback.length <= 1) {
              Promise.resolve(callback(row)).then(resolve).catch(reject);
            }
            else {
              new Promise(function(resolve, reject) {
                return callback(row, resolve)
              }).then(resolve).catch(reject);
              return null;
            }
          }, 0)
        }).then(nextCb);
        return null;
      }
    }).error(function(error) {
      if ((error.message === 'No more rows in the '+self._type.toLowerCase()+'.') ||
          (error.message === 'You cannot retrieve data from a cursor that is closed.') ||
          (error.message.match(/You cannot call `next` on a closed/) !== null)) {
        return finalResolve();
      }
      return finalReject(Err.setOperational(error));
    });
  }
  nextCb();
}
Cursor.prototype.eachAsync = Cursor.prototype._eachAsync;
Cursor.prototype.next = Cursor.prototype._next;
Cursor.prototype.each = Cursor.prototype._each;
Cursor.prototype._unsupportedToArray = function() {
  throw new Error('The `toArray` method is not available on feeds.')
}

Cursor.prototype._makeEmitter = function() {
  this.next = function() {
    throw new Err.ReqlDriverError('You cannot call `next` once you have bound listeners on the '+this._type)
  }
  this.each = function() {
    throw new Err.ReqlDriverError('You cannot call `each` once you have bound listeners on the '+this._type)
  }
  this.eachAsync = function() {
    throw new Err.ReqlDriverError('You cannot call `eachAsync` once you have bound listeners on the '+this._type)
  }
  this.toArray = function() {
    throw new Err.ReqlDriverError('You cannot call `toArray` once you have bound listeners on the '+this._type)
  }
  this._eventEmitter = new EventEmitter();
}
Cursor.prototype._eachCb = function(err, data) {
  // We should silent things if the cursor/feed is closed
  if (this._closed === false) {
    if (err) {
      this._eventEmitter.emit('error', err);
    }
    else {
      this._eventEmitter.emit('data', data);
    }
  }
}

var methods = [
  'addListener',
  'on',
  'once',
  'removeListener',
  'removeAllListeners',
  'setMaxListeners',
  'listeners',
  'emit'
];

for(var i=0; i<methods.length; i++) {
  (function(n) {
    var method = methods[n];
    Cursor.prototype[method] = function() {
      var self = this;
      if (self._eventEmitter == null) {
        self._makeEmitter();
        setImmediate(function() {
          self._each(self._eachCb.bind(self), function() {
            if (self._emittedEnd === false) {
              self._emittedEnd = true;
              self._eventEmitter.emit('end');
            }
          });
        });
      }
      var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
      self._eventEmitter[method].apply(self._eventEmitter, _args);
    };
  })(i);
}

module.exports = Cursor;


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/dequeue.js":
/*!****************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/dequeue.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Implement a dequeue with a circular buffer
// The buffer can expand but currently doesn't automatically shrink
// as it is not a desired behavior. We may want to explicitly resize it though.
function Dequeue(size) {
  this.start = 0;
  this.end = 0;

  size = size || 50;
  this.buffer = new Array(size);
}
Dequeue.prototype.get = function(index) {
  if (this.start+index > this.buffer.length) {
    return this.buffer[this.start+index-this.buffer.length]
  }
  else {
    return this.buffer[this.start+index]
  }
}

Dequeue.prototype.toArray = function(index) {
  var result = [];
  for(var i=0; i<this.getLength(); i++) {
    result.push(this.get(i));
  }
  return result;
}

Dequeue.prototype.delete = function(index) {
  var current, next;
  if (this.start+index >= this.buffer.length) {
    current = this.start+index-this.buffer.length;
    next = this.start+index-this.buffer.length+1;
  }
  else {
    current = this.start+index;
    next = this.start+index+1;
  }

  for(var i=index; i<(this.buffer.length-index); i++) {
    if (next === this.buffer.length) next = 0;
    if (current === this.buffer.length) current = 0;

    this.buffer[current] = this.buffer[next];
    current++;
    next++;
  }

  this.end--;
  if (this.end < 0) this.end = this.buffer.length-1
}

Dequeue.prototype.push = function(element) {
  // push on this.end and then increase this.end
  // this.end should NEVER be equal to this.buffer.length
  this.buffer[this.end] = element;
  this.end++;
  if (this.end === this.buffer.length) this.end = 0;

  if (this.start === this.end) {
    // Resize
    var previousBuffer = this.buffer;

    this.buffer = new Array(previousBuffer.length*2);

    var i, k = 0;
    for(i=this.start; i<previousBuffer.length; i++) {
      this.buffer[k++] = previousBuffer[i];
    }
    for(i=0; i<this.start; i++) {
      this.buffer[k++] = previousBuffer[i];
    }
    this.start = 0;
    this.end = previousBuffer.length;
  }
}

Dequeue.prototype.pop = function(element) {
  //TODO: Decrease size when possible/needed? This may not be
  //something we really need/want
  // Return the element in this.end-1
  if (this.getLength() > 0) {
    var pos = this.end-1;
    if (pos < 0) pos = this.buffer.length-1;
    this.end = pos;
    var result = this.buffer[pos];
    this.buffer[pos] = undefined;
    return result;
  }
  else {
    return undefined
  }
}

Dequeue.prototype.unshift = function(element) {
  // push on this.start-1 and then decrease this.start.
  // this.end should NEVER be equal to this.buffer.length

  var pos = this.start-1;
  if (pos < 0) pos = this.buffer.length-1;

  this.buffer[pos] = element;
  this.start = pos;

  if (this.start === this.end) {
    //Resize
    var previousBuffer = this.buffer;

    this.buffer = new Array(previousBuffer.length*2);

    var i, k = 0;
    for(i=this.start; i<previousBuffer.length; i++) {
      this.buffer[k++] = previousBuffer[i];
    }
    for(i=0; i<this.start; i++) {
      this.buffer[k++] = previousBuffer[i];
    }
    this.start = 0;
    this.end = previousBuffer.length;
  }
}

Dequeue.prototype.shift = function() {
  // Return the element in this.start

  if (this.getLength() > 0) {
    var result = this.buffer[this.start];
    this.buffer[this.start] = undefined;
    this.start++;
    if (this.start === this.buffer.length) this.start = 0;
    return result;
  }
}

Dequeue.prototype.getLength = function() {
  if (this.start <= this.end) {
    return this.end-this.start;
  }
  else {
    return this.buffer.length-(this.start-this.end);
  }
}

module.exports = Dequeue;


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/error.js":
/*!**************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/error.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var helper = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/helper.js */ "../node_modules/rethinkdbdash/lib/helper.js");
var INDENT = 4;
var LIMIT = 80;
var IS_OPERATIONAL = 'isOperational';

var protodef = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/protodef.js */ "../node_modules/rethinkdbdash/lib/protodef.js");
var responseTypes = protodef.Response.ResponseType;
var protoErrorType = protodef.Response.ErrorType;
var termTypes = protodef.Term.TermType;
var datumTypes = protodef.Datum.DatumType;
var frameTypes = protodef.Frame.FrameType;


function ReqlDriverError(message, query, secondMessage) {
  this.message = this.msg = message;
  Error.captureStackTrace(this, ReqlDriverError);

  if ((Array.isArray(query) && (query.length > 0)) || (!Array.isArray(query) && query != null)) {
    if ((this.message.length > 0) && (this.message[this.message.length-1] === '.')) {
      this.message = this.message.slice(0, this.message.length-1);
    }
    
    this.message += ' after:\n';

    var backtrace = generateBacktrace(query, 0, null, [], {indent: 0, extra: 0});

    this.message += backtrace.str;
  }
  else {
    if (this.message[this.message.length-1] !== '?') this.message += '.';
  }
  if (secondMessage) this.message += '\n'+secondMessage;
};
ReqlDriverError.prototype = new Error();
ReqlDriverError.prototype.name = 'ReqlDriverError';
ReqlDriverError.prototype.setOperational = function() {
  this[IS_OPERATIONAL] = true;
  return this;
};

module.exports.ReqlDriverError = ReqlDriverError;


function ReqlServerError(message, query) {
  this.message = this.msg = message;
  Error.captureStackTrace(this, ReqlServerError);

  if ((Array.isArray(query) && (query.length > 0)) || (!Array.isArray(query) && query != null)) {
    if ((this.message.length > 0) && (this.message[this.message.length-1] === '.')) {
      this.message = this.message.slice(0, this.message.length-1);
    }
    
    this.message += ' for:\n';

    var backtrace = generateBacktrace(query, 0, null, [], {indent: 0, extra: 0});

    this.message += backtrace.str;
  }
  else {
    if (this.message[this.message.length-1] !== '?') this.message += '.';
  }
};
ReqlServerError.prototype = new Error();
ReqlServerError.prototype.name = 'ReqlServerError';
ReqlServerError.prototype[IS_OPERATIONAL] = true;

module.exports.ReqlServerError = ReqlServerError;


function ReqlRuntimeError(message, query, frames) {
  this.message = this.msg = message;
  Error.captureStackTrace(this, ReqlRuntimeError);

  if ((query != null) && (frames)) {
    if ((this.message.length > 0) && (this.message[this.message.length-1] === '.')) {
      this.message = this.message.slice(0, this.message.length-1);
    }
    
    this.message += ' in:\n';

    frames = frames.b;
    if (frames) this.frames = frames.slice(0);
    //this.frames = JSON.stringify(frames, null, 2);

    var backtrace = generateBacktrace(query, 0, null, frames, {indent: 0, extra: 0});

    var queryLines = backtrace.str.split('\n');
    var carrotLines = backtrace.car.split('\n');

    for(var i=0; i<queryLines.length; i++) {
      this.message += queryLines[i]+'\n';
      if (carrotLines[i].match(/\^/)) {
        var pos = queryLines[i].match(/[^\s]/);
        if ((pos) && (pos.index)) {
          this.message += space(pos.index)+carrotLines[i].slice(pos.index)+'\n';
        }
        else {
          this.message += carrotLines[i]+'\n';
        }
      }
    }
  }
  //this.query = JSON.stringify(query, null, 2);
};
ReqlRuntimeError.prototype = new Error();
ReqlRuntimeError.prototype.name = 'ReqlRuntimeError';
ReqlRuntimeError.prototype.setName = function(type) {
  switch(type) {
    case protoErrorType.INTERNAL:
      this.name = 'ReqlInternalError';
      break;
    case protoErrorType.RESOURCE_LIMIT:
      this.name = 'ReqlResourceError';
      break;
    case protoErrorType.QUERY_LOGIC:
      this.name = 'ReqlLogicError';
      break;
    case protoErrorType.OP_FAILED:
      this.name = 'ReqlOpFailedError';
      break;
    case protoErrorType.OP_INDETERMINATE:
      this.name = 'ReqlOpIndeterminateError';
      break;
    case protoErrorType.USER:
      this.name = 'ReqlUserError';
      break;
    //default: // Do nothing
  }
}
ReqlRuntimeError.prototype[IS_OPERATIONAL] = true;

module.exports.ReqlRuntimeError = ReqlRuntimeError;


function ReqlCompileError(message, query, frames) {
  this.message = message;
  Error.captureStackTrace(this, ReqlCompileError);

  if ((query != null) && (frames)) {
    if ((this.message.length > 0) && (this.message[this.message.length-1] === '.')) {
      this.message = this.message.slice(0, this.message.length-1);
    }

    this.message += ' in:\n';

    frames = frames.b;
    if (frames) this.frames = frames.slice(0);
    //this.frames = JSON.stringify(frames, null, 2);

    var backtrace = generateBacktrace(query, 0, null, frames, {indent: 0, extra: 0});

    var queryLines = backtrace.str.split('\n');
    var carrotLines = backtrace.car.split('\n');

    for(var i=0; i<queryLines.length; i++) {
      this.message += queryLines[i]+'\n';
      if (carrotLines[i].match(/\^/)) {
        var pos = queryLines[i].match(/[^\s]/);
        if ((pos) && (pos.index)) {
          this.message += space(pos.index)+carrotLines[i].slice(pos.index)+'\n';
        }
        else {
          this.message += carrotLines[i]+'\n';
        }
      }
    }
  }
};
ReqlCompileError.prototype = new Error();
ReqlCompileError.prototype.name = 'ReqlCompileError';
ReqlCompileError.prototype[IS_OPERATIONAL] = true;

module.exports.ReqlCompileError = ReqlCompileError;


function ReqlClientError(message) {
  this.message = message;
  Error.captureStackTrace(this, ReqlClientError);
};
ReqlClientError.prototype = new Error();
ReqlClientError.prototype.name = 'ReqlClientError';
ReqlClientError.prototype[IS_OPERATIONAL] = true;

module.exports.ReqlClientError = ReqlClientError;



var _constants = {
  MONDAY: true,
  TUESDAY: true,
  WEDNESDAY: true,
  THURSDAY: true,
  FRIDAY: true,
  SATURDAY: true,
  SUNDAY: true,
  JANUARY: true,
  FEBRUARY: true,
  MARCH: true,
  APRIL: true,
  MAY: true,
  JUNE: true,
  JULY: true,
  AUGUST: true,
  SEPTEMBER: true,
  OCTOBER: true,
  NOVEMBER: true,
  DECEMBER: true,
  MINVAL: true,
  MAXVAL: true,
}
var constants = {};
for(var key in _constants) {
  constants[termTypes[key]] = true;
}


var _nonPrefix = {
  DB: true,
  DB_CREATE: true,
  DB_LIST: true,
  DB_DROP: true,
  JS: true,
  NOW: true,
  TIME: true,
  EPOCH_TIME: true,
  ISO8601: true,
  BRANCH: true,
  JAVASCRIPT: true,
  ERROR: true,
  MAKE_ARRAY: true,
  JSON: true,
  ARGS: true,
  HTTP: true,
  RANDOM: true,
  BINARY: true,
  OBJECT: true,
  CIRCLE: true,
  GEOJSON: true,
  POINT: true,
  LINE: true,
  POLYGON: true,
  UUID: true,
  DESC: true,
  ASC: true,
  RANGE: true,
  LITERAL: 'true'
}
var nonPrefix = {};
for(var key in _nonPrefix) {
  nonPrefix[termTypes[key]] = true;
}
// Constants are also in nonPrefix
for(var key in _constants) {
  nonPrefix[termTypes[key]] = true;
}


var _typeToString = {
  DB: 'db',
  DB_CREATE: 'dbCreate',
  DB_LIST: 'dbList',
  DB_DROP: 'dbDrop',
  TABLE_CREATE: 'tableCreate',
  TABLE_LIST: 'tableList',
  TABLE_DROP: 'tableDrop',
  TABLE: 'table',
  INDEX_CREATE: 'indexCreate',
  INDEX_DROP: 'indexDrop',
  INDEX_LIST: 'indexList',
  INDEX_WAIT: 'indexWait',
  INDEX_STATUS: 'indexStatus',
  INSERT: 'insert',
  UPDATE: 'update',
  REPLACE: 'replace',
  DELETE: 'delete',
  SYNC: 'sync',
  GET: 'get',
  GET_ALL: 'getAll',
  BETWEEN: 'between',
  FILTER: 'filter',
  INNER_JOIN: 'innerJoin',
  OUTER_JOIN: 'outerJoin',
  EQ_JOIN: 'eqJoin',
  ZIP: 'zip',
  MAP: 'map',
  WITH_FIELDS: 'withFields',
  CONCAT_MAP: 'concatMap',
  ORDER_BY: 'orderBy',
  DESC: 'desc',
  ASC: 'asc',
  SKIP: 'skip',
  LIMIT: 'limit',
  SLICE: 'slice',
  NTH: 'nth',
  OFFSETS_OF: 'offsetsOf',
  IS_EMPTY: 'isEmpty',
  UNION: 'union',
  SAMPLE: 'sample',
  REDUCE: 'reduce',
  COUNT: 'count',
  SUM: 'sum',
  AVG: 'avg',
  MIN: 'min',
  MAX: 'max',
  FOLD: 'fold',
  OBJECT: 'object',
  DISTINCT: 'distinct',
  GROUP: 'group',
  UNGROUP: 'ungroup',
  CONTAINS: 'contains',
  IMPLICIT_VAR: 'row',
  PLUCK: 'pluck',
  WITHOUT: 'without',
  MERGE: 'merge',
  APPEND: 'append',
  PREPEND: 'prepend',
  DIFFERENCE: 'difference',
  SET_INSERT: 'setInsert',
  SET_UNION: 'setUnion',
  SET_INTERSECTION: 'setIntersection',
  SET_DIFFERENCE: 'setDifference',
  HAS_FIELDS: 'hasFields',
  INSERT_AT: 'insertAt',
  SPLICE_AT: 'spliceAt',
  DELETE_AT: 'deleteAt',
  CHANGE_AT: 'changeAt',
  KEYS: 'keys',
  VALUES: 'values',
  MATCH: 'match',
  UPCASE: 'upcase',
  DOWNCASE: 'downcase',
  ADD: 'add',
  SUB: 'sub',
  MUL: 'mul',
  DIV: 'div',
  MOD: 'mod',
  AND: 'and',
  OR: 'or',
  EQ: 'eq',
  NE: 'ne',
  GT: 'gt',
  GE: 'ge',
  LT: 'lt',
  LE: 'le',
  NOT: 'not',
  FLOOR: 'floor',
  CEIL: 'ceil',
  ROUND: 'round',
  NOW: 'now',
  TIME: 'time',
  EPOCH_TIME: 'epochTime',
  ISO8601: 'ISO8601',
  IN_TIMEZONE: 'inTimezone',
  TIMEZONE: 'timezone',
  DURING: 'during',
  DATE: 'date',
  TIME_OF_DAY: 'timeOfDay',
  YEAR: 'year',
  MONTH: 'month',
  DAY: 'day',
  DAY_OF_WEEK: 'dayOfWeek',
  DAY_OF_YEAR: 'dayOfYear',
  HOURS: 'hours',
  MINUTES: 'minutes',
  SECONDS: 'seconds',
  TO_ISO8601: 'toISO8601',
  TO_EPOCH_TIME: 'toEpochTime',
  FUNCALL: 'do',
  BRANCH: 'branch',
  FOR_EACH: 'forEach',
  ERROR: 'error',
  DEFAULT: 'default',
  JAVASCRIPT: 'js',
  COERCE_TO: 'coerceTo',
  TYPE_OF: 'typeOf',
  INFO: 'info',
  JSON: 'json',
  ARGS: 'args',
  HTTP: 'http',
  RANDOM: 'random',
  CHANGES: 'changes',
  BINARY: 'binary',
  INDEX_RENAME: 'indexRename',
  CIRCLE: 'circle',
  DISTANCE: 'distance',
  FILL: 'fill',
  GEOJSON: 'geojson',
  TO_GEOJSON: 'toGeojson',
  GET_INTERSECTING: 'getIntersecting',
  GET_NEAREST: 'getNearest',
  INCLUDES: 'includes',
  INTERSECTS: 'intersects',
  LINE: 'line',
  POINT: 'point',
  POLYGON: 'polygon',
  POLYGON_SUB: 'polygonSub',
  UUID: 'uuid',
  RANGE: 'range',
  TO_JSON_STRING: 'toJSON',
  CONFIG: 'config',
  STATUS: 'status',
  WAIT: 'wait',
  RECONFIGURE: 'reconfigure',
  REBALANCE: 'rebalance',
  GRANT: 'grant',
  SPLIT: 'split',
  LITERAL: 'literal',
  MONDAY: 'monday',
  TUESDAY: 'tuesday',
  WEDNESDAY: 'wednesday',
  THURSDAY: 'thursday',
  FRIDAY: 'friday',
  SATURDAY: 'saturday',
  SUNDAY: 'sunday',
  JANUARY: 'january',
  FEBRUARY: 'february',
  MARCH: 'march',
  APRIL: 'april',
  MAY: 'may',
  JUNE: 'june',
  JULY: 'july',
  AUGUST: 'august',
  SEPTEMBER: 'september',
  OCTOBER: 'october',
  NOVEMBER: 'november',
  DECEMBER: 'december' ,
  MINVAL: 'minval',
  MAXVAL: 'maxval',
}
var typeToString = {};
for(var key in _typeToString) {
  typeToString[termTypes[key]] = _typeToString[key];
}

var _noPrefixOptargs = {
  ISO8601: true,
}
var noPrefixOptargs = {};
for(var key in _noPrefixOptargs) {
  noPrefixOptargs[termTypes[key]] = true;
}

var _specialType = {
  DATUM: function(term, index, father, frames, options, optarg) {
    optarg = optarg || false;

    var underline = Array.isArray(frames) && (frames.length === 0);
    var currentFrame, backtrace;
    if (Array.isArray(frames)) currentFrame = frames.shift();

    var result = {
      str: '',
      car: ''
    }

    if ((helper.isPlainObject(term)) && (term.$reql_type$ === 'BINARY')) {
      carify(result, 'r.binary(<Buffer>)', underline);
      return result;
    }

    if ((index === 0) && ((father == null) || (!nonPrefix[father[0]]))) carify(result, 'r.expr(', underline)

    if (typeof term === 'string' ) {
      carify(result, '"'+term+'"', underline);
    }
    else if (helper.isPlainObject(term)) {
      var totalKeys = Object.keys(term).length;
      if (totalKeys === 0) {
        carify(result, '{}', underline);
      }
      else {
        carify(result, '{\n', underline);
        var countKeys = 0;
        var extraToRemove = options.extra;
        options.indent += INDENT+options.extra;
        options.extra = 0;
        for(var key in term) {
          countKeys++;
          //if (!((father) && (Array.isArray(father[2])) && (Object.keys(father[2]).length > 0))) options.extra = 0;

          if (optarg) {
            carify(result, space(options.indent)+camelCase(key)+': ', underline);
          }
          else {
            carify(result, space(options.indent)+key+': ', underline);
          }
          if ((currentFrame != null) && (currentFrame === key)) {
            backtrace = generateBacktrace(term[key], i, term, frames, options);
          }
          else {
            backtrace = generateBacktrace(term[key], i, term, null, options);
          }
          result.str += backtrace.str;
          result.car += backtrace.car;
          
          if (countKeys !== totalKeys) { 
            carify(result, ',\n', underline);
          }

        }
        options.indent -= INDENT+extraToRemove;
        carify(result, '\n'+space(options.indent+extraToRemove)+'}', underline);
      }
    }
    else if (Array.isArray(term)) {
      carify(result, '[', underline);
      for(var i=0; i<term.length; i++) {
        if ((currentFrame != null) && (currentFrame === i)) {
          backtrace = generateBacktrace(term[i], i, term, frames, options);
        }
        else {
          backtrace = generateBacktrace(term[i], i, term, null, options);
        }
        result.str += backtrace.str;
        result.car += backtrace.car;
      }
      carify(result, ']', underline);
    }
    else {
      carify(result, ''+term, underline);
    }

    if ((index === 0) && ((father == null) || (!nonPrefix[father[0]]))) carify(result, ')', underline);

    if (underline) result.car = result.str.replace(/./g, '^');

    return result;
  },
  TABLE: function(term, index, father, frames, options) {
    var result = {
      str: '',
      car: ''
    }
    var backtrace, underline, currentFrame;


    if ((term.length === 1) || (term[1].length === 0) || (term[1][0][0] !== termTypes.DB)) {
      var underline = Array.isArray(frames) && (frames.length === 0);
      if (Array.isArray(frames)) currentFrame = frames.shift();

      carify(result, 'r.'+typeToString[term[0]]+'(', underline);
      if (Array.isArray(term[1])) {
        for(var i=0; i<term[1].length; i++) {
          if (i !==0) result.str += ', ';


          if ((currentFrame != null) && (currentFrame === 1)) {
            // +1 for index because it's like if there was a r.db(...) before .table(...)
            backtrace = generateBacktrace(term[1][i], i+1, term, frames, options)
          }
          else {
            backtrace = generateBacktrace(term[1][i], i+1, term, null, options)
          }
          result.str += backtrace.str;
          result.car += backtrace.car
        }
      }

      backtrace = makeOptargs(term, i, term, frames, options, currentFrame)
      result.str += backtrace.str;
      result.car += backtrace.car;

      carify(result, ')', underline);

      if (underline) result.car = result.str.replace(/./g, '^');
    }
    else {
      backtrace = generateNormalBacktrace(term, index, father, frames, options);
      result.str = backtrace.str;
      result.car = backtrace.car;
    }

    return result;
  },
  GET_FIELD: function(term, index, father, frames, options) {
    var result = {
      str: '',
      car: ''
    }
    var backtrace, underline, currentFrame;

    var underline = Array.isArray(frames) && (frames.length === 0);
    if (Array.isArray(frames)) currentFrame = frames.shift();

    if ((currentFrame != null) && (currentFrame === 0)) {
      backtrace = generateBacktrace(term[1][0], 0, term, frames, options)
    }
    else {
      backtrace = generateBacktrace(term[1][0], 0, term, null, options)
    }
    result.str = backtrace.str;
    result.car = backtrace.car;

    carify(result, '(', underline);

    if ((currentFrame != null) && (currentFrame === 1)) {
      backtrace = generateBacktrace(term[1][1], 1, term, frames, options)
    }
    else {
      backtrace = generateBacktrace(term[1][1], 1, term, null, options)
    }
    result.str += backtrace.str;
    result.car += backtrace.car;

    carify(result, ')', underline);

    if (underline) result.car = result.str.replace(/./g, '^');

    return result;
  },
  MAKE_ARRAY: function(term, index, father, frames, options) {
    var result = {
      str: '',
      car: ''
    };
    var backtrace, underline, currentFrame;

    var underline = Array.isArray(frames) && (frames.length === 0);
    if (Array.isArray(frames)) currentFrame = frames.shift();

    if ((index === 0) && ((father == null) || (!nonPrefix[father[0]]))) carify(result, 'r.expr(', underline)

    if (!((options) && (options.noBracket))) {
      carify(result, '[', underline);
    }
    for(var i=0; i<term[1].length; i++) {
      if (i !== 0) {
        carify(result, ', ', underline);
      }

      if ((currentFrame != null) && (currentFrame  === i)) {
        backtrace = generateBacktrace(term[1][i], i, term, frames, options);
      }
      else {
        backtrace = generateBacktrace(term[1][i], i, term, null, options);
      }
      result.str += backtrace.str;
      result.car += backtrace.car;

    }

    if (!((options) && (options.noBracket))) {
      carify(result, ']', underline);
    }

    if ((index === 0) && ((father == null) || (!nonPrefix[father[0]]))) {
      carify(result, ')', underline);
    }

    if (underline) result.car = result.str.replace(/./g, '^');

    return result;
  },
  FUNC: function(term, index, father, frames, options) {
    var result = {
      str: '',
      car: ''
    };
    var backtrace, underline, currentFrame;

    var underline = Array.isArray(frames) && (frames.length === 0);
    if (Array.isArray(frames)) currentFrame = frames.shift();

    if ((term[1][0][1].length === 1) && (helper.hasImplicit(term[1][1]))) {
      if ((currentFrame != null) && (currentFrame === 1)) {
        backtrace = generateBacktrace(term[1][1], 1, term, frames, options);
      }
      else {
        backtrace = generateBacktrace(term[1][1], 1, term, null, options);
      }
      result.str = backtrace.str;
      result.car = backtrace.car;
    }
    else {
      carify(result, 'function(', underline);

      for(var i=0; i<term[1][0][1].length; i++) {
        if (i !== 0) {
          carify(result, ', ', underline);
        }
        carify(result, 'var_'+term[1][0][1][i], underline);
      }

      options.indent += INDENT+options.extra;
      var extraToRemove = options.extra;
      options.extra = 0;
      //if (!((Array.isArray(term[2])) && (term[2].length > 0))) options.extra = 0;

      carify(result, ') {\n'+space(options.indent)+'return ', underline);

      if ((currentFrame != null) && (currentFrame === 1)) {
        backtrace = generateBacktrace(term[1][1], 1, term, frames, options);
      }
      else {
        backtrace = generateBacktrace(term[1][1], 1, term, null, options);
      }

      result.str += backtrace.str;
      result.car += backtrace.car;

      options.indent -= INDENT+extraToRemove;
      options.extra = extraToRemove;

      carify(result, '\n'+space(options.indent+extraToRemove)+'}', underline);

    }

    if (underline) result.car = result.str.replace(/./g, '^');

    return result;
  },
  VAR: function(term, index, father, frames, options) {
    var result = {
      str: '',
      car: ''
    }
    var backtrace, underline, currentFrame;

    var underline = Array.isArray(frames) && (frames.length === 0);
    if (Array.isArray(frames)) currentFrame = frames.shift();

    carify(result, 'var_'+term[1][0], underline);

    if (underline) result.car = result.str.replace(/./g, '^');
    return result;
  },
  FUNCALL: function(term, index, father, frames, options) {
    // The syntax is args[1].do(args[0])
    var result = {
      str: '',
      car: ''
    };
    var backtrace, underline, currentFrame;

    var underline = Array.isArray(frames) && (frames.length === 0);
    if (Array.isArray(frames)) currentFrame = frames.shift();

    if (term[1].length === 2) {
      if ((currentFrame != null) && (currentFrame === 1)) {
        backtrace = generateBacktrace(term[1][1], 0, term, frames, options);
      }
      else {
        backtrace = generateBacktrace(term[1][1], 0, term, null, options);
      }
      result.str = backtrace.str;
      result.car = backtrace.car;

      carify(result, '.do(', underline);
    }
    else {
      carify(result, 'r.do(', underline);

      for(var i=1; i<term[1].length; i++) {
        if ((currentFrame != null) && (currentFrame === i)) {
          backtrace = generateBacktrace(term[1][i], i, term, frames, options);
        }
        else {
          backtrace = generateBacktrace(term[1][i], i, term, null, options);
        }
        result.str += backtrace.str;
        result.car += backtrace.car;

        if (i !== term[1].length) {
          carify(result, ', ' , underline);
        }
      }
    }

    if ((currentFrame != null) && (currentFrame === 0)) {
      backtrace = generateBacktrace(term[1][0], 0, term, frames, options);
    }
    else {
      backtrace = generateBacktrace(term[1][0], 0, term, null, options);
    }
    result.str += backtrace.str;
    result.car += backtrace.car;

    carify(result, ')', underline);

    if (underline) result.car = result.str.replace(/./g, '^');

    return result;
  },
  IMPLICIT_VAR: function(term, index, father, frames, options) {
    var result = {
      str: '',
      car: ''
    }
    var backtrace, underline, currentFrame;

    var underline = Array.isArray(frames) && (frames.length === 0);
    if (Array.isArray(frames)) currentFrame = frames.shift();

    carify(result, 'r.row', underline);

    if (underline) result.car = result.str.replace(/./g, '^');
    return result;
  },
  WAIT: function(term, index, father, frames, options) {
    var result = {
      str: '',
      car: ''
    }
    var backtrace, underline, currentFrame;

    if (term.length === 1 || term[1].length === 0) {
      backtrace = generateWithoutPrefixBacktrace(term, index, father, frames, options);
      result.str = backtrace.str;
      result.car = backtrace.car;
    }
    else {
      backtrace = generateNormalBacktrace(term, index, father, frames, options);
      result.str = backtrace.str;
      result.car = backtrace.car;
    }
    return result;
  },
  MAP: function(term, index, father, frames, options) {
    var result = {
      str: '',
      car: ''
    }
    var backtrace, underline, currentFrame;

    if (term.length > 1 && term[1].length > 2) {
      backtrace = generateWithoutPrefixBacktrace(term, index, father, frames, options);
      result.str = backtrace.str;
      result.car = backtrace.car;
    }
    else {
      backtrace = generateNormalBacktrace(term, index, father, frames, options);
      result.str = backtrace.str;
      result.car = backtrace.car;
    }
    return result;
  },
}
_specialType.TABLE_CREATE = _specialType.TABLE;
_specialType.TABLE_DROP = _specialType.TABLE;
_specialType.TABLE_LIST = _specialType.TABLE;
_specialType.RECONFIGURE = _specialType.WAIT;
_specialType.REBALANCE = _specialType.WAIT;
_specialType.BRACKET = _specialType.GET_FIELD;

var specialType = {};
for(var key in _specialType) {
  specialType[termTypes[key]] = _specialType[key];
}


function space(n) {
  return new Array(n+1).join(' ');
}
function carify(result, str, underline) {
  if (underline === true) {
    result.str += str;
    result.car += str.replace(/[^\n]/g, '^');
  }
  else {
    result.str += str;
    result.car += str.replace(/[^\n]/g, ' ');
  }
}
function makeOptargs(term, index, father, frames, options, currentFrame) {
  var result = {
    str: '',
    car: ''
  }
  var backtrace, currentFrame, underline;

  if (helper.isPlainObject(term[2])) {
    //if ((currentFrame != null) && (frames != null)) frames.unshift(currentFrame);

    //underline = Array.isArray(frames) && (frames.length === 0);
    var underline = false;
    //if (Array.isArray(frames)) currentFrame = frames.shift();

    // This works before there is no prefix term than can be called with no normal argument but with an optarg
    if (Array.isArray(term[1]) && (term[1].length > 1)) {
      carify(result, ', ' , underline);
    }
    else if (Array.isArray(term[1]) && (term[1].length > 0) && (noPrefixOptargs[term[0]])) {
      carify(result, ', ' , underline);
    }

    backtrace = specialType[termTypes.DATUM](term[2], index, term[2], frames, options, true);

    result.str += backtrace.str;
    result.car += backtrace.car;

    if (underline) result.car = result.str.replace(/./g, '^');
  }

  return result;
}
function generateNormalBacktrace(term, index, father, frames, options) {
  var result = {
    str: '',
    car: ''
  }
  var backtrace, currentFrame, underline;

  //if (term[1]) {
    var underline = Array.isArray(frames) && (frames.length === 0);
    if (Array.isArray(frames)) currentFrame = frames.shift();

    if ((currentFrame != null) && (currentFrame === 0)) {
      backtrace = generateBacktrace(term[1][0], 0, term, frames, options);
    }
    else {
      backtrace = generateBacktrace(term[1][0], 0, term, null, options);
    }
    result.str = backtrace.str;
    result.car = backtrace.car;

    var lines = backtrace.str.split('\n');
    var line = lines[lines.length-1];
    var pos = line.match(/[^\s]/);
    pos = (pos) ? pos.index : 0;

    if (line.length-pos > LIMIT) {
      if (options.extra === 0) options.extra += INDENT;
      carify(result, '\n'+space(options.indent+options.extra) , underline);
    }

    carify(result, '.'+typeToString[term[0]]+'(' , underline);
    options.indent += options.extra;
    var extraToRemove = options.extra;
    options.extra = 0;

    for(var i=1; i<term[1].length; i++) {
      if (i !== 1) {
        carify(result, ', ' , underline);
      }
      if ((currentFrame != null) && (currentFrame === i)) {
        backtrace = generateBacktrace(term[1][i], i, term, frames, options);
      }
      else {
        backtrace = generateBacktrace(term[1][i], i, term, null, options);
      }
      result.str += backtrace.str;
      result.car += backtrace.car;
    }

    backtrace = makeOptargs(term, i, term, frames, options, currentFrame)
    result.str += backtrace.str;
    result.car += backtrace.car;

    options.indent -= extraToRemove;
    options.extra = extraToRemove;

    carify(result, ')' , underline);

    if (underline) result.car = result.str.replace(/./g, '^');
  /*
  }
  else {
    throw new Error('The driver should never enter this condition. Please report the query to the developers -- End 1 --\n'+JSON.stringify(term, null, 2))
  }
  */


  return result;
}

function generateWithoutPrefixBacktrace(term, index, father, frames, options) {
  var result = {
    str: '',
    car: ''
  }

  var backtrace, currentFrame, underline;

  var underline = Array.isArray(frames) && (frames.length === 0);
  if (Array.isArray(frames)) currentFrame = frames.shift();

  if (constants[term[0]]) {
    carify(result, 'r.'+typeToString[term[0]], underline); 
    return result;
  }

  carify(result, 'r.'+typeToString[term[0]]+'(', underline); 

  if (Array.isArray(term[1])) {
    for(var i=0; i<term[1].length; i++) {
      if (i !== 0) carify(result, ', ', underline)

      if ((currentFrame != null) && (currentFrame === i)) {
        backtrace = generateBacktrace(term[1][i], i, term, frames, options)
      }
      else {
        backtrace = generateBacktrace(term[1][i], i, term, null, options)
      }
      result.str += backtrace.str;
      result.car += backtrace.car;
    }
  }

  backtrace = makeOptargs(term, i, term, frames, options, currentFrame)
  result.str += backtrace.str;
  result.car += backtrace.car;

  carify(result, ')', underline);

  if (underline) result.car = result.str.replace(/./g, '^');

  return result;
}

function generateBacktrace(term, index, father, frames, options) {
  var result = {
    str: '',
    car: ''
  }
  var backtrace, currentFrame, underline;

  // frames = null -> do not underline
  // frames = [] -> underline

  if (Array.isArray(term)) {
    if (term.length === 0) {
      var underline = Array.isArray(frames) && (frames.length === 0);
      carify(result, 'undefined', underline);
    }
    else if (specialType[term[0]]) {
      backtrace = specialType[term[0]](term, index, father, frames, options);
      result.str = backtrace.str;
      result.car = backtrace.car;
    }
    else if (nonPrefix[term[0]]) {
      backtrace = generateWithoutPrefixBacktrace(term, index, father, frames, options);
      result.str = backtrace.str;
      result.car = backtrace.car;
    }
    else { // normal type -- this.<method>( this.args... )
      backtrace = generateNormalBacktrace(term, index, father, frames, options);
      result.str = backtrace.str;
      result.car = backtrace.car;
    }
  }
  else if (term !== undefined) {
    backtrace = specialType[termTypes.DATUM](term, index, father, frames, options);

    result.str = backtrace.str;
    result.car = backtrace.car;
  }
  else {
    //throw new Error('The driver should never enter this condition. Please report the query to the developers -- End 2')
  }
  return result;
}

function camelCase(str) {
  return str.replace(/_(.)/g, function (m, char) { return char.toUpperCase() });
}
module.exports.generateBacktrace = generateBacktrace;

module.exports.setOperational = function(error) {
  error[IS_OPERATIONAL] = true;
  return error;
};



/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/helper.js":
/*!***************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/helper.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var protodef = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/protodef.js */ "../node_modules/rethinkdbdash/lib/protodef.js");
var termTypes = protodef.Term.TermType;
var datumTypes = protodef.Datum.DatumType;
var net = __webpack_require__(/*! net */ "net");


function createLogger(poolMaster, silent) {
  return function(message) {
    if (silent !== true) {
      console.error(message);
    }
    poolMaster.emit('log', message);
  }
}
module.exports.createLogger = createLogger;

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
module.exports.isPlainObject = isPlainObject;

function toArray(args) {
  return Array.prototype.slice.call(args);
}
module.exports.toArray = toArray;

function hasImplicit(arg) {
  if (Array.isArray(arg)) {
    if (arg[0] === termTypes.IMPLICIT_VAR) return true;

    if (Array.isArray(arg[1])) {
      for(var i=0; i<arg[1].length; i++) {
        if (hasImplicit(arg[1][i])) return true;
      }
    }
    if (isPlainObject(arg[2])) {
      for(var key in arg[2]) {
        if (hasImplicit(arg[2][key])) return true;
      }
    }
  }
  else if (isPlainObject(arg)) {
    for(var key in arg) {
      if (hasImplicit(arg[key])) return true;
    }
  }
  return false;
}
module.exports.hasImplicit = hasImplicit;

function loopKeys(obj, fn) {
  var keys = Object.keys(obj);
  var result;
  var keysLength = keys.length;
  for(var i=0; i<keysLength; i++) {
    result = fn(obj, keys[i]);
    if (result === false) return;
  }
}
module.exports.loopKeys = loopKeys;

function convertPseudotype(obj, options) {
  var reqlType = obj['$reql_type$'];
  if (reqlType === 'TIME' && options['timeFormat'] !== 'raw') {
    return new Date(obj['epoch_time'] * 1000);
  }
  else if (reqlType === 'GROUPED_DATA' && options['groupFormat'] !== 'raw') {
    var result = [];
    for (var i = 0, len = obj['data'].length, ref; i < len; i++) {
      ref = obj.data[i];
      result.push({
        group: ref[0],
        reduction: ref[1]
      });
    }
    return result;
  }
  else if (reqlType === 'BINARY' && options['binaryFormat'] !== 'raw') {
    return new Buffer(obj['data'], 'base64');
  }
  return obj;
}
function recursivelyConvertPseudotype(obj, options) {
  var i, value, len, key;
  if (Array.isArray(obj)) {
    for (i = 0, len = obj.length; i < len; i++) {
      value = obj[i];
      obj[i] = recursivelyConvertPseudotype(value, options);
    }
  }
  else if (obj && typeof obj === 'object') {
    for (key in obj) {
      value = obj[key];
      obj[key] = recursivelyConvertPseudotype(value, options);
    }
    obj = convertPseudotype(obj, options);
  }
  return obj;
}
function makeAtom(response, options) {
  options = options || {};
  return recursivelyConvertPseudotype(response.r[0], options);
}
module.exports.makeAtom = makeAtom;

function makeSequence(response, options) {
  options = options || {};
  return recursivelyConvertPseudotype(response.r, options);
}

module.exports.makeSequence = makeSequence;

function changeProto(object, other) {
  object.__proto__ = other.__proto__;
}
module.exports.changeProto = changeProto;

// Try to extract the most global address
// Note: Mutate the input
function getCanonicalAddress(addresses) {
  // We suppose that the addresses are all valid, and therefore use loose regex
  for(var i=0; i<addresses.length; i++) {
    var addresse = addresses[i];
    if ((/^127(\.\d{1,3}){3}$/.test(addresse.host)) || (/0?:?0?:?0?:?0?:?0?:?0?:0?:1/.test(addresse.host))) {
      addresse.value = 0;
    }
    else if ((net.isIPv6(addresse.host)) && (/^[fF]|[eE]80:.*\:.*\:/.test(addresse.host))) {
      addresse.value = 1;
    }
    else if (/^169\.254\.\d{1,3}\.\d{1,3}$/.test(addresse.host)) {
      addresse.value = 2;
    }
    else if (/^192\.168\.\d{1,3}\.\d{1,3}$/.test(addresse.host)) {
      addresse.value = 3;
    }
    else if (/^172\.(1\d|2\d|30|31)\.\d{1,3}\.\d{1,3}$/.test(addresse.host)) {
      addresse.value = 4;
    }
    else if (/^10(\.\d{1,3}){3}$/.test(addresse.host)) {
      addresse.value = 5;
    }
    else if ((net.isIPv6(addresse.host)) && (/^[fF]|[cCdD].*\:.*\:/.test('addresse.host'))) {
      addresse.value = 6;
    }
    else {
      addresse.value = 7;
    }
  }
  var result = addresses[0];
  var max = addresses[0].value;
  for(var i=0; i<addresses.length; i++) {
    if (addresses[i].value > max) {
      result = addresses[i];
      max = addresses[i].value;
    }
  }
  return result;
}
module.exports.getCanonicalAddress = getCanonicalAddress;


module.exports.localhostAliases = {
  'localhost': true,
  '127.0.0.1': true,
  '::1': true
}

module.exports.tryCatch = function tryCatch(toTry, handleError) {
  try{
  toTry()
  }
  catch(err) {
  handleError(err)
  }
}

function splitCommaEqual(message) {
  var result = {};
  var messageParts = message.split(',');
  for(var i=0; i<messageParts.length; i++) {
    var equalPosition = messageParts[i].indexOf("=")
    result[messageParts[i].slice(0, equalPosition)] = messageParts[i].slice(equalPosition+1);
  }
  return result;
}
module.exports.splitCommaEqual = splitCommaEqual;

function xorBuffer(a, b) {
  var result = [];
  var len = Math.min(a.length, b.length)
  for(var i=0; i<len; i++) {
    result.push(a[i] ^ b[i]);
  }
  return new Buffer(result);
}
module.exports.xorBuffer = xorBuffer;

function compareDigest(a, b) {
  var left = undefined
  var right = b
  var result = undefined
  if (a.length === b.length) {
    left = a
    result = 0
  } else {
    left = b
    result = 1
  }
  var len = Math.min(a.length, b.length);
  for(var i=0; i<len; i++) {
    result |= a[i] ^b[i]
  }
  return result === 0
}
module.exports.compareDigest = compareDigest;


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/index.js":
/*!**************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Promise = __webpack_require__(/*! bluebird */ "bluebird");

var helper = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/helper.js */ "../node_modules/rethinkdbdash/lib/helper.js");
var Connection = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/connection.js */ "../node_modules/rethinkdbdash/lib/connection.js");
var Term = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/term.js */ "../node_modules/rethinkdbdash/lib/term.js");
var Error = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/error.js */ "../node_modules/rethinkdbdash/lib/error.js");
var PoolMaster = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/pool_master.js */ "../node_modules/rethinkdbdash/lib/pool_master.js");
var termTypes = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/protodef.js */ "../node_modules/rethinkdbdash/lib/protodef.js").Term.TermType;

function r() {
  var self = this;
  var _r = function(x) {
    return new Term(_r).expr(x);
  }
  helper.changeProto(_r, self);

  Term.prototype._setNestingLevel(r.prototype.nestingLevel);
  Term.prototype._setArrayLimit(r.prototype.arrayLimit);

  _r.row = new Term(_r).row();

  _r.monday = new Term(_r).monday();
  _r.tuesday = new Term(_r).tuesday();
  _r.wednesday = new Term(_r).wednesday();
  _r.thursday = new Term(_r).thursday();
  _r.friday = new Term(_r).friday();
  _r.saturday = new Term(_r).saturday();
  _r.sunday =  new Term(_r).sunday();

  _r.january = new Term(_r).january();
  _r.february = new Term(_r).february();
  _r.march = new Term(_r).march();
  _r.april = new Term(_r).april();
  _r.may = new Term(_r).may();
  _r.june = new Term(_r).june();
  _r.july = new Term(_r).july();
  _r.august = new Term(_r).august();
  _r.september = new Term(_r).september();
  _r.october = new Term(_r).october();
  _r.november = new Term(_r).november();
  _r.december = new Term(_r).december();
  _r.minval = new Term(_r).minval();
  _r.maxval = new Term(_r).maxval();

  _r.nextVarId = 1;
  _r._Term = Term;
  return _r;
};
r.prototype._host = 'localhost';
r.prototype._port = 28015;
r.prototype._authKey = '';
r.prototype._user = 'admin';
r.prototype._password = '';
r.prototype._timeoutConnect = 20; // seconds
r.prototype._pingInterval = -1; // seconds

r.prototype._nestingLevel = 100;
r.prototype._arrayLimit = 100000;
r.prototype._db = 'test';
r.prototype._useOutdated = false;
r.prototype._timeFormat = 'native';
r.prototype._profile = false;


r.prototype.setNestingLevel = function(nestingLevel) {
  if (typeof nestingLevel !== 'number') throw new Error.ReqlDriverError('The first argument of `setNestingLevel` must be a number.')
  this.nestingLevel = nestingLevel;
}
r.prototype.setArrayLimit = function(arrayLimit) {
  if (typeof arrayLimit !== 'number') throw new Error.ReqlDriverError('The first argument of `setArrayLimit` must be a number.')
  this.arrayLimit = arrayLimit;
}

r.prototype.connect = function(options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  var self = this;

  var p = new Promise(function(resolve, reject) {
    new Connection(self, options, resolve, reject);
  }).nodeify(callback);
  return p;
};

r.prototype.createPools = function(options) {
  this._poolMaster = new PoolMaster(this, options);
  return this;
}

r.prototype.getPoolMaster = function() {
  return this._poolMaster;
}
r.prototype.getPool = function(i) {
  if (i === undefined) {
    if (this.getPoolMaster().getPools().length === 1) {
      return this.getPoolMaster().getPools()[0];
    }
    else {
      throw new Error('You have multiple pools. Use `getPool(index)` or `getPools()`');
    }
  }
  else {
    return this.getPoolMaster().getPools()[i];
  }
}

r.prototype.expr = function(expression, nestingLevel) {
  if (Term.prototype._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arityRange(_args, 1, 2, 'expr', this);
  }
  var _nestingLevel = nestingLevel || this.nestingLevel;
  return new Term(this).expr(expression, _nestingLevel);
};
r.prototype.db = function(db) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.db', this);
  }
  return new Term(this).db(db);
};
r.prototype.table = function(table, options) {
  if (Term.prototype._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arityRange(_args, 1, 2, 'table', this);
  }
  return new Term(this).table(table, options);
};
r.prototype.js = function(jsString, options) {
  if (Term.prototype._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arityRange(_args, 1, 2, 'r.js', this);
  }
  return new Term(this).js(jsString, options);
};
r.prototype.tableCreate = function(table, options) {
  if (Term.prototype._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arityRange(_args, 1, 2, 'r.tableCreate', this);
  }
  return new Term(this).tableCreate(table, options);
};
r.prototype.tableDrop = function(db) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.tableDrop', this);
  }
  return new Term(this).tableDrop(db);
};
r.prototype.tableList = function() {
  if (Term.prototype._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 0, 'r.tableList', this);
  }
  return new Term(this).tableList();
};
r.prototype.dbCreate = function(db) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'dbCreate', this);
  }
  return new Term(this).dbCreate(db);
};
r.prototype.dbDrop = function(db) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'dbDrop', this);
  }
  return new Term(this).dbDrop(db);
};
r.prototype.dbList = function() {
  if (Term.prototype._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 0, 'dbList', this);
  }
  return new Term(this).dbList();
};
r.prototype.literal = function(obj) {
  if (Term.prototype._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arityRange(_args, 1, 2, 'r.literal', this);
  }
  if (obj === undefined) {
    return new Term(this).literal();
  }
  else {
    return new Term(this).literal(obj);
  }
};
r.prototype.desc = function(field) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.desc', this);
  }
  return new Term(this).desc(field);
};
r.prototype.asc = function(field) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.asc', this);
  }
  return new Term(this).asc(field);
};
r.prototype.union = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}

  var term = new Term(this).expr(_args[0]);
  return term.union.apply(term, _args.slice(1));
};
r.prototype.add = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.add', this);

  var term = new Term(this).expr(_args[0]);
  return term.add.apply(term, _args.slice(1));
};
r.prototype.sub = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.sub', this);

  var term = new Term(this).expr(_args[0]);
  return term.sub.apply(term, _args.slice(1));
};
r.prototype.div = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.div', this);

  var term = new Term(this).expr(_args[0]);
  return term.div.apply(term, _args.slice(1));
};
r.prototype.mul = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.mul', this);

  var term = new Term(this).expr(_args[0]);
  return term.mul.apply(term, _args.slice(1));
};
r.prototype.mod = function(a, b) {
  if (Term.prototype._fastArity(arguments.length, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 2, 'r.mod', this);
  }

  return new Term(this).expr(a).mod(b);
};
r.prototype.and = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}

  var term = new Term(this);
  return term.and.apply(term, _args);
};
r.prototype.or = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}

  var term = new Term(this);
  return term.or.apply(term, _args);
};
r.prototype.eq = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.eq', this);

  var term = new Term(this).expr(_args[0]);
  return term.eq.apply(term, _args.slice(1));
};
r.prototype.ne = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.ne', this);

  var term = new Term(this).expr(_args[0]);
  return term.ne.apply(term, _args.slice(1));
};
r.prototype.gt = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.gt', this);

  var term = new Term(this).expr(_args[0]);
  return term.gt.apply(term, _args.slice(1));
};
r.prototype.ge = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.ge', this);

  var term = new Term(this).expr(_args[0]);
  return term.ge.apply(term, _args.slice(1));
};
r.prototype.lt = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.lt', this);

  var term = new Term(this).expr(_args[0]);
  return term.lt.apply(term, _args.slice(1));
};
r.prototype.le = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.le', this);

  var term = new Term(this).expr(_args[0]);
  return term.le.apply(term, _args.slice(1));
};
r.prototype.not = function(bool) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.not', this);
  }
  return new Term(this).expr(bool).not();
}
r.prototype.floor = function(num) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.floor', this);
  }
  return new Term(this).expr(num).floor();
}
r.prototype.ceil = function(num) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.ceil', this);
  }
  return new Term(this).expr(num).ceil();
}
r.prototype.round = function(num) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.round', this);
  }
  return new Term(this).expr(num).round();
}


r.prototype.now = function() {
  if (Term.prototype._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 0, 'now', this);
  }
  return new Term(this).now();
}
r.prototype.time = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  var term = new Term(this);
  return term.time.apply(term, _args);
}
r.prototype.epochTime = function(epochTime) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.epochTime', this);
  }
  return new Term(this).epochTime(epochTime);
}
r.prototype.ISO8601 = function(isoTime, options) {
  if (Term.prototype._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arityRange(_args, 1, 2, 'r.ISO8601', this);
  }
  return new Term(this).ISO8601(isoTime, options);
}
r.prototype.branch = function(predicate, trueBranch, falseBranch) {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 3, Infinity, 'r.branch', this);

  var term = new Term(this).expr(predicate);
  return term.branch.apply(term, _args.slice(1));
}
r.prototype.error = function(errorStr) {
  if (Term.prototype._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arityRange(_args, 0, 1, 'r.error', this);
  }
  var term = new Term(this);
  term._query.push(termTypes.ERROR);
  if (errorStr !== undefined) {
    term._query.push([new Term(this).expr(errorStr)._query]);
  }
  return term;

}
r.prototype.json = function(json) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.json', this);
  }
  return new Term(this).json(json);
}

r.prototype.object = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  var term = new Term(this);
  return term.object.apply(term, _args);
}
r.prototype.args = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  var term = new Term(this);
  return term.args.apply(term, _args);
}
r.prototype.random = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  var term = new Term(this);
  return term.random.apply(term, _args);
}
r.prototype.http = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  var term = new Term(this);
  return term.http.apply(term, _args);
}
r.prototype.do = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 1, Infinity, 'r.do', this);

  var term = new Term(this).expr(_args[0]);
  return term.do.apply(term, _args.slice(1));
}
r.prototype.binary = function(bin) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.binary', this);
  }
  var term = new Term(this);
  return term.binary(bin);
}
r.prototype.uuid = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 0, 1, 'r.uuid', this);
  var term = new Term(this);
  return term.uuid(_args[0]);
}

r.prototype.line = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, Infinity, 'r.line', this);

  var term = new Term(this);
  return term.line.apply(term, _args);
}
r.prototype.point = function(longitude, latitude) {
  if (Term.prototype._fastArity(arguments.length, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 2, 'r.point', this);
  }
  return new Term(this).point(longitude, latitude);
}
r.prototype.polygon = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 3, Infinity, 'r.polygon', this);

  var term = new Term(this);
  return term.polygon.apply(term, _args);
}
r.prototype.circle = function(center, radius, options) {
  if (Term.prototype._fastArityRange(arguments.length, 2, 3) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arityRange(_args, 2, 3, 'r.circle', this);
  }
  var term = new Term(this);
  if (options !== undefined) {
    return term.circle(center, radius, options);
  }
  else {
    return term.circle(center, radius);
  }
}
r.prototype.geojson = function(value) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.geojson', this);
  }
  var term = new Term(this);
  return term.geojson(value);
}
r.prototype.distance = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 2, 3, 'r.add', this);

  var term = new Term(this).expr(_args[0]);
  return term.distance.apply(term, _args.slice(1));
};

r.prototype.range = function(start, end) {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 1, 2, 'r.range', this);

  var term = new Term(this);
  if (end !== undefined) {
    return term.range(start, end);
  }
  else {
    return term.range(start);
  }
}
r.prototype.wait = function() {
  // `wait` on the top level has been removed in 2.3.
  throw new Error.ReqlDriverError('`wait` can only be called on a table or a database since 2.3');
}
r.prototype.reconfigure = function(config) {
  // `reconfigure` on the top level has been removed in 2.3.
  throw new Error.ReqlDriverError('`reconfigure` can only be called on a table or a database since 2.3');
}
r.prototype.rebalance = function(config) {
  // `rebalance` on the top level has been removed in 2.3.
  throw new Error.ReqlDriverError('`rebalance` can only be called on a table or a database since 2.3');
}
r.prototype.map = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 1, Infinity, 'r.map', this);

  var term = new Term(this);
  return term.map.apply(term, _args);
};
r.prototype.typeOf = function(value) {
  if (Term.prototype._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    Term.prototype._arity(_args, 1, 'r.typeOf', this);
  }
  var term = new Term(this);
  return term.expr(value).typeOf();
}
r.prototype.min = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 1, Infinity, 'r.min', this);
  var term = new Term(this).expr(_args[0]);
  return term.min.apply(term, _args.slice(1));
}
r.prototype.max = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 1, Infinity, 'r.max', this);
  var term = new Term(this).expr(_args[0]);
  return term.max.apply(term, _args.slice(1));
}
r.prototype.sum = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 1, Infinity, 'r.sum', this);
  var term = new Term(this).expr(_args[0]);
  return term.sum.apply(term, _args.slice(1));
}
r.prototype.avg = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 1, Infinity, 'r.avg', this);
  var term = new Term(this).expr(_args[0]);
  return term.avg.apply(term, _args.slice(1));
}
r.prototype.distinct = function(value) {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  Term.prototype._arityRange(_args, 1, Infinity, 'r.distinct', this);
  var term = new Term(this).expr(_args[0]);
  return term.distinct.apply(term, _args.slice(1));
}


r.prototype.Error = Error;


function main(options) {
  var _r = new r();

  if (!helper.isPlainObject(options)) options = {};
  if (options.pool !== false) _r.createPools(options);
  _r._options = {};
  if (options.cursor === true) _r._options.cursor = true;
  if (options.stream === true) _r._options.stream = true;
  if (options.optionalRun === false) {
    delete _r._Term.prototype.then
    delete _r._Term.prototype.error
    delete _r._Term.prototype.catch
    delete _r._Term.prototype.finally
  }
  return _r;
}
module.exports = main;


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/metadata.js":
/*!*****************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/metadata.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Metadata we keep per query
function Metadata(resolve, reject, query, options) {
  this.resolve = resolve;
  this.reject = reject;
  this.query = query; // The query in case we have to build a backtrace
  this.options = options || {};
  this.cursor = false;
}

Metadata.prototype.setCursor = function() {
  this.cursor = true;
}

Metadata.prototype.setEnd = function(resolve, reject) {
  this.endResolve = resolve;
  this.endReject = reject;
}

Metadata.prototype.setCallbacks = function(resolve, reject) {
  this.resolve = resolve;
  this.reject = reject;
}
Metadata.prototype.removeCallbacks = function() {
  this.resolve = null;
  this.reject = null;
}
Metadata.prototype.removeEndCallbacks = function() {
  this.endResolve = null;
  this.endReject = null;
}

module.exports = Metadata;


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/pool.js":
/*!*************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/pool.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Promise = __webpack_require__(/*! bluebird */ "bluebird");
var Dequeue = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/dequeue.js */ "../node_modules/rethinkdbdash/lib/dequeue.js");
var helper = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/helper.js */ "../node_modules/rethinkdbdash/lib/helper.js");
var Err = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/error.js */ "../node_modules/rethinkdbdash/lib/error.js");
var events = __webpack_require__(/*! events */ "events");
var util = __webpack_require__(/*! util */ "util");

function Pool(r, options) {
  this._r = r;

  if (!helper.isPlainObject(options)) options = {};
  this.options = {};
  this.options.max = options.max || 1000; // 4000 is about the maximum the kernel can take
  var buffer = (typeof options.buffer === 'number') ? options.buffer : 50;
  this.options.buffer = (buffer < this.options.max) ? buffer : this.options.max;
  this.options.timeoutError = options.timeoutError || 1000; // How long should we wait before recreating a connection that failed?
  this.options.timeoutGb = options.timeoutGb || 60*60*1000; // Default timeout for TCP connection is 2 hours on Linux, we time out after one hour.
  this.options.maxExponent = options.maxExponent || 6; // Maximum timeout is 2^maxExponent*timeoutError

  this.options.silent = options.silent || false;

  this.options.connection = {
    host: options.host || this._r._host,
    port: options.port || this._r._port,
    db: options.db || this._r._db,
    timeout: options.timeout || this._r._timeoutConnect,
    authKey: options.authKey,
    user: options.user,
    password: options.password,
    cursor: options.cursor || false,
    stream: options.stream || false,
    ssl: options.ssl || false,
    pingInterval: options.pingInterval || this._r._pingInterval
  }
  this._log = options._log;

  this._pool = new Dequeue(this.options.buffer+1);
  this._draining = false;
  this._drainingHandlers = null; // Store the resolve/reject methods once draining is called
  this._localhostToDrain = 0; // number of connections to "localhost" to remove
  this._connectionToReplace = 0; // number of connections to "localhost" to remove

  this._numConnections = 0;
  this._openingConnections = 0; // Number of connections being opened
  this._consecutiveFails = 0;   // In slow growth, the number of consecutive failures to open a connection
  this._slowGrowth = false;     // Opening one connection at a time
  this._slowlyGrowing = false;  // The next connection to be returned is one opened in slowGrowth mode
  this._extraConnections = 0; // Number of extra connections being opened that we should eventually close

  this._empty = true;

  var self = this;
  // So we can let the pool master bind listeners
  setTimeout(function() {
    if (self._draining === false) {
      for(var i=0; i<self.options.buffer; i++) {
        if (self.getLength() < self.options.max) {
          self.createConnection();
        }
      }
    }
  }, 0);
  this.id = Math.floor(Math.random()*100000);
  this._log('Creating a pool connected to '+this.getAddress());
}

util.inherits(Pool, events.EventEmitter);
/*
 * Events:
 *  - draining // when `drain` is called
 *  - queueing(size of the queue) // the number of queries being beffered changed
 *  - size(number of connections) // the size of the pool changed
 *  - available-size(available size) // the number of AVAILABLE conncetions of the pool changed
 */

Pool.prototype.getConnection = function() {
  var self = this;
  var p = new Promise(function(resolve, reject) {
    if (self._draining === true) {
      return reject(new Err.ReqlDriverError('The pool is being drained').setOperational());
    }

    var connection = self._pool.pop();
    self.emit('available-size', self._pool.getLength());
    self.emit('available-size-diff', -1);

    if (connection) {
      clearTimeout(connection.timeout);
      resolve(connection);
    }
    else {
      if ((self._numConnections === 0) && (self._slowGrowth === true)) {
        // If the server is down we do not want to buffer the queries
        return reject(new Err.ReqlDriverError('The pool does not have any opened connections and failed to open a new one').setOperational());
      }
    }

    if (self._slowGrowth === false) {
      self._expandBuffer();
    }

  });
  return p;
};

Pool.prototype._decreaseNumConnections = function() {
  this._numConnections--;
  this.emit('size', this._numConnections)
  this.emit('size-diff', -1)
  if ((this._drainingHandlers !== null) && (this._numConnections === 0)) {
    this._drainingHandlers.resolve();
  }
  // We do not check for this._empty === false because we want to emit empty if the pool
  // tries to connect to an unavailable server (such that the master can remove it from the
  // healthy pool
  if (this._numConnections === 0) {
    this._empty = true;
    this.emit('empty');
  }
}
Pool.prototype._increaseNumConnections = function() {
  this._numConnections++;
  this.emit('size', this._numConnections)
  this.emit('size-diff', 1)
}


Pool.prototype.putConnection = function(connection) {
  var self = this;
  if (connection.end === false) {
    // Temporary attempt to fix #192 - this should not happen.
    return;
  }
  if (self._empty === true) {
    self._empty = false;
    // We emit not-empty only we have at least one opened connection
    self.emit('not-empty');
  }
  if ((self._localhostToDrain > 0) && (helper.localhostAliases.hasOwnProperty(connection.host))) {
    self._localhostToDrain--;
    connection.close();
    clearTimeout(connection.timeout);
    self.createConnection();
  }
  else if (self._drainingHandlers !== null) {
    connection.close();
    clearTimeout(connection.timeout);
    if (self.getLength() === 0) {
      self._drainingHandlers.resolve();
    }
  }
  else if (self._extraConnections > 0) {
    self._extraConnections--;
    connection.close().error(function(error) {
      self._log('Fail to properly close a connection. Error:'+JSON.stringify(error));
    });
    clearTimeout(connection.timeout);
  }
  /*
  // We let the pool garbage collect these connections
  else if (self.getAvailableLength()+1 > self.options.buffer) { // +1 for the connection we may put back
    // Note that because we have available connections here, the pool master has no pending
    // queries.
    connection.close().error(function(error) {
      self._log('Fail to properly close a connection. Error:'+JSON.stringify(error));
    });
    clearTimeout(connection.timeout);
  }
  */
  else {
    self._pool.push(connection);
    self.emit('available-size', self._pool.getLength());
    self.emit('available-size-diff', 1);
    self.emit('new-connection', connection);

    clearTimeout(connection.timeout);
    var timeoutCb = function() {
      if (self._pool.get(0) === connection) {
        if (self._pool.getLength() > self.options.buffer) {
          self._pool.shift().close();
          self.emit('available-size', self._pool.getLength());
          self.emit('available-size-diff', -1);
        }
        else {
          connection.timeout = setTimeout(timeoutCb, self.options.timeoutGb);
        }
      }
      else {
        // This should technically never happens
        connection.timeout = setTimeout(timeoutCb, self.options.timeoutGb);
      }
    }
    connection.timeout = setTimeout(timeoutCb, self.options.timeoutGb);
  }
};

Pool.prototype.createConnection = function() {
  var self = this;
  self._increaseNumConnections();
  self._openingConnections++;

  self.emit('creating-connection', self);
  if (self._draining === true) {
    return; // Do not create a new connection if we are draining the pool.
  }

  return self._r.connect(self.options.connection).then(function(connection) {
    self.emit('created-connection', self);

    self._openingConnections--;

    if ((self._slowlyGrowing === false) && (self._slowGrowth === true) && (self._openingConnections === 0)) {
      self._consecutiveFails++;
      self._slowlyGrowing = true;
      self.timeoutReconnect = setTimeout(function() {
        self.createConnection();
        //self._expandBuffer();
      }, (1<<Math.min(self.options.maxExponent, self._consecutiveFails))*self.options.timeoutError);
    }
    // Need another flag
    else if ((self._slowlyGrowing === true) && (self._slowGrowth === true) && (self._consecutiveFails > 0)) {
      self._log('Exiting slow growth mode');
      self._consecutiveFails = 0;
      self._slowGrowth = false;
      self._slowlyGrowing = false;
      self._aggressivelyExpandBuffer();
    }



    connection.on('error', function(error) {
      // We are going to close connection, but we don't want another process to use it before
      // So we remove it from the pool now (if it's inside)
      self._log('Error emitted by a connection: '+JSON.stringify(error));
      for(var i=0; i<self.getAvailableLength(); i++) {
        if (self._pool.get(i) === this) {
          self._pool.delete(i);
          self.emit('available-size', self._pool.getLength());
          self.emit('available-size-diff', -1);
          break;
        }
      }
      // We want to make sure that it's not going to try to reconnect
      clearTimeout(connection.timeout);

      // Not sure what happened here, so let's be safe and close this connection.
      connection.close().then(function() {
        return self._expandBuffer();
      }).error(function(e) {
        // We failed to close this connection, but we removed it from the pool... so err, let's just ignore that.
        self._expandBuffer();
      });
    });
    connection.on('end', function(e) {
      // The connection was closed by the server, let's clean...
      for(var i=0; i<self.getAvailableLength(); i++) {
        if (self._pool.get(i) === this) {
          self._pool.delete(i);
          self.emit('available-size', self._pool.getLength());
          self.emit('available-size-diff', -1);
          break;
        }
      }

      clearTimeout(connection.timeout);
      self._decreaseNumConnections();
      self._expandBuffer();
    });
    connection.on('timeout', function() {
      for(var i=0; i<self.getAvailableLength(); i++) {
        if (self._pool.get(i) === this) {
          self._pool.delete(i);
          self.emit('available-size', self._pool.getLength());
          self.emit('available-size-diff', -1);
          break;
        }
      }

      clearTimeout(connection.timeout);
      self._decreaseNumConnections();
      self._expandBuffer();
    });
    connection.on('release', function() {
      if (this._isOpen()) self.putConnection(this);
    });
    self.putConnection(connection);
    return null;
  }).error(function(error) {
    // We failed to create a connection, we are now going to create connections one by one
    self._openingConnections--;
    self._decreaseNumConnections();

    self._slowGrowth = true;
    if (self._slowlyGrowing === false) {
      self._log('Entering slow growth mode');
    }
    self._slowlyGrowing = true;

    // Log an error
    self._log('Fail to create a new connection for the connection pool. Error:'+JSON.stringify(error));

    if (self._openingConnections === 0) {
      self._consecutiveFails++;
      self.timeoutReconnect = setTimeout(function() {
        //self._expandBuffer();
        self.createConnection();
      }, (1<<Math.min(self.options.maxExponent, self._consecutiveFails))*self.options.timeoutError);
    }
  })
};

Pool.prototype._aggressivelyExpandBuffer = function() {
  for(var i=0; i<this.options.buffer; i++) {
    this._expandBuffer();
  }
}
Pool.prototype._expandBuffer = function() {
  if ((this._draining === false) &&
      (this._pool.getLength() < this.options.buffer+this._localhostToDrain) &&
      (this._numConnections < this.options.max+this._localhostToDrain)) {
    this.createConnection();
  }
}

Pool.prototype.getLength = function() {
  return this._numConnections;
}
Pool.prototype.getAvailableLength = function() {
  return this._pool.getLength();
}

Pool.prototype.setOptions = function(options) {
  if (helper.isPlainObject(options)) {
    for(var key in options) {
      this.options[key] = options[key];
    }
  }
  return this.options;
}
Pool.prototype.drainLocalhost = function() {
  var self = this;
  // All the connections are to localhost, let's create new ones (not to localhost)
  self._connectionToReplace = self._numConnections;
  ;
  for(var i=0, numConnections=self._numConnections; i<numConnections; i++) {
    self.createConnection().finally(function() {
      self._localhostToDrain++;
      self._connectionToReplace--;
      if ((self._connectionToReplace === 0) && (self._localhostToDrain > 0)) {
        var len = self._pool.getLength();
        for(var j=0; j<len; j++) {
          if (self._localhostToDrain === 0) {
            break;
          }
          var _connection = self._pool.shift();
          if (helper.localhostAliases.hasOwnProperty(_connection.host)) {
            self._localhostToDrain--;
            _connection.close();
            clearTimeout(_connection.timeout);
          }
          else {
            self._pool.push(_connection);
          }
        }
      }

    });
  }
}

Pool.prototype.drain = function() {
  var self = this;
  self._draining = true;
  self._log('Draining the pool connected to '+this.getAddress());
  self.emit('draining');
  var p = new Promise(function(resolve, reject) {
    var connection = self._pool.pop();
    self.emit('available-size', self._pool.getLength());
    self.emit('available-size-diff', -1);
    while(connection) {
      connection.close();
      clearTimeout(connection.timeout);
      connection = self._pool.pop();
    }
    if (self.timeoutReconnect !== undefined) {
      clearTimeout(self.timeoutReconnect);
      self.timeoutReconnect = null;
    }
    if (self.getLength() === 0) {
      resolve();
    }
    else {
      self._drainingHandlers = {
        resolve: resolve,
        reject: reject
      }
    }
  });
  return p;
}


Pool.prototype.getAddress = function() {
  return this.options.connection.host+':'+this.options.connection.port;
}
module.exports = Pool;


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/pool_master.js":
/*!********************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/pool_master.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! util */ "util");
var events = __webpack_require__(/*! events */ "events");
var Promise = __webpack_require__(/*! bluebird */ "bluebird");
var Dequeue = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/dequeue.js */ "../node_modules/rethinkdbdash/lib/dequeue.js");
var Pool = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/pool.js */ "../node_modules/rethinkdbdash/lib/pool.js");
var helper = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/helper.js */ "../node_modules/rethinkdbdash/lib/helper.js");
var Err = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/error.js */ "../node_modules/rethinkdbdash/lib/error.js");
var UNKNOWN_POOLS = 'unknownPools';
var SEPARATOR = 'feedSeparator';
function PoolMaster(r, options) {
  var self = this;
  var options = options || {};
  var lineLength = options.buffer || 50;

  self._r = r;
  self._line = new Dequeue(lineLength);
  self._pools = {};
  self._pools[UNKNOWN_POOLS] = []; // pools for which we do not know the server'id
  self._healthyPools = [];
  self._healthy = false;
  self._init = false;
  self._index = 0; // next pool to used
  self._indexUnknown =  0 // next unknown pool to used
  self._discovery = (typeof options.discovery === 'boolean') ? options.discovery: false; // Whether the pool master is in discovery mode or not
  //self._refresh = (typeof options.refresh === 'number') ? options.refresh: 1000*60*60; // Refresh rate for the list of servers
  self._options = options;
  self._options.buffer = options.buffer || 50;
  self._options.max = options.max || 1000;
  self._log = helper.createLogger(self, options.silent || false);
  if (typeof options.log == 'function') {
    self.on('log', options.log);
  }
  self._draining = false;
  self._numConnections = 0;
  self._numAvailableConnections = 0;
  self._hasPrintWarningLocalhost = false;
  self._feed = null;
  self._consecutiveFails = -1;
  self._timeoutError = options.timeoutError || 1000; // How long should we wait before recreating a connection that failed?
  self._maxExponent = options.maxExponent || 6; // Maximum timeout is 2^maxExponent*timeoutError

  //TODO
  //self._usingPool = true; // If we have used the pool
  self._seed = 0;

  var pool;
  if (Array.isArray(options.servers)) {
    if (options.servers.length > 0) {
      self._servers = options.servers;
      for(var i=0; i<options.servers.length; i++) {
        var settings = self.createPoolSettings(options, options.servers[i], self._log);
        pool = new Pool(self._r, settings);
        self._pools[UNKNOWN_POOLS].push(pool);
        // A pool is considered healthy by default such that people can do
        // var = require(...)(); query.run();
        self._healthyPools.push(pool);
        self.emitStatus()
      }
    }
    else {
      throw new Err.ReqlDriverError("If `servers` is an array, it must contain at least one server")
    }
  }
  else {
    self._servers = [{
      host: options.host || 'localhost',
      port: options.port || 28015
    }]
    var settings = self.createPoolSettings(options, {}, self._log);
    pool = new Pool(self._r, settings);
    self._pools[UNKNOWN_POOLS].push(pool);
    self._healthyPools.push(pool);
    self.emitStatus()
  }

  // Initialize all the pools - bind listeners
  for(var i=0; i<self._pools[UNKNOWN_POOLS].length; i++) {
    self.initPool(self._pools[UNKNOWN_POOLS][i]);
  }
  if ((self._discovery === true)) {
    self._timeout = setTimeout(function() { self.fetchServers() }, 0);
  }
}
util.inherits(PoolMaster, events.EventEmitter);

PoolMaster.prototype.getPools = function() {
  var result = [];
  helper.loopKeys(this._pools, function(pools, key) {
    if (key === UNKNOWN_POOLS) {
      for(var i=0;i<pools[key].length; i++) {
        result.push(pools[key][i]);
      }
    }
    else {
      result.push(pools[key]);
    }
  });
  return result;
}

// Reject all promises in this._line
PoolMaster.prototype._flushErrors = function() {
  while(this._line.getLength() > 0) {
    this._line.shift().reject(new Err.ReqlDriverError('None of the pools have an opened connection and failed to open a new one').setOperational());
    this.emit('queueing', this._line.getLength())
  }
}

PoolMaster.prototype.getConnection = function() {
  var self = this;
  // Find a pool with available connections
  var result;
  for(var i=0; i<self._healthyPools.length; i++) {
    if (self._index >= self._healthyPools.length) {
      self._index = 0;
    }
    if (self._healthyPools[self._index].getAvailableLength() > 0) {
      result = self._healthyPools[self._index].getConnection();
    }
    self._index++;
    if (self._index === self._healthyPools.length) {
      self._index = 0;
    }
    if (result) {
      return result;
    }
  }
  if (self._healthyPools.length === 0) {
    return new Promise(function(resolve, reject) {
      reject(new Err.ReqlDriverError('None of the pools have an opened connection and failed to open a new one').setOperational());
    });
  }
  else {
    // All pool are busy, buffer the request
    return new Promise(function(resolve, reject) {
      self._line.push({
        resolve: resolve,
        reject: reject
      });

      self.emit('queueing', self._line.getLength())
      // We could add a condition to be less greedy (for early start)
      self._expandAll();
    });

  }
}
PoolMaster.prototype._expandAll = function() {
  for(var i=0; i<this._healthyPools.length; i++) {
    this._healthyPools[i]._expandBuffer();
  }
}

// Fetch all the servers once
PoolMaster.prototype.handleAllServersResponse = function(servers) {
  var self = this;
  if (self._draining === true) {
    return;
  }
  // Fill all the known server from RethinkDB
  var knownServer = {};
  for(var i=0; i<servers.length; i++) {
    var server = servers[i];
    knownServer[server.id] = {count: 0, server: server};
    if (self._pools[server.id] === undefined) {
      // We potentially have a new server in the cluster, or we already have a pool for this server
      // in one of the UNKNOWN_POOLS
      var found = false;
      for(var j=0; j<self._pools[UNKNOWN_POOLS].length; j++) {
        if (found) break;
        var pool = self._pools[UNKNOWN_POOLS][j]; 
        // If a pool is created with localhost, it will probably match the first server even though it may not the the one
        // So it gets an id
        for(var k=0; k<server.network.canonical_addresses.length; k++) {
          // Check for the same host (or if they are both localhost) and port
          if (((server.network.canonical_addresses[k].host === pool.options.connection.host) ||
               (server.network.hostname === pool.options.connection.host) ||
            (helper.localhostAliases.hasOwnProperty(server.network.canonical_addresses[k].host) &&
            helper.localhostAliases.hasOwnProperty(pool.options.connection.host))) &&
            (server.network.reql_port === pool.options.connection.port)) {

            self._pools[server.id] = self._pools[UNKNOWN_POOLS].splice(j, 1)[0];
            // We may assign the wrong pool to this server if it's maching on localhost
            if (helper.localhostAliases.hasOwnProperty(server.network.canonical_addresses[k].host)) {
              self._pools[server.id].options.connection.host = helper.getCanonicalAddress(server.network.canonical_addresses).host;
              self._pools[server.id].drainLocalhost();
            }
            found = true;
            break;
          }
        }
      }
      if (found === false) {
        // We just found a new server, let's extract the canonical address and connect to it
        self.createPool(server);
      }
    }
  } // Each server know has a pool

  // Check if we need to remove pools
  helper.loopKeys(self._pools, function(pools, key) { // among the pools with a server id
    if (key !== UNKNOWN_POOLS) {
      if (knownServer.hasOwnProperty(key) === false) {
        self.deletePool(key); // We just found a pool that doesn't map to any known RethinkDB server
      }
      else {
        knownServer[key].count++;
      }
    }
  });
  for(var i=0;i<self._pools[UNKNOWN_POOLS].length; i++) {
    // These pools does not match any server returned by RethinkDB.
    var pool = self._pools[UNKNOWN_POOLS].splice(i, 1)[0];
    self._log('Removing pool connected to: '+pool.getAddress())
    pool.drain().then(function() {
      pool.removeAllListeners();
    }).error(function(error) {
      self._log('Pool connected to: '+self._pools[UNKNOWN_POOLS][i].getAddress()+' could not be properly drained.')
      self._log(error.message);
      self._log(error.stack);
    });
  }
}

// Create the settings for a given pool. Merge the global options + the servers's one.
PoolMaster.prototype.createPoolSettings = function(globalOptions, serverOptions, log) {
  var settings = {};
  var numServers = Array.isArray(globalOptions.servers) ? globalOptions.servers.length: 1;
  helper.loopKeys(globalOptions, function(options, key) {
    if ((key === 'buffer') || (key === 'max')) {
      settings[key] = Math.ceil(options[key]/numServers);
      settings[key] = Math.ceil(options[key]/numServers);
    }
    else if (key !== 'servers') {
      settings[key] = options[key];
    }
  });
  if (serverOptions) {
    helper.loopKeys(serverOptions, function(options, key) {
      settings[key] = options[key];
    });
  }
  settings._log = log;
  return settings;
}

// Create a new pool
PoolMaster.prototype.createPool = function(server) {
  var self = this;
  var address = helper.getCanonicalAddress(server.network.canonical_addresses);
  var settings = self.createPoolSettings(self._options, {
    port: server.network.reql_port,
    host: address.host
  }, self._log);
  var pool = new Pool(self._r, settings);
  self._pools[server.id] = pool
  self.initPool(pool);
  self._healthyPools.push(pool);
  self.emitStatus()
  self.resetBufferParameters();
}

// Delete a known pool
PoolMaster.prototype.deletePool = function(key) {
  var self = this;
  var pool = self._pools[key];
  self._log('Removing pool connected to: '+pool.getAddress())
  pool.drain().then(function() {
    pool.removeAllListeners();
  }).error(function(error) {
    self._log('Pool connected to: '+self._pools[key].getAddress()+' could not be properly drained.')
    self._log(error.message);
    self._log(error.stack);
  });
  delete self._pools[key];
  self.resetBufferParameters();
}

//  Create the feed on server_status and bind the listener to the feed
PoolMaster.prototype.fetchServers = function(useSeeds) {
  var self = this;
  var query = self._r.db('rethinkdb').table('server_status')
      .union([SEPARATOR])
      .union(self._r.db('rethinkdb').table('server_status').changes())
  // In case useSeeds is true, we rotate through all the seeds + the pool master
  if (!useSeeds || self._seed === self._servers.length) {
    if (useSeeds && self._seed === self._servers.length) {
      // We increase the back off only when we went through all the seeds
      self._consecutiveFails++;
    }

    self._seed = 0;
    var promise = query.run({cursor: true})
  }
  else {
    var settings = self._servers[self._seed];
    self._seed++;
    var promise = self._r.connect(settings).then(function(connection) {
      return query.run(connection, {cursor: true})
    });
  }
  promise.then(function(feed) {
    if (self._draining === true) {
      // There is no need to close the feed here as we'll close the connections
      return feed.close();
    }
    self._feed = feed;
    var initializing = true;
    var servers = [];
    feed.each(function(err, change) {
      if (err) {
        self._log('The changefeed on server_status returned an error: '+err.toString());
        // We have to refetch everything as the server that was serving the feed may
        // have died.
        if (!self._draining) {
          setTimeout(function() {
            self.fetchServers();
          }, 0); // Give a timeout to let the driver clean the pools
        }
        return;
      }
      if (initializing === true) {
        if (change === SEPARATOR) {
          initializing = false;
          self.handleAllServersResponse(servers);
          // Rerun the whole query after to make sure that a change did not skip/sneak between the union. As long
          // as RethinkDB does not provide initial results
          setTimeout(function() {
            self._r.db('rethinkdb').table('server_status').run({cursor: false}).then(function(servers) {
              self.handleAllServersResponse(servers);
            }).error(function(error) {
              self._log('Fail to retrieve a second copy of server_status');
              //TODO Retry
            });
          }, 1000);
        }
        else {
          servers.push(change);
        }
        return;
      }

      if (change.new_val !== null && change.old_val === null) {
        // New server
        self.createPool(change.new_val);
      }
      else if (change.new_val === null && change.old_val !== null) {
        // A server was removed
        var server = change.old_val;
        if (self._pools[server.id] != null) {
          self.deletePool(server.id);
        }
        else {
          var found = false;
          for(var i=0; i<self._pools[UNKNOWN_POOLS].length; i++) {
            if (((server.network.canonical_addresses[k].host === self._pools[UNKNOWN_POOLS][i].options.connection.host) ||
              (helper.localhostAliases.hasOwnProperty(server.network.canonical_addresses[k].host) && (helper.localhostAliases.hasOwnProperty(self._pools[UNKNOWN_POOLS][i].options.connection.host)))) &&
              (server.network.reql_port === self._pools[UNKNOWN_POOLS][i].options.connection.port)) {
              found = true;

              (function (pool) {
                self._log('Removing pool connected to: '+pool.getAddress())
                var pool = self._pools[UNKNOWN_POOLS].splice(i, 1)[0];
                pool.drain().then(function() {
                  pool.removeAllListeners();
                }).error(function(error) {
                  if (self._options.silent !== true) {
                    self._log('Pool connected to: '+pool.getAddress()+' could not be properly drained.')
                    self._log(error.message);
                    self._log(error.stack);
                  }
                });
              })(self._pools[UNKNOWN_POOLS][i]);
              break;
            }
          }
        }
        if (found === false) {
          self._log('A server was removed but no pool for this server exists...')
        }
      }
      // We ignore this change since this it doesn't affect whether the server
      // is available or not.
      // else if (change.new_val !== null && change.old_val !== null) {}
    });
    return null;
  }).error(function(error) {
    self._log('Could not retrieve the data from server_status: '+JSON.stringify(error));
    
    var timeout;
    if (self._consecutiveFails === -1) {
      timeout = 0;
    }
    else {
      timeout = (1<<Math.min(self._maxExponent, self._consecutiveFails))*self._timeoutError;
    }
    setTimeout(function() {
      self.fetchServers(true);
    }, timeout);
  });
}

// Bind listeners on the pools
PoolMaster.prototype.initPool = function(pool) {
  var self = this;

  pool.on('size-diff', function(diff) {
    self._numConnections += diff;
    self.emit('size', self._numConnections)
  });
  pool.on('available-size-diff', function(diff) {
    self._numAvailableConnections += diff;
    self.emit('available-size', self._numAvailableConnections)
  });

  pool.on('new-connection', function() {
    if (self._line.getLength() > 0) {
      var p = self._line.shift();
      this.getConnection().then(p.resolve).error(p.reject);
      self.emit('queueing', self._line.getLength())
    }
  });
  pool.on('not-empty', function() {
    if (self._draining === false) {
      var found = false;
      for(var i=0; i<self._healthyPools.length; i++) {
        if (self._healthyPools[i] === this) {
          self._healthyPools.length;
          found = true;
          break;
        }
      }
      if (found === false) {
        self._healthyPools.push(this);
        self.emitStatus()
        self.resetBufferParameters();
      }
    }
  });
  pool.on('empty', function() {
    // A pool that become empty is considered unhealthy
    for(var i=0; i<self._healthyPools.length; i++) {
      if (self._healthyPools[i] === this) {
        self._healthyPools.splice(i, 1);
        self.emitStatus()
        break;
      }
    }
    if (self._healthyPools.length === 0) {
      self._flushErrors();
    }

    self.resetBufferParameters();
  });
  pool.on('draining', function() {
    for(var i=0; i<self._healthyPools.length; i++) {
      if (self._healthyPools[i] === this) {
        self._healthyPools.splice(i, 1);
        self.emitStatus()
        break;
      }
    }

    if (self._healthyPools === 0) {
      self._flushErrors();
    }
  });
}

PoolMaster.prototype.getNumConnections = function() {
  var sum = 0;
  for(var i=0; i<this._healthyPools.length; i++) {
    sum += this._healthyPools[i].getLength();
  }
  return sum;
}
PoolMaster.prototype.getNumAvailableConnections = function() {
  var sum = 0;
  for(var i=0; i<this._healthyPools.length; i++) {
    sum += this._healthyPools[i].getAvailableLength();
  }
  return sum;
}

// Reset buffer and max for each pool
PoolMaster.prototype.resetBufferParameters = function() {
  var max = Math.floor(this._options.max/this._healthyPools.length)
  var buffer = Math.floor(this._options.buffer/this._healthyPools.length)
  for(var i=0; i<this._healthyPools.length; i++) {
    if (this._healthyPools[i].getLength() > max) {
      this._healthyPools[i]._extraConnections = this._healthyPools[i].getLength()-max;
    }
    else {
      this._healthyPools[i]._extraConnections = 0;
    }
    this._healthyPools[i].options.max = max
    this._healthyPools[i].options.buffer = buffer;
  }
}

PoolMaster.prototype.getLength = function() {
  return this._numConnections;
}
PoolMaster.prototype.getAvailableLength = function() {
  return this._numAvailableConnections;
}

PoolMaster.prototype.drain = function() {
  this.emit('draining');
  if (this._discovery === true) {
    this._discovery = false;
    if (this._feed != null) {
      this._feed.close();
    }
  }
  this._draining = true;
  var promises = [];
  var pools = this.getPools();
  for(var i=0; i<pools.length; i++) {
    promises.push(pools[i].drain());
  }
  this._healthyPools = [];
  var self = this;
  return Promise.all(promises).then(function() {
    for(var i=0; i<pools.length; i++) {
      pools[i].removeAllListeners();
    }
  }).error(function(error) {
    if (self._options.silent !== true) {
      self._log('Failed to drain all the pools:');
      self._log(error.message);
      self._log(error.stack);
    }
  });
}

// Emit the healthy event with a boolean indicating whether the pool master
// is healthy or not
PoolMaster.prototype.emitStatus = function() {
  var healthy = this._healthyPools.length !== 0;
  if (this._healthy !== healthy) {
    this._healthy = healthy;
    this.emit('healthy', healthy)
  }
}

module.exports = PoolMaster;


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/protodef.js":
/*!*****************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/protodef.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// DO NOT EDIT
// Autogenerated by convert_protofile

module.exports = {
	VersionDummy: {
		Version: {
			V0_1: 1063369270,
			V0_2: 1915781601,
			V0_3: 1601562686,
			V0_4: 1074539808,
			V1_0: 885177795
		},
		
		Protocol: {
			PROTOBUF: 656407617,
			JSON: 2120839367
		}
	},
	
	Query: {
		QueryType: {
			START: 1,
			CONTINUE: 2,
			STOP: 3,
			NOREPLY_WAIT: 4,
			SERVER_INFO: 5
		},
		
		AssocPair: {}
	},
	
	Frame: {
		FrameType: {
			POS: 1,
			OPT: 2
		}
	},
	
	Backtrace: {},
	
	Response: {
		ResponseType: {
			SUCCESS_ATOM: 1,
			SUCCESS_SEQUENCE: 2,
			SUCCESS_PARTIAL: 3,
			WAIT_COMPLETE: 4,
			SERVER_INFO: 5,
			CLIENT_ERROR: 16,
			COMPILE_ERROR: 17,
			RUNTIME_ERROR: 18
		},
		
		ErrorType: {
			INTERNAL: 1000000,
			RESOURCE_LIMIT: 2000000,
			QUERY_LOGIC: 3000000,
			NON_EXISTENCE: 3100000,
			OP_FAILED: 4100000,
			OP_INDETERMINATE: 4200000,
			USER: 5000000,
			PERMISSION_ERROR: 6000000
		},
		
		ResponseNote: {
			SEQUENCE_FEED: 1,
			ATOM_FEED: 2,
			ORDER_BY_LIMIT_FEED: 3,
			UNIONED_FEED: 4,
			INCLUDES_STATES: 5
		}
	},
	
	Datum: {
		DatumType: {
			R_NULL: 1,
			R_BOOL: 2,
			R_NUM: 3,
			R_STR: 4,
			R_ARRAY: 5,
			R_OBJECT: 6,
			R_JSON: 7
		},
		
		AssocPair: {}
	},
	
	Term: {
		TermType: {
			DATUM: 1,
			MAKE_ARRAY: 2,
			MAKE_OBJ: 3,
			VAR: 10,
			JAVASCRIPT: 11,
			UUID: 169,
			HTTP: 153,
			ERROR: 12,
			IMPLICIT_VAR: 13,
			DB: 14,
			TABLE: 15,
			GET: 16,
			GET_ALL: 78,
			EQ: 17,
			NE: 18,
			LT: 19,
			LE: 20,
			GT: 21,
			GE: 22,
			NOT: 23,
			ADD: 24,
			SUB: 25,
			MUL: 26,
			DIV: 27,
			MOD: 28,
			FLOOR: 183,
			CEIL: 184,
			ROUND: 185,
			APPEND: 29,
			PREPEND: 80,
			DIFFERENCE: 95,
			SET_INSERT: 88,
			SET_INTERSECTION: 89,
			SET_UNION: 90,
			SET_DIFFERENCE: 91,
			SLICE: 30,
			SKIP: 70,
			LIMIT: 71,
			OFFSETS_OF: 87,
			CONTAINS: 93,
			GET_FIELD: 31,
			KEYS: 94,
			VALUES: 186,
			OBJECT: 143,
			HAS_FIELDS: 32,
			WITH_FIELDS: 96,
			PLUCK: 33,
			WITHOUT: 34,
			MERGE: 35,
			BETWEEN_DEPRECATED: 36,
			BETWEEN: 182,
			REDUCE: 37,
			MAP: 38,
			FOLD: 187,
			FILTER: 39,
			CONCAT_MAP: 40,
			ORDER_BY: 41,
			DISTINCT: 42,
			COUNT: 43,
			IS_EMPTY: 86,
			UNION: 44,
			NTH: 45,
			BRACKET: 170,
			INNER_JOIN: 48,
			OUTER_JOIN: 49,
			EQ_JOIN: 50,
			ZIP: 72,
			RANGE: 173,
			INSERT_AT: 82,
			DELETE_AT: 83,
			CHANGE_AT: 84,
			SPLICE_AT: 85,
			COERCE_TO: 51,
			TYPE_OF: 52,
			UPDATE: 53,
			DELETE: 54,
			REPLACE: 55,
			INSERT: 56,
			DB_CREATE: 57,
			DB_DROP: 58,
			DB_LIST: 59,
			TABLE_CREATE: 60,
			TABLE_DROP: 61,
			TABLE_LIST: 62,
			CONFIG: 174,
			STATUS: 175,
			WAIT: 177,
			RECONFIGURE: 176,
			REBALANCE: 179,
			SYNC: 138,
			GRANT: 188,
			INDEX_CREATE: 75,
			INDEX_DROP: 76,
			INDEX_LIST: 77,
			INDEX_STATUS: 139,
			INDEX_WAIT: 140,
			INDEX_RENAME: 156,
			FUNCALL: 64,
			BRANCH: 65,
			OR: 66,
			AND: 67,
			FOR_EACH: 68,
			FUNC: 69,
			ASC: 73,
			DESC: 74,
			INFO: 79,
			MATCH: 97,
			UPCASE: 141,
			DOWNCASE: 142,
			SAMPLE: 81,
			DEFAULT: 92,
			JSON: 98,
			TO_JSON_STRING: 172,
			ISO8601: 99,
			TO_ISO8601: 100,
			EPOCH_TIME: 101,
			TO_EPOCH_TIME: 102,
			NOW: 103,
			IN_TIMEZONE: 104,
			DURING: 105,
			DATE: 106,
			TIME_OF_DAY: 126,
			TIMEZONE: 127,
			YEAR: 128,
			MONTH: 129,
			DAY: 130,
			DAY_OF_WEEK: 131,
			DAY_OF_YEAR: 132,
			HOURS: 133,
			MINUTES: 134,
			SECONDS: 135,
			TIME: 136,
			MONDAY: 107,
			TUESDAY: 108,
			WEDNESDAY: 109,
			THURSDAY: 110,
			FRIDAY: 111,
			SATURDAY: 112,
			SUNDAY: 113,
			JANUARY: 114,
			FEBRUARY: 115,
			MARCH: 116,
			APRIL: 117,
			MAY: 118,
			JUNE: 119,
			JULY: 120,
			AUGUST: 121,
			SEPTEMBER: 122,
			OCTOBER: 123,
			NOVEMBER: 124,
			DECEMBER: 125,
			LITERAL: 137,
			GROUP: 144,
			SUM: 145,
			AVG: 146,
			MIN: 147,
			MAX: 148,
			SPLIT: 149,
			UNGROUP: 150,
			RANDOM: 151,
			CHANGES: 152,
			ARGS: 154,
			BINARY: 155,
			GEOJSON: 157,
			TO_GEOJSON: 158,
			POINT: 159,
			LINE: 160,
			POLYGON: 161,
			DISTANCE: 162,
			INTERSECTS: 163,
			INCLUDES: 164,
			CIRCLE: 165,
			GET_INTERSECTING: 166,
			FILL: 167,
			GET_NEAREST: 168,
			POLYGON_SUB: 171,
			MINVAL: 180,
			MAXVAL: 181
		},
		
		AssocPair: {}
	}
}


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/stream.js":
/*!***************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/stream.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Readable = __webpack_require__(/*! stream */ "stream").Readable;
var Cursor = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/cursor.js */ "../node_modules/rethinkdbdash/lib/cursor.js");
var util = __webpack_require__(/*! util */ "util");

// Experimental, but should work fine.
function ReadableStream(options, cursor) {
  if (cursor) this._cursor = cursor;
  this._pending = 0; // How many time we called _read while no cursor was available
  this._index = 0;
  this._maxRecursion = 1000; // Hardcoded
  this._highWaterMark = options.highWaterMark;
  this._closed = false;

  Readable.call(this, {
    objectMode: true,
    highWaterMark: this._highWaterMark
  });
};
util.inherits(ReadableStream, Readable);


ReadableStream.prototype._setCursor = function(cursor) {
  if (cursor instanceof Cursor === false) {
    this.emit('error', new Error('Cannot create a stream on a single value.'));
    this.push(null);
    return this;
  }
  this._cursor = cursor;
  this._fetchAndDecrement();
}
ReadableStream.prototype._read = function(size) {
  this._count++;
  if (this._cursor === undefined) {
    this._pending++;
    return;
  }

  this._recursion = 0;
  this._fetch();
}

//TODO: Refactor with _fetch?
ReadableStream.prototype._fetchAndDecrement = function() {
  var self = this;
  self._pending--;
  if (self._pending < 0 || self._closed === true) {
    return;
  }

  if (self._cursor._closed === true) {
    self.push(null);
  }
  else {
    self._cursor._next().then(function(data) {
      // Silently drop null values for now
      if (data === null) {
        if (self._recursion++ === self._maxRecursion) {
          //Avoid maximum call stack errors
          process.nextTick(function() {
            self._fetchAndDecrement();
          });
        }
        else {
          self._fetchAndDecrement();
        }
      }
      else {
        if (self.push(data) !== false) {
          if (self._recursion++ === self._maxRecursion) {
            process.nextTick(function() {
              self._fetchAndDecrement();
            });
          }
          else {
            self._fetchAndDecrement();
          }
        }
      }
      return null;
    }).error(function(error) {
      if (error.message.match(/No more rows in the/)) {
        self.push(null);
      }
      else if (error.message === 'You cannot retrieve data from a cursor that is closed.') {
        // if the user call `close`, the cursor may reject pending requests. We just
        // ignore them here.
      }
      else {
        self.emit('error', error);
        self.push(null);
      }
    });
  }
}

ReadableStream.prototype._fetch = function() {
  var self = this;
  if (self._closed === true) {
    return;
  }
  if (self._cursor._closed === true) {
    self.push(null);
  }
  else {
    self._cursor._next().then(function(data) {
      if (self._closed === true) {
        return;
      }
      // Silently drop null values for now
      if (data === null) {
        if (self._recursion++ === self._maxRecursion) {
          process.nextTick(function() {
            self._fetch();
          });
        }
        else {
          self._fetch();
        }
      }
      else {
        if (self.push(data) !== false) {
          if (self._recursion++ === self._maxRecursion) {
            process.nextTick(function() {
              self._fetch();
            });
          }
          else {
            self._fetch();
          }
        }
      }
      return null;
    }).error(function(error) {
      if (error.message.match(/No more rows in the/)) {
        self.push(null);
      }
      else if (error.message === 'You cannot retrieve data from a cursor that is closed.') {
        // if the user call `close`, the cursor may reject pending requests. We just
        // ignore them here.
      }
      else {
        self.emit('error', error);
        self.push(null);
      }
    });
  }
}


ReadableStream.prototype.close = function() {
  this._closed = true;
  this.push(null);
  return this._cursor.close();
}

module.exports = ReadableStream;


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/term.js":
/*!*************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/term.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Promise = __webpack_require__(/*! bluebird */ "bluebird");
var protodef = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/protodef.js */ "../node_modules/rethinkdbdash/lib/protodef.js");
var termTypes = protodef.Term.TermType;

var Error = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/error.js */ "../node_modules/rethinkdbdash/lib/error.js");
var helper = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/helper.js */ "../node_modules/rethinkdbdash/lib/helper.js");
var ReadableStream = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/stream.js */ "../node_modules/rethinkdbdash/lib/stream.js");
var WritableStream = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/writable_stream.js */ "../node_modules/rethinkdbdash/lib/writable_stream.js");
var TransformStream = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/transform_stream.js */ "../node_modules/rethinkdbdash/lib/transform_stream.js");

function Term(r, value, error) {
  var self = this;
  var term = function(field) {
    if (Term.prototype._fastArity(arguments.length, 1) === false) {
      var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
      Term.prototype._arity(_args, 1, '(...)', self);
    }
    return term.bracket(field);
  }
  helper.changeProto(term, self);

  if (value === undefined) {
    term._query = [];
  }
  else {
    term._query = value;
  }
  term._r = r; // Keep a reference to r for global settings

  if (error !== undefined) {
    term._error = error;
    term._frames = [];
  }

  return term;
}

// run([connection][, options][, callback])
Term.prototype.run = function(connection, options, callback) {
  var self = this;

  if (self._error != null) {
    var error = new Error.ReqlRuntimeError(self._error, self._query, {b: self._frames});
    return Promise.reject(error);
  }

  if (helper.isPlainObject(connection) && (typeof connection._isConnection === 'function') && (connection._isConnection() === true)) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    else {
      if (!helper.isPlainObject(options)) options = {};
    }

    if (connection._isOpen() !== true) {
      return new Promise(function(resolve, reject) {
        reject(new Error.ReqlDriverError('`run` was called with a closed connection', self._query).setOperational());
      });
    }
    var p = new Promise(function(resolve, reject) {
      var token = connection._getToken();

      var query = [protodef.Query.QueryType.START];
      query.push(self._query);

      var _options = {};
      var sendOptions = false;
      if (connection.db != null) {
        sendOptions = true;
        _options.db = self._r.db(connection.db)._query;
      }

      if (self._r.arrayLimit != null) {
        sendOptions = true;
        _options[self._translateArgs['arrayLimit']] = self._r.arrayLimit;
      };


      var keepGoing = true; // we need it just to avoir calling resolve/reject multiple times
      helper.loopKeys(options, function(options, key) {
        if (keepGoing === true) {
          if ((key === 'readMode') || (key === 'durability') || (key === 'db') ||
            (key === 'noreply') || (key === 'arrayLimit') || (key === 'profile') ||
            (key === 'minBatchRows') || (key === 'maxBatchRows') || (key === 'maxBatchBytes') ||
            (key === 'maxBatchSeconds') || (key === 'firstBatchScaledownFactor')) {

            sendOptions = true;
            if (key === 'db') {
              _options[key] = self._r.db(options[key])._query;
            }
            else if (self._translateArgs.hasOwnProperty(key)) {
              _options[self._translateArgs[key]] = new Term(self._r).expr(options[key])._query;
            }
            else {
              _options[key] = new Term(self._r).expr(options[key])._query;
            }
          }
          else if ((key !== 'timeFormat') && (key !== 'groupFormat') &&
              (key !== 'binaryFormat') && (key !== 'cursor') &&
              (key !== 'readable') && (key !== 'writable') &&
              (key !== 'transform') && (key !== 'stream') &&
              (key !== 'highWaterMark')) {
            reject(new Error.ReqlDriverError('Unrecognized option `'+key+'` in `run`. Available options are readMode <string>, durability <string>, noreply <bool>, timeFormat <string>, groupFormat: <string>, profile <bool>, binaryFormat <bool>, cursor <bool>, stream <bool>'));
            keepGoing = false;
          }
        }
      });

      if (keepGoing === false) {
        connection.emit('release');
        return // The promise was rejected in the loopKeys
      }

      if (sendOptions === true) {
        query.push(_options);
      }
      connection._send(query, token, resolve, reject, self._query, options);
    }).nodeify(callback);
  }
  else {
    var poolMaster = self._r.getPoolMaster(); // if self._r is defined, so is self._r.getPool()
    if (!poolMaster) {
      throw new Error.ReqlDriverError('`run` was called without a connection and no pool has been created', self._query);
    }
    else {
      if (typeof connection === 'function') {
        // run(callback);
        callback = connection;
        options = {};
      }
      else if (helper.isPlainObject(connection)) {
        // run(options[, callback])
        callback = options;
        options = connection;
      }
      else {
        options = {};
      }


      var p = new Promise(function(resolve, reject) {
        poolMaster.getConnection().then(function(connection) {
          var token = connection._getToken();
          var query = [protodef.Query.QueryType.START];
          query.push(self._query);

          var _options = {};
          var sendOptions = false;
          if (connection.db != null) {
            sendOptions = true;
            _options.db = self._r.db(connection.db)._query;
          }
          if (self._r.arrayLimit != null) {
            sendOptions = true;
            _options[self._translateArgs['arrayLimit']] = self._r.arrayLimit;
          };

          var keepGoing = true;
          helper.loopKeys(options, function(options, key) {
            if (keepGoing === true) {
              if ((key === 'readMode') || (key === 'durability') || (key === 'db') ||
                  (key === 'noreply') || (key === 'arrayLimit') || (key === 'profile') ||
                  (key === 'minBatchRows') || (key === 'maxBatchRows') || (key === 'maxBatchBytes') ||
                  (key === 'maxBatchSeconds') || (key === 'firstBatchScaledownFactor')) {


                sendOptions = true;
                if (key === 'db') {
                  _options[key] = self._r.db(options[key])._query;
                }
                else if (self._translateArgs.hasOwnProperty(key)) {
                  _options[self._translateArgs[key]] = new Term(self._r).expr(options[key])._query
                }
                else {
                  _options[key] = new Term(self._r).expr(options[key])._query
                }
              }
              else if ((key !== 'timeFormat') && (key !== 'groupFormat') &&
                  (key !== 'binaryFormat') && (key !== 'cursor') &&
                  (key !== 'readable') && (key !== 'writable') &&
                  (key !== 'transform') && (key !== 'stream') &&
                  (key !== 'highWaterMark')) {

                setTimeout( function() {
                  reject(new Error.ReqlDriverError('Unrecognized option `'+key+'` in `run`. Available options are readMode <string>, durability <string>, noreply <bool>, timeFormat <string>, groupFormat: <string>, profile <bool>, binaryFormat <string>, cursor <bool>, stream <bool>'));
                }, 0);
                keepGoing = false;
                return false;
              }
            }
          });

          if (keepGoing === false) {
            connection.emit('release');
            return // The promise was rejected in the loopKeys
          }

          if (sendOptions === true) {
            query.push(_options);
          }
          connection._send(query, token, resolve, reject, self._query, options);
        }).error(function(error) {
          reject(error);
        });
      }).nodeify(callback);
    }
  }

  //if (options.noreply) return self; // Do not return a promise if the user ask for no reply.

  return p;
}

Term.prototype.toStream = function(connection, options) {
  if (helper.isPlainObject(connection) && (typeof connection._isConnection === 'function') && (connection._isConnection() === true)) {
    if (helper.isPlainObject(options) === false) {
      options = {};
    }
    if (options.readable === true) {
      return this._toReadableStream(connection, options);
    }
    else if (options.writable === true) {
      return this._toWritableStream(connection, options);
    }
    else if (options.transform === true) {
      return this._toTransformStream(connection, options);
    }
    else {
      return this._toReadableStream(connection, options);
    }
  }
  else {
    options = connection;
    if (helper.isPlainObject(options) === false) {
      options = {};
    }
    if (options.readable === true) {
      return this._toReadableStream(options);
    }
    else if (options.writable === true) {
      return this._toWritableStream(options);
    }
    else if (options.transform === true) {
      return this._toTransformStream(options);
    }
    else {
      return this._toReadableStream(options);
    }
  }
}

Term.prototype._toReadableStream = function(connection, options) {
  var stream;

  var _options = {};
  if (helper.isPlainObject(connection) && (typeof connection._isConnection === 'function') && (connection._isConnection() === true)) {
    //toStream make sure that options is an object
    helper.loopKeys(options, function(obj, key) {
      _options[key] = obj[key];
    });
    _options.cursor = true;
    stream = new ReadableStream(_options);
    this.run(connection, _options).then(function(cursor) {
      stream._setCursor(cursor);
      return null;
    }).error(function(error) {
      stream.emit('error', error);
    });
  }
  else {
    helper.loopKeys(connection, function(obj, key) {
      _options[key] = obj[key];
    });
    _options.cursor = true;
    stream = new ReadableStream(_options);
    this.run(_options).then(function(cursor) {
      stream._setCursor(cursor);
      return null;
    }).error(function(error) {
      stream.emit('error', error);
    });
  }
  return stream;
}

Term.prototype._toWritableStream = function(connection, options) {
  if (this._query[0] !== termTypes.TABLE) {
    throw new Error.ReqlDriverError('Cannot create a writable stream on something else than a table.');
  }

  if (helper.isPlainObject(connection) && (typeof connection._isConnection === 'function') && (connection._isConnection() === true)) {
    return new WritableStream(this, options, connection);
  }
  else {
    return new WritableStream(this, connection);
  }
}
Term.prototype._toTransformStream = function(connection, options) {
  if (this._query[0] !== termTypes.TABLE) {
    throw new Error.ReqlDriverError('Cannot create a writable stream on something else than a table.');
  }

  if (helper.isPlainObject(connection) && (typeof connection._isConnection === 'function') && (connection._isConnection() === true)) {
    return new TransformStream(this, options, connection);
  }
  else {
    return new TransformStream(this, connection);
  }
}


// Manipulating databases
Term.prototype.dbCreate = function(db) {
  // Check for arity is done in r.prototype.dbCreate
  this._noPrefix(this, 'dbCreate');

  var term = new Term(this._r);
  term._query.push(termTypes.DB_CREATE);
  var args = [new Term(this._r).expr(db)._query]
  term._fillArgs(args);
  return term;
}
Term.prototype.dbDrop = function(db) {
  this._noPrefix(this, 'dbDrop');

  var term = new Term(this._r);
  term._query.push(termTypes.DB_DROP);
  var args = [new Term(this._r).expr(db)._query]
  term._fillArgs(args);
  return term;
}
Term.prototype.dbList = function() {
  this._noPrefix(this, 'dbList');

  var term = new Term(this._r);
  term._query.push(termTypes.DB_LIST)
  return term;
}

// Manipulating Tables
Term.prototype.tableCreate = function(table, options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 1, 2, 'tableCreate', self);
  }


  var term = new Term(self._r);
  term._query.push(termTypes.TABLE_CREATE)

  var args = [];
  if (Array.isArray(self._query) && (self._query.length > 0)) {
    args.push(self); // Push db
  }
  args.push(new Term(self._r).expr(table))
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    // Check for non valid key
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'primaryKey')
          && (key !== 'durability')
          && (key !== 'shards')
          && (key !== 'replicas')
          && (key !== 'primaryReplicaTag')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `tableCreate`', self._query, 'Available options are primaryKey <string>, durability <string>, shards <number>, replicas <number/object>, primaryReplicaTag <object>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}

Term.prototype.tableDrop = function(table) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'tableDrop', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.TABLE_DROP)

  var args = [];
  if (!Array.isArray(this._query) || (this._query.length > 0)) {
    args.push(this); // push db
  }
  args.push(new Term(this._r).expr(table))
  term._fillArgs(args);
  return term;
}
Term.prototype.tableList = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'tableList', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.TABLE_LIST);

  var args = [];
  if (!Array.isArray(this._query) || (this._query.length > 0)) {
    args.push(this);
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.indexList = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'indexList', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.INDEX_LIST);
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.indexCreate = function(name, fn, options) {
  if (this._fastArityRange(arguments.length, 1, 3) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 1, 3, 'indexCreate', this);
  }

  if ((options == null) && (helper.isPlainObject(fn))) {
    options = fn;
    fn = undefined;
  }

  var term = new Term(this._r);
  term._query.push(termTypes.INDEX_CREATE);
  var args = [this];
  args.push(new Term(this._r).expr(name));
  if (typeof fn !== 'undefined') args.push(new Term(this._r).expr(fn)._wrap());
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    // There is no need to translate here
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'multi') && (key !== 'geo')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `indexCreate`', self._query, 'Available option is multi <bool> and geo <bool>');
      }
    });
    term._query.push(new Term(this._r).expr(options)._query);
  }
  return term;
}
Term.prototype.indexDrop = function(name) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'indexDrop', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.INDEX_DROP);
  var args = [this, new Term(this._r).expr(name)];
  term._fillArgs(args);
  return term;
}

Term.prototype.indexStatus = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  var term = new Term(this._r);
  term._query.push(termTypes.INDEX_STATUS);
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.indexWait = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  var term = new Term(this._r);
  term._query.push(termTypes.INDEX_WAIT);
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.indexRename = function(oldName, newName, options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 2, 3) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 2, 3, 'indexRename', self);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.INDEX_RENAME);
  var args = [this, new Term(this._r).expr(oldName), new Term(this._r).expr(newName)];
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if (key !== 'overwrite') {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `indexRename`', self._query, 'Available options are overwrite <bool>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }


  return term;
}
Term.prototype.changes = function(options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 0, 1, 'changes', self);
  }

  var term = new Term(self._r);
  term._query.push(termTypes.CHANGES);
  var args = [self];
  term._fillArgs(args);
  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'squash') && (key !== 'includeStates') && (key !== 'includeTypes')
          && (key !== 'includeInitial') && (key !== 'includeOffsets')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `changes`', self._query,
            'Available options are squash <bool>, includeInitial <bool>, includeStates <bool>, includeOffsets <bool>, includeTypes <bool>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}

// Writing data
Term.prototype.insert = function(documents, options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 1, 2, 'insert', self);
  }

  var term = new Term(self._r);
  term._query.push(termTypes.INSERT);
  var args = [self, new Term(self._r).expr(documents)];
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'returnChanges') && (key !== 'durability') && (key !== 'conflict')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `insert`', self._query, 'Available options are returnChanges <bool>, durability <string>, conflict <string>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.update = function(newValue, options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 1, 2, 'update', self);
  }

  var term = new Term(self._r);
  term._query.push(termTypes.UPDATE);
  var args = [self, new Term(self._r).expr(newValue)._wrap()];
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'returnChanges') && (key !== 'durability') && (key !== 'nonAtomic')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `update`', self._query, 'Available options are returnChanges <bool>, durability <string>, nonAtomic <bool>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.replace = function(newValue, options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 1, 2, 'replace', self);
  }

  var term = new Term(self._r);
  term._query.push(termTypes.REPLACE);
  var args = [self, new Term(self._r).expr(newValue)._wrap()];
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'returnChanges') && (key !== 'durability') && (key !== 'nonAtomic')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `replace`', self._query, 'Available options are returnChanges <bool>, durability <string>, nonAtomic <bool>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.delete = function(options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 0, 1, 'delete', self);
  }

  var term = new Term(self._r);
  term._query.push(termTypes.DELETE);
  var args = [self];
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'returnChanges') && (key !== 'durability')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `delete`', self._query, 'Available options are returnChanges <bool>, durability <string>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.sync = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'sync', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SYNC)
  var args = [this._query];
  term._fillArgs(args);
  return term;
}

// Selecting data
Term.prototype.db = function(db) {
  this._noPrefix(this, 'db');
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'db', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DB)
  var args = [new Term(this._r).expr(db)];
  term._fillArgs(args);
  return term;
}
Term.prototype.table = function(table, options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 1, 2, 'table', self);
  }

  var term = new Term(self._r);
  term._query.push(termTypes.TABLE)

  var args = [];
  if (Array.isArray(self._query) && (self._query.length > 0)) {
    args.push(self);
  }
  args.push(new Term(self._r).expr(table))
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if (key !== 'readMode') {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `table`', self._query, 'Available option is readMode <string>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.get = function(primaryKey) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'get', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.GET);
  var args = [this, new Term(this._r).expr(primaryKey)]
  term._fillArgs(args);
  return term;
}
Term.prototype.getAll = function() {
  // We explicitly _args here, so fastArityRange is not useful
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}

  var term = new Term(this._r);
  term._query.push(termTypes.GET_ALL);

  var args = [];
  args.push(this);
  for(var i=0; i<_args.length-1; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  if ((_args.length > 0) && (helper.isPlainObject(_args[_args.length-1])) && (_args[_args.length-1].index !== undefined)) {
    term._fillArgs(args);
    term._query.push(new Term(this._r).expr(translateOptions(_args[_args.length-1]))._query);
  }
  else if (_args.length > 0) {
    args.push(new Term(this._r).expr(_args[_args.length-1]))
    term._fillArgs(args);
  } else {
    term._fillArgs(args);
  }
  return term;
}
Term.prototype.between = function(start, end, options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 2, 3) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 2, 3, 'between', self);
  }

  var term = new Term(self._r);
  term._query.push(termTypes.BETWEEN);
  var args = [self, new Term(self._r).expr(start), new Term(self._r).expr(end)]
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'index') && (key !== 'leftBound') && (key !== 'rightBound')){
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `between`', self._query, 'Available options are index <string>, leftBound <string>, rightBound <string>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.minval = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.MINVAL);
  return term;
}
Term.prototype.maxval = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.MAXVAL);
  return term;
}

Term.prototype.filter = function(filter, options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 1, 2, 'filter', self);
  }

  var term = new Term(self._r);
  term._query.push(termTypes.FILTER);
  var args = [self, new Term(self._r).expr(filter)._wrap()]
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if (key !== 'default') {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `filter`', self._query, 'Available option is filter');
      }
    })
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}

// Joins
Term.prototype.innerJoin = function(sequence, predicate) {
  if (this._fastArity(arguments.length, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 2, 'innerJoin', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.INNER_JOIN);
  var args = [this._query];
  args.push(new Term(this._r).expr(sequence)._query);
  args.push(new Term(this._r).expr(predicate)._wrap()._query);
  term._fillArgs(args);

  return term;
}
Term.prototype.outerJoin = function(sequence, predicate) {
  if (this._fastArity(arguments.length, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 2, 'outerJoin', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.OUTER_JOIN);
  var args = [this];
  args.push(new Term(this._r).expr(sequence));
  args.push(new Term(this._r).expr(predicate)._wrap());
  term._fillArgs(args);

  return term;
}
Term.prototype.eqJoin = function(rightKey, sequence, options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 2, 3) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 2, 3, 'eqJoin', self);
  }

  var term = new Term(self._r);
  term._query.push(termTypes.EQ_JOIN);
  var args = [self];
  args.push(new Term(self._r).expr(rightKey)._wrap());
  args.push(new Term(self._r).expr(sequence));
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'index') && (key !== 'ordered')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `eqJoin`', self._query, 'Available options are index <string>, ordered <boolean>');
      }
    })
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.zip = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'zip', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.ZIP);
  var args = [this];
  term._fillArgs(args);
  return term;
}



// Transformation
Term.prototype.map = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'map', this);

  var term = new Term(this._r);
  term._query.push(termTypes.MAP);
  var args = [];
  if (!Array.isArray(this._query) || (this._query.length > 0)) {
    args.push(this);
  }
  for(var i=0; i<_args.length-1; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  // Make sure that we don't push undefined if no argument is passed to map,
  // in which case the server will handle the case and return an error.
  if (_args.length> 0) {
    args.push(new Term(this._r).expr(_args[_args.length-1])._wrap())
  }
  term._fillArgs(args);

  return term;
}
Term.prototype.withFields = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'withFields', this);

  var term = new Term(this._r);
  term._query.push(termTypes.WITH_FIELDS);
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);

  return term;
}
Term.prototype.concatMap = function(transformation) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'concatMap', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.CONCAT_MAP);
  var args = [this];
  args.push(new Term(this._r).expr(transformation)._wrap())
  term._fillArgs(args);

  return term;
}
Term.prototype.orderBy = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'orderBy', this);

  var term = new Term(this._r);
  term._query.push(termTypes.ORDER_BY);

  var args = [this];
  for(var i=0; i<_args.length-1; i++) {
    if ((_args[i] instanceof Term) &&
        ((_args[i]._query[0] === termTypes.DESC) || (_args[i]._query[0] === termTypes.ASC))) {
      args.push(new Term(this._r).expr(_args[i]))
    }
    else {
      args.push(new Term(this._r).expr(_args[i])._wrap())
    }
  }
  // We actually don't need to make the difference here, but...
  if ((_args.length > 0) && (helper.isPlainObject(_args[_args.length-1])) && (_args[_args.length-1].index !== undefined)) {
    term._fillArgs(args);
    term._query.push(new Term(this._r).expr(translateOptions(_args[_args.length-1]))._query);
  }
  else {
    if ((_args[_args.length-1] instanceof Term) &&
      ((_args[_args.length-1]._query[0] === termTypes.DESC) || (_args[_args.length-1]._query[0] === termTypes.ASC))) {
      args.push(new Term(this._r).expr(_args[_args.length-1]))
    }
    else {
      args.push(new Term(this._r).expr(_args[_args.length-1])._wrap())
    }
    term._fillArgs(args);
  }
  return term;

}
Term.prototype.desc = function(field) {
  this._noPrefix(this, 'desc');
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'desc', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DESC)
  var args = [new Term(this._r).expr(field)._wrap()];
  term._fillArgs(args);
  return term;
}
Term.prototype.asc = function(field) {
  this._noPrefix(this, 'asc');
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'asc', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.ASC)
  var args = [new Term(this._r).expr(field)._wrap()];
  term._fillArgs(args);
  return term;
}
Term.prototype.skip = function(value) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'skip', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SKIP)
  var args = [this, new Term(this._r).expr(value)]
  term._fillArgs(args);
  return term;
}
Term.prototype.limit = function(value) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'limit', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.LIMIT)
  var args = [this, new Term(this._r).expr(value)]
  term._fillArgs(args);
  return term;
}
Term.prototype.slice = function(start, end, options) {
  if (this._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 1, 3, 'slice', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SLICE);

  var args = [];
  args.push(this);
  args.push(new Term(this._r).expr(start));

  if ((end !== undefined) && (options !== undefined)) {
    args.push(new Term(this._r).expr(end));
    term._fillArgs(args);
    term._query.push(new Term(this._r).expr(translateOptions(options))._query);
  }
  else if ((end !== undefined) && (options === undefined)) {
    if (helper.isPlainObject(end) === false) {
      args.push(new Term(this._r).expr(end));
      term._fillArgs(args);
    }
    else {
      term._fillArgs(args);
      term._query.push(new Term(this._r).expr(translateOptions(end))._query);
    }
  }
  else { // end and options are both undefined
    term._fillArgs(args);
  }
  return term;
}
Term.prototype.nth = function(value) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'nth', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.NTH)
  var args = [this._query, new Term(this._r).expr(value)]
  term._fillArgs(args);
  return term;
}
Term.prototype.offsetsOf = function(predicate) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'indexesOf', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.OFFSETS_OF)
  var args = [this, new Term(this._r).expr(predicate)._wrap()];
  term._fillArgs(args);
  return term;
}
Term.prototype.indexesOf = Term.prototype.offsetsOf;

Term.prototype.isEmpty = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'isEmpty', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.IS_EMPTY)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.union = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}

  var term = new Term(this._r);
  term._query.push(termTypes.UNION)
  var args = [];
  if (!Array.isArray(this._query) || (this._query.length > 0)) {
    args.push(this);
  }
  for(var i=0; i<_args.length-1; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  if ((_args.length > 1) && (helper.isPlainObject(_args[_args.length-1])) && (_args[_args.length-1].interleave !== undefined)) {
    term._fillArgs(args);
    term._query.push(new Term(this._r).expr(translateOptions(_args[_args.length-1]))._query);
  }
  else if (_args.length > 0) {
    args.push(new Term(this._r).expr(_args[_args.length-1]))
    term._fillArgs(args);
  }
  return term;
}
Term.prototype.sample = function(size) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'sample', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SAMPLE)
  var args = [this, new Term(this._r).expr(size)];
  term._fillArgs(args);
  return term;
}

// Aggregations
Term.prototype.reduce = function(func) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'reduce', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.REDUCE)
  var args = [this, new Term(this._r).expr(func)._wrap()];
  term._fillArgs(args);
  return term;
}
Term.prototype.count = function(filter) {
  if (this._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 0, 1, 'count', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.COUNT);
  var args = [];
  args.push(this);
  if (filter !== undefined) {
    args.push(new Term(this._r).expr(filter)._wrap())
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.distinct = function(options) {
  var self= this;
  if (self._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 0, 1, 'distinct', self);
  }

  var term = new Term(self._r);
  term._query.push(termTypes.DISTINCT)
  var args = [self];
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    var keepGoing = true;
    helper.loopKeys(options, function(obj, key) {
      if ((keepGoing === true) && (key !== 'index')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `distinct`', self._query, 'Available option is index: <string>');
        keepGoing = false;
      }
    });
    if (keepGoing === true) {
      term._query.push(new Term(self._r).expr(translateOptions(options))._query);
    }
  }

  return term;
}
Term.prototype.group = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  var self = this;
  self._arityRange(_args, 1, Infinity, 'group', self);

  var term = new Term(self._r);
  term._query.push(termTypes.GROUP);
  var args = [self];
  for(var i=0; i<_args.length-1; i++) {
    args.push(new Term(self._r).expr(_args[i])._wrap())
  }
  if (_args.length > 0) {
    if (helper.isPlainObject(_args[_args.length-1])) {
      helper.loopKeys(_args[_args.length-1], function(obj, key) {
         if ((key !== 'index')
        && (key !==  'multi')) {
          throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `group`', self._query, 'Available options are index: <string>, multi <boolean>');
        }
      });
      term._fillArgs(args);
      term._query.push(new Term(self._r).expr(translateOptions(_args[_args.length-1]))._query);
    }
    else {
      args.push(new Term(self._r).expr(_args[_args.length-1])._wrap())
      term._fillArgs(args);
    }
  }
  else {
    term._fillArgs(args);
  }

  return term;
}
Term.prototype.split = function(separator, max) {
  if (this._fastArityRange(arguments.length, 0, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 0, 2, 'split', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SPLIT)
  var args = [this];
  if (separator !== undefined) {
    args.push(new Term(this._r).expr(separator))
    if (max !== undefined) {
      args.push(new Term(this._r).expr(max))
    }
  }
  term._fillArgs(args);

  return term;
}

Term.prototype.ungroup = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'ungroup', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.UNGROUP)
  var args = [this._query];
  term._fillArgs(args);
  return term;
}
Term.prototype.contains = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'contains', this);

  var term = new Term(this._r);
  term._query.push(termTypes.CONTAINS)
  var args = [this._query];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i])._wrap())
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.sum = function(field) {
  if (this._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 0, 1, 'sum', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SUM);
  var args = [this];
  if (field !== undefined) {
    args.push(new Term(this._r).expr(field)._wrap())
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.avg = function(field) {
  if (this._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 0, 1, 'avg', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.AVG)
  var args = [this];
  if (field !== undefined) {
    args.push(new Term(this._r).expr(field)._wrap())
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.min = function(field) {
  if (this._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 0, 1, 'min', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.MIN)
  var args = [this];
  if (field !== undefined) {
    if (helper.isPlainObject(field)) {
      term._fillArgs(args);
      term._query.push(new Term(this._r).expr(translateOptions(field))._query);
    }
    else {
      args.push(new Term(this._r).expr(field)._wrap());
      term._fillArgs(args);
    }
  }
  else {
    term._fillArgs(args);
  }
  return term;
}
Term.prototype.max = function(field) {
  if (this._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 0, 1, 'max', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.MAX)
  var args = [this];
  if (field !== undefined) {
    if (helper.isPlainObject(field)) {
      term._fillArgs(args);
      term._query.push(new Term(this._r).expr(translateOptions(field))._query);
    }
    else {
      args.push(new Term(this._r).expr(field)._wrap())
      term._fillArgs(args);
    }
  }
  else {
    term._fillArgs(args);
  }
  return term;
}
Term.prototype.fold = function(base, func, options) {
  if (this._fastArityRange(arguments.length, 2, 3) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 2, 3, 'range', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.FOLD)
  var args = [this, new Term(this._r).expr(base), new Term(this._r).expr(func)._wrap()];
  term._fillArgs(args);
  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'emit') && (key !== 'finalEmit')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `fold`. Available options are emit <function>, finalEmit <function>');
      }
    });
    term._query.push(new Term(this._r).expr(translateOptions(options))._query);
  }
  return term;
}



// Document manipulation
Term.prototype.row = function() {
  this._noPrefix(this, 'row');
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'r.row', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.IMPLICIT_VAR)
  return term;
}
Term.prototype.pluck = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'pluck', this);

  var term = new Term(this._r);
  term._query.push(termTypes.PLUCK)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.without = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'without', this);

  var term = new Term(this._r);
  term._query.push(termTypes.WITHOUT)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.merge = function(arg) {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'merge', this);

  var term = new Term(this._r);
  term._query.push(termTypes.MERGE)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i])._wrap())
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.literal = function(obj) {
  this._noPrefix(this, 'literal');
  // The test for arity is performed in r.literal

  var term = new Term(this._r);
  term._query.push(termTypes.LITERAL);
  if (arguments.length > 0) {
    var args = [new Term(this._r).expr(obj)];
    term._fillArgs(args);
  }
  return term;
}
Term.prototype.append = function(value) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'append', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.APPEND)
  var args = [this, new Term(this._r).expr(value)];
  term._fillArgs(args);
  return term;
}
Term.prototype.prepend = function(value) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'prepend', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.PREPEND)
  var args = [this, new Term(this._r).expr(value)];
  term._fillArgs(args);
  return term;
}
Term.prototype.difference = function(other) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'difference', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DIFFERENCE)
  var args = [this, new Term(this._r).expr(other)];
  term._fillArgs(args);
  return term;
}
Term.prototype.setInsert = function(other) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'setInsert', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SET_INSERT)
  var args = [this, new Term(this._r).expr(other)];
  term._fillArgs(args);
  return term;
}
Term.prototype.setUnion = function(other) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'setUnion', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SET_UNION)
  var args = [this, new Term(this._r).expr(other)];
  term._fillArgs(args);
  return term;
}
Term.prototype.setIntersection = function(other) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'setIntersection', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SET_INTERSECTION)
  var args = [this, new Term(this._r).expr(other)];
  term._fillArgs(args);
  return term;
}
Term.prototype.setDifference = function(other) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'setDifference', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SET_DIFFERENCE)
  var args = [this, new Term(this._r).expr(other)];
  term._fillArgs(args);
  return term;
}
Term.prototype.getField = function(field) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, '(...)', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.GET_FIELD)
  var args = [this, new Term(this._r).expr(field)];
  term._fillArgs(args);
  return term;
}
Term.prototype.bracket = function(field) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, '(...)', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.BRACKET)
  var args = [this, new Term(this._r).expr(field)];
  term._fillArgs(args);
  return term;
}

Term.prototype.hasFields = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'hasFields', this);

  var term = new Term(this._r);
  term._query.push(termTypes.HAS_FIELDS)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;

}
Term.prototype.insertAt = function(index, value) {
  if (this._fastArity(arguments.length, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 2, 'insertAt', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.INSERT_AT)
  var args = [this, new Term(this._r).expr(index), new Term(this._r).expr(value)];
  term._fillArgs(args);
  return term;
}
Term.prototype.spliceAt = function(index, array) {
  if (this._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 1, 2, 'spliceAt', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SPLICE_AT)
  var args = [this, new Term(this._r).expr(index), new Term(this._r).expr(array)];
  term._fillArgs(args);
  return term;
}
Term.prototype.deleteAt = function(start, end) {
  if (this._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 1, 2, 'deleteAt', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DELETE_AT);
  var args = [this, new Term(this._r).expr(start)];
  if (end !== undefined) {
    args.push(new Term(this._r).expr(end))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.changeAt = function(index, value) {
  if (this._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 1, 2, 'changeAt', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.CHANGE_AT);
  var args = [this];
  args.push(new Term(this._r).expr(index))
  args.push(new Term(this._r).expr(value))
  term._fillArgs(args);
  return term;
}
Term.prototype.keys = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'keys', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.KEYS)
  var args = [this];
  term._fillArgs(args);
  return term;
}

Term.prototype.values = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'keys', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.VALUES)
  var args = [this];
  term._fillArgs(args);
  return term;
}

Term.prototype.object = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._noPrefix(this, 'object');
  this._arityRange(_args, 0, Infinity, 'object', this);

  var term = new Term(this._r);
  term._query.push(termTypes.OBJECT)
  var args = [];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}



// String
Term.prototype.match = function(regex) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'match', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.MATCH)
  var args = [this, new Term(this._r).expr(regex)];
  term._fillArgs(args);
  return term;
}
Term.prototype.upcase = function(regex) {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'upcase', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.UPCASE)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.downcase = function(regex) {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'upcase', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DOWNCASE)
  var args = [this];
  term._fillArgs(args);
  return term;
}




// Math and Logic
Term.prototype.add = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'add', this);

  var term = new Term(this._r);
  term._query.push(termTypes.ADD)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.sub = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'sub', this);

  var term = new Term(this._r);
  term._query.push(termTypes.SUB)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.mul = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'mul', this);

  var term = new Term(this._r);
  term._query.push(termTypes.MUL)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.div = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'div', this);

  var term = new Term(this._r);
  term._query.push(termTypes.DIV)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.mod = function(b) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'mod', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.MOD)
  var args = [this, new Term(this._r).expr(b)];
  term._fillArgs(args);
  return term;
}
Term.prototype.and = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}

  var term = new Term(this._r);
  term._query.push(termTypes.AND)
  var args = [];
  if (!Array.isArray(this._query) || (this._query.length > 0)) {
    args.push(this);
  }
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.or = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}

  var term = new Term(this._r);
  term._query.push(termTypes.OR)
  var args = [];
  if (!Array.isArray(this._query) || (this._query.length > 0)) {
    args.push(this);
  }
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.eq = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'eq', this);

  var term = new Term(this._r);
  term._query.push(termTypes.EQ)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.ne = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'ne', this);

  var term = new Term(this._r);
  term._query.push(termTypes.NE)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.gt = function(other) {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'gt', this);

  var term = new Term(this._r);
  term._query.push(termTypes.GT)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.ge = function(other) {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'ge', this);

  var term = new Term(this._r);
  term._query.push(termTypes.GE)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.lt = function(other) {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'lt', this);

  var term = new Term(this._r);
  term._query.push(termTypes.LT)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.le = function(other) {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 1, Infinity, 'le', this);

  var term = new Term(this._r);
  term._query.push(termTypes.LE)
  var args = [this];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.not = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'not', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.NOT)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.random = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  var self = this;
  self._noPrefix(this, 'random');
  self._arityRange(_args, 0, 3, 'random', self);

  var term = new Term(self._r);
  term._query.push(termTypes.RANDOM);

  var args = [];
  for(var i=0; i<_args.length-1; i++) {
    args.push(new Term(self._r).expr(_args[i]))
  }
  if (_args.length > 0) {
    if (helper.isPlainObject(_args[_args.length-1])) {
      helper.loopKeys(_args[_args.length-1], function(obj, key) {
        if (key !== 'float') {
          throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `random`', self._query, 'Available option is float: <boolean>');
        }
      });
      term._fillArgs(args);
      term._query.push(new Term(self._r).expr(translateOptions(_args[_args.length-1]))._query);
    }
    else {
      args.push(new Term(self._r).expr(_args[_args.length-1]))
      term._fillArgs(args);
    }
  }
  else {
    term._fillArgs(args);
  }
  return term;
}
Term.prototype.floor = function() {
  if (this._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 0, 1, 'floor', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.FLOOR)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.ceil = function() {
  if (this._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 0, 1, 'ceil', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.CEIL)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.round = function() {
  if (this._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 0, 1, 'round', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.ROUND)
  var args = [this];
  term._fillArgs(args);
  return term;
}

// Dates and times
Term.prototype.now = function() {
  this._noPrefix(this, 'now');

  var term = new Term(this._r);
  term._query.push(termTypes.NOW)
  return term;
}
Term.prototype.time = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._noPrefix(this, 'time');
  // Special check for arity
  var foundArgs = false;
  for(var i=0; i<_args.length; i++) {
    if ((_args[i] instanceof Term) && (_args[i]._query[0] === termTypes.ARGS)) {
      foundArgs = true;
      break;
    }
  }
  if (foundArgs === false) {
    if ((_args.length !== 4) && (_args.length !== 7)) {
      throw new Error.ReqlDriverError('`r.time` called with '+_args.length+' argument'+((_args.length>1)?'s':''), null, '`r.time` takes 4 or 7 arguments');
    }
  }

  var term = new Term(this._r);
  term._query.push(termTypes.TIME)
  var args = [];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.epochTime = function(epochTime) {
  this._noPrefix(this, 'epochTime');

  var term = new Term(this._r);
  term._query.push(termTypes.EPOCH_TIME)
  var args = [new Term(this._r).expr(epochTime)];
  term._fillArgs(args);
  return term;
}
Term.prototype.ISO8601 = function(isoTime, options) {
  this._noPrefix(this, 'ISO8601');
  if (this._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 1, 2, 'ISO8601', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.ISO8601)
  var args = [new Term(this._r).expr(isoTime)._query];
  term._fillArgs(args);
  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if (key !== 'defaultTimezone') {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `ISO8601`. Available options are primaryKey <string>, durability <string>, datancenter <string>');
      }
    });
    term._query.push(new Term(this._r).expr(translateOptions(options))._query);
  }

  return term;
}
Term.prototype.inTimezone = function(timezone) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'inTimezone', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.IN_TIMEZONE)
  var args = [this, new Term(this._r).expr(timezone)];
  term._fillArgs(args);
  return term;
}
Term.prototype.timezone = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'timezone', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.TIMEZONE)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.during = function(left, right, options) {
  if (this._fastArityRange(arguments.length, 2, 3) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 2, 3, 'during', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DURING);
  var args = [];
  args.push(this);
  args.push(new Term(this._r).expr(left));
  args.push(new Term(this._r).expr(right));

  term._fillArgs(args);
  if (helper.isPlainObject(options)) {
    term._query.push(new Term(this._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.date = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'date', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DATE)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.timeOfDay = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'timeOfDay', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.TIME_OF_DAY)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.year = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'year', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.YEAR)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.month = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'month', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.MONTH)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.day = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'day', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DAY)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.dayOfYear = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'dayOfYear', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DAY_OF_YEAR)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.dayOfWeek = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'dayOfWeek', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DAY_OF_WEEK)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.hours = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'hours', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.HOURS)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.minutes = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'minutes', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.MINUTES)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.seconds = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'seconds', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.SECONDS)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.toISO8601 = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'toISO8601', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.TO_ISO8601)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.toEpochTime = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'toEpochTime', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.TO_EPOCH_TIME)
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.monday = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.MONDAY);
  return term;
}
Term.prototype.tuesday = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.TUESDAY);
  return term;
}
Term.prototype.wednesday = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.WEDNESDAY);
  return term;
}
Term.prototype.thursday = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.THURSDAY);
  return term;
}
Term.prototype.friday = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.FRIDAY);
  return term;
}
Term.prototype.saturday = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.SATURDAY);
  return term;
}
Term.prototype.sunday = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.SUNDAY);
  return term;
}

Term.prototype.january = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.JANUARY);
  return term;
}
Term.prototype.february = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.FEBRUARY);
  return term;
}
Term.prototype.march = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.MARCH);
  return term;
}
Term.prototype.april = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.APRIL);
  return term;
}
Term.prototype.may = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.MAY);
  return term;
}
Term.prototype.june = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.JUNE);
  return term;
}
Term.prototype.july = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.JULY);
  return term;
}
Term.prototype.august = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.AUGUST);
  return term;
}
Term.prototype.september = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.SEPTEMBER);
  return term;
}
Term.prototype.october = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.OCTOBER);
  return term;
}
Term.prototype.november = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.NOVEMBER);
  return term;
}
Term.prototype.december = function() {
  var term = new Term(this._r);
  term._query.push(termTypes.DECEMBER);
  return term;
}


Term.prototype.args = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._noPrefix(this, 'args');

  var term = new Term(this._r);
  term._query.push(termTypes.ARGS);
  var args = [];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.do = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}

  var term = new Term(this._r);
  term._query.push(termTypes.FUNCALL);
  var args = [];
  if (_args.length > 0) {
    args.push(new Term(this._r).expr(_args[_args.length-1])._wrap()._query);
  }
  args.push(this);
  for(var i=0; i<_args.length-1; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}


Term.prototype.branch = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  this._arityRange(_args, 2, Infinity, '', this);

  var term = new Term(this._r);
  term._query.push(termTypes.BRANCH)
  var args = [];
  args.push(this);
  for(var i=0; i<_len; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.forEach = function(func) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'forEach', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.FOR_EACH);
  var args = [this, new Term(this._r).expr(func)._wrap()];
  term._fillArgs(args);
  return term;
}
Term.prototype.default = function(expression) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'default', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.DEFAULT);
  var args = [this, new Term(this._r).expr(expression)];
  term._fillArgs(args);
  return term;
}
Term.prototype.expr = function(expression, nestingLevel) {
  var self = this;
  self._noPrefix(self, 'expr');
  if (self._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 1, 2, 'expr', self);
  }

  // undefined will be caught in the last else
  var ar, obj;

  if (expression === undefined) {
    var error = 'Cannot convert `undefined` with r.expr()';
    return new Term(self._r, expression, error);
  }

  var _nestingLevel = nestingLevel;
  if (_nestingLevel == null) {
    _nestingLevel = self._r.nestingLevel;
  }
  //if (nestingLevel == null) nestingLevel = self._r.nestingLevel;
  if (_nestingLevel < 0) throw new Error.ReqlDriverError('Nesting depth limit exceeded.\nYou probably have a circular reference somewhere')

  if (expression instanceof Term) {
    return expression;
  }
  else if (expression instanceof Function) {
    return new Func(self._r, expression);
  }
  else if (expression instanceof Date) {
    return new Term(self._r).ISO8601(expression.toISOString())
  }
  else if (Array.isArray(expression)) {
    var term = new Term(self._r);
    term._query.push(termTypes.MAKE_ARRAY);

    var args = [];
    for(var i=0; i<expression.length; i++) {
      args.push(new Term(self._r).expr(expression[i], _nestingLevel-1))
    }
    term._fillArgs(args);
    return term;
  }
  else if (expression instanceof Buffer) {
    return self._r.binary(expression);
  }
  else if (helper.isPlainObject(expression)) {
    var term = new Term(self._r);
    var optArgs = {};
    var foundError = false;
    helper.loopKeys(expression, function(expression, key) {
      if (expression[key] !== undefined) {
        var optArg = new Term(self._r).expr(expression[key], _nestingLevel-1);
        if (optArg instanceof Term && !foundError && optArg._error != null) {
          foundError = true;
          term._error = optArg._error;
          term._frames = [key].concat(optArg._frames);
        }
        optArgs[key] = optArg._query;
      }
    });
    term._query = optArgs;
    return term;
  }
  else { // Primitive
    if (expression === null) {
      return new Term(self._r, null, expression);
    }
    else if (typeof expression === 'string') {
      return new Term(self._r, expression);
    }
    else if (typeof expression === 'number') {
      if (expression !== expression) {
        var error = 'Cannot convert `NaN` to JSON';
        return new Term(self._r, expression, error);
      }
      else if (!isFinite(expression)) {
        var error = 'Cannot convert `Infinity` to JSON';
        return new Term(self._r, expression, error);
      }
      return new Term(self._r, expression);
    }
    else if (typeof expression === 'boolean') {
      return new Term(self._r, expression);
    }
    else {
      self._error = new Error.ReqlDriverError('Cannot convert `'+expression+'` to datum.');
      self._frames = [];
    }
  }
  return self;
}

Term.prototype.binary = function(bin) {
  this._noPrefix(this, 'binary');
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'binary', this);
  }

  var term;
  if (bin instanceof Buffer) {
    // We could use BINARY, and coerce `bin` to an ASCII string, but that
    // will break if there is a null char
    term = new Term(this._r, {
      $reql_type$: 'BINARY',
      data: bin.toString('base64')
    });
  }
  else {
    term = new Term(this._r);
    term._query.push(termTypes.BINARY)
    var args = [new Term(this._r).expr(bin)];
    term._fillArgs(args);
  }
  return term;
}

Term.prototype.js = function(arg, options) {
  this._noPrefix(this, 'js');
  if (this._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 1, 2, 'js', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.JAVASCRIPT)
  var args = [new Term(this._r).expr(arg)];
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    term._query.push(new Term(this._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.coerceTo = function(type) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'coerceTo', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.COERCE_TO)
  var args = [this, new Term(this._r).expr(type)];
  term._fillArgs(args);
  return term;
}
Term.prototype.typeOf = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'typeOf', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.TYPE_OF);
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.info = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'info', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.INFO);
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.json = function(json) {
  this._noPrefix(this, 'json');
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'info', this);
  }
  /*
  if ((/\\u0000/.test(json)) || (/\0/.test(json))) {
    this._error = new Error.ReqlDriverError('The null character is currently not supported by RethinkDB');
  }
  */
  var term = new Term(this._r);
  term._query.push(termTypes.JSON);

  var args = [new Term(this._r).expr(json)];
  term._fillArgs(args);
  return term;
}
Term.prototype.http = function(url, options) {
  this._noPrefix(this, 'http');
  if (this._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 1, 2, 'http', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.HTTP);
  var args = [new Term(this._r).expr(url)];
  term._fillArgs(args);
  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'timeout')
        && (key !==  'attempts')
        && (key !==  'redirects')
        && (key !==  'verify')
        && (key !==  'resultFormat')
        && (key !==  'method')
        && (key !==  'auth')
        && (key !==  'params')
        && (key !==  'header')
        && (key !==  'data')
        && (key !==  'page')
        && (key !==  'pageLimit')
        && (key !==  '')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `http`. Available options are attempts <number>, redirects <number>, verify <boolean>, resultFormat: <string>, method: <string>, auth: <object>, params: <object>, header: <string>, data: <string>, page: <string/function>, pageLimit: <number>');
      }
    });

    term._query.push(new Term(this._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.uuid = function(str) {
  this._noPrefix(this, 'uuid');

  var term = new Term(this._r);
  term._query.push(termTypes.UUID)

  if (str !== undefined) {
    var args = [new Term(this._r).expr(str)];
    term._fillArgs(args);
  }
  return term;
}


Term.prototype.circle = function(center, radius, options) {
  var self = this;

  // Arity check is done by r.circle
  self._noPrefix(self, 'circle');
  var term = new Term(self._r);
  term._query.push(termTypes.CIRCLE);
  var args = [new Term(self._r).expr(center), new Term(self._r).expr(radius)];
  term._fillArgs(args);

  if (helper.isPlainObject(options)) {
    // There is no need to translate here
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'numVertices') && (key !== 'geoSystem') && (key !== 'unit') && (key !== 'fill')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `circle`', self._query, 'Available options are numVertices <number>, geoSsystem <string>, unit <string> and fill <bool>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }

  return term;
}
Term.prototype.distance = function(geometry, options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 1, 2, 'distance', self);
  }
  var term = new Term(self._r);
  term._query.push(termTypes.DISTANCE);
  var args = [self, new Term(self._r).expr(geometry)];
  term._fillArgs(args);
  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'geoSystem') && (key !== 'unit')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `distance`', self._query, 'Available options are geoSystem <string>, unit <string>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;
}
Term.prototype.fill = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'fill', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.FILL);
  var args = [this];
  term._fillArgs(args);
  return term;
}

Term.prototype.geojson = function(geometry) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'geojson', this);
  }
  this._noPrefix(this, 'geojson');
  var term = new Term(this._r);
  term._query.push(termTypes.GEOJSON);
  var args = [new Term(this._r).expr(geometry)];
  term._fillArgs(args);
  return term;
}

Term.prototype.toGeojson = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'toGeojson', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.TO_GEOJSON);
  var args = [this];
  term._fillArgs(args);
  return term;
}

Term.prototype.getIntersecting = function(geometry, options) {
  if (this._fastArity(arguments.length, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 2, 'getIntersecting', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.GET_INTERSECTING);
  var args = [this, new Term(this._r).expr(geometry)];
  term._fillArgs(args);
  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if (key !== 'index') {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `distance`', self._query, 'Available options are index <string>');
      }
    });
    term._query.push(new Term(this._r).expr(translateOptions(options))._query);
  }
  return term;
}

Term.prototype.getNearest = function(geometry, options) {
  var self = this;
  if (self._fastArity(arguments.length, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arity(_args, 2, 'getNearest', self);
  }
  var term = new Term(self._r);
  term._query.push(termTypes.GET_NEAREST);
  var args = [self, new Term(self._r).expr(geometry)];
  term._fillArgs(args);
  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'index') && (key !== 'maxResults') && (key !== 'maxDist') && (key !== 'unit') && (key !== 'geoSystem')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `getNearest`', self._query, 'Available options are index <string>, maxResults <number>, maxDist <number>, unit <string>, geoSystem <string>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }
  return term;

}

Term.prototype.includes = function(geometry) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'includes', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.INCLUDES);
  var args = [this, new Term(this._r).expr(geometry)];
  term._fillArgs(args);
  return term;
}

Term.prototype.intersects = function(geometry) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'intersects', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.INTERSECTS);
  var args = [this, new Term(this._r).expr(geometry)];
  term._fillArgs(args);
  return term;
}

Term.prototype.line = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  // Arity check is done by r.line
  this._noPrefix(this, 'line');

  var term = new Term(this._r);
  term._query.push(termTypes.LINE);

  var args = [];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);
  return term;
}

Term.prototype.point = function(longitude, latitude) {
  // Arity check is done by r.point
  this._noPrefix(this, 'point');

  var term = new Term(this._r);
  term._query.push(termTypes.POINT);
  var args = [new Term(this._r).expr(longitude), new Term(this._r).expr(latitude)];
  term._fillArgs(args);
  return term;
}

Term.prototype.polygon = function() {
  var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
  // Arity check is done by r.polygon
  this._noPrefix(this, 'polygon');

  var term = new Term(this._r);
  term._query.push(termTypes.POLYGON);

  var args = [];
  for(var i=0; i<_args.length; i++) {
    args.push(new Term(this._r).expr(_args[i]))
  }
  term._fillArgs(args);

  return term;
}

Term.prototype.polygonSub = function(geometry) {
  if (this._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 1, 'polygonSub', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.POLYGON_SUB);
  var args = [this, new Term(this._r).expr(geometry)];
  term._fillArgs(args);
  return term;
}

Term.prototype.range = function(start, end) {
  this._noPrefix(this, 'range');
  if (this._fastArityRange(arguments.length, 1, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arityRange(_args, 1, 2, 'r.range', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.RANGE);
  var args = [];
  args.push(new Term(this._r).expr(start));
  if (end !== undefined) {
    args.push(new Term(this._r).expr(end));
  }
  term._fillArgs(args);
  return term;
}
Term.prototype.toJsonString = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'toJSON', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.TO_JSON_STRING);
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.toJSON = Term.prototype.toJsonString;

Term.prototype.config = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'config', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.CONFIG);
  var args = [this];
  term._fillArgs(args);
  return term;
}

Term.prototype.status = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'status', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.STATUS);
  var args = [this];
  term._fillArgs(args);
  return term;
}

Term.prototype.wait = function(options) {
  var self = this;
  if (self._fastArityRange(arguments.length, 0, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arityRange(_args, 0, 1, 'wait', self);
  }
  var term = new Term(self._r);
  term._query.push(termTypes.WAIT);
  var args = [self];
  term._fillArgs(args);
  if (helper.isPlainObject(options)) {
    helper.loopKeys(options, function(obj, key) {
      if ((key !== 'waitFor') && (key !== 'timeout')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `wait`', self._query, 'Available options are waitFor: <string>, timeout: <number>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(options))._query);
  }

  return term;
}

Term.prototype.reconfigure = function(config) {
  var self = this;
  if (self._fastArity(arguments.length, 1) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    self._arity(_args, 1, 'reconfigure', self);
  }
  var term = new Term(self._r);
  term._query.push(termTypes.RECONFIGURE);

  var args = [this];
  term._fillArgs(args);
  if (helper.isPlainObject(config)) {
    helper.loopKeys(config, function(obj, key) {
      if ((key !== 'shards') && (key !== 'replicas') &&
        (key !== 'dryRun') && (key !== 'primaryReplicaTag') &&
        (key !== 'nonvotingReplicaTags') && (key !== 'emergencyRepair')) {
        throw new Error.ReqlDriverError('Unrecognized option `'+key+'` in `reconfigure`', self._query, 'Available options are shards: <number>, replicas: <number>, primaryReplicaTag: <object>, dryRun <boolean>, emergencyRepair: <string>, nonvotingReplicaTags: <array<string>>');
      }
    });
    term._query.push(new Term(self._r).expr(translateOptions(config))._query);
  }
  else {
    throw new Error.ReqlDriverError('First argument of `reconfigure` must be an object');
  }
  return term;
}

Term.prototype.rebalance = function() {
  if (this._fastArity(arguments.length, 0) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 0, 'rebalance', this);
  }
  var term = new Term(this._r);
  term._query.push(termTypes.REBALANCE);
  var args = [this];
  term._fillArgs(args);
  return term;
}
Term.prototype.grant = function(name, access) {
  if (this._fastArity(arguments.length, 2) === false) {
    var _len = arguments.length;var _args = new Array(_len); for(var _i = 0; _i < _len; _i++) {_args[_i] = arguments[_i];}
    this._arity(_args, 2, 'grant', this);
  }

  var term = new Term(this._r);
  term._query.push(termTypes.GRANT)
  var args = [this, new Term(this._r).expr(name), new Term(this._r).expr(access)];
  term._fillArgs(args);
  return term;
}


Term.prototype.then = function(resolve, reject) {
  return this.run().then(resolve, reject);
}
Term.prototype.error = function(reject) {
  return this.run().error(reject);
}
Term.prototype.catch = function(reject) {
  return this.run().catch(reject);
}
Term.prototype.finally = function(handler) {
  return this.run().finally(handler);
}
Term.prototype.delay = function(msecs) {
  return this.run().delay(msecs);
}

Term.prototype.toString = function() {
  return Error.generateBacktrace(this._query, 0, null, [], {indent: 0, extra: 0}).str;
}

Term.prototype._wrap = function() {
  var self = this;
  if (helper.hasImplicit(this._query)) {
    if (this._query[0] === termTypes.ARGS) {
      throw new Error.ReqlDriverError('Implicit variable `r.row` cannot be used inside `r.args`')
    }
    //Must pass at least one variable to the function or it won't accept r.row
    return new Term(this._r).expr(function(doc) { return self; })
  }
  else {
    return self;
  }
}

Term.prototype._fillArgs = function(args) {
  var foundError = false;
  var internalArgs = [];
  for(var i=0; i<args.length; i++) {
  if (args[i] instanceof Term) {
    internalArgs.push(args[i]._query);
    if (!foundError && (args[i]._error != null)) {
    this._error = args[i]._error;
    this._frames = args[i]._frames;
    this._frames.unshift(i);
    foundError = true;
    }
  }
  else {
    internalArgs.push(args[i]);
  }
  }
  this._query.push(internalArgs);
  return this;
}

Term.prototype._translateArgs = {
  returnChanges: 'return_changes',
  includeInitial: 'include_initial',
  primaryKey: 'primary_key',
  readMode: 'read_mode',
  nonAtomic: 'non_atomic',
  leftBound: 'left_bound',
  rightBound: 'right_bound',
  defaultTimezone: 'default_timezone',
  noReply: 'noreply',
  resultFormat: 'result_format',
  pageLimit: 'page_limit',
  arrayLimit: 'array_limit',
  numVertices: 'num_vertices',
  geoSystem: 'geo_system',
  maxResults: 'max_results',
  maxDist: 'max_dist',
  dryRun: 'dry_run',
  waitFor: 'wait_for',
  includeStates: 'include_states',
  primaryReplicaTag: 'primary_replica_tag',
  emergencyRepair: 'emergency_repair',
  minBatchRows: 'min_batch_rows',
  maxBatchRows: 'max_batch_rows',
  maxBatchBytes: 'max_batch_bytes',
  maxBatchSeconds: 'max_batch_seconds',
  firstBatchScaledownFactor: 'first_batch_scaledown_factor',
  includeOffsets: 'include_offsets',
  includeTypes: 'include_types',
  finalEmit: 'final_emit'
}
function translateOptions(options) {
  var translatedOpt = {};
  helper.loopKeys(options, function(options, key) {
    var keyServer = Term.prototype._translateArgs[key] || key;
    translatedOpt[keyServer] = options[key];
  });
  return translatedOpt;
}
Term.prototype._setNestingLevel = function(nestingLevel) {
  Term.prototype._nestingLevel = nestingLevel;
}
Term.prototype._setArrayLimit = function(arrayLimit) {
  Term.prototype._arrayLimit = arrayLimit;
}


Term.prototype._noPrefix = function(term, method) {
  if ((!Array.isArray(term._query)) || (term._query.length > 0)) {
    throw new Error.ReqlDriverError('`'+method+'` is not defined', term._query);
  }
}
Term.prototype._arityRange = function(args, min, max, method, term) {
  var foundArgs = false;
  if (args.length < min) {
    for(var i=0; i<args.length; i++) {
      if ((args[i] instanceof Term) && (args[i]._query[0] === termTypes.ARGS)) {
        foundArgs = true;
        break;
      }
    }
    if (foundArgs === false) {
      throw new Error.ReqlDriverError('`'+method+'` takes at least '+min+' argument'+((min>1)?'s':'')+', '+args.length+' provided', term._query);
    }
  }
  else if (args.length > max) {
    for(var i=0; i<args.length; i++) {
      if ((args[i] instanceof Term) && (args[i]._query[0] === termTypes.ARGS)) {
        foundArgs = true;
        break;
      }
    }
    if (foundArgs === false) {
      throw new Error.ReqlDriverError('`'+method+'` takes at most '+max+' argument'+((max>1)?'s':'')+', '+args.length+' provided', term._query);
    }
  }
}
Term.prototype._arity = function(args, num, method, term) {
  var foundArgs = false;
  for(var i=0; i<args.length; i++) {
    if ((args[i] instanceof Term) && (args[i]._query[0] === termTypes.ARGS)) {
      foundArgs = true;
      break;
    }
  }
  if (foundArgs === false) {
    throw new Error.ReqlDriverError('`'+method+'` takes '+num+' argument'+((num>1)?'s':'')+', '+args.length+' provided', term._query);
  }
}
// Cheap arity check. If it fails, return false, and then we are expected to call _arity/_arityRange
Term.prototype._fastArity = function(len, num) {
  return (len === num);
}
Term.prototype._fastArityRange = function(len, min, max) {
  return ((len >= min) && (len <= max));
}


// Datums
function Func(r, func) {
  // We can retrieve the names of the arguments with
  // func.toString().match(/\(([^\)]*)\)/)[1].split(/\s*,\s*/)

  var term = new Term(r);
  term._query.push(termTypes.FUNC);
  var args = [];
  var argVars = [];
  var argNums = [];

  for(var i=0; i<func.length; i++) {
    argVars.push(new Var(r, r.nextVarId));
    argNums.push(r.nextVarId);

    if (r.nextVarId === 9007199254740992) { // That seems like overdoing it... but well maybe...
      r.nextVarId = 0;
    }
    else {
      r.nextVarId++;
    }
  }

  var body = func.apply(func, argVars)
  if (body === undefined) throw new Error.ReqlDriverError('Anonymous function returned `undefined`. Did you forget a `return`? In:\n'+func.toString(), this._query);
  body = new Term(r).expr(body);
  args.push(new Term(r).expr(argNums));
  args.push(body);

  term._fillArgs(args);

  return term;
}
Func.prototype.nextVarId = 1;

function Var(r, id) {
  var term = new Term(r);
  term._query.push(termTypes.VAR)
  term._query.push([new Term(r).expr(id)._query])
  return term;
}

module.exports = Term;


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/transform_stream.js":
/*!*************************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/transform_stream.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! stream */ "stream").Transform;
var Cursor = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/cursor.js */ "../node_modules/rethinkdbdash/lib/cursor.js");
var util = __webpack_require__(/*! util */ "util");

// Experimental, but should work fine.
function TransformStream(table, options, connection) {
  this._table = table;
  this._r = table._r;
  this._options = options;
  this._cache = [];
  this._pendingCallback = null;
  this._ended = false;
  this._inserting = false;
  this._delayed = false;
  this._connection = connection;
  this._highWaterMark = options.highWaterMark || 100;
  this._insertOptions = {};
  this._insertOptions.durability = options.durability || 'hard';
  this._insertOptions.conflict = options.conflict || 'error';
  this._insertOptions.returnChanges = options.returnChanges || true;

  // Internal option to run some tests
  if (options.debug === true) {
    this._sequence = [];
  }

  Transform.call(this, {
    objectMode: true,
    highWaterMark: this._highWaterMark
  });
};
util.inherits(TransformStream, Transform);

TransformStream.prototype._transform = function(value, encoding, done) {
  this._cache.push(value);
  this._next(value, encoding, done);
}

// Everytime we want to insert but do not have a full buffer,
// we recurse with setImmediate to give a chance to the input
// stream to push a few more elements
TransformStream.prototype._next = function(value, encoding, done) {
  if ((this._writableState.lastBufferedRequest != null) && (this._writableState.lastBufferedRequest.chunk !== value)) {
    // There's more data to buffer
    if (this._cache.length < this._highWaterMark) {
      this._delayed = false;
      // Call done now, and more data will be put in the cache
      done();
    }
    else {
      if (this._inserting === false) {
        if (this._delayed === true) {
          // We have to flush
          this._delayed = false;
          this._insert();
          // Fill the buffer while we are inserting data
          done();
        }
        else {
          var self = this;
          this._delayed = true;
          setImmediate(function() {
            self._next(value, encoding, done);
          })
        }

      }
      else {
        // to call when we are dong inserting to keep buffering
        this._pendingCallback = done;
      }
    }
  }
  else { // We just pushed the last element in the internal buffer
    if (this._inserting === false) {
      if (this._delayed === true) {
        this._delayed = false;
        // to call when we are dong inserting to maybe flag the end
        this._insert();
        // We can call done now, because we have _flush to close the stream
        done();
      }
      else {
        var self = this;
        this._delayed = true;
        setImmediate(function() {
          self._next(value, encoding, done);
        })
      }
    }
    else {
      this._delayed = false;
      // There is nothing left in the internal buffer
      // But something is already inserting stuff.
      if (this._cache.length < this._highWaterMark-1) {
        // Call done, to attempt to buffer more
        // This may trigger _flush
        //this._pendingCallback = done;
        done();
      }
      else {
        this._pendingCallback = done;
      }
    }
  }
}

TransformStream.prototype._insert = function() {
  var self = this;
  self._inserting = true;

  var cache = self._cache;
  self._cache = [];

  if (Array.isArray(self._sequence)) {
    self._sequence.push(cache.length);
  }

  var pendingCallback = self._pendingCallback;
  self._pendingCallback = null;
  if (typeof pendingCallback === 'function') {
    pendingCallback();
  }

  var query = self._table.insert(cache, self._insertOptions);
  if (self._options.format === 'primaryKey') {
    query = query.do(function(result) {
      return self._r.branch(
        result('errors').eq(0),
        self._table.config()('primary_key').do(function(primaryKey) {
          return result('changes')('new_val')(primaryKey)
        }),
        result(self._r.error(result('errors').coerceTo('STRING').add(' errors returned. First error:\n').add(result('first_error'))))
      )
    })
  }

  query.run(self._connection).then(function(result) {
    self._inserting = false;
    if (self._options.format === 'primaryKey') {
      for(var i=0; i<result.length; i++) {
        self.push(result[i]);
      }
    }
    else {
      if (result.errors > 0) {
        self._inserting = false;
        self.emit('error', new Error('Failed to insert some documents:'+JSON.stringify(result, null, 2)));
      }
      else {
        if (self._insertOptions.returnChanges === true) {
          for(var i=0; i<result.changes.length; i++) {
            self.push(result.changes[i].new_val);
          }
        }
      }
    }

    pendingCallback = self._pendingCallback
    self._pendingCallback = null;
    if (typeof pendingCallback === 'function') {
      // Mean that we can buffer more
      pendingCallback();
    }
    else if (self._ended !== true) {
      if (((((self._writableState.lastBufferedRequest === null) ||
          self._writableState.lastBufferedRequest.chunk === self._cache[self._cache.length-1])))
        && (self._cache.length > 0)) {
          self._insert();
      }
    }
    else if (self._ended === true) {
      if (self._cache.length > 0) {
        self._insert();
      }
      else {
        if (typeof self._flushCallback === 'function') {
          self._flushCallback();
        }
        self.push(null);
      }
    }
  }).error(function(error) {
    self._inserting = false;
    self.emit('error', error);
  });
}

TransformStream.prototype._flush = function(done) {
  this._ended = true;
  if ((this._cache.length === 0) && (this._inserting === false)) {
    done();
  }
  else { // this._inserting === true
    if (this._inserting === false) {
      this._flushCallback = done;
      this._insert();
    }
    else {
      this._flushCallback = done;
    }
  }
}


module.exports = TransformStream;


/***/ }),

/***/ "../node_modules/rethinkdbdash/lib/writable_stream.js":
/*!************************************************************!*\
  !*** ../node_modules/rethinkdbdash/lib/writable_stream.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Writable = __webpack_require__(/*! stream */ "stream").Writable;
var Cursor = __webpack_require__(/*! ../node_modules/rethinkdbdash/lib/cursor.js */ "../node_modules/rethinkdbdash/lib/cursor.js");
var util = __webpack_require__(/*! util */ "util");

// Experimental, but should work fine.
function WritableStream(table, options, connection) {
  this._table = table;
  this._options = options;
  this._cache = [];
  this._pendingCallback = null;
  this._inserting = false;
  this._delayed = false;
  this._connection = connection;
  this._highWaterMark = options.highWaterMark || 100;

  this._insertOptions = {};
  this._insertOptions.durability = options.durability || 'hard';
  this._insertOptions.conflict = options.conflict || 'error';

  // Internal option to run some tests
  if (options.debug === true) {
    this._sequence = [];
  }

  Writable.call(this, {
    objectMode: true,
    highWaterMark: this._highWaterMark
  });
  this._i = 0;
};
util.inherits(WritableStream, Writable);

WritableStream.prototype._write = function(value, encoding, done) {
  this._i++;
  this._cache.push(value);
  this._next(value, encoding, done);
}

// Everytime we want to insert but do not have a full buffer,
// we recurse with setImmediate to give a chance to the input
// stream to push a few more elements
WritableStream.prototype._next = function(value, encoding, done) {
  var self = this;
  if ((this._writableState.lastBufferedRequest != null) && (this._writableState.lastBufferedRequest.chunk !== value)) {
    // There's more data to buffer
    if (this._cache.length < this._highWaterMark) {
      this._delayed = false;
      // Call done now, and more data will be put in the cache
      done();
    }
    else {
      if (this._inserting === false) {
        if (this._delayed === true) {
          this._delayed = false;
          // We have to flush
          this._insert();
          // Fill the buffer while we are inserting data
          done();
        }
        else {
          var self = this;
          this._delayed = true;
          setImmediate(function() {
            self._next(value, encoding, done);
          })
        }

      }
      else {
        this._delayed = false;
        // to call when we are dong inserting to keep buffering
        this._pendingCallback = done;
      }
    }
  }
  else { // We just pushed the last element in the internal buffer
    if (this._inserting === false) {
      if (this._delayed === true) {
        this._delayed = false;
        // to call when we are dong inserting to maybe flag the end
        // We cannot call done here as we may be inserting the last batch
        this._pendingCallback = done;
        this._insert();
      }
      else {
        var self = this;
        this._delayed = true;
        setImmediate(function() {
          self._next(value, encoding, done);
        })
      }
    }
    else {
      this._delayed = false;
      // We cannot call done here as we may be inserting the last batch
      //this._pendingCallback = done;
      this._pendingCallback = function() {
        self._next(value, encoding, done);
      };
    }
  }
}

WritableStream.prototype._insert = function() {
  var self = this;
  self._inserting = true;

  var cache = self._cache;
  self._cache = [];

  if (Array.isArray(self._sequence)) {
    self._sequence.push(cache.length);
  }

  self._table.insert(cache, self._insertOptions).run(self._connection).then(function(result) {
    self._inserting = false;
    if (result.errors > 0) {
      self._inserting = false;
      self.emit('error', new Error('Failed to insert some documents:'+JSON.stringify(result, null, 2)));
    }
    if (typeof self._pendingCallback === 'function') {
      var pendingCallback = self._pendingCallback;
      self._pendingCallback = null;
      pendingCallback();
    }
    return null;
  }).error(function(error) {
    self._inserting = false;
    self.emit('error', error);
  });
}


module.exports = WritableStream;


/***/ }),

/***/ "../node_modules/thinky/lib/document.js":
/*!**********************************************!*\
  !*** ../node_modules/thinky/lib/document.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var schemaUtil =    __webpack_require__(/*! ../node_modules/thinky/lib/schema.js */ "../node_modules/thinky/lib/schema.js");
var type =          __webpack_require__(/*! ../node_modules/thinky/lib/type/index.js */ "../node_modules/thinky/lib/type/index.js");
var util =          __webpack_require__(/*! ../node_modules/thinky/lib/util.js */ "../node_modules/thinky/lib/util.js");
var Promise =       __webpack_require__(/*! bluebird */ "bluebird");
var EventEmitter =  __webpack_require__(/*! events */ "events").EventEmitter;
var Errors =        __webpack_require__(/*! ../node_modules/thinky/lib/errors.js */ "../node_modules/thinky/lib/errors.js");


/**
 * Create a document of a model (returned by `thinky.createModel`).
 * @param {function} model The model of this document
 * @param {object=} options Options that can overwrite the ones of the model
 */
function Document(model, options) {
  var self = this;  // Keep a reference to itself.

  this.constructor = model;  // The constructor for this model
  this._model = model._getModel(); // The instance of Model

  // We don't want to store options if they are different
  // than the one provided by the model
  if (util.isPlainObject(options)) {
    this._schemaOptions = {};
    this._schemaOptions.enforce_missing =
        (options.enforce_missing != null) ? options.enforce_missing : model.getOptions().enforce_missing;
    this._schemaOptions.enforce_extra =
        (options.enforce_extra != null) ? options.enforce_extra : model.getOptions().enforce_extra;
    this._schemaOptions.enforce_type =
        (options.enforce_type != null) ? options.enforce_type : model.getOptions().enforce_type;
  }

  //TODO: We do not need to make a deep copy. We can do the same as for this._schemaOptions.
  options = options || {};
  this._options = {};
  this._options.timeFormat = (options.timeFormat != null) ? options.timeFormat : model.getOptions().timeFormat;
  this._options.validate = (options.validate != null) ? options.validate : model.getOptions().validate;

  this._saved = options.saved || false;  // Whether the document is saved or not

  util.bindEmitter(self);  // Copy methods from eventEmitter

  // links to hasOne/hasMany documents
  // We use it to know if some links have been removed/added before saving.
  // Example: { key: doc } or { key: [docs] }
  this._belongsTo = {};
  this._hasOne = {};
  this._hasMany = {};
  // Example: { <linkTableName>: { <valueOfRightKey>: true, ... }, ... }
  this._links = {}

  // Keep reference of any doc having a link pointing to this
  // So we can clean when users do doc.belongsToDoc.delete()
  this._parents = {
    _hasOne: {},      // <tableName>: [{doc, key}]
    _hasMany: {},     // <tableName>: [{doc, key}]
    _belongsTo: {},   // <tableName>: [{doc, key, foreignKey}]
    _belongsLinks: {} // <tableName>: [{doc, key}]
  }

  // Bind listeners of the model to this documents.
  util.loopKeys(model._listeners, function(listeners, eventKey) {
    for(var j=0; j<listeners[eventKey].length; j++) {
      if (listeners[eventKey][j].once === false) {
        self.addListener(eventKey, listeners[eventKey][j].listener);
      }
      else if (listeners[eventKey][j].once === true) {
        self.once(eventKey, listeners[eventKey][j].listener);
      }
    }
  });


  // Atom feed
  this._active = false;
  this._feed = null;

  // Add customized methods of the model on this document.
  util.loopKeys(model._methods, function(methods, key) {
    if (self[key] === undefined) {
      self[key] = methods[key];
    }
    else {
      //TODO: Should we warn the users? Throw an error?
      console.log(self[key]);
      console.log("A property "+key+" is already defined in the prototype chain. Skipping.");
    }
  });
}


/**
 * Return the options of the document, not the instance of Document.
 * @return {Object=}
 */
Document.prototype._getOptions = function() {
  return this.__proto__._options;
}


/**
 * Return the options for the schema of the document, not the instance of Document.
 * @return {Object=}
 */
Document.prototype._getSchemaOptions = function() {
  return this.__proto__._schemaOptions;
}


/**
 * Return the constructor of the document, not the instance of Document.
 * @return {function}
 */
Document.prototype.getModel = function() {
  return this.__proto__.constructor;
}


/**
 * Return the model, the instance of Model
 * @return {function}
 */
Document.prototype._getModel = function() {
  return this.__proto__._model;
}


/**
 * Save the virtual fields of the document to be re-injected later.
 */
Document.prototype._saveVirtual = function() {
  var copy = {};
  var model = this._getModel(); // instance of Model

  // TODO We could do better and copy less things, but things get a bit tricky
  // when virtual fields are nested in arrays.
  // This implementation still allows no overhead if no virtual fields exist,
  // which should be the most common case
  for(var i=0; i<this._getModel().virtualFields.length; i++) {
    var key = this._getModel().virtualFields[i].path[0];
    copy[key] = this[key];
  }
  this.__proto__.virtualValue = util.deepCopy(copy);
}


/**
 * Get the virtual fields saved by `_saveVirtual`.
 * @return {Object=}
 */
Document.prototype._getVirtual = function() {
  return this.__proto__.virtualValue;
}

/**
 * Generate the virtual values for the document, or re-inject the ones
 * previously saved.
 * This should be called **after** `_generateDefault`.
 */
Document.prototype.generateVirtualValues = function() {
  for(var i=0; i<this._getModel().virtualFields.length; i++) {
    schemaUtil.generateVirtual(this, this._getModel().virtualFields[i], this, this._getVirtual());
  }
}


/**
 * Generate the default values for the document, first the non virtual fields, and then
 * the virtual fields.
 */
Document.prototype._generateDefault = function() {
  for(var i=0; i<this._getModel().defaultFields.length; i++) {
    schemaUtil.generateDefault(this, this._getModel().defaultFields[i], this);
  }
  if (this._getModel().virtualFields.length > 0) {
    this.generateVirtualValues();
  }
}


/*
 * Validate this document against the schema of its model and triggers all the hooks.
 * @param {Object=} options Options to overwrite the ones of the document.
 * @param {Object=} modelToValidate Internal parameter, model to validate
 * @param {boolean=} validateAll Internal parameter, Option to keep recursing as long as no non-circular model have been found.
 * @param {Object=} validatedModel Internal parameter, All the models for which we already validated at least one document.
 * @param {string=} prefix Internal parameter, The current path to this path (used in case of joined documents).
 * @return {Promise=} return a promise if the validation is asynchrone, else undefined.
 */
Document.prototype.validate = function(options, modelToValidate, validateAll, validatedModel, prefix) {
  modelToValidate = modelToValidate || {};
  validateAll = validateAll || false;
  validatedModel = validatedModel || {};
  prefix = prefix || '';

  var self = this;
  var validatedModelCopy = util.deepCopy(validatedModel);

  //TODO: Can we not always call this?
  var async = self._validateIsAsync(modelToValidate, validateAll, validatedModelCopy);

  return util.hook({
    preHooks: self._getModel()._pre.validate,
    postHooks: self._getModel()._post.validate,
    doc: self,
    async: async,
    fn: self._validateHook,
    fnArgs: [options, modelToValidate, validateAll, validatedModel, prefix]
  })
}


/*
 * Validate this document against the schema of its model and all its joined documents and triggers all the hooks
 * @param {Object=} options Options to overwrite the ones of the document.
 * @param {Object=} modelToValidate Internal parameter, model to validate
 * @return {Promise=} return a promise if the validation is asynchrone, else undefined.
 */
Document.prototype.validateAll = function(options, modelToValidate) {
  var validateAll = modelToValidate === undefined;
  modelToValidate = modelToValidate || {};

  return this.validate(options, modelToValidate, validateAll, {}, '', true);
}


/*
 * Internal methods that will validate the document (but that will not execute the hooks).
 * @param {Object=} options Options to overwrite the ones of the document.
 * @param {Object=} modelToValidate Internal parameter, model to validate
 * @param {boolean=} validateAll Internal parameter, Option to keep recursing as long as no non-circular model have been found.
 * @param {Object=} validatedModel Internal parameter, All the models for which we already validated at least one document.
 * @param {string=} prefix Internal parameter, The current path to this path (used in case of joined documents).
 * @return {Promise=} return a promise if the validation is asynchrone, else undefined.
 */
Document.prototype._validateHook = function(options, modelToValidate, validateAll, validatedModel, prefix) {
  var self = this;
  var promises = [];
  var error;

  var schemaOptions = self._getSchemaOptions();
  if (util.isPlainObject(schemaOptions)) {
    schemaOptions = util.mergeOptions(schemaOptions, options);
  }
  else {
    schemaOptions = options;
  }


  if (typeof self._getModel()._validator === 'function') {
    if (self._getModel()._validator.call(self, self) === false) {
      throw new Errors.ValidationError("Document's validator returned `false`.");
    }
  }

  // Validate this document
  self._getModel()._schema.validate(self, prefix, schemaOptions)

  if (util.isPlainObject(modelToValidate) === false) {
    modelToValidate = {};
  }

  var constructor = self.__proto__.constructor;
  validatedModel[constructor.getTableName()] = true;

  // Validate joined documents
  util.loopKeys(self._getModel()._joins, function(joins, key) {
    if (util.recurse(key, joins, modelToValidate, validateAll, validatedModel)) {
      switch (joins[key].type) {
        case 'hasOne':
        case 'belongsTo':
          if (util.isPlainObject(self[key])) {
            if (self[key] instanceof Document === false) {
              self[key] = new self._getModel()._joins[key].model(self[key]);
            }
            // We do not propagate the options of this document, but only those given to validate
            var promise = self[key].validate(options, modelToValidate[key], validateAll, validatedModel, prefix+'['+key+']');
            if (promise instanceof Promise) {
              promises.push(promise);
              promise = null;
            }
          }
          else if (self[key] != null) {
            throw new Errors.ValidationError("Joined field "+prefix+"["+key+"] should be `undefined`, `null` or an `Object`")
          }
          break;

        case 'hasMany':
        case 'hasAndBelongsToMany':
          if (Array.isArray(self[key])) {
            for(var i=0; i<self[key].length; i++) {
              if (util.isPlainObject(self[key][i])) {
                if (self[key][i] instanceof Document === false) {
                  self[key][i] = new self._getModel()._joins[key].model(self[key][i]);
                }
                promise = self[key][i].validate(options, modelToValidate[key], validateAll, validatedModel, prefix+'['+key+']['+i+']');
                if (promise instanceof Promise) {
                  promises.push(promise);
                  promise = null;
                }
              }
              else {
                throw new Errors.ValidationError("Joined field "+prefix+"["+key+"]["+i+"] should be `undefined`, `null` or an `Array`")
              }
            }
          }
          else if (self[key] != null) {
            throw new Errors.ValidationError("Joined field "+prefix+"["+key+"] should be `undefined`, `null` or an `Array`")
          }
          break;
      }
    }
  });
  if (promises.length > 0) {
    return Promise.all(promises);
  }
}


/*
 * Return whether the validation run with the same options will be asynchronous or not.
 * @param {Object=} modelToValidate Internal parameter, model to validate
 * @param {boolean=} validateAll Internal parameter, Option to keep recursing as long as no non-circular model have been found.
 * @param {Object=} validatedModel Internal parameter, All the models for which we already validated at least one document.
 * @return {boolean}
 */
Document.prototype._validateIsAsync = function(modelToValidate, validateAll, validatedModel) {
  var self = this;

  if (self._getModel()._async.validate) {
    return true;
  }
  var async = false;
  util.loopKeys(self._getModel()._joins, function(joins, key) {
    if (util.recurse(key, joins, modelToValidate, validateAll, validatedModel)) {
      if (((joins[key].type === 'hasOne') || (joins[key].type === 'belongsTo'))) {
        if (util.isPlainObject(self[key])) {
          if (self[key] instanceof Document === false) {
            self[key] = new self._getModel()._joins[key].model(self[key]);
          }
          // We do not propagate the options of this document, but only those given to validate
          if (self[key]._getModel()._async.validate || self[key]._validateIsAsync(modelToValidate, validateAll, validatedModel)) {
            async = true;
            return false;
          }
        }
      }
      else  if (((joins[key].type === 'hasMany') || (joins[key].type === 'hasAndBelongsToMany'))) {
        if (Array.isArray(self[key])) {
          for(var i=0; i<self[key].length; i++) {
            if (util.isPlainObject(self[key][i])) {
              if (self[key][i] instanceof Document === false) {
                self[key][i] = new self._getModel()._joins[key].model(self[key][i]);
              }
              if (self[key][i]._getModel()._async.validate || self[key][i]._validateIsAsync(modelToValidate, validateAll, validatedModel)) {
                async = true;
                return false;
              }
            }
          }
        }
      }
    }
    return false;
  });
  return async;
}


/**
 * Save the document and execute the hooks. Return a promise if the callback
 * is not provided.
 * @param {function=} callback to execute
 * @return {Promise=}
 */
Document.prototype.save = function(callback) {
  return this._save({}, false, {}, callback);
}


/**
 * Save the document and its joined documents. It will also execute the hooks.
 * Return a promise if the callback is not provided.
 * It will save joined documents as long as a document of the same model has not
 * been saved.
 * @param {function=} callback to execute
 * @return {Promise=}
 */
Document.prototype.saveAll = function(docToSave, callback) {
  var saveAll;
  if (typeof docToSave === 'function') {
    callback = docToSave;
    saveAll = true;
    docToSave = {};
  }
  else {
    saveAll = docToSave === undefined;
    docToSave = docToSave || {};
  }

  return this._save(docToSave, saveAll,{}, callback);
}


/**
 * Return a savable copy of the document by removing the extra fields,
 * generating the default and virtual fields.
 * @return {object}
 */
Document.prototype._makeSavableCopy = function() {
  var model = this._getModel(); // instance of Model
  var schema = this._getModel()._schema;

  var r = this._getModel()._thinky.r;

  if (this._getModel().needToGenerateFields === true){
    this._generateDefault();
  }

  return this.__makeSavableCopy(this, schema, this._getOptions(), model, r)
}


/**
 * Internal helper for _makeSavableCopy.
 * generating the dfault and virtual fields.
 * @return {any} the copy of the field/object.
 */
Document.prototype.__makeSavableCopy = function(doc, schema, options, model, r) {
  var localOptions; // can be undefined
  if (schema !== undefined) {
    localOptions = schema._options;
  }

  // model is an instance of a Model (for the top level fields), or undefined
  var result, key, keys, nextSchema, copyFlag;
  if (type.isDate(schema) && (typeof doc === 'string' || typeof doc === 'number')) {
    if (typeof doc === 'number') {
      var numericDate = parseInt(doc, 10);
      if(!isNaN(numericDate)) {
        doc = numericDate;
      }
    }
    return new Date(doc); // Use r.ISO8601 and not `new Date()` to keep timezone
  }
  else if (type.isPoint(schema)) {
    if (util.isPlainObject(doc) && (doc['$reql_type$'] !== "GEOMETRY")) {
      var keys = Object.keys(doc).sort();
      if ((keys.length === 2) && (keys[0] === 'latitude') && (keys[1] === 'longitude') && (typeof doc.latitude === "number") && (typeof doc.longitude === "number")) {
        return r.point(doc.longitude, doc.latitude)
      }
      else if ((doc.type === "Point") && (Array.isArray(doc.coordinates)) && (doc.coordinates.length === 2)) { // Geojson
        return r.geojson(doc)
      }
    }
    else if (Array.isArray(doc)) {
      if ((doc.length === 2) && (typeof doc[0] === "number") && (typeof doc[1] === "number")) {
        return r.point(doc[0], doc[1])
      }
    }
    else { // no transformation are required here, return doc
      return doc;
    }
  }
  else if (type.isNumber(schema) && (typeof doc === 'string')) {
    var numericString = parseFloat(doc);
    if(!isNaN(numericString)){
      return numericString;
    }else{
      return doc;
    }
  }

  if (util.isPlainObject(doc) && (doc instanceof Buffer === false)) {
    result = {};
    util.loopKeys(doc, function(doc, key) {
      copyFlag = true;
      if ((util.isPlainObject(model) === false) || (model._joins[key] === undefined)) { // We do not copy joined documents
        if ((schema !== undefined) && (schema._schema !== undefined) && (type.isVirtual(schema._schema[key]) === true)) {
          // We do not copy virtual
        }
        else if (((schema === undefined) || (schema._schema === undefined) || (schema._schema[key] === undefined)) &&
            (localOptions !== undefined) && (localOptions.enforce_extra === "remove")) {
          // We do not copy fields if enfroce_extra is "remove"
        }
        else {
          if ((schema !== undefined) && (schema._schema !== undefined)) {
            nextSchema = schema._schema[key];
          }
          else {
            nextSchema = undefined;
          }
          result[key] = Document.prototype.__makeSavableCopy(doc[key], nextSchema, localOptions, undefined, r);
        }
      }
    });

    // Copy the fields that are used as foreign keys
    if (util.isPlainObject(model) === true) {
      util.loopKeys(model._localKeys, function(localKeys, localKey) {
        if (doc[localKey] !== undefined) {
          if (schema !== undefined) {
            nextSchema = schema._schema[key];
          }
          else {
            nextSchema = undefined;
          }
          //TODO: Do we want to copy the foreign key value? If yes, there's no need for this loop
          //Do we want to copy the key from the joined document? If yes we need to replace doc[localKey]
          result[localKey] = Document.prototype.__makeSavableCopy(doc[localKey], nextSchema, localOptions, undefined, r);
        }
      });
    }
    return result;
  }
  else if (Array.isArray(doc)) {
    result = [];
    copyFlag = true;

    // Next schema
    if (type.isArray(schema)) {
      nextSchema = schema._schema;
    }
    else if ((util.isPlainObject(schema)) && (schema._type !== undefined) && (schema._schema !== undefined)) {
      nextSchema = schema._schema
      if (schema._type === "virtual") {
        copyFlag = false;
      }
    }
    else {
      nextSchema = undefined;
    }
    if (copyFlag === true) {
      for(var i=0; i<doc.length; i++) {
        result.push(Document.prototype.__makeSavableCopy(doc[i], nextSchema, localOptions, undefined, r));
      }
    }
    return result;
  }
  // else, doc is a primitive (or a buffer)
  return doc;
}


/**
 * Save the document, its joined documents and execute the hooks. Return a
 * promise if the callback is undefined.
 * @param {Object=} docToSave Documents to save represented by an object field->true
 * @param {boolean} saveAll Whether _save should recurse by default or not
 * @param {Object=} savedModel Models saved in this call
 * @param {Object=} callback to execute
 * @return {Promise=}
 */
Document.prototype._save = function(docToSave, saveAll, savedModel, callback) {
  //TOIMPROVE? How should we handle circular references outsides of joined fields? Now we throw with a maximum call stack size exceed
  var self = this;
  self.emit('saving', self);

  return util.hook({
    preHooks: self._getModel()._pre.save,
    postHooks: self._getModel()._post.save,
    doc: self,
    async: true,
    fn: self._saveHook,
    fnArgs: [docToSave, saveAll, savedModel]
  }).nodeify(callback);
}


/**
 * Save the document and execute the hooks. This is an internal method used with
 * Model.save. This let us use a similar code path for `document.save` and `Model.save`.
 * @param {Function} executeInsert the method that will execute the batch insert
 * @return {Promise}
 */
Document.prototype._batchSave = function(executeInsert) {
  // Keep in sync with _save
  var self = this;
  self.emit('saving', self);

  return util.hook({
    preHooks: self._getModel()._pre.save,
    postHooks: self._getModel()._post.save,
    doc: self,
    async: true,
    fn: self._batchSaveSelf,
    fnArgs: [executeInsert]
  });
}


/**
 * Call executeInsert when the model is ready
 * @param {Function} executeInsert the method that will execute the batch insert
 * @return {Promise}
 */
Document.prototype._batchSaveSelf = function(executeInsert) {
  var self = this;

  return new Promise(function(resolve, reject) {
    self.getModel().ready().then(function() {
      executeInsert(resolve, reject)
    });
  })
}


/**
 * Save the document and maybe its joined documents. Hooks have been dealt with
 * in _save.
 * @param {!Object} copy The savable copy of the original documents.
 * @param {Object=} docToSave Documents to save represented by an object field->true
 * @param {Object=} belongsToKeysSaved The keys that may contains a document to save
 * @param {boolean} saveAll Whether _save should recurse by default or not
 * @param {Object=} savedModel Models saved in this call
 * @param {Function} resolve The function to call when everything has been saved
 * @param {Function} reject The function to call if an error happened
 */
Document.prototype._saveHook = function(docToSave, saveAll, savedModel) {
  var self = this;
  var model = self._getModel(); // instance of Model
  var constructor = self.getModel();
  var r = model._thinky.r;

  if (util.isPlainObject(docToSave) === false) {
    docToSave = {};
  }

  savedModel[constructor.getTableName()] = true;


  var p = new Promise(function(resolve, reject) {
    // Steps:
    // - Save belongsTo
    // - Save this
    // - Save hasOne, hasMany and hasAndBelongsToMany docs
    // - Save links

    // We'll use it to know which `belongsTo` docs were saved
    var belongsToKeysSaved = {};

    var copy = self._makeSavableCopy();
    self._saveVirtual();

    // Save the joined documents via belongsTo first
    var promises = [];
    util.loopKeys(model._joins, function(joins, key) {
      if ((docToSave.hasOwnProperty(key) || (saveAll === true)) &&
          (joins[key].type === 'belongsTo') && ((saveAll === false) || (savedModel[joins[key].model.getTableName()] !== true))) {

        belongsToKeysSaved[key] = true;
        if (self[key] != null) {
          savedModel[joins[key].model.getTableName()] = true;
          if (saveAll === true) {
            promises.push(self[key]._save({}, true, savedModel))
          }
          else {
            promises.push(self[key]._save(docToSave[joins[key].model.getTableName()], false, savedModel))
          }
        }
      }
    });

    //TODO Remove once
    self.getModel().ready().then(function() {
      Promise.all(promises).then(function() {
        self._onSavedBelongsTo(copy, docToSave, belongsToKeysSaved, saveAll, savedModel, resolve, reject);
      }).error(reject);
    });
  });
  return p;
}


/**
 * Save the joined documents linked with a BelongsTo relation. This should be
 * called before _saveSelf as we will have to copy the foreign keys in `self`.
 * @param {!Object} copy The savable copy of the original documents.
 * @param {Object=} docToSave Documents to save represented by an object field->true
 * @param {Object=} belongsToKeysSaved The keys that may contains a document to save
 * @param {boolean} saveAll Whether _save should recurse by default or not
 * @param {Object=} savedModel Models saved in this call
 * @param {Function} resolve The function to call when everything has been saved
 * @param {Function} reject The function to call if an error happened
 */
Document.prototype._onSavedBelongsTo = function(
    copy, docToSave, belongsToKeysSaved, saveAll, savedModel, resolve, reject) {
  var self = this;
  var model = self._getModel();
  var constructor = self.__proto__.constructor;
  var r = this._getModel()._thinky.r;

  util.loopKeys(belongsToKeysSaved, function(joins, key) {
    var joins = model._joins;
    if (self[key] != null) {

      self.__proto__._belongsTo[key] = true;

      // Copy foreign key
      if (self[key][joins[key].rightKey] == null) {
        if (self.hasOwnProperty(joins[key].leftKey)) {
          delete self[joins[key][joins[key].leftKey]];
        }
        if (copy.hasOwnProperty(joins[key].leftKey)) {
          delete copy[joins[key][joins[key].leftKey]];
        }
      }
      else {
        self[joins[key].leftKey] = self[key][joins[key].rightKey];
        copy[joins[key].leftKey] = self[key][joins[key].rightKey]; // We need to put it in copy before saving it
      }

      // Save the document that belongs to self[key]
      if (self[key].__proto__._parents._belongsTo[constructor.getTableName()] == null) {
        self[key].__proto__._parents._belongsTo[constructor.getTableName()] = [];
      }
      self[key].__proto__._parents._belongsTo[constructor.getTableName()].push({
        doc: self,
        foreignKey: joins[key].leftKey,
        key: key // foreignDoc
      });
    }
  });
  self._saveSelf(copy, docToSave, belongsToKeysSaved, saveAll, savedModel, resolve, reject)
}


/**
 * Save the document on which `save` was called.
 * @param {!Object} copy The savable copy of the original documents.
 * @param {Object=} docToSave Documents to save represented by an object field->true
 * @param {Object=} belongsToKeysSaved The keys that may contains a document to save
 * @param {boolean} saveAll Whether _save should recurse by default or not
 * @param {Object=} savedModel Models saved in this call
 * @param {Function} resolve The function to call when everything has been saved
 * @param {Function} reject The function to call if an error happened
 */
Document.prototype._saveSelf = function(
    copy, docToSave, belongsToKeysSaved, saveAll, savedModel, resolve, reject) {
  var self = this;
  var model = self._getModel();
  var constructor = self.__proto__.constructor;
  var r = this._getModel()._thinky.r;

  // BelongsTo documents were saved before. We just need to copy the foreign
  // keys.
  util.loopKeys(model._joins, function(joins, key) {
    if ((joins[key].type === 'belongsTo') && (belongsToKeysSaved[key] === true)) {
      if (self[key] != null) {
        self[joins[key].leftKey] = self[key][joins[key].rightKey]
      }
      else if (self.__proto__._belongsTo[key]) {
        delete self[joins[key].leftKey];
        delete copy[joins[key].leftKey];
      }
    }
  });

  var querySaveSelf; // The query to save the document on which `save`/`saveAll` was called.
  // We haven't validated the document yet, so building the query with `copy`
  // may throw an error (for example if a Date has not a valid time).
  var buildQuery = function () {
    if (self.__proto__._saved === false) {
      return querySaveSelf = r.table(constructor.getTableName())
        .insert(copy, {returnChanges: 'always'})
    }
    else {
      if (copy[model._pk] === undefined) {
        throw new Error("The document was previously saved, but its primary key is undefined.");
      }
      return querySaveSelf = r.table(constructor.getTableName())
        .get(copy[model._pk]).replace(copy, {returnChanges: 'always'})
    }
  }

  self.getModel().ready().then(function() {
    util.tryCatch(function() {
      // Validate the document before saving it
      var promise = self.validate();
      if (promise instanceof Promise) {
        promise.then(function() {
          querySaveSelf = buildQuery();
          querySaveSelf.run().then(function(result) {
            self._onSaved(result, docToSave, saveAll, savedModel, resolve, reject)
          }).error(reject)
        }).error(reject);
      }
      else {
        querySaveSelf = buildQuery();
        querySaveSelf.run().then(function(result) {
          self._onSaved(result, docToSave, saveAll, savedModel, resolve, reject)
        }).error(reject)
      }
    }, reject);
  });
}


/**
 * Callback for the insert query.
 * @param {Object} result The result from the insert query
 * @param {Object=} docToSave Documents to save represented by an object field->true
 * @param {boolean} saveAll Whether _save should recurse by default or not
 * @param {Object=} savedModel Models saved in this call
 * @param {Function} resolve The function to call when everything has been saved
 * @param {Function} reject The function to call if an error happened
 */
Document.prototype._onSaved = function(result, docToSave, saveAll, savedModel, resolve, reject) {
  // Keep in sync with Model.save
  var self = this;

  if (result.first_error != null) {
    return reject(Errors.create(result.first_error));
  }

  util.tryCatch(function() { // Validate the doc, replace it, and tag it as saved
    if (Array.isArray(result.changes) && result.changes.length > 0) {
      self._merge(result.changes[0].new_val);
      self._setOldValue(util.deepCopy(result.changes[0].old_val));
    }

    if (self._getModel().needToGenerateFields === true) {
      self._generateDefault();
    }
    self.setSaved();
    self.emit('saved', self);

    var promise = self.validate();
    if (promise instanceof Promise) {
      promise.then(function() {
        self._saveMany(docToSave, saveAll, savedModel, resolve, reject)
      }).error(reject);
    }
    else {
      self._saveMany(docToSave, saveAll, savedModel, resolve, reject)
    }
  }, reject);
}


/**
 * Save the joined documents linked with a hasOne or hasMany or
 * hasAndBelongsToMany relation. This should be called after `_saveSelf` as we
 * will have to copy the foreign keys in the joined documents.
 * @param {Object} result The result from the insert query
 * @param {Object=} docToSave Documents to save represented by an object field->true
 * @param {boolean} saveAll Whether _save should recurse by default or not
 * @param {Object=} savedModel Models saved in this call
 * @param {Function} resolve The function to call when everything has been saved
 * @param {Function} reject The function to call if an error happened
 */
Document.prototype._saveMany = function(docToSave, saveAll, savedModel, resolve, reject) {
  var self = this;
  var model = self._getModel();

  var promisesMany = [];
  util.loopKeys(model._joins, function(joins, key) {
    if (((key in docToSave) || (saveAll === true)) &&
        (joins[key].type === 'hasOne') && ((saveAll === false) || (savedModel[joins[key].model.getTableName()] !== true))) {
      savedModel[joins[key].model.getTableName()] = true;

      if (self[key] != null) {
        self[key][joins[key].rightKey] = self[joins[key].leftKey];
        (function(_key) {
          promisesMany.push(new Promise(function(resolve, reject) {
            self[_key]._save(docToSave[_key], saveAll, savedModel).then(function() {
              self.__proto__._hasOne[_key] = {
                doc: self[_key],
                foreignKey: self._getModel()._joins[_key].rightKey
              };
              if (self[_key].__proto__._parents._hasOne[self._getModel()._name] == null) {
                self[_key].__proto__._parents._hasOne[self._getModel()._name] = [];
              }
              self[_key].__proto__._parents._hasOne[self._getModel()._name].push({
                doc: self,
                key: key
              });
              resolve();
            }).error(reject);
          }))
        })(key)
      }
      else if ((self[key] == null) && (self.__proto__._hasOne[key] != null)) {
        var doc = self.__proto__._hasOne[key].doc;
        delete doc[self.__proto__._hasOne[key].foreignKey];
        promisesMany.push(doc._save(docToSave[key], saveAll, savedModel))
        self.__proto__._hasOne[key] = null;
      }
    }
  });
  util.loopKeys(model._joins, function(joins, key) {
    if (((key in docToSave) || (saveAll === true)) &&
        (joins[key].type === 'hasMany') && ((saveAll === false) || (savedModel[joins[key].model.getTableName()] !== true))
        && (Array.isArray(self[key]))) {

      savedModel[joins[key].model.getTableName()] = true;

      //Go through _hasMany and find element that were removed
      var pkMap = {};
      if (Array.isArray(self[key])) {
        for(var i=0; i<self[key].length; i++) {
          if (self[key][i][joins[key].model._pk] != null) {
            pkMap[self[key][i][joins[key].model._pk]] = true;
          }
        }
      }

      if (self.__proto__._hasMany[key] != null) {
        for(var i=0; i<self.__proto__._hasMany[key].length; i++) {
          if (pkMap[self.__proto__._hasMany[key][i].doc[[joins[key].model._pk]]] == null) {
            delete self.__proto__._hasMany[key][i].doc[self.__proto__._hasMany[key][i].foreignKey];
            promisesMany.push(self.__proto__._hasMany[key][i].doc._save(docToSave[key], saveAll, savedModel));
          }
        }
      }
      self.__proto__._hasMany[key] = [];

      for(var i=0; i<self[key].length; i++) {
        self[key][i][joins[key].rightKey] = self[joins[key].leftKey];
        (function(key, i) {
          promisesMany.push(new Promise(function(resolve, reject) {
            if (!(self[key][i] instanceof Document)) {
              self[key][i] = new joins[key].model(self[key][i]);
            }

            var callback = function() {
              self[key][i]._save(docToSave[key], saveAll, savedModel).then(function(doc) {
                if (!Array.isArray(self.__proto__._hasMany[key])) {
                  self.__proto__._hasMany[key] = [];
                }
                self.__proto__._hasMany[key].push({
                  doc: doc,
                  foreignKey: self._getModel()._joins[key].rightKey
                });

                if (self[key][i].__proto__._parents._hasMany[self._getModel()._name] == null) {
                  self[key][i].__proto__._parents._hasMany[self._getModel()._name] = [];
                }
                self[key][i].__proto__._parents._hasMany[self._getModel()._name].push({
                  doc: self,
                  key: key
                });

                resolve();
              }).error(reject);
            }

            if (self[key][i] instanceof Promise) {
              self[key][i].then(callback).error(reject);
            }
            else {
              callback();
            }

          }))
        })(key, i);
      }
    }
  });
  util.loopKeys(model._joins, function(joins, key) {
    // Compare to null
    if (((key in docToSave) || (saveAll === true)) &&
        (joins[key].type === 'hasAndBelongsToMany') && ((saveAll === false) || (savedModel[joins[key].model.getTableName()] !== true))) {

      savedModel[joins[key].model.getTableName()] = true;

      if (Array.isArray(self[key])) {
        for(var i=0; i<self[key].length; i++) {
          if (util.isPlainObject(self[key][i])) { // Save only if we have a full object, and not just a key
            (function(key, i) {
              promisesMany.push(new Promise(function(resolve, reject) {
                if (!(self[key][i] instanceof Document)) {
                  self[key][i] = new joins[key].model(self[key][i]);
                }
                var callback = function() {
                  self[key][i]._save(docToSave[key], saveAll, savedModel).then(function() {
                    // self.__proto__._links will be saved in saveLinks
                    if (self[key][i].__proto__._parents._belongsLinks[self._getModel()._name] == null) {
                      self[key][i].__proto__._parents._belongsLinks[self._getModel()._name] = [];
                    }
                    self[key][i].__proto__._parents._belongsLinks[self._getModel()._name].push({
                      doc: self,
                      key: key
                    });
                    resolve();
                  }).error(reject);
                }

                if (self[key][i] instanceof Promise) {
                  self[key][i].then(callback).error(reject);
                }
                else {
                  callback();
                }
              }))
            })(key, i)
          }
        }
      }
    }
  });

  if (promisesMany.length > 0) {
    Promise.all(promisesMany).then(function() {
      self._saveLinks(docToSave, saveAll, resolve, reject)
    }).error(reject);
  }
  else {
    self._saveLinks(docToSave, saveAll, resolve, reject)
  }
}


/**
 * Save the links for hasAndBelongsToMany joined documents.
 * called before _saveSelf as we will have to copy the foreign keys in `self`.
 * @param {Object=} docToSave Documents to save represented by an object field->true
 * @param {boolean} saveAll Whether _save should recurse by default or not
 * @param {Function} resolve The function to call when everything has been saved
 * @param {Function} reject The function to call if an error happened
 */
Document.prototype._saveLinks = function(docToSave, saveAll, resolve, reject) {
  var self = this;
  var model = self._getModel();
  var constructor = self.getModel();
  var r = model._thinky.r;

  var promisesLink = [];

  util.loopKeys(model._joins, function(joins, key) {
    // Write tests about that!
    if (((key in docToSave) || (saveAll === true)) &&
        (joins[key].type === 'hasAndBelongsToMany')) {

      if (Array.isArray(self[key])) {
        var newKeys = {}
        for(var i=0; i<self[key].length; i++) {
          if (util.isPlainObject(self[key][i])) {
            if (self[key][i].isSaved() === true) {
              newKeys[self[key][i][joins[key].rightKey]] = true;
            }
          }
          else { // self[key][i] is just the key
            newKeys[self[key][i]] = true;
          }
        }

        if (self.__proto__._links[joins[key].link] === undefined) {
          self.__proto__._links[joins[key].link] = {}
        }
        var oldKeys = self.__proto__._links[joins[key].link];

        util.loopKeys(newKeys, function(newKeys, link) {
          if (oldKeys[link] !== true) {
            var newLink = {};

            if ((constructor.getTableName() === joins[key].model.getTableName())
              && (joins[key].leftKey === joins[key].rightKey)) {

              // We link on the same model and same key
              // We don't want to save redundant field
              if (link < self[joins[key].leftKey]) {
                newLink.id = link+"_"+self[joins[key].leftKey];
              }
              else {
                newLink.id = self[joins[key].leftKey]+"_"+link;
              }
              newLink[joins[key].leftKey+"_"+joins[key].leftKey] = [link, self[joins[key].leftKey]];
            }
            else {
              newLink[constructor.getTableName()+"_"+joins[key].leftKey] = self[joins[key].leftKey];
              newLink[joins[key].model.getTableName()+"_"+joins[key].rightKey] = link;

              // Create the primary key
              if (constructor.getTableName() < joins[key].model.getTableName()) {
                newLink.id = self[joins[key].leftKey]+"_"+link;
              }
              else if (constructor.getTableName() > joins[key].model.getTableName()) {
                newLink.id = link+"_"+self[joins[key].leftKey];
              }
              else {
                if (link < self[joins[key].leftKey]) {
                  newLink.id = link+"_"+self[joins[key].leftKey];
                }
                else {
                  newLink.id = self[joins[key].leftKey]+"_"+link;
                }
              }
            }

            (function(key, link) {
              promisesLink.push(new Promise(function(resolve, reject) {
                r.table(self._getModel()._joins[key].link).insert(newLink, {conflict: "replace", returnChanges: 'always'}).run().then(function(result) {
                  if (Array.isArray(result.changes) && result.changes.length > 0) {
                    self.__proto__._links[joins[key].link][result.changes[0].new_val[joins[key].model.getTableName()+"_"+joins[key].rightKey]] = true;
                  }
                  else {
                    self.__proto__._links[joins[key].link][newLink[joins[key].model.getTableName()+"_"+joins[key].rightKey]] = true;
                  }
                  resolve();
                }).error(reject);
              }))
            })(key, link);
          }
        });

        var keysToDelete = []
        util.loopKeys(oldKeys, function(oldKeys, link) {
          if (newKeys[link] === undefined) {
            if (constructor.getTableName() < joins[key].model.getTableName()) {
              keysToDelete.push(self[joins[key].leftKey]+"_"+link);
            }
            else {
              keysToDelete.push(link+"_"+self[joins[key].leftKey]);
            }
          }
        });
        if (keysToDelete.length > 0) {
          var table = r.table(joins[key].link);
          promisesLink.push(table.getAll.apply(table, keysToDelete).delete().run().then(function() {
            for(var i=0; i<keysToDelete.length; i++) {
              self.__proto__._links[joins[key].link][keysToDelete[i]] = false;
            }
          }));
        }
      }
    }
  });

  if (promisesLink.length > 0) {
    Promise.all(promisesLink).then(function() {
      resolve(self);
    }).error(reject);
  }
  else {
    resolve(self);
  }
}


/**
 * Return the value saved in __proto__.oldValue
 */
Document.prototype.getOldValue = function() {
  return this.__proto__.oldValue;
}


/**
 * Save a reference of `value` that will be later accessible with `getOldValue`.
 * @param {Object} value The value to save
 */
Document.prototype._setOldValue = function(value) {
  return this.__proto__.oldValue = value;
}


/**
 * Return whether this document was saved or not.
 * @return {boolean}
 */
Document.prototype.isSaved = function() {
  return this.__proto__._saved;
}


/**
 * Set the document (and maybe its joined documents) as saved.
 * @param {boolean=} all Recursively set all the joined documents as saved
 */
Document.prototype.setSaved = function(all) {
  var self = this;
  self.__proto__._saved = true;
  if (all !== true) return;
    util.loopKeys(self._getModel()._joins, function(joins, key) {
      switch (joins[key].type) {
        case 'hasOne':
          if (self[key] instanceof Document) {
            self[key].setSaved(true);
          }
          break;

        case 'belongsTo':
          if (self[key] instanceof Document) {
            self[key].setSaved(true);
          }
          break;

        case 'hasMany':
          if (Array.isArray(self[key])) {
            for(var i=0; i<self[key].length; i++) {
              if (self[key][i] instanceof Document) {
                self[key][i].setSaved(true);
              }
            }
          }
          break;

        case 'hasAndBelongsToMany':
          if (Array.isArray(self[key])) {
            for(var i=0; i<self[key].length; i++) {
              if (self[key][i] instanceof Document) {
                self[key][i].setSaved(true);
              }
            }
          }
          break;
      }
    });

    // Make joins, we should keep references only of the saved documents
    util.loopKeys(self._getModel()._joins, function(joins, key) {
      if (self[key] == null) return;
      switch (joins[key].type) {
        case 'hasOne':
          if (self[key].isSaved()) {
            self.__proto__._hasOne[key] = {
              doc: self[key],
              foreignKey: self._getModel()._joins[key].rightKey
            }
          }

          if (self[key].__proto__._parents._hasOne[self._getModel()._name] == null) {
            self[key].__proto__._parents._hasOne[self._getModel()._name] = [];
          }
          self[key].__proto__._parents._hasOne[self._getModel()._name].push({
            doc: self,
            key: key
          });
          break;

        case 'belongsTo':
          if (self[key].__proto__._parents._belongsTo[self._getModel()._name] == null) {
            self[key].__proto__._parents._belongsTo[self._getModel()._name] = [];
          }
          self[key].__proto__._parents._belongsTo[self._getModel()._name].push({
            doc: self,
            foreignKey: self._getModel()._joins[key].leftKey,
            key: key
          });
          self.__proto__._belongsTo[key] = true;
          break;

        case 'hasMany':
          self.__proto__._hasMany[key] = []

          for(var i=0; i<self[key].length; i++) {
            if (self[key][i].isSaved()) {
              self.__proto__._hasMany[key].push({
                doc: self[key][i],
                foreignKey: self._getModel()._joins[key].rightKey
              })
            }

            if (self[key][i].__proto__._parents._hasMany[self._getModel()._name] == null) {
              self[key][i].__proto__._parents._hasMany[self._getModel()._name] = [];
            }
            self[key][i].__proto__._parents._hasMany[self._getModel()._name].push({
              doc: self,
              key: key
            });

          }
          break;

        case 'hasAndBelongsToMany':
          if (self.__proto__._links[self._getModel()._joins[key].link] === undefined) {
            self.__proto__._links[self._getModel()._joins[key].link] = {}
          }

          for(var i=0; i<self[key].length; i++) {
            if (self[key][i].isSaved()) {
              self.__proto__._links[self._getModel()._joins[key].link][self[key][i][self._getModel()._joins[key].rightKey]] = true;
            }

            if (self[key][i].__proto__._parents._belongsLinks[self._getModel()._name] == null) {
              self[key][i].__proto__._parents._belongsLinks[self._getModel()._name] = [];
            }
            self[key][i].__proto__._parents._belongsLinks[self._getModel()._name].push({
              doc: self,
              key: key
            });

          }
          break;
      }
    });

}


/**
 * Set the document as unsaved
 */
Document.prototype._setUnSaved = function() {
  this.__proto__._saved = false;
}


/**
 * Delete the document from the database. Update the joined documents by
 * removing the foreign key for hasOne/hasMany joined documents, and remove the
 * links for hasAndBelongsToMany joined documents if the link is built on the
 * primary key.
 * @param {Function=} callback
 * @return {Promise=} Return a promise if no callback is provided
 */
Document.prototype.delete = function(callback) {
  return this._delete({}, false, [], true, true, callback)
}


/**
 * Delete the document from the database and the joined documents. If
 * `docToDelete` is undefined, it will delete all the joined documents, else it
 * will limits itself to the one stored in the keys defined in `docToDelete`.
 * It will also update the joined documents by removing the foreign key for
 * `hasOne`/`hasMany` joined documents, and remove the links for
 * `hasAndBelongsToMany` joined documents if the link is built on the primary
 * key.
 * @param {Object=} docToDelete An object where a field maps to `true` if the
 * document stored in this field should be deleted.
 * @param {Function=} callback
 * @return {Promise=} Return a promise if no callback is provided
 */
Document.prototype.deleteAll = function(docToDelete, callback) {
  var deleteAll;
  if (typeof docToDelete === 'function') {
    callback = docToDelete;
    deleteAll = true;
    docToDelete = {};
  }
  else {
    deleteAll = docToDelete === undefined;
    docToDelete = docToDelete || {};
  }
  return this._delete(docToDelete, deleteAll, [], true, true, callback)
}


/**
 * Delete the document from the database and the joined documents. If
 * `docToDelete` is `undefined` and `deleteAll` is `true`, it will delete all
 * the joined documents, else it will limits itself to the one stored in the
 * keys defined in `docToDelete`. It will also update the joined documents by
 * removing the foreign key for `hasOne`/`hasMany` joined documents, and
 * remove the links for `hasAndBelongsToMany` joined documents if the link is
 * built on the primary key.
 * Hooks will also be executed.
 * @param {Object=} docToDelete Explicit maps of the documents to delete
 * @param {boolean} deleteAll Recursively delete all the documents if
 *     `docToDelete` is undefined
 * @param {Array} deletedDocs Array of docs already deleted, used to make sure
 *     that we do not try to delete multiple times the same documents
 * @param {boolean} deleteSelf Whether it should delete self
 * @param {boolean} updateParents Whether it should update the keys for the
 *     parents
 * @param {Function=} callback
 * @return {Promise=} Return a promise if no callback is provided
 */
Document.prototype._delete = function(docToDelete, deleteAll, deletedDocs, deleteSelf, updateParents, callback) {
  //TODO Set a (string) id per document and use it to perform faster lookup
  var self = this;

  if (util.isPlainObject(docToDelete) === false) {
    docToDelete = {};
  }

  deleteSelf = (deleteSelf === undefined) ? true: deleteSelf;

  return util.hook({
    preHooks: self._getModel()._pre.delete,
    postHooks: self._getModel()._post.delete,
    doc: self,
    async: true,
    fn: self._deleteHook,
    fnArgs: [docToDelete, deleteAll, deletedDocs, deleteSelf, updateParents, callback]
  });
}


/**
 * Internal methods used in `_delete`. Does the same as `_delete` but without
 * the hooks.
 * @param {Object=} docToDelete Explicit maps of the documents to delete
 * @param {boolean} deleteAll Recursively delete all the documents if
 *     `docToDelete` is undefined
 * @param {Array} deletedDocs Array of docs already deleted, used to make sure
 *     that we do not try to delete multiple times the same documents
 * @param {boolean} deleteSelf Whether it should delete self
 * @param {boolean} updateParents Whether it should update the keys for the
 *     parents
 * @return {Promise=} Return a promise if no callback is provided
 */
Document.prototype._deleteHook = function(docToDelete, deleteAll, deletedDocs, deleteSelf, updateParents, callback) {
  var self = this;
  var model = self._getModel(); // instance of Model
  var constructor = self.getModel();
  var r = model._thinky.r;

  var promises = [];

  deletedDocs.push(self);
  util.loopKeys(self._getModel()._joins, function(joins, key) {
    if ((joins[key].type === 'hasOne') && (self[key] instanceof Document)) {
      if ((self[key].isSaved() === true) &&
        ((key in docToDelete) || ((deleteAll === true) && (deletedDocs.indexOf(self[key]) === -1)))) {

        (function(key) {
          promises.push(new Promise(function(resolve, reject) {
            self[key]._delete(docToDelete[key], deleteAll, deletedDocs, true, false).then(function() {
              delete self[key];
              resolve();
            }).error(reject);
          }))
        })(key);
      }
      else if ((deleteSelf === true) && (deletedDocs.indexOf(self[key]) === -1)) {
        delete self[key][joins[key].rightKey];
        if (self[key].isSaved() === true) {
          promises.push(self[key].save({}, false, {}, true, false));
        }
      }
    }
    if ((joins[key].type === 'belongsTo') && (self[key] instanceof Document)) {
      if ((self[key].isSaved() === true) &&
        ((key in docToDelete) || ((deleteAll === true) && (deletedDocs.indexOf(self[key]) === -1)))) {

        (function(key) {
          promises.push(new Promise(function(resolve, reject) {
            self[key]._delete(docToDelete[key], deleteAll, deletedDocs, true, false).then(function() {
              delete self[key];
              resolve();
            }).error(reject);
          }));
        })(key);
      }
    }

    if ((joins[key].type === 'hasMany') && (Array.isArray(self[key]))) {
      var manyPromises = [];
      for(var i=0; i<self[key].length; i++) {
        if (((self[key][i] instanceof Document) && (self[key][i].isSaved() === true))
          && ((key in docToDelete) || ((deleteAll === true) && (deletedDocs.indexOf(self[key][i]) === -1)))) {

          manyPromises.push(self[key][i]._delete(docToDelete[key], deleteAll, deletedDocs, true, false))
        }
        else if ((self[key][i] instanceof Document) && (deletedDocs.indexOf(self[key][i]) === -1)) {
          delete self[key][i][joins[key].rightKey];
          if (self[key][i].isSaved() === true) {
            promises.push(self[key][i].save({}, false, {}, true, false))
          }
        }
      }
      (function(key) {
        promises.push(new Promise(function(resolve, reject) {
          Promise.all(manyPromises).then(function() {
            delete self[key];
            resolve()
          })
        }));
      })(key)
    }
    if ((joins[key].type === 'hasAndBelongsToMany') && (Array.isArray(self[key]))) {
      // Delete links + docs
      var pks = []; // primary keys of the documents
      var linksPks = []; // primary keys of the links

      // Store the element we are going to delete.
      // If the user force the deletion of the same element multiple times, we can't naively loop
      // over the elements in the array...
      var docsToDelete = [];


      for(var i=0; i<self[key].length; i++) {
        if (((self[key][i] instanceof Document) && (self[key][i].isSaved() === true))
          && ((key in docToDelete) || ((deleteAll === true) && (deletedDocs.indexOf(self[key][i]) === -1)))) {

          //pks.push(self[key][i][joins[key].model._getModel()._pk]);
          docsToDelete.push(self[key][i]);
          // We are going to do a range delete, but we still have to recurse
          promises.push(self[key][i]._delete(docToDelete[key], deleteAll, deletedDocs, true, false))

          if (self.getModel()._getModel()._pk === joins[key].leftKey) {
            // The table is created since we are deleting an element from it
            if (self._getModel()._name === joins[key].model._getModel()._name) {
              if (self[joins[key].leftKey] < self[key][i][joins[key].rightKey]) {
                //TODO Add test for this
                linksPks.push(self[joins[key].leftKey]+"_"+self[key][i][joins[key].rightKey]);
              }
              else {
                linksPks.push(self[key][i][joins[key].rightKey]+"_"+self[joins[key].leftKey]);
              }
            }
            else if (self._getModel()._name < joins[key].model._getModel()._name) {
              linksPks.push(self[joins[key].leftKey]+"_"+self[key][i][joins[key].rightKey]);
            }
            else {
              linksPks.push(self[key][i][joins[key].rightKey]+"_"+self[joins[key].leftKey]);
            }
          }
        }
        else if ((self[key][i] instanceof Document) && (deletedDocs.indexOf(self[key][i]) === -1)) {
          // It's safe to destroy links only if it's a primary key
          if (self.getModel()._getModel()._pk === joins[key].leftKey) {
            if (self._getModel()._name < joins[key].model._getModel()._name) {
              linksPks.push(self[joins[key].leftKey]+"_"+self[key][i][joins[key].rightKey]);
            }
            else {
              linksPks.push(self[key][i][joins[key].rightKey]+"_"+self[joins[key].leftKey]);
            }
          }
        }
      }
      if (linksPks.length > 0) {
        var query = r.table(joins[key].link);
        query = query.getAll.apply(query, linksPks).delete();
        promises.push(query.run());
      }
    }
  });
  if (updateParents !== false) {
    // Clean links that we are aware of
    util.loopKeys(self.__proto__._parents._hasOne, function(hasOne, key) {
      var parents = hasOne[key];
      for(var i=0; i<parents.length; i++) {
        delete parents[i].doc[parents[i].key];
        util.loopKeys(parents[i].doc.__proto__._hasOne, function(joined, joinKey) {
          if (joined[joinKey].doc === self) {
            delete parents[i].doc.__proto__._hasOne[joinKey];
          }
        })
      }
    });
    util.loopKeys(self.__proto__._parents._belongsTo, function(belongsTo, key) {
      var parents = belongsTo[key];
      for(var i=0; i<parents.length; i++) {
        delete parents[i].doc[parents[i].key];
        delete parents[i].doc[parents[i].foreignKey];
        if (deletedDocs.indexOf(parents[i]) === -1) {
          promises.push(parents[i].doc.save());
        }
      }
    });
    util.loopKeys(self.__proto__._parents._hasMany, function(hasMany, key) {
      var parents = hasMany[key];
      for(var i=0; i<parents.length; i++) {
        for(var j=0; j<parents[i].doc[parents[i].key].length; j++) {
          if (parents[i].doc[parents[i].key][j] === self) {
            util.loopKeys(parents[i].doc.__proto__._hasMany, function(joined, joinKey) {
              for(var k=0; k<joined[joinKey].length; k++) {
                if (joined[joinKey][k].doc === self) {
                  joined[joinKey].splice(k, 1);
                  return false;
                }
              }
            });
            parents[i].doc[parents[i].key].splice(j, 1);
            break;
          }
        }
      }
    });
    util.loopKeys(self.__proto__._parents._belongsLinks, function(belongsLinks, key) {
      var parents = belongsLinks[key];
      for(var i=0; i<parents.length; i++) {
        for(var j=0; j<parents[i].doc[parents[i].key].length; j++) {
          if (parents[i].doc[parents[i].key][j] === self) {
            parents[i].doc[parents[i].key].splice(j, 1);
            break;
          }
        }
      }
    });
  }

  if (deleteSelf !== false) {
    if (self.isSaved() === true) {
      promises.push(new Promise(function(resolve, reject) {
        r.table(model._name).get(self[model._pk]).delete().run().then(function(result) {
          self._setUnSaved();
          self.emit('deleted', self);
          resolve(self);
        }).error(reject);
      }))
    }
    // else we don't throw an error, should we?
  }

  var p = new Promise(function(resolve, reject) {
    Promise.all(promises).then(function(result) {
      resolve(self);
    }).error(function(error) {
      reject(error)
    });
  })
  return p.nodeify(callback);
}

/*
 * Delete this document and purge the database by doing range update to clean
 * the foreign keys.
 * @param {Function=} callback
 * @return {Promise=} Return a promise if no callback is provided
 */
Document.prototype.purge = function(callback) {
  var self = this;

  var model = self._getModel(); // instance of Model
  var r = model._thinky.r;

  // Clean parent for hasOne
  // doc.otherDoc.delete()
  util.loopKeys(self.__proto__._parents._hasOne, function(hasOne, key) {
    for(var i=0; i<hasOne[key].length; i++) {
      var parentDoc = hasOne[key][i].doc; // A doc that belongs to otherDoc (aka this)
      delete parentDoc[hasOne[key][i].key] // Delete reference to otherDoc (aka this)
    }
  });

  // Clean parent for belongsTo
  // doc.otherDoc.delete()
  util.loopKeys(self.__proto__._parents._belongsTo, function(belongsTo, key) {
    for(var i=0; i<belongsTo[key].length; i++) {
      var parentDoc = belongsTo[key][i].doc;
      delete parentDoc[belongsTo[key][i].key];
      delete parentDoc[belongsTo[key][i].foreignKey];
    }
  });

  // Clean parent for hasMany
  util.loopKeys(self.__proto__._parents._hasMany, function(hasMany, key) {
    for(var i=0; i<hasMany[key].length; i++) {
      var parentDoc = hasMany[key][i].doc;
      var field = hasMany[key][i].key;
      for(var j=0; j<parentDoc[field].length; j++) {
        if (parentDoc[field][j] === this) {
          parentDoc[field].splice(j, 1);
          break;
        }
      }
    }
  });


  // Clean parent for hasAndBelongsToMany
  util.loopKeys(self.__proto__._parents._belongsLinks, function(belongsLinks, key) {
    for(var i=0; i<belongsLinks[key].length; i++) {
      var parentDoc = belongsLinks[key][i].doc;
      var field = belongsLinks[key][i].key;
      for(var j=0; j<parentDoc[field].length; j++) {
        if (parentDoc[field][j] === this) {
          parentDoc[field].splice(j, 1);
          break;
        }
      }
    }
  });

  // Purge the database
  var promises = [];
  util.loopKeys(self._getModel()._joins, function(joins, field) {
    var join = joins[field];
    var joinedModel = join.model;

    if ((join.type === 'hasOne') || (join.type === 'hasMany')) {
      promises.push(r.table(joinedModel.getTableName()).getAll(self[join.leftKey], {index: join.rightKey}).replace(function(doc) {
        return doc.without(join.rightKey)
      }).run())
    }
    // nothing to do for "belongsTo"
    else if (join.type === 'hasAndBelongsToMany') {
      if (self.getModel()._getModel()._pk === join.leftKey) {
        // [1]
        promises.push(r.table(join.link).getAll(self[join.leftKey], {index: self.getModel().getTableName()+"_"+join.leftKey}).delete().run())
      }
    }
  });

  util.loopKeys(self._getModel()._reverseJoins, function(reverseJoins, field) {
    var join = reverseJoins[field];
    var joinedModel = join.model; // model where belongsTo/hasAndBelongsToMany was called

    if (join.type === 'belongsTo') {
      // What was called is joinedModel.belongsTo(self, fieldDoc, leftKey, rightKey)
      promises.push(r.table(joinedModel.getTableName()).getAll(self[join.rightKey], {index: join.leftKey}).replace(function(doc) {
        return doc.without(join.leftKey)
      }).run())
    }
    // nothing to do for "belongsTo"
    else if (join.type === 'hasAndBelongsToMany') {
      // Purge only if the key is a primary key
      // What was called is joinedModel.hasAndBelongsToMany(self, fieldDoc, leftKey, rightKey)
      if (self.getModel()._getModel()._pk === join.leftKey) {
        promises.push(r.table(join.link).getAll(self[join.rightKey], {index: self.getModel().getTableName()+"_"+join.rightKey}).delete().run())
      }
    }
  });

  // Delete itself
  promises.push(self.delete())

  return new Promise(function(resolve, reject) {
    Promise.all(promises).then(function() {
      resolve(self);
    }).error(reject);
  }).nodeify(callback);
}

Document.prototype.addRelation = function() {
  var self = this;
  var pk = self._getModel()._pk;

  var query = self.getModel().get(this[pk])
  return query.addRelation.apply(query, arguments);
}

Document.prototype.removeRelation = function() {
  var self = this;
  var pk = self._getModel()._pk;

  var query = self.getModel().get(this[pk])
  return query.removeRelation.apply(query, arguments);
}

/**
 * Perform a `merge` of `obj` in this document. Extra keys will be removed.
 */
Document.prototype._merge = function(obj) {
  var self = this;
  util.loopKeys(self, function(self, key) {
    if ((obj[key] === undefined) && (self._getModel()._joins[key] === undefined)) {
      delete self[key];
    }
  });
  util.loopKeys(obj, function(obj, key) {
    self[key] = obj[key];
  });
  return self;
}


/**
 * Perform a `merge` of `obj` in this document. Extra keys will not be removed.
 */
Document.prototype.merge = function(obj) {
  var self = this;
  util.loopKeys(obj, function(obj, key) {
    // Recursively merge only if both fields are objects, else we'll overwrite the field
    if (util.isPlainObject(obj[key]) && util.isPlainObject(self[key])) {
      Document.prototype.merge.call(self[key], obj[key])
    }
    else {
      self[key] = obj[key];
    }
  });
  return self;
}

/**
 * Set the atom feed and update the document for each change
 */
Document.prototype._setFeed = function(feed) {
  var self = this;

  self.__proto__._feed = feed;
  self.__proto__._active = true;
  feed.each(function(err, change) {
    if (err) {
      self.__proto__._active = false;
      self.emit('error', err);
    }
    else {
      if (change.new_val === null) {
        // Delete all the fields
        self._merge({});
        self._setOldValue(change.old_val);
        self._setUnSaved();
        self.emit('change', self);
      }
      else {
        self._merge(change.new_val);
        self._setOldValue(change.old_val);
        self.setSaved();
        self.emit('change', self);
      }
    }

  });
};

Document.prototype.getFeed = function() {
  return this.__proto__._feed;
}

Document.prototype.closeFeed = function() {
  return this.__proto__._feed.close();
}

/**
 * Have the model emit 'retrieved' with the current document and
 * recurse to have all joined models do the same.
 */
Document.prototype._emitRetrieve = function() {
  var self = this;
  self.getModel().emit('retrieved', self);
  util.loopKeys(self._getModel()._joins, function(joins, key) {
    var join = joins[key];
    if ((joins[key].type === 'hasOne') || (joins[key].type === 'belongsTo')) {
      if ((self[key] != null) && (typeof self[key]._emitRetrieve === 'function')) {
        self[key]._emitRetrieve();
      }
    }
    else if ((joins[key].type === 'hasMany') || (joins[key].type === 'hasAndBelongsToMany')) {
      if (Array.isArray(self[key])) {
        for(var i=0; i<self[key].length; i++) {
          if (typeof self[key][i]._emitRetrieve === 'function') {
            self[key][i]._emitRetrieve();
          }
        }
      }
    }
  })
}

module.exports = Document;


/***/ }),

/***/ "../node_modules/thinky/lib/errors.js":
/*!********************************************!*\
  !*** ../node_modules/thinky/lib/errors.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! util */ "util");
var errors = module.exports = {};

/**
 * The base error that all thinky related errors derive from
 *
 * @constructor
 * @alias Error
 */
errors.ThinkyError = function() {
  var tmp = Error.apply(this, arguments);
  tmp.name = this.name = 'ThinkyError';

  this.message = tmp.message;
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, this.constructor);
};
util.inherits(errors.ThinkyError, Error);

/**
 * Thrown or returned when `get` returns `null`.
 * @extends ThinkyError
 */
errors.DocumentNotFound = function(message) {
  var errorMessage = message || "The query did not find a document and returned null.";
  errors.ThinkyError.call(this, errorMessage);
  this.name = 'DocumentNotFoundError';
};
util.inherits(errors.DocumentNotFound, errors.ThinkyError);

/**
 * Thrown or returned when an in place update/replace returns an invalid document.
 * @extends ThinkyError
 */
errors.InvalidWrite = function(message, raw) {
  errors.ThinkyError.call(this, message);
  this.name = 'InvalidWriteError';
  this.raw = raw;
};
util.inherits(errors.InvalidWrite, errors.ThinkyError);

/**
 * Thrown or returned when validation of a document fails.
 * @extends ThinkyError
 */
errors.ValidationError = function(message) {
  errors.ThinkyError.call(this, message);
  this.name = 'ValidationError';
};
util.inherits(errors.ValidationError, errors.ThinkyError);

/**
 * Thrown or returned when the primary key unique document constraint fails.
 * @extends ThinkyError
 */
errors.DuplicatePrimaryKey = function(message, primaryKey) {
  errors.ThinkyError.call(this, message);
  this.name = 'DuplicatePrimaryKeyError';
  if (primaryKey !== undefined) {
    this.primaryKey = primaryKey;
  }
};
util.inherits(errors.DuplicatePrimaryKey, errors.ThinkyError);

/**
 * regular expressions used to determine which errors should be thrown
 */
errors.DOCUMENT_NOT_FOUND_REGEX = new RegExp('^The query did not find a document and returned null.*');
errors.DUPLICATE_PRIMARY_KEY_REGEX = new RegExp('^Duplicate primary key `(.*)`.*');

/**
 * Creates an appropriate error given either an instance of Error or a message
 * from the RethinkDB driver
 */
errors.create = function(errorOrMessage) {
  var message = (errorOrMessage instanceof Error) ? errorOrMessage.message : errorOrMessage;
  if (message.match(errors.DOCUMENT_NOT_FOUND_REGEX)) {
    return new errors.DocumentNotFound(message);
  } else if (message.match(errors.DUPLICATE_PRIMARY_KEY_REGEX)) {
    var primaryKey = message.match(errors.DUPLICATE_PRIMARY_KEY_REGEX)[1];
    return new errors.DuplicatePrimaryKey(message, primaryKey);
  } else if (errorOrMessage instanceof Error) {
    return errorOrMessage;
  }

  return new errors.ThinkyError(errorOrMessage);
};


/***/ }),

/***/ "../node_modules/thinky/lib/feed.js":
/*!******************************************!*\
  !*** ../node_modules/thinky/lib/feed.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Promise = __webpack_require__(/*! bluebird */ "bluebird");
var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
var util = __webpack_require__(/*! ../node_modules/thinky/lib/util.js */ "../node_modules/thinky/lib/util.js");

function Feed(feed, model) {
  this.feed = feed;
  this.model = model;
  this._closed = false;

  this.each = this._each;
  this.next = this._next;
}

Feed.prototype.toString = function() {
  return '[object Feed]'
}


Feed.prototype._next = function() {
  var self = this;
  return new Promise(function(resolve, reject) {
    self.feed.next().then(function(data) {
      util.tryCatch(function() {
        if (data.new_val != null) {
          self.model._parse(data.new_val).then(function(doc) {
            doc._setOldValue(data.old_val);
            resolve(doc);
          }).error(reject);
        }
        else if (data.old_val != null) { // new_val is null
          self.model._parse(data.old_val).then(function(doc) {
            doc._setUnSaved();
            resolve(doc);
          }).error(reject);
        }
        //else we just drop the change as it's a state/initializing object
      }, function(err) {
        reject(err);
      })
    }).error(reject);
  });
}

Feed.prototype.toArray = function() {
  throw new Error("The `toArray` method is not available on feeds.");
}

Feed.prototype.close = function(callback) {
  this._closed = true;
  return this.feed.close(callback);
}

Feed.prototype._each = function(callback, onFinish) {
  var self = this;
  self.feed.each(function(err, data) {
    if (err) {
      if (self._closed === true) {
        return;
      }
      return callback(err);
    }
    util.tryCatch(function() {
      if (data.new_val != null) {
        self.model._parse(data.new_val).then(function(doc) {
          doc._setOldValue(data.old_val);
          callback(null, doc);
        }).error(function(err) {
          callback(err);
        });
      }
      else if (data.old_val != null) { // new_val is null
        self.model._parse(data.old_val).then(function(doc) {
          doc._setUnSaved();
          callback(null, doc);
        }).error(function(err) {
          callback(err);
        });
      }
      //else we just drop the change as it's a state/initializing object
    }, function(err) {
      callback(err);
    })
  }, onFinish);
};

Feed.prototype._makeEmitter = function() {
  this.next = function() {
    throw new Error("You cannot called `next` once you have bound listeners on the feed")
  }
  this.each = function() {
    throw new Error("You cannot called `each` once you have bound listeners on the feed")
  }
  this.toArray = function() {
    throw new Error("You cannot called `toArray` once you have bound listeners on the feed")
  }
  this._eventEmitter = new EventEmitter();
}

Feed.prototype._eachCb = function(err, data) {
  var self = this;
  if (err != null) {
    if ((this._closed !== false) || (err.message !== "You cannot retrieve data from a cursor that is closed")) {
      self._eventEmitter.emit('error', err);
    }
    return;
  }

  util.tryCatch(function() {
    if (data.new_val !== null) {
      self.model._parse(data.new_val).then(function(doc) {
        doc._setOldValue(data.old_val);
        self._eventEmitter.emit('data', doc);
      }).error(function(err) {
        self._eventEmitter.emit('error', err);
      });
    }
    else if (data.old_val !== null) { // new_val is null
      self.model._parse(data.old_val).then(function(doc) {
        doc._setUnSaved();
        self._eventEmitter.emit('data', doc);
      }).error(function(err) {
        self._eventEmitter.emit('error', err);
      });
    }
  }, function(err) {
    self._eventEmitter.emit('error', err);
  })
}

var methods = [
    'addListener',
    'on',
    'once',
    'removeListener',
    'removeAllListeners',
    'setMaxListeners',
    'listeners',
    'emit'
];

for(var i=0; i<methods.length; i++) {
  (function(n) {
    var method = methods[n];
    Feed.prototype[method] = function() {
      var self = this;
      if (self._eventEmitter == null) {
        self._makeEmitter();
        setImmediate(function() {
          self.feed._each(self._eachCb.bind(self), function() {
            self._eventEmitter.emit('end');
          });
        });
      }
      self._eventEmitter[method].apply(self._eventEmitter, util.toArray(arguments));
    };
  })(i);
}

module.exports = Feed;


/***/ }),

/***/ "../node_modules/thinky/lib/model.js":
/*!*******************************************!*\
  !*** ../node_modules/thinky/lib/model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../node_modules/thinky/lib/util.js */ "../node_modules/thinky/lib/util.js");
var _util = __webpack_require__(/*! util */ "util");
var schemaUtil = __webpack_require__(/*! ../node_modules/thinky/lib/schema.js */ "../node_modules/thinky/lib/schema.js");
var Document = __webpack_require__(/*! ../node_modules/thinky/lib/document.js */ "../node_modules/thinky/lib/document.js");
var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
var Query = __webpack_require__(/*! ../node_modules/thinky/lib/query.js */ "../node_modules/thinky/lib/query.js");
var Promise = __webpack_require__(/*! bluebird */ "bluebird");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/errors.js */ "../node_modules/thinky/lib/errors.js");

/*
 * Constructor for a Model. Note that this is not what `thinky.createModel`
 * returns. It is the prototype of what `thinky.createModel` returns.
 * The whole chain being:
 * document.__proto__ = new Document(...)
 * document.__proto__.constructor = model (returned by thinky.createModel
 * document.__proto__._model = instance of Model
 * document.__proto__.constructor.__proto__ = document.__proto__._model
 */
function Model(name, schema, options, thinky) {
  /**
   * Name of the table used
   * @type {string}
   */
  this._name = name;

  // We want a deep copy
  options = options || {};
  this._options = {};
  this._options.enforce_missing = (options.enforce_missing != null) ? options.enforce_missing : thinky._options.enforce_missing;
  this._options.enforce_extra = (options.enforce_extra != null) ? options.enforce_extra : thinky._options.enforce_extra;
  this._options.enforce_type = (options.enforce_type != null) ? options.enforce_type : thinky._options.enforce_type;
  this._options.timeFormat = (options.timeFormat != null) ? options.timeFormat : thinky._options.timeFormat;
  this._options.validate = (options.validate != null) ? options.validate : thinky._options.validate;

  this._schema = schemaUtil.parse(schema, '', this._options, this);
  //console.log(JSON.stringify(this._schema, null, 2));

  this.virtualFields = [];
  this.defaultFields = [];
  this._schema._getDefaultFields([], this.defaultFields, this.virtualFields)

  this.needToGenerateFields = (this.defaultFields.length+this.virtualFields.length) !== 0;

  this._pk = (options.pk != null) ? options.pk : 'id';

  this._table = (options.table != null) ? options.table : {};
  this._table.primaryKey = this._pk;

  this._thinky = thinky;

  this._validator = options.validator;

  this._indexes = {}; // indexName -> true
  this._pendingPromises = [];

  this._error = null; // If an error occured, we won't let people save things

  this._listeners = {};
  this._maxListeners = 10;
  this._joins = {};
  this._localKeys = {}; // key used as a foreign key by another model

  // This is to track joins that were not directly called by this model but that we still need
  // to purge the database
  this._reverseJoins = {};

  this._methods = {};
  this._staticMethods = {};
  this._async = {
    init: false,
    retrieve: false,
    save: false,
    validate: false
  };

  this._pre = {
    save: [],
    delete: [],
    validate: []
  };
  this._post = {
    init: [],
    retrieve: [],
    save: [],
    delete: [],
    validate: []
  };
}
_util.inherits(Model, EventEmitter);

Model.new = function(name, schema, options, thinky) {

  var proto = new Model(name, schema, options, thinky);
  proto._initModel = options.init  !== undefined ? !!options.init : true;

  var model = function model(doc, options) {
    if (!util.isPlainObject(doc)) {
      throw new Error("Cannot build a new instance of `"+proto._name+"` without an object")
    }
    // We create a deepcopy only if doc was already used to create a document
    if (doc instanceof Document) {
      doc = util.deepCopy(doc);
    }

    util.changeProto(doc, new Document(model, options));

    // Create joins document. We do it here because `options` are easily available
    util.loopKeys(proto._joins, function(joins, key) {
      if (doc[key] != null) {
        if ((joins[key].type === 'hasOne') && (doc[key] instanceof Document === false)) {
          doc[key] = new joins[key].model(doc[key], options);
        }
        else if ((joins[key].type === 'belongsTo') && (doc[key] instanceof Document === false)) {
          doc[key] = new joins[key].model(doc[key], options);
        }
        else if (joins[key].type === 'hasMany') {
          doc.__proto__._hasMany[key] = []

          for(var i=0; i<doc[key].length; i++) {
            if (doc[key][i] instanceof Document === false) {
              doc[key][i] = new joins[key].model(doc[key][i], options);
            }
          }
        }
        else if (joins[key].type === 'hasAndBelongsToMany') {
          for(var i=0; i<doc[key].length; i++) {
            if (doc[key][i] instanceof Document === false) {
              doc[key][i] = new joins[key].model(doc[key][i], options);
            }
          }
        }
      }
    });
    doc._getModel()._schema._setModel(doc._getModel());
    if (proto.needToGenerateFields === true) {
      doc._generateDefault();
    }

    var promises = [];
    var promise;
    if (proto._options.validate === 'oncreate') {
      promise = doc.validate(options);
      if (promise instanceof Promise) promises.push(promise);
    }

    if (proto._post.init.length > 0) {
      promise = util.hook({
        postHooks: doc._getModel()._post.init,
        doc: doc,
        async: doc._getModel()._async.init,
        fn: function() {
          return doc;
        }
      })
      if (promise instanceof Promise) promises.push(promise);
    }

    if (promises.length > 0) {
      return Promise.all(promises).then(function(docs) {
        return docs[0];
      });
    }
    return doc;
  }

  model.__proto__ = proto;

  if (options.init !== false) {
    // Setup the model's table.
    model.tableReady().then();
  }
  else {
    // We do not initialize the table and suppose that it already exists and
    // is ready.
    model.emit('created');
    model.emit('ready');
  }

  // So people can directly call the EventEmitter from the constructor
  // TOIMPROVE: We should emit everything from the constructor instead of emitting things from
  // the constructor and the instance of Model
  util.loopKeys(EventEmitter.prototype, function(emitter, key) {
    (function(_key) {
      model[_key] = function() {
        model._getModel()[_key].apply(model._getModel(), arguments);
      }
    })(key)
  });


  return model
}

/**
 * Create the model's table.
 * @return {Promise=} Returns a promise which will resolve when the table is ready.
 */
Model.prototype.tableReady = function() {
  var self = this;
  var model = this._getModel();
  if (!this._initModel) return Promise.resolve();
  if (this._tableReadyPromise) return this._tableReadyPromise;

  // Create the table, or push the table name in the queue.
  var r = model._thinky.r;
  this._tableReadyPromise = model._thinky.dbReady()
  .then(function() {
    return r.tableCreate(model._name, model._table).run();
  })
  .error(function(error) {
    if (error.message.match(/Table `.*` already exists/)) {
      return;
    }
    model._error = error;
    // Should we throw here?
  });

  return this._tableReadyPromise.then(function() {
    self.emit('created');
    if (!self._pendingPromises.length) {
      self.emit('ready');
    }
  });
};

/**
 * Get a promise which resolves when the Model's table and
 * all indices have been created.
 */
Model.prototype.ready = function() {
  var requirements = [];

  // Ensure the Model's table is ready
  requirements.push(this.tableReady());

  // Ensure all other pending promises have been resolved
  requirements.push(this._promisesReady());

  return Promise.all(requirements);
};

Model.prototype._promisesReady = function() {
  var self = this;
  if (this._promisesReadyPromise) return this._promisesReadyPromise;

  var verifyAll = function() {
    return Promise.all(self._pendingPromises)
    .then(function() {
      var i, allFullfilled = true;
      for (i=0; i<self._pendingPromises.length; i++) {
         if (!self._pendingPromises[i].isFulfilled()) {
          allFullfilled = false;
          break;
         }
      }
      return allFullfilled ? Promise.resolve() : verifyAll();
    });
  };

  this._promisesReadyPromise = verifyAll();
  return this._promisesReadyPromise;
};

Model.prototype._waitFor = function(promise) {
  var self = this;
  this._pendingPromises.push(promise);

  // Emit 'ready' when all pending promises have resolved
  if (!this._pendingReady) {
    this._pendingReady = this._promisesReady().then(function() {
      delete self._pendingReady;
      self.emit('ready', self);
    });
  }
};


Model.prototype._setError = function(error) {
  this._getModel()._error = error;
  this.emit('error', error);
}


/*
 * Return the options of the model -- call from an instance of Model
 */
Model.prototype.getOptions = function() {
  return this._options;
}


/*
 * Return the instance of Model **when called on the function**
 */
Model.prototype._getModel = function() {
  return this.__proto__;
}

/*
 * Return the instance of Model
 */
Model.prototype.getTableName = function() {
  return this._getModel()._name;
}


Model.prototype.ensureIndex = function(name, fn, opts) {
  var self = this;

  if ((opts === undefined) && (util.isPlainObject(fn))) {
    opts = fn;
    fn = undefined;
  }

  return self._createIndex(name, fn, opts)
  .catch(function(error) {
    self._getModel()._setError(error);
    throw error;
  });
}

Model.prototype._createIndex = function(name, fn, opts) {
  var model = this._getModel();
  var tableName = this.getTableName();
  var r = model._thinky.r;

  if (opts === undefined && util.isPlainObject(fn)) {
    opts = fn;
    fn = undefined;
  }

  var promise = this.tableReady().then(function() {
    return new Promise(function(resolve, reject) {
      return r.branch(
        r.table(tableName).indexList().contains(name),
        r.table(tableName).indexWait(name),
        r.branch(
          r.table(tableName).info()('primary_key').eq(name),
          r.table(tableName).indexWait(name),
          r.table(tableName).indexCreate(name, fn, opts).do(function() {
            return r.table(tableName).indexWait(name);
          })
        )
      )
      .run()
      .then(resolve)
      .error(function(error) {
        if (error.message.match(/^Index/)) {
          // TODO: This regex seems a bit too generous since messages such
          // as "Index `id` was not found on table..." will be accepted.
          // Figure out if this is OK or not.
          return resolve();
        }
        reject(error);
      });
    });
  })
  .then(function() {
    model._indexes[name] = true;
  });

  this._waitFor(promise);
  return promise;
};

/*
 * joinedModel: the joined model
 * fieldDoc: the field where the joined document will be kept
 * leftKey: the key in the model used for the join
 * rightKey: the key in the joined model used for the join
 *
 * The foreign key is stores in the joinedModel
 *
 * Post.hasOne(Author, "author", "id", "postId"
 *                ^- post.id
 *
 * options can be:
 * - init: Boolean (create an index or not)
 * - timeFormat: 'raw'/'native'
 * - enforce_extra: 'strict'/'remove'/'none'
 * - enforce_missing: Boolean
 * - enforce_type: 'strict'/'loose'/'none'
 * - validate: 'oncreate'/'onsave'
 */
Model.prototype.hasOne = function(joinedModel, fieldDoc, leftKey, rightKey, options) {
  var self  = this;

  if ((joinedModel instanceof Model) === false) {
    throw new Error("First argument of `hasOne` must be a Model")
  }
  if (fieldDoc in self._getModel()._joins) {
    throw new Error("The field `"+fieldDoc+"` is already used by another relation.");
  }
  if (fieldDoc === "_apply") {
    throw new Error("The field `_apply` is reserved by thinky. Please use another one.");
  }
  self._getModel()._joins[fieldDoc] = {
    model: joinedModel,
    leftKey: leftKey,
    rightKey: rightKey,
    type: 'hasOne'
  }
  joinedModel._getModel()._localKeys[rightKey] = true;

  options = options || {};
  if (options.init !== false) {
    var newIndex = joinedModel._createIndex(rightKey)
    .catch(function(error) {
      joinedModel._getModel()._setError(error);
      self._getModel()._setError(error);
    });
    self._waitFor(newIndex);
  }
}

/*
 * joinedModel: the joined model
 * fieldDoc: the field where the joined document will be kept
 * leftKey: the key in the model used for the join
 * rightKey: the key in the joined model used for the join
 *
 * The foreign key is store in the model calling belongsTo
 *
 * Post.belongsTo(Author, "author", "authorId", "id"
 *                        ^- author.id
 */
Model.prototype.belongsTo = function(joinedModel, fieldDoc, leftKey, rightKey, options) {
  var self  = this;

  if ((joinedModel instanceof Model) === false) {
    throw new Error("First argument of `belongsTo` must be a Model")
  }
  if (fieldDoc in self._getModel()._joins) {
    throw new Error("The field `"+fieldDoc+"` is already used by another relation.");
  }
  if (fieldDoc === "_apply") {
    throw new Error("The field `_apply` is reserved by thinky. Please use another one.");
  }

  self._getModel()._joins[fieldDoc] = {
    model: joinedModel,
    leftKey: leftKey,
    rightKey: rightKey,
    type: 'belongsTo'
  };
  self._getModel()._localKeys[leftKey] = true;

  joinedModel._getModel()._reverseJoins[fieldDoc] = {
    model: self,
    leftKey: leftKey,
    rightKey: rightKey,
    type: 'belongsTo',
  }

  options = options || {};
  if (options.init !== false) {
    /*
    var newIndex = self._createIndex(leftKey)
    .catch(function(error) {
      joinedModel._getModel()._setError(error);
      self._getModel()._setError(error);
    });
    joinedModel._waitFor(newIndex);
    */
    var newIndex = joinedModel._createIndex(rightKey)
    .catch(function(error) {
      joinedModel._getModel()._setError(error);
      self._getModel()._setError(error);
    });
    self._waitFor(newIndex);

  }
}


/*
 * joinedModel: the joined model
 * fieldDoc: the field where the joined document will be kept
 * leftKey: the key in the model used for the join
 * rightKey: the key in the joined model used for the join
 *
 * A post has one author, and an author can write multiple posts
 * Author.hasMany(Post, "posts", "id", "authorId"
 *                 ^- author.id
 */
Model.prototype.hasMany = function(joinedModel, fieldDoc, leftKey, rightKey, options) {
  var self  = this;

  if ((joinedModel instanceof Model) === false) {
    throw new Error("First argument of `hasMany` must be a Model")
  }
  if (fieldDoc in self._getModel()._joins) {
    throw new Error("The field `"+fieldDoc+"` is already used by another relation.");
  }
  if (fieldDoc === "_apply") {
    throw new Error("The field `_apply` is reserved by thinky. Please use another one.");
  }

  this._getModel()._joins[fieldDoc] = {
    model: joinedModel,
    leftKey: leftKey,
    rightKey: rightKey,
    type: 'hasMany'
  };
  joinedModel._getModel()._localKeys[rightKey] = true;

  options = options || {};
  if (options.init !== false) {
    var newIndex = joinedModel._createIndex(rightKey)
    .catch(function(error) {
      self._getModel()._setError(error);
      joinedModel._getModel()._setError(error);
    });
    self._waitFor(newIndex);
  }
}


/*
 * joinedModel: the joined model
 * fieldDoc: the field where the joined document will be kept
 * leftKey: the key in the model used for the join
 * rightKey: the key in the joined model used for the join
 *
 * Patient.hasAndBelongsToMany(Doctor, "doctors", "id", "id"
 *                     patient.id-^  ^-doctor.id
 *
 * It automatically creates a table <modelName>_<joinedModel> or <joinedModel>_<modelName> (alphabetic order)
 */
Model.prototype.hasAndBelongsToMany = function(joinedModel, fieldDoc, leftKey, rightKey, options) {
  var self = this;
  var link, query;
  var thinky = this._getModel()._thinky;
  options = options || {};

  if ((joinedModel instanceof Model) === false) {
    throw new Error("First argument of `hasAndBelongsToMany` must be a Model")
  }
  if (fieldDoc in self._getModel()._joins) {
    throw new Error("The field `"+fieldDoc+"` is already used by another relation.");
  }
  if (fieldDoc === "_apply") {
    throw new Error("The field `_apply` is reserved by thinky. Please use another one.");
  }

  if (this._getModel()._name < joinedModel._getModel()._name) {
    link = this._getModel()._name+"_"+joinedModel._getModel()._name;
  }
  else {
    link = joinedModel._getModel()._name+"_"+this._getModel()._name;
  }
  if (typeof options.type === 'string') {
    link = link+"_"+options.type;
  }
  else if (typeof options.type !== 'undefined') {
    throw new Error('options.type should be a string or undefined.')
  }

  var linkModel;
  if (thinky.models[link] === undefined) {
    // Create a model, claim the namespace and create the table
    // passes table options to the underlying model (e.g. replicas, shards)
    linkModel = thinky.createModel(link, {}, { table: options.table });
  }
  else {
    linkModel = thinky.models[link];
  }


  this._getModel()._joins[fieldDoc] = {
    model: joinedModel,
    leftKey: leftKey,
    rightKey: rightKey,
    type: 'hasAndBelongsToMany',
    link: link,
    linkModel: linkModel
  }

  joinedModel._getModel()._reverseJoins[self.getTableName()] = {
    leftKey: leftKey,
    rightKey: rightKey,
    type: 'hasAndBelongsToMany',
    link: link,
    linkModel: linkModel
  }

  if (options.init !== false) {
    var r = self._getModel()._thinky.r;

    var query;
    if ((this.getTableName() === joinedModel.getTableName())
      && (leftKey === rightKey)) {
      // The relation is built for the same model, using the same key
      // Create a multi index
      query = r.branch(
        r.table(link).indexList().contains(leftKey+"_"+rightKey),
        r.table(link).indexWait(leftKey+"_"+rightKey),
        r.table(link).indexCreate(leftKey+"_"+rightKey, function(doc) {
          return doc(leftKey+"_"+rightKey)
        }, {multi: true}).do(function() {
          return r.table(link).indexWait(leftKey+"_"+rightKey)
        })
      )
    }
    else {
      query = r.branch(
        r.table(link).indexList().contains(self.getTableName()+'_'+leftKey),
        r.table(link).indexWait(self.getTableName()+'_'+leftKey),
        r.table(link).indexCreate(self.getTableName()+'_'+leftKey).do(function() {
          return r.table(link).indexWait(self.getTableName()+'_'+leftKey)
        })
      ).do(function() {
        return r.branch(
          r.table(link).indexList().contains(joinedModel.getTableName()+'_'+rightKey),
          r.table(link).indexWait(joinedModel.getTableName()+'_'+rightKey),
          r.table(link).indexCreate(joinedModel.getTableName()+'_'+rightKey).do(function() {
            return r.table(link).indexWait(joinedModel.getTableName()+'_'+rightKey)
          })
        )
      })

    }

    var linkPromise = linkModel.ready().then(function() {
      return query.run()
      .then(function() {
        self._getModel()._indexes[leftKey] = true;
        joinedModel._getModel()._indexes[rightKey] = true;
      })
      .error(function(error) {
        if (error.message.match(/^Index `/)) {
          return;
        }
        if (error.message.match(/^Table `.*` already exists/)) {
          return;
        }
        self._getModel()._setError(error);
        joinedModel._getModel()._setError(error);
        throw error;
      });
    })
    .then(function() {
      self._createIndex(leftKey)
      .catch(function(error) {
        self._getModel()._setError(error);
        joinedModel._getModel()._setError(error);
      });

      joinedModel._createIndex(rightKey)
      .catch(function(error) {
        self._getModel()._setError(error);
        joinedModel._getModel()._setError(error);
      });
    });

    joinedModel._waitFor(linkPromise);
    self._waitFor(linkPromise);

    return Promise.all([self.ready(), joinedModel.ready()]);
  }
};

(function() {
  // Import rethinkdbdash methods
  var Term = __webpack_require__(/*! rethinkdbdash */ "../node_modules/rethinkdbdash/lib/index.js")({pool: false}).expr(1).__proto__;
  util.loopKeys(Term, function(Term, key) {
    if (!Term.hasOwnProperty(key)) return;
    if (key === 'run' || key[0] === '_') return;

    (function(key) {
      switch (key) {
        case 'orderBy':
          Model.prototype[key] = function() {
            var query = new Query(this);
            if ((arguments.length === 1)
              && (typeof arguments[0] === 'string')
              && (this._getModel()._indexes[arguments[0]] === true)) {

                query = query[key]({index: arguments[0]});
                return query;
            }
            else {
              query = query[key].apply(query, arguments);
              return query;
            }
          }
          break;
        case 'filter':
          Model.prototype[key] = function() {
            var query = new Query(this);
            if ((arguments.length === 1)
              && (util.isPlainObject(arguments[0]))) {

              // Optimize a filter with an object
              // We replace the first key that match an index name
              var filter = arguments[0];

              var keys = Object.keys(filter).sort(); // Lexicographical order
              for(var i=0 ; i<keys.length; i++) {
                var index = keys[i];

                if (this._getModel()._indexes[index] === true) { // Index found
                  query = query.getAll(filter[index], {index: index});
                  delete filter[index];
                  break;
                }
              }
            }

            query = query[key].apply(query, arguments);
            return query;
          }
          break;
        case 'get':
          // Make a copy of `get` into `_get`
          Model.prototype['_get'] = function() {
            var query = new Query(this);
            query = query['_get'].apply(query, arguments);
            return query;
          }
        default:
          Model.prototype[key] = function() {
            var query = new Query(this);
            query = query[key].apply(query, arguments);
            return query;
          }
      }

    })(key);
  });
})();

Model.prototype.getJoin = function() {
  var query = new Query(this);
  return query.getJoin.apply(query, arguments)
}

Model.prototype.removeRelations = function(relationsToRemove) {
  var query = new Query(this);
  return query.removeRelations(relationsToRemove);
}


Model.prototype.run = function(options) {
  var query = new Query(this);
  return query.run(options);
}
Model.prototype.execute = function(options) {
  var query = new Query(this);
  return query.execute(options);
}

Model.prototype.save = function(docs, options) {
  var self = this;
  var r = self._getModel()._thinky.r;
  var isArray = Array.isArray(docs);

  if (!isArray) {
    docs = [docs];
  }

  var p = new Promise(function(mainResolve, mainReject) {
    var toSave = docs.length;

    var resolves = [];
    var rejects = [];
    var executeInsert = function (resolve, reject) {
      toSave--;
      resolves.push(resolve);
      rejects.push(reject);

      if (toSave === 0) {
        var copies = [];
        for(var i=0; i<docs.length; i++) {
          copies.push(docs[i]._makeSavableCopy());
        }
        var _options;
        if (util.isPlainObject(options)) {
          _options = util.deepCopy(options);
        }
        else {
          _options = {};
        }
        _options.returnChanges = 'always';
        r.table(self.getTableName()).insert(copies, _options).run().then(function(results) {
          if (results.errors === 0) {
            // results.changes currently does not enforce the same order as docs
            if (Array.isArray(results.changes)) {
              for(var i=0; i<results.changes.length; i++) {
                docs[i]._merge(results.changes[i].new_val);
                if (docs[i]._getModel().needToGenerateFields === true) {
                  docs[i]._generateDefault();
                }
                docs[i]._setOldValue(util.deepCopy(results.changes[i].old_val));
                docs[i].setSaved();
                docs[i].emit('saved', docs[i]);
              }
            }
            for(i=0; i<resolves.length; i++) {
              resolves[i]();
            }
          }
          else {
            //TODO Expand error with more information
            for(var i=0; i<rejects.length; i++) {
              rejects[i](new Error("An error occurred during the batch insert. Original results:\n"+JSON.stringify(results, null, 2)));
            }
          }
        }).error(reject);
      }
    };

    var promises = [];
    var foundNonValidDoc = false;
    for(var i=0; i<docs.length; i++) {
      if (foundNonValidDoc === true) {
        return;
      }
      if (docs[i] instanceof Document === false) {
        docs[i] = new self(docs[i]);
      }
      var promise;
      util.tryCatch(function() {
        promise = docs[i].validate();
        if (promise instanceof Promise) {
          promises.push(promise)
        }
      }, function(error) {
        foundNonValidDoc = true;
        mainReject(new Errors.ValidationError("One of the documents is not valid. Original error:\n"+error.message))
      });
    }

    if (foundNonValidDoc === false) {
      Promise.all(promises).then(function() {
        var promises = [];
        for(var i=0; i<docs.length; i++) {
          promises.push(docs[i]._batchSave(executeInsert));
        }
        Promise.all(promises).then(function() {
          mainResolve(docs);
        }).error(function(error) {
          mainReject(error)
        });
      }).error(function(error) {
        mainReject(new Errors.ValidationError("One of the documents is not valid. Original error:\n"+error.message))
      });
    }
  })

  if (!isArray) {
    return p.get(0);
  }

  return p;
}


Model.prototype.define = function(key, fn) {
  this._methods[key] = fn;
}
Model.prototype.defineStatic = function(key, fn) {
  this._staticMethods[key] = fn;

  this[key] = function() {
    return fn.apply(this, arguments);
  };
}



Model.prototype._parse = function(data, ungroup) {
  var self = this;
  var promises = [];
  var promise;

  var p = new Promise(function(resolve, reject) {
    if (ungroup) {
      for(var i=0; i<data.length; i++) {
        for(var j=0; j<data[i].reduction.length; j++) {
          util.tryCatch(function() {
            var newDoc = new self(data[i].reduction[j]);
            newDoc.setSaved(true);
            newDoc._emitRetrieve();
            data[i].reduction[j] = newDoc;
          }, reject)
        }
      }
      return resolve(data);
    }
    else if (Array.isArray(data)) {
      util.tryCatch(function() {
        for(var i=0; i<data.length; i++) {
          data[i] = new self(data[i])
          data[i].setSaved(true);

          self.emit('retrieved', data[i]);

          (function(i) {
            // Order matters here, we want the hooks to be executed *before* calling validate
            promise = util.hook({
              postHooks: data[i]._getModel()._post.retrieve,
              doc: data[i],
              async: data[i]._getModel()._async.retrieve,
              fn: function() {}
            })
            if (promise instanceof Promise) {
              promise.then(function() {
                var promise = data[i].validate();
                if (promise instanceof Promise) {
                  promise.then(function() {
                    resolve(data)
                  }).error(reject);
                }
                else {
                  resolve(data);
                }
              }).error(reject);
              promises.push(promise);
            }
            else {
              promise = data[i].validate();
              if (promise instanceof Promise) promises.push(promise);
            }
          })(i);
        }
      }, function(error) {
        var newError = new Error("The results could not be converted to instances of `"+self.getTableName()+"`\nDetailed error: "+error.message);

        return reject(newError);
      });

      if (promises.length > 0) {
        Promise.all(promises).then(function() {
          resolve(data);
        }).error(reject);
      }
      else {
        resolve(data);
      }
    }
    else {
      // If we get a GROUPED_DATA, we convert documents in each group
      if (util.isPlainObject(data) && (data.$reql_type$ === "GROUPED_DATA")) {
        var result = [];
        util.tryCatch(function() {
          var reduction, newDoc;
          for(var i=0; i<data.data.length; i++) {
            (function(i) {
              reduction = [];
              if (Array.isArray(data.data[i][1])) {
                for(var j=0; j<data.data[i][1].length; j++) {
                  (function(j) {
                    newDoc = new self(data.data[i][1][j]);
                    newDoc.setSaved(true);

                    newDoc._emitRetrieve();

                    promise = util.hook({
                      postHooks: newDoc._getModel()._post.retrieve,
                      doc: newDoc,
                      async: newDoc._getModel()._async.retrieve,
                      fn: function() {}
                    })
                    if (promise instanceof Promise) {
                      promise.then(function() {
                        var promise = newDoc.validate();
                        if (promise instanceof Promise) {
                          promise.then(function() {
                            resolve(data)
                          }).error(reject);
                        }
                        else {
                          resolve(data);
                        }
                      }).error(reject);
                      promises.push(promise);
                    }
                    else {
                      promise = newDoc.validate();
                      if (promise instanceof Promise) promises.push(promise);
                    }

                    reduction.push(newDoc)
                  })(j);
                }
                result.push({
                  group: data.data[i][0],
                  reduction: reduction
                })
              }
              else {
                newDoc = new self(data.data[i][1]);
                newDoc.setSaved(true);

                newDoc._emitRetrieve();

                promise = util.hook({
                  postHooks: newDoc._getModel()._post.retrieve,
                  doc: newDoc,
                  async: newDoc._getModel()._async.retrieve,
                  fn: function() {}
                })
                if (promise instanceof Promise) {
                  promise.then(function() {
                    var promise = newDoc.validate();
                    if (promise instanceof Promise) {
                      promise.then(function() {
                        resolve(result)
                      }).error(reject);
                    }
                    else {
                      resolve(result);
                    }
                  }).error(reject);
                  promises.push(promise);
                }
                else {
                  promise = newDoc.validate();
                  if (promise instanceof Promise) promises.push(promise);
                }

                result.push({
                  group: data.data[i][0],
                  reduction: newDoc
                })
              }
            })(i);
          }
        }, reject);
        if (promises.length > 0) {
          Promise.all(promises).then(function() {
            resolve(result)
          }).error(reject);
        }
        else {
          resolve(result);
        }
      }
      else {
        if (data === null) { // makeDocument is true, but we got `null`
          reject(new Error("Cannot build a new instance of `"+self.getTableName()+"` with `null`."))
        }
        else {
          util.tryCatch(function() {
            var newDoc = new self(data);
            newDoc.setSaved(true);

            newDoc._emitRetrieve();

            promise = util.hook({
              postHooks: newDoc._getModel()._post.retrieve,
              doc: newDoc,
              async: newDoc._getModel()._async.retrieve,
              fn: function() {}
            })
            if (promise instanceof Promise) {
              promise.then(function() {
                var promise = newDoc.validate();
                if (promise instanceof Promise) {
                  promise.then(function() {
                    resolve(newDoc);
                  }).error(reject);
                }
                else {
                  resolve(newDoc);
                }
              }).error(reject);
            }
            else {
              promise = newDoc.validate();
            }

            if (promise instanceof Promise) {
              promise.then(function() {
                resolve(newDoc)
              }).error(function(err) {
                reject(err)
              });
            }
            else {
              resolve(newDoc);
            }
          }, reject);
        }
      }
    }
  })
  return p;
}

/*
 * Implement an interface similar to events.EventEmitter
 */
Model.prototype.docAddListener = function(eventKey, listener) {
  var listeners = this._getModel()._listeners;
  if (listeners[eventKey] == null) {
    listeners[eventKey] = [];
  }
  listeners[eventKey].push({
    once: false,
    listener: listener
  });
}
Model.prototype.docOn = Model.prototype.docAddListener;

Model.prototype.docOnce = function(eventKey, listener) {
  var listeners = this._getModel()._listeners;
  if (listeners[eventKey] == null) {
    listeners[eventKey] = [];
  }
  listeners[eventKey].push({
    once: true,
    listener: listener
  });
}

Model.prototype.docListeners = function(eventKey, raw) {
  if (eventKey == null) {
    return this._getModel()._listeners
  }

  raw = raw || true;
  if (raw === true) {
    return this._getModel()._listeners[eventKey];
  }
  else {
    return this._getModel()._listeners[eventKey].map(function(fn) {
      return fn.listener;
    });
  }
}

Model.prototype.docSetMaxListeners = function(n) {
  this._getModel()._maxListeners = n;
}

Model.prototype.docRemoveListener = function(ev, listener) {
  if (Array.isArray(this._getModel()._listeners[ev])) {
    for(var i=0; i<this._getModel()._listeners[ev].length; i++) {
      if (this._getModel()._listeners[ev][i] === listener) {
        this._getModel()._listeners[ev].splice(i, 1);
        break;
      }
    }
  }
}

Model.prototype.docRemoveAllListeners = function(ev) {
  if (ev === undefined) {
    delete this._getModel()._listeners[ev]
  }
  else {
    this._getModel()._listeners = {};
  }
}

Model.prototype.pre = function(ev, fn) {
  if (typeof fn !== "function") {
    throw new Error("Second argument to `pre` must be a function");
  }
  if (fn.length > 1) {
    throw new Error("Second argument to `pre` must be a function with at most one argument.");
  }
  if (Array.isArray(this._pre[ev]) === false) {
    throw new Error("No pre-hook available for the event `"+ev+"`.")
  }
  this._getModel()._async[ev] = this._getModel()._async[ev] || (fn.length === 1)
  this._getModel()._pre[ev].push(fn);
}

Model.prototype.post = function(ev, fn) {
  if (typeof fn !== "function") {
    throw new Error("Second argument to `pre` must be a function");
  }
  if (fn.length > 1) {
    throw new Error("Second argument to `pre` must be a function with at most one argument.");
  }
  if (Array.isArray(this._post[ev]) === false) {
    throw new Error("No post-hook available for the event `"+ev+"`.")
  }
  this._getModel()._async[ev] = this._getModel()._async[ev] || (fn.length === 1)
  this._getModel()._post[ev].push(fn);
}

module.exports = Model;


/***/ }),

/***/ "../node_modules/thinky/lib/query.js":
/*!*******************************************!*\
  !*** ../node_modules/thinky/lib/query.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Promise = __webpack_require__(/*! bluebird */ "bluebird");
var util = __webpack_require__(/*! ../node_modules/thinky/lib/util.js */ "../node_modules/thinky/lib/util.js");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/errors.js */ "../node_modules/thinky/lib/errors.js");
var schemaUtil = __webpack_require__(/*! ../node_modules/thinky/lib/schema.js */ "../node_modules/thinky/lib/schema.js");
var Feed = __webpack_require__(/*! ../node_modules/thinky/lib/feed.js */ "../node_modules/thinky/lib/feed.js");


/**
 * Constructor for a Query. A Query basically wraps a ReQL queries to keep track
 * of the model returned and if a post-query validation is required.
 * @param {Function=} model Model of the documents returned
 * @param {ReQLQuery=} current ReQL query (rethinkdbdash)
 * @param {boolean=} postValidation whether post query validation should be performed
 */
function Query(model, query, options, error) {
  var self = this;

  this._model = model; // constructor of the model we should use for the results.
  if (model !== undefined) {
    this._r = model._getModel()._thinky.r;
    util.loopKeys(model._getModel()._staticMethods, function(staticMethods, key) {
      (function(_key) {
        self[_key] = function() {
          return staticMethods[_key].apply(self, arguments);
        };
      })(key);
    });
  }

  if (query !== undefined) {
    this._query = query;
   }
  else if (model !== undefined) {
    // By default, we initialize the query to `r.table(<tableName>)`.
    this._query = this._r.table(model.getTableName());
  }

  if (util.isPlainObject(options)) {
    if (options.postValidation) {
      this._postValidation = options.postValidation === true;
    }
    if (options.ungroup) {
      this._ungroup = options.ungroup === true;
    }
    else {
      this._ungroup = false;
    }
  }
  else { // let the user rework the result after ungroup
    this._ungroup = false;
  }
  if (error) {
    // Note `Query.prototype.error` is defined because of `r.error`, so we shouldn't
    // defined this.error.
    this._error = error;
  }
  this._pointWrite = false;
}

Query.prototype.setPostValidation = function() {
  this._postValidation = true;
}

Query.prototype.setPointWrite = function() {
  this._pointWrite = true;
}

/**
 * Execute a Query and expect the results to be object(s) that can be converted
 * to instances of the model.
 * @param {Object=} options The options passed to the driver's method `run`
 * @param {Function=} callback
 * @return {Promise} return a promise that will be resolved when the query and
 * the instances of the models will be created (include the potential
 * asynchronous hooks).
 */
Query.prototype.run = function(options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  return this._execute(options, true).nodeify(callback);
}


/**
 * Execute a Query
 * @param {Object=} options The options passed to the driver's method `run`
 * @param {Function=} callback
 * @return {Promise} return a promise that will be resolved with the results
 * of the query.
 */
Query.prototype.execute = function(options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  return this._execute(options, false).nodeify(callback);
}

/**
* Bind Query.prototype.run() for later use
* @param {Object=} options The options passed to the driver's method `run`
* @param {Function=} callback
* @return {Function} return a `this` bound Query.prototype.run()
*/

Query.prototype.bindRun = function () {
  var curriedArgs = Array.prototype.slice.call(arguments);
  return Function.prototype.bind.apply( Query.prototype.run, [ this ].concat( curriedArgs ) );
}

/**
 * Bind Query.prototype.execute() for later use
 * @param {Object=} options The options passed to the driver's method `run`
 * @param {Function=} callback
 * @return {Function} return a `this` bound Query.prototype.execute()
 */

Query.prototype.bindExecute = function () {
  var curriedArgs = Array.prototype.slice.call(arguments);
  return Function.prototype.bind.apply( Query.prototype.execute, [ this ].concat( curriedArgs ) );
}

/**
 * Internal method to execute a query. Called by `run` and `execute`.
 * @param {Object} options The options passed to the driver's method `run`
 * @param {boolean} parse Whether the results should be converted as instance(s) of the model
 * @param {Function=} callback
 * @return {Promise} return a promise that will be resolved with the results
 * of the query.
 * @private
 */
Query.prototype._execute = function(options, parse) {
  var self = this;
  options = options || {};
  var fullOptions = {groupFormat: 'raw'}
  util.loopKeys(options, function(options, key) {
    fullOptions[key] = options[key]
  });
  if (parse === true) {
    fullOptions.cursor = false;
  }

  if (self._model._error !== null) {
    return Promise.reject(self._model._error);
  }
  return self._model.ready().then(function() {
    return self._executeCallback(fullOptions, parse, options.groupFormat);
  });
}

Query.prototype._executeCallback = function(fullOptions, parse, groupFormat) {
  var self = this;
  if (self._error !== undefined) {
    return Promise.reject(new Error("The partial value is not valid, so the write was not executed. The original error was:\n"+self._error.message));
  }

  return self._query.run(fullOptions).then(function(result) {
    if (result === null && parse) {
      throw new Errors.DocumentNotFound();
    }

    // Expect a write result from RethinkDB
    if (self._postValidation === true) {
      return self._validateQueryResult(result);
    }

    if (result != null && typeof result.getType === 'function') {
      var resultType = result.getType();
      if (resultType === 'Feed' ||
        resultType === 'OrderByLimitFeed' ||
        resultType === 'UnionedFeed'
      ) {
        var feed = new Feed(result, self._model);
        return feed;
      }

      if (resultType === 'AtomFeed') {
        return result.next().then(function(initial) {
          var value = initial.new_val || {};
          return self._model._parse(value).then(function(doc) {
            doc._setFeed(result);
            return doc;
          });
        });
      }
    }

    if (parse === true) {
      return self._model._parse(result, self._ungroup);
    }

    if (groupFormat !== 'raw') {
      return Query.prototype._convertGroupedData(result);
    }

    return result;
  }).catch(function(err) {
    return Promise.reject(Errors.create(err));
  })
};

Query.prototype._validateUngroupResult = function(result) {
}

Query.prototype._validateQueryResult = function(result) {
  var self = this;
  if (result.errors > 0) {
    console.log(result);
    return Promise.reject(new Errors.InvalidWrite("An error occured during the write", result));
  }
  if (!Array.isArray(result.changes)) {
    if (self._isPointWrite()) {
      return Promise.resolve();
    }
    return Promise.resolve([]);
  }

  var promises = [];
  for(var i=0; i<result.changes.length; i++) {
    (function(i) {
      if (result.changes[i].new_val !== null) {
        promises.push(self._model._parse(result.changes[i].new_val));
      }
    })(i)
  }
  return Promise.all(promises).then(function(result) {
    if (self._isPointWrite()) {
      if (result.length > 1) {
        throw new Error('A point write returned multiple values')
      }
      return result[0];
    }
    return result;
  }).catch(function(error) {
    if (error instanceof Errors.DocumentNotFound) {
      // Should we send back null?
    }
    else {
      var revertPromises = [];
      var primaryKeys = [];
      var keysToValues = {};
      var r = self._model._thinky.r;
      for(var p=0; p<result.changes.length; p++) {
        // Extract the primary key of the document saved in the database
        var primaryKey = util.extractPrimaryKey(
            result.changes[p].old_val,
            result.changes[p].new_val,
            self._model._pk)
        if (primaryKey === undefined) {
          continue;
        }

        if (typeof primaryKey === "string") {
          keysToValues[primaryKey] = result.changes[p].old_val;
          primaryKeys.push(primaryKey);
        }
        else {
          // Replace documents with non-string type primary keys
          // one by one.
          revertPromises.push(r.table(self._model.getTableName())
            .get(primaryKey)
            .replace(result.changes[p].old_val)
            .run());
        }
      }

      // Replace all documents with string-type primary keys
      // in a single replace() operation.
      if (primaryKeys.length) {
        revertPromises.push(
          r.table(self._model.getTableName()).getAll(r.args(primaryKeys)).replace(function(doc) {
            return r.expr(keysToValues)(doc(self._model._pk));
          }).run()
        );
      }

      return Promise.all(revertPromises).then(function(result) {
        throw new Error("The write failed, and the changes were reverted.");
      }).error(function(error) {
        throw new Error("The write failed, and the attempt to revert the changes failed with the error:\n"+error.message);
      });
    }
  })
};


/**
 * Convert GROUPED_DATA results to [group: <group>, reduction: <reduction>]
 * This does the same as the driver. The reduction is not converted to
 * instances of the model.
 */
Query.prototype._convertGroupedData = function(data) {
  if (util.isPlainObject(data) && (data.$reql_type$ === "GROUPED_DATA")) {
    var result = [];
    var reduction;
    for(var i=0; i<data.data.length; i++) {
      result.push({
        group: data.data[i][0],
        reduction: data.data[i][1]
      });
    }
    return result;
  }
  else {
    return data;
  }
}


/**
 * Perform a join given the relations on this._model
 * @param {Object=} modelToGet explicit joined documents to retrieve
 * @param {boolean} getAll Internal argument, if `modelToGet` is undefined, `getAll` will
 * be set to `true` and `getJoin` will be greedy and keep recursing as long as it does not
 * hit a circular reference
 * @param {Object=} gotModel Internal argument, the model we are already fetching.
 * @return {Query}
 */
Query.prototype.getJoin = function(modelToGet, getAll, gotModel) {
  var self = this;
  var r = self._model._getModel()._thinky.r;

  var model = this._model;
  var joins = this._model._getModel()._joins;

  var getAll = modelToGet === undefined;
  if (util.isPlainObject(modelToGet) === false) {
    modelToGet = {};
  }
  var innerQuery;

  gotModel = gotModel || {};
  gotModel[model.getTableName()] = true;

  util.loopKeys(joins, function(joins, key) {
    if (util.recurse(key, joins, modelToGet, getAll, gotModel)) {
      switch (joins[key].type) {
        case 'hasOne':
        case 'belongsTo':
          self._query = self._query.merge(function(doc) {
            return r.branch(
              doc.hasFields(joins[key].leftKey),
              r.table(joins[key].model.getTableName()).getAll(doc(joins[key].leftKey), {index: joins[key].rightKey}).coerceTo("ARRAY").do(function(result) {
                innerQuery = new Query(joins[key].model, result.nth(0));

                if ((modelToGet[key] != null) && (typeof modelToGet[key]._apply === 'function')) {
                  innerQuery = modelToGet[key]._apply(innerQuery);
                }
                innerQuery = innerQuery.getJoin(modelToGet[key], getAll, gotModel)._query;
                return r.branch(
                  result.count().eq(1),
                  r.object(key, innerQuery),
                  r.branch(
                    result.count().eq(0),
                    {},
                    r.error(r.expr("More than one element found for ").add(doc.coerceTo("STRING")).add(r.expr("for the field ").add(key)))
                  )
                )
              }),
              {}
            )
          });
          break;

        case 'hasMany':
          self._query = self._query.merge(function(doc) {
            innerQuery = new Query(joins[key].model,
                       r.table(joins[key].model.getTableName())
                      .getAll(doc(joins[key].leftKey), {index: joins[key].rightKey}))

            if ((modelToGet[key] != null) && (typeof modelToGet[key]._apply === 'function')) {
              innerQuery = modelToGet[key]._apply(innerQuery);
            }
            innerQuery = innerQuery.getJoin(modelToGet[key], getAll, gotModel);
            if ((modelToGet[key] == null) || (modelToGet[key]._array !== false)) {
              innerQuery = innerQuery.coerceTo("ARRAY");
            }
            innerQuery = innerQuery._query;

            return r.branch(
              doc.hasFields(joins[key].leftKey),
              r.object(key, innerQuery),
              {}
            )
          });
          break;

        case 'hasAndBelongsToMany':
          self._query = self._query.merge(function(doc) {
            if ((model.getTableName() === joins[key].model.getTableName()) && (joins[key].leftKey === joins[key].rightKey)) {
              // In case the model is linked with itself on the same key

              innerQuery = r.table(joins[key].link).getAll(doc(joins[key].leftKey), {index: joins[key].leftKey+"_"+joins[key].leftKey}).concatMap(function(link) {
                return r.table(joins[key].model.getTableName()).getAll(
                  r.branch(
                    doc(joins[key].leftKey).eq(link(joins[key].leftKey+"_"+joins[key].leftKey).nth(0)),
                    link(joins[key].leftKey+"_"+joins[key].leftKey).nth(1),
                    link(joins[key].leftKey+"_"+joins[key].leftKey).nth(0)
                  )
                , {index: joins[key].rightKey})
              });

              if ((modelToGet[key] != null) && (typeof modelToGet[key]._apply === 'function')) {
                innerQuery = modelToGet[key]._apply(innerQuery);
              }

              if ((modelToGet[key] == null) || (modelToGet[key]._array !== false)) {
                innerQuery = innerQuery.coerceTo("ARRAY");
              }

              return r.branch(
                doc.hasFields(joins[key].leftKey),
                r.object(key, new Query(joins[key].model, innerQuery).getJoin(modelToGet[key], getAll, gotModel)._query),
                {}
              )
            }
            else {
              innerQuery = r.table(joins[key].link).getAll(doc(joins[key].leftKey), {index: model.getTableName()+"_"+joins[key].leftKey}).concatMap(function(link) {
                return r.table(joins[key].model.getTableName()).getAll(link(joins[key].model.getTableName()+"_"+joins[key].rightKey), {index: joins[key].rightKey})
              });

              if ((modelToGet[key] != null) && (typeof modelToGet[key]._apply === 'function')) {
                innerQuery = modelToGet[key]._apply(innerQuery)
              }

              if ((modelToGet[key] == null) || (modelToGet[key]._array !== false)) {
                innerQuery = innerQuery.coerceTo("ARRAY");
              }

              return r.branch(
                doc.hasFields(joins[key].leftKey),
                r.object(key,
                  new Query(joins[key].model, innerQuery).getJoin(modelToGet[key], getAll, gotModel)._query),
                {}
              )
            }
          });
          break;
      }
    }
  });

  return self;
};


/**
 * Add a relation
 * @param {string} field The field of the joined document(s)
 * @param {Object} joinedDocument An object with the primary key defined or the related key
 * @return {Promise}
 *
 * hasOne, primary key required
 * User.get(1).addRelation("account", {id: 2, sold: 2132})
 * The promise resolved the document on which addRelation is called
 *
 * hasMany, primary key required
 * User.get(1).addRelation("accounts", {id: 2, sold: 2132})
 * The promise resolved the updated joined document
 *
 * belongsTo, right joined key OR primary key required
 * User.get(1).addRelation("account", {id: 2, sold: 2132})
 * The promise resolved the document on which addRelation is called
 *
 * hasAndBelongsToMany, right joined key required
 * User.get(1).addRelation("accounts", {id: 2, sold: 2132})
 * The promise resolved with true
 */

Query.prototype.addRelation = function(field, joinedDocument) {
  var self = this;
  var model = self._model;
  var joins = self._model._getModel()._joins;
  var joinedModel = joins[field].model;
  var r = self._model._thinky.r;

  switch (joins[field].type) {
    case 'hasOne':
    case 'hasMany':
      if (joinedDocument[joinedModel._pk] === undefined) {
        return new Query(model, self, {},
            new Error('Primary key for the joined document not found for a `hasOne/hasMany` relation.')
        );
      }
      var updateValue = {};
      updateValue[joins[field].rightKey] = self._query(joins[field].leftKey);
      return joinedModel.get(joinedDocument[joinedModel._pk]).update(updateValue, {nonAtomic: true}).run()
    case 'belongsTo':
      var updateValue = {};
      if (joinedDocument[joins[field].rightKey] === undefined) {
        if (joinedDocument[joinedModel._pk] === undefined) {
          return new Query(model, self, {},
              new Error('The primary key or the joined key must be defined in the joined document for a `belongsTo` relation.')
          );
        }
        updateValue[joins[field].leftKey] = joinedModel.get(joinedDocument[joinedModel._pk]).bracket(joins[field].rightKey)._query;
      }
      else {
        updateValue[joins[field].leftKey] = joinedDocument[joins[field].rightKey];
      }
      return self.update(updateValue, {nonAtomic: true}).run();
    case 'hasAndBelongsToMany':
      var linkModel = joins[field].linkModel;
      var linkValue;
      var link;
      if (joinedDocument[joins[field].rightKey] === undefined) {
        if (joinedDocument[joinedModel._pk] === undefined) {
          return new Query(model, self, {},
              new Error('The primary key or the joined key must be defined in the joined document for a `hasAndBelongsToMany` relation.')
          );
        }
        link = joinedModel.get(joinedDocument[joinedModel._pk]).bracket(joins[field].rightKey)._query
      }
      else {
        link = r.expr(joinedDocument[joins[field].rightKey]);
      }

      if ((model.getTableName() === joinedModel.getTableName())
          && (joins[field].leftKey === joins[field].rightKey)) {
        linkValue = self._query(joins[field].leftKey).do(function(leftKey) {
          return link.do(function(rightKey) {
            return r.branch(
                rightKey.lt(leftKey),
                r.object(
                  'id', rightKey.add('_').add(leftKey),
                  joins[field].leftKey+"_"+joins[field].leftKey, [leftKey, rightKey]
                ),
                r.object(
                  'id', leftKey.add('_').add(rightKey),
                  joins[field].leftKey+"_"+joins[field].leftKey, [leftKey, rightKey]
                )
            )
          });
        });
      }
      else {
        linkValue = self._query(joins[field].leftKey).do(function(leftKey) {
          return link.do(function(rightKey) {
            if (model.getTableName() < joinedModel.getTableName()) {
              return r.object(
                'id', leftKey.add('_').add(rightKey),
                model.getTableName()+"_"+joins[field].leftKey, leftKey,
                joinedModel.getTableName()+"_"+joins[field].rightKey,rightKey 
              )
            }
            else if (model.getTableName() > joinedModel.getTableName()) {
              return r.object(
                'id', rightKey.add('_').add(leftKey),
                model.getTableName()+"_"+joins[field].leftKey, leftKey,
                joinedModel.getTableName()+"_"+joins[field].rightKey,rightKey 
              )
            }
            else {
              return r.branch(
                rightKey.lt(leftKey),
                r.object(
                  'id', leftKey.add('_').add(rightKey),
                  model.getTableName()+"_"+joins[field].leftKey, leftKey,
                  joinedModel.getTableName()+"_"+joins[field].rightKey,rightKey 
                ),
                r.object(
                  'id', rightKey.add('_').add(leftKey),
                  model.getTableName()+"_"+joins[field].leftKey, leftKey,
                  joinedModel.getTableName()+"_"+joins[field].rightKey,rightKey 
                )
              )
            }
          });
        });
      }

      return linkModel.insert(linkValue, {conflict: "replace", returnChanges: 'always'}).do(function(result) {
        return r.branch(
            result('errors').eq(0),
            true, // not relevant value
            r.error(result('errors'))
        )
      }).execute()
    default:
      return new Query(model, self, {},
          new Error('The provided field `'+field+'` does not store joined documents.')
      ).run()
  }
}

/**
 * Remove the provided relation
 * @param {string} field The field of the joined document(s) to remove
 * @param {Array} joinedDocument The document with who the relation should be removed
 * @return {Promise}
 */
//TODO Support an array of joinedDocuments?
Query.prototype.removeRelation = function(field, joinedDocument) {
  var self = this;
  var model = self._model;
  var joins = self._model._getModel()._joins;
  var joinedModel = joins[field].model;
  var r = self._model._thinky.r;

  var query;
  switch (joins[field].type) {
    case 'hasOne':
      query = joinedModel.getAll(self._query(joins[field].leftKey), {index: joins[field].rightKey}).replace(function(row) {
        return row.without(joins[field].rightKey)
      });
      query.setPostValidation();
      query.setPointWrite();
      return query;
    case 'hasMany':
      if (joinedDocument === undefined) {
        query = joinedModel.getAll(self._query(joins[field].leftKey), {index: joins[field].rightKey}).replace(function(row) {
          return row.without(joins[field].rightKey)
        })
      }
      else {
        query = joinedModel.getAll(r.expr(joinedDocument)(joinedModel._pk)).replace(function(row) {
          return row.without(joins[field].rightKey)
        })
      }
      query.setPostValidation();
      return query;
    case 'belongsTo':
      query = self.replace(function(row) {
        return row.without(joins[field].leftKey)
      })
      query.setPostValidation();
      return query;
    case 'hasAndBelongsToMany':
      var linkModel = joins[field].linkModel;
      if (joinedDocument === undefined) {
        query = self._query(joins[field].leftKey).do(function(leftKey) {
          // range are not supported at the moment, so keys is an object and we don't have to worry about empty sequences
          if ((model.getTableName() === joinedModel.getTableName())
              && (joins[field].leftKey === joins[field].rightKey)) {
            return linkModel.getAll(leftKey, {index: joins[field].leftKey+'_'+joins[field].leftKey}).delete()._query
          }
          else {
            return linkModel.getAll(leftKey, {index: model.getTableName()+'_'+joins[field].leftKey}).delete()._query
          }
        }).do(function(result) {
          return r.branch(
              result('errors').eq(0),
              true, // not relevant value
              r.error(result('errors'))
           )
        })
      }
      else {
        if (joinedDocument[joins[field].rightKey] === undefined) {
          if (joinedDocument[joinedModel._pk] === undefined) {
            return new Query(model, self, {},
                new Error('The primary key or the joined key must be defined in the joined document for a `hasAndBelongsToMany` relation.')
            );
          }

          if ((model.getTableName() === joinedModel.getTableName())
              && (joins[field].leftKey === joins[field].rightKey)) {
            query = self._query(joins[field].leftKey).do(function(leftKey) {
              return joinedModel.get(joinedDocument[joinedModel._pk]).bracket(joins[field].rightKey).do(function(rightKey) {
                if (model.getTableName() < joinedModel.getTableName()) {
                  return linkModel.getAll(leftKey.add('_').add(rightKey)).delete()._query;
                }
                else if (model.getTableName() > joinedModel.getTableName()) {
                  return linkModel.getAll(rightKey.add('_').add(leftKey)).delete()._query;
                }
                else {
                  return r.branch(
                    leftKey.lt(rightKey),
                    linkModel.getAll(leftKey.add('_').add(rightKey)).delete()._query,
                    linkModel.getAll(rightKey.add('_').add(leftKey)).delete()._query
                  )
                }
              });
            })
          }
          else {
            query = self._query(joins[field].leftKey).do(function(leftKey) {
              return joinedModel.get(joinedDocument[joinedModel._pk]).bracket(joins[field].rightKey).do(function(rightKey) {
                if (model.getTableName() < joinedModel.getTableName()) {
                  return linkModel.getAll(leftKey.add('_').add(rightKey)).delete()._query
                }
                else if (model.getTableName() > joinedModel.getTableName()) {
                  return linkModel.getAll(rightKey.add('_').add(leftKey)).delete()._query
                }
                else {
                  return r.branch(
                    leftKey.lt(rightKey),
                    linkModel.getAll(leftKey.add('_').add(rightKey)).delete()._query,
                    linkModel.getAll(rightKey.add('_').add(leftKey)).delete()._query
                  )

                }
              });
            })
          }
        }
        else {
          query = self._query(joins[field].leftKey).do(function(leftKey) {
            var rightKey = r.expr(joinedDocument[joins[field].rightKey]);
            if (model.getTableName() < joinedModel.getTableName()) {
              return linkModel.getAll(leftKey.add('_').add(rightKey)).delete()._query
            }
            else if (model.getTableName() > joinedModel.getTableName()) {
              return linkModel.getAll(rightKey.add('_').add(leftKey)).delete()._query
            }
            else {
              return r.branch(
                leftKey.lt(rightKey),
                linkModel.getAll(leftKey.add('_').add(rightKey)).delete()._query,
                linkModel.getAll(rightKey.add('_').add(leftKey)).delete()._query
              )

            }
          })
        }
      }
      return query;
    default:
      return new Query(model, self, {},
          new Error('The provided field `'+field+'` does not store joined documents.')
      );
  }
};

/**
 * Import all the methods from rethinkdbdash, expect the private one (the one
 * starting with an underscore).
 * Some method are slightly changed: `get`, `update`, `replace`.
 */
(function() {
  var Term = __webpack_require__(/*! rethinkdbdash */ "../node_modules/rethinkdbdash/lib/index.js")({pool: false}).expr(1).__proto__;
  util.loopKeys(Term, function(Term, key) {
    if (key === 'run' || key[0] === '_') return;
    // Note: We suppose that no method has an empty name
    switch (key) {
      case 'get':
        // `get` in thinky returns an error if the document is not found.
        // The driver currently just returns `null`.
        (function(key) {
          Query.prototype[key] = function() {
            return new Query(this._model, this._query[key].apply(this._query, arguments)).default(this._r.error(new Errors.DocumentNotFound().message));
          }
        })(key);
        // Copy it in `_get` without `default`.
        (function(key) {
          Query.prototype['_get'] = function() {
            // Create a new query to let people fork it
            return new Query(this._model, this._query[key].apply(this._query, arguments));
          }
        })(key);
        break;
      case 'update':
      case 'replace':
        // `update` and `replace` can be used. A partial validation is performed before
        // sending the query, and a full validation is performed after the query. If the
        // validation fails, the document(s) will be reverted.
        (function(key) {
          Query.prototype[key] = function(value, options) {
            options = options || {};
            options.returnChanges = 'always';
            var error = null;
            var self = this;
            util.tryCatch(function() {
              if (util.isPlainObject(value)) {
                schemaUtil.validate(value, self._model._schema, '', {enforce_missing: false});
              }
            }, function(err) {
              error = err;
            });
            return new Query(this._model, this._query[key].call(this._query, value, options), {postValidation: true}, error);
          }
        })(key);
        break;

      case 'changes':
        (function(key) {
          Query.prototype[key] = function() {
            // In case of `get().changes()` we want to remove the default(r.errror(...))
            // TODO: Do not hardcode this?
            if ((typeof this._query === 'function') && (this._query._query[0] === 92)) {
              this._query._query = this._query._query[1][0];
            }
            return new Query(this._model, this._query[key].apply(this._query, arguments));
          }
        })(key);
        break;

      case 'then':
      case 'error':
      case 'catch':
      case 'finally':
        (function(key) {
          Query.prototype[key] = function() {
            var promise = this.run();
            return promise[key].apply(promise, arguments);
          }
        })(key);
        break;

      case 'ungroup':
        (function(key) {
          Query.prototype[key] = function() {
            return new Query(this._model, this._query[key].apply(this._query, arguments), {ungroup: true});
          }
        })(key);
        break;

      default:
        (function(key) {
          Query.prototype[key] = function() {
            // Create a new query to let people fork it
            return new Query(this._model, this._query[key].apply(this._query, arguments));
          }
        })(key);
        break;
      }
  });
})();

Query.prototype._isPointWrite = function() {
  return this._pointWrite || (Array.isArray(this._query._query) &&
      (this._query._query.length > 1) &&
      Array.isArray(this._query._query[1]) &&
      (this._query._query[1].length > 0) &&
      Array.isArray(this._query._query[1][0]) &&
      (this._query._query[1][0].length > 1) &&
      Array.isArray(this._query._query[1][0][1]) &&
      (this._query._query[1][0][1].length > 0) &&
      Array.isArray(this._query._query[1][0][1][0]) &&
      (this._query._query[1][0][1][0][0] === 16))
}

/**
 * Convert the query to its string representation.
 * @return {string}
 */
Query.prototype.toString = function() {
  return this._query.toString();
}

module.exports = Query;


/***/ }),

/***/ "../node_modules/thinky/lib/schema.js":
/*!********************************************!*\
  !*** ../node_modules/thinky/lib/schema.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPrefix = "__array"
module.exports.arrayPrefix = arrayPrefix;

var util = __webpack_require__(/*! ../node_modules/thinky/lib/util.js */ "../node_modules/thinky/lib/util.js");
var type = __webpack_require__(/*! ../node_modules/thinky/lib/type/index.js */ "../node_modules/thinky/lib/type/index.js");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/errors.js */ "../node_modules/thinky/lib/errors.js");


function generateVirtual(doc, defaultField, originalDoc, virtual) {
  var path = defaultField.path;
  var value = defaultField.value;
  var field = doc;

  var keepGoing = true;
  var virtualValue = virtual;

  for(var j=0; j<path.length-1; j++) {
    if (util.isPlainObject(virtualValue)) {
      virtualValue = virtualValue[path[j]];
    }
    else {
      virtualValue = undefined;
    }

    if (path[j] === arrayPrefix) {
      if (!Array.isArray(field)) {
        // This is caught by validate, except if there is an `enforce_type: "none"`.
        return;
      }
      else {
        for(var k=0; k<field.length; k++) {
          if (virtual != null) {
            virtualValue = virtual[k];
          }
          generateVirtual(field[k], {path: defaultField.path.slice(j+1), value: defaultField.value}, this, virtualValue);
        }
      }
      keepGoing = false;
    }
    else {
      // field cannot be undefined (doc is not undefined on the first iteration, and we'll return if it becomes undefined
      field = field[path[j]];
      if (field === undefined) {
        // We do not populate parent of default fields by default
        return;
      }
    }
  }
  if (keepGoing) {
    if (value === undefined) {
      if (util.isPlainObject(virtualValue) && (virtualValue[[path[path.length-1]]] !== undefined)) {
        field[path[path.length-1]] = virtualValue[[path[path.length-1]]];
      }
    }
    else if ((typeof value === "function") && !Array.isArray(value._query)) {
      field[path[path.length-1]] = value.call(doc);
    }
    else {
      if (util.isPlainObject(value)) {
        field[path[path.length-1]] = util.deepCopy(value);
      }
      else if (value !== undefined) {
        field[path[path.length-1]] = value;
      }
    }
  }
  return doc;
}

module.exports.generateVirtual = generateVirtual;

function generateDefault(doc, defaultField, originalDoc) {
  var path = defaultField.path;
  var value = defaultField.value;
  var field = doc;

  var keepGoing = true;
  for(var j=0; j<path.length-1; j++) {
    if (path[j] === arrayPrefix) {
      if (!Array.isArray(field)) {
        // This is caught by validate, except if there is an `enforce_type: "none"`.
        return;
      }
      else {
        for(var k=0; k<field.length; k++) {
          generateDefault(field[k], {path: defaultField.path.slice(j+1), value: defaultField.value}, this);
        }
      }
      keepGoing = false;
    }
    else {
      field = field[path[j]];
      if (field === undefined) {
        // We do not populate parent of default fields by default
        return;
      }
    }
  }
  if (keepGoing && util.isPlainObject(field) && field[path[path.length-1]] === undefined) {
    if ((typeof value === "function") && !Array.isArray(value._query)) {
      field[path[path.length-1]] = value.call(doc);
    }
    else {
      if (util.isPlainObject(value) || Array.isArray(value)) {
        field[path[path.length-1]] = util.deepCopy(value);
      }
      else {
        field[path[path.length-1]] = value;
      }
    }
  }
  return doc;
}

module.exports.generateDefault = generateDefault;

function parse(schema, prefix, options, model) {
  var result;

  if ((prefix === '') && (type.isObject(schema) === false) && (util.isPlainObject(schema) === false)) {
    throw new Errors.ValidationError("The schema must be a plain object.")
  }

  // Validate a schema and add the field _enum if needed
  if (util.isPlainObject(schema)) {
    if (schema._type !== undefined) {
      options = util.mergeOptions(options, schema.options);
      var result;
      switch(schema._type) {
        case String:
          result = type.string().options(options).validator(schema.validator).enum(schema.enum);
          if (schema.default !== undefined) { result.default(schema.default); }
          if (typeof schema.min === "number") { result.min(schema.min); }
          if (typeof schema.max === "number") { result.max(schema.max); }
          if (typeof schema.length === "number") { result.length(schema.length); }
          if (schema.alphanum === true) { result.alphanum(); }
          if (schema.lowercase === true) { result.lowercase(); }
          if (schema.uppercase === true) { result.uppercase(); }
          if (typeof schema.regex === "string") { result.regex(regex, schema.flags); }
          return result;
        case Number:
          result = type.number().options(options).validator(schema.validator);
          if (schema.default !== undefined) { result.default(schema.default); }
          if (typeof schema.min === "number") { result.min(schema.min); }
          if (typeof schema.max === "number") { result.max(schema.max); }
          if (typeof schema.length === "number") { result.length(schema.length); }
          if (schema.integer === true) { result.integer(); }
          return result;
        case Boolean:
          result = type.boolean().options(options).validator(schema.validator);
          if (schema.default !== undefined) { result.default(schema.default); }
          return result;
        case Date:
          var result = type.date().options(options).validator(schema.validator);
          if (schema.default !== undefined) { result.default(schema.default); }
          if (schema.min instanceof Date) { result.min(schema.min); }
          if (schema.max instanceof Date) { result.max(schema.max); }
          return result;
        case Buffer:
          result = type.buffer().options(options).validator(schema.validator);
          if (schema.default !== undefined) { result.default(schema.default); }
          return result
        case Object:
          result = type.object().options(options).validator(schema.validator);
          if (schema.default !== undefined) { result.default(schema.default); }
          util.loopKeys(schema.schema, function(_schema, key) {
            result.setKey(key, parse(_schema[key], prefix+"["+key+"]", options));
          })
          if (prefix === '') {
            result._setModel(model)
          }
          return result;
        case Array:
          var result = type.array().options(options).validator(schema.validator);
          if (schema.default !== undefined) { result.default(schema.default); }
          if (schema.schema !== undefined) {
            result.schema(parse(schema.schema, prefix+"[0]", options));
          }
          if (typeof schema.min === "number") { result.min(schema.min); }
          if (typeof schema.max === "number") { result.max(schema.max); }
          if (typeof schema.length === "number") { result.length(schema.length); }
          return result;
        case 'Point':
          result = type.point().options(options).validator(schema.validator);
          if (schema.default !== undefined) { result.default(schema.default); }
          return result;
        case 'virtual':
          result = type.virtual();
          if (schema.default !== undefined) { result.default(schema.default); }
          return result
        default: // Unknown type
          throw new Errors.ValidationError("The field `_type` must be `String`/`Number`/`Boolean`/`Date`/`Buffer`/`Object`/`Array`/`'virtual'`/`'Point'` for "+prefix);
      }
    }
    else if (type.isString(schema)
        || type.isNumber(schema)
        || type.isBoolean(schema)
        || type.isDate(schema)
        || type.isBuffer(schema)
        || type.isPoint(schema)
        || type.isObject(schema)
        || type.isArray(schema)
        || type.isAny(schema)
        || type.isVirtual(schema)){ // Unknown type
      // Nothing to do here
      if (type.isObject(schema)) {
        parse(schema._schema, prefix, options);
      }
      else if (type.isArray(schema)) {
        if (schema._schema == undefined) {
          schema._schema = parse(type.any(), prefix, options);
        }
        else {
          schema._schema = parse(schema._schema, prefix, options);
        }
      }

      // We want to copy the model object here
      if (util.isPlainObject(schema._options) === false) {
        schema.options(options);
      }
      else if ((schema._options.enforce_extra === undefined)
          || (schema._options.enforce_missing === undefined)
          || (schema._options.enforce_type === undefined)) {
        var newOptions = {};
        newOptions.enforce_missing = (schema._options.enforce_missing != null) ? schema._options.enforce_missing : options.enforce_missing;
        newOptions.enforce_extra = (schema._options.enforce_extra != null) ? schema._options.enforce_extra : options.enforce_extra;
        newOptions.enforce_type = (schema._options.enforce_type != null) ? schema._options.enforce_type : options.enforce_type;
        schema.options(newOptions);
      }
      return schema;
    }
    else {
      result = type.object().options(options);
      util.loopKeys(schema, function(_schema, key) {
        result.setKey(key, parse(_schema[key], prefix+"["+key+"]", options));
      })
      if (prefix === '') {
        result._setModel(model)
      }
      return result;
    }
  }
  else if (Array.isArray(schema)) {
    result = type.array().options(options);
    if (schema.length > 1) {
      throw new Errors.ValidationError("An array in a schema can have at most one element. Found "+schema.length+" elements in "+prefix)
    }

    if (schema.length > 0) {
      result.schema(parse(schema[0], prefix+"[0]", options));
    }
    return result;

  }
  else if (schema === String) {
    return type.string().options(options);
  }
  else if (schema === Number) {
    return type.number().options(options);
  }
  else if (schema === Boolean) {
    return type.boolean().options(options);
  }
  else if (schema === Date) {
    return type.date().options(options);
  }
  else if (schema === Buffer) {
    return type.buffer().options(options);
  }
  else if (schema === Object) {
    return type.object().options(options);
  }
  else if (schema === Array) {
    return type.array().options(options);
  }
  else if (schema === 'Point') {
    return type.point().options(options);
  }
  else if (schema === 'virtual') {
    return type.virtual().options(options);
  }
  else {
    throw new Errors.ValidationError("The value must be `String`/`Number`/`Boolean`/`Date`/`Buffer`/`Object`/`Array`/`'virtual'`/`'Point'` for "+prefix);
  }
}
module.exports.parse = parse;

// The schema doesn't contain joined docs
function validate(doc, schema, prefix, options) {
  schema.validate(doc, prefix, options);
}
module.exports.validate = validate;

function getType(schema) {
  if (util.isPlainObject(schema) && (schema._type !== undefined)) {
    return schema._type;
  }
  return schema;
}


function validateEnum(doc, schema, prefix) {
  if (Array.isArray(schema.enum) && (schema._enum[doc] !== true)) {
    var validValues = Object.keys(schema._enum);
    var message = "The field "+prefix+" must be one of these values: "

    for(var i=0; i<validValues.length; i++) {
      if (i === 10) { break; }
      if ((i === validValues.length-1) || (i === 9)) {
        message = message+validValues[i]
      }
      else {
        message = message+validValues[i]+", "
      }
    }
    if (validValues.length > 10) {
      message = message+"..."
    }
    else {
      message = message+"."
    }

    throw new Errors.ValidationError(message);
  }
}
// Check that schema is a valid object first
function validateCustomizedValidator(doc, schema, prefix) {
  if (typeof schema.validator === 'function') {
    if (schema.validator(doc) === false) {
      throw new Errors.ValidationErrors.ValidationError("Validator for the field "+prefix+" returned `false`.");
    }
  }
}

function validateString(doc, schema, prefix, options) {
  if (validateNotNullUndefined(doc, prefix, "string", options)) return;

  if (typeof doc !== "string") { // doc is not null/undefined
    if (options.enforce_type === "strict") {
      strictType(prefix, "string");
    }
    else if (options.enforce_type === "loose") {
      looseType(prefix, "string");
    }
  }

  if (util.isPlainObject(schema)) {
    validateCustomizedValidator(doc, schema, prefix);
    validateEnum(doc, schema, prefix);
  }
}

function validateNumber(doc, schema, prefix, options) {
  if (validateNotNullUndefined(doc, prefix, "number", options)) return;

  if (typeof doc !== "number") { // doc is not null/undefined
    if (options.enforce_type === "strict") {
      strictType(prefix, "number");
    }
    else if (options.enforce_type === "loose") {
      looseType(prefix, "number");
    }
  }

  if (util.isPlainObject(schema)) {
    validateCustomizedValidator(doc, schema, prefix);
    validateEnum(doc, schema, prefix);
  }

}

function validateBoolean(doc, schema, prefix, options) {
  if (validateNotNullUndefined(doc, prefix, "boolean", options)) return;

  if (typeof doc !== "boolean") { // doc is not null/undefined
    if (options.enforce_type === "strict") {
      strictType(prefix, "boolean");
    }
    else if (options.enforce_type === "loose") {
      looseType(prefix, "boolean");
    }
  }

  if (util.isPlainObject(schema)) {
    validateCustomizedValidator(doc, schema, prefix);
    validateEnum(doc, schema, prefix);
  }
}

function validateDate(doc, schema, prefix, options) {
  if (validateNotNullUndefined(doc, prefix, "date", options)) return;

  if (options.enforce_type !== "none") {
    if (util.isPlainObject(doc) && (doc["$reql_type$"] === "TIME")) {
      if (doc.epoch_time === undefined) {
        pseudoTypeError("date", "epoch_time", prefix);
      }
      else if (doc.timezone === undefined) {
        pseudoTypeError("date", "timezone", prefix);
      }
    }
    else if ((typeof doc === 'function') && (Array.isArray(doc._query))) {
      // TOIMPROVE -- we currently just check if it's a term from the driver
      // We suppose for now that this is enough and we don't throw an error
    }
    else if (typeof doc === 'string') {
      var date = new Date(doc);
      if (date.getTime() !== date.getTime()) {
        if (options.enforce_type === "strict") {
          strictType(prefix, "date or a valid string");
        }
        else if (options.enforce_type !== "none") {
          looseType(prefix, "date or a valid string");
        }
      }
    }
    else if ((doc instanceof Date) === false)  {
      if (options.enforce_type === "strict") {
        strictType(prefix, "date");
      }
      else if (options.enforce_type !== "none") {
        looseType(prefix, "date");
      }
    }
  }

  if (util.isPlainObject(schema)) {
    validateCustomizedValidator(doc, schema, prefix);
  }
}

function validatePoint(doc, schema, prefix, options) {
  if (validateNotNullUndefined(doc, prefix, "point", options)) return;

  if (options.enforce_type !== "none") {
    if (util.isPlainObject(doc) && (doc["$reql_type$"] === "GEOMETRY")) {
      if (doc.type === undefined) {
        pseudoTypeError("Point", "type", prefix);
      }
      else if (doc.type !== "Point") {
        throw new Errors.ValidationError("The field `type` for "+prefix+" must be `'Point'`.")
      }
      else if (doc.coordinates === undefined) {
        pseudoTypeError("date", "coordinates", prefix);
      }
      else if ((!Array.isArray(doc.coordinates)) || (doc.coordinates.length !== 2)) {
        throw new Errors.ValidationError("The field `coordinates` for "+prefix+" must be an Array of two numbers.")
      }
    }
    else if (util.isPlainObject(doc) && (doc.type === "Point") && (Array.isArray(doc.coordinates)) && (doc.coordinates.length === 2)) { // Geojson
      // Geojson format
    }
    else if ((typeof doc === 'function') && (Array.isArray(doc._query))) {
      // TOIMPROvE -- we currently just check if it's a term from the driver
      // We suppose for now that this is enough and we don't throw an error
    }
    else if (util.isPlainObject(doc)) {
      var keys = Object.keys(doc).sort();
      if (((keys.length !== 2) || keys[0] !== 'latitude') || (keys[1] !== 'longitude') || (typeof doc.latitude !== "number") || (typeof doc.longitude !== "number")) {
        throw new Errors.ValidationError("The value for "+prefix+" must be a ReQL Point (`r.point(<longitude>, <latitude>)`), an object `{longitude: <number>, latitude: <number>}`, or an array [<longitude>, <latitude>].")
      }
      else if ((typeof doc.latitude !== 'number') || (typeof doc.latitude !== 'number')) {
        throw new Errors.ValidationError("The value for "+prefix+" must be a ReQL Point (`r.point(<longitude>, <latitude>)`), an object `{longitude: <number>, latitude: <number>}`, or an array [<longitude>, <latitude>].")
      }
    }
    else if (Array.isArray(doc)) {
      if ((doc.length !== 2) || (typeof doc[0] !== "number") || (typeof doc[1] !== "number")) {
        throw new Errors.ValidationError("The value for "+prefix+" must be a ReQL Point (`r.point(<longitude>, <latitude>)`), an object `{longitude: <number>, latitude: <number>}`, or an array [<longitude>, <latitude>].")
      }
    }
  }
  if (util.isPlainObject(schema)) {
    validateCustomizedValidator(doc, schema, prefix);
  }
}

function validateBuffer(doc, schema, prefix, options) {
  if (validateNotNullUndefined(doc, prefix, "buffer", options)) return;

  if (util.isPlainObject(doc) && (doc["$reql_type$"] === "BINARY")) {
    if (doc.data === undefined) {
      pseudoTypeError("binary", "data", prefix);
    }
  }
  else if ((typeof doc === 'function') && (Array.isArray(doc._query))) {
    // TOIMPROvE -- we currently just check if it's a term from the driver
    // We suppose for now that this is enough and we don't throw an error
  }
  else if ((doc instanceof Buffer) === false)  {
    if (options.enforce_type === "strict") {
      strictType(prefix, "buffer");
    }
    else if (options.enforce_type !== "none") {
      looseType(prefix, "buffer");
    }
  }

  if (util.isPlainObject(schema)) {
    validateCustomizedValidator(doc, schema, prefix);
  }
}


/***/ }),

/***/ "../node_modules/thinky/lib/thinky.js":
/*!********************************************!*\
  !*** ../node_modules/thinky/lib/thinky.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rethinkdbdash = __webpack_require__(/*! rethinkdbdash */ "../node_modules/rethinkdbdash/lib/index.js");
var Promise = __webpack_require__(/*! bluebird */ "bluebird");
var Model = __webpack_require__(/*! ../node_modules/thinky/lib/model.js */ "../node_modules/thinky/lib/model.js");
var util = __webpack_require__(/*! ../node_modules/thinky/lib/util.js */ "../node_modules/thinky/lib/util.js");
var type = __webpack_require__(/*! ../node_modules/thinky/lib/type/index.js */ "../node_modules/thinky/lib/type/index.js");
var Query = __webpack_require__(/*! ../node_modules/thinky/lib/query.js */ "../node_modules/thinky/lib/query.js");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/errors.js */ "../node_modules/thinky/lib/errors.js");

/**
 * Main method, create the default database.
 *
 * @param {Object} options the options for the driver and the future models created.
 *  - `max` {number} The maximum number of connections in the pool, default 1000
 *  - `buffer` {number} The minimum number of connections available in the pool, default 50
 *  - `timeoutError` {number} The wait time before reconnecting in case of an error (in ms), default 1000
 *  - `timeoutGb` {number} How long the pool keep a connection that hasn't been used (in ms), default 60*60*1000
 *  - `enforce_missing` {boolean}, default `false`
 *  - `enforce_extra` {"strict"|"remove"|"none"}, default `"none"`
 *  - `enforce_type` {"strict"|"loose"|"none"}, default `"loose"`
 *  - `timeFormat` {"raw"|"native"}
 *  - `createDatabase` {boolean} Whether thinky should create the database or not.
 */
function Thinky(config) {
  var self = this;

  config = config || {};
  config.db = config.db || 'test'; // We need the default db to create it.
  self._config = config;

  self._options = {};
  // Option passed to each model we are going to create.
  self._options.enforce_missing =
    (config.enforce_missing != null) ? config.enforce_missing : false;
  self._options.enforce_extra =
    (config.enforce_extra != null) ? config.enforce_extra : "none";
  self._options.enforce_type =
    (config.enforce_type != null) ? config.enforce_type : 'loose';

  // Format of time objects returned by the database, by default we convert
  // them to JavaScript Dates.
  self._options.timeFormat =
    (config.timeFormat != null) ? config.timeFormat : 'native';
  // Option passed to each model we are going to create.
  self._options.validate =
    (config.validate != null) ? config.validate : 'onsave';

  if (config.r === undefined) {
    self.r = rethinkdbdash(config);
  }
  else {
    self.r = config.r;
  }
  self.type = type;
  self.Query = Query;
  self.models = {};

  // Export errors
  self.Errors = Errors;

  // Initialize the database.
  self.dbReady().then().error(function(error) {
    throw error;
  });
}


/**
 * Initialize our database.
 * @return {Promise=} Returns a promise which will resolve when the database is ready.
 */
Thinky.prototype.dbReady = function() {
  var self = this;
  if (this._dbReadyPromise) return this._dbReadyPromise;
  var r = self.r;
  if (self._config.createDatabase === false) {
    return Promise.resolve();
  }
  this._dbReadyPromise = r.dbCreate(self._config.db)
  .run()
  .error(function(error) {
    // The `do` is not atomic, we a concurrent query could create the database
    // between the time `dbList` is ran and `dbCreate` is.
    if (error.message.match(/^Database `.*` already exists in/)) {
      return;
    }

    // In case something went wrong here, we do not recover and throw.
    throw error;
  });

  return self._dbReadyPromise;
};

/**
 * Return the current option used.
 * @return {object} The global options of the library
 */
Thinky.prototype.getOptions = function() {
  return this._options;
}


/**
 * Create a model
 *
 * @param {string} name The name of the table used behind this model.
 * @param {object|Type} schema The schema of this model.
 * @param {object=} options Options for this model. The fields can be:
 *  - `init` {boolean} Whether the table should be created or not. The value
 *  `false` is used to speed up testing, and should probably be `true` in
 *  other use cases.
 *  - `timeFormat` {"raw"|"native"} Format of ReQL dates.
 *  - `enforce_missing` {boolean}, default `false`.
 *  - `enforce_extra` {"strict"|"remove"|"none"}, default `"none"`.
 *  - `enforce_type` {"strict"|"loose"|"none"}, default `"loose"`.
 *  - `validate` {"oncreate"|"onsave"}, default "onsave".
 */
Thinky.prototype.createModel = function(name, schema, options) {
  var self = this;

  // Make a deep copy of the options as the model may overwrite them.
  var fullOptions = util.deepCopy(this._options);
  options = options || {};
  util.loopKeys(options, function(options, key) {
    fullOptions[key] = options[key];
  });

  // Two models cannot share the same name.
  if (self.models[name] !== undefined) {
    throw new Error("Cannot redefine a Model");
  }

  // Create the constructor returned. This will also validate the schema.
  var model = Model.new(name, schema, fullOptions, self);

  // Keep a reference of this model.
  self.models[name] = model;
  return model;
}


/**
 * Method to clean all the references to the models. This is used to speed up
 * testing and should not be used in other use cases.
 */
Thinky.prototype._clean = function() {
  this.models = {};
}


// Export the module.
module.exports = function(config) {
  return new Thinky(config);
}

// Expose thinky types directly from module
module.exports.type = type;


/***/ }),

/***/ "../node_modules/thinky/lib/type/any.js":
/*!**********************************************!*\
  !*** ../node_modules/thinky/lib/type/any.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../node_modules/thinky/lib/type/../util.js */ "../node_modules/thinky/lib/util.js");
var schema =      __webpack_require__(/*! ../node_modules/thinky/lib/type/../schema.js */ "../node_modules/thinky/lib/schema.js");

function TypeAny() {
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

TypeAny.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
}
TypeAny.prototype.validator = function(fn) {
  this._validator = fn;
}
TypeAny.prototype._getDefaultFields = function(prefix, defaultFields, virtualFields) {
}

// Dummy methods, just to allow users to easily switch from a valid type to any
TypeAny.prototype.options = function(options) {
  return this;
}
TypeAny.prototype.optional = function() {
  return this;
}
TypeAny.prototype.required = function() {
  return this;
}
TypeAny.prototype.allowNull = function() {
  return this;
}
TypeAny.prototype.min = function() {
  return this;
}
TypeAny.prototype.max = function() {
  return this;
}
TypeAny.prototype.length = function() {
  return this;
}
TypeAny.prototype.schema = function() {
  return this;
}
TypeAny.prototype.validate = function() {
  return this;
}

module.exports = TypeAny;


/***/ }),

/***/ "../node_modules/thinky/lib/type/array.js":
/*!************************************************!*\
  !*** ../node_modules/thinky/lib/type/array.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../node_modules/thinky/lib/type/../util.js */ "../node_modules/thinky/lib/util.js");
var schema =      __webpack_require__(/*! ../node_modules/thinky/lib/type/../schema.js */ "../node_modules/thinky/lib/schema.js");
var arrayPrefix = schema.arrayPrefix;
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/type/../errors.js */ "../node_modules/thinky/lib/errors.js");

function TypeArray() {
  this._min = -1;
  this._max = -1;
  this._length = -1;
  this._schema = undefined;
  this._validator = undefined;
  this._options = {};
}


TypeArray.prototype.options = function(options) {
  if (util.isPlainObject(options)) {
    if (options.enforce_missing != null) {
      this._options.enforce_missing =  options.enforce_missing
    }
    if (options.enforce_type != null) {
      this._options.enforce_type = options.enforce_type;
    }
    if (options.enforce_extra != null) {
      this._options.enforce_extra = options.enforce_extra
    }
  }
  return this;
}


TypeArray.prototype.optional = function() {
  this._options.enforce_missing = false;
  return this;
}


TypeArray.prototype.required = function() {
  this._options.enforce_missing = true;
  return this;
}


TypeArray.prototype.allowNull = function(value) {
  if (this._options.enforce_type === 'strict') {
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    // else a no-op, strict -> strict
  }
  else if (this._options.enforce_type !== 'none') {
    // The value is loose or undefined
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    else {
      // The default value is loose, so if we call allowNull(false), it becomes strict
      this._options.enforce_type = 'strict'
    }
  }
  // else no op, type.any() is the same as type.any().allowNull(<bool>)
  return this;
}


TypeArray.prototype.min = function(min) {
  if (min < 0) {
    throw new Errors.ValidationError("The value for `min` must be a positive integer");
  }
  this._min = min;
  return this;
}


TypeArray.prototype.max = function(max) {
  if (max < 0) {
    throw new Errors.ValidationError("The value for `max` must be a positive integer");
  }
  this._max = max;
  return this;
}


TypeArray.prototype.length = function(length) {
  if (length < 0) {
    throw new Errors.ValidationError("The value for `length` must be a positive integer");
  }
  this._length = length;
  return this;
}


TypeArray.prototype.schema = function(schema) {
  this._schema = schema;
  return this;
}


TypeArray.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}


TypeArray.prototype.validator = function(fn) {
  this._validator = fn;
  return this;
}


TypeArray.prototype.validate = function(array, prefix, options) {
  var self = this;
  var localOptions = util.mergeOptions(this._options, options);

  if (util.validateIfUndefined(array, prefix, "array", localOptions)) return;

  if ((typeof self._validator === "function") && (self._validator(array) === false)) {
    throw new Errors.ValidationError("Validator for the field "+prefix+" returned `false`.");
  }

  if ((typeof array === 'function') && (array._query !== undefined)) {
    // We do not check ReQL terms
  }
  else if (Array.isArray(array) === false) {
    if (localOptions.enforce_type === "strict") {
      util.strictType(prefix, "array");
    }
    else if ((localOptions.enforce_type === "loose") && (array !== null)) {
      util.looseType(prefix, "array");
    }
  }
  else {
    if ((this._min !== -1) && (this._min > array.length)){
      throw new Errors.ValidationError("Value for "+prefix+" must have at least "+this._min+" elements.")
    }
    if ((this._max !== -1) && (this._max < array.length)){
      throw new Errors.ValidationError("Value for "+prefix+" must have at most "+this._max+" elements.")
    }
    if ((this._length !== -1) && (this._length !== array.length)){
      throw new Errors.ValidationError("Value for "+prefix+" must be an array with "+this._length+" elements.")
    }

    for(var i=0; i<array.length; i++) {
      if (array[i] === undefined) {
        throw new Errors.ValidationError("The element in the array "+prefix+" (position "+i+") cannot be `undefined`.");
      }
      if (this._schema !== undefined) {
        this._schema.validate(array[i], prefix+"["+i+"]", options);
      }
    }
  }
}


TypeArray.prototype._getDefaultFields = function(prefix, defaultFields, virtualFields) {
  if (this._default !== undefined) {
    defaultFields.push({
      path: prefix,
      value: this._default,
    });
  }
  if (this._schema !== undefined) {
    this._schema._getDefaultFields(prefix.concat(arrayPrefix), defaultFields, virtualFields);
  }
}


module.exports = TypeArray;


/***/ }),

/***/ "../node_modules/thinky/lib/type/boolean.js":
/*!**************************************************!*\
  !*** ../node_modules/thinky/lib/type/boolean.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../node_modules/thinky/lib/type/../util.js */ "../node_modules/thinky/lib/util.js");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/type/../errors.js */ "../node_modules/thinky/lib/errors.js");

function TypeBoolean() {
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}


TypeBoolean.prototype.options = function(options) {
  if (util.isPlainObject(options)) {
    if (options.enforce_missing != null) {
      this._options.enforce_missing =  options.enforce_missing
    }
    if (options.enforce_type != null) {
      this._options.enforce_type = options.enforce_type;
    }
    if (options.enforce_extra != null) {
      this._options.enforce_extra = options.enforce_extra
    }
  }
  return this;
}


TypeBoolean.prototype.optional = function() {
  this._options.enforce_missing = false;
  return this;
}


TypeBoolean.prototype.required = function() {
  this._options.enforce_missing = true;
  return this;
}


TypeBoolean.prototype.allowNull = function(value) {
  if (this._options.enforce_type === 'strict') {
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    // else a no-op, strict -> strict
  }
  else if (this._options.enforce_type !== 'none') {
    // The value is loose or undefined
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    else {
      // The default value is loose, so if we call allowNull(false), it becomes strict
      this._options.enforce_type = 'strict'
    }
  }
  // else no op, type.any() is the same as type.any().allowNull(<bool>)
  return this;
}



TypeBoolean.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}


TypeBoolean.prototype.validator = function(fn) {
  if (typeof fn === "function") {
    this._validator = fn;
  }
  return this;
}


TypeBoolean.prototype.validate = function(bool, prefix, options) {
  options = util.mergeOptions(this._options, options);

  if (util.validateIfUndefined(bool, prefix, "boolean", options)) return;

  if ((typeof this._validator === "function") && (this._validator(bool) === false)) {
    throw new Errors.ValidationError("Validator for the field "+prefix+" returned `false`.");
  }

  if (typeof bool !== "boolean") {
    if (options.enforce_type === "strict") {
      util.strictType(prefix, "boolean");
    }
    else if ((options.enforce_type === "loose") && (bool !== null)) {
      util.looseType(prefix, "boolean");
    }
  }
}


TypeBoolean.prototype._getDefaultFields = function(prefix, defaultFields, virtualFields) {
  if (this._default !== undefined) {
    defaultFields.push({
      path: prefix,
      value: this._default,
    });
  }
}


module.exports = TypeBoolean;


/***/ }),

/***/ "../node_modules/thinky/lib/type/buffer.js":
/*!*************************************************!*\
  !*** ../node_modules/thinky/lib/type/buffer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../node_modules/thinky/lib/type/../util.js */ "../node_modules/thinky/lib/util.js");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/type/../errors.js */ "../node_modules/thinky/lib/errors.js");

function TypeBuffer() {
  this._default = undefined;
  this._options = {};
  this._validator = undefined;
}


TypeBuffer.prototype.options = function(options) {
  if (util.isPlainObject(options)) {
    if (options.enforce_missing != null) {
      this._options.enforce_missing =  options.enforce_missing
    }
    if (options.enforce_type != null) {
      this._options.enforce_type = options.enforce_type;
    }
    if (options.enforce_extra != null) {
      this._options.enforce_extra = options.enforce_extra
    }
  }
  return this;
}


TypeBuffer.prototype.optional = function() {
  this._options.enforce_missing = false;
  return this;
}


TypeBuffer.prototype.required = function() {
  this._options.enforce_missing = true;
  return this;
}


TypeBuffer.prototype.allowNull = function(value) {
  if (this._options.enforce_type === 'strict') {
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    // else a no-op, strict -> strict
  }
  else if (this._options.enforce_type !== 'none') {
    // The value is loose or undefined
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    else {
      // The default value is loose, so if we call allowNull(false), it becomes strict
      this._options.enforce_type = 'strict'
    }
  }
  // else no op, type.any() is the same as type.any().allowNull(<bool>)
  return this;
}


TypeBuffer.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}


TypeBuffer.prototype.validator = function(fn) {
  if (typeof fn === "function") {
    this._validator = fn;
  }
  return this;
}


TypeBuffer.prototype.validate = function(buffer, prefix, options) {
  options = util.mergeOptions(this._options, options);

  if (util.validateIfUndefined(buffer, prefix, "buffer", options)) return;

  if ((typeof this._validator === "function") && (this._validator(buffer) === false)) {
    throw new Errors.ValidationError("Validator for the field "+prefix+" returned `false`.");
  }

  if (util.isPlainObject(buffer) && (buffer["$reql_type$"] === "BINARY")) {
    if (buffer.data === undefined) {
      util.pseudoTypeError("binary", "data", prefix);
    }
  }
  else if ((typeof buffer === 'function') && (buffer._query !== undefined)) {
    // TOIMPROvE -- we currently just check if it's a term from the driver
    // We suppose for now that this is enough and we don't throw an error
  }
  else if ((buffer instanceof Buffer) === false)  { // We don't have a buffer
    if (options.enforce_type === "strict") {
      util.strictType(prefix, "buffer");
    }
    else if ((options.enforce_type === "loose") && (buffer !== null)) {
      util.looseType(prefix, "buffer");
    }
  }
}


TypeBuffer.prototype._getDefaultFields = function(prefix, defaultFields, virtualFields) {
  if (this._default !== undefined) {
    defaultFields.push({
      path: prefix,
      value: this._default,
    });
  }
}


module.exports = TypeBuffer;


/***/ }),

/***/ "../node_modules/thinky/lib/type/date.js":
/*!***********************************************!*\
  !*** ../node_modules/thinky/lib/type/date.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../node_modules/thinky/lib/type/../util.js */ "../node_modules/thinky/lib/util.js");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/type/../errors.js */ "../node_modules/thinky/lib/errors.js");

function TypeDate() {
  this._min = undefined;
  this._max = undefined;
  this._validator = undefined;
  this._options = {};
}


TypeDate.prototype.options = function(options) {
  if (util.isPlainObject(options)) {
    if (options.enforce_missing != null) {
      this._options.enforce_missing =  options.enforce_missing
    }
    if (options.enforce_type != null) {
      this._options.enforce_type = options.enforce_type;
    }
    if (options.enforce_extra != null) {
      this._options.enforce_extra = options.enforce_extra
    }
  }
  return this;
}


TypeDate.prototype.optional = function() {
  this._options.enforce_missing = false;
  return this;
}


TypeDate.prototype.required = function() {
  this._options.enforce_missing = true;
  return this;
}


TypeDate.prototype.allowNull = function(value) {
  if (this._options.enforce_type === 'strict') {
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    // else a no-op, strict -> strict
  }
  else if (this._options.enforce_type !== 'none') {
    // The value is loose or undefined
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    else {
      // The default value is loose, so if we call allowNull(false), it becomes strict
      this._options.enforce_type = 'strict'
    }
  }
  // else no op, type.any() is the same as type.any().allowNull(<bool>)
  return this;
}


TypeDate.prototype.min = function(min) {
  this._min = min;
  return this;
}


TypeDate.prototype.max = function(max) {
  this._max = max;
  return this;
}


TypeDate.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}


TypeDate.prototype.validator = function(fn) {
  if (typeof fn === "function") {
    this._validator = fn;
  }
  return this;
}


TypeDate.prototype.validate = function(date, prefix, options) {
  options = util.mergeOptions(this._options, options);

  if (util.validateIfUndefined(date, prefix, "date", options)) return;

  if ((typeof this._validator === "function") && (this._validator(date) === false)) {
    throw new Errors.ValidationError("Validator for the field "+prefix+" returned `false`.");
  }

  var jsDate;
  if (util.isPlainObject(date) && (date["$reql_type$"] === "TIME")) {
    if (date.epoch_time === undefined) {
      util.pseudoTypeError("date", "epoch_time", prefix);
    }
    else if (date.timezone === undefined) {
      util.pseudoTypeError("date", "timezone", prefix);
    }

    jsDate = new Date(0);
    jsDate.setUTCSeconds(date.epoch_time)
  }
  else if ((typeof date === 'function') && (date._query !== undefined)) {
    // TOIMPROVE -- we currently just check if it's a term from the driver
    // We suppose for now that this is enough and we don't throw an error
  }
  else if (typeof date === 'string' || typeof date === 'number') {
    var numericDate = parseInt(date, 10);
    if(!isNaN(numericDate)){
      date = numericDate;
    }
    jsDate = new Date(date);
    if (jsDate.getTime() !== jsDate.getTime()) {
      if (options.enforce_type === "strict") {
        util.strictType(prefix, "date or a valid string");
      }
      else if (options.enforce_type !== "none") {
        util.looseType(prefix, "date or a valid string");
      }
    }
  }
  else if ((date instanceof Date) === false) { // We have a non valid date
    if (options.enforce_type === "strict") {
      util.strictType(prefix, "date");
    }
    else if ((options.enforce_type === "loose") && (date !== null)) {
      util.looseType(prefix, "date");
    }
  }
  else {
    jsDate = date;
  }

  // We check for min/max only if we could create a javascript date from the value
  if (jsDate !== undefined) {
    if ((this._min instanceof Date) && (this._min > jsDate)){
      throw new Errors.ValidationError("Value for "+prefix+" must be after "+this._min+".")
    }
    if ((this._max instanceof Date) && (this._max < jsDate)){
      throw new Errors.ValidationError("Value for "+prefix+" must be before "+this._max+".")
    }
  }
}


TypeDate.prototype._getDefaultFields = function(prefix, defaultFields, virtualFields) {
  if (this._default !== undefined) {
    defaultFields.push({
      path: prefix,
      value: this._default,
    });
  }
}


module.exports = TypeDate;


/***/ }),

/***/ "../node_modules/thinky/lib/type/index.js":
/*!************************************************!*\
  !*** ../node_modules/thinky/lib/type/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var schema =      __webpack_require__(/*! ../node_modules/thinky/lib/type/../schema.js */ "../node_modules/thinky/lib/schema.js");
var util =        __webpack_require__(/*! ../node_modules/thinky/lib/type/../util.js */ "../node_modules/thinky/lib/util.js");
var TypeAny =     __webpack_require__(/*! ../node_modules/thinky/lib/type/any.js */ "../node_modules/thinky/lib/type/any.js");
var TypeArray =   __webpack_require__(/*! ../node_modules/thinky/lib/type/array.js */ "../node_modules/thinky/lib/type/array.js");
var TypeBoolean = __webpack_require__(/*! ../node_modules/thinky/lib/type/boolean.js */ "../node_modules/thinky/lib/type/boolean.js");
var TypeBuffer =  __webpack_require__(/*! ../node_modules/thinky/lib/type/buffer.js */ "../node_modules/thinky/lib/type/buffer.js");
var TypeDate =    __webpack_require__(/*! ../node_modules/thinky/lib/type/date.js */ "../node_modules/thinky/lib/type/date.js");
var TypeNumber =  __webpack_require__(/*! ../node_modules/thinky/lib/type/number.js */ "../node_modules/thinky/lib/type/number.js");
var TypeObject =  __webpack_require__(/*! ../node_modules/thinky/lib/type/object.js */ "../node_modules/thinky/lib/type/object.js");
var TypePoint =   __webpack_require__(/*! ../node_modules/thinky/lib/type/point.js */ "../node_modules/thinky/lib/type/point.js");
var TypeString =  __webpack_require__(/*! ../node_modules/thinky/lib/type/string.js */ "../node_modules/thinky/lib/type/string.js");
var TypeVirtual = __webpack_require__(/*! ../node_modules/thinky/lib/type/virtual.js */ "../node_modules/thinky/lib/type/virtual.js");


/**
 * Create a new Type that let users create sub-types.
 * @return {Type}
 */
function Type() { }


/**
 * Create a new TypeAny object
 * @return {TypeAny}
 */

Type.prototype.any = function() {
  return new TypeAny();
}


/**
 * Create a new TypeString object.
 * @return {TypeString}
 */
Type.prototype.string = function() {
  return new TypeString();
}


/**
 * Create a new TypeNumber object.
 * @return {TypeNumber}
 */
Type.prototype.number = function() {
  return new TypeNumber();
}


/**
 * Create a new TypeBoolean object.
 * @return {TypeBoolean}
 */
Type.prototype.boolean = function() {
  return new TypeBoolean();
}


/**
 * Create a new TypeDate object.
 * @return {TypeDate}
 */
Type.prototype.date = function() {
  return new TypeDate();
}


/**
 * Create a new TypeBuffer object.
 * @return {TypeBuffer}
 */
Type.prototype.buffer = function() {
  return new TypeBuffer();
}


/**
 * Create a new TypePoint object.
 * @return {TypePoint}
 */
Type.prototype.point = function() {
  return new TypePoint();
}


/**
 * Create a new TypeObject object.
 * @return {TypeObject}
 */
Type.prototype.object = function() {
  return new TypeObject();
}


/**
 * Create a new TypeArray object.
 * @return {TypeArray}
 */
Type.prototype.array = function() {
  return new TypeArray();
}


/**
 * Create a new TypeVirtual object.
 * @return {TypeVirtual}
 */
Type.prototype.virtual = function() {
  return new TypeVirtual();
}


/**
 * Create a new TypeString object to use as an id.
 * @return {TypeString}
 */
Type.prototype.id = function() {
  return new TypeString().optional();
}


/**
 * Check if the first argument is a TypeString object or not
 * @param {Object} obj The object to check against TypeString.
 * @return {boolean}
 */
Type.prototype.isString = function(obj) {
  return obj instanceof TypeString;
}


/**
 * Check if the first argument is a TypeNumber object or not
 * @param {Object} obj The object to check against TypeNumber.
 * @return {boolean}
 */
Type.prototype.isNumber = function(obj) {
  return obj instanceof TypeNumber;
}


/**
 * Check if the first argument is a TypeBoolean object or not
 * @param {Object} obj The object to check against TypeBoolean.
 * @return {boolean}
 */
Type.prototype.isBoolean = function(obj) {
  return obj instanceof TypeBoolean;
}


/**
 * Check if the first argument is a TypeDate object or not
 * @param {Object} obj The object to check against TypeDate.
 * @return {boolean}
 */
Type.prototype.isDate = function(obj) {
  return obj instanceof TypeDate;
}


/**
 * Check if the first argument is a TypeBuffer object or not
 * @param {Object} obj The object to check against TypeBuffer.
 * @return {boolean}
 */
Type.prototype.isBuffer = function(obj) {
  return obj instanceof TypeBuffer;
}


/**
 * Check if the first argument is a TypePoint object or not
 * @param {Object} obj The object to check against TypePoint.
 * @return {boolean}
 */
Type.prototype.isPoint = function(obj) {
  return obj instanceof TypePoint;
}


/**
 * Check if the first argument is a TypeObject object or not
 * @param {Object} obj The object to check against TypeObject.
 * @return {boolean}
 */
Type.prototype.isObject = function(obj) {
  return obj instanceof TypeObject;
}


/**
 * Check if the first argument is a TypeArray object or not
 * @param {Object} obj The object to check against TypeArray.
 * @return {boolean}
 */
Type.prototype.isArray = function(obj) {
  return obj instanceof TypeArray;
}


/**
 * Check if the first argument is a TypeVirtual object or not
 * @param {Object} obj The object to check against TypeVirtual.
 * @return {boolean}
 */
Type.prototype.isVirtual = function(obj) {
  return obj instanceof TypeVirtual;
}


/**
 * Check if the first argument is a TypeAny object or not
 * @param {Object} obj The object to check against TypeAny.
 * @return {boolean}
 */
Type.prototype.isAny = function(obj) {
  return obj instanceof TypeAny;
}


module.exports = new Type();


/***/ }),

/***/ "../node_modules/thinky/lib/type/number.js":
/*!*************************************************!*\
  !*** ../node_modules/thinky/lib/type/number.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../node_modules/thinky/lib/type/../util.js */ "../node_modules/thinky/lib/util.js");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/type/../errors.js */ "../node_modules/thinky/lib/errors.js");

function TypeNumber() {
  this._min = undefined;
  this._max = undefined;
  this._integer = false;
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}


TypeNumber.prototype.options = function(options) {
  if (util.isPlainObject(options)) {
    if (options.enforce_missing != null) {
      this._options.enforce_missing =  options.enforce_missing
    }
    if (options.enforce_type != null) {
      this._options.enforce_type = options.enforce_type;
    }
    if (options.enforce_extra != null) {
      this._options.enforce_extra = options.enforce_extra
    }
  }
  return this;
}


TypeNumber.prototype.optional = function() {
  this._options.enforce_missing = false;
  return this;
}


TypeNumber.prototype.required = function() {
  this._options.enforce_missing = true;
  return this;
}


TypeNumber.prototype.allowNull = function(value) {
  if (this._options.enforce_type === 'strict') {
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    // else a no-op, strict -> strict
  }
  else if (this._options.enforce_type !== 'none') {
    // The value is loose or undefined
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    else {
      // The default value is loose, so if we call allowNull(false), it becomes strict
      this._options.enforce_type = 'strict'
    }
  }
  // else no op, type.any() is the same as type.any().allowNull(<bool>)
  return this;
}



TypeNumber.prototype.min = function(min) {
  if ((typeof(min) !== 'number') || (isFinite(min) == false)) {
    throw new Errors.ValidationError("The value for `min` must be a finite number");
  }
  this._min = min;
  return this;
}


TypeNumber.prototype.max = function(max) {
  if ((typeof(max) !== 'number') || (isFinite(max) == false)) {
    throw new Errors.ValidationError("The value for `max` must be a finite number");
  }
  this._max = max;
  return this;
}


TypeNumber.prototype.integer = function() {
  this._integer = true;
  return this;
}


TypeNumber.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}


TypeNumber.prototype.validator = function(fn) {
  if (typeof fn === "function") {
    this._validator = fn;
  }
  return this;
}


TypeNumber.prototype.validate = function(number, prefix, options) {
  options = util.mergeOptions(this._options, options);

  if (util.validateIfUndefined(number, prefix, "number", options)) return;

  if ((typeof this._validator === "function") && (this._validator(number) === false)) {
    throw new Errors.ValidationError("Validator for the field "+prefix+" returned `false`.");
  }

  if(typeof number === 'string'){
    var numericString = parseFloat(number);
    if(!isNaN(numericString)){
      number = numericString;
    }
  }

  if ((typeof number === 'function') && (number._query !== undefined)) {
    // We do not check ReQL terms
  }
  else if ((typeof number !== "number") || (isFinite(number) === false)) {
    if (options.enforce_type === "strict") {
      util.strictType(prefix, "finite number");
    }
    else if ((options.enforce_type === "loose") && (number !== null)) {
      util.looseType(prefix, "finite number");
    }
  }
  else {
    if ((this._min !== undefined) && (this._min > number)){
      throw new Errors.ValidationError("Value for "+prefix+" must be greater than or equal to "+this._min+".")
    }
    if ((this._max !== undefined) && (this._max < number)){
      throw new Errors.ValidationError("Value for "+prefix+" must be less than or equal to "+this._max+".")
    }
    if ((this._integer === true) && (number % 1 !== 0)){
      throw new Errors.ValidationError("Value for "+prefix+" must be an integer.")
    }
  }
}


TypeNumber.prototype._getDefaultFields = function(prefix, defaultFields, virtualFields) {
  if (this._default !== undefined) {
    defaultFields.push({
      path: prefix,
      value: this._default,
    });
  }
}


module.exports = TypeNumber;


/***/ }),

/***/ "../node_modules/thinky/lib/type/object.js":
/*!*************************************************!*\
  !*** ../node_modules/thinky/lib/type/object.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../node_modules/thinky/lib/type/../util.js */ "../node_modules/thinky/lib/util.js");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/type/../errors.js */ "../node_modules/thinky/lib/errors.js");

function TypeObject() {
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
  this._schema = {};
}


TypeObject.prototype._setModel = function(model) {
  this._model = model;
  return this;
}


TypeObject.prototype.options = function(options) {
  if (util.isPlainObject(options)) {
    if (options.enforce_missing != null) {
      this._options.enforce_missing =  options.enforce_missing
    }
    if (options.enforce_type != null) {
      this._options.enforce_type = options.enforce_type;
    }
    if (options.enforce_extra != null) {
      this._options.enforce_extra = options.enforce_extra
    }
  }
  return this;
}


TypeObject.prototype.optional = function() {
  this._options.enforce_missing = false;
  return this;
}


TypeObject.prototype.required = function() {
  this._options.enforce_missing = true;
  return this;
}


TypeObject.prototype.allowNull = function(value) {
  if (this._options.enforce_type === 'strict') {
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    // else a no-op, strict -> strict
  }
  else if (this._options.enforce_type !== 'none') {
    // The value is loose or undefined
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    else {
      // The default value is loose, so if we call allowNull(false), it becomes strict
      this._options.enforce_type = 'strict'
    }
  }
  // else no op, type.any() is the same as type.any().allowNull(<bool>)
  return this;
}


TypeObject.prototype.allowExtra = function(allowed) {
  if (allowed === true) {
    this._options.enforce_extra = 'none';
  }
  else if (allowed === false) {
    this._options.enforce_extra = 'strict';
  }
  return this;
}


TypeObject.prototype.removeExtra = function() {
  this._options.enforce_extra = 'remove';
  return this;
}


TypeObject.prototype.schema = function(schema) {
  // Users shouldn't use the deprecated syntax with the chainable one
  // We do not parse the schema as we don't have the current prefix, options etc.
  this._schema = schema;
  return this;
}


TypeObject.prototype.setKey = function(key, schema) {
  this._schema[key] = schema;
  return this;
}


TypeObject.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}


TypeObject.prototype.validator = function(fn) {
  if (typeof fn === "function") {
    this._validator = fn;
  }
  return this;
}


TypeObject.prototype.validate = function(object, prefix, options) {
  var self = this;
  var localOptions = util.mergeOptions(this._options, options);

  if (util.validateIfUndefined(object, prefix, "object", localOptions)) return;

  if ((typeof self._validator === "function") && (self._validator(object) === false)) {
    throw new Errors.ValidationError("Validator for the field "+prefix+" returned `false`.");
  }

  if ((typeof object === 'function') && (object._query !== undefined)) {
    // We do not check ReQL terms
  }
  else if (util.isPlainObject(object) === false) {
    if (localOptions.enforce_type === "strict") {
      util.strictType(prefix, "object");
    }
    else if ((localOptions.enforce_type === "loose") && (object !== null)) {
      util.looseType(prefix, "object");
    }
  }
  else {
    util.loopKeys(self._schema, function(schema, key) {
      schema[key].validate(object[key], prefix+"["+key+"]", options);
    });

    // We clean extra fields in validate, for a use case, see:
    // https://github.com/neumino/thinky/pull/123#issuecomment-56254682
    if (localOptions.enforce_extra === "remove") {
      util.loopKeys(object, function(object, key) {
        if ((self._model === undefined || self._model._joins.hasOwnProperty(key) === false)
            && (self._schema[key] === undefined)) {
          delete object[key];
        }
      });
    }
    else if (localOptions.enforce_extra === "strict") {
      util.loopKeys(object, function(object, key) {
        if ((self._model === undefined || self._model._joins.hasOwnProperty(key) === false)
            && (self._schema[key] === undefined)) {
          util.extraField(prefix, key);
        }
      });
    }
  }
}


TypeObject.prototype._getDefaultFields = function(prefix, defaultFields, virtualFields) {
  if (this._default !== undefined) {
    defaultFields.push({
      path: prefix,
      value: this._default,
    });
  }
  if (this._schema !== undefined) {
    util.loopKeys(this._schema, function(_schema, key) {
      if (typeof _schema[key]._getDefaultFields !== 'function') {
        console.log(_schema);
        console.log(key);
        console.log(_schema[key]);
      }
      _schema[key]._getDefaultFields(prefix.concat(key), defaultFields, virtualFields);
    })
  }
}


module.exports = TypeObject;


/***/ }),

/***/ "../node_modules/thinky/lib/type/point.js":
/*!************************************************!*\
  !*** ../node_modules/thinky/lib/type/point.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../node_modules/thinky/lib/type/../util.js */ "../node_modules/thinky/lib/util.js");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/type/../errors.js */ "../node_modules/thinky/lib/errors.js");

function TypePoint() {
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}


TypePoint.prototype.options = function(options) {
  if (util.isPlainObject(options)) {
    if (options.enforce_missing != null) {
      this._options.enforce_missing =  options.enforce_missing
    }
    if (options.enforce_type != null) {
      this._options.enforce_type = options.enforce_type;
    }
    if (options.enforce_extra != null) {
      this._options.enforce_extra = options.enforce_extra
    }
  }
  return this;
}


TypePoint.prototype.optional = function() {
  this._options.enforce_missing = false;
  return this;
}


TypePoint.prototype.required = function() {
  this._options.enforce_missing = true;
  return this;
}


TypePoint.prototype.allowNull = function(value) {
  if (this._options.enforce_type === 'strict') {
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    // else a no-op, strict -> strict
  }
  else if (this._options.enforce_type !== 'none') {
    // The value is loose or undefined
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    else {
      // The default value is loose, so if we call allowNull(false), it becomes strict
      this._options.enforce_type = 'strict'
    }
  }
  // else no op, type.any() is the same as type.any().allowNull(<bool>)
  return this;
}


TypePoint.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}


TypePoint.prototype.validator = function(fn) {
  if (typeof fn === "function") {
   this._validator = fn;
  }
  return this;
}


TypePoint.prototype.validate = function(point, prefix, options) {
  options = util.mergeOptions(this._options, options);

  if (util.validateIfUndefined(point, prefix, "point", options)) return;

  if ((typeof this._validator === "function") && (this._validator(point) === false)) {
    throw new Errors.ValidationError("Validator for the field "+prefix+" returned `false`.");
  }

  if (util.isPlainObject(point) && (point["$reql_type$"] === "GEOMETRY")) {
    if (point.type === undefined) {
      util.pseudoTypeError("Point", "type", prefix);
    }
    else if (point.type !== "Point") {
      throw new Errors.ValidationError("The field `type` for "+prefix+" must be `'Point'`.")
    }
    else if (point.coordinates === undefined) {
      util.pseudoTypeError("date", "coordinates", prefix);
    }
    else if ((!Array.isArray(point.coordinates)) || (point.coordinates.length !== 2)) {
      throw new Errors.ValidationError("The field `coordinates` for "+prefix+" must be an Array of two numbers.")
    }
  }
  else if (util.isPlainObject(point) && (point.type === "Point") && (Array.isArray(point.coordinates)) && (point.coordinates.length === 2)) { // Geojson
    // Geojson format
  }
  else if ((typeof point === 'function') && (point._query !== undefined)) {
    // TOIMPROvE -- we currently just check if it's a term from the driver
    // We suppose for now that this is enough and we don't throw an error
  }
  else if (util.isPlainObject(point)) {
    var keys = Object.keys(point).sort();
    if (((keys.length !== 2) || keys[0] !== 'latitude') || (keys[1] !== 'longitude') || (typeof point.latitude !== "number") || (typeof point.longitude !== "number")) {
      throw new Errors.ValidationError("The value for "+prefix+" must be a ReQL Point (`r.point(<longitude>, <latitude>)`), an object `{longitude: <number>, latitude: <number>}`, or an array [<longitude>, <latitude>].")
    }
    else if ((typeof point.latitude !== 'number') || (typeof point.latitude !== 'number')) {
      throw new Errors.ValidationError("The value for "+prefix+" must be a ReQL Point (`r.point(<longitude>, <latitude>)`), an object `{longitude: <number>, latitude: <number>}`, or an array [<longitude>, <latitude>].")
    }
  }
  else if (Array.isArray(point)) {
    if ((point.length !== 2) || (typeof point[0] !== "number") || (typeof point[1] !== "number")) {
      throw new Errors.ValidationError("The value for "+prefix+" must be a ReQL Point (`r.point(<longitude>, <latitude>)`), an object `{longitude: <number>, latitude: <number>}`, or an array [<longitude>, <latitude>].")
    }
  }
  else { // We don't have a point
    if (options.enforce_type === "strict") {
      util.strictType(prefix, "Point");
    }
    else if ((options.enforce_type === "loose") && (point !== null)) {
      util.looseType(prefix, "Point");
    }
  }
}


TypePoint.prototype._getDefaultFields = function(prefix, defaultFields, virtualFields) {
  if (this._default !== undefined) {
    defaultFields.push({
      path: prefix,
      value: this._default,
    });
  }
}

module.exports = TypePoint;


/***/ }),

/***/ "../node_modules/thinky/lib/type/string.js":
/*!*************************************************!*\
  !*** ../node_modules/thinky/lib/type/string.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util =       __webpack_require__(/*! ../node_modules/thinky/lib/type/../util.js */ "../node_modules/thinky/lib/util.js");
var validator =  __webpack_require__(/*! validator */ "../node_modules/validator/validator.js");
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/type/../errors.js */ "../node_modules/thinky/lib/errors.js");

/**
 * Create a new TypeString object
 */
function TypeString() {
  /**
   * Minimum length of the string, negative if no minimum length is required.
   * @type {number}
   */
  this._min = -1;
  /**
   * Maximum length of the string, negative if no maximum length is required.
   * @type {number}
   */
  this._max = -1;
  /**
   * Length of the string, negative if no length is required.
   * @type {number}
   */
  this._length = -1;
  /**
   * Whether the string must be alphanumeric or not. We used the npm validator
   * package, and as 2014/12/14, it check against the regex [a-zA-Z0-9]
   * @type {boolean}
   */
  this._alphanum = false;
  /**
   * Whether this string must be uppercase or not.
   * @type {boolean}
   */
  this._uppercase = false;
  /**
   * Whether this string must be lowercase or not.
   * @type {boolean}
   */
  this._lowercase = false;
  /*
   * The regex against which the string must conform. Undefined if the string
   * does not have to conform to a RegExp.
   * @type {RegExp=}
   */
  this._regex = undefined;
  /**
   * The validator called with the string must return {true} if the string is valid,
   * {false} if the string is not.
   * @type {function(string)=}
   */
  this._enum = undefined;
  /**
   * The default value for this field or a function to generate the default value.
   * @type {function|string}
   */
  this._default = undefined;
  /**
   * Whether this string must be a uuid or not.
   * @type {number}
   */
  this._uuid = undefined;
  /**
   * Options for this type "enforce_missing", "enforce_type", "enforce_extra"
   * @type {Object=}
   */
  this._validator = undefined;
  /**
   * An object whose keys are the acceptable values for the string. Undefined if this
   * is not a requirement.
   * @type {Object=}
   */
  this._options = {};
}


/**
 * Set the options for this field.
 * @param {!object} options The options for this field. The valid fields are:
 *  - `enforce_missing` {boolean}, default `false`
 *  - `enforce_extra` {"strict"|"remove"|"none"}, default `"none"`
 *  - `enforce_type` {"strict"|"loose"|"none"}, default `"loose"`
 * @return {TypeString}
 */
TypeString.prototype.options = function(options) {
  if (util.isPlainObject(options)) {
    if (options.enforce_missing != null) {
      this._options.enforce_missing =  options.enforce_missing
    }
    if (options.enforce_type != null) {
      this._options.enforce_type = options.enforce_type;
    }
    if (options.enforce_extra != null) {
      this._options.enforce_extra = options.enforce_extra
    }
  }
  return this;
}


/**
 * Set the property as optional (enforce_missing = false).
 * Leaves other existing options unchanged.
 * @return {TypeString}
 */
TypeString.prototype.optional = function() {
  this._options.enforce_missing = false;
  return this;
}


/**
 * Set the property as required (enforce_missing = true).
 * Leaves other existing options unchanged.
 * @return {TypeString}
 */
TypeString.prototype.required = function() {
  this._options.enforce_missing = true;
  return this;
}


/**
 * Set the property as not strict (null allowed, enforce_missing = true).
 * Leaves other existing options unchanged.
 * @return {TypeString}
 */
TypeString.prototype.allowNull = function(value) {
  if (this._options.enforce_type === 'strict') {
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    // else a no-op, strict -> strict
  }
  else if (this._options.enforce_type !== 'none') {
    // The value is loose or undefined
    if (value === true) {
      this._options.enforce_type = 'loose'
    }
    else {
      // The default value is loose, so if we call allowNull(false), it becomes strict
      this._options.enforce_type = 'strict'
    }
  }
  // else no op, type.any() is the same as type.any().allowNull(<bool>)
  return this;
}


/**
 * Set the minimum length allowed for a string.
 * @param {number} min Minimum length for the string
 * @return {TypeString}
 */
TypeString.prototype.min = function(min) {
  if (min < 0) {
    throw new Errors.ValidationError("The value for `min` must be a positive integer");
  }
  this._min = min;
  return this;
}


/**
 * Set the maximum length allowed for a string.
 * @param {number} min Minimum length for the string
 * @return {TypeString}
 */
TypeString.prototype.max = function(max) {
  if (max < 0) {
    throw new Errors.ValidationError("The value for `max` must be a positive integer");
  }
  this._max = max;
  return this;
}


/**
 * Set the length allowed for a string.
 * @param {number} min Minimum length for the string
 * @return {TypeString}
 */
TypeString.prototype.length = function(length) {
  if (length < 0) {
    throw new Errors.ValidationError("The value for `length` must be a positive integer");
  }
  this._length = length;
  return this;
}


/**
 * Set the regex that the string must match.
 * @param {string} regex The string representation of the regex
 * @param {string} flags The flags used when calling new RegExp(...)
 * @return {TypeString}
 */
TypeString.prototype.regex = function(regex, flags) {
  if (typeof flags === "string") {
    this._regex = new RegExp(regex, flags);
  }
  else {
    this._regex = new RegExp(regex);
  }
  return this;
}


/**
 * Set the string to be alphanumeric.
 * @return {TypeString}
 */
TypeString.prototype.alphanum = function() {
  this._alphanum = true;
  return this;
}


/**
 * Set the string to be an email.
 * @return {TypeString}
 */
TypeString.prototype.email = function() {
  this._email = true;
  return this;
}


/**
 * Set the string to be lowercase.
 * @return {TypeString}
 */
TypeString.prototype.lowercase = function() {
  this._lowercase = true;
  return this;
}


/**
 * Set the string to be uppercase.
 * @return {TypeString}
 */
TypeString.prototype.uppercase = function() {
  this._uppercase = true;
  return this;
}


/**
 * Set the default value for this string, or the function that will generate
 * the default value
 * @param {string|function} fnOrValue
 * @return {TypeString}
 */
TypeString.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

/**
 * Set the string to be a uuid.
 * @param {number} version
 * @return {TypeString}
 */
TypeString.prototype.uuid = function(version) {
  if (isNaN(version)) {
    throw new Errors.ValidationError("The value for `version` must be a number.");
  }
  if (version < 3 || version > 5) {
    throw new Errors.ValidationError("The value for `version` must be either 3, 4 or 5");
  }
  this._uuid = version;
  return this;
}


/**
 * Set a custom validator that will be called with the string. The validator
 * should return a boolean whether the field is valid or not.
 * @param {function} fn
 * @return {TypeString}
 */
TypeString.prototype.validator = function(fn) {
  if (typeof fn === "function") {
    this._validator = fn;
  }
  return this;
}


/**
 * Set the valid values for this field. The arguments must be strings
 * or an array of strings.
 * @param {...string|Array.<string>} fn
 * @return {TypeString}
 */
TypeString.prototype.enum = function() {
  if ((arguments.length === 1) && (Array.isArray(arguments[0]))) {
    this._enum = {};
    for(var i=0; i<arguments[0].length; i++) {
      this._enum[arguments[0][i]] = true;
    }
  }
  else if ((arguments.length !== 1) || (arguments[0] !== undefined)) {
    this._enum = {};
    for(var i=0; i<arguments.length; i++) {
      this._enum[arguments[i]] = true;
    }
  }
  return this;
}


/**
 * Validate the string given optional options, and throw an error in case
 * the field is not valid.
 * @param {string} str The string to validate.
 * @param {string} prefix The prefix leading to `str`.
 * @param {object=} options Options to overwrite the one defined for the field.
 * @throws {Error}
 */
TypeString.prototype.validate = function(str, prefix, options) {
  var _options = util.mergeOptions(this._options, options);

  if (util.validateIfUndefined(str, prefix, "string", _options)) return;

  if ((typeof this._validator === "function") && (this._validator(str) === false)) {
    throw new Errors.ValidationError("Validator for the field "+prefix+" returned `false`.");
  }


  if ((typeof str === 'function') && (str._query !== undefined)) {
    // We do not check ReQL terms
  }
  else if (typeof str !== "string") {
    if (_options.enforce_type === "strict") {
      util.strictType(prefix, "string");
    }
    else if ((_options.enforce_type === "loose") && (str !== null)) {
      util.looseType(prefix, "string");
    }
  }
  else {
    if ((this._min !== -1) && (this._min > str.length)){
      throw new Errors.ValidationError("Value for "+prefix+" must not be shorter than "+this._min+".")
    }
    if ((this._max !== -1) && (this._max < str.length)){
      throw new Errors.ValidationError("Value for "+prefix+" must not be longer than "+this._max+".")
    }
    if ((this._length !== -1) && (this._length !== str.length)){
      throw new Errors.ValidationError("Value for "+prefix+" must be a string with "+this._length+" characters.")
    }
    if ((this._regex instanceof RegExp) && (this._regex.test(str) === false)) {
      throw new Errors.ValidationError("Value for "+prefix+" must match the regex.")
    }
    if ((this._alphanum === true) && (validator.isAlphanumeric(str) === false)) {
      throw new Errors.ValidationError("Value for "+prefix+" must be an alphanumeric string.")
    }
    if ((this._email === true) && (validator.isEmail(str) === false)) {
      throw new Errors.ValidationError("Value for "+prefix+" must be a valid email.")
    }
    if ((this._lowercase === true) && (validator.isLowercase(str) === false)) {
      throw new Errors.ValidationError("Value for "+prefix+" must be a lowercase string.")
    }
    if ((this._uppercase === true) && (validator.isUppercase(str) === false)) {
      throw new Errors.ValidationError("Value for "+prefix+" must be a uppercase string.")
    }
    if ((this._uuid !== undefined) && (validator.isUUID(str, this._uuid) === false)) {
      throw new Errors.ValidationError("Value for "+prefix+" must be a uuid string.")
    }
    if ((this._enum !== undefined) && (this._enum[str] !== true)) {
      var validValues = Object.keys(this._enum);
      var message = "The field "+prefix+" must be one of these values: "

      for(var i=0; i<validValues.length; i++) {
        if (i === 10) { break; }
        if ((i === validValues.length-1) || (i === 9)) {
          message = message+validValues[i]
        }
        else {
          message = message+validValues[i]+", "
        }
      }
      if (validValues.length > 10) {
        message = message+"..."
      }
      else {
        message = message+"."
      }

      throw new Errors.ValidationError(message);
    }
  }
}


/**
 * Look for a default value or default function, and append an object to `defaultFields`.
 * @param {string} prefix The prefix leading to `str`.
 * @param {Array.<Object>} defaultFields The default fields to generate
 * @param {Array.<Object>} virtualFields The virtual fields to generate
 * @return {TypeString}
 */
TypeString.prototype._getDefaultFields = function(prefix, defaultFields, virtualFields) {
  if (this._default !== undefined) {
    defaultFields.push({
      path: prefix,
      value: this._default,
    });
  }
  return this;
}


module.exports = TypeString;


/***/ }),

/***/ "../node_modules/thinky/lib/type/virtual.js":
/*!**************************************************!*\
  !*** ../node_modules/thinky/lib/type/virtual.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function TypeVirtual() {
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}


TypeVirtual.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}


// Dummy functions
TypeVirtual.prototype.validate = function() {}


TypeVirtual.prototype.options = function() {}


TypeVirtual.prototype.optional = function() {}


TypeVirtual.prototype.required = function() {}


TypeVirtual.prototype.allowNull = function() {}


TypeVirtual.prototype._getDefaultFields = function(prefix, defaultFields, virtualFields) {
  // We keep track of virtual fields even if there is no default value
  virtualFields.push({
    path: prefix,
    value: this._default,
  });
}

module.exports = TypeVirtual;


/***/ }),

/***/ "../node_modules/thinky/lib/util.js":
/*!******************************************!*\
  !*** ../node_modules/thinky/lib/util.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = {};
var Promise = __webpack_require__(/*! bluebird */ "bluebird");
var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
var Errors = __webpack_require__(/*! ../node_modules/thinky/lib/errors.js */ "../node_modules/thinky/lib/errors.js");

/**
 * Random useful methods used everywhere.
 */


/**
 * Is `obj` a plain object.
 * @return {boolean}
 */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
util.isPlainObject = isPlainObject;


/**
 * Make a "deep copy".
 * The prototype chain is not copied.
 */
function deepCopy(value) {
  var result;
  if (value instanceof Buffer) {
    // isPlainObject(buffer) returns true.
    return new Buffer(value);
  }

  if (isPlainObject(value) === true) {
    result = {};
    loopKeys(value, function(_value, key) {
      if (_value.hasOwnProperty(key)) {
        result[key] = deepCopy(_value[key]);
      }
    });
    return result;
  }

  if (Array.isArray(value)) {
    result = []
    for(var i=0; i<value.length; i++) {
      result.push(deepCopy(value[i]));
    }
    return result;
  }

  return value;
}
util.deepCopy = deepCopy;


/**
 * Wrap try/catch for v8
 */
function tryCatch(toTry, handleError) {
  try{
    toTry()
  }
  catch(err) {
    handleError(err)
  }
}
util.tryCatch = tryCatch;


/**
 * Return a promise if a hook is asynchronous
 * Note: If no hook is asynchronous, `fn` can still be asynchronous in which
 * case we return a promise or undefined
 * @param {Object} options, the arguments are:
 * - preHooks {Array} the methods to execute before the main one
 * - postHooks {Array} the methods to execute after the main one
 * - async {boolean} whether this this hook is asynchronous or not
 * - doc {Document} the document that triggered the hooks
 * - fn {Function} the main function
 * - fnArgs {Array} arguments for `fn`
 * @return {Promise=}
 */
function hook(options) {
  var preHooks = options.preHooks;
  if (Array.isArray(preHooks) === false) {
    preHooks = [];
  }
  var postHooks = options.postHooks;
  if (Array.isArray(postHooks) === false) {
    postHooks = [];
  }
  var doc = options.doc; // We need the doc to set the context of the hooks
  var async = options.async || false;
  var fn = options.fn; // The function that we are hook
  var fnArgs = options.fnArgs;

  if (async === true) {
    return new Promise(function(resolve, reject) {
      _asyncHook({
        resolve: resolve,
        reject: reject,
        preHooks: preHooks,
        postHooks: postHooks,
        doc: doc,
        fn: fn,
        fnArgs: fnArgs
      });
    });
  }

  return _syncHook({
    preHooks: preHooks,
    postHooks: postHooks,
    doc: doc,
    fn: fn,
    fnArgs: fnArgs
  });
}
function _syncHook(args) {
  var preHooks = args.preHooks;
  var postHooks = args.postHooks;
  var fn = args.fn;
  var doc = args.doc;
  var fnArgs = args.fnArgs;

  for(var i=0; i<preHooks.length; i++) {
    preHooks[i].call(doc);
  }
  var result = fn.apply(doc, fnArgs);
  for(var j=0; j<postHooks.length; j++) {
    postHooks[j].call(doc);
  }
  return result;
}
function _asyncHook(args) {
  // One of the hook, or the function is asynchronous, so we will
  // always return a promise
  // We only need to keep track of the result return/resolved for fn

  var preHooks = args.preHooks;
  var postHooks = args.postHooks;
  var fn = args.fn;
  var fnArgs = args.fnArgs;
  var doc = args.doc;
  var resolve = args.resolve;
  var reject = args.reject;
  var args = args.args;

  var result;

  var nextPost = function() {
    if (typeof resolve === "function") {
      resolve(result);
    }
    return result;
  }

  var executeMain = function() {
    result = fn.apply(doc, fnArgs);
    if (result instanceof Promise) {
      return result.then(function(res) {
        result = res;
        executeHooks(0, postHooks, doc, reject, nextPost);
      }).error(reject);
    }
    return executeHooks(0, postHooks, doc, reject, nextPost);
  }

  var nextPre = function() {
    tryCatch(executeMain, function (err) {
      return reject(err);
    });
  }
  return executeHooks(0, preHooks, doc, reject, nextPre);
}
util.hook = hook;

function executeHooks(hookIndex, hooks, doc, reject, next) {
  if (hookIndex < hooks.length) {
    if (hooks[hookIndex].length === 1) {
      hooks[hookIndex].call(doc, function(err) {
        if (err) return reject(err);
        executeHooks(hookIndex+1, hooks, doc, reject, next)
      });
    }
    else {
      hooks[hookIndex].call(doc);
      executeHooks(hookIndex+1, hooks, doc, reject, next)
    }
  }
  else {
    next();
  }
}

function loopKeys(obj, fn) {
  if (isPlainObject(obj)) {
    var keys = Object.keys(obj);
    var result;
    for(var i=0; i<keys.length; i++) {
      result = fn(obj, keys[i]);
      if (result === false) return;
    }
  }
}
util.loopKeys = loopKeys;

function changeProto(object, newProto) {
  object.__proto__ = newProto;
}
util.changeProto = changeProto;

function recurse(key, joins, modelTo, all, done) {
  return (util.isPlainObject(modelTo) && modelTo.hasOwnProperty(key))
    || ((all === true) && (done[joins[key].model.getTableName()] !== true))
}
util.recurse = recurse;

function bindEmitter(self) {
  util.loopKeys(EventEmitter.prototype, function(emitter, key) {
    var fn = emitter[key];
    if (typeof fn === 'function') {
      self[key] = function() {
        var args = new Array(arguments.length);
        for(var i = 0; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        fn.apply(self, args);
      }
    }
  });
}
util.bindEmitter = bindEmitter;

function mergeOptions(options, newOptions) {
  if (util.isPlainObject(newOptions)) {
    if (!options) {
      options = {};
    }
    var localOptions = {};
    localOptions.enforce_missing = (newOptions.enforce_missing != null) ? newOptions.enforce_missing : options.enforce_missing;
    localOptions.enforce_type = (newOptions.enforce_type != null) ? newOptions.enforce_type : options.enforce_type;
    localOptions.enforce_extra = (newOptions.enforce_extra != null) ? newOptions.enforce_extra : options.enforce_extra;
    return localOptions;
  }
  return options;
}
util.mergeOptions = mergeOptions;

function extractPrimaryKey(oldValue, newValue, primaryKey) {
  var primaryKey;
  if (oldValue !== null) {
    return oldValue[primaryKey];
  }
  if (newValue !== null) {
    return newValue[primaryKey];
  }
  return undefined;
}
util.extractPrimaryKey = extractPrimaryKey;


function undefinedField(prefix) {
  throw new Errors.ValidationError("Value for "+prefix+" must be defined.")
}
util.undefinedField = undefinedField;


var vowels = {a: true, e: true, i: true, o: true, u: true};
function strictType(prefix, expected) {
  if ((expected.length > 0) && (vowels[expected[0]])) {
    throw new Errors.ValidationError("Value for "+prefix+" must be an "+expected+".")
  }
  throw new Errors.ValidationError("Value for "+prefix+" must be a "+expected+".")
}
util.strictType = strictType;


function extraField(prefix, key) {
  if (prefix === '') {
    throw new Errors.ValidationError("Extra field `"+key+"` not allowed.")
  }
  throw new Errors.ValidationError("Extra field `"+key+"` in "+prefix+" not allowed.")
}
util.extraField = extraField;


function looseType(prefix, expected) {
  if ((expected.length > 0) && (vowels[expected[0]])) {
    throw new Errors.ValidationError("Value for "+prefix+" must be an "+expected+" or null.")
  }
  throw new Errors.ValidationError("Value for "+prefix+" must be a "+expected+" or null.")
}
util.looseType = looseType;


function pseudoTypeError(type, missingField, prefix) {
  throw new Errors.ValidationError("The raw "+type+" object for "+prefix+" is missing the required field "+missingField+".")
}
util.pseudoTypeError = pseudoTypeError;


// Return true if doc is undefined, else false
function validateIfUndefined(value, prefix, type, options) {
  if (value === undefined) {
    if (options.enforce_missing === true) {
      undefinedField(prefix);
    }
    return true;
  }
  return false;
}
util.validateIfUndefined = validateIfUndefined;

function toArray(args) {
    return Array.prototype.slice.call(args);
}
util.toArray = toArray;

module.exports = util;


/***/ }),

/***/ "../node_modules/validator/validator.js":
/*!**********************************************!*\
  !*** ../node_modules/validator/validator.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Copyright (c) 2014 Chris O'Hara <cohara87@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function (name, definition) {
    if (true) {
        module.exports = definition();
    } else {}
})('validator', function (validator) {

    'use strict';

    validator = { version: '3.34.0' };

    var emailAddress = /((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))/;
    var displayName = /([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~\.]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~\.]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\s)*/;

    var email = new RegExp('^' + emailAddress.source + '$', 'i');
    var emailWithDisplayName = new RegExp('^' + displayName.source + '<' + emailAddress.source + '>$', 'i');

    var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

    var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/
      , isbn13Maybe = /^(?:[0-9]{13})$/;

    var ipv4Maybe = /^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/
      , ipv6Block = /^[0-9A-F]{1,4}$/i;

    var uuid = {
        '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      , '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      , '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      , all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };

    var alpha = /^[a-zA-Z]+$/
      , alphanumeric = /^[a-zA-Z0-9]+$/
      , numeric = /^[-+]?[0-9]+$/
      , int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/
      , float = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/
      , hexadecimal = /^[0-9a-fA-F]+$/
      , hexcolor = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

    var ascii = /^[\x00-\x7F]+$/
      , multibyte = /[^\x00-\x7F]/
      , fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/
      , halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

    var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

    var base64 = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/;

    var phones = {
      'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
      'en-ZA': /^(\+?27|0)\d{9}$/,
      'en-AU': /^(\+?61|0)4\d{8}$/,
      'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
      'fr-FR': /^(\+?33|0)[67]\d{8}$/,
      'pt-PT': /^(\+351)?9[1236]\d{7}$/,
      'el-GR' : /^(\+30)?((2\d{9})|(69\d{8}))$/
    };

    validator.extend = function (name, fn) {
        validator[name] = function () {
            var args = Array.prototype.slice.call(arguments);
            args[0] = validator.toString(args[0]);
            return fn.apply(validator, args);
        };
    };

    //Right before exporting the validator object, pass each of the builtins
    //through extend() so that their first argument is coerced to a string
    validator.init = function () {
        for (var name in validator) {
            if (typeof validator[name] !== 'function' || name === 'toString' ||
                    name === 'toDate' || name === 'extend' || name === 'init') {
                continue;
            }
            validator.extend(name, validator[name]);
        }
    };

    validator.toString = function (input) {
        if (typeof input === 'object' && input !== null && input.toString) {
            input = input.toString();
        } else if (input === null || typeof input === 'undefined' || (isNaN(input) && !input.length)) {
            input = '';
        } else if (typeof input !== 'string') {
            input += '';
        }
        return input;
    };

    validator.toDate = function (date) {
        if (Object.prototype.toString.call(date) === '[object Date]') {
            return date;
        }
        date = Date.parse(date);
        return !isNaN(date) ? new Date(date) : null;
    };

    validator.toFloat = function (str) {
        return parseFloat(str);
    };

    validator.toInt = function (str, radix) {
        return parseInt(str, radix || 10);
    };

    validator.toBoolean = function (str, strict) {
        if (strict) {
            return str === '1' || str === 'true';
        }
        return str !== '0' && str !== 'false' && str !== '';
    };

    validator.equals = function (str, comparison) {
        return str === validator.toString(comparison);
    };

    validator.contains = function (str, elem) {
        return str.indexOf(validator.toString(elem)) >= 0;
    };

    validator.matches = function (str, pattern, modifiers) {
        if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
            pattern = new RegExp(pattern, modifiers);
        }
        return pattern.test(str);
    };

    var default_email_options = {
        allow_display_name: false
    };

    validator.isEmail = function (str, options) {
        options = merge(options, default_email_options);

        return email.test(str) || (options.allow_display_name === true && emailWithDisplayName.test(str));
    };

    var default_url_options = {
        protocols: [ 'http', 'https', 'ftp' ]
      , require_tld: true
      , require_protocol: false
      , allow_underscores: false
      , allow_trailing_dot: false
      , allow_protocol_relative_urls: false
    };

    validator.isURL = function (url, options) {
        if (!url || url.length >= 2083) {
            return false;
        }
        if (url.indexOf('mailto:') === 0) {
            return false;
        }
        options = merge(options, default_url_options);
        var protocol, user, pass, auth, host, hostname, port,
            port_str, path, query, hash, split;
        split = url.split('://');
        if (split.length > 1) {
            protocol = split.shift();
            if (options.protocols.indexOf(protocol) === -1) {
                return false;
            }
        } else if (options.require_protocol) {
            return false;
        }  else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
            split[0] = url.substr(2);
        }
        url = split.join('://');
        split = url.split('#');
        url = split.shift();
        hash = split.join('#');
        if (hash && /\s/.test(hash)) {
            return false;
        }
        split = url.split('?');
        url = split.shift();
        query = split.join('?');
        if (query && /\s/.test(query)) {
            return false;
        }

        split = url.split('/');
        url = split.shift();
        path = split.join('/');
        if (path && /\s/.test(path)) {
            return false;
        }
        split = url.split('@');
        if (split.length > 1) {
            auth = split.shift();
            if (auth.indexOf(':') >= 0) {
                auth = auth.split(':');
                user = auth.shift();
                if (!/^\S+$/.test(user)) {
                    return false;
                }
                pass = auth.join(':');
                if (!/^\S*$/.test(user)) {
                    return false;
                }
            }
        }
        hostname = split.join('@');
        split = hostname.split(':');
        host = split.shift();
        if (split.length) {
            port_str = split.join(':');
            port = parseInt(port_str, 10);
            if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
                return false;
            }
        }
        if (!validator.isIP(host) && !validator.isFQDN(host, options) &&
                host !== 'localhost') {
            return false;
        }
        if (options.host_whitelist &&
                options.host_whitelist.indexOf(host) === -1) {
            return false;
        }
        if (options.host_blacklist &&
                options.host_blacklist.indexOf(host) !== -1) {
            return false;
        }
        return true;
    };

    validator.isIP = function (str, version) {
        version = validator.toString(version);
        if (!version) {
            return validator.isIP(str, 4) || validator.isIP(str, 6);
        } else if (version === '4') {
            if (!ipv4Maybe.test(str)) {
                return false;
            }
            var parts = str.split('.').sort(function (a, b) {
                return a - b;
            });
            return parts[3] <= 255;
        } else if (version === '6') {
            var blocks = str.split(':');
            var foundOmissionBlock = false; // marker to indicate ::

            if (blocks.length > 8)
                return false;

            // initial or final ::
            if (str === '::') {
                return true;
            } else if (str.substr(0, 2) === '::') {
                blocks.shift();
                blocks.shift();
                foundOmissionBlock = true;
            } else if (str.substr(str.length - 2) === '::') {
                blocks.pop();
                blocks.pop();
                foundOmissionBlock = true;
            }

            for (var i = 0; i < blocks.length; ++i) {
                // test for a :: which can not be at the string start/end
                // since those cases have been handled above
                if (blocks[i] === '' && i > 0 && i < blocks.length -1) {
                    if (foundOmissionBlock)
                        return false; // multiple :: in address
                    foundOmissionBlock = true;
                } else if (!ipv6Block.test(blocks[i])) {
                    return false;
                }
            }

            if (foundOmissionBlock) {
                return blocks.length >= 1;
            } else {
                return blocks.length === 8;
            }
        }
        return false;
    };

    var default_fqdn_options = {
        require_tld: true
      , allow_underscores: false
      , allow_trailing_dot: false
    };

    validator.isFQDN = function (str, options) {
        options = merge(options, default_fqdn_options);

        /* Remove the optional trailing dot before checking validity */
        if (options.allow_trailing_dot && str[str.length - 1] === '.') {
            str = str.substring(0, str.length - 1);
        }
        var parts = str.split('.');
        if (options.require_tld) {
            var tld = parts.pop();
            if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
                return false;
            }
        }
        for (var part, i = 0; i < parts.length; i++) {
            part = parts[i];
            if (options.allow_underscores) {
                if (part.indexOf('__') >= 0) {
                    return false;
                }
                part = part.replace(/_/g, '');
            }
            if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
                return false;
            }
            if (part[0] === '-' || part[part.length - 1] === '-' ||
                    part.indexOf('---') >= 0) {
                return false;
            }
        }
        return true;
    };

    validator.isAlpha = function (str) {
        return alpha.test(str);
    };

    validator.isAlphanumeric = function (str) {
        return alphanumeric.test(str);
    };

    validator.isNumeric = function (str) {
        return numeric.test(str);
    };

    validator.isHexadecimal = function (str) {
        return hexadecimal.test(str);
    };

    validator.isHexColor = function (str) {
        return hexcolor.test(str);
    };

    validator.isLowercase = function (str) {
        return str === str.toLowerCase();
    };

    validator.isUppercase = function (str) {
        return str === str.toUpperCase();
    };

    validator.isInt = function (str) {
        return int.test(str);
    };

    validator.isFloat = function (str) {
        return str !== '' && float.test(str);
    };

    validator.isDivisibleBy = function (str, num) {
        return validator.toFloat(str) % validator.toInt(num) === 0;
    };

    validator.isNull = function (str) {
        return str.length === 0;
    };

    validator.isLength = function (str, min, max) {
        var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
        var len = str.length - surrogatePairs.length;
        return len >= min && (typeof max === 'undefined' || len <= max);
    };

    validator.isByteLength = function (str, min, max) {
        return str.length >= min && (typeof max === 'undefined' || str.length <= max);
    };

    validator.isUUID = function (str, version) {
        var pattern = uuid[version ? version : 'all'];
        return pattern && pattern.test(str);
    };

    validator.isDate = function (str) {
        return !isNaN(Date.parse(str));
    };

    validator.isAfter = function (str, date) {
        var comparison = validator.toDate(date || new Date())
          , original = validator.toDate(str);
        return !!(original && comparison && original > comparison);
    };

    validator.isBefore = function (str, date) {
        var comparison = validator.toDate(date || new Date())
          , original = validator.toDate(str);
        return original && comparison && original < comparison;
    };

    validator.isIn = function (str, options) {
        var i;
        if (Object.prototype.toString.call(options) === '[object Array]') {
            var array = [];
            for (i in options) {
                array[i] = validator.toString(options[i]);
            }
            return array.indexOf(str) >= 0;
        } else if (typeof options === 'object') {
            return options.hasOwnProperty(str);
        } else if (options && typeof options.indexOf === 'function') {
            return options.indexOf(str) >= 0;
        }
        return false;
    };

    validator.isCreditCard = function (str) {
        var sanitized = str.replace(/[^0-9]+/g, '');
        if (!creditCard.test(sanitized)) {
            return false;
        }
        var sum = 0, digit, tmpNum, shouldDouble;
        for (var i = sanitized.length - 1; i >= 0; i--) {
            digit = sanitized.substring(i, (i + 1));
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += ((tmpNum % 10) + 1);
                } else {
                    sum += tmpNum;
                }
            } else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }
        return !!((sum % 10) === 0 ? sanitized : false);
    };

    validator.isISIN = function (str) {
        if (!isin.test(str)) {
            return false;
        }
        
        var checksumStr = str.replace(/[A-Z]/g, function(character) {
            return parseInt(character, 36);
        });
        
        var sum = 0, digit, tmpNum, shouldDouble = true;
        for (var i = checksumStr.length - 2; i >= 0; i--) {
            digit = checksumStr.substring(i, (i + 1));
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += tmpNum + 1;
                } else {
                    sum += tmpNum;
                }
            } else {
                
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }
        
        return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
    };

    validator.isISBN = function (str, version) {
        version = validator.toString(version);
        if (!version) {
            return validator.isISBN(str, 10) || validator.isISBN(str, 13);
        }
        var sanitized = str.replace(/[\s-]+/g, '')
          , checksum = 0, i;
        if (version === '10') {
            if (!isbn10Maybe.test(sanitized)) {
                return false;
            }
            for (i = 0; i < 9; i++) {
                checksum += (i + 1) * sanitized.charAt(i);
            }
            if (sanitized.charAt(9) === 'X') {
                checksum += 10 * 10;
            } else {
                checksum += 10 * sanitized.charAt(9);
            }
            if ((checksum % 11) === 0) {
                return !!sanitized;
            }
        } else  if (version === '13') {
            if (!isbn13Maybe.test(sanitized)) {
                return false;
            }
            var factor = [ 1, 3 ];
            for (i = 0; i < 12; i++) {
                checksum += factor[i % 2] * sanitized.charAt(i);
            }
            if (sanitized.charAt(12) - ((10 - (checksum % 10)) % 10) === 0) {
                return !!sanitized;
            }
        }
        return false;
    };

    validator.isMobilePhone = function(str, locale) {
        if (locale in phones) {
            return phones[locale].test(str);
        }
        return false;
    };

    var default_currency_options = {
        symbol: '$'
      , require_symbol: false
      , allow_space_after_symbol: false
      , symbol_after_digits: false
      , allow_negatives: true
      , parens_for_negatives: false
      , negative_sign_before_digits: false
      , negative_sign_after_digits: false
      , allow_negative_sign_placeholder: false
      , thousands_separator: ','
      , decimal_separator: '.'
      , allow_space_after_digits: false
    };

    validator.isCurrency = function (str, options) {
        options = merge(options, default_currency_options);

        return currencyRegex(options).test(str);
    };

    validator.isJSON = function (str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    };

    validator.isMultibyte = function (str) {
        return multibyte.test(str);
    };

    validator.isAscii = function (str) {
        return ascii.test(str);
    };

    validator.isFullWidth = function (str) {
        return fullWidth.test(str);
    };

    validator.isHalfWidth = function (str) {
        return halfWidth.test(str);
    };

    validator.isVariableWidth = function (str) {
        return fullWidth.test(str) && halfWidth.test(str);
    };

    validator.isSurrogatePair = function (str) {
        return surrogatePair.test(str);
    };

    validator.isBase64 = function (str) {
        return base64.test(str);
    };

    validator.isMongoId = function (str) {
        return validator.isHexadecimal(str) && str.length === 24;
    };

    validator.ltrim = function (str, chars) {
        var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
        return str.replace(pattern, '');
    };

    validator.rtrim = function (str, chars) {
        var pattern = chars ? new RegExp('[' + chars + ']+$', 'g') : /\s+$/g;
        return str.replace(pattern, '');
    };

    validator.trim = function (str, chars) {
        var pattern = chars ? new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'g') : /^\s+|\s+$/g;
        return str.replace(pattern, '');
    };

    validator.escape = function (str) {
        return (str.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\//g, '&#x2F;')
            .replace(/\`/g, '&#96;'));
    };

    validator.stripLow = function (str, keep_new_lines) {
        var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
        return validator.blacklist(str, chars);
    };

    validator.whitelist = function (str, chars) {
        return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
    };

    validator.blacklist = function (str, chars) {
        return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
    };

    var default_normalize_email_options = {
        lowercase: true
    };

    validator.normalizeEmail = function (email, options) {
        options = merge(options, default_normalize_email_options);
        if (!validator.isEmail(email)) {
            return false;
        }
        var parts = email.split('@', 2);
        parts[1] = parts[1].toLowerCase();
        if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
            parts[0] = parts[0].toLowerCase().replace(/\./g, '');
            if (parts[0][0] === '+') {
                return false;
            }
            parts[0] = parts[0].split('+')[0];
            parts[1] = 'gmail.com';
        } else if (options.lowercase) {
            parts[0] = parts[0].toLowerCase();
        }
        return parts.join('@');
    };

    function merge(obj, defaults) {
        obj = obj || {};
        for (var key in defaults) {
            if (typeof obj[key] === 'undefined') {
                obj[key] = defaults[key];
            }
        }
        return obj;
    }

    function currencyRegex(options) {
        var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?')
            , negative = '-?'
            , whole_dollar_amount_without_sep = '[1-9]\\d*'
            , whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*'
            , valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep]
            , whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?'
            , decimal_amount = '(\\' + options.decimal_separator + '\\d{2})?';
        var pattern = whole_dollar_amount + decimal_amount;
        // default is negative sign before symbol, but there are two other options (besides parens)
        if (options.allow_negatives && !options.parens_for_negatives) {
            if (options.negative_sign_after_digits) {
                pattern += negative;
            }
            else if (options.negative_sign_before_digits) {
                pattern = negative + pattern;
            }
        }
        // South African Rand, for example, uses R 123 (space) and R-123 (no space)
        if (options.allow_negative_sign_placeholder) {
            pattern = '( (?!\\-))?' + pattern;
        }
        else if (options.allow_space_after_symbol) {
            pattern = ' ?' + pattern;
        }
        else if (options.allow_space_after_digits) {
            pattern += '( (?!$))?';
        }
        if (options.symbol_after_digits) {
            pattern += symbol;
        } else {
            pattern = symbol + pattern;
        }
        if (options.allow_negatives) {
            if (options.parens_for_negatives) {
                pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
            }
            else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
                pattern = negative + pattern;
            }
        }
        return new RegExp(
            '^' +
            // ensure there's a dollar and/or decimal amount, and that it doesn't start with a space or a negative sign followed by a space
            '(?!-? )(?=.*\\d)' +
            pattern +
            '$'
        );
    }

    validator.init();

    return validator;

});


/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = exports.Template = undefined;

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var API_BASE = 'http://0.0.0.0:9999/api';

var api = function api(path, options) {
  return fetch(path, options).then(function (res) {
    if (res.status > 200) {
      throw { msg: 'error' };
    }
    return res;
  });
};

var API = {
  get: function get(path) {
    return api('' + API_BASE + path);
  },
  post: function post(path, data) {
    // eslint-disabel-line
    return api('' + API_BASE + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: (0, _stringify2.default)(data)
    });
  },
  patch: function patch(path, data) {
    // eslint-disabel-line
    return api('' + API_BASE + path, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: (0, _stringify2.default)(data)
    });
  },
  delete: function _delete(path) {
    // eslint-disabel-line
    return api('' + API_BASE + path, {
      method: 'DELETE'
    });
  }
};

var Template = exports.Template = {
  getAll: function getAll() {
    return API.get('/templates');
  },
  get: function get(id) {
    return API.get('/templates/' + id);
  },
  getBy: function getBy(by, value) {
    return API.get('/templates/' + by + '/' + value);
  },
  deleteAll: function deleteAll() {
    return API.delete('/templates');
  },
  create: function create(data) {
    return API.post('/templates', data);
  },
  update: function update(data) {
    return API.patch('/templates', data);
  }
};

var Page = exports.Page = {
  getAll: function getAll() {
    return API.get('/pages');
  },
  get: function get(id) {
    return API.get('/pages/' + id);
  },
  getBy: function getBy(by, value) {
    return API.get('/pages/' + by + '/' + value);
  },
  deleteAll: function deleteAll() {
    return API.delete('/pages');
  },
  create: function create(data) {
    return API.post('/pages', data);
  },
  update: function update(data) {
    return API.patch('/pages', data);
  }
};

var _default = API;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(API_BASE, 'API_BASE', '/Users/m3000/repos/rethink-draftjs/frontend/src/api/index.js');
  reactHotLoader.register(api, 'api', '/Users/m3000/repos/rethink-draftjs/frontend/src/api/index.js');
  reactHotLoader.register(API, 'API', '/Users/m3000/repos/rethink-draftjs/frontend/src/api/index.js');
  reactHotLoader.register(Template, 'Template', '/Users/m3000/repos/rethink-draftjs/frontend/src/api/index.js');
  reactHotLoader.register(Page, 'Page', '/Users/m3000/repos/rethink-draftjs/frontend/src/api/index.js');
  reactHotLoader.register(_default, 'default', '/Users/m3000/repos/rethink-draftjs/frontend/src/api/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../ssr3000/node_modules/webpack/buildin/module.js */ "../../ssr3000/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader");

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Blank = __webpack_require__(/*! ./Blank */ "./src/components/Blank.js");

var _Blank2 = _interopRequireDefault(_Blank);

var _EditContext = __webpack_require__(/*! ./EditContext */ "./src/components/EditContext.js");

var _PageList = __webpack_require__(/*! ./PageList */ "./src/components/PageList.js");

var _PageList2 = _interopRequireDefault(_PageList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var App = function App(props) {
  return (// eslint-disable-line
    _react2.default.createElement(
      _EditContext.EditContext.Provider,
      { value: props.edit },
      _react2.default.createElement(_Blank2.default, { id: 'asd' }),
      _react2.default.createElement(_PageList2.default, null)
    )
  );
};

App.propTypes = {
  edit: _propTypes2.default.object.isRequired
};

var _default = (0, _reactHotLoader.hot)(module)(App);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', '/Users/m3000/repos/rethink-draftjs/frontend/src/components/App.js');
  reactHotLoader.register(_default, 'default', '/Users/m3000/repos/rethink-draftjs/frontend/src/components/App.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../ssr3000/node_modules/webpack/buildin/module.js */ "../../ssr3000/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Blank.js":
/*!*********************************!*\
  !*** ./src/components/Blank.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _template = __webpack_require__(/*! ./template */ "./src/components/template.js");

var _template2 = _interopRequireDefault(_template);

var _api = __webpack_require__(/*! ../api */ "./src/api/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var blank = {
  name: 'Blank',
  values: [{
    key: 'abstract',
    value: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  }, {
    key: 'title',
    value: 'New Blank Template'
  }, {
    key: 'tel',
    value: '+49 30 123 456 78'
  }]
};

var Blank = (_dec = (0, _template2.default)(blank, { receiveUpdates: false }), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Blank, _Component);

  function Blank() {
    (0, _classCallCheck3.default)(this, Blank);
    return (0, _possibleConstructorReturn3.default)(this, (Blank.__proto__ || (0, _getPrototypeOf2.default)(Blank)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blank, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          values = _props.values,
          remote = _props.remote;

      console.log(remote);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onMouseDown: function onMouseDown() {
              _api.Page.create((0, _extends3.default)({}, blank, {
                values: (0, _keys2.default)(values).map(function (key) {
                  return { key: key, value: values[key] };
                })
              }));
            } },
          'create page'
        ),
        _react2.default.createElement(
          'h1',
          null,
          values.title
        ),
        _react2.default.createElement(
          'p',
          null,
          values.abstract
        ),
        _react2.default.createElement(
          'p',
          null,
          values.tel
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var data, parsed;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('props', props);
                _context.next = 3;
                return _api.Template.create(blank);

              case 3:
                data = _context.sent;
                _context.next = 6;
                return data.json();

              case 6:
                parsed = _context.sent;
                return _context.abrupt('return', {
                  test: parsed
                });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }() // eslint-disable-line

  }]);
  return Blank;
}(_react.Component), _class2.propTypes = {
  values: _propTypes2.default.object.isRequired,
  edit: _propTypes2.default.object.isRequired,
  remote: _propTypes2.default.object.isRequired
}, _temp)) || _class);
var _default = Blank;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(blank, 'blank', '/Users/m3000/repos/rethink-draftjs/frontend/src/components/Blank.js');
  reactHotLoader.register(Blank, 'Blank', '/Users/m3000/repos/rethink-draftjs/frontend/src/components/Blank.js');
  reactHotLoader.register(_default, 'default', '/Users/m3000/repos/rethink-draftjs/frontend/src/components/Blank.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../ssr3000/node_modules/webpack/buildin/module.js */ "../../ssr3000/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/EditContext.js":
/*!***************************************!*\
  !*** ./src/components/EditContext.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditContext = exports.edit = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var edit = exports.edit = function edit() {
  var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var snapshot = arguments[1];

  var initialActions = [];
  if (snapshot) {
    return snapshot;
  }
  return {
    initialActions: initialActions,
    isServer: isServer,
    addAction: function addAction(action) {
      initialActions.push(action);
    },
    inits: {}
  };
};

var EditContext = exports.EditContext = _react2.default.createContext(edit());
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(edit, 'edit', '/Users/m3000/repos/rethink-draftjs/frontend/src/components/EditContext.js');
  reactHotLoader.register(EditContext, 'EditContext', '/Users/m3000/repos/rethink-draftjs/frontend/src/components/EditContext.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../ssr3000/node_modules/webpack/buildin/module.js */ "../../ssr3000/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/PageList.js":
/*!************************************!*\
  !*** ./src/components/PageList.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(/*! ../api */ "./src/api/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var PageList = function (_React$Component) {
  (0, _inherits3.default)(PageList, _React$Component);

  function PageList() {
    (0, _classCallCheck3.default)(this, PageList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PageList.__proto__ || (0, _getPrototypeOf2.default)(PageList)).call(this));

    _this.state = {
      pages: []
    };
    return _this;
  }

  (0, _createClass3.default)(PageList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _api.Page.getAll().then(function (pages) {
        return pages.json();
      }).then(function (pages) {
        _this2.setState({
          pages: pages.pages
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var pages = this.state.pages;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'ul',
          null,
          pages.map(function (page) {
            return _react2.default.createElement(
              'li',
              { key: page.id },
              _react2.default.createElement(
                'h2',
                null,
                page.title,
                ' (',
                page.type || page.name,
                ')'
              )
            );
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return PageList;
}(_react2.default.Component);

var _default = PageList;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageList, 'PageList', '/Users/m3000/repos/rethink-draftjs/frontend/src/components/PageList.js');
  reactHotLoader.register(_default, 'default', '/Users/m3000/repos/rethink-draftjs/frontend/src/components/PageList.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../ssr3000/node_modules/webpack/buildin/module.js */ "../../ssr3000/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/template.js":
/*!************************************!*\
  !*** ./src/components/template.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = template;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _api = __webpack_require__(/*! ../api */ "./src/api/index.js");

var _EditContext = __webpack_require__(/*! ./EditContext */ "./src/components/EditContext.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function template(data, _ref) {
  var _ref$receiveUpdates = _ref.receiveUpdates,
      receiveUpdates = _ref$receiveUpdates === undefined ? true : _ref$receiveUpdates;

  return function (Wrapped) {
    var _class, _temp;

    var name = Wrapped.displayName || Wrapped.name;
    var Template = (_temp = _class = function (_Component) {
      (0, _inherits3.default)(Template, _Component);

      function Template(props) {
        (0, _classCallCheck3.default)(this, Template);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Template.__proto__ || (0, _getPrototypeOf2.default)(Template)).call(this));

        _this.handleUpdate = function () {
          _api.Template.update((0, _extends4.default)({}, data, {
            id: _this.state.id
          }));
        };

        var remote = null;
        if (Wrapped.getInitialProps) {
          if (!props.edit.inits[name]) {
            props.edit.inits[name] = {
              data: null,
              init: Wrapped.getInitialProps(props).catch(function (err) {
                return console.log('getInitialProps Error:', err);
              }).then(function (data) {
                props.edit.inits[name].data = data;
              })
            };
          } else {
            if (props.edit.inits[name].data) {
              remote = props.edit.inits[name].data;
            }
          }
        }

        _this.state = {
          id: null,
          hasChanges: false,
          values: data.values.reduce(function (acc, v) {
            return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, v.key, v.value));
          }, {}),
          remote: remote
        };
        return _this;
      }

      (0, _createClass3.default)(Template, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var edit = this.props.edit;
          // const action = templateApi.create(data).then(async (res) => {
          //   const json = await res.json();
          //   if (!receiveUpdates) return;
          //   const {
          //     template: resTemplate,
          //     hasChanges,
          //   } = json;
          //   this.setState({
          //     id: resTemplate.id,
          //     values: resTemplate.values.reduce((acc, v) => ({ ...acc, [v.key]: v.value }), {}),
          //     hasChanges,
          //   });
          // });
          // edit.addAction(action);
        }
      }, {
        key: 'render',
        value: function render() {
          var hasChanges = this.state.hasChanges;

          return _react2.default.createElement(
            'div',
            null,
            hasChanges && _react2.default.createElement(
              'div',
              null,
              'The remote version of this template doesn\'t match. You can sync the remote with your local version. ',
              _react2.default.createElement(
                'a',
                { href: '#' },
                'more information'
              ),
              '\xA0',
              _react2.default.createElement(
                'button',
                { onMouseDown: this.handleUpdate },
                'Update Template'
              )
            ),
            _react2.default.createElement(Wrapped, (0, _extends4.default)({}, this.props, this.state))
          );
        }
      }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
          this[key] = eval(code);
        }
      }]);
      return Template;
    }(_react.Component), _class.propTypes = {
      edit: _propTypes2.default.object.isRequired
    }, _temp);


    Template.displayName = 'Template(' + name + ')';
    return function (props) {
      return _react2.default.createElement(
        _EditContext.EditContext.Consumer,
        null,
        function (edit) {
          return _react2.default.createElement(Template, (0, _extends4.default)({}, props, { edit: edit }));
        }
      );
    };
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(template, 'template', '/Users/m3000/repos/rethink-draftjs/frontend/src/components/template.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../ssr3000/node_modules/webpack/buildin/module.js */ "../../ssr3000/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/serverMiddleware/index.ejs":
/*!****************************************!*\
  !*** ./src/serverMiddleware/index.ejs ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    <title>SSR3000 App</title>\n  </head>\n  <body>\n    <div id=\"root\"><%= app %></div>\n    <script>window.SNAPSHOT = <%= JSON.stringify(snapshot) %>;</script>\n    <% chunks.js.forEach((chunk) => { %><script src=\"<%= chunk %>\"></script><% }); %>\n  </body>\n</html>"

/***/ }),

/***/ "./src/serverMiddleware/index.js":
/*!***************************************!*\
  !*** ./src/serverMiddleware/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _express = __webpack_require__(/*! express */ "express");

var _lodash = __webpack_require__(/*! lodash.template */ "lodash.template");

var _lodash2 = _interopRequireDefault(_lodash);

var _rethinkDraftJs = __webpack_require__(/*! rethink-draft-js */ "../lib/index.js");

var _rethinkDraftJs2 = _interopRequireDefault(_rethinkDraftJs);

var _index = __webpack_require__(/*! ./index.ejs */ "./src/serverMiddleware/index.ejs");

var _index2 = _interopRequireDefault(_index);

var _App = __webpack_require__(/*! ../components/App */ "./src/components/App.js");

var _App2 = _interopRequireDefault(_App);

var _EditContext = __webpack_require__(/*! ../components/EditContext */ "./src/components/EditContext.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var clearRequire = __webpack_require__(/*! clear-require */ "clear-require");

var template = (0, _lodash2.default)(_index2.default);

var _default = function _default(chunks) {
  var router = new _express.Router();
  router.use('/favicon.ico', function (req, res) {
    res.status(200).send('lol');
  });
  router.use(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //const rethink = require('rethink-draft-js');
              (0, _rethinkDraftJs2.default)()(req, res, next);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  router.use(function (req, res) {
    var editInstance = (0, _EditContext.edit)(true);

    (0, _server.renderToString)(_react2.default.createElement(_App2.default, { edit: editInstance }));
    //console.log('app rendered', editInstance);
    var all = (0, _keys2.default)(editInstance.inits).map(function (key) {
      return editInstance.inits[key].init;
    });
    _promise2.default.all(all).then(function (test) {
      res.status(200).send(template({
        chunks: chunks,
        app: (0, _server.renderToString)(_react2.default.createElement(_App2.default, { edit: editInstance })),
        snapshot: editInstance
      }));
    });
    console.log('send response');
  });
  return router;
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(template, 'template', '/Users/m3000/repos/rethink-draftjs/frontend/src/serverMiddleware/index.js');
  reactHotLoader.register(_default, 'default', '/Users/m3000/repos/rethink-draftjs/frontend/src/serverMiddleware/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../ssr3000/node_modules/webpack/buildin/module.js */ "../../ssr3000/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/serverMiddleware/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/m3000/repos/rethink-draftjs/frontend/src/serverMiddleware/index.js */"./src/serverMiddleware/index.js");


/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/core-js/object/keys":
/*!****************************************************!*\
  !*** external "babel-runtime/core-js/object/keys" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/*!************************************************!*\
  !*** external "babel-runtime/core-js/promise" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/defineProperty":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/defineProperty" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/objectWithoutProperties":
/*!****************************************************************!*\
  !*** external "babel-runtime/helpers/objectWithoutProperties" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "clear-require":
/*!********************************!*\
  !*** external "clear-require" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clear-require");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash.template":
/*!**********************************!*\
  !*** external "lodash.template" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.template");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

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

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "vary":
/*!***********************!*\
  !*** external "vary" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vary");

/***/ })

/******/ });