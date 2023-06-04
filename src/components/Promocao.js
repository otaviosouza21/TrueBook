import React from 'react';
import styles from '../assets/css/Promocao.module.css';
import Button from './Button';
import {GlobalContext} from './GlobalContext'


const Promocao = ({numeroPromo,preco}) => {
  const {livro,validado} = React.useContext(GlobalContext)


if(validado !== true){
  return <p>Carregando...</p>
}
else {
const promo = livro[numeroPromo].volumeInfo
const precoReal = Number(preco)
const precoPromo = precoReal + (precoReal * 0.20) 
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.livro}>
          <h3>Promoção Diaria</h3>
          <img src={promo.imageLinks.thumbnail} alt="Livro" />
        </div>
        <div className={styles.infos}>
          <h2>{promo.title}</h2>
          <h3>{promo.authors}</h3>
          <span>R$ {precoPromo.toFixed(2)}</span>
          <p>R$ {precoReal}</p>
          <Button text="Comprar Agora" />
        </div>
      </section>
    </div>
  );
}
};

export default Promocao;
