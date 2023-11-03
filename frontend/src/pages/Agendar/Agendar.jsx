import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import BannerAgendamento from '../../assets/BannerAgendamento.png'
import styles from './Agendar.module.css'
import {toast} from 'react-toastify'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { IoMdAddCircleOutline } from 'react-icons/io'

const Agendar = () => {
  
  const [friendList, setFriendList] = useState()
  const [gameList, setGameList] = useState()
  const [searchFriends, setSearchFriends] = useState("")
  const [jogos, setJogos] = useState("")
  const [horarioInicio, setHorarioInicio] = useState("")
  const [horarioTermino, setHorarioTermino] = useState("")
  const idSession = Cookies.get('id')
  const nomeSession = Cookies.get('nome')
  const emailSession = Cookies.get('email')

  
  

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
        })
    }

    const attjogos = async () => {
      await axios({
        method: "get",
        url: "http://localhost:3333/game",
        }).then((response) => {
            if(!response.data) {
              return toast.error(response.data.msg, {
                position: "bottom-right",
                autoClose: 5000,
                theme: "dark",
              });
            }
            setGameList(response.data)
        })
    }

     
    attjogos()
    attAmigos()
  }, [])

  const filteredAmigos = searchFriends?.length
  ?  friendList.filter((friend) => {
    if(friend?.nome?.toLowerCase().includes(searchFriends.toLowerCase())){
      return friend?.nome?.toLowerCase().includes(searchFriends);
    }else{
      return friend?.isSelected;
    }
  })
  :  friendList

  const handleSelecionar = (id) => {
    const selected = friendList.map((friend) => friend.idAmigo == id ? {...friend, isSelected: !friend.isSelected} : friend)
    setFriendList(selected)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const selectedFriends = friendList.filter((friend) => friend?.isSelected)

    const dateNow = new Date()
    const hora1 = new Date(horarioInicio)
    const hora2 = new Date(horarioTermino)

    if(hora1 < dateNow || hora2 < dateNow){
      return toast.error("Data inválida", {
        position: "bottom-right",
        autoClose: 5000,
        theme: "dark",
      });
    }

    if(hora1 > hora2){
      return toast.error("Data inválida", {
        position: "bottom-right",
        autoClose: 5000,
        theme: "dark",
      });
    }

    if(selectedFriends.length < 2 || selectedFriends.length > 3){
      
      return toast.error("Número de Participantes Insuficientes ou a mais", {
        position: "bottom-right",
        autoClose: 5000,
        theme: "dark",
      });
    }

    if(jogos == 0){
      return toast.error("Selecione um jogo", {
        position: "bottom-right",
        autoClose: 5000,
        theme: "dark",
      });
    }

    await axios({
      method: "post",
      url: "http://localhost:3333/scheduling/create",
      data: {
        horarioInicio,
        horarioTermino,
        jogos,
        idSession,
      }
      }).then((response) => {
          if(!response.data) {
            return toast.error(response.data.msg, {
              position: "bottom-right",
              autoClose: 5000,
              theme: "dark",
            });
          }
          const agendamentoId = response.data.ID
          selectedFriends.forEach(async (friends) => {
            const amigoId = friends.idAmigo
            await axios({
              method: "post",
              url: "http://localhost:3333/participant/create",
              data: {
                amigoId,
                agendamentoId
              }
              }).then((response) => {
                  if(!response.data) {
                    return toast.error(response.data.msg, {
                      position: "bottom-right",
                      autoClose: 5000,
                      theme: "dark",
                    });
                  }

                  
              })
          })
          return toast.success("Agendamento Criado!", {
            position: "bottom-right",
            autoClose: 5000,
            theme: "dark",
          });
      })

    const JogoEscolhido = gameList.find((game) => {
        return game.idJogo == jogos
    })
    
    const nomeDoJogo = JogoEscolhido.nomeJogo

    await axios({
      method: "post",
      url: "http://localhost:3333/sending/email",
      data: {
        horarioInicio,
        horarioTermino,
        selectedFriends,
        nomeDoJogo,
        nomeSession,
        emailSession
      }
    }).then((response) => {console.log(response.data)})


  }


  return (
    <div className={styles.agendamento}>
        <div className={styles.bannerAgendar}>
          <img src={BannerAgendamento} alt="" />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.formAgendar}>
          <div className={styles.title}>
            <h3>Agendamento</h3>
          </div>

          <div className={styles.formAgendarGroup}>
            <label>Jogo</label>
            <select style={{textTransform: 'capitalize'}} name="" onChange={(e) => setJogos(e.target.value)} value={jogos} id="" >
              <option value="0">Escolha uma Opção</option>
              {
                gameList?.map((game) => (
                  <option key={game.idJogo} style={{textTransform: 'capitalize'}} value={game.idJogo}>{game.nomeJogo}</option>
                ))
              }
            </select>
          </div>
          <div className={styles.formAgendarGroupHorario}>
            <div className={styles.agendarHorarios}>
              <label htmlFor="">Horario de Inicio</label>
              <input type="datetime-local" onChange={(e) => setHorarioInicio(e.target.value)} value={horarioInicio}/>
            </div>
            <div className={styles.agendarHorarios}>
              <label htmlFor="">Horario de Termino</label>
              <input type="datetime-local" onChange={(e) => setHorarioTermino(e.target.value)} value={horarioTermino}/>
            </div>
          </div>
          <div className={styles.formAgendarGroup}>
            <label htmlFor="">Amigos</label>
            <input type="text" onChange={(e) => setSearchFriends(e.target.value)} value={searchFriends}/>
            <div className={styles.suggestionsAmigos}>
              {
                filteredAmigos?.map((friend) => (
                  <div key={friend.idAmigo} onClick={() => handleSelecionar(friend.idAmigo)} className={friend.isSelected ? styles.suggestionsAmigosItemSelected : styles.suggestionsAmigosItem}>
                    <button>{friend.isSelected ? <IoCheckmarkCircleSharp /> : <IoMdAddCircleOutline />}</button>
                    <h1>{friend.nome}</h1>
                  </div>
                ))
              }
            </div>
          </div>

          <div className={styles.btnAgendamentos}>
            <button type='submit'>Agendar</button>
          </div>

        </form>
        
    </div>
  )
}

export default Agendar