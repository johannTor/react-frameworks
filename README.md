# Book browsing app

I started out wanting to create a Book app where a user could search and add books to his private collection. Currently there's no feature to add or remove books to your own private collection but it's still fetching from an API and MongoDB. I found an easy-to-work-with API that provides a whole lot of IT related books so I decided to fetch books from that.

https://api.itbook.store/

## How it works
On the frontpage I use getStaticProps() to fetch the /new endpoint of the API which provides 20 of the latest released books. I possibly should have used the 'revalidate' property along with the return object incase this endpoint has data that updates often, currently it's just fetched at build time.

You can also search for books from the API yourself by typing in a book name, keyword or an author. Since the API sends 10 books per page I was going to do this 'fancy' page button navigation at the bottom to allow navigating between all of the results but I decided to put that on hold and just display the first 10.

Under the 'My Books' navigation the user should be able to see their private book collection (this is just a static list from MongoDB for now) which is obtained using getStaticProps(). Every book in there should link to '/user_books/<book_id>' where each book is displayed with more info. These routes are dynamically generated using getStaticPaths() along with getStaticProps() to retrieve individual book data.

## API route support
Next.js provides an easy way to create API routes for projects. The API routes I created for this app are:

* /api/custom/books : fetches all books from the MongoDB
* /api/custom/books/<book_id> : returns a book from MongoDB by id

## Final thoughts
Next.js brought a lot of new concepts to the table and here are a few I liked.

The css class names are given unique names after it builds so they won't conflict with other classes in different modules.

Using the Image component to display images only as they enter the viewport.

Using getStaticProps to load content during build time for quicker rendering.

Using getServerSide props to load content on each request, not being used currently in this app. If the app allowed modification to the MongoDB collection I would probably use that to display the users books.