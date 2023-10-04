import React from 'react'
import FriendRequest from '../../components/FriendRequest/FriendRequest'
import styles from './Amigos.module.css'

const Amigos = () => {
  return (
    <div className={styles.AmigosPage}>

      <h1>Solicitações de Amizade</h1>

      <div className={styles.AmigosListaTotal}>

        <FriendRequest photoProfile="https://avatars.githubusercontent.com/u/63295491?v=4" nameProfile="Matheus Pitas Baptista" />
        <FriendRequest photoProfile="https://avatars.githubusercontent.com/u/63295491?v=4" nameProfile="Matheus Pitas Baptista" />
        <FriendRequest photoProfile="https://avatars.githubusercontent.com/u/63295491?v=4" nameProfile="Matheus Pitas Baptista" />
        <FriendRequest photoProfile="https://avatars.githubusercontent.com/u/63295491?v=4" nameProfile="Matheus Pitas Baptista" />
        <FriendRequest photoProfile="https://avatars.githubusercontent.com/u/63295491?v=4" nameProfile="Matheus Pitas Baptista" />
        <FriendRequest photoProfile="https://avatars.githubusercontent.com/u/63295491?v=4" nameProfile="Matheus Pitas Baptista" />
        <FriendRequest photoProfile="https://avatars.githubusercontent.com/u/63295491?v=4" nameProfile="Matheus Pitas Baptista" />
        </div>  
    </div>
  )
}

export default Amigos