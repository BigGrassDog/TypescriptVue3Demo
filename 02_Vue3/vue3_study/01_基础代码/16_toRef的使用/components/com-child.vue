<template>
  <h2>child 子级组件</h2>
  <h3>age:{{age}}</h3>
  <h3>length:{{length}}</h3>
</template>

<script lang="ts">
import { computed, defineComponent,Ref,toRef } from 'vue'
function useGetLength(age:Ref){
  return computed(()=>{
    return age.value.toString().length
  })
}
export default defineComponent({
  name:'com-child',
  props:{
    age:{
      type:Number,
      required:true // 必须的
    }
  },
  setup (props) {
    const length = useGetLength(toRef(props,'age'))

    return {
      length
    }
  }
})
</script>

<style scoped>

</style>