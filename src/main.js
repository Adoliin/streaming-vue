import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import '@/assets/tailwind.css'
import '@/configs/icons.js'

//Setting Plyr as a JS library
import Plyr from 'plyr'
Object.defineProperty(Vue.prototype, '$plyr', { value: Plyr});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
