
<template>
  <div class="contanier-common">
    <n-button type="success" @click="openProduct">跳转到Product</n-button>
    <div class="list" style="flex: 0 0 40%">
      <h1>商品列表</h1>
      <ul>
        <li v-for="item in televisionList" :key="item.name">
          <span>型号：{{ item.name }}</span>
          <span style="color: red; padding: 10px"
            >价格：$ {{ item.price }}</span
          >
          <img :src="item.image" style="width: 100px; margin: auto" />
          <n-button
            icon-placement="right"
            strong
            style="width: 140px; margin: 20px auto"
            @click="addCarHandler(item)"
            v-if="!totalName.includes(item.name)"
          >
            <template #icon>
              <n-icon>
                <cash-icon />
              </n-icon>
            </template>
            <span> +加入购物车</span>
          </n-button>
          <n-button
            icon-placement="right"
            strong
            style="width: 140px; margin: 20px auto"
            @click="removeCarHandler(index)"
            v-if="totalName.includes(item.name)"
          >
            <template #icon>
              <n-icon>
                <cash-icon />
              </n-icon>
            </template>

            <span>从购物车移除</span>
          </n-button>
        </li>
      </ul>
    </div>
    <div class="car" style="flex: 1">
      <h1>购物车</h1>
      <p>总价格：$ {{ totalPrice }}</p>
      <p>总数量：{{ totalNumber }}</p>
      <p>购物名单：{{ totalName }}</p>
      <ul>
        <li v-for="item in carList" :key="item.name">
          <span>型号：{{ item.name }}</span>
          <span style="color: red; padding: 10px">价格：${{ item.price }}</span>
          <img :src="item.image" style="width: 100px; margin: auto" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import { useCarStore } from '@/store/car/car'
import { Television } from '@/store/car/car-type'
import { useRouter } from 'vue-router'
const carStore = useCarStore()
const router = useRouter()
const carList = computed(() => carStore.carList)
const totalPrice = computed(() => carStore.totalPrice)
const totalNumber = computed(() => carStore.totalNumber)
const totalName = computed(() => carStore.totalName)
const televisionList = computed(() => carStore.television)
const addCarHandler = (item: Television) => {
  carStore.addCar(item)
}
const removeCarHandler = (index: number) => {
  carStore.removeCar(index)
}
const openProduct = () => router.push({ path: '/product' })
</script>
<style scoped lang="scss">
.contanier-common {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 16px;
    padding: 20px 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 16px;
      color: #a3a3a3;
      padding: 16px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
