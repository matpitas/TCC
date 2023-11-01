import React from 'react'
import styles from './Notification.module.css'
import notificationLogo from '../../assets/logoNotification.png'

import {AiOutlineClose,AiOutlineCheck} from 'react-icons/ai'
import { format } from "date-fns"
import axios from 'axios'
import { toast } from 'react-toastify'

const Notification = ({criador, jogo, iniciaEm, idParticipante, idAgendamento, setLoader, loader}) => {
  
  const iniciaEmFormat = new Date(iniciaEm)
  const dataFormatada = format(iniciaEmFormat, "dd/MM/yyyy HH:mm:ss")

  const rejectNotif = async (idParticipante) => {
    await axios({
      method: "put",
      url: "http://localhost:3333/participant/schedule/response/" + idParticipante,
      data: {
        status: 2
      }
    }).then(async (__response) => {
      await axios({
        method: "get",
        url: "http://localhost:3333/scheduling/verify/" + idAgendamento
      }).then((__response) => {
        toast.error(`Você recusou o agendamento!`, {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
        });
        setLoader(!loader)
      })
    })
    
  }

  const acceptNotif = async (idParticipante) => {
    await axios({
      method: "put",
      url: "http://localhost:3333/participant/schedule/response/" + idParticipante,
      data: {
        status: 1
      }
    }).then(async (__response) => {
      await axios({
        method: "get",
        url: "http://localhost:3333/scheduling/verify/" + idAgendamento
      }).then((__response) => {
        toast.success("Presença confirmada!", {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
        });
        setLoader(!loader)
      })
    })
  }
  
  return (
    <div className={styles.notification}>
        <div className={styles.iconNotification}>
            <img src={notificationLogo} alt="" />
        </div>
        <div className={styles.contentNotification}>
            <h2><span>{criador}</span> marcou um agendamento com você para o jogo <span>{jogo}</span></h2>
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