import { getComicContentRequest } from '../../../api/request';
import { CHANGE_COMIC_CONTENT } from './constants';
const changeComicContent = (data) => ({
    type: CHANGE_COMIC_CONTENT,
    data
})

export const getComicContent = (id) => {
    return dispatch => {
        getComicContentRequest(id).then(res => {
            console.log(res)
            dispatch(changeComicContent(res.data))
        }).catch(() => {
            console.log('捕获到错误')
        })
    }
}