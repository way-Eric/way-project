import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick'
import store from './vuex'
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate)

FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
