// import {server} from '../config/index';
import {connectToDatabase} from '../util/database'
let ObjectId = require('mongodb').ObjectID;

// Get all the books from the private MongoDB collection
export async function getMongoBooks() {
  const {db} = await connectToDatabase();
  // const allBooks = await getMongoBooks();
  const data = await db.collection('books').find({}).toArray();
  const allBooks = JSON.parse(JSON.stringify(data));
  return allBooks
}

// Get all the book id's for dynamic static page generation
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
  });
}

// Get a single book's data using ObjectId
export async function getBookData(id) {
  const {db} = await connectToDatabase();
  const data = await db.collection('books').findOne({'_id': ObjectId(id)});
  const foundBook = JSON.parse(JSON.stringify(data));
  return {
    id,
    foundBook
  }
}