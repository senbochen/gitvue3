<template>
  <n-message-provider>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <login></login>
  </n-message-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NMessageProvider } from 'naive-ui'
import HelloWorld from './components/HelloWorld.vue'
import Login from './pages/login/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Login,
    NMessageProvider
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
  margin-top: 60px;
}
</style>
