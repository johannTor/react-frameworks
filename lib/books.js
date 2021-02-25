// import {server} from '../config/index';
import {connectToDatabase} from '../util/database'
let ObjectId = require('mongodb').ObjectID;

export async function getMongoBooks() {
  const {db} = await connectToDatabase();
  // const allBooks = await getMongoBooks();
  const data = await db.collection('books').find({}).toArray();
  const allBooks = JSON.parse(JSON.stringify(data));
  return allBooks
  // const res = await fetch(`/api/custom/books`);
  // const books = await res.json();
  // return books;
}

export async function getAllBookIds() {
  const {db} = await connectToDatabase();
  // const allBooks = await getMongoBooks();
  const data = await db.collection('books').find({}).toArray();
  const allBooks = JSON.parse(JSON.stringify(data));
  return allBooks.map((item) => {
    return {
      params: {
        id: item._id
      }
    }
  })
  // const res = await fetch(`/api/custom/books`);
  // const books = await res.json();
  // return books.map((item) => {
  //   return {
  //     params: {
  //       id: item._id
  //     }
  //   }
  // })
}

export async function getBookData(id) {
  const {db} = await connectToDatabase();
  const data = await db.collection('books').findOne({'_id': ObjectId(id)});
  const foundBook = JSON.parse(JSON.stringify(data));
  return {
    id,
    foundBook
  }

  // const res = await fetch(`/api/custom/books/${id}`);
  // const foundBook = await res.json();
  // return {
  //   id,
  //   foundBook
  // }
}