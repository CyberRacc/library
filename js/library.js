
class Book {
    // The constructor method is special. It gets called when you create a new instance of the class.
    constructor(title, author, pages, cover, read) {

        // 'this' refers to the instance of the object being created.


        // Each of these lines assigns the value passed into the constructor
        // to a property of the object. So when you create a new book, you can
        // specify its title, author, number of pages, cover, and its read status.
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.cover = cover;
        this.read = read;
    }

    // This is a prototype method. All instances of Book will share this method.
    bookInfo() {
        // This method returns a string summarizing the book's info.
        // The variables without 'this.' in front of them (like title, author, etc.)
        // are using the parameters passed to the constructor function.
        return `${title} by ${author}, ${pages} pages, ${read}.`;
    }
}

class Library {
    // Step 1: Add properties to the class using the constructor.
    constructor() {
        // Initialize the properties with their initial values.
        this.myLibrary = [];
        this.deleteModeActive = false;
        this.shelf = document.querySelector(".shelf");
        this.btnDeleteModeToggle = document.getElementById("btn-del-mode")

        // Call methods to set up the class
        this.setupDeleteListener();
        this.addDefaultBooks();
        this.displayLibrary();
        this.addBookToLibrary();
    }

    toggleDeleteMode() {
        const bookCovers = document.querySelectorAll(".book-cover");
        
        if (this.deleteModeActive === true) {
            bookCovers.forEach(bookCover => {
                bookCover.classList.add("book-cover-dim");
            });
        } else {
            bookCovers.forEach(bookCover => {
                bookCover.classList.remove("book-cover-dim");
            });
        }
        this.displayLibrary();
    }

    // Step 2: Convert deleteBook to a method.
    deleteBook(e) {
        const index = parseInt(e.target.closest('.btn-del-book').getAttribute('data-index'), 10);

        // Notice we replace "myLibrary" with "this.myLibrary" because it's a property of the class.
        this.myLibrary.splice(index, 1);
        this.displayLibrary();
        this.deleteModeActive = false;
        this.toggleDeleteMode();
    }

    displayLibrary() {
        this.shelf.innerHTML = ``;
        
        this.myLibrary.forEach((book, index) => {
            const newBook = document.createElement("div");
            const bookInfo = document.createElement("div");
            const bookCover = document.createElement("div");
            const bookTitle = document.createElement("p");
            const bookAuthor = document.createElement("p");
            const bookPages = document.createElement("p");
            const bookRead = document.createElement("p");
            const bookToggleRead = document.createElement("div");
    
            if (book.read == "read") {
                bookToggleRead.innerHTML = `<button class="btn-toggle-read"><img src="assets/icons/book-read.svg" alt=""></button>`
            } else {
                bookToggleRead.innerHTML = `<button class="btn-toggle-read"><img src="assets/icons/book-unread.svg" alt=""></button>`
            }
    
            bookToggleRead.addEventListener('click', e => {
                this.toggleReadStatus(book, e);
            });
    
            bookTitle.textContent = book.title;
            bookAuthor.textContent = book.author;
            bookPages.textContent = book.pages + " pages";
            bookRead.textContent = book.read;
            bookCover.innerHTML = `<img src="${book.cover}" alt="">`;
    
            newBook.classList.add("book");
            bookInfo.classList.add("book-info");
            bookCover.classList.add("book-cover");
            bookToggleRead.classList.add("div-toggle-read");
    
            newBook.appendChild(bookCover);
            newBook.appendChild(bookInfo);
    
            this.shelf.appendChild(newBook);
    
            bookInfo.appendChild(bookTitle);
            bookInfo.appendChild(bookAuthor);
            bookInfo.appendChild(bookPages);
            bookInfo.appendChild(bookToggleRead);
    
            const btnToggleReadStatus = bookToggleRead.querySelector(".btn-toggle-read");
            btnToggleReadStatus.addEventListener("click", e => {
                this.toggleReadStatus(book, e);
            });
    
            if(this.deleteModeActive) {
                const btnDeleteBook = document.createElement("button");
                btnDeleteBook.innerHTML = `<img src="assets/icons/delete-book.svg" alt="">`;
                btnDeleteBook.classList.add("btn-del-book");
                btnDeleteBook.setAttribute('data-index', index);
                bookCover.appendChild(btnDeleteBook);
                bookCover.classList.add("book-cover-dim")
            }
        });
    }

    addBookToLibrary() {

        this.btnDeleteModeToggle.addEventListener("click", () => {
            this.deleteModeActive = !this.deleteModeActive
            this.toggleDeleteMode();
        });
    
        const btnNewBook = document.querySelector("#btn-new-book");
        const btnCancelForm = document.querySelector("#btn-cancel-form");
        const addBookModal = document.querySelector("#add-book-modal");
        const form = document.querySelector('#add-book-form');
    
        btnNewBook.addEventListener("click", () => {
            addBookModal.showModal();
        });
        
        btnCancelForm.addEventListener("click", () => {
            addBookModal.close();
        });
    
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            const title = form.elements["title"].value;
            const author = form.elements["author"].value;
            const pages = form.elements["pages"].value;
            const read = form.elements["read-status"].value;
            const cover = form.elements["cover"].value;
    
            const newBook = new Book(title, author, pages, cover, read);
    
            this.myLibrary.push(newBook);
    
            this.shelf.innerHTML = '';
            this.displayLibrary(title, author, pages, cover, read);
    
            console.table(myLibrary);
            addBookModal.close();
        });
    }

    addDefaultBooks() {

        const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 279, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mhFI3Nd75_9KE06fiw-XGAAAAA%26pid%3DApi&f=1&ipt=7da61a20f650b0a90632c72bc3500197a83b4d1c663cdf37b5d1e938a3f61dea&ipo=images", "read");
        const toKillAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 324, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.glamour.com%2Fphotos%2F56e1f3c562b398fa64cbd310%2Fmaster%2Fw_1280%252Cc_limit%2Fentertainment-2016-02-07-main.jpg&f=1&nofb=1&ipt=ec37d1e5458566957b168c3d9888590cde2dd01b7351581bb64a2d0d31093fe2&ipo=images", "unread");
        const nineteenEightyFour = new Book("1984", "George Orwell", 328, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NsI08GYiXpzXJBYgvv3AzgHaKe%26pid%3DApi&f=1&ipt=bb57d13870c3874ee42df1a129af45184f3b40223beb56e2e304c054eb11a94e&ipo=images", "unread");
        const theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhachette.imgix.net%2Fbooks%2F9780762498130.jpg%3Fauto%3Dcompress%2Cformat&f=1&nofb=1&ipt=9c7a7c41c5f7b057c5ae4709118c69210d4f941fa1c7d4f0d2c7811e5cfb1541&ipo=images", "read");
        const oneHundredYearsOfSolitude = new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 417, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sgRflIvQ3BUsdXNhggtWrQHaLX%26pid%3DApi&f=1&ipt=e599a81be19a3cf0777e2006f99bedc93e0f6b646bc9ceee62208221d18a5e31&ipo=images", "unread");
        const braveNewWorld = new Book("Brave New World", "Aldous Huxley", 268, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexlibris.azureedge.net%2Fcovers%2F9780%2F0994%2F7746%2F4%2F9780099477464xxl.jpg&f=1&nofb=1&ipt=2ea79985da5cdeb8100a61494a8262a7274dea1257fedbf3279681f7ce2685b7&ipo=images", "unread");
        const mobyDick = new Book("Moby-Dick", "Herman Melville", 720, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FPublication%2Fv4%2Ff7%2Ff0%2F96%2Ff7f0969f-ea1b-3ce8-cebf-16e28034dd65%2Fsource%2F1200x630bb.jpg&f=1&nofb=1&ipt=c127a34d3f4727b5212e8c623a5fb5b45e77ac16b60fb478b99a7e90346e44e6&ipo=images", "read");
        const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1392, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3LMknbYT34f-p8cl2PDroAHaLQ%26pid%3DApi&f=1&ipt=d1fc777696a6b1df553824d83297c472c8ff1b7fa3dbe74b7cd7cf471e2dd4dd&ipo=images", "unread");
        const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "https://dauntbooks.co.uk/wp-content/uploads/2021/09/9780261103344.jpg", "unread");
    
        this.myLibrary.push(prideAndPrejudice, toKillAMockingbird, nineteenEightyFour, theGreatGatsby, oneHundredYearsOfSolitude, braveNewWorld, mobyDick, warAndPeace, theHobbit);
    
        this.displayLibrary();
    }

    toggleReadStatus(book, e) {

        // `stopPropagation` is a method provided by the event object (in this case, `e`).
        // When an event is triggered in the DOM (Document Object Model), it can "bubble" up 
        // or "capture" down through the element hierarchy. This means that if you have an event
        // listener on a parent element and another on a child element, both can be triggered by
        // a single event, depending on the phase of event flow.
    
        // By calling `stopPropagation`, we are preventing the event from continuing its journey.
        // In other words, we're saying "stop the event right here, don't let any parent or 
        // ancestor elements know about this event."
    
        // In the context of this function, `toggleReadStatus` is being called when a book's read
        // status button is clicked. By using `stopPropagation`, we ensure that no other event 
        // listeners further up in the DOM tree (e.g., listeners on the book's container or even 
        // the entire shelf) will be notified of this click event. This is particularly useful 
        // if we don't want any parent elements to accidentally respond to the click intended 
        // only for the read status button.
    
        e.stopPropagation();
    
        // Ensure we're targeting the button, even if the inner image was clicked.
        const btn = e.target.closest(".btn-toggle-read");
    
        if (book.read === "unread") {
            book.read = "read";
            btn.innerHTML = `<img src="assets/icons/book-read.svg" alt="">`;
        } else {
            book.read = "unread";
            btn.innerHTML = `<img src="assets/icons/book-unread.svg" alt="">`;
        }
    }

    setupDeleteListener() {
        this.shelf.addEventListener('click', (e) => { // Added 'this.' before 'shelf' and used arrow function
            if (e.target.matches('.btn-del-book, .btn-del-book img')) {
                // checks if the clicked element is the delete button or its child image
                this.deleteBook(e); // Added 'this.' before 'deleteBook'
            }
        });
    }

    deleteBook(e) {
        const index = parseInt(e.target.closest('.btn-del-book').getAttribute('data-index'), 10);
        this.myLibrary.splice(index, 1);
        this.displayLibrary();
        this.deleteModeActive = false;
        this.toggleDeleteMode();
    }

}

const myLibraryInstance = new Library();