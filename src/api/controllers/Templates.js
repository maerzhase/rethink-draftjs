import diff from 'deep-diff';
import { handleError } from './Error';
const Template = require('../models/Template');
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
  const { values, ...rest } = req.body;
  try{
    // check if template already exists
    const exists = await Template.filter({ name: rest.name }).run();
    if (exists.length) {
      // if exists we receive the whole template
      // and check for changes with deep-diff
      const template = await Template.filter({ name: rest.name })
        .getJoin({ values: true });
      const normalizedTemplate = normalizeDocument(req.body, template[0]);
      const changes = diff(normalizedTemplate, req.body) || false;
      return res.status(200).json({
        template: template[0],
        hasChanges: !!changes.length,
        changes: changes || null,
      });
    }
    const template = new Template(rest);
    const tValues = values.map(v => new Value(v));
    template.values = tValues;
    const savedTemplate = await template.saveAll({ values: true });
    return res.status(200).json({
      savedTemplate,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.get = (req, res) => {
  const id = req.params.id;
  Template.get(id).getJoin({ values: true }).run().then((value) => {
    res.json({
      value,
    });
  })
  .catch(err => handleError(res, err));
};

exports.patch = (req, res) => {
  const { values, ...rest } = req.body;
  Template.get(rest.id).getJoin({ values: true }).run().then((existingTemplate) => {
    const actions = values.reduce((acc, value) => {
      const exists = existingTemplate.values.findIndex(v => v.key === value.key);
      if (exists > -1) {
        console.log(exists);
        acc.update.push(existingTemplate.values[exists].merge(value));
      } else {
        console.log(value.key);
        acc.create.push(new Value(value));
      }
      return acc;
    }, { update: [], create: [] });
    existingTemplate.values = [...actions.update, ...actions.create];
    existingTemplate.saveAll({ values: true }).then((result) => {
      res.json(result);
    }).catch(err => handleError(err, err));
  })
  .catch(err => handleError(res, err));
};

exports.getBy = (req, res) => {
  const by = req.params.by;
  const value = req.params.value;
  Template.filter({ [by]: value }).getJoin({ values: true }).run().then((page) => {
    res.json({
      page,
    });
  })
  .catch(err => handleError(res, err));
};


exports.getAll = (req, res) => {
  Template.getJoin({
    values: true,
  }).run().then((templates) => {
    res.json({
      templates,
    });
  })
  .catch(err => handleError(res, err));
};

exports.deleteAll = (req, res) => {
  Template.getJoin({ values: true }).run().then((templates) => {
    const all = templates.map(template => template.deleteAll({ values: true }));
    Promise.all(all).then(() => {
      res.json({
        msg: 'all templates deleted',
      });
    });
  })
  .catch(err => handleError(res, err));
};

exports.purgeAll = (req, res) => {
  Template.run().then((templates) => {
    const all = templates.map(template => template.purge());
    Promise.all(all).then(() => {
      res.json({
        msg: 'all templates purged',
      });
    });
  })
  .catch(err => handleError(res, err));
};
