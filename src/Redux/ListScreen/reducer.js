import * as actionTypes from './actionTypes';

const initialState = {
    url: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ARTICLE_SUCCESS:
            return Object.assign({}, state, {
                url: action.payload,
            })
        default:
            return state;
    }
}