import axios from "axios";
export const baseUrl = 'https://api.pingcc.cn';
export const baseUrl2 = 'https://www.kuaikanmanhua.com'

const axiosInstance = axios.create({
    baseURL:baseUrl
});
const axiosInstance2 = axios.create({
    baseURL:baseUrl2
});
axiosInstance.interceptors.response.use(
    res =>res.data,
    err =>{
        console.log(err,'网络出现问题')
    }
);
export{
    axiosInstance,
    axiosInstance2
};