import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick'
import store from './vuex'
import VuePaginate from 'vue-paginate'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import AMap from 'vue-amap'
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: 'c6990f917abbe9a43dae2b868ea726bc',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})
Vue.use(VuePaginate)
FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
