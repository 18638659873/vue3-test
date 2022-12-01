<template>
  <div class="app">
    <h3>APP组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h4>页面正在加载中...</h4>
      </template>
    </Suspense>
  </div>

</template>
<!--


使用suspence
作用： 指定异步组件加载时候的策略，加入内部组件加载比较慢时，要使用一个插槽加载默认页面，等数据加载完毕后显示正常组件
1. 使用异步组件引入 defineAsyncComponent
2. 使用Suspense

-->

<script>

  import {defineAsyncComponent} from 'vue'

  const Child = defineAsyncComponent(() => import('@/components/Child'))

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
