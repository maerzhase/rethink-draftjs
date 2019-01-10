'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _Error = require('./Error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = require('../models/Value');

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