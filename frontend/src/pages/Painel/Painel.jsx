import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import AvatarPhoto from '../../components/AvatarPhoto/AvatarPhoto'
import styles from './Painel.module.css'

import imagem from '../../assets/imagem.jpeg'
import prox from '../../assets/bald.webp'
import BannerIniciar from '../../assets/bannerAgendar.png'

// teste
import user1 from '../../assets/eu.jpeg'
import user2 from '../../assets/eu.jpeg'
import user3 from '../../assets/eu.jpeg'
import FriendBox from '../../components/FriendBox/FriendBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const Painel = () => {

  const [friendList, setFriendList] = useState()
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

    initFriendList()
  }, [])

  return (
    <div className={styles.painel}>

      <div className={styles.painelAlto}>

        <div className={styles.ultimoJogo}>
          <div className={styles.imagemUltimoJogo}>
            <div style={{ backgroundImage: `linear-gradient(60deg,#00000000 0%, #000 90%), url(${imagem})` , backgroundSize: 'cover'}}>

            </div>
          </div>
          <div className={styles.contextoUltimoJogo}>
            <p>Último jogo</p>
            <div className={styles.titleUltimoJogo}>
              <h1>Red Dead Redemption 2</h1>
              <span>Jogo de Ação-Aventura</span>
            </div>
            <div className={styles.amigosUltimoJogo}>
                <Avatar>
                  <AvatarPhoto img={user1} nome="Rafaella Ballerini" />
                  <AvatarPhoto img={user2} nome="Guilherme Buzatto"/>
                  <AvatarPhoto img={user3} nome="Lucas de Almeida" />
                </Avatar> 
            </div>
            <button className={styles.botaoUltimoJogo}>Jogar Novamente</button>
          </div>
        </div>
        
        <div className={styles.proximaJogatina} style={{ backgroundImage: `linear-gradient(#00000000 0%, #3E2CAF 90.96%), url(${prox})` , backgroundSize: 'cover'}}>
          <h2>Próxima jogatina</h2>
          <h1>Baldur's Gate 3</h1>
          <p>01/09/2023 22:30</p>
          <div className={styles.amigosProximaJogatina}>
            <Avatar>
                    <AvatarPhoto img={user1} nome="Rafaella Ballerini"/>
                    <AvatarPhoto img={user2} nome="Guilherme Buzatto"/>
                    <AvatarPhoto img={user3} nome="Lucas de Almeida"/>
            </Avatar> 
          </div>
        </div>
      </div>

      <div className={styles.painelBaixo}>
        <div className={styles.listaAmigosPainel}>
            <h2 className={styles.titleFriendsList}>Lista de Amigos</h2>
            <div className={styles.friendsCollection}>
              <div className={styles.friendsUserBox}>
                {
                  friendList && friendList.map((friend) => (
                    <FriendBox  key={friend.idAmizade} img={friend.avatar} nome={friend.nome} />
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