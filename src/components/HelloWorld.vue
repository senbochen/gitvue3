<template>
  <div class="hello">
    {{ count }}
    <n-button type="primary" @click="add">增加</n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NButton } from 'naive-ui'
const COMPONETNAME = 'Test'

function Greeter(greeting: string) {
  return function (target: Function) {
    target.prototype.run = function (): string {
      return greeting
    }
  }
}

@Greeter('衬衫')
class Car {
  static san: string = '静态值'
  constructor() {}
  eat() {
    return '这是一个成员方法'
  }
}
let lanbo = new Car()
console.log(lanbo.eat())

const HelloWorld = defineComponent({
  name: COMPONETNAME,
  components: { NButton },
  setup() {
    const count = ref<number>(333)
    const add = () => {
      count.value++
    }

    return {
      count,
      add
    }
  }
})
export default HelloWorld
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
