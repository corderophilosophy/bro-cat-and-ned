import React from 'react';
import { Link } from 'react-router'

require('!style!css!tachyons');

const Header = (props) => {
  return (
    <header className="">
      <nav className="">
        <Link className="" to="#" title="Home">Home</Link>
        <Link className="" to="#" title="About">About</Link>
        <Link className="" to="#" title="Archives">Archives</Link>
        <Link className="" to="#" title="Contact">Contact</Link>
      </nav>
    </header>
  )
};

module.exports = Header;
