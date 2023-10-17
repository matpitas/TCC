import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import BannerAgendamento from '../../assets/BannerAgendamento.png'
import Avatar from '../../components/Avatar/Avatar'
import AvatarPhoto from '../../components/AvatarPhoto/AvatarPhoto'
import styles from './Agendar.module.css'

const Agendar = () => {
  
  const [friendList, setFriendList] = useState()
  const [participante, setParticipante] = useState()
  const idSession = Cookies.get('id')

  useEffect(() => {
    const attAmigos = async () => {
      await axios({
        method: "post",
        url: "http://localhost:3333/friends/list",
        data: {
          "id": idSession
        }
        }).then((response) => {
            if(!response.data) {
              return
            }
            
            setFriendList(response.data)
        })
    }

    attAmigos()
  }, [])

  return (
    <div className={styles.agendamento}>
        <div className={styles.formAgendar}>
  
            <div className={styles.formInputsAgendar}>

              <h1>Agendamento</h1>

              <div className={styles.inputsAgendar}>
                <label htmlFor="">Nome do Jogo</label> 
                <input type="text" />
              </div>

              <div className={styles.inputsAgendar}>
                <label htmlFor="">Data do Jogo</label> 
                <input type="datetime-local" />
              </div>

              <div className={styles.inputsAgendar}>
                <label htmlFor="">Participantes</label> 
                <div className={styles.friendsCont}>
                  <select name="participantes"  id="">
                    {
                      friendList && friendList.map((friend) => (
                        <option>{friend.nome}</option>
                      ))
                    }
                  </select>
                  <button id={styles.btnAdd} onClick={(e) => {}}>Adicionar</button>
                </div>
                <div className={styles.agendamentoParticipantes}>
                  <Avatar>
                    {participante && participante.map((part) => (
                      <AvatarPhoto img={part.avatar} nome={part.nome} />
                    ))}
                  </Avatar>
                </div>
              </div>

              <button type="submit">Agendar</button>
            </div>
        </div>
        <div className={styles.bannerAgendar}>
          <img src={BannerAgendamento} alt="" />
        </div>
    </div>
  )
}

export default Agendar