import { handleError } from './Error';
import { Block, Page, Entity } from '../models';

// Save a Page in the database
exports.createPage = (req, res) => {
  console.log(req.body);
  const { entityMap, ...rest } = req.body;

  const page = new Page(rest);
  const blocks = rest.blocks.map((b) => { //eslint-disable-line
    const block = new Block(b);
    return block;
  });
  const entities = Object.keys(entityMap).map((k) => {
    const e = entityMap[k];
    const entity = new Entity(e);
    return entity;
  });

  page.blocks = blocks;
  page.entities = entities;

  page.saveAll({ blocks: true, entities: true }).then((result) => {
    res.json({
      result,
    });
  })
  .error(handleError(res));
};

exports.get = (req, res) => {
  const id = req.params.id;
  Page.get(id).getJoin({ blocks: true, entities: true }).run().then((page) => {
    res.json({
      page,
    });
  })
  .error(handleError(res));
};


exports.getAll = (req, res) => {
  Page.getJoin({
    blocks: true,
    entities: true,
  }).run().then((pages) => {
    res.json({
      pages,
    });
  })
  .error(handleError(res));
};

exports.deleteAll = (req, res) => {
  Page.getJoin({ blocks: true, entities: true }).run().then((pages) => {
    const all = pages.map(page => page.deleteAll({ entities: true, blocks: true }));
    Promise.all(all).then(() => {
      res.json({
        msg: 'all pages deleted',
      });
    });
  })
  .error(handleError(res));
};

exports.purgeAll = (req, res) => {
  Page.run().then((pages) => {
    const all = pages.map(page => page.purge());
    Promise.all(all).then(() => {
      res.json({
        msg: 'all pages purged',
      });
    });
  })
  .error(handleError(res));
};
