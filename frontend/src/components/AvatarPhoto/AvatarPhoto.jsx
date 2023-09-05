import React from 'react'
import { Tooltip } from 'react-tooltip'
import styles from './AvatarPhoto.module.css'

const AvatarPhoto = ({ img, nome }) => {
  return (
    <div className={styles.bordaAvatar}>
        <img src={img} data-tooltip-id="Avatar" data-tooltip-content={nome} className={styles.AvatarImagem} />
        <Tooltip id="Avatar" />
    </div>
  )
}

export default AvatarPhoto