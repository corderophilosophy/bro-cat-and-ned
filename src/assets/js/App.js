import React, { Component } from 'react';

import Header from './components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <Header {...this.props}/>
          {this.props.children}
      </div>
    );
  }
};
