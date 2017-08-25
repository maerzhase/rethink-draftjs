import { handleError } from './Error';
import { Block } from '../models';


exports.get = (req, res) => {
  const id = req.params.id;
  Block.get(id).getJoin({ page: true }).run().then((page) => {
    res.json({
      page,
    });
  })
  .error(handleError(res));
};

exports.getAll = (req, res) => {
  Block.getJoin({ page: true }).run().then((blocks) => {
    res.json({
      blocks,
    });
  })
  .error(handleError(res));
};

exports.deleteAll = (req, res) => {
  Block.run().then((blocks) => {
    const all = blocks.map(block => block.delete());
    Promise.all(all).then(() => {
      res.json({
        msg: 'all blocks purged',
      });
    });
  })
  .error(handleError(res));
};

exports.purgeAll = (req, res) => {
  Block.run().then((blocks) => {
    const all = blocks.map(block => block.purge());
    Promise.all(all).then(() => {
      res.json({
        msg: 'all blocks purged',
      });
    });
  })
  .error(handleError(res));
};
