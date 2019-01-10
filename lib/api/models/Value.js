'use strict';

var _db = require('../db');

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

var Template = require('./Template');
Value.belongsTo(Template, 'temlate', 'templateId', 'id');