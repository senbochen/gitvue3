<!--
 * @Author: your name
 * @Date: 2021-07-23 10:26:05
 * @LastEditTime: 2021-08-09 15:57:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-vue3/src/pages/login/index.vue
-->

<template>
  <n-spin :show="show">
    <div class="login">
      <n-form
        :model="model"
        ref="formRef"
        :rules="rules"
        label-placement="left"
        :label-width="60"
      >
        <n-form-item path="account" label="账号">
          <n-input
            v-model:value="model.account"
            @keydown.enter.prevent
            placeholder="请输入账号"
          />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input
            v-model:value="model.password"
            type="password"
            placeholder="请输入密码"
            @keydown.enter.prevent
          />
        </n-form-item>

        <n-row :gutter="[0, 24]">
          <n-col :span="24">
            <n-button
              style="width: 100%"
              @click="handleValidateButtonClick"
              :disabled="model.password === null"
              type="primary"
            >
              登陆
            </n-button>
          </n-col>
        </n-row>
      </n-form>
    </div>
  </n-spin>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
const COMPONETNAME = 'Login'
const Login = defineComponent({
  name: COMPONETNAME,
  setup() {
    const formRef = ref<any>(null)
    const rPasswordFormItemRef = ref(null)
    const message = useMessage()
    const router = useRouter()
    const show = ref<boolean>(false)
    const modelRef = ref<object>({
      account: null,
      password: null
    })

    return {
      formRef,
      router,
      show,
      rPasswordFormItemRef,
      model: modelRef,
      rules: {
        account: [
          {
            required: true,
            validator(rule: Object, value: string) {
              if (!value) {
                return new Error('账号不能为空~')
              } else if (value !== 'admin') {
                return new Error('账号有误!账号为admin')
              }
              return true
            },
            trigger: ['input', 'blur']
          }
        ],
        password: [
          {
            required: true,
            validator(rule: Object, value: string | number) {
              if (!value) {
                return new Error('密码不能为空~')
              } else if (value !== '123456') {
                return new Error('密码有误！密码为123456')
              }
              return true
            }
          }
        ]
      },
      handleValidateButtonClick(e: any) {
        e.preventDefault()
        formRef.value.validate((errors: any) => {
          if (!errors) {
            show.value = true
            sessionStorage.setItem('user', '15116263904')
            setTimeout(() => {
              router.replace('/')
            }, 2000)
          } else {
            console.log(errors)
            message.error('验证失败')
          }
        })
      }
    }
  }
})
export default Login
</script>
<style scoped>
</style>
