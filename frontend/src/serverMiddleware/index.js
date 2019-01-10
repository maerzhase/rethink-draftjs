import React from 'react';
import { renderToString } from 'react-dom/server';
import { Router } from 'express';
import compile from 'lodash.template';
import rethink from 'rethink-draft-js';
import templateContent from './index.ejs';
import App from '../components/App';
import { edit } from '../components/EditContext';


const clearRequire = require('clear-require');

const template = compile(templateContent);

export default (chunks) => {
  const router = new Router();
  router.use('/favicon.ico', (req, res) => {
    res.status(200).send('lol');
  });
  router.use(async (req, res, next) => {
    //const rethink = require('rethink-draft-js');
    rethink()(req, res, next);
  });
  router.use((req, res) => {
    const editInstance = edit(true);
    
    renderToString(<App edit={editInstance} />);
    //console.log('app rendered', editInstance);
    const all = Object.keys(editInstance.inits).map((key) => {
      return editInstance.inits[key].init;
    });
    Promise.all(all).then((test) => {
      res.status(200).send(template({
        chunks,
        app: renderToString(<App edit={editInstance} />),
        snapshot: editInstance,
      }));
    });
    console.log('send response');
  });
  return router;
};
