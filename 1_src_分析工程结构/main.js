// 引入的不在是vue构造函数，引入的是工厂函数
import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)
// 创建应用实例对象---app(类似于vue2的vm，但是比之前的轻量级)
// createApp(App).mount('#app')

// 给app挂在一个容器
app.mount('#app')
