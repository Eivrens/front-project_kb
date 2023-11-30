import './Menu.css'
import menu from "../../assets/icons/icons8-cardápio-96.png";

export default function Menu() {
  return (
    <button className="btn-menu">
      <img src={menu} alt="Tela inicial" />
    </button>
  )
}