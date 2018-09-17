import {combineReducers} from 'redux';
import todosReducers from './todosReducers';
import authReducer from './authReducer';
import filterReducer from './filterReducer';


// combine reducers & return rootReducer
export default combineReducers({
    authedUserId: authReducer,
    todos: todosReducers,
    visibilityFilter: filterReducer
});
