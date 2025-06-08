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
			throw new Error('Назва повинна бути рядком');
		}
		this._title = value;
	}

	set author(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Автор повинен бути рядком');
		}
		this._author = value;
	}

	set year(value) {
		const currentYear = new Date().getFullYear();
		if (!Number.isInteger(value) || value < -5000 || value > currentYear) {
			throw new Error('Рік повинен бути цілим числом у допустимому діапазоні');
		}
		this._year = value;
	}

	printInfo() {
		console.log(`Назва: ${this.title}`);
		console.log(`Автор: ${this.author}`);
		console.log(`Рік видання: ${this.year}`);
		console.log('------------------------------');
	}

	static getOldestBook(books) {
		return books.reduce((oldest, current) => {
			return current.year < oldest.year ? current : oldest;
		});
	}
}
