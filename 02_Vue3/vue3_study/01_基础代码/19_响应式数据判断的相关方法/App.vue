<template>
<h2>响应式数据的判断</h2>
</template>

<script lang="ts">
import { isRef,isReactive,isReadonly,readonly,isProxy,defineComponent,ref,reactive } from 'vue'

export default defineComponent({
  name:'App',
  // isRef: 检查一个值是否为一个 ref 对象
  // isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
  // isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
  // isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
  setup () {
    console.log(isRef(ref({})))
    console.log(isReactive(reactive({})))
    console.log(isReadonly(readonly({})))
    console.log(isProxy(reactive({})))
    console.log(isProxy(readonly({})))

    return {}
  }
})
</script>

<style scoped>

</style>