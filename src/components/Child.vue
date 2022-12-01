<template>
  <div class="child">
    <h3>子组件Child {{sum}}</h3>
  </div>
</template>

<script>

  import {ref} from 'vue'


  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Child',
    async setup() {
      let sum = ref(0)

      let p = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({sum})
        }, 3000)
      })

      return await p
    }

  }
</script>

<style scoped>
  .child {
    background-color: skyblue;
    padding: 10px;
  }

</style>
