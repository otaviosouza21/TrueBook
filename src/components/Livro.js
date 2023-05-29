import React, { useContext } from 'react';
import styles from '../assets/css/Livro.module.css';
import Button from './Button';
import { GlobalContext } from './GlobalContext';

const Livro = ({ preco }) => {
  const { livro } = useContext(GlobalContext);

  const buttonPosition = {
    width: '90%',
    margin: '0 auto',
    position: 'absolute',
    bottom: '-30px',
    left: '5%',
  };

  return (
    <section className={styles.container}>
      <div className={styles.livroImg}>
        <span>{preco}</span>
        <span>{livro.avalia}</span>
      </div>
      <div className={styles.conteudo}>
        <h3>{livro.titulo}</h3>
        <p>{livro.descricao.slice(0, 250)}</p>
        <span>{livro.autor}</span>
      </div>
      <Button text="Comprar" position={buttonPosition} />
    </section>
  );
};

export default Livro;
