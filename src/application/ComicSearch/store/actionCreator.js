import { getAnySearchRequest } from "../../../api/request";
import {
    CHANGE_CURRENT_SEARCH_DATA,
    CHANGE_CURRENT_SEARCH_PAGE,
    CHANGE_CURRENT_SEARCH_TYPE,
    CHANGE_CURRENT_SEARCH_WORD
} from "./constants";
const changeSearchData = (data) => ({
    type: CHANGE_CURRENT_SEARCH_DATA,
    data
})
const changeSearchPage = (data) => ({
    type: CHANGE_CURRENT_SEARCH_PAGE,
    data
})
const changeSearchType = (data) => ({
    type: CHANGE_CURRENT_SEARCH_TYPE,
    data
})
const changeSearchWord = (data)=>({
    type:CHANGE_CURRENT_SEARCH_WORD,
    data
})

export const getAnySearchDataDispatch = (searchType, keyword, currentPage) => {
    return dispatch => {
        getAnySearchRequest(searchType, keyword, currentPage).then(res => {
            dispatch(changeSearchData(res));
            dispatch(changeSearchPage(currentPage));
            dispatch(changeSearchType(searchType));
            dispatch(changeSearchWord(keyword))
        }).catch(() => {
            console.log('获取搜索数据错误')
        })
    }
}