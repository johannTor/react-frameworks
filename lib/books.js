import {server} from '../config/index';

export async function getMongoBooks() {
  const res = await fetch(`${server}/api/custom/books`);
  const books = await res.json();
  return books;
}

export async function getAllBookIds() {
  const res = await fetch(`${server}/api/custom/books`);
  const books = await res.json();
  return books.map((item) => {
    return {
      params: {
        id: item._id
      }
    }
  })
}

export async function getBookData(id) {
  const res = await fetch(`${server}/api/custom/books/${id}`);
  const foundBook = await res.json();
  return {
    id,
    foundBook
  }
}