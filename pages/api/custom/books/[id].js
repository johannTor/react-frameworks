import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';
let ObjectId = require('mongodb').ObjectID;

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const id = req.query.id;
  // let doc = await req.db.collection('books').find().toArray();
  try {
    let doc = await req.db.collection('books').findOne({"_id": ObjectId(id)});
    res.status(200).json(doc);
  } catch(err) {
    res.status(400).json({'error': "no book with given id"});
  }
 });


export default handler;