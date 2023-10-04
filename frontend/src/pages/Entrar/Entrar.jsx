import React from 'react'
import styles from './Entrar.module.css'
import EntrarBanner from '../../assets/SigninBanner.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Entrar = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  

  return (
    <div className={styles.caixaEntrar}>
      <div className={styles.caixaImagem}>
        <img src={EntrarBanner}  />
      </div>
      <form  className={styles.caixaForm}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email</label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Senha</label>
          <input type="password" className={styles.input} />
        </div>
         
        <button type='submit'  className={styles.entrar}>Entrar</button>
        <Link to="/cadastrar" className={styles.cadastro}>Cadastrar</Link>
      </form>
    </div>
  )
}

export default Entrar