import React from 'react'
import styles from './BuscaAmigos.module.css'

const BuscaAmigos = () => {
  return (
    <div className={styles.buscaamigos}>
        
        <form className={styles.pesquisar}>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Busque por um amigo</label>    
                <input type="text" className={styles.input} />
            </div>            
        </form>

        <div className={styles.resultadoBuscaAmigos}>
            <div className={styles.tabelaBuscaAmigos}>
                
            </div>
        </div>

    </div>
  )
}

export default BuscaAmigos