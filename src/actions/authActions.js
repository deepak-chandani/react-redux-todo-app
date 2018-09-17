import {SET_AUTHED_USER_ID} from './authActionTypes';

const setAuthedUserActionCreator = (userId) => {

    return {
        type: SET_AUTHED_USER_ID,
        userId: userId
    }
};

export default setAuthedUserActionCreator;