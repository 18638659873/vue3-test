<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <button @click="test">测试Demo组件上的Hello事件</button>
</template>

<script>
  import {reactive} from "vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Demo',

    // beforeCreate() {
    //   console.log('beforeCreate is runing')
    // },

    props: ['msg'],

    emits: ['sayHello'],

    setup(props, context) {
      console.log('setup:', props, context)

      let person = reactive({
        name: '崇',
        age: 16,
      })


      function test() {
        context.emit('sayHello', 666)
      }

      return {
        person,
        test,
      }
    },

  }
</script>

<style scoped>

</style>
