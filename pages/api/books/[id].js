const getData = async (search) => {
  try {
    const response = await fetch(`https://api.itbook.store/1.0/search/${search}`);
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
    return [{msg: "something went wrong"}]
  }
}

export default async function handler(req, res) {
  const id = req.query.id;
  
  let books = []
  books = await getData(id);
  // console.log(`search: ${search} page: ${page}`)
  res.status(200).json(books);
}