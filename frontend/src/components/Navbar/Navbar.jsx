import React from 'react'
import styles from './Navbar.module.css'

import LogoImagem from '../../assets/LogoImage.png'
import LogoTexto from '../../assets/LogoText.png'

import { NavLink } from 'react-router-dom'

import { HiHome } from 'react-icons/hi'
import { BsBookHalf, BsPersonFillAdd } from 'react-icons/bs'
import { IoIosNotifications } from 'react-icons/io'


const Navbar = () => {
  return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
              <NavLink to="/" className={styles.logo}>
                <img src={LogoImagem} alt="" className={styles.logoImagem}/>
                <img src={LogoTexto} alt="" className={styles.logoTexto}/>
              </NavLink>
            </div>
            <div className={styles.menu}>
              <NavLink to="/" className={(({isActive}) => (isActive ? styles.active : ''))}> <HiHome/> </NavLink>
              <NavLink to="/sobre" className={(({isActive}) => (isActive ? styles.active : ''))}> <BsBookHalf /></NavLink>
              <NavLink to="/amigos" className={(({isActive}) => (isActive ? styles.active : ''))}> <BsPersonFillAdd/> </NavLink>
              <NavLink to="/notificacoes" className={(({isActive}) => (isActive ? styles.active : ''))}> <IoIosNotifications/> </NavLink>
            </div>
            <div className={styles.entrar}>
              <NavLink to="/entrar">Entrar</NavLink>
            </div>
        </div>
  )
}

export default Navbar