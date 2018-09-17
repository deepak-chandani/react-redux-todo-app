import {SET_FILTER_TYPE} from './filterActionTypes';


export const setFilterTypeActionCreator = (filterType) => {
    return {
        type: SET_FILTER_TYPE,
        filterType: filterType
    }
}