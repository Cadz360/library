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
  const newBook = document.createElement("li")
  const newBookTitle = document.createElement("h3")
  const newBookAuthor = document.createElement("p")
  const newBookNumOfPages = document.createElement("p")

  newBookTitle.textContent = book.title;
  newBookAuthor.textContent = book.author;
  newBookNumOfPages.textContent = book.numOfPages

  bookList.appendChild(newBook);
  newBook.appendChild(newBookTitle);
  newBook.appendChild(newBookAuthor);
  newBook.appendChild(newBookNumOfPages);

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