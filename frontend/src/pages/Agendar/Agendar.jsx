import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import BannerAgendamento from '../../assets/BannerAgendamento.png'
import Avatar from '../../components/Avatar/Avatar'
import AvatarPhoto from '../../components/AvatarPhoto/AvatarPhoto'
import BoxSelect from '../../components/boxSelect/boxSelect'
import styles from './Agendar.module.css'

const Agendar = () => {
  
  const [friendList, setFriendList] = useState()
  const [suggest, setSuggest] = useState()
  const [participante, setParticipante] = useState()
  const [horario, setHorario] = useState()
  const [jogo, setJogo] = useState()
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

  const handleSuggestion = (e) => {
    e.preventDefault()

    const value = e.target.value

    
    const suggestions = friendList.filter((friends) => {
      return friends.nome.startsWith(value) 
    })
    
    setSuggest(suggestions)
  }

  return (
    <div className={styles.agendamento}>
        <div className={styles.bannerAgendar}>
          <img src={BannerAgendamento} alt="" />
        </div>
        <div className={styles.formAgendar}>
          <div className={styles.title}>
            <h3>Agendamento</h3>
          </div>

          <div className={styles.formAgendarGroup}>
            <label htmlFor="">Jogo</label>
            <select name="" id="">
              
            </select>
          </div>
          <div className={styles.formAgendarGroup}>
            <label htmlFor="">Horário</label>
            <input type="text" />
          </div>
          <div className={styles.formAgendarGroup}>
            <label htmlFor="">Amigos</label>
            <input type="text" onChange={(e) => handleSuggestion(e)}/>
            <div className={styles.suggestionsAmigos}>
              {
                suggest?.map((friend) => (
                  <h1>a</h1>
                ))
              }
            </div>
          </div>

          <div className={styles.confirmedFriends}>
            a
          </div>

          <div className={styles.btnAgendamentos}>
            <button>Agendar</button>
          </div>

        </div>
        
    </div>
  )
}

export default Agendar