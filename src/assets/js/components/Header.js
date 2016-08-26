import React from 'react';

require('!style!css!tachyons');

const Header = () => {
  return (
    <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        <a className="link dim white dib mr3" href="#" title="Home">Home</a>
        <a className="link dim white dib mr3" href="#" title="About">About</a>
        <a className="link dim white dib mr3" href="#" title="Store">Archives</a>
        <a className="link dim white dib" href="#" title="Contact">Contact</a>
      </nav>
    </header>
  )
};

module.exports = Header;
