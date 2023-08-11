
let myLibrary = [];

const addBookModal = document.querySelector("#add-book-modal");
const btnCancelForm = document.querySelector("#btn-cancel-form");
const btnNewBook = document.querySelector("#btn-new-book");
const createBookButton = document.querySelector("#add-book");
const shelf = document.querySelector(".shelf");
const bookCover = document.querySelector(".book-cover");
const bookInfo = document.querySelector(".book-info");

// Object constructor that stores information on books that are added.
function Book(title, author, pages, cover, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.cover = cover
    this.read = read

    this.bookInfo = function() {
        return `${title} by ${author}, ${pages} pages, ${read}.`
    }
}

function displayLibrary() {
    myLibrary.forEach(book => {
        const newBook = document.createElement("div");

        const bookInfo = document.createElement("div");
        const bookCover = document.createElement("div");

        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookRead = document.createElement("p");

        const bookToggleRead = document.createElement("div");

        if (book.read == "read") {
            bookToggleRead.innerHTML = `<button><img src="assets/icons/book-read.svg" alt=""></button>`
        } else {
            bookToggleRead.innerHTML = `<button><img src="assets/icons/book-unread.svg" alt=""></button>`
        }

        bookToggleRead.classList.add("btn-toggle-read")

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages + " pages";
        bookRead.textContent = book.read;

        bookCover.innerHTML = `<img src="${book.cover}" alt="">`

        newBook.classList.add("book");
        bookInfo.classList.add("book-info");
        bookCover.classList.add("book-cover");

        newBook.appendChild(bookCover);
        newBook.appendChild(bookInfo);
        shelf.appendChild(newBook);

        bookInfo.appendChild(bookTitle);
        bookInfo.appendChild(bookAuthor);
        bookInfo.appendChild(bookPages);
        bookInfo.appendChild(bookToggleRead);
    });
}

const form = document.querySelector('#add-book-form');

function addBookToLibrary() {

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

        myLibrary.push(newBook);

        shelf.innerHTML = '';
        displayLibrary(title, author, pages, cover, read);

        console.table(myLibrary);
        addBookModal.close();
    });
}

function addDefaultBooks() {

    const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 279, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mhFI3Nd75_9KE06fiw-XGAAAAA%26pid%3DApi&f=1&ipt=7da61a20f650b0a90632c72bc3500197a83b4d1c663cdf37b5d1e938a3f61dea&ipo=images", "unread");
    const toKillAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 324, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.glamour.com%2Fphotos%2F56e1f3c562b398fa64cbd310%2Fmaster%2Fw_1280%252Cc_limit%2Fentertainment-2016-02-07-main.jpg&f=1&nofb=1&ipt=ec37d1e5458566957b168c3d9888590cde2dd01b7351581bb64a2d0d31093fe2&ipo=images", "unread");
    const nineteenEightyFour = new Book("1984", "George Orwell", 328, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NsI08GYiXpzXJBYgvv3AzgHaKe%26pid%3DApi&f=1&ipt=bb57d13870c3874ee42df1a129af45184f3b40223beb56e2e304c054eb11a94e&ipo=images", "unread");
    const theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhachette.imgix.net%2Fbooks%2F9780762498130.jpg%3Fauto%3Dcompress%2Cformat&f=1&nofb=1&ipt=9c7a7c41c5f7b057c5ae4709118c69210d4f941fa1c7d4f0d2c7811e5cfb1541&ipo=images", "unread");
    const oneHundredYearsOfSolitude = new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 417, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sgRflIvQ3BUsdXNhggtWrQHaLX%26pid%3DApi&f=1&ipt=e599a81be19a3cf0777e2006f99bedc93e0f6b646bc9ceee62208221d18a5e31&ipo=images", "unread");
    const braveNewWorld = new Book("Brave New World", "Aldous Huxley", 268, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexlibris.azureedge.net%2Fcovers%2F9780%2F0994%2F7746%2F4%2F9780099477464xxl.jpg&f=1&nofb=1&ipt=2ea79985da5cdeb8100a61494a8262a7274dea1257fedbf3279681f7ce2685b7&ipo=images", "unread");
    const mobyDick = new Book("Moby-Dick", "Herman Melville", 720, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FPublication%2Fv4%2Ff7%2Ff0%2F96%2Ff7f0969f-ea1b-3ce8-cebf-16e28034dd65%2Fsource%2F1200x630bb.jpg&f=1&nofb=1&ipt=c127a34d3f4727b5212e8c623a5fb5b45e77ac16b60fb478b99a7e90346e44e6&ipo=images", "unread");
    const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1392, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3LMknbYT34f-p8cl2PDroAHaLQ%26pid%3DApi&f=1&ipt=d1fc777696a6b1df553824d83297c472c8ff1b7fa3dbe74b7cd7cf471e2dd4dd&ipo=images", "unread");
    const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "https://dauntbooks.co.uk/wp-content/uploads/2021/09/9780261103344.jpg", "unread");

    myLibrary.push(prideAndPrejudice, toKillAMockingbird, nineteenEightyFour, theGreatGatsby, oneHundredYearsOfSolitude, braveNewWorld, mobyDick, warAndPeace, theHobbit);

    displayLibrary();
}

addDefaultBooks();
addBookToLibrary();
