<template>
<h2>App父级组件：Suspense组件的使用</h2>

<Suspense>
  <template #default>
    <!-- 异步组件 -->
    <!-- <AsyncComponent></AsyncComponent> -->
    <AsyncAddress></AsyncAddress>
  </template>
  <template v-slot:fallback>
    <!-- loading的内容 -->
    <h2>loading</h2>
  </template>
</Suspense>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
// 引入组件：静态引入和动态引入

// vue2 中的动态引入组件的写法：(在 vue3 中这种写法不支持)
// const AsyncComponet = () => import('./AsyncComponent.vue')
// vue3 中的动态引入组件的写法
// const AsyncComponent = defineAsyncComponent(
//   () => import('./AsyncComponent.vue')
// )

// 静态引入组件
// import AsyncComponent from './AsyncComponent.vue'
import AsyncAddress from './AsyncAddress.vue'
export default defineComponent({
  name:'App',
  components:{
    // AsyncComponent,
    AsyncAddress
  },
  setup () {

    return {}
  }
})
</script>

<style scoped>

</style>