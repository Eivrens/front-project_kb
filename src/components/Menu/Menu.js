import './Menu.css'
import menu from "../../assets/icons/icons8-cardápio-96.png";
import React from 'react';
import FloatMenu from '../FloatMenu/FloatMenu.js'; 
import { useState, useEffect, useRef } from 'react';

 function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuButtonRef = useRef(null);
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const getDocumentClick=(e)=>{
    
    if(menuButtonRef.current &&menuButtonRef.current.contains(e.target)){
      return;
    }
   
    const clickInside=e.target.closest('.floatMenu');
    if(clickInside){
      return;
    }
    setOpenMenu(false);
  }

  

  useEffect(()=>{
    document.addEventListener('click',getDocumentClick)

    return ()=>{
      document.removeEventListener('click',getDocumentClick)
    };
  },[])



  return (
    <div>  
    <div className="btn-menu">
      <button  ref={menuButtonRef} className="btn-menu" onClick={toggleMenu}>
        <img src={menu} alt="Tela inicial" />
      </button>
    </div>
      {openMenu && <FloatMenu onClose={toggleMenu} />}
    </div>
  );
}

export default Menu