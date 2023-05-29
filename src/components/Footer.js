import React from 'react';
import Titulo from './Titulo';
import styles from '../assets/css/Footer.module.css';

import insta from '../assets/img/instagram.svg';
import face from '../assets/img/face.svg';
import twitter from '../assets/img/twitt.svg';

const Footer = () => {
  const itensMenu = ['Menu', 'Home', 'Sobre', 'Livros'];
  const itensCadastro = ['Cadastro', 'Cadastrar', 'Meus Livros', 'Acesso'];
  const itensFaq = ['Faq', 'Contato', 'Duvidas', 'SAC'];

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <Titulo titulo="True Books." color="#fff" />
        <div className={styles.redes}>
          <img src={insta} alt="Instagram" />
          <img src={face} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </div>
        <nav className={styles.menu}>
          <ul>
            {itensMenu.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {itensCadastro.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {itensFaq.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
