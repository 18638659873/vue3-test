<template>

  <h1>人员信息：{{person}}</h1>
  <h2>名称{{name}}</h2>
  <h2>年龄{{age}}</h2>
  <h2>薪资{{job.salary}}K</h2>
  <button @click="person.name+='~'">修改名称</button>
  <button @click="person.age++">增加年龄</button>
  <button @click="person.job.salary++">涨薪</button>


</template>

<script>


  import {reactive, toRef, toRefs} from "vue";

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
        // 使用toRef把对象中的某一个属性暴露出去
        // name: toRef(person, 'name'),
        // age: toRef(person, 'age'),
        // salary: toRef(person.job, 'salary'),

        // 可以使用toRefs把一个对象上的一批属性都暴露出去,这里只会暴露出去这个对象的第一层
        ...toRefs(person)
      }

    },


  }
</script>

<style scoped>

</style>
