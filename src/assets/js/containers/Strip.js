import React from 'react';

require('!style!css!tachyons');

const Strip = (props) => {
  return (
    <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns pt6">
      <h1 className="mt0">{props.date}</h1>
      {props.children}
    </section>
  )
};

module.exports = Strip;
