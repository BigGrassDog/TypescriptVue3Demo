<template>
<h2>Child子级组件</h2>
<h3>msg:{{msg}}</h3>
<!-- <h3>{{count}}</h3> -->
<button @click="emitBeautifulGirl">分发事件</button>
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

  // setup 中的返回值是一个对象，内部的属性和方法是给 html 模板使用的
  // setup 中的对象内部的属性和 data 函数的中的 return 对象的属性都可以在 html 模板中使用
  // setup 中的对象中的属性和 data 函数中的对象的属性会合并为组件对象的属性
  // setup 中的对象中的方法和 methods 对象中的方法会合并为组件对象的方法
  // 在 Vue3 中尽量不要混合的使用 data 和 setup 及 methods 和 setup
  // setup 不能是一个 async 函数：因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性数据

  // 数据初始化的生命周期回调
  // beforeCreate(){
  //   console.log('beforeCreate执行啦');
    
  // },
  // 界面渲染完毕
  // mounted(){

  // },
    // setup (props,context) {
  setup (props,{attrs,slots,emit}) {
    // props 参数，是一个对象，里面有父级组件向子级组件传递的数据，并且是在子级组件中使用 props 接收到的所有的属性
    // 包含 props 配置声明且传入了所有属性的对象
    // console.log(props.msg);


    // console.log(context.attrs);
    // console.log(context.emit);
    // context参数，是一个对象，里面有 attrs 对象（获取当前组件标签上的所有的属性的对象，但是该属性是在props中没有声明接收的所有的属性的对象），emit 方法（分发事件），slots 对象（插槽）
    // 包含没有在 props 配置中声明的属性的对象，相当于 this.$attrs
    // console.log(context.attrs.msg2);
    console.log(attrs.msg2);
    
    // 按钮的点击事件的回调函数
    function emitBeautifulGirl(){
      // context.emit('beautifulGirl','中森明菜倾国倾城')
      emit('beautifulGirl','中森明菜倾国倾城')
    }
    
    
    
    console.log('==========');
    
    console.log('setup执行啦',this);
    const showMsg1 = ()=>{
      console.log('setup 中的showMsg方法');
      
    }
    
    return {
      showMsg1,
      emitBeautifulGirl
      // setup 中一般都是返回一个对象，对象中的属性和方法都可以在 html 模板中直接使用
    }
  },
  // data(){
  //   return {
  //     count:10
  //   }
  // },
  // mounted(){
  //   console.log(this);
    
  // },
  // methods:{
  //   showMsg2(){
  //     console.log('methods中的showMsg方法');
      
  //   }
  // }
})
</script>

<style scoped>
</style>