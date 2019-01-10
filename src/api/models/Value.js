import thinky from '../db';

const Value =  thinky.createModel('Value', {
    id: thinky.type.string(),
    templateId: thinky.type.string(),
    key: thinky.type.string(),
    value: thinky.type.string(),
  });
}

module.exports = Value;

const Template = require('./Template');
Value.belongsTo(Template, 'template', 'templateId', 'id');
