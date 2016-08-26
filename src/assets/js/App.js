import React, { Component, PropTypes } from 'react';

import Header from './components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
