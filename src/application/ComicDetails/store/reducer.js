import * as actionTypes from './constants';

const defaultState = {
  detailData: [],
  chapterCount: [],
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL_DATA:
      return { ...state, ...{ detailData: action.data } };
    case actionTypes.CHANGE_CURRENT_CHAPTER_COUNT:
      return { ...state, ...{ chapterCount: action.data } };
    default:
      return state;
  }
}