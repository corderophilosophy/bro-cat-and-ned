import React, { Component, PropTypes } from 'react';
const img1 = require('../../img/bcan1.jpg');
const img2 = require('../../img/bcan2.jpg');
const img3 = require('../../img/bcan3.jpg');
// const img4 = require('./bcan4.jpg');
//
// Basic structure of comic object for S3 fetch/get
// const comic = {
//   id_ : "79047219792173-291",
//   title: "",
//   date: "",
//   images: {
//     img1: {
//       src: 'source',
//       caption: {
//         Ned: "",
//         Nimbus: "",
//       }
//     },
//     img2: {
//       src: 'source',
//       caption: {
//         Ned: "",
//         Nimbus: "",
//       }
//     },
//     img3: {
//       src: 'source',
//       caption: {
//         Ned: "",
//         Nimbus: "",
//       }
//     },
//     img4: {
//       src: 'source',
//       caption: {
//         Ned: "",
//         Nimbus: "",
//       }
//     }
//   }
// };

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pt6 mw6 mw8-ns center pa3 ph5-ns">
        <article className="cf">
          <div className="pa2 fl w-100 w-50-ns tc bg-near-black">
            <img
              className="mw-100 br2"
              src={img1}
              alt="Nimbus and Ned - First Panel"
              title="Nimbus and Ned - First Panel"
            />
            <p className="lh-solid washed-blue fw7">Nimbus: NED! Something's happening!</p>
          </div>
          <div className="pa2 fl w-100 w-50-ns tc bg-near-black">
            <img
              className="mw-100 br2"
              src={img2}
              alt="Nimbus and Ned - Second Panel"
              title="Nimbus and Ned - Second Panel"
            />
            <p className="lh-solid light-red fw7">Ned: What??</p>
          </div>
        </article>
        <article className="cf">
          <div className="pa2 fl w-100 w-50-ns tc bg-near-black">
            <img
              className="mw-100 br2"
              src={img3}
              alt="Nimbus and Ned - 3rd Panel"
              title="Nimbus and Ned - 3rd Panel"
            />
            <p className="lh-solid washed-blue fw7">Nimbus: We're a webcomic!</p>
            <p className="lh-solid light-red fw7">Ned: WHAT!?!?</p>
          </div>
          <div className="pa2 fl w-100 w-50-ns tc bg-near-black">
            <img
              className="mw-100 br2"
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
