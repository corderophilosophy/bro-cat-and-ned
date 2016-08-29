import React from 'react';

require('!style!css!tachyons');

const Footer = (props) => {
  return (
    <footer className="mt5 ph3 ph4-ns pv3 ba b--black-10 black-70">
      <div className="">
        <a href="mailto:brocatandned@gmail.com" className="link b f3 f2-ns dim black-70 lh-solid">brocatandned@gmail.com</a>
        <p className="f6 db b ttu lh-solid">All Rights Reserved</p>
        <p className="f6 db lh-solid">Which is to say, any content created by, and posted on, this site may be reproduced at will so long as any use of it does not offend the sensibilities of the rights holders (i.e. Gabrielle F. Graham and Rich Cordero, or, perhaps in a more just world, Nimbus Aloysius Graham and Ned Graham).</p>
      </div>
    </footer>
  )
};

module.exports = Footer;
