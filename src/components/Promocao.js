import React from 'react';
import book from '../assets/img/livro.jpg';
import styles from '../assets/css/Promocao.module.css';
import Button from './Button';


const Promocao = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.livro}>
          <h3>Promoção Diaria</h3>
          <img src={book} alt="Livro" />
        </div>
        <div className={styles.infos}>
          <h2>O Menino do Dedo Verde</h2>
          <span>R$ 110,90</span>
          <p>R$ 99,90</p>
          <Button text="Comprar Agora" />
        </div>
      </section>
    </div>
  );
};

export default Promocao;
