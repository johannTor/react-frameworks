import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Booklist from '../components/Booklist'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  const [term, setTerm] = useState('');
  const [lastSearch, setLastSearch] = useState('newest')
  // const [bookCount, setBookCount] = useState(0)
  // const [noOfPages, setNoOfPages] = useState(0)
  // const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  // console.log('books: ', books);

  // Runs on component mount
  useEffect(() => {
    setBooks(data.books)
    // setBookCount(data.total)
    // Set the number of pages needed from the total number of books
    // setNoOfPages(Math.ceil(data.total / 10))
  }, []);

  /* ********** Page navigation code, todo eventually! ********** */
  // Page has changed
  // useEffect(() => {
  //   const getData = async () => {
  //     // Temporary check to avoid double fetch
  //     if(page !== 1) {
  //       console.log('fetching again...');
  //       try {
  //         const res = await fetch(`${server}/api/books/${term},${page}`);
  //         const data = await res.json();
  //         setBooks(data.books);
  //       } catch(err) {
  //         console.log(err);
  //       }
  //     }
  //   }
  //   getData();
  //   console.log('Page change to: ' + page);
  // }, [page])

  // Search term has changed
  // useEffect(() => {

  // }, [term]);
  
  // const handlePageChange = (index) => {
  //   setPage(index+1);
  // }

  // Create the page numbers for navigation
  // const pageBtnList = [];
  // for(let i = 0; i < noOfPages; i++) {
  //   pageBtnList.push((<div key={i} onClick={() => handlePageChange(i)} className={page === (i+1) ? styles.active_button : null}>{i+1}</div>))
  // }

  const handleSearch = async (ev) => {
    try {
      let res;
      // A lil check to see if we are on production or not, if so use https
      if(process.env.NEXT_PUBLIC_LOCAL_URL === 'localhost:3000') {
        res = await fetch(`http://${process.env.NEXT_PUBLIC_LOCAL_URL}/api/books/${term}`)
      } else {
        res = await fetch(`https://${process.env.NEXT_PUBLIC_LOCAL_URL}/api/books/${term}`)
      }
      const data = await res.json()
      setBooks(data.books);
      setLastSearch(term)
      setTerm('')
    } catch(err) {
      console.log('Error: ', err);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Browse Books</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2 className={styles.frontpage_title}>Search for IT related books by title, author or keywords such as: 'mongodb' or 'javascript'</h2>
        {/* <h2>Your Books: Books that have been added to MongoDB</h2>
        <h2>Your Books/bookid: Get further information about a specific book from the list</h2> */} 
        <input className={styles.search_field} type="text" placeholder="Search..." value={term} onKeyPress={(ev) => ev.key === 'Enter' ? handleSearch(ev) : null} onChange={(ev) => setTerm(ev.target.value) }></input>
        <button className={styles.search_button} onClick={() => handleSearch()}>Search</button>
      </div>
      <div className={styles.result_notice}>
        Results for '{lastSearch}':
      </div>
      <Booklist books={books} />
      {/* <div className={styles.page_buttons}>
        {pageBtnList}
      </div> */}
    </>
  )
}

// Get 20 of the latest books from the /new endpoint 
export const getStaticProps = async () => {
  const res = await fetch(`https://api.itbook.store/1.0/new`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
  // data properties include: .total .page and .books
}
