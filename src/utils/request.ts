/** 管理全局请求 
 * 1- 相同强求的处理
 * 2- 管理所有请求，提供取消请求的方法
 * 3- 全局控制请求的并发
 * */ 

import {AxiosRequestConfig} from 'axios'

const generateReqKey = (config: AxiosRequestConfig, hash: string) => {
    const {method, url, params, data} =config
    return [method, url, JSON.stringify(params), JSON.stringify(data), hash].join('&')
}

const pendingRequest = new Set()