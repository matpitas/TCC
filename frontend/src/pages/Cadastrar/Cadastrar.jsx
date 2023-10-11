import React from 'react'
import styles from './Cadastrar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Cadastrar = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [conSenha, setConSenha] = useState('')
  const [avatar, setAvatar] = useState(null)

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]

    if(file){ 
      setAvatar(file)
    } 
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("nome",   nome)
    formData.append("email",  email)
    formData.append("senha",  senha)
    formData.append("avatar", JSON.stringify(avatar))

    if(nome && email && senha && conSenha && avatar){
      if(senha === conSenha){
        
        await axios({
          method: 'post',
          headers:{ 
            'Content-Type': 'multipart/form-data'
          },
          url: 'http://localhost:3333/users/create',
          data:{
            nome,
            senha,
            email,
            avatar,
          }
        }).then((response) => {
          if(response.data.ID){
            toast.success(
              "Cadastro efetuado com sucesso"
            )
          }else{
            toast.error(
              "Houve um erro no seu cadastro."
            )
          }
        }).catch(e => {
          toast.error(e)
        })
      }else{
        toast.error(
          "Senhas não são iguais"
        )
      }
    }else{
      toast.error(
        "Há campos não preenchidos"
      )
    }

    
  }

  return (
    <form encType="multipart/form-data" className={styles.caixaCadastro} onSubmit={(e) => handleSubmit(e)}>
        <h1>Cadastro</h1>

        <div className={styles.inputContainer}>
          <label className={styles.label}>Nome</label>
          <input type="text" placeholder='Matheus Pitas Baptista' className={styles.input} value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email</label>
          <input type="text" placeholder='email@email.com' className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.passwordGrid}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Senha</label>
            <input type="text" placeholder='******' className={styles.input} value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Confirmar Senha</label>
            <input type="text" placeholder='******' className={styles.input} value={conSenha} onChange={(e) => setConSenha(e.target.value)} />
          </div>
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Avatar</label>
            <input type="file" className={styles.input} accept="image/*" value="" onChange={(e) => handleAvatarChange(e)} />
        </div>
        

        
        <button type='submit' className={styles.cadastro}>Cadastrar</button>
        <Link to="/entrar" className={styles.entrar}>Voltar</Link> 
    </form>
  )
}

export default Cadastrar