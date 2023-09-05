import React, { memo } from 'react'
import styles from './Footer.module.css'


import LogoImagem from '../../assets/LogoImage.png'
import LogoTexto from '../../assets/LogoText.png'
import ContactCard from '../ContactCard/ContactCard'

import { BsGithub } from 'react-icons/bs'
import { BiLogoGmail, BiSolidPhone } from 'react-icons/bi'

const Footer = () => {
  return (
    <div>
        <div className={styles.mainFooter}>
            <div className={styles.logoFooter}>
                <img src={LogoImagem} alt="" />
                <img src={LogoTexto} alt="" />
            </div>
            <div className={styles.contatosFooter}>
                <h1>Contatos</h1>
                <div className={styles.cardsFooter}>
                    <ContactCard icone={<BiLogoGmail />} titulo="Email" valor="pitas.matheus4@gmail.com" />
                    <ContactCard icone={<BiSolidPhone />} titulo="Telefone" valor="(xx) xxxxx-xxxx" />
                    <ContactCard icone={<BsGithub />} titulo="GitHub" valor="https://github.com/matpitas" />
                </div>
            </div>
        </div>
        <div className={styles.signFooter}>
            <p>Feito com ♡ por Matheus Pitas Baptista</p>
        </div>
    </div>
  )
}

export default memo(Footer)