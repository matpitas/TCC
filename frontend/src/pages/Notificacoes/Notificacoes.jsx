import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Notification from '../../components/Notification/Notification'
import styles from './Notificacoes.module.css'
import Cookies from 'js-cookie'
import axios from 'axios'

const Notificacoes = () => {
  
  const [notificacoes, setNotificacoes] = useState()
  const idSession = Cookies.get("id") 

  useEffect(() => {
    const initNotification = async () => {
      await axios({
        method: "get",
        url: "http://localhost:3333/participant/schedule/pending/" + idSession
      }).then((response) => {
        setNotificacoes(response.data)
      })
    }

    initNotification()
  }, [])

  return (
    <div className={styles.contentNotif}>
      {notificacoes?.map(notif => (
        <Notification key={notif.idParticipante} criador={notif.nome} jogo={notif.nomeJogo} iniciaEm={notif.iniciaEm} idParticipante={notif.idParticipante} />
      ))}
    </div>
  )
}

export default Notificacoes