import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App.js';
import Archives from './components/Archives';
import About from './components/About';
import Contact from './components/Contact';
import Home from './containers/Home';

require('!style!css!tachyons');

// import mainReducer from '/reducers/reducers';

// const store = createStore(mainReducer);

render((
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/archives" component={Archives} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Route>
    </Router>
  </div>
), document.getElementById('root'));
