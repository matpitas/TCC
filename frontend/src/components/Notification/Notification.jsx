import React from 'react'
import styles from './Notification.module.css'
import notificationLogo from '../../assets/logoNotification.png'

import {AiOutlineClose,AiOutlineCheck} from 'react-icons/ai'

const Notification = () => {
  return (
    <div className={styles.notification}>
        <div className={styles.iconNotification}>
            <img src={notificationLogo} alt="" />
        </div>
        <div className={styles.contentNotification}>
            <h2><span>Matheus Pitas Baptista</span> gostaria que você fizesse parte do grupo de amigos dele.</h2>
            <p>Há 4 minutos</p>
        </div>
        <div className={styles.actionNotification}>
            <button className={styles.dismissNotification}>{<AiOutlineClose />}</button>
            <button className={styles.acceptNotification}>{<AiOutlineCheck />}</button>
        </div>
    </div>
  )
}

export default Notification