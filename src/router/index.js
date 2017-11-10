import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Details from '@/pages/details/details'
import City from '@/pages/city/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
