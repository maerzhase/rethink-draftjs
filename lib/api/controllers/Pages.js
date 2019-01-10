'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _deepDiff = require('deep-diff');

var _deepDiff2 = _interopRequireDefault(_deepDiff);

var _Error = require('./Error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = require('../models/Page');
var Value = require('../models/Value');
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