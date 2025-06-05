import { Book } from './Book.js';

export class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this.fileFormat = fileFormat;
	}

	get fileFormat() {
		return this._fileFormat;
	}

	set fileFormat(value) {
		const formats = ['PDF', 'EPUB', 'MOBI', 'TXT'];
		if (typeof value !== 'string' || !formats.includes(value.toUpperCase())) {
			throw new Error(`Формат повинен бути одним з: ${formats.join(', ')}`);
		}
		this._fileFormat = value.toUpperCase();
	}

	printInfo() {
		super.printInfo();
		console.log(`Формат файлу: ${this.fileFormat}`);
		console.log('------------------------------');
	}

	static fromBook(bookInstance, fileFormat) {
		if (!(bookInstance instanceof Book)) {
			throw new Error('Потрібно передати екземпляр Book');
		}
		return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
	}
}
