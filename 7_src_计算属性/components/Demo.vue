<template>
  <h1>一个人的信息</h1>

  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <br>
  <span>全名:{{person.fullName}}</span>
  <br>
  全名：<input type="text" v-model="person.fullName">

</template>

<script>
  import {reactive, computed} from "vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Demo',

    setup(props, context) {
      console.log('setup:', props, context)

      let person = reactive({
        firstName: 'zhang',
        lastName: 'san',
      })

      // 这个计算属性是vue2中的写法
      // computed: {
      //   fullName() {
      //     return this.person.firstName + this.person.lastName
      //   }
      // },

      // vue3中的计算属性的写法是 简写形式
      // person.fullName = computed(() => {
      //   return person.firstName + '-' + person.lastName
      // })

      // 计算属性完整写法
      person.fullName = computed({
            get() {
              return person.firstName + '-' + person.lastName
            },
            set(val) {
              const nameArr = val.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
            }
          }
      )

      return {
        person,
      }
    },

  }
</script>

<style scoped>

</style>
