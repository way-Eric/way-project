import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate)
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
