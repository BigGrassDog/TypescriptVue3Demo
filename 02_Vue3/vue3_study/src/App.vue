<template>
<h2>reactive 的使用</h2>
<h3>名字：{{user.name}}</h3>
<h3>年龄：{{user.age}}</h3>
<h3>媳妇儿：{{user.wife}}</h3>
<button @click="updateUser">修改数据</button>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue';

export default defineComponent({
  name: 'App',

  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据

  /**
   * 作用: 定义多个数据的响应式
   * const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
   * 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
   * 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
   */

  setup(){
    const obj:any = {
      name:'xiaoming',
      age:20,
      wife:{
        name:'xiaohong',
        age:20,
        cars:['奔驰','宝马','奥迪']
      }
    }

    // 把数据变成响应式数据
    // 返回的是一个 proxy 的代理对象，被代理的目标对象就是 obj 对象
    // user 现在就是代理对象，obj 是目标对象
    // user 对象的类型是 Proxy
    const user = reactive(obj)
    console.log(user);    

    // 方法
    const updateUser = ()=>{
      // 直接使用目标对象的方式来更新目标对象中的成员的值，是不可能的，只能使用代理对象的方式来更新数据（响应式数据）
      // obj.name += '======'
      // 下面的可以
      // user.name += '=='
      // user.age += 2
      // user.wife.name += '++'
      // user.wife.cars[0] = '玛莎拉蒂'

      // user ----> 代理对象；user ------> 目标对象
      // user 对象或者 obj 对象添加一个新的属性，哪一种方式会影响界面的更新
      obj.gender = '男'
      // user 对象或者 obj 对象中移除一个已经存在的属性，哪一种方式会影响界面的更新
    }
    return {
      user,
      updateUser
    }
  }
});
</script>
