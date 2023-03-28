import UI from './UI.js';

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => {
      const ui = new UI();
      ui.addBookToTheList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBookFromStore(index) {
    const books = Store.getBooks();

    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(target) {
    if (target.className === 'delete') {
      const titleElement = target.parentElement.parentElement.querySelector('.title');
      const authorElement = target.parentElement.parentElement.querySelector('.author');
      const books = Store.getBooks();
      const bookT = titleElement.textContent;
      const bookA = authorElement.textContent;
      const index = books.findIndex(
        (book) => book.title === bookT && book.author === bookA,
      );

      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
      target.parentElement.parentElement.remove();
    }
  }
} document.addEventListener('DOMContentLoaded', () => {
  Store.displayBooks();
});

export default Store;
