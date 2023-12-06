import "./Header.css";
import logo from "../../assets/icons/logo.png";
import Menu from "../Menu/Menu";
import SwitchButton from "../SwitchButton/SwitchButton";

export default function Header() {
  return (
    <div className="header">
      <button className="btn-home" type="button">
        <img className="img-home" src={logo} alt="Tela inicial" />
      </button>
      <div className="component-switch">
        <SwitchButton />
      </div>
      <div className="component-menu">
        <Menu />
      </div>
    </div>
  );
}
