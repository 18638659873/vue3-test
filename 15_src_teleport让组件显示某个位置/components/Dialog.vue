<template>
  <div>
    <button @click="flag=true">点击弹窗</button>
    <teleport to="body">
      <div class="mask" v-if="flag">
        <div class="dialog">
          <h5>一些内容</h5>
          <h5>一些内容</h5>
          <h5>一些内容</h5>
          <h5>一些内容</h5>
          <h5>一些内容</h5>
          <button @click="flag=false">关闭弹窗</button>
        </div>
      </div>
    </teleport>

  </div>
</template>

<script>


  import {ref} from "vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Dialog',
    setup() {

      let flag = ref(false)

      return {
        flag,
      }
    }
  }
</script>

<style scoped>
  .dialog {
    background-color: aquamarine;
    padding: 10px;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }


</style>
