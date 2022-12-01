<template>


  <input type="text" v-model="testRef">
  <br>
  <h1>值为：{{testRef}}</h1>

</template>


<script>

  import {customRef} from "vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Demo',

    setup() {

      function myRef(value) {
        let timer
        return customRef((track, trigger) => {
          return {
            get() {
              track()
              return value
            },
            set(newValue) {
              clearTimeout(timer)
              timer = setTimeout(() => {
                value = newValue
                trigger()
              }, 1000)

            }
          }
        })
      }

      let testRef = myRef('hello')

      return {
        testRef,
      }

    },


  }
</script>

<style scoped>

</style>
