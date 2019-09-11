import {
    baseUrl, //引入baseUrl
} from "../axios_config/env";
import axios2 from 'axios';
// import Qs from 'qs'
let axios = axios2.create({
    baseURL: baseUrl, // api的base_url
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer 3488c76d-27dd-4dba-a35e-54b20a48f7e0'
    },
    timeout: 10000, // 请求超时时间
})

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post_json(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}