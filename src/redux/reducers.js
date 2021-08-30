import {
    SET_RESULT,
    SET_ALL_RESULT,
    SET_CATEGORIES,
    SET_PAGINATE
} from './actionTypes';

const initState = {
    result: '',
    allresult: '',
    categories: '',
    paginate: '',
};

export function reducers(state = initState, action) {
    switch (action.type) {
        case SET_RESULT: {
            const {content} = action.payload;
            return {
                ...state,
                result: content
            };
        }
        case SET_ALL_RESULT: {
            const {content} = action.payload;
            return {
                ...state,
                allresult: content
            };
        }
        case SET_CATEGORIES: {
            const {content} = action.payload;
            return {
                ...state,
                categories: content
            };
        }
        case SET_PAGINATE: {
            const {content} = action.payload;
            return {
                ...state,
                paginate: content
            };

        }

        default:
            return state;
    }
}
