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
  import {reactive, ref, watch} from "vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Demo',

    // vue2中的监听机制
    // watch: {
    //   sum(newVal, oldVal) {
    //     console.log('监听sum:', newVal, oldVal)
    //   }
    // },

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

      // vue3中的监听机制
      // 情况一：监视ref中所定义的一个响应式数据
      // watch(sum, (newVal, oldVal) => {
      //   console.log('watch sum:', oldVal, newVal)
      // })

      // 情况二：监视ref中所定义的多个响应式数据
      // watch([sum, msg], (newVal, oldVal) => {
      //   console.log('watch sum and msg:', oldVal, newVal)
      // })

      // 情况三：reactive中所以定义的响应式全部数据,
      // 1. 这里监视发现新和旧得是一模一样的，BUG
      // 2. 并且这个deep是无效的，即使关闭了 仍然开启深度监视
      // watch(person, (newVal, oldVal) => {
      //   console.log('watch person:', oldVal, newVal)
      // }, {immediate: false, deep: true})

      // 情况四：reactive中所以定义的响应式某一个数据,
      watch(() => person.age, (newVal, oldVal) => {
        console.log('watch person‘s age:', oldVal, newVal)
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
