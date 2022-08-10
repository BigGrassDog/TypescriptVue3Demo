<template>
<h2>toRefs的使用</h2>
<!-- <h3>name:{{state.name}}</h3>
<h3>age:{{state.age}}</h3> -->

<h3>name:{{name}}</h3>
<h3>age:{{age}}</h3>

<h3>name:{{name2}}</h3>
<h3>age:{{age2}}</h3>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'

function useFeatureX(){
      const state = reactive({
      name2:'漩涡口鸟八',
      age2:47
    })
    return {
      ...toRefs(state)
    }
}

export default defineComponent({
  setup () {
    const state = reactive({
      name:'漩涡口鸟八',
      age:47
    })
    // 如果没有经过toRefs转换，那通过...state返回的数据非响应
    // toRefs可以把一个响应式对象转换为普通对象，该普通对象的每个property都是一个 ref
    // const state2 = toRefs(state)
    const {name,age} = toRefs(state)
    // 定时器，更新数据，（如果数据变化了，界面也会随之变化，肯定是响应式的数据）
    setInterval(()=>{
      // state2.name.value += '弱智皮大力'
      name.value += '弱智皮大力'
    },1000)

    const {name2,age2} = useFeatureX()
    return {
      // state
      // ...state // 不是响应式的数据了------> {name:'漩涡口鸟八',age:'弱智皮大力'}
      // ...state2 // toRefs 返回来的对象
      name,
      age,
      name2,
      age2
    }
  }
})
</script>

<style scoped>

</style>