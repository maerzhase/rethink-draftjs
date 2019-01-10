import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App';
import { edit } from './components/EditContext';

hydrate(
  <App edit={edit(false, window.SNAPSHOT)} />,
  global.document.getElementById('root'),
);
