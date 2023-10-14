const container = document.querySelector(".container");
const form = document.querySelector("form");

let myLibrary = [];

function Book(book, author, pages) {
  this.bookName = book;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(object) {
  myLibrary.push(object);
}

function loopThroughArray() {
  myLibrary.forEach((item) => {
    const div = document.createElement("div");
    div.classList.toggle("book_display");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    title.textContent = `${item.bookName}`;
    author.textContent = `${item.author}`;
    pages.textContent = `${item.pages}`;
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    container.appendChild(div);
    const bookDisplay = document.createElement("button");
    bookDisplay.classList.toggle("remove");
    bookDisplay.textContent = "remove";
    div.appendChild(bookDisplay);
    const read = document.createElement("button");
    read.classList.toggle("read");
    read.textContent = "read";
    read.addEventListener("click", () => {
      if (read.textContent === "read") {
        read.style = "background-color:red";
        read.textContent = "not read";
      } else {
        read.style = "background-color:light-green";
        read.textContent = "read";
      }
    });
    div.appendChild(read);
  });
}
loopThroughArray();

const newBookButton = document.querySelector(".new_book");
const submit = document.querySelector(".submit");
newBookButton.addEventListener("click", () => {
  form.style = "visibility: visible";
  submit.style = "visibility: visible";
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  myLibrary = [];
  let bookName = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("nOfPages").value;
  if (bookName && author && pages) {
    let book = new Book(bookName, author, pages);
    console.log(book);
    addBookToLibrary(book);
    loopThroughArray();
    document.getElementById("myForm").reset();
    form.style = "visibility:hidden";
    submit.style = "visibility:hidden";
  }
  const remove = document.querySelectorAll(".remove");
  remove.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentNode.remove();
    });
  });
});
