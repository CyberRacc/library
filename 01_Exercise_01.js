function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.bookInfo = function() {
        return `${title} by ${author}, ${pages} pages, ${read}.`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "unread");

console.log(theHobbit.bookInfo());
