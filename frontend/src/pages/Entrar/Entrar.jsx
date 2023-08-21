import React from 'react'
import Input from '../../components/Input/Input'
import styles from './Entrar.module.css'
import EntrarBanner from '../../assets/SigninBanner.png'
import { Link } from 'react-router-dom'


const Entrar = () => {
  return (
    <div className={styles.caixaEntrar}>
      <div className={styles.caixaImagem}>
        <img src={EntrarBanner}  />
      </div>
      <form  className={styles.caixaForm}>
        <Input titulo="Email" tipo='text'/> 
        <Input titulo="Senha" tipo='password'/> 
        <button type='submit' className={styles.entrar}>Entrar</button>
        <Link to="/cadastrar" className={styles.cadastro}>Cadastrar</Link>
      </form>
    </div>
  )
}

export default Entrar