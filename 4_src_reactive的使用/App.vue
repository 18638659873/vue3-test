<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工作：{{job.type}}</h2>
  <h2>工资：{{job.salary}}</h2>
  <h2>爱好：{{hobby}}</h2>
  <h2>测试reactive深层：{{job.a.b.c}}</h2>
  <button @click="changeInfo">修改属性</button>
</template>
<!--

定义一个响应式的数据
1. 引入ref
import {ref} from 'vue'
2. 定义使用
const xxx =ref('???')
3. 插值使用{{xxx}}

接受的数据可以是基本类型的，也可以是对象类型
基本类型的数据：响应式依靠的是 Object.defineProperty() 的get 和set方法
对象类型的数据：响应式使用的是Proxy  Vue3.0中的一个新函数 reactive函数


基本类型用：ref
对象类型用：reactive

-->

<script>
  import {ref, reactive} from 'vue'

  export default {
    name: 'App',

    setup() {

      let name = ref('崇')

      let age = ref(18)

      let job = reactive({
        type: '前端工程师',
        salary: '80k',
        a: {
          b: {
            c: 999
          }
        }
      })

      let hobby = reactive(['抽烟', '喝酒', '烫头'])

      function changeInfo() {
        name.value = '小崇'
        age.value = 20
        job.type = 'UI设计师'
        job.a.b.c = 999
        hobby[0] = '学习'
      }

      return {
        name,
        age,
        job,
        hobby,
        changeInfo
      }
    },

  }
</script>

<style>
</style>
