import React from 'react';
import styles from '../assets/css/Livro.module.css';
import Button from './Button';
import { GlobalContext } from './GlobalContext';

const buttonPosition = {
  width: '90%',
  margin: '0 auto',
  position: 'absolute',
  top: '100%',
  left: '5%',
};

const GaleriaItem = ({livro}) => {
  const {validado,livroNoCarrinho, setLivroNoCarrinho } = React.useContext(GlobalContext);


  function random(minimo, maximo) {
    const min = Math.ceil(minimo);
    const max = Math.floor(maximo);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rates = random(0,10)


  if (validado !== true) {
    return <p>Carregando...</p>;
  } else {
    return (
      <section className={styles.container}>
     
        <div
          style={{ backgroundImage: `url(${livro.imageLinks.thumbnail})` }}
          className={styles.livroImg}
        >
          <span>
            R$ {random(20, 200)},{random(50, 99)}
          </span>
          <span style={{color: rates>=5 ? "green" : "red"}}    >{rates}</span>
        </div>
        <div className={styles.conteudo}>
          <h3>{livro.title}</h3>
          <p></p>
          <span>{livro.authors[0]}</span>
        </div>
        <Button text="Comprar" position={buttonPosition} dadosLivro={livro}
          livroCar={livroNoCarrinho}
          setLivroCar={setLivroNoCarrinho}  />
      </section>
      
    );
  }
};

export default GaleriaItem;
