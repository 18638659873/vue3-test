<template>
  <div class="child">
    <h3>子组件Child</h3>
    <Son></Son>
  </div>
</template>

<script>

  import Son from "@/components/Son";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Demo',
    components: {Son}

  }
</script>

<style scoped>
  .child {
    background-color: skyblue;
    padding: 10px;
  }

</style>
