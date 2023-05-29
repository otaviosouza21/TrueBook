import React from 'react';
import Input from './Input';
import styles from '../assets/css/Formulario.module.css';
import Button from './Button';
import Titulo from './Titulo';
import { GlobalContext } from './GlobalContext';
import Axios from 'axios';



const styleButton = {
  backgroundColor: 'green',
  gridColumn: '1/-1',
};

const styleTitulo = {
  color: '#E74C18',
  gridColumn: '1/-1',
};

const setInputs = [
  {
    label: 'Nome completo',
    type: 'text',
    id: 'nome',
  },
  {
    label: 'Data de Nascimento',
    type: 'date',
    id: 'nascimento',
  },
  {
    label: 'Endereco',
    type: 'text',
    id: 'endereco',
  },
  {
    label: 'CEP',
    type: 'text',
    id: 'cep',
  },
  {
    label: 'Bairro',
    type: 'text',
    id: 'bairro',
  },
  {
    label: 'Complemento',
    type: 'text',
    id: 'complemento',
  },
  {
    label: 'Cidade',
    type: 'text',
    id: 'cidade',
  },
  {
    label: 'Estado',
    type: 'text',
    id: 'estado',
  },
];

const Formulario = () => {
  const {form} = React.useContext(GlobalContext);


  function handleSubmit(e) {
    e.preventDefault();
    Axios.post("http://localhost:3001/register",form)
    .then((res)=>{
      console.log("Dados Enviados com sucesso");
      console.log(res);
    })
  }

  return (
    <form onSubmit={handleSubmit} method="POST" className={styles.container}>
      <Titulo titulo="Formulario de cadastro" estilo={styleTitulo} />
      {setInputs.map(({ label, type, id }) => (
        <Input key={id} label={label} type={type} id={id} />
      ))}
      <Button text="Cadastrar" position={styleButton} />
      
    </form>
  );
};

export default Formulario;
