import styles from "./FooterAdoption.module.css";
import iconAdoptions from "../../../assets/icons/icons8-coleira-96.png";
import imgAdoptions from "../../../assets/img/adocao.jpg";
import iconBalls from "../../../assets/icons/bolinhas.png";
export default function FootersAdoptions() {
  return (
    <div>
      <div className={styles.headerAdoptions}>
        <img src={iconAdoptions} alt="Icon Adoptions" />
        <p>Adoções e agradecimentos:</p>
      </div>
      <div className={styles.bodyAdoptions}>
        <img
          src={imgAdoptions}
          alt="donation photos"
          className={styles.imgAdoption}
        />
        <img src={iconBalls} alt="" className={styles.iconBalls} />
        <div className={styles.descriptionAdopition}>
          <p>
            Coelhinho agora chama biscoito de bolacha! Seja feliz com sua nova
            família.
          </p>
        </div>
      </div>
    </div>
  );
}
