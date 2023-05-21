import React from 'react';
import styles from '../assets/css/Livro.module.css';
import Button from './Button';
const Livro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.livroImg}>
        <span>R$ 99,99</span>
        <span>10</span>
      </div>
      <div className={styles.conteudo}>
        <h3>GreenSleave</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          accusamus dicta temporibus cumque voluptatum aspernatur
        </p>
        <span>Otavio Lucas</span>
      </div>
      <Button text="Comprar"/>
    </section>
  );
};

export default Livro;
