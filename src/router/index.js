import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from '@/pages/home/Home'
=======
import home from '@/pages/home/home.vue'
>>>>>>> 147fef6dc062474905e4d48781722b5f29013a96

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'Home',
      component: Home
=======
      name: 'home',
      component: home
>>>>>>> 147fef6dc062474905e4d48781722b5f29013a96
    }
  ]
})
