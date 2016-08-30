import React from 'react';

require('!style!css!tachyons');


const Panel = (props) => {
  let nimbusSays = props.caption.nimbus || '';
  let nedSays = props.caption.ned || '';
  return (
    <div className="pa2 fl w-100 w-50-ns tc bg-near-black">
      <img
        className="mw-100 br2"
        src={require(`../../img/${props.imgSrc}`)}
        alt={props.alt}
      />
      <p className={(nimbusSays.length > 1) ? 'lh-solid washed-green fw7 nimbusCaption' : ''}>{nimbusSays}</p>
      <p className={(nedSays.length > 1) ? 'lh-solid light-red fw7 nedCaption' : ''}>{nedSays}</p>
    </div>
  );
};

module.exports = Panel;
