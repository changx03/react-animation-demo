import React from 'react';

import './Backdrop.css';

const backdrop = props => {
  const styleClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClose'];
  return <div className={styleClasses.join(' ')} />;
};

export default backdrop;
