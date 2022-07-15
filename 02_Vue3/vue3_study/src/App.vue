<template>
<h2>setup和ref的基本使用</h2>
<h3>{{count}}</h3>
<button @click="updateCount">按钮</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
    let count = 0
    // 方法
    function updateCount(){
      count ++
    }

    // 返回的是一个对象
    return {
      count,
      updateCount
    }
  }
});
</script>
