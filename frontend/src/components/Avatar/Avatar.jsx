import React from 'react'
import styles from './Avatar.module.css'

const Avatar = ({url}) => {
  return (
    <>
        <img className={styles.avatarDef} src={url} />
    </>
  )
}

export default Avatar