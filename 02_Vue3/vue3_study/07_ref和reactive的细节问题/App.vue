<template>
<h2>reactive和ref的细节问题</h2>
<h3>m1:{{m1}}</h3>
<h3>m2:{{m2}}</h3>
<h3>m3:{{m3}}</h3>
<hr>
<button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent,ref,reactive } from "vue"

export default defineComponent ({
  name:'App',
  // 是 Vue3 的 composition API 中 2 个最重要的响应式 API(ref和reactive)
  // ref 用来处理基本类型数据, reactive 用来处理对象(递归深度响应式)
  // 如果用 ref 对象/数组, 内部会自动将对象/数组转换为 reactive 的代理对象
  // ref 内部: 通过给 value 属性添加 getter/setter 来实现对数据的劫持
  // reactive 内部: 通过使用 Proxy 来实现对对象内部所有数据的劫持, 并通过 Reflect 操作对象内部数据
  // ref 的数据操作: 在 js 中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
  setup () {
    // 通过ref的方式设置数据
    const m1 = ref('中森明菜')
    const m2 = reactive({
      name:'原田美枝子',
      lover:{
        name:'中森明菜'
      }
    })
    // ref也可以传入对象吗
    const m3 = ref({
      name:'原田美枝子',
      lover:{
        name:'中森明菜'
      }
    })
    const update = ()=>{
      // ref 中如果放入的是一个对象，那么是经过了 reactive 的处理，形成了一个 Proxy 类型的对象
      m1.value += '---'
      m2.lover.name += '---'
      m3.value.lover.name += '---'

      
    }
    return {
      m1,
      m2,
      m3,
      update
    }
  }
})
</script>

<style lang="scss" scoped>
</style>