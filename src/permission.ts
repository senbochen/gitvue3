
import router from './router'
import { RouteLocationNormalized } from 'vue-router'

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  const token = sessionStorage.getItem('user')

  if (!token) {
    if (to.path !== '/login') {
      return next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

// router.afterEach((to: RouteLocationRaw) => {
//   document.title = to.meta.title
// })
