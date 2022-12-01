<template>
  <Demo></Demo>
</template>
<!--

自定义一个函数，实现ref的响应式功能，借助于vue的customRef
1. import customRef from 'vue'
2. 定义函数进行使用,实现他的get set方法，以及使用track trigger 进行通知和跟踪值的变化

-->


<script>

  import Demo from "@/components/Child";

  export default {
    name: 'App',
    components: {Demo},

    setup() {

    }

  }
</script>

<style>
</style>
