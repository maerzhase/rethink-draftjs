import React from 'react';

export const edit = (isServer = false, snapshot) => {
  const initialActions = [];
  if (snapshot) {
    return snapshot;
  }
  return {
    initialActions,
    isServer,
    addAction: (action) => {
      initialActions.push(action);
    },
    inits: {

    },
  };
};


export const EditContext = React.createContext(edit());
