import React from 'react';
import login from '../assets/img/avatar.svg';
import cart from '../assets/img/cart.png';
import styles from '../assets/css/Menu.module.css'

const Menu = ({menu}) => {
  return (
    <nav>
      <ul className={styles.nav}>
        {menu.map(item=><li><a href='./'>{item}</a></li>)}
        <li>
          <img src={login} alt="" />
        </li>
        <li>
          <img src={cart} alt="" />
        </li>
      </ul>
    </nav>
  )
}

export default Menu
