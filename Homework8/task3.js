const car1 = {
	brand: 'Mazda',
	model: 'cx 5',
	year: '2018',
};

const car2 = {
	brand: 'Subaru',
	model: 'Forrester',
	owner: 'Vlad',
};

const car3 = {
	...car1,
	...car2,
};

console.log(JSON.stringify(car3, null, 2));
