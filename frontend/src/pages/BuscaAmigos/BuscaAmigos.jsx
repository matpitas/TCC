import React, { useEffect, useState } from 'react'
import AddAmigos from '../../components/AddAmigos/AddAmigos'
import styles from './BuscaAmigos.module.css'
import axios from 'axios'
import Cookies from 'js-cookie'

const BuscaAmigos = () => {

    const [ amigos, setAmigos ] = useState([])
    const [ nome, setNome ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(nome){
            await axios({
                method: "post",
                url: "http://localhost:3333/users/search/" + Cookies.get("id"),
                data: {
                    nome
                }
            }).then((response) => {
                setAmigos(response.data)
                console.log(amigos)
            })
        }

       
    }


  return (
    <div className={styles.buscaamigos}>
        
        <form className={styles.pesquisar} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Busque por um amigo</label>    
                <div className={styles.buscalayout}>
                    <input type="text" className={styles.inputPesq}  value={nome} onChange={(e) => setNome(e.target.value)} />
                    <button type='submit' className={styles.inputPesqButton}>Pesquisar</button>
                </div>
            </div>            
        </form>

        <div className={styles.resultadoBuscaAmigos}>
            <div className={styles.tabelaBuscaAmigos}>
                {
                    amigos && amigos.map(amigo => (
                        
                        <AddAmigos key={amigo.idUsuario} nome={amigo.nome} avatar={amigo.avatar} idUsuario={amigo.idUsuario}/>
                    ))
                }
                
            </div>
        </div>
        

        
    </div>
  )
}

export default BuscaAmigos