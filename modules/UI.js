class UI {
  addBookToTheList =(book) => {
    const ul = document.getElementById('tbody-container');
    const li = document.createElement('tr');
    li.innerHTML = `
      <td> <span class="author delete">"${book.author}"</span> by <span class="title delete">${book.title}</span> </td>
      <td><button class="delete">remove</button> </td>
     
    `;
    ul.insertBefore(li, ul.firstChild);
  }

  clearFieldsInputs =() => {
    const author = document.getElementById('author');
    const title = document.getElementById('book');
    author.value = '';
    title.value = '';
  }
}

export default UI;