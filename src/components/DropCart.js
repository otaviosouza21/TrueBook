import React from 'react';
import Button from './Button';
import styles from '../assets/css/DropCart.module.css';
import ProdutoCart from './ProdutoCart';
import { GlobalContext } from './GlobalContext';

const DropCart = () => {
  const {livroNoCarrinho } = React.useContext(GlobalContext);
 
  return (
    <div className={styles.container}>
      <h3>Carrinho de Compras</h3>
      {
        livroNoCarrinho ?
        <ProdutoCart /> :
        <p>Carrinho Vazio</p>
      }
      <Button text="Comprar" />
    </div>
  );
};

export default DropCart;
