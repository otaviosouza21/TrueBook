import React from 'react';
import styles from '../assets/css/Button.module.css';

const Button = ({
  text,
  position,
  livroCar,
  setLivroCar,
  dadosLivro,
  preco,
}) => {
  function handleClick({target}) {
   
    if(target.innerText === "Comprar" || target.innerText === "Comprar Agora")
    setLivroCar({
      titulo: dadosLivro.title,
      preco,
      img: dadosLivro.imageLinks.thumbnail,
    });
  }

  return (
    <button style={position} className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
