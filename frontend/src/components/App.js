import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import Blank from './Blank';
import { EditContext } from './EditContext';
import PageList from './PageList';

const App = (props) => ( // eslint-disable-line
  <EditContext.Provider value={props.edit}>
    <Blank id="asd" />
    <PageList />
  </EditContext.Provider>
);

App.propTypes = {
  edit: PropTypes.object.isRequired,
};

export default hot(module)(App);
