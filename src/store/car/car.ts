

import { defineStore, acceptHMRUpdate } from 'pinia'
import { Television } from './car-type'
const hot = import.meta.webpackHot
//car 为car-store的唯一ID




export const useCarStore = defineStore('car', {
  state: (): {
    television: Array<Television>,
    carList: Array<Television>
  } => ({
    television: [
      {
        name: '夏普电视',
        price: 299,
        image: 'https://image3.kfangcdn.com/prod/layout/938876c5d0794ef38dc8710603610cdd.jpg-f300x225'
      },
      {
        name: '小米电视',
        price: 23,
        image: 'https://image3.kfangcdn.com/prod/layout/938876c5d0794ef38dc8710603610cdd.jpg-f300x225'
      },
      {
        name: '索尼电视',
        price: 67,
        image: 'https://image3.kfangcdn.com/prod/layout/938876c5d0794ef38dc8710603610cdd.jpg-f300x225'
      },
      {
        name: '华为电视',
        price: 88,
        image: 'https://image3.kfangcdn.com/prod/layout/938876c5d0794ef38dc8710603610cdd.jpg-f300x225'
      },
      {
        name: '红米电视',
        price: 188,
        image: 'https://image3.kfangcdn.com/prod/layout/938876c5d0794ef38dc8710603610cdd.jpg-f300x225'
      },
      {
        name: 'TCL电视',
        price: 47,
        image: 'https://image3.kfangcdn.com/prod/layout/938876c5d0794ef38dc8710603610cdd.jpg-f300x225'
      }
    ],
    carList: []
  }),
  getters: {
    totalPrice(): number {
      return this.carList.reduce((acc: number, currentValue: Television) => {
        acc += currentValue.price
        return acc
      }, 0)

    },
    totalNumber(): number {
      return this.carList.length
    },
    totalName(): string[] {
      return this.carList.reduce((acc: string[], currentValue: Television) => {
        acc.push(currentValue.name)
        return acc
      }, [])
    }
  },
  actions: {
    addCar(item: Television) {
      this.carList.push(item)
    },
    removeCar(index: number) {
      this.carList.splice(index, 1)
    }
  }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (hot) {
  hot.accept(acceptHMRUpdate(useCarStore, hot))
}
