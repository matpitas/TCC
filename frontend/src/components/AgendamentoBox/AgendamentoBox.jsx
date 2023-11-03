import React from 'react'
import styles from './AgendamentoBox.module.css'

import { format } from "date-fns"

const AgendamentoBox = ({agendamento}) => {

    const iniciacao = new Date(agendamento.iniciaEm)

    const data = format(iniciacao, "dd/MM")
    const horario = format(iniciacao, "dd/MM/yyyy HH:mm:ss")

  return (
    <div className={styles.agendamentoBoxContainer}>
        {agendamento.status == 0 ?
        <div className={styles.agendamentoBoxNotStatus}>
            <p>Não Agendado</p>
        </div> :
        <div className={styles.agendamentoBoxStatus}>
            <p>Agendado</p>
        </div>}
        <div className={styles.agendamentoBoxJogo}>
            <p>{agendamento.nomeJogo}</p>
        </div>
        <div className={styles.agendamentoBoxDia}>
            <p>{data}</p>
        </div>
        <div className={styles.agendamentoBoxHorario}>
            <p>{horario}</p>
        </div>          
    </div>
  )
}

export default AgendamentoBox