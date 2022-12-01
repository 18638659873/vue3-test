<template>
  <div class="son">
    <h4>后台组件Son</h4>
    <Dialog></Dialog>
  </div>
</template>

<script>

  import Dialog from "@/components/Dialog";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Son',
    components: {Dialog},

    setup() {


    },

  }
</script>

<style scoped>
  .son {
    background-color: orange;
    padding: 10px;
  }
</style>
