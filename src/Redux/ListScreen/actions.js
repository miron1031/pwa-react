import * as actionTypes from './actionTypes';

export function saveURL(url) {
    return ({ type: actionTypes.FETCH_ARTICLE_SUCCESS, payload: url })
}