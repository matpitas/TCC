import React, { useEffect, useState } from 'react'
import FriendRequest from '../../components/FriendRequest/FriendRequest'
import styles from './Amigos.module.css'
import axios from 'axios'
import Cookies from "js-cookie"

const Amigos = () => {

  const [requests, setRequests] = useState([])
  const id = Cookies.get("id")

  useEffect(() => {

    const data = async () => {
      await axios({
        method: "post",
        url: 'http://localhost:3333/friends/request',
        data:{
          id
        }
      }).then((response) => {
        return response.data
      }).then((data) => {
        setRequests(data)
      })
    }
    data()
    console.log(requests)
    
  }, [])

    
  return (
    <div className={styles.AmigosPage}>

      <h1>Solicitações de Amizade</h1>

      <div className={styles.AmigosListaTotal}>
        { requests && requests.map((request) => (
            <FriendRequest key={request.idAmizade} idAmigo={request.idCriador}/>
        ))}
        
      </div>  
    </div>
  )
}

export default Amigos