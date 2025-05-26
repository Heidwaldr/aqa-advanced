export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }


  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }


  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error("Назва книги повинна бути непорожнім рядком.");
    }
    this._title = value;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error("Ім’я автора повинно бути непорожнім рядком.");
    }
    this._author = value;
  }

  set year(value) {
    if (!Number.isInteger(value) || value < -5000 || value > new Date().getFullYear()) {
      throw new Error("Рік видання повинен бути цілим числом у допустимому діапазоні.");
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Назва: ${this.title}`);
    console.log(`Автор: ${this.author}`);
    console.log(`Рік видання: ${this.year}`);
    console.log('------------------------------');
  }
}