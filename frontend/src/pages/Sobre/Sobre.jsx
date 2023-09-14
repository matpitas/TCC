import React, { memo } from 'react'
import styles from './Sobre.module.css'
import SobreImage from '../../assets/about.png'

const Sobre = () => {
  
  return (
    <div className={styles.sobre}>
      <img src={SobreImage} className={styles.SobreImagem} alt="" />
    </div>
  )
}

export default memo(Sobre)