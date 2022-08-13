<template>
<div class="todo-container">
  <div class="todo-wrap">
    <Header :addTodo="addTodo"></Header>
    <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></List>
    <Footer :todos="todos" :checkAll="checkAll" :clearAllCompletedTodos='clearAllCompletedTodos'></Footer>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent,onMounted,reactive,toRefs,watch } from 'vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

// 引入接口
import {Todo} from './types/todo'
import {saveTodos,readTodos} from './utils/localStorageUtils'

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
    // const state = reactive<{todos:Todo[]}>({
    //   todos:[
    //     {id:1,title:'Benz',isCompleted:false},
    //     {id:2,title:'Audi',isCompleted:false},
    //     {id:3,title:'Bmw',isCompleted:false},
    //     {id:4,title:'Porche',isCompleted:true},
    //   ]
    // })

    const state = reactive<{todos:Todo[]}>({
      todos:[]
    })
    // 界面加载完毕后过了一会再读区数据
    onMounted(()=>{
      setTimeout(()=>{
        state.todos = readTodos()
      },500)
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

    // 全选 / 取消全选
    const checkAll = (isCompleted:boolean) => {
      state.todos.forEach(todo=>{
        todo.isCompleted = isCompleted
      })
    }

    // 清理所有已完成的任务
    const clearAllCompletedTodos = ()=>{
      state.todos = state.todos.filter(todo=>{
        return !todo.isCompleted
      })
    }

    // 监视操作：如果 todos 数组的数据变化了，直接存储到浏览器的缓存中
    // watch(()=>state.todos,(val)=>{
    //   localStorage.setItem('todos_key',JSON.stringify(val))
    // },{deep:true})

    // watch(()=>state.todos,(val)=>{
    //   // 保存到浏览器的缓存中
    //   saveTodos(val)
    // },{deep:true})

    watch(()=>state.todos,saveTodos,{deep:true})

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos
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