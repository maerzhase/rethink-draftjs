// import cypher from 'cypher-query';
import thinky from '../db';

const Page = thinky.createModel('Page', {
  id: thinky.type.string(),
  // title: thinky.type.string(),
  type: thinky.type.string(),
  title: thinky.type.virtual().default(function () {
    return (this.values && this.values.find(v => v.key === 'title'))
      ? this.values.find(v => v.key === 'title').value
      : 'No title found';
  }),
});

module.exports = Page;

// const Value = require('./Value');
// Page.hasMany(Value, 'values', 'id', 'pageId');
