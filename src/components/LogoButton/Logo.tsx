import styles from "./Logo.module.css";
import logo from "../../assets/icons/logo.png";

export default function Logo() {
  return (
    <button className={styles.btnHome} type="button">
      <img className={styles.imgHome} src={logo} alt="Tela inicial" />
    </button>
  );
}
