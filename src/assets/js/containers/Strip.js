import React from 'react';

require('!style!css!tachyons');

const Strip = (props) => {
  return (
    <section className="">
      <h1 className="">{props.date}</h1>
      {props.children}
    </section>
  )
};

module.exports = Strip;
