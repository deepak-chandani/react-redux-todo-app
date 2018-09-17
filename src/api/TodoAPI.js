//import axios from 'axios';

class TodoAPI {
    static fetchTodos(userId){
        const promise = fetch('https://jsonplaceholder.typicode.com/todos?userId='+userId)
                        .then((res) => res.json());

        return promise;
        
    }

    static create(todo){
        const promise = fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(todo),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((response) => response.json());

        return promise;
    }
}

export default TodoAPI;