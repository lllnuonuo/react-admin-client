// 发送ajax请求,封装axios, 函数返回值是promise对象
/* 优化：
   1. 统一处理请求异常?
    在外层包一个自己创建的promise
    在请求出错时，不去reject(error),而是显示错误提示
   2. 异步得到不是response,而是response.data
   在请求成功resolve时， resolve(response.data)
*/
import axios from 'axios'
import {message} from 'antd'; 

export default function ajax(url, data={}, type='GET'){
    return new Promise((resolve, reject) => {
        let promise;
        // 1. 执行异步ajax请求
        if(type==='GET'){// 发get请求
            promise =  axios.get(url, {
                params: data
            })
        } else {
            promise = axios.post(url, data)
        }

        // 2. 如果成功了，调用resolve(value)
        promise.then(res => {
            resolve(res.data)
        // 如果失败了， 不调用reject, 而是提示异常信息
        }).catch(err => {
            message.error('请求失败')
        })
    })
}
