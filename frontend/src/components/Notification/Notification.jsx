import React from 'react'
import styles from './Notification.module.css'
import notificationLogo from '../../assets/logoNotification.png'

import {AiOutlineClose,AiOutlineCheck} from 'react-icons/ai'
import { format } from "date-fns"
import axios from 'axios'

const Notification = ({criador, jogo, iniciaEm, idParticipante}) => {
  
  const iniciaEmFormat = new Date(iniciaEm)
  const dataFormatada = format(iniciaEmFormat, "dd/MM/yyyy HH:mm:ss")

  const rejectNotif = async (idParticipante) => {
    await axios({
      method: "put",
      url: "http://localhost:3333/participant/schedule/response/" + idParticipante,
      data: {
        status: 2
      }
    }).then((response) => {
      console.log(response.data)
    })
    
  }

  const acceptNotif = async (idParticipante) => {
    await axios({
      method: "put",
      url: "http://localhost:3333/participant/schedule/response/" + idParticipante,
      data: {
        status: 1
      }
    }).then((response) => {
      console.log(response.data)
    })
  }
  
  return (
    <div className={styles.notification}>
        <div className={styles.iconNotification}>
            <img src={notificationLogo} alt="" />
        </div>
        <div className={styles.contentNotification}>
            <h2><span>{criador}</span> marcou um agendamento com você para o jogo {jogo}</h2>
            <p>Inicia em: {dataFormatada}</p>
        </div>
        <div className={styles.actionNotification}>
            <button onClick={() => {rejectNotif(idParticipante)}} className={styles.dismissNotification}>{<AiOutlineClose />}</button>
            <button onClick={() => {acceptNotif(idParticipante)}} className={styles.acceptNotification}>{<AiOutlineCheck />}</button>
        </div>
    </div>
  )
}

export default Notification