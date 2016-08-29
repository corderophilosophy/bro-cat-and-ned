import React, { Component, PropTypes } from 'react';
const img1 = require('../../img/bcan1.jpg');
const img2 = require('../../img/bcan2.jpg');
const img3 = require('../../img/bcan3.jpg');
// const img4 = require('./bcan4.jpg');

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pt6 mw6 mw8-ns center pa3 ph5-ns">
        <article className="cf">
          <div className="fl w-100 w-50-ns bg-near-white tc">
            <img
              className="mw-100"
              src={img1}
              alt="Nimbus and Ned - First Panel"
              title="Nimbus and Ned - First Panel"
            />
          </div>
          <div className="fl w-100 w-50-ns bg-light-gray tc">
            <img
              className="mw-100"
              src={img2}
              alt="Nimbus and Ned - Second Panel"
              title="Nimbus and Ned - Second Panel"
            />
          </div>
        </article>
        <article className="cf">
          <div className="fl w-100 w-50-ns bg-near-white tc">
            <img
              className="mw-100"
              src={img3}
              alt="Nimbus and Ned - 3rd Panel"
              title="Nimbus and Ned - 3rd Panel"
            />
          </div>
          <div className="fl w-100 w-50-ns bg-light-gray tc">
            <img
              className="mw-100"
              src={img1}
              alt="Nimbus and Ned - First Panel"
              title="Nimbus and Ned - First Panel"
            />
          </div>
        </article>
      </div>
    );
  }
}

Home.propTypes = {
};
