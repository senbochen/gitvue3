/*
 * @Author: your name
 * @Date: 2021-07-28 19:12:29
 * @LastEditTime: 2021-08-10 16:13:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-vue3/src/permission.ts
 */

import router from './router'
import { RouteLocationNormalized } from 'vue-router'

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  const token = sessionStorage.getItem('user')

  if (!token) {
    if (to.path !== '/login') {
      return next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})
