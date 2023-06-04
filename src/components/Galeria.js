import React, { useContext } from 'react';
import styles from '../assets/css/Galeria.module.css'
import Livro from './Livro';
import { GlobalContext } from './GlobalContext';
import GaleriaItem from './GaleriaItem';
import Titulo from './Titulo';

const Galeria = () => {
const {livro,validado} = useContext(GlobalContext)


if(validado !== true){
  return null
}
else if(validado){
  return (
    
    <section className={styles.container}>
      <Titulo titulo="Galeria de Livros" color="#E74C18" />
    {livro.map(book=><GaleriaItem livro={book.volumeInfo} />)}


    </section>
  )
}
}

export default Galeria
