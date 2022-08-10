<template>
<h3>Son子级组件</h3>
<hr>
<com-grandson></com-grandson>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import comGrandson from './com-grandson.vue'

export default defineComponent({
  components: { comGrandson },
  setup () {
    

    return {}
  }
})
</script>

<style scoped>

</style>