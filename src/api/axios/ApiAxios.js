import axios from 'axios';
// import setCookie from '../cookies/ApiCookie';
import Cookies from 'js-cookie'
// 创建axios实例
const httpService = axios.create({
    baseURL: "http://localhost:8080", // url前缀
    timeout: 3000 // 请求超时时间
});
// // request拦截器
httpService.interceptors.request.use(
    config => {
        // 根据条件加入token-安全携带
        // if (false) { // 需自定义
        //     // 让每个请求携带token
        //     config.headers['User-Token'] = '';
        // }
        console.log(config.data);
        return config;
    },
    error => {
        // 请求错误处理
        Promise.reject(error);
    }
)



httpService.interceptors.response.use(response => {
    // 对响应数据做些什么
    console.log(response.headers);
    return response
}, error => {
    // 对响应错误做些什么
    console.log('error', error.response) // 修改后
    return Promise.reject(error)
})




/*网络请求部分*/

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        httpService({
                url: url,
                method: 'get',
                params: params
            }).then(response => {
                // console.log(response);
                resolve(response);
            })
            .catch(error => {
                console.error(response);
                reject(error);
            });
    });
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'post',
            data: params,
        }).then(response => {
            console.log(params);
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}
export function postWithURL(url, params) {
    return new Promise((resolve, reject) => {
        httpService({
            url: ("http://localhost:8888/api/" + url),
            method: 'post',
            data: params,
            // headers: {
            //     'content-type': 'application/json;charset=UTF-8'
            // }
        }).then(response => {
            console.log(params);
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function fileUpload(url, params = {}) {
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'post',
            data: params,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export default {
    get,
    post,
    fileUpload,
    postWithURL
}