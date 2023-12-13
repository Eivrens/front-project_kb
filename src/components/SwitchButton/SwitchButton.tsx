import './SwitchButton.css';
import React, { useState } from 'react';

function SwitchButton({  }) {

  const [active, setActive] = useState(false);

  const onClickHandler = () => {
    setActive(!active);
    
  };

  return (
    <div className="switch-button" onClick={onClickHandler}>
      <div style={{ left: active ? '50%' : '0' }}></div>
      <div>Adote um gato</div>
      <div>Apoie uma causa</div>
    </div >
  )
}

export default SwitchButton;