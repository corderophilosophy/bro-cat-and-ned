import React from 'react';
import { Link } from 'react-router'

require('!style!css!tachyons');

const Header = (props) => {
  return (
    <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        <Link className="link dim white dib mr3" to="/" title="Home">Home</Link>
        <Link className="link dim white dib mr3" to="/about" title="About">About</Link>
        <Link className="link dim white dib mr3" to="/archives" title="Archives">Archives</Link>
        <Link className="link dim white dib" to="/contact" title="Contact">Contact</Link>
      </nav>
    </header>
  )
};

module.exports = Header;
