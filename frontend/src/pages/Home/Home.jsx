import React, { memo } from 'react'
import styles from './Home.module.css'


import Capa from '../../assets/capa1.png'
import Banner from '../../assets/banner.png'

import CardHome from '../../components/CardHome/CardHome'


import { AiOutlineThunderbolt, AiOutlineFieldTime } from 'react-icons/ai'
import { MdOutlineMoneyOffCsred } from 'react-icons/md'
import Avatar from '../../components/Avatar/Avatar'
import { Link } from 'react-router-dom'
import useAuthContext from '../../Hooks/useAuthContext'

const Home = () => {

  const {login, setLogin} = useAuthContext()

  return (
    <div>
      <div className={styles.principal}>
        <div className={styles.conteudoTexto}>
          <div className={styles.textoPrincipal}>
            <p>Uma aplicação para gerenciamento de agenda de jogos com seus amigos</p>
            <h1>Controle horários de jogos com seus amigos!</h1>
          </div>
          <Link to="/entrar" className={styles.buttonHome}>Disponível já!</Link>
        </div>
        <div className={styles.conteudoImagem}>
          <img src={Capa} alt="" />
        </div>
      </div>

      <div className={styles.cards}>
        <CardHome icone={<AiOutlineThunderbolt />} titulo="Intuitivo" descricao="Com o foco em Interfaces amigáveis, nossa aplicação dificilmente te deixará perdido." />
        <CardHome icone={<MdOutlineMoneyOffCsred />} titulo="Gratuito " descricao="Você não pagará nada para desfrutar de nossos serviços" />
        <CardHome icone={<AiOutlineFieldTime />} titulo="Tempo Real" descricao="Contamos com a tecnologia em tempo real para que possamos entregar as informações o mais rápido possível" />
      </div>

      <h1 className={styles.subtitulo}>Crie Salas com seus Amigos</h1>

      <div className={styles.banner}>
        <img src={Banner} alt="" />
      </div>



    </div>
  )
}

export default memo(Home)