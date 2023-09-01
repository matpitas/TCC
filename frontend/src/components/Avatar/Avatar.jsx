import React from 'react'
import styles from './Avatar.module.css'

const Avatar = ({children}) => {
  return (
    <div className={styles.avatarDef}>
        {children}
    </div>
  )
}

export default Avatar