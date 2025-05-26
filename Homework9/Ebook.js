// EBook.js

import { Book } from './Book.js';

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

 
  get fileFormat() {
    return this._fileFormat;
  }

  
  set fileFormat(value) {
    const allowedFormats = ['PDF', 'EPUB', 'MOBI', 'TXT'];
    if (typeof value !== 'string' || !allowedFormats.includes(value.toUpperCase())) {
      throw new Error(`Формат файлу повинен бути одним з: ${allowedFormats.join(', ')}`);
    }
    this._fileFormat = value.toUpperCase();
  }

  printInfo() {
    super.printInfo();
    console.log(`Формат файлу: ${this.fileFormat}`);
    console.log('------------------------------');
  }
}


const ebook1 = new EBook("Мистецтво війни", "Сунь Цзи", -500, "pdf");


ebook1.printInfo();


ebook1.title = "The Art of War";
ebook1.year = -400;
ebook1.fileFormat = "epub";

console.log(`Назва (геттер): ${ebook1.title}`);
console.log(`Формат (геттер): ${ebook1.fileFormat}`);