
<template>
  <div class="contanier-common">
    <n-tabs type="line">
      <n-tab-pane name="oasis" tab="Vant 组件浏览器">
        <van-skeleton title avatar :row="3" :loading="loading">
          <n-input
            v-model:value="Name"
            type="text"
            placeholder="输入关键词搜索，例如：射击、跳水"
            clearable
            @input="onChange"
            style="text-align: left"
            maxlength="20"
          />
          <n-grid :x-gap="12" :y-gap="8" :cols="2" style="margin-top: 20px">
            <div v-for="item in inforData" :key="item.number">
              <n-card
                title="金牌榜🏅"
                content-style="padding:0;"
                header-style="padding:10px 0"
              >
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
        </van-skeleton>
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="TypeScript">
        <coust></coust>
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="Vue3">
        {{ song }}
        {{ obj.age }}
      </n-tab-pane>
    </n-tabs>
    <teleport to="body">
      <n-drawer v-model:show="active" :width="502" :placement="placement">
        <n-drawer-content title="Stoner">
          Stoner is a 1965 novel by the American writer John Williams.
        </n-drawer-content>
      </n-drawer>
    </teleport>
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
import Coust from './components/coust.vue'

const PAGE_NAME = 'Home'
const Home = defineComponent({
  name: PAGE_NAME,
  components: {
    Coust
  },
  setup() {
    const count = ref<number>(0)
    const san = ref<Chensong.Name>({ name: '这是一个命名空间' })
    const song = ref<Name>('这是一个类型别名的 文案')
    const inforData = ref<ObjectType>({})
    const loading = ref<boolean>(true)
    const dataProps = ref<ObjectType>({}) as any
    const active = ref<boolean>(false)
    const obj = ref<ObjectType>({
      age: '12岁'
    })
    const getInfor = async () => {
      try {
        const {
          data: {
            data: { dataList }
          }
        } = await getBaseInfor({
          srcid: 50522,
          full_column_event: 'tokyo_olympic_2021',
          query: '中国金牌'
        })
        inforData.value = dataList
        dataProps.value = dataList
      } catch (error) {
        console.log(error)
      }
    }

    //输入框的变化
    const onChange = (e: string) => {
      if (e) {
        inforData.value = dataProps.value.filter((res: any): unknown => {
          return res.subTitle.includes(e)
        })
      } else {
        inforData.value = dataProps.value
      }
    }

    onMounted(() => {
      getInfor()
      loading.value = false
    })

    return {
      count,
      san,
      song,
      obj,
      inforData,
      active,
      onChange,
      loading
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
