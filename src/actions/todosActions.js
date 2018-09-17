import {FETCH_TODOS, ADD_TODO, RECEIVED_TODOS} from './todosActionTypes';
import TodoAPI from '../api/TodoAPI';

export const fetchTodos = (userId) => {
   return (dispatch) => {
       TodoAPI.fetchTodos(userId).then((data) => {
            dispatch(receiveTodosActionCreator(data));
       })

   }
};

const receiveTodosActionCreator = (todos) => {

    return {
        type: RECEIVED_TODOS,
        todos: todos
    }
}

export const addTodo = (todo) => {
    console.log(todo);
   return (dispatch) => {
       TodoAPI.create(todo).then((todo) => {

             console.log("add todo response ",todo);

            dispatch(addTodoActionCreator(todo));
       });
   }

}

const addTodoActionCreator = (todo) => {

    return {
        type: ADD_TODO,
        todo: todo
    }
}