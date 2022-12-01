<template>

  <h1>显示点击鼠标的坐标</h1>
  <h1>x坐标：{{point.x}},y坐标：{{point.y}}</h1>

</template>

<script>

  import userPoint from "@/hooks/userPoint";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Demo',

    setup() {
      let point = userPoint()

      return {
        point,
      }

    },


  }
</script>

<style scoped>

</style>
