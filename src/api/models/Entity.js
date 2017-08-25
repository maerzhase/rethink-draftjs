// import cypher from 'cypher-query';
import thinky from '../db';

const Entity = thinky.createModel('Entity', {
  id: thinky.type.string(),
  pageId: thinky.type.string(),
  data: thinky.type.object(),
  mutability: thinky.type.string(),
  type: thinky.type.string(),
});

module.exports = Entity;

const Page = require('./Page');

Entity.belongsTo(Page, 'page', 'pageId', 'id');

