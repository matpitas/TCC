import React from 'react'
import styles from './AvatarPhoto.module.css'

const AvatarPhoto = ({ img }) => {
  return (
    <div className={styles.bordaAvatar}>
        <img src={img} className={styles.AvatarImagem} />
    </div>
  )
}

export default AvatarPhoto