<template>
  <Demo></Demo>
</template>
<!--
使用浅层次的响应式
1. 被shallowRef修饰的基本类型和ref一样
2. 被shallowRef修饰的对象类型，对象中的属性不能被修改，但是可以被替换掉
3. 被shallowReactive修饰的对象，只能对第一层数据的修改进行响应式
4. 被readonly修饰的对象，都不能被修改 obj =readonly(obj)
5. 被shallowReadonly修饰的对象的对象，只能第一层不能被修改
6. toRow:将一个由reactive修饰的对象，转为普通对象
7. markRaw:标记一个对象，使其永远不能成为响应式对象
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
