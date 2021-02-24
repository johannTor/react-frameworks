import React from 'react'
import Image from 'next/image'
import stylesBook from '../styles/Book.module.css'

function convertRemToPixels(rem) {    
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default function Book({book}) {
  return (
    <div className={stylesBook.book_item}>
      <div className={stylesBook.book_title}>{book.title}</div>
      <div className={stylesBook.book_img}>
        <Image
          src={book.image}
          height={convertRemToPixels(12)}
          width={convertRemToPixels(11)}
          alt={book.title}
        />
      </div>
      <div className={stylesBook.book_subtitle}>{book.subtitle !== "" ? book.subtitle : "No description available"}</div>
    </div>
  )
}
