import React from 'react'
import styles from './FriendRequest.module.css'

import {AiOutlineCheck,AiOutlineClose} from 'react-icons/ai'
import AvatarPhoto from '../AvatarPhoto/AvatarPhoto'


const FriendRequest = ({photoProfile, nameProfile}) => {
  return (
    <div className={styles.FriendRequest}>
        <div className={styles.photoFriendR}>
            <AvatarPhoto img={photoProfile} />
        </div>
        <div className={styles.nameFriendR}>
            {nameProfile}
            <br />
            <p>gostaria de ser seu amigo</p>
        </div>
        <div className={styles.buttonsFriendR}>
            <button><AiOutlineCheck /></button>
            <button><AiOutlineClose /></button>
        </div>
    </div>
  )
}

export default FriendRequest