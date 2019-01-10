'use strict';

var _db = require('../db');

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

var Value = require('./Value');
Template.hasMany(Value, 'values', 'id', 'templateId');