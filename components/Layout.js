import React from 'react'
import Nav from './Nav' 
import Header from './Header'
import styles from '../styles/Layout.module.css'

export default function Layout({children}) {  // The page component are passed in as children
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </>
  )
}
