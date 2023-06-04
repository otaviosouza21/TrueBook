import React from 'react';
import Button from './Button';
import styles from '../assets/css/DropLogin.module.css';
import { Link } from 'react-router-dom';

const DropLogin = () => {
  return (
    <div className={styles.container}>
      <h3>Acesse sua conta</h3>
      <div className={styles.input}>
        <label htmlFor="usuario">Usuario</label>
        <input type="text" id="usuario" name="usuario" />
      </div>
      <div className={styles.input}>
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" name="senha" />
      </div>
      <a href='./'>Esqueci minha senha</a>
      <nav className={styles.buttons}>
        <Button text="Entrar" /> 
        <Link to="formulario"><Button text="Criar Conta" /></Link>
      </nav>
    </div>
  );
};

export default DropLogin;
