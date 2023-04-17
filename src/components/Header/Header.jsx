import React from 'react'
import NavBar from '../NavBar/NavBar'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>W E L C O M E</h1><NavBar/>
      </header>
  )
}
