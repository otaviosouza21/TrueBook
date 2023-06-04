import React, { useContext } from 'react';
import livro from '../assets/img/livro.jpg';
import styles from '../assets/css/ProdutoCart.module.css';
import { GlobalContext } from './GlobalContext';

const ProdutoCart = () => {

  const {livroNoCarrinho,quantidade,setQuantidade} = useContext(GlobalContext)
  const valor = +livroNoCarrinho.preco.replace("R$ ","").replace(",",".")

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img} src={livroNoCarrinho.img} alt="" />
      </div>
      <div>
        <h3>{livroNoCarrinho.titulo}</h3>
        <span>{livroNoCarrinho.preco} X {quantidade}</span>
        <div className={styles.add_rem}>
          <span onClick={()=>quantidade>0?setQuantidade(quantidade-1):null}>-</span>
          <span onClick={()=>quantidade<10?setQuantidade(quantidade+1):null}>+</span>
        </div>
        <p>TOTAL: R$ {(valor*quantidade).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProdutoCart;
