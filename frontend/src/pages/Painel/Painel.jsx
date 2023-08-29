import React from 'react'
import styles from './Painel.module.css'

const Painel = () => {
  return (
    <div className={styles.painel}>
        <div className={styles.ultimoJogo}>
          <div className={styles.imagemUltimoJogo}>
            <img src="" alt="" />
          </div>
          <div className={styles.contextoUltimoJogo}>
            <p>Ultimo jogo com os amigos</p>
            <h1>Valorant</h1>
            <span>Jogo de Tiro</span>
            {/* amigos */}
            <button>Jogar Novamente</button>
          </div>
        </div>
        <div className={styles.proximaJogatina}>
          
        </div>
        <div className={styles.listaAmigos}>

        </div>
        <div className={styles.iniciar}>
          
        </div>
    </div>
  )
}

export default Painel