<template>
<h2>Child子级组件</h2>
<h3>msg:{{msg}}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:'ChildComponent',
  props:['msg'],
  // setup 细节问题：
  // setup 是在 beforeCreate 生命周期回调之前就执行了，而且就执行一次
  // 由此可以推断出：setup在执行的时候，当前组件还没有创建出来，组件实例对象this根本就不能用
  // this 是 undefined 说明 就不能通过 this 再去调用 data/computed/methods/props 中的相关内容
  // 其实所有的 composition Api 相关回调函数中也都不可以

  // 数据初始化的生命周期回调
  beforeCreate(){
    console.log('beforeCreate执行啦');
    
  },
  // 界面渲染完毕
  // mounted(){

  // },
  setup () {
    console.log('setup执行啦',this);
    
    return {
      // setup 中一般都是返回一个对象，对象中的属性和方法都可以在 html 模板中直接使用
    }
  }
})
</script>

<style scoped>
</style>