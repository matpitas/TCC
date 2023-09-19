import React from 'react'
import styles from './friendBox.module.css'

const FriendBox = ({img, status, nome}) => {
  return (
    <div className={styles.friendBox}>
        <div className={styles.avatarFriendBox}>
          <img src={img} alt="" />
        </div>
        <div className={styles.nomeFriendBox}>
          <h2>{nome}</h2> 
        </div>
        
    </div>
  )
}

export default FriendBox   