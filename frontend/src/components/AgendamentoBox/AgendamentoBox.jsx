import React, { useState } from 'react'
import styles from './AgendamentoBox.module.css'

import { format } from "date-fns"
import Cookies from 'js-cookie'
import axios from 'axios'
import { toast } from 'react-toastify'

const AgendamentoBox = ({agendamento}) => {

    const iniciacao = new Date(agendamento.iniciaEm)

    const data = format(iniciacao, "dd/MM")
    const horario = format(iniciacao, "dd/MM/yyyy HH:mm:ss")

    const [deleting, setDeleting] = useState(true)

    const idSessao = Cookies.get("id")

    const excluirAgendamento = async (e) => {
        e.preventDefault()
        await axios({
        method: "post",
        url: "http://localhost:3333/scheduling/delete/" + agendamento.idAgendamento,
        data: {
            idSessao: idSessao,
            usuarioCriador: agendamento.usuarioCriador,
            idParticipante: agendamento.idParticipante,
        }
        }).then((response) => {
            if(response.data){
                toast.success("Agendamento Excluído.")
            }
        })
    }

  return (
    <div className={styles.agendamentoBoxContainer}>
        {agendamento.statusAgendamento == 0 
        ?
        <div className={styles.agendamentoBoxNotStatus}>
            <p>Não Agendado</p>
        </div> 
        : agendamento.statusAgendamento == 1 ?
        <div className={styles.agendamentoBoxStatus}>
            <p>Agendado</p>
        </div> 
        : 
        <div className={styles.agendamentoFinishedBoxStatus}>
            <p>Finalizado</p>
        </div> }
        <div className={styles.agendamentoBoxJogo}>
            <p>{agendamento.nomeJogo}</p>
        </div>
        <div className={styles.agendamentoBoxDia}>
            <p>{data}</p>
        </div>
        <div className={styles.agendamentoBoxHorario}>
            <p>{horario}</p>
        </div>        
        {
            agendamento.statusAgendamento != 2 ?
            deleting ? 
            <div className={styles.deleting} onClick={() => setDeleting(!deleting)}>Excluir Agendamento</div>
            :
            <div style={{display: 'flex', gap: "5px"}}>
                <div style={{color: "rgb(16, 83, 16)", backgroundColor: "rgb(110, 181, 110)", fontSize: "1rem", padding: "10px 15px", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }} onClick={(e) => {excluirAgendamento(e)}}>Sair do Agendamento</div>
                <div className={styles.deleting} onClick={() => setDeleting(!deleting)}>Cancelar</div>
            </div>
            : 
            <div>
                <div className={styles.realized}>Já foi Realizado</div>
            </div>
        }
    </div>
  )
}
export default AgendamentoBox