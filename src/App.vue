<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  },
  setup () {
    return {}
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
