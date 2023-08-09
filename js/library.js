

// Place to store books.
let myLibrary = [];

const createBookButton = document.querySelector("#create-book");
const shelf = document.querySelector(".shelf");


// Object constructor that stores information on books that are added.
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.bookInfo = function() {
        return `${title} by ${author}, ${pages} pages, ${read}.`
    }
}


// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "unread");
// console.log(theHobbit.bookInfo());


createBookButton.addEventListener("click", e => {
    const newBook = document.createElement("div");
    const bookTitle = document.createElement("p");
    bookTitle.textContent = "a new book";
    newBook.classList.add("book");
    shelf.appendChild(newBook);
    newBook.appendChild(bookTitle);
});
