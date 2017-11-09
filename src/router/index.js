import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Tourism from '@/pages/Tourism/Tourism'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Tourism',
      name: 'Tourism',
      component: Tourism
    }

  ]
})
