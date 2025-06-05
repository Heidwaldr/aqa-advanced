function divide(numerator, denominator) {
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error('Both arguments must be numbers.');
	}

	if (denominator === 0) {
		throw new Error('Cannot divide by zero.');
	}

	return numerator / denominator;
}

// Тестові виклики
const testCases = [
	[10, 2],        // ✅ 5
	[15, 0],        // ❌ помилка: ділення на 0
	['hello', 3],   // ❌ помилка: нечисловий аргумент
	[8, 4],         // ✅ 2
];

testCases.forEach(([a, b]) => {
	try {
		const result = divide(a, b);
		console.log(`Result: ${result}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
	} finally {
		console.log('Робота завершена');
	}
});
