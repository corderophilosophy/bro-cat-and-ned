import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router'

import Home from './containers/Home';
import Strip from './containers/Strip';
require('!style!css!tachyons');

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Home>
          <Strip date={"27 August 2006"}>Fart</Strip>
        </Home>
      </div>
    );
  }
}

// render() {
//   return (
//     <Router history={browserHistory}>
//      <Route path="/" component={} />
//     </Router>
//   );
// }
