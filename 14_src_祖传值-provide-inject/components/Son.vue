<template>
  <div class="son">
    <h4>后台组件Son, {{person}}</h4>
  </div>


</template>


<script>

  import {inject} from "vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Demo',

    setup() {

      let person = inject('person')

      return {person}
    },

  }
</script>

<style scoped>
  .son {
    background-color: orange;
    padding: 10px;
  }
</style>
