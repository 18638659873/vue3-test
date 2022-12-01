<template>
  <div class="app">
    <h3>APP组件</h3>
    <Child></Child>
  </div>

</template>
<!--

使用teleport，传送一个组件，使他不影响原有组件的布局
to="body"  指定要把这个组件传动到哪里，可以是DOM元素，也可以是样式等

-->

<script>

  import Child from "@/components/Child";


  export default {
    name: 'App',
    components: {Child},
    setup() {

    }

  }
</script>

<style scoped>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>
