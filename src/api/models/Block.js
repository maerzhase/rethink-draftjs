// import cypher from 'cypher-query';
import thinky from '../db';

const Block = thinky.createModel('Block', {
  id: thinky.type.string(),
  pageId: thinky.type.string(),
  text: thinky.type.string(),
  type: thinky.type.string(),
  entityRanges: thinky.type.array(),
  inlineStyleRanges: thinky.type.array(),
  data: thinky.type.object(),
});

module.exports = Block;

const Page = require('./Page');

Block.belongsTo(Page, 'page', 'pageId', 'id');

