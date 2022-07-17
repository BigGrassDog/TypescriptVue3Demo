<template>
<h2>setup和ref的基本使用</h2>
<h3>{{count}}</h3>
<button @click="updateCount">按钮</button>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化
  // vue2的方式实现
  // data(){
  //   return {
  //     count:0
  //   }
  // },
  // methods:{
  //   updateCount(){
  //     this.count ++
  //   }
  // }

  // vue3的方式实现
  // setup 是组合 api 的入口函数
  setup(){
    // 变量
    // let count = 0 // 此时的数据并不是响应式的数据（响应式数据：数据变化，页面跟着渲染变化）
    // ref 是一个函数，作用：定义一个响应式的数据，返回的是一个 Ref 对象，对象中有一个value属性，如果需要对数据进行操作，需要使用该 Ref 对象调用 value 属性的方式进行数据的操作
    // html 模板中是不需要使用 .value 属性的写法
    // 一般用来定义一个基本类型的响应式数据
    let count = ref(0)
    // 方法
    function updateCount(){
      console.log('======');
      
      count.value ++
    }

    // 返回的是一个对象
    return {
      count,
      updateCount
    }
  }
});
</script>
