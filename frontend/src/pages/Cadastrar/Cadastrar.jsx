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

    if (file) {
      setAvatar(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !email || !senha || !conSenha || !avatar) {
      toast.error('Erro: preencha todos os campos.');
      return;
    }

    if (senha !== conSenha) {
      toast.error('Erro: senhas não correspondem.');
      return;
    }

    await axios({
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: 'http://localhost:3333/users/create',
      data: {
        nome,
        senha,
        email,
        avatar,
      }
    }).then((response) => {
      if (!response.data.ID) {
        toast.error("Houve um erro no seu cadastro.")
        return;
      }

      toast.success(
        "Cadastro efetuado com sucesso"
      )
    }).catch(e => {
      toast.error(e)
    })
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
        <input type="file" title='Escolha uma Imagem' className={styles.input} accept="image/*" value="" onChange={(e) => handleAvatarChange(e)} />
      </div>



      <button type='submit' className={styles.cadastro}>Cadastrar</button>
      <Link to="/entrar" className={styles.entrar}>Voltar</Link>
    </form>
  )
}

export default Cadastrar