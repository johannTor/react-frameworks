import Cors from 'cors'
import initMiddleware from '../../../middleware/init-middleware'

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET'],
  })
)

export async function getData(search) {
  try {
    const response = await fetch(`https://api.itbook.store/1.0/search/${search}`);
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
    return [{msg: "something went wrong", error: err}]
  }
}

export default async function named(req, res) {
  await cors(req, res)
  const id = req.query.id;
  
  let books = []
  books = await getData(id);
  // console.log(`search: ${search} page: ${page}`)
  res.status(200).json(books);
}