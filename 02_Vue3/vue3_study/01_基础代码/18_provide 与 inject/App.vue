<template>
<h2>provide 与 inject</h2>
<p>当前颜色：{{color}}</p>
<button @click="color='red'">红色</button>
<button @click="color='yellow'">黄色</button>
<button @click="color='green'">绿色</button>
<com-son></com-son>
</template>

<script lang="ts">
import { defineComponent,ref,provide } from 'vue'
import ComSon from './components/com-son.vue'

export default defineComponent({
  components:{ComSon},
  name:'App',
  setup () {
    // 响应式数据
    const color = ref('red')
    // 提供数据
    provide('color',color)
    return {
      color
    }
  }
})
</script>

<style scoped>

</style>