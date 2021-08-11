/*
 * @Author: your name
 * @Date: 2021-07-21 11:51:46
 * @LastEditTime: 2021-08-10 16:11:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-vue3/src/types/shims-vue.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  interface ObjectType<T> {
    [key: string]: T
  }

  export default component
}


