function checkOrder(available, ordered) {
	if (available < ordered) {
		var message = 'Your order is too large, we don’t have enough goods.';
		console.log(message);
		return message;
	} else if (ordered == 0) {
		var message = 'Your order is empty';
		console.log(message);
		return message;
	} else if (available >= ordered) {
		var message = 'Your order is accepted';
		console.log(message);
		return message;
	}
}

console.log('\nordered 60, 50 available');
checkOrder(50, 60);
console.log('\nordered 50, 70 is available');
checkOrder(70, 50);
console.log('\nordered 0, 50 is available');
checkOrder(50, 0);
