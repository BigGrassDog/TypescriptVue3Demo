<template>
<div class="todo-container">
  <div class="todo-wrap">
    <Header :addTodo="addTodo"></Header>
    <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></List>
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

    // 添加数据的方法
    const addTodo = (todo:Todo)=>{
      console.log(todo);
      
      state.todos.unshift(todo)
    }

    // 删除数据的方法
    const deleteTodo = (index:number)=>{
      console.log(index);
      state.todos = state.todos.filter(item=>{
        return index !== item.id
      })
    }

    // 修改 todo 的 isCompleted 属性的状态
    const updateTodo = (todo:Todo,isCompleted:boolean)=>{
      todo.isCompleted = isCompleted
      console.log(todo);
      
    }

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo
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