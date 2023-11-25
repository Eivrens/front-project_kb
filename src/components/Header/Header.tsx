import "./Header.css";
import logo from "../../assets/icons/logo.png";
import menu from "../../assets/icons/icons8-cardápio-96.png";

export default function Header() {
  return (
    <div className="header">
      <button className="btn-home" type="button">
        <img className="img-home" src={logo} alt="Tela inicial" />
      </button>
      {/* transformar em componente */}
      <div className="switch-button">
        <div className="active-switch">
          <p>Adote um gato</p>
        </div>
        <div className="disable-switch">
          <p>Apoie uma causa</p>
        </div>
      </div>
      {/* transformar em componente */}
      <button className="btn-menu">
        <img src={menu} alt="Tela inicial" />
      </button>
    </div>
  );
}
