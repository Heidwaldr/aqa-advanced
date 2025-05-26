import { Book } from './Book.js';

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  printInfo() {
    super.printInfo();
    console.log(`Формат файлу: ${this.fileFormat}`);
    console.log('------------------------------');
  }
}

const myEBook = new EBook("Мистецтво війни", "Сунь Цзи", -500, "PDF");
myEBook.printInfo();


















