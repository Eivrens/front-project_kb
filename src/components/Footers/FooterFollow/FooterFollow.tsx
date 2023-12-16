import styles from "./FooterFollow.module.css";
import iconFollow from "../../../assets/icons/icons8-pegada-de-gato-ios-16-filled-96.png";
import iconTiktok from "../../../assets/icons/icons8-tiktok-96 (2).png";
import iconInstagram from "../../../assets/icons/icons8-instagram-96 (1).png";
export default function FooterFollow() {
  return (
    <div>
      <div className={styles.headerFollow}>
        <img src={iconFollow} alt="icon follow" />
        <p>Siga nossas redes:</p>
      </div>
      <div className={styles.bodyFollow}>
        <a href="https://www.tiktok.com/@gatosdoquarto" target="_blank">
          <img
            src={iconTiktok}
            alt="icon Tiktok"
            className={styles.iconTiktok}
          />
        </a>
        <a href="https://www.instagram.com/gatosdoquarto/" target="_blank">
          <img
            src={iconInstagram}
            alt="icon Instagram"
            className={styles.iconInstagram}
          />
        </a>
      </div>
    </div>
  );
}
