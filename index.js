import Book from './modules/Book.js';
import UI from './modules/UI.js';
import Store from './modules/Store.js';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  const author = document.getElementById('author').value;
  const title = document.getElementById('book').value;

  const book = new Book(author, title);

  const ui = new UI();

  if (author === '' || title === '') {
    return;
  }

  ui.addBookToTheList(book);
  Store.addBook(book);
  ui.clearFieldsInputs();
  event.preventDefault();
});

document.getElementById('tbody-container').addEventListener('click', (e) => {
  Store.removeBook(e.target);
  e.preventDefault();
});
