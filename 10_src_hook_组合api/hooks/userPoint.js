import {reactive, onMounted, onUnmounted} from "vue";

export default function () {

  //定义坐标对象
  let point = reactive({
    x: 0,
    y: 0
  })

  //获取点击事件，保存坐标
  function savePoint(event) {
    point.x = event.pageX
    point.y = event.pageY
  }

  //页面挂载时绑定点击事件
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  // 页面卸载时，接触绑定事件
  onUnmounted(() => {
    window.removeEventListener('click', savePoint)
  })

  return point

}