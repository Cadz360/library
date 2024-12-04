class Book {
  constructor(title, author, numOfPages) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.hasRead = false;
  }

  get bookInfo() {
    return `This book is ${this.title} by ${this.author} and it has ${this.numOfPages} pages`
  }
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

const bookList = document.querySelector(".book-list");
const bookForm = document.querySelector(".book-form");
const myLibrary = [];


//add remove book from the library btn

function addBookToLibrary(book) {
  myLibrary.push(book)
  const newBook = document.createElement("li")
  const newBookTitle = document.createElement("h3")
  const newBookAuthor = document.createElement("p")
  const newBookNumOfPages = document.createElement("p")
  const removeBookBtn = document.createElement('button')
  const readBookBtn = document.createElement('button')

  
  newBookTitle.textContent = book.title;
  newBookAuthor.textContent = book.author;
  newBookNumOfPages.textContent = book.numOfPages;
  removeBookBtn.textContent = 'Remove book from Library'
  readBookBtn.textContent = 'Read book'

  removeBookBtn.addEventListener('click', () => {
    newBook.remove();
    const index = myLibrary.indexOf(book);
    if (index > -1) {
      myLibrary.splice(index, 1)
    }
    console.log(myLibrary)
  })

  readBookBtn.addEventListener('click', () => {
    if (book.hasRead === false) {
      book.hasRead = true;
    } else if (book.hasRead === true) {
      book.hasRead = false
    }
    console.log(myLibrary)
  })

  bookList.appendChild(newBook);
  newBook.appendChild(newBookTitle);
  newBook.appendChild(newBookAuthor);
  newBook.appendChild(newBookNumOfPages);
  newBook.appendChild(removeBookBtn);
  newBook.appendChild(readBookBtn)
}

function showLibrary() {
    return myLibrary.forEach(function(book) {
            console.log(book)
    })
}

function createNewBook(title, author, numOfPages) {
    addBookToLibrary(new Book(title, author, numOfPages));
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let bookTitle = document.getElementById("book-title");
  let bookAuthor = document.getElementById("book-author");
  let bookNumOfPages = document.getElementById("pages-number");

  if (bookTitle.value == "" || bookAuthor.value == "" || bookNumOfPages.value == ""){
    alert("All fields need to have a valid input");
  } else {
    createNewBook(bookTitle.value, bookAuthor.value, bookNumOfPages.value)
  }
  bookTitle.value = "";
  bookAuthor.value = "";
  bookNumOfPages.value = "";
  console.log(myLibrary)
})

console.log(myLibrary)