import React from 'react'
import { Tooltip } from 'react-tooltip'
import styles from './AvatarPhoto.module.css'
import non from '../../assets/non.jpg'

const AvatarPhoto = ({ img, nome }) => {

  const url = "http://localhost:3333/uploads/"+img

  return (
    <div className={styles.bordaAvatar}>
        <img src={url} data-tooltip-id="Avatar" data-tooltip-content={nome} className={styles.AvatarImagem} />
        <Tooltip id="Avatar" />
    </div>
  )
}

export default AvatarPhoto