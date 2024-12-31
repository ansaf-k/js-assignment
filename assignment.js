let books = [
    {
        title:'the great indian',
        author:'ansaf'
    },
    {
        title:'the great american',
        author:'john'
    },
    {
        title:'the great english',
        author:'william'
    }
]
// destructing array and object

const [book1, book2, book3] = books;

// console.log(book1);
// console.log(book2);
// console.log(book3);

const { title, author} = book2

// console.log(title);
// console.log(author);

// console.log(`Book 2: ${title} by ${author}`);


// spread operator

const book4 = {
    title: 'harry potter',
    author: 'j.k rowling'
}

books = [...books,book4];

// console.log(books);

let copiedBooks = [...books];

console.log(copiedBooks);

//for each

