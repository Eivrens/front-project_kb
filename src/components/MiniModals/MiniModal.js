import React, { useEffect, useState } from 'react';
import { differenceInMonths } from 'date-fns';
import styles from "./MiniModal.module.css";

export default function MiniModal({ data }) {
  const currentDate = new Date();

  const [formattedPets, setFormattedPets] = useState([]);

  useEffect(() => {
    const fetchFormattedPets = async () => {
      const petsWithImages = await Promise.all(
        data.map(async (item) => {
          const monthsDiff = differenceInMonths(currentDate, new Date(item.dt_birth));
          const years = Math.floor(monthsDiff / 12);
          const months = monthsDiff % 12;

          const ageString = `${years} anos e ${months} meses`;

          const genderString = item.gender === 'M' ? 'Macho' : 'Fêmea';

          // Use o import dinâmico para carregar a imagem com base no nome
          const imageModule = await import(`../../assets/img/${item.name}.jpg`);
          const imageUrl = imageModule.default;

          return {
            ...item,
            ageString,
            genderString,
            imageUrl,
          };
        })
      );

      setFormattedPets(petsWithImages);
    };

    fetchFormattedPets();
  }, [data, currentDate]);

  return (
    <div className={styles.MiniModal}>
      {formattedPets.map(item => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.name} className={styles.petsImg}/>
          <div className={styles.PetInfo}>
            <p>{item.name}</p>
            <p>{item.genderString}</p>
            <p>{item.ageString}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
