import React from 'react';
import styles from '../assets/css/Titulo.module.css';

const Titulo = ({ titulo, color }) => {
  return (
    <h2 style={{ color: {color} }} className={styles.h2}>
      {titulo}
    </h2>
  );
};

export default Titulo;
