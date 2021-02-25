import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import stylesUb from '../styles/UB.module.css'

import {getMongoBooks} from '../lib/books'

export default function user_books({allBooks}) {
  return (
    <>
      <Head>
        <title>Your Books</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={stylesUb.book_grid}>
        {allBooks.map((item, index) => (
          <Link key={index} href={`/user_books/${item._id}`}>
            <a className={stylesUb.book_item} key={index}>
              <div className={stylesUb.book_title}>
                {item.title}
              </div>
              <div className={stylesUb.book_img}>
                <Image src={item.image} height={192} width={176} alt={item.title} />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const allBooks = await getMongoBooks();
  return {
    props: {
      allBooks
    }
  }
}