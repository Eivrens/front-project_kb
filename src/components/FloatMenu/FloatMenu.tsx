import React, { useEffect, useRef } from 'react';
import './FloatMenu.css';
import login from '../../assets/icons/login-96.png';

interface FloatMenuProps{
  onClose: () => void;
}

function FloatMenu({ onClose }: FloatMenuProps) {

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
        <div className='floatContainer'>
          <a>
            <img src={login} alt='Login Icon' />
            <span>TESTE</span>
          </a>
          <hr />
        </div>

      </div>
    </div>
  );
}

export default FloatMenu;