// import cypher from 'cypher-query';
import thinky from '../db';

const Page = thinky.createModel('Page', {
  id: thinky.type.string(),
  title: thinky.type.string(),
  type: thinky.type.string(),
});

module.exports = Page;

const Block = require('./Block');
const Entity = require('./Entity');

Page.hasMany(Block, 'blocks', 'id', 'pageId');
Page.hasMany(Entity, 'entities', 'id', 'pageId');

