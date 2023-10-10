import React, { useState } from 'react'
import styles from './AddAmigos.module.css'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip'

const AddAmigos = ({avatar, nome}) => {

  const [ add, setAdd ] = useState(false)

  const url = "http://localhost:3333/uploads/"+avatar



  const handleAddFriend = (e) => {
    e.preventDefault()
    


  }

  return (
    <div className={styles.addAmigosContainer}>
        <div className={styles.containerImagemAmigos}>
            <img src={url} alt="" />
        </div>
        <h1>{nome}</h1>
        {add ? 
            <div className={styles.ChooseAdd}>
              <button data-tooltip-id="Negar" data-tooltip-content="Cancelar Solicitação" onClick={(e) => setAdd(false)}><AiOutlineClose /></button>
              <button data-tooltip-id="Aceitar" data-tooltip-content="Enviar Solicitação" onClick={(e) => (e) => handleAddFriend(e)}><AiOutlineCheck /></button>
            </div>
        : <button onClick={(e) => setAdd(true)}>Adicionar Amigo</button> }

        <Tooltip id="Negar" />
        <Tooltip id="Aceitar" />
    </div>
  )
}

export default AddAmigos