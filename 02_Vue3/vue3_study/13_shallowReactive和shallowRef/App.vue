<template>
<h2>shallowReactive和shallowRef</h2>
<h3>{{m1}}</h3>
<h3>{{m2}}</h3>
<h3>{{m3}}</h3>
<h3>{{m4}}</h3>
<hr />
<button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from 'vue'

export default defineComponent({
  name:'App',
  setup () {
    // 深度劫持（深监视）---- 深度响应式
    const m1 = reactive({
      name:'漩涡口鸟八',
      age:23,
      car:{
        name:'蛤蟆吉',
        color:'orange'
      }
    })

    // 浅劫持（浅监视） ---- 浅响应式
    const m2 = shallowReactive({
      name:'漩涡口鸟八',
      age:23,
      car:{
        name:'蛤蟆吉',
        color:'orange'
      }
    })

    // 深度劫持（深监视）---- 深度响应式 ---- 做了 reactive 处理
    const m3 = ref({
      name:'漩涡口鸟八',
      age:23,
      car:{
        name:'蛤蟆吉',
        color:'orange'
      }
    })

     // 浅劫持（浅监视） ---- 浅响应式
    const m4 = shallowRef({
      name:'漩涡口鸟八',
      age:23,
      car:{
        name:'蛤蟆吉',
        color:'orange'
      }
    })   
    const update = ()=>{
      // 更改m1的数据 ---- reactive 方式
      // m1.name += '---'
      // m1.car.name += '111'

      // 更改m2的数据 ---- shallowReactive 方式
      // m2.name += '2222'
      // m2.car.name += '2222'

      // 更改m3的数据 ---- ref 方式
      // m3.value.name += '木叶最大'
      // m3.value.car.name += '木叶最大'

      // 更改m4的数据 ---- shallowRef 方式
      // m4.value.name += '照美冥'
      // m4.value.car.name +='111'
      console.log(m3,m4);
      
    } 

    return {
      m1,
      m2,
      m3,
      m4,
      update
    }
  }
})
</script>

<style scoped>

</style>