import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Delete from './views/Delete.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete
    }
  ]
})
