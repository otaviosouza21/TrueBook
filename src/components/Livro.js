import React, { useContext } from 'react';
import styles from '../assets/css/Livro.module.css';
import Button from './Button';
import { GlobalContext } from './GlobalContext';

const buttonPosition = {
  width: '90%',
  margin: '0 auto',
  position: 'absolute',
  bottom: '-30px',
  left: '5%',
};

const Livro = ({ preco, numLivro }) => {
  const { livro, livroNoCarrinho, setLivroNoCarrinho } =
    useContext(GlobalContext);

  if (livro === false) {
    return <p>Carregando...</p>;
  } else if (livro) {
    const atuaLivro = livro[numLivro].volumeInfo;
    const descricao = atuaLivro.subtitle;
    return (
      <section className={styles.container}>
        <div
          style={{
            backgroundImage: `url(${atuaLivro.imageLinks.thumbnail})`,
          }}
          className={styles.livroImg}
        >
          <span className={styles.preco}>{preco}</span>
          <span>5</span>
        </div>
        <div className={styles.conteudo}>
          <h3>{atuaLivro.title}</h3>
          <p>{descricao}</p>
          <span>{atuaLivro.authors[0]}</span>
        </div>
        <Button
          preco={preco}
          dadosLivro={atuaLivro}
          livroCar={livroNoCarrinho}
          setLivroCar={setLivroNoCarrinho}
          text="Comprar"
          position={buttonPosition}
        />
      </section>
    );
  }
};

export default Livro;
