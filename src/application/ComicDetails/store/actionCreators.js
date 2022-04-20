import { getDetailDataRequest } from "../../../api/request";
import { CHANGE_CURRENT_CHAPTER_COUNT, CHANGE_DETAIL_DATA} from "./constants";

const changeDetailData = (data) => ({
    type: CHANGE_DETAIL_DATA,
    data
})

const changeChapterCount = (data)=>({
    type:CHANGE_CURRENT_CHAPTER_COUNT,
    data
})
export const getChapterCount = (index)=>{
    return dispatch =>{
        dispatch(changeChapterCount(index));
    }
}
export const getDetailData = (comicId) => {
    return dispatch => {
        getDetailDataRequest(comicId).then(res => {
            dispatch(changeDetailData(res.data))
        }).catch(() => {
            console.log('捕获到错误')
        })
    }
}