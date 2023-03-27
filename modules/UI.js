// eslint-disable-next-line import/prefer-default-export
export class UI {
// eslint-disable-next-line class-methods-use-this
  addBookToTheList(book) {
    const ul = document.getElementById('tbody-container');
    const li = document.createElement('tr');
    li.innerHTML = `
      <td> <span class="author delete">"${book.author}"</span> by <span class="title delete">${book.title}</span> </td>
      <td><button class="delete">remove</button> </td>
     
    `;
    ul.insertBefore(li, ul.firstChild);
  }

  // eslint-disable-next-line class-methods-use-this
  clearFieldsInputs() {
    const author = document.getElementById('author');
    const title = document.getElementById('book');
    author.value = '';
    title.value = '';
  }
}