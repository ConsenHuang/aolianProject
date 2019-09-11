import {
    baseUrl, //引入baseUrl
} from "../axios_config/env";
import Qs from 'qs'
import axios2 from 'axios';
let axios = axios2.create({
    baseURL: baseUrl, // api的base_url
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer 3488c76d-27dd-4dba-a35e-54b20a48f7e0'
    },
    timeout: 10000, // 请求超时时间
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }],
})
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}