/*
 * @Author: your name
 * @Date: 2021-07-23 10:22:55
 * @LastEditTime: 2021-08-10 11:13:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-vue3/src/main.ts
 */

import { createApp } from 'vue'
import naive from 'naive-ui'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'normalize.css'
import './styles/reset.css'
import App from './App.vue'
import 'amfe-flexible'
import router from './router/index'
import './service'
import { createPinia } from 'pinia'
// 通用字体
import 'vfonts/Lato.css'
const app = createApp(App)
app.use(createPinia())
app.use(naive)
app.use(router)
app.use(Vant)
app.mount('#app')
