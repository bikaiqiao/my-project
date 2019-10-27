import axios from 'axios';
// import setCookie from '../cookies/ApiCookie';
import Cookies from 'js-cookie'
import { request } from 'http';
// 创建axios实例
const httpService = axios.create({
    baseURL: "http://localhost:8080", // url前缀
    timeout: 3000 // 请求超时时间
});
const URL = "http://localhost:8888/api/";

// request拦截器
httpService.interceptors.request.use(
    config => {
        if (config.data.requestInterceptors == false) {
            console.log(config);
            if (config.data.params) {
                config.data = config.data.params;
            }
        } else {
            // 让每个请求携带token
            config.headers.Authorization = 'Bearer ' + Cookies.get("token");
        }
        console.log(config);
        return config;
    },
    error => {
        // 请求错误处理
        Promise.reject(error);
    }
)


//response拦截器
httpService.interceptors.response.use(
    response => {
        // 对响应数据做些什么
        // if (response.token) {
        //     this.$state.token.commit('SET_TOKEN', response.token);
        // }
        if (response.data.token) {
            Cookies.set('token', response.data.token)
        }
        console.log(response)
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

export function getWithURL(url, params = {}) {
    return new Promise((resolve, reject) => {
        httpService({
                url: (URL + url),
                method: 'get',
                params: params,
                data: { requestInterceptors: false }
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
            url: (URL + url),
            method: 'post',
            data: { params, requestInterceptors: false }
        }).then(response => {
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
    postWithURL,
    getWithURL
}