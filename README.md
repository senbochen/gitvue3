### 熟悉的写法

```

const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    }
  }
})


```



#### 你甚至可以使用一个函数（类似于一个组件setup()）来为更高级的用例定义一个 Store：

```
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})

```

>> 优势：

+ 支持options api and composition api
+ 没有mutations。mutations被认为是非常冗长的。最初带来了 devtools 集成，但这不再是问题。s
+ 没有嵌套的模块
+ 更好typescript支持。无需创建自定义的复杂包装器来支持 TypeScript，所有内容都是类型化的，并且 API 的设计方式尽可能地利用 TS 类型推断。
+ 没有命名空间模块。鉴于store的扁平架构，“命名空间”store是其定义方式所固有的，您可以说所有stores都是命名空间的
+ 无需动态添加stores，默认情况下它们都是动态的，您甚至不会注意到。请注意，您仍然可以随时手动使用store来注册它，但因为它是自动的，所以您无需担心
+ Pinia 大小约1kb
