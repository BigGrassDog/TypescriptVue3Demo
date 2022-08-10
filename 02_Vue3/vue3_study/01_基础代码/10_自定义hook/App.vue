<template>
  <h2>自定义 hook 函数操作</h2>
  <h2>x:{{x}},y:{{y}}</h2>
  <h3 v-if="loading">中森明菜正在冲刺...</h3>
  <h3 v-else-if="errorMsg">错误信息：{{errorMsg}}</h3>
  <ul v-else>
    <li>id:{{data.id}}</li>
    <li>address:{{data.address}}</li>
    <li>distance:{{data.distance}}</li>
  </ul>
  <ul>
    <li v-for="(item,index) in data" :key="index">
      <div>id:{{item.id}}</div>
      <div>title:{{item.title}}</div>
      <div>price:{{item.price}}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent,watch } from 'vue'
import useMousePosition from './hooks/useMousePositions'
import useRequest from './hooks/useRequest'

// 定义接口，约束对象的类型
interface IAddressData{
  id:number;
  address:string;
  distance:string;
}

interface IProductsData{
  id:string;
  title:string;
  price:number;
}

export default defineComponent({
  name:'App',
  // 需求1:用户在页面中点击页面，把惦记的位置的纵横坐标收集起来并展示出来
  setup () {
    const {x,y} = useMousePosition()
    // 发送请求
    // const {loading,data,errorMsg} = useRequest<IAddressData>('/data/address.json') // 获取对象数据
    const {loading,data,errorMsg} = useRequest<IProductsData[]>('/data/products.json') // 获取数组数据

    // 监视
    watch(data,()=>{
      if(data.value){
        console.log(data.value.length);
        
      }
    })

    return {
      x,
      y,
      loading,
      data,
      errorMsg
    }
  }
})
</script>

<style scoped>
</style>