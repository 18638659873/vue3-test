<template>
  <Demo @sayHello="showHelloMsg" msg="hello">
    <!--    传递一个默认插槽-->
    <!--    <span>崇</span>-->
    <!--    传递一个定义名称的插值-->
    <template v-slot:testslot>
      <span>hello world</span>
    </template>
  </Demo>
</template>
<!--

1. setup的执行时间要比 Vue生命周期的beforeCreate还要早，所有不能使用this
2. setup函数上有两个参数：props：组件 context：上下文，上下文中有 attrs slots emit
3. 在父组件中向子组件传值 props接受 和2是一样的
4. 父触发子组件绑定的事件 子组件中接受 emits


attrs： 会接收 父组件传的值，如果子组件没有通过props接收，他就会出现在这里面 一个兜底的
slots： 父组件传递的插槽名称 v-slot:xxx 定义的
emit： 发布事件时候使用的， 当然其他组件要订阅这个事件

-->

<script>

  import Demo from "@/components/Child";

  export default {
    name: 'App',
    components: {Demo},

    setup() {

      function showHelloMsg(val) {
        alert(`'收到了子组件的触发事件:${val}`)
      }

      return {
        showHelloMsg,
      }
    }

  }
</script>

<style>
</style>
