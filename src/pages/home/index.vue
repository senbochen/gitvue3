
<template>
  <div class="contanier-common">
    <n-input
      v-model:value="Name"
      type="text"
      placeholder="动态输入你的关键词"
      clearable
      maxlength="20"
    />
    <n-tabs type="line">
      <n-tab-pane name="oasis" tab="Slider 组件展览">
        <h5>{{ inforData.titleText }}</h5>

        <n-grid :x-gap="12" :y-gap="8" :cols="2">
          <div v-for="item in inforData.dataList" :key="item.number">
            <n-card title="金牌榜🏅">
              <p>时间：{{ item.date }}</p>
              <n-image
                width="100"
                :src="item.poster"
                object-fit="cover"
                style="border-radius: 50%"
              />
              <p style="font-size: 12px">
                {{ item.subTitle }}{{ item.number }}金
              </p>
              <p>{{ item.title }}</p>
            </n-card>
          </div>
        </n-grid>
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="TypeScript">
        {{ san.name }}
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="Vue3">
        {{ song }}
        {{ obj.age }}
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang='ts'>
type Name = string
type ObjectType = {
  [key: string]: unknown
}
import { defineComponent, ref, onMounted } from 'vue'
import { Chensong } from '@/chen'
import { getBaseInfor } from '@/api/index'
const PAGE_NAME = 'Home'
const Home = defineComponent({
  name: PAGE_NAME,
  setup() {
    const count = ref<number>(0)
    const san = ref<Chensong.Name>({ name: '这是一个命名空间' })
    const song = ref<Name>('这是一个类型别名的 文案')
    const inforData = ref<ObjectType>({})
    const obj = ref<ObjectType>({
      age: '12岁'
    })
    const getInfor = () => {
      return getBaseInfor({
        srcid: 50522,
        full_column_event: 'tokyo_olympic_2021',
        query: '中国金牌'
      })
    }
    onMounted(async () => {
      const {
        data: { data }
      } = await getInfor()
      inforData.value = data
    })

    return {
      count,
      san,
      song,
      obj,
      inforData
    }
  }
})
export default Home
</script>
<style>
.contanier-common {
  padding: 10px;
  font-size: 0.12rem;
}
</style>
