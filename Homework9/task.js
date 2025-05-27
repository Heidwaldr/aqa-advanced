

import { Book } from './Book.js';
import { EBook } from './EBook.js';


const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("Захар Беркут", "Іван Франко", 1883);


const ebook1 = new EBook("Маруся", "Григорій Квітка-Основ’яненко", 1834, "PDF");


book1.printInfo();
book2.printInfo();
ebook1.printInfo();


book1.title = "Кобзар (оновлений)";
ebook1.fileFormat = "epub";


console.log(`Назва оновлена: ${book1.title}`);
console.log(`Формат електронної книги: ${ebook1.fileFormat}`);


const allBooks = [book1, book2, ebook1];


const oldest = Book.getOldestBook(allBooks);
console.log('Найдавніша книга:');
oldest.printInfo();


const convertedEBook = EBook.fromBook(book2, 'mobi');
console.log('Книга, конвертована в електронну:');
convertedEBook.printInfo();
