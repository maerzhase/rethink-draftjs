'use strict';

var _db = require('../db');

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