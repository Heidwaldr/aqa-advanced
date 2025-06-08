const person = {
	firstName: 'Anton',
	lastName: 'Sedun',
	age: '25',
};

person.email = 'Sedun@gmail.com';
console.log(person.email);

delete person.age;
console.log(person);
