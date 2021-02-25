// Import mongodb 
// import nextConnect from 'next-connect';
// import middleware from '../../../middleware/database';
import {connectToDatabase} from '../../../util/database'

// const handler = nextConnect();

// handler.use(middleware);

// handler.get(async (req, res) => {
//   let doc = await req.db.collection('books').find().toArray();
//   res.status(200).json(doc);
// });


// export default handler;

export default async (req, res) => {
  const {db} = await connectToDatabase();
  // const allBooks = await getMongoBooks();
  const data = await db.collection('books').find({}).toArray();
  res.status(200).json(data);
}