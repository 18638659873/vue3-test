<template>
  <div class="app">
    <h3>父组件APP 姓名：{{name}},年龄：{{age}}</h3>
    <Child></Child>
  </div>

</template>
<!--

一般情况下，祖组件传值，子组件直接使用props就可以了，但是想往后代传就麻烦了，所以这里使用provide 和inject
1. 分别引入 provide 和 inject
2. 父组件上提供数据 provide
3. 后台组件需要使用是 inject

-->

<script>

  import Child from "@/components/Child";
  import {reactive, toRefs, provide} from "vue";


  export default {
    name: 'App',
    components: {Child},
    setup() {
      let person = reactive({
        name: 'zhangsan',
        age: 12
      })

      provide('person', person)

      return {
        ...toRefs(person)
      }

    }

  }
</script>

<style scoped>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>
