import diff from 'deep-diff';
import { handleError } from './Error';
const Page = require('../models/Page');
const Value = require('../models/Value');
const normalizeFields = (original, target) => (
  Object.keys(original).reduce((acc, key) => {
    const value = target[key];
    acc[key] = value;
    return acc;
  }, {})
);

const normalizeDocument = (original, target) => (
  Object.keys(original).reduce((acc, key) => {
    const originalValue = original[key];
    let value = target[key];
    if (originalValue instanceof Array) {
      value = target[key].map(val => normalizeFields(originalValue[0], val)).reverse();
    } else if (originalValue instanceof Object) {
      value = normalizeFields(originalValue, value);
    }
    acc[key] = value;
    return acc;
  }, {})
);

exports.create = async (req, res) => {
  try {
    const { values, ...rest } = req.body;
    console.log('??', req.body);
    const page = new Page(rest);
    const tValues = values.map(v => new Value(v));
    page.values = tValues;
    const savedPage = await page.saveAll({ values: true });
    return res.status(200).json({
      savedPage,
    });
  } catch(e) {
    console.log(e);
  }
};

exports.get = (req, res) => {
  const id = req.params.id;
  Page.get(id).getJoin({ values: true }).run().then((value) => {
    res.json({
      value,
    });
  })
  .catch(err => handleError(res, err));
};

exports.patch = (req, res) => {
  const { values, ...rest } = req.body;
  Page.get(rest.id).getJoin({ values: true }).run().then((existingPage) => {
    const actions = values.reduce((acc, value) => {
      const exists = existingPage.values.findIndex(v => v.key === value.key);
      if (exists > -1) {
        console.log(exists);
        acc.update.push(existingPage.values[exists].merge(value));
      } else {
        console.log(value.key);
        acc.create.push(new Value(value));
      }
      return acc;
    }, { update: [], create: [] });
    existingPage.values = [...actions.update, ...actions.create];
    existingPage.saveAll({ values: true }).then((result) => {
      res.json(result);
    }).catch(err => handleError(err, err));
  })
  .catch(err => handleError(res, err));
};

exports.getBy = (req, res) => {
  const by = req.params.by;
  const value = req.params.value;
  Page.filter({ [by]: value }).getJoin({ values: true }).run().then((page) => {
    res.json({
      page,
    });
  })
  .catch(err => handleError(res, err));
};


exports.getAll = (req, res) => {
  Page.getJoin({
    values: true,
  }).run().then((pages) => {
    res.json({
      pages,
    });
  })
  .catch(err => handleError(res, err));
};

exports.deleteAll = (req, res) => {
  Page.getJoin({ values: true }).run().then((pages) => {
    const all = pages.map(page => page.deleteAll({ values: true }));
    Promise.all(all).then(() => {
      res.json({
        msg: 'all pages deleted',
      });
    });
  })
  .catch(err => handleError(res, err));
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
  .catch(err => handleError(res, err));
};
