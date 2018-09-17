import {SET_AUTHED_USER_ID} from '../actions/authActionTypes';

const authReducer = (state = null, action) => {

    switch(action.type){
        case SET_AUTHED_USER_ID:
            return action.userId;
        default:
            return state;
    }
}

export default authReducer;