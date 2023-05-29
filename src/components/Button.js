import React from 'react'
import styles from '../assets/css/Button.module.css'




const Button = ({text,position}) => {
  return (
    <button style={position} className={styles.button}>
      {text}
    </button>
  )
}

export default Button
