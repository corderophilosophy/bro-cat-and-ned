import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = (props) => {
  return (
    <div className="">
      <Header />
        <div className="flex flex-column pt6">
          {props.children}
        </div>
      <Footer />
    </div>
  )
};

module.exports = Home;
