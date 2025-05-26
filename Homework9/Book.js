export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    console.log(`Назва: ${this.title}`);
    console.log(`Автор: ${this.author}`);
    console.log(`Рік видання: ${this.year}`);
    console.log('------------------------------');
  }
}

const book1 = new Book("Сто років самотності", "Ґабрієль Ґарсія Маркес", 1967);
const book2 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1967);
const book3 = new Book("Тіні забутих предків", "Михайло Коцюбинський", 1911);

book1.printInfo();
book2.printInfo();
book3.printInfo();






