import styles from "./MiniModal.module.css";
export default function MiniModal({ data }) {
  return (
    <div className={styles.MiniModal}>
      {data.map(item => (
        <div key={item.id}>
          <p>nome: {item.name}</p>
          <p>gene: {item.gender}</p>
          <p>niver: {item.dt_birth}</p>
        </div>
      ))}
    </div>
  );
}
