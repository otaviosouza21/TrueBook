import React from 'react';
import styles from '../assets/css/Input.module.css';
import { GlobalContext } from './GlobalContext';

const Input = ({ label, type, id }) => {
  const { form, setForm } = React.useContext(GlobalContext);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }



  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={handleChange}
        value={form[id]}
      />
    </div>
  );
};

export default Input;
