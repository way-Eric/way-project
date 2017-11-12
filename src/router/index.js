import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Search from '@/pages/search/search'
import City from '@/pages/city/city'
import Details from '@/pages/details/details'
import Reserve from '@/pages/reserve/reserve'
import Tourism from '@/pages/tourism/tourism'
import List from '@/pages/list/List'

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
      name: 'Search',
      component: Search
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/reserve',
      name: 'Reserve',
      component: Reserve
    },
    {
      path: '/tourism',
      name: 'Tourism',
      component: Tourism
    },{
	    path: '/list',
	    name: 'List',
	    component: List
    }
  ]
})
