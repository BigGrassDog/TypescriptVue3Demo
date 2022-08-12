<!-- eslint-disable vue/no-mutating-props -->
<template>
  <li :class="{'active':isActive}" @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)">
    <label for="">
      <input type="checkbox" v-model="isComplete" />
      <span>{{todo.title}}</span>
      <button v-show="isActive" class="btn btn-danger" @click="delT(todo.id)">删除</button>
    </label>
  </li>
</template>

<script lang="ts">
import { defineComponent,ref,computed } from 'vue'

// 引入接口
import {Todo} from '../types/todo'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Item',
  props:{
    todo:{
      type:Object as ()=> Todo,
      required:true
    }, // 函数返回的是Todo 类型
    deleteTodo:{
      type:Function,
      required:true
    },
    updateTodo:{
      type:Function,
      required:true
    }
  },
  setup (props) {
    let isActive = ref(false)
    // 鼠标进入和离开事件的回调函数
    const mouseHandler = (flag:boolean)=>{
      isActive.value = flag
    }

    // 删除数据的方法
    const delT = (index:number)=>{
      props.deleteTodo(index)
    }

    // 计算属性方式-----来让当前复选框选中/不选中
    const isComplete = computed({
      get(){
        return props.todo.isCompleted
      },
      set(val){
        props.updateTodo(props.todo,val)
      }
    })


    return {
      mouseHandler,
      isActive,
      delT,
      isComplete
    }
  }
})
</script>

<style scoped>
li label,
li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li.active {
  color: #ff6028;
  background: #f7f7f7;
  cursor: pointer;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>