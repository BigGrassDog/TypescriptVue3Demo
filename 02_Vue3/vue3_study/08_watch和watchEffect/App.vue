<template>
  <div>
    <h2>计算属性和监视</h2>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input v-model="user.firstName" type="text" placeholder="请输入姓氏"><br />
      名字：<input v-model="user.lastName" type="text" placeholder="请输入名字">
    </fieldset>
    <fieldset>
      <legend>计算属性和监视的演示</legend>
      姓名：<input v-model="fullName1" type="text" placeholder="请输入姓名"><br />
      姓名：<input v-model="fullName2" type="text" placeholder="请输入姓名"><br />
      姓名：<input v-model="fullName3" type="text" placeholder="请输入姓名">
    </fieldset>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed, watch, watchEffect } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    // 定义一个响应式对象
    const user = reactive({
      firstName: '中森',
      lastName: '明菜'
    })
    // 通过计算属性的方式实现第一个姓名的展示
    // vue3 中的计算属性
    // 计算属性的函数中如果只传入一个回调函数，表示的是get

    // 第一个姓名：
    // 返回的是一个 Ref 类型的对象
    const fullName1 = computed(() => {
      return user.firstName + '-' + user.lastName
    })
    // 第二个姓名：
    const fullName2 = computed({
      get() {
        return user.firstName + '-' + user.lastName
      },
      set(val) {
        const names = val.split('-')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    // 第三个姓名：
    const fullName3 = ref('')
    // 监视 ----- 监视指定的数据
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + '-' + lastName
      },
      { immediate: true, deep: true }
    )
    // immediate 默认会执行一次 watch ， deep 深度监视

    // 监视,不需要配置 immediate 本身默认就会进行监视，（默认执行一次）
    // watchEffect(()=>{
    //   fullName3.value = user.firstName + '-' + user.lastName
    // })

    // 监视 fullName3 的数据，改变 firstName 和 lastName
    watchEffect(() => {
      const names = fullName3.value.split('-')
      user.firstName = names[0]
      user.lastName = names[1]
    })

    // watch --- 可以监视多个数据
    // watch([user.firstName,user.lastName],()=>{
    //   // 这里的代码就没有执行，fullName3 是响应式的数据，但是 user.firstName 和 user.lastName 不是响应式数据
    //   console.log('======');
    // })

    // 当我们使用 watch 监视非响应式的数据的时候
    watch([()=>user.firstName, ()=>user.lastName,fullName3], () => {
      // 这里的代码就没有执行，fullName3 是响应式的数据，但是 user.firstName 和 user.lastName 不是响应式数据
      console.log('======')
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
})
</script>

<style lang="scss" scoped>
</style>