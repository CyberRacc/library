console.log("Script loaded.")

let myLibrary = [];

const addBookModal = document.querySelector("#add-book-modal")
const btnNewBook = document.querySelector("#btn-new-book");
const createBookButton = document.querySelector("#add-book");
const shelf = document.querySelector(".shelf");


btnNewBook.addEventListener("click", () => {
    addBookModal.showModal();
});

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

function displayLibrary() {
    myLibrary.forEach(book => {
        const newBook = document.createElement("div");
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookRead = document.createElement("p");

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages + "pages";
        bookRead.textContent = book.read;

        newBook.classList.add("book");

        shelf.appendChild(newBook);
        newBook.appendChild(bookTitle);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(bookPages);
        newBook.appendChild(bookRead);
    });
}

const form = document.querySelector('#add-book-form');

function addBookToLibrary() {

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const title = form.elements['title'].value;
        const author = form.elements['author'].value;
        const pages = form.elements['pages'].value;
        const read = form.elements['read-status'].value;

        const newBook = new Book(title, author, pages, read);

        myLibrary.push(newBook);

        displayLibrary(title, author, pages, read);
    });
}

addBookToLibrary();