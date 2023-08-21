import React from 'react'
import styles from './Cadastrar.module.css'
import Input from '../../components/Input/Input'
import { Link } from 'react-router-dom'

const Cadastrar = () => {
  return (
    <form className={styles.caixaCadastro}>
        <h1>Cadastro</h1>

        <Input titulo='Nome' tipo='text'/>
        <Input titulo='Email' tipo='text'/>
        <div className={styles.passwordGrid}>
          <Input titulo='Senha' tipo='password'/>
          <Input titulo='Confirmar Senha' tipo='password'/>
        </div>

        
        <button type='submit' className={styles.cadastro}>Cadastrar</button>
        <Link to="/entrar" className={styles.entrar}>Voltar</Link>
    </form>
  )
}

export default Cadastrar