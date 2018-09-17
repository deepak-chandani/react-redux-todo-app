import {SET_FILTER_TYPE} from '../actions/filterActionTypes';
import FilterTypes from '../components/Filters/FilterTypes';

const filterReducer = (state = FilterTypes.ALL, action) => {

    switch (action.type){
        case SET_FILTER_TYPE:
            return action.filterType;
        default:
            return state;
    }
}

export default filterReducer;
