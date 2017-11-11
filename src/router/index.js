import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Search from '@/pages/search/search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
    
  ]
})
