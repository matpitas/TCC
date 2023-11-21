import React, { useEffect, useState } from 'react'
import styles from './ListagemAgendamento.module.css'
import AgendamentoBox from '../../components/AgendamentoBox/AgendamentoBox'
import Cookies from "js-cookie"
import axios from 'axios'

const ListagemAgendamento = () => {

  const idSession = Cookies.get("id")
  const [agendamentos, setAgendamentos] = useState()
  const [finishedAgendamentos, setFinishedAgendamentos] = useState()

  useEffect(() => {
    const initAgendamentos = async () => {
      axios({
        method: "get",
        url: "http://localhost:3333/scheduling/" + idSession,
      }).then((response) => setAgendamentos(response.data))
    }
    const initFinishedAgendamentos = async () => {
      axios({
        method: "get",
        url: "http://localhost:3333/scheduling/finished/" + idSession,
      }).then((response) => setFinishedAgendamentos(response.data))
    }

    initFinishedAgendamentos()
    initAgendamentos()
  }, [])


  return (
    <div>
        <div className={styles.todosAgendamentos}>
            <h1>Aqui estão seus agendamentos futuros</h1>    
            <div className={styles.gridAgendamentosUsuario}>
                
                {agendamentos?.map((agenda) => (
                  <AgendamentoBox key={agenda.idAgendamento} agendamento={agenda}  />
                ))}
            </div>
            <h1>Agendamentos Finalizados</h1> 
            <div className={styles.gridAgendamentosUsuario}>
                
                {finishedAgendamentos?.map((agenda) => (
                  <AgendamentoBox key={agenda.idAgendamento} agendamento={agenda}  />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ListagemAgendamento