import React from 'react'; // Esta linha parece estar duplicada
import './FloatMenu.css';
import login from '../../assets/icons/login96.png';
//E:\Project_KB\front-project_kb\src\assets\icons\icons8-login-arredondado-a-direita-96.png
function FloatMenu(e) {
  //on click for negativo se n for na div do hamburguer
 
  
  return (
    <div className='floatMenu'>
      <div>

      
     <a><img src={login}/>LOGIN</a>
      </div>
    </div>
  );
}

export default FloatMenu; // Aqui, corrija para exportar