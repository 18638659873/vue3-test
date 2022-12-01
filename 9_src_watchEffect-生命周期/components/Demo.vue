<template>

  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点击+1</button>
  <br>
  <h2>显示msg信息{{msg}}</h2>
  <button @click="msg+='!'">点击修改msg</button>
  <br>
  <h2>名称{{person.name}}</h2>
  <h2>年龄{{person.age}}</h2>
  <h2>薪资{{person.job.salary}}K</h2>
  <button @click="person.name+='~'">修改名称</button>
  <button @click="person.age++">增加年龄</button>
  <button @click="person.job.salary++">涨薪</button>
</template>

<script>
  import {reactive, ref, watchEffect} from "vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Demo',

    setup() {

      let sum = ref(0)

      let msg = ref('hello')

      let person = reactive({
        name: 'zhangsan',
        age: 12,
        job: {
          salary: 20
        }
      })

      // 使用watchEffect监听，在函数体中，用到了那个变量 就会监视整个变量，比较灵活
      watchEffect(() => {
        let sum1 = sum.value
        let salary = person.job.salary
        console.log('watchEffect execute')
      })

      return {
        sum,
        msg,
        person,
      }

    },


  }
</script>

<style scoped>

</style>
