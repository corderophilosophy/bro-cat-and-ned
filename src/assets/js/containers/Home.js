import React, { Component, PropTypes } from 'react';
const img1 = require('../../assets/img/b-c-a-n-1.jpg');

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pt6 mw6 mw8-ns center pa3 ph5-ns">
        <article className="cf">
          <div className="fl w-100 w-50-ns bg-near-white tc">
            {img1}
          </div>
          <div className="fl w-100 w-50-ns bg-light-gray tc">
            <h1>Column Two</h1>
          </div>
        </article>
        <article className="cf">
          <div className="fl w-100 w-50-ns bg-near-white tc">
            <h1>Column Three</h1>
          </div>
          <div className="fl w-100 w-50-ns bg-light-gray tc">
            <h1>Column Four</h1>
          </div>
        </article>
      </div>
    );
  }
}

Home.propTypes = {
};
