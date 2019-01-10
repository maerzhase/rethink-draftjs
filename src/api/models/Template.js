import thinky from '../db';

const Template =  thinky.createModel('Template', {
    id: thinky.type.string(),
    name: thinky.type.string(),
    title: thinky.type.virtual().default(function () {
      return this.values
        ? this.values.find(v => v.key === 'title').value
        : 'No title found';
    }),
  });

}

module.exports = Template;

const Value = require('./Value');
Template.hasMany(Value, 'values', 'id', 'templateId');
