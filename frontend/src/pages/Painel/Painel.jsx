import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import AvatarPhoto from '../../components/AvatarPhoto/AvatarPhoto'
import styles from './Painel.module.css'

import imagem from '../../assets/Imagem.png'
import BannerIniciar from '../../assets/bannerAgendar.png'

import { format } from "date-fns"

import FriendBox from '../../components/FriendBox/FriendBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const Painel = () => {

  const [friendList, setFriendList] = useState()
  const [nextGame, setNextGame] = useState()
  const [lastGame, setLastGame] = useState()
  const [nextFriends, setNextFriends] = useState()
  const [lastFriends, setLastFriends] = useState()
  const idSession = Cookies.get("id") 

  useEffect(() => {
    const initFriendList = async () => {
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

    const initNextGame = async () => {
      await axios({
        method: "get",
        url: "http://localhost:3333/scheduling/next/" + idSession
        }).then((response) => {
          
            if(response.data.length == 0) {
              return false;
            }
            
            const dadosNextGame = response?.data[0]
            const iniciaEmFormat = new Date(dadosNextGame?.iniciaEm)
            const dataFormatada = format(iniciaEmFormat, "dd/MM/yyyy HH:mm:ss")
            
            if(dadosNextGame){
              dadosNextGame.iniciaEm = dataFormatada
            }
              
            setNextGame(dadosNextGame)   
        })
    }

    const initLastGame = async () => {
      await axios({
        method: "get",
        url: "http://localhost:3333/scheduling/last/" + idSession
        }).then((response) => {
            if(!response.data[0]) {
              return
            }
            const dadosLastGame = response?.data[0]
            const iniciaEmFormat = new Date(dadosLastGame?.iniciaEm)
            const dataFormatada = format(iniciaEmFormat, "dd/MM/yyyy HH:mm:ss")
            
            if(dadosLastGame){
              dadosLastGame.iniciaEm = dataFormatada
            }
            
            setLastGame(dadosLastGame)
        })
    }


    const initPromises = Promise.all([initFriendList(), initNextGame(), initLastGame()])

    initPromises
                .then(responses => {
                  return
                })
                .catch(error => {
                  console.error(error);
                });
    
  }, [])

  useEffect(() => {
    if(nextGame){
      const initNextFriends = async () => {
        await axios({
          method: "post",
          url: "http://localhost:3333/participant",
          data: {
            "idAgendamento" : nextGame?.idAgendamento
          }
          }).then(async (response) => {
              if(!response.data) {
                return
              }
              setNextFriends(response.data)
              
          })
      }
      initNextFriends()
    }

    
  }, [nextGame])

  useEffect(() => {
    if(lastGame){
      const initLastFriends = async () => {
        await axios({
          method: "post",
          url: "http://localhost:3333/participant",
          data: {
            "idAgendamento" : lastGame?.idAgendamento
          }
          }).then(async (response) => {
              if(!response.data) {
                return
              }
              setLastFriends(response.data)
              
          })
      }
      initLastFriends()
    }

    
  }, [lastGame])

  return (
    <div className={styles.painel}>

      <div className={styles.painelAlto}>

        {
          lastGame ? 
          <div className={styles.ultimoJogo}>
          <div className={styles.imagemUltimoJogo}>
            <div style={{ backgroundImage: `linear-gradient(60deg,#00000000 0%, #000 90%), url("http://localhost:3333/uploads/${lastGame.imagemJogo}")` , backgroundSize: 'cover'}}>

            </div>
          </div>
          <div className={styles.contextoUltimoJogo}>
            <p>Último jogo</p>
            <div className={styles.titleUltimoJogo}>
              <h1>{lastGame.nomeJogo}</h1>
              <span>{lastGame.iniciaEm}</span>
            </div>
            <div className={styles.amigosUltimoJogo}>
                <Avatar>
                    {
                      lastFriends?.map(friend => (
                        <AvatarPhoto key={friend.nome} img={friend.avatar} nome={friend.nome} />
                      ))
                    }
                </Avatar> 
            </div>
          </div>
        </div>
        :
        <div className={styles.ultimoJogo}>
          <div className={styles.imagemUltimoJogo}>
            <div style={{ backgroundImage: `linear-gradient(60deg,#00000000 0%, #000 90%), url(${imagem})` , backgroundSize: 'cover'}}>

            </div>
          </div>
          <div className={styles.contextoUltimoJogo}>
            <p>Último jogo</p>
            <div className={styles.titleUltimoJogo}>
              <h1>Há algo de errado🤔</h1>
              <span>Não conseguimos buscar nenhum agendamento</span>
            </div>
            <div className={styles.amigosUltimoJogo}>
                <Avatar>
                    {
                      lastFriends?.map(friend => (
                        <AvatarPhoto key={friend.nome} img={friend.avatar} nome={friend.nome} />
                      ))
                    }
                </Avatar> 
            </div>
          </div>
        </div>
        }
        
        {
          nextGame ?
          <div className={styles.proximaJogatina} style={{ backgroundImage: `linear-gradient(#00000000 0%, #3E2CAF 90.96%), url("http://localhost:3333/uploads/${nextGame.imagemJogo}")` , backgroundSize: 'cover'}}>
          <h2>Próxima jogatina</h2>
          <h1 style={{textTransform: 'capitalize'}}>{nextGame.nomeJogo}</h1>
          <p>{nextGame.iniciaEm}</p>
          <div className={styles.amigosProximaJogatina}>
            <Avatar>
                    {
                      nextFriends?.map(friend => (
                        <AvatarPhoto key={friend.nome} img={friend.avatar} nome={friend.nome} />
                      ))
                    }
            </Avatar> 
          </div>
        </div>
        :
        <div className={styles.proximaJogatina} style={{ backgroundImage: `linear-gradient(#00000000 0%, #3E2CAF 90.96%), url(${imagem})` , backgroundSize: 'cover'}}>
          <h2>Próxima jogatina</h2>
          <h1>Oops!</h1>
          <p>Não foi encontrado nenhum agendamento</p>
          <div className={styles.amigosProximaJogatina}> 
          </div>
        </div>
        }
      </div>

      <div className={styles.painelBaixo}>
        <div className={styles.listaAmigosPainel}>
            <h2 className={styles.titleFriendsList}>Lista de Amigos</h2>
            <div className={styles.friendsCollection}>
              <div className={styles.friendsUserBox}>
                {
                  friendList && friendList.map((friend) => (
                    <FriendBox  key={friend.idAmigo} img={friend.avatar} nome={friend.nome} />
                  ))
                }
              </div>
            </div>
            
          
        </div>
        <div className={styles.iniciarPainel}>
          <div className={styles.bannerIniciarPainel}>
            <img src={BannerIniciar} alt="" />
          </div>  
          <div className={styles.boxButtonAgendar}>
          <Link to="/agendamento" className={styles.buttonAgendar}>Agendar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Painel