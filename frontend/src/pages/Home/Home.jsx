import React from 'react'
import styles from './Home.module.css'


import Capa from '../../assets/capa1.png'
import Banner from '../../assets/banner.png'

import CardHome from '../../components/CardHome/CardHome'


import { AiOutlineThunderbolt, AiOutlineFieldTime } from 'react-icons/ai'
import { MdOutlineMoneyOffCsred } from 'react-icons/md'

const Home = () => {
  return (
    <div>
      <div className={styles.principal}>
        <div className={styles.conteudoTexto}>
          <div className={styles.textoPrincipal}>
            <p>Uma aplicação colaborativa de anotação e compromissos.</p>
            <h1>Controle seus compromissos e eventos.</h1>
          </div>
          <button>Disponível já!</button>
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

export default Home