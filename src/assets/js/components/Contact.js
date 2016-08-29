import React, { Component, PropTypes } from 'react';
import Footer from './Footer';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-column pt6">
        <div className="footer ph3 ph4-ns">
          <p>Please feel feel free to get in touch.</p>
        </div>
        <Footer />
      </div>
    );
  }
}

Contact.propTypes = {
};
