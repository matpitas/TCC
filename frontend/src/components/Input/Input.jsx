import React from 'react'
import styles from './Input.module.css'

const Input = ({titulo, tipo}) => {
  return (
    <div className={styles.inputContainer}>
        <label className={styles.label}>{titulo}</label>
        <input className={styles.input} type={tipo} />
    </div>
  )
}

export default Input