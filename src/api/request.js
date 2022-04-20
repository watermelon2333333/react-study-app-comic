import { axiosInstance, axiosInstance2 } from "./config";


export const getBannerRequest = () => {
  return axiosInstance.get('/comic/search/comicType/奇幻/1/10');
}

export const getRecommendListRequest = () => {
  return axiosInstance.get('/comic/search/comicType/校园/1/12');
}

export const getDetailDataRequest = (comicId) => {
  return axiosInstance.get(`/comicChapter/search/${comicId}`)
}

export const getComicContentRequest = (id) => {
  return axiosInstance.get(`/comicContent/search/${id}`)
}

export const getAnySearchRequest = (searchType, keyword, currentPage) => {
  return axiosInstance.get(`/comic/search/${searchType}/${keyword}/${currentPage}/10`)
}