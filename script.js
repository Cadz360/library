const myLibrary = [];

function Book(title, author, numOfPages) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.info = function() {
    console.log()
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function showLibrary() {
    return myLibrary.forEach(function(book) {
            console.log(book)
    })
}

function createNewBook(title, author, numOfPages) {
    addBookToLibrary(new Book(title, author, numOfPages));
}

createNewBook('hello', 'hello', 5)

showLibrary()