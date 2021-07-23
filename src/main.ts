/*
 * @Author: your name
 * @Date: 2021-07-21 11:51:46
 * @LastEditTime: 2021-07-23 11:09:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-vue3/src/main.ts
 */
import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'
import 'amfe-flexible';
// 通用字体
import 'vfonts/Lato.css'
const app = createApp(App)
app.use(naive)
app.mount('#app')
