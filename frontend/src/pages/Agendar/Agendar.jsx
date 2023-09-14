import React from 'react'
import BannerAgendamento from '../../assets/BannerAgendamento.png'
import Avatar from '../../components/Avatar/Avatar'
import AvatarPhoto from '../../components/AvatarPhoto/AvatarPhoto'
import styles from './Agendar.module.css'

const Agendar = () => {
  return (
    <div className={styles.agendamento}>
        <div className={styles.formAgendar}>
  
            <div className={styles.formInputsAgendar}>

              <h1>Agendamento</h1>

              <div className={styles.inputsAgendar}>
                <label htmlFor="">Nome do Jogo</label> 
                <input type="text" />
              </div>

              <div className={styles.inputsAgendar}>
                <label htmlFor="">Data do Jogo</label> 
                <input type="datetime-local" />
              </div>

              <div className={styles.inputsAgendar}>
                <label htmlFor="">Participantes</label> 
                <input type="text" />
                <div className={styles.agendamentoParticipantes}>
                  <Avatar>
                    <AvatarPhoto img={BannerAgendamento} nome="BannerAgendamento" />
                    <AvatarPhoto img={BannerAgendamento} nome="BannerAgendamento" />
                  </Avatar>
                </div>
              </div>

              <button type="submit">Agendar</button>
            </div>
        </div>
        <div className={styles.bannerAgendar}>
          <img src={BannerAgendamento} alt="" />
        </div>
    </div>
  )
}

export default Agendar