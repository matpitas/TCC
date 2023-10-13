import React, { useEffect, useState } from 'react'
import styles from './FriendRequest.module.css'

import {AiOutlineCheck,AiOutlineClose} from 'react-icons/ai'
import axios from 'axios'
import { toast } from 'react-toastify'


const FriendRequest = ({idAmigo,idAmizade}) => {

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
  

  const handleAcceptReq = async (e) => {
    e.preventDefault()
    axios({
      method: "get",
      url: "http://localhost:3333/friends/request/accept/" + idAmizade,
    }).then((response) => {
        if(response.data) {
          toast.success("Solicitação de Amizade Aceita!")
        }
        
    })

  }

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
            <button onClick={(e) => handleAcceptReq(e)}><AiOutlineCheck /></button>
            <button><AiOutlineClose /></button>
        </div>
    </div>
  )
}

export default FriendRequest