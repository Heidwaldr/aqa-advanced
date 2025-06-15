console.log('Declaration function');
function verification(age) {
	if (age >= 18) {
		console.log('особа доросла');
		return true;
	} else {
		console.log('Особа не доросла');
		return false;
	}
}

console.log('below is result for number 25');
verification(25);
console.log('below is result for number 15');
verification(15);
