<template>
<div class="todo-header">
  <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add">
</div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Header',
  props:{
    addTodo:{
      type:Function,
      required:true, // 必须
    }
  },
  setup (props) {
    // 定义一个 ref 类型数据
    const title = ref('')
    // 回车事件回调函数，用来添加数据
    const add = ()=>{
      // 获取文本框中输入的数据，判断不为空
      const text = title.value
      if(!text.trim()) return
      // 此时有数据，创建一个 todo 对象
      const todo = {
        id:Date.now(),
        title:text,
        isCompleted:false
      }
      // 调用方法 addTodo 的方法
      props.addTodo(todo)
      // 清空文本框
      title.value = ''
    }

    return {
      title,
      add
    }
  }
})
</script>

<style scoped>
.todo-header {
  width: 100%;
  box-sizing: border-box;
}

.todo-header input {
  width: 100%;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  box-sizing: border-box;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0, 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>