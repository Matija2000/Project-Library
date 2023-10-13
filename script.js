const container = document.querySelector(".container");
const form = document.querySelector("form");

const myLibrary = [];

function Book(book, author, pages) {
  this.bookName = book;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(object) {
  myLibrary.push(object);
}

const book1 = new Book("Harry Potter", "J.K.Rowling", 200);
const book2 = new Book("Percy Jackson", "Rick Riordan", 150);
addBookToLibrary(book1);
addBookToLibrary(book2);

myLibrary.forEach((item) => {
  const div = document.createElement("div");
  div.classList.toggle("book_display");
  div.textContent = `${item.bookName}, ${item.author}, ${item.pages}`;
  container.appendChild(div);
  const bookDisplay = document.createElement("button");
  bookDisplay.classList.toggle("remove");
  bookDisplay.textContent = "remove";
  div.appendChild(bookDisplay);
});

const newBookButton = document.querySelector(".new_book");
const addBookButton = document.querySelector(".add_book");
newBookButton.addEventListener("click", () => {
  form.style = "visibility: visible";
  addBookButton.style = "visibility: visible";
});
