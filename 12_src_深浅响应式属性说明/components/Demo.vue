<template>

  <h1>人员信息：{{person}}</h1>
  <h2>名称{{person.name}}</h2>
  <h2>年龄{{person.age}}</h2>
  <h2>薪资{{person.job.salary}}K</h2>
  <button @click="person.name+='~'">修改名称</button>
  <button @click="person.age++">增加年龄</button>
  <button @click="person.job.salary++">涨薪</button>

</template>




<script>


  import {reactive, ref, shallowReactive, shallowRef,readonly} from "vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Demo',

    setup() {
      let person = reactive({
        name: 'zhangsan',
        age: 12,
        job: {
          salary: 20
        }
      })

      return {
        person,
      }

    },


  }
</script>

<style scoped>

</style>
