import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/mac/Desktop/vue3/hello-vue3/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/mac/Desktop/vue3/hello-vue3/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
