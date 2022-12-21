install using: ```npm install liblab-challenge```

test the four different endpoints in js using: 

```
const { LOTRClient } = require('liblab-challenge')
const lotr = new LOTRClient("956X9DMo16KiHxo-2vom");

lotr.getBooks().then((books) => {
  console.log(books)
})

lotr.getBookById("5cf5805fb53e011a64671582").then((book) => {
  console.log(book)
})

lotr.getMovies().then((movies) => {
  console.log(movies)
})

lotr.getCharacters().then(characters => {
  console.log(characters)
})
```
