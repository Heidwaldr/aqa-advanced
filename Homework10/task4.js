class Apinoasync {
    fetchTodo() {
      return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => {
          console.error('Помилка при отриманні todo (then):', error);
        });
    }
  
    fetchUser() {
      return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => {
          console.error('Помилка при отриманні user (then):', error);
        });
    }
  
    run() {
      Promise.all([this.fetchTodo(), this.fetchUser()])
        .then(([todo, user]) => {
          console.log('Promise.all (then):', { todo, user });
        })
        .catch(error => {
          console.error('Помилка в Promise.all (then):', error);
        });
  
      Promise.race([this.fetchTodo(), this.fetchUser()])
        .then(result => {
          console.log('Promise.race (then):', result);
        })
        .catch(error => {
          console.error('Помилка в Promise.race (then):', error);
        });
    }
  }



class Api {
    async fetchTodoAsync() {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
        } catch (error) {
        console.error('Помилка при отриманні todo (async):', error);
        }
    }
    
  
    async fetchUserAsync() {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
        } catch (error) {
        console.error('Помилка при отриманні user (async):', error);
        }
    }
  
  
    async main() {
        try {
        const allResult = await Promise.all([this.fetchTodoAsync(), this.fetchUserAsync()]);
        console.log('Результат Promise.all (async):', {
            todo: allResult[0],
            user: allResult[1]
        });
    
        const raceResult = await Promise.race([this.fetchTodoAsync(), this.fetchUserAsync()]);
        console.log('Результат Promise.race (async):', raceResult);
        } catch (error) {
        console.error('Помилка в async/await:', error);
        }
    }
}

const apinoasync = new Apinoasync()
apinoasync.run()
const myapi = new Api()
myapi.main()