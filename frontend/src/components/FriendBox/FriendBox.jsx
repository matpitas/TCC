import React from 'react'
import styles from './friendBox.module.css'

const FriendBox = ({img, nome}) => {

  const url = "http://localhost:3333/uploads/"+img

  return (
    <div className={styles.friendBox}>
        <div className={styles.avatarFriendBox}>
          <img src={url} alt="" />
        </div>
        <div className={styles.nomeFriendBox}>
          <h2>{nome}</h2> 
        </div>
        
    </div>
  )
}

export default FriendBox   