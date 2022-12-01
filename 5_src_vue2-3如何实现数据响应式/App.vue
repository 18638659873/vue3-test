<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>工作：{{person.type}}</h2>
  <h2>工资：{{person.salary}}</h2>
  <h2>爱好：{{person.hobby}}</h2>
  <h2>性别：{{person.sex}}</h2>
  <h2>测试reactive深层：{{person.a.b.c}}</h2>
  <button @click="changeInfo">修改属性</button>
  <button @click="addSex">添加性别</button>
  <button @click="delName">删除姓名</button>
</template>
<!--

使用reactive 的响应式 添加、修改属性字段,也是响应式的
1. 添加属性 person.sex='男'
2. 删除属性 delete person.name



响应式实现的方式
let person={name:'chong'}

1. vue2中使用的是Object.defineProperty
  Object.defineProperty(person, 'name', {
    get() {
      return person.name
    }, set(val) {
      person.name = val
    }
  })

2. vue3中使用的是windows.Proxy
  const p = new Proxy(person, {
        // 获取属性值时调用
        get(target, propName) {
          // return target[propName]
          return Reflect.get(target, propName)
        },
        // 修改属性，或者增加属性都会调用
        set(target, propName, val) {
          // target[propName] = val
          Reflect.set(target, propName, val)
        },
        // 删除属性时候调用
        deleteProperty(target, propName) {
          // return delete target[propName]
          return Reflect.defineProperty(target, propName)
        }
      }
  )


-->

<script>
  import {reactive} from 'vue'



  export default {
    name: 'App',

    setup() {

      let person = reactive({
        name: '崇',
        age: 16,
        type: '前端工程师',
        salary: '80k',
        a: {
          b: {
            c: 999
          }
        },
        hobby: ['抽烟', '喝酒', '烫头']
      })


      function changeInfo() {
        person.type = 'UI设计师'
        person.a.b.c = 999
        person.hobby[0] = '学习'
      }

      function addSex() {
        person.sex = '男'

      }

      function delName() {
        delete person.name

      }

      return {
        person,
        changeInfo,
        addSex,
        delName,
      }
    },

  }
</script>

<style>
</style>
