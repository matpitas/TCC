import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import BannerAgendamento from '../../assets/BannerAgendamento.png'
import styles from './Agendar.module.css'
import {toast} from 'react-toastify'

const Agendar = () => {
  
  const [friendList, setFriendList] = useState()
  const [searchFriends, setSearchFriends] = useState("")
  const [horario, setHorario] = useState("")
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
              return toast.error(response.data.msg, {
                position: "bottom-right",
                autoClose: 5000,
                theme: "dark",
              });
            }
            setFriendList(response.data)
            console.log(friendList)
        })
    }

    attAmigos()
  }, [])

  const filteredAmigos = searchFriends?.length
  ?  friendList.filter((friend) => friend?.nome?.includes(searchFriends))
  :  null

  const handleSelecionar = (friend) => {
    
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
            <input type="text" onChange={(e) => setHorario(e.target.value)} value={horario} />
          </div>
          <div className={styles.formAgendarGroup}>
            <label htmlFor="">Amigos</label>
            <input type="text" onChange={(e) => setSearchFriends(e.target.value)} value={searchFriends}/>
            <div className={styles.suggestionsAmigos}>
              {
                filteredAmigos?.map((friend) => (
                  <div key={friend.id}>
                    <button onClick={() => handleSelecionar(friend)}>Favoritar</button>
                    <h1>{friend.nome}</h1>
                  </div>
                ))
              }
            </div>
          </div>

          <div className={styles.confirmedFriends}>
            
          </div>

          <div className={styles.btnAgendamentos}>
            <button>Agendar</button>
          </div>

        </div>
        
    </div>
  )
}

export default Agendar