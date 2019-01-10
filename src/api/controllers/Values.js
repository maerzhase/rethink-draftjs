import { handleError } from './Error';
const Value = require('../models/Value');

exports.get = (req, res) => {
  const id = req.params.id;
  Value.get(id).getJoin({ template: true }).run().then((value) => {
    res.json({
      value,
    });
  })
  .catch(err => handleError(res, err));
};

exports.getAll = (req, res) => {
  Value.getJoin({ template: true }).run().then((values) => {
    res.json({
      values,
    });
  })
  .catch(err => handleError(res, err));
};

exports.deleteAll = (req, res) => {
  Value.run().then((values) => {
    const all = values.map(value => value.delete());
    Promise.all(all).then(() => {
      res.json({
        msg: 'all values purged',
      });
    });
  })
  .catch(err => handleError(res, err));
};

exports.purgeAll = (req, res) => {
  Value.run().then((values) => {
    const all = values.map(value => value.purge());
    Promise.all(all).then(() => {
      res.json({
        msg: 'all values purged',
      });
    });
  })
  .catch(err => handleError(res, err));
};
