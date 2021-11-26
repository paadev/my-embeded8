import Vue from 'vue'
import MyEmbeded8 from './MyEmbeded8.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(MyEmbeded8),
}).$mount('#app')
