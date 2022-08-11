<template>
<ul class="todo-main">
<Item v-for="(item,index) in todos" :key="index" :todo="item" @click="deleteT(index)"></Item>
</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Item from './Item.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name:'List',
  components:{
    Item
  },
  props:{
    todos:{
      type:Array,
      default:()=>{
        return []
      }
    },
    deleteTodo:{
      type:Function,
      required:true
    }
  },
  setup (props) {
    const deleteT = (index:number)=>{
      props.deleteTodo(index)
    }
    

    return {
      deleteT
    }
  }
})
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>