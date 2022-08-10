<template>
<h2>App 父级组件</h2>
<button @click="isShow = !isShow">切换显示</button>
<hr />
<child-component v-if="isShow"></child-component>
</template>

<script lang="ts">
import ChildComponent from './components/ChildComponent.vue'
import { defineComponent,ref } from 'vue'
export default defineComponent({
  name:'App',
  // 注册组件
  components:{
    ChildComponent
  },
  setup() {
    const isShow = ref(true)
    return {
      isShow
    }
  }
})
</script>

<style lang="scss" scoped>
</style>