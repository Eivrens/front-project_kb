import styles from "./FooterPolygon.module.css";
import iconPolygon from "../../../assets/icons/icons8-trabalho-a-partir-de-casa-96 (1).png";
export default function FooterPolygon() {
  return (
    <div className={styles.teamPolygon}>
      <img src={iconPolygon} alt="icon team polygon" />
      <p>Desenvolvido com {"<3"} pelo Team Polygon</p>
    </div>
  );
}
