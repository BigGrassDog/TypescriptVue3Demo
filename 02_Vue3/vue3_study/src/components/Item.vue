<!-- eslint-disable vue/no-mutating-props -->
<template>
  <li>
    <label for="">
      <input type="checkbox" v-model="todo.isCompleted" />
      <span>{{todo.title}}</span>
      <button class="btn btn-danger" style="display:none">删除</button>
    </label>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 引入接口
import {Todo} from '../types/todo'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Item',
  props:{
    todo:Object as ()=> Todo // 函数返回的是Todo 类型
  },
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>