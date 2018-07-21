import axios from 'axios';
import tokenFun from '../token'

let Promise = require('es6-promise').Promise;

const Axios = axios.create({
    baseURL: '',
    timeout: 5000,
    withCredentials: true, //带上 cookie
})

//添加一个请求拦截器
Axios.interceptors.request.use(config => {
    //POST传参序列化
    if (config.method === 'post') {
        // 数据序列化成表单
        const formData = new FormData()
        Object.keys(config.data).forEach(key => formData.append(key, config.data[key]))
        config.data = formData
    }

    if (config.method === 'put' || config.method == 'delete') {
        let url = ''
        for (let key in config.data) {
            url += key + '=' + config.data[key] + '&'
        }
        url = url.slice(0, url.length - 1)
        config.data = url
    }

    if (config.method === 'get' && config.url.indexOf('/api/') != -1 && config.data) {
        let url = '?'
        for (let key in config.data) {
            url += key + '=' + config.data[key] + '&'
        }
        url = url.slice(0, url.length - 1)
        config.url += url
    }

    // 存储 token
    if (!tokenFun.getToken('token')) {
        //存储token 后跳至  如果不需要 可以删除此步
    } else {
        config.headers.Authorization = tokenFun.getToken('token')
    }

    return config
}, error => {
    alert('参数错误！');
    return Promise.reject(error)
})

//添加一个返回拦截器
Axios.interceptors.response.use(res => {
    const { data } = res
    if (data.status == 'ok') {
        return data
    } else {
		//处理错误
    }

    return data
}, error => {
    alert('网络错误，请检查网络再试！')
    return Promise.reject(error)
})

export default Axios