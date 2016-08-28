import React from 'react';

require('!style!css!tachyons');

const Strip = (props) => {
  return (
    <footer className="bottom-0 db ph3 ph4-ns pv6 bt b--black-10 black-70">
      <div classname="">
        <a href="mailto:brocatandned@gmail.com" className="link b f3 f2-ns dim black-70 lh-solid">brocatandned@gmail.com</a>
        <p className="f6 b ttu lh-solid">All Rights Reserved</p>
        <p className="f6 lh-solid">Which is to say, any content created by, and posted on, this site may be reproduced at will so long as any use of it does not offend the sensibilities of the rights holders (i.e. Gabrielle F. Graham and Rich Cordero, or, perhaps in a more just world, Nimbus Aloysius Graham and Ned Graham).</p>
      </div>
    </footer>
  )
};

module.exports = Strip;
