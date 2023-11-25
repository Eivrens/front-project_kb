import "./Header.css";
import logo from "../../assets/icons/logo.png";

export default function Header() {
  return (
    <header className="header">
      <button className="btn-home" type="button">
        <img className="img-home" src={logo} alt="Tela inicial" />
      </button>
    </header>
  );
}
