/*
 * @Author: your name
 * @Date: 2021-08-09 16:41:31
 * @LastEditTime: 2021-08-09 16:48:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-vue3/src/service/index.ts
 */
import axios from 'axios'
const instance = axios.create({
  baseURL: '',
  timeout: 1000
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance
