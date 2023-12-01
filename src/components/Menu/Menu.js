import './Menu.css'
import menu from "../../assets/icons/icons8-cardápio-96.png";
import React from 'react';
import FloatMenu from '../FloatMenu/FloatMenu'; // Corrija o nome do arquivo de importação
import { useState } from 'react';

 function Menu(e) {
  const [openMenu, setOpenMenu] = useState(false);
  //e.eventListener('click',)
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="btn-menu">
      <button className="btn-menu" onClick={toggleMenu}>
        <img src={menu} alt="Tela inicial" />
      </button>
      {openMenu && <FloatMenu onClose={toggleMenu} />}
    </div>
  );
}

export default Menu