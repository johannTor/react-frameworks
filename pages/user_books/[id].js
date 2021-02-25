import Image from 'next/image'
import Link from 'next/link'
import {server} from '../../config/index'
import {getAllBookIds, getBookData} from '../../lib/books'
import styleInfo from '../../styles/Info.module.css'

// NOTE: If a book is added to the database after the build, it won't be generated a dynamic route
export async function getStaticProps({ params }) {
  const bookData = await getBookData(params.id)
  return {
    props: {
      bookData
    }
  }
}

// Pre create pages for dynamic routes based on the book ids
export async function getStaticPaths() {
  const paths = await getAllBookIds();
  return {
    paths,  
    fallback: false
  }
}

export default function Book({bookData}) {
  return (
    <div className={styleInfo.book_details}>
      <div className={styleInfo.book_name}>
        <Image src={bookData.foundBook.image} height={256} width={224} alt={bookData.foundBook.title}></Image>
      </div>
      <div className={styleInfo.book_title}>{bookData.foundBook.title}</div>
      <div className={styleInfo.book_descr}>{bookData.foundBook.description}</div>
      <Link href={`/user_books`}><a className={styleInfo.back_link}>Go Back</a></Link>
    </div>
  )
}