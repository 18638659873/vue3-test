<template>

  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{sex}}</h2>
  <button @click="sayHello">Say3</button>
  <button @click="sayWelcome">Say2</button>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        sex: '男'
      }
    },
    methods: {
      sayWelcome() {
        alert('Welcome')
      }
    },

    setup() {

      // 定义数据 ，这里只是演示，暂时没有考虑响应式
      let name = '崇'
      let age = 18

      //定义函数
      function sayHello() {
        alert(`我叫${name},我${age}岁了，你好呀`)
      }

      // 返回页面结果数据
      return {
        name,
        age,
        sayHello
      }


      // 返回一个渲染函数
      // return () => h('h1', 'chong')
    },


  }
</script>

<style>
</style>
