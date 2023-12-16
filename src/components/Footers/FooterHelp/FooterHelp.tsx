import styles from "./FooterHelp.module.css";
import iconHelper from "../../../assets/icons/icons8-animal-donation-96.png";
import iconPix from "../../../assets/icons/icons8-foto-96.png";
import iconBank from "../../../assets/icons/icons8-banco-96.png";
export default function FooterHelper() {
  return (
    <div>
      <div className={styles.headerHelp}>
        <img src={iconHelper} alt="icon Helper" />
        <p>Ajude nossos bichinhos:</p>
      </div>
      <div className={styles.bodyHelper}>
        <a href="">
          <img src={iconPix} alt="" className={iconPix} />
        </a>
        <a href="">
          <img src={iconBank} alt="" className={styles.iconBank} />
        </a>
      </div>
    </div>
  );
}
