// Import mongodb 
import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db.collection('books').find().toArray();
  res.status(200).json(doc);
});


export default handler;