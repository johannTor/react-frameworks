import React from 'react'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Browse</Link>
        </li>
        <li>
          <Link href="/user_books">My Books</Link>
        </li>
      </ul>
    </nav>
  )
}