import React from 'react'
import styles from './Entrar.module.css'
import EntrarBanner from '../../assets/SigninBanner.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import  axios  from 'axios'
import useAuthContext from '../../Hooks/useAuthContext'
import useUserContext from '../../Hooks/useUserContext'
import Cookies from 'js-cookie'
import {toast, ToastContainer} from 'react-toastify'


const Entrar = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const {login, setLogin} = useAuthContext()
  const {user, setUser} = useUserContext()

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    axios({
      method: 'post',
      url: 'http://localhost:3333/auth/user',
      data:{
        email,
        senha
      }
    }).then((response) => {
      if(response.data.msg){
        toast.error(response.data.msg, {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
        });
      }

      if(response.data.idUsuario){
        const emailUser = response.data.email
        const nomeUser = response.data.nome
        
        setLogin(!login)

        setUser({
          name: nomeUser,
          email: emailUser
        });

        Cookies.set("email", emailUser)
        Cookies.set("nome", nomeUser)
        
      }
    })
  }

  return (
    <div className={styles.caixaEntrar}>
      <div className={styles.caixaImagem}>
        <img src={EntrarBanner}  />
      </div>
      <form  className={styles.caixaForm} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email</label>
          <input type="text" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Senha</label>
          <input type="password" className={styles.input}  value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
         
        <button type='submit'  className={styles.entrar}>Entrar</button>
        <Link to="/cadastrar" className={styles.cadastro}>Cadastrar</Link>
      </form>

      
    </div>
  )
}

export default Entrar