import axios from "axios";
import store from '../store/index.js'

import { ElLoading,ElMessage } from "element-plus";
// 使用create创建axios实例
let loadingObj = null
const Service = axios.create({
    timeout: 8000,
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})
// 请求拦截-增加loading，对请求做统一处理
Service.interceptors.request.use(config => {
    const uInfo = store.state.uInfo.userInfo.token
    config.headers["Authorization"] = "Bearer " +uInfo
    loadingObj = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0,0,0,0.7)',
    })
    return config
})
// 响应拦截-对返回值做统一处理

Service.interceptors.response.use(response => {
    //  console.log('888',response);
    loadingObj===null? null: loadingObj.close()
   
    return response.data

}, error => {
//    console.log(111,error.response.data.message);
loadingObj===null? null: loadingObj.close()
    ElMessage({
        message: error.response.data.message,
        type: "error",
        duration: 2000
    })
})

// post请求
export const post = config => {
    return Service({
        ...config,
        method: "post",
        data: config.data
    })
}
// get请求
export const get = config => {
    return Service({
        ...config,
        method: "get",
        data: config.data
    })
}

// put请求
export const put = config => {
    return Service({
        ...config,
        method: "put",
        data: config.data
    })
}





// delete请求
export const del = config=>{
    return Service({
        ...config,
        method: "delete",
        data: config.data
    })
}