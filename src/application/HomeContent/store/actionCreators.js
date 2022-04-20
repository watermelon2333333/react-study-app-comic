import * as actionTypes from './constants';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data
});

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(res => {
      console.log(res)
      const action = changeBannerList(res.data);
      dispatch(action);
    }).catch(() => {
      console.log('轮播图数据传输错误');
    })
  }
};
export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest().then(res => {
      console.log(res)
      dispatch(changeRecommendList(res.data));
    }).catch(() => {
      console.log("推荐数据传输错误");
    });
  }
};