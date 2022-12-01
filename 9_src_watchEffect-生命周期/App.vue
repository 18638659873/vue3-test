<template>
  <Demo></Demo>
</template>
<!--

watchEffect：监听数据变化
1. 不需要配置 监听属性，只需要写函数体
2. 在函数体中，用到了那个变量值，就会监视整个变量的变化，很智能

Vue3的声明周期和Vue2中的差不多，小差异：
1.名字改了： beforeDestroy->beforeUnmount
2.名字改了： destroy->unmounted


可以直接在配置项写
beforeCreate
create
beforeMount
mounted
beforeUpdate
updated
beforeUnmount
unmounted

如果要在setup中写，那就在以上名字之前加上一个on
onBeforeMount
onMounted
onBeforeUpdate
onUpdated
onBeforeUnmount
onUnmounted

注意，没有beforeCreate create，因为 setup的执行时机比他俩早，所以就代替了

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
