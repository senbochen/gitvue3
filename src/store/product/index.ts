

import { defineStore, acceptHMRUpdate } from 'pinia'
const hot = import.meta.webpackHot
//product 为product-store的唯一ID

function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


interface TableDataType {
  name: string;
  age: number;
  address: string;
  key: string | number
}



export const useProductStore = defineStore('product', {
  state: (): {
    tableData: Array<TableDataType>
    posts: string[],
    user: { postsCount: number },
    age: number;
    errors: Array<unknown>
    show: boolean
  } => ({
    tableData: [],
    posts: ['post 1', 'post 2', 'post 3', 'post 4'],
    user: { postsCount: 2 },
    age: 18,
    errors: [],
    show: false
  }),
  getters: {

  },
  actions: {
    getData() {
      this.show = true
      setTimeout(() => {
        //方式1：直接通过this找到对应的state修改
        this.tableData = [
          {
            name: `第一行`,
            age: 23,
            address: `深圳`,
            key: guid()
          },
          {
            name: `第二行`,
            age: 54,
            address: `武汉`,
            key: guid()
          },
          {
            name: `第三行`,
            age: 22,
            address: `北京`,
            key: guid()
          },
          {
            name: `第四行`,
            age: 64,
            address: `扬州`,
            key: guid()
          },
          {
            name: `第五行`,
            age: 4,
            address: `襄阳`,
            key: guid()
          },
          {
            name: `第六行`,
            age: 7,
            address: `太原`,
            key: guid()
          }
        ]
        this.show = false
      }, 2000)
    },
    removeData() {
      //方式2：通过.$patch 函数方法
      this.$patch((state) => {
        state.tableData = []
      })
    },
    deleteData(index: number) {
      this.$patch((state) => {
        state.tableData.splice(index, 1)
      })
    }
  }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (hot) {
  hot.accept(acceptHMRUpdate(useProductStore, hot))
}
