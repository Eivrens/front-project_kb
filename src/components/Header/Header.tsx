import "./Header.css";
import Logo from '../LogoButton/Logo';
import Menu from "../Menu/Menu";
import SwitchButton from "../SwitchButton/SwitchButton";

export default function Header() {
  return (
    <div className="header">
      <div className="componentLogo">
        <Logo />
      </div>
      <div className="componentSwitch">
        <SwitchButton />
      </div>
      <div className="componentMenu">
        <Menu />
      </div>
    </div>
  );
}
