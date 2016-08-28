import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App.js';
// import mainReducer from '/reducers/reducers';

// const store = createStore(mainReducer);

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
