import React from 'react'
import styles from './AddAmigos.module.css'

const AddAmigos = ({avatar, nome}) => {

  const url = "http://localhost:3333/uploads/"+avatar

  return (
    <div className={styles.addAmigosContainer}>
        <div className={styles.containerImagemAmigos}>
            <img src={url} alt="" />
        </div>
        <h1>{nome}</h1>
        <button>Adicionar Amigo</button>
    </div>
  )
}

export default AddAmigos