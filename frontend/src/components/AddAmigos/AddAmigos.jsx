import React, { useState } from 'react'
import styles from './AddAmigos.module.css'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip'
import { toast } from 'react-toastify'
import axios from 'axios'
import Cookies from 'js-cookie'

const AddAmigos = ({avatar, nome, idUsuario}) => {

  const [ add, setAdd ] = useState(false)

  const url = "http://localhost:3333/uploads/"+avatar



  const handleAddFriend = async (e) => {
    e.preventDefault()
    
    const idCriador = Cookies.get("id")
    
    if(!idCriador || !idUsuario){
      toast.error("Erro: Não foi possível fazer a solicitação")
    }


    await axios({
      method: "post",
      url: "http://localhost:3333/friends/verify",
      data: {
          idCriador,
          idUsuario
      }
  }).then(async (response) => {

        if(response.data[0]?.Status == 0){
          toast.error("Já foi enviado uma solicitação.")
          setAdd(false)
          return
        }

        if(response.data[0]?.Status == 1){
          toast.error("Amizade já existe.")
          setAdd(false)
          return
        }

        await axios({
          method: "post",
          url: "http://localhost:3333/friends/create",
          data: {
              idCriador,
              idUsuario
          }
        }).then((response) => {

          if(!response.data){
            toast.error("Erro: Ocorreu um erro na sua solicitação.")
            return
          }

          toast.success("Solicitação de Amizade enviado!")
          setAdd(false)
        })
        
        
        
    })


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
              <button data-tooltip-id="Aceitar" data-tooltip-content="Enviar Solicitação" onClick={(e) => handleAddFriend(e)}><AiOutlineCheck /></button>
            </div>
        : <button onClick={(e) => setAdd(true)}>Adicionar Amigo</button> }

        <Tooltip id="Negar" />
        <Tooltip id="Aceitar" />
    </div>
  )
}

export default AddAmigos