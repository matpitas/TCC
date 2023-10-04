import React, { memo } from 'react'
import styles from './Cadastrar.module.css'
import { Link } from 'react-router-dom'

const Cadastrar = () => {
  return (
    <form className={styles.caixaCadastro}>
        {/* <h1>Cadastro</h1>

        <Input titulo='Nome' tipo='text' placeholder='Matheus Pitas Baptista'/>
        <Input titulo='Email' tipo='text' placeholder='email@email.com'/>
        <div className={styles.passwordGrid}>
          <Input titulo='Senha' tipo='password' placeholder='******'/>
          <Input titulo='Confirmar Senha' tipo='password' placeholder='******'/>
        </div>
        <Input titulo='Discord' tipo='text' placeholder='pitzas#2332'/>
        <Input titulo='Avatar' tipo='file'/>

        
        <button type='submit' className={styles.cadastro}>Cadastrar</button>
        <Link to="/entrar" className={styles.entrar}>Voltar</Link> */}
    </form>
  )
}

export default memo(Cadastrar)