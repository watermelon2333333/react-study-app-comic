import * as actionTypes from './constants';

const defaultState = {
    contentData: [],
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_COMIC_CONTENT:
            return {...state,...{contentData:action.data}};
        default:
            return state;
    }
}
