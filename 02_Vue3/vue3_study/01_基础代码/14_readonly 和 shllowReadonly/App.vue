<template>
<h2>readonly 和 shllowReadonly</h2>
<h3>state:{{state}}</h3>
</template>

<script lang="ts">
import { defineComponent,reactive, readonly,shallowReadonly } from 'vue'

export default defineComponent({
  setup () {
    const state = reactive({
      name:'弱智皮大力',
      age:20,
      car:{
        name:'青蛇',
        color:'green'
      }
    })
    // 只读的数据 ----- 深度的只读
    // const state2 = readonly(state)
    // 只读的数据 ----- 浅只读的
    const state2 = shallowReadonly(state)

    const update = ()=>{
      // state2.name += '漩涡口鸟八'
      // state2.car.name += '---'
      
    }

    return {
      state2,
      update
    }
  }
})
</script>

<style scoped>

</style>