import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router'

import Header from '.components/Header';
import Footer from '.components/Footer';
import Archives from '.components/Archives';
import About from '.components/About';
import Contact from '.components/Contact';
import Home from './containers/Home';
import Strip from './containers/Strip';
require('!style!css!tachyons');

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <Header />
          <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/archives" component={Archives} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Router>
        <Footer />
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
