import React from 'react'
import Book from './Book'
import stylesBooklist from '../styles/Booklist.module.css'

export default function Booklist({books}) {
  return (
    <>
    {books.length > 0 ? 
    <div className={stylesBooklist.book_grid}>
      {books.map((item, index) => <Book key={index} book={item} />)}
    </div> : <h2>No books to display</h2>}
    </>
  )
}
