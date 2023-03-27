import { Book } from './modules/Book.js';
import { UI } from './modules/UI.js';
import { Store } from './modules/Store.js';
import { PageManager } from './modules/pageManager.js';

// eslint-disable-next-line no-unused-vars
const pageManager = new PageManager();

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
  // eslint-disable-next-line no-unused-vars
  const ui = new UI();
  Store.removeBook(e.target);
  e.preventDefault();
});