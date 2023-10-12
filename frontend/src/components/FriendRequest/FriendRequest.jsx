import React, { useEffect, useState } from 'react'
import styles from './FriendRequest.module.css'

import {AiOutlineCheck,AiOutlineClose} from 'react-icons/ai'
import axios from 'axios'


const FriendRequest = ({idAmigo}) => {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {

    const verUsuario = async () => {
      await axios({
                method: "get",
                url: "http://localhost:3333/users/"+idAmigo
              }).then((response) => {
                  setImage(response.data[0].avatar)
                  setName(response.data[0].nome)
              })
            }

    if(idAmigo) {
      verUsuario()
    }
  }, [])
  

  return (
    <div className={styles.FriendRequest}>
        <div className={styles.photoFriendR}>
          <img src={image && "http://localhost:3333/uploads/"+image} alt="" />
        </div>
        <div className={styles.nameFriendR}>
            {name && name}
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