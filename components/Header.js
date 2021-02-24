import React from 'react'
import { useRouter } from 'next/router'
import headerStyles from '../styles/Header.module.css'

export default function Header() {
  const router = useRouter()
  let msg;
  if(router.pathname === '/') {
    msg = 'Browse Books'
  } else if(router.pathname === '/user_books') {
    msg = 'Your Books'
  } else {
    msg = ''
  }
  return (
    <div>
      <h1 className={headerStyles.page_title}>{msg}</h1>
    </div>
  )
}
