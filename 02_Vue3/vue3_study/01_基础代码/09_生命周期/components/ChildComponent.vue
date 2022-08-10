<template>
<h2>Child 子级组件</h2>
<h4>msg:{{msg}}</h4>
<button @click="update">更新数据</button>
</template>

<script lang="ts">
import { 
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted 
  } from 'vue'

export default defineComponent({
  name:'ChildComponent',

  // vue2 中的生命周期钩子
  beforeCreate(){
    console.log('2.x中的beforeCreate...')    
  },
  created(){
    console.log('2.x中的created...');
    
  },
  beforeMount(){
    console.log('2.x中的beforeMount...')    
  },
  mounted(){
    console.log('2.x中的mounted...')    
  },
  beforeUpdate(){
    console.log('2.x中的beforeUpdate...')    
  },
  updated(){
    console.log('2.x中的updated...')    
  },
  beforeUnmount(){
    console.log('2.x中的beforeDestroy...')    
  },
  unmounted(){
    console.log('2.x中的destroyed...')    
  },

  setup () { 
    console.log('vue3 中的 setup');
    
    // 响应式的数据
    const msg = ref('abc')
    // 按钮点击事件的回调
    const update = ()=>{
      msg.value += '======'
    }

    onBeforeMount(()=>{
      console.log('3.0 中的 onBeforeMount...');
      
    })

    onMounted(()=>{
      console.log('3.0 中的 onMounted...');
      
    })

    onBeforeUpdate(()=>{
      console.log('3.0 中的 onBeforeUpdate...');
      
    })

    onUpdated(()=>{
      console.log('3.0 中的 onUpdated...');
      
    })

    onBeforeUnmount(()=>{
      console.log('3.0 中的 onBeforeUnmount...');
      
    })

    onUnmounted(()=>{
      console.log('3.0 中的 onUnmounted...');
      
    })
    return {
      msg,
      update
    }
  }
})
</script>

<style scoped>
</style>