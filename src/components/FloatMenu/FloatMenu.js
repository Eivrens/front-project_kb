import React, { useEffect, useRef } from 'react';
import './FloatMenu.css';
import login from '../../assets/icons/login-96.png';

function FloatMenu({ onClose }) {

  return (
    <div className='floatMenu' >
      <div className='floatMenuContainer'>
        <div className='floatContainer'>
          <a>
            <img src={login} alt='Login Icon' />
            <span>Login</span>
          </a>
          <hr />
        </div>
        {/* <div className='floatContainer'>
          <a>
            <img src={login} alt='Login Icon' />
            <span>Login</span>
          </a>
          <hr />
        </div> */}

      </div>
    </div>
  );
}

export default FloatMenu;