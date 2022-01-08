import Vue from 'vue'
import App from './App.vue'

import "animate.css/animate.css"
import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"


Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
