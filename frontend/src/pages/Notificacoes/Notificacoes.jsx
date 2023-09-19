import React from 'react'
import Notification from '../../components/Notification/Notification'
import styles from './Notificacoes.module.css'

const Notificacoes = () => {
  return (
    <div className={styles.contentNotif}>
      <Notification  />
      <Notification  />
      <Notification  />
    </div>
  )
}

export default Notificacoes