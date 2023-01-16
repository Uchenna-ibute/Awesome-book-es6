export default class store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(author) {
    const books = store.getBooks();
    let index = 0;
    books.filter((book) => {
      if (book.author !== author) { index = +1; }
      return books;
    });
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
  }
}