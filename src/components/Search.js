import React from 'react'
import lupa from '../assets/img/lupa.png'
import styles from '../assets/css/Search.module.css'

const Search = () => {
  return (
    <div className={styles.container}>
      <img style={{width:'20px'}} src={lupa} alt="" />
      <input type="text" placeholder='Qual livro está procurando hoje?' />
    </div>
  )
}

export default Search
