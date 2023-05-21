import React from 'react';
import Search from './Search';
import Menu from './Menu';
import styles from '../assets/css/Header.module.css';
import Titulo from './Titulo';

const Header = () => {
  const itensMenu = ['Inicio', 'Livros', 'Sobre'];

  return (
    <header className={styles.container}>
      <div className={styles.content}>
       <Titulo color='#fff' titulo="True Books." />
        <Search />
        <Menu menu={itensMenu} />
      </div>
    </header>
  );
};

export default Header;
