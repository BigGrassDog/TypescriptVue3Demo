<template>
<div class="todo-container">
  <div class="todo-wrap">
    <Header></Header>
    <List :todos="todos"></List>
    <Footer></Footer>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

// 引入接口
import {Todo} from './types/todo'

export default defineComponent({
  name:'App',
  components:{
  Header,
  List,
  Footer
  },
  // 数据应该用数组来存储，数组中的每个数据都是一个对象，对象中应该有三个属性（id,title,isCompleted）
  // 把数组暂且定义在 App.vue 父级组件
  setup () {
    // 定义一个数组数据
    const state = reactive<{todos:Todo[]}>({
      todos:[
        {id:1,title:'Benz',isCompleted:false},
        {id:2,title:'Audi',isCompleted:false},
        {id:3,title:'Bmw',isCompleted:false},
        {id:4,title:'Porche',isCompleted:true},
      ]
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>
.todo-wrap {
  width: 500px;
  margin: 0 auto;
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
}
.todo-wrap h2 {
  text-align: center;
}
</style>