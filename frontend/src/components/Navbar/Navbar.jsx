import React from 'react'
import styles from './Navbar.module.css'

import LogoImagem from '../../assets/LogoImage.png'
import LogoTexto from '../../assets/LogoText.png'

import { NavLink } from 'react-router-dom'

import { HiHome } from 'react-icons/hi'
import { BsBookHalf, BsPersonFillAdd } from 'react-icons/bs'
import { IoIosNotifications } from 'react-icons/io'

import { Tooltip } from 'react-tooltip'
import useAuthContext from '../../Hooks/useAuthContext'
import useUserContext from '../../Hooks/useUserContext'
import Cookies from 'js-cookie'

const Navbar = () => {

  const {login, setLogin} = useAuthContext()
  const {user} = useUserContext()
  let Greeting

  // Muda entre "Entrar" e "Deseja sair, user"
  if(!login){
    Greeting = <NavLink to="/entrar">Entrar</NavLink>
  }else{
    Greeting = 'Deseja sair? '+user.name
  }

  // Remove a sessão se a pessoa estiver logada
  const removeSessao = () => {
    if(login){
      setLogin(!login)
      Cookies.remove("nome")
      Cookies.remove("email")
    }
  }

  return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
              <NavLink to="/" className={styles.logo}>
                <img src={LogoImagem} alt="" className={styles.logoImagem}/>
                <img src={LogoTexto} alt="" className={styles.logoTexto}/>
              </NavLink>
            </div>
            <div className={styles.menu}>

              {!login && <NavLink data-tooltip-id="Home" data-tooltip-content="Home" to="/"  className={(({isActive}) => (isActive ? styles.active : ''))}> <HiHome/> </NavLink>}

              {!login && <NavLink data-tooltip-id="Sobre" data-tooltip-content="Sobre" to="/sobre" className={(({isActive}) => (isActive ? styles.active : ''))}> <BsBookHalf /></NavLink>}

              {login && <NavLink data-tooltip-id="AdicionarAmigos" data-tooltip-content="Adicionar Amigos" to="/amigos" className={(({isActive}) => (isActive ? styles.active : ''))}> <BsPersonFillAdd/> </NavLink>}

              {login && <NavLink data-tooltip-id="Notificacoes" data-tooltip-content="Notificações" to="/notificacoes" className={(({isActive}) => (isActive ? styles.active : ''))}> <IoIosNotifications/> </NavLink>}

            </div>
            <div className={styles.entrar} onClick={() => {removeSessao()}}>
              {Greeting} 
            </div>

            <Tooltip id="Home" />
            <Tooltip id="Sobre" />
            <Tooltip id="Notificacoes" />
            <Tooltip id="AdicionarAmigos" />

        </div>
  )
}

export default Navbar