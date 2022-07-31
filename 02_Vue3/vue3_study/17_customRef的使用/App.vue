<template>
  <h1>CustomRef 的使用</h1>
  <input v-model="keyword" type="text">
  <hr>
  <span>{{keyword}}</span>
</template>

<script lang="ts">
import { defineComponent,ref,customRef } from 'vue'
// 自定义 hook 防抖的函数
// value传入的数据，将来数据的类型不确定，所以，用泛型，delay防抖的间隔时间，默认是200毫秒
function useDebounceRef<T>(value:T,delay=200){
  // 准备一个存储定时器的 id 的变量
  let timeOutId:number
  return customRef((track,trigger)=>{
    return {
      // 返回数据的
      get(){
        // 告诉 vue 追踪数据
        track()
        return value
      },

      // 设置数据的
      set(newValue:T){
        // 清理定时器
        clearTimeout(timeOutId)
        // 开启定时器
        timeOutId = setTimeout(()=>{
          value = newValue
          // 告诉vue更新界面
          trigger()
        },delay)
      }
    }
  })
}
export default defineComponent({
  name:'App',
  setup () {
    // const keyword = ref('abc')

    const keyword = useDebounceRef('abc',500)

    return {
      keyword
    }
  }
})
</script>

<style scoped>

</style>