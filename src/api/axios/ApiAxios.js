import axios from 'axios';
// import setCookie from '../cookies/ApiCookie';
import Cookies from 'js-cookie'
// 创建axios实例
const httpService = axios.create({
    baseURL: "http://localhost:8080", // url前缀
    timeout: 3000 // 请求超时时间
});
// httpService.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
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

// // respone拦截器
// httpService.interceptors.response.use(
//     response => {
//         // 统一处理状态
//         const res = response.data;
//         if (res.erddcode != 200) { // 需自定义
//             // 返回异常
//             return Promise.reject({
//                 status: res.errcode,
//                 message: res.message
//             });
//         } else {
//             return response.data;
//         }
//     },
//     // 处理处理
//     error => {
//         if (error && error.response) {
//             switch (error.response.status) {
//                 case 400:
//                     error.message = '错误请求';
//                     break;
//                 case 401:
//                     error.message = '未授权，请重新登录';
//                     break;
//                 case 403:
//                     error.message = '拒绝访问';
//                     break;
//                 case 404:
//                     error.message = '请求错误,未找到该资源';
//                     break;
//                 case 405:
//                     error.message = '请求方法未允许';
//                     break;
//                 case 408:
//                     error.message = '请求超时';
//                     break;
//                 case 500:
//                     error.message = '服务器端出错';
//                     break;
//                 case 501:
//                     error.message = '网络未实现';
//                     break;
//                 case 502:
//                     error.message = '网络错误';
//                     break;
//                 case 503:
//                     error.message = '服务不可用';
//                     break;
//                 case 504:
//                     error.message = '网络超时';
//                     break;
//                 case 505:
//                     error.message = 'http版本不支持该请求';
//                     break;
//                 default:
//                     error.message = `未知错误${error.response.status}`;
//             }
//         } else {
//             error.message = "连接到服务器失败";
//         }
//         return Promise.reject(error);
//     }
// )

// // http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         //response.data.errCode是我接口返回的值，如果值为2，说明Cookie丢失，然后跳转到登录页，这里根据大家自己的情况来设定
//         if (response.data.errCode == 2) {
//             router.push({
//                 path: '/login',
//                 query: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
//             })
//         }
//         return response;
//     },
//     error => {
//         return Promise.reject(error.response.data)
//     });

httpService.interceptors.response.use(response => {
    // 对响应数据做些什么
    console.log(response.data);
    if (response.data.errcode == 100) {
        Cookies.set('token', response.data.errmsg);
        console.log(Cookies.get('token'));
    }
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
export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        httpService({
            url: url,
            method: 'post',
            data: params,
            headers: {
                // 'Access-Control-Allow-Origin': '*', //解决cors头问题
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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
    fileUpload
}