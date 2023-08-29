import React from 'react'
import styles from './Input.module.css'

const Input = ({titulo, tipo, placeholder}) => {
  return (
    <div className={styles.inputContainer}>
        <label className={styles.label}>{titulo}</label>
        <input className={styles.input} type={tipo} placeholder={placeholder} />
    </div>
  )
}

export default Input