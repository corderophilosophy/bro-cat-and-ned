import React, { Component, PropTypes } from 'react';

import * as firebase from 'firebase';

import Panel from '../components/Panel';
import config from '../../../../.snippets.js';

firebase.initializeApp(config);

const SRC_STUB = "require('../../img/";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComic: {
        title: "",
        date: "",
        images: {
          img1: {
            src: "bcan1.jpg",
            caption: {
              ned: "",
              nimbus: ""
            }
          },
          img2: {
            src: "bcan2.jpg",
            caption: {
              ned: "",
              nimbus: ""
            }
          },
          img3: {
            src: "bcan3.jpg",
            caption: {
              ned: "",
              nimbus: ""
            }
          },
          img4: {
            src: "dosgatos.jpg",
            caption: {
              ned: "",
              nimbus: ""
            }
          },
        }
      },
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref('/').child('posts');
    rootRef.on('value', snap => {
      this.setState({
        currentComic: Object.values(snap.val())[0]
      });
    });
  }

  render() {
    return (
      <div className="pt6 mw6 mw8-ns center pa3 ph5-ns">
        <article className="cf">
          <Panel
            imgSrc={this.state.currentComic.images.img1.src}
            alt={"Panel One"}
            caption={this.state.currentComic.images.img1.caption}
          />
          <Panel
            imgSrc={this.state.currentComic.images.img2.src}
            alt={"Panel Two"}
            caption={this.state.currentComic.images.img2.caption}
          />
        </article>
        <article className="cf">
          <Panel
          imgSrc={this.state.currentComic.images.img3.src}
          alt={"Panel Three"}
          caption={this.state.currentComic.images.img3.caption}
          />
          <Panel
          imgSrc={this.state.currentComic.images.img4.src}
          alt={"Panel Four"}
          caption={this.state.currentComic.images.img4.caption}
          />
        </article>
      </div>
    );
  }
}

Home.propTypes = {
};
