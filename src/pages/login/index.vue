
<template>
  <div class="login-wrap">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="state.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="state.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
const Login = defineComponent({
  setup() {
    const state = reactive({
      username: '',
      password: ''
    })
    const router = useRouter()
    const onSubmit = () => {
      sessionStorage.setItem('user', 'senbochen')
      Toast.loading({
        message: '登陆中...',
        forbidClick: true
      })
      setTimeout(() => {
        router.replace('/')
        Toast.clear()
      }, 3000)
    }

    return {
      state,
      onSubmit
    }
  }
})
export default Login
</script>
<style scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  background-image: url('https://search-operate.cdn.bcebos.com/8779fea746c652bcdb9db237751f664a.png');
  background-position: center center;
}
.van-form {
  padding-top: 10%;
}
</style>
