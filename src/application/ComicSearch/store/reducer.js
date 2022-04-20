import {
    CHANGE_CURRENT_SEARCH_PAGE,
    CHANGE_CURRENT_SEARCH_DATA,
    CHANGE_CURRENT_SEARCH_TYPE,
    CHANGE_CURRENT_SEARCH_WORD
} from "./constants";

const defaultState = {
    searchData: [],
    searchPage: [],
    searchType: [],
    searchWord: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_SEARCH_PAGE:
            return { ...state, ...{ searchPage: action.data } };
        case CHANGE_CURRENT_SEARCH_DATA:
            return { ...state, ...{ searchData: action.data } }
        case CHANGE_CURRENT_SEARCH_TYPE:
            return { ...state, ...{ searchType: action.data } }
        case CHANGE_CURRENT_SEARCH_WORD:
            return { ...state, ...{ searchWord: action.data } }

        default:
            return state;
    }
} 