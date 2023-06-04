import React from 'react';
import Search from './Search';
import Menu from './Menu';
import styles from '../assets/css/Header.module.css';
import Titulo from './Titulo';
import { GlobalContext } from './GlobalContext';
import DropLogin from './DropLogin';
import DropCart from './DropCart';

const Header = () => {
  const itensMenu = [
    {
      id:"/",
      nome:"Inicio"
    },
    {
      id:"livros",
      nome:"Livros"
    },
    {
      id:"sobre",
      nome:"Sobre"
    }
  ];
  const {setLogin,login,cart,setCart} = React.useContext(GlobalContext)

  return (
    <header className={styles.container}>
      <div className={styles.content}>
       <Titulo color='#fff' titulo="True Books." />
        <Search />
        <Menu menu={itensMenu} setLogin={setLogin} enterLogin={login} cart={cart} setCart={setCart} />
        {login && <DropLogin /> }
        {cart && <DropCart />}
      </div>
    </header>
  );
};

export default Header;
