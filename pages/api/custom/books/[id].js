import {connectToDatabase} from '../../../../util/database'
let ObjectId = require('mongodb').ObjectID;

export default async (req, res) => {
  const id = req.query.id;
  try {
    const {db} = await connectToDatabase();
    // const allBooks = await getMongoBooks();
    const data = await db.collection('books').findOne({"_id": ObjectId(id)});
    res.status(200).json(data);
  } catch(err) {
    res.status(400).json({'error': 'No book with given id'})
  }
}