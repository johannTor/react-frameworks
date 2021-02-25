import {connectToDatabase} from '../../../util/database'

export default async (req, res) => {
  const {db} = await connectToDatabase();
  // const allBooks = await getMongoBooks();
  const data = await db.collection('books').find({}).toArray();
  res.status(200).json(data);
}