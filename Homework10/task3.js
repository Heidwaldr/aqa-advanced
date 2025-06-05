async function fetchTodoAsync() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		return await response.json();
	} catch (error) {
		console.error('Помилка при отриманні todo (async):', error);
	}
}

async function fetchUserAsync() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
		return await response.json();
	} catch (error) {
		console.error('Помилка при отриманні user (async):', error);
	}
}

async function main() {
	try {
		const allResult = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
		console.log('Результат Promise.all (async):', {
			todo: allResult[0],
			user: allResult[1],
		});

		const raceResult = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
		console.log('Результат Promise.race (async):', raceResult);
	} catch (error) {
		console.error('Помилка в async/await:', error);
	}
}

main();
