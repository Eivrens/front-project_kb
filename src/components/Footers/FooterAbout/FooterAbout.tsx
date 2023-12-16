import styles from "./FooterAbout.module.css";
import iconHomePet from "../../../assets/icons/icons8-casinha-de-cachorro-96.png";
import iconAbout from "../../../assets/icons/icons8-play-with-pet-96.png";
export default function FooterAbout() {
  return (
    <div>
      <div className={styles.headerAbout}>
        <img src={iconHomePet} alt="" />
        <p>Sobre nós:</p>
      </div>
      <div className={styles.bodyAbout}>
        <a href="">
          <img src={iconAbout} alt="" />
        </a>
      </div>
    </div>
  );
}
