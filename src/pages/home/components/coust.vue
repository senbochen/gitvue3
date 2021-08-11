
<template>
  <van-popup v-model:show="show" position="top" :style="{ height: '30%' }">
    <h1>2</h1>
  </van-popup>
  <van-button type="primary" @click="open">打 开</van-button>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

const Coust = defineComponent({
  setup() {
    const show = ref(false)
    const open = () => {
      show.value = true
    }
    return {
      show,
      open
    }
  }
})
export default Coust
</script>
<style>
</style>
