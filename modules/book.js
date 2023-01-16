export default class Book {
    constructor(title, author, id = Math.floor(Math.random() * 1000)) {
      this.title = title;
      this.author = author;
      this.id = id;
    }
}