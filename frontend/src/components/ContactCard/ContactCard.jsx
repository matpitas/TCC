import React from 'react'
import styles from './ContactCard.module.css'

const ContactCard = ({icone, titulo, valor}) => {
  return (
    <div className={styles.ContactCard}>
        <div className={styles.iconeContactCard}>
            {icone}
        </div>
        <div className={styles.bodyContactCard}>
            <h4>{titulo}</h4>
            <p>{valor}</p>
        </div>
    </div>
  )
}

export default ContactCard