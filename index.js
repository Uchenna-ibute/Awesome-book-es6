import Book from './modules/book.js';
// eslint-disable-next-line no-unused-vars
import nav from './modules/nav.js';
import { DateTime } from './modules/luxon.js';
import store from './modules/store.js';
class All {
  static displayBooks() {
    const books = store.getBooks();
    books.forEach((book) => All.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector('#bookli');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>"${book.title}"  by  ${book.author}</td>
    <td class="d-none">${book.author}</td>
    <td><a href="#" class="btn btn-sm btn-danger delete float-end">Remove</a></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

}
const time = document.querySelector('#time');
const ate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
time.innerHTML = ate;
document.addEventListener('DOMContentLoaded', All.displayBooks);
const Form = document.querySelector('#bookform');
Form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);
  All.addBookToList(book);
  store.addBook(book);
  All.clearField();
});
document.querySelector('#bookli').addEventListener('click', (e) => {
  store.removeBook(e.target.parentElement.previousElementSibling.innerHTML);
  All.deleteBook(e.target);
});
