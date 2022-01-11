/*
 * @Author: your name
 * @Date: 2021-07-23 16:12:39
 * @LastEditTime: 2021-08-11 14:06:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-vue3/src/router/index.ts
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/product',
    component: () => import('@/pages/product/index.vue')
  }
]




const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router



