const numbers = [1, 2, 3, 4, 5];
const mutatedNumbers = numbers.map((value, index) => {
	return value * index;
});

console.log(mutatedNumbers);
