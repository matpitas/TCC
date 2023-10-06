import React from 'react'
import styles from './AddAmigos.module.css'

const AddAmigos = ({avatar, nome}) => {
  return (
    <div className={styles.addAmigosContainer}>
        <div className={styles.containerImagemAmigos}>
            <img src={avatar} alt="" />
        </div>
        <h1>{nome}</h1>
        <button>Adicionar Amigo</button>
    </div>
  )
}

export default AddAmigos