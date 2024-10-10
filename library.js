// Define the Book class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isCheckedOut = false;
  }
}

// Define the Patron class
class Patron {
  constructor(name) {
    this.name = name;
    this.checkedOutBooks = [];
  }

  // Method to check out a book
  checkOutBook(book) {
    if (this.checkedOutBooks.length < 3) {
      if (!book.isCheckedOut) {
        this.checkedOutBooks.push(book);
        book.isCheckedOut = true;
      } else {
        console.log(`${book.title} is already checked out.`);
      }
    } else {
      console.log(`${this.name} already has 3 books checked out.`);
    }
  }

  // Method to return a book
  returnBook(book) {
    const bookIndex = this.checkedOutBooks.indexOf(book);
    if (bookIndex > -1) {
      this.checkedOutBooks.splice(bookIndex, 1);
      book.isCheckedOut = false;
    } else {
      console.log(`${this.name} doesn't have this book checked out.`);
    }
  }
}

// Define the Library class
class Library {
  constructor() {
    this.books = [];
    this.patrons = [];
  }

  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to register a patron
  addPatron(patron) {
    this.patrons.push(patron);
  }

  // Method to check out a book to a patron
  checkOutBook(book, patron) {
    patron.checkOutBook(book);
  }

  // Method to return a book from a patron
  returnBook(book, patron) {
    patron.returnBook(book);
  }
}

//Example:
const library = new Library();

const book1 = new Book('1984', 'George Orwell');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
const book4 = new Book('Moby Dick', 'Herman Melville');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

const patron1 = new Patron('Elijah');
const patron2 = new Patron('Sarah');

library.addPatron(patron1);
library.addPatron(patron2);

library.checkOutBook(book1, patron1);
library.checkOutBook(book2, patron1);
library.checkOutBook(book3, patron1); // Elijah now has 3 books

// Attempting to check out a 4th book (should fail)
library.checkOutBook(book4, patron1);

// Returning a book and checking out another
library.returnBook(book1, patron1);
library.checkOutBook(book4, patron1);
