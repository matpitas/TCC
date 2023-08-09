import React from 'react'
import styles from './CardHome.module.css'

import LogoImage from '../../assets/LogoImage.png'

const CardHome = ({icone, titulo, descricao}) => {
  return (
    <div className={styles.card}>
        <div className={styles.icone}>
            {icone}
        </div>
        <div className={styles.titulo}>
            {titulo}
        </div>
        <div className={styles.descricao}>
            {descricao}
        </div>
        <div className={styles.logo}>
            <img src={LogoImage} alt="" />
        </div>
    </div>
  )
}

export default CardHome