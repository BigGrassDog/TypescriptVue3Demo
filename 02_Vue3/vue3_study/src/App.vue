<template>
<h1>App父级组件</h1>
<h3>msg:{{msg}}</h3>
<button @click="msg += '！'">更新数据</button>
<hr />
<child-component :msg="msg"></child-component>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

// 引入子级组件Child
import ChildComponent from './components/ChildComponent.vue'
export default defineComponent({
  name:'App',
  // 注册组件
  
  components:{
    ChildComponent
  },
  setup () {
    // 定义一个 Ref 类型的数据
    const msg = ref('中森明菜天下第一')

    return {
      msg
    }
  }
})
</script>

<style scoped>

</style>