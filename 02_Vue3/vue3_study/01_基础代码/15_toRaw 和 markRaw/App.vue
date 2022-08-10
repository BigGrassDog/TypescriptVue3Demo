<template>
<h2>toRaw 和 markRaw</h2>
<h3>state:{{state}}</h3>
<hr>
<button @click="testToRaw">测试 toRaw</button>
<button @click="testMarkRaw">测试 markRaw</button>
</template>

<script lang="ts">
import { defineComponent,reactive,toRaw,markRaw } from 'vue'
interface UserInfo {
  name:string;
  age:number;
  likes?:string[];
}
export default defineComponent({
  name:'App',
  setup () {
    const state = reactive<UserInfo>({
      name:'木叶最大',
      age:57
    })
    const testToRaw = ()=>{
      console.log('123');
      const user = toRaw(state)
      user.name += '==='
    }
    const testMarkRaw = ()=>{
      console.log(456);
      // state.likes = ['吃','喝','玩','乐']
      // state.likes[0] += '------'
      const likes = ['吃','喝','玩','乐']
      // markRaw 标记的对象数据，从此以后都不能再成为代理对象了
      state.likes = markRaw(likes)
      setInterval(()=>{
        if(state.likes){
          state.likes[0] += '==='
        }
        
      },1000)
    }

    return {
      state,
      testToRaw,
      testMarkRaw
    }
  }
})
</script>

<style scoped>

</style>