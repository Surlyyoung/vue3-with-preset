import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const app = createApp(App)

// 指令--关闭
app.directive('closeModel', {
  beforeMount(el, binding) {
    console.dir(binding);
    function clickHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      // 判断指令中是否绑定了函数
      if (!el.contains(e.target)) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        if(typeof binding.value == 'function') binding.value(e);
      }
    }

    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = clickHandler;
    document.getElementById('app').addEventListener('click', clickHandler);
  },
  unmounted(el) {
    // 解除事件监听
    document.getElementById('app').removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
})

app.use(store).use(router).mount('#app')
