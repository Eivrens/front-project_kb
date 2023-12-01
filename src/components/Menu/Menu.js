import './Menu.css'
import menu from "../../assets/icons/icons8-cardápio-96.png";
import React from 'react';
import FloatMenu from '../FloatMenu/FloatMenu.js'; 
import { useState } from 'react';

 function Menu(e) {
  const [openMenu, setOpenMenu] = useState(false);
  
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>  
    <div className="btn-menu">
      <button className="btn-menu" onClick={toggleMenu}>
        <img src={menu} alt="Tela inicial" />
      </button>
    </div>
      {openMenu && <FloatMenu onClose={toggleMenu} />}
    </div>
  );
}

export default Menu