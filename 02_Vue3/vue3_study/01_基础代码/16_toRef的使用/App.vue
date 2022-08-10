<template>
<h2>toRef 的使用及特点</h2>
<h3>state:{{state}}</h3>
<h3>age:{{age}}</h3>
<h3>money:{{money}}</h3>
<hr>
<button @click="update">更新数据</button>

<hr>
<com-child :age="age"></com-child>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'
import ComChild from './components/com-child.vue'

export default defineComponent({
  name:"App",
  components:{
    ComChild
  },
  setup () {
    const state = reactive({
      age:5,
      money:100
    })
    
    // 把响应式数据 state 对象中的某个属性 age 变成了 ref 对象了
    const age = toRef(state,'age')

    // 把响应式对象中的某个属性使用 ref 进行包装，变成了一个 ref 对象
    const money = ref(state.money)
    
    const update = () => {
      console.log('test');
      // 更新数据
      state.age += 2
      // age.value += 3
      // money.value += 10

    }

    return {
      state,
      age,
      money,
      update
    }
  }
})
</script>

<style scoped>

</style>