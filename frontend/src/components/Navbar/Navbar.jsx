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

const Navbar = () => {

  const {login, setLogin} = useAuthContext()
  const nome = 'Matheus Pitas Baptista'
  let Greeting

  if(!login){
    Greeting = <NavLink to="/entrar">Entrar</NavLink>
  }else{
    Greeting = 'Olá, '+nome
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
            <div onClick={() => {setLogin(!login)}} className={styles.entrar}>
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