import {FETCH_TODOS,RECEIVED_TODOS,ADD_TODO} from '../actions/todosActionTypes';

export default function todosReducer(state = [], action){

    switch (action.type){
        case RECEIVED_TODOS:
            return action.todos;
        case ADD_TODO:
            return state.concat([action.todo]);
        default:
            return state;
    }
}
