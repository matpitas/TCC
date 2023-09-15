import React from 'react'
import styles from './Notification.module.css'
import notificationLogo from '../../assets/logoNotification.png'

const Notification = () => {
  return (
    <div className={styles.notification}>
        <div className={styles.iconNotification}>
            <img src={notificationLogo} alt="" />
        </div>
        <div className={styles.contentNotification}>
            <h2></h2>
            <p></p>
        </div>
        <div className={styles.actionNotification}>
            <button className={styles.dismissNotification}>X</button>
            <button className={styles.acceptNotification}>V</button>
        </div>
    </div>
  )
}

export default Notification