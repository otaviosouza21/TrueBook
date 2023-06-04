import React from 'react';
import login from '../assets/img/avatar.svg';
import imgcart from '../assets/img/cart.png';
import styles from '../assets/css/Menu.module.css'
import { Link } from 'react-router-dom';;

const Menu = ({menu,setLogin,enterLogin,cart,setCart}) => {

function loginCLick(){
 setLogin(!enterLogin)
 setCart(false)
}

function cartClick(){
  setCart(!cart)
  setLogin(false)
}


  return (
    <nav>
      <ul className={styles.nav}>
        {menu.map(item=><li key={item.id}><Link to={item.id}>{item.nome}</Link></li>)}
        <li>
          <img src={login} onClick={loginCLick} alt="" />
        </li>
        <li>
          <img src={imgcart} onClick={cartClick} alt="" />
        </li>
      </ul>
    </nav>
  )
}

export default Menu
