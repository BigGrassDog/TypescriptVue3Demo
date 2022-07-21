<template>
<h1>App父级组件</h1>
<hr />
<child-component></child-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 引入子级组件Child
import ChildComponent from './components/ChildComponent.vue'
export default defineComponent({
  name:'App',
  // 注册组件
  
  components:{
    ChildComponent
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>