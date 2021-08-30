import {
    SET_RESULT,
    SET_ALL_RESULT,
    SET_CATEGORIES,
    SET_PAGINATE
} from './actionTypes';


export const setResult = content => ({
    type: SET_RESULT,
    payload: {
        content
    }
});
export const setAllResult = content => ({
    type: SET_ALL_RESULT,
    payload: {
        content
    }
});

export const setCategories = content => ({
    type: SET_CATEGORIES,
    payload: {
        content
    }
});
export const setPaginate = content => ({
    type: SET_PAGINATE,
    payload: {
        content
    }
});

